import{n as d,s as k}from"./scheduler.afOcmUe7.js";const u=[];function p(e,t=d){let s;const o=new Set;function a(n){if(k(e,n)&&(e=n,s)){const c=!u.length;for(const i of o)i[1](),u.push(i,e);if(c){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function l(n){a(n(e))}function r(n,c=d){const i=[n,c];return o.add(i),o.size===1&&(s=t(a,l)||d),n(e),()=>{o.delete(i),o.size===0&&s&&(s(),s=null)}}return{set:a,update:l,subscribe:r}}const E=globalThis.__sveltekit_wze48s?.base??"",m=globalThis.__sveltekit_wze48s?.assets??E,A="1705764192849",S="sveltekit:snapshot",I="sveltekit:scroll",y="sveltekit:states",N="sveltekit:pageurl",U="sveltekit:history",L="sveltekit:navigation",_={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},g=location.origin;function O(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const s=document.getElementsByTagName("base");t=s.length?s[0].href:document.URL}return new URL(e,t)}function Y(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function v(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function x(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function P(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!s||!!o||T(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=s?.origin===g&&e.hasAttribute("download");return{url:s,external:a,target:o,download:l}}function V(e){let t=null,s=null,o=null,a=null,l=null,r=null,n=e;for(;n&&n!==document.documentElement;)o===null&&(o=f(n,"preload-code")),a===null&&(a=f(n,"preload-data")),t===null&&(t=f(n,"keepfocus")),s===null&&(s=f(n,"noscroll")),l===null&&(l=f(n,"reload")),r===null&&(r=f(n,"replacestate")),n=v(n);function c(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:b[o??"off"],preload_data:b[a??"off"],keepfocus:c(t),noscroll:c(s),reload:c(l),replace_state:c(r)}}function h(e){const t=p(e);let s=!0;function o(){s=!0,t.update(r=>r)}function a(r){s=!1,t.set(r)}function l(r){let n;return t.subscribe(c=>{(n===void 0||s&&c!==n)&&r(n=c)})}return{notify:o,set:a,subscribe:l}}function R(){const{set:e,subscribe:t}=p(!1);let s;async function o(){clearTimeout(s);try{const a=await fetch(`${m}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==A;return r&&(e(!0),clearTimeout(s)),r}catch{return!1}}return{subscribe:t,check:o}}function T(e,t){return e.origin!==g||!e.pathname.startsWith(t)}function z(e){e.client}const G={url:h({}),page:h({}),navigating:p(null),updated:R()};export{U as H,L as N,N as P,I as S,y as a,S as b,V as c,G as d,E as e,x as f,P as g,_ as h,T as i,z as j,g as o,O as r,Y as s};
