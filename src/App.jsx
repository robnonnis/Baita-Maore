import { useState, useEffect } from "react";

const FontLink = () => (
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Raleway:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
);

const c = {
  cream: "#f4ede0", sand: "#ddd0b8", brown: "#6b4226", brownL: "#9a6342",
  dark: "#1c1208", muted: "#7a6a55", white: "#faf6ef", forest: "#3d5c35",
};

const s = {
  app: { minHeight: "100vh", fontFamily: "'Raleway', sans-serif", fontWeight: 300, color: c.dark, background: c.cream, maxWidth: 480, margin: "0 auto" },
  hero: { background: c.dark, textAlign: "center", borderRadius: "0 0 32px 32px", position: "relative", overflow: "hidden" },
  heroImg: { width: "100%", height: 270, objectFit: "cover", display: "block", opacity: 0.6 },
  heroOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, rgba(28,18,8,0.15) 0%, rgba(28,18,8,0.92) 100%)" },
  heroContent: { position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 24px 36px" },
  heroTitle: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: 52, lineHeight: 1.05, color: c.cream, margin: 0, letterSpacing: 1 },
  eyebrow: { fontSize: 9, letterSpacing: "5px", textTransform: "uppercase", color: c.brownL, fontWeight: 600, marginBottom: 10 },
  sectionLabel: { fontSize: 9, letterSpacing: "4px", textTransform: "uppercase", color: c.muted, margin: "26px 0 16px", textAlign: "center" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, padding: "0 20px", maxWidth: 400, margin: "0 auto" },
  card: { background: c.white, borderRadius: 18, padding: "20px 6px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: 7, cursor: "pointer", border: `1px solid ${c.brown}18` },
  cardLabel: { fontSize: 8.5, letterSpacing: "1.5px", textTransform: "uppercase", textAlign: "center", fontWeight: 500, color: c.dark, lineHeight: 1.4 },
  pageHead: { background: c.dark, padding: "50px 24px 28px", borderRadius: "0 0 24px 24px" },
  pageTitle: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: 36, color: c.cream, lineHeight: 1.1, margin: 0 },
  back: { display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(244,237,224,0.25)", borderRadius: 20, color: "rgba(244,237,224,0.9)", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", cursor: "pointer", marginBottom: 18, padding: "7px 14px", fontFamily: "'Raleway', sans-serif", fontWeight: 500 },
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
  spaSlot: { background: c.cream, border: `1px solid ${c.sand}`, borderRadius: 8, padding: "6px 12px", fontSize: 12, color: c.brown, fontWeight: 500, marginRight: 6, marginBottom: 6, display: "inline-block" },
};

// ─── TRANSLATIONS ────────────────────────────────────────────────
const TR = {
  it: {
    langBtn: "🇬🇧 EN",
    home: "Home",
    exploreLabel: "Esplora la guida",
    heroSub: "Via Funtana e Maore, 08034 Laconi",
    heartTitle: "🏔️ Nel cuore della Sardegna",
    heartDesc: "Immersa tra i boschi di Laconi, la Baita Maore è un rifugio esclusivo dove natura, lusso e tradizione sarda si incontrano.",
    seasonLabel: "In qualsiasi stagione",
    winter: "Autunno\n& Inverno", winterSub: "Piscina coperta · Fuochi · SPA",
    summer: "Primavera\n& Estate", summerSub: "Piscina aperta · E-bike · Natura",
    openYear: "La Baita Maore è aperta tutto l'anno.", openYearSub: "Ogni stagione regala un'atmosfera unica tra i boschi di Laconi.",
    nav: ["Benvenuto","Check-in / out","Le Suite","SPA & Wellness","Piscina","Regole","Come arrivare","Escursioni","Dove mangiare","Recensioni","Social","FAQ"],
    // Benvenuto
    welcomeTitle: "Benvenuti in Baita",
    welcomeHL: "Siamo felici di ospitarvi",
    welcomeText: "Un'oasi di relax vi aspetta, immersa tra la natura. Gusti e sapori di una terra autentica, una storia millenaria tutta da scoprire.",
    checkinLabel: "Orari", checkinIn: "dalle 14:00", checkinOut: "entro le 11:00",
    contactsLabel: "📞 Contatti", webSocial: "🌐 Web & Social", website: "baitamaore.it ›", instagram: "@baitamaore ›",
    // Check-in
    checkinTitle: "Check-in / out",
    arrivalLabel: "🕒 Arrivo", arrivalR1: "Check-in disponibile dalle ore 14:00", arrivalR2: "Comunicateci in anticipo l'orario previsto di arrivo", arrivalR3: "Vi accoglieremo personalmente alla Baita",
    departLabel: "🚪 Partenza", departR1: "Check-out entro le ore 11:00",
    spaBookLabel: "🧖 Prenotazione SPA", spaBookText: "Comunicateci in anticipo tramite email l'orario preferito per accedere alla SPA (durata 1 ora):",
    morning: "Mattina", afternoon: "Pomeriggio / Sera", spaEmailBtn: "Invia email di prenotazione",
    addressLabel: "Indirizzo", mapsWarning: "⚠️ Usate Google Maps cercando Laconi - NU -. Evitate la segnalazione diretta «Baita Maore» che può indicare una strada non accessibile.",
    openMaps: "Apri in Google Maps",
    // Suite
    suiteTitle: "Le Suite", suiteSub: "Rifugi di legno e pietra",
    suiteOpenBtn: "Scopri", suiteCloseBtn: "Chiudi", suiteEmailBtn: "Richiedi informazioni",
    superiorDesc: "Le nostre Suite Superior vi accoglieranno in un ambiente ricco di energia e calore naturale. Ogni dettaglio è stato curato per offrire un'esperienza indimenticabile, dal profumo del legno al comfort.",
    superiorFeatures: ["Bagno privato con doccia a pioggia","Pavimenti in rovere","Veranda privata","Giardino privato","Eleganza e comfort naturale"],
    luxuryDesc: "Le Luxury Suite vi offrono un'oasi di privacy assoluta. La vostra SPA privata è un rifugio intimo, dove il tempo sembra fermarsi.",
    luxuryFeatures: ["45 m² di privacy totale","SPA privata ad uso esclusivo","Sauna, Jacuzzi e zona relax","Ogni comfort per il benessere","Atmosfera esclusiva e riservata"],
    suiteTags: ["Legno naturale","Doccia a pioggia","Veranda privata","SPA privata","Giardino"],
    // SPA
    spaTitle: "SPA & Wellness", spaSub: "300 mq · Il tempo si ferma",
    spaHL: "Un'oasi di benessere",
    spaHLText: "Dopo una giornata tra i boschi di Laconi, rigeneratevi nella nostra splendida SPA di 300 mq. Jacuzzi, sauna finlandese, doccia cromoterapica e zona relax vi aspettano.",
    spaAreaLabel: "🌊 Area comune SPA",
    spaAreaItems: ["Vasca Jacuzzi","Sauna finlandese","Doccia cromoterapica","Zona relax con dormense"],
    spaLuxLabel: "💎 Luxury Suite — SPA privata",
    spaLuxItems: ["SPA privata ad uso esclusivo (suite Pioppo e Cedro)","45 m² di riservatezza assoluta"],
    spaPriceLabel: "Listino prezzi", spaTapHint: "Tocca un trattamento per leggere la descrizione",
    massaggiLabel: "💆 Massaggi", trattLabel: "🧴 Trattamenti corpo", visoLabel: "🪷 Trattamenti viso",
    spaBookTitle: "Prenota il tuo trattamento", spaBookSubtext: "Comunicateci in anticipo l'orario preferito per accedere alla SPA.",
    spaEmailBook: "Prenota via email",
    massaggi: [
      { emoji: "🌿", name: "Relax", price: "€ 55,00", duration: "50 min", desc: "Un trattamento per ritrovare il rilassamento mentale, grazie alle essenze pregiate di bergamotto, limone, gelsomino, gardenia, menta e cedro." },
      { emoji: "💪", name: "Decontratturante", price: "€ 55,00", duration: "50 min", desc: null },
      { emoji: "💧", name: "Linfodrenante", price: "€ 60,00", duration: "60 min", desc: null },
      { emoji: "✨", name: "Modellante", price: "€ 60,00", duration: "50 min", desc: null },
    ],
    trattamenti: [
      { emoji: "🪮", name: "Spazzolatura del corpo", price: "€ 50,00", duration: "50 min", desc: "Con l'ausilio di spazzole si strofina sulla pelle nuda asciutta, partendo dalle estremità verso il cuore. Tonifica i tessuti, ridona colore e lucentezza alla pelle." },
      { emoji: "🦵", name: "Gambe leggere", price: "€ 55,00", duration: "45 min", desc: "Avvolgimento con fango e gel freddo tri-attivo con escina, arnica, menta piperita, meliloto e mentolo — sollievo per gambe e caviglie stanche." },
    ],
    viso: [
      { emoji: "🧖", name: "Pulizia viso base", price: "€ 50,00", duration: "50 min", desc: null },
      { emoji: "🌱", name: "Trattamento Detox", price: "€ 55,00", duration: "60 min", desc: null },
      { emoji: "⏳", name: "Antiage / Antimacchia", price: "€ 60,00", duration: "75 min", desc: null },
      { emoji: "✨", name: "Trattamento occhi", price: "€ 55,00", duration: "30 min", desc: "A base di oro puro colloidale, peptidi e cellule staminali vegetali — per borse palpebrali, rughe ed occhiaie scure." },
    ],
    // Piscina
    piscinaTitle: "Piscina", piscinaSub: "Aperta tutto l'anno",
    piscinaHL: "In qualsiasi stagione", piscinaHLText: "La piscina è a vostra completa disposizione per tutta la durata del soggiorno.",
    estateLabel: "☀️ Estate", estateItems: ["Piscina esterna scoperta","Comodi lettini e divanetti","Relax sotto il sole tra i boschi sardi"],
    invernoLabel: "❄️ Autunno / Inverno", invernoItems: ["Struttura retrattile — piscina coperta","Acqua riscaldata a 30–32 °C","Rifugio caldo immerso nel paesaggio autunnale dei boschi di Laconi"],
    // Regole
    regoleTitle: "Regole della Baita",
    regGen: "📋 Generali", regGenItems: ["Check-in dalle 14:00 — Check-out entro le 11:00","Comunicateci l'orario di arrivo previsto","Rispettare il numero massimo di ospiti"],
    regRisp: "🤫 Rispetto & Convivenza", regRispItems: ["Rispettare gli spazi comuni con cura","Silenzio nelle ore notturne","Segnalare eventuali danni prima del check-out"],
    regSic: "🔒 Sicurezza", regSicItems: ["Chiudere sempre a chiave all'uscita","Emergenze: 112"],
    // Posizione
    posizioneTitle: "Come arrivare",
    distLabel: "🚗 Distanze principali",
    distItems: [["✈️ Aeroporto Cagliari (CAG)","~1h 15min"],["✈️ Aeroporto Olbia (OLB)","~2h 30min"],["🏙️ Cagliari centro","~1h 10min"],["🏙️ Nuoro","~1h"]],
    // Escursioni
    escursioniTitle: "Escursioni", escursioniSub: "Crea ogni giorno una nuova avventura",
    activitiesLabel: "Attività con la Baita", activitiesTap: "Prenotate le vostre esperienze su misura — tocca per scoprire di più",
    bookActivity: "Prenota questa attività", openMap: "Apri mappa",
    activities: [
      { emoji: "🚲", title: "E-bike", subtitle: "Tra i boschi e la foresta", detail: "Pedala tra i boschi di Laconi e raggiungi la Foresta di Funtamela e Bau Onu (23 km andata e ritorno). Un'esperienza immersa nella natura selvaggia della Sardegna.", photos: ["https://res.cloudinary.com/dovpg47yh/image/upload/v1774646568/ebikes__mscuyn.jpg"] },
      { emoji: "🚗", title: "Fiat 500 d'epoca", subtitle: "Cabrio rossa degli anni '50", detail: "Riviví gli anni '50 a bordo della nostra Fiat 500 rossa cabrio d'epoca. Un'esperienza unica per scoprire i borghi sardi.", photos: ["https://res.cloudinary.com/dovpg47yh/image/upload/v1775488680/PHOTO-2026-03-29-20-52-14_y17n81.jpg"] },
      { emoji: "🏍️", title: "Quad", subtitle: "Percorsi nascosti tra ruscelli e cascate", detail: "Esplora percorsi nascosti tra ruscelli, cascate e boschi incontaminati.", photos: [] },
      { emoji: "🚌", title: "Bus Vintage «Maoretto»", subtitle: "Picnic panoramico nel bosco", detail: "Uscita con il bus vintage Maoretto per un picnic in un punto panoramico o nel bosco.", price: "Set picnic € 75 a coppia", photos: ["https://res.cloudinary.com/dovpg47yh/image/upload/v1775488681/PHOTO-2026-03-29-20-52-16_12_jadhd9.jpg"], photoPosition: "center center" },
      { emoji: "🧺", title: "Aperitivo nel bosco", subtitle: "O in punto panoramico", detail: "Un aperitivo al tramonto nel bosco o in uno dei punti panoramici più suggestivi di Laconi.", photos: ["https://res.cloudinary.com/dovpg47yh/image/upload/v1774646471/IMG_9037_bh16nc.jpg"], photoPosition: "center center" },
    ],
    fromBaitaLabel: "🥾 A piedi dalla Baita",
    fromBaita: [
      { name: "🌳 Parco Aymerich & Cascata Maggiore", desc: "~40 min a piedi. Destra all'uscita, prima sinistra, sentiero nel bosco.", url: "https://maps.google.com/?q=Parco+Aymerich+Laconi" },
      { name: "🌊 Il Mulinu & Grotta", desc: "Destra, ~100m, poi sinistra, rotaie, curva destra. Strada in discesa verso la cascatella.", url: "https://maps.google.com/?q=Il+Mulinu+Laconi+cascata" },
      { name: "🏔️ Punta Carradore", desc: "Sinistra, cancello a destra, attraversare la pineta. Punto più alto di Laconi.", url: "https://maps.google.com/?q=Punta+Carradore+Laconi" },
      { name: "🌲 Foresta Funtamela & Bau Onu", desc: "In e-bike. Percorso totale 23 km.", url: "https://maps.google.com/?q=Foresta+Funtamela+Laconi" },
      { name: "🌲 Foresta di Is Arinos", desc: "Escursione naturalistica tra gli alberi storici.", url: "https://maps.google.com/?q=Foresta+Is+Arinos+Laconi" },
    ],
    nearbyLabel: "🗺️ Nei dintorni",
    nearby: [
      { name: "💧 Sa Stiddiosa", desc: "Piscine naturali del Flumendosa (20–30 min).", contact: "ecomuseo-flumendosa@gmail.com · +39 328 497 9486", url: "https://www.ecomuseoflumendosa.it" },
      { name: "🏛️ Museo Menhir di Laconi", desc: "Unico in Sardegna. Statue preistoriche dei menhir.", url: "https://www.museomenhir.it" },
      { name: "🚂 Trenino Verde", desc: "Borghi, paesaggi naturali, profumi e sapori della Sardegna autentica.", url: "https://www.treninoverdesardegna.it" },
      { name: "🏞️ Lago San Sebastiano (Isili)", desc: "Pesca sportiva, canoa, arrampicata, escursioni.", url: "https://maps.google.com/?q=Lago+San+Sebastiano+Isili" },
    ],
    tartufoTitle: "Tartufo di Laconi", tartufoSub: "Un tesoro nascosto tra i boschi",
    tartufoText: "I boschi attorno a Laconi nascondono uno dei segreti gastronomici più rari della Sardegna: il tartufo nero, raccolto nei mesi autunnali tra querce e lecci secolari.",
    culturaLabel: "🏛️ Cultura & Tradizione",
    cultura: [
      { name: "🏛️ Palazzo Aymerich", sub: "Laconi", url: "https://www.comune.laconi.or.it" },
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
    ],
    avventuraLabel: "🌊 Avventura — ~1 ora",
    avventura: [
      { name: "⛏️ Miniera di Piscinas", sub: "Sottosuolo storico — ~1 ora dalla Baita", url: "https://maps.google.com/?q=Miniera+Piscinas+Sardegna" },
      { name: "🏜️ Dune di Piscinas", sub: "Le dune più alte d'Europa", url: "https://maps.google.com/?q=Dune+Piscinas+Sardegna" },
    ],
    guidesLabel: "Guide escursionistiche consigliate",
    // Mangiare
    mangiareTitle: "Dove mangiare",
    chefTitle: "🍽️ Cena in Baita — Chef Night",
    chefText: "In alcune serate speciali il nostro chef vi sorprenderà con un menù fisso di 4 portate, creato per esaltare i sapori del territorio sardo.",
    chefPriceSub: "a persona · acqua inclusa", chefTimeSub: "orario di servizio",
    chefBtn: "Prenota la cena",
    colLabel: "🌅 Colazione & Taglieri",
    colItems: ["Colazione ricca e nutriente ogni mattina","Taglieri Baita — prelibatezze locali selezionate con cura, disponibili a pranzo e cena"],
    ristoLabel: "🏠 Ristoranti a Laconi e dintorni",
    callFirst: "💡 È sempre consigliato chiamare in anticipo per prenotare.",
    mustTaste: "Da non perdere: malloreddus, porceddu, formaggi sardi.",
    // Recensioni
    recensioniTitle: "Le vostre recensioni",
    recensioniHL: "La vostra opinione conta",
    recensioniText: "Speriamo che il soggiorno sia stato indimenticabile. Una recensione su Google ci aiuta a far conoscere la Baita Maore!",
    starsLabel: "Lascia una recensione su Google", starsThanks: "Bastano 2 minuti e ci aiuti enormemente.\nGrazie di cuore! 🙏",
    starsBtn: "⭐ Scrivi una recensione",
    starsItems: ["Il calore e l'atmosfera unica della baita","La SPA e i momenti di puro relax","I sapori autentici della cucina sarda","Le escursioni e la natura incontaminata","La cura e disponibilità dello staff"],
    // Social
    socialTitle: "Seguici", socialSub: "Resta in contatto con la Baita",
    socialHL: "Connettiti con noi",
    socialText: "Seguici sui social per vivere la Baita Maore ogni giorno — foto dei boschi, eventi speciali, nuove esperienze e tanto altro.",
    hashtagBox: "📸 Condividi il tuo soggiorno con\n#BaitaMaore · #LaconiSardegna\ne potresti apparire sulla nostra pagina!",
    socialItems: [
      { name: "Instagram", handle: "@baitamaore", desc: "Foto, storie e momenti della vita in Baita.", url: "https://www.instagram.com/baitamaore", color: "#C13584" },
      { name: "Facebook", handle: "Baita Maore Laconi", desc: "Aggiornamenti, eventi speciali e novità dalla Baita.", url: "https://www.facebook.com/baitamaore", color: "#1877F2" },
      { name: "Sito ufficiale", handle: "www.baitamaore.it", desc: "Tutte le info, le suite, le esperienze e i contatti.", url: "https://www.baitamaore.it", color: "#6b4226" },
      { name: "WhatsApp", handle: "+39 339 215 6270", desc: "Scrivici per info, prenotazioni o richieste speciali.", url: "https://wa.me/393392156270", color: "#25D366" },
    ],
    // FAQ
    faqTitle: "Domande frequenti",
    faqItems: [
      { q: "🧖 Come prenoto la SPA?", a: "Inviate una email a info@baitamaore.it indicando l'orario preferito (durata 1 ora). Slot: mattina 9:30 / 11:00 · sera 15:00 / 16:30 / 18:00 / 19:30 / 21:30 (dopo cena)." },
      { q: "🍽️ Posso cenare in Baita ogni sera?", a: "La cena dello chef (4 portate, € 40 a persona) è disponibile in serate speciali. I Taglieri Baita sono disponibili a pranzo e cena." },
      { q: "🚗 Come raggiungo la Baita?", a: "Usate Google Maps cercando Laconi - NU -. Evitate la segnalazione diretta «Baita Maore» che può indicare una strada non accessibile." },
    ],
    faqEmergLabel: "🚨 Emergenze",
    faqHelp: "Serve altro aiuto?", faqHelpText: "Siamo sempre a vostra disposizione!",
  },
  en: {
    langBtn: "🇮🇹 IT",
    home: "Home",
    exploreLabel: "Explore the guide",
    heroSub: "Via Funtana e Maore, 08034 Laconi",
    heartTitle: "🏔️ In the heart of Sardinia",
    heartDesc: "Nestled in the woods of Laconi, Baita Maore is an exclusive retreat where nature, luxury and Sardinian tradition come together.",
    seasonLabel: "In every season",
    winter: "Autumn\n& Winter", winterSub: "Covered pool · Fireplaces · SPA",
    summer: "Spring\n& Summer", summerSub: "Open pool · E-bike · Nature",
    openYear: "Baita Maore is open all year round.", openYearSub: "Every season offers a unique atmosphere in the woods of Laconi.",
    nav: ["Welcome","Check-in / out","The Suites","SPA & Wellness","Pool","House Rules","How to arrive","Excursions","Where to eat","Reviews","Social","FAQ"],
    welcomeTitle: "Welcome to Baita Maore",
    welcomeHL: "We are happy to have you",
    welcomeText: "A relaxing oasis awaits you, immersed in nature. Authentic flavours and a thousand-year-old history waiting to be discovered.",
    checkinLabel: "Hours", checkinIn: "from 14:00", checkinOut: "by 11:00",
    contactsLabel: "📞 Contacts", webSocial: "🌐 Web & Social", website: "baitamaore.it ›", instagram: "@baitamaore ›",
    checkinTitle: "Check-in / out",
    arrivalLabel: "🕒 Arrival", arrivalR1: "Check-in available from 2:00 PM", arrivalR2: "Please let us know your estimated arrival time", arrivalR3: "We will personally welcome you at the Baita",
    departLabel: "🚪 Departure", departR1: "Check-out by 11:00 AM",
    spaBookLabel: "🧖 SPA Booking", spaBookText: "Please let us know in advance your preferred time to access the SPA (1 hour session):",
    morning: "Morning", afternoon: "Afternoon / Evening", spaEmailBtn: "Send booking email",
    addressLabel: "Address", mapsWarning: "⚠️ Use Google Maps searching for Laconi - NU -. Avoid the direct «Baita Maore» navigation which may indicate an inaccessible road.",
    openMaps: "Open in Google Maps",
    suiteTitle: "The Suites", suiteSub: "Wood and stone retreats",
    suiteOpenBtn: "Discover", suiteCloseBtn: "Close", suiteEmailBtn: "Request information",
    superiorDesc: "Our Superior Suites will welcome you in an environment rich in natural warmth and energy. Every detail has been carefully crafted for an unforgettable experience.",
    superiorFeatures: ["Private bathroom with rain shower","Oak floors","Private veranda","Private garden","Elegance and natural comfort"],
    luxuryDesc: "The Luxury Suites offer an oasis of absolute privacy. Your private SPA is an intimate retreat where time seems to stand still.",
    luxuryFeatures: ["45 m² of total privacy","Private SPA for exclusive use","Sauna, Jacuzzi and relaxation area","Every comfort for your well-being","Exclusive and private atmosphere"],
    suiteTags: ["Natural wood","Rain shower","Private veranda","Private SPA","Garden"],
    spaTitle: "SPA & Wellness", spaSub: "300 sqm · Time stands still",
    spaHL: "A wellness oasis",
    spaHLText: "After a day among the woods of Laconi, rejuvenate in our stunning 300 sqm SPA. Jacuzzi, Finnish sauna, chromotherapy shower and relaxation area await you.",
    spaAreaLabel: "🌊 SPA common area",
    spaAreaItems: ["Jacuzzi","Finnish sauna","Chromotherapy shower","Relaxation area with daybeds"],
    spaLuxLabel: "💎 Luxury Suite — Private SPA",
    spaLuxItems: ["Private SPA for exclusive use (Pioppo and Cedro suites)","45 sqm of absolute privacy"],
    spaPriceLabel: "Price list", spaTapHint: "Tap a treatment to read the description",
    massaggiLabel: "💆 Massages", trattLabel: "🧴 Body treatments", visoLabel: "🪷 Face treatments",
    spaBookTitle: "Book your treatment", spaBookSubtext: "Let us know in advance your preferred time to access the SPA.",
    spaEmailBook: "Book via email",
    massaggi: [
      { emoji: "🌿", name: "Relaxing", price: "€ 55.00", duration: "50 min", desc: "A treatment to restore mental relaxation, with precious bergamot, lemon, jasmine, gardenia, mint and cedar essences." },
      { emoji: "💪", name: "Deep tissue", price: "€ 55.00", duration: "50 min", desc: null },
      { emoji: "💧", name: "Lymphatic drainage", price: "€ 60.00", duration: "60 min", desc: null },
      { emoji: "✨", name: "Sculpting", price: "€ 60.00", duration: "50 min", desc: null },
    ],
    trattamenti: [
      { emoji: "🪮", name: "Body brushing", price: "€ 50.00", duration: "50 min", desc: "Using brushes on dry skin, from extremities towards the heart. Tones tissues, restores colour and radiance, relaxes muscle tension and stimulates circulation." },
      { emoji: "🦵", name: "Light legs", price: "€ 55.00", duration: "45 min", desc: "Wrap with tri-active cooling mud and gel with escin, arnica, peppermint, melilot and menthol — relief for tired, heavy legs." },
    ],
    viso: [
      { emoji: "🧖", name: "Basic facial cleanse", price: "€ 50.00", duration: "50 min", desc: null },
      { emoji: "🌱", name: "Detox treatment", price: "€ 55.00", duration: "60 min", desc: null },
      { emoji: "⏳", name: "Anti-age / Anti-spot", price: "€ 60.00", duration: "75 min", desc: null },
      { emoji: "✨", name: "Eye treatment", price: "€ 55.00", duration: "30 min", desc: "Based on pure colloidal gold, peptides and plant stem cells — to effectively combat under-eye bags, wrinkles and dark circles." },
    ],
    piscinaTitle: "Pool", piscinaSub: "Open all year round",
    piscinaHL: "In every season", piscinaHLText: "The pool is at your complete disposal for the entire duration of your stay.",
    estateLabel: "☀️ Summer", estateItems: ["Outdoor open-air pool","Sun loungers and sofas","Relax in the sun among the Sardinian woods"],
    invernoLabel: "❄️ Autumn / Winter", invernoItems: ["Retractable cover — indoor pool","Heated water at 30–32 °C","Warm retreat surrounded by the autumn woods of Laconi"],
    regoleTitle: "House Rules",
    regGen: "📋 General", regGenItems: ["Check-in from 14:00 — Check-out by 11:00","Please let us know your estimated arrival time","Respect the maximum number of guests"],
    regRisp: "🤫 Respect & Coexistence", regRispItems: ["Take care of common areas","Silence during night hours","Report any damage before check-out"],
    regSic: "🔒 Safety", regSicItems: ["Always lock the door when leaving","Emergencies: 112"],
    posizioneTitle: "How to arrive",
    distLabel: "🚗 Main distances",
    distItems: [["✈️ Cagliari Airport (CAG)","~1h 15min"],["✈️ Olbia Airport (OLB)","~2h 30min"],["🏙️ Cagliari city centre","~1h 10min"],["🏙️ Nuoro","~1h"]],
    escursioniTitle: "Excursions", escursioniSub: "Create a new adventure every day",
    activitiesLabel: "Activities with Baita Maore", activitiesTap: "Book your tailor-made experience — tap to discover more",
    bookActivity: "Book this activity", openMap: "Open map",
    activities: [
      { emoji: "🚲", title: "E-bike", subtitle: "Through the woods and forest", detail: "Cycle through the woods of Laconi and reach Funtamela & Bau Onu Forest (23 km round trip). An immersive experience in wild Sardinian nature.", photos: ["https://res.cloudinary.com/dovpg47yh/image/upload/v1774646568/ebikes__mscuyn.jpg"] },
      { emoji: "🚗", title: "Vintage Fiat 500", subtitle: "Red convertible from the 1950s", detail: "Relive the 1950s aboard our red vintage Fiat 500 convertible. A unique way to discover Sardinian villages.", photos: ["https://res.cloudinary.com/dovpg47yh/image/upload/v1775488680/PHOTO-2026-03-29-20-52-14_y17n81.jpg"] },
      { emoji: "🏍️", title: "Quad bike", subtitle: "Hidden trails through streams and waterfalls", detail: "Explore hidden trails with quad bikes, through streams, waterfalls and untouched woodland.", photos: [] },
      { emoji: "🚌", title: "Vintage Bus «Maoretto»", subtitle: "Panoramic picnic in the woods", detail: "A trip aboard our vintage Maoretto bus to a scenic viewpoint or secret forest clearing for a picnic.", price: "Picnic set € 75 per couple", photos: ["https://res.cloudinary.com/dovpg47yh/image/upload/v1775488681/PHOTO-2026-03-29-20-52-16_12_jadhd9.jpg"], photoPosition: "center center" },
      { emoji: "🧺", title: "Aperitif in the woods", subtitle: "Or at a panoramic viewpoint", detail: "A sunset aperitif in the woods or at one of Laconi's most breathtaking viewpoints. A romantic and authentic experience.", photos: ["https://res.cloudinary.com/dovpg47yh/image/upload/v1774646471/IMG_9037_bh16nc.jpg"], photoPosition: "center center" },
    ],
    fromBaitaLabel: "🥾 On foot from Baita",
    fromBaita: [
      { name: "🌳 Aymerich Park & Waterfall", desc: "~40 min walk. Turn right at exit, first left, forest trail → Park, castle, waterfall.", url: "https://maps.google.com/?q=Parco+Aymerich+Laconi" },
      { name: "🌊 Il Mulinu & Cave", desc: "Right at exit, ~100m, then left, railway tracks, right curve. Downhill road to the waterfall and cave.", url: "https://maps.google.com/?q=Il+Mulinu+Laconi+cascata" },
      { name: "🏔️ Punta Carradore", desc: "Left at exit, right gate, cross the pine forest. Highest point of Laconi with St. Ignatius statue.", url: "https://maps.google.com/?q=Punta+Carradore+Laconi" },
      { name: "🌲 Funtamela & Bau Onu Forest", desc: "By e-bike. Total 23 km round trip.", url: "https://maps.google.com/?q=Foresta+Funtamela+Laconi" },
      { name: "🌲 Is Arinos Forest", desc: "Nature excursion among the ancient trees of Laconi.", url: "https://maps.google.com/?q=Foresta+Is+Arinos+Laconi" },
    ],
    nearbyLabel: "🗺️ Nearby",
    nearby: [
      { name: "💧 Sa Stiddiosa", desc: "Natural pools of the Flumendosa river (20–30 min).", contact: "ecomuseo-flumendosa@gmail.com · +39 328 497 9486", url: "https://www.ecomuseoflumendosa.it" },
      { name: "🏛️ Menhir Museum of Laconi", desc: "Unique in Sardinia. Prehistoric menhir statues.", url: "https://www.museomenhir.it" },
      { name: "🚂 Trenino Verde", desc: "A unique way to discover authentic Sardinia: villages, natural landscapes, flavours.", url: "https://www.treninoverdesardegna.it" },
      { name: "🏞️ Lake San Sebastiano (Isili)", desc: "Sport fishing, kayak, climbing, hiking. The Trenino Verde runs along the lake.", url: "https://maps.google.com/?q=Lago+San+Sebastiano+Isili" },
    ],
    tartufoTitle: "Laconi Truffle", tartufoSub: "A hidden treasure in the woods",
    tartufoText: "The woods around Laconi hide one of Sardinia's rarest gastronomic secrets: black truffle, harvested in autumn among centuries-old oaks.",
    culturaLabel: "🏛️ Culture & Tradition",
    cultura: [
      { name: "🏛️ Palazzo Aymerich", sub: "Laconi", url: "https://www.comune.laconi.or.it" },
      { name: "⛪ St. Ignatius Birthplace", sub: "Laconi", url: "https://maps.google.com/?q=Casa+Natale+Sant+Ignazio+Laconi" },
      { name: "🕌 Borgo Santa Sofia", sub: "Ancient Byzantine Church", url: "https://maps.google.com/?q=Borgo+Santa+Sofia+Laconi" },
      { name: "🍷 Cantina Genna Manna", sub: "Guided tour and tasting", tel: "+393331849430", url: "https://maps.google.com/?q=Cantina+Genna+Manna+Laconi" },
      { name: "🪨 Domus de Janas", sub: "Fairy Houses — neolithic tombs", url: "https://maps.google.com/?q=Domus+de+Janas+Sardegna" },
      { name: "⚰️ Tomba di Aiodda", sub: "Isili", url: "https://maps.google.com/?q=Tomba+Aiodda+Isili" },
      { name: "🍷 Cantina La Dolce Vigna", sub: "Atzara", tel: "+393288148897", url: "https://maps.google.com/?q=La+Dolce+Vigna+Atzara" },
      { name: "🎨 La Robbia ad Atzara", sub: "Natural Dyes and Applied Arts", url: "https://maps.google.com/?q=La+Robbia+Atzara" },
      { name: "🍄 Ethnographic Museum of Mandas", sub: "L'Isola dei Sapori — Sardinian truffle", tel: "+393515268835", url: "https://maps.google.com/?q=Museo+Etnografico+Mandas" },
      { name: "🦇 Is Janas Cave", sub: "Prehistoric cave", url: "https://maps.google.com/?q=Grotta+Is+Janas+Sardegna" },
      { name: "🌿 Lugas Liqueur Lab", sub: "Laconi", url: "https://maps.google.com/?q=Liquori+Lugas+Laconi" },
      { name: "🗿 Su Stampu de su Turrunu", sub: "Nuragic site", url: "https://maps.google.com/?q=Su+Stampu+de+su+Turrunu+Sardegna" },
      { name: "🎨 Museum of Sacred Art", sub: "Mandas", url: "https://maps.google.com/?q=Museo+Arte+Sacra+Mandas" },
    ],
    avventuraLabel: "🌊 Adventure — ~1 hour",
    avventura: [
      { name: "⛏️ Piscinas Mine", sub: "Historic underground — ~1 hour from Baita", url: "https://maps.google.com/?q=Miniera+Piscinas+Sardegna" },
      { name: "🏜️ Piscinas Dunes", sub: "Europe's highest dunes", url: "https://maps.google.com/?q=Dune+Piscinas+Sardegna" },
    ],
    guidesLabel: "Recommended hiking guides",
    mangiareTitle: "Where to eat",
    chefTitle: "🍽️ Dinner at Baita — Chef Night",
    chefText: "On special evenings our chef will surprise you with a fixed 4-course menu, crafted to highlight the flavours of Sardinian territory.",
    chefPriceSub: "per person · water included", chefTimeSub: "service time",
    chefBtn: "Book dinner",
    colLabel: "🌅 Breakfast & Platters",
    colItems: ["Rich and nutritious breakfast every morning","Baita Platters — locally selected delicacies, available at lunch and dinner"],
    ristoLabel: "🏠 Restaurants in Laconi and surroundings",
    callFirst: "💡 Always recommended to call ahead to book.",
    mustTaste: "Must try: malloreddus, porceddu, Sardinian cheeses.",
    recensioniTitle: "Your reviews",
    recensioniHL: "Your opinion matters",
    recensioniText: "We hope your stay was unforgettable. A Google review helps spread the word about Baita Maore!",
    starsLabel: "Leave a review on Google", starsThanks: "It only takes 2 minutes and helps us enormously.\nThank you so much! 🙏",
    starsBtn: "⭐ Write a review",
    starsItems: ["The warmth and unique atmosphere","The SPA and moments of pure relaxation","The authentic flavours of Sardinian cuisine","The excursions and untouched nature","The care and availability of the staff"],
    socialTitle: "Follow us", socialSub: "Stay connected with Baita Maore",
    socialHL: "Connect with us",
    socialText: "Follow us on social media to experience Baita Maore every day — forest photos, special events, new experiences and much more.",
    hashtagBox: "📸 Share your stay with\n#BaitaMaore · #LaconiSardinia\nand you might appear on our page!",
    socialItems: [
      { name: "Instagram", handle: "@baitamaore", desc: "Photos, stories and moments from the Baita.", url: "https://www.instagram.com/baitamaore", color: "#C13584" },
      { name: "Facebook", handle: "Baita Maore Laconi", desc: "Updates, special events and news from the Baita.", url: "https://www.facebook.com/baitamaore", color: "#1877F2" },
      { name: "Official website", handle: "www.baitamaore.it", desc: "All info, suites, experiences and official contacts.", url: "https://www.baitamaore.it", color: "#6b4226" },
      { name: "WhatsApp", handle: "+39 339 215 6270", desc: "Message us for info, bookings or special requests.", url: "https://wa.me/393392156270", color: "#25D366" },
    ],
    faqTitle: "FAQ",
    faqItems: [
      { q: "🧖 How do I book the SPA?", a: "Send an email to info@baitamaore.it with your preferred time (1 hour session). Slots: morning 9:30 / 11:00 · evening 15:00 / 16:30 / 18:00 / 19:30 / 21:30 (after dinner)." },
      { q: "🍽️ Can I have dinner at Baita every evening?", a: "The chef dinner (4 courses, € 40 per person) is available on special evenings. Baita Platters are available at lunch and dinner." },
      { q: "🚗 How do I reach the Baita?", a: "Use Google Maps searching for Laconi - NU -. Avoid the direct «Baita Maore» navigation which may indicate an inaccessible road." },
    ],
    faqEmergLabel: "🚨 Emergencies",
    faqHelp: "Need more help?", faqHelpText: "We are always at your disposal!",
  }
};

// ─── ICONS ───────────────────────────────────────────────────────
const Ic = {
  back: () => <svg viewBox="0 0 24 24" style={{width:16,height:16,stroke:"currentColor",fill:"none",strokeWidth:1.5}}><polyline points="15 18 9 12 15 6"/></svg>,
  home: () => <svg viewBox="0 0 24 24" style={{width:26,height:26,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>,
  lock: () => <svg viewBox="0 0 24 24" style={{width:26,height:26,stroke:c.dark,fill:"none",strokeWidth:1.3}}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
  spa: () => <svg viewBox="0 0 24 24" style={{width:26,height:26,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 6v6l4 2"/></svg>,
  pin: () => <svg viewBox="0 0 24 24" style={{width:26,height:26,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  hike: () => <svg viewBox="0 0 24 24" style={{width:26,height:26,stroke:c.dark,fill:"none",strokeWidth:1.3}}><circle cx="12" cy="4" r="2"/><path d="M10 8l-3 8 3-1 2 5 2-5 3 1-3-8"/><path d="M8 16l-2 5M16 16l2 5"/></svg>,
  fork: () => <svg viewBox="0 0 24 24" style={{width:26,height:26,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  building: () => <svg viewBox="0 0 24 24" style={{width:26,height:26,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M2 4v16M2 8h18a2 2 0 012 2v10M2 14h20M7 14v2M2 8V4"/><rect x="5" y="9" width="6" height="4" rx="1"/></svg>,
  check: () => <svg viewBox="0 0 24 24" style={{width:26,height:26,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
  star: () => <svg viewBox="0 0 24 24" style={{width:26,height:26,stroke:c.dark,fill:"none",strokeWidth:1.3}}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  faq: () => <svg viewBox="0 0 24 24" style={{width:26,height:26,stroke:c.dark,fill:"none",strokeWidth:1.3}}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round"/></svg>,
  social: () => <svg viewBox="0 0 24 24" style={{width:26,height:26,fill:"none",stroke:c.dark,strokeWidth:1.3}}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"/></svg>,
  pool: () => <svg viewBox="0 0 24 24" style={{width:26,height:26,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M2 12h20M2 17c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0M7 12V7l5-3 5 3v5"/></svg>,
  mapW: () => <svg viewBox="0 0 24 24" style={{width:18,height:18,stroke:"white",fill:"none",strokeWidth:1.5}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  mailW: () => <svg viewBox="0 0 24 24" style={{width:18,height:18,stroke:"white",fill:"none",strokeWidth:1.5}}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  igW: () => <svg viewBox="0 0 24 24" style={{width:28,height:28,fill:"white"}}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  fbW: () => <svg viewBox="0 0 24 24" style={{width:28,height:28,fill:"white"}}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  webW: () => <svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:"white",fill:"none",strokeWidth:1.5}}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  waW: () => <svg viewBox="0 0 24 24" style={{width:28,height:28,fill:"white"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
};

const socialIconMap = { Instagram: <Ic.igW/>, Facebook: <Ic.fbW/>, "Sito ufficiale": <Ic.webW/>, "Official website": <Ic.webW/>, WhatsApp: <Ic.waW/> };

// ─── SHARED COMPONENTS ───────────────────────────────────────────
function LangToggle({ lang, setLang }) {
  const t = TR[lang];
  return (
    <button onClick={() => setLang(lang === "it" ? "en" : "it")}
      style={{ position:"fixed", top:14, right:14, zIndex:999, background:c.white, border:`1.5px solid ${c.sand}`, borderRadius:20, padding:"6px 14px", fontSize:13, fontFamily:"'Raleway',sans-serif", cursor:"pointer", fontWeight:500, boxShadow:"0 2px 8px rgba(0,0,0,0.12)" }}>
      {t.langBtn}
    </button>
  );
}
function Row({l,v,link,last}) {
  const st = last ? s.rowLast : s.row;
  if (link) return <a href={link} target="_blank" rel="noreferrer" style={{...st,textDecoration:"none"}}><span style={s.rowLabel}>{l}</span><span style={{...s.rowValue}}>{v} ›</span></a>;
  return <div style={st}><span style={s.rowLabel}>{l}</span><span style={s.rowValue}>{v}</span></div>;
}
function Rule({t,last}) { return <div style={last?s.ruleLast:s.rule}><div style={s.dot}/><span>{t}</span></div>; }
function Card({children,style}) { return <div style={{...s.infoCard,...style}}>{children}</div>; }
function CT({icon,text}) { return <div style={s.cardTitle}>{icon&&<span style={{flexShrink:0}}>{icon}</span>}{text}</div>; }
function PageHead({title,sub,back,icon}) {
  return (<><FontLink/><div style={s.pageHead}><button style={s.back} onClick={back}><Ic.back/> Home</button><div style={{marginBottom:8}}>{icon}</div><h2 style={s.pageTitle}>{title}</h2>{sub&&<div style={{fontSize:11,color:"rgba(244,237,224,0.5)",marginTop:6,letterSpacing:"1px"}}>{sub}</div>}</div></>);
}
function Arrow() { return <svg viewBox="0 0 24 24" style={{width:14,height:14,stroke:c.brown,fill:"none",strokeWidth:2,flexShrink:0}}><polyline points="9 18 15 12 9 6"/></svg>; }

// ─── ACTIVITY CARD ───────────────────────────────────────────────
function ActivityCard({emoji,title,subtitle,detail,price,photos,photoPosition,t}) {
  const [open,setOpen] = useState(false);
  return (
    <div onClick={()=>setOpen(o=>!o)} style={{background:c.white,borderRadius:16,border:`1.5px solid ${open?c.brown:c.sand}`,overflow:"hidden",marginBottom:10,cursor:"pointer"}}>
      <div style={{display:"flex",alignItems:"center",gap:14,padding:"16px"}}>
        <div style={{width:48,height:48,borderRadius:14,background:open?`linear-gradient(135deg,${c.brown},${c.brownL})`:c.cream,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>{emoji}</div>
        <div style={{flex:1}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:17,color:c.dark}}>{title}</div>
          <div style={{fontSize:12,color:c.muted,marginTop:2}}>{subtitle}</div>
        </div>
        <div style={{width:26,height:26,borderRadius:"50%",background:open?c.brown:c.sand,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
          <svg viewBox="0 0 24 24" style={{width:13,height:13,stroke:open?"white":c.muted,fill:"none",strokeWidth:2.5,transform:open?"rotate(180deg)":"none"}}><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>
      {open&&(<div style={{borderTop:`1px solid ${c.sand}`}}>
        {photos&&photos.length>0&&<div style={{display:"grid",gridTemplateColumns:photos.length===1?"1fr":"1fr 1fr",gap:2}}>{photos.map((src,i)=><div key={i} style={{position:"relative",paddingTop:"60%",overflow:"hidden"}}><img src={src} alt={title} style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:photoPosition||"center center",display:"block"}}/></div>)}</div>}
        <div style={{padding:"14px 16px 16px"}}>
          <p style={{fontSize:13.5,lineHeight:1.7,color:c.muted,margin:"0 0 12px"}}>{detail}</p>
          {price&&<div style={{display:"inline-flex",alignItems:"center",background:c.cream,borderRadius:10,padding:"6px 12px",marginBottom:12}}><span style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:c.brown}}>{price}</span></div>}
          <a href="mailto:info@baitamaore.it?subject=Booking" style={{display:"flex",alignItems:"center",gap:8,background:c.brown,color:"white",borderRadius:12,padding:"11px 14px",textDecoration:"none",fontSize:13}}><Ic.mailW/> {t.bookActivity}</a>
        </div>
      </div>)}
    </div>
  );
}

// ─── TREATMENT CARD ──────────────────────────────────────────────
function TreatmentCard({emoji,name,price,duration,desc}) {
  const [open,setOpen] = useState(false);
  return (
    <div onClick={()=>setOpen(o=>!o)} style={{borderBottom:`1px solid ${c.sand}`,cursor:desc?"pointer":"default",paddingBottom:2}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 0 11px"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,flex:1}}>
          <span style={{fontSize:20}}>{emoji}</span>
          <div><div style={{fontSize:14,fontWeight:500,color:c.dark}}>{name}</div><div style={{fontSize:12,color:c.muted,marginTop:1}}>{duration}</div></div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{background:`linear-gradient(135deg,${c.brown},${c.brownL})`,borderRadius:10,padding:"4px 10px",fontFamily:"'Playfair Display',serif",fontSize:15,color:"white",whiteSpace:"nowrap"}}>{price}</div>
          {desc&&<svg viewBox="0 0 24 24" style={{width:14,height:14,stroke:c.muted,fill:"none",strokeWidth:2,transform:open?"rotate(180deg)":"none",flexShrink:0}}><polyline points="6 9 12 15 18 9"/></svg>}
        </div>
      </div>
      {open&&desc&&<div style={{fontSize:13,color:c.muted,lineHeight:1.7,paddingBottom:12,paddingLeft:30}}>{desc}</div>}
    </div>
  );
}

// ─── SCREENS ─────────────────────────────────────────────────────
function Carousel({t}) {
  const slides = [
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1774646565/baita_snow_g7gh1o.jpg", emoji:"❄️", label:t.winter, sub:t.winterSub },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1774646454/7C58746E-2898-455F-8F54-DFBECF932A68_L0_001-1_7_2023_14_44_36_itcw6x.jpg", emoji:"☀️", label:t.summer, sub:t.summerSub },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1774646480/IMG_9019_gvalgq.jpg" },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1774646481/IMG_9017_wuwrak.jpg" },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1774646483/IMG_9013_hnsfax.jpg" },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1774646476/IMG_9025_bxjmb7.jpg" },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1774646471/colazione_cd8rou.jpg" },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1774646464/PHOTO-2024-08-18-13-46-25_2_etievo.jpg" },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1774646459/IMG_4181_r3rnxr.jpg" },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1774646466/PHOTO-2024-08-18-13-54-50_6_gchmgn.jpg" },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1774646488/IMG_9005_y9cjyy.jpg" },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1774646549/IMG_8990_dgzgpp.jpg" },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1775488680/PHOTO-2026-03-29-20-52-17_7_nbxiis.jpg" },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1775488681/PHOTO-2026-03-29-20-52-16_11_e2voao.jpg" },
    { src:"https://res.cloudinary.com/dovpg47yh/image/upload/v1775488681/PHOTO-2026-03-29-20-52-17_2_pvphkk.jpg" },
  ];
  const [cur, setCur] = useState(0);
  const [startX, setStartX] = useState(0);
  useEffect(()=>{ const id=setInterval(()=>setCur(c=>(c+1)%slides.length),3500); return ()=>clearInterval(id); },[]);
  const prev = ()=>setCur(c=>(c-1+slides.length)%slides.length);
  const next = ()=>setCur(c=>(c+1)%slides.length);
  const onTouchStart = e=>setStartX(e.touches[0].clientX);
  const onTouchEnd = e=>{ const dx=e.changedTouches[0].clientX-startX; if(dx<-40) next(); else if(dx>40) prev(); };
  const slide = slides[cur];
  return (
    <div style={{padding:"8px 20px 0"}}>
      <div style={{fontSize:9,letterSpacing:"4px",textTransform:"uppercase",color:c.muted,textAlign:"center",marginBottom:14}}>{t.seasonLabel}</div>
      <div style={{borderRadius:18,overflow:"hidden",position:"relative",height:220,userSelect:"none"}} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <img key={cur} src={slide.src} alt="Baita Maore" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"opacity 0.4s"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(28,18,8,0.75) 0%,rgba(28,18,8,0.05) 55%)"}}/>
        {slide.label&&(
          <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"0 16px 16px"}}>
            <div style={{fontSize:26,marginBottom:4}}>{slide.emoji}</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:"white",lineHeight:1.2}}>{slide.label.split("\n").map((l,i)=><span key={i}>{l}{i===0&&<br/>}</span>)}</div>
            <div style={{fontSize:10,color:"rgba(255,255,255,0.65)",marginTop:4}}>{slide.sub}</div>
          </div>
        )}
        <button onClick={prev} style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",background:"rgba(255,255,255,0.2)",backdropFilter:"blur(6px)",border:"none",borderRadius:"50%",width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
          <svg viewBox="0 0 24 24" style={{width:14,height:14,stroke:"white",fill:"none",strokeWidth:2.5}}><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button onClick={next} style={{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",background:"rgba(255,255,255,0.2)",backdropFilter:"blur(6px)",border:"none",borderRadius:"50%",width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
          <svg viewBox="0 0 24 24" style={{width:14,height:14,stroke:"white",fill:"none",strokeWidth:2.5}}><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <div style={{position:"absolute",bottom:12,right:14,display:"flex",gap:5}}>
          {slides.map((_,i)=>(
            <div key={i} onClick={()=>setCur(i)} style={{width:i===cur?18:6,height:6,borderRadius:3,background:i===cur?"white":"rgba(255,255,255,0.4)",transition:"all 0.3s",cursor:"pointer"}}/>
          ))}
        </div>
      </div>
    </div>
  );
}

function PH({go,lang,setLang}) {
  const t = TR[lang];
  const icons = [<Ic.home/>,<Ic.lock/>,<Ic.building/>,<Ic.spa/>,<Ic.pool/>,<Ic.check/>,<Ic.pin/>,<Ic.hike/>,<Ic.fork/>,<Ic.star/>,<Ic.social/>,<Ic.faq/>];
  const ids = ["benvenuto","checkin","suite","spa","piscina","regole","posizione","escursioni","mangiare","recensioni","social","faq"];
  return (
    <div style={s.app}><FontLink/><LangToggle lang={lang} setLang={setLang}/>
      <div style={{...s.hero, background:"#1c1208", position:"relative", overflow:"hidden"}}>
        <img src="https://res.cloudinary.com/dovpg47yh/image/upload/v1775488683/PHOTO-2026-03-29-20-52-16_1_ote8bb.jpg" alt="Baita Maore" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",display:"block",opacity:0.7}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(10,5,2,0.45) 0%, rgba(10,5,2,0.8) 100%)"}}/>
        <div style={{position:"relative",padding:"50px 24px 36px",textAlign:"center"}}>
          <div style={s.eyebrow}>Laconi · Oristano · Sardegna</div>
          <img src="https://res.cloudinary.com/dovpg47yh/image/upload/v1774558967/IMG_8927_t7ppwk.png" alt="Baita Maore" style={{width:210,maxWidth:"65vw",display:"block",margin:"8px auto 14px",height:"auto",filter:"brightness(0) invert(1)",opacity:0.95}}/>
          <div style={{fontSize:10,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(244,237,224,0.75)",marginTop:4,fontFamily:"'Raleway',sans-serif",fontWeight:300}}>{t.heroSub}</div>
          <div style={{width:32,height:1,background:c.brownL,margin:"12px auto 0"}}/>
        </div>
      </div>
      <div style={{padding:"24px 20px 0"}}>
        <div style={{background:c.dark,borderRadius:18,padding:"20px 18px",marginBottom:12}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:19,color:c.sand,fontWeight:400,marginBottom:8}}>{t.heartTitle}</div>
          <p style={{fontSize:13,color:"rgba(244,237,224,0.8)",lineHeight:1.7,margin:"0 0 10px"}}>{t.heartDesc}</p>
          <p style={{fontSize:13,color:"rgba(244,237,224,0.65)",lineHeight:1.7,margin:0}}>{t.openYear} {t.openYearSub}</p>
        </div>
      </div>

      {/* Carousel */}
      <Carousel t={t}/>
      {/* Concierge WhatsApp button */}
      <div style={{padding:"16px 20px 4px"}}>
        <a href="https://wa.me/393474029363" target="_blank" rel="noreferrer" style={{display:"flex",alignItems:"center",gap:14,background:"linear-gradient(135deg,#1c1208,#3d2008)",borderRadius:18,padding:"16px 18px",textDecoration:"none",border:"1px solid rgba(107,66,38,0.4)"}}>
          <div style={{width:44,height:44,borderRadius:14,background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <svg viewBox="0 0 24 24" style={{width:22,height:22,fill:"white"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </div>
          <div style={{flex:1}}>
            <div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:"#9a6342",marginBottom:4}}>{lang==="it"?"Servizio concierge":"Concierge service"}</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:16,color:"#f4ede0",marginBottom:2}}>{lang==="it"?"Siamo a tua disposizione":"We are at your disposal"}</div>
            <div style={{fontSize:11,color:"rgba(244,237,224,0.55)"}}>{lang==="it"?"Scrivici su WhatsApp · Risposta immediata":"Message us on WhatsApp · Immediate response"}</div>
          </div>
          <div style={{flexShrink:0}}>
            <svg viewBox="0 0 24 24" style={{width:14,height:14,stroke:"#9a6342",fill:"none",strokeWidth:2}}><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </a>
      </div>
      <div style={s.sectionLabel}>{t.exploreLabel}</div>
      <div style={s.grid}>
        {ids.map((id,i)=>(
          <div key={id} style={s.card} onClick={()=>go(id)}>
            {icons[i]}
            <span style={s.cardLabel}>{t.nav[i]}</span>
          </div>
        ))}
      </div>
      <div style={{height:32}}/>
    </div>
  );
}

function Benvenuto({go,lang,setLang}) {
  const t = TR[lang];
  return <div style={s.app}><FontLink/><LangToggle lang={lang} setLang={setLang}/>
    <PageHead title={t.welcomeTitle} back={()=>go("home")} icon={<Ic.home/>}/>
    <div style={s.content}>
      <div style={s.hlBox}><div style={s.hlTitle}>{t.welcomeHL}</div><p style={{fontSize:14,lineHeight:1.7,opacity:0.92,margin:0}}>{t.welcomeText}</p></div>
      <Card><CT icon={<Ic.lock/>} text={t.checkinLabel}/><Row l="Check-in" v={t.checkinIn}/><Row l="Check-out" v={t.checkinOut} last/></Card>
      <Card><CT text={t.contactsLabel}/>
        <a href="tel:+393392156270" style={s.tel}><span style={{fontSize:13.5,color:c.dark}}>📱 Baita Maore</span><span style={{fontFamily:"Georgia,serif",fontSize:15,color:c.brown}}>339 215 6270</span></a>
        <a href="tel:+393474029363" style={s.tel}><span style={{fontSize:13.5,color:c.dark}}>📱 Baita Maore</span><span style={{fontFamily:"Georgia,serif",fontSize:15,color:c.brown}}>347 402 9363</span></a>
        <a href="mailto:info@baitamaore.it" style={s.telLast}><span style={{fontSize:13.5,color:c.dark}}>✉️ Email</span><span style={{fontSize:13,color:c.brown}}>info@baitamaore.it</span></a>
      </Card>
      <Card><CT text={t.webSocial}/><Row l="🌐 Website" v={t.website} link="https://www.baitamaore.it"/><Row l="📸 Instagram" v={t.instagram} link="https://www.instagram.com/baitamaore"/><Row l="👤 Facebook" v="Baita Maore ›" link="https://www.facebook.com/baitamaore" last/></Card>
    </div>
  </div>;
}

function Checkin({go,lang,setLang}) {
  const t = TR[lang];
  return <div style={s.app}><FontLink/><LangToggle lang={lang} setLang={setLang}/>
    <PageHead title={t.checkinTitle} back={()=>go("home")} icon={<Ic.lock/>}/>
    <div style={s.content}>
      <Card><CT text={t.arrivalLabel}/><Rule t={t.arrivalR1}/><Rule t={t.arrivalR2}/><Rule t={t.arrivalR3} last/></Card>
      <Card><CT text={t.departLabel}/><Rule t={t.departR1} last/></Card>
      <Card><CT text={t.spaBookLabel}/>
        <p style={{fontSize:13.5,color:c.muted,marginBottom:12,lineHeight:1.65}}>{t.spaBookText}</p>
        <div style={{marginBottom:8}}><div style={{fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:c.muted,marginBottom:8}}>{t.morning}</div>{["9:30","11:00"].map(x=><span key={x} style={s.spaSlot}>{x}</span>)}</div>
        <div><div style={{fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:c.muted,marginBottom:8}}>{t.afternoon}</div>{["15:00","16:30","18:00","19:30","21:30 (dopo cena)"].map(x=><span key={x} style={s.spaSlot}>{x}</span>)}</div>
        <a href="mailto:info@baitamaore.it?subject=SPA Booking" style={s.mailBtn}><Ic.mailW/> {t.spaEmailBtn}</a>
      </Card>
      <Card><CT icon={<Ic.pin/>} text={t.addressLabel}/>
        <p style={{fontFamily:"'Playfair Display',serif",fontSize:18,marginBottom:12}}>Via Funtana e Maore<br/>08034 Laconi (OR) — Sardegna</p>
        <div style={{...s.darkBox,marginBottom:10}}><p style={{fontSize:12,color:"rgba(244,237,224,0.8)",lineHeight:1.65,margin:0}}>{t.mapsWarning}</p></div>
        <a href="https://maps.google.com/?q=Laconi+Oristano+Sardegna" target="_blank" rel="noreferrer" style={s.mapBtn}><Ic.mapW/> {t.openMaps}</a>
      </Card>
    </div>
  </div>;
}

function Suite({go,lang,setLang}) {
  const t = TR[lang];
  const [open,setOpen] = useState(null);

  const rooms = [
    {
      id:"pino", name:"Suite Pino", type:"superior",
      photo:"https://res.cloudinary.com/dovpg47yh/image/upload/v1775508799/SuitePino1-1-1920x650_ovbpoz.jpg",
      desc: lang==="it" ? "Immersa nel profumo del legno di pino, questa suite vi accoglierà con calore e naturalezza. Un rifugio autentico per ritrovare la serenità." : "Surrounded by the scent of pine wood, this suite welcomes you with warmth and authenticity. A genuine retreat to rediscover serenity.",
      features: lang==="it" ? ["Letto matrimoniale","Bagno privato con doccia a pioggia","Pavimenti in rovere","Veranda e giardino privato","Wi-Fi · TV · AC · Minibar","Accappatoio, ciabatte, borsa SPA","Colazione inclusa"] : ["Double bed","Private bathroom with rain shower","Oak floors","Private veranda and garden","Wi-Fi · TV · AC · Minibar","Bathrobe, slippers, SPA bag","Breakfast included"],
      badge:"Superior", color:c.brown,
    },
    {
      id:"quercia", name:"Suite Quercia", type:"superior",
      photos:["https://res.cloudinary.com/dovpg47yh/image/upload/v1775509616/quercia_pbnmaz.jpg","https://res.cloudinary.com/dovpg47yh/image/upload/v1775509616/quercia_2_gvav0s.jpg"],
      photo:"https://res.cloudinary.com/dovpg47yh/image/upload/v1775509616/quercia_pbnmaz.jpg",
      desc: lang==="it" ? "La quercia, simbolo di forza e vita tranquilla, ispira questa suite energizzante. Due letti matrimoniali — uno al piano terra e uno sul soppalco — la rendono perfetta per famiglie o piccoli gruppi." : "The oak tree, symbol of strength and peaceful life, inspires this energising suite. Two double beds — one on the ground floor and one on the mezzanine — make it perfect for families or small groups.",
      features: lang==="it" ? ["4 posti letto · 2 letti matrimoniali","Piano terra + soppalco con scala in legno","Bagno privato con doccia a pioggia","Pavimenti in rovere","Veranda e giardino privato con salottino","Wi-Fi · TV · AC · Minibar","Accappatoio, ciabatte, borsa SPA","Colazione inclusa"] : ["4 guests · 2 double beds","Ground floor + mezzanine with wooden staircase","Private bathroom with rain shower","Oak floors","Private veranda and garden with seating","Wi-Fi · TV · AC · Minibar","Bathrobe, slippers, SPA bag","Breakfast included"],
      badge:"fino a 4 posti · 2 letti mat.", color:c.brown,
    },
    {
      id:"abete", name:"Suite Abete", type:"superior",
      photos:["https://res.cloudinary.com/dovpg47yh/image/upload/v1775509615/abete_mdsjxk.jpg","https://res.cloudinary.com/dovpg47yh/image/upload/v1775509616/abete_2_cfnfgn.jpg"],
      photo:"https://res.cloudinary.com/dovpg47yh/image/upload/v1775509615/abete_mdsjxk.jpg",
      desc: lang==="it" ? "L'abete richiama la calda atmosfera natalizia e la coesione familiare. Due letti matrimoniali su due livelli, bagno separato da eleganti vetri e travi in legno. Un nido di benessere e tranquillità." : "The fir tree evokes the warm Christmas atmosphere and family togetherness. Two double beds on two levels, bathroom separated by elegant glass and wooden beams. A nest of well-being and tranquillity.",
      features: lang==="it" ? ["4 posti letto · 2 letti matrimoniali","Piano terra + soppalco con scala in legno","Bagno privato separato da vetro e travi legno","Doccia a pioggia · Pavimenti in rovere","Veranda e giardino privato con salottino","Wi-Fi · TV · AC · Minibar","Accappatoio, ciabatte, borsa SPA","Colazione inclusa"] : ["4 guests · 2 double beds","Ground floor + mezzanine with wooden staircase","Private bathroom with glass and wooden beam details","Rain shower · Oak floors","Private veranda and garden with seating","Wi-Fi · TV · AC · Minibar","Bathrobe, slippers, SPA bag","Breakfast included"],
      badge:"fino a 4 posti · 2 letti mat.", color:c.brown,
    },
    {
      id:"leccio", name:"Suite Leccio", type:"superior",
      photo:"https://res.cloudinary.com/dovpg47yh/image/upload/v1775508799/SuiteLeccio1-1920x650_wbvo07.jpg",
      desc: lang==="it" ? "Il leccio è l'albero simbolo della Sardegna. Questa suite ne richiama la solidità e il calore, in un ambiente raffinato e accogliente." : "The holm oak is the symbol of Sardinia. This suite reflects its solidity and warmth in a refined and welcoming environment.",
      features: lang==="it" ? ["Letto matrimoniale","Bagno privato con doccia a pioggia","Pavimenti in rovere","Veranda privata con vista giardino","Wi-Fi gratuito · TV · Minibar","Colazione inclusa"] : ["Double bed","Private bathroom with rain shower","Oak floors","Private veranda with garden view","Free Wi-Fi · TV · Minibar","Breakfast included"],
      badge:"Superior", color:c.brown,
    },
    {
      id:"ulivo", name:"Suite Ulivo", type:"superior",
      photo:"https://res.cloudinary.com/dovpg47yh/image/upload/v1775508800/SuiteUlivo1-1-1920x650_yqg7ky.jpg",
      desc: lang==="it" ? "Come l'ulivo, simbolo di pace e longevità, questa suite offre un'atmosfera serena e senza tempo, perfetta per rigenerarsi." : "Like the olive tree, symbol of peace and longevity, this suite offers a serene and timeless atmosphere, perfect for rejuvenation.",
      features: lang==="it" ? ["Letto matrimoniale","Bagno privato con doccia a pioggia","Pavimenti in rovere","Veranda privata con vista giardino","Wi-Fi gratuito · TV · Minibar","Colazione inclusa"] : ["Double bed","Private bathroom with rain shower","Oak floors","Private veranda with garden view","Free Wi-Fi · TV · Minibar","Breakfast included"],
      badge:"Superior", color:c.brown,
    },
    {
      id:"pioppo", name:"Luxury Suite Pioppo", type:"luxury",
      photo:"https://res.cloudinary.com/dovpg47yh/image/upload/v1775508799/pioppo1-1920x650_abs8ao.jpg",
      desc: lang==="it" ? "Situata nella nuova ala della Baita, questa esclusiva suite di 45 m² con legno di rovere pregiato offre momenti di intimo relax con SPA privata ad uso esclusivo." : "Located in the new wing of the Baita, this exclusive 45 sqm suite in fine oak wood offers moments of intimate relaxation with a private SPA for exclusive use.",
      features: lang==="it" ? ["45 m² di privacy totale","SPA privata ad uso esclusivo","Jacuzzi · Sauna · Doccia cromoterapica","Letto matrimoniale · Camino","Veranda privata","Wi-Fi gratuito · TV · Minibar","Colazione inclusa"] : ["45 sqm of total privacy","Private SPA for exclusive use","Jacuzzi · Sauna · Chromotherapy shower","Double bed · Fireplace","Private veranda","Free Wi-Fi · TV · Minibar","Breakfast included"],
      badge:"Luxury + SPA privata", color:"#2d1a0e",
    },
    {
      id:"cedro", name:"Luxury Suite Cedro", type:"luxury",
      photo:"https://res.cloudinary.com/dovpg47yh/image/upload/v1775508806/cedro1-1920x650_kn3mfy.png",
      desc: lang==="it" ? "Pensata in ogni dettaglio per chi vuole viziarsi in un'oasi personale di pace. Il profumo del cedro e la SPA privata rendono il soggiorno indimenticabile." : "Designed in every detail for those who want to indulge in a personal oasis of peace. The scent of cedar and the private SPA make your stay unforgettable.",
      features: lang==="it" ? ["45 m² di privacy totale","SPA privata ad uso esclusivo","Jacuzzi · Sauna · Doccia cromoterapica","Letto matrimoniale · Camino elettrico","Veranda privata","Wi-Fi gratuito · TV · Minibar","Colazione inclusa"] : ["45 sqm of total privacy","Private SPA for exclusive use","Jacuzzi · Sauna · Chromotherapy shower","Double bed · Electric fireplace","Private veranda","Free Wi-Fi · TV · Minibar","Breakfast included"],
      badge:"Luxury + SPA privata", color:"#2d1a0e",
    },
  ];

  return <div style={s.app}><FontLink/><LangToggle lang={lang} setLang={setLang}/>
    <PageHead title={t.suiteTitle} sub={lang==="it"?"7 suite · Rifugi di legno e pietra":"7 suites · Wood and stone retreats"} back={()=>go("home")} icon={<Ic.building/>}/>
    <div style={s.content}>

      {/* Intro box */}
      <div style={s.hlBox}>
        <div style={s.hlTitle}>{lang==="it"?"Le nostre suite":"Our suites"}</div>
        <p style={{fontSize:13.5,lineHeight:1.7,opacity:0.92,margin:0}}>{lang==="it"?"7 suite di lusso ispirate alla natura, ognuna con il suo carattere unico. Ogni dettaglio è pensato per farvi sentire a casa, immersi nella bellezza dei boschi di Laconi.":"7 luxury suites inspired by nature, each with its own unique character. Every detail is designed to make you feel at home, surrounded by the beauty of Laconi's woods."}</p>
      </div>

      {/* Superior label */}
      <div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:c.muted,textAlign:"center",margin:"8px 0 12px"}}>Superior Suites</div>

      {rooms.filter(r=>r.type==="superior").map((room)=>{
        const isOpen=open===room.id;
        return (
          <div key={room.id} style={{marginBottom:12,borderRadius:20,overflow:"hidden",border:`1.5px solid ${isOpen?room.color:c.sand}`,background:c.white}}>
            <div onClick={()=>setOpen(isOpen?null:room.id)} style={{cursor:"pointer"}}>
              <div style={{position:"relative",height:170,overflow:"hidden"}}>
                <img src={room.photo} alt={room.name} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(28,18,8,0.7) 0%,rgba(28,18,8,0) 50%)"}}/>
                <div style={{position:"absolute",bottom:10,left:14}}>
                  <span style={{background:"rgba(255,255,255,0.2)",backdropFilter:"blur(6px)",borderRadius:20,padding:"3px 12px",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"white",border:"1px solid rgba(255,255,255,0.3)"}}>{room.badge}</span>
                </div>
                <div style={{position:"absolute",top:12,right:12,width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,0.2)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <svg viewBox="0 0 24 24" style={{width:13,height:13,stroke:"white",fill:"none",strokeWidth:2.5,transform:isOpen?"rotate(180deg)":"none"}}><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>
              <div style={{padding:"12px 16px 10px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div><div style={{fontFamily:"'Playfair Display',serif",fontSize:20,color:c.dark}}>{room.name}</div></div>
                <span style={{fontSize:10,color:room.color,fontWeight:600,letterSpacing:"1px",textTransform:"uppercase"}}>{isOpen?(lang==="it"?"Chiudi":"Close"):(lang==="it"?"Scopri":"Discover")}</span>
              </div>
            </div>
            {isOpen&&(<div style={{borderTop:`1px solid ${c.sand}`}}>
              {room.photos&&room.photos[1]&&<img src={room.photos[1]} alt={room.name} style={{width:"100%",height:160,objectFit:"cover",display:"block"}}/>}
              <div style={{padding:"14px 18px 18px"}}>
                <p style={{fontSize:13.5,lineHeight:1.75,color:c.muted,margin:"0 0 14px"}}>{room.desc}</p>
                {room.features.map((f,i)=><div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:i<room.features.length-1?`1px solid ${c.sand}`:"none",alignItems:"flex-start"}}><div style={{width:6,height:6,borderRadius:"50%",background:room.color,flexShrink:0,marginTop:6}}/><span style={{fontSize:13.5}}>{f}</span></div>)}
                <a href="https://baitamaore.it/disponibilita-camere/" target="_blank" rel="noreferrer" style={{display:"flex",alignItems:"center",gap:8,background:room.color,color:"white",borderRadius:12,padding:"12px 16px",textDecoration:"none",fontSize:13,marginTop:16,justifyContent:"center"}}>{lang==="it"?"🗓️ Verifica disponibilità":"🗓️ Check availability"}</a>
              </div>
            </div>)}
          </div>
        );
      })}

      {/* Luxury label */}
      <div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:c.muted,textAlign:"center",margin:"16px 0 12px"}}>Luxury Suites</div>

      {rooms.filter(r=>r.type==="luxury").map((room)=>{
        const isOpen=open===room.id;
        return (
          <div key={room.id} style={{marginBottom:12,borderRadius:20,overflow:"hidden",border:`1.5px solid ${isOpen?room.color:c.sand}`,background:c.white}}>
            <div onClick={()=>setOpen(isOpen?null:room.id)} style={{cursor:"pointer"}}>
              <div style={{position:"relative",height:170,overflow:"hidden"}}>
                <img src={room.photo} alt={room.name} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(28,18,8,0.7) 0%,rgba(28,18,8,0) 50%)"}}/>
                <div style={{position:"absolute",bottom:10,left:14,display:"flex",gap:6}}>
                  <span style={{background:"rgba(107,66,38,0.85)",backdropFilter:"blur(6px)",borderRadius:20,padding:"3px 12px",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"white"}}>Luxury</span>
                  <span style={{background:"rgba(255,255,255,0.2)",backdropFilter:"blur(6px)",borderRadius:20,padding:"3px 12px",fontSize:10,letterSpacing:"1px",color:"white",border:"1px solid rgba(255,255,255,0.3)"}}>💎 SPA privata</span>
                </div>
                <div style={{position:"absolute",top:12,right:12,width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,0.2)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <svg viewBox="0 0 24 24" style={{width:13,height:13,stroke:"white",fill:"none",strokeWidth:2.5,transform:isOpen?"rotate(180deg)":"none"}}><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>
              <div style={{padding:"12px 16px 10px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div><div style={{fontFamily:"'Playfair Display',serif",fontSize:20,color:c.dark}}>{room.name}</div></div>
                <span style={{fontSize:10,color:room.color,fontWeight:600,letterSpacing:"1px",textTransform:"uppercase"}}>{isOpen?(lang==="it"?"Chiudi":"Close"):(lang==="it"?"Scopri":"Discover")}</span>
              </div>
            </div>
            {isOpen&&(<div style={{borderTop:`1px solid ${c.sand}`}}>
              <div style={{padding:"14px 18px 18px"}}>
                <p style={{fontSize:13.5,lineHeight:1.75,color:c.muted,margin:"0 0 14px"}}>{room.desc}</p>
                {room.features.map((f,i)=><div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:i<room.features.length-1?`1px solid ${c.sand}`:"none",alignItems:"flex-start"}}><div style={{width:6,height:6,borderRadius:"50%",background:room.color,flexShrink:0,marginTop:6}}/><span style={{fontSize:13.5}}>{f}</span></div>)}
                <a href="https://baitamaore.it/disponibilita-camere/" target="_blank" rel="noreferrer" style={{display:"flex",alignItems:"center",gap:8,background:room.color,color:"white",borderRadius:12,padding:"12px 16px",textDecoration:"none",fontSize:13,marginTop:16,justifyContent:"center"}}>{lang==="it"?"🗓️ Verifica disponibilità":"🗓️ Check availability"}</a>
              </div>
            </div>)}
          </div>
        );
      })}


    </div>
  </div>;
}

function SpaCarousel() {
  const photos = [
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776187711/spa_5_kt3utw.jpg",
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776187714/spa_10_vo6ey3.jpg",
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776187714/spa_12_ipwk0d.jpg",
    "https://res.cloudinary.com/dovpg47yh/image/upload/v1776187710/spa_4_isamen.jpg",
  ];
  const [cur, setCur] = useState(0);
  const [startX, setStartX] = useState(0);
  useEffect(()=>{ const id=setInterval(()=>setCur(c=>(c+1)%photos.length),3500); return ()=>clearInterval(id); },[]);
  const prev = ()=>setCur(c=>(c-1+photos.length)%photos.length);
  const next = ()=>setCur(c=>(c+1)%photos.length);
  return (
    <div style={{borderRadius:18,overflow:"hidden",marginBottom:12,position:"relative",height:220}}
      onTouchStart={e=>setStartX(e.touches[0].clientX)}
      onTouchEnd={e=>{ const dx=e.changedTouches[0].clientX-startX; if(dx<-40) next(); else if(dx>40) prev(); }}>
      <img key={cur} src={photos[cur]} alt="SPA Baita Maore" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"opacity 0.4s"}}/>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(28,18,8,0.5) 0%,rgba(28,18,8,0) 50%)"}}/>
      <button onClick={prev} style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",background:"rgba(255,255,255,0.2)",backdropFilter:"blur(6px)",border:"none",borderRadius:"50%",width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
        <svg viewBox="0 0 24 24" style={{width:13,height:13,stroke:"white",fill:"none",strokeWidth:2.5}}><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button onClick={next} style={{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",background:"rgba(255,255,255,0.2)",backdropFilter:"blur(6px)",border:"none",borderRadius:"50%",width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
        <svg viewBox="0 0 24 24" style={{width:13,height:13,stroke:"white",fill:"none",strokeWidth:2.5}}><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <div style={{position:"absolute",bottom:10,right:12,display:"flex",gap:5}}>
        {photos.map((_,i)=><div key={i} onClick={()=>setCur(i)} style={{width:i===cur?16:6,height:6,borderRadius:3,background:i===cur?"white":"rgba(255,255,255,0.4)",transition:"all 0.3s",cursor:"pointer"}}/>)}
      </div>
    </div>
  );
}

function Spa({go,lang,setLang}) {
  const t = TR[lang];
  return <div style={s.app}><FontLink/><LangToggle lang={lang} setLang={setLang}/>
    <PageHead title={t.spaTitle} sub={t.spaSub} back={()=>go("home")} icon={<Ic.spa/>}/>
    <div style={s.content}>
      <SpaCarousel/>
      <div style={s.hlBox}><div style={s.hlTitle}>{t.spaHL}</div><p style={{fontSize:14,lineHeight:1.7,opacity:0.92,margin:0}}>{t.spaHLText}</p></div>
      <Card><CT text={t.spaAreaLabel}/>{t.spaAreaItems.map((x,i)=><Rule key={i} t={x} last={i===t.spaAreaItems.length-1}/>)}</Card>
      <div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:c.muted,margin:"20px 0 4px",textAlign:"center"}}>{t.spaPriceLabel}</div>
      <p style={{fontSize:12,color:c.muted,textAlign:"center",marginBottom:14}}>{t.spaTapHint}</p>
      <Card><CT text={t.massaggiLabel}/>{t.massaggi.map((x,i)=><TreatmentCard key={i} {...x}/>)}<div style={{height:4}}/></Card>
      <Card><CT text={t.trattLabel}/>{t.trattamenti.map((x,i)=><TreatmentCard key={i} {...x}/>)}<div style={{height:4}}/></Card>
      <Card><CT text={t.visoLabel}/>{t.viso.map((x,i)=><TreatmentCard key={i} {...x}/>)}<div style={{height:4}}/></Card>
      <div style={{...s.darkBox,textAlign:"center"}}>
        <p style={{fontSize:13,color:c.sand,fontWeight:500,marginBottom:4}}>{t.spaBookTitle}</p>
        <p style={{fontSize:12,color:"rgba(244,237,224,0.65)",lineHeight:1.7,margin:"0 0 14px"}}>{t.spaBookSubtext}</p>
        <a href="mailto:info@baitamaore.it?subject=SPA+Booking" style={{display:"inline-flex",alignItems:"center",gap:8,background:c.brown,color:"white",borderRadius:12,padding:"11px 20px",textDecoration:"none",fontSize:13}}><Ic.mailW/> {t.spaEmailBook}</a>
      </div>
    </div>
  </div>;
}

function Piscina({go,lang,setLang}) {
  const t = TR[lang];
  return <div style={s.app}><FontLink/><LangToggle lang={lang} setLang={setLang}/>
    <PageHead title={t.piscinaTitle} sub={t.piscinaSub} back={()=>go("home")} icon={<Ic.pool/>}/>
    <div style={s.content}>
      <div style={{borderRadius:18,overflow:"hidden",marginBottom:12}}>
        <img src="https://res.cloudinary.com/dovpg47yh/image/upload/v1775488680/PHOTO-2026-03-29-20-52-14_1_vfqfu9.jpg" alt="Piscina Baita Maore" style={{width:"100%",height:220,objectFit:"cover",display:"block"}}/>
      </div>
      <div style={s.hlBox}><div style={s.hlTitle}>{t.piscinaHL}</div><p style={{fontSize:14,lineHeight:1.7,opacity:0.92,margin:0}}>{t.piscinaHLText}</p></div>
      <Card><CT text={t.estateLabel}/>{t.estateItems.map((x,i)=><Rule key={i} t={x} last={i===t.estateItems.length-1}/>)}</Card>
      <Card><CT text={t.invernoLabel}/>{t.invernoItems.map((x,i)=><Rule key={i} t={x} last={i===t.invernoItems.length-1}/>)}</Card>
    </div>
  </div>;
}

function Regole({go,lang,setLang}) {
  const t = TR[lang];
  return <div style={s.app}><FontLink/><LangToggle lang={lang} setLang={setLang}/>
    <PageHead title={t.regoleTitle} back={()=>go("home")} icon={<Ic.check/>}/>
    <div style={s.content}>
      <Card><CT text={t.regGen}/>{t.regGenItems.map((x,i)=><Rule key={i} t={x} last={i===t.regGenItems.length-1}/>)}</Card>
      <Card><CT text={t.regRisp}/>{t.regRispItems.map((x,i)=><Rule key={i} t={x} last={i===t.regRispItems.length-1}/>)}</Card>
      <Card><CT text={t.regSic}/>{t.regSicItems.map((x,i)=><Rule key={i} t={x} last={i===t.regSicItems.length-1}/>)}</Card>
    </div>
  </div>;
}

function Posizione({go,lang,setLang}) {
  const t = TR[lang];
  return <div style={s.app}><FontLink/><LangToggle lang={lang} setLang={setLang}/>
    <PageHead title={t.posizioneTitle} back={()=>go("home")} icon={<Ic.pin/>}/>
    <div style={s.content}>
      <Card><CT icon={<Ic.pin/>} text={t.addressLabel}/>
        <p style={{fontFamily:"'Playfair Display',serif",fontSize:18,marginBottom:10}}>Via Funtana e Maore<br/>08034 Laconi (OR) — Sardegna</p>
        <div style={{...s.darkBox,marginBottom:10}}><p style={{fontSize:12,color:"rgba(244,237,224,0.8)",lineHeight:1.65,margin:0}}>{t.mapsWarning}</p></div>
        <a href="https://maps.google.com/?q=Laconi+Oristano+Sardegna" target="_blank" rel="noreferrer" style={s.mapBtn}><Ic.mapW/> {t.openMaps}</a>
      </Card>
      <Card><CT text={t.distLabel}/>{t.distItems.map(([l,v],i)=><Row key={i} l={l} v={v} last={i===t.distItems.length-1}/>)}</Card>
    </div>
  </div>;
}

function Escursioni({go,lang,setLang}) {
  const t = TR[lang];
  return <div style={s.app}><FontLink/><LangToggle lang={lang} setLang={setLang}/>
    <PageHead title={t.escursioniTitle} sub={t.escursioniSub} back={()=>go("home")} icon={<Ic.hike/>}/>
    <div style={s.content}>
      <div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:c.muted,marginBottom:14,textAlign:"center"}}>{t.activitiesLabel}</div>
      <p style={{fontSize:13.5,color:c.muted,lineHeight:1.65,marginBottom:16,textAlign:"center"}}>{t.activitiesTap}</p>
      {t.activities.map((a)=><ActivityCard key={a.title} {...a} t={t}/>)}
      <Card style={{marginTop:6}}><CT text={t.fromBaitaLabel}/>
        {t.fromBaita.map((item,i)=>{
          const isLast=i===t.fromBaita.length-1;
          return <a key={i} href={item.url} target="_blank" rel="noreferrer" style={{...isLast?s.ruleLast:s.rule,textDecoration:"none",alignItems:"center"}}>
            <div style={s.dot}/><div style={{flex:1}}><div style={{fontWeight:500,fontSize:14,color:c.brown,marginBottom:2}}>{item.name}</div><div style={{fontSize:12.5,color:c.muted,lineHeight:1.6}}>{item.desc}</div></div><Arrow/>
          </a>;
        })}
      </Card>
      <Card><CT text={t.nearbyLabel}/>
        {t.nearby.map((item,i)=>{
          const isLast=i===t.nearby.length-1;
          return <a key={i} href={item.url} target="_blank" rel="noreferrer" style={{...isLast?s.ruleLast:s.rule,textDecoration:"none",alignItems:"center"}}>
            <div style={s.dot}/><div style={{flex:1}}><div style={{fontWeight:500,fontSize:14,color:c.brown,marginBottom:2}}>{item.name}</div><div style={{fontSize:12.5,color:c.muted,lineHeight:1.6}}>{item.desc}</div>{item.contact&&<div style={{fontSize:11.5,color:c.muted,marginTop:3}}>{item.contact}</div>}</div><Arrow/>
          </a>;
        })}
      </Card>
      <div style={{background:"linear-gradient(135deg,#2d1a0e,#4a2c14)",borderRadius:18,padding:"20px 18px",marginBottom:12,color:"white"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
          <span style={{fontSize:36}}>🍄</span>
          <div><div style={{fontFamily:"'Playfair Display',serif",fontSize:20,color:"#f4ede0",marginBottom:2}}>{t.tartufoTitle}</div><div style={{fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:c.brownL}}>{t.tartufoSub}</div></div>
        </div>
        <p style={{fontSize:13.5,lineHeight:1.75,color:"rgba(244,237,224,0.85)",margin:"0 0 14px"}}>{t.tartufoText}</p>
        <a href="tel:+393515268835" style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(255,255,255,0.12)",borderRadius:12,padding:"11px 14px",textDecoration:"none"}}>
          <div><div style={{fontSize:13,color:"#f4ede0",fontWeight:500}}>🌿 L'Isola dei Sapori — Mandas</div><div style={{fontSize:11.5,color:"rgba(244,237,224,0.6)",marginTop:2}}>Carta Veronica</div></div>
          <span style={{fontSize:13,color:c.brownL,fontFamily:"'Playfair Display',serif"}}>351 526 8835</span>
        </a>
      </div>
      <Card><CT text={t.culturaLabel}/>
        {t.cultura.map((item,i)=>{
          const isLast=i===t.cultura.length-1;
          return <a key={i} href={item.url} target="_blank" rel="noreferrer" style={{...isLast?s.rowLast:s.row,textDecoration:"none",alignItems:"center",gap:10}}>
            <div style={{flex:1}}><div style={{fontSize:13.5,color:c.dark,fontWeight:400}}>{item.name}</div><div style={{fontSize:11.5,color:c.muted,marginTop:1}}>{item.sub}{item.tel&&<span style={{color:c.brown}}> · {item.tel}</span>}</div></div><Arrow/>
          </a>;
        })}
      </Card>
      <Card><CT text={t.avventuraLabel}/>
        {t.avventura.map((item,i)=>{
          const isLast=i===t.avventura.length-1;
          return <a key={i} href={item.url} target="_blank" rel="noreferrer" style={{...isLast?s.rowLast:s.row,textDecoration:"none",alignItems:"center"}}>
            <div style={{flex:1}}><div style={{fontSize:13.5,color:c.dark}}>{item.name}</div><div style={{fontSize:11.5,color:c.muted,marginTop:1}}>{item.sub}</div></div><Arrow/>
          </a>;
        })}
      </Card>
      <div style={s.darkBox}>
        <p style={{fontSize:13,color:c.sand,fontWeight:500,marginBottom:6}}>{t.guidesLabel}</p>
        <a href="tel:+393403995145" style={{display:"flex",justifyContent:"space-between",textDecoration:"none",padding:"8px 0",borderBottom:"1px solid rgba(255,255,255,0.1)"}}><span style={{fontSize:13,color:"rgba(244,237,224,0.8)"}}>Federico Melis</span><span style={{fontSize:13,color:c.brownL}}>340 399 5145</span></a>
        <a href="tel:+393479143436" style={{display:"flex",justifyContent:"space-between",textDecoration:"none",padding:"8px 0"}}><span style={{fontSize:13,color:"rgba(244,237,224,0.8)"}}>Oscar</span><span style={{fontSize:13,color:c.brownL}}>347 914 3436</span></a>
      </div>
    </div>
  </div>;
}

function Mangiare({go,lang,setLang}) {
  const t = TR[lang];
  const ristoranti = [
    { emoji:"🍽️", name:"Ristorante-Pizzeria La Cascata", loc:"Laconi", tels:["+393312383219"], telLabels:["+39 331 238 3219"], map:"https://maps.google.com/?q=Ristorante+La+Cascata+Laconi" },
    { emoji:"🍽️", name:"Ristorante Sa Spillunca", loc:"Laconi", tels:["+390782869632","+393491994908"], telLabels:["+39 0782 869 632","+39 349 199 4908"], map:"https://maps.google.com/?q=Ristorante+Sa+Spillunca+Laconi" },
    { emoji:"🌿", name:"Ristorante Rurale Santa Maria", loc:"Nurallao", tels:["+393498776812"], telLabels:["+39 349 877 6812"], map:"https://maps.google.com/?q=Ristorante+Rurale+Santa+Maria+Nurallao" },
    { emoji:"🍕", name:"Pizzeria Su Stunnu", loc:"Laconi", tels:["+393491994908"], telLabels:["+39 349 199 4908"], map:"https://maps.google.com/?q=Pizzeria+Su+Stunnu+Laconi" },
  ];
  return <div style={s.app}><FontLink/><LangToggle lang={lang} setLang={setLang}/>
    <PageHead title={t.mangiareTitle} back={()=>go("home")} icon={<Ic.fork/>}/>
    <div style={s.content}>
      <div style={s.hlBox}>
        <div style={s.hlTitle}>{t.chefTitle}</div>
        <p style={{fontSize:14,lineHeight:1.7,opacity:0.92,margin:"0 0 10px"}}>{t.chefText}</p>
        <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
          <div style={{background:"rgba(255,255,255,0.15)",borderRadius:10,padding:"10px 14px",flex:1,minWidth:100}}><div style={{fontSize:22,fontFamily:"'Playfair Display',serif"}}>€ 40</div><div style={{fontSize:11,opacity:0.8,marginTop:2}}>{t.chefPriceSub}</div></div>
          <div style={{background:"rgba(255,255,255,0.15)",borderRadius:10,padding:"10px 14px",flex:1,minWidth:100}}><div style={{fontSize:22,fontFamily:"'Playfair Display',serif"}}>20:30</div><div style={{fontSize:11,opacity:0.8,marginTop:2}}>{t.chefTimeSub}</div></div>
        </div>
        <a href="mailto:info@baitamaore.it?subject=Cena+Baita" style={{...s.mailBtn,marginTop:14,background:"rgba(255,255,255,0.2)"}}><Ic.mailW/> {t.chefBtn}</a>
      </div>
      <Card><CT text={t.colLabel}/>{t.colItems.map((x,i)=><Rule key={i} t={x} last={i===t.colItems.length-1}/>)}</Card>
      <Card><CT text={t.ristoLabel}/>
        {ristoranti.map((r,i)=>(
          <div key={i} style={{padding:"12px 0",borderBottom:i<ristoranti.length-1?`1px solid ${c.sand}`:"none"}}>
            <a href={r.map} target="_blank" rel="noreferrer" style={{display:"flex",alignItems:"center",justifyContent:"space-between",textDecoration:"none",marginBottom:6}}>
              <span style={{fontSize:14,fontWeight:500,color:c.dark}}>{r.emoji} {r.name}</span>
              <span style={{display:"flex",alignItems:"center",gap:3,fontSize:11,color:c.brown}}><svg viewBox="0 0 24 24" style={{width:12,height:12,stroke:c.brown,fill:"none",strokeWidth:2}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>{r.loc}</span>
            </a>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              {r.tels.map((tel,j)=>(
                <a key={j} href={`tel:${tel}`} style={{display:"inline-flex",alignItems:"center",gap:5,background:c.cream,borderRadius:8,padding:"5px 10px",textDecoration:"none"}}>
                  <svg viewBox="0 0 24 24" style={{width:12,height:12,stroke:c.brown,fill:"none",strokeWidth:2}}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.07-1.07a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <span style={{fontSize:12.5,color:c.brown,fontWeight:500}}>{r.telLabels[j]}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </Card>
      <div style={{...s.darkBox,textAlign:"center"}}><p style={{fontSize:12,color:"rgba(244,237,224,0.75)",lineHeight:1.7,margin:0}}>{t.callFirst}<br/>{t.mustTaste}</p></div>
    </div>
  </div>;
}

function Recensioni({go,lang,setLang}) {
  const t = TR[lang];
  const [cur, setCur] = useState(0);

  const quotes = lang==="it" ? [
    { text: "Baita Maore è un sogno ad occhi aperti: posizione suggestiva, esperienza autentica e un'accoglienza impeccabile da parte di tutto il personale.", author: "Ospite verificato", platform: "Booking.com", stars: 5 },
    { text: "Struttura meravigliosa curata nei minimi dettagli. Suite Pioppo con SPA privata: un vero sogno. Cena con chef che non ha niente da invidiare a ristoranti stellati.", author: "Ospite verificato", platform: "Booking.com", stars: 5 },
    { text: "Week end da favola. Suite, SPA e piscina veramente oltre le aspettative. La baita è semplicemente fantastica: il lusso sottile della raffinata semplicità.", author: "Ospite verificato", platform: "Google", stars: 5 },
    { text: "Abbiamo alloggiato nella suite Quercia in quattro. Location stupenda, servizio perfetto, personale gentilissimo. Un ringraziamento speciale a Riccardo.", author: "Maria F.P.", platform: "Booking.com", stars: 5 },
    { text: "La cucina è ottima, i paesaggi da favola, SPA e piscina una carezza. Gli ambienti in stile nordico sono molto suggestivi. Torneremo sicuramente!", author: "Ospite verificato", platform: "Booking.com", stars: 5 },
    { text: "Piacevolmente accolti in un clima familiare e ricercato. Piscina riscaldata senza limiti di orario, per bagni di stelle e bagni d'alba. Un'esperienza unica.", author: "Ospite verificato", platform: "Booking.com", stars: 5 },
  ] : [
    { text: "Baita Maore is an enchanting gem in the middle of the island. The attention to detail and elegance is truly beautiful. What stands out most is the incredible kindness of the staff.", author: "Verified guest", platform: "Booking.com", stars: 5 },
    { text: "A dream come true: stunning location, authentic local experience and impeccable service from all the staff. Absolutely a dream to live!", author: "Verified guest", platform: "Booking.com", stars: 5 },
    { text: "Wonderful weekend. Suites, SPA and pool truly beyond expectations. Simply fantastic: the subtle luxury of refined simplicity.", author: "Verified guest", platform: "Google", stars: 5 },
    { text: "We stayed in the Quercia suite, a group of four. Stunning location, perfect service and very attentive staff. A special thanks to Riccardo.", author: "Maria F.P.", platform: "Booking.com", stars: 5 },
    { text: "The cuisine is excellent, the landscapes breathtaking, SPA and pool a treat. The Nordic-style interiors are very evocative. We will definitely return!", author: "Verified guest", platform: "Booking.com", stars: 5 },
  ];

  useEffect(()=>{
    const id = setInterval(()=>setCur(c=>(c+1)%quotes.length), 4000);
    return ()=>clearInterval(id);
  },[]);

  const Stars = ({n})=><div style={{display:"flex",gap:2,marginBottom:8}}>{[...Array(n)].map((_,i)=><svg key={i} viewBox="0 0 24 24" style={{width:14,height:14,fill:"#f59e0b",stroke:"none"}}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}</div>;

  return <div style={s.app}><FontLink/><LangToggle lang={lang} setLang={setLang}/>
    <PageHead title={t.recensioniTitle} back={()=>go("home")} icon={<Ic.star/>}/>
    <div style={s.content}>

      {/* Rating box */}
      <div style={{background:c.dark,borderRadius:18,padding:"22px 18px",marginBottom:12,display:"flex",alignItems:"center",gap:16}}>
        <div style={{textAlign:"center",flexShrink:0}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:44,color:"white",lineHeight:1}}>4.7</div>
          <div style={{display:"flex",gap:2,justifyContent:"center",margin:"6px 0 4px"}}>{[...Array(5)].map((_,i)=><svg key={i} viewBox="0 0 24 24" style={{width:12,height:12,fill:i<5?"#f59e0b":"rgba(255,255,255,0.2)",stroke:"none"}}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}</div>
          <div style={{fontSize:10,color:"rgba(244,237,224,0.5)",letterSpacing:"1px"}}>304 Google</div>
        </div>
        <div style={{width:1,height:60,background:"rgba(255,255,255,0.1)",flexShrink:0}}/>
        <div style={{textAlign:"center",flexShrink:0}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:44,color:"white",lineHeight:1}}>9.3</div>
          <div style={{fontSize:11,color:"#f59e0b",fontWeight:600,margin:"6px 0 4px"}}>Eccellente</div>
          <div style={{fontSize:10,color:"rgba(244,237,224,0.5)",letterSpacing:"1px"}}>241 Booking</div>
        </div>
        <div style={{flex:1,textAlign:"right"}}>
          <div style={{fontSize:11,color:"rgba(244,237,224,0.6)",lineHeight:1.6}}>{lang==="it"?"Valutazioni verificate\nda ospiti reali":"Verified ratings\nfrom real guests"}</div>
        </div>
      </div>

      {/* Quote carousel */}
      <div style={{background:c.white,borderRadius:18,padding:"22px 18px",marginBottom:12,border:`1px solid ${c.sand}`,minHeight:160,position:"relative"}}>
        <div style={{fontSize:36,color:c.sand,fontFamily:"Georgia,serif",lineHeight:1,marginBottom:8}}>"</div>
        <Stars n={quotes[cur].stars}/>
        <p style={{fontFamily:"'Playfair Display',serif",fontSize:15,lineHeight:1.7,color:c.dark,margin:"0 0 14px",fontStyle:"italic"}}>
          {quotes[cur].text}
        </p>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div>
            <div style={{fontSize:12,fontWeight:600,color:c.dark}}>{quotes[cur].author}</div>
            <div style={{fontSize:11,color:c.muted}}>{quotes[cur].platform}</div>
          </div>
          <div style={{display:"flex",gap:6}}>
            {quotes.map((_,i)=>(
              <div key={i} onClick={()=>setCur(i)} style={{width:i===cur?18:6,height:6,borderRadius:3,background:i===cur?c.brown:c.sand,transition:"all 0.3s",cursor:"pointer"}}/>
            ))}
          </div>
        </div>
      </div>

      {/* Platform buttons */}
      <div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:c.muted,textAlign:"center",margin:"16px 0 12px"}}>{lang==="it"?"Lascia la tua recensione":"Leave your review"}</div>

      <a href="https://www.google.com/search?sca_esv=3d469d807f837c81&q=Baita+Maore&si=AL3DRZGNtcdgKOqVhotcr-UG2kkYpwR2WO4qu3O00NmpwBmLnelENfgjuP228Sq9Mu0JKBy_z4FZlQPBJQf0ePnqhto70ecszcuDObBbwo6mQQpuIptZpQ0%3D&sa=X&ved=2ahUKEwjp1p-H28WTAxUMgf0HHezMIY4Q_coHegQIMBAB" target="_blank" rel="noreferrer"
        style={{display:"flex",alignItems:"center",gap:14,background:c.white,borderRadius:16,padding:"14px 16px",textDecoration:"none",border:`1.5px solid ${c.sand}`,marginBottom:10}}>
        <div style={{width:38,height:38,borderRadius:10,background:"#fff",border:`1px solid ${c.sand}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
          <svg viewBox="0 0 24 24" style={{width:22,height:22}}><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        </div>
        <div style={{flex:1}}>
          <div style={{fontSize:14,fontWeight:500,color:c.dark}}>Google</div>
          <div style={{display:"flex",alignItems:"center",gap:4,marginTop:2}}>
            <div style={{display:"flex",gap:1}}>{[...Array(5)].map((_,i)=><svg key={i} viewBox="0 0 24 24" style={{width:11,height:11,fill:"#f59e0b",stroke:"none"}}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}</div>
            <span style={{fontSize:11,color:c.muted}}>4.7 · 304 {lang==="it"?"recensioni":"reviews"}</span>
          </div>
        </div>
        <svg viewBox="0 0 24 24" style={{width:14,height:14,stroke:c.muted,fill:"none",strokeWidth:2}}><polyline points="9 18 15 12 9 6"/></svg>
      </a>

      <a href="https://www.booking.com/hotel/it/baita-maore.it.html" target="_blank" rel="noreferrer"
        style={{display:"flex",alignItems:"center",gap:14,background:c.white,borderRadius:16,padding:"14px 16px",textDecoration:"none",border:`1.5px solid ${c.sand}`,marginBottom:10}}>
        <div style={{width:38,height:38,borderRadius:10,background:"#003580",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
          <span style={{color:"white",fontWeight:700,fontSize:13}}>B.</span>
        </div>
        <div style={{flex:1}}>
          <div style={{fontSize:14,fontWeight:500,color:c.dark}}>Booking.com</div>
          <div style={{display:"flex",alignItems:"center",gap:4,marginTop:2}}>
            <span style={{background:"#003580",color:"white",borderRadius:6,padding:"1px 6px",fontSize:11,fontWeight:700}}>9.3</span>
            <span style={{fontSize:11,color:c.muted}}>241 {lang==="it"?"recensioni":"reviews"}</span>
          </div>
        </div>
        <svg viewBox="0 0 24 24" style={{width:14,height:14,stroke:c.muted,fill:"none",strokeWidth:2}}><polyline points="9 18 15 12 9 6"/></svg>
      </a>

      <div style={{...s.darkBox,textAlign:"center",marginTop:4}}>
        <p style={{fontSize:13,color:"rgba(244,237,224,0.75)",lineHeight:1.7,margin:"0 0 12px"}}>{lang==="it"?"La tua recensione aiuta altri viaggiatori a scoprire la Baita Maore. Bastano 2 minuti! 🙏":"Your review helps other travellers discover Baita Maore. It only takes 2 minutes! 🙏"}</p>
        <a href="https://www.google.com/search?sca_esv=3d469d807f837c81&q=Baita+Maore&si=AL3DRZGNtcdgKOqVhotcr-UG2kkYpwR2WO4qu3O00NmpwBmLnelENfgjuP228Sq9Mu0JKBy_z4FZlQPBJQf0ePnqhto70ecszcuDObBbwo6mQQpuIptZpQ0%3D&sa=X&ved=2ahUKEwjp1p-H28WTAxUMgf0HHezMIY4Q_coHegQIMBAB" target="_blank" rel="noreferrer"
          style={{display:"inline-flex",alignItems:"center",gap:8,background:c.brown,color:"white",borderRadius:12,padding:"11px 20px",textDecoration:"none",fontSize:13}}>
          ⭐ {lang==="it"?"Scrivi una recensione":"Write a review"}
        </a>
      </div>

    </div>
  </div>;
}

function Social({go,lang,setLang}) {
  const t = TR[lang];
  const iconMap = { Instagram:<Ic.igW/>, Facebook:<Ic.fbW/>, "Sito ufficiale":<Ic.webW/>, "Official website":<Ic.webW/>, WhatsApp:<Ic.waW/> };
  return <div style={s.app}><FontLink/><LangToggle lang={lang} setLang={setLang}/>
    <PageHead title={t.socialTitle} sub={t.socialSub} back={()=>go("home")} icon={<Ic.social/>}/>
    <div style={s.content}>
      <div style={s.hlBox}><div style={s.hlTitle}>{t.socialHL}</div><p style={{fontSize:14,lineHeight:1.7,opacity:0.92,margin:0}}>{t.socialText}</p></div>
      {t.socialItems.map((s2)=>(
        <a key={s2.name} href={s2.url} target="_blank" rel="noreferrer" style={{textDecoration:"none",display:"block",marginBottom:12}}>
          <div style={{background:c.white,borderRadius:18,border:`1.5px solid ${c.sand}`,overflow:"hidden",display:"flex",alignItems:"stretch"}}>
            <div style={{width:64,background:s2.color,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{iconMap[s2.name]||<Ic.webW/>}</div>
            <div style={{padding:"14px 16px",flex:1}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:c.dark,marginBottom:2}}>{s2.name}</div>
              <div style={{fontSize:12,color:s2.color,fontWeight:600,marginBottom:6}}>{s2.handle}</div>
              <div style={{fontSize:12.5,color:c.muted,lineHeight:1.6}}>{s2.desc}</div>
            </div>
            <div style={{display:"flex",alignItems:"center",paddingRight:14}}><svg viewBox="0 0 24 24" style={{width:16,height:16,stroke:c.sand,fill:"none",strokeWidth:2}}><polyline points="9 18 15 12 9 6"/></svg></div>
          </div>
        </a>
      ))}
      <div style={{...s.darkBox,textAlign:"center"}}>
        <p style={{fontSize:12,color:"rgba(244,237,224,0.7)",lineHeight:1.8,margin:0}}>{t.hashtagBox.split("\n").map((l,i)=><span key={i}>{i===1?<strong style={{color:c.sand}}>{l}</strong>:i===2?<span style={{fontSize:11,opacity:0.6}}>{l}</span>:l}{i<2&&<br/>}</span>)}</p>
      </div>
    </div>
  </div>;
}

function FAQ({go,lang,setLang}) {
  const t = TR[lang];
  return <div style={s.app}><FontLink/><LangToggle lang={lang} setLang={setLang}/>
    <PageHead title={t.faqTitle} back={()=>go("home")} icon={<Ic.faq/>}/>
    <div style={s.content}>
      {t.faqItems.map((item,i)=>(
        <Card key={i}><CT text={item.q}/><p style={{fontSize:13.5,lineHeight:1.7,color:c.muted,margin:0}}>{item.a}</p></Card>
      ))}
      <Card><CT text={t.faqEmergLabel}/>
        <Row l="🚨 Emergenze / Emergencies" v="112"/><Row l="🚑 Ambulanza / Ambulance" v="118"/><Row l="🔥 Vigili del fuoco / Fire" v="115" last/>
      </Card>
      <Card><CT text={t.faqHelp}/>
        <p style={{fontSize:13.5,color:c.muted,marginBottom:8,lineHeight:1.65}}>{t.faqHelpText}</p>
        <a href="tel:+393392156270" style={s.tel}><span style={{fontSize:13.5,color:c.dark}}>📱 Baita Maore</span><span style={{fontFamily:"Georgia,serif",fontSize:15,color:c.brown}}>339 215 6270</span></a>
        <a href="tel:+393474029363" style={s.tel}><span style={{fontSize:13.5,color:c.dark}}>📱 Baita Maore</span><span style={{fontFamily:"Georgia,serif",fontSize:15,color:c.brown}}>347 402 9363</span></a>
        <a href="mailto:info@baitamaore.it" style={s.telLast}><span style={{fontSize:13.5,color:c.dark}}>✉️ Email</span><span style={{fontSize:13,color:c.brown}}>info@baitamaore.it</span></a>
      </Card>
    </div>
  </div>;
}

// ─── APP ROOT ────────────────────────────────────────────────────
export default function BaitaMaore() {
  const [screen, setScreen] = useState("home");
  const [lang, setLang] = useState("it");
  const go = (id) => { setScreen(id); window.scrollTo && window.scrollTo(0,0); };
  const props = { go, lang, setLang };
  const screens = {
    home: <PH {...props}/>, benvenuto: <Benvenuto {...props}/>, checkin: <Checkin {...props}/>,
    suite: <Suite {...props}/>, spa: <Spa {...props}/>, piscina: <Piscina {...props}/>,
    regole: <Regole {...props}/>, posizione: <Posizione {...props}/>, escursioni: <Escursioni {...props}/>,
    mangiare: <Mangiare {...props}/>, recensioni: <Recensioni {...props}/>,
    social: <Social {...props}/>, faq: <FAQ {...props}/>,
  };
  return screens[screen] || <PH {...props}/>;
}
