let box;
let lastCircle = null;
let boxBounds = {};

export function createCircle() {
    document.addEventListener("click", handleClick);
}

function handleClick(event) {
    const circle = document.createElement("div");
    circle.className = "circle";
    setCirclePosition(circle, event.clientX, event.clientY);
    document.body.appendChild(circle);
    lastCircle = circle;

    updateBoxBounds();

    if (isCircleInsideBox(event.clientX, event.clientY)) {
        circle.style.background = "var(--purple)";
    } else {
        circle.style.background = "white";
    }
}

function setCirclePosition(circle, x, y) {
    const radius = 25;
    circle.style.left = `${x - radius}px`;
    circle.style.top = `${y - radius}px`;
}

function updateBoxBounds() {
    if (box) {
        const boxRect = box.getBoundingClientRect();
        boxBounds = {
            left: boxRect.left,
            right: boxRect.right,
            top: boxRect.top,
            bottom: boxRect.bottom
        };
    }
}

function isCircleInsideBox(x, y) {
    return (
        x >= boxBounds.left + 25 &&
        x <= boxBounds.right - 25 &&
        y >= boxBounds.top + 25 &&
        y <= boxBounds.bottom - 25
    );
}

export function moveCircle() {
    document.addEventListener("mousemove", handleMouseMove);
}

function handleMouseMove(event) {
    if (lastCircle) {
        setCirclePosition(lastCircle, event.clientX, event.clientY);

        if (isCircleInsideBox(event.clientX, event.clientY)) {
            lastCircle.style.background = "var(--purple)";
            constrainCircleWithinBox(event.clientX, event.clientY);
        }
    }
}

function constrainCircleWithinBox(x, y) {
    const radius = 25;

    if (x - radius < boxBounds.left) {
        lastCircle.style.left = `${boxBounds.left}px`;
    }
    if (x + radius > boxBounds.right) {
        lastCircle.style.left = `${boxBounds.right - radius * 2}px`;
    }
    if (y - radius < boxBounds.top) {
        lastCircle.style.top = `${boxBounds.top}px`;
    }
    if (y + radius > boxBounds.bottom) {
        lastCircle.style.top = `${boxBounds.bottom - radius * 2}px`;
    }
}

export function setBox() {
    box = document.createElement("div");
    box.className = "box";
    document.body.appendChild(box);
}