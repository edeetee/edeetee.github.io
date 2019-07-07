/// <reference path="./global.d.ts" />

function setup () {
  createCanvas(windowWidth, windowHeight)

  // /** @type {HTMLElement} */ let canvas = document.getElementsByClassName("p5Canvas")[0]
  document.body.onclick = (ev) => {
    // console.log()
    let target = ev.target
    if(target instanceof Node){
      // console.log(target)
      // console.log()

      if(!target.textContent)
        return randomize()
      
      if(target.firstChild){
        if(!target.firstChild.textContent.trim().length)
          return randomize()
        if(target.firstChild.firstChild)
          return randomize()
      }
    }
  }
  document.body.click()

  angleMode(RADIANS)
  colorMode(HSB)

  curveTightness(isLandscape ? 0.4 : 0)
  
  start = millis()
}

function randomize(){
  singleRender = true;
  timeOffset = -500000+random()*1000000
}

function windowResized(){
  singleRender = true;
  start += millis()-lastDrawMillis
  resizeCanvas(windowWidth, windowHeight)
}

let start = 0;
function curTime(){
  return millis()-start+timeOffset
}

let doDraw = true;
let isLandscape = true;
let mirror = false;

let backgroundEnabled = document.getElementById("toggleBackground")
let singleRender = false;

const frameVel = 0.05;
let avgFps = 30;
let lastDrawMillis = 0;
function draw(){
  if(!doDraw && !singleRender)
    return;

  avgFps += (frameRate()-avgFps)*frameVel;
  lastDrawMillis = millis()

  if(avgFps < 15){
    backgroundEnabled.click()
    console.log('disabled, avgFps: ' + avgFps)
  }

  singleRender = false;

  if(!isLandscape)
    drawWallpaper()
  else
    drawLandscape()
}

let pausedStart = 0;
backgroundEnabled.onclick = ev => {
  ev.stopPropagation();
  doDraw = !doDraw;
  backgroundEnabled.innerHTML = doDraw ? "Pause" : "Resume"

  //pauses spot on millis
  if(doDraw){
    avgFps = 60;
    start += millis()-lastDrawMillis
  }
}

document.getElementById("changeBackground").onclick = ev => {
  ev.stopPropagation();
  isLandscape = !isLandscape;
  curveTightness(isLandscape ? 0.3 : 0)
  singleRender = true;
}

let timeOffset = 0;

// let xPointInterval = 20
const timeScale = 1/80000

let timesSlow = 0;

function drawLandscape(){
  let time = curTime()*timeScale;


  const minTimes = 5
  const countTimes = 5
  //reduce quality
  if(frameRate() < 15){
    timesSlow++;
    if(timesSlow < minTimes+countTimes){
      console.log(`triggered ${timesSlow}, fps ${frameRate()}`)
    }
  }

  let xPointInterval = 20;
  xPointInterval = map(timesSlow, minTimes, minTimes+countTimes, xPointInterval, xPointInterval+400, true)

  noStroke()
  let y = 0;
  //positive y is down

  while(y < height){
    let yP = y/height;
    let singleH = map(y, height, 0, height*0.38, height*0.08)*2
    fill(0, 0, 100-yP*20)

    beginShape()
    // vertex(0, height)
    for(let x = -xPointInterval; x <= width+xPointInterval*2; x += xPointInterval){
      let xP = x/width;
      let xScale = 4*(1-0.999*cos(time*TWO_PI))*width/1920

      let offset = singleH/4
        - singleH * noise((mirror ? 0 : 100000)+xScale/2-xP*xScale, yP*0.8, time*5)
        
      curveVertex(x, y + offset)
    }
    vertex(width, height)
    vertex(0, height)

    endShape(CLOSE)

    y += singleH/2
  }
}
  

const size = 200;
const minBright = 85;

const xModInterval = 5000;
const yModInterval = 10000;

function drawWallpaper () {
  fill(0,0,minBright,0)
  stroke(0,0,0)
  strokeWeight(0.4)
  noStroke();

  const modX = size*2*t(xModInterval)
  const modY = size*2*t(yModInterval)
  const time = curTime()
  const fX = makeMap(-size*4, width+size*4);
  const fY = makeMap(-size*4, height+size*4);

  background(0, 0, minBright)
  let i = Math.floor(time/yModInterval)+Math.floor(time/xModInterval);
  for(let x = modX-size*2; x < width+size*2+modX; x+= size*2){
    for(let y = modY-size*2; y < height+size*2+modY; y += size*2){
      i++;
      let fx = fX(x)
      let fy = fY(y)

      // let nX = Math.floor(width/gridSize)
      // let i = Math.floor(fx*nX + fy*nX)
      
      translate(x, y)
      let heightI = 8000+fx*3000
      // let heightI = 5000

      let radius = size*(1.4 -0.5*ct(heightI*2) -0.8*ct(heightI*10));

      if(size < radius){
        let alpha = Math.min((radius-size)/(size), 1);
        fill(0, 0, i%2 == 0 ? minBright : 100, 1-alpha*0.8)
      } else{
        fill(0, 0, i%2 == 0 ? minBright : 100)
      }

      drawCircle(radius, 
        genWaveMap(1+Math.floor(t(heightI*2)*4), 0.1*st(heightI)), 
        t(heightI*4)*TWO_PI)

      translate(-x, -y)
    }
  }
}

function makeMap(low, high){
  return val => (val-low)/(high-low)
}

const circlePoints = 20

/**
 * 
 * @param {Number} radius
 * @param {ForEachCallback} waveMap 
 * @param {Number} offset 
 */
function drawCircle(radius, waveMap, offset){
  radius = radius || 100
  waveMap = waveMap || (x => x)
  offset = offset || 0

  let circle = fillArray(circlePoints, radius)
  //wavy offset
  .map(waveMap)
  //circle coordinates
  .map((radius, i, arr) => {
    let ang = i/circlePoints*TWO_PI+offset
    return createVector(radius*sin(ang), -radius*cos(ang))
  })

  drawCurve(circle)
}

function t(period){
  return curTime().mod(period)/period
}

function st(period){
  return sin(t(period)*TWO_PI)
}

function ct(period){
  return cos(t(period)*TWO_PI)
}

/**
 * generates the wave over the radius of a circle
 * @param {number} waves 
 * @param {Number} height 
 * @returns {ForEachCallback}
 */
function genWaveMap(waves, height){
  height = height || 0.2
  return (radius, i, arr) => radius+radius*height*cos(i/arr.length*TWO_PI*waves)
}

function drawCurve(points){
  beginShape()
  for(let i = -1; i < points.length+2; i++){
    let point = points[i.mod(points.length)]
    curveVertex(point.x, point.y)
  }
  endShape()
}

function fillArray(n, val){
  let array = []
  for(let i = 0; i<n; i++){
    array.push(val || i)
  }
  return array;
}

//mod helper
Number.prototype.mod = function(y){
  return this - y * floor(this / y)
}