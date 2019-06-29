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
            setTimeout(() => {
                if(!isScrolledUpto(el, 100))
                    scrollToOffset(el, -50)
            }, 1000)
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