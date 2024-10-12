import { colors } from './fifty-shades-of-cold.data.js'
export { generateClasses, generateColdShades, choseShade }

const generateClasses = () => {
    const style = document.createElement('style')
    document.head.appendChild(style)
    style.textContent = colors.map(el => `.${el} { background: ${el}; }`).join('\n')
}

const generateColdShades = () => {
    colors.filter(el => /(aqua|blue|turquoise|green|cyan|navy|purple)/.test(el))
        .forEach(el => {
            const div = document.createElement('div')
            div.className = el
            div.textContent = el
            document.body.appendChild(div)
        })
}

const choseShade = (color) => {
    document.querySelectorAll('div').forEach(el => el.className = color)
}
