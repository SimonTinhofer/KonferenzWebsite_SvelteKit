import{n as d,s as k}from"./scheduler.afOcmUe7.js";const u=[];function p(t,e=d){let n;const o=new Set;function a(s){if(k(t,s)&&(t=s,n)){const c=!u.length;for(const i of o)i[1](),u.push(i,t);if(c){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function l(s){a(s(t))}function r(s,c=d){const i=[s,c];return o.add(i),o.size===1&&(n=e(a,l)||d),s(t),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:a,update:l,subscribe:r}}const m=globalThis.__sveltekit_ai4m45?.base??"",E=globalThis.__sveltekit_ai4m45?.assets??m,A="1705761641707",I="sveltekit:snapshot",w="sveltekit:scroll",y="sveltekit:states",N="sveltekit:pageurl",U="sveltekit:history",L="sveltekit:navigation",_={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},g=location.origin;function O(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Y(){return{x:pageXOffset,y:pageYOffset}}function f(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const b={..._,"":_.hover};function v(t){let e=t.assignedSlot??t.parentNode;return e?.nodeType===11&&(e=e.host),e}function x(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=v(t)}}function P(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o=t instanceof SVGAElement?t.target.baseVal:t.target,a=!n||!!o||T(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),l=n?.origin===g&&t.hasAttribute("download");return{url:n,external:a,target:o,download:l}}function V(t){let e=null,n=null,o=null,a=null,l=null,r=null,s=t;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),a===null&&(a=f(s,"preload-data")),e===null&&(e=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),l===null&&(l=f(s,"reload")),r===null&&(r=f(s,"replacestate")),s=v(s);function c(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:b[o??"off"],preload_data:b[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(l),replace_state:c(r)}}function h(t){const e=p(t);let n=!0;function o(){n=!0,e.update(r=>r)}function a(r){n=!1,e.set(r)}function l(r){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&r(s=c)})}return{notify:o,set:a,subscribe:l}}function R(){const{set:t,subscribe:e}=p(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==A;return r&&(t(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:e,check:o}}function T(t,e){return t.origin!==g||!t.pathname.startsWith(e)}function G(t){t.client}const K={url:h({}),page:h({}),navigating:p(null),updated:R()};export{U as H,L as N,N as P,w as S,y as a,I as b,V as c,K as d,m as e,x as f,P as g,_ as h,T as i,G as j,g as o,O as r,Y as s};
