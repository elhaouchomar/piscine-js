export function build(numBricks) {
    const columns = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
    columns.forEach((col, index) => {
        col.className = 'column';
        col.id = `column-${index + 1}`;
        document.body.appendChild(col);
    });

    let count = 0;

    const interval = setInterval(() => {
        if (count < numBricks) {
            const brick = document.createElement('div');
            brick.className = 'brick';
            brick.id = `brick-${count + 1}`;
            if (count % 3 === 1) {
                brick.setAttribute('data-foundation', 'true');
            }
            columns[count % 3].appendChild(brick);
            count++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

export function repair() {
    const reparations = document.body.dataset.reparations.split(',');
    reparations.forEach(id => {
        const brick = document.getElementById(id);
        if (brick) {
            if (id.includes('brick-') && id.split('-')[1] % 3 === 2) {
                brick.setAttribute('data-repaired', 'in progress');
            } else {
                brick.setAttribute('data-repaired', 'true');
            }
        }
    });
}

export function destroy() {
    const columns = [
        document.getElementById('column-1'),
        document.getElementById('column-2'),
        document.getElementById('column-3')
    ];
    let lastBrick = null;
    for (let i = columns.length - 1; i >= 0; i--) {
        const column = columns[i];
        const bricks = column.getElementsByClassName('brick');
        if (bricks.length > 0) {
            lastBrick = bricks[bricks.length - 1];
            break;
        }
    }
    if (lastBrick) {
        lastBrick.remove();
    }
}
