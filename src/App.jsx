import { useState } from "react";

const AFFILIATE_URL = "https://reffpa.com/L?tag=d_5604199m_97c_&site=5604199&ad=97";
const PROMO_CODE = "EURISS";

function ArrowUpRight() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>;
}
function CopyIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>;
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
      window.prompt("Copie ce code promotionnel :", PROMO_CODE);
    }
  }

  function trackClick() {
    try {
      const key = "euriss_outbound_clicks";
      localStorage.setItem(key, String(Number(localStorage.getItem(key) || 0) + 1));
    } catch {}
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#accueil" aria-label="EURISS Affiliation, accueil">
          <span className="brand-mark">E<span>.</span></span>
          <span className="brand-name">EURISS <b>AFFILIATION</b></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">
          <span/><span/>
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#fonctionnement" onClick={() => setMenuOpen(false)}>Comment ça marche</a>
          <a href="#avantages" onClick={() => setMenuOpen(false)}>À savoir</a>
          <a className="nav-cta" href="#code" onClick={() => setMenuOpen(false)}>Voir le code <ArrowUpRight /></a>
        </nav>
      </header>

      <main id="accueil">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot"/> ESPACE PROMOTIONNEL EURISS</div>
            <h1>Le bon point de départ.<br/><span>Le code, c’est EURISS.</span></h1>
            <p className="hero-lead">Retrouve ici le code promotionnel EURISS et utilise le lien partenaire pour découvrir la plateforme et ses conditions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#code">Découvrir le code <ArrowUpRight /></a>
              <a className="text-link" href="#fonctionnement">Comment l’utiliser <span>↓</span></a>
            </div>
            <div className="hero-note"><span className="shield">✓</span> Informations claires · Accès via lien partenaire</div>
          </div>

          <div className="hero-visual" aria-label="Code promotionnel EURISS">
            <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
            <div className="visual-card">
              <div className="visual-card-top"><span className="live-label"><i/> CODE PROMO</span><span className="visual-index">01 / EUR</span></div>
              <div className="visual-symbol">E<span>.</span></div>
              <div className="visual-card-bottom"><span>TON CODE PARTENAIRE</span><strong>EURISS</strong></div>
              <div className="visual-glow"/>
            </div>
            <div className="float-tag tag-top"><span className="tag-icon">↗</span><span><b>Simple</b><small>Un code à retenir</small></span></div>
            <div className="float-tag tag-bottom"><span className="tag-icon tag-check">✓</span><span><b>EURISS</b><small>Code promotionnel</small></span></div>
          </div>
        </section>

        <section className="code-section section-wrap" id="code">
          <div className="section-kicker">01 — TON CODE PROMOTIONNEL</div>
          <div className="code-panel">
            <div className="code-panel-copy">
              <p className="mini-label">À RETENIR</p>
              <h2>Un code. <span>EURISS.</span></h2>
              <p>Utilise le code ci-dessous si tu souhaites t’inscrire via mon lien partenaire. Les conditions applicables sont celles affichées par la plateforme.</p>
            </div>
            <div className="code-action">
              <div className="code-box"><span>CODE PROMO</span><strong>{PROMO_CODE}</strong></div>
              <button className={copied ? "button copy-button copied" : "button copy-button"} onClick={copyCode}>
                {copied ? "Code copié !" : "Copier le code"} <CopyIcon />
              </button>
              <a className="button button-primary partner-button" href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer" onClick={trackClick}>Accéder via mon lien partenaire <ArrowUpRight /></a>
              <small className="micro-note">Tu quittes ce site pour accéder au site partenaire.</small>
            </div>
          </div>
        </section>

        <section className="how-section section-wrap" id="fonctionnement">
          <div className="section-heading">
            <div><div className="section-kicker">02 — MODE D’EMPLOI</div><h2>Comment ça <span>fonctionne ?</span></h2></div>
            <p>Quelques étapes simples pour retrouver le code et consulter les informations officielles.</p>
          </div>
          <div className="steps-grid">
            <article className="step-card"><span className="step-number">01</span><div className="step-icon">↗</div><h3>Ouvre le lien</h3><p>Utilise le bouton d’accès pour rejoindre la plateforme partenaire dans un nouvel onglet.</p></article>
            <article className="step-card"><span className="step-number">02</span><div className="step-icon">⌘</div><h3>Repère le code</h3><p>Lorsqu’un champ de code promotionnel est proposé, saisis <b>EURISS</b>.</p></article>
            <article className="step-card"><span className="step-number">03</span><div className="step-icon">✓</div><h3>Lis les conditions</h3><p>Vérifie les règles, critères d’éligibilité et conditions affichés avant toute décision.</p></article>
          </div>
        </section>

        <section className="notice-section section-wrap" id="avantages">
          <div className="notice-icon">i</div>
          <div><div className="section-kicker">TRANSPARENCE</div><h2>À savoir avant de continuer</h2><p>Ce site est une page promotionnelle indépendante gérée par EURISS. Il n’est pas le site officiel de 1XBET. Le lien présenté est un lien d’affiliation : une inscription ou une activité éligible peut donner lieu à une commission pour le partenaire, sans frais supplémentaires annoncés ici pour le visiteur.</p><p>La participation aux jeux d’argent comporte des risques de perte financière et de dépendance. Aucun gain n’est garanti. Réservé aux personnes majeures (18 ans ou âge légal applicable dans votre pays). Jouez de manière responsable et ne misez jamais de l’argent nécessaire à vos besoins.</p></div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#accueil"><span className="brand-mark">E<span>.</span></span><span className="brand-name">EURISS <b>AFFILIATION</b></span></a>
        <p>© {new Date().getFullYear()} EURISS AFFILIATION. Page promotionnelle indépendante.</p>
        <a href="#accueil" className="back-top">Retour en haut ↑</a>
      </footer>
      <div className="age-strip">18+ · Les jeux d’argent comportent des risques. Jouez avec modération.</div>
    </div>
  );
}