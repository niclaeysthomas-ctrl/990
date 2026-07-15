/* 990 — service worker : cache offline (app shell) */
const CACHE = '990-v12';
const ASSETS = [
  'index.html',
  'app.js?v=12',
  'data.js?v=9',
  'vocab-extra.js?v=9',
  'vocab-extra2.js?v=9',
  'vocab-extra3.js?v=9',
  'vocab-extra4.js?v=9',
  'vocab-extra5.js?v=11',
  'vocab-extra6.js?v=12',
  'translations.js?v=9',
  'listening-long.js?v=9',
  'exam-data.js?v=9',
  'advanced.js?v=9',
  'register.js?v=11',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match('index.html')))
  );
});
