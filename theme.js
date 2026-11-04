// Colour theme: light, sepia, dark. Loaded in <head> (not deferred) so the saved
// theme is applied before first paint. No dependencies.
(function(){
  const THEMES=['light','sepia','dark'];
  const LABELS={light:'Light',sepia:'Sepia',dark:'Dark'};
  const ICONS={
    light:'<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/>',
    sepia:'<path d="M12 6.5C10 5 7.3 4.5 4 4.5v13c3.3 0 6 .5 8 2 2-1.5 4.7-2 8-2v-13c-3.3 0-6 .5-8 2z"/><path d="M12 6.5v13"/>',
    dark:'<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>'
  };
  const root=document.documentElement;
  const read=()=>{try{return localStorage.getItem('theme')}catch(e){return null}};
  const save=t=>{try{localStorage.setItem('theme',t)}catch(e){}};
  // Light is the default; a visitor's own pick is remembered.
  const initial=()=>{
    const saved=read();
    return THEMES.includes(saved)?saved:'light';
  };

  // Diagrams drawn for the site (data-themed) ship one file per theme:
  // name.svg (light), name-sepia.svg, name-dark.svg.
  const swapFigures=t=>{
    document.querySelectorAll('img[data-themed]').forEach(img=>{
      const base=img.getAttribute('src').replace(/-(sepia|dark)(\.svg)$/,'$2');
      const next=t==='light'?base:base.replace(/\.svg$/,`-${t}.svg`);
      if(img.getAttribute('src')!==next)img.setAttribute('src',next);
    });
  };
  const paintButtons=t=>{
    const nextTheme=THEMES[(THEMES.indexOf(t)+1)%THEMES.length];
    document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
      btn.innerHTML=`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[t]}</svg><span class="theme-toggle-label">${LABELS[t]}</span>`;
      btn.setAttribute('aria-label',`Colour theme: ${LABELS[t]}. Switch to ${LABELS[nextTheme]}`);
      btn.title=`${LABELS[t]} theme · click for ${LABELS[nextTheme]}`;
    });
  };
  const apply=t=>{
    root.dataset.theme=t;
    if(document.readyState!=='loading'){swapFigures(t);paintButtons(t);}
  };

  apply(initial());
  document.addEventListener('DOMContentLoaded',()=>{
    const t=root.dataset.theme;
    swapFigures(t);paintButtons(t);
    document.querySelectorAll('[data-theme-toggle]').forEach(btn=>btn.addEventListener('click',()=>{
      const cur=root.dataset.theme;
      const next=THEMES[(THEMES.indexOf(cur)+1)%THEMES.length];
      save(next);apply(next);
    }));
  });
})();