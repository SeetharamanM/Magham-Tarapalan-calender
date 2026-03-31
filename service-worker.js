// Service Worker for Push Notifications
const CACHE_NAME = 'magha-tarapalan-v1';

// Install event
self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
    event.waitUntil(self.clients.claim());
});

// Push event - handle incoming push notifications
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {
        title: 'மக தரபாலன் நாட்காட்டி',
        body: 'இன்று நல்ல தாரா நாள்!',
        icon: '/icon.png',
        badge: '/badge.png'
    };

    const options = {
        body: data.body,
        icon: data.icon || '/icon.png',
        badge: data.badge || '/badge.png',
        vibrate: [200, 100, 200],
        data: {
            url: data.url || '/'
        },
        requireInteraction: true,
        actions: [
            {
                action: 'view',
                title: 'காண்க'
            },
            {
                action: 'dismiss',
                title: 'மூடு'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'view' || !event.action) {
        event.waitUntil(
            clients.openWindow(event.notification.data.url || '/')
        );
    }
});

// Periodic background sync (for checking good tara days)
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'check-good-tara') {
        event.waitUntil(checkGoodTaraAndNotify());
    }
});

// Background sync
self.addEventListener('sync', (event) => {
    if (event.tag === 'check-good-tara') {
        event.waitUntil(checkGoodTaraAndNotify());
    }
});

// Function to check good tara and notify
async function checkGoodTaraAndNotify() {
    // This will be called by the main script to check tara
    // The actual calculation is done in the main app
    const clients = await self.clients.matchAll({ type: 'window' });
    if (clients.length > 0) {
        clients[0].postMessage({
            type: 'CHECK_GOOD_TARA'
        });
    }
}

// Message from main thread
self.addEventListener('message', (event) => {
    if (event.data.type === 'SHOW_NOTIFICATION') {
        const { title, body } = event.data;
        self.registration.showNotification(title, {
            body: body,
            icon: '/icon.png',
            badge: '/badge.png',
            vibrate: [200, 100, 200],
            requireInteraction: true,
            actions: [
                { action: 'view', title: 'காண்க' },
                { action: 'dismiss', title: 'மூடு' }
            ]
        });
    }
});
