import{S as C,i as w,s as D,k as m,q as p,l as v,m as y,r as k,h as u,n as f,b as d,H as _,u as q,D as g,e as S,R as x,V as A,a as M,c as V,C as H}from"./index-af505860.js";import{g as I}from"./navigation-ef3cc7a3.js";import{g as N,d as R,i as W}from"./index-2ff413fa.js";function j(i){let e,t,a;return{c(){e=m("a"),t=p(i[0]),this.h()},l(s){e=v(s,"A",{class:!0,href:!0,title:!0});var n=y(e);t=k(n,i[0]),n.forEach(u),this.h()},h(){f(e,"class","md:text-sm cursor-pointer text-gray-600 dark:text-gray-200 hover:underline"),f(e,"href",a=`/speaker/${i[1]}`),f(e,"title",i[0])},m(s,n){d(s,e,n),_(e,t)},p(s,[n]){n&1&&q(t,s[0]),n&2&&a!==(a=`/speaker/${s[1]}`)&&f(e,"href",a),n&1&&f(e,"title",s[0])},i:g,o:g,d(s){s&&u(e)}}}function z(i,e,t){let{speaker:a}=e,{speakerSlug:s}=e;return i.$$set=n=>{"speaker"in n&&t(0,a=n.speaker),"speakerSlug"in n&&t(1,s=n.speakerSlug)},[a,s]}class O extends C{constructor(e){super(),w(this,e,z,j,D,{speaker:0,speakerSlug:1})}}function b(i,e,t){const a=i.slice();return a[4]=e[t],a}function B(i){let e=[],t=new Map,a,s=i[0];const n=r=>r[4];for(let r=0;r<s.length;r+=1){let l=b(i,s,r),o=n(l);t.set(o,e[r]=T(o,l))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();a=S()},l(r){for(let l=0;l<e.length;l+=1)e[l].l(r);a=S()},m(r,l){for(let o=0;o<e.length;o+=1)e[o].m(r,l);d(r,a,l)},p(r,l){l&3&&(s=r[0],e=x(e,l,n,1,r,s,t,a.parentNode,A,T,a,b))},d(r){for(let l=0;l<e.length;l+=1)e[l].d(r);r&&u(a)}}}function T(i,e){let t,a,s=e[4].tag+"",n,r,l,o;function E(...c){return e[3](e[4],...c)}return{key:i,first:null,c(){t=m("a"),a=p("#"),n=p(s),r=M(),this.h()},l(c){t=v(c,"A",{class:!0,href:!0,alt:!0});var h=y(t);a=k(h,"#"),n=k(h,s),r=V(h),h.forEach(u),this.h()},h(){f(t,"class","cursor-pointer text-gray-500 dark:text-gray-400 text-sm md:text-xs hover:underline"),f(t,"href",`/tag/${e[4].tag}`),f(t,"alt",e[4].tag),this.first=t},m(c,h){d(c,t,h),_(t,a),_(t,n),_(t,r),l||(o=H(t,"click",E),l=!0)},p(c,h){e=c},d(c){c&&u(t),l=!1,o()}}}function F(i){let e,t=i[0]&&i[0].length>0&&B(i);return{c(){e=m("div"),t&&t.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var s=y(e);t&&t.l(s),s.forEach(u),this.h()},h(){f(e,"class","flex flex-wrap gap-2")},m(a,s){d(a,e,s),t&&t.m(e,null)},p(a,[s]){a[0]&&a[0].length>0&&t.p(a,s)},i:g,o:g,d(a){a&&u(e),t&&t.d()}}}function G(i,e,t){let{tags:a}=e;const s=N(a),n=(l,o)=>{l.preventDefault(),I(`/tag/${o}`),R.set(o),setTimeout(()=>{W()},500)},r=(l,o)=>n(o,l.tag);return i.$$set=l=>{"tags"in l&&t(2,a=l.tags)},[s,n,a,r]}class P extends C{constructor(e){super(),w(this,e,G,F,D,{tags:2})}}export{O as S,P as T};
