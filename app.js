// Core Data
const credits = {
  IHS121: 1,
  ICS122: 4,
  ICS121: 5,
  IMA121: 4,
  ICS123: 4,
  IEC121: 5,
  IEC122: 4 // Electronics Specialized Course
};

const translation = {
  IHS121: "PERSONALITY DEVELOPMENT",
  ICS122: "COMPUTER ORGANISATION",
  ICS121: "DATA STRUCTURES",
  IMA121: "CALCULUS AND LINEAR ALGEBRA",
  ICS123: "IT WORKSHOP 2",
  IEC121: "DIGITAL DESIGN AND EC",
  IEC122: "SIGNALS AND SYSTEMS"
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

// Data Structures
const branches = [
  { id: 'aids', name: 'AI & Data Science', icon: '🤖' },
  { id: 'cse', name: 'CSE Core', icon: '💻' },
  { id: 'cyber', name: 'Cyber Security', icon: '🔒' },
  { id: 'ece', name: 'Electronics (ECE)', icon: '⚡' }
];

// Default subjects for most branches
const defaultSubjects = ["ICS121", "ICS122", "ICS123", "IHS121", "IMA121", "IEC121"];
// Specialized map
const branchSubjects = {
  aids: defaultSubjects,
  cse: defaultSubjects,
  cyber: defaultSubjects,
  ece: ["ICS121", "ICS122", "IEC122", "IHS121", "IMA121", "IEC121"] // IEC122 instead of ICS123
};

// State
let selectedBranch = null;
let selectedSemester = null;
let selectedSubject = null;

// UI Elements
const branchScreen = document.getElementById('branch-screen');
const semScreen = document.getElementById('sem-screen');
const homeScreen = document.getElementById('home-screen'); // Subject List
const calcScreen = document.getElementById('calc-screen');

const branchGrid = document.getElementById('branch-grid');
const semesterGrid = document.getElementById('semester-grid');
const subjectList = document.getElementById('subject-list');

const backToBranch = document.getElementById('back-to-branch');
const backToSem = document.getElementById('back-to-sem');
const backToHome = document.getElementById('back-to-home');

const percentageInput = document.getElementById('percentage');
const resultsContainer = document.getElementById('results');

// Initialize App
function init() {
  renderBranches();
  renderSemesters();
}

function renderBranches() {
  branchGrid.innerHTML = '';
  branches.forEach(branch => {
    const item = document.createElement('div');
    item.className = 'branch-item';
    item.innerHTML = `
            <span class="branch-name">${branch.name}</span>
            <span class="branch-icon">${branch.icon}</span>
        `;
    item.addEventListener('click', () => selectBranch(branch.id));
    branchGrid.appendChild(item);
  });
}

function selectBranch(branchId) {
  selectedBranch = branchId;
  showScreen(semScreen);
}

function renderSemesters() {
  semesterGrid.innerHTML = '';
  for (let i = 1; i <= 8; i++) {
    const item = document.createElement('div');
    item.className = 'semester-item';
    item.innerHTML = `
            <span class="semester-number">${i}</span>
            <span class="semester-label">Semester</span>
        `;
    item.addEventListener('click', () => selectSemester(i));
    semesterGrid.appendChild(item);
  }
}

function selectSemester(sem) {
  if (sem !== 2) {
    alert("Data for Semester " + sem + " is coming soon!");
    return;
  }
  selectedSemester = sem;
  renderSubjects(); // Render based on selected branch
  showScreen(homeScreen);
}

function renderSubjects() {
  subjectList.innerHTML = '';
  const currentSubjects = branchSubjects[selectedBranch] || defaultSubjects;

  currentSubjects.forEach(code => {
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

  showScreen(calcScreen);

  percentageInput.value = '';
  resultsContainer.classList.add('hidden');
}

// Navigation Helper
function showScreen(screenToShow) {
  // Hide all screens
  [branchScreen, semScreen, homeScreen, calcScreen].forEach(s => s.classList.add('hidden'));
  // Show target
  screenToShow.classList.remove('hidden');
}

// Back Buttons
backToBranch.addEventListener('click', () => {
  selectedBranch = null;
  showScreen(branchScreen);
});

backToSem.addEventListener('click', () => {
  selectedSemester = null;
  showScreen(semScreen);
});

backToHome.addEventListener('click', () => {
  selectedSubject = null;
  showScreen(homeScreen);
});

// Calculation Logic
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

  // We need to map the CURRENT branch's subjects to the timetable index
  // Note: The timetable array is fixed [index 0-5]. 
  // Usually, different branches have different timetables. 
  // IF the timetable structure is identical (just subject name changes), we can map by index.
  // Assuming IEC122 takes the same slot as ICS123 (Index 2 in default array).

  const currentSubjects = branchSubjects[selectedBranch];
  const subjectIndex = currentSubjects.indexOf(selectedSubject);

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

  document.getElementById('res-attended').textContent = attended.toFixed(0);
  document.getElementById('res-future').textContent = future;
  document.getElementById('res-missable').textContent = missable;
  document.getElementById('res-required').textContent = Math.max(0, future - missable);

  resultsContainer.classList.remove('hidden');
}

init();
