const STORAGE_KEY = 'ummama-site-state-v1';
const ADMIN_AUTH_KEY = 'ummama-admin-auth';

const SOCIAL_LOGOS = {
  instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="6" fill="url(#igGradient)"/>
      <rect x="7" y="7" width="10" height="10" rx="3" fill="none" stroke="white" stroke-width="1.8"/>
      <circle cx="12" cy="12" r="2.6" fill="none" stroke="white" stroke-width="1.8"/>
      <circle cx="16.3" cy="7.7" r="1.1" fill="white"/>
      <defs>
        <linearGradient id="igGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#feda75"/>
          <stop offset="20%" stop-color="#fa7e1e"/>
          <stop offset="45%" stop-color="#d62976"/>
          <stop offset="70%" stop-color="#962fbf"/>
          <stop offset="100%" stop-color="#4f5bd5"/>
        </linearGradient>
      </defs>
    </svg>
  `,
  facebook: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#1877F2"/>
      <path d="M13.2 20v-7h2.4l.4-2.8h-2.8V7.4c0-.8.3-1.4 1.5-1.4H16V3.4c-.3 0-1.3-.1-2.3-.1-2.2 0-3.7 1.4-3.7 4v2.3H8v2.8h2V20h3.2z" fill="white"/>
    </svg>
  `,
  tiktok: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.6 3c.4 1.8 1.6 3.2 3.4 4.1v2.6c-1.4-.1-2.6-.6-3.8-1.4v6.5c0 3.2-2.6 5.8-5.8 5.8S3 18.7 3 15.4s2.6-5.8 5.8-5.8c.3 0 .7 0 1 .1v2.8a3.1 3.1 0 0 0-1-.1c-1.7 0-3 1.4-3 3.1S7.1 18.3 8.8 18.3s3-1.4 3-3.1V3h2.8z" fill="#000000"/>
      <path d="M14.6 3c.4 1.8 1.6 3.2 3.4 4.1v2.6c-1.4-.1-2.6-.6-3.8-1.4v6.5c0 3.2-2.6 5.8-5.8 5.8S3 18.7 3 15.4s2.6-5.8 5.8-5.8c.3 0 .7 0 1 .1v2.8a3.1 3.1 0 0 0-1-.1c-1.7 0-3 1.4-3 3.1S7.1 18.3 8.8 18.3s3-1.4 3-3.1V3h2.8z" fill="#FF2D55" opacity="0.9"/>
      <path d="M18.1 7.1a5.2 5.2 0 0 1 1.3-2.8 5.7 5.7 0 0 1 1.9 2.8h-3.2z" fill="#00F2EA"/>
    </svg>
  `,
  discord: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="5" fill="#5865F2"/>
      <path d="M8.7 15.2c-.4-.3-.8-.7-1.1-1.1.2 0 .4-.1.6-.2.7-.3 1.3-.8 1.8-1.3.5.6 1 1.1 1.7 1.4.5.2 1 .3 1.6.4.2-.1.3-.2.4-.4.5-.8 1.1-1.4 1.9-1.9.2.1.4.2.6.3-.3.5-.7 1-1.2 1.3-.4.3-.8.5-1.3.7-.7.3-1.5.5-2.2.5-.7 0-1.3-.1-2-.3-.5-.1-.9-.3-1.3-.6zm-1.2-5.7c0-.8.7-1.4 1.5-1.4.8 0 1.5.6 1.5 1.4 0 .8-.7 1.4-1.5 1.4-.8 0-1.5-.6-1.5-1.4zm8.3 0c0-.8.7-1.4 1.5-1.4.8 0 1.5.6 1.5 1.4 0 .8-.7 1.4-1.5 1.4-.8 0-1.5-.6-1.5-1.4z" fill="white"/>
    </svg>
  `,
  youtube: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="4" fill="#FF0000"/>
      <path d="M10 9.2l5 2.8-5 2.8v-5.6z" fill="white"/>
    </svg>
  `,
  spotify: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#1DB954"/>
      <path d="M7.4 14.8c4.1-1 7.7-.9 11.2.5.3.1.4.5.2.8-.1.3-.5.4-.8.2-3.1-1.2-6.3-1.3-9.7-.4-.3.1-.6-.1-.7-.4-.1-.2 0-.5.1-.7zm1.5-3.2c3.3-.9 6.9-.8 9.8.4.3.1.5.5.3.8-.1.3-.5.4-.8.3-2.6-1.1-5.8-1.1-8.7.1-.3.1-.6-.1-.7-.4-.1-.3 0-.5.1-.8zm1.6-3c2.8-.7 5.9-.5 8.4.6.3.1.6.5.4.9-.1.3-.5.5-.9.4-2.2-.9-4.8-1-7.1-.4-.3.1-.6-.1-.7-.4-.1-.3 0-.5.1-.8z" fill="white"/>
    </svg>
  `,
  x: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#000000"/>
      <path d="M7.8 7.3h2.8l2 3.1 2.5-3.1h2.7l-4.1 5.1 4.3 5.3h-2.7l-2.4-3.6-2.8 3.6H7.4l4.3-5.2L7.8 7.3z" fill="white"/>
    </svg>
  `,
  default: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#ff8ac1"/>
      <path d="M12 7.2c1.5 0 2.8 1.3 2.8 2.8S13.5 12.8 12 12.8 9.2 11.5 9.2 10 10.5 7.2 12 7.2zm-4.4 8.5c.4-1.7 2-3 4.4-3s4 1.3 4.4 3" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
    </svg>
  `
};

const defaultState = {
  theme: 'pink',
  profileName: 'ummama',
  profileImage:
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  personalMessage:
    'Hey ummama, every little moment with you feels like a warm pink dream — soft, bright, and beautifully real. I hope you know how much your smile, your presence, and your little details mean to me. You make ordinary days feel magical, and I will always treasure every breath of this beautiful journey with you. Keep shining, keep being you, and always remember: you are deeply loved, simply because you are you. ✨',
  favorites: ['Pink sunsets', 'Soft songs', 'Cozy movies', 'Good food', 'Night talks'],
  gallery: [
    {
      title: 'Sunset stroll',
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Dreamy café',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Little laugh',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
    }
  ],
  music: [
    {
      title: 'Dreams',
      artist: 'Fleetwood Mac',
      url: 'https://www.youtube.com/results?search_query=Fleetwood+Mac+Dreams'
    },
    {
      title: 'Perfect',
      artist: 'Ed Sheeran',
      url: 'https://www.youtube.com/results?search_query=Ed+Sheeran+Perfect'
    }
  ],
  socials: [
    { platform: 'Instagram', url: 'https://instagram.com', icon: '📸' },
    { platform: 'Facebook', url: 'https://facebook.com', icon: '💬' },
    { platform: 'TikTok', url: 'https://tiktok.com', icon: '🎵' },
    { platform: 'Discord', url: 'https://discord.com', icon: '💭' }
  ],
  birthdayDate: '2026-06-05T00:00:00'
};

const state = loadState();
const isAdminRoute = window.location.pathname === '/login/' || window.location.pathname === '/login' || window.location.pathname.endsWith('/login/index.html');
const isAdminAuthenticated = localStorage.getItem(ADMIN_AUTH_KEY) === 'true';

if (!isAdminRoute && !isAdminAuthenticated) {
  window.location.replace('/login/');
}

const elements = {
  body: document.body,
  root: document.documentElement,
  themeToggle: document.getElementById('themeToggle'),
  heroTitle: document.getElementById('heroTitle'),
  heroMessage: document.getElementById('heroMessage'),
  profileImage: document.getElementById('profileImage'),
  personalMessage: document.getElementById('personalMessage'),
  favoritesPreview: document.getElementById('favoritesPreview'),
  favoritesList: document.getElementById('favoritesList'),
  galleryGrid: document.getElementById('galleryGrid'),
  musicGrid: document.getElementById('musicGrid'),
  socialGrid: document.getElementById('socialGrid'),
  daysLeft: document.getElementById('daysLeft'),
  countdownDays: document.getElementById('countdownDays'),
  countdownHours: document.getElementById('countdownHours'),
  countdownMinutes: document.getElementById('countdownMinutes'),
  countdownSeconds: document.getElementById('countdownSeconds'),
  controlPanel: document.getElementById('controlPanel'),
  closePanelBtn: document.getElementById('closePanelBtn'),
  profileForm: document.getElementById('profileForm'),
  profileNameInput: document.getElementById('profileNameInput'),
  profilePicInput: document.getElementById('profilePicInput'),
  messageInput: document.getElementById('messageInput'),
  galleryForm: document.getElementById('galleryForm'),
  galleryTitleInput: document.getElementById('galleryTitleInput'),
  galleryUrlInput: document.getElementById('galleryUrlInput'),
  galleryFileInput: document.getElementById('galleryFileInput'),
  galleryManager: document.getElementById('galleryManager'),
  musicForm: document.getElementById('musicForm'),
  musicTitleInput: document.getElementById('musicTitleInput'),
  musicArtistInput: document.getElementById('musicArtistInput'),
  musicUrlInput: document.getElementById('musicUrlInput'),
  musicManager: document.getElementById('musicManager'),
  socialForm: document.getElementById('socialForm'),
  socialPlatformInput: document.getElementById('socialPlatformInput'),
  socialUrlInput: document.getElementById('socialUrlInput'),
  socialManager: document.getElementById('socialManager'),
  favoritesForm: document.getElementById('favoritesForm'),
  favoritesInput: document.getElementById('favoritesInput'),
  clearAllBtn: document.getElementById('clearAllBtn'),
  addGalleryBtn: document.getElementById('addGalleryBtn'),
  addMusicBtn: document.getElementById('addMusicBtn'),
  addSocialBtn: document.getElementById('addSocialBtn')
};

function getNextBirthday() {
  const now = new Date();
  const birthday = new Date(now.getFullYear(), 5, 5, 0, 0, 0);
  if (birthday < now) birthday.setFullYear(now.getFullYear() + 1);
  return birthday;
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultState);

  try {
    return { ...structuredClone(defaultState), ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderTheme() {
  if (!elements.root) return;
  const isDark = state.theme === 'dark';
  elements.root.dataset.theme = isDark ? 'dark' : 'pink';
  if (elements.themeToggle) {
    if (!isAdminRoute || !isAdminAuthenticated) {
      elements.themeToggle.remove();
      return;
    }
    elements.themeToggle.textContent = isDark ? '☀️ Pink mode' : '🌙 Dark mode';
  }
}

function renderProfile() {
  if (elements.heroTitle) {
    elements.heroTitle.textContent = `Welcome, ${state.profileName} ✨`;
  }
  if (elements.heroMessage) {
    elements.heroMessage.textContent = state.personalMessage;
  }
  if (elements.personalMessage) {
    elements.personalMessage.textContent = state.personalMessage;
  }
  if (elements.profileImage) {
    elements.profileImage.src = state.profileImage || defaultState.profileImage;
    elements.profileImage.alt = state.profileName;
  }

  if (elements.profileNameInput) elements.profileNameInput.value = state.profileName;
  if (elements.profilePicInput) elements.profilePicInput.value = state.profileImage;
  if (elements.messageInput) elements.messageInput.value = state.personalMessage;
  if (elements.favoritesInput) elements.favoritesInput.value = state.favorites.join(', ');
}

function renderFavoritePreview() {
  if (elements.favoritesPreview) {
    elements.favoritesPreview.innerHTML = state.favorites
      .slice(0, 4)
      .map((item) => `<span>${item}</span>`)
      .join('');
  }

  if (elements.favoritesList) {
    elements.favoritesList.innerHTML = state.favorites
      .map((item) => `<span>${item}</span>`)
      .join('');
  }
}

function renderGallery() {
  if (!elements.galleryGrid) return;
  const canManage = isAdminRoute && isAdminAuthenticated;
  elements.galleryGrid.innerHTML = state.gallery
    .map(
      (item, index) => `
        <article class="gallery-item">
          <img src="${item.image}" alt="${item.title}" />
          <div class="meta">
            <h4>${item.title}</h4>
            ${
              canManage
                ? `<div class="actions">
                    <button type="button" data-gallery-action="left" data-index="${index}" aria-label="Move left">←</button>
                    <button type="button" data-gallery-action="right" data-index="${index}" aria-label="Move right">→</button>
                    <button type="button" data-gallery-action="delete" data-index="${index}" aria-label="Delete photo">Delete</button>
                  </div>`
                : ''
            }
          </div>
        </article>
      `
    )
    .join('');

  if (elements.galleryManager) {
    elements.galleryManager.innerHTML = state.gallery
      .map(
        (item, index) => `
          <div class="manager-item">
            <div class="info">
              <strong>${item.title}</strong>
              <span>${index + 1} / ${state.gallery.length}</span>
            </div>
            <div class="controls">
              <button type="button" data-gallery-action="left" data-index="${index}">←</button>
              <button type="button" data-gallery-action="right" data-index="${index}">→</button>
              <button type="button" data-gallery-action="delete" data-index="${index}">✕</button>
            </div>
          </div>
        `
      )
      .join('');
  }
}

function renderMusic() {
  if (!elements.musicGrid) return;
  const canManage = isAdminRoute && isAdminAuthenticated;
  elements.musicGrid.innerHTML = state.music
    .map(
      (song, index) => `
        <article class="music-card">
          <div class="top">
            <h4>${song.title}</h4>
            ${canManage ? `<div class="actions"><button type="button" data-music-action="delete" data-index="${index}" aria-label="Delete song">Delete</button></div>` : ''}
          </div>
          <p>${song.artist}</p>
          <a href="${song.url}" target="_blank" rel="noreferrer">Listen here 🎶</a>
        </article>
      `
    )
    .join('');

  if (elements.musicManager) {
    elements.musicManager.innerHTML = state.music
      .map(
        (song, index) => `
          <div class="manager-item">
            <div class="info">
              <strong>${song.title}</strong>
              <span>${song.artist}</span>
            </div>
            <div class="controls">
              <button type="button" data-music-action="delete" data-index="${index}">✕</button>
            </div>
          </div>
        `
      )
      .join('');
  }
}

function getSocialLogo(platform = '') {
  const key = String(platform).trim().toLowerCase();
  return SOCIAL_LOGOS[key] || SOCIAL_LOGOS.default;
}

function renderSocials() {
  if (!elements.socialGrid) return;
  const canManage = isAdminRoute && isAdminAuthenticated;
  elements.socialGrid.innerHTML = state.socials
    .map(
      (social, index) => `
        <article class="social-card">
          <div class="platform social-logo">${getSocialLogo(social.platform)}</div>
          <h4>${social.platform}</h4>
          <a href="${social.url}" target="_blank" rel="noreferrer">Open link</a>
          ${canManage ? `<div class="actions" style="margin-top: 10px;"><button type="button" data-social-action="delete" data-index="${index}">Delete</button></div>` : ''}
        </article>
      `
    )
    .join('');

  if (elements.socialManager) {
    elements.socialManager.innerHTML = state.socials
      .map(
        (social, index) => `
          <div class="manager-item">
            <div class="info">
              <strong>${social.platform}</strong>
              <span>${social.url}</span>
            </div>
            <div class="controls">
              <button type="button" data-social-action="delete" data-index="${index}">✕</button>
            </div>
          </div>
        `
      )
      .join('');
  }
}

function renderCountdown() {
  if (!elements.daysLeft && !elements.countdownDays && !elements.countdownHours && !elements.countdownMinutes && !elements.countdownSeconds) return;
  const target = getNextBirthday().getTime();
  const now = Date.now();
  const difference = Math.max(target - now, 0);

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  elements.daysLeft.textContent = days;
  elements.countdownDays.textContent = String(days).padStart(2, '0');
  elements.countdownHours.textContent = String(hours).padStart(2, '0');
  elements.countdownMinutes.textContent = String(minutes).padStart(2, '0');
  elements.countdownSeconds.textContent = String(seconds).padStart(2, '0');
}

function renderAll() {
  renderTheme();
  renderProfile();
  renderFavoritePreview();
  renderGallery();
  renderMusic();
  renderSocials();
  renderCountdown();
}

function handleProfileSubmit(event) {
  event.preventDefault();
  state.profileName = elements.profileNameInput.value.trim() || 'ummama';
  state.profileImage = elements.profilePicInput.value.trim() || defaultState.profileImage;
  state.personalMessage = elements.messageInput.value.trim() || defaultState.personalMessage;
  saveState();
  renderAll();
}

function handleGallerySubmit(event) {
  event.preventDefault();
  const title = elements.galleryTitleInput.value.trim() || 'Pretty memory';
  const urlValue = elements.galleryUrlInput.value.trim();
  const file = elements.galleryFileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      state.gallery.unshift({ title, image: String(reader.result) });
      saveState();
      renderAll();
      elements.galleryForm.reset();
    };
    reader.readAsDataURL(file);
    return;
  }

  if (urlValue) {
    state.gallery.unshift({ title, image: urlValue });
    saveState();
    renderAll();
    elements.galleryForm.reset();
  }
}

function moveGalleryItem(index, direction) {
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= state.gallery.length) return;
  [state.gallery[index], state.gallery[nextIndex]] = [state.gallery[nextIndex], state.gallery[index]];
  saveState();
  renderAll();
}

function handleGalleryAction(event) {
  const button = event.target.closest('[data-gallery-action]');
  if (!button) return;
  const index = Number(button.dataset.index);
  const action = button.dataset.galleryAction;

  if (action === 'delete') {
    state.gallery.splice(index, 1);
  }

  if (action === 'left') {
    moveGalleryItem(index, -1);
    return;
  }

  if (action === 'right') {
    moveGalleryItem(index, 1);
    return;
  }

  saveState();
  renderAll();
}

function handleMusicSubmit(event) {
  event.preventDefault();
  const title = elements.musicTitleInput.value.trim();
  const artist = elements.musicArtistInput.value.trim();
  const url = elements.musicUrlInput.value.trim();

  if (!title || !artist || !url) return;

  state.music.unshift({ title, artist, url });
  saveState();
  renderAll();
  elements.musicForm.reset();
}

function handleMusicAction(event) {
  const button = event.target.closest('[data-music-action]');
  if (!button) return;
  const index = Number(button.dataset.index);
  if (button.dataset.musicAction === 'delete') {
    state.music.splice(index, 1);
    saveState();
    renderAll();
  }
}

function handleSocialSubmit(event) {
  event.preventDefault();
  const platform = elements.socialPlatformInput.value.trim();
  const url = elements.socialUrlInput.value.trim();

  if (!platform || !url) return;

  const platformIcon = {
    instagram: '📸',
    facebook: '💬',
    tiktok: '🎵',
    discord: '💭',
    twitter: '🐦',
    x: '🐦',
    youtube: '▶️',
    spotify: '🎧'
  };

  const lower = platform.toLowerCase();

  state.socials.unshift({
    platform,
    url,
    icon: platformIcon[lower] || '✨'
  });

  saveState();
  renderAll();
  elements.socialForm.reset();
}

function handleSocialAction(event) {
  const button = event.target.closest('[data-social-action]');
  if (!button) return;
  const index = Number(button.dataset.index);
  state.socials.splice(index, 1);
  saveState();
  renderAll();
}

function handleFavoritesSubmit(event) {
  event.preventDefault();
  const values = elements.favoritesInput.value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  state.favorites = values.length ? values : defaultState.favorites;
  saveState();
  renderAll();
}

function clearAllContent() {
  state.gallery = [];
  state.music = [];
  state.socials = [];
  state.favorites = [];
  state.personalMessage = '';
  state.profileName = 'ummama';
  state.profileImage = defaultState.profileImage;
  saveState();
  renderAll();
}

function bindEvents() {
  if (!isAdminRoute || !isAdminAuthenticated) return;

  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'pink' : 'dark';
      saveState();
      renderTheme();
    });
  }

  if (elements.clearAllBtn) {
    elements.clearAllBtn.addEventListener('click', () => {
      const confirmClear = window.confirm('Remove all text, photos, music, socials, and favorites from the site?');
      if (!confirmClear) return;
      clearAllContent();
    });
  }

  if (elements.closePanelBtn && elements.controlPanel) {
    elements.closePanelBtn.addEventListener('click', () => {
      elements.controlPanel.classList.remove('open');
    });
  }

  if (elements.profileForm) elements.profileForm.addEventListener('submit', handleProfileSubmit);
  if (elements.galleryForm) elements.galleryForm.addEventListener('submit', handleGallerySubmit);
  if (elements.musicForm) elements.musicForm.addEventListener('submit', handleMusicSubmit);
  if (elements.socialForm) elements.socialForm.addEventListener('submit', handleSocialSubmit);
  if (elements.favoritesForm) elements.favoritesForm.addEventListener('submit', handleFavoritesSubmit);

  if (elements.galleryGrid) elements.galleryGrid.addEventListener('click', handleGalleryAction);
  if (elements.galleryManager) elements.galleryManager.addEventListener('click', handleGalleryAction);
  if (elements.musicGrid) elements.musicGrid.addEventListener('click', handleMusicAction);
  if (elements.musicManager) elements.musicManager.addEventListener('click', handleMusicAction);
  if (elements.socialGrid) elements.socialGrid.addEventListener('click', handleSocialAction);
  if (elements.socialManager) elements.socialManager.addEventListener('click', handleSocialAction);
}

bindEvents();
renderAll();
setInterval(renderCountdown, 1000);
