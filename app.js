// Core Data
const credits = {
    IHS121: 1,
    ICS122: 4,
    ICS121: 5,
    IMA121: 4,
    ICS123: 4,
    IEC121: 5
};

const translation = {
    IHS121: "PERSONALITY DEVELOPMENT",
    ICS122: "COMPUTER ORGANISATION",
    ICS121: "DATA STRUCTURES",
    IMA121: "CALCULUS AND LINEAR ALGEBRA",
    ICS123: "IT WORKSHOP 2",
    IEC121: "DIGITAL DESIGN AND EC"
};

const timetable = {
    monday: [2, 1, 1, 0, 0, 1],
    tuesday: [0, 0, 2, 0, 0, 1],
    wednesday: [1, 1, 1, 1, 1, 1],
    thursday: [1, 1, 0, 0, 2, 1],
    friday: [1, 1, 0, 0, 1, 1]
};

const startofsem = new Date("2026-01-01");
const today = new Date();

const sem2 = {
    Monday: 14,
    Tuesday: 13,
    Wednesday: 13,
    Thursday: 14,
    Friday: 14
};

const subjects = ["ICS121", "ICS122", "ICS123", "IHS121", "IMA121", "IEC121"];

// State
let selectedSubject = null;

// UI Elements
const homeScreen = document.getElementById('home-screen');
const calcScreen = document.getElementById('calc-screen');
const subjectList = document.getElementById('subject-list');
const backToHome = document.getElementById('back-to-home');
const percentageInput = document.getElementById('percentage');
const resultsContainer = document.getElementById('results');

// Initialize Subject List
function init() {
    subjects.forEach(code => {
        const item = document.createElement('div');
        item.className = 'subject-item';
        item.innerHTML = `
            <div class="subject-info">
                <span class="subject-name">${translation[code]}</span>
                <span class="subject-code">${code}</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        `;
        item.addEventListener('click', () => selectSubject(code));
        subjectList.appendChild(item);
    });
}

function selectSubject(code) {
    selectedSubject = code;
    document.getElementById('current-subject-title').textContent = translation[code];
    document.getElementById('current-subject-code').textContent = code;
    
    homeScreen.classList.add('hidden');
    calcScreen.classList.remove('hidden');
    
    percentageInput.value = '';
    resultsContainer.classList.add('hidden');
}

backToHome.addEventListener('click', () => {
    calcScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
});

percentageInput.addEventListener('input', calculate);

function calculate() {
    const percentage = Number(percentageInput.value);
    if (!percentage || percentage < 0 || percentage > 100) {
        resultsContainer.classList.add('hidden');
        return;
    }

    const totalTaken = Number(((today - startofsem) / (1000 * 60 * 60 * 24) * credits[selectedSubject] / 7)).toFixed(0);
    const attended = (percentage / 100) * totalTaken;
    
    // Calculate total classes in sem
    let totalInSem = 0;
    const subjectIndex = subjects.indexOf(selectedSubject);
    for (const day in timetable) {
        const dayKey = day.charAt(0).toUpperCase() + day.slice(1);
        const dayCount = sem2[dayKey];
        const classes = timetable[day];
        totalInSem += classes[subjectIndex] * dayCount;
    }

    const future = totalInSem - totalTaken;
    
    // Logic for missable classes
    let missable = 0;
    while (true) {
        let finalAttendance = (attended + (future - missable)) / (Number(totalTaken) + future);
        if (finalAttendance <= 0.80) break;
        missable++;
        if (missable > future) break;
    }
    missable = Math.max(0, missable - 1);

    // Logic for required classes (if below 80% goal)
    // Here we assume the user wants to reach 80%
    // (attended + required) / (totalTaken + future_possible) >= 0.8
    // But let's stick to the user's original logic pattern for missable
    // and show "Required" as (future - missable) which is classes you MUST attend.
    
    document.getElementById('res-attended').textContent = attended.toFixed(0);
    document.getElementById('res-future').textContent = future;
    document.getElementById('res-missable').textContent = missable;
    document.getElementById('res-required').textContent = Math.max(0, future - missable);
    
    resultsContainer.classList.remove('hidden');
}

init();
