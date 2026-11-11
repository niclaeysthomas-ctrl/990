/* 990 — service worker : cache offline (app shell) */
const CACHE = '990-v58-parler';
const ASSETS = [
  'index.html',
  'data.js?v=10',
  'vocab-extra.js?v=16',
  'vocab-extra2.js?v=9',
  'vocab-extra3.js?v=16',
  'vocab-extra4.js?v=9',
  'vocab-extra5.js?v=11',
  'vocab-extra6.js?v=12',
  'vocab-future.js?v=13',
  'vocab-extra7.js?v=15',
  'translations.js?v=9',
  'listening-long.js?v=9',
  'exam-data.js?v=10',
  'advanced.js?v=9',
  'future-grammar.js?v=13',
  'register.js?v=11',
  'elevate.js?v=2',
  'reading.js?v=22',
  'zero-errors.js?v=1',
  'prepositions.js?v=1',
  'literary.js?v=2',
  'vocab-extra8.js?v=1',
  'vocab-lectures.js?v=1',
  'verbs.js?v=21',
  'moisson.js?v=2',
  'scalpel.js?v=1',
  'plume-data.js?v=2',
  'plume.js?v=7',
  'lime.js?v=7',
  'diapason-data.js?v=1',
  'diapason.js?v=2',
  'tournures-data.js?v=1',
  'tournures.js?v=1',
  'micro-data.js?v=1',
  'micro.js?v=1',
  'app.js?v=31',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k.indexOf('990-') === 0).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      if (res.ok) caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match('index.html')))
  );
});
