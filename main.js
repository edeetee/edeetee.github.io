/// <reference path="./global.d.ts" />

const hidePanels = document.querySelectorAll(".hideable")

const actionPanels = document.querySelectorAll('.action')

const cvButton = document.getElementById("cvButton")
cvButton.onclick = ev => {ev.stopPropagation(); displayClass(cvButton, 'displayCv')}

const portfolioButton = document.getElementById('portfolioButton')
portfolioButton.onclick = ev => {ev.stopPropagation(); displayClass(portfolioButton, 'displayPortfolio')}

/**
 *  
 * @param {HTMLElement} button
 * @param {String} className
 * */
function displayClass(button, className) {
    const displaying = document.getElementsByClassName(className)
    const first = displaying[0]
    const isHidden = !first.hidden;

    actionPanels.forEach(action => action.classList.remove("selected"))
    hidePanels.forEach(panel => panel.hidden = true)

    if(!isHidden){
        button.classList.add("selected")
        for (let i = 0; i < displaying.length; i++) {
            let el = displaying[i];
            el.hidden = isHidden
        }
    }
}

// function setup(){
//     createCanvas(windowWidth, windowHeight)
// }

// function windowResized(){
//     resizeCanvas(windowWidth, windowHeight)
// }


// function draw(){

// }