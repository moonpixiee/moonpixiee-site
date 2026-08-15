import fs from 'fs';

// ============================================================================
// THE LIBRARY — the entrance (v1). Not a shop: a private library with a Keeper.
// Almost-silent open → the Keeper's note → the Featured Shelf → quiet shelves
// (House Books · Letters · Moon Notes · Reading Lists). House Books open the same
// cinematic House-Book viewer used across the House.
// ============================================================================

const BOOKS = [
  { slug:'dark-feminine-energy', title:'Mastering Your Dark Feminine Energy', short:'Dark Feminine Energy',
    author:'Luna Lee', pen:'writing as Moonpixiee',
    cover:'#0d0a12', foil:'#e9b7c7', coverImg:'/assets/books/dark-feminine-energy.png',
    tagline:'The power you were never taught to claim',
    blurb:'Your initiation into the most magnetic, confident, and untouchable version of you — reclaim your power, set unshakable boundaries, and stop seeking permission to take up space.',
    price:'9.99', href:'https://housesofluna.myshopify.com/products/mastering-your-dark-feminine-energy',
    returned:'The House remembers what you brought home. It’s yours now.',
    spread:[
      { l:'<span class="fb-epi">“The most powerful woman in the room is the one who needs nothing from it.”</span><span class="fb-epi-by">— Robert Greene, <em>The Art of Seduction</em></span>',
        r:'<span class="fb-chh">Introduction</span><span class="fb-cht">Understanding Dark Feminine Energy</span><span class="fb-chs">The power you were never taught to claim</span>' },
      { l:'<span class="fb-sec">A Letter to the Woman Who Lost Herself</span><span class="fb-body">She was the perfect one. Always agreeable. Always available. She bent herself into every shape someone else needed and called it kindness.<br><br>But deep down — in the quiet place she never let anyone see — she was exhausted. And she was empty.<br><br>That woman was me.</span>',
        r:'<span class="fb-pull2">“She wasn’t broken. She was unfinished. And the moment she stopped apologizing for that — she became dangerous.”</span>' },
      { l:'<span class="fb-chh">Inside you’ll discover</span><span class="fb-disc">The truth about dark feminine energy — and why it’s your greatest power.<br><br>How to stop people-pleasing and start choosing yourself.<br><br>The art of boundaries, mystery, and self-possession.<br><br>Daily practices to embody your most powerful self.</span>',
        r:'<span class="fb-close">You are not too much.<br>You are not difficult.<br>You are awakening.</span><span class="fb-close2">Now become unforgettable.</span>' }
    ] },
  { slug:'becoming', title:'Becoming', short:'Becoming', author:'Luna Lee', soonTitle:true,
    cover:'#141a24', foil:'#c6b2d0', coverImg:'/assets/books/becoming.png', tagline:'Coming soon',
    blurb:'On unbecoming everything you were told to be, and building someone truer in the ruins.',
    spread:[ { l:'<span class="fb-soon">This one isn’t finished yet.</span>', r:'<span class="fb-soon fb-muted">Luna’s still writing it. When it’s ready, it’ll appear on this shelf.</span>' } ],
    soon:'Not out yet — the House will let you know when Becoming arrives.' },
  { slug:'house-of-luna', title:'House of Luna', short:'House of Luna', author:'Luna Lee', soonTitle:true,
    cover:'#1c1410', foil:'#e3b968', coverImg:'/assets/books/house-of-luna.png', tagline:'Coming soon',
    blurb:'The book of the House itself — every room, every ritual, every thing worth keeping.',
    spread:[ { l:'<span class="fb-soon">This one isn’t finished yet.</span>', r:'<span class="fb-soon fb-muted">The House is still being written. Its book will come last.</span>' } ],
    soon:'Not out yet — the House will let you know when House of Luna arrives.' }
];

// the other shelves — placeholders the Keeper is "still shelving"
const LETTERS = [
  {n:'Letter 001', s:'On the night you almost gave up'},
  {n:'Letter 002', s:'To the version of you that stayed'},
  {n:'Letter 003', s:'What the moon taught me about waiting'}
];
const MOONNOTES = [
  {n:'Notes', s:'Tiny thoughts, kept'},
  {n:'Essays', s:'The longer readings'},
  {n:'Observations', s:'One-minute reads'}
];
const READINGLISTS = [
  {n:'The Quiet Woman', s:'The Alchemist · Women Who Run With the Wolves · The Artist’s Way'},
  {n:'Becoming', s:'For when you’re rebuilding'},
  {n:'For the tender nights', s:'grief · confidence · creativity · loneliness'}
];

const page = () => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>The Library · House of Luna</title>
<link rel="stylesheet" href="/styles/tokens.css"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Allura&family=Lora:ital@0;1&display=swap" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<style>
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{ --gold:#e3b968; --ease:cubic-bezier(.22,1,.36,1);
    --font-display:'Playfair Display','Cormorant Garamond',Georgia,serif; --font-book:'Cormorant Garamond','Lora',Georgia,serif; --font-script:'Allura','Snell Roundhand',cursive; --font-narrator:Georgia,serif; --font-machine:ui-monospace,monospace; }
  html{scroll-behavior:smooth;}
  html,body{min-height:100%;background:#0a0806;color:#efe7d8;font-family:var(--font-narrator);}
  body{overflow-x:hidden;}
  .bg{position:fixed;inset:0;z-index:-2;background:radial-gradient(90% 70% at 30% 20%, rgba(120,86,42,.28) 0%, transparent 60%), radial-gradient(80% 70% at 78% 80%, rgba(70,52,28,.32) 0%, transparent 62%), linear-gradient(180deg,#120c08 0%,#0a0705 100%);}
  .bg-img{position:fixed;inset:-4%;z-index:-3;background:url('/assets/library-hub-env.png') center/cover no-repeat;filter:blur(30px) brightness(.22) saturate(.9);transform:scale(1.06);}
  .bg-veil{position:fixed;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(120% 100% at 50% 40%, transparent 42%, rgba(6,4,3,.6) 86%, rgba(6,4,3,.82) 100%);}
  .dust{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;}
  .mote{position:absolute;width:2px;height:2px;border-radius:50%;background:radial-gradient(circle, rgba(255,224,160,.7), rgba(255,224,160,0));mix-blend-mode:screen;}
  @keyframes rise{0%{transform:translateY(0);opacity:0;}14%{opacity:.5;}80%{opacity:.3;}100%{transform:translateY(-120px);opacity:0;}}
  .wrap{position:relative;z-index:1;max-width:1080px;margin:0 auto;padding:0 clamp(1.2rem,5vw,3rem);}
  a.home{position:fixed;top:clamp(1rem,3vw,1.7rem);left:clamp(1rem,3.4vw,2rem);z-index:8;font-family:var(--font-display);font-variant:small-caps;letter-spacing:.12em;font-size:clamp(.8rem,1.5vw,1rem);color:rgba(227,185,104,.8);text-decoration:none;text-shadow:0 1px 6px #000;transition:color .3s;}
  a.home:hover{color:#f2dca4;}

  /* silent opening */
  .lib-open{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:1.4rem;}
  .lib-open .rule{width:min(60vw,320px);height:1px;background:linear-gradient(90deg,transparent,rgba(227,185,104,.5),transparent);}
  .lib-title{font-family:var(--font-display);font-weight:500;font-variant:small-caps;letter-spacing:.32em;font-size:clamp(1.8rem,5vw,3.2rem);color:#f0e2bd;text-shadow:0 2px 24px rgba(0,0,0,.8);opacity:0;animation:fadeUp 1.8s var(--ease) .3s both;}
  .lib-sub{font-family:var(--font-book);font-style:italic;font-size:clamp(1.05rem,2.4vw,1.5rem);color:rgba(233,224,208,.7);opacity:0;animation:fadeUp 1.8s var(--ease) 1.1s both;}
  @keyframes fadeUp{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:translateY(0);}}
  .scrollcue{margin-top:1.6rem;font-family:var(--font-machine);font-size:.6rem;letter-spacing:.3em;text-transform:uppercase;color:rgba(233,224,208,.4);opacity:0;animation:fadeUp 1.6s ease 2.2s both, bob 2.6s ease 3s infinite;}
  @keyframes bob{0%,100%{transform:translateY(0);}50%{transform:translateY(5px);}}

  section{padding:clamp(2.4rem,7vh,5rem) 0;}
  .eyebrow{font-family:var(--font-machine);font-size:.62rem;letter-spacing:.34em;text-transform:uppercase;color:rgba(227,185,104,.85);margin-bottom:1.1rem;}
  .shelf-title{font-family:var(--font-display);font-weight:600;font-size:clamp(1.3rem,3vw,1.9rem);color:#f0e2bd;}
  .shelf-hr{height:1px;background:linear-gradient(90deg,rgba(227,185,104,.4),transparent);margin:.7rem 0 1.6rem;}

  /* the Keeper's note */
  .keeper{display:flex;gap:1.1rem;align-items:flex-start;background:linear-gradient(150deg,rgba(30,22,14,.72),rgba(18,12,8,.72));border:1px solid rgba(198,160,90,.22);border-radius:6px;padding:clamp(1.1rem,3vw,1.7rem);box-shadow:0 30px 80px -34px rgba(0,0,0,.8), inset 0 0 40px rgba(120,86,42,.08);}
  .keeper .seal{flex:none;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;color:#e6c877;font-size:1.3rem;background:radial-gradient(circle at 38% 34%,#3a2a12,#160f06);box-shadow:inset 0 0 0 1px rgba(227,185,104,.4);}
  .keeper .k-from{font-family:var(--font-machine);font-size:.56rem;letter-spacing:.24em;text-transform:uppercase;color:rgba(227,185,104,.8);margin-bottom:.45rem;}
  .keeper .k-body{font-family:var(--font-book);font-style:italic;font-size:clamp(1.05rem,2.3vw,1.32rem);line-height:1.5;color:#ece3d4;}
  .keeper .k-rec{margin-top:.7rem;}
  .k-link{background:none;border:none;cursor:pointer;font-family:var(--font-display);font-variant:small-caps;letter-spacing:.06em;font-size:1.05rem;color:var(--gold);text-decoration:none;}
  .k-link:hover{color:#f2dca4;}

  /* featured */
  .featured{display:flex;gap:clamp(1.2rem,4vw,2.6rem);align-items:center;flex-wrap:wrap;}
  .feat-cover{height:min(46vh,340px);aspect-ratio:534/1536;border-radius:2px 5px 5px 2px;overflow:hidden;flex:none;cursor:pointer;background:#0a0710;box-shadow:0 34px 80px -26px rgba(0,0,0,.85), -8px 0 16px -8px rgba(0,0,0,.6);transition:transform .4s var(--ease);}
  .feat-cover:hover{transform:translateY(-4px) rotate(-.6deg);}
  .feat-cover img{width:100%;height:100%;object-fit:cover;display:block;}
  .feat-body{flex:1;min-width:240px;}
  .feat-now{font-family:var(--font-machine);font-size:.6rem;letter-spacing:.3em;text-transform:uppercase;color:rgba(227,185,104,.85);}
  .feat-name{font-family:var(--font-display);font-weight:600;font-size:clamp(1.5rem,3.6vw,2.3rem);line-height:1.06;color:#f3e9ef;margin:.5rem 0 .3rem;}
  .feat-kind{font-family:var(--font-book);font-style:italic;color:rgba(233,224,208,.62);font-size:1.05rem;}
  .feat-blurb{font-family:var(--font-book);font-size:1.06rem;line-height:1.55;color:rgba(233,224,208,.8);margin:1rem 0 1.3rem;max-width:52ch;}
  .read-link{background:none;border:1px solid rgba(227,185,104,.55);border-radius:3px;cursor:pointer;font-family:var(--font-display);font-variant:small-caps;letter-spacing:.08em;font-size:1.08rem;color:var(--gold);padding:.5rem 1.6rem;transition:background .3s,color .3s;}
  .read-link:hover{background:var(--gold);color:#0a0705;}

  /* shelves — rows of spines / cards */
  .spines{display:flex;gap:.6rem;flex-wrap:wrap;align-items:flex-end;}
  .spine{position:relative;width:clamp(46px,8vw,60px);height:clamp(172px,30vh,220px);border:none;border-radius:2px 3px 3px 2px;cursor:pointer;display:grid;place-items:center;
    background:linear-gradient(90deg,color-mix(in srgb,var(--sp,#3a1a2e) 62%,#000),var(--sp,#3a1a2e) 34%,color-mix(in srgb,var(--sp,#3a1a2e) 80%,#000));
    box-shadow:0 12px 24px -9px rgba(0,0,0,.72),inset 2px 0 4px rgba(255,255,255,.06),inset -3px 0 8px rgba(0,0,0,.42);transition:transform .3s var(--ease),box-shadow .3s;}
  .spine::before{content:"";position:absolute;top:8px;bottom:8px;left:5px;width:2px;background:color-mix(in srgb,var(--spf,#e3b968) 55%,transparent);}
  .spine:hover,.spine:focus-visible{transform:translateY(-12px);outline:none;box-shadow:0 22px 36px -11px rgba(0,0,0,.78),0 0 24px color-mix(in srgb,var(--spf,#e3b968) 42%,transparent);}
  .spine.soon{opacity:.5;}
  .sp-title{writing-mode:vertical-rl;transform:rotate(180deg);font-family:var(--font-book);font-weight:600;font-size:.92rem;letter-spacing:.02em;color:var(--spf,#e3b968);text-shadow:0 1px 3px rgba(0,0,0,.6);padding:.5rem 0;}
  .cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.8rem;}
  .card{text-align:left;background:linear-gradient(150deg,rgba(28,20,13,.6),rgba(16,11,7,.6));border:1px solid rgba(198,160,90,.18);border-radius:5px;padding:1rem 1.1rem;cursor:pointer;transition:border-color .3s,transform .3s,background .3s;}
  .card:hover{border-color:rgba(198,160,90,.45);transform:translateY(-3px);background:linear-gradient(150deg,rgba(38,27,17,.7),rgba(22,15,9,.7));}
  .card .c-name{font-family:var(--font-display);font-size:1.16rem;color:#f0e2bd;}
  .card .c-sub{font-family:var(--font-book);font-style:italic;font-size:.96rem;color:rgba(233,224,208,.58);margin-top:.3rem;line-height:1.4;}
  .shelf-note{font-family:var(--font-book);font-style:italic;font-size:.92rem;color:rgba(233,224,208,.42);margin-top:1rem;}
  footer{padding:3rem 0 4rem;text-align:center;font-family:var(--font-display);font-variant:small-caps;letter-spacing:.24em;color:rgba(233,224,208,.4);}

  .toast{position:fixed;left:50%;bottom:clamp(2rem,7vh,4rem);transform:translateX(-50%) translateY(10px);z-index:40;font-family:var(--font-display);font-variant:small-caps;letter-spacing:.06em;color:var(--gold);background:rgba(12,8,6,.8);border:1px solid rgba(198,160,90,.35);border-radius:4px;padding:.6rem 1.3rem;text-shadow:0 1px 12px #000;opacity:0;transition:opacity .4s,transform .4s;backdrop-filter:blur(4px);}
  .toast.show{opacity:1;transform:translateX(-50%) translateY(0);}

  /* ===== the cinematic House-Book viewer (shared with the rooms) ===== */
  .av{position:fixed;inset:0;z-index:30;display:none;place-items:center;padding:clamp(1rem,4vw,2.4rem);}
  .av.open{display:grid;}
  .av-veil{position:fixed;inset:0;pointer-events:none;opacity:0;transition:opacity .5s var(--ease);backdrop-filter:blur(4px) brightness(.6);-webkit-backdrop-filter:blur(4px) brightness(.6);background:radial-gradient(120% 100% at 50% 50%, rgba(4,3,6,.5) 34%, rgba(4,3,6,.72) 100%);}
  .av.open .av-veil{opacity:1;}
  .av-hold{position:relative;z-index:2;display:grid;place-items:center;width:100%;height:100%;}
  .av .particles{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:1;}
  .av .p{position:absolute;width:2px;height:2px;border-radius:50%;background:radial-gradient(circle,rgba(255,224,150,.9),transparent);mix-blend-mode:screen;animation:pfloat linear infinite;}
  @keyframes pfloat{0%{transform:translateY(24px);opacity:0;}20%{opacity:.8;}100%{transform:translateY(-130px);opacity:0;}}
  .lorewrap{position:relative;}
  .art{position:relative;}
  .art-act{font-family:var(--font-book);font-weight:600;letter-spacing:.03em;font-size:.98rem;cursor:pointer;padding:.5rem 1.15rem .62rem;border:none;border-radius:2px 2px 3px 3px;color:#f1e2c6;clip-path:polygon(0 0,100% 0,100% 74%,50% 100%,0 74%);box-shadow:0 6px 12px -6px rgba(0,0,0,.6),inset 0 1px 1px rgba(255,255,255,.12);transition:transform .2s,filter .3s;}
  .art-acts{display:flex;gap:.5rem;flex-wrap:wrap;justify-content:center;}
  .gold-corner{position:absolute;width:26px;height:26px;z-index:3;pointer-events:none;border-color:rgba(198,160,90,.7);border-style:solid;border-width:0;}
  .gold-corner.tl{top:6px;left:6px;border-top-width:1.5px;border-left-width:1.5px;border-top-left-radius:4px;}
  .gold-corner.tr{top:6px;right:6px;border-top-width:1.5px;border-right-width:1.5px;border-top-right-radius:4px;}
  .gold-corner.bl{bottom:6px;left:6px;border-bottom-width:1.5px;border-left-width:1.5px;border-bottom-left-radius:4px;}
  .gold-corner.br{bottom:6px;right:6px;border-bottom-width:1.5px;border-right-width:1.5px;border-bottom-right-radius:4px;}
  .tome-ribbons{position:absolute;display:flex;z-index:4;pointer-events:none;}
  .ribbon{width:11px;border-radius:0 0 3px 3px;transform-origin:top center;box-shadow:0 4px 8px -3px rgba(0,0,0,.5);animation:sway 6.5s ease-in-out infinite;}
  .ribbon::after{content:"";position:absolute;bottom:-6px;left:0;right:0;height:8px;background:inherit;clip-path:polygon(0 0,100% 0,50% 100%);}
  .ribbon.r1{background:#7a2740;animation-delay:-.6s;} .ribbon.r2{background:#b98a3c;animation-delay:-2.1s;} .ribbon.r3{background:#4a2c3a;animation-delay:-3.4s;}
  @keyframes sway{0%,100%{transform:rotate(-2.2deg);}50%{transform:rotate(2.4deg);}}
  .tome-clasp{position:absolute;top:50%;right:-13px;transform:translateY(-50%);z-index:8;width:24px;height:56px;border:none;cursor:pointer;border-radius:3px;background:linear-gradient(90deg,#7a5a24,#e8c979 46%,#6f5220);box-shadow:0 5px 12px -3px rgba(0,0,0,.75),inset 0 1px 2px rgba(255,240,205,.6),inset 0 -2px 3px rgba(0,0,0,.4);transition:filter .3s;}
  .tome-clasp span{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:9px;height:9px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#3a2a12,#160f06);box-shadow:0 0 0 2px rgba(255,235,190,.35);}
  .tome-clasp:hover{filter:brightness(1.14);}
  .art.tome-book{display:flex;flex-direction:column;align-items:center;width:min(94vw,760px);max-width:760px;}
  .tome-wrap{position:relative;width:100%;padding:15px 17px 13px;border-radius:5px 9px 9px 5px;background:linear-gradient(135deg,#2b1b12,#180d09 55%,#231610);box-shadow:0 46px 120px -30px rgba(0,0,0,.92),inset 0 0 0 1px rgba(120,80,40,.45),inset 0 2px 24px rgba(0,0,0,.5);}
  .tome-wrap::before{content:"";position:absolute;inset:7px;border-radius:3px 7px 7px 3px;pointer-events:none;box-shadow:inset 0 0 0 1px rgba(160,116,64,.28);background:repeating-linear-gradient(93deg,rgba(255,235,200,.014) 0 2px,transparent 2px 6px);}
  .book-spread{position:relative;z-index:1;height:min(62vh,452px);display:grid;grid-template-columns:1fr 1fr;border-radius:2px;overflow:hidden;
    background:linear-gradient(135deg,#efe4c6,#e7d9b6 52%,#dccaa0);
    box-shadow:3px 0 0 #dccca6,5px 0 0 #d0bf95,7px 0 0 #c4b088,9px 0 1px -1px rgba(0,0,0,.45),-3px 0 0 #dccca6,-5px 0 0 #d0bf95,-7px 0 0 #c4b088,-9px 0 1px -1px rgba(0,0,0,.45),0 30px 60px -28px rgba(0,0,0,.7),inset 0 0 60px rgba(150,116,54,.14);}
  .book-page{position:relative;padding:clamp(1.1rem,2.6vw,1.8rem);overflow:auto;color:#3a2c1a;font-family:var(--font-book);display:flex;flex-direction:column;justify-content:center;}
  .book-page.left{box-shadow:inset -30px 0 52px -30px rgba(80,55,20,.66);}
  .book-page.right{box-shadow:inset 30px 0 52px -30px rgba(80,55,20,.66);}
  .book-gutter{position:absolute;left:50%;top:0;bottom:0;width:2px;transform:translateX(-50%);background:rgba(80,55,20,.32);}
  .tome-actions{position:relative;z-index:1;width:min(94vw,760px);max-width:760px;margin-top:-3px;padding:11px 20px 15px;border-radius:0 0 9px 5px;background:linear-gradient(135deg,#241610,#150c07);box-shadow:0 30px 66px -30px rgba(0,0,0,.82),inset 0 0 0 1px rgba(120,80,40,.4),inset 0 3px 10px rgba(0,0,0,.5);display:flex;justify-content:center;gap:.5rem;}
  .tome-actions .art-act:nth-child(1){background:#7a2740;} .tome-actions .art-act:nth-child(2){background:#8a6a2e;} .tome-actions .art-act:hover{transform:translateY(-2px);filter:brightness(1.09);}
  .fb-nav{position:absolute;top:0;bottom:0;width:24%;z-index:3;cursor:pointer;background:transparent;border:none;color:#5a4526;font-size:1.6rem;opacity:0;transition:opacity .3s;display:grid;place-items:center;}
  .book-spread:hover .fb-nav{opacity:.3;} .fb-nav:hover{opacity:.9!important;} .fb-nav.prev{left:0;} .fb-nav.next{right:0;}
  .fb-pager{position:absolute;bottom:.5rem;left:0;right:0;text-align:center;font-family:var(--font-machine);font-size:.5rem;letter-spacing:.2em;color:rgba(90,69,38,.6);z-index:3;pointer-events:none;}
  .book-page{cursor:pointer;}
  .tome-book .tome-ribbons{top:1px;right:24px;gap:7px;z-index:6;} .tome-book .ribbon.r1{height:120px;} .tome-book .ribbon.r2{height:98px;} .tome-book .ribbon.r3{height:136px;}
  /* housebook cinematic cover */
  .housebook{display:flex;flex-direction:column;align-items:center;}
  .hb-cover-stage{display:flex;flex-direction:column;align-items:center;gap:1.2rem;max-height:94vh;}
  .hb-cover{height:min(64vh,600px);max-width:88vw;position:relative;border-radius:3px 7px 7px 3px;overflow:hidden;box-shadow:0 50px 120px -26px rgba(0,0,0,.92),0 0 0 1px rgba(198,160,90,.2),-10px 0 22px -10px rgba(0,0,0,.7);background:#0a0710;}
  .hb-cover img{height:100%;width:auto;max-width:88vw;object-fit:contain;display:block;}
  .av.open .hb-cover{animation:hbCoverIn 1.15s var(--ease) both;}
  @keyframes hbCoverIn{0%{opacity:0;transform:translateY(46px) rotateY(-20deg) scale(.8);}100%{opacity:1;transform:translateY(0) rotateY(0) scale(1);}}
  .hb-cover-css{height:100%;width:min(46vh,360px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;padding:2rem;background:linear-gradient(135deg,#241019,#0e060c);}
  .hb-cover-css .fb-title{font-family:var(--font-display);font-size:2rem;color:var(--fb-foil,#e3b968);text-align:center;}
  .hb-cover-css .fb-crescent{font-size:2.6rem;color:var(--fb-foil,#e3b968);}
  .hb-blurb{font-family:var(--font-narrator);font-style:italic;font-size:.98rem;color:rgba(240,232,216,.66);text-align:center;max-width:44ch;margin:0;}
  .hb-opts{display:flex;flex-direction:column;gap:.6rem;align-items:center;}
  .hb-opt{font-family:var(--font-book);font-variant:small-caps;letter-spacing:.1em;font-size:1.1rem;padding:.58rem 2rem;border-radius:3px;cursor:pointer;transition:background .3s,color .3s;min-width:248px;text-align:center;background:transparent;}
  .hb-opt.primary{border:1px solid var(--fb-foil,#e3b968);color:var(--fb-foil,#e3b968);} .hb-opt.primary:hover{background:var(--fb-foil,#e3b968);color:#0a0710;}
  .hb-opt.buy{border:1px solid rgba(233,183,199,.6);color:#e9b7c7;} .hb-opt.buy:hover{background:#e9b7c7;color:#0a0710;}
  .hb-opt.ghost{border:none;color:rgba(240,232,216,.5);font-size:.95rem;letter-spacing:.14em;min-width:0;} .hb-opt.ghost:hover{color:rgba(240,232,216,.9);}
  .housebook-read{max-width:760px;}
  .hb-crest{display:flex;justify-content:center;align-items:center;height:100%;color:#4a3620;} .crestsvg{width:min(42%,160px);height:auto;}
  .housebook-read .book-page.right{justify-content:center;text-align:center;}
  .hb-tp-title{display:block;font-family:var(--font-display);font-weight:600;font-size:clamp(1.4rem,3.4vw,2rem);line-height:1.06;color:#33261a;}
  .hb-tp-sub{display:block;margin-top:.7rem;font-family:var(--font-book);font-style:italic;font-size:1rem;color:#7a5a3a;}
  .hb-tp-orn{display:block;margin:1.2rem 0;color:#9a5266;} .hb-tp-kind{display:block;font-family:var(--font-book);font-size:1.1rem;color:#8a3a50;}
  .hb-tp-by{display:block;margin-top:.4rem;font-family:var(--font-book);font-style:italic;font-size:.9rem;color:#7a5a3a;}
  .hb-tp-pen{display:block;margin-top:.3rem;font-family:var(--font-book);font-weight:600;letter-spacing:.28em;font-size:1rem;color:#33261a;}
  .fb-epi{display:block;font-family:var(--font-display);font-style:italic;font-size:clamp(1.15rem,2.7vw,1.55rem);line-height:1.42;color:#3a2c1a;} .fb-epi-by{display:block;margin-top:1.1rem;font-family:var(--font-book);font-size:.92rem;color:#7a5a2e;}
  .fb-chh{display:block;font-family:var(--font-machine);font-size:.56rem;letter-spacing:.32em;text-transform:uppercase;color:#9a5266;margin-bottom:.7rem;} .fb-cht{display:block;font-family:var(--font-display);font-weight:600;font-size:clamp(1.35rem,3.2vw,1.95rem);line-height:1.08;color:#33261a;} .fb-chs{display:block;margin-top:.7rem;font-family:var(--font-book);font-style:italic;font-size:1rem;color:#7a5a3a;}
  .fb-sec{display:block;font-family:var(--font-display);font-weight:600;font-size:1.14rem;color:#8a3a50;margin-bottom:.85rem;} .fb-body{display:block;font-family:var(--font-book);font-size:1.03rem;line-height:1.58;color:#3a2c1a;text-align:left;}
  .fb-pull2{font-family:var(--font-display);font-style:italic;font-size:clamp(1.2rem,3vw,1.65rem);line-height:1.4;color:#5a3040;} .fb-disc{display:block;font-family:var(--font-book);font-size:1rem;line-height:1.5;color:#3a2c1a;text-align:left;}
  .fb-close{display:block;font-family:var(--font-display);font-size:clamp(1.3rem,3.1vw,1.75rem);line-height:1.34;color:#33261a;} .fb-close2{display:block;margin-top:1.1rem;font-family:var(--font-script);font-size:1.7rem;color:#8a3a50;}
  .fb-soon{display:block;font-family:var(--font-book);font-style:italic;font-size:1.1rem;color:#6a5836;} .fb-soon.fb-muted{color:#8a7a86;}
  @media (max-width:600px){ .art.tome-book,.tome-actions,.art.housebook{width:96vw;max-width:96vw;} .book-spread{height:min(56vh,392px);} .book-page{padding:.9rem 1rem;} }
  @media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;}}
</style>
</head>
<body>
  <div class="bg-img"></div><div class="bg"></div><div class="bg-veil"></div><div class="dust" id="dust"></div>
  <a class="home" href="/">&larr; The Front Door</a>

  <div class="wrap">
    <div class="lib-open">
      <div class="rule"></div>
      <h1 class="lib-title">The Library</h1>
      <p class="lib-sub">Some books wait for the right person.</p>
      <div class="rule"></div>
      <div class="scrollcue">Come in &nbsp;&darr;</div>
    </div>

    <section id="keeper">
      <div class="keeper">
        <div class="seal">&#10086;</div>
        <div>
          <p class="k-from">The Keeper left something for you</p>
          <p class="k-body" id="keeperNote">Welcome in. The fire’s lit, and the shelves are patient. If you’re not sure where to begin — begin here.</p>
          <p class="k-rec"><button class="k-link" id="keeperRec">&#128216; Mastering Your Dark Feminine Energy &rarr;</button></p>
        </div>
      </div>
    </section>

    <section id="featured">
      <p class="feat-now">Now waiting</p>
      <div class="featured" style="margin-top:1rem">
        <div class="feat-cover" id="featCover"><img src="/assets/books/dark-feminine-energy.png" alt="Mastering Your Dark Feminine Energy"/></div>
        <div class="feat-body">
          <p class="feat-name">Mastering Your Dark Feminine Energy</p>
          <p class="feat-kind">A House Book &middot; by Moonpixiee</p>
          <p class="feat-blurb">Your initiation into the most magnetic, confident, and untouchable version of you — reclaim your power, set unshakable boundaries, and stop seeking permission to take up space.</p>
          <button class="read-link" id="featRead">Read &rarr;</button>
        </div>
      </div>
    </section>

    <section id="housebooks">
      <p class="eyebrow">House Books</p><h2 class="shelf-title">Written in the House</h2><div class="shelf-hr"></div>
      <div class="spines" id="bookSpines"></div>
      <p class="shelf-note">Books written by Moonpixiee. This shelf is always first.</p>
    </section>

    <section id="letters">
      <p class="eyebrow">Letters</p><h2 class="shelf-title">Read one by the fire</h2><div class="shelf-hr"></div>
      <div class="cards" id="letterCards"></div>
      <p class="shelf-note">Letters live here forever. Not newsletters — letters.</p>
    </section>

    <section id="moonnotes">
      <p class="eyebrow">Moon Notes</p><h2 class="shelf-title">Small things, kept</h2><div class="shelf-hr"></div>
      <div class="cards" id="moonCards"></div>
      <p class="shelf-note">Tiny thoughts, observations, one-minute reads.</p>
    </section>

    <section id="readinglists">
      <p class="eyebrow">Reading Lists</p><h2 class="shelf-title">Books that changed her</h2><div class="shelf-hr"></div>
      <div class="cards" id="listCards"></div>
      <p class="shelf-note">Not books she wrote — books she’d hand you. Curated by a real person.</p>
    </section>

    <footer>House of Luna</footer>
  </div>

  <div class="toast" id="toast"></div>
  <div class="av" id="av"><div class="av-veil"></div><div class="particles" id="avp"></div><div class="av-hold" id="avhold"></div></div>

<script>
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var BOOKS=${JSON.stringify(BOOKS)}, LETTERS=${JSON.stringify(LETTERS)}, MOONNOTES=${JSON.stringify(MOONNOTES)}, READINGLISTS=${JSON.stringify(READINGLISTS)};
  var CREST_SVG='<svg viewBox="0 0 120 120" class="crestsvg" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="1"><circle cx="60" cy="60" r="40" opacity=".5"/></g><path d="M72 36a30 30 0 1 0 12 40A24 24 0 1 1 72 36z" fill="currentColor"/><g stroke="currentColor" stroke-width="1" fill="none" opacity=".7"><path d="M60 14c-3 6-3 11 0 15 3-4 3-9 0-15zM60 106c-3-6-3-11 0-15 3 4 3 9 0 15zM14 60c6-3 11-3 15 0-4 3-9 3-15 0zM106 60c-6-3-11-3-15 0 4 3 9 3 15 0zM28 28c6 1 10 4 12 9-5-2-9-5-12-9zM92 92c-6-1-10-4-12-9 5 2 9 5 12 9zM92 28c-1 6-4 10-9 12 2-5 5-9 9-12zM28 92c1-6 4-10 9-12-2 5-5 9-9 12z"/></g></svg>';

  // dust
  var dust=document.getElementById('dust');
  for(var i=0;i<(reduce?8:22);i++){ var m=document.createElement('span'); m.className='mote'; m.style.left=(4+Math.random()*92).toFixed(1)+'%'; m.style.top=(6+Math.random()*90).toFixed(1)+'%'; if(reduce){m.style.opacity='.3';}else{m.style.animation='rise '+(8+Math.random()*7).toFixed(1)+'s linear '+(-Math.random()*12).toFixed(1)+'s infinite';} dust.appendChild(m); }

  // collection + Supabase (so the House remembers what you own, across devices)
  var SB_URL='https://pcgzhlxjcjdeweygdzci.supabase.co', SB_KEY='sb_publishable_TKJjv10k4Gg6lzDrwpopkQ_-Vf3yO_x';
  var sb=(window.supabase&&window.supabase.createClient)?window.supabase.createClient(SB_URL,SB_KEY):null;
  var KEY='hol_collection', holRoomId=null;
  function getColl(){ try{return JSON.parse(localStorage.getItem(KEY)||'[]');}catch(e){return [];} }
  function setColl(c){ try{localStorage.setItem(KEY,JSON.stringify(c));}catch(e){} }
  function inColl(id){ return getColl().some(function(x){return x.id===id;}); }
  function keep(it){ var c=getColl(); var src=it.zone||'the Library'; if(!c.some(function(x){return x.id===it.id;})){ c.push({id:it.id,title:it.title,kind:it.kind,zone:src}); setColl(c); }
    if(sb&&holRoomId){ try{ sb.from('room_items').upsert({room_id:holRoomId,item_id:it.id,item_type:it.kind,title:it.title,source:src},{onConflict:'room_id,item_id'}).then(function(){},function(){}); }catch(e){} } }
  function houseSync(){ if(!(sb&&sb.auth&&sb.auth.getUser)) return; sb.auth.getUser().then(function(r){ var u=r&&r.data&&r.data.user; if(!u) return;
    sb.from('rooms').select('id').eq('user_id',u.id).limit(1).then(function(rr){ var room=rr&&rr.data&&rr.data[0]; if(!room) return; holRoomId=room.id;
      sb.from('room_items').select('item_id,item_type,title,source').eq('room_id',room.id).then(function(ri){ if(!(ri&&ri.data)) return;
        var c=getColl(),seen={}; c.forEach(function(x){seen[x.id]=1;}); var ch=false;
        ri.data.forEach(function(it){ if(!seen[it.item_id]){ c.push({id:it.item_id,title:it.title,kind:it.item_type,zone:it.source}); ch=true; } });
        if(ch){ setColl(c); renderShelves(); } }); }); }).catch(function(){}); }

  // toast
  var toastEl=document.getElementById('toast'),tt; function toast(msg){ toastEl.textContent=msg; toastEl.classList.add('show'); clearTimeout(tt); tt=setTimeout(function(){toastEl.classList.remove('show');},2600); }

  // ===== the cinematic House-Book viewer =====
  var av=document.getElementById('av'),avhold=document.getElementById('avhold'),avp=document.getElementById('avp');
  function spawnParticles(n){ avp.innerHTML=''; for(var i=0;i<n;i++){ var p=document.createElement('span'); p.className='p'; p.style.left=(6+Math.random()*88).toFixed(1)+'%'; p.style.top=(30+Math.random()*60).toFixed(1)+'%'; p.style.animationDuration=(4+Math.random()*5).toFixed(1)+'s'; p.style.animationDelay=(-Math.random()*5).toFixed(1)+'s'; avp.appendChild(p); } }
  function close(){ av.className='av'; avhold.innerHTML=''; avp.innerHTML=''; }
  av.addEventListener('click',function(e){ if(e.target===av||e.target.classList.contains('av-veil')) close(); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') close(); });
  function openBook(item){
    if(!item) return;
    av.className='av open'; av.style.setProperty('--fb-cover',item.cover); av.style.setProperty('--fb-foil',item.foil);
    var owned=inColl('book-'+item.slug), buyable=!!item.href;
    var coverInner=item.coverImg?'<img id="hbcimg" src="'+item.coverImg+'" alt="'+item.title+'"/>':'<div class="hb-cover-css"><span class="fb-crescent">\\u263D</span><span class="fb-title">'+item.title+'</span></div>';
    var opts=owned?'<button class="hb-opt primary" id="hbread">Continue Reading</button>':'<button class="hb-opt primary" id="hbread">Read Preview</button>'+(buyable?'<button class="hb-opt buy" id="hbbuy">Purchase &middot; $'+item.price+'</button>':'');
    opts+='<button class="hb-opt ghost" id="hbreturn">Return to the Library</button>';
    avhold.innerHTML='<div class="lorewrap"><div class="art housebook">'+
      '<div class="hb-cover-stage" id="hbcoverstage"><div class="hb-cover">'+coverInner+'</div><p class="hb-blurb">'+(item.blurb||'')+'</p><div class="hb-opts">'+opts+'</div></div>'+
      '<div class="hb-read" id="hbreadstage" style="display:none"><div class="art tome-book housebook-read"><div class="tome-wrap">'+
        '<div class="tome-ribbons"><span class="ribbon r1"></span><span class="ribbon r2"></span><span class="ribbon r3"></span></div>'+
        '<div class="book-spread"><span class="gold-corner tl"></span><span class="gold-corner tr"></span><span class="gold-corner bl"></span><span class="gold-corner br"></span>'+
          '<div class="book-page left" id="hbL"></div><div class="book-page right" id="hbR"></div><span class="book-gutter"></span>'+
          '<button class="fb-nav prev" id="hbprev">\\u2039</button><button class="fb-nav next" id="hbnext">\\u203A</button><span class="fb-pager" id="hbpager"></span></div>'+
        '<button class="tome-clasp" id="hbclose"><span></span></button></div>'+
        '<div class="tome-actions">'+((owned||!buyable)?'':'<button class="art-act" id="hbbuy2">Purchase &middot; $'+item.price+'</button>')+'<button class="art-act" id="hbback">Return to the Library</button></div></div></div>'+
    '</div></div>';
    spawnParticles(8);
    var ci=document.getElementById('hbcimg'); if(ci){ ci.onerror=function(){ var c=document.querySelector('.hb-cover'); ci.remove(); if(c) c.innerHTML='<div class="hb-cover-css"><span class="fb-crescent">\\u263D</span><span class="fb-title">'+item.title+'</span></div>'; }; }
    var titlePage={ l:'<span class="hb-crest">'+CREST_SVG+'</span>', r:'<span class="hb-tp-title">'+item.title+'</span>'+(item.tagline?'<span class="hb-tp-sub">'+item.tagline+'</span>':'')+'<span class="hb-tp-orn">\\u2726</span><span class="hb-tp-kind">A House Book</span><span class="hb-tp-by">by</span><span class="hb-tp-pen">'+((item.pen?item.pen.replace(/^writing as\\s*/i,''):item.author)||'').toUpperCase()+'</span>' };
    var pages=[titlePage].concat(item.spread||[]);
    var pg=0,L=document.getElementById('hbL'),R=document.getElementById('hbR'),pager=document.getElementById('hbpager'),prev=document.getElementById('hbprev'),next=document.getElementById('hbnext');
    function draw(){ var s=pages[pg]; L.innerHTML=s.l; R.innerHTML=s.r; pager.textContent=(pg+1)+' / '+pages.length; prev.style.visibility=pg?'visible':'hidden'; next.style.visibility=(pg<pages.length-1)?'visible':'hidden'; }
    function go(d){ var n=pg+d; if(n>=0&&n<pages.length){ pg=n; draw(); } }
    prev.onclick=function(e){ e.stopPropagation(); go(-1); }; next.onclick=function(e){ e.stopPropagation(); go(1); };
    L.onclick=function(){ go(-1); }; R.onclick=function(){ go(1); };
    function openRead(){ document.getElementById('hbcoverstage').style.display='none'; document.getElementById('hbreadstage').style.display='block'; pg=0; draw(); }
    document.getElementById('hbread').onclick=openRead;
    document.getElementById('hbreturn').onclick=close; document.getElementById('hbclose').onclick=close; document.getElementById('hbback').onclick=close;
    var b1=document.getElementById('hbbuy'),b2=document.getElementById('hbbuy2');
    function purchase(){ if(!item.href){ toast(item.soon||'The shop opens soon.'); return; } try{window.open(item.href,'_blank');}catch(e){} keep({id:'book-'+item.slug,title:item.title,kind:'Book',zone:'Luna’s shelves'}); toast(item.returned||'The House remembers what you brought home.'); var x=document.getElementById('hbbuy'); if(x) x.remove(); var rd=document.getElementById('hbread'); if(rd) rd.textContent='Continue Reading'; var y=document.getElementById('hbbuy2'); if(y) y.remove(); }
    if(b1) b1.onclick=purchase; if(b2) b2.onclick=purchase;
  }
  function bookBySlug(s){ for(var i=0;i<BOOKS.length;i++){ if(BOOKS[i].slug===s) return BOOKS[i]; } return null; }

  // render shelves
  function renderShelves(){
    var bs=document.getElementById('bookSpines'); bs.innerHTML='';
    BOOKS.forEach(function(it){ var b=document.createElement('button'); b.className='spine'+(it.soonTitle?' soon':''); b.style.setProperty('--sp',it.cover); b.style.setProperty('--spf',it.foil); b.setAttribute('aria-label',it.short||it.title); b.innerHTML='<span class="sp-title">'+(it.short||it.title)+'</span>'; b.onclick=function(){ openBook(it); }; bs.appendChild(b); });
    function cards(elId,arr,note){ var el=document.getElementById(elId); el.innerHTML=''; arr.forEach(function(o){ var c=document.createElement('button'); c.className='card'; c.innerHTML='<div class="c-name">'+o.n+'</div><div class="c-sub">'+o.s+'</div>'; c.onclick=function(){ toast(note); }; el.appendChild(c); }); }
    cards('letterCards',LETTERS,'The Keeper is still shelving the Letters.');
    cards('moonCards',MOONNOTES,'The Moon Notes open soon.');
    cards('listCards',READINGLISTS,'These Reading Lists are being gathered.');
  }
  renderShelves();

  // the Keeper's note — quiet, personalised (never a chatbot)
  function keeperNote(){
    var el=document.getElementById('keeperNote'); if(!el) return;
    var v=0; try{ v=parseInt(localStorage.getItem('hol_lib_visits')||'0',10)||0; localStorage.setItem('hol_lib_visits',(v+1)); }catch(e){}
    var owns=inColl('book-dark-feminine-energy'); var keeps=getColl().length;
    var msg;
    if(owns){ msg='Back again. Your copy is where you left it — the House kept your page warm. When you’re ready, there’s more waiting on the shelves.'; }
    else if(v>=2){ msg='You’ve been in more than once now. That usually means a book is trying to find you. Tonight — begin here.'; }
    else if(keeps>0){ msg='You’ve kept a few things from the House already. Whoever you’re becoming, this one belongs on your shelf next.'; }
    else { msg='Welcome in. The fire’s lit, and the shelves are patient. If you’re not sure where to begin — begin here.'; }
    el.textContent=msg;
  }
  keeperNote();

  // openers
  var dfe=bookBySlug('dark-feminine-energy');
  document.getElementById('featRead').onclick=function(){ openBook(dfe); };
  document.getElementById('featCover').onclick=function(){ openBook(dfe); };
  document.getElementById('keeperRec').onclick=function(){ openBook(dfe); };

  houseSync();
  if(sb&&sb.auth&&sb.auth.onAuthStateChange){ sb.auth.onAuthStateChange(function(ev,session){ if(session) houseSync(); }); }
})();
</script>
</body>
</html>`;

fs.writeFileSync('/tmp/velvet-build/thelibrary.html', page());
console.log('Wrote thelibrary.html');
