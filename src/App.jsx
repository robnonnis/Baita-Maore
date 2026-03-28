import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Raleway:wght@200;300;400;500;600&display=swap"
    rel="stylesheet"
  />
);

const c = {
  cream: "#f4ede0",
  sand: "#ddd0b8",
  brown: "#6b4226",
  brownL: "#9a6342",
  dark: "#1c1208",
  muted: "#7a6a55",
  white: "#faf6ef",
  forest: "#3d5c35",
  stone: "#8c7b6b",
};

const s = {
  app: { minHeight: "100vh", fontFamily: "'Raleway', sans-serif", fontWeight: 300, color: c.dark, background: c.cream, maxWidth: 480, margin: "0 auto" },
  hero: { background: c.dark, textAlign: "center", borderRadius: "0 0 32px 32px", position: "relative", overflow: "hidden" },
  heroImg: { width: "100%", height: 270, objectFit: "cover", display: "block", opacity: 0.6 },
  heroOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `linear-gradient(to bottom, rgba(28,18,8,0.15) 0%, rgba(28,18,8,0.92) 100%)` },
  heroContent: { position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 24px 36px" },
  heroTitle: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: 52, lineHeight: 1.05, color: c.cream, margin: 0, letterSpacing: 1 },
  eyebrow: { fontSize: 9, letterSpacing: "5px", textTransform: "uppercase", color: c.brownL, fontWeight: 600, marginBottom: 10 },
  sectionLabel: { fontSize: 9, letterSpacing: "4px", textTransform: "uppercase", color: c.muted, margin: "26px 0 16px", textAlign: "center" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, padding: "0 20px", maxWidth: 400, margin: "0 auto" },
  card: { background: c.white, borderRadius: 18, padding: "20px 6px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: 7, cursor: "pointer", border: `1px solid ${c.brown}18` },
  cardLabel: { fontSize: 8.5, letterSpacing: "1.5px", textTransform: "uppercase", textAlign: "center", fontWeight: 500, color: c.dark, lineHeight: 1.4 },
  pageHead: { background: c.dark, padding: "50px 24px 28px", borderRadius: "0 0 24px 24px" },
  pageTitle: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: 36, color: c.cream, lineHeight: 1.1, margin: 0 },
  back: { display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "rgba(244,237,224,0.55)", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", marginBottom: 18, padding: 0, fontFamily: "'Raleway', sans-serif" },
  content: { padding: "24px 20px 60px" },
  infoCard: { background: c.white, borderRadius: 18, padding: "20px 18px", marginBottom: 12, border: `1px solid ${c.brown}12` },
  cardTitle: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 400, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 },
  row: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 0", borderBottom: `1px solid ${c.sand}` },
  rowLast: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 0" },
  rowLabel: { fontSize: 13.5, color: c.dark },
  rowValue: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 16, color: c.brown },
  rule: { display: "flex", gap: 12, padding: "10px 0", borderBottom: `1px solid ${c.sand}`, fontSize: 13.5, lineHeight: 1.55, alignItems: "flex-start" },
  ruleLast: { display: "flex", gap: 12, padding: "10px 0", fontSize: 13.5, lineHeight: 1.55, alignItems: "flex-start" },
  dot: { width: 6, height: 6, borderRadius: "50%", background: c.brown, flexShrink: 0, marginTop: 6 },
  hlBox: { background: `linear-gradient(135deg, ${c.brown}, ${c.brownL})`, borderRadius: 18, padding: "20px 18px", color: "white", marginBottom: 12 },
  hlTitle: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 400, marginBottom: 8 },
  darkBox: { background: c.dark, borderRadius: 14, padding: "16px 18px", marginBottom: 12 },
  mapBtn: { display: "flex", alignItems: "center", gap: 10, background: c.forest, color: "white", borderRadius: 14, padding: "14px 16px", textDecoration: "none", fontSize: 13, marginTop: 10 },
  mailBtn: { display: "flex", alignItems: "center", gap: 10, background: c.brown, color: "white", borderRadius: 14, padding: "14px 16px", textDecoration: "none", fontSize: 13, marginTop: 10 },
  tel: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: `1px solid ${c.sand}`, textDecoration: "none" },
  telLast: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", textDecoration: "none" },
  tag: { background: c.sand, borderRadius: 20, padding: "5px 13px", fontSize: 11, color: c.dark },
  tagA: { background: c.brown, borderRadius: 20, padding: "5px 13px", fontSize: 11, color: "white" },
  spaSlot: { background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "6px 12px", fontSize: 12, color: "rgba(244,237,224,0.9)", marginRight: 6, marginBottom: 6, display: "inline-block" },
};

const Ic = {
  back: () => <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: "currentColor", fill: "none", strokeWidth: 1.5 }}><polyline points="15 18 9 12 15 6" /></svg>,
  home: () => <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: c.dark, fill: "none", strokeWidth: 1.3 }}><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" /><path d="M9 21V12h6v9" /></svg>,
  lock: () => <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: c.dark, fill: "none", strokeWidth: 1.3 }}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
  spa: () => <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: c.dark, fill: "none", strokeWidth: 1.3 }}><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" /><path d="M12 6v6l4 2" /></svg>,
  pin: () => <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: c.dark, fill: "none", strokeWidth: 1.3 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  hike: () => <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: c.dark, fill: "none", strokeWidth: 1.3 }}><circle cx="12" cy="4" r="2" /><path d="M10 8l-3 8 3-1 2 5 2-5 3 1-3-8" /><path d="M8 16l-2 5M16 16l2 5" /></svg>,
  fork: () => <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: c.dark, fill: "none", strokeWidth: 1.3 }}><path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>,
  building: () => <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: c.dark, fill: "none", strokeWidth: 1.3 }}><rect x="2" y="7" width="20" height="15" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>,
  check: () => <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: c.dark, fill: "none", strokeWidth: 1.3 }}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>,
  star: () => <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: c.dark, fill: "none", strokeWidth: 1.3 }}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  faq: () => <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: c.dark, fill: "none", strokeWidth: 1.3 }}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round" /></svg>,
  social: () => <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, fill: "none", stroke: c.dark, strokeWidth: 1.3 }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"/></svg>,
  pool: () => <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: c.dark, fill: "none", strokeWidth: 1.3 }}><path d="M2 12h20M2 17c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0M7 12V7l5-3 5 3v5" /></svg>,
  mapW: () => <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "white", fill: "none", strokeWidth: 1.5 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  mailW: () => <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "white", fill: "none", strokeWidth: 1.5 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  phone: () => <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: c.brown, fill: "none", strokeWidth: 1.5 }}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.07-1.07a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>,
};

function Row({ l, v, link, last }) {
  const st = last ? s.rowLast : s.row;
  if (link) return <a href={link} target="_blank" rel="noreferrer" style={{ ...st, textDecoration: "none" }}><span style={s.rowLabel}>{l}</span><span style={{ ...s.rowValue }}>{v} ›</span></a>;
  return <div style={st}><span style={s.rowLabel}>{l}</span><span style={s.rowValue}>{v}</span></div>;
}

function Rule({ t, last }) {
  return <div style={last ? s.ruleLast : s.rule}><div style={s.dot} /><span>{t}</span></div>;
}

function Card({ children, style }) {
  return <div style={{ ...s.infoCard, ...style }}>{children}</div>;
}

function CT({ icon, text }) {
  return <div style={s.cardTitle}>{icon && <span style={{ flexShrink: 0 }}>{icon}</span>}{text}</div>;
}

function HeroCard() {
  return (
    <div style={{ background: c.dark, borderRadius: 18, overflow: "hidden", marginBottom: 12 }}>
      <img
        src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=800&q=80"
        alt="Baita Maore Laconi"
        style={{ width: "100%", height: 180, objectFit: "cover", display: "block", opacity: 0.75 }}
      />
      <div style={{ padding: "16px 18px" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, color: c.sand, fontWeight: 400, marginBottom: 6 }}>🏔️ Nel cuore della Sardegna</div>
        <p style={{ fontSize: 13, color: "rgba(244,237,224,0.8)", lineHeight: 1.7, margin: 0 }}>
          Immersa tra i boschi di Laconi, la Baita Maore è un rifugio esclusivo dove natura, lusso e tradizione sarda si incontrano.
        </p>
      </div>
    </div>
  );
}

function PH({ go }) {
  return (
    <div style={s.app}>
      <FontLink />
      <div style={{ ...s.hero, background: `linear-gradient(160deg, #3d2008 0%, #6b3a1f 40%, #4a2510 100%)` }}>
        <div style={{ position: "relative", padding: "50px 24px 36px", textAlign: "center" }}>
          <div style={s.eyebrow}>Laconi · Oristano · Sardegna</div>
          <h1 style={s.heroTitle}>Baita<br /><em style={{ fontStyle: "italic", color: c.sand }}>Maore</em></h1>
          <div style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(244,237,224,0.45)", marginTop: 10, fontFamily: "'Raleway', sans-serif", fontWeight: 200 }}>Via Funtana e Maore, 08034 Laconi</div>
          <div style={{ width: 32, height: 1, background: c.brownL, margin: "12px auto 0" }} />
        </div>
      </div>

      <div style={{ padding: "24px 20px 0" }}>
        <div style={{ background: c.dark, borderRadius: 18, padding: "20px 18px", marginBottom: 12 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, color: c.sand, fontWeight: 400, marginBottom: 8 }}>🏔️ Nel cuore della Sardegna</div>
          <p style={{ fontSize: 13, color: "rgba(244,237,224,0.8)", lineHeight: 1.7, margin: 0 }}>
            Immersa tra i boschi di Laconi, la Baita Maore è un rifugio esclusivo dove natura, lusso e tradizione sarda si incontrano.
          </p>
        </div>
      </div>

      {/* Stagioni */}
      <div style={{ padding: "8px 20px 0" }}>
        <div style={{ fontSize: 9, letterSpacing: "4px", textTransform: "uppercase", color: c.muted, textAlign: "center", marginBottom: 14 }}>In qualsiasi stagione</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ borderRadius: 18, overflow: "hidden", position: "relative", height: 160 }}>
            <img src="https://res.cloudinary.com/dovpg47yh/image/upload/v1774646565/baita_snow_g7gh1o.jpg" alt="Baita in inverno" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,18,8,0.85) 0%, rgba(28,18,8,0.1) 60%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 16 }}>
              <div style={{ fontSize: 28, marginBottom: 6 }}>❄️</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, color: "white", lineHeight: 1.2 }}>Autunno<br />& Inverno</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", marginTop: 5, lineHeight: 1.5 }}>Piscina coperta · Fuochi · SPA</div>
            </div>
          </div>
          <div style={{ borderRadius: 18, overflow: "hidden", position: "relative", height: 160 }}>
            <img src="https://res.cloudinary.com/dovpg47yh/image/upload/v1774646454/7C58746E-2898-455F-8F54-DFBECF932A68_L0_001-1_7_2023_14_44_36_itcw6x.jpg" alt="Baita in estate" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,18,8,0.85) 0%, rgba(28,18,8,0.1) 60%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 16 }}>
              <div style={{ fontSize: 28, marginBottom: 6 }}>☀️</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, color: "white", lineHeight: 1.2 }}>Primavera<br />& Estate</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", marginTop: 5, lineHeight: 1.5 }}>Piscina aperta · E-bike · Natura</div>
            </div>
          </div>
        </div>
        <div style={{ background: c.dark, borderRadius: 14, padding: "14px 18px", marginTop: 10, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "rgba(244,237,224,0.8)", lineHeight: 1.7, margin: 0 }}>
            La Baita Maore è aperta <strong style={{ color: c.sand }}>tutto l'anno</strong>.<br />
            Ogni stagione regala un'atmosfera unica tra i boschi di Laconi.
          </p>
        </div>
      </div>

      <div style={s.sectionLabel}>Esplora la guida</div>
      <div style={s.grid}>
        {[
          ["benvenuto", <Ic.home />, "Benvenuto"],
          ["checkin", <Ic.lock />, "Check-in / out"],
          ["suite", <Ic.building />, "Le Suite"],
          ["spa", <Ic.spa />, "SPA & Wellness"],
          ["piscina", <Ic.pool />, "Piscina"],
          ["regole", <Ic.check />, "Regole"],
          ["posizione", <Ic.pin />, "Come arrivare"],
          ["escursioni", <Ic.hike />, "Escursioni"],
          ["mangiare", <Ic.fork />, "Dove mangiare"],
          ["recensioni", <Ic.star />, "Recensioni"],
          ["social", <Ic.social />, "Social"],
          ["faq", <Ic.faq />, "FAQ"],
        ].map(([id, icon, label]) => (
          <div key={id} style={s.card} onClick={() => go(id)}>
            {icon}
            <span style={s.cardLabel}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ height: 32 }} />
    </div>
  );
}

function PageHead({ title, sub, back, icon }) {
  return (
    <>
      <FontLink />
      <div style={s.pageHead}>
        <button style={s.back} onClick={back}><Ic.back /> Home</button>
        <div style={{ marginBottom: 8 }}>{icon}</div>
        <h2 style={s.pageTitle}>{title}</h2>
        {sub && <div style={{ fontSize: 11, color: "rgba(244,237,224,0.5)", marginTop: 6, letterSpacing: "1px", fontFamily: "'Raleway',sans-serif" }}>{sub}</div>}
      </div>
    </>
  );
}

function Benvenuto({ go }) {
  return <div style={s.app}>
    <FontLink />
    <div style={s.hero}>
      <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80" alt="Baita Maore interno" style={s.heroImg} />
      <div style={s.heroOverlay} />
      <div style={s.heroContent}>
        <button style={{ ...s.back, marginBottom: 16 }} onClick={() => go("home")}><Ic.back /> Home</button>
        <h2 style={{ ...s.pageTitle, color: c.cream, margin: 0 }}>Benvenuti in Baita</h2>
      </div>
    </div>
    <div style={s.content}>
      <HeroCard />
      <div style={s.hlBox}>
        <div style={s.hlTitle}>Siamo felici di ospitarvi</div>
        <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.92, margin: 0 }}>
          Un'oasi di relax vi aspetta, immersa tra la natura. Gusti e sapori di una terra autentica, una storia millenaria tutta da scoprire.
        </p>
      </div>
      <Card>
        <CT icon={<Ic.lock />} text="Orari" />
        <Row l="Check-in" v="dalle 14:00" />
        <Row l="Check-out" v="entro le 11:00" last />
      </Card>
      <Card>
        <CT text="📞 Contatti" />
        <a href="tel:+393392156270" style={s.tel}><span style={{ fontSize: 13.5, color: c.dark }}>📱 Baita Maore</span><span style={{ fontFamily: "Georgia,serif", fontSize: 15, color: c.brown }}>339 215 6270</span></a>
        <a href="tel:+393474029363" style={s.tel}><span style={{ fontSize: 13.5, color: c.dark }}>📱 Baita Maore</span><span style={{ fontFamily: "Georgia,serif", fontSize: 15, color: c.brown }}>347 402 9363</span></a>
        <a href="mailto:info@baitamaore.it" style={s.telLast}><span style={{ fontSize: 13.5, color: c.dark }}>✉️ Email</span><span style={{ fontSize: 13, color: c.brown }}>info@baitamaore.it</span></a>
      </Card>
      <Card>
        <CT text="🌐 Web & Social" />
        <Row l="Sito web" v="baitamaore.it ›" link="https://www.baitamaore.it" />
        <Row l="Instagram" v="@baitamaore ›" link="https://www.instagram.com/baitamaore" last />
      </Card>
    </div>
  </div>;
}

function Checkin({ go }) {
  return <div style={s.app}>
    <PageHead title="Check-in / out" back={() => go("home")} icon={<Ic.lock />} />
    <div style={s.content}>
      <Card>
        <CT text="🕒 Arrivo" />
        <Rule t={<span>Check-in disponibile <strong>dalle ore 14:00</strong></span>} />
        <Rule t="Comunicateci in anticipo l'orario previsto di arrivo" />
        <Rule t="Vi accoglieremo personalmente alla Baita" last />
      </Card>
      <Card>
        <CT text="🚪 Partenza" />
        <Rule t={<span>Check-out <strong>entro le ore 11:00</strong></span>} />
        <Rule t="Seguite le istruzioni per la raccolta differenziata" last />
      </Card>
      <Card>
        <CT text="🧖 Prenotazione SPA" />
        <p style={{ fontSize: 13.5, color: c.muted, marginBottom: 12, lineHeight: 1.65 }}>
          Comunicateci in anticipo tramite email l'orario preferito per accedere alla SPA (durata 1 ora):
        </p>
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: c.muted, marginBottom: 8 }}>Mattina</div>
          {["9:30", "11:00"].map(t => <span key={t} style={s.spaSlot}>{t}</span>)}
        </div>
        <div>
          <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: c.muted, marginBottom: 8 }}>Pomeriggio / Sera</div>
          {["15:00", "16:30", "18:00", "19:30", "21:00 (dopo cena)"].map(t => <span key={t} style={s.spaSlot}>{t}</span>)}
        </div>
        <a href="mailto:info@baitamaore.it?subject=Prenotazione SPA" style={s.mailBtn}><Ic.mailW /> Invia email di prenotazione</a>
      </Card>
      <Card>
        <CT icon={<Ic.pin />} text="Indirizzo" />
        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, marginBottom: 12 }}>Via Funtana e Maore<br />08034 Laconi (OR) — Sardegna</p>
        <p style={{ fontSize: 13, color: c.muted, marginBottom: 10, lineHeight: 1.6 }}>⚠️ Usate Google Maps cercando <strong>Laconi - NU -</strong>. Evitate la segnalazione diretta «Baita Maore» che può indicare una strada non accessibile.</p>
        <a href="https://maps.google.com/?q=Baita+Maore+Laconi+Oristano" target="_blank" rel="noreferrer" style={s.mapBtn}><Ic.mapW /> Apri in Google Maps</a>
      </Card>
    </div>
  </div>;
}

function Suite({ go }) {
  const [open, setOpen] = useState(null);

  const suites = [
    {
      id: "superior",
      name: "Suite Superior",
      sub: "5 suite · Quercia · Abete · Pino · Leccio · Ulivo",
      rooms: ["Quercia", "Abete", "Pino", "Leccio", "Ulivo"],
      desc: "Le nostre Suite Superior vi accoglieranno in un ambiente ricco di energia e calore naturale. Ogni dettaglio è stato curato per offrire un'esperienza indimenticabile, dal profumo del legno al comfort.",
      features: ["Bagno privato con doccia a pioggia", "Pavimenti in rovere", "Veranda privata", "Giardino privato", "Eleganza e comfort naturale"],
      // 👇 Inserisci qui i tuoi URL Cloudinary
      photos: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
        "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80",
      ],
      color: c.brown,
    },
    {
      id: "luxury",
      name: "Luxury Suite",
      sub: "2 suite · Pioppo · Cedro · SPA privata",
      rooms: ["Pioppo", "Cedro"],
      desc: "Le Luxury Suite vi offrono un'oasi di privacy assoluta. La vostra SPA privata è un rifugio intimo, dove il tempo sembra fermarsi e ogni dettaglio è pensato per un'esperienza di puro relax in totale riservatezza.",
      features: ["45 m² di privacy totale", "SPA privata ad uso esclusivo", "Sauna, Jacuzzi e zona relax", "Ogni comfort per il benessere", "Atmosfera esclusiva e riservata"],
      // 👇 Inserisci qui i tuoi URL Cloudinary
      photos: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80",
      ],
      color: "#2d1a0e",
    },
  ];

  return <div style={s.app}>
    <PageHead title="Le Suite" sub="Rifugi di legno e pietra" back={() => go("home")} icon={<Ic.building />} />
    <div style={s.content}>

      {suites.map((suite) => {
        const isOpen = open === suite.id;
        return (
          <div key={suite.id} style={{ marginBottom: 14, borderRadius: 20, overflow: "hidden", border: `1.5px solid ${isOpen ? suite.color : c.sand}`, background: c.white, transition: "border-color 0.2s" }}>

            {/* Hero tap area */}
            <div onClick={() => setOpen(isOpen ? null : suite.id)} style={{ cursor: "pointer" }}>
              {/* Cover photo */}
              <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
                <img src={suite.photos[0]} alt={suite.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,18,8,0.75) 0%, rgba(28,18,8,0) 50%)" }} />
                {/* Room badges on image */}
                <div style={{ position: "absolute", bottom: 12, left: 14, display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {suite.rooms.map(r => (
                    <span key={r} style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", borderRadius: 20, padding: "3px 10px", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>{r}</span>
                  ))}
                </div>
                {/* Expand button */}
                <div style={{ position: "absolute", top: 12, right: 12, width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: "white", fill: "none", strokeWidth: 2.5, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s" }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* Title row */}
              <div style={{ padding: "14px 16px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: c.dark }}>{suite.name}</div>
                  <div style={{ fontSize: 11, color: c.muted, marginTop: 2, letterSpacing: "0.3px" }}>{suite.sub}</div>
                </div>
                <span style={{ fontSize: 11, color: c.brown, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
                  {isOpen ? "Chiudi" : "Scopri"}
                </span>
              </div>
            </div>

            {/* Expanded content */}
            {isOpen && (
              <div style={{ borderTop: `1px solid ${c.sand}` }}>
                {/* Second photo if available */}
                {suite.photos[1] && (
                  <img src={suite.photos[1]} alt={`${suite.name} dettaglio`}
                    style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }} />
                )}

                <div style={{ padding: "16px 18px 20px" }}>
                  <p style={{ fontSize: 13.5, lineHeight: 1.75, color: c.muted, margin: "0 0 16px" }}>{suite.desc}</p>
                  {suite.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: i < suite.features.length - 1 ? `1px solid ${c.sand}` : "none", alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: suite.color, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 13.5, lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                  <a href="mailto:info@baitamaore.it?subject=Informazioni%20suite"
                    style={{ display: "flex", alignItems: "center", gap: 8, background: suite.color, color: "white", borderRadius: 12, padding: "12px 16px", textDecoration: "none", fontSize: 13, marginTop: 16, justifyContent: "center" }}>
                    <Ic.mailW /> Richiedi informazioni
                  </a>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
        {["Legno naturale", "Doccia a pioggia", "Veranda privata", "SPA privata", "Giardino"].map((t, i) => (
          <span key={t} style={i === 0 ? s.tagA : s.tag}>{t}</span>
        ))}
      </div>
    </div>
  </div>;
}

function TreatmentCard({ emoji, name, price, duration, desc }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(o => !o)} style={{
      borderBottom: `1px solid ${c.sand}`, cursor: desc ? "pointer" : "default", paddingBottom: 2,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 0 11px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
          <span style={{ fontSize: 20 }}>{emoji}</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 500, color: c.dark }}>{name}</div>
            <div style={{ fontSize: 12, color: c.muted, marginTop: 1 }}>{duration}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            background: `linear-gradient(135deg, ${c.brown}, ${c.brownL})`,
            borderRadius: 10, padding: "4px 10px",
            fontFamily: "'Playfair Display',serif", fontSize: 15, color: "white", whiteSpace: "nowrap",
          }}>{price}</div>
          {desc && (
            <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: c.muted, fill: "none", strokeWidth: 2, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          )}
        </div>
      </div>
      {open && desc && (
        <div style={{ fontSize: 13, color: c.muted, lineHeight: 1.7, paddingBottom: 12, paddingLeft: 30 }}>{desc}</div>
      )}
    </div>
  );
}

function Spa({ go }) {
  const massaggi = [
    { emoji: "🌿", name: "Relax", price: "€ 55,00", duration: "50 min", desc: "Un trattamento per ritrovare il rilassamento mentale, grazie alle essenze pregiate di bergamotto, limone, gelsomino, gardenia, menta e cedro." },
    { emoji: "💪", name: "Decontratturante", price: "€ 55,00", duration: "50 min", desc: null },
    { emoji: "💧", name: "Linfodrenante", price: "€ 60,00", duration: "60 min", desc: null },
    { emoji: "✨", name: "Modellante", price: "€ 60,00", duration: "50 min", desc: null },
  ];
  const trattamenti = [
    { emoji: "🪮", name: "Spazzolatura del corpo", price: "€ 50,00", duration: "50 min", desc: "Con l'ausilio di spazzole si strofina sulla pelle nuda asciutta, partendo dalle estremità verso il cuore. Tonifica i tessuti, ridona colore e lucentezza alla pelle, distende le tensioni muscolari e stimola la circolazione sanguigna. Ottima in presenza di cellulite." },
    { emoji: "🦵", name: "Gambe leggere", price: "€ 55,00", duration: "45 min", desc: "Avvolgimento con fango e gel freddo tri-attivo rinfrescante, drenante, lenitivo. Con escina, arnica, menta piperita, meliloto e mentolo — sollievo per gambe e caviglie appesantite da stanchezza, caldo o peso eccessivo." },
  ];
  const viso = [
    { emoji: "🧖", name: "Pulizia viso base", price: "€ 50,00", duration: "50 min", desc: null },
    { emoji: "🌱", name: "Trattamento Detox", price: "€ 55,00", duration: "60 min", desc: null },
    { emoji: "⏳", name: "Antiage / Antimacchia", price: "€ 60,00", duration: "75 min", desc: null },
    { emoji: "✨", name: "Trattamento occhi", price: "€ 55,00", duration: "30 min", desc: "A base di oro puro colloidale, peptidi e cellule staminali vegetali — studiato per contrastare efficacemente borse palpebrali, rughe ed occhiaie scure." },
  ];

  return <div style={s.app}>
    <PageHead title="SPA & Wellness" sub="300 mq · Il tempo si ferma" back={() => go("home")} icon={<Ic.spa />} />
    <div style={s.content}>

      {/* Intro */}
      <div style={s.hlBox}>
        <div style={s.hlTitle}>Un'oasi di benessere</div>
        <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.92, margin: 0 }}>
          Dopo una giornata tra i boschi di Laconi, rigeneratevi nella nostra splendida SPA di 300 mq. Jacuzzi, sauna finlandese, doccia cromoterapica e zona relax vi aspettano.
        </p>
      </div>

      {/* Area SPA */}
      <Card>
        <CT text="🌊 Area comune SPA" />
        <Rule t="Vasca Jacuzzi" />
        <Rule t="Sauna finlandese" />
        <Rule t="Doccia cromoterapica" />
        <Rule t="Zona relax con dormense" last />
      </Card>

      {/* Luxury */}
      <Card>
        <CT text="💎 Luxury Suite — SPA privata" />
        <Rule t="SPA privata ad uso esclusivo (suite Pioppo e Cedro)" />
        <Rule t="45 m² di riservatezza assoluta" last />
      </Card>

      {/* Listino — Massaggi */}
      <div style={{ fontSize: 9, letterSpacing: "3px", textTransform: "uppercase", color: c.muted, margin: "20px 0 4px", textAlign: "center" }}>Listino prezzi</div>
      <p style={{ fontSize: 12, color: c.muted, textAlign: "center", marginBottom: 14 }}>Tocca un trattamento per leggere la descrizione</p>

      <Card>
        <CT text="💆 Massaggi" />
        {massaggi.map((t, i) => <TreatmentCard key={i} {...t} />)}
        <div style={{ height: 4 }} />
      </Card>

      <Card>
        <CT text="🧴 Trattamenti corpo" />
        {trattamenti.map((t, i) => <TreatmentCard key={i} {...t} />)}
        <div style={{ height: 4 }} />
      </Card>

      <Card>
        <CT text="🪷 Trattamenti viso" />
        {viso.map((t, i) => <TreatmentCard key={i} {...t} />)}
        <div style={{ height: 4 }} />
      </Card>

      {/* Prenota */}
      <div style={{ ...s.darkBox, textAlign: "center" }}>
        <p style={{ fontSize: 13, color: c.sand, fontWeight: 500, marginBottom: 4 }}>Prenota il tuo trattamento</p>
        <p style={{ fontSize: 12, color: "rgba(244,237,224,0.65)", lineHeight: 1.7, margin: "0 0 14px" }}>
          Comunicateci in anticipo l'orario preferito per accedere alla SPA.
        </p>
        <a href="mailto:info@baitamaore.it?subject=Prenotazione SPA"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: c.brown, color: "white", borderRadius: 12, padding: "11px 20px", textDecoration: "none", fontSize: 13 }}>
          <Ic.mailW /> Prenota via email
        </a>
      </div>

    </div>
  </div>;
}

function Piscina({ go }) {
  return <div style={s.app}>
    <PageHead title="Piscina" sub="Aperta tutto l'anno" back={() => go("home")} icon={<Ic.pool />} />
    <div style={s.content}>
      <div style={s.hlBox}>
        <div style={s.hlTitle}>In qualsiasi stagione</div>
        <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.92, margin: 0 }}>La piscina è a vostra completa disposizione per tutta la durata del soggiorno.</p>
      </div>
      <Card>
        <CT text="☀️ Estate" />
        <Rule t="Piscina esterna scoperta" />
        <Rule t="Comodi lettini e divanetti" />
        <Rule t="Relax sotto il sole tra i boschi sardi" last />
      </Card>
      <Card>
        <CT text="❄️ Autunno / Inverno" />
        <Rule t="Struttura retrattile — piscina coperta" />
        <Rule t={<span>Acqua riscaldata a <strong>30–32 °C</strong></span>} />
        <Rule t="Rifugio caldo immerso nel paesaggio innevato" last />
      </Card>
    </div>
  </div>;
}

function Regole({ go }) {
  return <div style={s.app}>
    <PageHead title="Regole della Baita" back={() => go("home")} icon={<Ic.check />} />
    <div style={s.content}>
      <Card>
        <CT text="📋 Generali" />
        <Rule t={<span>Check-in dalle <strong>14:00</strong> — Check-out entro le <strong>11:00</strong></span>} />
        <Rule t="Comunicateci l'orario di arrivo previsto" />
        <Rule t="Rispettare il numero massimo di ospiti" last />
      </Card>
      <Card>
        <CT text="🤫 Rispetto & Convivenza" />
        <Rule t="Rispettare gli spazi comuni con cura" />
        <Rule t="Silenzio nelle ore notturne" />
        <Rule t="Segnalare eventuali danni prima del check-out" last />
      </Card>
      <Card>
        <CT text="🔒 Sicurezza" />
        <Rule t="Chiudere sempre a chiave all'uscita" />
        <Rule t={<span>Emergenze: <strong>112</strong></span>} last />
      </Card>
    </div>
  </div>;
}

function Posizione({ go }) {
  return <div style={s.app}>
    <PageHead title="Come arrivare" back={() => go("home")} icon={<Ic.pin />} />
    <div style={s.content}>
      <Card>
        <CT icon={<Ic.pin />} text="Indirizzo" />
        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, marginBottom: 10 }}>Via Funtana e Maore<br />08034 Laconi (OR) — Sardegna</p>
        <div style={{ ...s.darkBox, marginBottom: 10 }}>
          <p style={{ fontSize: 12, color: "rgba(244,237,224,0.8)", lineHeight: 1.65, margin: 0 }}>⚠️ <strong style={{ color: c.sand }}>Importante:</strong> Usate Google Maps cercando <strong style={{ color: c.sand }}>«Laconi - NU -»</strong> come destinazione. Evitate la segnalazione diretta «Baita Maore» che talvolta indica una strada non accessibile.</p>
        </div>
        <a href="https://maps.google.com/?q=Laconi+Oristano+Sardegna" target="_blank" rel="noreferrer" style={s.mapBtn}><Ic.mapW /> Apri in Google Maps</a>
      </Card>
      <Card>
        <CT text="🚗 Distanze principali" />
        <Row l="✈️ Aeroporto Cagliari (CAG)" v="~1h 15min" />
        <Row l="✈️ Aeroporto Olbia (OLB)" v="~2h 30min" />
        <Row l="🏙️ Cagliari centro" v="~1h 10min" />
        <Row l="🏙️ Nuoro" v="~1h" />
        <Row l="💧 Sa Stiddiosa (piscine)" v="~20–30 min" last />
      </Card>
    </div>
  </div>;
}

function ActivityCard({ emoji, title, subtitle, detail, price, photos, mapLink }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(o => !o)}
      style={{
        background: open ? c.white : c.white,
        borderRadius: 16,
        border: `1.5px solid ${open ? c.brown : c.sand}`,
        overflow: "hidden",
        marginBottom: 10,
        cursor: "pointer",
        transition: "border-color 0.2s",
      }}
    >
      {/* Header row — always visible */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 16px" }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: open ? `linear-gradient(135deg,${c.brown},${c.brownL})` : c.cream,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, flexShrink: 0, transition: "background 0.2s",
        }}>{emoji}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 400, color: c.dark }}>{title}</div>
          <div style={{ fontSize: 12, color: c.muted, marginTop: 2 }}>{subtitle}</div>
        </div>
        <div style={{
          width: 26, height: 26, borderRadius: "50%",
          background: open ? c.brown : c.sand,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, transition: "all 0.2s",
        }}>
          <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, stroke: open ? "white" : c.muted, fill: "none", strokeWidth: 2.5, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Expandable detail */}
      {open && (
        <div style={{ borderTop: `1px solid ${c.sand}` }}>
          {/* Photo gallery */}
          {photos && photos.length > 0 && (
            <div style={{
              display: "grid",
              gridTemplateColumns: photos.length === 1 ? "1fr" : "1fr 1fr",
              gap: 2,
            }}>
              {photos.map((src, i) => (
                <img key={i} src={src} alt={title}
                  style={{ width: "100%", height: photos.length === 1 ? 200 : 140, objectFit: "cover", display: "block" }}
                />
              ))}
            </div>
          )}

          {/* Text detail */}
          <div style={{ padding: "14px 16px 16px" }}>
            <p style={{ fontSize: 13.5, lineHeight: 1.7, color: c.muted, margin: "0 0 12px" }}>{detail}</p>
            {price && (
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: c.cream, borderRadius: 10, padding: "6px 12px", marginBottom: 12 }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, color: c.brown }}>{price}</span>
              </div>
            )}
            {mapLink && (
              <a href={mapLink} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 8, background: c.forest, color: "white", borderRadius: 12, padding: "11px 14px", textDecoration: "none", fontSize: 13 }}>
                <Ic.mapW /> Apri mappa
              </a>
            )}
            <a href="mailto:info@baitamaore.it?subject=Prenotazione%20attività"
              style={{ display: "flex", alignItems: "center", gap: 8, background: c.brown, color: "white", borderRadius: 12, padding: "11px 14px", textDecoration: "none", fontSize: 13, marginTop: 8 }}>
              <Ic.mailW /> Prenota questa attività
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function Escursioni({ go }) {
  const activities = [
    {
      emoji: "🚲", title: "E-bike", subtitle: "Tra i boschi e la foresta",
      detail: "Pedala tra i boschi di Laconi e raggiungi la Foresta di Funtamela e Bau Onu su un percorso totale di 23 km (andata e ritorno). Un'esperienza immersa nella natura selvaggia della Sardegna centrale.",
      photos: [
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80",
      ],
    },
    {
      emoji: "🚗", title: "Fiat 500 d'epoca", subtitle: "Cabrio rossa degli anni '50",
      detail: "Riviví gli anni '50 a bordo della nostra Fiat 500 rossa cabrio d'epoca. Un'esperienza unica per scoprire i borghi e i paesaggi della Sardegna in modo indimenticabile.",
      photos: [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
      ],
    },
    {
      emoji: "🏍️", title: "Quad", subtitle: "Percorsi nascosti tra ruscelli e cascate",
      detail: "Esplora percorsi nascosti con i quad, tra ruscelli, cascate e boschi incontaminati. Adrenalina e natura in un'unica avventura.",
      photos: [],
    },
    {
      emoji: "🚌", title: "Bus Vintage «Maoretto»", subtitle: "Picnic panoramico nel bosco",
      detail: "Organizza un'uscita indimenticabile a bordo del nostro bus vintage Maoretto. Raggiungiamo insieme un punto panoramico o un angolo di bosco segreto per un picnic immersi nella natura.",
      price: "Set picnic € 75 a coppia",
      photos: [],
    },
    {
      emoji: "🧺", title: "Aperitivo nel bosco", subtitle: "O in punto panoramico",
      detail: "Concedetevi un aperitivo al tramonto nel bosco o in uno dei punti panoramici più suggestivi di Laconi. Un'esperienza romantica e autentica.",
      photos: [],
    },
  ];

  const fromBaita = [
    { name: "🌳 Parco Aymerich & Cascata Maggiore", desc: "~40 min a piedi. Destra all'uscita, prima sinistra, sentiero nel bosco → Parco, castello, cascata.", url: "https://maps.google.com/?q=Parco+Aymerich+Laconi" },
    { name: "🌊 Il Mulinu & Grotta", desc: "Destra all'uscita, ~100m, poi sinistra, rotaie, curva destra. Strada in discesa verso la cascatella e la grotta.", url: "https://maps.google.com/?q=Il+Mulinu+Laconi+cascata" },
    { name: "🏔️ Punta Carradore", desc: "Sinistra all'uscita, cancello a destra, attraversare la pineta. Punto più alto di Laconi con statua di Sant'Ignazio.", url: "https://maps.google.com/?q=Punta+Carradore+Laconi" },
    { name: "🌲 Foresta Funtamela & Bau Onu", desc: "In e-bike. Percorso totale 23 km andata e ritorno.", url: "https://maps.google.com/?q=Foresta+Funtamela+Laconi" },
    { name: "🌲 Foresta di Is Arinos", desc: "Escursione naturalistica tra gli alberi storici del territorio di Laconi.", url: "https://maps.google.com/?q=Foresta+Is+Arinos+Laconi" },
  ];

  const nearby = [
    { name: "💧 Sa Stiddiosa", desc: "Piscine naturali del Flumendosa tra Seulo e Gadoni (20–30 min).", contact: "ecomuseo-flumendosa@gmail.com · +39 328 497 9486", url: "https://www.ecomuseoflumendosa.it" },
    { name: "🏛️ Museo Menhir di Laconi", desc: "Unico in Sardegna. Conserva le statue preistoriche dei menhir antropomorfi.", url: "https://www.museomenhir.it" },
    { name: "🚂 Trenino Verde", desc: "Esperienza unica per scoprire borghi, paesaggi naturali, profumi e sapori della Sardegna autentica.", url: "https://www.treninoverdesardegna.it" },
    { name: "🏞️ Lago San Sebastiano (Isili)", desc: "Pesca sportiva, canoa, arrampicata, escursioni. Il Trenino Verde costeggia il lago.", url: "https://maps.google.com/?q=Lago+San+Sebastiano+Isili+Sardegna" },
  ];

  return <div style={s.app}>
    <PageHead title="Escursioni" sub="Crea ogni giorno una nuova avventura" back={() => go("home")} icon={<Ic.hike />} />
    <div style={s.content}>

      {/* Activities section header */}
      <div style={{ fontSize: 9, letterSpacing: "3px", textTransform: "uppercase", color: c.muted, marginBottom: 14, textAlign: "center" }}>Attività con la Baita</div>
      <p style={{ fontSize: 13.5, color: c.muted, lineHeight: 1.65, marginBottom: 16, textAlign: "center" }}>Prenotate le vostre esperienze su misura — tocca per scoprire di più</p>

      {activities.map((a) => (
        <ActivityCard key={a.title} {...a} />
      ))}

      {/* ── A piedi dalla Baita ── */}
      <Card style={{ marginTop: 6 }}>
        <CT text="🥾 A piedi dalla Baita" />
        {fromBaita.map((item, i) => {
          const isLast = i === fromBaita.length - 1;
          const inner = (
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 500, fontSize: 14, color: item.url || item.map ? c.brown : c.dark, marginBottom: 2 }}>{item.name}</div>
              <div style={{ fontSize: 12.5, color: c.muted, lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          );
          const arrowIcon = (
            <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: c.brown, fill: "none", strokeWidth: 2, flexShrink: 0 }}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          );
          const st = { ...isLast ? s.ruleLast : s.rule, alignItems: "center" };
          if (item.url || item.map) {
            return (
              <a key={i} href={item.url || item.map} target="_blank" rel="noreferrer" style={{ ...st, textDecoration: "none" }}>
                <div style={s.dot} />
                {inner}
                {arrowIcon}
              </a>
            );
          }
          return (
            <div key={i} style={st}>
              <div style={s.dot} />
              {inner}
            </div>
          );
        })}
      </Card>

      {/* ── Nei dintorni ── */}
      <Card>
        <CT text="🗺️ Nei dintorni" />
        {nearby.map((item, i) => {
          const isLast = i === nearby.length - 1;
          const inner = (
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 500, fontSize: 14, color: item.url || item.map ? c.brown : c.dark, marginBottom: 2 }}>{item.name}</div>
              <div style={{ fontSize: 12.5, color: c.muted, lineHeight: 1.6 }}>{item.desc}</div>
              {item.contact && <div style={{ fontSize: 11.5, color: c.muted, marginTop: 3 }}>{item.contact}</div>}
            </div>
          );
          const arrowIcon = (
            <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: c.brown, fill: "none", strokeWidth: 2, flexShrink: 0 }}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          );
          const st = { ...isLast ? s.ruleLast : s.rule, alignItems: "center" };
          if (item.url || item.map) {
            return (
              <a key={i} href={item.url || item.map} target="_blank" rel="noreferrer" style={{ ...st, textDecoration: "none" }}>
                <div style={s.dot} />
                {inner}
                {arrowIcon}
              </a>
            );
          }
          return (
            <div key={i} style={st}>
              <div style={s.dot} />
              {inner}
            </div>
          );
        })}
      </Card>

      {/* ── Tartufo di Laconi ── */}
      <div style={{
        background: `linear-gradient(135deg, #2d1a0e, #4a2c14)`,
        borderRadius: 18, padding: "20px 18px", marginBottom: 12, color: "white",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <span style={{ fontSize: 36 }}>🍄</span>
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: "#f4ede0", marginBottom: 2 }}>Tartufo di Laconi</div>
            <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: c.brownL }}>Un tesoro nascosto tra i boschi</div>
          </div>
        </div>
        <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "rgba(244,237,224,0.85)", margin: "0 0 14px" }}>
          I boschi attorno a Laconi nascondono uno dei segreti gastronomici più rari della Sardegna: il <strong style={{ color: c.sand }}>tartufo nero</strong>, raccolto nei mesi autunnali e invernali tra querce e lecci secolari. Una rarità che pochi conoscono, a pochi passi dalla Baita.
        </p>
        <a href="tel:+393515268835"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.12)", borderRadius: 12, padding: "11px 14px", textDecoration: "none" }}>
          <div>
            <div style={{ fontSize: 13, color: "#f4ede0", fontWeight: 500 }}>🌿 L'Isola dei Sapori — Mandas</div>
            <div style={{ fontSize: 11.5, color: "rgba(244,237,224,0.6)", marginTop: 2 }}>Raccolta e produzione tartufo sardo · Carta Veronica</div>
          </div>
          <span style={{ fontSize: 13, color: c.brownL, fontFamily: "'Playfair Display',serif" }}>351 526 8835</span>
        </a>
      </div>

      {/* ── Cultura & Tradizione ── */}
      {(() => {
        const cultura = [
          { name: "🏛️ Palazzo Aymerich", sub: "Laconi", url: "https://www.comune.laconi.or.it/palazzo-aymerich" },
          { name: "⛪ Casa Natale di Sant'Ignazio", sub: "Laconi", url: "https://maps.google.com/?q=Casa+Natale+Sant+Ignazio+Laconi" },
          { name: "🕌 Borgo Santa Sofia", sub: "Antica Chiesa Bizantina", url: "https://maps.google.com/?q=Borgo+Santa+Sofia+Laconi" },
          { name: "🍷 Cantina Genna Manna", sub: "Visita guidata e degustazione", tel: "+393331849430", url: "https://maps.google.com/?q=Cantina+Genna+Manna+Laconi" },
          { name: "🪨 Domus de Janas", sub: "Case delle Fate — tombe neolitiche", url: "https://maps.google.com/?q=Domus+de+Janas+Sardegna" },
          { name: "⚰️ Tomba di Aiodda", sub: "Isili", url: "https://maps.google.com/?q=Tomba+Aiodda+Isili" },
          { name: "🍷 Cantina La Dolce Vigna", sub: "Atzara", tel: "+393288148897", url: "https://maps.google.com/?q=La+Dolce+Vigna+Atzara" },
          { name: "🎨 La Robbia ad Atzara", sub: "Tinture Naturali e Arti Applicate", url: "https://maps.google.com/?q=La+Robbia+Atzara" },
          { name: "🍄 Museo Etnografico di Mandas", sub: "L'Isola dei Sapori — tartufo sardo", tel: "+393515268835", url: "https://maps.google.com/?q=Museo+Etnografico+Mandas" },
          { name: "🦇 Grotta Is Janas", sub: "Grotta preistorica", url: "https://maps.google.com/?q=Grotta+Is+Janas+Sardegna" },
          { name: "🌿 Laboratorio Liquori Lugas", sub: "Laconi", url: "https://maps.google.com/?q=Liquori+Lugas+Laconi" },
          { name: "🗿 Su Stampu de su Turrunu", sub: "Sito nuragico", url: "https://maps.google.com/?q=Su+Stampu+de+su+Turrunu+Sardegna" },
          { name: "🎨 Museo d'Arte Sacra", sub: "Mandas", url: "https://maps.google.com/?q=Museo+Arte+Sacra+Mandas" },
        ];
        return (
          <Card>
            <CT text="🏛️ Cultura & Tradizione" />
            {cultura.map((item, i) => {
              const isLast = i === cultura.length - 1;
              return (
                <a key={i} href={item.url} target="_blank" rel="noreferrer"
                  style={{ ...isLast ? s.rowLast : s.row, textDecoration: "none", alignItems: "center", gap: 10 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13.5, color: c.dark, fontWeight: 400 }}>{item.name}</div>
                    <div style={{ fontSize: 11.5, color: c.muted, marginTop: 1 }}>{item.sub}{item.tel && <span style={{ color: c.brown }}> · {item.tel}</span>}</div>
                  </div>
                  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: c.brown, fill: "none", strokeWidth: 2, flexShrink: 0 }}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              );
            })}
          </Card>
        );
      })()}

      {/* ── Avventura ~1 ora ── */}
      {(() => {
        const avventura = [
          { name: "⛏️ Miniera di Piscinas", sub: "Sottosuolo storico — ~1 ora dalla Baita", url: "https://maps.google.com/?q=Miniera+Piscinas+Sardegna" },
          { name: "🏜️ Dune di Piscinas", sub: "Le dune più alte d'Europa — ~1 ora dalla Baita", url: "https://maps.google.com/?q=Dune+Piscinas+Sardegna" },
        ];
        return (
          <Card>
            <CT text="🌊 Avventura — ~1 ora" />
            {avventura.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noreferrer"
                style={{ ...i < avventura.length - 1 ? s.row : s.rowLast, textDecoration: "none", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5, color: c.dark }}>{item.name}</div>
                  <div style={{ fontSize: 11.5, color: c.muted, marginTop: 1 }}>{item.sub}</div>
                </div>
                <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: c.brown, fill: "none", strokeWidth: 2, flexShrink: 0 }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            ))}
          </Card>
        );
      })()}

      <div style={s.darkBox}>
        <p style={{ fontSize: 13, color: c.sand, fontWeight: 500, marginBottom: 6 }}>Guide escursionistiche consigliate</p>
        <a href="tel:+393403995145" style={{ display: "flex", justifyContent: "space-between", textDecoration: "none", padding: "8px 0", borderBottom: `1px solid rgba(255,255,255,0.1)` }}>
          <span style={{ fontSize: 13, color: "rgba(244,237,224,0.8)" }}>Federico Melis</span>
          <span style={{ fontSize: 13, color: c.brownL }}>340 399 5145</span>
        </a>
        <a href="tel:+393479143436" style={{ display: "flex", justifyContent: "space-between", textDecoration: "none", padding: "8px 0" }}>
          <span style={{ fontSize: 13, color: "rgba(244,237,224,0.8)" }}>Oscar</span>
          <span style={{ fontSize: 13, color: c.brownL }}>347 914 3436</span>
        </a>
      </div>
    </div>
  </div>;
}

function Mangiare({ go }) {
  return <div style={s.app}>
    <PageHead title="Dove mangiare" back={() => go("home")} icon={<Ic.fork />} />
    <div style={s.content}>

      <div style={s.hlBox}>
        <div style={s.hlTitle}>🍽️ Cena in Baita — Chef Night</div>
        <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.92, margin: "0 0 10px" }}>
          In alcune serate speciali il nostro chef vi sorprenderà con un menù fisso di 4 portate, creato per esaltare i sapori del territorio sardo.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 10, padding: "10px 14px", flex: 1, minWidth: 100 }}>
            <div style={{ fontSize: 22, fontFamily: "'Playfair Display',serif" }}>€ 40</div>
            <div style={{ fontSize: 11, opacity: 0.8, marginTop: 2 }}>a persona · acqua inclusa</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 10, padding: "10px 14px", flex: 1, minWidth: 100 }}>
            <div style={{ fontSize: 22, fontFamily: "'Playfair Display',serif" }}>20:30</div>
            <div style={{ fontSize: 11, opacity: 0.8, marginTop: 2 }}>orario di servizio</div>
          </div>
        </div>
        <a href="mailto:info@baitamaore.it?subject=Cena in Baita" style={{ ...s.mailBtn, marginTop: 14, background: "rgba(255,255,255,0.2)" }}><Ic.mailW /> Prenota la cena</a>
      </div>

      <Card>
        <CT text="🌅 Colazione & Taglieri" />
        <Rule t="Colazione ricca e nutriente ogni mattina" />
        <Rule t={<span><strong>Taglieri Baita</strong> — prelibatezze locali selezionate con cura, disponibili a pranzo e cena</span>} last />
      </Card>

      {(() => {
        const ristoranti = [
          { emoji: "🍽️", name: "Ristorante-Pizzeria La Cascata", loc: "Laconi", tels: ["+393312383219"], telLabels: ["+39 331 238 3219"], map: "https://maps.google.com/?q=Ristorante+La+Cascata+Laconi" },
          { emoji: "🍽️", name: "Ristorante Sa Spillunca", loc: "Laconi", tels: ["+390782869632", "+393491994908"], telLabels: ["+39 0782 869 632", "+39 349 199 4908"], map: "https://maps.google.com/?q=Ristorante+Sa+Spillunca+Laconi" },
          { emoji: "🌿", name: "Ristorante Rurale Santa Maria", loc: "Nurallao", tels: ["+393498776812"], telLabels: ["+39 349 877 6812"], map: "https://maps.google.com/?q=Ristorante+Rurale+Santa+Maria+Nurallao" },
          { emoji: "🍕", name: "Pizzeria Su Stunnu", loc: "Laconi", tels: ["+393491994908"], telLabels: ["+39 349 199 4908"], map: "https://maps.google.com/?q=Pizzeria+Su+Stunnu+Laconi" },
        ];
        return (
          <Card>
            <CT text="🏠 Ristoranti a Laconi e dintorni" />
            {ristoranti.map((r, i) => (
              <div key={i} style={{ padding: "12px 0", borderBottom: i < ristoranti.length - 1 ? `1px solid ${c.sand}` : "none" }}>
                {/* Name row — tappable for maps */}
                <a href={r.map} target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none", marginBottom: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: c.dark }}>{r.emoji} {r.name}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: c.brown }}>
                    <svg viewBox="0 0 24 24" style={{ width: 12, height: 12, stroke: c.brown, fill: "none", strokeWidth: 2 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {r.loc}
                  </span>
                </a>
                {/* Phone numbers */}
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {r.tels.map((tel, j) => (
                    <a key={j} href={`tel:${tel}`}
                      style={{ display: "inline-flex", alignItems: "center", gap: 5, background: c.cream, borderRadius: 8, padding: "5px 10px", textDecoration: "none" }}>
                      <svg viewBox="0 0 24 24" style={{ width: 12, height: 12, stroke: c.brown, fill: "none", strokeWidth: 2 }}>
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.07-1.07a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      <span style={{ fontSize: 12.5, color: c.brown, fontWeight: 500 }}>{r.telLabels[j]}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </Card>
        );
      })()}

      <div style={{ ...s.darkBox, textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "rgba(244,237,224,0.75)", lineHeight: 1.7, margin: 0 }}>
          💡 È sempre consigliato <strong style={{ color: c.sand }}>chiamare in anticipo</strong> per prenotare.<br />
          Da non perdere: <strong style={{ color: c.sand }}>malloreddus</strong>, <strong style={{ color: c.sand }}>porceddu</strong>, <strong style={{ color: c.sand }}>formaggi sardi</strong>.
        </p>
      </div>
    </div>
  </div>;
}

function Recensioni({ go }) {
  return <div style={s.app}>
    <PageHead title="Le vostre recensioni" back={() => go("home")} icon={<Ic.star />} />
    <div style={s.content}>
      <div style={s.hlBox}>
        <div style={s.hlTitle}>La vostra opinione conta</div>
        <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.92, margin: 0 }}>Speriamo che il soggiorno sia stato indimenticabile. Una recensione su Google ci aiuta a far conoscere la Baita Maore!</p>
      </div>
      <Card style={{ textAlign: "center", padding: "28px 18px" }}>
        <div style={{ fontSize: 40, marginBottom: 10 }}>⭐⭐⭐⭐⭐</div>
        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, marginBottom: 8 }}>Lascia una recensione su Google</p>
        <p style={{ fontSize: 13, color: c.muted, marginBottom: 20, lineHeight: 1.6 }}>Bastano 2 minuti e ci aiuti enormemente.<br />Grazie di cuore! 🙏</p>
        <a href="https://search.google.com/local/writereview?placeid=ChIJ_baita_maore" target="_blank" rel="noreferrer" style={s.mapBtn}><span>⭐</span> Scrivi una recensione</a>
      </Card>
      <Card>
        <CT text="Cosa ci ha colpito di più?" />
        <Rule t="Il calore e l'atmosfera unica della baita" />
        <Rule t="La SPA e i momenti di puro relax" />
        <Rule t="I sapori autentici della cucina sarda" />
        <Rule t="Le escursioni e la natura incontaminata" />
        <Rule t="La cura e disponibilità dello staff" last />
      </Card>
    </div>
  </div>;
}

function FAQ({ go }) {
  return <div style={s.app}>
    <PageHead title="Domande frequenti" back={() => go("home")} icon={<Ic.faq />} />
    <div style={s.content}>
      <Card>
        <CT text="🧖 Come prenoto la SPA?" />
        <p style={{ fontSize: 13.5, lineHeight: 1.7, color: c.muted, margin: 0 }}>Inviate una email a <strong>info@baitamaore.it</strong> indicando l'orario preferito (durata 1 ora). Slot disponibili: mattina 9:30 / 11:00 · sera 15:00 / 16:30 / 18:00 / 19:30 / 21:00.</p>
      </Card>
      <Card>
        <CT text="🍽️ Posso cenare in Baita ogni sera?" />
        <p style={{ fontSize: 13.5, lineHeight: 1.7, color: c.muted, margin: 0 }}>La cena dello chef (4 portate, € 40 a persona) è disponibile in serate speciali. I <strong>Taglieri Baita</strong> con prodotti locali sono invece disponibili a pranzo e cena. Contattateci per dettagli.</p>
      </Card>
      <Card>
        <CT text="🚗 Come raggiungo la Baita?" />
        <p style={{ fontSize: 13.5, lineHeight: 1.7, color: c.muted, margin: 0 }}>Usate Google Maps cercando <strong>Laconi - NU -</strong> come destinazione. Evitate di seguire la segnalazione diretta "Baita Maore" che può indicare una strada non accessibile.</p>
      </Card>
      <Card>
        <CT text="🚨 Emergenze" />
        <Row l="🚨 Emergenze generali" v="112" />
        <Row l="🚑 Ambulanza" v="118" />
        <Row l="🔥 Vigili del fuoco" v="115" last />
      </Card>
      <Card>
        <CT text="Serve altro aiuto?" />
        <p style={{ fontSize: 13.5, color: c.muted, marginBottom: 8, lineHeight: 1.65 }}>Siamo sempre a vostra disposizione!</p>
        <a href="tel:+393392156270" style={s.tel}><span style={{ fontSize: 13.5, color: c.dark }}>📱 Baita Maore</span><span style={{ fontFamily: "Georgia,serif", fontSize: 15, color: c.brown }}>339 215 6270</span></a>
        <a href="tel:+393474029363" style={s.tel}><span style={{ fontSize: 13.5, color: c.dark }}>📱 Baita Maore</span><span style={{ fontFamily: "Georgia,serif", fontSize: 15, color: c.brown }}>347 402 9363</span></a>
        <a href="mailto:info@baitamaore.it" style={s.telLast}><span style={{ fontSize: 13.5, color: c.dark }}>✉️ Email</span><span style={{ fontSize: 13, color: c.brown }}>info@baitamaore.it</span></a>
      </Card>
    </div>
  </div>;
}

function Social({ go }) {
  const socials = [
    {
      name: "Instagram",
      handle: "@baitamaore",
      desc: "Foto, storie e momenti della vita in Baita. Seguici per ispirarti!",
      url: "https://www.instagram.com/baitamaore",
      color: "#C13584",
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, fill: "white" }}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      handle: "Baita Maore Laconi",
      desc: "Aggiornamenti, eventi speciali e novità dalla Baita.",
      url: "https://www.facebook.com/baitamaore",
      color: "#1877F2",
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, fill: "white" }}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Sito ufficiale",
      handle: "www.baitamaore.it",
      desc: "Tutte le info, le suite, le esperienze e i contatti ufficiali.",
      url: "https://www.baitamaore.it",
      color: c.brown,
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, stroke: "white", fill: "none", strokeWidth: 1.5 }}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      handle: "+39 339 215 6270",
      desc: "Scrivici su WhatsApp per info, prenotazioni o richieste speciali.",
      url: "https://wa.me/393392156270",
      color: "#25D366",
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, fill: "white" }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
  ];

  return <div style={s.app}>
    <PageHead title="Seguici" sub="Resta in contatto con la Baita" back={() => go("home")} icon={<Ic.social />} />
    <div style={s.content}>

      <div style={s.hlBox}>
        <div style={s.hlTitle}>Connettiti con noi</div>
        <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.92, margin: 0 }}>
          Seguici sui social per vivere la Baita Maore ogni giorno — foto dei boschi, eventi speciali, nuove esperienze e tanto altro.
        </p>
      </div>

      {socials.map((s2) => (
        <a key={s2.name} href={s2.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "block", marginBottom: 12 }}>
          <div style={{
            background: c.white,
            borderRadius: 18,
            border: `1.5px solid ${c.sand}`,
            overflow: "hidden",
            display: "flex",
            alignItems: "stretch",
          }}>
            {/* Color sidebar with icon */}
            <div style={{
              width: 64, background: s2.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              {s2.icon}
            </div>
            {/* Text */}
            <div style={{ padding: "14px 16px", flex: 1 }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, color: c.dark, marginBottom: 2 }}>{s2.name}</div>
              <div style={{ fontSize: 12, color: s2.color, fontWeight: 600, marginBottom: 6, letterSpacing: "0.3px" }}>{s2.handle}</div>
              <div style={{ fontSize: 12.5, color: c.muted, lineHeight: 1.6 }}>{s2.desc}</div>
            </div>
            {/* Arrow */}
            <div style={{ display: "flex", alignItems: "center", paddingRight: 14 }}>
              <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: c.sand, fill: "none", strokeWidth: 2 }}>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </a>
      ))}

      {/* Feed preview hint */}
      <div style={{ ...s.darkBox, textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "rgba(244,237,224,0.7)", lineHeight: 1.8, margin: 0 }}>
          📸 Condividi il tuo soggiorno con<br />
          <strong style={{ color: c.sand }}>#BaitaMaore</strong> · <strong style={{ color: c.sand }}>#LaconiSardegna</strong><br />
          <span style={{ fontSize: 11, opacity: 0.6 }}>e potresti apparire sulla nostra pagina!</span>
        </p>
      </div>

    </div>
  </div>;
}


export default function BaitaMaore() {
  const [screen, setScreen] = useState("home");
  const go = (id) => { setScreen(id); window.scrollTo && window.scrollTo(0, 0); };
  const screens = {
    home: <PH go={go} />,
    benvenuto: <Benvenuto go={go} />,
    checkin: <Checkin go={go} />,
    suite: <Suite go={go} />,
    spa: <Spa go={go} />,
    piscina: <Piscina go={go} />,
    regole: <Regole go={go} />,
    posizione: <Posizione go={go} />,
    escursioni: <Escursioni go={go} />,
    mangiare: <Mangiare go={go} />,
    recensioni: <Recensioni go={go} />,
    social: <Social go={go} />,
    faq: <FAQ go={go} />,
  };
  return screens[screen] || <PH go={go} />;
}
