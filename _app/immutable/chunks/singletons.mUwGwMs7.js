import{n as d,s as k}from"./scheduler.afOcmUe7.js";const u=[];function p(t,e=d){let s;const o=new Set;function a(n){if(k(t,n)&&(t=n,s)){const c=!u.length;for(const i of o)i[1](),u.push(i,t);if(c){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function l(n){a(n(t))}function r(n,c=d){const i=[n,c];return o.add(i),o.size===1&&(s=e(a,l)||d),n(t),()=>{o.delete(i),o.size===0&&s&&(s(),s=null)}}return{set:a,update:l,subscribe:r}}const E=globalThis.__sveltekit_lsuiic?.base??"",m=globalThis.__sveltekit_lsuiic?.assets??E,A="1705266828992",I="sveltekit:snapshot",w="sveltekit:scroll",y="sveltekit:states",N="sveltekit:pageurl",U="sveltekit:history",L="sveltekit:navigation",_={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},g=location.origin;function O(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const s=document.getElementsByTagName("base");e=s.length?s[0].href:document.URL}return new URL(t,e)}function Y(){return{x:pageXOffset,y:pageYOffset}}function f(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const b={..._,"":_.hover};function v(t){let e=t.assignedSlot??t.parentNode;return e?.nodeType===11&&(e=e.host),e}function x(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=v(t)}}function P(t,e){let s;try{s=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o=t instanceof SVGAElement?t.target.baseVal:t.target,a=!s||!!o||T(s,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),l=s?.origin===g&&t.hasAttribute("download");return{url:s,external:a,target:o,download:l}}function V(t){let e=null,s=null,o=null,a=null,l=null,r=null,n=t;for(;n&&n!==document.documentElement;)o===null&&(o=f(n,"preload-code")),a===null&&(a=f(n,"preload-data")),e===null&&(e=f(n,"keepfocus")),s===null&&(s=f(n,"noscroll")),l===null&&(l=f(n,"reload")),r===null&&(r=f(n,"replacestate")),n=v(n);function c(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:b[o??"off"],preload_data:b[a??"off"],keepfocus:c(e),noscroll:c(s),reload:c(l),replace_state:c(r)}}function h(t){const e=p(t);let s=!0;function o(){s=!0,e.update(r=>r)}function a(r){s=!1,e.set(r)}function l(r){let n;return e.subscribe(c=>{(n===void 0||s&&c!==n)&&r(n=c)})}return{notify:o,set:a,subscribe:l}}function R(){const{set:t,subscribe:e}=p(!1);let s;async function o(){clearTimeout(s);try{const a=await fetch(`${m}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==A;return r&&(t(!0),clearTimeout(s)),r}catch{return!1}}return{subscribe:e,check:o}}function T(t,e){return t.origin!==g||!t.pathname.startsWith(e)}function G(t){t.client}const K={url:h({}),page:h({}),navigating:p(null),updated:R()};export{U as H,L as N,N as P,w as S,y as a,I as b,V as c,K as d,E as e,x as f,P as g,_ as h,T as i,G as j,g as o,O as r,Y as s};
