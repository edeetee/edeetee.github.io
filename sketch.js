/// <reference path="./global.d.ts" />

function setup () {
  createCanvas(windowWidth, windowHeight)

  // /** @type {HTMLElement} */ let canvas = document.getElementsByClassName("p5Canvas")[0]
  document.body.onclick = (ev) => {
    singleRender = true;
    extraTime = -500000+random()*1000000
  }
  document.body.click()

  angleMode(RADIANS)
  colorMode(HSB)
}

function windowResized(){
  singleRender = true;
  resizeCanvas(windowWidth, windowHeight)
}

let doDraw = true;
let isLandscape = true;
let mirror = false;

let backgroundEnabled = document.getElementById("toggleBackground")
let singleRender = false;
let lastRender;

const frameVel = 0.05;
let avgFps = 60;
function draw(){
  if(!doDraw && !singleRender)
    return;

  lastRender = millis()

  avgFps += (frameRate()-avgFps)*frameVel;
  console.log(avgFps)

  if(avgFps < 20)
    backgroundEnabled.click()

  singleRender = false;

  if(!isLandscape)
    drawWallpaper()
  else
    drawLandscape()
}

backgroundEnabled.onclick = ev => {
  ev.stopPropagation();
  doDraw = !doDraw;
  backgroundEnabled.innerHTML = doDraw ? "Pause" : "Resume"

  //pauses spot on millis
  if(doDraw){
    extraTime -= (millis()-lastRender)
    avgFps = 60;
  }
}

document.getElementById("changeBackground").onclick = ev => {
  ev.stopPropagation();
  isLandscape = !isLandscape;
  singleRender = true;
}

let curFactor = 0;
const curFactorVelocity = 0.08;
function scrollFactor(){
  // return ((mouseX/width)+(mouseY/height))/2
  curFactor += (scrollY/height-curFactor)*curFactorVelocity
  return curFactor;
}

let extraTime = 0;


const maxFactor = 0.5;
const minFactor = 0.1;
const points = 30
const timeScale = 1/100000

function drawLandscape(){
  let time = (millis()+extraTime)*timeScale+scrollFactor()/60;

  background('white')
  noStroke()
  let y = 0;

  while(y < (height)){
    let yP = y/height;
    let singleH = map(y, height, 0, height*maxFactor, height*minFactor)*2
    fill(0, 0, 100-yP*20)

    beginShape()
    for(let x = -1; x <= points+1; x++){
      let xP = x/points;
      let xScale = (7-6.99*cos(time*TWO_PI))
        
      curveVertex(map(x, 0, points, 0, width),
        y + singleH/2 - singleH*noise((mirror ? 0 : 100000)+xScale/2-xP*xScale, yP*2, time))
    }
    vertex(width, height)
    vertex(0, height)
    vertex(-100, height)
    vertex(-200, height)

    endShape()

    y += map(y, height, 0, height*maxFactor, height*minFactor)
  }
}
  

const gridSize = 200;
const minBright = 85;

const xModInterval = 5000;
const yModInterval = 10000;

function drawWallpaper () {
  fill(0,0,minBright,0)
  stroke(0,0,0)
  strokeWeight(0.4)
  noStroke();

  let modX = gridSize*2*t(xModInterval)
  let modY = gridSize*2*t(yModInterval)
  let fX = makeMap(-gridSize*4, width+gridSize*4);
  let fY = makeMap(-gridSize*4, height+gridSize*4);

  let time = millis()+extraTime;

  background(0, 0, minBright)
  let i = Math.floor(time/yModInterval)+Math.floor(time/xModInterval)
  
  for(let x = modX-gridSize*2; x < width+gridSize*2+modX; x+= gridSize*2){
    for(let y = modY-gridSize*2; y < height+gridSize*2+modY; y += gridSize*2){
      i++;

      let fx = fX(x)
      let fy = fY(y)
      
      translate(x, y)
      let heightI = 8000+fx*3000
      // let heightI = 5000

      let radius = gridSize*(1.4 -0.5*ct(heightI*2) -0.8*ct(heightI*10));

      if(gridSize < radius){
        let alpha = Math.min((radius-gridSize)/(gridSize), 1);
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

  let points = 20

  let circle = fillArray(points, radius)
  //wavy offset
  .map(waveMap)
  //circle coordinates
  .map((radius, i, arr) => {
    let ang = i/points*TWO_PI+offset
    return createVector(radius*sin(ang), -radius*cos(ang))
  })

  drawCurve(circle)
}

function t(period){
  return (millis()+extraTime).mod(period)/period
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