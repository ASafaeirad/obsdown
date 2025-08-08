import './style.css';
import {
  formatSeconds,
  toPascalCase,
  toSpaceCase,
} from '@fullstacksjs/toolbox';

function getUrlParam(name: string): string | undefined {
  const params = new URLSearchParams(window.location.search);
  return params.get(name) ?? undefined;
}

function parseSeconds(): number {
  const raw = getUrlParam('seconds');
  const defaultValue = 300;

  if (!raw) return defaultValue;
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed >= 0
    ? Math.floor(parsed)
    : defaultValue;
}

function addGoogleFont(fontFamily: string) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  const googleFontName = toSpaceCase(fontFamily)
    .split(' ')
    .map(toPascalCase)
    .join('+');
  link.href = `https://fonts.googleapis.com/css2?family=${googleFontName}&display=swap`;
  document.head.appendChild(link);
}

function applyStyle() {
  const color = getUrlParam('color');
  if (color && /^([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color))
    document.body.style.color = `#${color}`;

  const fontFamily = getUrlParam('font-family');
  if (fontFamily) {
    addGoogleFont(fontFamily);
    document.body.style.fontFamily = fontFamily;
  }

  const fontSize = getUrlParam('size');
  if (fontSize) document.body.style.fontSize = `${fontSize}px`;
}

function startCountdown() {
  const countdown = document.querySelector<HTMLDivElement>('#countdown')!;
  const before = document.querySelector<HTMLDivElement>('#before')!;
  applyStyle();

  const totalSeconds = parseSeconds();
  const beforeText = getUrlParam('before');
  if (beforeText) {
    before.textContent = beforeText;
  }

  const endAt = Date.now() + totalSeconds * 1000;

  const update = () => {
    const remainingMs = Math.max(0, endAt - Date.now());
    const remainingSeconds = Math.ceil(remainingMs / 1000);
    const formatted = formatSeconds(remainingSeconds, { format: 'mm:ss' });
    countdown.textContent = formatted;
    document.title = `Countdown (${formatted})`;

    if (remainingMs <= 0) clearInterval(timer);
  };

  const timer = setInterval(update, 250);
  update();
}

startCountdown();
