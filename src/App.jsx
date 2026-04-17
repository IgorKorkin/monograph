import { useState } from "react";

const asset = (name) => `${import.meta.env.BASE_URL}${name}`;

const content = {
  ru: {
    nav: {
      about: "ABOUT",
      preview: "PREVIEW",
      contents: "CONTENTS",
      author: "AUTHOR",
    },
    badge: "OFFICIAL MONOGRAPH WEBSITE",
    subtitle:
      "Монография о защите ядра Windows от низкоуровневых угроз: скрытые гипервизоры, атаки драйверов, гипервизорные архитектуры защиты, мониторинг памяти и противодействие адаптирующимся нарушителям.",
    by: "by Igor Korkin, Ph.D.",
    buttons: {
      read: "READ ON ZNANIUM",
      site: "AUTHOR'S SITE",
    },
    tags: [
      "Windows Kernel",
      "VT-x / EPT",
      "Hidden Hypervisors",
      "Memory Monitoring",
      "BYOVD / Rootkits",
    ],
    stats: [
      { value: "15+", label: "лет исследований и практической работы" },
      { value: "50+", label: "научных работ, включая статьи, патент и доклады" },
      { value: "30", label: "международных докладов на конференциях" },
      { value: "1", label: "монография, объединяющая авторскую исследовательскую линию" },
    ],
    sectionTitles: {
      about: "О монографии",
      topics: "Ключевые направления",
      author: "Об ",
      authorAccent: "авторе",
      inside: "Inside the ",
      insideAccent: "Book",
    },
    aboutText:
      "Монография посвящена защите ядра Windows от сложных низкоуровневых угроз. Исследование построено вокруг двух взаимосвязанных направлений: защиты памяти ядра от манипуляций со стороны драйверов и обнаружения скрытых гипервизоров, использующих аппаратную виртуализацию.",
    topics: [
      "Архитектура ядра Windows и эволюция встроенных механизмов защиты.",
      "Техники сокрытия вредоносного кода, руткит-подходы и методы обнаружения.",
      "Гипервизорные технологии мониторинга и защиты памяти ядра.",
      "Выявление скрытых гипервизоров в условиях активного противодействия.",
    ],
    authorName: "Игорь Юрьевич Коркин",
    authorRole: "RESEARCHER & AUTHOR",
    authorText1:
      "Кандидат технических наук, выпускник НИЯУ МИФИ. Исследователь и системный программист в области защиты операционных систем, гипервизоров и низкоуровневых киберугроз. Участник международных проектов по кибербезопасности в Huawei Technologies и Binarly.",
    authorText2:
      "Автор более 50 научных работ, патента и докладов на международных конференциях по кибербезопасности в США, Европе, Азии и России. Научный руководитель дипломных и исследовательских работ студентов МИФИ по направлению «Информационная безопасность».",
    authorTags: [
      "Kernel Security",
      "Hypervisors",
      "Memory Protection",
      "VT-x / EPT",
      "Binarly",
      "MEPhI",
    ],
    insideCards: [
      {
        title: "Раздел 1",
        text: "Архитектура ядра Windows, встроенные механизмы защиты, руткит-техники и методы сокрытия исполнимых объектов.",
      },
      {
        title: "Раздел 2",
        text: "Гипервизорные решения для мониторинга и защиты памяти ядра: MemoryMonRWX, AllMemPro и MemoryRanger.",
      },
      {
        title: "Раздел 3",
        text: "Методы обнаружения скрытых гипервизоров на основе анализа характеристик времени выполнения инструкций.",
      },
    ],
    footerSite: "Author's Site",
  },
  en: {
    nav: {
      about: "ABOUT",
      preview: "PREVIEW",
      contents: "CONTENTS",
      author: "AUTHOR",
    },
    badge: "OFFICIAL MONOGRAPH WEBSITE",
    subtitle:
      "A monograph on protection of the Windows kernel from low-level threats: hidden hypervisors, driver-based attacks, hypervisor-based defensive architectures, memory monitoring, and adversarial countermeasure analysis.",
    by: "by Igor Korkin, Ph.D.",
    buttons: {
      read: "READ ON ZNANIUM",
      site: "AUTHOR'S SITE",
    },
    tags: [
      "Windows Kernel",
      "VT-x / EPT",
      "Hidden Hypervisors",
      "Memory Monitoring",
      "BYOVD / Rootkits",
    ],
    stats: [
      { value: "15+", label: "years of research and practical work" },
      { value: "50+", label: "scholarly works, including papers, a patent, and talks" },
      { value: "30", label: "international conference talks" },
      { value: "1", label: "monograph combining the author's research line" },
    ],
    sectionTitles: {
      about: "About the monograph",
      topics: "Key topics",
      author: "Meet the ",
      authorAccent: "Author",
      inside: "Inside the ",
      insideAccent: "Book",
    },
    aboutText:
      "The monograph addresses protection of the Windows kernel against sophisticated low-level threats. The research is organized around two interconnected directions: kernel-memory protection against driver-based manipulation and detection of hidden hypervisors leveraging hardware virtualization.",
    topics: [
      "Windows kernel architecture and the evolution of built-in defenses.",
      "Malware hiding techniques, rootkit approaches, and detection methods.",
      "Hypervisor-based monitoring and kernel-memory protection.",
      "Detection of stealth hypervisors under active adversarial countermeasures.",
    ],
    authorName: "Igor Yurievich Korkin",
    authorRole: "RESEARCHER & AUTHOR",
    authorText1:
      "Ph.D. in Engineering, graduate of NRNU MEPhI. Security researcher and systems programmer specializing in operating-system protection, hypervisors, and low-level cyber threats. Participated in international cybersecurity projects at Huawei Technologies and Binarly.",
    authorText2:
      "Author of more than 50 scholarly works, a patent, and talks at major international cybersecurity conferences across the US, Europe, Asia, and Russia. He also supervises student research at MEPhI in Information Security.",
    authorTags: [
      "Kernel Security",
      "Hypervisors",
      "Memory Protection",
      "VT-x / EPT",
      "Binarly",
      "MEPhI",
    ],
    insideCards: [
      {
        title: "Part I",
        text: "Windows kernel architecture, built-in security mechanisms, rootkit techniques, and hiding methods.",
      },
      {
        title: "Part II",
        text: "Hypervisor-based solutions for monitoring and protecting kernel memory: MemoryMonRWX, AllMemPro, and MemoryRanger.",
      },
      {
        title: "Part III",
        text: "Detection of stealth hypervisors through statistical analysis of instruction execution time characteristics.",
      },
    ],
    footerSite: "Author's Site",
  },
};

export default function App() {
  const [lang, setLang] = useState("ru");
  const t = content[lang];

  return (
    <>
      <style>{`
        :root {
          --bg: #060b12;
          --bg-2: rgba(8, 16, 28, 0.82);
          --panel: rgba(8, 16, 28, 0.72);
          --text: #e7eef8;
          --text-soft: #aab6c8;
          --accent: #48d3ff;
          --mono: "JetBrains Mono", monospace;
          --sans: "Space Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          --shadow: 0 0 0 1px rgba(108, 173, 214, 0.10), 0 12px 40px rgba(0, 0, 0, 0.35);
        }

        @font-face {
          font-family: "ConthraxLocal";
          src: url("${asset("conthrax-sb.ttf")}") format("truetype");
          font-weight: 600;
          font-style: normal;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          color: var(--text);
          background:
            radial-gradient(circle at 50% 18%, rgba(72, 211, 255, 0.14), transparent 28%),
            linear-gradient(to right, rgba(72, 211, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(72, 211, 255, 0.05) 1px, transparent 1px),
            #050a11;
          background-size: auto, 52px 52px, 52px 52px, auto;
          font-family: var(--sans);
          min-height: 100vh;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .app {
          min-height: 100vh;
          position: relative;
        }

        .app::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 18%, rgba(72, 211, 255, 0.08), transparent 22%),
            linear-gradient(to right, rgba(255,255,255,0.015), transparent 35%, rgba(255,255,255,0.015) 65%, transparent),
            linear-gradient(to bottom, rgba(255,255,255,0.015), transparent 35%, rgba(255,255,255,0.015) 65%, transparent);
          mix-blend-mode: screen;
          opacity: 0.7;
        }

        .container {
          width: min(1280px, calc(100% - 48px));
          margin: 0 auto;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 20;
          border-bottom: 1px solid rgba(108, 173, 214, 0.08);
          backdrop-filter: blur(10px);
          background: rgba(5, 10, 17, 0.82);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          min-height: 72px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }

        .brand-mark {
          font-family: var(--mono);
          color: var(--accent);
          font-size: 1.15rem;
          letter-spacing: 0.03em;
          font-weight: 700;
          text-shadow: 0 0 16px rgba(72, 211, 255, 0.25);
        }

        .brand-text {
          font-family: var(--mono);
          font-size: 0.86rem;
          letter-spacing: 0.24em;
          color: var(--text-soft);
          text-transform: uppercase;
          white-space: nowrap;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .nav a {
          position: relative;
          font-family: var(--mono);
          font-size: 0.88rem;
          letter-spacing: 0.16em;
          color: var(--text-soft);
          text-transform: uppercase;
          transition: color 0.2s ease;
        }

        .nav a:hover {
          color: var(--accent);
        }

        .nav a.active {
          color: var(--accent);
        }

        .nav a.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -10px;
          height: 2px;
          background: var(--accent);
          box-shadow: 0 0 12px rgba(72, 211, 255, 0.35);
        }

        .lang-switch {
          display: flex;
          gap: 10px;
          margin-left: 6px;
        }

        .lang-btn {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          border: 1px solid rgba(108, 173, 214, 0.16);
          background: rgba(8, 16, 28, 0.72);
          color: var(--text-soft);
          font-family: var(--mono);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .lang-btn:hover {
          border-color: rgba(72, 211, 255, 0.35);
          color: var(--accent);
        }

        .lang-btn.active {
          color: var(--accent);
          border-color: rgba(72, 211, 255, 0.28);
          box-shadow: 0 0 0 1px rgba(72, 211, 255, 0.08), inset 0 0 24px rgba(72, 211, 255, 0.03);
        }

        .hero {
          padding: 56px 0 18px;
          text-align: center;
        }

        .book-strip {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin-bottom: 34px;
          position: relative;
        }

        .cover {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: transparent;
          box-shadow: none;
          transition: transform 0.25s ease;
          transform-origin: center center;
        }

        .cover:hover {
          transform: scale(1.035);
        }

        .cover--full {
          width: min(100%, 780px);
        }

        .cover img {
          display: block;
          width: 100%;
          height: auto;
        }

        .hero-text {
          max-width: 1100px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 18px;
          font-family: var(--mono);
          font-size: 0.86rem;
          text-transform: uppercase;
          letter-spacing: 0.26em;
          color: var(--accent);
        }

        .hero-badge::before,
        .hero-badge::after {
          content: "";
          width: 56px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(72, 211, 255, 0.55), transparent);
        }

        .hero-title {
          margin: 0 auto 22px;
          max-width: 25ch;
          font-family: "ConthraxLocal", var(--sans);
          font-size: clamp(1.45rem, 2.45vw, 2.7rem);
          line-height: 1.28;
          letter-spacing: 0.01em;
          font-weight: 600;
          text-wrap: balance;
        }

        .hero-title .accent {
          color: var(--accent);
          text-shadow: 0 0 20px rgba(72, 211, 255, 0.18);
        }

        .hero-subtitle {
          margin: 0 auto 22px;
          max-width: 1040px;
          color: var(--text-soft);
          font-size: clamp(1.04rem, 1.35vw, 1.28rem);
          line-height: 1.9;
        }

        .hero-by {
          margin-bottom: 26px;
          font-family: var(--mono);
          font-size: 0.98rem;
          color: var(--text);
          font-weight: 600;
        }

        .button-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 22px;
        }

        .btn {
          min-width: 180px;
          height: 52px;
          padding: 0 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          border: 1px solid rgba(108, 173, 214, 0.18);
          background: rgba(11, 17, 27, 0.72);
          color: var(--text);
          font-family: var(--mono);
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          box-shadow: var(--shadow);
          transition: all 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-1px);
          border-color: rgba(72, 211, 255, 0.35);
          color: var(--accent);
        }

        .btn-primary {
          color: var(--accent);
          border-color: rgba(72, 211, 255, 0.28);
          background: linear-gradient(180deg, rgba(28, 50, 69, 0.88), rgba(10, 19, 29, 0.88));
          box-shadow:
            0 0 0 1px rgba(72, 211, 255, 0.08),
            0 8px 36px rgba(0,0,0,0.35),
            inset 0 0 24px rgba(72, 211, 255, 0.05);
        }

        .tag-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tag {
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(72, 211, 255, 0.16);
          background: rgba(12, 24, 36, 0.55);
          color: var(--accent);
          font-family: var(--mono);
          font-size: 0.84rem;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        .section {
          padding: 54px 0 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 46px;
        }

        .card {
          background: var(--panel);
          border: 1px solid rgba(108, 173, 214, 0.14);
          border-radius: 24px;
          box-shadow: var(--shadow);
        }

        .stat-card {
          padding: 26px 22px;
          text-align: center;
        }

        .stat-card .value {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
          color: var(--accent);
          margin-bottom: 10px;
        }

        .stat-card .label {
          color: var(--text-soft);
          font-size: 0.98rem;
          line-height: 1.7;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .info-card {
          padding: 28px 26px;
          min-height: 250px;
        }

        .info-card h3 {
          margin: 0 0 18px;
          font-size: 1.08rem;
          line-height: 1.4;
        }

        .info-card p,
        .info-card li {
          color: var(--text-soft);
          font-size: 1rem;
          line-height: 1.9;
        }

        .info-card ul {
          margin: 0;
          padding-left: 20px;
        }

        .section-title {
          margin: 0 0 28px;
          text-align: center;
          font-size: clamp(2.2rem, 4.5vw, 3.45rem);
          line-height: 1.12;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .section-title .accent {
          color: var(--accent);
        }

        .author-section-title {
          margin: 0 0 24px;
          text-align: center;
          font-size: clamp(1.7rem, 3.2vw, 2.45rem);
          line-height: 1.12;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .author-section-title .accent {
          color: var(--accent);
        }

        .author-single-wrap {
          display: flex;
          justify-content: center;
        }

        .author-card {
          border-radius: 24px;
          padding: 32px 28px;
          text-align: center;
        }

        .author-card--single {
          max-width: 760px;
          width: 100%;
        }

        .author-photo-wrap {
          width: 108px;
          height: 108px;
          margin: 0 auto 18px;
          border-radius: 999px;
          padding: 3px;
          background: linear-gradient(180deg, rgba(72, 211, 255, 0.32), rgba(72, 211, 255, 0.08));
          box-shadow: 0 0 0 1px rgba(72, 211, 255, 0.08);
        }

        .author-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 999px;
          display: block;
          background: rgba(18, 31, 46, 0.65);
        }

        .author-card h3 {
          margin: 0 0 12px;
          font-size: 1.9rem;
        }

        .role {
          margin: 0 0 20px;
          color: var(--accent);
          font-family: var(--mono);
          font-size: 0.9rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .author-card p {
          color: var(--text-soft);
          font-size: 0.98rem;
          line-height: 1.85;
        }

        .footer {
          padding: 44px 0 56px;
          text-align: center;
          color: var(--text-soft);
          font-size: 1rem;
          line-height: 1.9;
        }

        .footer a {
          color: var(--accent);
        }

        @media (max-width: 1080px) {
          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .info-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 840px) {
          .container {
            width: min(100% - 24px, 1280px);
          }

          .header-inner {
            flex-direction: column;
            align-items: flex-start;
            padding: 14px 0;
          }

          .nav {
            width: 100%;
            justify-content: space-between;
            gap: 14px;
          }

          .cover--full {
            width: 100%;
          }

          .hero {
            padding-top: 32px;
          }

          .hero-title {
            max-width: 14ch;
          }

          .hero-subtitle {
            font-size: 1rem;
            line-height: 1.8;
          }

          .btn {
            min-width: 150px;
            width: 100%;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .author-card--single {
            max-width: 100%;
          }
        }
      `}</style>

      <div className="app">
        <header className="header">
          <div className="container header-inner">
            <div className="brand">
              <div className="brand-mark">[KP]</div>
              <div className="brand-text">Kernel Protection Monograph</div>
            </div>

            <nav className="nav">
              <a href="#about" className="active">
                {t.nav.about}
              </a>
              <a href="#preview">{t.nav.preview}</a>
              <a href="#contents">{t.nav.contents}</a>
              <a href="#author">{t.nav.author}</a>

              <div className="lang-switch">
                <button
                  className={`lang-btn ${lang === "ru" ? "active" : ""}`}
                  onClick={() => setLang("ru")}
                  type="button"
                >
                  RU
                </button>
                <button
                  className={`lang-btn ${lang === "en" ? "active" : ""}`}
                  onClick={() => setLang("en")}
                  type="button"
                >
                  EN
                </button>
              </div>
            </nav>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container">
              <div className="book-strip" id="preview">
                <figure className="cover cover--full">
                  <img
                    src={asset("cover-full.jpg")}
                    alt={
                      lang === "ru"
                        ? "Полная обложка монографии с корешком"
                        : "Full monograph cover with spine"
                    }
                  />
                </figure>
              </div>

              <div className="hero-text">
                <div className="hero-badge">{t.badge}</div>

                <h1 className="hero-title">
                  {lang === "ru" ? (
                    <>
                      <span className="accent">Защита ядра</span>
                      <br />
                      операционных систем
                      <br />в условиях противодействия
                    </>
                  ) : (
                    <>
                      <span className="accent">Kernel Protection</span>
                      <br />
                      of Operating Systems
                      <br />
                      Under Countermeasures
                    </>
                  )}
                </h1>

                <p className="hero-subtitle">{t.subtitle}</p>
                <div className="hero-by">{t.by}</div>

                <div className="button-row">
                  <a
                    className="btn btn-primary"
                    href="https://znanium.ru/read?id=481477"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.buttons.read}
                  </a>

                  <a
                    className="btn"
                    href="https://igorkorkin.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.buttons.site}
                  </a>
                </div>

                <div className="tag-row">
                  {t.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="about">
            <div className="container">
              <div className="stats-grid">
                {t.stats.map((item) => (
                  <div className="stat-card card" key={item.value + item.label}>
                    <div className="value">{item.value}</div>
                    <div className="label">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="info-grid" id="contents">
                <article className="info-card card">
                  <h3>{t.sectionTitles.about}</h3>
                  <p>{t.aboutText}</p>
                </article>

                <article className="info-card card">
                  <h3>{t.sectionTitles.topics}</h3>
                  <ul>
                    {t.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </article>

                <article className="info-card card">
                  <h3>{t.sectionTitles.author === "Об " ? "Практический фокус" : "Practical focus"}</h3>
                  <p>
                    {lang === "ru"
                      ? "Книга объединяет анализ угроз безопасности ядра Windows, гипервизорные методы защиты памяти и практические подходы к выявлению скрытых гипервизоров в условиях активного противодействия."
                      : "The book combines Windows kernel threat analysis, hypervisor-based memory protection, and practical approaches to detecting stealth hypervisors under active countermeasures."}
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h2 className="section-title">
                {t.sectionTitles.inside}
                <span className="accent">{t.sectionTitles.insideAccent}</span>
              </h2>

              <div className="info-grid">
                {t.insideCards.map((card) => (
                  <article className="info-card card" key={card.title}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="author">
            <div className="container">
              <h2 className="author-section-title">
                {t.sectionTitles.author}
                <span className="accent">{t.sectionTitles.authorAccent}</span>
              </h2>

              <div className="author-single-wrap">
                <article className="author-card card author-card--single">
                  <div className="author-photo-wrap">
                    <img
                      className="author-photo"
                      src={asset("igor.korkin.photo.jpg")}
                      alt={lang === "ru" ? "Фотография Игоря Коркина" : "Photo of Igor Korkin"}
                    />
                  </div>

                  <h3>{t.authorName}</h3>
                  <p className="role">{t.authorRole}</p>

                  <p>{t.authorText1}</p>
                  <p>{t.authorText2}</p>

                  <div
                    className="tag-row"
                    style={{ justifyContent: "center", marginTop: 18 }}
                  >
                    {t.authorTags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="container">
              <div>
                {t.footerSite}:{" "}
                <a
                  href="https://igorkorkin.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  igorkorkin.github.io
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}