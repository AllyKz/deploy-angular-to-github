"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3595],{3178:(b,E,r)=>{r.d(E,{d:()=>d,w:()=>s});const s=typeof window<"u"?window:void 0,d=typeof document<"u"?document:void 0},3595:(b,E,r)=>{r.r(E),r.d(E,{startTapClick:()=>g});var s=r(3178),d=r(3630);const g=o=>{if(void 0===s.d)return;let t,m,c,i=10*-v,u=0;const O=o.getBoolean("animated",!0)&&o.getBoolean("rippleEffect",!0),p=new WeakMap,w=e=>{i=(0,d.u)(e),D(e)},L=()=>{c&&clearTimeout(c),c=void 0,t&&(I(!1),t=void 0)},A=e=>{t||R(k(e),e)},D=e=>{R(void 0,e)},R=(e,n)=>{if(e&&e===t)return;c&&clearTimeout(c),c=void 0;const{x:f,y:a}=(0,d.v)(n);if(t){if(p.has(t))throw new Error("internal error");t.classList.contains(l)||_(t,f,a),I(!0)}if(e){const M=p.get(e);M&&(clearTimeout(M),p.delete(e)),e.classList.remove(l);const S=()=>{_(e,f,a),c=void 0};h(e)?S():c=setTimeout(S,y)}t=e},_=(e,n,f)=>{if(u=Date.now(),e.classList.add(l),!O)return;const a=P(e);null!==a&&(C(),m=a.addRipple(n,f))},C=()=>{void 0!==m&&(m.then(e=>e()),m=void 0)},I=e=>{C();const n=t;if(!n)return;const f=T-Date.now()+u;if(e&&f>0&&!h(n)){const a=setTimeout(()=>{n.classList.remove(l),p.delete(n)},T);p.set(n,a)}else n.classList.remove(l)};s.d.addEventListener("ionGestureCaptured",L),s.d.addEventListener("touchstart",e=>{i=(0,d.u)(e),A(e)},!0),s.d.addEventListener("touchcancel",w,!0),s.d.addEventListener("touchend",w,!0),s.d.addEventListener("pointercancel",L,!0),s.d.addEventListener("mousedown",e=>{if(2===e.button)return;const n=(0,d.u)(e)-v;i<n&&A(e)},!0),s.d.addEventListener("mouseup",e=>{const n=(0,d.u)(e)-v;i<n&&D(e)},!0)},k=o=>{if(void 0===o.composedPath)return o.target.closest(".ion-activatable");{const i=o.composedPath();for(let u=0;u<i.length-2;u++){const t=i[u];if(!(t instanceof ShadowRoot)&&t.classList.contains("ion-activatable"))return t}}},h=o=>o.classList.contains("ion-activatable-instant"),P=o=>{if(o.shadowRoot){const i=o.shadowRoot.querySelector("ion-ripple-effect");if(i)return i}return o.querySelector("ion-ripple-effect")},l="ion-activated",y=100,T=150,v=2500}}]);