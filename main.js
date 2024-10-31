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

const resultRow = getRow(firstRow, secondRow);

document.getElementById("result").textContent = `Рядок з більшою кількістю літер "a": "${resultRow}"`;


function formattedPhone(phone) {
    const countryCode = phone.slice(0, 3);
    const operatorCode = phone.slice(3, 6);
    const firstPart = phone.slice(6, 9);
    const secondPart = phone.slice(9, 11);
    const thirdPart = phone.slice(11, 13);

    return `${countryCode} (${operatorCode}) ${firstPart}-${secondPart}-${thirdPart}`;
}
const phoneNumber = '+380664567890';
const formattedNumber = formattedPhone(phoneNumber);

document.getElementById("phone-result").textContent = `Відформатований номер: ${formattedNumber}`;
