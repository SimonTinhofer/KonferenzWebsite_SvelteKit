import{s as S,n as w,f as M,u as L,g as D,h as N}from"./scheduler.afOcmUe7.js";import{S as b,i as H,g,m as O,s as k,B as p,h as v,j as m,n as T,f as d,c as B,C,k as l,a as I,y as _,o as V,r as j,u as q,v as x,d as $,t as y,w as F}from"./index.fo2pth-m.js";function P(o){let e,a,i,c,n,r,f;return{c(){e=g("section"),a=g("h1"),i=O(o[0]),c=k(),n=p("svg"),r=p("path"),f=p("path"),this.h()},l(s){e=v(s,"SECTION",{class:!0});var t=m(e);a=v(t,"H1",{class:!0});var u=m(a);i=T(u,o[0]),u.forEach(d),c=B(t),n=C(t,"svg",{viewBox:!0,fill:!0,xmlns:!0,class:!0});var h=m(n);r=C(h,"path",{d:!0,fill:!0}),m(r).forEach(d),f=C(h,"path",{d:!0,stroke:!0,"stroke-width":!0}),m(f).forEach(d),h.forEach(d),t.forEach(d),this.h()},h(){l(a,"class","svelte-udcrnn"),l(r,"d","M-472 389.679C-472 389.679 120.11 125.064 485.674 198.915C492.512 249.085 491.014 300.47 495.476 335.148C579.687 989.599 1082.95 695.37 1082.95 695.37C1082.95 695.37 937.733 683.003 785.492 589.652C683.401 527.053 698.285 329.953 599.586 237.706L441.729 85.0084C437.499 80.2251 432.893 75.7432 427.875 71.6075C144.976 -186.465 -472 389.679 -472 389.679Z"),l(r,"fill","#F5E8EE"),l(f,"d","M599.586 237.706C261.263 61.9827 -472 389.679 -472 389.679C-472 389.679 144.976 -186.465 427.875 71.6075M599.586 237.706C698.285 329.953 683.401 527.053 785.492 589.652C937.733 683.003 1082.95 695.37 1082.95 695.37C1082.95 695.37 579.687 989.599 495.476 335.148C486.632 266.416 501.201 132.046 427.875 71.6075M599.586 237.706L427.875 71.6075"),l(f,"stroke","white"),l(f,"stroke-width","10"),l(n,"viewBox","0 0 1100 767"),l(n,"fill","none"),l(n,"xmlns","http://www.w3.org/2000/svg"),l(n,"class","svelte-udcrnn"),l(e,"class","svelte-udcrnn")},m(s,t){I(s,e,t),_(e,a),_(a,i),_(e,c),_(e,n),_(n,r),_(n,f)},p(s,[t]){t&1&&V(i,s[0])},i:w,o:w,d(s){s&&d(e)}}}function Z(o,e,a){let{heading:i="Heading"}=e;return o.$$set=c=>{"heading"in c&&a(0,i=c.heading)},[i]}class z extends b{constructor(e){super(),H(this,e,Z,P,S,{heading:0})}}function A(o){let e,a,i,c,n,r;i=new z({props:{heading:o[0]}});const f=o[2].default,s=M(f,o,o[1],null);return{c(){e=g("section"),a=g("div"),j(i.$$.fragment),c=k(),n=g("div"),s&&s.c(),this.h()},l(t){e=v(t,"SECTION",{class:!0});var u=m(e);a=v(u,"DIV",{class:!0});var h=m(a);q(i.$$.fragment,h),h.forEach(d),c=B(u),n=v(u,"DIV",{class:!0});var E=m(n);s&&s.l(E),E.forEach(d),u.forEach(d),this.h()},h(){l(a,"class","bannerContainer svelte-uy25fd"),l(n,"class","contentContainer svelte-uy25fd"),l(e,"class","svelte-uy25fd")},m(t,u){I(t,e,u),_(e,a),x(i,a,null),_(e,c),_(e,n),s&&s.m(n,null),r=!0},p(t,[u]){const h={};u&1&&(h.heading=t[0]),i.$set(h),s&&s.p&&(!r||u&2)&&L(s,f,t,t[1],r?N(f,t[1],u,null):D(t[1]),null)},i(t){r||($(i.$$.fragment,t),$(s,t),r=!0)},o(t){y(i.$$.fragment,t),y(s,t),r=!1},d(t){t&&d(e),F(i),s&&s.d(t)}}}function G(o,e,a){let{$$slots:i={},$$scope:c}=e,{Heading:n="Überschrift"}=e;return o.$$set=r=>{"Heading"in r&&a(0,n=r.Heading),"$$scope"in r&&a(1,c=r.$$scope)},[n,c,i]}class Q extends b{constructor(e){super(),H(this,e,G,A,S,{Heading:0})}}export{Q as S};
