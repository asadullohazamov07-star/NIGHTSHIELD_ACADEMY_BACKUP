"use strict";

const $ = id => document.getElementById(id);

const courseNames = {
  cyber: "Kiberxavfsizlik",
  programming: "Dasturlash",
  information: "Axborot texnologiyalari"
};

const lessons = [
  {
    id: "cyber-basics",
    title: "Kiberxavfsizlik asoslari",
    course: "cyber", duration: 7, icon: "⛨",
    description: "Qurilmalar, tarmoqlar va shaxsiy ma’lumotlarni himoyalash.",
    content: `Kiberxavfsizlik — qurilmalar, tarmoqlar va raqamli ma’lumotlarni tahdidlardan himoya qilish.

Asosiy odatlar:
• Tizim va ilovalarni yangilang.
• Har bir xizmat uchun alohida, uzun parol ishlating.
• Ikki bosqichli tasdiqlashni yoqing.
• Noma’lum havola va fayllardan ehtiyot bo‘ling.
• Muhim ma’lumotlarning zaxira nusxasini saqlang.`,
    questions: [
      { q: "Kiberxavfsizlik nimani himoya qiladi?", options: ["Faqat monitorni", "Qurilmalar, tarmoqlar va ma’lumotlarni", "Faqat fon rasmini"], answer: 1 },
      { q: "Qaysi odat xavfsizroq?", options: ["Hamma joyda bitta parol", "Yangilanishlarni o‘chirish", "Har xizmatga alohida kuchli parol"], answer: 2 }
    ]
  },
  {
    id: "phishing",
    title: "Fishing xabarlarini aniqlash",
    course: "cyber", duration: 6, icon: "⌁",
    description: "Soxta xabarlar va shubhali havolalarni tanish.",
    content: `Fishing — odamni aldab, parol, bank ma’lumoti yoki tasdiqlash kodini olishga urinish.

Xabar shoshiltirishi, qo‘rqitishi, sovrin va’da qilishi yoki soxta saytga olib borishi mumkin. Yuboruvchining manzili va domen nomini tekshiring.

Bankdan xabar kelsa, xabardagi havolani bosish o‘rniga rasmiy ilovani mustaqil oching.`,
    questions: [
      { q: "Fishing xabarining belgisi qaysi?", options: ["Shoshilinch harakatga majburlash", "O‘zingiz ochgan sozlama", "Oddiy oflayn hujjat"], answer: 0 },
      { q: "Shubhali bank havolasi kelsa nima qilasiz?", options: ["Darhol bosaman", "Rasmiy ilovani mustaqil ochib tekshiraman", "SMS kodni yuboraman"], answer: 1 }
    ]
  },
  {
    id: "passwords",
    title: "Kuchli parol va parol menejeri",
    course: "cyber", duration: 6, icon: "▦",
    description: "Taxmin qilish qiyin parol yarating va hisoblaringizni himoyalang.",
    content: `Kuchli parol uzun va boshqa saytlarda takrorlanmaydi. Ism, tug‘ilgan sana yoki 123456 kabi ketma-ketliklardan foydalanmang.

Parol menejeri noyob parollarni yaratish va saqlashga yordam beradi. Ikki bosqichli tasdiqlashni yoqing.

Parol yoki bir martalik kodni hech kimga bermang.`,
    questions: [
      { q: "Eng yaxshi parol odati qaysi?", options: ["Barcha saytlarda bir xil parol", "Har bir xizmat uchun noyob parol", "Parolni do‘stga berish"], answer: 1 }
    ]
  },
  {
    id: "malware",
    title: "Zararli dasturlar",
    course: "cyber", duration: 8, icon: "◉",
    description: "Zararli dasturlardan himoyalanishni o‘rganing.",
    content: `Zararli dastur qurilmaga zarar yetkazish, josuslik qilish yoki ma’lumotlarni o‘g‘irlash uchun yaratilishi mumkin.

Ilovalarni rasmiy manbadan o‘rnating, operatsion tizimni yangilang, himoya dasturidan foydalaning va muhim fayllarning zaxira nusxasini saqlang.`,
    questions: [
      { q: "Ilovani qayerdan o‘rnatish ma’qul?", options: ["Noma’lum havoladan", "Rasmiy do‘kon yoki ishlab chiquvchi saytidan", "Tasodifiy guruhdan"], answer: 1 }
    ]
  },
  {
    id: "secure-web",
    title: "Internetda xavfsiz ishlash",
    course: "cyber", duration: 7, icon: "◎",
    description: "Brauzer, HTTPS va sayt ruxsatlarini tushuning.",
    content: `HTTPS brauzer bilan sayt orasidagi aloqani shifrlaydi, ammo saytning o‘zi ishonchli ekanini kafolatlamaydi. Domenni diqqat bilan tekshiring.

Brauzer yoki ilovaga faqat kerakli ruxsatlarni bering. Umumiy kompyuterda ish tugagach hisobdan chiqing.`,
    questions: [
      { q: "HTTPS nimani anglatadi?", options: ["Sayt doimo halol", "Aloqa shifrlangan, ammo saytni ham tekshirish kerak", "Internet mutlaqo xavfsiz"], answer: 1 }
    ]
  },
  {
    id: "social-engineering",
    title: "Ijtimoiy muhandislik",
    course: "cyber", duration: 7, icon: "♧",
    description: "Aldov va psixologik bosim orqali ma’lumot olish urinishlarini taning.",
    content: `Ijtimoiy muhandislik odamning ishonchi yoki shoshilishidan foydalanadi. Firibgar o‘zini bank yoki texnik yordam xodimi qilib ko‘rsatishi mumkin.

Shoshilinch so‘rovlarni boshqa rasmiy kanal orqali tekshiring. Kod, parol va maxfiy hujjatlarni bermang.`,
    questions: [
      { q: "Notanish odam tasdiqlash kodini so‘rasa nima qilasiz?", options: ["Kodni yuboraman", "Kodni bermay, rasmiy kanal orqali tekshiraman", "Kodni qisman beraman"], answer: 1 }
    ]
  },
  {
    id: "backup",
    title: "Zaxira nusxa va tiklash",
    course: "cyber", duration: 5, icon: "⤴",
    description: "Muhim fayllarni yo‘qolishdan saqlashni o‘rganing.",
    content: `Zaxira nusxa — muhim ma’lumotning qo‘shimcha nusxasi. Uni boshqa qurilmada yoki ishonchli bulut xizmatida saqlang.

Vaqti-vaqti bilan fayllarni tiklashni sinab ko‘ring.`,
    questions: [
      { q: "Zaxira nusxaning vazifasi nima?", options: ["Ma’lumot yo‘qolsa tiklashga yordam berish", "Parolni ommaga ko‘rsatish", "Internetni tezlashtirish"], answer: 0 }
    ]
  },
  {
    id: "privacy",
    title: "Shaxsiy ma’lumot va maxfiylik",
    course: "cyber", duration: 6, icon: "◌",
    description: "Shaxsiy ma’lumotlarni ehtiyotkorlik bilan boshqarish.",
    content: `Shaxsiy ma’lumot ism, manzil, telefon, hujjat, joylashuv yoki hisob ma’lumotlarini o‘z ichiga olishi mumkin.

Ijtimoiy tarmoqlarda ortiqcha ma’lumot joylamang. Ilovalarga faqat zarur ruxsatlarni bering. Tasdiqlash kodlarini begonalarga yubormang.`,
    questions: [
      { q: "Ilova kamera ruxsatini so‘rasa nima qilish kerak?", options: ["Har doim ruxsat berish", "Bu ruxsat zarurligini tekshirish", "Barcha himoyani o‘chirish"], answer: 1 }
    ]
  },
  {
    id: "incident-response",
    title: "Xavfsizlik hodisasiga javob",
    course: "cyber", duration: 7, icon: "⚑",
    description: "Shubhali faoliyat sezilganda to‘g‘ri harakat qilish.",
    content: `Agar hisobingizga begona kirgan bo‘lishi mumkin bo‘lsa, ishonchli qurilmadan parolni almashtiring, faol seanslarni tekshiring va ikki bosqichli himoyani yoqing.

Ish yoki o‘qish qurilmasida mas’ul IT xodimiga xabar bering.`,
    questions: [
      { q: "Hisobga begona kirgan bo‘lishi mumkin. Nima qilasiz?", options: ["E’tiborsiz qoldiraman", "Shubhali havolalarni ochaman", "Parolni almashtirib, rasmiy yordam olaman"], answer: 2 }
    ]
  },
  {
    id: "programming-intro",
    title: "Dasturlashga kirish",
    course: "programming", duration: 7, icon: "</>",
    description: "Algoritm, o‘zgaruvchi, shart va takrorlash tushunchalari.",
    content: `Dasturlash — kompyuter bajaradigan ko‘rsatmalarni yozish.

Algoritm muammoni hal qilish qadamlari ketma-ketligidir. O‘zgaruvchi qiymat saqlaydi, shart qaror chiqaradi, sikl esa amallarni takrorlaydi.`,
    questions: [
      { q: "Algoritm nima?", options: ["Muammoni yechish qadamlari", "Kompyuter markasi", "Rasm formati"], answer: 0 }
    ]
  },
  {
    id: "html-css",
    title: "HTML va CSS asoslari",
    course: "programming", duration: 8, icon: "▤",
    description: "Veb-sahifaning tuzilishi va ko‘rinishini tushuning.",
    content: `HTML sahifa tuzilmasini belgilaydi: sarlavha, paragraf, rasm va havolalar. CSS rang, masofa, shrift va joylashuvni boshqaradi.

Flexbox va Grid moslashuvchan maket yaratishga yordam beradi.`,
    questions: [
      { q: "CSS nima uchun ishlatiladi?", options: ["Sahifa ko‘rinishini bezash uchun", "Ma’lumotlar bazasini boshqarish uchun", "Elektr tokini o‘lchash uchun"], answer: 0 }
    ]
  },
  {
    id: "javascript",
    title: "JavaScript bilan tanishuv",
    course: "programming", duration: 9, icon: "JS",
    description: "Veb-sahifaga interaktivlik qo‘shing.",
    content: `JavaScript tugma bosilishi, forma tekshiruvi va sahifadagi ma’lumotlarni yangilash kabi vazifalarni bajaradi.

const va let o‘zgaruvchilar yaratishda ishlatiladi. Funksiyalar kodni tartiblaydi. Brauzer konsolidagi xatolarni o‘qish muhim ko‘nikmadir.`,
    questions: [
      { q: "JavaScript nimaga yordam beradi?", options: ["Faqat chop etishga", "Veb-sahifaga interaktivlik qo‘shishga", "Elektr tokini o‘zgartirishga"], answer: 1 }
    ]
  },
  {
    id: "secure-code",
    title: "Xavfsiz kod yozish",
    course: "programming", duration: 8, icon: "⌘",
    description: "Kirish ma’lumotlari va maxfiy kalitlarni himoyalash.",
    content: `Foydalanuvchi kiritgan ma’lumotlarni tekshiring. Ma’lumotlar bazasi bilan ishlaganda parametrli so‘rovlardan foydalaning.

API maxfiy kalitlarini frontend JavaScript ichida saqlamang. Ular server tomondagi maxfiy sozlamalarda saqlanishi kerak.`,
    questions: [
      { q: "API maxfiy kalitini qayerda saqlash kerak?", options: ["Ochiq HTML ichida", "Serverdagi maxfiy sozlamada", "Ommaviy repozitoriyda"], answer: 1 }
    ]
  },
  {
    id: "git-basics",
    title: "Git va versiyalar nazorati",
    course: "programming", duration: 7, icon: "⑂",
    description: "Loyiha tarixini va koddagi o‘zgarishlarni boshqarish.",
    content: `Git fayllardagi o‘zgarishlar tarixini saqlaydi. Commit o‘zgarishlarni qayd etadi, branch esa alohida yo‘nalishda ishlash imkonini beradi.

Parollar va maxfiy kalitlarni ommaviy repozitoriyga yubormang.`,
    questions: [
      { q: "Gitning vazifasi nima?", options: ["Kod tarixini boshqarish", "Internetni almashtirish", "Ekran rangini o‘zgartirish"], answer: 0 }
    ]
  },
  {
    id: "networks",
    title: "Kompyuter tarmoqlari",
    course: "information", duration: 8, icon: "⌘",
    description: "IP, DNS, router va internet aloqasi asoslari.",
    content: `IP manzil tarmoqdagi manzillash uchun ishlatiladi. DNS domen nomlarini IP manzillarga moslaydi. Router tarmoqlar orasida ma’lumot uzatadi.

Uy tarmog‘ida router parolini o‘zgartiring va dasturiy ta’minotini yangilab turing.`,
    questions: [
      { q: "DNS nima qiladi?", options: ["Ekran yorqinligini o‘zgartiradi", "Domen nomini IP manzilga moslaydi", "Faylni chop etadi"], answer: 1 }
    ]
  },
  {
    id: "linux",
    title: "Linux bilan tanishuv",
    course: "information", duration: 8, icon: "⌁",
    description: "Operatsion tizim va terminalning asosiy vazifalari.",
    content: `Linux — serverlar va kompyuterlarda ishlatiladigan operatsion tizimlar oilasi.

Terminal buyruqlar orqali fayllarni ko‘rish va tizim bilan ishlashga yordam beradi. Buyruqni bajarishdan oldin uning vazifasini tushunib oling.`,
    questions: [
      { q: "Terminal nima uchun kerak?", options: ["Buyruqlar orqali tizim bilan ishlash", "Faqat rasm chizish", "Monitorni almashtirish"], answer: 0 }
    ]
  },
  {
    id: "updates",
    title: "Tizim va ilovalarni yangilash",
    course: "information", duration: 5, icon: "↻",
    description: "Yangilanishlar xavfsizlikka qanday yordam berishini biling.",
    content: `Dastur yangilanishlari xatolarni tuzatishi va xavfsizlik zaifliklarini yopishi mumkin.

Operatsion tizim va ilovalarni rasmiy manbadan yangilang.`,
    questions: [
      { q: "Yangilanishlar nima uchun muhim?", options: ["Zaifliklarni tuzatishi mumkin", "Har doim parolni oshkor qiladi", "Internetni o‘chiradi"], answer: 0 }
    ]
  },
  {
    id: "wifi-security",
    title: "Wi-Fi xavfsizligi",
    course: "information", duration: 6, icon: "⌁",
    description: "Simsiz tarmoqni xavfsiz sozlashni o‘rganing.",
    content: `Uy Wi-Fi tarmog‘iga kuchli parol qo‘ying va router boshqaruv parolini standart holatda qoldirmang. WPA2 yoki WPA3 himoyasidan foydalaning.

Ochiq Wi-Fi orqali maxfiy ma’lumotlarni yuborishda ehtiyot bo‘ling.`,
    questions: [
      { q: "Uy Wi-Fi tarmog‘ini qanday himoyalash mumkin?", options: ["Parolsiz qoldirish", "Kuchli parol va zamonaviy shifrlash ishlatish", "Router yangilanishini o‘chirish"], answer: 1 }
    ]
  }
];

const glossary = [
  ["Kiberxavfsizlik", "Qurilmalar, tarmoqlar va raqamli ma’lumotlarni tahdidlardan himoyalash."],
  ["Fishing", "Soxta xabar yoki sayt orqali maxfiy ma’lumotlarni olishga urinish."],
  ["Malware", "Qurilmaga zarar yetkazish yoki ruxsatsiz faoliyat uchun yaratilgan dastur."],
  ["Firewall", "Tarmoq trafikini qoidalar asosida nazorat qiluvchi himoya vositasi."],
  ["HTTPS", "Brauzer va sayt o‘rtasidagi aloqani shifrlash protokoli."],
  ["DNS", "Domen nomlarini IP manzillarga moslashtiruvchi tizim."],
  ["IP manzil", "Tarmoqdagi qurilma yoki interfeysni aniqlash uchun ishlatiladigan manzil."],
  ["Ikki bosqichli tasdiqlash", "Hisobga kirishda qo‘shimcha tasdiq talab qiladigan himoya."],
  ["Zaxira nusxa", "Ma’lumot yo‘qolganida tiklash uchun saqlanadigan qo‘shimcha nusxa."],
  ["API", "Dasturlar bir-biri bilan aloqa qilishi uchun belgilangan interfeys."],
  ["Shifrlash", "Ma’lumotni tegishli kalitsiz tushunib bo‘lmaydigan shaklga o‘zgartirish."],
  ["Zaiflik", "Tizimda hujumchi foydalanishi mumkin bo‘lgan xato yoki kamchilik."],
  ["Linux", "Server va kompyuterlarda ishlatiladigan operatsion tizimlar oilasi."],
  ["Algoritm", "Muammoni hal qilish uchun tartiblangan amallar ketma-ketligi."],
  ["HTML", "Veb-sahifaning tuzilishini belgilaydigan belgilash tili."],
  ["CSS", "Veb-sahifaning ko‘rinishini boshqaradigan uslublar tili."],
  ["JavaScript", "Veb-sahifalarga interaktivlik qo‘shadigan dasturlash tili."]
];

const resources = [
  {
    id: "phishing-visual",
    title: "Fishing xabarini 5 belgidan tanish",
    type: "visual",
    category: "Kiberxavfsizlik",
    description: "Shoshiltirish, noodatiy yuboruvchi, g‘alati domen, maxfiy kod so‘rashi va kutilmagan fayl — tekshirish kerak bo‘lgan belgilar.",
    tips: ["Yuboruvchi manzilini tekshiring", "Havola domenini tekshiring", "SMS-kodni hech kimga bermang"]
  },
  {
    id: "password-visual",
    title: "Kuchli parol tuzish sxemasi",
    type: "visual",
    category: "Hisob xavfsizligi",
    description: "Uzun va noyob parol tanlang. Har bir xizmat uchun alohida parol ishlating.",
    tips: ["Uzunlikni birinchi o‘ringa qo‘ying", "Parollarni qayta ishlatmang", "Tasdiqlash kodini sir saqlang"]
  },
  {
    id: "wifi-visual",
    title: "Uy Wi-Fi xavfsizligi xaritasi",
    type: "visual",
    category: "Tarmoq xavfsizligi",
    description: "Router parolini almashtiring, WPA2 yoki WPA3 dan foydalaning va dasturini yangilang.",
    tips: ["Router parolini o‘zgartiring", "WPA2/WPA3 ni tanlang", "Mehmonlar uchun alohida tarmoq ishlating"]
  },
  {
    id: "html-visual",
    title: "HTML, CSS va JavaScript farqi",
    type: "visual",
    category: "Dasturlash",
    description: "HTML — sahifa tuzilmasi, CSS — dizayn, JavaScript — interaktiv xatti-harakatlar.",
    tips: ["HTML — tuzilma", "CSS — ko‘rinish", "JavaScript — harakat"]
  },
  {
    id: "phishing-video",
    title: "Fishing va internet firibgarligi",
    type: "video",
    category: "Kiberxavfsizlik",
    description: "Soxta xabarlar va xavfli havolalarni tanib olish bo‘yicha videolar.",
    search: "https://www.youtube.com/results?search_query=phishing+internet+xavfsizligi+o%27zbekcha"
  },
  {
    id: "password-video",
    title: "Parol va ikki bosqichli himoya",
    type: "video",
    category: "Hisob xavfsizligi",
    description: "Hisoblarni himoyalash, noyob parollar va ikki bosqichli tasdiqlash.",
    search: "https://www.youtube.com/results?search_query=kuchli+parol+ikki+bosqichli+tasdiqlash+o%27zbekcha"
  },
  {
    id: "html-video",
    title: "HTML va CSS: birinchi veb-sahifa",
    type: "video",
    category: "Dasturlash",
    description: "HTML va CSS asoslarini bosqichma-bosqich o‘rgatuvchi videolar.",
    search: "https://www.youtube.com/results?search_query=HTML+CSS+darslari+o%27zbekcha+boshlang%27ich"
  },
  {
    id: "network-video",
    title: "Kompyuter tarmoqlari va Wi-Fi",
    type: "video",
    category: "Axborot texnologiyalari",
    description: "Router, IP manzil, DNS va uy tarmog‘i haqida videolar.",
    search: "https://www.youtube.com/results?search_query=kompyuter+tarmoqlari+IP+DNS+router+o%27zbekcha"
  }
];

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    toast("Brauzer xotirasiga saqlab bo‘lmadi.");
  }
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function toast(message) {
  const element = $("toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 3000);
}

function openModal(id) {
  $(id).classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  $(id).classList.add("hidden");
  if (!document.querySelector(".modal:not(.hidden)")) {
    document.body.classList.remove("modal-open");
  }
}

function updateProgress() {
  const completed = lessons.filter(lesson => state.progress[lesson.id]?.completed).length;
  const scores = Object.values(state.progress)
    .filter(item => item.completed && Number.isFinite(item.score))
    .map(item => item.score);

  $("completedCount").textContent = completed;
  $("totalCount").textContent = lessons.length;
  $("heroLessonCount").textContent = lessons.length + "+";
  $("progressBar").style.width = (completed / lessons.length * 100) + "%";
  $("averageScore").textContent = scores.length
    ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) + "%"
    : "—";

  $("progressMessage").textContent = state.profile
    ? "Profil: " + state.profile.name + ". Natijalar ushbu brauzerda saqlanadi."
    : "Demo rejimi: darslar va natijalar ushbu brauzerda saqlanadi.";

  $("authOpen").classList.toggle("hidden", !!state.profile);
  $("logoutBtn").classList.toggle("hidden", !state.profile);
  $("userBadge").classList.toggle("hidden", !state.profile);
  $("userBadge").textContent = state.profile?.name || "";
}

function renderLessons() {
  const query = $("lessonSearch").value.trim().toLocaleLowerCase("uz");
  const selected = state.filter !== "all" ? state.filter : state.course;

  const filtered = lessons.filter(lesson => {
    const text = (
      lesson.title + " " + lesson.description + " " + courseNames[lesson.course]
    ).toLocaleLowerCase("uz");

    return (selected === "all" || lesson.course === selected) && text.includes(query);
  });

  $("lessonGrid").innerHTML = filtered.map((lesson, index) => {
    const completed = state.progress[lesson.id]?.completed;

    return `
      <article class="lesson-card">
        <div class="lesson-card-top">
          <span class="lesson-number">DARS / ${String(index + 1).padStart(2, "0")}</span>
          <span class="lesson-icon">${escapeHTML(lesson.icon)}</span>
        </div>
        <div class="lesson-category">${escapeHTML(courseNames[lesson.course])}</div>
        <h3>${escapeHTML(lesson.title)}</h3>
        <p>${escapeHTML(lesson.description)}</p>
        <div class="lesson-meta">
          <span>◷ ${lesson.duration} daqiqa</span>
          <span>${lesson.questions.length} ta savol</span>
          ${completed ? '<span class="green">✓ Yakunlangan</span>' : ""}
        </div>
        <button class="btn btn-primary btn-full" type="button" data-lesson="${escapeHTML(lesson.id)}">
          ${completed ? "Qayta ko‘rish ↗" : "Darsni ochish ↗"}
        </button>
      </article>
    `;
  }).join("");

  $("emptyLessons").classList.toggle("hidden", filtered.length > 0);
  updateProgress();
}

function renderGlossary() {
  const query = $("glossarySearch").value.trim().toLocaleLowerCase("uz");

  const filtered = glossary.filter(([term, meaning]) =>
    (term + " " + meaning).toLocaleLowerCase("uz").includes(query)
  );

  $("glossaryGrid").innerHTML = filtered.map(([term, meaning]) => `
    <article class="glossary-card">
      <h3>${escapeHTML(term)}</h3>
      <p>${escapeHTML(meaning)}</p>
    </article>
  `).join("") || '<p class="empty-state">Atama topilmadi.</p>';
}

function resourceVisual(resource) {
  const palettes = {
    "phishing-visual": ["#143d2a", "#8ee5a8"],
    "password-visual": ["#172f48", "#83c8ff"],
    "wifi-visual": ["#203b34", "#a7e8bb"],
    "html-visual": ["#3a2a19", "#f2c17b"]
  };

  const [base, accent] = palettes[resource.id] || palettes["phishing-visual"];
  let graphic = "";

  if (resource.id === "phishing-visual") {
    graphic = `
      <rect x="42" y="28" width="216" height="126" rx="12" fill="#0b1712" stroke="${accent}"/>
      <path d="M58 49h120M58 63h82" stroke="#527564" stroke-width="5" stroke-linecap="round"/>
      <path d="M64 90l12 12 23-26" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M150 88h82M150 103h62" stroke="#527564" stroke-width="5" stroke-linecap="round"/>
      <circle cx="225" cy="128" r="13" fill="#8b3e35"/>
      <path d="M225 120v9m0 5v1" stroke="#fff" stroke-width="3"/>
    `;
  } else if (resource.id === "password-visual") {
    graphic = `
      <rect x="66" y="27" width="168" height="126" rx="13" fill="#0b1712" stroke="${accent}"/>
      <rect x="88" y="49" width="124" height="22" rx="6" fill="#183124"/>
      <path d="M99 60h4m10 0h4m10 0h4m10 0h4m10 0h4m10 0h4m10 0h4" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <rect x="89" y="84" width="122" height="8" rx="4" fill="#294c3a"/>
      <rect x="89" y="84" width="95" height="8" rx="4" fill="${accent}"/>
      <path d="M98 117l10 10 19-22" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="142" y="126" fill="#d9f8e2" font-size="11">UNIQUE</text>
    `;
  } else if (resource.id === "wifi-visual") {
    graphic = `
      <circle cx="150" cy="71" r="11" fill="${accent}"/>
      <path d="M118 61q32-31 64 0M99 43q51-49 102 0M132 89q18 17 36 0" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
      <rect x="90" y="112" width="120" height="35" rx="8" fill="#0b1712" stroke="${accent}"/>
      <circle cx="108" cy="130" r="3" fill="${accent}"/>
      <circle cx="121" cy="130" r="3" fill="${accent}"/>
      <path d="M147 130h43" stroke="#527564" stroke-width="4" stroke-linecap="round"/>
    `;
  } else {
    graphic = `
      <rect x="42" y="36" width="216" height="110" rx="10" fill="#0b1712" stroke="${accent}"/>
      <path d="M42 54h216" stroke="${accent}" stroke-opacity=".6"/>
      <circle cx="56" cy="45" r="3" fill="${accent}"/>
      <circle cx="67" cy="45" r="3" fill="${accent}"/>
      <text x="61" y="83" fill="${accent}" font-size="19" font-family="monospace">&lt;html&gt;</text>
      <text x="61" y="106" fill="#c9dfd1" font-size="14" font-family="monospace">.style { }</text>
      <text x="61" y="129" fill="#f2c17b" font-size="14" font-family="monospace">click()</text>
    `;
  }

  return `
    <svg viewBox="0 0 300 180" role="img" aria-label="${escapeHTML(resource.title)} sxemasi" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient-${resource.id}" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${base}"/>
          <stop offset="1" stop-color="#07110d"/>
        </linearGradient>
      </defs>
      <rect width="300" height="180" rx="12" fill="url(#gradient-${resource.id})"/>
      ${graphic}
    </svg>
  `;
}

function renderResources() {
  const query = $("resourceSearch").value.trim().toLocaleLowerCase("uz");
  const filter = $("resourceFilter").value;

  const items = resources.filter(resource => {
    const matchesType = filter === "all" || resource.type === filter;
    const text = (
      resource.title + " " + resource.description + " " + resource.category
    ).toLocaleLowerCase("uz");

    return matchesType && text.includes(query);
  });

  $("resourceGrid").innerHTML = items.map(resource => {
    if (resource.type === "visual") {
      return `
        <article class="resource-card">
          <div class="resource-art">${resourceVisual(resource)}</div>
          <div class="resource-card-body">
            <div class="resource-meta">
              <span>${escapeHTML(resource.category)}</span>
              <b>RASMLI QO‘LLANMA</b>
            </div>
            <h3>${escapeHTML(resource.title)}</h3>
            <p>${escapeHTML(resource.description)}</p>
            <ul>${resource.tips.map(tip => `<li>${escapeHTML(tip)}</li>`).join("")}</ul>
            <button class="text-button" type="button" data-resource="${escapeHTML(resource.id)}">
              To‘liq izohni ochish ↗
            </button>
            <div class="resource-detail hidden" id="detail-${escapeHTML(resource.id)}">
              <p><strong>Amalda:</strong> ${escapeHTML(resource.tips.join(". "))}.</p>
            </div>
          </div>
        </article>
      `;
    }

    return `
      <article class="resource-card video-resource">
        <div class="video-art">
          <span class="play-icon">▶</span>
          <span>VIDEO DARS</span>
        </div>
        <div class="resource-card-body">
          <div class="resource-meta">
            <span>${escapeHTML(resource.category)}</span>
            <b>VIDEO</b>
          </div>
          <h3>${escapeHTML(resource.title)}</h3>
          <p>${escapeHTML(resource.description)}</p>
          <a class="text-button resource-link" href="${escapeHTML(resource.search)}" target="_blank" rel="noopener noreferrer">
            YouTube’da ko‘rish ↗
          </a>
        </div>
      </article>
    `;
  }).join("");

  $("emptyResources").classList.toggle("hidden", items.length > 0);
}

const state = {
  course: "all",
  filter: "all",
  activeLesson: null,
  progress: readStorage("ns-progress", {}),
  profile: readStorage("ns-profile", null),
  quizOpen: false
};

function openLesson(id) {
  const lesson = lessons.find(item => item.id === id);
  if (!lesson) return toast("Dars topilmadi.");

  state.activeLesson = lesson;
  state.quizOpen = false;

  $("lessonCategory").textContent = courseNames[lesson.course];
  $("lessonTitle").textContent = lesson.title;
  $("lessonDescription").textContent = lesson.description;
  $("lessonContent").textContent = lesson.content;

  $("quizWrap").classList.add("hidden");
  $("quizResult").classList.add("hidden");
  $("readCompleteBtn").classList.remove("hidden");
  $("readCompleteBtn").textContent = "Matnni o‘qidim — testni boshlash";

  openModal("lessonModal");
}

function startQuiz() {
  const lesson = state.activeLesson;
  if (!lesson) return;

  state.quizOpen = true;
  $("readCompleteBtn").classList.add("hidden");
  $("quizWrap").classList.remove("hidden");
  $("quizCount").textContent = lesson.questions.length + " ta savol";

  $("quizQuestions").innerHTML = lesson.questions.map((question, index) => `
    <div class="question">
      <h4>${index + 1}. ${escapeHTML(question.q)}</h4>
      ${question.options.map((option, optionIndex) => `
        <label class="answer-option">
          <input type="radio" name="q${index}" value="${optionIndex}">
          <span>${escapeHTML(option)}</span>
        </label>
      `).join("")}
    </div>
  `).join("");

  $("quizResult").classList.add("hidden");
}

function submitQuiz() {
  const lesson = state.activeLesson;
  if (!lesson || !state.quizOpen) return;

  let correct = 0;
  let answered = 0;

  lesson.questions.forEach((question, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);

    if (selected) {
      answered++;
      if (Number(selected.value) === question.answer) correct++;
    }
  });

  if (answered < lesson.questions.length) {
    return toast("Iltimos, barcha savollarga javob bering.");
  }

  const score = Math.round(correct / lesson.questions.length * 100);

  state.progress[lesson.id] = { completed: true, score };
  saveStorage("ns-progress", state.progress);

  updateProgress();
  renderLessons();

  $("quizResult").textContent =
    `Natija: ${correct}/${lesson.questions.length} — ${score}%. ` +
    (score >= 70
      ? "Ajoyib! Dars muvaffaqiyatli yakunlandi."
      : "Yaxshi urinish. Mavzuni yana bir bor o‘qing.");

  $("quizResult").classList.remove("hidden");
}

function runPractice(type) {
  const configs = {
    phishing: {
      title: "Qaysi xabar shubhali?",
      question: "Xavfsiz qarorni tanlang.",
      options: [
        ["Siz kutgan dars jadvali haqida xabar.", false],
        ["Hisobingiz yopiladi! Havolani bosing va SMS kodni yuboring.", true],
        ["O‘zingiz ochgan ilovaning odatiy xabari.", false]
      ]
    },
    password: {
      title: "Parol ustaxonasi",
      question: "12345678 paroli qanday?",
      options: [
        ["Kuchli — hamma saytda ishlatsa bo‘ladi.", false],
        ["Zaif — keng tarqalgan ketma-ketlik.", true],
        ["Mukammal — hech qachon buzilmaydi.", false]
      ]
    },
    choices: {
      title: "To‘g‘ri qaror",
      question: "Notanish odam SMS kodingizni so‘radi. Nima qilasiz?",
      options: [
        ["Kodni yuboraman.", false],
        ["Kodni bermay, rasmiy kanal orqali tekshiraman.", true],
        ["Parolimni ham yuboraman.", false]
      ]
    }
  };

  const config = configs[type] || configs.choices;
  const area = $("practiceArea");

  area.classList.remove("hidden");
  area.innerHTML = `
    <h3>${escapeHTML(config.title)}</h3>
    <p>${escapeHTML(config.question)}</p>
    <div class="game-options">
      ${config.options.map((option, index) => `
        <button class="game-option" type="button" data-answer="${index}">
          ${escapeHTML(option[0])}
        </button>
      `).join("")}
    </div>
    <p id="practiceFeedback" aria-live="polite"></p>
    <button id="practiceAgain" class="text-button" type="button">Qayta o‘ynash ↻</button>
  `;

  area.querySelectorAll("[data-answer]").forEach(button => {
    button.addEventListener("click", () => {
      area.querySelectorAll("[data-answer]").forEach(item => item.disabled = true);

      const correct = config.options[Number(button.dataset.answer)][1];
      button.classList.add(correct ? "correct" : "wrong");

      $("practiceFeedback").textContent = correct
        ? "To‘g‘ri! Xavfsiz qaror tanlandingiz."
        : "Bu xavfsiz tanlov emas. Boshqa javobni ko‘rib chiqing.";

      $("practiceFeedback").style.color = correct ? "var(--green)" : "var(--red)";
    });
  });

  $("practiceAgain").addEventListener("click", () => runPractice(type));
  area.scrollIntoView({ behavior: "smooth", block: "center" });
}

function updatePasswordStrength() {
  const value = $("passwordInput").value;
  let score = 0;

  if (value.length >= 12) score++;
  if (value.length >= 16) score++;
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score++;
  if (/\d/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;

  $("strengthBar").style.width = (value ? score * 20 : 0) + "%";
  $("strengthBar").style.background =
    score < 2 ? "var(--red)" : score < 4 ? "var(--yellow)" : "var(--green)";

  $("passwordFeedback").textContent = !value
    ? "Parol bahosi shu yerda ko‘rinadi."
    : score < 2
      ? "Zaif: uzunroq va noyob namuna tanlang."
      : score < 4
        ? "O‘rtacha: uzunlik va xilma-xillikni oshiring."
        : "Yaxshi namuna. Har bir xizmatda alohida parol ishlating.";
}

function openProfile() {
  $("profileName").value = state.profile?.name || "";
  $("authStatus").classList.add("hidden");
  openModal("authModal");
}

function saveProfile(event) {
  event.preventDefault();

  const name = $("profileName").value.trim();
  if (!name) return toast("Profil nomini kiriting.");

  state.profile = { name };
  saveStorage("ns-profile", state.profile);
  updateProgress();
  closeModal("authModal");
  toast("Mahalliy profil saqlandi.");
}

function logout() {
  state.profile = null;
  saveStorage("ns-profile", null);
  updateProgress();
  toast("Mahalliy profildan chiqildi.");
}

function init() {
  $("year").textContent = new Date().getFullYear();

  renderLessons();
  renderGlossary();
  renderResources();
  updatePasswordStrength();

  document.querySelectorAll("[data-course]").forEach(button => {
    button.addEventListener("click", () => {
      state.course = button.dataset.course;
      state.filter = "all";
      $("lessonFilter").value = "all";

      document.querySelectorAll("[data-course]").forEach(item => {
        item.classList.toggle("active", item === button);
      });

      renderLessons();
      $("lessons").scrollIntoView({ behavior: "smooth" });
    });
  });

  $("lessonSearch").addEventListener("input", renderLessons);

  $("lessonFilter").addEventListener("change", () => {
    state.filter = $("lessonFilter").value;
    state.course = "all";

    document.querySelectorAll("[data-course]").forEach(button => {
      button.classList.toggle("active", button.dataset.course === "all");
    });

    renderLessons();
  });

  $("lessonGrid").addEventListener("click", event => {
    const button = event.target.closest("[data-lesson]");
    if (button) openLesson(button.dataset.lesson);
  });

  $("readCompleteBtn").addEventListener("click", startQuiz);
  $("submitQuiz").addEventListener("click", submitQuiz);

  document.querySelectorAll("[data-practice]").forEach(button => {
    button.addEventListener("click", () => runPractice(button.dataset.practice));
  });

  $("passwordInput").addEventListener("input", updatePasswordStrength);
  $("glossarySearch").addEventListener("input", renderGlossary);
  $("resourceSearch").addEventListener("input", renderResources);
  $("resourceFilter").addEventListener("change", renderResources);

  $("resourceGrid").addEventListener("click", event => {
    const button = event.target.closest("[data-resource]");
    if (!button) return;

    const detail = $("detail-" + button.dataset.resource);
    if (!detail) return;

    detail.classList.toggle("hidden");
    button.textContent = detail.classList.contains("hidden")
      ? "To‘liq izohni ochish ↗"
      : "Izohni yopish ↑";
  });

  $("profileForm").addEventListener("submit", saveProfile);

  ["authOpen", "heroAuth", "progressAuth", "admissionAuth", "ctaAuth"].forEach(id => {
    $(id).addEventListener("click", openProfile);
  });

  $("logoutBtn").addEventListener("click", logout);

  document.querySelectorAll("[data-close]").forEach(button => {
    button.addEventListener("click", () => closeModal(button.dataset.close));
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal:not(.hidden)").forEach(modal => {
        closeModal(modal.id);
      });
    }
  });

  updateProgress();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}