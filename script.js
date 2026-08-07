
let inputContainer = document.getElementById("inputs");

for (let i = 0; i < 10; i++) {
    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Student " + (i + 1);
    input.classList.add("scoreInput");
    inputContainer.appendChild(input);
}

function generateReport() {
    let inputs = document.querySelectorAll(".scoreInput");
    let scores = [];

    inputs.forEach(input => {
        scores.push(Number(input.value));
    });

    let total = 0;
    let highest = scores[0];
    let lowest = scores[0];
    let passCount = 0;
    let failCount = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];

        if (scores[i] > highest) {
            highest = scores[i];
        }

        if (scores[i] < lowest) {
            lowest = scores[i];
        }

        if (scores[i] >= 50) {
            passCount++;
        } else {
            failCount++;
        }
    }

    let average = total / scores.length;

    let output = document.getElementById("output");

    let result = `
        <strong>All Scores:</strong><br>
        ${scores.join(", ")} <br><br>

        <strong>Total:</strong> ${total} <br>
        <strong>Average:</strong> ${average.toFixed(2)} <br>
        <strong>Highest:</strong> ${highest} <br>
        <strong>Lowest:</strong> ${lowest} <br>
        <strong>Passed:</strong> ${passCount} <br>
        <strong>Failed:</strong> ${failCount} <br><br>

        <strong>Above Average:</strong><br>
    `;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > average) {
            result += `Student ${i + 1}: ${scores[i]} <br>`;
        }
    }

    output.innerHTML = result;
}