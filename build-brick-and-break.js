export { build, repair, destroy };

const build = (count) => {
    const interval = setInterval(() => {
        if (count-- <= 0) return clearInterval(interval);
        const brick = document.createElement('div');
        brick.id = `brick-${count + 1}`;
        if (count % 3 === 1) brick.dataset.foundation = 'true';
        document.body.append(brick);
    }, 100);
}

const repair = (...ids) => {
    ids.forEach(id => {
        const brick = document.getElementById(id);
        if (brick) {
            brick.dataset.repaired = brick.dataset.foundation ? 'in progress' : 'true';
        }
    });
}

const destroy = () => {
    const bricks = document.querySelectorAll('div');
    if (bricks.length) bricks[bricks.length - 1].remove();
}