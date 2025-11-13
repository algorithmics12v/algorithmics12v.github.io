// ---------------- CONFIGURARE NIVELURI ----------------

const levels = [
  {
    name: "🐰 Iepurașul Vesel – Nivelul 1",
    emoji: "🐰",
    image: "bunny.png",
    background: "fundal1.png",
    rows: 4,
    cols: 5,
    start: { r: 3, c: 0 },
    goal: { r: 1, c: 3 },
    goalType: "flag",
    obstacles: [],
    fires: [],
    water: null,
    usesWater: false
  },
  {
    name: "🐻 Ursulețul Curajos – Nivelul 2",
    emoji: "🐻",
    image: "bear.png",
    background: "fundal2.png",
    rows: 5,
    cols: 6,
    start: { r: 4, c: 0 },
    goal: { r: 0, c: 5 },
    goalType: "flag",
    obstacles: [{ r: 2, c: 2 }],
    fires: [],
    water: null,
    usesWater: false
  },
  {
    name: "🐵 Maimuțica Poznașă – Nivelul 3",
    emoji: "🐵",
    image: "monkey.png",
    background: "fundal3.png",
    rows: 5,
    cols: 6,
    start: { r: 4, c: 0 },
    goal: { r: 0, c: 5 },
    goalType: "banana",
    obstacles: [
      { r: 1, c: 2 },
      { r: 2, c: 2 },
      { r: 2, c: 3 },
      { r: 3, c: 3 }
    ],
    fires: [],
    water: null,
    usesWater: false
  },
  {
    name: "🐘 Elefănțelul Pompier – Nivelul 4",
    emoji: "🐘",
    image: "elephant.png",
    background: "fundal3.png",
    rows: 5,
    cols: 6,
    start: { r: 4, c: 0 },
    goal: { r: 0, c: 5 },
    goalType: "flag",
    obstacles: [{ r: 3, c: 1 }],
    fires: [
      { r: 1, c: 3 },
      { r: 2, c: 3 },
      { r: 3, c: 3 }
    ],
    water: { r: 4, c: 2 },
    usesWater: true
  },
  {
    name: "🦊 Vulpița Sprintenă – Nivelul 5",
    emoji: "🦊",
    image: "fox.png",
    background: "fundal1.png", // cum ai pus tu, poți schimba
    rows: 6,
    cols: 7,
    start: { r: 5, c: 0 },
    goal: { r: 0, c: 6 },
    goalType: "flag",
    obstacles: [
      { r: 2, c: 2 },
      { r: 3, c: 2 },
      { r: 3, c: 3 },
      { r: 4, c: 4 }
    ],
    fires: [],
    water: null,
    usesWater: false
  },
  {
    name: "🦁 Leul Curajos – Nivelul 6",
    emoji: "🦁",
    image: "lion.png",
    background: "fundal3.png",
    rows: 6,
    cols: 7,
    start: { r: 5, c: 1 },
    goal: { r: 0, c: 5 },
    goalType: "flag",
    obstacles: [
      { r: 2, c: 1 },
      { r: 2, c: 2 },
      { r: 3, c: 3 },
      { r: 4, c: 3 },
      { r: 4, c: 4 }
    ],
    fires: [
      { r: 1, c: 4 },
      { r: 2, c: 4 }
    ],
    water: { r: 5, c: 4 },
    usesWater: true
  },
  {
    name: "🐼 Panda Somnoros – Nivelul 7",
    emoji: "🐼",
    image: "panda.png",
    background: "fundal3.png",
    rows: 6,
    cols: 8,
    start: { r: 5, c: 0 },
    goal: { r: 0, c: 7 },
    goalType: "flag",
    obstacles: [
      { r: 2, c: 3 },
      { r: 3, c: 3 },
      { r: 4, c: 3 },
      { r: 3, c: 5 }
    ],
    fires: [],
    water: null,
    usesWater: false
  },
  {
    name: "🐧 Pinguinul Alunecos – Nivelul 8",
    emoji: "🐧",
    image: "penguin.png",
    background: "fundal1.png",
    rows: 7,
    cols: 8,
    start: { r: 6, c: 1 },
    goal: { r: 0, c: 6 },
    goalType: "flag",
    obstacles: [
      { r: 3, c: 2 },
      { r: 3, c: 3 },
      { r: 4, c: 4 },
      { r: 5, c: 4 }
    ],
    fires: [
      { r: 1, c: 5 },
      { r: 2, c: 5 }
    ],
    water: { r: 6, c: 5 },
    usesWater: true
  },
  {
    name: "🦒 Girafa Înaltă – Nivelul 9",
    emoji: "🦒",
    image: "giraffe.png",
    background: "fundal3.png",
    rows: 7,
    cols: 8,
    start: { r: 6, c: 0 },
    goal: { r: 0, c: 7 },
    goalType: "flag",
    obstacles: [
      { r: 2, c: 2 },
      { r: 2, c: 3 },
      { r: 4, c: 5 },
      { r: 5, c: 5 },
      { r: 5, c: 6 }
    ],
    fires: [],
    water: null,
    usesWater: false
  },
  {
    name: "🐯 Tigrul Sprinten – Nivelul 10",
    emoji: "🐯",
    image: "tiger.png",
    background: "fundal2.png",
    rows: 7,
    cols: 9,
    start: { r: 6, c: 0 },
    goal: { r: 0, c: 8 },
    goalType: "flag",
    obstacles: [
      { r: 3, c: 2 },
      { r: 3, c: 3 },
      { r: 4, c: 4 },
      { r: 4, c: 5 },
      { r: 5, c: 5 }
    ],
    fires: [
      { r: 1, c: 6 },
      { r: 2, c: 6 },
      { r: 3, c: 6 }
    ],
    water: { r: 6, c: 6 },
    usesWater: true
  },
  {
    name: "🦓 Zebra Zglobie – Nivelul 11",
    emoji: "🦓",
    image: "zebra.png",
    background: "fundal3.png",
    rows: 8,
    cols: 9,
    start: { r: 7, c: 1 },
    goal: { r: 0, c: 7 },
    goalType: "flag",
    obstacles: [
      { r: 3, c: 1 },
      { r: 3, c: 2 },
      { r: 4, c: 4 },
      { r: 5, c: 4 },
      { r: 5, c: 5 },
      { r: 6, c: 6 }
    ],
    fires: [],
    water: null,
    usesWater: false
  },
  {
    name: "🦛 Hipopotamul Vesel – Nivelul 12",
    emoji: "🦛",
    image: "hippo.png",
    background: "fundal2.png",
    rows: 8,
    cols: 9,
    start: { r: 7, c: 0 },
    goal: { r: 0, c: 8 },
    goalType: "flag",
    obstacles: [
      { r: 2, c: 2 },
      { r: 2, c: 3 },
      { r: 2, c: 4 },
      { r: 4, c: 5 },
      { r: 5, c: 5 },
      { r: 6, c: 5 }
    ],
    fires: [
      { r: 1, c: 6 },
      { r: 2, c: 6 },
      { r: 3, c: 6 },
      { r: 4, c: 6 }
    ],
    water: { r: 7, c: 6 },
    usesWater: true
  }
];

// ---------------- VARIABILE GLOBALE ----------------

let currentLevel = 0;
let highestUnlockedLevel = 0;

let ROWS, COLS, goalPos, characterPos, obstacles = [], fires = [], waterPos = null;
let fireExtinguished = false;

const grid = document.getElementById("grid");
const boardWrap = document.getElementById("boardWrapper");
const boardTitle = document.getElementById("boardTitle");
const winOverlay = document.getElementById("winOverlay");
const winTitle = document.getElementById("winTitle");
const winText = document.getElementById("winText");
const playAgain = document.getElementById("playAgainBtn");
const waterBtn = document.getElementById("waterBtn");
const levelsList = document.getElementById("levelsList");

const characterEl = document.createElement("img");
characterEl.id = "character";
characterEl.className = "character";

// ---------------- FUNCȚII UTILE ----------------

function buildLevelButtons() {
  levelsList.innerHTML = "";
  levels.forEach((lvl, idx) => {
    const btn = document.createElement("button");
    btn.className = "level-btn";
    btn.dataset.level = idx;

    const iconSpan = document.createElement("span");
    iconSpan.className = "icon";
    iconSpan.textContent = lvl.emoji;

    const labelSpan = document.createElement("span");
    labelSpan.className = "label";
    labelSpan.textContent = `Nivel ${idx + 1}`;

    btn.appendChild(iconSpan);
    btn.appendChild(labelSpan);

    btn.addEventListener("click", () => {
      const target = Number(btn.dataset.level);
      if (target > highestUnlockedLevel) {
        bumpBoard();
        return;
      }
      hideWin();
      loadLevel(target);
    });

    levelsList.appendChild(btn);
  });

  updateLevelButtons();
}

function updateLevelButtons() {
  const buttons = levelsList.querySelectorAll(".level-btn");
  buttons.forEach(btn => {
    const idx = Number(btn.dataset.level);
    btn.classList.remove("active", "locked");
    if (idx === currentLevel) btn.classList.add("active");
    if (idx > highestUnlockedLevel) btn.classList.add("locked");
  });
}

function fixCells() {
  const cells = grid.querySelectorAll(".cell");
  cells.forEach((cell, i) => {
    const r = Math.floor(i / COLS);
    const c = i % COLS;
    cell.style.gridRowStart = r + 1;
    cell.style.gridColumnStart = c + 1;
  });
}

function updateCellSize() {
  const extraVertical = 180;
  const paddingY = window.innerHeight <= 700 ? 40 : 80;
  const availableHeight = window.innerHeight - extraVertical - paddingY;

  const sidebar = document.querySelector(".sidebar");
  const sidebarWidth = sidebar ? sidebar.offsetWidth : 140;
  const extraHorizontal = 40 + sidebarWidth;
  const availableWidth = window.innerWidth - extraHorizontal;

  const maxSizeH = availableHeight / ROWS;
  const maxSizeW = availableWidth / COLS;

  const cellSize = Math.max(32, Math.min(maxSizeH, maxSizeW, 110));
  grid.style.setProperty("--cell-size", cellSize + "px");
}

function updateWaterButtonState(levelConfig) {
  if (levelConfig.usesWater) {
    waterBtn.classList.remove("disabled");
    waterBtn.disabled = false;
  } else {
    waterBtn.classList.add("disabled");
    waterBtn.disabled = true;
  }
}

// ---------------- LOGICĂ NIVEL ----------------

function loadLevel(index) {
  const lvl = levels[index];
  currentLevel = index;

  // fundal specific nivelului
  if (lvl.background) {
    document.body.style.backgroundImage = `url('${lvl.background}')`;
  } else {
    document.body.style.backgroundImage = "none";
  }

  ROWS = lvl.rows;
  COLS = lvl.cols;
  goalPos = { ...lvl.goal };
  characterPos = { ...lvl.start };
  obstacles = lvl.obstacles || [];
  fires = lvl.fires || [];
  waterPos = lvl.water || null;
  fireExtinguished = false;

  boardTitle.textContent = lvl.name;

  grid.style.setProperty("--rows", ROWS);
  grid.style.setProperty("--cols", COLS);

  updateCellSize();

  grid.innerHTML = "";

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cell = document.createElement("div");
      cell.className = "cell";

      const isObstacle = obstacles.some(o => o.r === r && o.c === c);
      const isFire = fires.some(f => f.r === r && f.c === c);
      const isWater = waterPos && waterPos.r === r && waterPos.c === c;

      if (isObstacle) {
        cell.classList.add("obstacle");
      } else if (isFire) {
        cell.classList.add("fire");
      } else if (isWater) {
        cell.classList.add("water");
      } else if (r === goalPos.r && c === goalPos.c) {
        if (lvl.goalType === "banana") cell.classList.add("banana");
        else cell.classList.add("flag");
      }

      grid.appendChild(cell);
    }
  }

  fixCells();

  characterEl.src = lvl.image;
  characterEl.alt = lvl.name;
  grid.appendChild(characterEl);
  updateCharacter();

  updateLevelButtons();
  updateWaterButtonState(lvl);
  hideWin();
}

function updateCharacter() {
  characterEl.style.gridRowStart = characterPos.r + 1;
  characterEl.style.gridColumnStart = characterPos.c + 1;
}

function showWin() {
  const lvl = levels[currentLevel];

  if (lvl.goalType === "banana") {
    winTitle.textContent = "Yummy! 🍌";
    winText.textContent = "Maimuțica a prins banana!";
  } else {
    winTitle.textContent = "Bravo! 🥳";
    winText.textContent = "Ai terminat nivelul!";
  }

  // deblocăm următorul nivel
  if (currentLevel < levels.length - 1) {
    if (highestUnlockedLevel < currentLevel + 1) {
      //highestUnlockedLevel = currentLevel + 1;
       highestUnlockedLevel = levels.length - 1;

      updateLevelButtons();
    }
  }

  winOverlay.classList.add("show");

  if (currentLevel < levels.length - 1) {
    playAgain.textContent = "Nivelul următor";
    playAgain.onclick = () => {
      hideWin();
      loadLevel(currentLevel + 1);
    };
  } else {
    playAgain.textContent = "Joacă de la început";
    playAgain.onclick = () => {
      hideWin();
      loadLevel(0);
    };
  }
}

function hideWin() {
  winOverlay.classList.remove("show");
}

function isObstacleCell(r, c) {
  return obstacles.some(o => o.r === r && o.c === c);
}

function isFireCell(r, c) {
  return fires.some(f => f.r === r && f.c === c);
}

function isBlockedCell(r, c) {
  if (isObstacleCell(r, c)) return true;
  if (!fireExtinguished && isFireCell(r, c)) return true;
  return false;
}

function bumpBoard() {
  boardWrap.classList.remove("shake");
  void boardWrap.offsetWidth;
  boardWrap.classList.add("shake");
}

function tryMove(dir) {
  const D = {
    up: { dr: -1, dc: 0 },
    down: { dr: 1, dc: 0 },
    left: { dr: 0, dc: -1 },
    right: { dr: 0, dc: 1 }
  }[dir];

  const nr = characterPos.r + D.dr;
  const nc = characterPos.c + D.dc;

  if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) {
    bumpBoard();
    return;
  }

  if (isBlockedCell(nr, nc)) {
    bumpBoard();
    return;
  }

  characterPos.r = nr;
  characterPos.c = nc;
  updateCharacter();

  if (nr === goalPos.r && nc === goalPos.c) {
    const lvl = levels[currentLevel];

    // nivel cu foc + apă → nu câștigi dacă nu ai folosit apa
    if (lvl.usesWater && lvl.fires && lvl.fires.length > 0 && !fireExtinguished) {
      bumpBoard();
      return;
    }

    showWin();
  }
}

// apă pentru nivelurile cu foc
function useWater() {
  const lvl = levels[currentLevel];
  if (!lvl.usesWater || waterBtn.disabled) {
    bumpBoard();
    return;
  }

  if (!waterPos || characterPos.r !== waterPos.r || characterPos.c !== waterPos.c) {
    bumpBoard();
    return;
  }

  if (fireExtinguished) return;

  fireExtinguished = true;

  fires.forEach(f => {
    const idx = f.r * COLS + f.c;
    const cell = grid.children[idx];
    if (cell) cell.classList.remove("fire");
  });
}

// ---------------- EVENT LISTENERS ----------------

document.querySelectorAll(".btn-arrow[data-dir]").forEach(btn => {
  btn.addEventListener("click", () => tryMove(btn.dataset.dir));
  btn.addEventListener(
    "touchstart",
    e => {
      e.preventDefault();
      tryMove(btn.dataset.dir);
    },
    { passive: false }
  );
});

waterBtn.addEventListener("click", () => useWater());
waterBtn.addEventListener(
  "touchstart",
  e => {
    e.preventDefault();
    useWater();
  },
  { passive: false }
);

window.addEventListener("keydown", e => {
  const map = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right"
  };
  if (map[e.key]) {
    e.preventDefault();
    tryMove(map[e.key]);
  }
});

window.addEventListener("resize", () => {
  updateCellSize();
  fixCells();
  updateCharacter();
});

// ---------------- INIT ----------------

buildLevelButtons();
loadLevel(0);
