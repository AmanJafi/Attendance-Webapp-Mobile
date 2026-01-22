// Core Data
const credits = {
  // --- SEMESTER 1 (Common-ish) ---
  IMA111: 4, ICS111: 5, ICS112: 5, IEC111: 5, IHS111: 3, IHS112: 1,
  IEC112: 4, // ECE specific

  // --- SEMESTER 2 (Common-ish) ---
  IMA121: 4, IEC121: 5, ICS121: 5, ICS122: 4, ICS123: 4, IHS121: 1,
  IEC122: 4, // ECE specific

  // --- SEMESTER 3 ---
  // Common
  IMA211: 4, ICS211: 4, ICS212: 4, ICS213: 4, ICS214: 4, ICS215: 2,
  // AI-DS
  ISC213: 2,
  // Cyber
  ISC212: 2,
  // CSE Core
  ISC211: 2,
  // ECE
  IEC211: 4, IEC212: 4, IEC213: 4, IEC214: 4, IEC215: 3,

  // --- SEMESTER 4 ---
  // Common
  IMA221: 4, ICS221: 4, ICS222: 4, ICS223: 4, ICS224: 4, ICS225: 2, IHS221: 1, IHS222: 1,
  // Cyber
  ICS226: 4, IHS223: 1,
  // ECE
  IEC221: 4, IEC222: 4, IEC223: 4,

  // --- SEMESTER 5 ---
  // Common
  CSE311: 4, IHS311: 1, IHS312: 1, IHS313: 1,
  // AI-DS
  CSE312: 4, ICS311: 4, IEC311: 4, IMA3XX: 3,
  // Cyber
  CBS311: 3, IEC312: 4, CBS312: 4, CBE331: 4, IMA312: 3, IHS314: 3, CBE312: 1,
  // CSE Core
  IMA311: 3,
  // ECE
  IEC313: 4, ECE312: 4,

  // --- SEMESTER 6 ---
  // Common
  CSE321: 4, CSE322: 4, ICS321: 4, ICS322: 3,
  // AI-DS
  ISC3XX: 3, IOE3XX: 3,
  // Cyber
  CBS321: 3, CBS322: 4, CBE3321: 4, CBS323: 4, ISC322: 3, IOE3321: 3,
  // CSE Core
  ISC321: 3, IOE321: 3,
  // ECE
  CSE323: 4, ECE322: 4, IOEXXX: 3, ECEXXX: 3, IEC321: 0,

  // --- SEMESTER 7 ---
  // Common
  CSE411: 4, ICS412: 4,
  // AI-DS
  CSE4XX: 4, IOE4XX: 3, ADS411: 6,
  // Cyber
  CBE441: 4, CBS411: 4, CBS412: 4, IOE441: 3, CBS413: 6,
  // CSE Core
  CSE412: 4, IOE411: 3, ICS411: 6,
  // ECE
  ECE411: 4, ECE412: 4, IEC411: 6,

  // --- SEMESTER 8 ---
  // AI-DS
  ICS422: 3, ADSXXX: 4, IOE421: 3, ADS421: 6,
  // Cyber
  CBE4421: 3, CBE4422: 4, IOE4421: 3, CBS423: 6,
  // CSE Core
  ICS423: 4, ICS421: 6,
  // ECE
  IEC421: 6
};

const translation = {
  // --- SEMESTER 1 ---
  IMA111: "DISCRETE MATHEMATICS",
  ICS111: "IT WORKSHOP I",
  ICS112: "COMPUTER PROGRAMMING",
  IEC111: "ELECTRONIC CIRCUITS",
  IHS111: "COMMUNICATION SKILLS",
  IHS112: "FOREIGN LANGUAGE",
  IEC112: "NETWORK THEORY",

  // --- SEMESTER 2 ---
  IMA121: "CALCULUS & LINEAR ALGEBRA",
  IEC121: "DIGITAL DESIGN & ELECTRIC CIRCUITS",
  ICS121: "DATA STRUCTURES I",
  ICS122: "COMPUTER ORGANIZATION",
  ICS123: "IT WORKSHOP II",
  IEC122: "SIGNALS AND SYSTEMS",
  IHS121: "PERSONALITY DEVELOPMENT",

  // --- SEMESTER 3 ---
  IMA211: "PROBABILITY & STATISTICS",
  ICS211: "DESIGN & ANALYSIS OF ALGORITHMS",
  ICS212: "OPERATING SYSTEMS",
  ICS213: "dBMS",
  ICS214: "IT WORKSHOP III",
  ICS215: "DATA STRUCTURES II",
  ISC213: "INTRO TO COGNITIVE SCIENCE",
  ISC212: "QUANTUM COMPUTING & SECURITY",
  ISC211: "INTRO TO BIOINFORMATICS",
  IEC211: "CONTROL SYSTEMS",
  IEC212: "ANALOG ELECTRONICS",
  IEC213: "MICROPROCESSORS & MICROCONTROLLERS",
  IEC214: "PRINCIPLES OF COMMUNICATION",
  IEC215: "LINEAR INTEGRATED CIRCUITS",

  // --- SEMESTER 4 ---
  IMA221: "DIFFERENTIAL EQUATIONS",
  ICS221: "THEORY OF COMPUTATION",
  ICS222: "OOAD",
  ICS223: "COMPILER DESIGN",
  ICS224: "COMPUTER NETWORKS",
  ICS225: "DATA STRUCTURES III",
  IHS221: "FUNDAMENTALS OF ECONOMICS",
  IHS222: "PRINCIPLES OF MANAGEMENT",
  ICS226: "SECURE SOFTWARE ENGINEERING",
  IHS223: "RISK MANAGEMENT",
  IEC221: "DIGITAL DESIGN WITH HDL",
  IEC222: "DIGITAL COMMUNICATION",
  IEC223: "ELECTROMAGNETIC THEORY",

  // --- SEMESTER 5 ---
  CSE311: "ARTIFICIAL INTELLIGENCE",
  CSE312: "SOFTWARE ENGG & PM",
  ICS311: "PARALLEL & DISTRIBUTED COMPUTING",
  IEC311: "DIGITAL SIGNAL PROCESSING",
  IMA3XX: "OPTIMISATION / LINEAR ALGEBRA",
  IHS311: "HRM",
  IHS312: "FINANCIAL MANAGEMENT",
  IHS313: "OPERATIONS MANAGEMENT",
  CBS311: "DATABASE SECURITY",
  IEC312: "DISTRIBUTED SYSTEM SECURITY",
  CBS312: "NETWORK & IOT SECURITY",
  CBE331: "FUNDAMENTALS OF DATA SCIENCE",
  IMA312: "NUMBER THEORY & CODING",
  IHS314: "FINANCIAL CRIME",
  CBE312: "INTRO TO AI",
  IMA311: "SOFT COMPUTING",
  IEC313: "VLSI DESIGN",
  ECE312: "MICROWAVE ENGINEERING",

  // --- SEMESTER 6 ---
  CSE321: "MICROPROCESSORS",
  CSE322: "CLOUD COMPUTING",
  ICS321: "DATA WAREHOUSING & MINING",
  ICS322: "MACHINE LEARNING",
  ISC3XX: "NETWORK SCIENCE",
  IOE3XX: "DEVOPS & MICROSERVICES",
  CBS321: "ML & CYBER SECURITY",
  CBS322: "DIGITAL FORENSICS",
  CBE3321: "CLOUD SECURITY",
  CBS323: "CRYPTOGRAPHY",
  ISC322: "CRIMINAL PSYCHOLOGY",
  IOE3321: "SECURITY STANDARDS",
  ISC321: "HPC",
  IOE321: "SOFTWARE DESIGN PATTERNS",
  CSE323: "INTERNET OF THINGS",
  ECE322: "EMBEDDED SYSTEMS",
  IOEXXX: "ADVANCED ARCHITECTURES",
  ECEXXX: "ADVANCED COMM NETWORKS",

  // --- SEMESTER 7 ---
  CSE411: "COMPUTER GRAPHICS",
  CSE4XX: "NLP / COMPUTER VISION",
  ICS412: "CRYPTOGRAPHY & NET SECURITY",
  IOE4XX: "DATA MINING / STREAMING",
  ADS411: "BTP-I",
  CBE441: "MOBILE FORENSICS",
  CBS411: "PEN TESTING",
  CBS412: "MULTIMEDIA SECURITY",
  IOE441: "BLOCKCHAIN",
  CBS413: "BTP-I",
  CSE412: "BIG DATA",
  IOE411: "BLOCKCHAIN & CRYPTO",
  ICS411: "BTP-I",
  ECE411: "FPGA SYSTEM DESIGN",
  ECE412: "ANTENNA THEORY",
  IEC411: "BTP-I",

  // --- SEMESTER 8 ---
  ICS422: "PREDICTIVE ANALYTICS",
  ADSXXX: "MLOPS / GRAPH ANALYTICS",
  IOE421: "DEEP LEARNING",
  ADS421: "BTP-II",
  CBE4421: "CYBER ETHICS",
  CBE4422: "BIOMETRIC SECURITY",
  IOE4421: "LIGHTWEIGHT CRYPTO",
  CBS423: "BTP-II",
  ICS423: "IOT / INDUSTRIAL TRAINING",
  ICS421: "BTP-II",
  IEC421: "BTP-II"
};

const branchData = {
  aids: {
    1: ["IMA111", "ICS111", "ICS112", "IEC111", "IHS111", "IHS112"],
    2: ["IMA121", "IEC121", "ICS121", "ICS122", "ICS123", "IHS121"],
    3: ["IMA211", "ICS211", "ICS212", "ICS213", "ICS214", "ISC213", "ICS215"],
    4: ["IMA221", "ICS221", "ICS222", "ICS223", "ICS224", "ICS225", "IHS221", "IHS222"],
    5: ["CSE311", "CSE312", "ICS311", "IEC311", "IMA3XX", "IHS311", "IHS312", "IHS313"],
    6: ["CSE321", "CSE322", "ICS321", "ICS322", "ISC3XX", "IOE3XX"],
    7: ["CSE411", "CSE4XX", "ICS412", "IOE4XX", "ADS411"],
    8: ["ICS422", "ADSXXX", "IOE421", "ADS421"]
  },
  cyber: {
    1: ["IMA111", "ICS111", "ICS112", "IEC111", "IHS111", "IHS112"],
    2: ["IMA121", "IEC121", "ICS121", "ICS122", "ICS123", "IHS121"],
    3: ["IMA211", "ICS211", "ICS212", "ICS213", "ICS214", "ISC212", "ICS215"],
    4: ["ICS221", "ICS226", "ICS223", "ICS224", "IMA221", "IHS221", "IHS223", "ICS225"],
    5: ["CBS311", "IEC312", "CBS312", "CBE331", "IMA312", "IHS314", "CBE312"],
    6: ["CBS321", "CBS322", "CBE3321", "CBS323", "ISC322", "IOE3321"],
    7: ["CBE441", "CBS411", "CBS412", "IOE441", "CBS413"],
    8: ["CBE4421", "CBE4422", "IOE4421", "CBS423"]
  },
  cse: {
    1: ["IMA111", "ICS111", "ICS112", "IEC111", "IHS111", "IHS112"],
    2: ["IMA121", "IEC121", "ICS121", "ICS122", "ICS123", "IHS121"],
    3: ["IMA211", "ICS211", "ICS212", "ICS213", "ICS214", "ISC211", "ICS215"],
    4: ["IMA221", "ICS221", "ICS222", "ICS223", "ICS224", "ICS225", "IHS221", "IHS222"],
    5: ["CSE311", "CSE312", "ICS311", "IEC311", "IMA311", "IHS311", "IHS312", "IHS313"],
    6: ["CSE321", "CSE322", "ICS321", "ICS322", "ISC321", "IOE321"],
    7: ["CSE411", "CSE412", "ICS412", "IOE411", "ICS411"],
    8: ["ICS422", "ICS423", "IOE421", "ICS421"]
  },
  ece: {
    1: ["IMA111", "IEC111", "ICS112", "IEC112", "IHS111", "IHS112"],
    2: ["IMA121", "IEC121", "ICS121", "ICS122", "IEC122", "IHS121"],
    3: ["IMA211", "IEC211", "IEC212", "IEC213", "IEC214", "IEC215", "ICS215"],
    4: ["IMA221", "IEC221", "IEC222", "IEC223", "ICS224", "ICS225", "IHS221", "IHS222"],
    5: ["CSE311", "IEC313", "IEC311", "IMA312", "ECE312", "IHS311", "IHS312", "IHS313"],
    6: ["CSE323", "ECE322", "IOEXXX", "ECEXXX", "ICS322", "ISC321"],
    7: ["ECE411", "ECE412", "ECEXXX", "IOEXXX", "IEC411"],
    8: ["ECEXXX", "ECEXXX", "IOEXXX", "IEC421"]
  }
};

// Timetable (Specific to Sem 2, used for accuracy in Sem 2 only)
const timetable = {
  monday: [2, 1, 1, 0, 0, 1],
  tuesday: [0, 0, 2, 0, 0, 1],
  wednesday: [1, 1, 1, 1, 1, 1],
  thursday: [1, 1, 0, 0, 2, 1],
  friday: [1, 1, 0, 0, 1, 1]
};

// Sem 2 Day Count
const sem2 = {
  Monday: 14,
  Tuesday: 13,
  Wednesday: 13,
  Thursday: 14,
  Friday: 14
};

const startofsem = new Date("2026-01-01");
const endofsem = new Date("2026-04-14"); // Restored end date
const today = new Date();

// Branch Config
const branches = [
  { id: 'aids', name: 'AI & Data Science', icon: '🤖' },
  { id: 'cse', name: 'CSE Core', icon: '💻' },
  { id: 'cyber', name: 'Cyber Security', icon: '🔒' },
  { id: 'ece', name: 'Electronics (ECE)', icon: '⚡' }
];

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
  updateVisitorCount();
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
  selectedSemester = sem;
  renderSubjects();
  showScreen(homeScreen);
}

function renderSubjects() {
  subjectList.innerHTML = '';

  // Safety check
  if (!branchData[selectedBranch] || !branchData[selectedBranch][selectedSemester]) {
    alert("Configuration Error: No data for this selection.");
    return;
  }

  const currentSubjects = branchData[selectedBranch][selectedSemester];

  currentSubjects.forEach(code => {
    const item = document.createElement('div');
    item.className = 'subject-item';
    item.innerHTML = `
            <div class="subject-info">
                <span class="subject-name">${translation[code] || code}</span>
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
  document.getElementById('current-subject-title').textContent = translation[code] || code;
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

  const credit = credits[selectedSubject];
  if (!credit) {
    console.error("Missing credit for", selectedSubject);
    return;
  }

  // Days passed since start of semester
  const daysPassed = (today - startofsem) / (1000 * 60 * 60 * 24);

  // Total classes taken so far (Estimated as Credit * DaysPassed / 7)
  // Assumption: Credit number roughly equates to classes per week.
  const totalTaken = Number((daysPassed * credit / 7)).toFixed(0);
  const attended = (percentage / 100) * totalTaken;

  // -- Calculate Total Classes in Semester --
  let totalInSem = 0;

  // Use PRECISE timetable logic ONLY for Semester 2 (Indices 0-5)
  // AND if the subject is part of the standard set that fits the timetable structure
  const currentSubjects = branchData[selectedBranch][selectedSemester];
  const subjectIndex = currentSubjects.indexOf(selectedSubject);

  // Strict check: Only use timetable if Sem 2 AND index is valid
  if (selectedSemester === 2 && subjectIndex < 6) {
    for (const day in timetable) {
      const dayKey = day.charAt(0).toUpperCase() + day.slice(1);
      const dayCount = sem2[dayKey];
      const classes = timetable[day];
      if (classes[subjectIndex] !== undefined) {
        totalInSem += classes[subjectIndex] * dayCount;
      }
    }
  }

  // Fallback/Generic Logic:
  // If we didn't calculate via timetable (Sem 1, 3-8, or odd Sem 2 subjects),
  // use the Date Range estimation to match the `totalTaken` scaling.
  if (totalInSem === 0) {
    const totalSemDays = (endofsem - startofsem) / (1000 * 60 * 60 * 24);
    totalInSem = Number((totalSemDays * credit / 7)).toFixed(0);
  }

  // Ensure Future is not negative (if today is past endofsem)
  const future = Math.max(0, totalInSem - totalTaken);

  // Logic for missable classes
  let missable = 0;
  while (true) {
    let finalAtt = (attended + (future - missable)) / (Number(totalTaken) + future);
    if (finalAtt <= 0.80) break;
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

// Visitor Counter
function updateVisitorCount() {
  const counterElement = document.getElementById('total-visits');
  fetch('https://api.countapi.xyz/hit/attendly-webapp-v1/visits')
    .then(response => response.json())
    .then(data => {
      counterElement.innerText = data.value.toLocaleString();
    })
    .catch(err => {
      console.error('Counter Error:', err);
      counterElement.innerText = '---';
    });
}

init();
