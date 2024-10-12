function generateLetters() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let fontSize = 11;
    let fontWeight = 300;
    let next = 39;

    for (let i = 0; i < 120; i++) {
        const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        const div = document.createElement('div');
        div.id = i.toString();
        div.textContent = randomLetter;
        div.style.fontSize = fontSize + 'px';
        div.style.fontWeight = fontWeight.toString();
        document.body.appendChild(div);

        if (i === next) {
            next += 40;
            fontWeight = (fontWeight === 300) ? 400 : 600;
        }
        fontSize++;
    }
}

export { generateLetters };
