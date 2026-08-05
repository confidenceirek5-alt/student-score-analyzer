let scores = [78, 45, 90, 67, 31, 88, 56, 49, 70, 95];

let scoresList = document.getElementById("scoresList");
let totalEl = document.getElementById("total");
let averageEl = document.getElementById("average");
let highestEl = document.getElementById("highest");
let lowestEl = document.getElementById("lowest");
let passedEl = document.getElementById("passed");
let failedEl = document.getElementById("failed");
let aboveAverageList = document.getElementById("aboveAverage");

for (let i = 0; i < scores.length; i++) {
    let li = document.createElement("li");
    li.textContent = scores[i];
    scoresList.appendChild(li);
}

let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passed = 0;
let failed = 0;

for (let i = 0; i < scores.length; i++) {
    total += scores[i];

    if (scores[i] > highest) {
        highest = scores[i];
    }

    if (scores[i] < lowest) {
        lowest = scores[i];
    }

    if (scores[i] >= 50) {
        passed++;
    } else {
        failed++;
    }
}

let average = total / scores.length;

totalEl.textContent = total;
averageEl.textContent = average.toFixed(1);
highestEl.textContent = highest;
lowestEl.textContent = lowest;
passedEl.textContent = passed;
failedEl.textContent = failed;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > average) {
        let li = document.createElement("li");
        li.textContent = scores[i];
        aboveAverageList.appendChild(li);
    }
}