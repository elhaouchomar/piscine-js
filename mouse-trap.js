let box
let lastCircle = null
let l, r, t, b
export function createCircle() {
    addEventListener("click", function (event) {
        let circle = document.createElement("div")
        circle.className = "circle"
        circle.style.left = event.clientX -25+ "px"
        circle.style.top = event.clientY -25+ "px"
        document.body.appendChild(circle)
        lastCircle = circle
        let boxRect = box.getBoundingClientRect()
        l = boxRect.left
        r = boxRect.right
        t = boxRect.top
        b = boxRect.bottom
        if (event.clientX >= l+25
            && event.clientX <= r-25
            && event.clientY >= t+25
            && event.clientY <= b-25) 
        {
            circle.style.background = "var(--purple)"

        } else {
            circle.style.background = "white"

        }
    })
}
export function moveCircle() {
    
    addEventListener("mousemove", event => {
        if (lastCircle) {
            lastCircle.style.left = event.clientX -25+"px"
            lastCircle.style.top = event.clientY -25+ "px"
            if (event.clientX >= l+26
                && event.clientX <= r -26&&
                event.clientY >= t +26&& 
                event.clientY <= b-26) 
            {
                lastCircle.style.background = 'var(--purple)'

            }
            if (lastCircle.style.background == 'var(--purple)') {
                if (event.clientX -25< l) {
                    lastCircle.style.left = l + "px"
                }
                if (event.clientX +25> r) {
                    lastCircle.style.left = r - 50 + "px"
                }
                if (event.clientY -25< t) {
                    lastCircle.style.top = t + "px"
                }
                if (event.clientY +25> b) {
                    lastCircle.style.top = b - 50+ "px"
                }
            }
        }
    })
}
export function setBox() {
    box = document.createElement("div")
    box.className = "box"
    document.body.appendChild(box)
}