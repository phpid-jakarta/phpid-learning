function g(){}function et(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function R(){return Object.create(null)}function w(t){t.forEach(J)}function L(t){return typeof t=="function"}function nt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function it(t){return Object.keys(t).length===0}function K(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $t(t,e,n){t.$$.on_destroy.push(K(e,n))}function vt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?et(n.ctx.slice(),t[1](i(e))):n.ctx}function Et(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function At(t,e,n,i,r,o){if(r){const c=Q(e,n,i,o);t.p(c,r)}}function Nt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let T=!1;function rt(){T=!0}function st(){T=!1}function ct(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ut(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const s=e[u].claim_order,f=(r>0&&e[n[r]].claim_order<=s?r+1:ct(1,r,h=>e[n[h]].claim_order,s))-1;i[u]=n[f]+1;const _=f+1;n[_]=u,r=Math.max(_,r)}const o=[],c=[];let l=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(o.push(e[u-1]);l>=u;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);o.reverse(),c.sort((u,s)=>u.claim_order-s.claim_order);for(let u=0,s=0;u<c.length;u++){for(;s<o.length&&c[u].claim_order>=o[s].claim_order;)s++;const f=s<o.length?o[s]:null;t.insertBefore(c[u],f)}}function lt(t,e){if(T){for(ut(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function St(t,e,n){T&&!n?lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ft(t){return document.createElement(t)}function at(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function O(t){return document.createTextNode(t)}function Mt(){return O(" ")}function jt(){return O("")}function Tt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ct(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function dt(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function U(t,e,n,i,r=!1){_t(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const u=n(l);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const u=n(l);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function V(t,e,n,i){return U(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||o.push(l.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function qt(t,e,n){return V(t,e,n,ft)}function zt(t,e,n){return V(t,e,n,at)}function ht(t,e){return U(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>O(e),!0)}function Bt(t){return ht(t," ")}function Ht(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ot(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Pt(t,e){return new t(e)}let A;function E(t){A=t}function W(){if(!A)throw new Error("Function called outside component initialization");return A}function Ft(t){W().$$.on_mount.push(t)}function Rt(t){W().$$.after_update.push(t)}const v=[],G=[],M=[],I=[],X=Promise.resolve();let B=!1;function Y(){B||(B=!0,X.then(Z))}function Gt(){return Y(),X}function H(t){M.push(t)}const z=new Set;let k=0;function Z(){const t=A;do{for(;k<v.length;){const e=v[k];k++,E(e),mt(e.$$)}for(E(null),v.length=0,k=0;G.length;)G.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];z.has(n)||(z.add(n),n())}M.length=0}while(v.length);for(;I.length;)I.pop()();B=!1,z.clear(),E(t)}function mt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const j=new Set;let b;function It(){b={r:0,c:[],p:b}}function Jt(){b.r||w(b.c),b=b.p}function tt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),b.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Kt(t,e){t.d(1),e.delete(t.key)}function Qt(t,e){pt(t,1,1,()=>{e.delete(t.key)})}function Ut(t,e,n,i,r,o,c,l,u,s,f,_){let h=t.length,d=o.length,m=h;const $={};for(;m--;)$[t[m].key]=m;const N=[],C=new Map,D=new Map;for(m=d;m--;){const a=_(r,o,m),p=n(a);let y=c.get(p);y?i&&y.p(a,e):(y=s(p,a),y.c()),C.set(p,N[m]=y),p in $&&D.set(p,Math.abs(m-$[p]))}const P=new Set,F=new Set;function q(a){tt(a,1),a.m(l,f),c.set(a.key,a),f=a.first,d--}for(;h&&d;){const a=N[d-1],p=t[h-1],y=a.key,S=p.key;a===p?(f=a.first,h--,d--):C.has(S)?!c.has(y)||P.has(y)?q(a):F.has(S)?h--:D.get(y)>D.get(S)?(F.add(y),q(a)):(P.add(S),h--):(u(p,c),h--)}for(;h--;){const a=t[h];C.has(a.key)||u(a,c)}for(;d;)q(N[d-1]);return N}function Vt(t){t&&t.c()}function Wt(t,e){t&&t.l(e)}function yt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||H(()=>{const c=t.$$.on_mount.map(J).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...c):w(c),t.$$.on_mount=[]}),o.forEach(H)}function gt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(v.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xt(t,e,n,i,r,o,c,l=[-1]){const u=A;E(t);const s=t.$$={fragment:null,ctx:[],props:o,update:g,not_equal:r,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:R(),dirty:l,skip_bound:!1,root:e.target||u.$$.root};c&&c(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(_,h,...d)=>{const m=d.length?d[0]:h;return s.ctx&&r(s.ctx[_],s.ctx[_]=m)&&(!s.skip_bound&&s.bound[_]&&s.bound[_](m),f&&bt(t,_)),h}):[],s.update(),f=!0,w(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){rt();const _=dt(e.target);s.fragment&&s.fragment.l(_),_.forEach(ot)}else s.fragment&&s.fragment.c();e.intro&&tt(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),st(),Z()}E(u)}class Yt{$destroy(){gt(this,1),this.$destroy=g}$on(e,n){if(!L(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const x=[];function xt(t,e){return{subscribe:wt(t,e).subscribe}}function wt(t,e=g){let n;const i=new Set;function r(l){if(nt(t,l)&&(t=l,n)){const u=!x.length;for(const s of i)s[1](),x.push(s,t);if(u){for(let s=0;s<x.length;s+=2)x[s][0](x[s+1]);x.length=0}}}function o(l){r(l(t))}function c(l,u=g){const s=[l,u];return i.add(s),i.size===1&&(n=e(r)||g),l(t),()=>{i.delete(s),i.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:c}}function Zt(t,e,n){const i=!Array.isArray(t),r=i?[t]:t,o=e.length<2;return xt(n,c=>{let l=!1;const u=[];let s=0,f=g;const _=()=>{if(s)return;f();const d=e(i?u[0]:u,c);o?c(d):f=L(d)?d:g},h=r.map((d,m)=>K(d,$=>{u[m]=$,s&=~(1<<m),l&&_()},()=>{s|=1<<m}));return l=!0,_(),function(){w(h),f()}})}export{Gt as A,wt as B,Tt as C,g as D,$t as E,at as F,zt as G,lt as H,w as I,vt as J,At as K,Nt as L,Et as M,xt as N,Zt as O,kt as P,Ot as Q,Ut as R,Yt as S,Qt as T,Ct as U,Kt as V,Mt as a,St as b,Bt as c,Jt as d,jt as e,tt as f,It as g,ot as h,Xt as i,Rt as j,ft as k,qt as l,dt as m,Dt as n,Ft as o,Lt as p,O as q,ht as r,nt as s,pt as t,Ht as u,Pt as v,Vt as w,Wt as x,yt as y,gt as z};
