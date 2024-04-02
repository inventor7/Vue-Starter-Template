// i18n-setup.js
import { createI18n } from "vue-i18n";
import { watchEffect } from "vue";

export async function setupI18n() {
    const locale = localStorage.getItem('locale')  || navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2)  || 'en';
    const messages = await loadLocale(locale);

    const i18n = createI18n({
        legacy: false,
        locale: locale,
        fallbackLocale: "en",
        messages: {
            [locale]: messages,
        },
    });

    watchEffect(async () => {
        const newLocale = i18n.global.locale.value;
        if (!i18n.global.availableLocales.includes(newLocale)) {
            const newMessages = await loadLocale(newLocale);
            i18n.global.setLocaleMessage(newLocale, newMessages);
        }
    });

    return i18n;
}

async function loadLocale(locale) {
    const cacheName = 'locale-files';
    const url = `./src/locales/${locale}.json`;

    // Check if the locale file is in the cache
    const cache = await caches.open(cacheName);
    let response = await cache.match(url);

    if (!response) {
        // If not in the cache, fetch it from the network
        response = await fetch(url);

        // Cache the newly fetched locale file
        cache.put(url, response.clone());
    }

    // Parse and return the JSON data
    const data = await response.json();
    return data;
}