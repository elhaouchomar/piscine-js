export {build, repair, destroy}

const build = (n) => {
    n++
    let counter = 1, start = 1, middle = false;
    let i = setInterval(function () {
        if (start === 4) start = 1;
        const newDiv = document.createElement('div');
        newDiv.id = 'brick-' + counter;
        if (start === 2) {
            newDiv.dataset.foundation = 'true';
        }
        document.body.append(newDiv);
        counter++
        start++
        if (counter === n) clearInterval(i)
    },100);
}

const repair = (...ids) => {
    for (let i = 0; i < ids.length; i++) {
        const brick = document.getElementById(ids[i]);
        if (brick === null) continue;
        if (brick.hasAttribute('data-foundation')) {
            brick.dataset.repaired = 'in progress';
        } else {
            brick.dataset.repaired = 'true';
        }
    }
}

const destroy = () => {
    let bricks = document.getElementsByTagName('div');
    let lBricks = bricks.length;
    let id = 'brick-' + lBricks;
    if (bricks[id] !== undefined) bricks[id].remove();
}