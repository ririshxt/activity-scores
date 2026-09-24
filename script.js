/* ====== EDIT THESE ====== */
const START = new Date('2025-02-25T00:00:00'); // the day you became a couple (1y 7m on Sep 25, 2026)

const story = [
  ['The day we met', '', 'It all started in that classroom when I decided to sit next to you. I’m not gonna lie—the moment I looked at you, it was total love at first sight! My heart started racing, and I spent the rest of class trying to play it cool while secretly being completely mesmerized by you. Choosing that seat was easily the best decision I ever made.'],
  ['Our first date', '', 'I remember being so nervous to finally go out with you, but the second I saw your face, all the anxiety turned into pure excitement. I’ll never forget those shy, nervous smiles we kept giving each other and how effortless it felt just being around you. That day proved to me that what we had was really special.'],
  ['The day you said yes', 'Feb 25, 2025', 'The day you finally said "yes" and allowed me to court you. Getting that green light from you was the best "yes" of my life. It gave me the chance to prove how much you mean to me and start building this beautiful story with you.'],
  ['Today', 'September 25, 2026', '1 year and 7 months, Happy monthsary, my love! 1 year and 7 months of loving you, and I would choose you over and over again. From sitting beside you in class to where we are now, every second with you has been worth it.']
];

const captions = ['Us 💜','My favorite person','Forever','Babu 🌷','Best day','Always you'];
const PHOTO_COUNT = 6;   // photos/1.jpg ... photos/6.jpg
const VIDEO_COUNT = 2;   // videos/1.mp4 ... videos/2.mp4

const letters = [
  { icon:'💜', title:'My letter', text:
`Happy 1 year and 7 months to us!

I have been sitting here trying to figure out how to put everything I feel into words, and honestly, I don't think there are enough of them. But I'm going to try, because you deserve to hear it.

When I think back to the beginning, I remember how simple it all felt. Just two people talking, laughing, getting to know each other. I didn't know then that you would become the person I think about when I wake up and the last person on my mind before I sleep. I didn't know that a name, Babu, could start to feel like home.

Thank you for staying. Thank you for choosing me on the days when I was easy to love, and even more on the days when I wasn't. Thank you for your patience, for your kindness, and for the way you make me feel like I can be exactly who I am. With you, I never have to pretend.

You have taught me so much about love. That it's not always big and loud. Sometimes it's a message that says "kumain ka na ba?", a hand that finds mine without asking, a laugh that fixes a terrible day, or just sitting together in comfortable silence. Those little things are the biggest things to me.

I know I'm not perfect. I make mistakes, and I don't always say the right thing at the right time. But I promise you this: I will keep trying, every day, to be better for you and for us. I will listen more, love harder, and hold on tighter.

I'm proud of you, Babu. I'm proud of who you are and everything you're becoming. I want to be there for every dream you chase, every worry you carry, and every small victory you think nobody notices. I will notice, always.

I don't know exactly what the future looks like, but I know I want you in it. Every version of it, every ordinary Tuesday, every big and small adventure. As long as it's you next to me, I'm already home.

So on this monthsary, I just want you to know: you are so loved. More than you realize, more than I can ever say out loud. Palagi, ikaw ang pipiliin ko.

Mahal na mahal kita, Babu. Happy monthsary. 💜


Yours always,
Your Bebuuuuu` },
  { icon:'🌷', title:'Why I love you', text:
`Why I love you, Babu

💜 Your smile can fix my whole day.
🌷 You care so deeply, even about little things.
💗 You make me want to be a better person.
✨ Home doesn't feel like a place anymore, it feels like you.
🎶 Every love song suddenly makes sense.
💌 And the best reason of all: you're simply you.` },
  { icon:'🌙', title:'Open when you miss me', text:
`Babu,

If you're reading this, I know I'm not next to you right now. Close your eyes and feel my hug, because I'm hugging you in my heart.

Distance, busy days, sleepy nights, none of it changes this: you are my favorite thought, always.

See you, babuuuu!. I wuuuuv you so much!. 💜` },
  { icon:'🎁', title:'Promises', text:
`My promises to you, Babu

I promise to listen, even when it's hard.
I promise to be your safe place.
I promise to make you laugh on your worst days.
I promise to keep choosing you, always.
I promise to be the best man for you.

Palagi. 💜` }
];

/* ====== STORY ====== */
document.getElementById('timeline').innerHTML = story.map(e =>
  `<div class="event"><b>${e[0]}</b><small>${e[1]}</small>${e[2]}</div>`).join('');

/* ====== PHOTOS + VIDEOS ====== */
const rot = i => (i % 2 ? 2 : -2) + 'deg';
document.getElementById('photos').innerHTML = Array.from({length:PHOTO_COUNT}, (_, i) =>
  `<div class="frame" style="--r:${rot(i)}"><div class="box"><span>Photo ${i+1} 💜</span>
   <img src="photos/${i+1}.jpg" alt="" onerror="this.remove()"></div><p>${captions[i] || ''}</p></div>`).join('');
document.getElementById('videos').innerHTML = Array.from({length:VIDEO_COUNT}, (_, i) =>
  `<div class="frame" style="--r:${rot(i+1)}"><div class="box"><span>Video ${i+1} 🎬</span>
   <video controls playsinline src="videos/${i+1}.mp4" onerror="this.remove()"></video></div></div>`).join('');

const lb = document.getElementById('lightbox');
document.getElementById('photos').addEventListener('click', e => {
  if (e.target.tagName === 'IMG') { lb.querySelector('img').src = e.target.src; lb.classList.add('show'); }
});
lb.onclick = () => lb.classList.remove('show');

/* ====== LETTERS (typewriter) ====== */
const modal = document.getElementById('modal'), box = document.getElementById('letter');
let typer;
document.getElementById('letterBtns').innerHTML = letters.map((l, i) =>
  `<button class="env" data-i="${i}"><span>${l.icon}</span>${l.title}</button>`).join('');
document.getElementById('letterBtns').addEventListener('click', e => {
  const b = e.target.closest('.env'); if (!b) return;
  const text = letters[b.dataset.i].text; let n = 0;
  box.textContent = ''; modal.classList.add('show'); burst(10);
  clearInterval(typer);
  typer = setInterval(() => { box.textContent = text.slice(0, ++n); if (n >= text.length) clearInterval(typer); }, 28);
});
document.getElementById('closeLetter').onclick = () => { clearInterval(typer); modal.classList.remove('show'); };
modal.onclick = e => { if (e.target === modal) document.getElementById('closeLetter').click(); };

/* ====== COUNTER ====== */
function tick() {
  let s = Math.floor((Date.now() - START) / 1000);
  const d = Math.floor(s / 86400); s %= 86400;
  cd.textContent = d; ch.textContent = Math.floor(s / 3600);
  cm.textContent = Math.floor(s % 3600 / 60); cs.textContent = s % 60;
}
tick(); setInterval(tick, 1000);

/* ====== MUSIC ====== */
const song = document.getElementById('song'), music = document.getElementById('music');
music.onclick = () => {
  if (song.paused) { song.play(); music.classList.add('on'); }
  else { song.pause(); music.classList.remove('on'); }
};

/* ====== GATE ====== */
document.getElementById('openBtn').onclick = () => {
  song.volume = 0.7;
  song.play().then(() => music.classList.add('on')).catch(() => {});
  document.getElementById('envelope').classList.add('open');
  setTimeout(() => document.getElementById('gate').classList.add('hide'), 900);
  burst(30);
};

/* ====== FLOWER SECRET MESSAGES ====== */
const secrets = ['You are my favorite person 💜','I love you more every day 🌷','Thank you for choosing me 💗',
  'My heart is yours, Babu ✨','Palagi, ikaw lang. 💜','You are my home 🏡💜'];
let si = 0;
document.getElementById('bouquet').onclick = () => {
  document.getElementById('flowerMsg').textContent = secrets[si++ % secrets.length];
  burst(8);
};

/* ====== FINAL QUESTION ====== */
const no = document.getElementById('no');

function runAway() {
  const padding = 20;
  const rect = no.getBoundingClientRect();

  const maxX = window.innerWidth - rect.width - padding;
  const maxY = window.innerHeight - rect.height - padding;

  const x = padding + Math.random() * Math.max(0, maxX - padding);
  const y = padding + Math.random() * Math.max(0, maxY - padding);

  no.style.position = 'fixed';
  no.style.left = x + 'px';
  no.style.top = y + 'px';
  no.style.zIndex = '9999';
}

/* Desktop — move when mouse gets close */
document.addEventListener('mousemove', e => {
  const rect = no.getBoundingClientRect();

  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;

  const distance = Math.hypot(
    e.clientX - buttonX,
    e.clientY - buttonY
  );

  /* Change 120 to make the NO button more/less scared */
  if (distance < 180) {
    runAway();
  }
});

/* Mobile — move when touched */
no.addEventListener('touchstart', e => {
  e.preventDefault();
  runAway();
});

/* Also move if someone somehow clicks it */
no.addEventListener('click', e => {
  e.preventDefault();
  runAway();
});

/* YES button */
document.getElementById('yes').onclick = () => {
  askText.textContent = 'I knew it! I love you, Babu. Forever. 💜';
  no.style.display = 'none';
  burst(80);
};


/* ====== FLOATING EMOJI ====== */
function burst(n = 25) {
  const e = ['💜','💗','🌷','💖','✨'];
  for (let i = 0; i < n; i++) {
    const s = document.createElement('div');
    s.className = 'floater';
    s.textContent = e[Math.random() * e.length | 0];
    s.style.left = Math.random() * 100 + 'vw';
    s.style.fontSize = (16 + Math.random() * 24) + 'px';
    s.style.animationDuration = (4 + Math.random() * 4) + 's';
    s.style.animationDelay = Math.random() * 1.5 + 's';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 10000);
  }
}

/* ====== SCROLL REVEAL ====== */
const io = new IntersectionObserver(es => es.forEach(x => x.isIntersecting && x.target.classList.add('in')), {threshold: .15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ====== BACKGROUND: STARS + PETALS ====== */
const cv = document.getElementById('bg'), cx = cv.getContext('2d');
let W, H;
function size() { W = cv.width = innerWidth; H = cv.height = innerHeight; }
size(); addEventListener('resize', size);
const stars = Array.from({length: 70}, () => ({x: Math.random(), y: Math.random(), r: Math.random() * 1.6 + .3, p: Math.random() * 6}));
const petals = Array.from({length: 22}, () => ({x: Math.random() * W, y: Math.random() * H, s: Math.random() * 8 + 5,
  v: Math.random() * .8 + .4, a: Math.random() * 6, c: Math.random() < .5 ? '#f9a8d4' : '#c084fc'}));
(function draw(t = 0) {
  cx.clearRect(0, 0, W, H);
  stars.forEach(s => {
    cx.globalAlpha = .4 + .6 * Math.abs(Math.sin(t / 900 + s.p));
    cx.fillStyle = '#fff'; cx.beginPath(); cx.arc(s.x * W, s.y * H, s.r, 0, 7); cx.fill();
  });
  petals.forEach(p => {
    p.y += p.v; p.a += .02; p.x += Math.sin(p.a) * .6;
    if (p.y > H + 20) { p.y = -20; p.x = Math.random() * W; }
    cx.globalAlpha = .55; cx.fillStyle = p.c;
    cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a);
    cx.beginPath(); cx.ellipse(0, 0, p.s, p.s / 2, 0, 0, 7); cx.fill(); cx.restore();
  });
  requestAnimationFrame(draw);
})();

setInterval(() => burst(2), 4000);