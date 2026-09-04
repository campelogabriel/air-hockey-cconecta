// ============================================================
//  TUTORIAL
// ============================================================
const tutorialOverlay = document.getElementById('tutorialOverlay');
const tutorialSteps = Array.from(document.querySelectorAll('.tutorial-step'));
const tutorialDotsEl = document.getElementById('tutorialDots');
const nextTutorialBtn = document.getElementById('nextTutorial');
const skipTutorialBtn = document.getElementById('skipTutorial');
let tutorialIndex = 0;

tutorialSteps.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  tutorialDotsEl.appendChild(dot);
});
const dotEls = Array.from(tutorialDotsEl.children);

function showTutorialStep(i) {
  tutorialSteps.forEach((s, idx) => s.classList.toggle('active', idx === i));
  dotEls.forEach((d, idx) => d.classList.toggle('active', idx === i));
  nextTutorialBtn.textContent = i === tutorialSteps.length - 1 ? 'Vamos jogar! 🏒' : 'Próximo →';
}

function closeTutorial() {
  tutorialOverlay.classList.add('hidden');
  paused = false;
}

nextTutorialBtn.addEventListener('click', () => {
  if (tutorialIndex < tutorialSteps.length - 1) {
    tutorialIndex++;
    showTutorialStep(tutorialIndex);
  } else {
    closeTutorial();
  }
});

skipTutorialBtn.addEventListener('click', closeTutorial);

document.getElementById('helpBtn').addEventListener('click', () => {
  tutorialIndex = 0;
  showTutorialStep(0);
  tutorialOverlay.classList.remove('hidden');
  if (!paused) {
    paused = true;
    document.getElementById('pauseGame').textContent = '▶ Continuar';
  }
});

// ============================================================
//  ELEMENTOS DOM
// ============================================================
const table = document.getElementById('airTable');
const puckEl = document.getElementById('puck');
const malletEls = [document.getElementById('mallet0'), document.getElementById('mallet1')];
const scores = [document.getElementById('score--0'), document.getElementById('score--1')];
const streaks = [document.getElementById('streak0'), document.getElementById('streak1')];
const players = [document.querySelector('.player--0'), document.querySelector('.player--1')];
const nameInputs = [document.getElementById('name0'), document.getElementById('name1')];
const message = document.getElementById('message');
const hint = document.getElementById('hint');

// ============================================================
//  ESTADO
//  Mesa agora na horizontal:
//  - J1 (mallet rosa) defende o lado DIREITO e ataca o gol da ESQUERDA (J2)
//  - J2 (mallet roxo) defende o lado ESQUERDO e ataca o gol da DIREITA (J1)
// ============================================================
let score = [0, 0];
let streak = [0, 0];
let lastScorer = null;
let paused = false;
let vsAI = false;
let lastTime = performance.now();

const keys = {
  ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false,
  w: false, a: false, s: false, d: false
};

const state = {
  puck: { x: 0.5, y: 0.5, vx: 0.00042, vy: 0.00022 },
  mallets: [{ x: 0.80, y: 0.5 }, { x: 0.20, y: 0.5 }]
};

const trailPool = [];
for (let i = 0; i < 8; i++) {
  const t = document.createElement('div');
  t.className = 'trail';
  t.style.opacity = '0';
  table.appendChild(t);
  trailPool.push(t);
}
let trailIndex = 0;
let trailTick = 0;

// ============================================================
//  FUNÇÕES
// ============================================================
function resetPuck(direction = Math.random() > 0.5 ? 1 : -1) {
  state.puck.x = 0.5;
  state.puck.y = 0.5;
  const angle = (Math.random() * 0.9 - 0.45);
  state.puck.vy = Math.sin(angle) * 0.00024;
  state.puck.vx = direction * Math.cos(angle) * 0.00032;
}

function updateMallets() {
  malletEls.forEach((el, i) => {
    const size = el.offsetWidth || 50;
    el.style.left = `calc(${state.mallets[i].x * 100}% - ${size / 2}px)`;
    el.style.top = `calc(${state.mallets[i].y * 100}% - ${size / 2}px)`;
  });
}

function updatePuck() {
  const size = puckEl.offsetWidth || 32;
  puckEl.style.left = `calc(${state.puck.x * 100}% - ${size / 2}px)`;
  puckEl.style.top = `calc(${state.puck.y * 100}% - ${size / 2}px)`;

  trailTick++;
  if (trailTick % 3 === 0) {
    const t = trailPool[trailIndex];
    trailIndex = (trailIndex + 1) % trailPool.length;
    t.style.left = puckEl.style.left;
    t.style.top = puckEl.style.top;
    t.style.opacity = '.35';
    t.style.transition = 'none';
    requestAnimationFrame(() => {
      t.style.transition = 'opacity .5s ease';
      t.style.opacity = '0';
    });
  }
}

function setActive(player) {
  players.forEach((p, i) => p.classList.toggle('player--active', i === player));
}

function getPlayerName(player) {
  return nameInputs[player].value.trim() || `Jogador ${player + 1}`;
}

function scorePoint(player) {
  score[player]++;
  scores[player].textContent = score[player];
  scores[player].classList.remove('bump');
  void scores[player].offsetWidth;
  scores[player].classList.add('bump');
  setActive(player);

  if (lastScorer === player) {
    streak[player]++;
  } else {
    streak[player] = 1;
    streak[1 - player] = 0;
  }
  lastScorer = player;

  if (streak[player] >= 2) {
    streaks[player].textContent = `🔥 ${streak[player]} seguidos!`;
    streaks[player].classList.add('show');
  } else {
    streaks[player].classList.remove('show');
  }
  streaks[1 - player].classList.remove('show');

  table.classList.remove('shake');
  void table.offsetWidth;
  table.classList.add('shake');

  if (score[player] >= 7) {
    paused = true;
    let winner;
    // Se estiver no modo contra a máquina e o vencedor for o Jogador 2 (índice 1), exibir "Máquina"
    if (vsAI && player === 1) {
      winner = 'Máquina';
    } else {
      winner = getPlayerName(player);
    }
    message.innerHTML = `${winner} venceu! 🏆<div class="sub">Parabéns! Clique em "Nova partida" para jogar de novo.</div>`;
    message.classList.remove('hidden');
    return;
  }

  // J1 marcou (entrou no gol esquerdo) -> disco volta indo para a esquerda
  // J2 marcou (entrou no gol direito) -> disco volta indo para a direita
  resetPuck(player === 0 ? -1 : 1);
}

function collideMallet(i) {
  const dx = state.puck.x - state.mallets[i].x;
  const dy = state.puck.y - state.mallets[i].y;
  const dist = Math.hypot(dx, dy);
  const radius = 0.085;

  if (dist < radius) {
    const nx = dx / (dist || 1);
    const ny = dy / (dist || 1);
    const currentSpeed = Math.hypot(state.puck.vx, state.puck.vy);
    const MAX_SPEED = 0.00075;
    const MIN_SPEED = 0.00035;
    let speed = Math.max(currentSpeed, MIN_SPEED) * 1.06;
    speed = Math.min(speed, MAX_SPEED);
    state.puck.x = state.mallets[i].x + nx * radius;
    state.puck.y = state.mallets[i].y + ny * radius;
    state.puck.vx = nx * speed;
    state.puck.vy = ny * speed;

    malletEls[i].style.transform = 'scale(1.12)';
    setTimeout(() => { malletEls[i].style.transform = 'scale(1)'; }, 90);
  }
}

function moveAI() {
  // IA controla o mallet 1 (J2), restrito à metade esquerda da mesa (zona defensiva).
  // Velocidade e reação limitadas para não ficar imbatível — parecido com um jogador
  // humano de nível médio, não um robô perfeito.
  const puck = state.puck;
  const ai = state.mallets[1];
  const zoneMin = 0.08, zoneMax = 0.45;
  const MAX_AI_STEP = 0.0135; // deslocamento máximo por frame (equivalente ao jogador humano)

  let targetX, targetY, lerpX, lerpY;

  if (puck.x <= zoneMax + 0.05) {
    // Disco está (ou perto de estar) na área da IA: vai até ele, mas com
    // uma pequena imprecisão para não ser perfeita.
    targetX = Math.max(zoneMin, Math.min(zoneMax, puck.x - 0.05 + aiError.x));
    targetY = puck.y + aiError.y;
    lerpX = 0.07;
    lerpY = 0.08;
  } else {
    // Disco longe: volta para uma posição de cobertura, sem pressa.
    targetX = (zoneMin + zoneMax) / 2 + 0.05;
    targetY = 0.5 + (puck.y - 0.5) * 0.3;
    lerpX = 0.025;
    lerpY = 0.03;
  }

  let dx = (targetX - ai.x) * lerpX;
  let dy = (targetY - ai.y) * lerpY;

  // Limita a velocidade máxima da IA (mesma ordem de grandeza do jogador humano).
  dx = Math.max(-MAX_AI_STEP, Math.min(MAX_AI_STEP, dx));
  dy = Math.max(-MAX_AI_STEP, Math.min(MAX_AI_STEP, dy));

  ai.x += dx;
  ai.y += dy;
  ai.x = Math.max(zoneMin, Math.min(zoneMax, ai.x));
  ai.y = Math.max(0.10, Math.min(0.90, ai.y));
}

// Pequeno erro de mira da IA, atualizado periodicamente (evita precisão robótica)
let aiError = { x: 0, y: 0 };
setInterval(() => {
  aiError = { x: (Math.random() - 0.5) * 0.07, y: (Math.random() - 0.5) * 0.10 };
}, 650);

// ============================================================
//  ANTI-TRAVAMENTO
//  Evita que o disco fique "preso" parado em um canto/parede
//  (pode acontecer por causa da física simplificada de colisão).
// ============================================================
let stuckTimer = 0;
function checkStuck(dt) {
  const speed = Math.hypot(state.puck.vx, state.puck.vy);
  const nearWallX = state.puck.x < 0.10 || state.puck.x > 0.90;
  const nearWallY = state.puck.y < 0.12 || state.puck.y > 0.88;

  if (speed < 0.00012 && (nearWallX || nearWallY)) {
    stuckTimer += dt;
  } else {
    stuckTimer = 0;
  }

  if (stuckTimer > 500) {
    // Dá um empurrão para tirar o disco do canto, em direção ao centro da mesa.
    const towardCenterX = (0.5 - state.puck.x);
    const towardCenterY = (0.5 - state.puck.y);
    const mag = Math.hypot(towardCenterX, towardCenterY) || 1;
    state.puck.vx = (towardCenterX / mag) * 0.0005 + (Math.random() - 0.5) * 0.0002;
    state.puck.vy = (towardCenterY / mag) * 0.0005 + (Math.random() - 0.5) * 0.0002;
    stuckTimer = 0;
  }
}

// ============================================================
//  CONTROLE TECLADO
// ============================================================
const MALLET_SPEED = 0.0005;

function moveMalletsByKeyboard(dt) {
  let dx1 = 0, dy1 = 0;
  if (keys.ArrowLeft) dx1 = -MALLET_SPEED * dt;
  if (keys.ArrowRight) dx1 = MALLET_SPEED * dt;
  if (keys.ArrowUp) dy1 = -MALLET_SPEED * dt;
  if (keys.ArrowDown) dy1 = MALLET_SPEED * dt;

  let dx2 = 0, dy2 = 0;
  if (keys.a) dx2 = -MALLET_SPEED * dt;
  if (keys.d) dx2 = MALLET_SPEED * dt;
  if (keys.w) dy2 = -MALLET_SPEED * dt;
  if (keys.s) dy2 = MALLET_SPEED * dt;

  // J1 (setas) fica restrito à metade direita da mesa
  state.mallets[0].x = Math.max(0.54, Math.min(0.90, state.mallets[0].x + dx1));
  state.mallets[0].y = Math.max(0.10, Math.min(0.90, state.mallets[0].y + dy1));

  if (!vsAI) {
    // J2 (WASD) fica restrito à metade esquerda da mesa
    state.mallets[1].x = Math.max(0.10, Math.min(0.45, state.mallets[1].x + dx2));
    state.mallets[1].y = Math.max(0.10, Math.min(0.90, state.mallets[1].y + dy2));
  }
}

// ============================================================
//  TOQUE (mobile) — arrastar o próprio mallet com scroll liberado
// ============================================================
function bindTouch(el, index, minX, maxX, condition) {
  let active = false;
  function getPos(clientX, clientY) {
    const rect = table.getBoundingClientRect();
    let x = (clientX - rect.left) / rect.width;
    let y = (clientY - rect.top) / rect.height;
    return { x, y };
  }
  el.addEventListener('touchstart', (e) => {
    if (paused) return; // não previne o scroll quando pausado
    const t = e.touches[0];
    if (condition) {
      const pos = getPos(t.clientX, t.clientY);
      if (!condition(pos.x, pos.y)) {
        return; // não ativa, permite scroll
      }
    }
    active = true;
    e.preventDefault(); // bloqueia scroll apenas se ativou
  }, { passive: false });

  el.addEventListener('touchmove', (e) => {
    if (!active || paused) {
      // se não ativo ou pausado, não previne o scroll
      return;
    }
    const t = e.touches[0];
    const pos = getPos(t.clientX, t.clientY);
    let x = Math.max(minX, Math.min(maxX, pos.x));
    let y = Math.max(0.10, Math.min(0.90, pos.y));
    state.mallets[index].x = x;
    state.mallets[index].y = y;
    e.preventDefault();
  }, { passive: false });

  el.addEventListener('touchend', () => { active = false; });
}

// Jogador 1 (mallet rosa) – toque apenas no próprio mallet, restrito à metade direita
bindTouch(malletEls[0], 0, 0.54, 0.90, null);
// Jogador 2 (mallet roxo) – toque na mesa, mas só ativa se estiver na faixa esquerda (8%~45%)
bindTouch(table, 1, 0.08, 0.45, (x, y) => x >= 0.08 && x <= 0.45);

// ============================================================
//  LOOP
// ============================================================
function loop(now) {
  const dt = Math.min(now - lastTime, 32);
  lastTime = now;

  if (!paused) {
    if (!vsAI) {
      moveMalletsByKeyboard(dt);
    } else {
      let dx1 = 0, dy1 = 0;
      if (keys.ArrowLeft) dx1 = -MALLET_SPEED * dt;
      if (keys.ArrowRight) dx1 = MALLET_SPEED * dt;
      if (keys.ArrowUp) dy1 = -MALLET_SPEED * dt;
      if (keys.ArrowDown) dy1 = MALLET_SPEED * dt;
      state.mallets[0].x = Math.max(0.54, Math.min(0.90, state.mallets[0].x + dx1));
      state.mallets[0].y = Math.max(0.10, Math.min(0.90, state.mallets[0].y + dy1));
    }

    if (vsAI) moveAI();

    state.puck.x += state.puck.vx * dt;
    state.puck.y += state.puck.vy * dt;

    checkStuck(dt);

    // Paredes superior/inferior (laterais compridas da mesa deitada)
    if (state.puck.y < 0.035) { state.puck.y = 0.035; state.puck.vy *= -1; }
    if (state.puck.y > 0.965) { state.puck.y = 0.965; state.puck.vy *= -1; }

    collideMallet(0);
    collideMallet(1);

    // Gols agora nas laterais esquerda/direita
    if (state.puck.x < -0.01) {
      scorePoint(0); // entrou no gol da esquerda (J2) -> ponto para J1
    } else if (state.puck.x > 1.01) {
      scorePoint(1); // entrou no gol da direita (J1) -> ponto para J2
    } else {
      if (state.puck.x < 0.035 && Math.abs(state.puck.y - 0.5) > 0.22) {
        state.puck.x = 0.035; state.puck.vx = Math.abs(state.puck.vx);
      }
      if (state.puck.x > 0.965 && Math.abs(state.puck.y - 0.5) > 0.22) {
        state.puck.x = 0.965; state.puck.vx = -Math.abs(state.puck.vx);
      }
    }

    updateMallets();
    updatePuck();
  }

  requestAnimationFrame(loop);
}

// ============================================================
//  EVENTOS
// ============================================================
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (key in keys) { keys[key] = true; e.preventDefault(); }
});
document.addEventListener('keyup', (e) => {
  const key = e.key;
  if (key in keys) { keys[key] = false; e.preventDefault(); }
});

document.getElementById('newGame').addEventListener('click', () => {
  score = [0, 0]; streak = [0, 0]; lastScorer = null;
  scores.forEach(s => s.textContent = '0');
  streaks.forEach(s => s.classList.remove('show'));
  paused = false;
  message.classList.add('hidden');
  state.mallets[0] = { x: 0.80, y: 0.5 };
  state.mallets[1] = { x: 0.20, y: 0.5 };
  setActive(0);
  resetPuck();
  document.getElementById('pauseGame').textContent = '⏸ Pausar';
  for (let k in keys) keys[k] = false;
  updateMallets();
  updatePuck();
});

document.getElementById('pauseGame').addEventListener('click', (e) => {
  paused = !paused;
  e.currentTarget.textContent = paused ? '▶ Continuar' : '⏸ Pausar';
  if (score[0] < 7 && score[1] < 7) {
    if (paused) {
      message.innerHTML = '⏸ Jogo pausado<div class="sub">Clique em "Continuar" para retomar</div>';
      message.classList.remove('hidden');
    } else {
      message.classList.add('hidden');
    }
  }
});

document.getElementById('modeGame').addEventListener('click', (e) => {
  vsAI = !vsAI;
  e.currentTarget.textContent = vsAI ? '👥 Dois jogadores' : '🤖 Jogar contra IA';
  hint.textContent = vsAI ? 'Você (J1) usa setas · IA controla J2' : 'J1 setas · J2 WASD';
  state.mallets[0] = { x: 0.80, y: 0.5 };
  state.mallets[1] = { x: 0.20, y: 0.5 };
  updateMallets();
  if (paused) {
    paused = false;
    document.getElementById('pauseGame').textContent = '⏸ Pausar';
    message.classList.add('hidden');
  }
});

// ============================================================
//  INICIALIZAÇÃO
// ============================================================
resetPuck();
paused = true; // fica pausado até fechar o tutorial
requestAnimationFrame(() => { updateMallets(); updatePuck(); });
requestAnimationFrame(loop);
