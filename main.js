const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

function countAInRow(row) {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
        if (row.charAt(i).toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow) {
    const firstRowCount = countAInRow(firstRow);
    const secondRowCount = countAInRow(secondRow);

    return firstRowCount > secondRowCount ? firstRow : secondRow;
}

// Отримати рядок з більшою кількістю "a"
const resultRow = getRow(firstRow, secondRow);

// Відобразити результат на сторінці
document.getElementById("result").textContent = `Рядок з більшою кількістю літер "a": "${resultRow}"`;
