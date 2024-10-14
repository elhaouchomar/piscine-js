import { styles } from './pimp-my-style.data.js';
let contStyles = 0

export const pimp = () => {
    const btn = document.querySelector("button.button")
    const clsList = btn.classList

    if (!clsList.contains("unpimp")) {
        clsList.add(styles[contStyles])
        contStyles++
    } else {
        contStyles--
        clsList.remove(styles[contStyles])
        if (contStyles == 0) {
            clsList.toggle("unpimp")
        }
    }
    
    if (contStyles == styles.length) {
        clsList.toggle("unpimp")
    }
}