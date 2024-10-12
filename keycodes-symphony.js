export const compose = () => {
    document.addEventListener('keydown', e => {
        if (/^[a-z\s]$/i.test(e.key)) {
            const div = document.createElement('div');
            let color = (e.key.toLowerCase().charCodeAt(0) - 97) * 9
            div.className = 'note';
            div.textContent = e.key;
            div.style.background = `rgb(${color}, ${color}, ${color})`;
            document.body.append(div);
        }
        if (e.key === 'Backspace' && document.body.lastChild) {
            document.body.lastChild.remove();
        }
        if (e.key === 'Escape') {
            document.body.innerHTML = ''
        }
    });
}
