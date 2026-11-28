/* açılış */
if (S.donus && !location.hash) { const d = S.donus; S.donus = ''; save(); history.replaceState(null, '', d); }
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => { });
ciz();
