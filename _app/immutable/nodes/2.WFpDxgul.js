import{s as P,y as sD,n as w,o as oD,b as L}from"../chunks/BB-uEa8F.js";import{S as j,i as G,e as m,s as S,c as g,a as x,d as v,f as z,o as Z,m as E,g as O,h as c,p as q,q as R,r as X,u as Y,v as J,w as Q}from"../chunks/BLgPjTDC.js";import{g as DD,b as rD,n as ED,a as dD}from"../chunks/DIkQJz1Y.js";const uD=""+new URL("../assets/KIIcon.B682gV76.svg",import.meta.url).href;/*!
 * strings: 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cD=/(?:^\s+|\s+$)/g,fD=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function lD(t){var D=t.nodeType,e="";if(D===1||D===9||D===11){if(typeof t.textContent=="string")return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)e+=lD(t)}else if(D===3||D===4)return t.nodeValue;return e}function eD(t,D,e,i,n){for(var u=t.firstChild,s=[],F;u;)u.nodeType===3?(F=(u.nodeValue+"").replace(/^\n+/g,""),i||(F=F.replace(/\s+/g," ")),s.push.apply(s,CD(F,D,e,i,n))):(u.nodeName+"").toLowerCase()==="br"?s[s.length-1]+="<br>":s.push(u.outerHTML),u=u.nextSibling;if(!n)for(F=s.length;F--;)s[F]==="&"&&s.splice(F,1,"&amp;");return s}function CD(t,D,e,i,n){if(t+="",e&&(t=t.trim?t.trim():t.replace(cD,"")),D&&D!=="")return t.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(D);for(var u=[],s=t.length,F=0,f,a;F<s;F++)a=t.charAt(F),(a.charCodeAt(0)>=55296&&a.charCodeAt(0)<=56319||t.charCodeAt(F+1)>=65024&&t.charCodeAt(F+1)<=65039)&&(f=((t.substr(F,12).split(fD)||[])[1]||"").length||2,a=t.substr(F,f),u.emoji=1,F+=f-1),u.push(n?a:a===">"?"&gt;":a==="<"?"&lt;":i&&a===" "&&(t.charAt(F-1)===" "||t.charAt(F+1)===" ")?"&nbsp;":a);return u}/*!
 * TextPlugin 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var V,K,hD=function(){return V||typeof window<"u"&&(V=window.gsap)&&V.registerPlugin&&V},U={version:"3.12.7",name:"text",init:function(D,e,i){typeof e!="object"&&(e={value:e});var n=D.nodeName.toUpperCase(),u=this,s=e,F=s.newClass,f=s.oldClass,a=s.preserveSpaces,h=s.rtl,k=u.delimiter=e.delimiter||"",p=u.fillChar=e.fillChar||(e.padSpace?"&nbsp;":""),l,d,o,C,A,T,B,b;if(u.svg=D.getBBox&&(n==="TEXT"||n==="TSPAN"),!("innerHTML"in D)&&!u.svg)return!1;if(u.target=D,!("value"in e)){u.text=u.original=[""];return}for(o=eD(D,k,!1,a,u.svg),K||(K=document.createElement("div")),K.innerHTML=e.value,d=eD(K,k,!1,a,u.svg),u.from=i._from,(u.from||h)&&!(h&&u.from)&&(n=o,o=d,d=n),u.hasClass=!!(F||f),u.newClass=h?f:F,u.oldClass=h?F:f,n=o.length-d.length,l=n<0?o:d,n<0&&(n=-n);--n>-1;)l.push(p);if(e.type==="diff"){for(C=0,A=[],T=[],B="",n=0;n<d.length;n++)b=d[n],b===o[n]?B+=b:(A[C]=B+b,T[C++]=B+o[n],B="");d=A,o=T,B&&(d.push(B),o.push(B))}e.speed&&i.duration(Math.min(.05/e.speed*l.length,e.maxDuration||9999)),u.rtl=h,u.original=o,u.text=d,u._props.push("text")},render:function(D,e){D>1?D=1:D<0&&(D=0),e.from&&(D=1-D);var i=e.text,n=e.hasClass,u=e.newClass,s=e.oldClass,F=e.delimiter,f=e.target,a=e.fillChar,h=e.original,k=e.rtl,p=i.length,l=(k?1-D:D)*p+.5|0,d,o,C;n&&D?(d=u&&l,o=s&&l!==p,C=(d?"<span class='"+u+"'>":"")+i.slice(0,l).join(F)+(d?"</span>":"")+(o?"<span class='"+s+"'>":"")+F+h.slice(l).join(F)+(o?"</span>":"")):C=i.slice(0,l).join(F)+F+h.slice(l).join(F),e.svg?f.textContent=C:f.innerHTML=a==="&nbsp;"&&~C.indexOf("  ")?C.split("  ").join("&nbsp;&nbsp;"):C}};U.splitInnerHTML=eD;U.emojiSafeSplit=CD;U.getText=lD;hD()&&V.registerPlugin(U);function mD(t){let D,e,i,n,u,s,F,f,a,h,k,p,l,d='<div class="userText svelte-k8rn6k">Erstelle ein Konzept für Generationenmanagement im Betrieb!</div>',o,C,A,T,B,b,I,r,_,H=`<div class="heroContainer svelte-k8rn6k"><h1 class="svelte-k8rn6k">Automatisierung der Arbeit</h1> <h3 class="svelte-k8rn6k">2. Fachtagung am 10.3.2025</h3> <h2 class="svelte-k8rn6k">Was bedeutet GenAI für<br/>die Arbeitswelt?</h2> <img src="${uD}" alt="" class="heroIcon svelte-k8rn6k"/></div>`;return{c(){D=m("div"),e=m("div"),i=S(),n=m("div"),u=m("div"),s=m("img"),f=S(),a=m("div"),h=m("div"),k=S(),p=m("div"),l=m("div"),l.innerHTML=d,o=S(),C=m("div"),A=m("img"),B=S(),b=m("div"),I=m("div"),r=S(),_=m("div"),_.innerHTML=H,this.h()},l(M){D=g(M,"DIV",{class:!0});var y=x(D);e=g(y,"DIV",{class:!0}),x(e).forEach(v),i=z(y),n=g(y,"DIV",{class:!0});var $=x(n);u=g($,"DIV",{class:!0});var N=x(u);s=g(N,"IMG",{src:!0,alt:!0,class:!0}),f=z(N),a=g(N,"DIV",{class:!0});var nD=x(a);h=g(nD,"DIV",{class:!0}),x(h).forEach(v),nD.forEach(v),N.forEach(v),k=z($),p=g($,"DIV",{class:!0});var tD=x(p);l=g(tD,"DIV",{class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-1w75dlu"&&(l.innerHTML=d),tD.forEach(v),o=z($),C=g($,"DIV",{class:!0});var W=x(C);A=g(W,"IMG",{src:!0,alt:!0,class:!0}),B=z(W),b=g(W,"DIV",{class:!0});var iD=x(b);I=g(iD,"DIV",{class:!0}),x(I).forEach(v),iD.forEach(v),W.forEach(v),$.forEach(v),r=z(y),_=g(y,"DIV",{class:!0,"data-svelte-h":!0}),Z(_)!=="svelte-1y1ggq6"&&(_.innerHTML=H),y.forEach(v),this.h()},h(){E(e,"class","chatOverlay svelte-k8rn6k"),sD(s.src,F=uD)||E(s,"src",F),E(s,"alt",""),E(s,"class","messageIcon svelte-k8rn6k"),E(h,"class","botText svelte-k8rn6k"),E(a,"class","botTextContainer svelte-k8rn6k"),E(u,"class","botMessage svelte-k8rn6k"),E(l,"class","userBubble svelte-k8rn6k"),E(p,"class","userMessage svelte-k8rn6k"),sD(A.src,T=uD)||E(A,"src",T),E(A,"alt",""),E(A,"class","messageIcon svelte-k8rn6k"),E(I,"class","botText svelte-k8rn6k"),E(b,"class","botTextContainer svelte-k8rn6k"),E(C,"class","botMessage svelte-k8rn6k"),E(n,"class","chat svelte-k8rn6k"),E(_,"class","heroLayer svelte-k8rn6k"),E(D,"class","overflowHidden")},m(M,y){O(M,D,y),c(D,e),c(D,i),c(D,n),c(n,u),c(u,s),t[5](s),c(u,f),c(u,a),c(a,h),t[6](h),c(n,k),c(n,p),c(p,l),t[7](l),c(n,o),c(n,C),c(C,A),t[8](A),c(C,B),c(C,b),c(b,I),t[9](I),c(D,r),c(D,_)},p:w,i:w,o:w,d(M){M&&v(D),t[5](null),t[6](null),t[7](null),t[8](null),t[9](null)}}}let FD="Wie kann ich dir helfen?",aD="Hier ist ein strukturiertes Konzept für Generationenmanagement in einem Unternehmen, das auf Nachhaltigkeit, Produktivität und Zusammenarbeit zwischen den Generationen abzielt:<br><br>1. Zielsetzung des Generationenmanagements<br><br>Das Ziel ist es, die Zusammenarbeit zwischen den Generationen zu fördern, Fachwissen zu sichern, die Zufriedenheit der Mitarbeitenden zu erhöhen und die Leistungsfähigkeit des Unternehmens langfristig zu sichern.<br><br>Erhalt des Erfahrungswissens älterer Mitarbeitender.<br>Integration und Entwicklung jüngerer Generationen.<br>Schaffung von Synergien durch generationenübergreifende Zusammenarbeit.<br>Förderung von Vielfalt und Verbesserung der Unternehmenskultur.";function gD(t,D,e){let i,n,u,s,F;DD.registerPlugin(U);const f=["pointerdown","keydown","wheel","touchstart","scroll"];oD(()=>{h()});let a=!1;rD.subscribe(r=>{a=r});function h(){typeof window<"u"&&(a?o():(C(),rD.set(!0)))}let k,p;ED.subscribe(r=>{k=r}),dD.subscribe(r=>{p=r});function l(){p()}function d(){k()}function o(){let r=DD.timeline();r.set(n,{text:FD,ease:"none"},0),r.set(F,{text:{value:aD},ease:"none"},0),r.to(".chatOverlay",{opacity:.3,duration:1},0),r.to(".chat",{filter:"blur(5px)",duration:1},0),r.to(".heroContainer",{filter:"opacity(1)",y:0,duration:1,ease:"power2.out"},0)}function C(){let r=DD.timeline();document.body.style.overflow="hidden",r.from(i,{opacity:0,duration:1,ease:"power2.in",onStart:l}),r.to(n,{text:FD,duration:1,ease:"none"}),r.fromTo(u,{scale:0,opacity:0},{scale:1,opacity:1,duration:.7,ease:"back.out(1.2)",delay:1}),r.from(s,{opacity:0,duration:1,ease:"power2.in"}),r.to(F,{text:{value:aD},delay:1,duration:6,ease:"none"}),r.to(".chatOverlay",{opacity:.3,duration:1,delay:4,onStart:d},"<"),r.to(".chat",{filter:"blur(5px)",duration:1},"<"),r.to(".heroContainer",{filter:"opacity(1)",y:0,duration:1,ease:"power2.out",delay:.2,onStart:_},"<");function _(){document.body.style.overflow=""}function H(M){console.log("event"),r.time()<8.5&&r.time(8.5),f.forEach(y=>window.removeEventListener(y,H))}f.forEach(M=>window.addEventListener(M,H))}function A(r){L[r?"unshift":"push"](()=>{i=r,e(0,i)})}function T(r){L[r?"unshift":"push"](()=>{n=r,e(1,n)})}function B(r){L[r?"unshift":"push"](()=>{u=r,e(2,u)})}function b(r){L[r?"unshift":"push"](()=>{s=r,e(3,s)})}function I(r){L[r?"unshift":"push"](()=>{F=r,e(4,F)})}return[i,n,u,s,F,A,T,B,b,I]}class vD extends j{constructor(D){super(),G(this,D,gD,mD,P,{})}}function pD(t){let D,e=`<div class="introContainer svelte-1sh4lyn"><div class="textContainer svelte-1sh4lyn"><div class="heading introHeading svelte-1sh4lyn">Generative KI wird die Arbeitswelt grundlegend verändern</div> <div class="content introContent svelte-1sh4lyn">Mit ChatGPT &amp; Co können Menschen und Maschinen binnen weniger Sekunden neue Texte, Bilder,
				Musik oder Code erzeugen. Wie sollen Unternehmen und Arbeitende darauf reagieren? Welche
				rechtlichen Rahmenbedingungen gibt es bereits und welche Regularien kommen noch auf uns zu?</div></div> <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" class="svelte-1sh4lyn"><circle cx="50" cy="50" r="50" stroke-width="2" fill="#62b5c0"></circle><text x="50" y="35" text-anchor="middle" font-size="9" dominant-baseline="middle">Ab 2.2.2025
			</text><text x="50" y="50" text-anchor="middle" font-size="9" dominant-baseline="middle">ist KI-Kompetenz
			</text><text x="50" y="65" text-anchor="middle" font-size="9" dominant-baseline="middle">verpflichtend!</text></svg></div>`;return{c(){D=m("div"),D.innerHTML=e,this.h()},l(i){D=g(i,"DIV",{class:!0,"data-svelte-h":!0}),Z(D)!=="svelte-1blsyvf"&&(D.innerHTML=e),this.h()},h(){E(D,"class","section intro svelte-1sh4lyn")},m(i,n){O(i,D,n)},p:w,i:w,o:w,d(i){i&&v(D)}}}class AD extends j{constructor(D){super(),G(this,D,null,pD,P,{})}}function BD(t){let D,e=`<div class="infoContainer svelte-ndfd0n"><div class="rightInfo svelte-ndfd0n">10.03.2025 | 09:00 - 17:00 Uhr<br/>
			Campus WU | Gebäude LC, Festsaal 2<br/>
			T: 01/313 36 – 4637<br/>
			E: arbeitsrecht.sozialrecht@wu.ac.at</div> <a href="mailto:arbeitsrecht.sozialrecht@wu.ac.at?subject=Anmeldung zur Fachtagung „Automatisierung der Arbeit“ an der WU am 10.03.2025&amp;body=Hiermit melde ich mich zur o.g. kostenlosen Tagung am 10.03.2025 an. Ich nehme zur Kenntnis, dass die Teilnehmerzahl aus Platzgründen begrenzt ist. Sollte ich an der Teilnahme verhindert sein, so werde ich mich per E-Mail abmelden, um anderen Interessenten die Teilnahme zu ermöglichen.%0D%0A%0D%0AName: %0D%0A%0D%0AFirma/Organisation: %0D%0A%0D%0A Hinweis: Wir weisen darauf hin, dass bei der Veranstaltung fotografiert wird und diese Fotos für Veranstaltungsberichte im Internet oder in anderen Medien verwendet werden könnten. Sollten Sie damit nicht einverstanden sein, so teilen Sie dies bitte den Organisatoren vor Ort mit." target="_blank" class="button buttonAnmeldung svelte-ndfd0n">Anmelden</a></div>`;return{c(){D=m("div"),D.innerHTML=e,this.h()},l(i){D=g(i,"DIV",{class:!0,"data-svelte-h":!0}),Z(D)!=="svelte-1d34cv7"&&(D.innerHTML=e),this.h()},h(){E(D,"class","info svelte-ndfd0n")},m(i,n){O(i,D,n)},p:w,i:w,o:w,d(i){i&&v(D)}}}class bD extends j{constructor(D){super(),G(this,D,null,BD,P,{})}}function kD(t){let D,e,i,n;return D=new AD({}),i=new bD({}),{c(){q(D.$$.fragment),e=S(),q(i.$$.fragment)},l(u){R(D.$$.fragment,u),e=z(u),R(i.$$.fragment,u)},m(u,s){X(D,u,s),O(u,e,s),X(i,u,s),n=!0},p:w,i(u){n||(Y(D.$$.fragment,u),Y(i.$$.fragment,u),n=!0)},o(u){J(D.$$.fragment,u),J(i.$$.fragment,u),n=!1},d(u){u&&v(e),Q(D,u),Q(i,u)}}}class wD extends j{constructor(D){super(),G(this,D,null,kD,P,{})}}function yD(t){let D,e,i,n;return D=new vD({}),i=new wD({}),{c(){q(D.$$.fragment),e=S(),q(i.$$.fragment)},l(u){R(D.$$.fragment,u),e=z(u),R(i.$$.fragment,u)},m(u,s){X(D,u,s),O(u,e,s),X(i,u,s),n=!0},p:w,i(u){n||(Y(D.$$.fragment,u),Y(i.$$.fragment,u),n=!0)},o(u){J(D.$$.fragment,u),J(i.$$.fragment,u),n=!1},d(u){u&&v(e),Q(D,u),Q(i,u)}}}class ID extends j{constructor(D){super(),G(this,D,null,yD,P,{})}}export{ID as component};
