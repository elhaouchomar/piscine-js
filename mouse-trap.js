export { createCircle, moveCircle, setBox };

let radius = 25;

const createCircle = () => document.onclick = e => {
    document.body.append(Object.assign(document.createElement('div'), {
        className: 'circle',
        style: `left: ${e.clientX - radius}px; top: ${e.clientY - radius}px; background: ${e.target.classList.contains('box') ? 'var(--purple)' : 'white'}`
    }));
};

const moveCircle = () => document.onmousemove = e => {
    const last = document.body.lastChild;
    last.style.left = `${e.clientX - radius}px`;
    last.style.top = `${e.clientY - radius}px`;
};

const setBox = () => document.body.append(Object.assign(document.createElement('div'), { className: 'box' }));
