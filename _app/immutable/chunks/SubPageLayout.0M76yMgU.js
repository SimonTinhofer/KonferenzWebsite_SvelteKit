import{s as k,n as b,e as L,u as V,g as N,f as O}from"./scheduler.XJ5HuxYc.js";import{S as I,i as y,g,m as T,s as D,C,h as p,j as m,n as j,f as h,c as M,D as E,k as l,a as B,y as _,o as q,r as x,u as F,v as P,d as S,t as H,w as Z}from"./index.jPd5AE-x.js";function z(d){let e,a,o,n,r,i,c;return{c(){e=g("section"),a=g("h1"),o=T(d[0]),n=D(),r=C("svg"),i=C("path"),c=C("path"),this.h()},l(f){e=p(f,"SECTION",{class:!0});var t=m(e);a=p(t,"H1",{class:!0});var s=m(a);o=j(s,d[0]),s.forEach(h),n=M(t),r=E(t,"svg",{viewBox:!0,fill:!0,xmlns:!0,class:!0});var u=m(r);i=E(u,"path",{d:!0,fill:!0}),m(i).forEach(h),c=E(u,"path",{d:!0,stroke:!0,"stroke-width":!0}),m(c).forEach(h),u.forEach(h),t.forEach(h),this.h()},h(){l(a,"class","svelte-udcrnn"),l(i,"d","M-472 389.679C-472 389.679 120.11 125.064 485.674 198.915C492.512 249.085 491.014 300.47 495.476 335.148C579.687 989.599 1082.95 695.37 1082.95 695.37C1082.95 695.37 937.733 683.003 785.492 589.652C683.401 527.053 698.285 329.953 599.586 237.706L441.729 85.0084C437.499 80.2251 432.893 75.7432 427.875 71.6075C144.976 -186.465 -472 389.679 -472 389.679Z"),l(i,"fill","#F5E8EE"),l(c,"d","M599.586 237.706C261.263 61.9827 -472 389.679 -472 389.679C-472 389.679 144.976 -186.465 427.875 71.6075M599.586 237.706C698.285 329.953 683.401 527.053 785.492 589.652C937.733 683.003 1082.95 695.37 1082.95 695.37C1082.95 695.37 579.687 989.599 495.476 335.148C486.632 266.416 501.201 132.046 427.875 71.6075M599.586 237.706L427.875 71.6075"),l(c,"stroke","white"),l(c,"stroke-width","10"),l(r,"viewBox","0 0 1100 767"),l(r,"fill","none"),l(r,"xmlns","http://www.w3.org/2000/svg"),l(r,"class","svelte-udcrnn"),l(e,"class","svelte-udcrnn")},m(f,t){B(f,e,t),_(e,a),_(a,o),_(e,n),_(e,r),_(r,i),_(r,c)},p(f,[t]){t&1&&q(o,f[0])},i:b,o:b,d(f){f&&h(e)}}}function A(d,e,a){let{heading:o="Heading"}=e;return d.$$set=n=>{"heading"in n&&a(0,o=n.heading)},[o]}class G extends I{constructor(e){super(),y(this,e,A,z,k,{heading:0})}}function J(d){let e,a,o,n,r,i,c;n=new G({props:{heading:d[0]}});const f=d[2].default,t=L(f,d,d[1],null);return{c(){e=g("section"),a=g("div"),o=g("div"),x(n.$$.fragment),r=D(),i=g("div"),t&&t.c(),this.h()},l(s){e=p(s,"SECTION",{class:!0});var u=m(e);a=p(u,"DIV",{class:!0});var v=m(a);o=p(v,"DIV",{class:!0});var w=m(o);F(n.$$.fragment,w),w.forEach(h),r=M(v),i=p(v,"DIV",{class:!0});var $=m(i);t&&t.l($),$.forEach(h),v.forEach(h),u.forEach(h),this.h()},h(){l(o,"class","bannerContainer svelte-797ao0"),l(i,"class","contentContainer svelte-797ao0"),l(a,"class","bg svelte-797ao0"),l(e,"class","svelte-797ao0")},m(s,u){B(s,e,u),_(e,a),_(a,o),P(n,o,null),_(a,r),_(a,i),t&&t.m(i,null),c=!0},p(s,[u]){const v={};u&1&&(v.heading=s[0]),n.$set(v),t&&t.p&&(!c||u&2)&&V(t,f,s,s[1],c?O(f,s[1],u,null):N(s[1]),null)},i(s){c||(S(n.$$.fragment,s),S(t,s),c=!0)},o(s){H(n.$$.fragment,s),H(t,s),c=!1},d(s){s&&h(e),Z(n),t&&t.d(s)}}}function K(d,e,a){let{$$slots:o={},$$scope:n}=e,{Heading:r="Überschrift"}=e;return d.$$set=i=>{"Heading"in i&&a(0,r=i.Heading),"$$scope"in i&&a(1,n=i.$$scope)},[r,n,o]}class U extends I{constructor(e){super(),y(this,e,K,J,k,{Heading:0})}}export{U as S};