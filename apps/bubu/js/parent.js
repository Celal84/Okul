/* Ayarlar, veli kilidi, veli paneli, çıkartma albümü */
'use strict';

/* ================================================= ÇIKARTMA ALBÜMÜ */
Screens.stickers = () => {
  const have = Store.stickerCount();
  const left = STARS_PER_STICKER - (Store.s.stars % STARS_PER_STICKER);
  const grid = h('div', { class: 'sticker-grid' }, STICKERS.map((s, i) => {
    const got = i < have;
    const b = h('button', { class: 'sticker' + (got ? ' got' : ''), onclick: () => {
      if (!got) { Sfx.wrong(); toast(`Bu çıkartma için ${(i + 1) * STARS_PER_STICKER} yıldız gerekli ⭐`); return; }
      Sfx.pop(); b.classList.remove('tapped'); void b.offsetWidth; b.classList.add('tapped');
    } }, got ? ei(s) : h('span', { class: 'lockq' }, '?'));
    return b;
  }));
  return h('div', { class: 'screen town' }, topbar('Çıkartma Albümüm', { icon: '🏆' }),
    h('div', { class: 'scroll' },
      h('div', { class: 'sticker-head card' },
        ei('🎁', 'sh-gift'),
        h('div', null,
          h('b', null, `${have} / ${STICKERS.length} çıkartma`),
          have < STICKERS.length ? h('div', { class: 'muted' }, `Yeni çıkartmaya ${left} yıldız kaldı!`) : h('div', null, 'Hepsini topladın! 🏆'),
          h('div', { class: 'bar wide' }, h('i', { style: { width: ((STARS_PER_STICKER - left) / STARS_PER_STICKER * 100) + '%' } })))),
      grid));
};

/* ================================================= VELİ KİLİDİ */
function parentGate(onOk) {
  const pin = Store.s.settings.pin;
  let a, b, answer;
  if (!pin) { a = 11 + rnd(9); b = 3 + rnd(7); answer = String(a * b); }
  let val = '';
  const disp = h('div', { class: 'gate-disp' }, '');
  const upd = () => { disp.textContent = pin ? '●'.repeat(val.length) + '○'.repeat(Math.max(0, 4 - val.length)) : (val || ' '); };
  upd();
  const check = () => {
    const ok = pin ? val === pin : val === answer;
    if (ok) { m.close(); Sfx.correct(); onOk(); return; }
    if ((pin && val.length >= pin.length) || (!pin && val.length >= answer.length)) {
      Sfx.wrong(); disp.classList.remove('shake'); void disp.offsetWidth; disp.classList.add('shake');
      val = ''; setTimeout(upd, 300);
    }
  };
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '⌫', '0', '✓'].map(k =>
    h('button', { class: 'key' + (k === '✓' ? ' ok' : ''), onclick: () => {
      Sfx.tap();
      if (k === '⌫') val = val.slice(0, -1);
      else if (k === '✓') { check(); return; } else if (val.length < 6) val += k;
      upd();
      if (pin && val.length === pin.length) check();
    } }, k));
  const m = modal(h('div', { class: 'gate center' },
    ei('🔒', 'modal-emo'),
    h('h2', null, 'Veli Girişi'),
    h('p', { class: 'muted' }, pin ? 'Veli şifresini girin' : 'Devam etmek için işlemi çözün:'),
    pin ? null : h('div', { class: 'gate-q' }, `${a} × ${b} = ?`),
    disp,
    h('div', { class: 'keypad' }, keys)), [{ label: 'Vazgeç' }]);
}

/* ================================================= ÇOCUK AYARLARI */
Screens.settings = () => {
  const S = Store.s;
  const nameIn = h('input', { class: 'name-input sm', value: S.profile.name, maxlength: 16, onchange: () => {
    const v = nameIn.value.trim();
    if (v) { S.profile.name = v; Store.save(); App.applyReminder(); }
  } });
  const avs = h('div', { class: 'avatars small' }, AVATARS.map(a => {
    const b = h('button', { class: 'av' + (a === S.profile.avatar ? ' sel' : ''), onclick: () => {
      Sfx.pop(); S.profile.avatar = a; Store.save();
      avs.querySelectorAll('.av').forEach(x => x.classList.remove('sel')); b.classList.add('sel');
    } }, ei(a));
    return b;
  }));
  return h('div', { class: 'screen settings' }, topbar('Ayarlar', { icon: '⚙️' }),
    h('div', { class: 'scroll narrow' },
      h('div', { class: 'card' }, h('h3', null, 'Adım'), nameIn, h('h3', null, 'Arkadaşım'), avs),
      h('div', { class: 'card' },
        toggleRow('🔊', 'Ses efektleri', S.settings.sfx, v => { S.settings.sfx = v; Store.save(); }),
        segRow('🐢', 'Konuşma hızı', [['slow', 'Yavaş'], ['normal', 'Normal'], ['fast', 'Hızlı']], S.settings.voiceSpeed, v => { S.settings.voiceSpeed = v; Store.save(); Native.speak('Hello! How are you?'); }),
        toggleRow('🇹🇷', 'Türkçe anlamları göster', S.settings.showTr, v => { S.settings.showTr = v; Store.save(); }),
      ),
      h('button', { class: 'btn big parent-btn', onclick: () => parentGate(() => App.go('parent')) }, ei('🔒'), 'Veli Paneli'),
    ));
};

function toggleRow(icon, label, val, onChange, sub) {
  const sw = h('button', { class: 'switch' + (val ? ' on' : ''), role: 'switch', onclick: () => {
    Sfx.tap(); val = !val; sw.classList.toggle('on', val); onChange(val);
  } }, h('i'));
  return h('div', { class: 'row' }, h('span', { class: 'row-ic' }, icon), h('div', { class: 'row-l' }, label, sub ? h('small', null, sub) : null), sw);
}
function segRow(icon, label, opts, val, onChange, sub) {
  const seg = h('div', { class: 'seg' }, opts.map(([v, l]) => {
    const b = h('button', { class: v === val ? 'on' : '', onclick: () => {
      Sfx.tap(); seg.querySelectorAll('button').forEach(x => x.classList.remove('on')); b.classList.add('on'); onChange(v);
    } }, l);
    return b;
  }));
  return h('div', { class: 'row col-sm' }, h('span', { class: 'row-ic' }, icon), h('div', { class: 'row-l' }, label, sub ? h('small', null, sub) : null), seg);
}

/* ================================================= VELİ PANELİ */
Screens.parent = (tab, ctx) => {
  tab = tab || 'report';
  const tabs = [['report', '📊', 'Rapor'], ['class', '🏫', 'Sınıfım'], ['yard', '🛝', 'Okul Bahçesi'], ['time', '⏱️', 'Süre'], ['voice', '🎤', 'Ses & Konuşma'], ['content', '🧩', 'İçerik'], ['safe', '🛡️', 'Güvenlik']];
  const nav = h('div', { class: 'ptabs' }, tabs.map(([id, e, l]) =>
    h('button', { class: id === tab ? 'on' : '', onclick: () => { Sfx.tap(); App.replace('parent', id); } }, ei(e), h('span', null, l))));
  const content = ({ report: pReport, class: () => pSelect('classroom'), yard: () => pSelect('schoolyard'), time: pTime, voice: pVoice, content: pContent, safe: pSafe }[tab])(ctx);
  return h('div', { class: 'screen parent' }, topbar('Veli Paneli', { icon: '🛡️' }), nav, h('div', { class: 'scroll narrow' }, content));
};

function pReport() {
  const S = Store.s;
  const allIds = Object.keys(V);
  const seen = Store.seenIds().length;
  const learned = Store.learnedCount();
  const sp = S.speech;
  // son 7 gün
  const today = Store.day();
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const k = Store.dayKey(today - i);
    const d = new Date((today - i) * 86400000);
    days.push({ k, m: Math.round((S.time[k] || 0) / 60), label: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'][d.getUTCDay()] });
  }
  const maxM = Math.max(10, ...days.map(d => d.m));
  const weak = Store.weakIds(10);
  const kpi = (e, n, l) => h('div', { class: 'kpi' }, ei(e), h('b', null, n), h('small', null, l));
  return [
    h('div', { class: 'kpis' },
      kpi('📚', `${seen}/${allIds.length}`, 'Tanıdığı kelime'),
      kpi('🧠', learned, 'Öğrendiği kelime'),
      kpi('⭐', S.stars, 'Toplam yıldız'),
      kpi('🔥', S.streak.count || 0, 'Gün serisi'),
      kpi('⏱️', Math.round(Store.todaySeconds() / 60) + ' dk', 'Bugün'),
      kpi('🎤', sp.tries ? Math.round(sp.ok / sp.tries * 100) + '%' : '—', 'Konuşma başarısı')),
    h('div', { class: 'card' }, h('h3', null, 'Son 7 gün (dakika)'),
      h('div', { class: 'chart' }, days.map(d => h('div', { class: 'bar-col' },
        h('span', { class: 'bv' }, d.m || ''),
        h('i', { style: { height: (d.m / maxM * 100) + '%' } }),
        h('small', null, d.label))))),
    h('div', { class: 'card' }, h('h3', null, 'Konulara göre ilerleme'),
      h('div', { class: 'prog-list' }, TOPICS.map(t => {
        const p = Store.topicProgress(t);
        return h('div', { class: 'prog-row' }, ei(t.icon), h('span', { class: 'pr-name' }, t.tr),
          h('div', { class: 'bar two' }, h('i', { class: 'seen', style: { width: p.seen / p.total * 100 + '%' } }), h('i', { class: 'learned', style: { width: p.learned / p.total * 100 + '%' } })),
          h('small', null, `${p.learned}/${p.total}`));
      })),
      h('p', { class: 'muted legend' }, h('i', { class: 'lg seen' }), 'Gördü ', h('i', { class: 'lg learned' }), 'Öğrendi (en az 3 kez doğru)')),
    h('div', { class: 'card' }, h('h3', null, 'Cümle kalıpları'),
      h('div', { class: 'prog-list' }, LESSONS.map(l => {
        const st = S.lessons[l.id];
        return h('div', { class: 'prog-row' }, ei(l.icon), h('span', { class: 'pr-name' }, l.en),
          h('span', { class: 'lc-stars' }, [0, 1, 2].map(k => ei('⭐', st && k < st.best ? 'on' : 'off'))));
      }))),
    h('div', { class: 'card' }, h('h3', null, 'Zorlandığı kelimeler'),
      weak.length ? h('div', { class: 'weak' }, weak.map(id => h('button', { class: 'weak-chip', onclick: () => Native.speak(V[id].en) }, visOf(id), h('b', null, V[id].en), h('small', null, V[id].tr))))
        : h('p', { class: 'muted' }, 'Henüz zorlandığı bir kelime yok. 👍')),
  ];
}

/** Sınıfım / Okul Bahçesi: velinin öğretilecek eşyaları seçtiği bölüm */
function pSelect(topicId) {
  const S = Store.s.settings;
  const MIN = 4;
  const t = topicById(topicId);
  const DEF = t.selKey === 'yardItems' ? YARD_DEFAULT : CLASSROOM_DEFAULT;
  const all = [...new Set(t.items.map(i => i[0]))];
  const sel = new Set(S[t.selKey] || DEF);
  const countEl = h('b');
  const chips = {};
  const save = () => {
    S[t.selKey] = all.filter(id => sel.has(id));
    Store.save();
    countEl.textContent = `${sel.size} / ${all.length} seçili`;
    all.forEach(id => chips[id].classList.toggle('on', sel.has(id)));
  };
  const grid = h('div', { class: 'pick-items' }, all.map(id => {
    const c = h('button', { class: 'pick-item', onclick: () => {
      if (sel.has(id)) {
        if (sel.size <= MIN) { Sfx.wrong(); toast(`En az ${MIN} eşya seçili olmalı (oyunlar için)`); return; }
        sel.delete(id);
      } else sel.add(id);
      Sfx.tap();
      Native.speak(V[id].en);
      save();
    } }, h('span', { class: 'pi-check' }, '✓'), h('div', { class: 'pi-vis' }, visOf(id)), h('b', null, V[id].en), h('small', null, V[id].tr));
    chips[id] = c;
    return c;
  }));
  const setAll = (ids) => { sel.clear(); ids.forEach(i => sel.add(i)); Sfx.tap(); save(); };
  save();
  return [
    h('div', { class: 'card' },
      h('h3', null, `${t.tr}: öğretilecek eşyalar`),
      h('p', { class: 'muted' }, (t.id === 'classroom' ? 'Çocuğunuzun sınıfında olan eşyaları seçin.' : 'Çocuğunuzun okul bahçesinde olanları seçin.') + ' Seçilmeyen eşyalar sahnede görünmez; Dinle, Oku, Konuş, Hafıza ve Tekrar bölümlerinde de sorulmaz. Eşyaya dokununca İngilizcesi okunur.'),
      h('div', { class: 'row pick-tools' }, countEl, h('div', { class: 'spacer' }),
        h('button', { class: 'btn small', onclick: () => setAll(DEF) }, 'Önerilenler'),
        h('button', { class: 'btn small', onclick: () => setAll(all) }, 'Hepsini seç'),
        h('button', { class: 'btn small green', onclick: () => App.go('scene', t.id) }, ei(t.icon), 'Sahneye bak')),
      grid),
  ];
}

function pTime() {
  const S = Store.s.settings;
  const timeIn = h('input', { type: 'time', class: 'time-in', value: S.reminder.time, onchange: () => {
    S.reminder.time = timeIn.value || '18:00'; Store.save(); App.applyReminder(); toast('Hatırlatma saati kaydedildi');
  } });
  return [
    h('div', { class: 'card' },
      segRow('⏱️', 'Günlük oyun süresi', [[0, 'Sınırsız'], [15, '15 dk'], [20, '20 dk'], [30, '30 dk'], [45, '45 dk'], [60, '60 dk']], S.dailyLimit,
        v => { S.dailyLimit = +v; Store.save(); }, 'Süre dolunca uygulama nazikçe kilitlenir. Ek süreyi şifre ile verebilirsiniz.'),
      segRow('👀', 'Mola hatırlatması', [[0, 'Kapalı'], [10, '10 dk'], [15, '15 dk'], [20, '20 dk']], S.breakEvery,
        v => { S.breakEvery = +v; Store.save(); }, 'Belirtilen sürede bir 30 saniyelik göz molası verir.'),
      h('p', { class: 'muted' }, `Bugün oynanan: ${Math.round(Store.todaySeconds() / 60)} dk`)),
    h('div', { class: 'card' },
      toggleRow('🔔', 'Günlük hatırlatma bildirimi', S.reminder.on, v => { S.reminder.on = v; Store.save(); App.applyReminder(); },
        'Bubu her gün seçtiğiniz saatte çocuğunuzu oyuna davet eder. O gün zaten oynadıysa bildirim gönderilmez.'),
      h('div', { class: 'row' }, h('span', { class: 'row-ic' }, '🕕'), h('div', { class: 'row-l' }, 'Hatırlatma saati'), timeIn),
      Native.isApp ? h('button', { class: 'btn small', onclick: () => { Native.testReminder(); toast('Deneme bildirimi gönderildi'); } }, 'Deneme bildirimi gönder') : null),
  ];
}

function pVoice(ctx) {
  const S = Store.s.settings;
  const result = h('div', { class: 'mic-test-res muted' });
  const avail = Native.speechAvailable();
  const tts = Native.ttsStatus;
  return [
    h('div', { class: 'card' },
      segRow('🎯', 'Telaffuz hoşgörüsü', [['easy', 'Kolay'], ['medium', 'Orta'], ['hard', 'Zor']], S.speechLevel, v => { S.speechLevel = v; Store.save(); },
        'Kolay: yaklaşık söyleyiş yeterli (önerilen). Her kelimede 3 deneme hakkı vardır; olmazsa yine de cesaretlendirilir.'),
      toggleRow('🎙️', 'Gerçek ses kayıtları (önerilen)', S.realVoice !== false, v => { S.realVoice = v; Store.save(); Native.speak('Hello! How are you?'); }, `Profesyonel İngilizce seslendirme (${Clips.count()} kayıt). Kayıtlı olmayan cümleler ve Türkçe anlatım tabletin kendi sesiyle okunur. Kapalıyken her şeyi tabletin sesi okur.`),
      segRow('🐢', 'Konuşma hızı', [['slow', 'Yavaş'], ['normal', 'Normal'], ['fast', 'Hızlı']], S.voiceSpeed, v => { S.voiceSpeed = v; Store.save(); Native.speak('Hello! How are you?'); }),
      segRow('🗣️', 'Aksan (tablet sesi)', [['en-US', 'Amerikan'], ['en-GB', 'İngiliz']], S.accent, v => { S.accent = v; Store.save(); Native.speak('Hello! I am Bubu.'); }),
      toggleRow('🇹🇷', 'Bubu Türkçe açıklasın', S.trNarration, v => { S.trNarration = v; Store.save(); }, 'Ders girişlerinde ve konu seçiminde Türkçe sesli yönlendirme.'),
      toggleRow('🔤', 'Türkçe anlamları göster', S.showTr, v => { S.showTr = v; Store.save(); }),
      toggleRow('🔊', 'Ses efektleri', S.sfx, v => { S.sfx = v; Store.save(); })),
    h('div', { class: 'card' }, h('h3', null, 'Cihaz kontrolü'),
      h('div', { class: 'row' }, h('span', { class: 'row-ic' }, '🗣️'), h('div', { class: 'row-l' }, 'Sesli okuma (TTS)', h('small', null, tts === 'ok' ? 'Hazır' : tts === 'missing_en' ? 'İngilizce ses paketi eksik' : 'Hazırlanıyor / yok')),
        tts === 'missing_en' ? h('button', { class: 'btn small', onclick: () => Native.installTts() }, 'Yükle') :
          h('button', { class: 'btn small', onclick: () => Native.speak('Hello! This is a test.') }, 'Dene')),
      h('div', { class: 'row' }, h('span', { class: 'row-ic' }, '🎤'), h('div', { class: 'row-l' }, 'Ses tanıma', h('small', null, avail ? 'Kullanılabilir' : 'Bu cihazda yok — konuşma alıştırmaları "Söyledim 👍" ile devam eder')),
        avail ? h('button', { class: 'btn small', onclick: async () => {
          const ok = await Native.requestMic();
          if (!ok) { result.textContent = 'Mikrofon izni verilmedi. Tablet Ayarları → Uygulamalar → Bubu English → İzinler'; return; }
          result.textContent = '“apple” deyin…';
          const r = await Native.listen({ hint: 'apple', onPartial: t => { result.textContent = 'Duyulan: ' + t; } });
          if (!ctx.alive()) return;
          const ev = Speech.evaluate('apple', [...(r.texts || []), ...(r.partials || [])]);
          result.textContent = r.texts && r.texts.length
            ? `Duyulan: ${r.texts.slice(0, 3).join(' / ')} → puan %${Math.round(ev.score * 100)} ${ev.ok ? '✅' : '❌'}`
            : `Ses alınamadı (${r.error || '?'})`;
        } }, 'Mikrofon testi') : null),
      result,
      h('p', { class: 'muted small' }, 'İpucu: Ses tanıma için Google uygulaması/hizmeti gerekir ve en iyi sonuç internet bağlantısıyla alınır. Ayarlar → Google → Ses → Çevrimdışı konuşma tanıma bölümünden "English (US)" paketini indirirseniz internetsiz de çalışır.')),
  ];
}

function pContent() {
  const S = Store.s.settings;
  return [
    h('div', { class: 'card' }, h('h3', null, 'Ana sayfada görünen bölümler'),
      MODULES.map(m => toggleRow(h('span', null, ei(m.icon)), `${m.tr} (${m.en})`, S.modules[m.id] !== false, v => { S.modules[m.id] = v; Store.save(); }))),
    h('div', { class: 'card' }, h('h3', null, 'İçerik özeti'),
      h('p', null, `${Object.keys(V).length} kelime · ${TOPICS.length} konu/mahalle · ${LESSONS.length} cümle kalıbı dersi`),
      h('p', { class: 'muted' }, 'Kelimeler aralıklı tekrar sistemiyle (1-2-4-7-14 gün) yeniden sorulur; böylece kalıcı öğrenme sağlanır.')),
  ];
}

function pSafe() {
  const S = Store.s.settings;
  const pinIn = h('input', { class: 'name-input sm', type: 'tel', inputmode: 'numeric', maxlength: 6, placeholder: S.pin ? '••••' : '4 haneli şifre' });
  return [
    h('div', { class: 'card' }, h('h3', null, 'Veli şifresi'),
      h('p', { class: 'muted' }, S.pin ? 'Şifre tanımlı. Veli paneline şifre ile girilir.' : 'Şifre yok: veli paneline çarpma işlemi çözülerek girilir.'),
      h('div', { class: 'row' }, pinIn,
        h('button', { class: 'btn small green', onclick: () => {
          const v = pinIn.value.trim();
          if (!/^\d{4,6}$/.test(v)) { toast('4-6 haneli rakam girin'); return; }
          S.pin = v; Store.saveNow(); toast('Şifre kaydedildi 🔒'); App.replace('parent', 'safe');
        } }, 'Kaydet'),
        S.pin ? h('button', { class: 'btn small', onclick: () => { S.pin = ''; Store.saveNow(); toast('Şifre kaldırıldı'); App.replace('parent', 'safe'); } }, 'Kaldır') : null)),
    h('div', { class: 'card' }, h('h3', null, 'İlerlemeyi sıfırla'),
      h('p', { class: 'muted' }, 'Tüm yıldızlar, kelime ilerlemesi ve çıkartmalar silinir. Ad ve ayarlar korunur.'),
      h('button', { class: 'btn small danger', onclick: () => modal(h('div', { class: 'center' }, h('h2', null, 'Emin misiniz?'), h('p', null, 'Bu işlem geri alınamaz.')), [
        { label: 'Vazgeç' },
        { label: 'Sıfırla', cls: 'danger', onclick: () => { Store.reset(); toast('İlerleme sıfırlandı'); App.home(); } },
      ]) }, 'Sıfırla')),
    h('div', { class: 'card' }, h('h3', null, 'Hakkında'),
      h('p', null, `Bubu English · sürüm ${Native.version()}`),
      h('p', { class: 'muted small' }, 'Reklam yok, satın alma yok, veri toplama yok. Tüm ilerleme yalnızca bu tablette saklanır.'),
      h('p', { class: 'muted small' }, 'Görseller: Microsoft Fluent Emoji 3D (MIT lisansı). Yazı tipi: Baloo 2 (SIL Open Font License).')),
  ];
}
