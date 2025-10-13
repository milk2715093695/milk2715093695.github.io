import{o as Ia,a as Ra,i as Na}from"./lifecycle.CZ-asqhk.js";import{$ as Wa,a6 as Oa,aJ as Ya,aK as qa,aL as $e,u as Ie,aM as Ka,ab as Re,aN as Ua,U as Ne,aO as gt,a4 as Ga,aP as Ha,c as it,f as tt,a as W,p as Ja,b as Xa,s as u,m as A,aj as K,g as t,d as vt,h as v,e as s,r as i,n as Va,t as jt}from"./template.BzsrGijQ.js";import{a as Qa,s as X}from"./render.DCR2qU2Q.js";import{i as z}from"./if.CFPFz1Q6.js";import{e as Za,i as tr}from"./each.CT3OyW7s.js";import{a as O,s as st,c as Te}from"./props.DCbUG9pV.js";import{e as y}from"./utils.DH2xf29x.js";import{I as f}from"./Icon.D-4cGuOY.js";import{m as xt}from"./config.Dql7DcSd.js";import{I as er}from"./zh_TW.Br0BHrb8.js";import{i as ar}from"./translation.sUhDRTX2.js";const rr=()=>performance.now(),V={tick:o=>requestAnimationFrame(o),now:()=>rr(),tasks:new Set};function We(){const o=V.now();V.tasks.forEach(r=>{r.c(o)||(V.tasks.delete(r),r.f())}),V.tasks.size!==0&&V.tick(We)}function ir(o){let r;return V.tasks.size===0&&V.tick(We),{promise:new Promise(h=>{V.tasks.add(r={c:o,f:h})}),abort(){V.tasks.delete(r)}}}function zt(o,r){Re(()=>{o.dispatchEvent(new CustomEvent(r))})}function sr(o){if(o==="float")return"cssFloat";if(o==="offset")return"cssOffset";if(o.startsWith("--"))return o;const r=o.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(h=>h[0].toUpperCase()+h.slice(1)).join("")}function Se(o){const r={},h=o.split(";");for(const C of h){const[_,p]=C.split(":");if(!_||p===void 0)break;const $=sr(_.trim());r[$]=p.trim()}return r}const nr=o=>o;function lr(o,r,h,C){var _=(o&Ka)!==0,p="both",$,w=r.inert,D=r.style.overflow,d,g;function j(){return Re(()=>$??=h()(r,C?.()??{},{direction:p}))}var F={is_global:_,in(){r.inert=w,zt(r,"introstart"),d=ae(r,j(),g,1,()=>{zt(r,"introend"),d?.abort(),d=$=void 0,r.style.overflow=D})},out(S){r.inert=!0,zt(r,"outrostart"),g=ae(r,j(),d,0,()=>{zt(r,"outroend"),S?.()})},stop:()=>{d?.abort(),g?.abort()}},L=Wa;if((L.transitions??=[]).push(F),Qa){var T=_;if(!T){for(var c=L.parent;c&&(c.f&Oa)!==0;)for(;(c=c.parent)&&(c.f&Ya)===0;);T=!c||(c.f&qa)!==0}T&&$e(()=>{Ie(()=>F.in())})}}function ae(o,r,h,C,_){var p=C===1;if(Ua(r)){var $,w=!1;return Ne(()=>{if(!w){var S=r({direction:p?"in":"out"});$=ae(o,S,h,C,_)}}),{abort:()=>{w=!0,$?.abort()},deactivate:()=>$.deactivate(),reset:()=>$.reset(),t:()=>$.t()}}if(h?.deactivate(),!r?.duration)return _(),{abort:gt,deactivate:gt,reset:gt,t:()=>C};const{delay:D=0,css:d,tick:g,easing:j=nr}=r;var F=[];if(p&&h===void 0&&(g&&g(0,1),d)){var L=Se(d(0,1));F.push(L,L)}var T=()=>1-C,c=o.animate(F,{duration:D,fill:"forwards"});return c.onfinish=()=>{c.cancel();var S=h?.t()??1-C;h?.abort();var x=C-S,et=r.duration*Math.abs(x),at=[];if(et>0){var I=!1;if(d)for(var m=Math.ceil(et/16.666666666666668),k=0;k<=m;k+=1){var a=S+x*j(k/m),Q=Se(d(a,1-a));at.push(Q),I||=Q.overflow==="hidden"}I&&(o.style.overflow="hidden"),T=()=>{var U=c.currentTime;return S+x*j(U/et)},g&&ir(()=>{if(c.playState!=="running")return!1;var U=T();return g(U,1-U),!0})}c=o.animate(at,{duration:et,fill:"forwards"}),c.onfinish=()=>{T=()=>C,g?.(C,1-C),_()}},{abort:()=>{c&&(c.cancel(),c.effect=null,c.onfinish=gt)},deactivate:()=>{_=gt},reset:()=>{C===0&&g?.(1,0)},t:()=>T()}}function Pe(o,r){return o===r||o?.[Ha]===r}function je(o={},r,h,C){return $e(()=>{var _,p;return Ga(()=>{_=p,p=[],Ie(()=>{o!==h(...p)&&(r(o,...p),_&&Pe(h(..._),o)&&r(null,..._))})}),()=>{Ne(()=>{p&&Pe(h(...p),o)&&r(null,...p)})}}),o}function ze(o){return function(...r){var h=r[0];return h.stopPropagation(),o?.apply(this,r)}}function or(o){const r=o-1;return r*r*r+1}function ur(o,{delay:r=0,duration:h=400,easing:C=or,axis:_="y"}={}){const p=getComputedStyle(o),$=+p.opacity,w=_==="y"?"height":"width",D=parseFloat(p[w]),d=_==="y"?["top","bottom"]:["left","right"],g=d.map(x=>`${x[0].toUpperCase()}${x.slice(1)}`),j=parseFloat(p[`padding${g[0]}`]),F=parseFloat(p[`padding${g[1]}`]),L=parseFloat(p[`margin${g[0]}`]),T=parseFloat(p[`margin${g[1]}`]),c=parseFloat(p[`border${g[0]}Width`]),S=parseFloat(p[`border${g[1]}Width`]);return{delay:r,duration:h,easing:C,css:x=>`overflow: hidden;opacity: ${Math.min(x*20,1)*$};${w}: ${x*D}px;padding-${d[0]}: ${x*j}px;padding-${d[1]}: ${x*F}px;margin-${d[0]}: ${x*L}px;margin-${d[1]}: ${x*T}px;border-${d[0]}-width: ${x*c}px;border-${d[1]}-width: ${x*S}px;min-${w}: 0`}}var cr=vt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),dr=vt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),vr=vt('<span class="text-sm text-[var(--content-meta)]"></span>'),fr=vt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),pr=vt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),mr=vt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Ar(o,r){Xa(r,!1);let h=xt.mode??"local",C=xt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",_=xt.id??"14164869977",p=xt.server??"netease",$=xt.type??"playlist",w=A(!1),D=A(!1),d=A(!1),g=A(!1),j=A(0),F=A(0),L=A(.7),T=A(!1),c=A(!1),S=A(!1),x=A(0),et=A(""),at=A(!1),I=A({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),m=A([]),k=A(0),a=A(),Q=A(),U=A();const Oe=[{id:1,title:"落樱谷",artist:"路灰气球z",cover:"assets/music/cover/落樱谷.webp",url:"assets/music/url/落樱谷.m4a",duration:214},{id:2,title:"D大调卡农",artist:"Johann Pachelbel",cover:"assets/music/cover/D大调卡农.webp",url:"assets/music/url/D大调卡农.m4a",duration:330},{id:5,title:"Minecraft",artist:"C418",cover:"assets/music/cover/MC.webp",url:"assets/music/url/Minecraft.m4a",duration:254},{id:7,title:"Going Home",artist:"Kenny G",cover:"assets/music/cover/sax.webp",url:"assets/music/url/回家.m4a",duration:283}];async function Ye(){if(!C||!_)return;u(c,!0);const n=C.replace(":server",p).replace(":type",$).replace(":id",_).replace(":auth","").replace(":r",Date.now().toString());try{const P=await fetch(n);if(!P.ok)throw new Error("meting api error");const G=await P.json();u(m,G.map(N=>{let ft=N.name??N.title??"未知歌曲",Ct=N.artist??N.author??"未知艺术家",R=N.duration??0;return R>1e4&&(R=Math.floor(R/1e3)),(!Number.isFinite(R)||R<=0)&&(R=0),{id:N.id,title:ft,artist:Ct,cover:N.pic??"",url:N.url??"",duration:R}})),t(m).length>0&&It(t(m)[0]),u(c,!1)}catch{Et("Meting 歌单获取失败"),u(c,!1)}}function qe(){!t(a)||!t(I).url||(t(w)?t(a).pause():t(a).play())}function yt(){u(D,!t(D)),t(D)&&(u(g,!1),u(d,!1))}function _t(){u(d,!t(d)),t(d)&&(u(D,!1),u(g,!1))}function re(){u(g,!t(g))}function Ke(){u(S,!t(S))}function Ue(){u(x,(t(x)+1)%3)}function Ge(){if(t(m).length<=1)return;const n=t(k)>0?t(k)-1:t(m).length-1;wt(n)}function $t(){if(t(m).length<=1)return;let n;if(t(S))do n=Math.floor(Math.random()*t(m).length);while(n===t(k)&&t(m).length>1);else n=t(k)<t(m).length-1?t(k)+1:0;wt(n)}function wt(n){if(n<0||n>=t(m).length)return;const P=t(w);u(k,n),t(a)&&t(a).pause(),It(t(m)[t(k)]),(P||!t(w))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function kt(n){return n.startsWith("http://")||n.startsWith("https://")||n.startsWith("/")?n:`/${n}`}function It(n){!n||!t(a)||(u(I,{...n}),n.url?(u(c,!0),t(a).pause(),K(a,t(a).currentTime=0),u(j,0),u(F,n.duration??0),t(a).removeEventListener("loadeddata",ie),t(a).removeEventListener("error",se),t(a).removeEventListener("loadstart",ne),t(a).addEventListener("loadeddata",ie,{once:!0}),t(a).addEventListener("error",se,{once:!0}),t(a).addEventListener("loadstart",ne,{once:!0}),K(a,t(a).src=kt(n.url)),t(a).load()):u(c,!1))}function ie(){u(c,!1),t(a)?.duration&&t(a).duration>1&&(u(F,Math.floor(t(a).duration)),t(m)[t(k)]&&K(m,t(m)[t(k)].duration=t(F)),K(I,t(I).duration=t(F)))}function se(n){u(c,!1),Et(`无法播放 "${t(I).title}"，正在尝试下一首...`),t(m).length>1?setTimeout(()=>$t(),1e3):Et("播放列表中没有可用的歌曲")}function ne(){}function Et(n){u(et,n),u(at,!0),setTimeout(()=>{u(at,!1)},3e3)}function He(){u(at,!1)}function Je(n){if(!t(a)||!t(Q))return;const P=t(Q).getBoundingClientRect(),N=(n.clientX-P.left)/P.width*t(F);K(a,t(a).currentTime=N),u(j,N)}function Xe(n){if(!t(a)||!t(U))return;const P=t(U).getBoundingClientRect(),G=Math.max(0,Math.min(1,(n.clientX-P.left)/P.width));u(L,G),K(a,t(a).volume=t(L)),u(T,t(L)===0)}function le(){t(a)&&(u(T,!t(T)),K(a,t(a).muted=t(T)))}function oe(n){if(!Number.isFinite(n)||n<0)return"0:00";const P=Math.floor(n/60),G=Math.floor(n%60);return`${P}:${G.toString().padStart(2,"0")}`}function Ve(){t(a)&&(t(a).addEventListener("play",()=>{u(w,!0)}),t(a).addEventListener("pause",()=>{u(w,!1)}),t(a).addEventListener("timeupdate",()=>{u(j,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(x)===1?(K(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(x)===2||t(k)<t(m).length-1||t(S)?$t():u(w,!1)}),t(a).addEventListener("error",n=>{u(c,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Ia(()=>{u(a,new Audio),K(a,t(a).volume=t(L)),Ve(),h==="meting"?Ye():(u(m,[...Oe]),t(m).length>0?It(t(m)[0]):Et("本地播放列表为空"))}),Ra(()=>{t(a)&&(t(a).pause(),K(a,t(a).src=""))}),Na();var ue=it(),Qe=tt(ue);{var Ze=n=>{var P=mr(),G=tt(P);{var N=e=>{var b=cr(),E=s(b),B=s(E);f(B,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var M=v(B,2),l=s(M,!0);i(M);var H=v(M,2),ct=s(H);f(ct,{icon:"material-symbols:close",class:"text-lg"}),i(H),i(E),i(b),jt(()=>X(l,t(et))),y("click",H,He),W(e,b)};z(G,e=>{t(at)&&e(N)})}var ft=v(G,2);let Ct;var R=s(ft);let ce;var ta=s(R);{var ea=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},aa=e=>{var b=it(),E=tt(b);{var B=l=>{var H=dr();W(l,H)},M=l=>{f(l,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(E,l=>{t(w)?l(B):l(M,!1)},!0)}W(e,b)};z(ta,e=>{t(c)?e(ea):e(aa,!1)})}i(R);var nt=v(R,2);let de;var ve=s(nt),Rt=s(ve),Nt=s(Rt);let fe;var pe=v(Nt,2),ra=s(pe);{var ia=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},sa=e=>{var b=it(),E=tt(b);{var B=l=>{f(l,{icon:"material-symbols:pause",class:"text-white text-xl"})},M=l=>{f(l,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(E,l=>{t(w)?l(B):l(M,!1)},!0)}W(e,b)};z(ra,e=>{t(c)?e(ia):e(sa,!1)})}i(pe),i(Rt);var Wt=v(Rt,2),Ot=s(Wt),na=s(Ot,!0);i(Ot);var me=v(Ot,2),la=s(me,!0);i(me),i(Wt);var be=v(Wt,2),Ft=s(be),oa=s(Ft);f(oa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Ft);var Yt=v(Ft,2),ua=s(Yt);f(ua,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Yt),i(be),i(ve),i(nt);var At=v(nt,2);let he;var qt=s(At),Kt=s(qt),ge=s(Kt);let xe;i(Kt);var Ut=v(Kt,2),Gt=s(Ut),ca=s(Gt,!0);i(Gt);var Ht=v(Gt,2),da=s(Ht,!0);i(Ht);var ye=v(Ht,2),va=s(ye);i(ye),i(Ut);var _e=v(Ut,2),Bt=s(_e),fa=s(Bt);f(fa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Bt);var Jt=v(Bt,2),pa=s(Jt);f(pa,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Jt),i(_e),i(qt);var Xt=v(qt,2),lt=s(Xt),ma=s(lt);i(lt),je(lt,e=>u(Q,e),()=>t(Q)),i(Xt);var Vt=v(Xt,2),ot=s(Vt);let we;var ba=s(ot);f(ba,{icon:"material-symbols:shuffle",class:"text-lg"}),i(ot);var pt=v(ot,2),ha=s(pt);f(ha,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(pt);var ut=v(pt,2);let ke;var ga=s(ut);{var xa=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},ya=e=>{var b=it(),E=tt(b);{var B=l=>{f(l,{icon:"material-symbols:pause",class:"text-xl"})},M=l=>{f(l,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(E,l=>{t(w)?l(B):l(M,!1)},!0)}W(e,b)};z(ga,e=>{t(c)?e(xa):e(ya,!1)})}i(ut);var mt=v(ut,2),_a=s(mt);f(_a,{icon:"material-symbols:skip-next",class:"text-xl"}),i(mt);var Dt=v(mt,2);let Ee;var wa=s(Dt);{var ka=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},Ea=e=>{var b=it(),E=tt(b);{var B=l=>{f(l,{icon:"material-symbols:repeat",class:"text-lg"})},M=l=>{f(l,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(E,l=>{t(x)===2?l(B):l(M,!1)},!0)}W(e,b)};z(wa,e=>{t(x)===1?e(ka):e(Ea,!1)})}i(Dt),i(Vt);var Ce=v(Vt,2),Mt=s(Ce),Ca=s(Mt);{var Fa=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Aa=e=>{var b=it(),E=tt(b);{var B=l=>{f(l,{icon:"material-symbols:volume-down",class:"text-lg"})},M=l=>{f(l,{icon:"material-symbols:volume-up",class:"text-lg"})};z(E,l=>{t(L)<.5?l(B):l(M,!1)},!0)}W(e,b)};z(Ca,e=>{t(T)||t(L)===0?e(Fa):e(Aa,!1)})}i(Mt);var rt=v(Mt,2),Ba=s(rt);i(rt),je(rt,e=>u(U,e),()=>t(U));var Lt=v(rt,2);let Fe;var Da=s(Lt);f(Da,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Lt),i(Ce),i(At);var Ma=v(At,2);{var La=e=>{var b=pr(),E=s(b),B=s(E),M=s(B,!0);i(B);var l=v(B,2),H=s(l);f(H,{icon:"material-symbols:close",class:"text-lg"}),i(l),i(E);var ct=v(E,2);Za(ct,5,()=>t(m),tr,(bt,Z,Y)=>{var J=fr();let Tt;var ht=s(J),Ta=s(ht);{var Sa=q=>{f(q,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Pa=q=>{var Pt=it(),te=tt(Pt);{var ee=dt=>{f(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},$a=dt=>{var Le=vr();Le.textContent=Y+1,W(dt,Le)};z(te,dt=>{Y===t(k)?dt(ee):dt($a,!1)},!0)}W(q,Pt)};z(Ta,q=>{Y===t(k)&&t(w)?q(Sa):q(Pa,!1)})}i(ht);var Qt=v(ht,2),Ae=s(Qt);i(Qt);var Be=v(Qt,2),St=s(Be);let De;var ja=s(St,!0);i(St);var Zt=v(St,2);let Me;var za=s(Zt,!0);i(Zt),i(Be),i(J),jt((q,Pt,te,ee)=>{Tt=O(J,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Tt,q),st(J,"aria-label",`播放 ${t(Z).title??""} - ${t(Z).artist??""}`),st(Ae,"src",Pt),st(Ae,"alt",t(Z).title),De=O(St,1,"font-medium truncate",null,De,te),X(ja,t(Z).title),Me=O(Zt,1,"text-sm text-[var(--content-meta)] truncate",null,Me,ee),X(za,t(Z).artist)},[()=>({"bg-[var(--btn-plain-bg)]":Y===t(k),"text-[var(--primary)]":Y===t(k)}),()=>kt(t(Z).cover),()=>({"text-[var(--primary)]":Y===t(k),"text-90":Y!==t(k)}),()=>({"text-[var(--primary)]":Y===t(k)})]),y("click",J,()=>wt(Y)),y("keydown",J,q=>{(q.key==="Enter"||q.key===" ")&&(q.preventDefault(),wt(Y))}),W(bt,J)}),i(ct),i(b),jt(bt=>X(M,bt),[()=>ar(er.playlist)]),y("click",l,re),lr(3,b,()=>ur,()=>({duration:300,axis:"y"})),W(e,b)};z(Ma,e=>{t(g)&&e(La)})}i(ft),Va(2),jt((e,b,E,B,M,l,H,ct,bt,Z,Y,J,Tt,ht)=>{Ct=O(ft,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,Ct,e),ce=O(R,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ce,b),de=O(nt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,de,E),st(Nt,"src",B),fe=O(Nt,1,"w-full h-full object-cover transition-transform duration-300",null,fe,M),X(na,t(I).title),X(la,t(I).artist),he=O(At,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,he,l),st(ge,"src",H),xe=O(ge,1,"w-full h-full object-cover transition-transform duration-300",null,xe,ct),X(ca,t(I).title),X(da,t(I).artist),X(va,`${bt??""} / ${Z??""}`),st(lt,"aria-valuenow",t(F)>0?t(j)/t(F)*100:0),Te(ma,`width: ${t(F)>0?t(j)/t(F)*100:0}%`),we=O(ot,1,"w-10 h-10 rounded-lg",null,we,Y),ot.disabled=t(m).length<=1,pt.disabled=t(m).length<=1,ke=O(ut,1,"btn-regular w-12 h-12 rounded-full",null,ke,J),ut.disabled=t(c),mt.disabled=t(m).length<=1,Ee=O(Dt,1,"w-10 h-10 rounded-lg",null,Ee,Tt),st(rt,"aria-valuenow",t(L)*100),Te(Ba,`width: ${t(L)*100}%`),Fe=O(Lt,1,"btn-plain w-8 h-8 rounded-lg",null,Fe,ht)},[()=>({expanded:t(D),"hidden-mode":t(d)}),()=>({"opacity-0":!t(d),"scale-0":!t(d),"pointer-events-none":!t(d)}),()=>({"opacity-0":t(D)||t(d),"scale-95":t(D)||t(d),"pointer-events-none":t(D)||t(d)}),()=>kt(t(I).cover),()=>({spinning:t(w)&&!t(c),"animate-pulse":t(c)}),()=>({"opacity-0":!t(D),"scale-95":!t(D),"pointer-events-none":!t(D)}),()=>kt(t(I).cover),()=>({spinning:t(w)&&!t(c),"animate-pulse":t(c)}),()=>oe(t(j)),()=>oe(t(F)),()=>({"btn-regular":t(S),"btn-plain":!t(S)}),()=>({"opacity-50":t(c)}),()=>({"btn-regular":t(x)>0,"btn-plain":t(x)===0}),()=>({"text-[var(--primary)]":t(g)})]),y("click",R,_t),y("keydown",R,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),_t())}),y("click",Ft,ze(_t)),y("click",Yt,ze(yt)),y("click",nt,yt),y("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),yt())}),y("click",Bt,_t),y("click",Jt,yt),y("click",lt,Je),y("keydown",lt,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(Q).getBoundingClientRect();const E=.5*t(F);t(a)&&(K(a,t(a).currentTime=E),u(j,E))}}),y("click",ot,Ke),y("click",pt,Ge),y("click",ut,qe),y("click",mt,$t),y("click",Dt,Ue),y("click",Mt,le),y("click",rt,Xe),y("keydown",rt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&le())}),y("click",Lt,re),W(n,P)};z(Qe,n=>{n(Ze)})}W(o,ue),Ja()}export{Ar as default};
