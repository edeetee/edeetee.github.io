/// <reference path="./global.d.ts" />

const hidePanels = document.querySelectorAll(".hideable")

const actionPanels = document.querySelectorAll('.action')

const cvButton = document.getElementById("cvButton")
cvButton.onclick = ev => {ev.stopPropagation(); displayClass(cvButton, 'displayCv')}

const portfolioButton = document.getElementById('portfolioButton')
portfolioButton.onclick = ev => {ev.stopPropagation(); displayClass(portfolioButton, 'displayPortfolio')}

const portfolio = document.getElementById("portfolio")
goAwayGoogle(portfolio)

/**
 * 
 * @param {Node} el 
 */
function goAwayGoogle(el){
    if(el instanceof HTMLAnchorElement){
        el.href = el.href.replace("https://www.google.com/url?q=", "").replace(/&sa=D.*/g, "")
    }
    if(el.hasChildNodes())
        el.childNodes.forEach(child => goAwayGoogle(child))
}

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
            if(!isScrolledUpto(el, 300))
                scrollToOffset(el, -60)
        }
    }
}

/**
 * @param {Element} el 
 * @param {Number} [offset]
 */
function scrollToOffset(el, offset) {
    offset = offset || 0
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    window.scrollTo({
        top: elemTop+offset,
        behavior: "smooth"
    })
}

/**
 * @param {Element} el 
 * @param {Number} [offset]
 */
function isScrolledUpto(el, offset) {
    offset = offset || 0
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    return (elemTop+offset) < window.innerHeight;
}