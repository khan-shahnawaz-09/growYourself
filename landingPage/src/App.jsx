import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import Curriculam from "./components/Curriculam";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Tool from "./components/Tool";
import Mentor from "./components/Mentor";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Inter:wght@300;400;500;600&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --forest:   #1b3a32;
    --forest-light: #22473d;
    --green:    #2dc653;
    --green-h:  #22a844;
    --white:    #ffffff;
    --off:      #f7f5f0;
    --beige:    #f0ede7;
    --pale:     #f5f5f3;
    --ink:      #0f0f0f;
    --mid:      #3a3a3a;
    --muted:    #888;
    --border:   #e2e2e0;
    --dot-dark: rgba(255,255,255,0.07);
    --dot-light:#cbc7c0;
  }

  .container {
  max-width: 1280px;
}

  .gs { font-family: 'Inter', sans-serif; color: var(--ink); background: var(--white); min-height: 100vh; }

  /* ── NAV ── */
  .gs-nav {
    
  position: sticky; top: 0; z-index: 200;
  display: flex; align-items: center; justify-content: space-between;
  padding: 44px 120px; 
  height: 64px;
    background: var(--white); border-bottom: 1px solid var(--border);
  }
  .gs-nav-l { display: flex; align-items: center; gap: 52px; }

  .gs-brand { display: flex; align-items: center; gap: 10px; cursor: pointer; text-decoration: none; }
  .gs-brand-icon {
    width: 42px; height: 42px; border-radius: 50%; background: var(--ink);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .gs-brand-text { line-height: 1.05; }
  .gs-brand-text strong { display: block; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: 0.98rem; color: var(--ink); }
  .gs-brand-text span   { display: block; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 600; font-size: 0.82rem; color: var(--ink); }

  .gs-navlinks { display: flex; gap: 38px; }
  .gs-navlinks a { font-size: 0.88rem; font-weight: 500; color: var(--mid); text-decoration: none; cursor: pointer; transition: color .18s; }
  .gs-navlinks a:hover { color: var(--ink); }

  .gs-nav-r { display: flex; gap: 10px; }
  .gs-btn-outline {
    height: 38px; padding: 0 20px; border-radius: 8px;
    border: 1.5px solid #ccc; background: transparent;
    font-size: 0.86rem; font-weight: 500; color: var(--ink);
    cursor: pointer; font-family: 'Inter', sans-serif; transition: border-color .18s;
  }
  .gs-btn-outline:hover { border-color: #999; }

  /* ── PAGE ── */
  .gs-page { padding: 28px 52px 72px; max-width: 1400px; margin: 0 auto; }

  /* ── HERO ── */
  .gs-hero {
    background: var(--forest);
    border-radius: 22px;
    padding: 56px 60px 56px 60px;
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 40px;
    align-items: center;
    position: relative;
    overflow: hidden;
    min-height: 420px;
  }
  /* grid texture */
  .gs-hero::before {
    content: '';
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      linear-gradient(var(--dot-dark) 1px, transparent 1px),
      linear-gradient(90deg, var(--dot-dark) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  .gs-hero-left { position: relative; z-index: 1; }
  .gs-hero-left h1 {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: clamp(2rem, 3.4vw, 3rem);
    font-weight: 800; color: #fff;
    line-height: 1.12; letter-spacing: -0.5px;
    margin-bottom: 18px;
  }
  .gs-hero-left p {
    color: rgba(255,255,255,.62);
    font-size: 0.93rem; line-height: 1.7;
    max-width: 490px; margin-bottom: 28px;
  }

  /* badges — white outlined on dark bg */
  .gs-badges { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 34px; }
  .gs-badge {
    display: inline-flex; align-items: center; gap: 8px;
    border: 1.5px solid rgba(255,255,255,.3);
    border-radius: 8px; padding: 9px 16px;
    color: #fff; font-size: 0.76rem; font-weight: 600;
    letter-spacing: 0.6px; text-transform: uppercase;
    background: transparent;
  }
  .gs-badge svg { width: 14px; height: 14px; flex-shrink: 0; opacity: .85; }

  .gs-cta {
    display: inline-block; background: var(--green); color: #fff; border: none;
    padding: 15px 34px; border-radius: 10px;
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 1rem; font-weight: 700; cursor: pointer;
    transition: background .2s, transform .15s;
  }
  .gs-cta:hover { background: var(--green-h); transform: translateY(-2px); }

  /* video thumbnail — real photo feel */
  .gs-hero-right { position: relative; z-index: 1; }
  .gs-thumb {
    border-radius: 18px; overflow: hidden;
    width: 100%; aspect-ratio: 4/3;
    background: #2a4a40;
    position: relative; cursor: pointer;
    box-shadow: 0 20px 60px rgba(0,0,0,.35);
  }
  /* gradient overlay mimicking a real photo */
  .gs-thumb-bg {
    position: absolute; inset: 0;
    background: linear-gradient(160deg, #3a6355 0%, #1f4035 40%, #0f2820 100%);
  }
  .gs-thumb-person {
    position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
    width: 75%; height: 90%;
    background: linear-gradient(180deg, #4a7a66 0%, #1a3a2e 100%);
    border-radius: 12px 12px 0 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 5.5rem;
    /* subtle inner shadow */
    box-shadow: inset 0 -20px 40px rgba(0,0,0,.3);
  }
  /* hoodie label */
  .gs-thumb-label {
    position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
    background: rgba(0,0,0,.55); backdrop-filter: blur(6px);
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 8px; padding: 6px 14px;
    color: #fff; font-size: 0.72rem; font-weight: 700;
    letter-spacing: 1.5px; text-transform: uppercase; white-space: nowrap;
    z-index: 2;
  }
  .gs-play {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    width: 58px; height: 58px; border-radius: 50%;
    background: rgba(255,255,255,.92); border: none;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; box-shadow: 0 6px 28px rgba(0,0,0,.35);
    transition: transform .2s, background .2s; z-index: 3;
  }
  .gs-play:hover { transform: translate(-50%,-50%) scale(1.1); background: #fff; }
  .gs-play svg { width: 22px; height: 22px; margin-left: 4px; }

  /* ── STAT CARDS ── */
  .gs-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px; }
  .gs-stat {
    border-radius: 20px; padding: 38px 34px;
    position: relative; overflow: hidden;
  }
  .gs-stat.s-beige { background: var(--beige); }
  .gs-stat.s-white { background: var(--pale); border: 1px solid var(--border); }
  .gs-stat::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(circle, var(--dot-light) 1.3px, transparent 1.3px);
    background-size: 18px 18px; opacity: .5;
  }
  .gs-stat-in { position: relative; z-index: 1; }
  .gs-stat-in h2 {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 2.6rem; font-weight: 800; color: var(--ink); line-height: 1;
    margin-bottom: 7px;
  }
  .gs-stat-in p { font-size: 0.85rem; color: var(--muted); }

  /* review badges */
  .gs-review-stack { display: flex; flex-direction: column; gap: 13px; }
  .gs-pill-row { display: flex; gap: 9px; flex-wrap: wrap; }
  .gs-pill {
    display: flex; align-items: center; gap: 8px;
    background: var(--white); border: 1px solid var(--border);
    border-radius: 24px; padding: 7px 16px;
    font-size: 0.79rem; font-weight: 600; color: var(--ink);
  }
  .gs-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; display: inline-block; }
  .gs-dot.blue    { background: #4285f4; }
  .gs-dot.navy    { background: #0077b5; border-radius: 2px; }
  .gs-dot.teal    { background: #00b67a; }
  .gs-stars-g { color: var(--green); font-size: 1rem; letter-spacing: 2px; }
  .gs-rcount { font-size: 0.77rem; color: var(--muted); margin-top: 3px; }

  /* ── SECTION COMMON ── */
  .gs-sec { margin-top: 72px; }
  .gs-kicker { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2.5px; color: var(--green); margin-bottom: 8px; }
  .gs-heading {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: clamp(1.7rem, 2.5vw, 2.25rem);
    font-weight: 800; color: var(--ink); line-height: 1.18; margin-bottom: 8px;
  }
  .gs-sub { font-size: 0.89rem; color: var(--muted); line-height: 1.65; max-width: 520px; margin-bottom: 36px; }

  /* ── CURRICULUM ── */
  .gs-curr { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; }
  .gs-ccard {
    background: var(--white); border: 1.5px solid var(--border); border-radius: 16px;
    padding: 26px; transition: border-color .2s, box-shadow .2s;
  }
  .gs-ccard:hover { border-color: #aaa; box-shadow: 0 4px 20px rgba(0,0,0,.07); }
  .gs-cnum { font-size: 0.72rem; font-weight: 700; color: var(--muted); margin-bottom: 11px; letter-spacing: .5px; }
  .gs-ccard h4 { font-family: 'Bricolage Grotesque', sans-serif; font-size: 1.02rem; font-weight: 700; margin-bottom: 9px; line-height: 1.28; }
  .gs-ccard p { font-size: 0.82rem; color: var(--muted); line-height: 1.58; }
  .gs-ctag { display: inline-block; margin-top: 15px; background: #efefef; color: var(--muted); padding: 3px 11px; border-radius: 20px; font-size: 0.72rem; font-weight: 500; }

  /* ── TOOLS ── */
  .gs-tools { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
  .gs-tool {
    background: var(--white); border: 1.5px solid var(--border); border-radius: 10px;
    padding: 10px 18px; font-size: 0.84rem; font-weight: 500;
    display: flex; align-items: center; gap: 8px;
    transition: border-color .2s; cursor: default;
  }
  .gs-tool:hover { border-color: #aaa; }

  /* ── MENTOR ── */
  .gs-mentor {
    background: var(--beige); border-radius: 20px; padding: 38px;
    display: grid; grid-template-columns: auto 1fr; gap: 28px;
    align-items: center; position: relative; overflow: hidden; margin-top: 26px;
  }
  .gs-mentor::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(circle, var(--dot-light) 1.2px, transparent 1.2px);
    background-size: 18px 18px; opacity: .4;
  }
  .gs-mavatar {
    width: 100px; height: 100px; border-radius: 50%;
    background: linear-gradient(140deg, #2e5a4e, #142b24);
    display: flex; align-items: center; justify-content: center;
    font-size: 3rem; position: relative; z-index: 1;
    border: 3px solid rgba(255,255,255,.3); flex-shrink: 0;
  }
  .gs-minfo { position: relative; z-index: 1; }
  .gs-minfo h3 { font-family: 'Bricolage Grotesque', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 5px; }
  .gs-mrole { font-size: 0.86rem; color: var(--muted); margin-bottom: 16px; }
  .gs-mtags { display: flex; gap: 9px; flex-wrap: wrap; }
  .gs-mtag { background: var(--white); border: 1px solid var(--border); border-radius: 20px; padding: 5px 14px; font-size: 0.77rem; font-weight: 600; }

  /* ── TESTIMONIALS ── */
  .gs-tgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 14px; }
  .gs-tcard {
    background: var(--white); border: 1.5px solid var(--border); border-radius: 16px;
    padding: 26px; transition: box-shadow .2s;
  }
  .gs-tcard:hover { box-shadow: 0 4px 18px rgba(0,0,0,.07); }
  .gs-tstars { color: #f59e0b; font-size: 0.88rem; margin-bottom: 12px; }
  .gs-tcard p { font-size: 0.84rem; color: var(--mid); line-height: 1.68; margin-bottom: 18px; }
  .gs-tauthor { display: flex; align-items: center; gap: 11px; }
  .gs-tav {
    width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
    background: var(--beige); border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.78rem; font-weight: 700;
  }
  .gs-tname { font-size: 0.87rem; font-weight: 600; }
  .gs-trole { font-size: 0.73rem; color: var(--muted); }

  /* ── FAQ ── */
  // .gs-faqs { max-width: 720px; margin-top: 26px; }
  // .gs-faq { border-bottom: 1px solid var(--border); padding: 18px 0; cursor: pointer; }
  // .gs-fq {
  //   display: flex; justify-content: space-between; align-items: center;
  //   font-family: 'Bricolage Grotesque', sans-serif; font-size: 0.97rem; font-weight: 700; color: var(--ink);
  //   user-select: none;
  // }
  // .gs-fplus { font-size: 1.3rem; color: var(--muted); line-height: 1; transition: transform .22s; flex-shrink: 0; }
  // .gs-fplus.open { transform: rotate(45deg); }
  // .gs-fa { font-size: 0.85rem; color: var(--muted); line-height: 1.68; margin-top: 11px; }

  /* ── BOTTOM CTA ── */
  .gs-bcta {
    background: var(--forest); border-radius: 22px;
    padding: 72px 64px; text-align: center;
    position: relative; overflow: hidden; margin-top: 72px;
  }
  .gs-bcta::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background-image: linear-gradient(var(--dot-dark) 1px, transparent 1px),
      linear-gradient(90deg, var(--dot-dark) 1px, transparent 1px);
    background-size: 32px 32px;
  }
  .gs-bcta h2 {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: clamp(1.9rem, 3vw, 2.6rem); font-weight: 800;
    color: #fff; margin-bottom: 14px; position: relative; z-index: 1;
  }
  .gs-bcta p { color: rgba(255,255,255,.58); font-size: 0.93rem; margin-bottom: 32px; position: relative; z-index: 1; }
  .gs-bcta .gs-cta { position: relative; z-index: 1; padding: 16px 44px; font-size: 1.04rem; }

  /* ── FOOTER ── */
  .gs-footer {  max-width: 1280px; margin-inline: auto; padding: 52px 52px 28px; border-top: 1px solid var(--border); margin-top: 64px; }
  .gs-fgrid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 44px; margin-bottom: 44px; }
  .gs-fbrand p { font-size: 0.84rem; color: var(--muted); max-width: 220px; line-height: 1.68; margin-top: 13px; }
  .gs-fcol h5 { font-family: 'Bricolage Grotesque', sans-serif; font-size: 0.8rem; font-weight: 800; margin-bottom: 16px; text-transform: uppercase; letter-spacing: .6px; }
  .gs-fcol a { display: block; font-size: 0.84rem; color: var(--muted); text-decoration: none; margin-bottom: 10px; transition: color .18s; cursor: pointer; }
  .gs-fcol a:hover { color: var(--ink); }
  .gs-fbot { border-top: 1px solid var(--border); padding-top: 22px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
  .gs-fbot p { font-size: 0.78rem; color: var(--muted); }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .gs-nav { padding: 0 24px; }
    .gs-page { padding: 20px 20px 56px; }
    .gs-hero { grid-template-columns: 1fr; padding: 38px 30px; }
    .gs-hero-right { max-width: 380px; margin: 0 auto; width: 100%; }
    .gs-stats { grid-template-columns: 1fr; }
    .gs-fgrid { grid-template-columns: 1fr 1fr; }
    .gs-fbrand { grid-column: 1 / -1; }
    .gs-footer { padding: 40px 20px 24px; }
    .gs-bcta { padding: 48px 28px; }
  }
  @media (max-width: 640px) {
    .gs-navlinks { display: none; }
    .gs-fgrid { grid-template-columns: 1fr; }
  }
`;

/* ─── APP ─── */
export default function App() {
  return (
    <>
      <style>{css}</style>
      <div className="gs">
        {/* NAV */}
        <Navbar></Navbar>
        <div className="gs-page container">
          {/* HERO */}
          <HeroSection></HeroSection>

          {/* STATS */}
          <StatsSection></StatsSection>

          {/* CURRICULUM */}
          <Curriculam></Curriculam>

          {/* TOOLS */}
          <Tool></Tool>
          {/* MENTOR */}
          <Mentor></Mentor>
          {/* TESTIMONIALS */}

          <Testimonials></Testimonials>
          {/* FAQ */}
          <Faq></Faq>

          {/* BOTTOM CTA */}
          <div className="gs-bcta">
            <h2>
              Ready to Master AI?
              <br />
              Your Spot is Waiting.
            </h2>
            <p>
              Join 10M+ professionals already using AI to 10x their
              productivity. Limited seats available.
            </p>
            <button className="gs-cta">Claim your spot →</button>
          </div>
        </div>
        {/* /page */}

        {/* FOOTER */}
        <Footer></Footer>
      </div>
    </>
  );
}
