(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Db(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ed={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function Zw(){if(ly)return Xo;ly=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(o,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:n,type:o,key:f,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=t,Xo.jsx=i,Xo.jsxs=i,Xo}var uy;function Qw(){return uy||(uy=1,ed.exports=Zw()),ed.exports}var G=Qw(),nd={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function Ww(){if(cy)return pt;cy=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(E){return E===null||typeof E!="object"?null:(E=y&&E[y]||E["@@iterator"],typeof E=="function"?E:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,_={};function R(E,H,W){this.props=E,this.context=H,this.refs=_,this.updater=W||S}R.prototype.isReactComponent={},R.prototype.setState=function(E,H){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,H,"setState")},R.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function C(){}C.prototype=R.prototype;function M(E,H,W){this.props=E,this.context=H,this.refs=_,this.updater=W||S}var I=M.prototype=new C;I.constructor=M,w(I,R.prototype),I.isPureReactComponent=!0;var K=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},J=Object.prototype.hasOwnProperty;function $(E,H,W,F,Q,rt){return W=rt.ref,{$$typeof:n,type:E,key:H,ref:W!==void 0?W:null,props:rt}}function Y(E,H){return $(E.type,H,void 0,void 0,void 0,E.props)}function Z(E){return typeof E=="object"&&E!==null&&E.$$typeof===n}function bt(E){var H={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(W){return H[W]})}var It=/\/+/g;function Mt(E,H){return typeof E=="object"&&E!==null&&E.key!=null?bt(""+E.key):H.toString(36)}function Wt(){}function we(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(Wt,Wt):(E.status="pending",E.then(function(H){E.status==="pending"&&(E.status="fulfilled",E.value=H)},function(H){E.status==="pending"&&(E.status="rejected",E.reason=H)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function Nt(E,H,W,F,Q){var rt=typeof E;(rt==="undefined"||rt==="boolean")&&(E=null);var nt=!1;if(E===null)nt=!0;else switch(rt){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(E.$$typeof){case n:case t:nt=!0;break;case g:return nt=E._init,Nt(nt(E._payload),H,W,F,Q)}}if(nt)return Q=Q(E),nt=F===""?"."+Mt(E,0):F,K(Q)?(W="",nt!=null&&(W=nt.replace(It,"$&/")+"/"),Nt(Q,H,W,"",function(Ee){return Ee})):Q!=null&&(Z(Q)&&(Q=Y(Q,W+(Q.key==null||E&&E.key===Q.key?"":(""+Q.key).replace(It,"$&/")+"/")+nt)),H.push(Q)),1;nt=0;var Jt=F===""?".":F+":";if(K(E))for(var lt=0;lt<E.length;lt++)F=E[lt],rt=Jt+Mt(F,lt),nt+=Nt(F,H,W,rt,Q);else if(lt=x(E),typeof lt=="function")for(E=lt.call(E),lt=0;!(F=E.next()).done;)F=F.value,rt=Jt+Mt(F,lt++),nt+=Nt(F,H,W,rt,Q);else if(rt==="object"){if(typeof E.then=="function")return Nt(we(E),H,W,F,Q);throw H=String(E),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return nt}function L(E,H,W){if(E==null)return E;var F=[],Q=0;return Nt(E,F,"","",function(rt){return H.call(W,rt,Q++)}),F}function q(E){if(E._status===-1){var H=E._result;H=H(),H.then(function(W){(E._status===0||E._status===-1)&&(E._status=1,E._result=W)},function(W){(E._status===0||E._status===-1)&&(E._status=2,E._result=W)}),E._status===-1&&(E._status=0,E._result=H)}if(E._status===1)return E._result.default;throw E._result}var tt=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function ht(){}return pt.Children={map:L,forEach:function(E,H,W){L(E,function(){H.apply(this,arguments)},W)},count:function(E){var H=0;return L(E,function(){H++}),H},toArray:function(E){return L(E,function(H){return H})||[]},only:function(E){if(!Z(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},pt.Component=R,pt.Fragment=i,pt.Profiler=l,pt.PureComponent=M,pt.StrictMode=o,pt.Suspense=h,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,pt.__COMPILER_RUNTIME={__proto__:null,c:function(E){return z.H.useMemoCache(E)}},pt.cache=function(E){return function(){return E.apply(null,arguments)}},pt.cloneElement=function(E,H,W){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var F=w({},E.props),Q=E.key,rt=void 0;if(H!=null)for(nt in H.ref!==void 0&&(rt=void 0),H.key!==void 0&&(Q=""+H.key),H)!J.call(H,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&H.ref===void 0||(F[nt]=H[nt]);var nt=arguments.length-2;if(nt===1)F.children=W;else if(1<nt){for(var Jt=Array(nt),lt=0;lt<nt;lt++)Jt[lt]=arguments[lt+2];F.children=Jt}return $(E.type,Q,void 0,void 0,rt,F)},pt.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},pt.createElement=function(E,H,W){var F,Q={},rt=null;if(H!=null)for(F in H.key!==void 0&&(rt=""+H.key),H)J.call(H,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(Q[F]=H[F]);var nt=arguments.length-2;if(nt===1)Q.children=W;else if(1<nt){for(var Jt=Array(nt),lt=0;lt<nt;lt++)Jt[lt]=arguments[lt+2];Q.children=Jt}if(E&&E.defaultProps)for(F in nt=E.defaultProps,nt)Q[F]===void 0&&(Q[F]=nt[F]);return $(E,rt,void 0,void 0,null,Q)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(E){return{$$typeof:p,render:E}},pt.isValidElement=Z,pt.lazy=function(E){return{$$typeof:g,_payload:{_status:-1,_result:E},_init:q}},pt.memo=function(E,H){return{$$typeof:m,type:E,compare:H===void 0?null:H}},pt.startTransition=function(E){var H=z.T,W={};z.T=W;try{var F=E(),Q=z.S;Q!==null&&Q(W,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ht,tt)}catch(rt){tt(rt)}finally{z.T=H}},pt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},pt.use=function(E){return z.H.use(E)},pt.useActionState=function(E,H,W){return z.H.useActionState(E,H,W)},pt.useCallback=function(E,H){return z.H.useCallback(E,H)},pt.useContext=function(E){return z.H.useContext(E)},pt.useDebugValue=function(){},pt.useDeferredValue=function(E,H){return z.H.useDeferredValue(E,H)},pt.useEffect=function(E,H,W){var F=z.H;if(typeof W=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(E,H)},pt.useId=function(){return z.H.useId()},pt.useImperativeHandle=function(E,H,W){return z.H.useImperativeHandle(E,H,W)},pt.useInsertionEffect=function(E,H){return z.H.useInsertionEffect(E,H)},pt.useLayoutEffect=function(E,H){return z.H.useLayoutEffect(E,H)},pt.useMemo=function(E,H){return z.H.useMemo(E,H)},pt.useOptimistic=function(E,H){return z.H.useOptimistic(E,H)},pt.useReducer=function(E,H,W){return z.H.useReducer(E,H,W)},pt.useRef=function(E){return z.H.useRef(E)},pt.useState=function(E){return z.H.useState(E)},pt.useSyncExternalStore=function(E,H,W){return z.H.useSyncExternalStore(E,H,W)},pt.useTransition=function(){return z.H.useTransition()},pt.version="19.1.1",pt}var fy;function yh(){return fy||(fy=1,nd.exports=Ww()),nd.exports}var O=yh();const X=Db(O);var ad={exports:{}},Ko={},id={exports:{}},rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function Jw(){return dy||(dy=1,(function(n){function t(L,q){var tt=L.length;L.push(q);t:for(;0<tt;){var ht=tt-1>>>1,E=L[ht];if(0<l(E,q))L[ht]=q,L[tt]=E,tt=ht;else break t}}function i(L){return L.length===0?null:L[0]}function o(L){if(L.length===0)return null;var q=L[0],tt=L.pop();if(tt!==q){L[0]=tt;t:for(var ht=0,E=L.length,H=E>>>1;ht<H;){var W=2*(ht+1)-1,F=L[W],Q=W+1,rt=L[Q];if(0>l(F,tt))Q<E&&0>l(rt,F)?(L[ht]=rt,L[Q]=tt,ht=Q):(L[ht]=F,L[W]=tt,ht=W);else if(Q<E&&0>l(rt,tt))L[ht]=rt,L[Q]=tt,ht=Q;else break t}}return q}function l(L,q){var tt=L.sortIndex-q.sortIndex;return tt!==0?tt:L.id-q.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var h=[],m=[],g=1,y=null,x=3,S=!1,w=!1,_=!1,R=!1,C=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function K(L){for(var q=i(m);q!==null;){if(q.callback===null)o(m);else if(q.startTime<=L)o(m),q.sortIndex=q.expirationTime,t(h,q);else break;q=i(m)}}function z(L){if(_=!1,K(L),!w)if(i(h)!==null)w=!0,J||(J=!0,Mt());else{var q=i(m);q!==null&&Nt(z,q.startTime-L)}}var J=!1,$=-1,Y=5,Z=-1;function bt(){return R?!0:!(n.unstable_now()-Z<Y)}function It(){if(R=!1,J){var L=n.unstable_now();Z=L;var q=!0;try{t:{w=!1,_&&(_=!1,M($),$=-1),S=!0;var tt=x;try{e:{for(K(L),y=i(h);y!==null&&!(y.expirationTime>L&&bt());){var ht=y.callback;if(typeof ht=="function"){y.callback=null,x=y.priorityLevel;var E=ht(y.expirationTime<=L);if(L=n.unstable_now(),typeof E=="function"){y.callback=E,K(L),q=!0;break e}y===i(h)&&o(h),K(L)}else o(h);y=i(h)}if(y!==null)q=!0;else{var H=i(m);H!==null&&Nt(z,H.startTime-L),q=!1}}break t}finally{y=null,x=tt,S=!1}q=void 0}}finally{q?Mt():J=!1}}}var Mt;if(typeof I=="function")Mt=function(){I(It)};else if(typeof MessageChannel<"u"){var Wt=new MessageChannel,we=Wt.port2;Wt.port1.onmessage=It,Mt=function(){we.postMessage(null)}}else Mt=function(){C(It,0)};function Nt(L,q){$=C(function(){L(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_next=function(L){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var tt=x;x=q;try{return L()}finally{x=tt}},n.unstable_requestPaint=function(){R=!0},n.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var tt=x;x=L;try{return q()}finally{x=tt}},n.unstable_scheduleCallback=function(L,q,tt){var ht=n.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?ht+tt:ht):tt=ht,L){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=tt+E,L={id:g++,callback:q,priorityLevel:L,startTime:tt,expirationTime:E,sortIndex:-1},tt>ht?(L.sortIndex=tt,t(m,L),i(h)===null&&L===i(m)&&(_?(M($),$=-1):_=!0,Nt(z,tt-ht))):(L.sortIndex=E,t(h,L),w||S||(w=!0,J||(J=!0,Mt()))),L},n.unstable_shouldYield=bt,n.unstable_wrapCallback=function(L){var q=x;return function(){var tt=x;x=q;try{return L.apply(this,arguments)}finally{x=tt}}}})(rd)),rd}var hy;function tE(){return hy||(hy=1,id.exports=Jw()),id.exports}var od={exports:{}},Te={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function eE(){if(py)return Te;py=1;var n=yh();function t(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(h,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:h,containerInfo:m,implementation:g}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Te.createPortal=function(h,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(h,m,null,g)},Te.flushSync=function(h){var m=f.T,g=o.p;try{if(f.T=null,o.p=2,h)return h()}finally{f.T=m,o.p=g,o.d.f()}},Te.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(h,m))},Te.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},Te.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var g=m.as,y=p(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?o.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:S}):g==="script"&&o.d.X(h,{crossOrigin:y,integrity:x,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Te.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=p(m.as,m.crossOrigin);o.d.M(h,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(h)},Te.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=p(g,m.crossOrigin);o.d.L(h,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Te.preloadModule=function(h,m){if(typeof h=="string")if(m){var g=p(m.as,m.crossOrigin);o.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(h)},Te.requestFormReset=function(h){o.d.r(h)},Te.unstable_batchedUpdates=function(h,m){return h(m)},Te.useFormState=function(h,m,g){return f.H.useFormState(h,m,g)},Te.useFormStatus=function(){return f.H.useHostTransitionStatus()},Te.version="19.1.1",Te}var my;function kb(){if(my)return od.exports;my=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),od.exports=eE(),od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function nE(){if(gy)return Ko;gy=1;var n=tE(),t=yh(),i=kb();function o(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function f(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(o(188))}function h(e){var a=e.alternate;if(!a){if(a=c(e),a===null)throw Error(o(188));return a!==e?null:e}for(var r=e,s=a;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(s=u.return,s!==null){r=s;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return p(u),e;if(d===s)return p(u),a;d=d.sibling}throw Error(o(188))}if(r.return!==s.return)r=u,s=d;else{for(var v=!1,b=u.child;b;){if(b===r){v=!0,r=u,s=d;break}if(b===s){v=!0,s=u,r=d;break}b=b.sibling}if(!v){for(b=d.child;b;){if(b===r){v=!0,r=d,s=u;break}if(b===s){v=!0,s=d,r=u;break}b=b.sibling}if(!v)throw Error(o(189))}}if(r.alternate!==s)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:a}function m(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=m(e),a!==null)return a;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),I=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),bt=Symbol.for("react.memo_cache_sentinel"),It=Symbol.iterator;function Mt(e){return e===null||typeof e!="object"?null:(e=It&&e[It]||e["@@iterator"],typeof e=="function"?e:null)}var Wt=Symbol.for("react.client.reference");function we(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Wt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case R:return"Profiler";case _:return"StrictMode";case z:return"Suspense";case J:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case I:return(e.displayName||"Context")+".Provider";case M:return(e._context.displayName||"Context")+".Consumer";case K:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return a=e.displayName||null,a!==null?a:we(e.type)||"Memo";case Y:a=e._payload,e=e._init;try{return we(e(a))}catch{}}return null}var Nt=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},ht=[],E=-1;function H(e){return{current:e}}function W(e){0>E||(e.current=ht[E],ht[E]=null,E--)}function F(e,a){E++,ht[E]=e.current,e.current=a}var Q=H(null),rt=H(null),nt=H(null),Jt=H(null);function lt(e,a){switch(F(nt,a),F(rt,e),F(Q,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?U0(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=U0(a),e=I0(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}W(Q),F(Q,e)}function Ee(){W(Q),W(rt),W(nt)}function fa(e){e.memoizedState!==null&&F(Jt,e);var a=Q.current,r=I0(a,e.type);a!==r&&(F(rt,e),F(Q,r))}function Un(e){rt.current===e&&(W(Q),W(rt)),Jt.current===e&&(W(Jt),jo._currentValue=tt)}var Tn=Object.prototype.hasOwnProperty,$r=n.unstable_scheduleCallback,Ja=n.unstable_cancelCallback,Fu=n.unstable_shouldYield,Ps=n.unstable_requestPaint,be=n.unstable_now,Ls=n.unstable_getCurrentPriorityLevel,Ye=n.unstable_ImmediatePriority,Us=n.unstable_UserBlockingPriority,Pi=n.unstable_NormalPriority,_e=n.unstable_LowPriority,In=n.unstable_IdlePriority,Gu=n.log,Yu=n.unstable_setDisableYieldValue,Sn=null,Ae=null;function ln(e){if(typeof Gu=="function"&&Yu(e),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Sn,e)}catch{}}var he=Math.clz32?Math.clz32:ha,da=Math.log,Is=Math.LN2;function ha(e){return e>>>=0,e===0?32:31-(da(e)/Is|0)|0}var Li=256,Ui=4194304;function wn(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ti(e,a,r){var s=e.pendingLanes;if(s===0)return 0;var u=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=s&134217727;return b!==0?(s=b&~d,s!==0?u=wn(s):(v&=b,v!==0?u=wn(v):r||(r=b&~e,r!==0&&(u=wn(r))))):(b=s&~d,b!==0?u=wn(b):v!==0?u=wn(v):r||(r=s&~e,r!==0&&(u=wn(r)))),u===0?0:a!==0&&a!==u&&(a&d)===0&&(d=u&-u,r=a&-a,d>=r||d===32&&(r&4194048)!==0)?a:u}function ei(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Zr(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function un(){var e=Li;return Li<<=1,(Li&4194048)===0&&(Li=256),e}function Bs(){var e=Ui;return Ui<<=1,(Ui&62914560)===0&&(Ui=4194304),e}function Qr(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function pa(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zs(e,a,r,s,u,d){var v=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var b=e.entanglements,T=e.expirationTimes,N=e.hiddenUpdates;for(r=v&~r;0<r;){var B=31-he(r),j=1<<B;b[B]=0,T[B]=-1;var P=N[B];if(P!==null)for(N[B]=null,B=0;B<P.length;B++){var U=P[B];U!==null&&(U.lane&=-536870913)}r&=~j}s!==0&&dt(e,s,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~a))}function dt(e,a,r){e.pendingLanes|=a,e.suspendedLanes&=~a;var s=31-he(a);e.entangledLanes|=a,e.entanglements[s]=e.entanglements[s]|1073741824|r&4194090}function Yt(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var s=31-he(r),u=1<<s;u&a|e[s]&a&&(e[s]|=a),r&=~u}}function te(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ni(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:ny(e.type))}function ie(e,a){var r=q.p;try{return q.p=e,a()}finally{q.p=r}}var Xt=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Xt,Dt="__reactProps$"+Xt,le="__reactContainer$"+Xt,Ii="__reactEvents$"+Xt,Bn="__reactListeners$"+Xt,wp="__reactHandles$"+Xt,Ep="__reactResources$"+Xt,Wr="__reactMarker$"+Xt;function Xu(e){delete e[Kt],delete e[Dt],delete e[Ii],delete e[Bn],delete e[wp]}function Bi(e){var a=e[Kt];if(a)return a;for(var r=e.parentNode;r;){if(a=r[le]||r[Kt]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=H0(e);e!==null;){if(r=e[Kt])return r;e=H0(e)}return a}e=r,r=e.parentNode}return null}function zi(e){if(e=e[Kt]||e[le]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function Jr(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(o(33))}function Vi(e){var a=e[Ep];return a||(a=e[Ep]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ue(e){e[Wr]=!0}var _p=new Set,Ap={};function ai(e,a){Hi(e,a),Hi(e+"Capture",a)}function Hi(e,a){for(Ap[e]=a,e=0;e<a.length;e++)_p.add(a[e])}var jT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rp={},Op={};function qT(e){return Tn.call(Op,e)?!0:Tn.call(Rp,e)?!1:jT.test(e)?Op[e]=!0:(Rp[e]=!0,!1)}function Vs(e,a,r){if(qT(a))if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var s=a.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+r)}}function Hs(e,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+r)}}function zn(e,a,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(a,r,""+s)}}var Ku,Cp;function ji(e){if(Ku===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);Ku=a&&a[1]||"",Cp=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ku+e+Cp}var $u=!1;function Zu(e,a){if(!e||$u)return"";$u=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(a){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(U){var P=U}Reflect.construct(e,[],j)}else{try{j.call()}catch(U){P=U}e.call(j.prototype)}}else{try{throw Error()}catch(U){P=U}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(U){if(U&&P&&typeof U.stack=="string")return[U.stack,P.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=s.DetermineComponentFrameRoot(),v=d[0],b=d[1];if(v&&b){var T=v.split(`
`),N=b.split(`
`);for(u=s=0;s<T.length&&!T[s].includes("DetermineComponentFrameRoot");)s++;for(;u<N.length&&!N[u].includes("DetermineComponentFrameRoot");)u++;if(s===T.length||u===N.length)for(s=T.length-1,u=N.length-1;1<=s&&0<=u&&T[s]!==N[u];)u--;for(;1<=s&&0<=u;s--,u--)if(T[s]!==N[u]){if(s!==1||u!==1)do if(s--,u--,0>u||T[s]!==N[u]){var B=`
`+T[s].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=s&&0<=u);break}}}finally{$u=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?ji(r):""}function FT(e){switch(e.tag){case 26:case 27:case 5:return ji(e.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 15:return Zu(e.type,!1);case 11:return Zu(e.type.render,!1);case 1:return Zu(e.type,!0);case 31:return ji("Activity");default:return""}}function Dp(e){try{var a="";do a+=FT(e),e=e.return;while(e);return a}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kp(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function GT(e){var a=kp(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),s=""+e[a];if(!e.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,d=r.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return u.call(this)},set:function(v){s=""+v,d.call(this,v)}}),Object.defineProperty(e,a,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function js(e){e._valueTracker||(e._valueTracker=GT(e))}function Mp(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),s="";return e&&(s=kp(e)?e.checked?"true":"false":e.value),e=s,e!==r?(a.setValue(e),!0):!1}function qs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var YT=/[\n"\\]/g;function Ke(e){return e.replace(YT,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Qu(e,a,r,s,u,d,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),a!=null?v==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Xe(a)):e.value!==""+Xe(a)&&(e.value=""+Xe(a)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),a!=null?Wu(e,v,Xe(a)):r!=null?Wu(e,v,Xe(r)):s!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Xe(b):e.removeAttribute("name")}function Np(e,a,r,s,u,d,v,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),a!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||a!=null))return;r=r!=null?""+Xe(r):"",a=a!=null?""+Xe(a):r,b||a===e.value||(e.value=a),e.defaultValue=a}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=b?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function Wu(e,a,r){a==="number"&&qs(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function qi(e,a,r,s){if(e=e.options,a){a={};for(var u=0;u<r.length;u++)a["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=a.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Xe(r),a=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}a!==null||e[u].disabled||(a=e[u])}a!==null&&(a.selected=!0)}}function Pp(e,a,r){if(a!=null&&(a=""+Xe(a),a!==e.value&&(e.value=a),r==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=r!=null?""+Xe(r):""}function Lp(e,a,r,s){if(a==null){if(s!=null){if(r!=null)throw Error(o(92));if(Nt(s)){if(1<s.length)throw Error(o(93));s=s[0]}r=s}r==null&&(r=""),a=r}r=Xe(a),e.defaultValue=r,s=e.textContent,s===r&&s!==""&&s!==null&&(e.value=s)}function Fi(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var XT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Up(e,a,r){var s=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?s?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":s?e.setProperty(a,r):typeof r!="number"||r===0||XT.has(a)?a==="float"?e.cssFloat=r:e[a]=(""+r).trim():e[a]=r+"px"}function Ip(e,a,r){if(a!=null&&typeof a!="object")throw Error(o(62));if(e=e.style,r!=null){for(var s in r)!r.hasOwnProperty(s)||a!=null&&a.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in a)s=a[u],a.hasOwnProperty(u)&&r[u]!==s&&Up(e,u,s)}else for(var d in a)a.hasOwnProperty(d)&&Up(e,d,a[d])}function Ju(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var KT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$T=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fs(e){return $T.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var tc=null;function ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gi=null,Yi=null;function Bp(e){var a=zi(e);if(a&&(e=a.stateNode)){var r=e[Dt]||null;t:switch(e=a.stateNode,a.type){case"input":if(Qu(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ke(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var s=r[a];if(s!==e&&s.form===e.form){var u=s[Dt]||null;if(!u)throw Error(o(90));Qu(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(a=0;a<r.length;a++)s=r[a],s.form===e.form&&Mp(s)}break t;case"textarea":Pp(e,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&qi(e,!!r.multiple,a,!1)}}}var nc=!1;function zp(e,a,r){if(nc)return e(a,r);nc=!0;try{var s=e(a);return s}finally{if(nc=!1,(Gi!==null||Yi!==null)&&(Cl(),Gi&&(a=Gi,e=Yi,Yi=Gi=null,Bp(a),e)))for(a=0;a<e.length;a++)Bp(e[a])}}function to(e,a){var r=e.stateNode;if(r===null)return null;var s=r[Dt]||null;if(s===null)return null;r=s[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,a,typeof r));return r}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=!1;if(Vn)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){ac=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{ac=!1}var ma=null,ic=null,Gs=null;function Vp(){if(Gs)return Gs;var e,a=ic,r=a.length,s,u="value"in ma?ma.value:ma.textContent,d=u.length;for(e=0;e<r&&a[e]===u[e];e++);var v=r-e;for(s=1;s<=v&&a[r-s]===u[d-s];s++);return Gs=u.slice(e,1<s?1-s:void 0)}function Ys(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Xs(){return!0}function Hp(){return!1}function Me(e){function a(r,s,u,d,v){this._reactName=r,this._targetInst=u,this.type=s,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(r=e[b],this[b]=r?r(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Xs:Hp,this.isPropagationStopped=Hp,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),a}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=Me(ii),no=g({},ii,{view:0,detail:0}),ZT=Me(no),rc,oc,ao,$s=g({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ao&&(ao&&e.type==="mousemove"?(rc=e.screenX-ao.screenX,oc=e.screenY-ao.screenY):oc=rc=0,ao=e),rc)},movementY:function(e){return"movementY"in e?e.movementY:oc}}),jp=Me($s),QT=g({},$s,{dataTransfer:0}),WT=Me(QT),JT=g({},no,{relatedTarget:0}),sc=Me(JT),tS=g({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),eS=Me(tS),nS=g({},ii,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),aS=Me(nS),iS=g({},ii,{data:0}),qp=Me(iS),rS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=sS[e])?!!a[e]:!1}function lc(){return lS}var uS=g({},no,{key:function(e){if(e.key){var a=rS[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(e){return e.type==="keypress"?Ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cS=Me(uS),fS=g({},$s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Me(fS),dS=g({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),hS=Me(dS),pS=g({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=Me(pS),gS=g({},$s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yS=Me(gS),vS=g({},ii,{newState:0,oldState:0}),bS=Me(vS),xS=[9,13,27,32],uc=Vn&&"CompositionEvent"in window,io=null;Vn&&"documentMode"in document&&(io=document.documentMode);var TS=Vn&&"TextEvent"in window&&!io,Gp=Vn&&(!uc||io&&8<io&&11>=io),Yp=" ",Xp=!1;function Kp(e,a){switch(e){case"keyup":return xS.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xi=!1;function SS(e,a){switch(e){case"compositionend":return $p(a);case"keypress":return a.which!==32?null:(Xp=!0,Yp);case"textInput":return e=a.data,e===Yp&&Xp?null:e;default:return null}}function wS(e,a){if(Xi)return e==="compositionend"||!uc&&Kp(e,a)?(e=Vp(),Gs=ic=ma=null,Xi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Gp&&a.locale!=="ko"?null:a.data;default:return null}}var ES={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!ES[e.type]:a==="textarea"}function Qp(e,a,r,s){Gi?Yi?Yi.push(s):Yi=[s]:Gi=s,a=Ll(a,"onChange"),0<a.length&&(r=new Ks("onChange","change",null,r,s),e.push({event:r,listeners:a}))}var ro=null,oo=null;function _S(e){k0(e,0)}function Zs(e){var a=Jr(e);if(Mp(a))return e}function Wp(e,a){if(e==="change")return a}var Jp=!1;if(Vn){var cc;if(Vn){var fc="oninput"in document;if(!fc){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),fc=typeof tm.oninput=="function"}cc=fc}else cc=!1;Jp=cc&&(!document.documentMode||9<document.documentMode)}function em(){ro&&(ro.detachEvent("onpropertychange",nm),oo=ro=null)}function nm(e){if(e.propertyName==="value"&&Zs(oo)){var a=[];Qp(a,oo,e,ec(e)),zp(_S,a)}}function AS(e,a,r){e==="focusin"?(em(),ro=a,oo=r,ro.attachEvent("onpropertychange",nm)):e==="focusout"&&em()}function RS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zs(oo)}function OS(e,a){if(e==="click")return Zs(a)}function CS(e,a){if(e==="input"||e==="change")return Zs(a)}function DS(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Be=typeof Object.is=="function"?Object.is:DS;function so(e,a){if(Be(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),s=Object.keys(a);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var u=r[s];if(!Tn.call(a,u)||!Be(e[u],a[u]))return!1}return!0}function am(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function im(e,a){var r=am(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=a&&s>=a)return{node:r,offset:a-e};e=s}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=am(r)}}function rm(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?rm(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function om(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=qs(e.document);a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=qs(e.document)}return a}function dc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var kS=Vn&&"documentMode"in document&&11>=document.documentMode,Ki=null,hc=null,lo=null,pc=!1;function sm(e,a,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;pc||Ki==null||Ki!==qs(s)||(s=Ki,"selectionStart"in s&&dc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),lo&&so(lo,s)||(lo=s,s=Ll(hc,"onSelect"),0<s.length&&(a=new Ks("onSelect","select",null,a,r),e.push({event:a,listeners:s}),a.target=Ki)))}function ri(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var $i={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionrun:ri("Transition","TransitionRun"),transitionstart:ri("Transition","TransitionStart"),transitioncancel:ri("Transition","TransitionCancel"),transitionend:ri("Transition","TransitionEnd")},mc={},lm={};Vn&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function oi(e){if(mc[e])return mc[e];if(!$i[e])return e;var a=$i[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in lm)return mc[e]=a[r];return e}var um=oi("animationend"),cm=oi("animationiteration"),fm=oi("animationstart"),MS=oi("transitionrun"),NS=oi("transitionstart"),PS=oi("transitioncancel"),dm=oi("transitionend"),hm=new Map,gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gc.push("scrollEnd");function cn(e,a){hm.set(e,a),ai(a,[e])}var pm=new WeakMap;function $e(e,a){if(typeof e=="object"&&e!==null){var r=pm.get(e);return r!==void 0?r:(a={value:e,source:a,stack:Dp(a)},pm.set(e,a),a)}return{value:e,source:a,stack:Dp(a)}}var Ze=[],Zi=0,yc=0;function Qs(){for(var e=Zi,a=yc=Zi=0;a<e;){var r=Ze[a];Ze[a++]=null;var s=Ze[a];Ze[a++]=null;var u=Ze[a];Ze[a++]=null;var d=Ze[a];if(Ze[a++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}d!==0&&mm(r,u,d)}}function Ws(e,a,r,s){Ze[Zi++]=e,Ze[Zi++]=a,Ze[Zi++]=r,Ze[Zi++]=s,yc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function vc(e,a,r,s){return Ws(e,a,r,s),Js(e)}function Qi(e,a){return Ws(e,null,null,a),Js(e)}function mm(e,a,r){e.lanes|=r;var s=e.alternate;s!==null&&(s.lanes|=r);for(var u=!1,d=e.return;d!==null;)d.childLanes|=r,s=d.alternate,s!==null&&(s.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&a!==null&&(u=31-he(r),e=d.hiddenUpdates,s=e[u],s===null?e[u]=[a]:s.push(a),a.lane=r|536870912),d):null}function Js(e){if(50<Po)throw Po=0,_f=null,Error(o(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Wi={};function LS(e,a,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,a,r,s){return new LS(e,a,r,s)}function bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hn(e,a){var r=e.alternate;return r===null?(r=ze(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function gm(e,a){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,a=r.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function tl(e,a,r,s,u,d){var v=0;if(s=e,typeof e=="function")bc(e)&&(v=1);else if(typeof e=="string")v=Iw(e,r,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Z:return e=ze(31,r,a,u),e.elementType=Z,e.lanes=d,e;case w:return si(r.children,u,d,a);case _:v=8,u|=24;break;case R:return e=ze(12,r,a,u|2),e.elementType=R,e.lanes=d,e;case z:return e=ze(13,r,a,u),e.elementType=z,e.lanes=d,e;case J:return e=ze(19,r,a,u),e.elementType=J,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:case I:v=10;break t;case M:v=9;break t;case K:v=11;break t;case $:v=14;break t;case Y:v=16,s=null;break t}v=29,r=Error(o(130,e===null?"null":typeof e,"")),s=null}return a=ze(v,r,a,u),a.elementType=e,a.type=s,a.lanes=d,a}function si(e,a,r,s){return e=ze(7,e,s,a),e.lanes=r,e}function xc(e,a,r){return e=ze(6,e,null,a),e.lanes=r,e}function Tc(e,a,r){return a=ze(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Ji=[],tr=0,el=null,nl=0,Qe=[],We=0,li=null,jn=1,qn="";function ui(e,a){Ji[tr++]=nl,Ji[tr++]=el,el=e,nl=a}function ym(e,a,r){Qe[We++]=jn,Qe[We++]=qn,Qe[We++]=li,li=e;var s=jn;e=qn;var u=32-he(s)-1;s&=~(1<<u),r+=1;var d=32-he(a)+u;if(30<d){var v=u-u%5;d=(s&(1<<v)-1).toString(32),s>>=v,u-=v,jn=1<<32-he(a)+u|r<<u|s,qn=d+e}else jn=1<<d|r<<u|s,qn=e}function Sc(e){e.return!==null&&(ui(e,1),ym(e,1,0))}function wc(e){for(;e===el;)el=Ji[--tr],Ji[tr]=null,nl=Ji[--tr],Ji[tr]=null;for(;e===li;)li=Qe[--We],Qe[We]=null,qn=Qe[--We],Qe[We]=null,jn=Qe[--We],Qe[We]=null}var Re=null,Ht=null,St=!1,ci=null,En=!1,Ec=Error(o(519));function fi(e){var a=Error(o(418,""));throw fo($e(a,e)),Ec}function vm(e){var a=e.stateNode,r=e.type,s=e.memoizedProps;switch(a[Kt]=e,a[Dt]=s,r){case"dialog":vt("cancel",a),vt("close",a);break;case"iframe":case"object":case"embed":vt("load",a);break;case"video":case"audio":for(r=0;r<Uo.length;r++)vt(Uo[r],a);break;case"source":vt("error",a);break;case"img":case"image":case"link":vt("error",a),vt("load",a);break;case"details":vt("toggle",a);break;case"input":vt("invalid",a),Np(a,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),js(a);break;case"select":vt("invalid",a);break;case"textarea":vt("invalid",a),Lp(a,s.value,s.defaultValue,s.children),js(a)}r=s.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||s.suppressHydrationWarning===!0||L0(a.textContent,r)?(s.popover!=null&&(vt("beforetoggle",a),vt("toggle",a)),s.onScroll!=null&&vt("scroll",a),s.onScrollEnd!=null&&vt("scrollend",a),s.onClick!=null&&(a.onclick=Ul),a=!0):a=!1,a||fi(e)}function bm(e){for(Re=e.return;Re;)switch(Re.tag){case 5:case 13:En=!1;return;case 27:case 3:En=!0;return;default:Re=Re.return}}function uo(e){if(e!==Re)return!1;if(!St)return bm(e),St=!0,!1;var a=e.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Hf(e.type,e.memoizedProps)),r=!r),r&&Ht&&fi(e),bm(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));t:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(a===0){Ht=dn(e.nextSibling);break t}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++;e=e.nextSibling}Ht=null}}else a===27?(a=Ht,ka(e.type)?(e=Gf,Gf=null,Ht=e):Ht=a):Ht=Re?dn(e.stateNode.nextSibling):null;return!0}function co(){Ht=Re=null,St=!1}function xm(){var e=ci;return e!==null&&(Le===null?Le=e:Le.push.apply(Le,e),ci=null),e}function fo(e){ci===null?ci=[e]:ci.push(e)}var _c=H(null),di=null,Fn=null;function ga(e,a,r){F(_c,a._currentValue),a._currentValue=r}function Gn(e){e._currentValue=_c.current,W(_c)}function Ac(e,a,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,s!==null&&(s.childLanes|=a)):s!==null&&(s.childLanes&a)!==a&&(s.childLanes|=a),e===r)break;e=e.return}}function Rc(e,a,r,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var v=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var T=0;T<a.length;T++)if(b.context===a[T]){d.lanes|=r,b=d.alternate,b!==null&&(b.lanes|=r),Ac(d.return,r,e),s||(v=null);break t}d=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(o(341));v.lanes|=r,d=v.alternate,d!==null&&(d.lanes|=r),Ac(v,r,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function ho(e,a,r,s){e=null;for(var u=a,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(o(387));if(v=v.memoizedProps,v!==null){var b=u.type;Be(u.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(u===Jt.current){if(v=u.alternate,v===null)throw Error(o(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(jo):e=[jo])}u=u.return}e!==null&&Rc(a,e,r,s),a.flags|=262144}function al(e){for(e=e.firstContext;e!==null;){if(!Be(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hi(e){di=e,Fn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xe(e){return Tm(di,e)}function il(e,a){return di===null&&hi(e),Tm(e,a)}function Tm(e,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},Fn===null){if(e===null)throw Error(o(308));Fn=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Fn=Fn.next=a;return r}var US=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(r,s){e.push(s)}};this.abort=function(){a.aborted=!0,e.forEach(function(r){return r()})}},IS=n.unstable_scheduleCallback,BS=n.unstable_NormalPriority,re={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oc(){return{controller:new US,data:new Map,refCount:0}}function po(e){e.refCount--,e.refCount===0&&IS(BS,function(){e.controller.abort()})}var mo=null,Cc=0,er=0,nr=null;function zS(e,a){if(mo===null){var r=mo=[];Cc=0,er=Mf(),nr={status:"pending",value:void 0,then:function(s){r.push(s)}}}return Cc++,a.then(Sm,Sm),a}function Sm(){if(--Cc===0&&mo!==null){nr!==null&&(nr.status="fulfilled");var e=mo;mo=null,er=0,nr=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function VS(e,a){var r=[],s={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){s.status="fulfilled",s.value=a;for(var u=0;u<r.length;u++)(0,r[u])(a)},function(u){for(s.status="rejected",s.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),s}var wm=L.S;L.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&zS(e,a),wm!==null&&wm(e,a)};var pi=H(null);function Dc(){var e=pi.current;return e!==null?e:kt.pooledCache}function rl(e,a){a===null?F(pi,pi.current):F(pi,a.pool)}function Em(){var e=Dc();return e===null?null:{parent:re._currentValue,pool:e}}var go=Error(o(460)),_m=Error(o(474)),ol=Error(o(542)),kc={then:function(){}};function Am(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sl(){}function Rm(e,a,r){switch(r=e[r],r===void 0?e.push(a):r!==a&&(a.then(sl,sl),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Cm(e),e;default:if(typeof a.status=="string")a.then(sl,sl);else{if(e=kt,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=a,e.status="pending",e.then(function(s){if(a.status==="pending"){var u=a;u.status="fulfilled",u.value=s}},function(s){if(a.status==="pending"){var u=a;u.status="rejected",u.reason=s}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Cm(e),e}throw yo=a,go}}var yo=null;function Om(){if(yo===null)throw Error(o(459));var e=yo;return yo=null,e}function Cm(e){if(e===go||e===ol)throw Error(o(483))}var ya=!1;function Mc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nc(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,a,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(wt&2)!==0){var u=s.pending;return u===null?a.next=a:(a.next=u.next,u.next=a),s.pending=a,a=Js(e),mm(e,null,r),a}return Ws(e,s,a,r),Js(e)}function vo(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var s=a.lanes;s&=e.pendingLanes,r|=s,a.lanes=r,Yt(e,r)}}function Pc(e,a){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var v={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=v:d=d.next=v,r=r.next}while(r!==null);d===null?u=d=a:d=d.next=a}else u=d=a;r={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:s.shared,callbacks:s.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}var Lc=!1;function bo(){if(Lc){var e=nr;if(e!==null)throw e}}function xo(e,a,r,s){Lc=!1;var u=e.updateQueue;ya=!1;var d=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var T=b,N=T.next;T.next=null,v===null?d=N:v.next=N,v=T;var B=e.alternate;B!==null&&(B=B.updateQueue,b=B.lastBaseUpdate,b!==v&&(b===null?B.firstBaseUpdate=N:b.next=N,B.lastBaseUpdate=T))}if(d!==null){var j=u.baseState;v=0,B=N=T=null,b=d;do{var P=b.lane&-536870913,U=P!==b.lane;if(U?(xt&P)===P:(s&P)===P){P!==0&&P===er&&(Lc=!0),B!==null&&(B=B.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ct=e,ot=b;P=a;var Rt=r;switch(ot.tag){case 1:if(ct=ot.payload,typeof ct=="function"){j=ct.call(Rt,j,P);break t}j=ct;break t;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=ot.payload,P=typeof ct=="function"?ct.call(Rt,j,P):ct,P==null)break t;j=g({},j,P);break t;case 2:ya=!0}}P=b.callback,P!==null&&(e.flags|=64,U&&(e.flags|=8192),U=u.callbacks,U===null?u.callbacks=[P]:U.push(P))}else U={lane:P,tag:b.tag,payload:b.payload,callback:b.callback,next:null},B===null?(N=B=U,T=j):B=B.next=U,v|=P;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;U=b,b=U.next,U.next=null,u.lastBaseUpdate=U,u.shared.pending=null}}while(!0);B===null&&(T=j),u.baseState=T,u.firstBaseUpdate=N,u.lastBaseUpdate=B,d===null&&(u.shared.lanes=0),Ra|=v,e.lanes=v,e.memoizedState=j}}function Dm(e,a){if(typeof e!="function")throw Error(o(191,e));e.call(a)}function km(e,a){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Dm(r[e],a)}var ar=H(null),ll=H(0);function Mm(e,a){e=Wn,F(ll,e),F(ar,a),Wn=e|a.baseLanes}function Uc(){F(ll,Wn),F(ar,ar.current)}function Ic(){Wn=ll.current,W(ar),W(ll)}var xa=0,mt=null,_t=null,ee=null,ul=!1,ir=!1,mi=!1,cl=0,To=0,rr=null,HS=0;function $t(){throw Error(o(321))}function Bc(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!Be(e[r],a[r]))return!1;return!0}function zc(e,a,r,s,u,d){return xa=d,mt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,L.H=e===null||e.memoizedState===null?mg:gg,mi=!1,d=r(s,u),mi=!1,ir&&(d=Pm(a,r,s,u)),Nm(e),d}function Nm(e){L.H=gl;var a=_t!==null&&_t.next!==null;if(xa=0,ee=_t=mt=null,ul=!1,To=0,rr=null,a)throw Error(o(300));e===null||ce||(e=e.dependencies,e!==null&&al(e)&&(ce=!0))}function Pm(e,a,r,s){mt=e;var u=0;do{if(ir&&(rr=null),To=0,ir=!1,25<=u)throw Error(o(301));if(u+=1,ee=_t=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}L.H=KS,d=a(r,s)}while(ir);return d}function jS(){var e=L.H,a=e.useState()[0];return a=typeof a.then=="function"?So(a):a,e=e.useState()[0],(_t!==null?_t.memoizedState:null)!==e&&(mt.flags|=1024),a}function Vc(){var e=cl!==0;return cl=0,e}function Hc(e,a,r){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r}function jc(e){if(ul){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}ul=!1}xa=0,ee=_t=mt=null,ir=!1,To=cl=0,rr=null}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?mt.memoizedState=ee=e:ee=ee.next=e,ee}function ne(){if(_t===null){var e=mt.alternate;e=e!==null?e.memoizedState:null}else e=_t.next;var a=ee===null?mt.memoizedState:ee.next;if(a!==null)ee=a,_t=e;else{if(e===null)throw mt.alternate===null?Error(o(467)):Error(o(310));_t=e,e={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},ee===null?mt.memoizedState=ee=e:ee=ee.next=e}return ee}function qc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(e){var a=To;return To+=1,rr===null&&(rr=[]),e=Rm(rr,e,a),a=mt,(ee===null?a.memoizedState:ee.next)===null&&(a=a.alternate,L.H=a===null||a.memoizedState===null?mg:gg),e}function fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return So(e);if(e.$$typeof===I)return xe(e)}throw Error(o(438,String(e)))}function Fc(e){var a=null,r=mt.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var s=mt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(a={data:s.data.map(function(u){return u.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=qc(),mt.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(e),s=0;s<e;s++)r[s]=bt;return a.index++,r}function Yn(e,a){return typeof a=="function"?a(e):a}function dl(e){var a=ne();return Gc(a,_t,e)}function Gc(e,a,r){var s=e.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=r;var u=e.baseQueue,d=s.pending;if(d!==null){if(u!==null){var v=u.next;u.next=d.next,d.next=v}a.baseQueue=u=d,s.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{a=u.next;var b=v=null,T=null,N=a,B=!1;do{var j=N.lane&-536870913;if(j!==N.lane?(xt&j)===j:(xa&j)===j){var P=N.revertLane;if(P===0)T!==null&&(T=T.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),j===er&&(B=!0);else if((xa&P)===P){N=N.next,P===er&&(B=!0);continue}else j={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},T===null?(b=T=j,v=d):T=T.next=j,mt.lanes|=P,Ra|=P;j=N.action,mi&&r(d,j),d=N.hasEagerState?N.eagerState:r(d,j)}else P={lane:j,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},T===null?(b=T=P,v=d):T=T.next=P,mt.lanes|=j,Ra|=j;N=N.next}while(N!==null&&N!==a);if(T===null?v=d:T.next=b,!Be(d,e.memoizedState)&&(ce=!0,B&&(r=nr,r!==null)))throw r;e.memoizedState=d,e.baseState=v,e.baseQueue=T,s.lastRenderedState=d}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Yc(e){var a=ne(),r=a.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=r.dispatch,u=r.pending,d=a.memoizedState;if(u!==null){r.pending=null;var v=u=u.next;do d=e(d,v.action),v=v.next;while(v!==u);Be(d,a.memoizedState)||(ce=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),r.lastRenderedState=d}return[d,s]}function Lm(e,a,r){var s=mt,u=ne(),d=St;if(d){if(r===void 0)throw Error(o(407));r=r()}else r=a();var v=!Be((_t||u).memoizedState,r);v&&(u.memoizedState=r,ce=!0),u=u.queue;var b=Bm.bind(null,s,u,e);if(wo(2048,8,b,[e]),u.getSnapshot!==a||v||ee!==null&&ee.memoizedState.tag&1){if(s.flags|=2048,or(9,hl(),Im.bind(null,s,u,r,a),null),kt===null)throw Error(o(349));d||(xa&124)!==0||Um(s,a,r)}return r}function Um(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=mt.updateQueue,a===null?(a=qc(),mt.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function Im(e,a,r,s){a.value=r,a.getSnapshot=s,zm(a)&&Vm(e)}function Bm(e,a,r){return r(function(){zm(a)&&Vm(e)})}function zm(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!Be(e,r)}catch{return!0}}function Vm(e){var a=Qi(e,2);a!==null&&Fe(a,e,2)}function Xc(e){var a=Ne();if(typeof e=="function"){var r=e;if(e=r(),mi){ln(!0);try{r()}finally{ln(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},a}function Hm(e,a,r,s){return e.baseState=r,Gc(e,_t,typeof s=="function"?s:Yn)}function qS(e,a,r,s,u){if(ml(e))throw Error(o(485));if(e=a.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};L.T!==null?r(!0):d.isTransition=!1,s(d),r=a.pending,r===null?(d.next=a.pending=d,jm(a,d)):(d.next=r.next,a.pending=r.next=d)}}function jm(e,a){var r=a.action,s=a.payload,u=e.state;if(a.isTransition){var d=L.T,v={};L.T=v;try{var b=r(u,s),T=L.S;T!==null&&T(v,b),qm(e,a,b)}catch(N){Kc(e,a,N)}finally{L.T=d}}else try{d=r(u,s),qm(e,a,d)}catch(N){Kc(e,a,N)}}function qm(e,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(s){Fm(e,a,s)},function(s){return Kc(e,a,s)}):Fm(e,a,r)}function Fm(e,a,r){a.status="fulfilled",a.value=r,Gm(a),e.state=r,a=e.pending,a!==null&&(r=a.next,r===a?e.pending=null:(r=r.next,a.next=r,jm(e,r)))}function Kc(e,a,r){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do a.status="rejected",a.reason=r,Gm(a),a=a.next;while(a!==s)}e.action=null}function Gm(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Ym(e,a){return a}function Xm(e,a){if(St){var r=kt.formState;if(r!==null){t:{var s=mt;if(St){if(Ht){e:{for(var u=Ht,d=En;u.nodeType!==8;){if(!d){u=null;break e}if(u=dn(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ht=dn(u.nextSibling),s=u.data==="F!";break t}}fi(s)}s=!1}s&&(a=r[0])}}return r=Ne(),r.memoizedState=r.baseState=a,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ym,lastRenderedState:a},r.queue=s,r=dg.bind(null,mt,s),s.dispatch=r,s=Xc(!1),d=Jc.bind(null,mt,!1,s.queue),s=Ne(),u={state:a,dispatch:null,action:e,pending:null},s.queue=u,r=qS.bind(null,mt,u,d,r),u.dispatch=r,s.memoizedState=e,[a,r,!1]}function Km(e){var a=ne();return $m(a,_t,e)}function $m(e,a,r){if(a=Gc(e,a,Ym)[0],e=dl(Yn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var s=So(a)}catch(v){throw v===go?ol:v}else s=a;a=ne();var u=a.queue,d=u.dispatch;return r!==a.memoizedState&&(mt.flags|=2048,or(9,hl(),FS.bind(null,u,r),null)),[s,d,e]}function FS(e,a){e.action=a}function Zm(e){var a=ne(),r=_t;if(r!==null)return $m(a,r,e);ne(),a=a.memoizedState,r=ne();var s=r.queue.dispatch;return r.memoizedState=e,[a,s,!1]}function or(e,a,r,s){return e={tag:e,create:r,deps:s,inst:a,next:null},a=mt.updateQueue,a===null&&(a=qc(),mt.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,a.lastEffect=e),e}function hl(){return{destroy:void 0,resource:void 0}}function Qm(){return ne().memoizedState}function pl(e,a,r,s){var u=Ne();s=s===void 0?null:s,mt.flags|=e,u.memoizedState=or(1|a,hl(),r,s)}function wo(e,a,r,s){var u=ne();s=s===void 0?null:s;var d=u.memoizedState.inst;_t!==null&&s!==null&&Bc(s,_t.memoizedState.deps)?u.memoizedState=or(a,d,r,s):(mt.flags|=e,u.memoizedState=or(1|a,d,r,s))}function Wm(e,a){pl(8390656,8,e,a)}function Jm(e,a){wo(2048,8,e,a)}function tg(e,a){return wo(4,2,e,a)}function eg(e,a){return wo(4,4,e,a)}function ng(e,a){if(typeof a=="function"){e=e();var r=a(e);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function ag(e,a,r){r=r!=null?r.concat([e]):null,wo(4,4,ng.bind(null,a,e),r)}function $c(){}function ig(e,a){var r=ne();a=a===void 0?null:a;var s=r.memoizedState;return a!==null&&Bc(a,s[1])?s[0]:(r.memoizedState=[e,a],e)}function rg(e,a){var r=ne();a=a===void 0?null:a;var s=r.memoizedState;if(a!==null&&Bc(a,s[1]))return s[0];if(s=e(),mi){ln(!0);try{e()}finally{ln(!1)}}return r.memoizedState=[s,a],s}function Zc(e,a,r){return r===void 0||(xa&1073741824)!==0?e.memoizedState=a:(e.memoizedState=r,e=l0(),mt.lanes|=e,Ra|=e,r)}function og(e,a,r,s){return Be(r,a)?r:ar.current!==null?(e=Zc(e,r,s),Be(e,a)||(ce=!0),e):(xa&42)===0?(ce=!0,e.memoizedState=r):(e=l0(),mt.lanes|=e,Ra|=e,a)}function sg(e,a,r,s,u){var d=q.p;q.p=d!==0&&8>d?d:8;var v=L.T,b={};L.T=b,Jc(e,!1,a,r);try{var T=u(),N=L.S;if(N!==null&&N(b,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var B=VS(T,s);Eo(e,a,B,qe(e))}else Eo(e,a,s,qe(e))}catch(j){Eo(e,a,{then:function(){},status:"rejected",reason:j},qe())}finally{q.p=d,L.T=v}}function GS(){}function Qc(e,a,r,s){if(e.tag!==5)throw Error(o(476));var u=lg(e).queue;sg(e,u,a,tt,r===null?GS:function(){return ug(e),r(s)})}function lg(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:tt},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:r},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function ug(e){var a=lg(e).next.queue;Eo(e,a,{},qe())}function Wc(){return xe(jo)}function cg(){return ne().memoizedState}function fg(){return ne().memoizedState}function YS(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var r=qe();e=va(r);var s=ba(a,e,r);s!==null&&(Fe(s,a,r),vo(s,a,r)),a={cache:Oc()},e.payload=a;return}a=a.return}}function XS(e,a,r){var s=qe();r={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},ml(e)?hg(a,r):(r=vc(e,a,r,s),r!==null&&(Fe(r,e,s),pg(r,a,s)))}function dg(e,a,r){var s=qe();Eo(e,a,r,s)}function Eo(e,a,r,s){var u={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(ml(e))hg(a,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var v=a.lastRenderedState,b=d(v,r);if(u.hasEagerState=!0,u.eagerState=b,Be(b,v))return Ws(e,a,u,0),kt===null&&Qs(),!1}catch{}finally{}if(r=vc(e,a,u,s),r!==null)return Fe(r,e,s),pg(r,a,s),!0}return!1}function Jc(e,a,r,s){if(s={lane:2,revertLane:Mf(),action:s,hasEagerState:!1,eagerState:null,next:null},ml(e)){if(a)throw Error(o(479))}else a=vc(e,r,s,2),a!==null&&Fe(a,e,2)}function ml(e){var a=e.alternate;return e===mt||a!==null&&a===mt}function hg(e,a){ir=ul=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function pg(e,a,r){if((r&4194048)!==0){var s=a.lanes;s&=e.pendingLanes,r|=s,a.lanes=r,Yt(e,r)}}var gl={readContext:xe,use:fl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t},mg={readContext:xe,use:fl,useCallback:function(e,a){return Ne().memoizedState=[e,a===void 0?null:a],e},useContext:xe,useEffect:Wm,useImperativeHandle:function(e,a,r){r=r!=null?r.concat([e]):null,pl(4194308,4,ng.bind(null,a,e),r)},useLayoutEffect:function(e,a){return pl(4194308,4,e,a)},useInsertionEffect:function(e,a){pl(4,2,e,a)},useMemo:function(e,a){var r=Ne();a=a===void 0?null:a;var s=e();if(mi){ln(!0);try{e()}finally{ln(!1)}}return r.memoizedState=[s,a],s},useReducer:function(e,a,r){var s=Ne();if(r!==void 0){var u=r(a);if(mi){ln(!0);try{r(a)}finally{ln(!1)}}}else u=a;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=XS.bind(null,mt,e),[s.memoizedState,e]},useRef:function(e){var a=Ne();return e={current:e},a.memoizedState=e},useState:function(e){e=Xc(e);var a=e.queue,r=dg.bind(null,mt,a);return a.dispatch=r,[e.memoizedState,r]},useDebugValue:$c,useDeferredValue:function(e,a){var r=Ne();return Zc(r,e,a)},useTransition:function(){var e=Xc(!1);return e=sg.bind(null,mt,e.queue,!0,!1),Ne().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,r){var s=mt,u=Ne();if(St){if(r===void 0)throw Error(o(407));r=r()}else{if(r=a(),kt===null)throw Error(o(349));(xt&124)!==0||Um(s,a,r)}u.memoizedState=r;var d={value:r,getSnapshot:a};return u.queue=d,Wm(Bm.bind(null,s,d,e),[e]),s.flags|=2048,or(9,hl(),Im.bind(null,s,d,r,a),null),r},useId:function(){var e=Ne(),a=kt.identifierPrefix;if(St){var r=qn,s=jn;r=(s&~(1<<32-he(s)-1)).toString(32)+r,a="«"+a+"R"+r,r=cl++,0<r&&(a+="H"+r.toString(32)),a+="»"}else r=HS++,a="«"+a+"r"+r.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:Wc,useFormState:Xm,useActionState:Xm,useOptimistic:function(e){var a=Ne();a.memoizedState=a.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=Jc.bind(null,mt,!0,r),r.dispatch=a,[e,a]},useMemoCache:Fc,useCacheRefresh:function(){return Ne().memoizedState=YS.bind(null,mt)}},gg={readContext:xe,use:fl,useCallback:ig,useContext:xe,useEffect:Jm,useImperativeHandle:ag,useInsertionEffect:tg,useLayoutEffect:eg,useMemo:rg,useReducer:dl,useRef:Qm,useState:function(){return dl(Yn)},useDebugValue:$c,useDeferredValue:function(e,a){var r=ne();return og(r,_t.memoizedState,e,a)},useTransition:function(){var e=dl(Yn)[0],a=ne().memoizedState;return[typeof e=="boolean"?e:So(e),a]},useSyncExternalStore:Lm,useId:cg,useHostTransitionStatus:Wc,useFormState:Km,useActionState:Km,useOptimistic:function(e,a){var r=ne();return Hm(r,_t,e,a)},useMemoCache:Fc,useCacheRefresh:fg},KS={readContext:xe,use:fl,useCallback:ig,useContext:xe,useEffect:Jm,useImperativeHandle:ag,useInsertionEffect:tg,useLayoutEffect:eg,useMemo:rg,useReducer:Yc,useRef:Qm,useState:function(){return Yc(Yn)},useDebugValue:$c,useDeferredValue:function(e,a){var r=ne();return _t===null?Zc(r,e,a):og(r,_t.memoizedState,e,a)},useTransition:function(){var e=Yc(Yn)[0],a=ne().memoizedState;return[typeof e=="boolean"?e:So(e),a]},useSyncExternalStore:Lm,useId:cg,useHostTransitionStatus:Wc,useFormState:Zm,useActionState:Zm,useOptimistic:function(e,a){var r=ne();return _t!==null?Hm(r,_t,e,a):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Fc,useCacheRefresh:fg},sr=null,_o=0;function yl(e){var a=_o;return _o+=1,sr===null&&(sr=[]),Rm(sr,e,a)}function Ao(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function vl(e,a){throw a.$$typeof===y?Error(o(525)):(e=Object.prototype.toString.call(a),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function yg(e){var a=e._init;return a(e._payload)}function vg(e){function a(D,A){if(e){var k=D.deletions;k===null?(D.deletions=[A],D.flags|=16):k.push(A)}}function r(D,A){if(!e)return null;for(;A!==null;)a(D,A),A=A.sibling;return null}function s(D){for(var A=new Map;D!==null;)D.key!==null?A.set(D.key,D):A.set(D.index,D),D=D.sibling;return A}function u(D,A){return D=Hn(D,A),D.index=0,D.sibling=null,D}function d(D,A,k){return D.index=k,e?(k=D.alternate,k!==null?(k=k.index,k<A?(D.flags|=67108866,A):k):(D.flags|=67108866,A)):(D.flags|=1048576,A)}function v(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function b(D,A,k,V){return A===null||A.tag!==6?(A=xc(k,D.mode,V),A.return=D,A):(A=u(A,k),A.return=D,A)}function T(D,A,k,V){var et=k.type;return et===w?B(D,A,k.props.children,V,k.key):A!==null&&(A.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===Y&&yg(et)===A.type)?(A=u(A,k.props),Ao(A,k),A.return=D,A):(A=tl(k.type,k.key,k.props,null,D.mode,V),Ao(A,k),A.return=D,A)}function N(D,A,k,V){return A===null||A.tag!==4||A.stateNode.containerInfo!==k.containerInfo||A.stateNode.implementation!==k.implementation?(A=Tc(k,D.mode,V),A.return=D,A):(A=u(A,k.children||[]),A.return=D,A)}function B(D,A,k,V,et){return A===null||A.tag!==7?(A=si(k,D.mode,V,et),A.return=D,A):(A=u(A,k),A.return=D,A)}function j(D,A,k){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=xc(""+A,D.mode,k),A.return=D,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case x:return k=tl(A.type,A.key,A.props,null,D.mode,k),Ao(k,A),k.return=D,k;case S:return A=Tc(A,D.mode,k),A.return=D,A;case Y:var V=A._init;return A=V(A._payload),j(D,A,k)}if(Nt(A)||Mt(A))return A=si(A,D.mode,k,null),A.return=D,A;if(typeof A.then=="function")return j(D,yl(A),k);if(A.$$typeof===I)return j(D,il(D,A),k);vl(D,A)}return null}function P(D,A,k,V){var et=A!==null?A.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return et!==null?null:b(D,A,""+k,V);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return k.key===et?T(D,A,k,V):null;case S:return k.key===et?N(D,A,k,V):null;case Y:return et=k._init,k=et(k._payload),P(D,A,k,V)}if(Nt(k)||Mt(k))return et!==null?null:B(D,A,k,V,null);if(typeof k.then=="function")return P(D,A,yl(k),V);if(k.$$typeof===I)return P(D,A,il(D,k),V);vl(D,k)}return null}function U(D,A,k,V,et){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return D=D.get(k)||null,b(A,D,""+V,et);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return D=D.get(V.key===null?k:V.key)||null,T(A,D,V,et);case S:return D=D.get(V.key===null?k:V.key)||null,N(A,D,V,et);case Y:var gt=V._init;return V=gt(V._payload),U(D,A,k,V,et)}if(Nt(V)||Mt(V))return D=D.get(k)||null,B(A,D,V,et,null);if(typeof V.then=="function")return U(D,A,k,yl(V),et);if(V.$$typeof===I)return U(D,A,k,il(A,V),et);vl(A,V)}return null}function ct(D,A,k,V){for(var et=null,gt=null,at=A,st=A=0,de=null;at!==null&&st<k.length;st++){at.index>st?(de=at,at=null):de=at.sibling;var Tt=P(D,at,k[st],V);if(Tt===null){at===null&&(at=de);break}e&&at&&Tt.alternate===null&&a(D,at),A=d(Tt,A,st),gt===null?et=Tt:gt.sibling=Tt,gt=Tt,at=de}if(st===k.length)return r(D,at),St&&ui(D,st),et;if(at===null){for(;st<k.length;st++)at=j(D,k[st],V),at!==null&&(A=d(at,A,st),gt===null?et=at:gt.sibling=at,gt=at);return St&&ui(D,st),et}for(at=s(at);st<k.length;st++)de=U(at,D,st,k[st],V),de!==null&&(e&&de.alternate!==null&&at.delete(de.key===null?st:de.key),A=d(de,A,st),gt===null?et=de:gt.sibling=de,gt=de);return e&&at.forEach(function(Ua){return a(D,Ua)}),St&&ui(D,st),et}function ot(D,A,k,V){if(k==null)throw Error(o(151));for(var et=null,gt=null,at=A,st=A=0,de=null,Tt=k.next();at!==null&&!Tt.done;st++,Tt=k.next()){at.index>st?(de=at,at=null):de=at.sibling;var Ua=P(D,at,Tt.value,V);if(Ua===null){at===null&&(at=de);break}e&&at&&Ua.alternate===null&&a(D,at),A=d(Ua,A,st),gt===null?et=Ua:gt.sibling=Ua,gt=Ua,at=de}if(Tt.done)return r(D,at),St&&ui(D,st),et;if(at===null){for(;!Tt.done;st++,Tt=k.next())Tt=j(D,Tt.value,V),Tt!==null&&(A=d(Tt,A,st),gt===null?et=Tt:gt.sibling=Tt,gt=Tt);return St&&ui(D,st),et}for(at=s(at);!Tt.done;st++,Tt=k.next())Tt=U(at,D,st,Tt.value,V),Tt!==null&&(e&&Tt.alternate!==null&&at.delete(Tt.key===null?st:Tt.key),A=d(Tt,A,st),gt===null?et=Tt:gt.sibling=Tt,gt=Tt);return e&&at.forEach(function($w){return a(D,$w)}),St&&ui(D,st),et}function Rt(D,A,k,V){if(typeof k=="object"&&k!==null&&k.type===w&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case x:t:{for(var et=k.key;A!==null;){if(A.key===et){if(et=k.type,et===w){if(A.tag===7){r(D,A.sibling),V=u(A,k.props.children),V.return=D,D=V;break t}}else if(A.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===Y&&yg(et)===A.type){r(D,A.sibling),V=u(A,k.props),Ao(V,k),V.return=D,D=V;break t}r(D,A);break}else a(D,A);A=A.sibling}k.type===w?(V=si(k.props.children,D.mode,V,k.key),V.return=D,D=V):(V=tl(k.type,k.key,k.props,null,D.mode,V),Ao(V,k),V.return=D,D=V)}return v(D);case S:t:{for(et=k.key;A!==null;){if(A.key===et)if(A.tag===4&&A.stateNode.containerInfo===k.containerInfo&&A.stateNode.implementation===k.implementation){r(D,A.sibling),V=u(A,k.children||[]),V.return=D,D=V;break t}else{r(D,A);break}else a(D,A);A=A.sibling}V=Tc(k,D.mode,V),V.return=D,D=V}return v(D);case Y:return et=k._init,k=et(k._payload),Rt(D,A,k,V)}if(Nt(k))return ct(D,A,k,V);if(Mt(k)){if(et=Mt(k),typeof et!="function")throw Error(o(150));return k=et.call(k),ot(D,A,k,V)}if(typeof k.then=="function")return Rt(D,A,yl(k),V);if(k.$$typeof===I)return Rt(D,A,il(D,k),V);vl(D,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,A!==null&&A.tag===6?(r(D,A.sibling),V=u(A,k),V.return=D,D=V):(r(D,A),V=xc(k,D.mode,V),V.return=D,D=V),v(D)):r(D,A)}return function(D,A,k,V){try{_o=0;var et=Rt(D,A,k,V);return sr=null,et}catch(at){if(at===go||at===ol)throw at;var gt=ze(29,at,null,D.mode);return gt.lanes=V,gt.return=D,gt}finally{}}}var lr=vg(!0),bg=vg(!1),Je=H(null),_n=null;function Ta(e){var a=e.alternate;F(oe,oe.current&1),F(Je,e),_n===null&&(a===null||ar.current!==null||a.memoizedState!==null)&&(_n=e)}function xg(e){if(e.tag===22){if(F(oe,oe.current),F(Je,e),_n===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(_n=e)}}else Sa()}function Sa(){F(oe,oe.current),F(Je,Je.current)}function Xn(e){W(Je),_n===e&&(_n=null),W(oe)}var oe=H(0);function bl(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Ff(r)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function tf(e,a,r,s){a=e.memoizedState,r=r(s,a),r=r==null?a:g({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ef={enqueueSetState:function(e,a,r){e=e._reactInternals;var s=qe(),u=va(s);u.payload=a,r!=null&&(u.callback=r),a=ba(e,u,s),a!==null&&(Fe(a,e,s),vo(a,e,s))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var s=qe(),u=va(s);u.tag=1,u.payload=a,r!=null&&(u.callback=r),a=ba(e,u,s),a!==null&&(Fe(a,e,s),vo(a,e,s))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=qe(),s=va(r);s.tag=2,a!=null&&(s.callback=a),a=ba(e,s,r),a!==null&&(Fe(a,e,r),vo(a,e,r))}};function Tg(e,a,r,s,u,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,v):a.prototype&&a.prototype.isPureReactComponent?!so(r,s)||!so(u,d):!0}function Sg(e,a,r,s){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,s),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,s),a.state!==e&&ef.enqueueReplaceState(a,a.state,null)}function gi(e,a){var r=a;if("ref"in a){r={};for(var s in a)s!=="ref"&&(r[s]=a[s])}if(e=e.defaultProps){r===a&&(r=g({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function wg(e){xl(e)}function Eg(e){console.error(e)}function _g(e){xl(e)}function Tl(e,a){try{var r=e.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(s){setTimeout(function(){throw s})}}function Ag(e,a,r){try{var s=e.onCaughtError;s(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(e,a,r){return r=va(r),r.tag=3,r.payload={element:null},r.callback=function(){Tl(e,a)},r}function Rg(e){return e=va(e),e.tag=3,e}function Og(e,a,r,s){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=s.value;e.payload=function(){return u(d)},e.callback=function(){Ag(a,r,s)}}var v=r.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Ag(a,r,s),typeof u!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function $S(e,a,r,s,u){if(r.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(a=r.alternate,a!==null&&ho(a,r,u,!0),r=Je.current,r!==null){switch(r.tag){case 13:return _n===null?Rf():r.alternate===null&&jt===0&&(jt=3),r.flags&=-257,r.flags|=65536,r.lanes=u,s===kc?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([s]):a.add(s),Cf(e,s,u)),!1;case 22:return r.flags|=65536,s===kc?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([s])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([s]):r.add(s)),Cf(e,s,u)),!1}throw Error(o(435,r.tag))}return Cf(e,s,u),Rf(),!1}if(St)return a=Je.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=u,s!==Ec&&(e=Error(o(422),{cause:s}),fo($e(e,r)))):(s!==Ec&&(a=Error(o(423),{cause:s}),fo($e(a,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=$e(s,r),u=nf(e.stateNode,s,u),Pc(e,u),jt!==4&&(jt=2)),!1;var d=Error(o(520),{cause:s});if(d=$e(d,r),No===null?No=[d]:No.push(d),jt!==4&&(jt=2),a===null)return!0;s=$e(s,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=nf(r.stateNode,s,e),Pc(r,e),!1;case 1:if(a=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Oa===null||!Oa.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Rg(u),Og(u,e,r,s),Pc(r,u),!1}r=r.return}while(r!==null);return!1}var Cg=Error(o(461)),ce=!1;function me(e,a,r,s){a.child=e===null?bg(a,null,r,s):lr(a,e.child,r,s)}function Dg(e,a,r,s,u){r=r.render;var d=a.ref;if("ref"in s){var v={};for(var b in s)b!=="ref"&&(v[b]=s[b])}else v=s;return hi(a),s=zc(e,a,r,v,d,u),b=Vc(),e!==null&&!ce?(Hc(e,a,u),Kn(e,a,u)):(St&&b&&Sc(a),a.flags|=1,me(e,a,s,u),a.child)}function kg(e,a,r,s,u){if(e===null){var d=r.type;return typeof d=="function"&&!bc(d)&&d.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=d,Mg(e,a,d,s,u)):(e=tl(r.type,null,s,a,a.mode,u),e.ref=a.ref,e.return=a,a.child=e)}if(d=e.child,!ff(e,u)){var v=d.memoizedProps;if(r=r.compare,r=r!==null?r:so,r(v,s)&&e.ref===a.ref)return Kn(e,a,u)}return a.flags|=1,e=Hn(d,s),e.ref=a.ref,e.return=a,a.child=e}function Mg(e,a,r,s,u){if(e!==null){var d=e.memoizedProps;if(so(d,s)&&e.ref===a.ref)if(ce=!1,a.pendingProps=s=d,ff(e,u))(e.flags&131072)!==0&&(ce=!0);else return a.lanes=e.lanes,Kn(e,a,u)}return af(e,a,r,s,u)}function Ng(e,a,r){var s=a.pendingProps,u=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((a.flags&128)!==0){if(s=d!==null?d.baseLanes|r:r,e!==null){for(u=a.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;a.childLanes=d&~s}else a.childLanes=0,a.child=null;return Pg(e,a,s,r)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&rl(a,d!==null?d.cachePool:null),d!==null?Mm(a,d):Uc(),xg(a);else return a.lanes=a.childLanes=536870912,Pg(e,a,d!==null?d.baseLanes|r:r,r)}else d!==null?(rl(a,d.cachePool),Mm(a,d),Sa(),a.memoizedState=null):(e!==null&&rl(a,null),Uc(),Sa());return me(e,a,u,r),a.child}function Pg(e,a,r,s){var u=Dc();return u=u===null?null:{parent:re._currentValue,pool:u},a.memoizedState={baseLanes:r,cachePool:u},e!==null&&rl(a,null),Uc(),xg(a),e!==null&&ho(e,a,s,!0),null}function Sl(e,a){var r=a.ref;if(r===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(o(284));(e===null||e.ref!==r)&&(a.flags|=4194816)}}function af(e,a,r,s,u){return hi(a),r=zc(e,a,r,s,void 0,u),s=Vc(),e!==null&&!ce?(Hc(e,a,u),Kn(e,a,u)):(St&&s&&Sc(a),a.flags|=1,me(e,a,r,u),a.child)}function Lg(e,a,r,s,u,d){return hi(a),a.updateQueue=null,r=Pm(a,s,r,u),Nm(e),s=Vc(),e!==null&&!ce?(Hc(e,a,d),Kn(e,a,d)):(St&&s&&Sc(a),a.flags|=1,me(e,a,r,d),a.child)}function Ug(e,a,r,s,u){if(hi(a),a.stateNode===null){var d=Wi,v=r.contextType;typeof v=="object"&&v!==null&&(d=xe(v)),d=new r(s,d),a.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ef,a.stateNode=d,d._reactInternals=a,d=a.stateNode,d.props=s,d.state=a.memoizedState,d.refs={},Mc(a),v=r.contextType,d.context=typeof v=="object"&&v!==null?xe(v):Wi,d.state=a.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(tf(a,r,v,s),d.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&ef.enqueueReplaceState(d,d.state,null),xo(a,s,d,u),bo(),d.state=a.memoizedState),typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!0}else if(e===null){d=a.stateNode;var b=a.memoizedProps,T=gi(r,b);d.props=T;var N=d.context,B=r.contextType;v=Wi,typeof B=="object"&&B!==null&&(v=xe(B));var j=r.getDerivedStateFromProps;B=typeof j=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=a.pendingProps!==b,B||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||N!==v)&&Sg(a,d,s,v),ya=!1;var P=a.memoizedState;d.state=P,xo(a,s,d,u),bo(),N=a.memoizedState,b||P!==N||ya?(typeof j=="function"&&(tf(a,r,j,s),N=a.memoizedState),(T=ya||Tg(a,r,T,s,P,N,v))?(B||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=s,a.memoizedState=N),d.props=s,d.state=N,d.context=v,s=T):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!1)}else{d=a.stateNode,Nc(e,a),v=a.memoizedProps,B=gi(r,v),d.props=B,j=a.pendingProps,P=d.context,N=r.contextType,T=Wi,typeof N=="object"&&N!==null&&(T=xe(N)),b=r.getDerivedStateFromProps,(N=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==j||P!==T)&&Sg(a,d,s,T),ya=!1,P=a.memoizedState,d.state=P,xo(a,s,d,u),bo();var U=a.memoizedState;v!==j||P!==U||ya||e!==null&&e.dependencies!==null&&al(e.dependencies)?(typeof b=="function"&&(tf(a,r,b,s),U=a.memoizedState),(B=ya||Tg(a,r,B,s,P,U,T)||e!==null&&e.dependencies!==null&&al(e.dependencies))?(N||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,U,T),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,U,T)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=1024),a.memoizedProps=s,a.memoizedState=U),d.props=s,d.state=U,d.context=T,s=B):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=1024),s=!1)}return d=s,Sl(e,a),s=(a.flags&128)!==0,d||s?(d=a.stateNode,r=s&&typeof r.getDerivedStateFromError!="function"?null:d.render(),a.flags|=1,e!==null&&s?(a.child=lr(a,e.child,null,u),a.child=lr(a,null,r,u)):me(e,a,r,u),a.memoizedState=d.state,e=a.child):e=Kn(e,a,u),e}function Ig(e,a,r,s){return co(),a.flags|=256,me(e,a,r,s),a.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:Em()}}function sf(e,a,r){return e=e!==null?e.childLanes&~r:0,a&&(e|=tn),e}function Bg(e,a,r){var s=a.pendingProps,u=!1,d=(a.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(oe.current&2)!==0),v&&(u=!0,a.flags&=-129),v=(a.flags&32)!==0,a.flags&=-33,e===null){if(St){if(u?Ta(a):Sa(),St){var b=Ht,T;if(T=b){t:{for(T=b,b=En;T.nodeType!==8;){if(!b){b=null;break t}if(T=dn(T.nextSibling),T===null){b=null;break t}}b=T}b!==null?(a.memoizedState={dehydrated:b,treeContext:li!==null?{id:jn,overflow:qn}:null,retryLane:536870912,hydrationErrors:null},T=ze(18,null,null,0),T.stateNode=b,T.return=a,a.child=T,Re=a,Ht=null,T=!0):T=!1}T||fi(a)}if(b=a.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Ff(b)?a.lanes=32:a.lanes=536870912,null;Xn(a)}return b=s.children,s=s.fallback,u?(Sa(),u=a.mode,b=wl({mode:"hidden",children:b},u),s=si(s,u,r,null),b.return=a,s.return=a,b.sibling=s,a.child=b,u=a.child,u.memoizedState=of(r),u.childLanes=sf(e,v,r),a.memoizedState=rf,s):(Ta(a),lf(a,b))}if(T=e.memoizedState,T!==null&&(b=T.dehydrated,b!==null)){if(d)a.flags&256?(Ta(a),a.flags&=-257,a=uf(e,a,r)):a.memoizedState!==null?(Sa(),a.child=e.child,a.flags|=128,a=null):(Sa(),u=s.fallback,b=a.mode,s=wl({mode:"visible",children:s.children},b),u=si(u,b,r,null),u.flags|=2,s.return=a,u.return=a,s.sibling=u,a.child=s,lr(a,e.child,null,r),s=a.child,s.memoizedState=of(r),s.childLanes=sf(e,v,r),a.memoizedState=rf,a=u);else if(Ta(a),Ff(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var N=v.dgst;v=N,s=Error(o(419)),s.stack="",s.digest=v,fo({value:s,source:null,stack:null}),a=uf(e,a,r)}else if(ce||ho(e,a,r,!1),v=(r&e.childLanes)!==0,ce||v){if(v=kt,v!==null&&(s=r&-r,s=(s&42)!==0?1:te(s),s=(s&(v.suspendedLanes|r))!==0?0:s,s!==0&&s!==T.retryLane))throw T.retryLane=s,Qi(e,s),Fe(v,e,s),Cg;b.data==="$?"||Rf(),a=uf(e,a,r)}else b.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=T.treeContext,Ht=dn(b.nextSibling),Re=a,St=!0,ci=null,En=!1,e!==null&&(Qe[We++]=jn,Qe[We++]=qn,Qe[We++]=li,jn=e.id,qn=e.overflow,li=a),a=lf(a,s.children),a.flags|=4096);return a}return u?(Sa(),u=s.fallback,b=a.mode,T=e.child,N=T.sibling,s=Hn(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&65011712,N!==null?u=Hn(N,u):(u=si(u,b,r,null),u.flags|=2),u.return=a,s.return=a,s.sibling=u,a.child=s,s=u,u=a.child,b=e.child.memoizedState,b===null?b=of(r):(T=b.cachePool,T!==null?(N=re._currentValue,T=T.parent!==N?{parent:N,pool:N}:T):T=Em(),b={baseLanes:b.baseLanes|r,cachePool:T}),u.memoizedState=b,u.childLanes=sf(e,v,r),a.memoizedState=rf,s):(Ta(a),r=e.child,e=r.sibling,r=Hn(r,{mode:"visible",children:s.children}),r.return=a,r.sibling=null,e!==null&&(v=a.deletions,v===null?(a.deletions=[e],a.flags|=16):v.push(e)),a.child=r,a.memoizedState=null,r)}function lf(e,a){return a=wl({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function wl(e,a){return e=ze(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function uf(e,a,r){return lr(a,e.child,null,r),e=lf(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function zg(e,a,r){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a),Ac(e.return,a,r)}function cf(e,a,r,s,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:u}:(d.isBackwards=a,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=r,d.tailMode=u)}function Vg(e,a,r){var s=a.pendingProps,u=s.revealOrder,d=s.tail;if(me(e,a,s.children,r),s=oe.current,(s&2)!==0)s=s&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zg(e,r,a);else if(e.tag===19)zg(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(F(oe,s),u){case"forwards":for(r=a.child,u=null;r!==null;)e=r.alternate,e!==null&&bl(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=a.child,a.child=null):(u=r.sibling,r.sibling=null),cf(a,!1,u,r,d);break;case"backwards":for(r=null,u=a.child,a.child=null;u!==null;){if(e=u.alternate,e!==null&&bl(e)===null){a.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}cf(a,!0,r,null,d);break;case"together":cf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Kn(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),Ra|=a.lanes,(r&a.childLanes)===0)if(e!==null){if(ho(e,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(o(153));if(a.child!==null){for(e=a.child,r=Hn(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=Hn(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function ff(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&al(e)))}function ZS(e,a,r){switch(a.tag){case 3:lt(a,a.stateNode.containerInfo),ga(a,re,e.memoizedState.cache),co();break;case 27:case 5:fa(a);break;case 4:lt(a,a.stateNode.containerInfo);break;case 10:ga(a,a.type,a.memoizedProps.value);break;case 13:var s=a.memoizedState;if(s!==null)return s.dehydrated!==null?(Ta(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Bg(e,a,r):(Ta(a),e=Kn(e,a,r),e!==null?e.sibling:null);Ta(a);break;case 19:var u=(e.flags&128)!==0;if(s=(r&a.childLanes)!==0,s||(ho(e,a,r,!1),s=(r&a.childLanes)!==0),u){if(s)return Vg(e,a,r);a.flags|=128}if(u=a.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),F(oe,oe.current),s)break;return null;case 22:case 23:return a.lanes=0,Ng(e,a,r);case 24:ga(a,re,e.memoizedState.cache)}return Kn(e,a,r)}function Hg(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps)ce=!0;else{if(!ff(e,r)&&(a.flags&128)===0)return ce=!1,ZS(e,a,r);ce=(e.flags&131072)!==0}else ce=!1,St&&(a.flags&1048576)!==0&&ym(a,nl,a.index);switch(a.lanes=0,a.tag){case 16:t:{e=a.pendingProps;var s=a.elementType,u=s._init;if(s=u(s._payload),a.type=s,typeof s=="function")bc(s)?(e=gi(s,e),a.tag=1,a=Ug(null,a,s,e,r)):(a.tag=0,a=af(null,a,s,e,r));else{if(s!=null){if(u=s.$$typeof,u===K){a.tag=11,a=Dg(null,a,s,e,r);break t}else if(u===$){a.tag=14,a=kg(null,a,s,e,r);break t}}throw a=we(s)||s,Error(o(306,a,""))}}return a;case 0:return af(e,a,a.type,a.pendingProps,r);case 1:return s=a.type,u=gi(s,a.pendingProps),Ug(e,a,s,u,r);case 3:t:{if(lt(a,a.stateNode.containerInfo),e===null)throw Error(o(387));s=a.pendingProps;var d=a.memoizedState;u=d.element,Nc(e,a),xo(a,s,null,r);var v=a.memoizedState;if(s=v.cache,ga(a,re,s),s!==d.cache&&Rc(a,[re],r,!0),bo(),s=v.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:v.cache},a.updateQueue.baseState=d,a.memoizedState=d,a.flags&256){a=Ig(e,a,s,r);break t}else if(s!==u){u=$e(Error(o(424)),a),fo(u),a=Ig(e,a,s,r);break t}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ht=dn(e.firstChild),Re=a,St=!0,ci=null,En=!0,r=bg(a,null,s,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(co(),s===u){a=Kn(e,a,r);break t}me(e,a,s,r)}a=a.child}return a;case 26:return Sl(e,a),e===null?(r=G0(a.type,null,a.pendingProps,null))?a.memoizedState=r:St||(r=a.type,e=a.pendingProps,s=Il(nt.current).createElement(r),s[Kt]=a,s[Dt]=e,ye(s,r,e),ue(s),a.stateNode=s):a.memoizedState=G0(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return fa(a),e===null&&St&&(s=a.stateNode=j0(a.type,a.pendingProps,nt.current),Re=a,En=!0,u=Ht,ka(a.type)?(Gf=u,Ht=dn(s.firstChild)):Ht=u),me(e,a,a.pendingProps.children,r),Sl(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&St&&((u=s=Ht)&&(s=Ew(s,a.type,a.pendingProps,En),s!==null?(a.stateNode=s,Re=a,Ht=dn(s.firstChild),En=!1,u=!0):u=!1),u||fi(a)),fa(a),u=a.type,d=a.pendingProps,v=e!==null?e.memoizedProps:null,s=d.children,Hf(u,d)?s=null:v!==null&&Hf(u,v)&&(a.flags|=32),a.memoizedState!==null&&(u=zc(e,a,jS,null,null,r),jo._currentValue=u),Sl(e,a),me(e,a,s,r),a.child;case 6:return e===null&&St&&((e=r=Ht)&&(r=_w(r,a.pendingProps,En),r!==null?(a.stateNode=r,Re=a,Ht=null,e=!0):e=!1),e||fi(a)),null;case 13:return Bg(e,a,r);case 4:return lt(a,a.stateNode.containerInfo),s=a.pendingProps,e===null?a.child=lr(a,null,s,r):me(e,a,s,r),a.child;case 11:return Dg(e,a,a.type,a.pendingProps,r);case 7:return me(e,a,a.pendingProps,r),a.child;case 8:return me(e,a,a.pendingProps.children,r),a.child;case 12:return me(e,a,a.pendingProps.children,r),a.child;case 10:return s=a.pendingProps,ga(a,a.type,s.value),me(e,a,s.children,r),a.child;case 9:return u=a.type._context,s=a.pendingProps.children,hi(a),u=xe(u),s=s(u),a.flags|=1,me(e,a,s,r),a.child;case 14:return kg(e,a,a.type,a.pendingProps,r);case 15:return Mg(e,a,a.type,a.pendingProps,r);case 19:return Vg(e,a,r);case 31:return s=a.pendingProps,r=a.mode,s={mode:s.mode,children:s.children},e===null?(r=wl(s,r),r.ref=a.ref,a.child=r,r.return=a,a=r):(r=Hn(e.child,s),r.ref=a.ref,a.child=r,r.return=a,a=r),a;case 22:return Ng(e,a,r);case 24:return hi(a),s=xe(re),e===null?(u=Dc(),u===null&&(u=kt,d=Oc(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),a.memoizedState={parent:s,cache:u},Mc(a),ga(a,re,u)):((e.lanes&r)!==0&&(Nc(e,a),xo(a,null,null,r),bo()),u=e.memoizedState,d=a.memoizedState,u.parent!==s?(u={parent:s,cache:s},a.memoizedState=u,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=u),ga(a,re,s)):(s=d.cache,ga(a,re,s),s!==u.cache&&Rc(a,[re],r,!0))),me(e,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(o(156,a.tag))}function $n(e){e.flags|=4}function jg(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Z0(a)){if(a=Je.current,a!==null&&((xt&4194048)===xt?_n!==null:(xt&62914560)!==xt&&(xt&536870912)===0||a!==_n))throw yo=kc,_m;e.flags|=8192}}function El(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Bs():536870912,e.lanes|=a,dr|=a)}function Ro(e,a){if(!St)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Bt(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(a)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=r,a}function QS(e,a,r){var s=a.pendingProps;switch(wc(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(a),null;case 1:return Bt(a),null;case 3:return r=a.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Gn(re),Ee(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(uo(a)?$n(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,xm())),Bt(a),null;case 26:return r=a.memoizedState,e===null?($n(a),r!==null?(Bt(a),jg(a,r)):(Bt(a),a.flags&=-16777217)):r?r!==e.memoizedState?($n(a),Bt(a),jg(a,r)):(Bt(a),a.flags&=-16777217):(e.memoizedProps!==s&&$n(a),Bt(a),a.flags&=-16777217),null;case 27:Un(a),r=nt.current;var u=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==s&&$n(a);else{if(!s){if(a.stateNode===null)throw Error(o(166));return Bt(a),null}e=Q.current,uo(a)?vm(a):(e=j0(u,s,r),a.stateNode=e,$n(a))}return Bt(a),null;case 5:if(Un(a),r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==s&&$n(a);else{if(!s){if(a.stateNode===null)throw Error(o(166));return Bt(a),null}if(e=Q.current,uo(a))vm(a);else{switch(u=Il(nt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?u.createElement(r,{is:s.is}):u.createElement(r)}}e[Kt]=a,e[Dt]=s;t:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break t;for(;u.sibling===null;){if(u.return===null||u.return===a)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=e;t:switch(ye(e,r,s),r){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&$n(a)}}return Bt(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==s&&$n(a);else{if(typeof s!="string"&&a.stateNode===null)throw Error(o(166));if(e=nt.current,uo(a)){if(e=a.stateNode,r=a.memoizedProps,s=null,u=Re,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[Kt]=a,e=!!(e.nodeValue===r||s!==null&&s.suppressHydrationWarning===!0||L0(e.nodeValue,r)),e||fi(a)}else e=Il(e).createTextNode(s),e[Kt]=a,a.stateNode=e}return Bt(a),null;case 13:if(s=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=uo(a),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=a.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[Kt]=a}else co(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Bt(a),u=!1}else u=xm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return a.flags&256?(Xn(a),a):(Xn(a),null)}if(Xn(a),(a.flags&128)!==0)return a.lanes=r,a;if(r=s!==null,e=e!==null&&e.memoizedState!==null,r){s=a.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var d=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(d=s.memoizedState.cachePool.pool),d!==u&&(s.flags|=2048)}return r!==e&&r&&(a.child.flags|=8192),El(a,a.updateQueue),Bt(a),null;case 4:return Ee(),e===null&&Uf(a.stateNode.containerInfo),Bt(a),null;case 10:return Gn(a.type),Bt(a),null;case 19:if(W(oe),u=a.memoizedState,u===null)return Bt(a),null;if(s=(a.flags&128)!==0,d=u.rendering,d===null)if(s)Ro(u,!1);else{if(jt!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(d=bl(e),d!==null){for(a.flags|=128,Ro(u,!1),e=d.updateQueue,a.updateQueue=e,El(a,e),a.subtreeFlags=0,e=r,r=a.child;r!==null;)gm(r,e),r=r.sibling;return F(oe,oe.current&1|2),a.child}e=e.sibling}u.tail!==null&&be()>Rl&&(a.flags|=128,s=!0,Ro(u,!1),a.lanes=4194304)}else{if(!s)if(e=bl(d),e!==null){if(a.flags|=128,s=!0,e=e.updateQueue,a.updateQueue=e,El(a,e),Ro(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!St)return Bt(a),null}else 2*be()-u.renderingStartTime>Rl&&r!==536870912&&(a.flags|=128,s=!0,Ro(u,!1),a.lanes=4194304);u.isBackwards?(d.sibling=a.child,a.child=d):(e=u.last,e!==null?e.sibling=d:a.child=d,u.last=d)}return u.tail!==null?(a=u.tail,u.rendering=a,u.tail=a.sibling,u.renderingStartTime=be(),a.sibling=null,e=oe.current,F(oe,s?e&1|2:e&1),a):(Bt(a),null);case 22:case 23:return Xn(a),Ic(),s=a.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(a.flags|=8192):s&&(a.flags|=8192),s?(r&536870912)!==0&&(a.flags&128)===0&&(Bt(a),a.subtreeFlags&6&&(a.flags|=8192)):Bt(a),r=a.updateQueue,r!==null&&El(a,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==r&&(a.flags|=2048),e!==null&&W(pi),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),Gn(re),Bt(a),null;case 25:return null;case 30:return null}throw Error(o(156,a.tag))}function WS(e,a){switch(wc(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Gn(re),Ee(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Un(a),null;case 13:if(Xn(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(o(340));co()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return W(oe),null;case 4:return Ee(),null;case 10:return Gn(a.type),null;case 22:case 23:return Xn(a),Ic(),e!==null&&W(pi),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Gn(re),null;case 25:return null;default:return null}}function qg(e,a){switch(wc(a),a.tag){case 3:Gn(re),Ee();break;case 26:case 27:case 5:Un(a);break;case 4:Ee();break;case 13:Xn(a);break;case 19:W(oe);break;case 10:Gn(a.type);break;case 22:case 23:Xn(a),Ic(),e!==null&&W(pi);break;case 24:Gn(re)}}function Oo(e,a){try{var r=a.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var u=s.next;r=u;do{if((r.tag&e)===e){s=void 0;var d=r.create,v=r.inst;s=d(),v.destroy=s}r=r.next}while(r!==u)}}catch(b){Ot(a,a.return,b)}}function wa(e,a,r){try{var s=a.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var d=u.next;s=d;do{if((s.tag&e)===e){var v=s.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=a;var T=r,N=b;try{N()}catch(B){Ot(u,T,B)}}}s=s.next}while(s!==d)}}catch(B){Ot(a,a.return,B)}}function Fg(e){var a=e.updateQueue;if(a!==null){var r=e.stateNode;try{km(a,r)}catch(s){Ot(e,e.return,s)}}}function Gg(e,a,r){r.props=gi(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(s){Ot(e,a,s)}}function Co(e,a){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof r=="function"?e.refCleanup=r(s):r.current=s}}catch(u){Ot(e,a,u)}}function An(e,a){var r=e.ref,s=e.refCleanup;if(r!==null)if(typeof s=="function")try{s()}catch(u){Ot(e,a,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Ot(e,a,u)}else r.current=null}function Yg(e){var a=e.type,r=e.memoizedProps,s=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&s.focus();break t;case"img":r.src?s.src=r.src:r.srcSet&&(s.srcset=r.srcSet)}}catch(u){Ot(e,e.return,u)}}function df(e,a,r){try{var s=e.stateNode;bw(s,e.type,r,a),s[Dt]=a}catch(u){Ot(e,e.return,u)}}function Xg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function hf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Xg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pf(e,a,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(e),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Ul));else if(s!==4&&(s===27&&ka(e.type)&&(r=e.stateNode,a=null),e=e.child,e!==null))for(pf(e,a,r),e=e.sibling;e!==null;)pf(e,a,r),e=e.sibling}function _l(e,a,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(s!==4&&(s===27&&ka(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(_l(e,a,r),e=e.sibling;e!==null;)_l(e,a,r),e=e.sibling}function Kg(e){var a=e.stateNode,r=e.memoizedProps;try{for(var s=e.type,u=a.attributes;u.length;)a.removeAttributeNode(u[0]);ye(a,s,r),a[Kt]=e,a[Dt]=r}catch(d){Ot(e,e.return,d)}}var Zn=!1,Zt=!1,mf=!1,$g=typeof WeakSet=="function"?WeakSet:Set,fe=null;function JS(e,a){if(e=e.containerInfo,zf=ql,e=om(e),dc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var u=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var v=0,b=-1,T=-1,N=0,B=0,j=e,P=null;e:for(;;){for(var U;j!==r||u!==0&&j.nodeType!==3||(b=v+u),j!==d||s!==0&&j.nodeType!==3||(T=v+s),j.nodeType===3&&(v+=j.nodeValue.length),(U=j.firstChild)!==null;)P=j,j=U;for(;;){if(j===e)break e;if(P===r&&++N===u&&(b=v),P===d&&++B===s&&(T=v),(U=j.nextSibling)!==null)break;j=P,P=j.parentNode}j=U}r=b===-1||T===-1?null:{start:b,end:T}}else r=null}r=r||{start:0,end:0}}else r=null;for(Vf={focusedElem:e,selectionRange:r},ql=!1,fe=a;fe!==null;)if(a=fe,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,fe=e;else for(;fe!==null;){switch(a=fe,d=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=a,u=d.memoizedProps,d=d.memoizedState,s=r.stateNode;try{var ct=gi(r.type,u,r.elementType===r.type);e=s.getSnapshotBeforeUpdate(ct,d),s.__reactInternalSnapshotBeforeUpdate=e}catch(ot){Ot(r,r.return,ot)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,r=e.nodeType,r===9)qf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=a.sibling,e!==null){e.return=a.return,fe=e;break}fe=a.return}}function Zg(e,a,r){var s=r.flags;switch(r.tag){case 0:case 11:case 15:Ea(e,r),s&4&&Oo(5,r);break;case 1:if(Ea(e,r),s&4)if(e=r.stateNode,a===null)try{e.componentDidMount()}catch(v){Ot(r,r.return,v)}else{var u=gi(r.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(u,a,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ot(r,r.return,v)}}s&64&&Fg(r),s&512&&Co(r,r.return);break;case 3:if(Ea(e,r),s&64&&(e=r.updateQueue,e!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{km(e,a)}catch(v){Ot(r,r.return,v)}}break;case 27:a===null&&s&4&&Kg(r);case 26:case 5:Ea(e,r),a===null&&s&4&&Yg(r),s&512&&Co(r,r.return);break;case 12:Ea(e,r);break;case 13:Ea(e,r),s&4&&Jg(e,r),s&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=lw.bind(null,r),Aw(e,r))));break;case 22:if(s=r.memoizedState!==null||Zn,!s){a=a!==null&&a.memoizedState!==null||Zt,u=Zn;var d=Zt;Zn=s,(Zt=a)&&!d?_a(e,r,(r.subtreeFlags&8772)!==0):Ea(e,r),Zn=u,Zt=d}break;case 30:break;default:Ea(e,r)}}function Qg(e){var a=e.alternate;a!==null&&(e.alternate=null,Qg(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Xu(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pt=null,Pe=!1;function Qn(e,a,r){for(r=r.child;r!==null;)Wg(e,a,r),r=r.sibling}function Wg(e,a,r){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Sn,r)}catch{}switch(r.tag){case 26:Zt||An(r,a),Qn(e,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Zt||An(r,a);var s=Pt,u=Pe;ka(r.type)&&(Pt=r.stateNode,Pe=!1),Qn(e,a,r),Bo(r.stateNode),Pt=s,Pe=u;break;case 5:Zt||An(r,a);case 6:if(s=Pt,u=Pe,Pt=null,Qn(e,a,r),Pt=s,Pe=u,Pt!==null)if(Pe)try{(Pt.nodeType===9?Pt.body:Pt.nodeName==="HTML"?Pt.ownerDocument.body:Pt).removeChild(r.stateNode)}catch(d){Ot(r,a,d)}else try{Pt.removeChild(r.stateNode)}catch(d){Ot(r,a,d)}break;case 18:Pt!==null&&(Pe?(e=Pt,V0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Yo(e)):V0(Pt,r.stateNode));break;case 4:s=Pt,u=Pe,Pt=r.stateNode.containerInfo,Pe=!0,Qn(e,a,r),Pt=s,Pe=u;break;case 0:case 11:case 14:case 15:Zt||wa(2,r,a),Zt||wa(4,r,a),Qn(e,a,r);break;case 1:Zt||(An(r,a),s=r.stateNode,typeof s.componentWillUnmount=="function"&&Gg(r,a,s)),Qn(e,a,r);break;case 21:Qn(e,a,r);break;case 22:Zt=(s=Zt)||r.memoizedState!==null,Qn(e,a,r),Zt=s;break;default:Qn(e,a,r)}}function Jg(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yo(e)}catch(r){Ot(a,a.return,r)}}function tw(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new $g),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new $g),a;default:throw Error(o(435,e.tag))}}function gf(e,a){var r=tw(e);a.forEach(function(s){var u=uw.bind(null,e,s);r.has(s)||(r.add(s),s.then(u,u))})}function Ve(e,a){var r=a.deletions;if(r!==null)for(var s=0;s<r.length;s++){var u=r[s],d=e,v=a,b=v;t:for(;b!==null;){switch(b.tag){case 27:if(ka(b.type)){Pt=b.stateNode,Pe=!1;break t}break;case 5:Pt=b.stateNode,Pe=!1;break t;case 3:case 4:Pt=b.stateNode.containerInfo,Pe=!0;break t}b=b.return}if(Pt===null)throw Error(o(160));Wg(d,v,u),Pt=null,Pe=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)t0(a,e),a=a.sibling}var fn=null;function t0(e,a){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ve(a,e),He(e),s&4&&(wa(3,e,e.return),Oo(3,e),wa(5,e,e.return));break;case 1:Ve(a,e),He(e),s&512&&(Zt||r===null||An(r,r.return)),s&64&&Zn&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?s:r.concat(s))));break;case 26:var u=fn;if(Ve(a,e),He(e),s&512&&(Zt||r===null||An(r,r.return)),s&4){var d=r!==null?r.memoizedState:null;if(s=e.memoizedState,r===null)if(s===null)if(e.stateNode===null){t:{s=e.type,r=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Wr]||d[Kt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(s),u.head.insertBefore(d,u.querySelector("head > title"))),ye(d,s,r),d[Kt]=e,ue(d),s=d;break t;case"link":var v=K0("link","href",u).get(s+(r.href||""));if(v){for(var b=0;b<v.length;b++)if(d=v[b],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){v.splice(b,1);break e}}d=u.createElement(s),ye(d,s,r),u.head.appendChild(d);break;case"meta":if(v=K0("meta","content",u).get(s+(r.content||""))){for(b=0;b<v.length;b++)if(d=v[b],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){v.splice(b,1);break e}}d=u.createElement(s),ye(d,s,r),u.head.appendChild(d);break;default:throw Error(o(468,s))}d[Kt]=e,ue(d),s=d}e.stateNode=s}else $0(u,e.type,e.stateNode);else e.stateNode=X0(u,s,e.memoizedProps);else d!==s?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,s===null?$0(u,e.type,e.stateNode):X0(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&df(e,e.memoizedProps,r.memoizedProps)}break;case 27:Ve(a,e),He(e),s&512&&(Zt||r===null||An(r,r.return)),r!==null&&s&4&&df(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Ve(a,e),He(e),s&512&&(Zt||r===null||An(r,r.return)),e.flags&32){u=e.stateNode;try{Fi(u,"")}catch(U){Ot(e,e.return,U)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,df(e,u,r!==null?r.memoizedProps:u)),s&1024&&(mf=!0);break;case 6:if(Ve(a,e),He(e),s&4){if(e.stateNode===null)throw Error(o(162));s=e.memoizedProps,r=e.stateNode;try{r.nodeValue=s}catch(U){Ot(e,e.return,U)}}break;case 3:if(Vl=null,u=fn,fn=Bl(a.containerInfo),Ve(a,e),fn=u,He(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Yo(a.containerInfo)}catch(U){Ot(e,e.return,U)}mf&&(mf=!1,e0(e));break;case 4:s=fn,fn=Bl(e.stateNode.containerInfo),Ve(a,e),He(e),fn=s;break;case 12:Ve(a,e),He(e);break;case 13:Ve(a,e),He(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Sf=be()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,gf(e,s)));break;case 22:u=e.memoizedState!==null;var T=r!==null&&r.memoizedState!==null,N=Zn,B=Zt;if(Zn=N||u,Zt=B||T,Ve(a,e),Zt=B,Zn=N,He(e),s&8192)t:for(a=e.stateNode,a._visibility=u?a._visibility&-2:a._visibility|1,u&&(r===null||T||Zn||Zt||yi(e)),r=null,a=e;;){if(a.tag===5||a.tag===26){if(r===null){T=r=a;try{if(d=T.stateNode,u)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=T.stateNode;var j=T.memoizedProps.style,P=j!=null&&j.hasOwnProperty("display")?j.display:null;b.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(U){Ot(T,T.return,U)}}}else if(a.tag===6){if(r===null){T=a;try{T.stateNode.nodeValue=u?"":T.memoizedProps}catch(U){Ot(T,T.return,U)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}s&4&&(s=e.updateQueue,s!==null&&(r=s.retryQueue,r!==null&&(s.retryQueue=null,gf(e,r))));break;case 19:Ve(a,e),He(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,gf(e,s)));break;case 30:break;case 21:break;default:Ve(a,e),He(e)}}function He(e){var a=e.flags;if(a&2){try{for(var r,s=e.return;s!==null;){if(Xg(s)){r=s;break}s=s.return}if(r==null)throw Error(o(160));switch(r.tag){case 27:var u=r.stateNode,d=hf(e);_l(e,d,u);break;case 5:var v=r.stateNode;r.flags&32&&(Fi(v,""),r.flags&=-33);var b=hf(e);_l(e,b,v);break;case 3:case 4:var T=r.stateNode.containerInfo,N=hf(e);pf(e,N,T);break;default:throw Error(o(161))}}catch(B){Ot(e,e.return,B)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function e0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;e0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ea(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Zg(e,a.alternate,a),a=a.sibling}function yi(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:wa(4,a,a.return),yi(a);break;case 1:An(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Gg(a,a.return,r),yi(a);break;case 27:Bo(a.stateNode);case 26:case 5:An(a,a.return),yi(a);break;case 22:a.memoizedState===null&&yi(a);break;case 30:yi(a);break;default:yi(a)}e=e.sibling}}function _a(e,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var s=a.alternate,u=e,d=a,v=d.flags;switch(d.tag){case 0:case 11:case 15:_a(u,d,r),Oo(4,d);break;case 1:if(_a(u,d,r),s=d,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(N){Ot(s,s.return,N)}if(s=d,u=s.updateQueue,u!==null){var b=s.stateNode;try{var T=u.shared.hiddenCallbacks;if(T!==null)for(u.shared.hiddenCallbacks=null,u=0;u<T.length;u++)Dm(T[u],b)}catch(N){Ot(s,s.return,N)}}r&&v&64&&Fg(d),Co(d,d.return);break;case 27:Kg(d);case 26:case 5:_a(u,d,r),r&&s===null&&v&4&&Yg(d),Co(d,d.return);break;case 12:_a(u,d,r);break;case 13:_a(u,d,r),r&&v&4&&Jg(u,d);break;case 22:d.memoizedState===null&&_a(u,d,r),Co(d,d.return);break;case 30:break;default:_a(u,d,r)}a=a.sibling}}function yf(e,a){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&po(r))}function vf(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&po(e))}function Rn(e,a,r,s){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)n0(e,a,r,s),a=a.sibling}function n0(e,a,r,s){var u=a.flags;switch(a.tag){case 0:case 11:case 15:Rn(e,a,r,s),u&2048&&Oo(9,a);break;case 1:Rn(e,a,r,s);break;case 3:Rn(e,a,r,s),u&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&po(e)));break;case 12:if(u&2048){Rn(e,a,r,s),e=a.stateNode;try{var d=a.memoizedProps,v=d.id,b=d.onPostCommit;typeof b=="function"&&b(v,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Ot(a,a.return,T)}}else Rn(e,a,r,s);break;case 13:Rn(e,a,r,s);break;case 23:break;case 22:d=a.stateNode,v=a.alternate,a.memoizedState!==null?d._visibility&2?Rn(e,a,r,s):Do(e,a):d._visibility&2?Rn(e,a,r,s):(d._visibility|=2,ur(e,a,r,s,(a.subtreeFlags&10256)!==0)),u&2048&&yf(v,a);break;case 24:Rn(e,a,r,s),u&2048&&vf(a.alternate,a);break;default:Rn(e,a,r,s)}}function ur(e,a,r,s,u){for(u=u&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var d=e,v=a,b=r,T=s,N=v.flags;switch(v.tag){case 0:case 11:case 15:ur(d,v,b,T,u),Oo(8,v);break;case 23:break;case 22:var B=v.stateNode;v.memoizedState!==null?B._visibility&2?ur(d,v,b,T,u):Do(d,v):(B._visibility|=2,ur(d,v,b,T,u)),u&&N&2048&&yf(v.alternate,v);break;case 24:ur(d,v,b,T,u),u&&N&2048&&vf(v.alternate,v);break;default:ur(d,v,b,T,u)}a=a.sibling}}function Do(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=e,s=a,u=s.flags;switch(s.tag){case 22:Do(r,s),u&2048&&yf(s.alternate,s);break;case 24:Do(r,s),u&2048&&vf(s.alternate,s);break;default:Do(r,s)}a=a.sibling}}var ko=8192;function cr(e){if(e.subtreeFlags&ko)for(e=e.child;e!==null;)a0(e),e=e.sibling}function a0(e){switch(e.tag){case 26:cr(e),e.flags&ko&&e.memoizedState!==null&&zw(fn,e.memoizedState,e.memoizedProps);break;case 5:cr(e);break;case 3:case 4:var a=fn;fn=Bl(e.stateNode.containerInfo),cr(e),fn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ko,ko=16777216,cr(e),ko=a):cr(e));break;default:cr(e)}}function i0(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Mo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var s=a[r];fe=s,o0(s,e)}i0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)r0(e),e=e.sibling}function r0(e){switch(e.tag){case 0:case 11:case 15:Mo(e),e.flags&2048&&wa(9,e,e.return);break;case 3:Mo(e);break;case 12:Mo(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Al(e)):Mo(e);break;default:Mo(e)}}function Al(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var s=a[r];fe=s,o0(s,e)}i0(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:wa(8,a,a.return),Al(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,Al(a));break;default:Al(a)}e=e.sibling}}function o0(e,a){for(;fe!==null;){var r=fe;switch(r.tag){case 0:case 11:case 15:wa(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var s=r.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:po(r.memoizedState.cache)}if(s=r.child,s!==null)s.return=r,fe=s;else t:for(r=e;fe!==null;){s=fe;var u=s.sibling,d=s.return;if(Qg(s),s===r){fe=null;break t}if(u!==null){u.return=d,fe=u;break t}fe=d}}}var ew={getCacheForType:function(e){var a=xe(re),r=a.data.get(e);return r===void 0&&(r=e(),a.data.set(e,r)),r}},nw=typeof WeakMap=="function"?WeakMap:Map,wt=0,kt=null,yt=null,xt=0,Et=0,je=null,Aa=!1,fr=!1,bf=!1,Wn=0,jt=0,Ra=0,vi=0,xf=0,tn=0,dr=0,No=null,Le=null,Tf=!1,Sf=0,Rl=1/0,Ol=null,Oa=null,ge=0,Ca=null,hr=null,pr=0,wf=0,Ef=null,s0=null,Po=0,_f=null;function qe(){if((wt&2)!==0&&xt!==0)return xt&-xt;if(L.T!==null){var e=er;return e!==0?e:Mf()}return ni()}function l0(){tn===0&&(tn=(xt&536870912)===0||St?un():536870912);var e=Je.current;return e!==null&&(e.flags|=32),tn}function Fe(e,a,r){(e===kt&&(Et===2||Et===9)||e.cancelPendingCommit!==null)&&(mr(e,0),Da(e,xt,tn,!1)),pa(e,r),((wt&2)===0||e!==kt)&&(e===kt&&((wt&2)===0&&(vi|=r),jt===4&&Da(e,xt,tn,!1)),On(e))}function u0(e,a,r){if((wt&6)!==0)throw Error(o(327));var s=!r&&(a&124)===0&&(a&e.expiredLanes)===0||ei(e,a),u=s?rw(e,a):Of(e,a,!0),d=s;do{if(u===0){fr&&!s&&Da(e,a,0,!1);break}else{if(r=e.current.alternate,d&&!aw(r)){u=Of(e,a,!1),d=!1;continue}if(u===2){if(d=a,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){a=v;t:{var b=e;u=No;var T=b.current.memoizedState.isDehydrated;if(T&&(mr(b,v).flags|=256),v=Of(b,v,!1),v!==2){if(bf&&!T){b.errorRecoveryDisabledLanes|=d,vi|=d,u=4;break t}d=Le,Le=u,d!==null&&(Le===null?Le=d:Le.push.apply(Le,d))}u=v}if(d=!1,u!==2)continue}}if(u===1){mr(e,0),Da(e,a,0,!0);break}t:{switch(s=e,d=u,d){case 0:case 1:throw Error(o(345));case 4:if((a&4194048)!==a)break;case 6:Da(s,a,tn,!Aa);break t;case 2:Le=null;break;case 3:case 5:break;default:throw Error(o(329))}if((a&62914560)===a&&(u=Sf+300-be(),10<u)){if(Da(s,a,tn,!Aa),ti(s,0,!0)!==0)break t;s.timeoutHandle=B0(c0.bind(null,s,r,Le,Ol,Tf,a,tn,vi,dr,Aa,d,2,-0,0),u);break t}c0(s,r,Le,Ol,Tf,a,tn,vi,dr,Aa,d,0,-0,0)}}break}while(!0);On(e)}function c0(e,a,r,s,u,d,v,b,T,N,B,j,P,U){if(e.timeoutHandle=-1,j=a.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(Ho={stylesheets:null,count:0,unsuspend:Bw},a0(a),j=Vw(),j!==null)){e.cancelPendingCommit=j(y0.bind(null,e,a,d,r,s,u,v,b,T,B,1,P,U)),Da(e,d,v,!N);return}y0(e,a,d,r,s,u,v,b,T)}function aw(e){for(var a=e;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var s=0;s<r.length;s++){var u=r[s],d=u.getSnapshot;u=u.value;try{if(!Be(d(),u))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Da(e,a,r,s){a&=~xf,a&=~vi,e.suspendedLanes|=a,e.pingedLanes&=~a,s&&(e.warmLanes|=a),s=e.expirationTimes;for(var u=a;0<u;){var d=31-he(u),v=1<<d;s[d]=-1,u&=~v}r!==0&&dt(e,r,a)}function Cl(){return(wt&6)===0?(Lo(0),!1):!0}function Af(){if(yt!==null){if(Et===0)var e=yt.return;else e=yt,Fn=di=null,jc(e),sr=null,_o=0,e=yt;for(;e!==null;)qg(e.alternate,e),e=e.return;yt=null}}function mr(e,a){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Tw(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Af(),kt=e,yt=r=Hn(e.current,null),xt=a,Et=0,je=null,Aa=!1,fr=ei(e,a),bf=!1,dr=tn=xf=vi=Ra=jt=0,Le=No=null,Tf=!1,(a&8)!==0&&(a|=a&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=a;0<s;){var u=31-he(s),d=1<<u;a|=e[u],s&=~d}return Wn=a,Qs(),r}function f0(e,a){mt=null,L.H=gl,a===go||a===ol?(a=Om(),Et=3):a===_m?(a=Om(),Et=4):Et=a===Cg?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,je=a,yt===null&&(jt=1,Tl(e,$e(a,e.current)))}function d0(){var e=L.H;return L.H=gl,e===null?gl:e}function h0(){var e=L.A;return L.A=ew,e}function Rf(){jt=4,Aa||(xt&4194048)!==xt&&Je.current!==null||(fr=!0),(Ra&134217727)===0&&(vi&134217727)===0||kt===null||Da(kt,xt,tn,!1)}function Of(e,a,r){var s=wt;wt|=2;var u=d0(),d=h0();(kt!==e||xt!==a)&&(Ol=null,mr(e,a)),a=!1;var v=jt;t:do try{if(Et!==0&&yt!==null){var b=yt,T=je;switch(Et){case 8:Af(),v=6;break t;case 3:case 2:case 9:case 6:Je.current===null&&(a=!0);var N=Et;if(Et=0,je=null,gr(e,b,T,N),r&&fr){v=0;break t}break;default:N=Et,Et=0,je=null,gr(e,b,T,N)}}iw(),v=jt;break}catch(B){f0(e,B)}while(!0);return a&&e.shellSuspendCounter++,Fn=di=null,wt=s,L.H=u,L.A=d,yt===null&&(kt=null,xt=0,Qs()),v}function iw(){for(;yt!==null;)p0(yt)}function rw(e,a){var r=wt;wt|=2;var s=d0(),u=h0();kt!==e||xt!==a?(Ol=null,Rl=be()+500,mr(e,a)):fr=ei(e,a);t:do try{if(Et!==0&&yt!==null){a=yt;var d=je;e:switch(Et){case 1:Et=0,je=null,gr(e,a,d,1);break;case 2:case 9:if(Am(d)){Et=0,je=null,m0(a);break}a=function(){Et!==2&&Et!==9||kt!==e||(Et=7),On(e)},d.then(a,a);break t;case 3:Et=7;break t;case 4:Et=5;break t;case 7:Am(d)?(Et=0,je=null,m0(a)):(Et=0,je=null,gr(e,a,d,7));break;case 5:var v=null;switch(yt.tag){case 26:v=yt.memoizedState;case 5:case 27:var b=yt;if(!v||Z0(v)){Et=0,je=null;var T=b.sibling;if(T!==null)yt=T;else{var N=b.return;N!==null?(yt=N,Dl(N)):yt=null}break e}}Et=0,je=null,gr(e,a,d,5);break;case 6:Et=0,je=null,gr(e,a,d,6);break;case 8:Af(),jt=6;break t;default:throw Error(o(462))}}ow();break}catch(B){f0(e,B)}while(!0);return Fn=di=null,L.H=s,L.A=u,wt=r,yt!==null?0:(kt=null,xt=0,Qs(),jt)}function ow(){for(;yt!==null&&!Fu();)p0(yt)}function p0(e){var a=Hg(e.alternate,e,Wn);e.memoizedProps=e.pendingProps,a===null?Dl(e):yt=a}function m0(e){var a=e,r=a.alternate;switch(a.tag){case 15:case 0:a=Lg(r,a,a.pendingProps,a.type,void 0,xt);break;case 11:a=Lg(r,a,a.pendingProps,a.type.render,a.ref,xt);break;case 5:jc(a);default:qg(r,a),a=yt=gm(a,Wn),a=Hg(r,a,Wn)}e.memoizedProps=e.pendingProps,a===null?Dl(e):yt=a}function gr(e,a,r,s){Fn=di=null,jc(a),sr=null,_o=0;var u=a.return;try{if($S(e,u,a,r,xt)){jt=1,Tl(e,$e(r,e.current)),yt=null;return}}catch(d){if(u!==null)throw yt=u,d;jt=1,Tl(e,$e(r,e.current)),yt=null;return}a.flags&32768?(St||s===1?e=!0:fr||(xt&536870912)!==0?e=!1:(Aa=e=!0,(s===2||s===9||s===3||s===6)&&(s=Je.current,s!==null&&s.tag===13&&(s.flags|=16384))),g0(a,e)):Dl(a)}function Dl(e){var a=e;do{if((a.flags&32768)!==0){g0(a,Aa);return}e=a.return;var r=QS(a.alternate,a,Wn);if(r!==null){yt=r;return}if(a=a.sibling,a!==null){yt=a;return}yt=a=e}while(a!==null);jt===0&&(jt=5)}function g0(e,a){do{var r=WS(e.alternate,e);if(r!==null){r.flags&=32767,yt=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(e=e.sibling,e!==null)){yt=e;return}yt=e=r}while(e!==null);jt=6,yt=null}function y0(e,a,r,s,u,d,v,b,T){e.cancelPendingCommit=null;do kl();while(ge!==0);if((wt&6)!==0)throw Error(o(327));if(a!==null){if(a===e.current)throw Error(o(177));if(d=a.lanes|a.childLanes,d|=yc,zs(e,r,d,v,b,T),e===kt&&(yt=kt=null,xt=0),hr=a,Ca=e,pr=r,wf=d,Ef=u,s0=s,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cw(Pi,function(){return S0(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,u=q.p,q.p=2,v=wt,wt|=4;try{JS(e,a,r)}finally{wt=v,q.p=u,L.T=s}}ge=1,v0(),b0(),x0()}}function v0(){if(ge===1){ge=0;var e=Ca,a=hr,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=L.T,L.T=null;var s=q.p;q.p=2;var u=wt;wt|=4;try{t0(a,e);var d=Vf,v=om(e.containerInfo),b=d.focusedElem,T=d.selectionRange;if(v!==b&&b&&b.ownerDocument&&rm(b.ownerDocument.documentElement,b)){if(T!==null&&dc(b)){var N=T.start,B=T.end;if(B===void 0&&(B=N),"selectionStart"in b)b.selectionStart=N,b.selectionEnd=Math.min(B,b.value.length);else{var j=b.ownerDocument||document,P=j&&j.defaultView||window;if(P.getSelection){var U=P.getSelection(),ct=b.textContent.length,ot=Math.min(T.start,ct),Rt=T.end===void 0?ot:Math.min(T.end,ct);!U.extend&&ot>Rt&&(v=Rt,Rt=ot,ot=v);var D=im(b,ot),A=im(b,Rt);if(D&&A&&(U.rangeCount!==1||U.anchorNode!==D.node||U.anchorOffset!==D.offset||U.focusNode!==A.node||U.focusOffset!==A.offset)){var k=j.createRange();k.setStart(D.node,D.offset),U.removeAllRanges(),ot>Rt?(U.addRange(k),U.extend(A.node,A.offset)):(k.setEnd(A.node,A.offset),U.addRange(k))}}}}for(j=[],U=b;U=U.parentNode;)U.nodeType===1&&j.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<j.length;b++){var V=j[b];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}ql=!!zf,Vf=zf=null}finally{wt=u,q.p=s,L.T=r}}e.current=a,ge=2}}function b0(){if(ge===2){ge=0;var e=Ca,a=hr,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=L.T,L.T=null;var s=q.p;q.p=2;var u=wt;wt|=4;try{Zg(e,a.alternate,a)}finally{wt=u,q.p=s,L.T=r}}ge=3}}function x0(){if(ge===4||ge===3){ge=0,Ps();var e=Ca,a=hr,r=pr,s=s0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ge=5:(ge=0,hr=Ca=null,T0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Oa=null),pe(r),a=a.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Sn,a,void 0,(a.current.flags&128)===128)}catch{}if(s!==null){a=L.T,u=q.p,q.p=2,L.T=null;try{for(var d=e.onRecoverableError,v=0;v<s.length;v++){var b=s[v];d(b.value,{componentStack:b.stack})}}finally{L.T=a,q.p=u}}(pr&3)!==0&&kl(),On(e),u=e.pendingLanes,(r&4194090)!==0&&(u&42)!==0?e===_f?Po++:(Po=0,_f=e):Po=0,Lo(0)}}function T0(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,po(a)))}function kl(e){return v0(),b0(),x0(),S0()}function S0(){if(ge!==5)return!1;var e=Ca,a=wf;wf=0;var r=pe(pr),s=L.T,u=q.p;try{q.p=32>r?32:r,L.T=null,r=Ef,Ef=null;var d=Ca,v=pr;if(ge=0,hr=Ca=null,pr=0,(wt&6)!==0)throw Error(o(331));var b=wt;if(wt|=4,r0(d.current),n0(d,d.current,v,r),wt=b,Lo(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Sn,d)}catch{}return!0}finally{q.p=u,L.T=s,T0(e,a)}}function w0(e,a,r){a=$e(r,a),a=nf(e.stateNode,a,2),e=ba(e,a,2),e!==null&&(pa(e,2),On(e))}function Ot(e,a,r){if(e.tag===3)w0(e,e,r);else for(;a!==null;){if(a.tag===3){w0(a,e,r);break}else if(a.tag===1){var s=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Oa===null||!Oa.has(s))){e=$e(r,e),r=Rg(2),s=ba(a,r,2),s!==null&&(Og(r,s,a,e),pa(s,2),On(s));break}}a=a.return}}function Cf(e,a,r){var s=e.pingCache;if(s===null){s=e.pingCache=new nw;var u=new Set;s.set(a,u)}else u=s.get(a),u===void 0&&(u=new Set,s.set(a,u));u.has(r)||(bf=!0,u.add(r),e=sw.bind(null,e,a,r),a.then(e,e))}function sw(e,a,r){var s=e.pingCache;s!==null&&s.delete(a),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,kt===e&&(xt&r)===r&&(jt===4||jt===3&&(xt&62914560)===xt&&300>be()-Sf?(wt&2)===0&&mr(e,0):xf|=r,dr===xt&&(dr=0)),On(e)}function E0(e,a){a===0&&(a=Bs()),e=Qi(e,a),e!==null&&(pa(e,a),On(e))}function lw(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),E0(e,r)}function uw(e,a){var r=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(a),E0(e,r)}function cw(e,a){return $r(e,a)}var Ml=null,yr=null,Df=!1,Nl=!1,kf=!1,bi=0;function On(e){e!==yr&&e.next===null&&(yr===null?Ml=yr=e:yr=yr.next=e),Nl=!0,Df||(Df=!0,dw())}function Lo(e,a){if(!kf&&Nl){kf=!0;do for(var r=!1,s=Ml;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var d=0;else{var v=s.suspendedLanes,b=s.pingedLanes;d=(1<<31-he(42|e)+1)-1,d&=u&~(v&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,O0(s,d))}else d=xt,d=ti(s,s===kt?d:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(d&3)===0||ei(s,d)||(r=!0,O0(s,d));s=s.next}while(r);kf=!1}}function fw(){_0()}function _0(){Nl=Df=!1;var e=0;bi!==0&&(xw()&&(e=bi),bi=0);for(var a=be(),r=null,s=Ml;s!==null;){var u=s.next,d=A0(s,a);d===0?(s.next=null,r===null?Ml=u:r.next=u,u===null&&(yr=r)):(r=s,(e!==0||(d&3)!==0)&&(Nl=!0)),s=u}Lo(e)}function A0(e,a){for(var r=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-he(d),b=1<<v,T=u[v];T===-1?((b&r)===0||(b&s)!==0)&&(u[v]=Zr(b,a)):T<=a&&(e.expiredLanes|=b),d&=~b}if(a=kt,r=xt,r=ti(e,e===a?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,r===0||e===a&&(Et===2||Et===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ja(s),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||ei(e,r)){if(a=r&-r,a===e.callbackPriority)return a;switch(s!==null&&Ja(s),pe(r)){case 2:case 8:r=Us;break;case 32:r=Pi;break;case 268435456:r=In;break;default:r=Pi}return s=R0.bind(null,e),r=$r(r,s),e.callbackPriority=a,e.callbackNode=r,a}return s!==null&&s!==null&&Ja(s),e.callbackPriority=2,e.callbackNode=null,2}function R0(e,a){if(ge!==0&&ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(kl()&&e.callbackNode!==r)return null;var s=xt;return s=ti(e,e===kt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(u0(e,s,a),A0(e,be()),e.callbackNode!=null&&e.callbackNode===r?R0.bind(null,e):null)}function O0(e,a){if(kl())return null;u0(e,a,!0)}function dw(){Sw(function(){(wt&6)!==0?$r(Ye,fw):_0()})}function Mf(){return bi===0&&(bi=un()),bi}function C0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fs(""+e)}function D0(e,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,e.id&&r.setAttribute("form",e.id),a.parentNode.insertBefore(r,a),e=new FormData(e),r.parentNode.removeChild(r),e}function hw(e,a,r,s,u){if(a==="submit"&&r&&r.stateNode===u){var d=C0((u[Dt]||null).action),v=s.submitter;v&&(a=(a=v[Dt]||null)?C0(a.formAction):v.getAttribute("formAction"),a!==null&&(d=a,v=null));var b=new Ks("action","action",null,s,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(bi!==0){var T=v?D0(u,v):new FormData(u);Qc(r,{pending:!0,data:T,method:u.method,action:d},null,T)}}else typeof d=="function"&&(b.preventDefault(),T=v?D0(u,v):new FormData(u),Qc(r,{pending:!0,data:T,method:u.method,action:d},d,T))},currentTarget:u}]})}}for(var Nf=0;Nf<gc.length;Nf++){var Pf=gc[Nf],pw=Pf.toLowerCase(),mw=Pf[0].toUpperCase()+Pf.slice(1);cn(pw,"on"+mw)}cn(um,"onAnimationEnd"),cn(cm,"onAnimationIteration"),cn(fm,"onAnimationStart"),cn("dblclick","onDoubleClick"),cn("focusin","onFocus"),cn("focusout","onBlur"),cn(MS,"onTransitionRun"),cn(NS,"onTransitionStart"),cn(PS,"onTransitionCancel"),cn(dm,"onTransitionEnd"),Hi("onMouseEnter",["mouseout","mouseover"]),Hi("onMouseLeave",["mouseout","mouseover"]),Hi("onPointerEnter",["pointerout","pointerover"]),Hi("onPointerLeave",["pointerout","pointerover"]),ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function k0(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],u=s.event;s=s.listeners;t:{var d=void 0;if(a)for(var v=s.length-1;0<=v;v--){var b=s[v],T=b.instance,N=b.currentTarget;if(b=b.listener,T!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=N;try{d(u)}catch(B){xl(B)}u.currentTarget=null,d=T}else for(v=0;v<s.length;v++){if(b=s[v],T=b.instance,N=b.currentTarget,b=b.listener,T!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=N;try{d(u)}catch(B){xl(B)}u.currentTarget=null,d=T}}}}function vt(e,a){var r=a[Ii];r===void 0&&(r=a[Ii]=new Set);var s=e+"__bubble";r.has(s)||(M0(a,e,2,!1),r.add(s))}function Lf(e,a,r){var s=0;a&&(s|=4),M0(r,e,s,a)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Uf(e){if(!e[Pl]){e[Pl]=!0,_p.forEach(function(r){r!=="selectionchange"&&(gw.has(r)||Lf(r,!1,e),Lf(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Pl]||(a[Pl]=!0,Lf("selectionchange",!1,a))}}function M0(e,a,r,s){switch(ny(a)){case 2:var u=qw;break;case 8:u=Fw;break;default:u=Zf}r=u.bind(null,a,r,e),u=void 0,!ac||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(a,r,{capture:!0,passive:u}):e.addEventListener(a,r,!0):u!==void 0?e.addEventListener(a,r,{passive:u}):e.addEventListener(a,r,!1)}function If(e,a,r,s,u){var d=s;if((a&1)===0&&(a&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var b=s.stateNode.containerInfo;if(b===u)break;if(v===4)for(v=s.return;v!==null;){var T=v.tag;if((T===3||T===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;b!==null;){if(v=Bi(b),v===null)return;if(T=v.tag,T===5||T===6||T===26||T===27){s=d=v;continue t}b=b.parentNode}}s=s.return}zp(function(){var N=d,B=ec(r),j=[];t:{var P=hm.get(e);if(P!==void 0){var U=Ks,ct=e;switch(e){case"keypress":if(Ys(r)===0)break t;case"keydown":case"keyup":U=cS;break;case"focusin":ct="focus",U=sc;break;case"focusout":ct="blur",U=sc;break;case"beforeblur":case"afterblur":U=sc;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=WT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=hS;break;case um:case cm:case fm:U=eS;break;case dm:U=mS;break;case"scroll":case"scrollend":U=ZT;break;case"wheel":U=yS;break;case"copy":case"cut":case"paste":U=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Fp;break;case"toggle":case"beforetoggle":U=bS}var ot=(a&4)!==0,Rt=!ot&&(e==="scroll"||e==="scrollend"),D=ot?P!==null?P+"Capture":null:P;ot=[];for(var A=N,k;A!==null;){var V=A;if(k=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||k===null||D===null||(V=to(A,D),V!=null&&ot.push(Io(A,V,k))),Rt)break;A=A.return}0<ot.length&&(P=new U(P,ct,null,r,B),j.push({event:P,listeners:ot}))}}if((a&7)===0){t:{if(P=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",P&&r!==tc&&(ct=r.relatedTarget||r.fromElement)&&(Bi(ct)||ct[le]))break t;if((U||P)&&(P=B.window===B?B:(P=B.ownerDocument)?P.defaultView||P.parentWindow:window,U?(ct=r.relatedTarget||r.toElement,U=N,ct=ct?Bi(ct):null,ct!==null&&(Rt=c(ct),ot=ct.tag,ct!==Rt||ot!==5&&ot!==27&&ot!==6)&&(ct=null)):(U=null,ct=N),U!==ct)){if(ot=jp,V="onMouseLeave",D="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ot=Fp,V="onPointerLeave",D="onPointerEnter",A="pointer"),Rt=U==null?P:Jr(U),k=ct==null?P:Jr(ct),P=new ot(V,A+"leave",U,r,B),P.target=Rt,P.relatedTarget=k,V=null,Bi(B)===N&&(ot=new ot(D,A+"enter",ct,r,B),ot.target=k,ot.relatedTarget=Rt,V=ot),Rt=V,U&&ct)e:{for(ot=U,D=ct,A=0,k=ot;k;k=vr(k))A++;for(k=0,V=D;V;V=vr(V))k++;for(;0<A-k;)ot=vr(ot),A--;for(;0<k-A;)D=vr(D),k--;for(;A--;){if(ot===D||D!==null&&ot===D.alternate)break e;ot=vr(ot),D=vr(D)}ot=null}else ot=null;U!==null&&N0(j,P,U,ot,!1),ct!==null&&Rt!==null&&N0(j,Rt,ct,ot,!0)}}t:{if(P=N?Jr(N):window,U=P.nodeName&&P.nodeName.toLowerCase(),U==="select"||U==="input"&&P.type==="file")var et=Wp;else if(Zp(P))if(Jp)et=CS;else{et=RS;var gt=AS}else U=P.nodeName,!U||U.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?N&&Ju(N.elementType)&&(et=Wp):et=OS;if(et&&(et=et(e,N))){Qp(j,et,r,B);break t}gt&&gt(e,P,N),e==="focusout"&&N&&P.type==="number"&&N.memoizedProps.value!=null&&Wu(P,"number",P.value)}switch(gt=N?Jr(N):window,e){case"focusin":(Zp(gt)||gt.contentEditable==="true")&&(Ki=gt,hc=N,lo=null);break;case"focusout":lo=hc=Ki=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,sm(j,r,B);break;case"selectionchange":if(kS)break;case"keydown":case"keyup":sm(j,r,B)}var at;if(uc)t:{switch(e){case"compositionstart":var st="onCompositionStart";break t;case"compositionend":st="onCompositionEnd";break t;case"compositionupdate":st="onCompositionUpdate";break t}st=void 0}else Xi?Kp(e,r)&&(st="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(st="onCompositionStart");st&&(Gp&&r.locale!=="ko"&&(Xi||st!=="onCompositionStart"?st==="onCompositionEnd"&&Xi&&(at=Vp()):(ma=B,ic="value"in ma?ma.value:ma.textContent,Xi=!0)),gt=Ll(N,st),0<gt.length&&(st=new qp(st,e,null,r,B),j.push({event:st,listeners:gt}),at?st.data=at:(at=$p(r),at!==null&&(st.data=at)))),(at=TS?SS(e,r):wS(e,r))&&(st=Ll(N,"onBeforeInput"),0<st.length&&(gt=new qp("onBeforeInput","beforeinput",null,r,B),j.push({event:gt,listeners:st}),gt.data=at)),hw(j,e,N,r,B)}k0(j,a)})}function Io(e,a,r){return{instance:e,listener:a,currentTarget:r}}function Ll(e,a){for(var r=a+"Capture",s=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=to(e,r),u!=null&&s.unshift(Io(e,u,d)),u=to(e,a),u!=null&&s.push(Io(e,u,d))),e.tag===3)return s;e=e.return}return[]}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function N0(e,a,r,s,u){for(var d=a._reactName,v=[];r!==null&&r!==s;){var b=r,T=b.alternate,N=b.stateNode;if(b=b.tag,T!==null&&T===s)break;b!==5&&b!==26&&b!==27||N===null||(T=N,u?(N=to(r,d),N!=null&&v.unshift(Io(r,N,T))):u||(N=to(r,d),N!=null&&v.push(Io(r,N,T)))),r=r.return}v.length!==0&&e.push({event:a,listeners:v})}var yw=/\r\n?/g,vw=/\u0000|\uFFFD/g;function P0(e){return(typeof e=="string"?e:""+e).replace(yw,`
`).replace(vw,"")}function L0(e,a){return a=P0(a),P0(e)===a}function Ul(){}function At(e,a,r,s,u,d){switch(r){case"children":typeof s=="string"?a==="body"||a==="textarea"&&s===""||Fi(e,s):(typeof s=="number"||typeof s=="bigint")&&a!=="body"&&Fi(e,""+s);break;case"className":Hs(e,"class",s);break;case"tabIndex":Hs(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Hs(e,r,s);break;case"style":Ip(e,s,d);break;case"data":if(a!=="object"){Hs(e,"data",s);break}case"src":case"href":if(s===""&&(a!=="a"||r!=="href")){e.removeAttribute(r);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=Fs(""+s),e.setAttribute(r,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(a!=="input"&&At(e,a,"name",u.name,u,null),At(e,a,"formEncType",u.formEncType,u,null),At(e,a,"formMethod",u.formMethod,u,null),At(e,a,"formTarget",u.formTarget,u,null)):(At(e,a,"encType",u.encType,u,null),At(e,a,"method",u.method,u,null),At(e,a,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=Fs(""+s),e.setAttribute(r,s);break;case"onClick":s!=null&&(e.onclick=Ul);break;case"onScroll":s!=null&&vt("scroll",e);break;case"onScrollEnd":s!=null&&vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(r=s.__html,r!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}r=Fs(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""+s):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":s===!0?e.setAttribute(r,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,s):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(r,s):e.removeAttribute(r);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(r):e.setAttribute(r,s);break;case"popover":vt("beforetoggle",e),vt("toggle",e),Vs(e,"popover",s);break;case"xlinkActuate":zn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":zn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":zn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":zn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":zn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":zn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":zn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":zn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":zn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Vs(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=KT.get(r)||r,Vs(e,r,s))}}function Bf(e,a,r,s,u,d){switch(r){case"style":Ip(e,s,d);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(r=s.__html,r!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"children":typeof s=="string"?Fi(e,s):(typeof s=="number"||typeof s=="bigint")&&Fi(e,""+s);break;case"onScroll":s!=null&&vt("scroll",e);break;case"onScrollEnd":s!=null&&vt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ap.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),a=r.slice(2,u?r.length-7:void 0),d=e[Dt]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(a,d,u),typeof s=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(a,s,u);break t}r in e?e[r]=s:s===!0?e.setAttribute(r,""):Vs(e,r,s)}}}function ye(e,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",e),vt("load",e);var s=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var v=r[d];if(v!=null)switch(d){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:At(e,a,d,v,r,null)}}u&&At(e,a,"srcSet",r.srcSet,r,null),s&&At(e,a,"src",r.src,r,null);return;case"input":vt("invalid",e);var b=d=v=u=null,T=null,N=null;for(s in r)if(r.hasOwnProperty(s)){var B=r[s];if(B!=null)switch(s){case"name":u=B;break;case"type":v=B;break;case"checked":T=B;break;case"defaultChecked":N=B;break;case"value":d=B;break;case"defaultValue":b=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,a));break;default:At(e,a,s,B,r,null)}}Np(e,d,b,T,N,v,u,!1),js(e);return;case"select":vt("invalid",e),s=v=d=null;for(u in r)if(r.hasOwnProperty(u)&&(b=r[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":v=b;break;case"multiple":s=b;default:At(e,a,u,b,r,null)}a=d,r=v,e.multiple=!!s,a!=null?qi(e,!!s,a,!1):r!=null&&qi(e,!!s,r,!0);return;case"textarea":vt("invalid",e),d=u=s=null;for(v in r)if(r.hasOwnProperty(v)&&(b=r[v],b!=null))switch(v){case"value":s=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:At(e,a,v,b,r,null)}Lp(e,s,u,d),js(e);return;case"option":for(T in r)if(r.hasOwnProperty(T)&&(s=r[T],s!=null))switch(T){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:At(e,a,T,s,r,null)}return;case"dialog":vt("beforetoggle",e),vt("toggle",e),vt("cancel",e),vt("close",e);break;case"iframe":case"object":vt("load",e);break;case"video":case"audio":for(s=0;s<Uo.length;s++)vt(Uo[s],e);break;case"image":vt("error",e),vt("load",e);break;case"details":vt("toggle",e);break;case"embed":case"source":case"link":vt("error",e),vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in r)if(r.hasOwnProperty(N)&&(s=r[N],s!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:At(e,a,N,s,r,null)}return;default:if(Ju(a)){for(B in r)r.hasOwnProperty(B)&&(s=r[B],s!==void 0&&Bf(e,a,B,s,r,void 0));return}}for(b in r)r.hasOwnProperty(b)&&(s=r[b],s!=null&&At(e,a,b,s,r,null))}function bw(e,a,r,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,v=null,b=null,T=null,N=null,B=null;for(U in r){var j=r[U];if(r.hasOwnProperty(U)&&j!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":T=j;default:s.hasOwnProperty(U)||At(e,a,U,null,s,j)}}for(var P in s){var U=s[P];if(j=r[P],s.hasOwnProperty(P)&&(U!=null||j!=null))switch(P){case"type":d=U;break;case"name":u=U;break;case"checked":N=U;break;case"defaultChecked":B=U;break;case"value":v=U;break;case"defaultValue":b=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,a));break;default:U!==j&&At(e,a,P,U,s,j)}}Qu(e,v,b,T,N,B,d,u);return;case"select":U=v=b=P=null;for(d in r)if(T=r[d],r.hasOwnProperty(d)&&T!=null)switch(d){case"value":break;case"multiple":U=T;default:s.hasOwnProperty(d)||At(e,a,d,null,s,T)}for(u in s)if(d=s[u],T=r[u],s.hasOwnProperty(u)&&(d!=null||T!=null))switch(u){case"value":P=d;break;case"defaultValue":b=d;break;case"multiple":v=d;default:d!==T&&At(e,a,u,d,s,T)}a=b,r=v,s=U,P!=null?qi(e,!!r,P,!1):!!s!=!!r&&(a!=null?qi(e,!!r,a,!0):qi(e,!!r,r?[]:"",!1));return;case"textarea":U=P=null;for(b in r)if(u=r[b],r.hasOwnProperty(b)&&u!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:At(e,a,b,null,s,u)}for(v in s)if(u=s[v],d=r[v],s.hasOwnProperty(v)&&(u!=null||d!=null))switch(v){case"value":P=u;break;case"defaultValue":U=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==d&&At(e,a,v,u,s,d)}Pp(e,P,U);return;case"option":for(var ct in r)if(P=r[ct],r.hasOwnProperty(ct)&&P!=null&&!s.hasOwnProperty(ct))switch(ct){case"selected":e.selected=!1;break;default:At(e,a,ct,null,s,P)}for(T in s)if(P=s[T],U=r[T],s.hasOwnProperty(T)&&P!==U&&(P!=null||U!=null))switch(T){case"selected":e.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:At(e,a,T,P,s,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in r)P=r[ot],r.hasOwnProperty(ot)&&P!=null&&!s.hasOwnProperty(ot)&&At(e,a,ot,null,s,P);for(N in s)if(P=s[N],U=r[N],s.hasOwnProperty(N)&&P!==U&&(P!=null||U!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(o(137,a));break;default:At(e,a,N,P,s,U)}return;default:if(Ju(a)){for(var Rt in r)P=r[Rt],r.hasOwnProperty(Rt)&&P!==void 0&&!s.hasOwnProperty(Rt)&&Bf(e,a,Rt,void 0,s,P);for(B in s)P=s[B],U=r[B],!s.hasOwnProperty(B)||P===U||P===void 0&&U===void 0||Bf(e,a,B,P,s,U);return}}for(var D in r)P=r[D],r.hasOwnProperty(D)&&P!=null&&!s.hasOwnProperty(D)&&At(e,a,D,null,s,P);for(j in s)P=s[j],U=r[j],!s.hasOwnProperty(j)||P===U||P==null&&U==null||At(e,a,j,P,s,U)}var zf=null,Vf=null;function Il(e){return e.nodeType===9?e:e.ownerDocument}function U0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I0(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Hf(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var jf=null;function xw(){var e=window.event;return e&&e.type==="popstate"?e===jf?!1:(jf=e,!0):(jf=null,!1)}var B0=typeof setTimeout=="function"?setTimeout:void 0,Tw=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,Sw=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(e){return z0.resolve(null).then(e).catch(ww)}:B0;function ww(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function V0(e,a){var r=a,s=0,u=0;do{var d=r.nextSibling;if(e.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(0<s&&8>s){r=s;var v=e.ownerDocument;if(r&1&&Bo(v.documentElement),r&2&&Bo(v.body),r&4)for(r=v.head,Bo(r),v=r.firstChild;v;){var b=v.nextSibling,T=v.nodeName;v[Wr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&v.rel.toLowerCase()==="stylesheet"||r.removeChild(v),v=b}}if(u===0){e.removeChild(d),Yo(a);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:s=r.charCodeAt(0)-48;else s=0;r=d}while(r);Yo(a)}function qf(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":qf(r),Xu(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function Ew(e,a,r,s){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Wr])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=dn(e.nextSibling),e===null)break}return null}function _w(e,a,r){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=dn(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Aw(e,a){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")a();else{var s=function(){a(),r.removeEventListener("DOMContentLoaded",s)};r.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function dn(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var Gf=null;function H0(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return e;a--}else r==="/$"&&a++}e=e.previousSibling}return null}function j0(e,a,r){switch(a=Il(r),e){case"html":if(e=a.documentElement,!e)throw Error(o(452));return e;case"head":if(e=a.head,!e)throw Error(o(453));return e;case"body":if(e=a.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Bo(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Xu(e)}var en=new Map,q0=new Set;function Bl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jn=q.d;q.d={f:Rw,r:Ow,D:Cw,C:Dw,L:kw,m:Mw,X:Pw,S:Nw,M:Lw};function Rw(){var e=Jn.f(),a=Cl();return e||a}function Ow(e){var a=zi(e);a!==null&&a.tag===5&&a.type==="form"?ug(a):Jn.r(e)}var br=typeof document>"u"?null:document;function F0(e,a,r){var s=br;if(s&&typeof a=="string"&&a){var u=Ke(a);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),q0.has(u)||(q0.add(u),e={rel:e,crossOrigin:r,href:a},s.querySelector(u)===null&&(a=s.createElement("link"),ye(a,"link",e),ue(a),s.head.appendChild(a)))}}function Cw(e){Jn.D(e),F0("dns-prefetch",e,null)}function Dw(e,a){Jn.C(e,a),F0("preconnect",e,a)}function kw(e,a,r){Jn.L(e,a,r);var s=br;if(s&&e&&a){var u='link[rel="preload"][as="'+Ke(a)+'"]';a==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Ke(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Ke(r.imageSizes)+'"]')):u+='[href="'+Ke(e)+'"]';var d=u;switch(a){case"style":d=xr(e);break;case"script":d=Tr(e)}en.has(d)||(e=g({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:e,as:a},r),en.set(d,e),s.querySelector(u)!==null||a==="style"&&s.querySelector(zo(d))||a==="script"&&s.querySelector(Vo(d))||(a=s.createElement("link"),ye(a,"link",e),ue(a),s.head.appendChild(a)))}}function Mw(e,a){Jn.m(e,a);var r=br;if(r&&e){var s=a&&typeof a.as=="string"?a.as:"script",u='link[rel="modulepreload"][as="'+Ke(s)+'"][href="'+Ke(e)+'"]',d=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Tr(e)}if(!en.has(d)&&(e=g({rel:"modulepreload",href:e},a),en.set(d,e),r.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Vo(d)))return}s=r.createElement("link"),ye(s,"link",e),ue(s),r.head.appendChild(s)}}}function Nw(e,a,r){Jn.S(e,a,r);var s=br;if(s&&e){var u=Vi(s).hoistableStyles,d=xr(e);a=a||"default";var v=u.get(d);if(!v){var b={loading:0,preload:null};if(v=s.querySelector(zo(d)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":a},r),(r=en.get(d))&&Yf(e,r);var T=v=s.createElement("link");ue(T),ye(T,"link",e),T._p=new Promise(function(N,B){T.onload=N,T.onerror=B}),T.addEventListener("load",function(){b.loading|=1}),T.addEventListener("error",function(){b.loading|=2}),b.loading|=4,zl(v,a,s)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(d,v)}}}function Pw(e,a){Jn.X(e,a);var r=br;if(r&&e){var s=Vi(r).hoistableScripts,u=Tr(e),d=s.get(u);d||(d=r.querySelector(Vo(u)),d||(e=g({src:e,async:!0},a),(a=en.get(u))&&Xf(e,a),d=r.createElement("script"),ue(d),ye(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(u,d))}}function Lw(e,a){Jn.M(e,a);var r=br;if(r&&e){var s=Vi(r).hoistableScripts,u=Tr(e),d=s.get(u);d||(d=r.querySelector(Vo(u)),d||(e=g({src:e,async:!0,type:"module"},a),(a=en.get(u))&&Xf(e,a),d=r.createElement("script"),ue(d),ye(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(u,d))}}function G0(e,a,r,s){var u=(u=nt.current)?Bl(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=xr(r.href),r=Vi(u).hoistableStyles,s=r.get(a),s||(s={type:"style",instance:null,count:0,state:null},r.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=xr(r.href);var d=Vi(u).hoistableStyles,v=d.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=u.querySelector(zo(e)))&&!d._p&&(v.instance=d,v.state.loading=5),en.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},en.set(e,r),d||Uw(u,e,r,v.state))),a&&s===null)throw Error(o(528,""));return v}if(a&&s!==null)throw Error(o(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Tr(r),r=Vi(u).hoistableScripts,s=r.get(a),s||(s={type:"script",instance:null,count:0,state:null},r.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function xr(e){return'href="'+Ke(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function Y0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Uw(e,a,r,s){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?s.loading=1:(a=e.createElement("link"),s.preload=a,a.addEventListener("load",function(){return s.loading|=1}),a.addEventListener("error",function(){return s.loading|=2}),ye(a,"link",r),ue(a),e.head.appendChild(a))}function Tr(e){return'[src="'+Ke(e)+'"]'}function Vo(e){return"script[async]"+e}function X0(e,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var s=e.querySelector('style[data-href~="'+Ke(r.href)+'"]');if(s)return a.instance=s,ue(s),s;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),ue(s),ye(s,"style",u),zl(s,r.precedence,e),a.instance=s;case"stylesheet":u=xr(r.href);var d=e.querySelector(zo(u));if(d)return a.state.loading|=4,a.instance=d,ue(d),d;s=Y0(r),(u=en.get(u))&&Yf(s,u),d=(e.ownerDocument||e).createElement("link"),ue(d);var v=d;return v._p=new Promise(function(b,T){v.onload=b,v.onerror=T}),ye(d,"link",s),a.state.loading|=4,zl(d,r.precedence,e),a.instance=d;case"script":return d=Tr(r.src),(u=e.querySelector(Vo(d)))?(a.instance=u,ue(u),u):(s=r,(u=en.get(d))&&(s=g({},r),Xf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),ue(u),ye(u,"link",s),e.head.appendChild(u),a.instance=u);case"void":return null;default:throw Error(o(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(s=a.instance,a.state.loading|=4,zl(s,r.precedence,e));return a.instance}function zl(e,a,r){for(var s=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,d=u,v=0;v<s.length;v++){var b=s[v];if(b.dataset.precedence===a)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(e,a.firstChild))}function Yf(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Xf(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Vl=null;function K0(e,a,r){if(Vl===null){var s=new Map,u=Vl=new Map;u.set(r,s)}else u=Vl,s=u.get(r),s||(s=new Map,u.set(r,s));if(s.has(e))return s;for(s.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var d=r[u];if(!(d[Wr]||d[Kt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(a)||"";v=e+v;var b=s.get(v);b?b.push(d):s.set(v,[d])}}return s}function $0(e,a,r){e=e.ownerDocument||e,e.head.insertBefore(r,a==="title"?e.querySelector("head > title"):null)}function Iw(e,a,r){if(r===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Z0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ho=null;function Bw(){}function zw(e,a,r){if(Ho===null)throw Error(o(475));var s=Ho;if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(r.href),d=e.querySelector(zo(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Hl.bind(s),e.then(s,s)),a.state.loading|=4,a.instance=d,ue(d);return}d=e.ownerDocument||e,r=Y0(r),(u=en.get(u))&&Yf(r,u),d=d.createElement("link"),ue(d);var v=d;v._p=new Promise(function(b,T){v.onload=b,v.onerror=T}),ye(d,"link",r),a.instance=d}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(s.count++,a=Hl.bind(s),e.addEventListener("load",a),e.addEventListener("error",a))}}function Vw(){if(Ho===null)throw Error(o(475));var e=Ho;return e.stylesheets&&e.count===0&&Kf(e,e.stylesheets),0<e.count?function(a){var r=setTimeout(function(){if(e.stylesheets&&Kf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Hl(){if(this.count--,this.count===0){if(this.stylesheets)Kf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var jl=null;function Kf(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jl=new Map,a.forEach(Hw,e),jl=null,Hl.call(e))}function Hw(e,a){if(!(a.state.loading&4)){var r=jl.get(e);if(r)var s=r.get(null);else{r=new Map,jl.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var v=u[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(r.set(v.dataset.precedence,v),s=v)}s&&r.set(null,s)}u=a.instance,v=u.getAttribute("data-precedence"),d=r.get(v)||s,d===s&&r.set(null,u),r.set(v,u),this.count++,s=Hl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),a.state.loading|=4}}var jo={$$typeof:I,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function jw(e,a,r,s,u,d,v,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.hiddenUpdates=Qr(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Q0(e,a,r,s,u,d,v,b,T,N,B,j){return e=new jw(e,a,r,v,b,T,N,j),a=1,d===!0&&(a|=24),d=ze(3,null,null,a),e.current=d,d.stateNode=e,a=Oc(),a.refCount++,e.pooledCache=a,a.refCount++,d.memoizedState={element:s,isDehydrated:r,cache:a},Mc(d),e}function W0(e){return e?(e=Wi,e):Wi}function J0(e,a,r,s,u,d){u=W0(u),s.context===null?s.context=u:s.pendingContext=u,s=va(a),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=ba(e,s,a),r!==null&&(Fe(r,e,a),vo(r,e,a))}function ty(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function $f(e,a){ty(e,a),(e=e.alternate)&&ty(e,a)}function ey(e){if(e.tag===13){var a=Qi(e,67108864);a!==null&&Fe(a,e,67108864),$f(e,67108864)}}var ql=!0;function qw(e,a,r,s){var u=L.T;L.T=null;var d=q.p;try{q.p=2,Zf(e,a,r,s)}finally{q.p=d,L.T=u}}function Fw(e,a,r,s){var u=L.T;L.T=null;var d=q.p;try{q.p=8,Zf(e,a,r,s)}finally{q.p=d,L.T=u}}function Zf(e,a,r,s){if(ql){var u=Qf(s);if(u===null)If(e,a,s,Fl,r),ay(e,s);else if(Yw(u,e,a,r,s))s.stopPropagation();else if(ay(e,s),a&4&&-1<Gw.indexOf(e)){for(;u!==null;){var d=zi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=wn(d.pendingLanes);if(v!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var T=1<<31-he(v);b.entanglements[1]|=T,v&=~T}On(d),(wt&6)===0&&(Rl=be()+500,Lo(0))}}break;case 13:b=Qi(d,2),b!==null&&Fe(b,d,2),Cl(),$f(d,2)}if(d=Qf(s),d===null&&If(e,a,s,Fl,r),d===u)break;u=d}u!==null&&s.stopPropagation()}else If(e,a,s,null,r)}}function Qf(e){return e=ec(e),Wf(e)}var Fl=null;function Wf(e){if(Fl=null,e=Bi(e),e!==null){var a=c(e);if(a===null)e=null;else{var r=a.tag;if(r===13){if(e=f(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Fl=e,null}function ny(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ls()){case Ye:return 2;case Us:return 8;case Pi:case _e:return 32;case In:return 268435456;default:return 32}default:return 32}}var Jf=!1,Ma=null,Na=null,Pa=null,qo=new Map,Fo=new Map,La=[],Gw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ay(e,a){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":qo.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(a.pointerId)}}function Go(e,a,r,s,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:a,domEventName:r,eventSystemFlags:s,nativeEvent:d,targetContainers:[u]},a!==null&&(a=zi(a),a!==null&&ey(a)),e):(e.eventSystemFlags|=s,a=e.targetContainers,u!==null&&a.indexOf(u)===-1&&a.push(u),e)}function Yw(e,a,r,s,u){switch(a){case"focusin":return Ma=Go(Ma,e,a,r,s,u),!0;case"dragenter":return Na=Go(Na,e,a,r,s,u),!0;case"mouseover":return Pa=Go(Pa,e,a,r,s,u),!0;case"pointerover":var d=u.pointerId;return qo.set(d,Go(qo.get(d)||null,e,a,r,s,u)),!0;case"gotpointercapture":return d=u.pointerId,Fo.set(d,Go(Fo.get(d)||null,e,a,r,s,u)),!0}return!1}function iy(e){var a=Bi(e.target);if(a!==null){var r=c(a);if(r!==null){if(a=r.tag,a===13){if(a=f(r),a!==null){e.blockedOn=a,ie(e.priority,function(){if(r.tag===13){var s=qe();s=te(s);var u=Qi(r,s);u!==null&&Fe(u,r,s),$f(r,s)}});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=Qf(e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);tc=s,r.target.dispatchEvent(s),tc=null}else return a=zi(r),a!==null&&ey(a),e.blockedOn=r,!1;a.shift()}return!0}function ry(e,a,r){Gl(e)&&r.delete(a)}function Xw(){Jf=!1,Ma!==null&&Gl(Ma)&&(Ma=null),Na!==null&&Gl(Na)&&(Na=null),Pa!==null&&Gl(Pa)&&(Pa=null),qo.forEach(ry),Fo.forEach(ry)}function Yl(e,a){e.blockedOn===a&&(e.blockedOn=null,Jf||(Jf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Xw)))}var Xl=null;function oy(e){Xl!==e&&(Xl=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Xl===e&&(Xl=null);for(var a=0;a<e.length;a+=3){var r=e[a],s=e[a+1],u=e[a+2];if(typeof s!="function"){if(Wf(s||r)===null)continue;break}var d=zi(r);d!==null&&(e.splice(a,3),a-=3,Qc(d,{pending:!0,data:u,method:r.method,action:s},s,u))}}))}function Yo(e){function a(T){return Yl(T,e)}Ma!==null&&Yl(Ma,e),Na!==null&&Yl(Na,e),Pa!==null&&Yl(Pa,e),qo.forEach(a),Fo.forEach(a);for(var r=0;r<La.length;r++){var s=La[r];s.blockedOn===e&&(s.blockedOn=null)}for(;0<La.length&&(r=La[0],r.blockedOn===null);)iy(r),r.blockedOn===null&&La.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(s=0;s<r.length;s+=3){var u=r[s],d=r[s+1],v=u[Dt]||null;if(typeof d=="function")v||oy(r);else if(v){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,v=d[Dt]||null)b=v.formAction;else if(Wf(u)!==null)continue}else b=v.action;typeof b=="function"?r[s+1]=b:(r.splice(s,3),s-=3),oy(r)}}}function td(e){this._internalRoot=e}Kl.prototype.render=td.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(o(409));var r=a.current,s=qe();J0(r,s,e,a,null,null)},Kl.prototype.unmount=td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;J0(e.current,2,null,e,null,null),Cl(),a[le]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var a=ni();e={blockedOn:null,target:e,priority:a};for(var r=0;r<La.length&&a!==0&&a<La[r].priority;r++);La.splice(r,0,e),r===0&&iy(e)}};var sy=t.version;if(sy!=="19.1.1")throw Error(o(527,sy,"19.1.1"));q.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=h(a),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Kw={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Sn=$l.inject(Kw),Ae=$l}catch{}}return Ko.createRoot=function(e,a){if(!l(e))throw Error(o(299));var r=!1,s="",u=wg,d=Eg,v=_g,b=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks)),a=Q0(e,1,!1,null,null,r,s,u,d,v,b,null),e[le]=a.current,Uf(e),new td(a)},Ko.hydrateRoot=function(e,a,r){if(!l(e))throw Error(o(299));var s=!1,u="",d=wg,v=Eg,b=_g,T=null,N=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(v=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks),r.formState!==void 0&&(N=r.formState)),a=Q0(e,1,!0,a,r??null,s,u,d,v,b,T,N),a.context=W0(null),r=a.current,s=qe(),s=te(s),u=va(s),u.callback=null,ba(r,u,s),r=s,a.current.lanes=r,pa(a,r),On(a),e[le]=a.current,Uf(e),new Kl(a)},Ko.version="19.1.1",Ko}var yy;function aE(){if(yy)return ad.exports;yy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),ad.exports=nE(),ad.exports}var iE=aE();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var vy="popstate";function rE(n={}){function t(l,c){let{pathname:f="/",search:p="",hash:h=""}=ki(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Ld("",{pathname:f,search:p,hash:h},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let h=l.location.href,m=h.indexOf("#");p=m===-1?h:h.slice(0,m)}return p+"#"+(typeof c=="string"?c:fs(c))}function o(l,c){bn(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return sE(t,i,o,n)}function Vt(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function bn(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function oE(){return Math.random().toString(36).substring(2,10)}function by(n,t){return{usr:n.state,key:n.key,idx:t}}function Ld(n,t,i=null,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?ki(t):t,state:i,key:t&&t.key||o||oE()}}function fs({pathname:n="/",search:t="",hash:i=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function ki(n){let t={};if(n){let i=n.indexOf("#");i>=0&&(t.hash=n.substring(i),n=n.substring(0,i));let o=n.indexOf("?");o>=0&&(t.search=n.substring(o),n=n.substring(0,o)),n&&(t.pathname=n)}return t}function sE(n,t,i,o={}){let{window:l=document.defaultView,v5Compat:c=!1}=o,f=l.history,p="POP",h=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function y(){p="POP";let R=g(),C=R==null?null:R-m;m=R,h&&h({action:p,location:_.location,delta:C})}function x(R,C){p="PUSH";let M=Ld(_.location,R,C);i&&i(M,R),m=g()+1;let I=by(M,m),K=_.createHref(M);try{f.pushState(I,"",K)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;l.location.assign(K)}c&&h&&h({action:p,location:_.location,delta:1})}function S(R,C){p="REPLACE";let M=Ld(_.location,R,C);i&&i(M,R),m=g();let I=by(M,m),K=_.createHref(M);f.replaceState(I,"",K),c&&h&&h({action:p,location:_.location,delta:0})}function w(R){return lE(R)}let _={get action(){return p},get location(){return n(l,f)},listen(R){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(vy,y),h=R,()=>{l.removeEventListener(vy,y),h=null}},createHref(R){return t(l,R)},createURL:w,encodeLocation(R){let C=w(R);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:x,replace:S,go(R){return f.go(R)}};return _}function lE(n,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Vt(i,"No window.location.(origin|href) available to create URL");let o=typeof n=="string"?n:fs(n);return o=o.replace(/ $/,"%20"),!t&&o.startsWith("//")&&(o=i+o),new URL(o,i)}function Mb(n,t,i="/"){return uE(n,t,i,!1)}function uE(n,t,i,o){let l=typeof t=="string"?ki(t):t,c=ia(l.pathname||"/",i);if(c==null)return null;let f=Nb(n);cE(f);let p=null;for(let h=0;p==null&&h<f.length;++h){let m=TE(c);p=bE(f[h],m,o)}return p}function Nb(n,t=[],i=[],o="",l=!1){let c=(f,p,h=l,m)=>{let g={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(o)&&h)return;Vt(g.relativePath.startsWith(o),`Absolute route path "${g.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(o.length)}let y=aa([o,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&(Vt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Nb(f.children,t,x,y,h)),!(f.path==null&&!f.index)&&t.push({path:y,score:yE(y,f.index),routesMeta:x})};return n.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let h of Pb(f.path))c(f,p,!0,h)}),t}function Pb(n){let t=n.split("/");if(t.length===0)return[];let[i,...o]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(o.length===0)return l?[c,""]:[c];let f=Pb(o.join("/")),p=[];return p.push(...f.map(h=>h===""?c:[c,h].join("/"))),l&&p.push(...f),p.map(h=>n.startsWith("/")&&h===""?"/":h)}function cE(n){n.sort((t,i)=>t.score!==i.score?i.score-t.score:vE(t.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var fE=/^:[\w-]+$/,dE=3,hE=2,pE=1,mE=10,gE=-2,xy=n=>n==="*";function yE(n,t){let i=n.split("/"),o=i.length;return i.some(xy)&&(o+=gE),t&&(o+=hE),i.filter(l=>!xy(l)).reduce((l,c)=>l+(fE.test(c)?dE:c===""?pE:mE),o)}function vE(n,t){return n.length===t.length&&n.slice(0,-1).every((o,l)=>o===t[l])?n[n.length-1]-t[t.length-1]:0}function bE(n,t,i=!1){let{routesMeta:o}=n,l={},c="/",f=[];for(let p=0;p<o.length;++p){let h=o[p],m=p===o.length-1,g=c==="/"?t:t.slice(c.length)||"/",y=gu({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},g),x=h.route;if(!y&&m&&i&&!o[o.length-1].route.index&&(y=gu({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!y)return null;Object.assign(l,y.params),f.push({params:l,pathname:aa([c,y.pathname]),pathnameBase:_E(aa([c,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(c=aa([c,y.pathnameBase]))}return f}function gu(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,o]=xE(n.path,n.caseSensitive,n.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:o.reduce((m,{paramName:g,isOptional:y},x)=>{if(g==="*"){let w=p[x]||"";f=c.slice(0,c.length-w.length).replace(/(.)\/+$/,"$1")}const S=p[x];return y&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:n}}function xE(n,t=!1,i=!0){bn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,h)=>(o.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),l+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":n!==""&&n!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),o]}function TE(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function ia(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,o=n.charAt(i);return o&&o!=="/"?null:n.slice(i)||"/"}function SE(n,t="/"){let{pathname:i,search:o="",hash:l=""}=typeof n=="string"?ki(n):n;return{pathname:i?i.startsWith("/")?i:wE(i,t):t,search:AE(o),hash:RE(l)}}function wE(n,t){let i=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function sd(n,t,i,o){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function EE(n){return n.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Lb(n){let t=EE(n);return t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase)}function Ub(n,t,i,o=!1){let l;typeof n=="string"?l=ki(n):(l={...n},Vt(!l.pathname||!l.pathname.includes("?"),sd("?","pathname","search",l)),Vt(!l.pathname||!l.pathname.includes("#"),sd("#","pathname","hash",l)),Vt(!l.search||!l.search.includes("#"),sd("#","search","hash",l)));let c=n===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let y=t.length-1;if(!o&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),y-=1;l.pathname=x.join("/")}p=y>=0?t[y]:"/"}let h=SE(l,p),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(m||g)&&(h.pathname+="/"),h}var aa=n=>n.join("/").replace(/\/\/+/g,"/"),_E=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),AE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,RE=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function OE(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Ib=["POST","PUT","PATCH","DELETE"];new Set(Ib);var CE=["GET",...Ib];new Set(CE);var Br=O.createContext(null);Br.displayName="DataRouter";var Nu=O.createContext(null);Nu.displayName="DataRouterState";O.createContext(!1);var Bb=O.createContext({isTransitioning:!1});Bb.displayName="ViewTransition";var DE=O.createContext(new Map);DE.displayName="Fetchers";var kE=O.createContext(null);kE.displayName="Await";var Ln=O.createContext(null);Ln.displayName="Navigation";var Ss=O.createContext(null);Ss.displayName="Location";var ua=O.createContext({outlet:null,matches:[],isDataRoute:!1});ua.displayName="Route";var vh=O.createContext(null);vh.displayName="RouteError";function ME(n,{relative:t}={}){Vt(ws(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=O.useContext(Ln),{hash:l,pathname:c,search:f}=Es(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:aa([i,c])),o.createHref({pathname:p,search:f,hash:l})}function ws(){return O.useContext(Ss)!=null}function Mi(){return Vt(ws(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Ss).location}var zb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vb(n){O.useContext(Ln).static||O.useLayoutEffect(n)}function bh(){let{isDataRoute:n}=O.useContext(ua);return n?GE():NE()}function NE(){Vt(ws(),"useNavigate() may be used only in the context of a <Router> component.");let n=O.useContext(Br),{basename:t,navigator:i}=O.useContext(Ln),{matches:o}=O.useContext(ua),{pathname:l}=Mi(),c=JSON.stringify(Lb(o)),f=O.useRef(!1);return Vb(()=>{f.current=!0}),O.useCallback((h,m={})=>{if(bn(f.current,zb),!f.current)return;if(typeof h=="number"){i.go(h);return}let g=Ub(h,JSON.parse(c),l,m.relative==="path");n==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:aa([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,c,l,n])}O.createContext(null);function Es(n,{relative:t}={}){let{matches:i}=O.useContext(ua),{pathname:o}=Mi(),l=JSON.stringify(Lb(i));return O.useMemo(()=>Ub(n,JSON.parse(l),o,t==="path"),[n,l,o,t])}function PE(n,t){return Hb(n,t)}function Hb(n,t,i,o,l){Vt(ws(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=O.useContext(Ln),{matches:f}=O.useContext(ua),p=f[f.length-1],h=p?p.params:{},m=p?p.pathname:"/",g=p?p.pathnameBase:"/",y=p&&p.route;{let M=y&&y.path||"";jb(m,!y||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let x=Mi(),S;if(t){let M=typeof t=="string"?ki(t):t;Vt(g==="/"||M.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${M.pathname}" was given in the \`location\` prop.`),S=M}else S=x;let w=S.pathname||"/",_=w;if(g!=="/"){let M=g.replace(/^\//,"").split("/");_="/"+w.replace(/^\//,"").split("/").slice(M.length).join("/")}let R=Mb(n,{pathname:_});bn(y||R!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),bn(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=zE(R&&R.map(M=>Object.assign({},M,{params:Object.assign({},h,M.params),pathname:aa([g,c.encodeLocation?c.encodeLocation(M.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?g:aa([g,c.encodeLocation?c.encodeLocation(M.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),f,i,o,l);return t&&C?O.createElement(Ss.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},C):C}function LE(){let n=FE(),t=OE(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:c},"ErrorBoundary")," or"," ",O.createElement("code",{style:c},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),i?O.createElement("pre",{style:l},i):null,f)}var UE=O.createElement(LE,null),IE=class extends O.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){this.props.unstable_onError?this.props.unstable_onError(n,t):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?O.createElement(ua.Provider,{value:this.props.routeContext},O.createElement(vh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function BE({routeContext:n,match:t,children:i}){let o=O.useContext(Br);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),O.createElement(ua.Provider,{value:n},i)}function zE(n,t=[],i=null,o=null,l=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let c=n,f=i?.errors;if(f!=null){let m=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Vt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,m+1))}let p=!1,h=-1;if(i)for(let m=0;m<c.length;m++){let g=c[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=m),g.route.id){let{loaderData:y,errors:x}=i,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||S){p=!0,h>=0?c=c.slice(0,h+1):c=[c[0]];break}}}return c.reduceRight((m,g,y)=>{let x,S=!1,w=null,_=null;i&&(x=f&&g.route.id?f[g.route.id]:void 0,w=g.route.errorElement||UE,p&&(h<0&&y===0?(jb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,_=null):h===y&&(S=!0,_=g.route.hydrateFallbackElement||null)));let R=t.concat(c.slice(0,y+1)),C=()=>{let M;return x?M=w:S?M=_:g.route.Component?M=O.createElement(g.route.Component,null):g.route.element?M=g.route.element:M=m,O.createElement(BE,{match:g,routeContext:{outlet:m,matches:R,isDataRoute:i!=null},children:M})};return i&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?O.createElement(IE,{location:i.location,revalidation:i.revalidation,component:w,error:x,children:C(),routeContext:{outlet:null,matches:R,isDataRoute:!0},unstable_onError:o}):C()},null)}function xh(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function VE(n){let t=O.useContext(Br);return Vt(t,xh(n)),t}function HE(n){let t=O.useContext(Nu);return Vt(t,xh(n)),t}function jE(n){let t=O.useContext(ua);return Vt(t,xh(n)),t}function Th(n){let t=jE(n),i=t.matches[t.matches.length-1];return Vt(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function qE(){return Th("useRouteId")}function FE(){let n=O.useContext(vh),t=HE("useRouteError"),i=Th("useRouteError");return n!==void 0?n:t.errors?.[i]}function GE(){let{router:n}=VE("useNavigate"),t=Th("useNavigate"),i=O.useRef(!1);return Vb(()=>{i.current=!0}),O.useCallback(async(l,c={})=>{bn(i.current,zb),i.current&&(typeof l=="number"?n.navigate(l):await n.navigate(l,{fromRouteId:t,...c}))},[n,t])}var Ty={};function jb(n,t,i){!t&&!Ty[n]&&(Ty[n]=!0,bn(!1,i))}O.memo(YE);function YE({routes:n,future:t,state:i,unstable_onError:o}){return Hb(n,void 0,i,o,t)}function Wo(n){Vt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function XE({basename:n="/",children:t=null,location:i,navigationType:o="POP",navigator:l,static:c=!1}){Vt(!ws(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),p=O.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=ki(i));let{pathname:h="/",search:m="",hash:g="",state:y=null,key:x="default"}=i,S=O.useMemo(()=>{let w=ia(h,f);return w==null?null:{location:{pathname:w,search:m,hash:g,state:y,key:x},navigationType:o}},[f,h,m,g,y,x,o]);return bn(S!=null,`<Router basename="${f}"> is not able to match the URL "${h}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:O.createElement(Ln.Provider,{value:p},O.createElement(Ss.Provider,{children:t,value:S}))}function KE({children:n,location:t}){return PE(Ud(n),t)}function Ud(n,t=[]){let i=[];return O.Children.forEach(n,(o,l)=>{if(!O.isValidElement(o))return;let c=[...t,l];if(o.type===O.Fragment){i.push.apply(i,Ud(o.props.children,c));return}Vt(o.type===Wo,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Vt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=Ud(o.props.children,c)),i.push(f)}),i}var ou="get",su="application/x-www-form-urlencoded";function Pu(n){return n!=null&&typeof n.tagName=="string"}function $E(n){return Pu(n)&&n.tagName.toLowerCase()==="button"}function ZE(n){return Pu(n)&&n.tagName.toLowerCase()==="form"}function QE(n){return Pu(n)&&n.tagName.toLowerCase()==="input"}function WE(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function JE(n,t){return n.button===0&&(!t||t==="_self")&&!WE(n)}var Zl=null;function t_(){if(Zl===null)try{new FormData(document.createElement("form"),0),Zl=!1}catch{Zl=!0}return Zl}var e_=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ld(n){return n!=null&&!e_.has(n)?(bn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${su}"`),null):n}function n_(n,t){let i,o,l,c,f;if(ZE(n)){let p=n.getAttribute("action");o=p?ia(p,t):null,i=n.getAttribute("method")||ou,l=ld(n.getAttribute("enctype"))||su,c=new FormData(n)}else if($E(n)||QE(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||p.getAttribute("action");if(o=h?ia(h,t):null,i=n.getAttribute("formmethod")||p.getAttribute("method")||ou,l=ld(n.getAttribute("formenctype"))||ld(p.getAttribute("enctype"))||su,c=new FormData(p,n),!t_()){let{name:m,type:g,value:y}=n;if(g==="image"){let x=m?`${m}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else m&&c.append(m,y)}}else{if(Pu(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ou,o=null,l=su,f=n}return c&&l==="text/plain"&&(f=c,c=void 0),{action:o,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sh(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function a_(n,t,i){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname=`_root.${i}`:t&&ia(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${i}`,o}async function i_(n,t){if(n.id in t)return t[n.id];try{let i=await import(n.module);return t[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function r_(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function o_(n,t,i){let o=await Promise.all(n.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await i_(c,i);return f.links?f.links():[]}return[]}));return c_(o.flat(1).filter(r_).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Sy(n,t,i,o,l,c){let f=(h,m)=>i[m]?h.route.id!==i[m].route.id:!0,p=(h,m)=>i[m].pathname!==h.pathname||i[m].route.path?.endsWith("*")&&i[m].params["*"]!==h.params["*"];return c==="assets"?t.filter((h,m)=>f(h,m)||p(h,m)):c==="data"?t.filter((h,m)=>{let g=o.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(f(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let y=h.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function s_(n,t,{includeHydrateFallback:i}={}){return l_(n.map(o=>{let l=t.routes[o.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function l_(n){return[...new Set(n)]}function u_(n){let t={},i=Object.keys(n).sort();for(let o of i)t[o]=n[o];return t}function c_(n,t){let i=new Set;return new Set(t),n.reduce((o,l)=>{let c=JSON.stringify(u_(l));return i.has(c)||(i.add(c),o.push({key:c,link:l})),o},[])}function qb(){let n=O.useContext(Br);return Sh(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function f_(){let n=O.useContext(Nu);return Sh(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var wh=O.createContext(void 0);wh.displayName="FrameworkContext";function Fb(){let n=O.useContext(wh);return Sh(n,"You must render this element inside a <HydratedRouter> element"),n}function d_(n,t){let i=O.useContext(wh),[o,l]=O.useState(!1),[c,f]=O.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:g,onTouchStart:y}=t,x=O.useRef(null);O.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let _=C=>{C.forEach(M=>{f(M.isIntersecting)})},R=new IntersectionObserver(_,{threshold:.5});return x.current&&R.observe(x.current),()=>{R.disconnect()}}},[n]),O.useEffect(()=>{if(o){let _=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(_)}}},[o]);let S=()=>{l(!0)},w=()=>{l(!1),f(!1)};return i?n!=="intent"?[c,x,{}]:[c,x,{onFocus:$o(p,S),onBlur:$o(h,w),onMouseEnter:$o(m,S),onMouseLeave:$o(g,w),onTouchStart:$o(y,S)}]:[!1,x,{}]}function $o(n,t){return i=>{n&&n(i),i.defaultPrevented||t(i)}}function h_({page:n,...t}){let{router:i}=qb(),o=O.useMemo(()=>Mb(i.routes,n,i.basename),[i.routes,n,i.basename]);return o?O.createElement(m_,{page:n,matches:o,...t}):null}function p_(n){let{manifest:t,routeModules:i}=Fb(),[o,l]=O.useState([]);return O.useEffect(()=>{let c=!1;return o_(n,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[n,t,i]),o}function m_({page:n,matches:t,...i}){let o=Mi(),{manifest:l,routeModules:c}=Fb(),{basename:f}=qb(),{loaderData:p,matches:h}=f_(),m=O.useMemo(()=>Sy(n,t,h,l,o,"data"),[n,t,h,l,o]),g=O.useMemo(()=>Sy(n,t,h,l,o,"assets"),[n,t,h,l,o]),y=O.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let w=new Set,_=!1;if(t.forEach(C=>{let M=l.routes[C.route.id];!M||!M.hasLoader||(!m.some(I=>I.route.id===C.route.id)&&C.route.id in p&&c[C.route.id]?.shouldRevalidate||M.hasClientLoader?_=!0:w.add(C.route.id))}),w.size===0)return[];let R=a_(n,f,"data");return _&&w.size>0&&R.searchParams.set("_routes",t.filter(C=>w.has(C.route.id)).map(C=>C.route.id).join(",")),[R.pathname+R.search]},[f,p,o,l,m,t,n,c]),x=O.useMemo(()=>s_(g,l),[g,l]),S=p_(g);return O.createElement(O.Fragment,null,y.map(w=>O.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),x.map(w=>O.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),S.map(({key:w,link:_})=>O.createElement("link",{key:w,nonce:i.nonce,..._})))}function g_(...n){return t=>{n.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Gb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gb&&(window.__reactRouterVersion="7.9.4")}catch{}function y_({basename:n,children:t,window:i}){let o=O.useRef();o.current==null&&(o.current=rE({window:i,v5Compat:!0}));let l=o.current,[c,f]=O.useState({action:l.action,location:l.location}),p=O.useCallback(h=>{O.startTransition(()=>f(h))},[f]);return O.useLayoutEffect(()=>l.listen(p),[l,p]),O.createElement(XE,{basename:n,children:t,location:c.location,navigationType:c.action,navigator:l})}var Yb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xb=O.forwardRef(function({onClick:t,discover:i="render",prefetch:o="none",relative:l,reloadDocument:c,replace:f,state:p,target:h,to:m,preventScrollReset:g,viewTransition:y,...x},S){let{basename:w}=O.useContext(Ln),_=typeof m=="string"&&Yb.test(m),R,C=!1;if(typeof m=="string"&&_&&(R=m,Gb))try{let Z=new URL(window.location.href),bt=m.startsWith("//")?new URL(Z.protocol+m):new URL(m),It=ia(bt.pathname,w);bt.origin===Z.origin&&It!=null?m=It+bt.search+bt.hash:C=!0}catch{bn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=ME(m,{relative:l}),[I,K,z]=d_(o,x),J=T_(m,{replace:f,state:p,target:h,preventScrollReset:g,relative:l,viewTransition:y});function $(Z){t&&t(Z),Z.defaultPrevented||J(Z)}let Y=O.createElement("a",{...x,...z,href:R||M,onClick:C||c?t:$,ref:g_(S,K),target:h,"data-discover":!_&&i==="render"?"true":void 0});return I&&!_?O.createElement(O.Fragment,null,Y,O.createElement(h_,{page:M})):Y});Xb.displayName="Link";var v_=O.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:o="",end:l=!1,style:c,to:f,viewTransition:p,children:h,...m},g){let y=Es(f,{relative:m.relative}),x=Mi(),S=O.useContext(Nu),{navigator:w,basename:_}=O.useContext(Ln),R=S!=null&&A_(y)&&p===!0,C=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,M=x.pathname,I=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(M=M.toLowerCase(),I=I?I.toLowerCase():null,C=C.toLowerCase()),I&&_&&(I=ia(I,_)||I);const K=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let z=M===C||!l&&M.startsWith(C)&&M.charAt(K)==="/",J=I!=null&&(I===C||!l&&I.startsWith(C)&&I.charAt(C.length)==="/"),$={isActive:z,isPending:J,isTransitioning:R},Y=z?t:void 0,Z;typeof o=="function"?Z=o($):Z=[o,z?"active":null,J?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let bt=typeof c=="function"?c($):c;return O.createElement(Xb,{...m,"aria-current":Y,className:Z,ref:g,style:bt,to:f,viewTransition:p},typeof h=="function"?h($):h)});v_.displayName="NavLink";var b_=O.forwardRef(({discover:n="render",fetcherKey:t,navigate:i,reloadDocument:o,replace:l,state:c,method:f=ou,action:p,onSubmit:h,relative:m,preventScrollReset:g,viewTransition:y,...x},S)=>{let w=E_(),_=__(p,{relative:m}),R=f.toLowerCase()==="get"?"get":"post",C=typeof p=="string"&&Yb.test(p),M=I=>{if(h&&h(I),I.defaultPrevented)return;I.preventDefault();let K=I.nativeEvent.submitter,z=K?.getAttribute("formmethod")||f;w(K||I.currentTarget,{fetcherKey:t,method:z,navigate:i,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:y})};return O.createElement("form",{ref:S,method:R,action:_,onSubmit:o?h:M,...x,"data-discover":!C&&n==="render"?"true":void 0})});b_.displayName="Form";function x_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kb(n){let t=O.useContext(Br);return Vt(t,x_(n)),t}function T_(n,{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:f}={}){let p=bh(),h=Mi(),m=Es(n,{relative:c});return O.useCallback(g=>{if(JE(g,t)){g.preventDefault();let y=i!==void 0?i:fs(h)===fs(m);p(n,{replace:y,state:o,preventScrollReset:l,relative:c,viewTransition:f})}},[h,p,m,i,o,t,n,l,c,f])}var S_=0,w_=()=>`__${String(++S_)}__`;function E_(){let{router:n}=Kb("useSubmit"),{basename:t}=O.useContext(Ln),i=qE();return O.useCallback(async(o,l={})=>{let{action:c,method:f,encType:p,formData:h,body:m}=n_(o,t);if(l.navigate===!1){let g=l.fetcherKey||w_();await n.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:h,body:m,formMethod:l.method||f,formEncType:l.encType||p,flushSync:l.flushSync})}else await n.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:h,body:m,formMethod:l.method||f,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[n,t,i])}function __(n,{relative:t}={}){let{basename:i}=O.useContext(Ln),o=O.useContext(ua);Vt(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),c={...Es(n||".",{relative:t})},f=Mi();if(n==null){c.search=f.search;let p=new URLSearchParams(c.search),h=p.getAll("index");if(h.some(g=>g==="")){p.delete("index"),h.filter(y=>y).forEach(y=>p.append("index",y));let g=p.toString();c.search=g?`?${g}`:""}}return(!n||n===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:aa([i,c.pathname])),fs(c)}function A_(n,{relative:t}={}){let i=O.useContext(Bb);Vt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Kb("useViewTransitionState"),l=Es(n,{relative:t});if(!i.isTransitioning)return!1;let c=ia(i.currentLocation.pathname,o)||i.currentLocation.pathname,f=ia(i.nextLocation.pathname,o)||i.nextLocation.pathname;return gu(l.pathname,f)!=null||gu(l.pathname,c)!=null}var R_=kb();const O_=Db(R_);var $b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wy=X.createContext&&X.createContext($b),C_=["attr","size","title"];function D_(n,t){if(n==null)return{};var i=k_(n,t),o,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(l=0;l<c.length;l++)o=c[l],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}function k_(n,t){if(n==null)return{};var i={};for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){if(t.indexOf(o)>=0)continue;i[o]=n[o]}return i}function yu(){return yu=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},yu.apply(this,arguments)}function Ey(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),i.push.apply(i,o)}return i}function vu(n){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Ey(Object(i),!0).forEach(function(o){M_(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Ey(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function M_(n,t,i){return t=N_(t),t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}function N_(n){var t=P_(n,"string");return typeof t=="symbol"?t:t+""}function P_(n,t){if(typeof n!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var o=i.call(n,t);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Zb(n){return n&&n.map((t,i)=>X.createElement(t.tag,vu({key:i},t.attr),Zb(t.child)))}function zr(n){return t=>X.createElement(L_,yu({attr:vu({},n.attr)},t),Zb(n.child))}function L_(n){var t=i=>{var{attr:o,size:l,title:c}=n,f=D_(n,C_),p=l||i.size||"1em",h;return i.className&&(h=i.className),n.className&&(h=(h?h+" ":"")+n.className),X.createElement("svg",yu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,f,{className:h,style:vu(vu({color:n.color||i.color},i.style),n.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&X.createElement("title",null,c),n.children)};return wy!==void 0?X.createElement(wy.Consumer,null,i=>t(i)):t($b)}function U_(n){return zr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(n)}function ud(n){return zr({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"},child:[]}]})(n)}function I_(n){return zr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"},child:[]}]})(n)}const Qb=O.createContext({});function B_(n){const t=O.useRef(null);return t.current===null&&(t.current=n()),t.current}const Eh=typeof window<"u",z_=Eh?O.useLayoutEffect:O.useEffect,_h=O.createContext(null);function Ah(n,t){n.indexOf(t)===-1&&n.push(t)}function Rh(n,t){const i=n.indexOf(t);i>-1&&n.splice(i,1)}const ra=(n,t,i)=>i>t?t:i<n?n:i;let Oh=()=>{};const oa={},Wb=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Jb(n){return typeof n=="object"&&n!==null}const t1=n=>/^0[^.\s]+$/u.test(n);function Ch(n){let t;return()=>(t===void 0&&(t=n()),t)}const on=n=>n,V_=(n,t)=>i=>t(n(i)),_s=(...n)=>n.reduce(V_),ds=(n,t,i)=>{const o=t-n;return o===0?1:(i-n)/o};class Dh{constructor(){this.subscriptions=[]}add(t){return Ah(this.subscriptions,t),()=>Rh(this.subscriptions,t)}notify(t,i,o){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](t,i,o);else for(let c=0;c<l;c++){const f=this.subscriptions[c];f&&f(t,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const kn=n=>n*1e3,rn=n=>n/1e3;function e1(n,t){return t?n*(1e3/t):0}const n1=(n,t,i)=>(((1-3*i+3*t)*n+(3*i-6*t))*n+3*t)*n,H_=1e-7,j_=12;function q_(n,t,i,o,l){let c,f,p=0;do f=t+(i-t)/2,c=n1(f,o,l)-n,c>0?i=f:t=f;while(Math.abs(c)>H_&&++p<j_);return f}function As(n,t,i,o){if(n===t&&i===o)return on;const l=c=>q_(c,0,1,n,i);return c=>c===0||c===1?c:n1(l(c),t,o)}const a1=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,i1=n=>t=>1-n(1-t),r1=As(.33,1.53,.69,.99),kh=i1(r1),o1=a1(kh),s1=n=>(n*=2)<1?.5*kh(n):.5*(2-Math.pow(2,-10*(n-1))),Mh=n=>1-Math.sin(Math.acos(n)),l1=i1(Mh),u1=a1(Mh),F_=As(.42,0,1,1),G_=As(0,0,.58,1),c1=As(.42,0,.58,1),Y_=n=>Array.isArray(n)&&typeof n[0]!="number",f1=n=>Array.isArray(n)&&typeof n[0]=="number",X_={linear:on,easeIn:F_,easeInOut:c1,easeOut:G_,circIn:Mh,circInOut:u1,circOut:l1,backIn:kh,backInOut:o1,backOut:r1,anticipate:s1},K_=n=>typeof n=="string",_y=n=>{if(f1(n)){Oh(n.length===4);const[t,i,o,l]=n;return As(t,i,o,l)}else if(K_(n))return X_[n];return n},Ql=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function $_(n,t){let i=new Set,o=new Set,l=!1,c=!1;const f=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(g){f.has(g)&&(m.schedule(g),n()),g(p)}const m={schedule:(g,y=!1,x=!1)=>{const w=x&&l?i:o;return y&&f.add(g),w.has(g)||w.add(g),g},cancel:g=>{o.delete(g),f.delete(g)},process:g=>{if(p=g,l){c=!0;return}l=!0,[i,o]=[o,i],i.forEach(h),i.clear(),l=!1,c&&(c=!1,m.process(g))}};return m}const Z_=40;function d1(n,t){let i=!1,o=!0;const l={delta:0,timestamp:0,isProcessing:!1},c=()=>i=!0,f=Ql.reduce((I,K)=>(I[K]=$_(c),I),{}),{setup:p,read:h,resolveKeyframes:m,preUpdate:g,update:y,preRender:x,render:S,postRender:w}=f,_=()=>{const I=oa.useManualTiming?l.timestamp:performance.now();i=!1,oa.useManualTiming||(l.delta=o?1e3/60:Math.max(Math.min(I-l.timestamp,Z_),1)),l.timestamp=I,l.isProcessing=!0,p.process(l),h.process(l),m.process(l),g.process(l),y.process(l),x.process(l),S.process(l),w.process(l),l.isProcessing=!1,i&&t&&(o=!1,n(_))},R=()=>{i=!0,o=!0,l.isProcessing||n(_)};return{schedule:Ql.reduce((I,K)=>{const z=f[K];return I[K]=(J,$=!1,Y=!1)=>(i||R(),z.schedule(J,$,Y)),I},{}),cancel:I=>{for(let K=0;K<Ql.length;K++)f[Ql[K]].cancel(I)},state:l,steps:f}}const{schedule:Ut,cancel:$a,state:ve,steps:cd}=d1(typeof requestAnimationFrame<"u"?requestAnimationFrame:on,!0);let lu;function Q_(){lu=void 0}const Ie={now:()=>(lu===void 0&&Ie.set(ve.isProcessing||oa.useManualTiming?ve.timestamp:performance.now()),lu),set:n=>{lu=n,queueMicrotask(Q_)}},h1=n=>t=>typeof t=="string"&&t.startsWith(n),Nh=h1("--"),W_=h1("var(--"),Ph=n=>W_(n)?J_.test(n.split("/*")[0].trim()):!1,J_=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Vr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},hs={...Vr,transform:n=>ra(0,1,n)},Wl={...Vr,default:1},as=n=>Math.round(n*1e5)/1e5,Lh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function t2(n){return n==null}const e2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Uh=(n,t)=>i=>!!(typeof i=="string"&&e2.test(i)&&i.startsWith(n)||t&&!t2(i)&&Object.prototype.hasOwnProperty.call(i,t)),p1=(n,t,i)=>o=>{if(typeof o!="string")return o;const[l,c,f,p]=o.match(Lh);return{[n]:parseFloat(l),[t]:parseFloat(c),[i]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},n2=n=>ra(0,255,n),fd={...Vr,transform:n=>Math.round(n2(n))},wi={test:Uh("rgb","red"),parse:p1("red","green","blue"),transform:({red:n,green:t,blue:i,alpha:o=1})=>"rgba("+fd.transform(n)+", "+fd.transform(t)+", "+fd.transform(i)+", "+as(hs.transform(o))+")"};function a2(n){let t="",i="",o="",l="";return n.length>5?(t=n.substring(1,3),i=n.substring(3,5),o=n.substring(5,7),l=n.substring(7,9)):(t=n.substring(1,2),i=n.substring(2,3),o=n.substring(3,4),l=n.substring(4,5),t+=t,i+=i,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Id={test:Uh("#"),parse:a2,transform:wi.transform},Rs=n=>({test:t=>typeof t=="string"&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),za=Rs("deg"),Mn=Rs("%"),ft=Rs("px"),i2=Rs("vh"),r2=Rs("vw"),Ay={...Mn,parse:n=>Mn.parse(n)/100,transform:n=>Mn.transform(n*100)},wr={test:Uh("hsl","hue"),parse:p1("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:i,alpha:o=1})=>"hsla("+Math.round(n)+", "+Mn.transform(as(t))+", "+Mn.transform(as(i))+", "+as(hs.transform(o))+")"},ae={test:n=>wi.test(n)||Id.test(n)||wr.test(n),parse:n=>wi.test(n)?wi.parse(n):wr.test(n)?wr.parse(n):Id.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?wi.transform(n):wr.transform(n),getAnimatableNone:n=>{const t=ae.parse(n);return t.alpha=0,ae.transform(t)}},o2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function s2(n){return isNaN(n)&&typeof n=="string"&&(n.match(Lh)?.length||0)+(n.match(o2)?.length||0)>0}const m1="number",g1="color",l2="var",u2="var(",Ry="${}",c2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ps(n){const t=n.toString(),i=[],o={color:[],number:[],var:[]},l=[];let c=0;const p=t.replace(c2,h=>(ae.test(h)?(o.color.push(c),l.push(g1),i.push(ae.parse(h))):h.startsWith(u2)?(o.var.push(c),l.push(l2),i.push(h)):(o.number.push(c),l.push(m1),i.push(parseFloat(h))),++c,Ry)).split(Ry);return{values:i,split:p,indexes:o,types:l}}function y1(n){return ps(n).values}function v1(n){const{split:t,types:i}=ps(n),o=t.length;return l=>{let c="";for(let f=0;f<o;f++)if(c+=t[f],l[f]!==void 0){const p=i[f];p===m1?c+=as(l[f]):p===g1?c+=ae.transform(l[f]):c+=l[f]}return c}}const f2=n=>typeof n=="number"?0:ae.test(n)?ae.getAnimatableNone(n):n;function d2(n){const t=y1(n);return v1(n)(t.map(f2))}const Za={test:s2,parse:y1,createTransformer:v1,getAnimatableNone:d2};function dd(n,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?n+(t-n)*6*i:i<1/2?t:i<2/3?n+(t-n)*(2/3-i)*6:n}function h2({hue:n,saturation:t,lightness:i,alpha:o}){n/=360,t/=100,i/=100;let l=0,c=0,f=0;if(!t)l=c=f=i;else{const p=i<.5?i*(1+t):i+t-i*t,h=2*i-p;l=dd(h,p,n+1/3),c=dd(h,p,n),f=dd(h,p,n-1/3)}return{red:Math.round(l*255),green:Math.round(c*255),blue:Math.round(f*255),alpha:o}}function bu(n,t){return i=>i>0?t:n}const zt=(n,t,i)=>n+(t-n)*i,hd=(n,t,i)=>{const o=n*n,l=i*(t*t-o)+o;return l<0?0:Math.sqrt(l)},p2=[Id,wi,wr],m2=n=>p2.find(t=>t.test(n));function Oy(n){const t=m2(n);if(!t)return!1;let i=t.parse(n);return t===wr&&(i=h2(i)),i}const Cy=(n,t)=>{const i=Oy(n),o=Oy(t);if(!i||!o)return bu(n,t);const l={...i};return c=>(l.red=hd(i.red,o.red,c),l.green=hd(i.green,o.green,c),l.blue=hd(i.blue,o.blue,c),l.alpha=zt(i.alpha,o.alpha,c),wi.transform(l))},Bd=new Set(["none","hidden"]);function g2(n,t){return Bd.has(n)?i=>i<=0?n:t:i=>i>=1?t:n}function y2(n,t){return i=>zt(n,t,i)}function Ih(n){return typeof n=="number"?y2:typeof n=="string"?Ph(n)?bu:ae.test(n)?Cy:x2:Array.isArray(n)?b1:typeof n=="object"?ae.test(n)?Cy:v2:bu}function b1(n,t){const i=[...n],o=i.length,l=n.map((c,f)=>Ih(c)(c,t[f]));return c=>{for(let f=0;f<o;f++)i[f]=l[f](c);return i}}function v2(n,t){const i={...n,...t},o={};for(const l in i)n[l]!==void 0&&t[l]!==void 0&&(o[l]=Ih(n[l])(n[l],t[l]));return l=>{for(const c in o)i[c]=o[c](l);return i}}function b2(n,t){const i=[],o={color:0,var:0,number:0};for(let l=0;l<t.values.length;l++){const c=t.types[l],f=n.indexes[c][o[c]],p=n.values[f]??0;i[l]=p,o[c]++}return i}const x2=(n,t)=>{const i=Za.createTransformer(t),o=ps(n),l=ps(t);return o.indexes.var.length===l.indexes.var.length&&o.indexes.color.length===l.indexes.color.length&&o.indexes.number.length>=l.indexes.number.length?Bd.has(n)&&!l.values.length||Bd.has(t)&&!o.values.length?g2(n,t):_s(b1(b2(o,l),l.values),i):bu(n,t)};function x1(n,t,i){return typeof n=="number"&&typeof t=="number"&&typeof i=="number"?zt(n,t,i):Ih(n)(n,t)}const T2=n=>{const t=({timestamp:i})=>n(i);return{start:(i=!0)=>Ut.update(t,i),stop:()=>$a(t),now:()=>ve.isProcessing?ve.timestamp:Ie.now()}},T1=(n,t,i=10)=>{let o="";const l=Math.max(Math.round(t/i),2);for(let c=0;c<l;c++)o+=Math.round(n(c/(l-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},xu=2e4;function Bh(n){let t=0;const i=50;let o=n.next(t);for(;!o.done&&t<xu;)t+=i,o=n.next(t);return t>=xu?1/0:t}function S2(n,t=100,i){const o=i({...n,keyframes:[0,t]}),l=Math.min(Bh(o),xu);return{type:"keyframes",ease:c=>o.next(l*c).value/t,duration:rn(l)}}const w2=5;function S1(n,t,i){const o=Math.max(t-w2,0);return e1(i-n(o),t-o)}const qt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},pd=.001;function E2({duration:n=qt.duration,bounce:t=qt.bounce,velocity:i=qt.velocity,mass:o=qt.mass}){let l,c,f=1-t;f=ra(qt.minDamping,qt.maxDamping,f),n=ra(qt.minDuration,qt.maxDuration,rn(n)),f<1?(l=m=>{const g=m*f,y=g*n,x=g-i,S=zd(m,f),w=Math.exp(-y);return pd-x/S*w},c=m=>{const y=m*f*n,x=y*i+i,S=Math.pow(f,2)*Math.pow(m,2)*n,w=Math.exp(-y),_=zd(Math.pow(m,2),f);return(-l(m)+pd>0?-1:1)*((x-S)*w)/_}):(l=m=>{const g=Math.exp(-m*n),y=(m-i)*n+1;return-pd+g*y},c=m=>{const g=Math.exp(-m*n),y=(i-m)*(n*n);return g*y});const p=5/n,h=A2(l,c,p);if(n=kn(n),isNaN(h))return{stiffness:qt.stiffness,damping:qt.damping,duration:n};{const m=Math.pow(h,2)*o;return{stiffness:m,damping:f*2*Math.sqrt(o*m),duration:n}}}const _2=12;function A2(n,t,i){let o=i;for(let l=1;l<_2;l++)o=o-n(o)/t(o);return o}function zd(n,t){return n*Math.sqrt(1-t*t)}const R2=["duration","bounce"],O2=["stiffness","damping","mass"];function Dy(n,t){return t.some(i=>n[i]!==void 0)}function C2(n){let t={velocity:qt.velocity,stiffness:qt.stiffness,damping:qt.damping,mass:qt.mass,isResolvedFromDuration:!1,...n};if(!Dy(n,O2)&&Dy(n,R2))if(n.visualDuration){const i=n.visualDuration,o=2*Math.PI/(i*1.2),l=o*o,c=2*ra(.05,1,1-(n.bounce||0))*Math.sqrt(l);t={...t,mass:qt.mass,stiffness:l,damping:c}}else{const i=E2(n);t={...t,...i,mass:qt.mass},t.isResolvedFromDuration=!0}return t}function Tu(n=qt.visualDuration,t=qt.bounce){const i=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:t}:n;let{restSpeed:o,restDelta:l}=i;const c=i.keyframes[0],f=i.keyframes[i.keyframes.length-1],p={done:!1,value:c},{stiffness:h,damping:m,mass:g,duration:y,velocity:x,isResolvedFromDuration:S}=C2({...i,velocity:-rn(i.velocity||0)}),w=x||0,_=m/(2*Math.sqrt(h*g)),R=f-c,C=rn(Math.sqrt(h/g)),M=Math.abs(R)<5;o||(o=M?qt.restSpeed.granular:qt.restSpeed.default),l||(l=M?qt.restDelta.granular:qt.restDelta.default);let I;if(_<1){const z=zd(C,_);I=J=>{const $=Math.exp(-_*C*J);return f-$*((w+_*C*R)/z*Math.sin(z*J)+R*Math.cos(z*J))}}else if(_===1)I=z=>f-Math.exp(-C*z)*(R+(w+C*R)*z);else{const z=C*Math.sqrt(_*_-1);I=J=>{const $=Math.exp(-_*C*J),Y=Math.min(z*J,300);return f-$*((w+_*C*R)*Math.sinh(Y)+z*R*Math.cosh(Y))/z}}const K={calculatedDuration:S&&y||null,next:z=>{const J=I(z);if(S)p.done=z>=y;else{let $=z===0?w:0;_<1&&($=z===0?kn(w):S1(I,z,J));const Y=Math.abs($)<=o,Z=Math.abs(f-J)<=l;p.done=Y&&Z}return p.value=p.done?f:J,p},toString:()=>{const z=Math.min(Bh(K),xu),J=T1($=>K.next(z*$).value,z,30);return z+"ms "+J},toTransition:()=>{}};return K}Tu.applyToOptions=n=>{const t=S2(n,100,Tu);return n.ease=t.ease,n.duration=kn(t.duration),n.type="keyframes",n};function Vd({keyframes:n,velocity:t=0,power:i=.8,timeConstant:o=325,bounceDamping:l=10,bounceStiffness:c=500,modifyTarget:f,min:p,max:h,restDelta:m=.5,restSpeed:g}){const y=n[0],x={done:!1,value:y},S=Y=>p!==void 0&&Y<p||h!==void 0&&Y>h,w=Y=>p===void 0?h:h===void 0||Math.abs(p-Y)<Math.abs(h-Y)?p:h;let _=i*t;const R=y+_,C=f===void 0?R:f(R);C!==R&&(_=C-y);const M=Y=>-_*Math.exp(-Y/o),I=Y=>C+M(Y),K=Y=>{const Z=M(Y),bt=I(Y);x.done=Math.abs(Z)<=m,x.value=x.done?C:bt};let z,J;const $=Y=>{S(x.value)&&(z=Y,J=Tu({keyframes:[x.value,w(x.value)],velocity:S1(I,Y,x.value),damping:l,stiffness:c,restDelta:m,restSpeed:g}))};return $(0),{calculatedDuration:null,next:Y=>{let Z=!1;return!J&&z===void 0&&(Z=!0,K(Y),$(Y)),z!==void 0&&Y>=z?J.next(Y-z):(!Z&&K(Y),x)}}}function D2(n,t,i){const o=[],l=i||oa.mix||x1,c=n.length-1;for(let f=0;f<c;f++){let p=l(n[f],n[f+1]);if(t){const h=Array.isArray(t)?t[f]||on:t;p=_s(h,p)}o.push(p)}return o}function k2(n,t,{clamp:i=!0,ease:o,mixer:l}={}){const c=n.length;if(Oh(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const f=n[0]===n[1];n[0]>n[c-1]&&(n=[...n].reverse(),t=[...t].reverse());const p=D2(t,o,l),h=p.length,m=g=>{if(f&&g<n[0])return t[0];let y=0;if(h>1)for(;y<n.length-2&&!(g<n[y+1]);y++);const x=ds(n[y],n[y+1],g);return p[y](x)};return i?g=>m(ra(n[0],n[c-1],g)):m}function M2(n,t){const i=n[n.length-1];for(let o=1;o<=t;o++){const l=ds(0,t,o);n.push(zt(i,1,l))}}function N2(n){const t=[0];return M2(t,n.length-1),t}function P2(n,t){return n.map(i=>i*t)}function L2(n,t){return n.map(()=>t||c1).splice(0,n.length-1)}function is({duration:n=300,keyframes:t,times:i,ease:o="easeInOut"}){const l=Y_(o)?o.map(_y):_y(o),c={done:!1,value:t[0]},f=P2(i&&i.length===t.length?i:N2(t),n),p=k2(f,t,{ease:Array.isArray(l)?l:L2(t,l)});return{calculatedDuration:n,next:h=>(c.value=p(h),c.done=h>=n,c)}}const U2=n=>n!==null;function zh(n,{repeat:t,repeatType:i="loop"},o,l=1){const c=n.filter(U2),p=l<0||t&&i!=="loop"&&t%2===1?0:c.length-1;return!p||o===void 0?c[p]:o}const I2={decay:Vd,inertia:Vd,tween:is,keyframes:is,spring:Tu};function w1(n){typeof n.type=="string"&&(n.type=I2[n.type])}class Vh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,i){return this.finished.then(t,i)}}const B2=n=>n/100;class Hh extends Vh{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:i}=this.options;i&&i.updatedAt!==Ie.now()&&this.tick(Ie.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;w1(t);const{type:i=is,repeat:o=0,repeatDelay:l=0,repeatType:c,velocity:f=0}=t;let{keyframes:p}=t;const h=i||is;h!==is&&typeof p[0]!="number"&&(this.mixKeyframes=_s(B2,x1(p[0],p[1])),p=[0,100]);const m=h({...t,keyframes:p});c==="mirror"&&(this.mirroredGenerator=h({...t,keyframes:[...p].reverse(),velocity:-f})),m.calculatedDuration===null&&(m.calculatedDuration=Bh(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+l,this.totalDuration=this.resolvedDuration*(o+1)-l,this.generator=m}updateTime(t){const i=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(t,i=!1){const{generator:o,totalDuration:l,mixKeyframes:c,mirroredGenerator:f,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return o.next(0);const{delay:m=0,keyframes:g,repeat:y,repeatType:x,repeatDelay:S,type:w,onUpdate:_,finalKeyframe:R}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-l/this.speed,this.startTime)),i?this.currentTime=t:this.updateTime(t);const C=this.currentTime-m*(this.playbackSpeed>=0?1:-1),M=this.playbackSpeed>=0?C<0:C>l;this.currentTime=Math.max(C,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let I=this.currentTime,K=o;if(y){const Y=Math.min(this.currentTime,l)/p;let Z=Math.floor(Y),bt=Y%1;!bt&&Y>=1&&(bt=1),bt===1&&Z--,Z=Math.min(Z,y+1),!!(Z%2)&&(x==="reverse"?(bt=1-bt,S&&(bt-=S/p)):x==="mirror"&&(K=f)),I=ra(0,1,bt)*p}const z=M?{done:!1,value:g[0]}:K.next(I);c&&(z.value=c(z.value));let{done:J}=z;!M&&h!==null&&(J=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const $=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&J);return $&&w!==Vd&&(z.value=zh(g,this.options,R,this.speed)),_&&_(z.value),$&&this.finish(),z}then(t,i){return this.finished.then(t,i)}get duration(){return rn(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+rn(t)}get time(){return rn(this.currentTime)}set time(t){t=kn(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Ie.now());const i=this.playbackSpeed!==t;this.playbackSpeed=t,i&&(this.time=rn(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=T2,startTime:i}=this.options;this.driver||(this.driver=t(l=>this.tick(l))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=i??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ie.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function z2(n){for(let t=1;t<n.length;t++)n[t]??(n[t]=n[t-1])}const Ei=n=>n*180/Math.PI,Hd=n=>{const t=Ei(Math.atan2(n[1],n[0]));return jd(t)},V2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Hd,rotateZ:Hd,skewX:n=>Ei(Math.atan(n[1])),skewY:n=>Ei(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},jd=n=>(n=n%360,n<0&&(n+=360),n),ky=Hd,My=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Ny=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),H2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:My,scaleY:Ny,scale:n=>(My(n)+Ny(n))/2,rotateX:n=>jd(Ei(Math.atan2(n[6],n[5]))),rotateY:n=>jd(Ei(Math.atan2(-n[2],n[0]))),rotateZ:ky,rotate:ky,skewX:n=>Ei(Math.atan(n[4])),skewY:n=>Ei(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function qd(n){return n.includes("scale")?1:0}function Fd(n,t){if(!n||n==="none")return qd(t);const i=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,l;if(i)o=H2,l=i;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=V2,l=p}if(!l)return qd(t);const c=o[t],f=l[1].split(",").map(q2);return typeof c=="function"?c(f):f[c]}const j2=(n,t)=>{const{transform:i="none"}=getComputedStyle(n);return Fd(i,t)};function q2(n){return parseFloat(n.trim())}const Hr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],jr=new Set(Hr),Py=n=>n===Vr||n===ft,F2=new Set(["x","y","z"]),G2=Hr.filter(n=>!F2.has(n));function Y2(n){const t=[];return G2.forEach(i=>{const o=n.getValue(i);o!==void 0&&(t.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),t}const _i={width:({x:n},{paddingLeft:t="0",paddingRight:i="0"})=>n.max-n.min-parseFloat(t)-parseFloat(i),height:({y:n},{paddingTop:t="0",paddingBottom:i="0"})=>n.max-n.min-parseFloat(t)-parseFloat(i),top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:(n,{transform:t})=>Fd(t,"x"),y:(n,{transform:t})=>Fd(t,"y")};_i.translateX=_i.x;_i.translateY=_i.y;const Ai=new Set;let Gd=!1,Yd=!1,Xd=!1;function E1(){if(Yd){const n=Array.from(Ai).filter(o=>o.needsMeasurement),t=new Set(n.map(o=>o.element)),i=new Map;t.forEach(o=>{const l=Y2(o);l.length&&(i.set(o,l),o.render())}),n.forEach(o=>o.measureInitialState()),t.forEach(o=>{o.render();const l=i.get(o);l&&l.forEach(([c,f])=>{o.getValue(c)?.set(f)})}),n.forEach(o=>o.measureEndState()),n.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Yd=!1,Gd=!1,Ai.forEach(n=>n.complete(Xd)),Ai.clear()}function _1(){Ai.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Yd=!0)})}function X2(){Xd=!0,_1(),E1(),Xd=!1}class jh{constructor(t,i,o,l,c,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=i,this.name=o,this.motionValue=l,this.element=c,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Ai.add(this),Gd||(Gd=!0,Ut.read(_1),Ut.resolveKeyframes(E1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:i,element:o,motionValue:l}=this;if(t[0]===null){const c=l?.get(),f=t[t.length-1];if(c!==void 0)t[0]=c;else if(o&&i){const p=o.readValue(i,f);p!=null&&(t[0]=p)}t[0]===void 0&&(t[0]=f),l&&c===void 0&&l.set(t[0])}z2(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Ai.delete(this)}cancel(){this.state==="scheduled"&&(Ai.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const K2=n=>n.startsWith("--");function $2(n,t,i){K2(t)?n.style.setProperty(t,i):n.style[t]=i}const Z2=Ch(()=>window.ScrollTimeline!==void 0),Q2={};function W2(n,t){const i=Ch(n);return()=>Q2[t]??i()}const A1=W2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Jo=([n,t,i,o])=>`cubic-bezier(${n}, ${t}, ${i}, ${o})`,Ly={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Jo([0,.65,.55,1]),circOut:Jo([.55,0,1,.45]),backIn:Jo([.31,.01,.66,-.59]),backOut:Jo([.33,1.53,.69,.99])};function R1(n,t){if(n)return typeof n=="function"?A1()?T1(n,t):"ease-out":f1(n)?Jo(n):Array.isArray(n)?n.map(i=>R1(i,t)||Ly.easeOut):Ly[n]}function J2(n,t,i,{delay:o=0,duration:l=300,repeat:c=0,repeatType:f="loop",ease:p="easeOut",times:h}={},m=void 0){const g={[t]:i};h&&(g.offset=h);const y=R1(p,l);Array.isArray(y)&&(g.easing=y);const x={delay:o,duration:l,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:c+1,direction:f==="reverse"?"alternate":"normal"};return m&&(x.pseudoElement=m),n.animate(g,x)}function O1(n){return typeof n=="function"&&"applyToOptions"in n}function t5({type:n,...t}){return O1(n)&&A1()?n.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class e5 extends Vh{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:i,name:o,keyframes:l,pseudoElement:c,allowFlatten:f=!1,finalKeyframe:p,onComplete:h}=t;this.isPseudoElement=!!c,this.allowFlatten=f,this.options=t,Oh(typeof t.type!="string");const m=t5(t);this.animation=J2(i,o,l,m,c),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const g=zh(l,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(g):$2(i,o,g),this.animation.cancel()}h?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return rn(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+rn(t)}get time(){return rn(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=kn(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:i}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&Z2()?(this.animation.timeline=t,on):i(this)}}const C1={anticipate:s1,backInOut:o1,circInOut:u1};function n5(n){return n in C1}function a5(n){typeof n.ease=="string"&&n5(n.ease)&&(n.ease=C1[n.ease])}const Uy=10;class i5 extends e5{constructor(t){a5(t),w1(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:i,onUpdate:o,onComplete:l,element:c,...f}=this.options;if(!i)return;if(t!==void 0){i.set(t);return}const p=new Hh({...f,autoplay:!1}),h=kn(this.finishedTime??this.time);i.setWithVelocity(p.sample(h-Uy).value,p.sample(h).value,Uy),p.stop()}}const Iy=(n,t)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Za.test(n)||n==="0")&&!n.startsWith("url("));function r5(n){const t=n[0];if(n.length===1)return!0;for(let i=0;i<n.length;i++)if(n[i]!==t)return!0}function o5(n,t,i,o){const l=n[0];if(l===null)return!1;if(t==="display"||t==="visibility")return!0;const c=n[n.length-1],f=Iy(l,t),p=Iy(c,t);return!f||!p?!1:r5(n)||(i==="spring"||O1(i))&&o}function Kd(n){n.duration=0,n.type="keyframes"}const s5=new Set(["opacity","clipPath","filter","transform"]),l5=Ch(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function u5(n){const{motionValue:t,name:i,repeatDelay:o,repeatType:l,damping:c,type:f}=n;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:m}=t.owner.getProps();return l5()&&i&&s5.has(i)&&(i!=="transform"||!m)&&!h&&!o&&l!=="mirror"&&c!==0&&f!=="inertia"}const c5=40;class f5 extends Vh{constructor({autoplay:t=!0,delay:i=0,type:o="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:f="loop",keyframes:p,name:h,motionValue:m,element:g,...y}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ie.now();const x={autoplay:t,delay:i,type:o,repeat:l,repeatDelay:c,repeatType:f,name:h,motionValue:m,element:g,...y},S=g?.KeyframeResolver||jh;this.keyframeResolver=new S(p,(w,_,R)=>this.onKeyframesResolved(w,_,x,!R),h,m,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,i,o,l){this.keyframeResolver=void 0;const{name:c,type:f,velocity:p,delay:h,isHandoff:m,onUpdate:g}=o;this.resolvedAt=Ie.now(),o5(t,c,f,p)||((oa.instantAnimations||!h)&&g?.(zh(t,o,i)),t[0]=t[t.length-1],Kd(o),o.repeat=0);const x={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>c5?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...o,keyframes:t},S=!m&&u5(x)?new i5({...x,element:x.motionValue.owner.current}):new Hh(x);S.finished.then(()=>this.notifyFinished()).catch(on),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(t,i){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),X2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const d5=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function h5(n){const t=d5.exec(n);if(!t)return[,];const[,i,o,l]=t;return[`--${i??o}`,l]}function D1(n,t,i=1){const[o,l]=h5(n);if(!o)return;const c=window.getComputedStyle(t).getPropertyValue(o);if(c){const f=c.trim();return Wb(f)?parseFloat(f):f}return Ph(l)?D1(l,t,i+1):l}function qh(n,t){return n?.[t]??n?.default??n}const k1=new Set(["width","height","top","left","right","bottom",...Hr]),p5={test:n=>n==="auto",parse:n=>n},M1=n=>t=>t.test(n),N1=[Vr,ft,Mn,za,r2,i2,p5],By=n=>N1.find(M1(n));function m5(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||t1(n):!0}const g5=new Set(["brightness","contrast","saturate","opacity"]);function y5(n){const[t,i]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[o]=i.match(Lh)||[];if(!o)return n;const l=i.replace(o,"");let c=g5.has(t)?1:0;return o!==i&&(c*=100),t+"("+c+l+")"}const v5=/\b([a-z-]*)\(.*?\)/gu,$d={...Za,getAnimatableNone:n=>{const t=n.match(v5);return t?t.map(y5).join(" "):n}},zy={...Vr,transform:Math.round},b5={rotate:za,rotateX:za,rotateY:za,rotateZ:za,scale:Wl,scaleX:Wl,scaleY:Wl,scaleZ:Wl,skew:za,skewX:za,skewY:za,distance:ft,translateX:ft,translateY:ft,translateZ:ft,x:ft,y:ft,z:ft,perspective:ft,transformPerspective:ft,opacity:hs,originX:Ay,originY:Ay,originZ:ft},Fh={borderWidth:ft,borderTopWidth:ft,borderRightWidth:ft,borderBottomWidth:ft,borderLeftWidth:ft,borderRadius:ft,radius:ft,borderTopLeftRadius:ft,borderTopRightRadius:ft,borderBottomRightRadius:ft,borderBottomLeftRadius:ft,width:ft,maxWidth:ft,height:ft,maxHeight:ft,top:ft,right:ft,bottom:ft,left:ft,padding:ft,paddingTop:ft,paddingRight:ft,paddingBottom:ft,paddingLeft:ft,margin:ft,marginTop:ft,marginRight:ft,marginBottom:ft,marginLeft:ft,backgroundPositionX:ft,backgroundPositionY:ft,...b5,zIndex:zy,fillOpacity:hs,strokeOpacity:hs,numOctaves:zy},x5={...Fh,color:ae,backgroundColor:ae,outlineColor:ae,fill:ae,stroke:ae,borderColor:ae,borderTopColor:ae,borderRightColor:ae,borderBottomColor:ae,borderLeftColor:ae,filter:$d,WebkitFilter:$d},P1=n=>x5[n];function L1(n,t){let i=P1(n);return i!==$d&&(i=Za),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const T5=new Set(["auto","none","0"]);function S5(n,t,i){let o=0,l;for(;o<n.length&&!l;){const c=n[o];typeof c=="string"&&!T5.has(c)&&ps(c).values.length&&(l=n[o]),o++}if(l&&i)for(const c of t)n[c]=L1(i,l)}class w5 extends jh{constructor(t,i,o,l,c){super(t,i,o,l,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let h=0;h<t.length;h++){let m=t[h];if(typeof m=="string"&&(m=m.trim(),Ph(m))){const g=D1(m,i.current);g!==void 0&&(t[h]=g),h===t.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!k1.has(o)||t.length!==2)return;const[l,c]=t,f=By(l),p=By(c);if(f!==p)if(Py(f)&&Py(p))for(let h=0;h<t.length;h++){const m=t[h];typeof m=="string"&&(t[h]=parseFloat(m))}else _i[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:i}=this,o=[];for(let l=0;l<t.length;l++)(t[l]===null||m5(t[l]))&&o.push(l);o.length&&S5(t,o,i)}measureInitialState(){const{element:t,unresolvedKeyframes:i,name:o}=this;if(!t||!t.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=_i[o](t.measureViewportBox(),window.getComputedStyle(t.current)),i[0]=this.measuredOrigin;const l=i[i.length-1];l!==void 0&&t.getValue(o,l).jump(l,!1)}measureEndState(){const{element:t,name:i,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(i);l&&l.jump(this.measuredOrigin,!1);const c=o.length-1,f=o[c];o[c]=_i[i](t.measureViewportBox(),window.getComputedStyle(t.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,h])=>{t.getValue(p).set(h)}),this.resolveNoneKeyframes()}}function E5(n,t,i){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let o=document;const l=i?.[n]??o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}const U1=(n,t)=>t&&typeof n=="number"?t.transform(n):n;function _5(n){return Jb(n)&&"offsetHeight"in n}const Vy=30,A5=n=>!isNaN(parseFloat(n));class R5{constructor(t,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const l=Ie.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=i.owner}setCurrent(t){this.current=t,this.updatedAt=Ie.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=A5(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new Dh);const o=this.events[t].add(i);return t==="change"?()=>{o(),Ut.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-o}jump(t,i=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Ie.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Vy)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Vy);return e1(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Nr(n,t){return new R5(n,t)}const{schedule:Gh}=d1(queueMicrotask,!1),pn={x:!1,y:!1};function I1(){return pn.x||pn.y}function O5(n){return n==="x"||n==="y"?pn[n]?null:(pn[n]=!0,()=>{pn[n]=!1}):pn.x||pn.y?null:(pn.x=pn.y=!0,()=>{pn.x=pn.y=!1})}function B1(n,t){const i=E5(n),o=new AbortController,l={passive:!0,...t,signal:o.signal};return[i,l,()=>o.abort()]}function Hy(n){return!(n.pointerType==="touch"||I1())}function C5(n,t,i={}){const[o,l,c]=B1(n,i),f=p=>{if(!Hy(p))return;const{target:h}=p,m=t(h,p);if(typeof m!="function"||!h)return;const g=y=>{Hy(y)&&(m(y),h.removeEventListener("pointerleave",g))};h.addEventListener("pointerleave",g,l)};return o.forEach(p=>{p.addEventListener("pointerenter",f,l)}),c}const z1=(n,t)=>t?n===t?!0:z1(n,t.parentElement):!1,Yh=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,D5=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function k5(n){return D5.has(n.tagName)||n.tabIndex!==-1}const uu=new WeakSet;function jy(n){return t=>{t.key==="Enter"&&n(t)}}function md(n,t){n.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const M5=(n,t)=>{const i=n.currentTarget;if(!i)return;const o=jy(()=>{if(uu.has(i))return;md(i,"down");const l=jy(()=>{md(i,"up")}),c=()=>md(i,"cancel");i.addEventListener("keyup",l,t),i.addEventListener("blur",c,t)});i.addEventListener("keydown",o,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",o),t)};function qy(n){return Yh(n)&&!I1()}function N5(n,t,i={}){const[o,l,c]=B1(n,i),f=p=>{const h=p.currentTarget;if(!qy(p))return;uu.add(h);const m=t(h,p),g=(S,w)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",x),uu.has(h)&&uu.delete(h),qy(S)&&typeof m=="function"&&m(S,{success:w})},y=S=>{g(S,h===window||h===document||i.useGlobalTarget||z1(h,S.target))},x=S=>{g(S,!1)};window.addEventListener("pointerup",y,l),window.addEventListener("pointercancel",x,l)};return o.forEach(p=>{(i.useGlobalTarget?window:p).addEventListener("pointerdown",f,l),_5(p)&&(p.addEventListener("focus",m=>M5(m,l)),!k5(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),c}function V1(n){return Jb(n)&&"ownerSVGElement"in n}function P5(n){return V1(n)&&n.tagName==="svg"}const Se=n=>!!(n&&n.getVelocity),L5=[...N1,ae,Za],U5=n=>L5.find(M1(n)),H1=O.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function I5(n=!0){const t=O.useContext(_h);if(t===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:l}=t,c=O.useId();O.useEffect(()=>{if(n)return l(c)},[n]);const f=O.useCallback(()=>n&&o&&o(c),[c,o,n]);return!i&&o?[!1,f]:[!0]}const j1=O.createContext({strict:!1}),Fy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Pr={};for(const n in Fy)Pr[n]={isEnabled:t=>Fy[n].some(i=>!!t[i])};function B5(n){for(const t in n)Pr[t]={...Pr[t],...n[t]}}const z5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Su(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||z5.has(n)}let q1=n=>!Su(n);function V5(n){typeof n=="function"&&(q1=t=>t.startsWith("on")?!Su(t):n(t))}try{V5(require("@emotion/is-prop-valid").default)}catch{}function H5(n,t,i){const o={};for(const l in n)l==="values"&&typeof n.values=="object"||(q1(l)||i===!0&&Su(l)||!t&&!Su(l)||n.draggable&&l.startsWith("onDrag"))&&(o[l]=n[l]);return o}const Lu=O.createContext({});function Uu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ms(n){return typeof n=="string"||Array.isArray(n)}const Xh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Kh=["initial",...Xh];function Iu(n){return Uu(n.animate)||Kh.some(t=>ms(n[t]))}function F1(n){return!!(Iu(n)||n.variants)}function j5(n,t){if(Iu(n)){const{initial:i,animate:o}=n;return{initial:i===!1||ms(i)?i:void 0,animate:ms(o)?o:void 0}}return n.inherit!==!1?t:{}}function q5(n){const{initial:t,animate:i}=j5(n,O.useContext(Lu));return O.useMemo(()=>({initial:t,animate:i}),[Gy(t),Gy(i)])}function Gy(n){return Array.isArray(n)?n.join(" "):n}const gs={};function F5(n){for(const t in n)gs[t]=n[t],Nh(t)&&(gs[t].isCSSVariable=!0)}function G1(n,{layout:t,layoutId:i}){return jr.has(n)||n.startsWith("origin")||(t||i!==void 0)&&(!!gs[n]||n==="opacity")}const G5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Y5=Hr.length;function X5(n,t,i){let o="",l=!0;for(let c=0;c<Y5;c++){const f=Hr[c],p=n[f];if(p===void 0)continue;let h=!0;if(typeof p=="number"?h=p===(f.startsWith("scale")?1:0):h=parseFloat(p)===0,!h||i){const m=U1(p,Fh[f]);if(!h){l=!1;const g=G5[f]||f;o+=`${g}(${m}) `}i&&(t[f]=m)}}return o=o.trim(),i?o=i(t,l?"":o):l&&(o="none"),o}function $h(n,t,i){const{style:o,vars:l,transformOrigin:c}=n;let f=!1,p=!1;for(const h in t){const m=t[h];if(jr.has(h)){f=!0;continue}else if(Nh(h)){l[h]=m;continue}else{const g=U1(m,Fh[h]);h.startsWith("origin")?(p=!0,c[h]=g):o[h]=g}}if(t.transform||(f||i?o.transform=X5(t,n.transform,i):o.transform&&(o.transform="none")),p){const{originX:h="50%",originY:m="50%",originZ:g=0}=c;o.transformOrigin=`${h} ${m} ${g}`}}const Zh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Y1(n,t,i){for(const o in t)!Se(t[o])&&!G1(o,i)&&(n[o]=t[o])}function K5({transformTemplate:n},t){return O.useMemo(()=>{const i=Zh();return $h(i,t,n),Object.assign({},i.vars,i.style)},[t])}function $5(n,t){const i=n.style||{},o={};return Y1(o,i,n),Object.assign(o,K5(n,t)),o}function Z5(n,t){const i={},o=$5(n,t);return n.drag&&n.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(i.tabIndex=0),i.style=o,i}const Q5={offset:"stroke-dashoffset",array:"stroke-dasharray"},W5={offset:"strokeDashoffset",array:"strokeDasharray"};function J5(n,t,i=1,o=0,l=!0){n.pathLength=1;const c=l?Q5:W5;n[c.offset]=ft.transform(-o);const f=ft.transform(t),p=ft.transform(i);n[c.array]=`${f} ${p}`}function X1(n,{attrX:t,attrY:i,attrScale:o,pathLength:l,pathSpacing:c=1,pathOffset:f=0,...p},h,m,g){if($h(n,p,m),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:y,style:x}=n;y.transform&&(x.transform=y.transform,delete y.transform),(x.transform||y.transformOrigin)&&(x.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),x.transform&&(x.transformBox=g?.transformBox??"fill-box",delete y.transformBox),t!==void 0&&(y.x=t),i!==void 0&&(y.y=i),o!==void 0&&(y.scale=o),l!==void 0&&J5(y,l,c,f,!1)}const K1=()=>({...Zh(),attrs:{}}),$1=n=>typeof n=="string"&&n.toLowerCase()==="svg";function tA(n,t,i,o){const l=O.useMemo(()=>{const c=K1();return X1(c,t,$1(o),n.transformTemplate,n.style),{...c.attrs,style:{...c.style}}},[t]);if(n.style){const c={};Y1(c,n.style,n),l.style={...c,...l.style}}return l}const eA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qh(n){return typeof n!="string"||n.includes("-")?!1:!!(eA.indexOf(n)>-1||/[A-Z]/u.test(n))}function nA(n,t,i,{latestValues:o},l,c=!1){const p=(Qh(n)?tA:Z5)(t,o,l,n),h=H5(t,typeof n=="string",c),m=n!==O.Fragment?{...h,...p,ref:i}:{},{children:g}=t,y=O.useMemo(()=>Se(g)?g.get():g,[g]);return O.createElement(n,{...m,children:y})}function Yy(n){const t=[{},{}];return n?.values.forEach((i,o)=>{t[0][o]=i.get(),t[1][o]=i.getVelocity()}),t}function Wh(n,t,i,o){if(typeof t=="function"){const[l,c]=Yy(o);t=t(i!==void 0?i:n.custom,l,c)}if(typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"){const[l,c]=Yy(o);t=t(i!==void 0?i:n.custom,l,c)}return t}function cu(n){return Se(n)?n.get():n}function aA({scrapeMotionValuesFromProps:n,createRenderState:t},i,o,l){return{latestValues:iA(i,o,l,n),renderState:t()}}function iA(n,t,i,o){const l={},c=o(n,{});for(const x in c)l[x]=cu(c[x]);let{initial:f,animate:p}=n;const h=Iu(n),m=F1(n);t&&m&&!h&&n.inherit!==!1&&(f===void 0&&(f=t.initial),p===void 0&&(p=t.animate));let g=i?i.initial===!1:!1;g=g||f===!1;const y=g?p:f;if(y&&typeof y!="boolean"&&!Uu(y)){const x=Array.isArray(y)?y:[y];for(let S=0;S<x.length;S++){const w=Wh(n,x[S]);if(w){const{transitionEnd:_,transition:R,...C}=w;for(const M in C){let I=C[M];if(Array.isArray(I)){const K=g?I.length-1:0;I=I[K]}I!==null&&(l[M]=I)}for(const M in _)l[M]=_[M]}}}return l}const Z1=n=>(t,i)=>{const o=O.useContext(Lu),l=O.useContext(_h),c=()=>aA(n,t,o,l);return i?c():B_(c)};function Jh(n,t,i){const{style:o}=n,l={};for(const c in o)(Se(o[c])||t.style&&Se(t.style[c])||G1(c,n)||i?.getValue(c)?.liveStyle!==void 0)&&(l[c]=o[c]);return l}const rA=Z1({scrapeMotionValuesFromProps:Jh,createRenderState:Zh});function Q1(n,t,i){const o=Jh(n,t,i);for(const l in n)if(Se(n[l])||Se(t[l])){const c=Hr.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;o[c]=n[l]}return o}const oA=Z1({scrapeMotionValuesFromProps:Q1,createRenderState:K1}),sA=Symbol.for("motionComponentSymbol");function Er(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function lA(n,t,i){return O.useCallback(o=>{o&&n.onMount&&n.onMount(o),t&&(o?t.mount(o):t.unmount()),i&&(typeof i=="function"?i(o):Er(i)&&(i.current=o))},[t])}const tp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),uA="framerAppearId",W1="data-"+tp(uA),J1=O.createContext({});function cA(n,t,i,o,l){const{visualElement:c}=O.useContext(Lu),f=O.useContext(j1),p=O.useContext(_h),h=O.useContext(H1).reducedMotion,m=O.useRef(null);o=o||f.renderer,!m.current&&o&&(m.current=o(n,{visualState:t,parent:c,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:h}));const g=m.current,y=O.useContext(J1);g&&!g.projection&&l&&(g.type==="html"||g.type==="svg")&&fA(m.current,i,l,y);const x=O.useRef(!1);O.useInsertionEffect(()=>{g&&x.current&&g.update(i,p)});const S=i[W1],w=O.useRef(!!S&&!window.MotionHandoffIsComplete?.(S)&&window.MotionHasOptimisedAnimation?.(S));return z_(()=>{g&&(x.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),w.current&&g.animationState&&g.animationState.animateChanges())}),O.useEffect(()=>{g&&(!w.current&&g.animationState&&g.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(S)}),w.current=!1),g.enteringChildren=void 0)}),g}function fA(n,t,i,o){const{layoutId:l,layout:c,drag:f,dragConstraints:p,layoutScroll:h,layoutRoot:m,layoutCrossfade:g}=t;n.projection=new i(n.latestValues,t["data-framer-portal-id"]?void 0:tx(n.parent)),n.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!f||p&&Er(p),visualElement:n,animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,crossfade:g,layoutScroll:h,layoutRoot:m})}function tx(n){if(n)return n.options.allowProjection!==!1?n.projection:tx(n.parent)}function gd(n,{forwardMotionProps:t=!1}={},i,o){i&&B5(i);const l=Qh(n)?oA:rA;function c(p,h){let m;const g={...O.useContext(H1),...p,layoutId:dA(p)},{isStatic:y}=g,x=q5(p),S=l(p,y);if(!y&&Eh){hA();const w=pA(g);m=w.MeasureLayout,x.visualElement=cA(n,S,g,o,w.ProjectionNode)}return G.jsxs(Lu.Provider,{value:x,children:[m&&x.visualElement?G.jsx(m,{visualElement:x.visualElement,...g}):null,nA(n,p,lA(S,x.visualElement,h),S,y,t)]})}c.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const f=O.forwardRef(c);return f[sA]=n,f}function dA({layoutId:n}){const t=O.useContext(Qb).id;return t&&n!==void 0?t+"-"+n:n}function hA(n,t){O.useContext(j1).strict}function pA(n){const{drag:t,layout:i}=Pr;if(!t&&!i)return{};const o={...t,...i};return{MeasureLayout:t?.isEnabled(n)||i?.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function mA(n,t){if(typeof Proxy>"u")return gd;const i=new Map,o=(c,f)=>gd(c,f,n,t),l=(c,f)=>o(c,f);return new Proxy(l,{get:(c,f)=>f==="create"?o:(i.has(f)||i.set(f,gd(f,void 0,n,t)),i.get(f))})}function ex({top:n,left:t,right:i,bottom:o}){return{x:{min:t,max:i},y:{min:n,max:o}}}function gA({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function yA(n,t){if(!t)return n;const i=t({x:n.left,y:n.top}),o=t({x:n.right,y:n.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function yd(n){return n===void 0||n===1}function Zd({scale:n,scaleX:t,scaleY:i}){return!yd(n)||!yd(t)||!yd(i)}function Ti(n){return Zd(n)||nx(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function nx(n){return Xy(n.x)||Xy(n.y)}function Xy(n){return n&&n!=="0%"}function wu(n,t,i){const o=n-i,l=t*o;return i+l}function Ky(n,t,i,o,l){return l!==void 0&&(n=wu(n,l,o)),wu(n,i,o)+t}function Qd(n,t=0,i=1,o,l){n.min=Ky(n.min,t,i,o,l),n.max=Ky(n.max,t,i,o,l)}function ax(n,{x:t,y:i}){Qd(n.x,t.translate,t.scale,t.originPoint),Qd(n.y,i.translate,i.scale,i.originPoint)}const $y=.999999999999,Zy=1.0000000000001;function vA(n,t,i,o=!1){const l=i.length;if(!l)return;t.x=t.y=1;let c,f;for(let p=0;p<l;p++){c=i[p],f=c.projectionDelta;const{visualElement:h}=c.options;h&&h.props.style&&h.props.style.display==="contents"||(o&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Ar(n,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),f&&(t.x*=f.x.scale,t.y*=f.y.scale,ax(n,f)),o&&Ti(c.latestValues)&&Ar(n,c.latestValues))}t.x<Zy&&t.x>$y&&(t.x=1),t.y<Zy&&t.y>$y&&(t.y=1)}function _r(n,t){n.min=n.min+t,n.max=n.max+t}function Qy(n,t,i,o,l=.5){const c=zt(n.min,n.max,l);Qd(n,t,i,c,o)}function Ar(n,t){Qy(n.x,t.x,t.scaleX,t.scale,t.originX),Qy(n.y,t.y,t.scaleY,t.scale,t.originY)}function ix(n,t){return ex(yA(n.getBoundingClientRect(),t))}function bA(n,t,i){const o=ix(n,i),{scroll:l}=t;return l&&(_r(o.x,l.offset.x),_r(o.y,l.offset.y)),o}const Wy=()=>({translate:0,scale:1,origin:0,originPoint:0}),Rr=()=>({x:Wy(),y:Wy()}),Jy=()=>({min:0,max:0}),Qt=()=>({x:Jy(),y:Jy()}),Wd={current:null},rx={current:!1};function xA(){if(rx.current=!0,!!Eh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>Wd.current=n.matches;n.addEventListener("change",t),t()}else Wd.current=!1}const TA=new WeakMap;function SA(n,t,i){for(const o in t){const l=t[o],c=i[o];if(Se(l))n.addValue(o,l);else if(Se(c))n.addValue(o,Nr(l,{owner:n}));else if(c!==l)if(n.hasValue(o)){const f=n.getValue(o);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=n.getStaticValue(o);n.addValue(o,Nr(f!==void 0?f:l,{owner:n}))}}for(const o in i)t[o]===void 0&&n.removeValue(o);return t}const tv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class wA{scrapeMotionValuesFromProps(t,i,o){return{}}constructor({parent:t,props:i,presenceContext:o,reducedMotionConfig:l,blockInitialAnimation:c,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=jh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=Ie.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Ut.render(this.render,!1,!0))};const{latestValues:h,renderState:m}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=i.initial?{...h}:{},this.renderState=m,this.parent=t,this.props=i,this.presenceContext=o,this.depth=t?t.depth+1:0,this.reducedMotionConfig=l,this.options=p,this.blockInitialAnimation=!!c,this.isControllingVariants=Iu(i),this.isVariantNode=F1(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...y}=this.scrapeMotionValuesFromProps(i,{},this);for(const x in y){const S=y[x];h[x]!==void 0&&Se(S)&&S.set(h[x])}}mount(t){this.current=t,TA.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),rx.current||xA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Wd.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),$a(this.notifyUpdate),$a(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,i){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const o=jr.has(t);o&&this.onBindTransform&&this.onBindTransform();const l=i.on("change",f=>{this.latestValues[t]=f,this.props.onUpdate&&Ut.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,i)),this.valueSubscriptions.set(t,()=>{l(),c&&c(),i.owner&&i.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Pr){const i=Pr[t];if(!i)continue;const{isEnabled:o,Feature:l}=i;if(!this.features[t]&&l&&o(this.props)&&(this.features[t]=new l(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<tv.length;o++){const l=tv[o];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const c="on"+l,f=t[c];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=SA(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){const o=this.values.get(t);i!==o&&(o&&this.removeValue(t),this.bindToMotionValue(t,i),this.values.set(t,i),this.latestValues[t]=i.get())}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let o=this.values.get(t);return o===void 0&&i!==void 0&&(o=Nr(i===null?void 0:i,{owner:this}),this.addValue(t,o)),o}readValue(t,i){let o=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return o!=null&&(typeof o=="string"&&(Wb(o)||t1(o))?o=parseFloat(o):!U5(o)&&Za.test(i)&&(o=L1(t,i)),this.setBaseTarget(t,Se(o)?o.get():o)),Se(o)?o.get():o}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const c=Wh(this.props,i,this.presenceContext?.custom);c&&(o=c[t])}if(i&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,t);return l!==void 0&&!Se(l)?l:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new Dh),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}scheduleRenderMicrotask(){Gh.render(this.render)}}class ox extends wA{constructor(){super(...arguments),this.KeyframeResolver=w5}sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){return t.style?t.style[i]:void 0}removeValueFromRenderState(t,{vars:i,style:o}){delete i[t],delete o[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Se(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function sx(n,{style:t,vars:i},o,l){const c=n.style;let f;for(f in t)c[f]=t[f];l?.applyProjectionStyles(c,o);for(f in i)c.setProperty(f,i[f])}function EA(n){return window.getComputedStyle(n)}class _A extends ox{constructor(){super(...arguments),this.type="html",this.renderInstance=sx}readValueFromInstance(t,i){if(jr.has(i))return this.projection?.isProjecting?qd(i):j2(t,i);{const o=EA(t),l=(Nh(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:i}){return ix(t,i)}build(t,i,o){$h(t,i,o.transformTemplate)}scrapeMotionValuesFromProps(t,i,o){return Jh(t,i,o)}}const lx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function AA(n,t,i,o){sx(n,t,void 0,o);for(const l in t.attrs)n.setAttribute(lx.has(l)?l:tp(l),t.attrs[l])}class RA extends ox{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qt}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(jr.has(i)){const o=P1(i);return o&&o.default||0}return i=lx.has(i)?i:tp(i),t.getAttribute(i)}scrapeMotionValuesFromProps(t,i,o){return Q1(t,i,o)}build(t,i,o){X1(t,i,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(t,i,o,l){AA(t,i,o,l)}mount(t){this.isSVGTag=$1(t.tagName),super.mount(t)}}const OA=(n,t)=>Qh(n)?new RA(t):new _A(t,{allowProjection:n!==O.Fragment});function Cr(n,t,i){const o=n.getProps();return Wh(o,t,i!==void 0?i:o.custom,n)}const Jd=n=>Array.isArray(n);function CA(n,t,i){n.hasValue(t)?n.getValue(t).set(i):n.addValue(t,Nr(i))}function DA(n){return Jd(n)?n[n.length-1]||0:n}function kA(n,t){const i=Cr(n,t);let{transitionEnd:o={},transition:l={},...c}=i||{};c={...c,...o};for(const f in c){const p=DA(c[f]);CA(n,f,p)}}function MA(n){return!!(Se(n)&&n.add)}function th(n,t){const i=n.getValue("willChange");if(MA(i))return i.add(t);if(!i&&oa.WillChange){const o=new oa.WillChange("auto");n.addValue("willChange",o),o.add(t)}}function ux(n){return n.props[W1]}const NA=n=>n!==null;function PA(n,{repeat:t,repeatType:i="loop"},o){const l=n.filter(NA),c=t&&i!=="loop"&&t%2===1?0:l.length-1;return l[c]}const LA={type:"spring",stiffness:500,damping:25,restSpeed:10},UA=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),IA={type:"keyframes",duration:.8},BA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},zA=(n,{keyframes:t})=>t.length>2?IA:jr.has(n)?n.startsWith("scale")?UA(t[1]):LA:BA;function VA({when:n,delay:t,delayChildren:i,staggerChildren:o,staggerDirection:l,repeat:c,repeatType:f,repeatDelay:p,from:h,elapsed:m,...g}){return!!Object.keys(g).length}const ep=(n,t,i,o={},l,c)=>f=>{const p=qh(o,n)||{},h=p.delay||o.delay||0;let{elapsed:m=0}=o;m=m-kn(h);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...p,delay:-m,onUpdate:x=>{t.set(x),p.onUpdate&&p.onUpdate(x)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:n,motionValue:t,element:c?void 0:l};VA(p)||Object.assign(g,zA(n,g)),g.duration&&(g.duration=kn(g.duration)),g.repeatDelay&&(g.repeatDelay=kn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Kd(g),g.delay===0&&(y=!0)),(oa.instantAnimations||oa.skipAnimations)&&(y=!0,Kd(g),g.delay=0),g.allowFlatten=!p.type&&!p.ease,y&&!c&&t.get()!==void 0){const x=PA(g.keyframes,p);if(x!==void 0){Ut.update(()=>{g.onUpdate(x),g.onComplete()});return}}return p.isSync?new Hh(g):new f5(g)};function HA({protectedKeys:n,needsAnimating:t},i){const o=n.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,o}function cx(n,t,{delay:i=0,transitionOverride:o,type:l}={}){let{transition:c=n.getDefaultTransition(),transitionEnd:f,...p}=t;o&&(c=o);const h=[],m=l&&n.animationState&&n.animationState.getState()[l];for(const g in p){const y=n.getValue(g,n.latestValues[g]??null),x=p[g];if(x===void 0||m&&HA(m,g))continue;const S={delay:i,...qh(c||{},g)},w=y.get();if(w!==void 0&&!y.isAnimating&&!Array.isArray(x)&&x===w&&!S.velocity)continue;let _=!1;if(window.MotionHandoffAnimation){const C=ux(n);if(C){const M=window.MotionHandoffAnimation(C,g,Ut);M!==null&&(S.startTime=M,_=!0)}}th(n,g),y.start(ep(g,y,x,n.shouldReduceMotion&&k1.has(g)?{type:!1}:S,n,_));const R=y.animation;R&&h.push(R)}return f&&Promise.all(h).then(()=>{Ut.update(()=>{f&&kA(n,f)})}),h}function fx(n,t,i,o=0,l=1){const c=Array.from(n).sort((m,g)=>m.sortNodePosition(g)).indexOf(t),f=n.size,p=(f-1)*o;return typeof i=="function"?i(c,f):l===1?c*o:p-c*o}function eh(n,t,i={}){const o=Cr(n,t,i.type==="exit"?n.presenceContext?.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(l=i.transitionOverride);const c=o?()=>Promise.all(cx(n,o,i)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:g,staggerDirection:y}=l;return jA(n,t,h,m,g,y,i)}:()=>Promise.resolve(),{when:p}=l;if(p){const[h,m]=p==="beforeChildren"?[c,f]:[f,c];return h().then(()=>m())}else return Promise.all([c(),f(i.delay)])}function jA(n,t,i=0,o=0,l=0,c=1,f){const p=[];for(const h of n.variantChildren)h.notify("AnimationStart",t),p.push(eh(h,t,{...f,delay:i+(typeof o=="function"?0:o)+fx(n.variantChildren,h,o,l,c)}).then(()=>h.notify("AnimationComplete",t)));return Promise.all(p)}function qA(n,t,i={}){n.notify("AnimationStart",t);let o;if(Array.isArray(t)){const l=t.map(c=>eh(n,c,i));o=Promise.all(l)}else if(typeof t=="string")o=eh(n,t,i);else{const l=typeof t=="function"?Cr(n,t,i.custom):t;o=Promise.all(cx(n,l,i))}return o.then(()=>{n.notify("AnimationComplete",t)})}function dx(n,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==n.length)return!1;for(let o=0;o<i;o++)if(t[o]!==n[o])return!1;return!0}const FA=Kh.length;function hx(n){if(!n)return;if(!n.isControllingVariants){const i=n.parent?hx(n.parent)||{}:{};return n.props.initial!==void 0&&(i.initial=n.props.initial),i}const t={};for(let i=0;i<FA;i++){const o=Kh[i],l=n.props[o];(ms(l)||l===!1)&&(t[o]=l)}return t}const GA=[...Xh].reverse(),YA=Xh.length;function XA(n){return t=>Promise.all(t.map(({animation:i,options:o})=>qA(n,i,o)))}function KA(n){let t=XA(n),i=ev(),o=!0;const l=h=>(m,g)=>{const y=Cr(n,g,h==="exit"?n.presenceContext?.custom:void 0);if(y){const{transition:x,transitionEnd:S,...w}=y;m={...m,...w,...S}}return m};function c(h){t=h(n)}function f(h){const{props:m}=n,g=hx(n.parent)||{},y=[],x=new Set;let S={},w=1/0;for(let R=0;R<YA;R++){const C=GA[R],M=i[C],I=m[C]!==void 0?m[C]:g[C],K=ms(I),z=C===h?M.isActive:null;z===!1&&(w=R);let J=I===g[C]&&I!==m[C]&&K;if(J&&o&&n.manuallyAnimateOnMount&&(J=!1),M.protectedKeys={...S},!M.isActive&&z===null||!I&&!M.prevProp||Uu(I)||typeof I=="boolean")continue;const $=$A(M.prevProp,I);let Y=$||C===h&&M.isActive&&!J&&K||R>w&&K,Z=!1;const bt=Array.isArray(I)?I:[I];let It=bt.reduce(l(C),{});z===!1&&(It={});const{prevResolvedValues:Mt={}}=M,Wt={...Mt,...It},we=q=>{Y=!0,x.has(q)&&(Z=!0,x.delete(q)),M.needsAnimating[q]=!0;const tt=n.getValue(q);tt&&(tt.liveStyle=!1)};for(const q in Wt){const tt=It[q],ht=Mt[q];if(S.hasOwnProperty(q))continue;let E=!1;Jd(tt)&&Jd(ht)?E=!dx(tt,ht):E=tt!==ht,E?tt!=null?we(q):x.add(q):tt!==void 0&&x.has(q)?we(q):M.protectedKeys[q]=!0}M.prevProp=I,M.prevResolvedValues=It,M.isActive&&(S={...S,...It}),o&&n.blockInitialAnimation&&(Y=!1);const Nt=J&&$;Y&&(!Nt||Z)&&y.push(...bt.map(q=>{const tt={type:C};if(typeof q=="string"&&o&&!Nt&&n.manuallyAnimateOnMount&&n.parent){const{parent:ht}=n,E=Cr(ht,q);if(ht.enteringChildren&&E){const{delayChildren:H}=E.transition||{};tt.delay=fx(ht.enteringChildren,n,H)}}return{animation:q,options:tt}}))}if(x.size){const R={};if(typeof m.initial!="boolean"){const C=Cr(n,Array.isArray(m.initial)?m.initial[0]:m.initial);C&&C.transition&&(R.transition=C.transition)}x.forEach(C=>{const M=n.getBaseTarget(C),I=n.getValue(C);I&&(I.liveStyle=!0),R[C]=M??null}),y.push({animation:R})}let _=!!y.length;return o&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(_=!1),o=!1,_?t(y):Promise.resolve()}function p(h,m){if(i[h].isActive===m)return Promise.resolve();n.variantChildren?.forEach(y=>y.animationState?.setActive(h,m)),i[h].isActive=m;const g=f(h);for(const y in i)i[y].protectedKeys={};return g}return{animateChanges:f,setActive:p,setAnimateFunction:c,getState:()=>i,reset:()=>{i=ev()}}}function $A(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!dx(t,n):!1}function xi(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ev(){return{animate:xi(!0),whileInView:xi(),whileHover:xi(),whileTap:xi(),whileDrag:xi(),whileFocus:xi(),exit:xi()}}class Qa{constructor(t){this.isMounted=!1,this.node=t}update(){}}class ZA extends Qa{constructor(t){super(t),t.animationState||(t.animationState=KA(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Uu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let QA=0;class WA extends Qa{constructor(){super(...arguments),this.id=QA++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const l=this.node.animationState.setActive("exit",!t);i&&!t&&l.then(()=>{i(this.id)})}mount(){const{register:t,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const JA={animation:{Feature:ZA},exit:{Feature:WA}};function ys(n,t,i,o={passive:!0}){return n.addEventListener(t,i,o),()=>n.removeEventListener(t,i)}function Os(n){return{point:{x:n.pageX,y:n.pageY}}}const tR=n=>t=>Yh(t)&&n(t,Os(t));function rs(n,t,i,o){return ys(n,t,tR(i),o)}const px=1e-4,eR=1-px,nR=1+px,mx=.01,aR=0-mx,iR=0+mx;function Ce(n){return n.max-n.min}function rR(n,t,i){return Math.abs(n-t)<=i}function nv(n,t,i,o=.5){n.origin=o,n.originPoint=zt(t.min,t.max,n.origin),n.scale=Ce(i)/Ce(t),n.translate=zt(i.min,i.max,n.origin)-n.originPoint,(n.scale>=eR&&n.scale<=nR||isNaN(n.scale))&&(n.scale=1),(n.translate>=aR&&n.translate<=iR||isNaN(n.translate))&&(n.translate=0)}function os(n,t,i,o){nv(n.x,t.x,i.x,o?o.originX:void 0),nv(n.y,t.y,i.y,o?o.originY:void 0)}function av(n,t,i){n.min=i.min+t.min,n.max=n.min+Ce(t)}function oR(n,t,i){av(n.x,t.x,i.x),av(n.y,t.y,i.y)}function iv(n,t,i){n.min=t.min-i.min,n.max=n.min+Ce(t)}function ss(n,t,i){iv(n.x,t.x,i.x),iv(n.y,t.y,i.y)}function an(n){return[n("x"),n("y")]}const gx=({current:n})=>n?n.ownerDocument.defaultView:null,rv=(n,t)=>Math.abs(n-t);function sR(n,t){const i=rv(n.x,t.x),o=rv(n.y,t.y);return Math.sqrt(i**2+o**2)}class yx{constructor(t,i,{transformPagePoint:o,contextWindow:l=window,dragSnapToOrigin:c=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=bd(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,w=sR(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!w)return;const{point:_}=x,{timestamp:R}=ve;this.history.push({..._,timestamp:R});const{onStart:C,onMove:M}=this.handlers;S||(C&&C(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),M&&M(this.lastMoveEvent,x)},this.handlePointerMove=(x,S)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=vd(S,this.transformPagePoint),Ut.update(this.updatePoint,!0)},this.handlePointerUp=(x,S)=>{this.end();const{onEnd:w,onSessionEnd:_,resumeAnimation:R}=this.handlers;if(this.dragSnapToOrigin&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=bd(x.type==="pointercancel"?this.lastMoveEventInfo:vd(S,this.transformPagePoint),this.history);this.startEvent&&w&&w(x,C),_&&_(x,C)},!Yh(t))return;this.dragSnapToOrigin=c,this.handlers=i,this.transformPagePoint=o,this.distanceThreshold=f,this.contextWindow=l||window;const p=Os(t),h=vd(p,this.transformPagePoint),{point:m}=h,{timestamp:g}=ve;this.history=[{...m,timestamp:g}];const{onSessionStart:y}=i;y&&y(t,bd(h,this.history)),this.removeListeners=_s(rs(this.contextWindow,"pointermove",this.handlePointerMove),rs(this.contextWindow,"pointerup",this.handlePointerUp),rs(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),$a(this.updatePoint)}}function vd(n,t){return t?{point:t(n.point)}:n}function ov(n,t){return{x:n.x-t.x,y:n.y-t.y}}function bd({point:n},t){return{point:n,delta:ov(n,vx(t)),offset:ov(n,lR(t)),velocity:uR(t,.1)}}function lR(n){return n[0]}function vx(n){return n[n.length-1]}function uR(n,t){if(n.length<2)return{x:0,y:0};let i=n.length-1,o=null;const l=vx(n);for(;i>=0&&(o=n[i],!(l.timestamp-o.timestamp>kn(t)));)i--;if(!o)return{x:0,y:0};const c=rn(l.timestamp-o.timestamp);if(c===0)return{x:0,y:0};const f={x:(l.x-o.x)/c,y:(l.y-o.y)/c};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function cR(n,{min:t,max:i},o){return t!==void 0&&n<t?n=o?zt(t,n,o.min):Math.max(n,t):i!==void 0&&n>i&&(n=o?zt(i,n,o.max):Math.min(n,i)),n}function sv(n,t,i){return{min:t!==void 0?n.min+t:void 0,max:i!==void 0?n.max+i-(n.max-n.min):void 0}}function fR(n,{top:t,left:i,bottom:o,right:l}){return{x:sv(n.x,i,l),y:sv(n.y,t,o)}}function lv(n,t){let i=t.min-n.min,o=t.max-n.max;return t.max-t.min<n.max-n.min&&([i,o]=[o,i]),{min:i,max:o}}function dR(n,t){return{x:lv(n.x,t.x),y:lv(n.y,t.y)}}function hR(n,t){let i=.5;const o=Ce(n),l=Ce(t);return l>o?i=ds(t.min,t.max-o,n.min):o>l&&(i=ds(n.min,n.max-l,t.min)),ra(0,1,i)}function pR(n,t){const i={};return t.min!==void 0&&(i.min=t.min-n.min),t.max!==void 0&&(i.max=t.max-n.min),i}const nh=.35;function mR(n=nh){return n===!1?n=0:n===!0&&(n=nh),{x:uv(n,"left","right"),y:uv(n,"top","bottom")}}function uv(n,t,i){return{min:cv(n,t),max:cv(n,i)}}function cv(n,t){return typeof n=="number"?n:n[t]||0}const gR=new WeakMap;class yR{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:i=!1,distanceThreshold:o}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const c=y=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Os(y).point)},f=(y,x)=>{const{drag:S,dragPropagation:w,onDragStart:_}=this.getProps();if(S&&!w&&(this.openDragLock&&this.openDragLock(),this.openDragLock=O5(S),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),an(C=>{let M=this.getAxisMotionValue(C).get()||0;if(Mn.test(M)){const{projection:I}=this.visualElement;if(I&&I.layout){const K=I.layout.layoutBox[C];K&&(M=Ce(K)*(parseFloat(M)/100))}}this.originPoint[C]=M}),_&&Ut.postRender(()=>_(y,x)),th(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},p=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x;const{dragPropagation:S,dragDirectionLock:w,onDirectionLock:_,onDrag:R}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:C}=x;if(w&&this.currentDirection===null){this.currentDirection=vR(C),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",x.point,C),this.updateAxis("y",x.point,C),this.visualElement.render(),R&&R(y,x)},h=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x,this.stop(y,x),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>an(y=>this.getAnimationState(y)==="paused"&&this.getAxisMotionValue(y).animation?.play()),{dragSnapToOrigin:g}=this.getProps();this.panSession=new yx(t,{onSessionStart:c,onStart:f,onMove:p,onSessionEnd:h,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:o,contextWindow:gx(this.visualElement)})}stop(t,i){const o=t||this.latestPointerEvent,l=i||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!l||!o)return;const{velocity:f}=l;this.startAnimation(f);const{onDragEnd:p}=this.getProps();p&&Ut.postRender(()=>p(o,l))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(t,i,o){const{drag:l}=this.getProps();if(!o||!Jl(t,l,this.currentDirection))return;const c=this.getAxisMotionValue(t);let f=this.originPoint[t]+o[t];this.constraints&&this.constraints[t]&&(f=cR(f,this.constraints[t],this.elastic[t])),c.set(f)}resolveConstraints(){const{dragConstraints:t,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,l=this.constraints;t&&Er(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=fR(o.layoutBox,t):this.constraints=!1,this.elastic=mR(i),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&an(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=pR(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!Er(t))return!1;const o=t.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const c=bA(o,l.root,this.visualElement.getTransformPagePoint());let f=dR(l.layout.layoutBox,c);if(i){const p=i(gA(f));this.hasMutatedConstraints=!!p,p&&(f=ex(p))}return f}startAnimation(t){const{drag:i,dragMomentum:o,dragElastic:l,dragTransition:c,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},m=an(g=>{if(!Jl(g,i,this.currentDirection))return;let y=h&&h[g]||{};f&&(y={min:0,max:0});const x=l?200:1e6,S=l?40:1e7,w={type:"inertia",velocity:o?t[g]:0,bounceStiffness:x,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...c,...y};return this.startAxisValueAnimation(g,w)});return Promise.all(m).then(p)}startAxisValueAnimation(t,i){const o=this.getAxisMotionValue(t);return th(this.visualElement,t),o.start(ep(t,o,0,i,this.visualElement,!1))}stopAnimation(){an(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){an(t=>this.getAxisMotionValue(t).animation?.pause())}getAnimationState(t){return this.getAxisMotionValue(t).animation?.state}getAxisMotionValue(t){const i=`_drag${t.toUpperCase()}`,o=this.visualElement.getProps(),l=o[i];return l||this.visualElement.getValue(t,(o.initial?o.initial[t]:void 0)||0)}snapToCursor(t){an(i=>{const{drag:o}=this.getProps();if(!Jl(i,o,this.currentDirection))return;const{projection:l}=this.visualElement,c=this.getAxisMotionValue(i);if(l&&l.layout){const{min:f,max:p}=l.layout.layoutBox[i];c.set(t[i]-zt(f,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!Er(i)||!o||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};an(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const h=p.get();l[f]=hR({min:h,max:h},this.constraints[f])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),an(f=>{if(!Jl(f,t,null))return;const p=this.getAxisMotionValue(f),{min:h,max:m}=this.constraints[f];p.set(zt(h,m,l[f]))})}addListeners(){if(!this.visualElement.current)return;gR.set(this.visualElement,this);const t=this.visualElement.current,i=rs(t,"pointerdown",h=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(h)}),o=()=>{const{dragConstraints:h}=this.getProps();Er(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,c=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Ut.read(o);const f=ys(window,"resize",()=>this.scalePositionWithinConstraints()),p=l.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(an(g=>{const y=this.getAxisMotionValue(g);y&&(this.originPoint[g]+=h[g].translate,y.set(y.get()+h[g].translate))}),this.visualElement.render())}));return()=>{f(),i(),c(),p&&p()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:l=!1,dragConstraints:c=!1,dragElastic:f=nh,dragMomentum:p=!0}=t;return{...t,drag:i,dragDirectionLock:o,dragPropagation:l,dragConstraints:c,dragElastic:f,dragMomentum:p}}}function Jl(n,t,i){return(t===!0||t===n)&&(i===null||i===n)}function vR(n,t=10){let i=null;return Math.abs(n.y)>t?i="y":Math.abs(n.x)>t&&(i="x"),i}class bR extends Qa{constructor(t){super(t),this.removeGroupControls=on,this.removeListeners=on,this.controls=new yR(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||on}unmount(){this.removeGroupControls(),this.removeListeners()}}const fv=n=>(t,i)=>{n&&Ut.postRender(()=>n(t,i))};class xR extends Qa{constructor(){super(...arguments),this.removePointerDownListener=on}onPointerDown(t){this.session=new yx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:gx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:o,onPanEnd:l}=this.node.getProps();return{onSessionStart:fv(t),onStart:fv(i),onMove:o,onEnd:(c,f)=>{delete this.session,l&&Ut.postRender(()=>l(c,f))}}}mount(){this.removePointerDownListener=rs(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const fu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function dv(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const Zo={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(ft.test(n))n=parseFloat(n);else return n;const i=dv(n,t.target.x),o=dv(n,t.target.y);return`${i}% ${o}%`}},TR={correct:(n,{treeScale:t,projectionDelta:i})=>{const o=n,l=Za.parse(n);if(l.length>5)return o;const c=Za.createTransformer(n),f=typeof l[0]!="number"?1:0,p=i.x.scale*t.x,h=i.y.scale*t.y;l[0+f]/=p,l[1+f]/=h;const m=zt(p,h,.5);return typeof l[2+f]=="number"&&(l[2+f]/=m),typeof l[3+f]=="number"&&(l[3+f]/=m),c(l)}};let xd=!1;class SR extends O.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:o,layoutId:l}=this.props,{projection:c}=t;F5(wR),c&&(i.group&&i.group.add(c),o&&o.register&&l&&o.register(c),xd&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),fu.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:o,drag:l,isPresent:c}=this.props,{projection:f}=o;return f&&(f.isPresent=c,xd=!0,l||t.layoutDependency!==i||i===void 0||t.isPresent!==c?f.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?f.promote():f.relegate()||Ut.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Gh.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:l}=t;xd=!0,l&&(l.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(l),o&&o.deregister&&o.deregister(l))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function bx(n){const[t,i]=I5(),o=O.useContext(Qb);return G.jsx(SR,{...n,layoutGroup:o,switchLayoutGroup:O.useContext(J1),isPresent:t,safeToRemove:i})}const wR={borderRadius:{...Zo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Zo,borderTopRightRadius:Zo,borderBottomLeftRadius:Zo,borderBottomRightRadius:Zo,boxShadow:TR};function ER(n,t,i){const o=Se(n)?n:Nr(n);return o.start(ep("",o,t,i)),o.animation}const _R=(n,t)=>n.depth-t.depth;class AR{constructor(){this.children=[],this.isDirty=!1}add(t){Ah(this.children,t),this.isDirty=!0}remove(t){Rh(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(_R),this.isDirty=!1,this.children.forEach(t)}}function RR(n,t){const i=Ie.now(),o=({timestamp:l})=>{const c=l-i;c>=t&&($a(o),n(c-t))};return Ut.setup(o,!0),()=>$a(o)}const xx=["TopLeft","TopRight","BottomLeft","BottomRight"],OR=xx.length,hv=n=>typeof n=="string"?parseFloat(n):n,pv=n=>typeof n=="number"||ft.test(n);function CR(n,t,i,o,l,c){l?(n.opacity=zt(0,i.opacity??1,DR(o)),n.opacityExit=zt(t.opacity??1,0,kR(o))):c&&(n.opacity=zt(t.opacity??1,i.opacity??1,o));for(let f=0;f<OR;f++){const p=`border${xx[f]}Radius`;let h=mv(t,p),m=mv(i,p);if(h===void 0&&m===void 0)continue;h||(h=0),m||(m=0),h===0||m===0||pv(h)===pv(m)?(n[p]=Math.max(zt(hv(h),hv(m),o),0),(Mn.test(m)||Mn.test(h))&&(n[p]+="%")):n[p]=m}(t.rotate||i.rotate)&&(n.rotate=zt(t.rotate||0,i.rotate||0,o))}function mv(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const DR=Tx(0,.5,l1),kR=Tx(.5,.95,on);function Tx(n,t,i){return o=>o<n?0:o>t?1:i(ds(n,t,o))}function gv(n,t){n.min=t.min,n.max=t.max}function nn(n,t){gv(n.x,t.x),gv(n.y,t.y)}function yv(n,t){n.translate=t.translate,n.scale=t.scale,n.originPoint=t.originPoint,n.origin=t.origin}function vv(n,t,i,o,l){return n-=t,n=wu(n,1/i,o),l!==void 0&&(n=wu(n,1/l,o)),n}function MR(n,t=0,i=1,o=.5,l,c=n,f=n){if(Mn.test(t)&&(t=parseFloat(t),t=zt(f.min,f.max,t/100)-f.min),typeof t!="number")return;let p=zt(c.min,c.max,o);n===c&&(p-=t),n.min=vv(n.min,t,i,p,l),n.max=vv(n.max,t,i,p,l)}function bv(n,t,[i,o,l],c,f){MR(n,t[i],t[o],t[l],t.scale,c,f)}const NR=["x","scaleX","originX"],PR=["y","scaleY","originY"];function xv(n,t,i,o){bv(n.x,t,NR,i?i.x:void 0,o?o.x:void 0),bv(n.y,t,PR,i?i.y:void 0,o?o.y:void 0)}function Tv(n){return n.translate===0&&n.scale===1}function Sx(n){return Tv(n.x)&&Tv(n.y)}function Sv(n,t){return n.min===t.min&&n.max===t.max}function LR(n,t){return Sv(n.x,t.x)&&Sv(n.y,t.y)}function wv(n,t){return Math.round(n.min)===Math.round(t.min)&&Math.round(n.max)===Math.round(t.max)}function wx(n,t){return wv(n.x,t.x)&&wv(n.y,t.y)}function Ev(n){return Ce(n.x)/Ce(n.y)}function _v(n,t){return n.translate===t.translate&&n.scale===t.scale&&n.originPoint===t.originPoint}class UR{constructor(){this.members=[]}add(t){Ah(this.members,t),t.scheduleRender()}remove(t){if(Rh(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){const i=this.members.findIndex(l=>t===l);if(i===0)return!1;let o;for(let l=i;l>=0;l--){const c=this.members[l];if(c.isPresent!==!1){o=c;break}}return o?(this.promote(o),!0):!1}promote(t,i){const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,i&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:l}=t.options;l===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:i,resumingFrom:o}=t;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function IR(n,t,i){let o="";const l=n.x.translate/t.x,c=n.y.translate/t.y,f=i?.z||0;if((l||c||f)&&(o=`translate3d(${l}px, ${c}px, ${f}px) `),(t.x!==1||t.y!==1)&&(o+=`scale(${1/t.x}, ${1/t.y}) `),i){const{transformPerspective:m,rotate:g,rotateX:y,rotateY:x,skewX:S,skewY:w}=i;m&&(o=`perspective(${m}px) ${o}`),g&&(o+=`rotate(${g}deg) `),y&&(o+=`rotateX(${y}deg) `),x&&(o+=`rotateY(${x}deg) `),S&&(o+=`skewX(${S}deg) `),w&&(o+=`skewY(${w}deg) `)}const p=n.x.scale*t.x,h=n.y.scale*t.y;return(p!==1||h!==1)&&(o+=`scale(${p}, ${h})`),o||"none"}const Td=["","X","Y","Z"],BR=1e3;let zR=0;function Sd(n,t,i,o){const{latestValues:l}=t;l[n]&&(i[n]=l[n],t.setStaticValue(n,0),o&&(o[n]=0))}function Ex(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:t}=n.options;if(!t)return;const i=ux(t);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:l,layoutId:c}=n.options;window.MotionCancelOptimisedAnimation(i,"transform",Ut,!(l||c))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&Ex(o)}function _x({attachResizeListener:n,defaultParent:t,measureScroll:i,checkIsScrollRoot:o,resetTransform:l}){return class{constructor(f={},p=t?.()){this.id=zR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(jR),this.nodes.forEach(YR),this.nodes.forEach(XR),this.nodes.forEach(qR)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new AR)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Dh),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const h=this.eventHandlers.get(f);h&&h.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=V1(f)&&!P5(f),this.instance=f;const{layoutId:p,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||p)&&(this.isLayoutDirty=!0),n){let g,y=0;const x=()=>this.root.updateBlockedByResize=!1;Ut.read(()=>{y=window.innerWidth}),n(f,()=>{const S=window.innerWidth;S!==y&&(y=S,this.root.updateBlockedByResize=!0,g&&g(),g=RR(x,250),fu.hasAnimatedSinceResize&&(fu.hasAnimatedSinceResize=!1,this.nodes.forEach(Ov)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:y,hasRelativeLayoutChanged:x,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||m.getDefaultTransition()||WR,{onLayoutAnimationStart:_,onLayoutAnimationComplete:R}=m.getProps(),C=!this.targetLayout||!wx(this.targetLayout,S),M=!y&&x;if(this.options.layoutRoot||this.resumeFrom||M||y&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const I={...qh(w,"layout"),onPlay:_,onComplete:R};(m.shouldReduceMotion||this.options.layoutRoot)&&(I.delay=0,I.type=!1),this.startAnimation(I),this.setAnimationOrigin(g,M)}else y||Ov(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),$a(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(KR),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ex(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Av);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Rv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(GR),this.nodes.forEach(VR),this.nodes.forEach(HR)):this.nodes.forEach(Rv),this.clearAllSnapshots();const p=Ie.now();ve.delta=ra(0,1e3/60,p-ve.timestamp),ve.timestamp=p,ve.isProcessing=!0,cd.update.process(ve),cd.preRender.process(ve),cd.render.process(ve),ve.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Gh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(FR),this.sharedNodes.forEach($R)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ut.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ut.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ce(this.snapshot.measuredBox.x)&&!Ce(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p&&this.instance){const h=o(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:h,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!Sx(this.projectionDelta),h=this.getTransformTemplate(),m=h?h(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;f&&this.instance&&(p||Ti(this.latestValues)||g)&&(l(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return f&&(h=this.removeTransform(h)),JR(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return Qt();const p=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(tO))){const{scroll:m}=this.root;m&&(_r(p.x,m.offset.x),_r(p.y,m.offset.y))}return p}removeElementScroll(f){const p=Qt();if(nn(p,f),this.scroll?.wasRoot)return p;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:g,options:y}=m;m!==this.root&&g&&y.layoutScroll&&(g.wasRoot&&nn(p,f),_r(p.x,g.offset.x),_r(p.y,g.offset.y))}return p}applyTransform(f,p=!1){const h=Qt();nn(h,f);for(let m=0;m<this.path.length;m++){const g=this.path[m];!p&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Ar(h,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Ti(g.latestValues)&&Ar(h,g.latestValues)}return Ti(this.latestValues)&&Ar(h,this.latestValues),h}removeTransform(f){const p=Qt();nn(p,f);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!m.instance||!Ti(m.latestValues))continue;Zd(m.latestValues)&&m.updateSnapshot();const g=Qt(),y=m.measurePageBox();nn(g,y),xv(p,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return Ti(this.latestValues)&&xv(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ve.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(f||h&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!(!this.layout||!(g||y))){if(this.resolvedRelativeTargetAt=ve.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),ss(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),nn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qt(),this.targetWithTransforms=Qt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),oR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):nn(this.target,this.layout.layoutBox),ax(this.target,this.targetDelta)):nn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),ss(this.relativeTargetOrigin,this.target,x.target),nn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Zd(this.parent.latestValues)||nx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),p=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===ve.timestamp&&(h=!1),h)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;nn(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,x=this.treeScale.y;vA(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Qt());const{target:S}=f;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(yv(this.prevProjectionDelta.x,this.projectionDelta.x),yv(this.prevProjectionDelta.y,this.projectionDelta.y)),os(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==x||!_v(this.projectionDelta.x,this.prevProjectionDelta.x)||!_v(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Rr(),this.projectionDelta=Rr(),this.projectionDeltaWithTransform=Rr()}setAnimationOrigin(f,p=!1){const h=this.snapshot,m=h?h.latestValues:{},g={...this.latestValues},y=Rr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const x=Qt(),S=h?h.source:void 0,w=this.layout?this.layout.source:void 0,_=S!==w,R=this.getStack(),C=!R||R.members.length<=1,M=!!(_&&!C&&this.options.crossfade===!0&&!this.path.some(QR));this.animationProgress=0;let I;this.mixTargetDelta=K=>{const z=K/1e3;Cv(y.x,f.x,z),Cv(y.y,f.y,z),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ss(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ZR(this.relativeTarget,this.relativeTargetOrigin,x,z),I&&LR(this.relativeTarget,I)&&(this.isProjectionDirty=!1),I||(I=Qt()),nn(I,this.relativeTarget)),_&&(this.animationValues=g,CR(g,m,this.latestValues,z,M,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=z},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&($a(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ut.update(()=>{fu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Nr(0)),this.currentAnimation=ER(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),f.onUpdate&&f.onUpdate(p)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(BR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:h,layout:m,latestValues:g}=f;if(!(!p||!h||!m)){if(this!==f&&this.layout&&m&&Ax(this.options.animationType,this.layout.layoutBox,m.layoutBox)){h=this.target||Qt();const y=Ce(this.layout.layoutBox.x);h.x.min=f.target.x.min,h.x.max=h.x.min+y;const x=Ce(this.layout.layoutBox.y);h.y.min=f.target.y.min,h.y.max=h.y.min+x}nn(p,h),Ar(p,g),os(this.projectionDeltaWithTransform,this.layoutCorrected,p,g)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new UR),this.sharedNodes.get(f).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:h}={}){const m=this.getStack();m&&m.promote(this,h),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:h}=f;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const m={};h.z&&Sd("z",f,m,this.animationValues);for(let g=0;g<Td.length;g++)Sd(`rotate${Td[g]}`,f,m,this.animationValues),Sd(`skew${Td[g]}`,f,m,this.animationValues);f.render();for(const g in m)f.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);f.scheduleRender()}applyProjectionStyles(f,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=cu(p?.pointerEvents)||"",f.transform=h?h(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=cu(p?.pointerEvents)||""),this.hasProjected&&!Ti(this.latestValues)&&(f.transform=h?h({},""):"none",this.hasProjected=!1);return}f.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let y=IR(this.projectionDeltaWithTransform,this.treeScale,g);h&&(y=h(g,y)),f.transform=y;const{x,y:S}=this.projectionDelta;f.transformOrigin=`${x.origin*100}% ${S.origin*100}% 0`,m.animationValues?f.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:f.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const w in gs){if(g[w]===void 0)continue;const{correct:_,applyTo:R,isCSSVariable:C}=gs[w],M=y==="none"?g[w]:_(g[w],m);if(R){const I=R.length;for(let K=0;K<I;K++)f[R[K]]=M}else C?this.options.visualElement.renderState.vars[w]=M:f[w]=M}this.options.layoutId&&(f.pointerEvents=m===this?cu(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Av),this.root.sharedNodes.clear()}}}function VR(n){n.updateLayout()}function HR(n){const t=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:l}=n.options,c=t.source!==n.layout.source;l==="size"?an(g=>{const y=c?t.measuredBox[g]:t.layoutBox[g],x=Ce(y);y.min=i[g].min,y.max=y.min+x}):Ax(l,t.layoutBox,i)&&an(g=>{const y=c?t.measuredBox[g]:t.layoutBox[g],x=Ce(i[g]);y.max=y.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+x)});const f=Rr();os(f,i,t.layoutBox);const p=Rr();c?os(p,n.applyTransform(o,!0),t.measuredBox):os(p,i,t.layoutBox);const h=!Sx(f);let m=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:y,layout:x}=g;if(y&&x){const S=Qt();ss(S,t.layoutBox,y.layoutBox);const w=Qt();ss(w,i,x.layoutBox),wx(S,w)||(m=!0),g.options.layoutRoot&&(n.relativeTarget=w,n.relativeTargetOrigin=S,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:p,layoutDelta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function jR(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function qR(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function FR(n){n.clearSnapshot()}function Av(n){n.clearMeasurements()}function Rv(n){n.isLayoutDirty=!1}function GR(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function Ov(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function YR(n){n.resolveTargetDelta()}function XR(n){n.calcProjection()}function KR(n){n.resetSkewAndRotation()}function $R(n){n.removeLeadSnapshot()}function Cv(n,t,i){n.translate=zt(t.translate,0,i),n.scale=zt(t.scale,1,i),n.origin=t.origin,n.originPoint=t.originPoint}function Dv(n,t,i,o){n.min=zt(t.min,i.min,o),n.max=zt(t.max,i.max,o)}function ZR(n,t,i,o){Dv(n.x,t.x,i.x,o),Dv(n.y,t.y,i.y,o)}function QR(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const WR={duration:.45,ease:[.4,0,.1,1]},kv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Mv=kv("applewebkit/")&&!kv("chrome/")?Math.round:on;function Nv(n){n.min=Mv(n.min),n.max=Mv(n.max)}function JR(n){Nv(n.x),Nv(n.y)}function Ax(n,t,i){return n==="position"||n==="preserve-aspect"&&!rR(Ev(t),Ev(i),.2)}function tO(n){return n!==n.root&&n.scroll?.wasRoot}const eO=_x({attachResizeListener:(n,t)=>ys(n,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),wd={current:void 0},Rx=_x({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!wd.current){const n=new eO({});n.mount(window),n.setOptions({layoutScroll:!0}),wd.current=n}return wd.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),nO={pan:{Feature:xR},drag:{Feature:bR,ProjectionNode:Rx,MeasureLayout:bx}};function Pv(n,t,i){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",i==="Start");const l="onHover"+i,c=o[l];c&&Ut.postRender(()=>c(t,Os(t)))}class aO extends Qa{mount(){const{current:t}=this.node;t&&(this.unmount=C5(t,(i,o)=>(Pv(this.node,o,"Start"),l=>Pv(this.node,l,"End"))))}unmount(){}}class iO extends Qa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=_s(ys(this.node.current,"focus",()=>this.onFocus()),ys(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Lv(n,t,i){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",i==="Start");const l="onTap"+(i==="End"?"":i),c=o[l];c&&Ut.postRender(()=>c(t,Os(t)))}class rO extends Qa{mount(){const{current:t}=this.node;t&&(this.unmount=N5(t,(i,o)=>(Lv(this.node,o,"Start"),(l,{success:c})=>Lv(this.node,l,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ah=new WeakMap,Ed=new WeakMap,oO=n=>{const t=ah.get(n.target);t&&t(n)},sO=n=>{n.forEach(oO)};function lO({root:n,...t}){const i=n||document;Ed.has(i)||Ed.set(i,{});const o=Ed.get(i),l=JSON.stringify(t);return o[l]||(o[l]=new IntersectionObserver(sO,{root:n,...t})),o[l]}function uO(n,t,i){const o=lO(t);return ah.set(n,i),o.observe(n),()=>{ah.delete(n),o.unobserve(n)}}const cO={some:0,all:1};class fO extends Qa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:i,margin:o,amount:l="some",once:c}=t,f={root:i?i.current:void 0,rootMargin:o,threshold:typeof l=="number"?l:cO[l]},p=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,c&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),x=m?g:y;x&&x(h)};return uO(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(dO(t,i))&&this.startObserver()}unmount(){}}function dO({viewport:n={}},{viewport:t={}}={}){return i=>n[i]!==t[i]}const hO={inView:{Feature:fO},tap:{Feature:rO},focus:{Feature:iO},hover:{Feature:aO}},pO={layout:{ProjectionNode:Rx,MeasureLayout:bx}},mO={...JA,...hO,...nO,...pO},vs=mA(mO,OA);function se(n,t){t===void 0&&(t={});var i=t.insertAt;if(n&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",i==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}}se(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var mn=function(){return mn=Object.assign||function(n){for(var t,i=1,o=arguments.length;i<o;i++)for(var l in t=arguments[i])Object.prototype.hasOwnProperty.call(t,l)&&(n[l]=t[l]);return n},mn.apply(this,arguments)};function Eu(n){return Eu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Eu(n)}var gO=/^\s+/,yO=/\s+$/;function it(n,t){if(t=t||{},(n=n||"")instanceof it)return n;if(!(this instanceof it))return new it(n,t);var i=(function(o){var l={r:0,g:0,b:0},c=1,f=null,p=null,h=null,m=!1,g=!1;typeof o=="string"&&(o=(function(w){w=w.replace(gO,"").replace(yO,"").toLowerCase();var _,R=!1;if(ih[w])w=ih[w],R=!0;else if(w=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(_=hn.rgb.exec(w))?{r:_[1],g:_[2],b:_[3]}:(_=hn.rgba.exec(w))?{r:_[1],g:_[2],b:_[3],a:_[4]}:(_=hn.hsl.exec(w))?{h:_[1],s:_[2],l:_[3]}:(_=hn.hsla.exec(w))?{h:_[1],s:_[2],l:_[3],a:_[4]}:(_=hn.hsv.exec(w))?{h:_[1],s:_[2],v:_[3]}:(_=hn.hsva.exec(w))?{h:_[1],s:_[2],v:_[3],a:_[4]}:(_=hn.hex8.exec(w))?{r:Ge(_[1]),g:Ge(_[2]),b:Ge(_[3]),a:Hv(_[4]),format:R?"name":"hex8"}:(_=hn.hex6.exec(w))?{r:Ge(_[1]),g:Ge(_[2]),b:Ge(_[3]),format:R?"name":"hex"}:(_=hn.hex4.exec(w))?{r:Ge(_[1]+""+_[1]),g:Ge(_[2]+""+_[2]),b:Ge(_[3]+""+_[3]),a:Hv(_[4]+""+_[4]),format:R?"name":"hex8"}:(_=hn.hex3.exec(w))?{r:Ge(_[1]+""+_[1]),g:Ge(_[2]+""+_[2]),b:Ge(_[3]+""+_[3]),format:R?"name":"hex"}:!1})(o)),Eu(o)=="object"&&(ta(o.r)&&ta(o.g)&&ta(o.b)?(y=o.r,x=o.g,S=o.b,l={r:255*Lt(y,255),g:255*Lt(x,255),b:255*Lt(S,255)},m=!0,g=String(o.r).substr(-1)==="%"?"prgb":"rgb"):ta(o.h)&&ta(o.s)&&ta(o.v)?(f=ts(o.s),p=ts(o.v),l=(function(w,_,R){w=6*Lt(w,360),_=Lt(_,100),R=Lt(R,100);var C=Math.floor(w),M=w-C,I=R*(1-_),K=R*(1-M*_),z=R*(1-(1-M)*_),J=C%6,$=[R,K,I,I,z,R][J],Y=[z,R,R,K,I,I][J],Z=[I,I,z,R,R,K][J];return{r:255*$,g:255*Y,b:255*Z}})(o.h,f,p),m=!0,g="hsv"):ta(o.h)&&ta(o.s)&&ta(o.l)&&(f=ts(o.s),h=ts(o.l),l=(function(w,_,R){var C,M,I;function K($,Y,Z){return Z<0&&(Z+=1),Z>1&&(Z-=1),Z<1/6?$+6*(Y-$)*Z:Z<.5?Y:Z<2/3?$+(Y-$)*(2/3-Z)*6:$}if(w=Lt(w,360),_=Lt(_,100),R=Lt(R,100),_===0)C=M=I=R;else{var z=R<.5?R*(1+_):R+_-R*_,J=2*R-z;C=K(J,z,w+1/3),M=K(J,z,w),I=K(J,z,w-1/3)}return{r:255*C,g:255*M,b:255*I}})(o.h,f,h),m=!0,g="hsl"),o.hasOwnProperty("a")&&(c=o.a));var y,x,S;return c=Ox(c),{ok:m,format:o.format||g,r:Math.min(255,Math.max(l.r,0)),g:Math.min(255,Math.max(l.g,0)),b:Math.min(255,Math.max(l.b,0)),a:c}})(n);this._originalInput=n,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||i.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function Uv(n,t,i){n=Lt(n,255),t=Lt(t,255),i=Lt(i,255);var o,l,c=Math.max(n,t,i),f=Math.min(n,t,i),p=(c+f)/2;if(c==f)o=l=0;else{var h=c-f;switch(l=p>.5?h/(2-c-f):h/(c+f),c){case n:o=(t-i)/h+(t<i?6:0);break;case t:o=(i-n)/h+2;break;case i:o=(n-t)/h+4}o/=6}return{h:o,s:l,l:p}}function Iv(n,t,i){n=Lt(n,255),t=Lt(t,255),i=Lt(i,255);var o,l,c=Math.max(n,t,i),f=Math.min(n,t,i),p=c,h=c-f;if(l=c===0?0:h/c,c==f)o=0;else{switch(c){case n:o=(t-i)/h+(t<i?6:0);break;case t:o=(i-n)/h+2;break;case i:o=(n-t)/h+4}o/=6}return{h:o,s:l,v:p}}function Bv(n,t,i,o){var l=[yn(Math.round(n).toString(16)),yn(Math.round(t).toString(16)),yn(Math.round(i).toString(16))];return o&&l[0].charAt(0)==l[0].charAt(1)&&l[1].charAt(0)==l[1].charAt(1)&&l[2].charAt(0)==l[2].charAt(1)?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0):l.join("")}function zv(n,t,i,o){return[yn(Cx(o)),yn(Math.round(n).toString(16)),yn(Math.round(t).toString(16)),yn(Math.round(i).toString(16))].join("")}function vO(n,t){t=t===0?0:t||10;var i=it(n).toHsl();return i.s-=t/100,i.s=Bu(i.s),it(i)}function bO(n,t){t=t===0?0:t||10;var i=it(n).toHsl();return i.s+=t/100,i.s=Bu(i.s),it(i)}function xO(n){return it(n).desaturate(100)}function TO(n,t){t=t===0?0:t||10;var i=it(n).toHsl();return i.l+=t/100,i.l=Bu(i.l),it(i)}function SO(n,t){t=t===0?0:t||10;var i=it(n).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-t/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-t/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-t/100*255))),it(i)}function wO(n,t){t=t===0?0:t||10;var i=it(n).toHsl();return i.l-=t/100,i.l=Bu(i.l),it(i)}function EO(n,t){var i=it(n).toHsl(),o=(i.h+t)%360;return i.h=o<0?360+o:o,it(i)}function _O(n){var t=it(n).toHsl();return t.h=(t.h+180)%360,it(t)}function Vv(n,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var i=it(n).toHsl(),o=[it(n)],l=360/t,c=1;c<t;c++)o.push(it({h:(i.h+c*l)%360,s:i.s,l:i.l}));return o}function AO(n){var t=it(n).toHsl(),i=t.h;return[it(n),it({h:(i+72)%360,s:t.s,l:t.l}),it({h:(i+216)%360,s:t.s,l:t.l})]}function RO(n,t,i){t=t||6,i=i||30;var o=it(n).toHsl(),l=360/i,c=[it(n)];for(o.h=(o.h-(l*t>>1)+720)%360;--t;)o.h=(o.h+l)%360,c.push(it(o));return c}function OO(n,t){t=t||6;for(var i=it(n).toHsv(),o=i.h,l=i.s,c=i.v,f=[],p=1/t;t--;)f.push(it({h:o,s:l,v:c})),c=(c+p)%1;return f}it.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,t,i,o=this.toRgb();return n=o.r/255,t=o.g/255,i=o.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(n){return this._a=Ox(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=Iv(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=Iv(this._r,this._g,this._b),t=Math.round(360*n.h),i=Math.round(100*n.s),o=Math.round(100*n.v);return this._a==1?"hsv("+t+", "+i+"%, "+o+"%)":"hsva("+t+", "+i+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var n=Uv(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=Uv(this._r,this._g,this._b),t=Math.round(360*n.h),i=Math.round(100*n.s),o=Math.round(100*n.l);return this._a==1?"hsl("+t+", "+i+"%, "+o+"%)":"hsla("+t+", "+i+"%, "+o+"%, "+this._roundA+")"},toHex:function(n){return Bv(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return(function(t,i,o,l,c){var f=[yn(Math.round(t).toString(16)),yn(Math.round(i).toString(16)),yn(Math.round(o).toString(16)),yn(Cx(l))];return c&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")})(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Lt(this._r,255))+"%",g:Math.round(100*Lt(this._g,255))+"%",b:Math.round(100*Lt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Lt(this._r,255))+"%, "+Math.round(100*Lt(this._g,255))+"%, "+Math.round(100*Lt(this._b,255))+"%)":"rgba("+Math.round(100*Lt(this._r,255))+"%, "+Math.round(100*Lt(this._g,255))+"%, "+Math.round(100*Lt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(CO[Bv(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var t="#"+zv(this._r,this._g,this._b,this._a),i=t,o=this._gradientType?"GradientType = 1, ":"";if(n){var l=it(n);i="#"+zv(l._r,l._g,l._b,l._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+t+",endColorstr="+i+")"},toString:function(n){var t=!!n;n=n||this._format;var i=!1,o=this._a<1&&this._a>=0;return t||!o||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(i=this.toRgbString()),n==="prgb"&&(i=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(i=this.toHexString()),n==="hex3"&&(i=this.toHexString(!0)),n==="hex4"&&(i=this.toHex8String(!0)),n==="hex8"&&(i=this.toHex8String()),n==="name"&&(i=this.toName()),n==="hsl"&&(i=this.toHslString()),n==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return it(this.toString())},_applyModification:function(n,t){var i=n.apply(null,[this].concat([].slice.call(t)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(TO,arguments)},brighten:function(){return this._applyModification(SO,arguments)},darken:function(){return this._applyModification(wO,arguments)},desaturate:function(){return this._applyModification(vO,arguments)},saturate:function(){return this._applyModification(bO,arguments)},greyscale:function(){return this._applyModification(xO,arguments)},spin:function(){return this._applyModification(EO,arguments)},_applyCombination:function(n,t){return n.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(RO,arguments)},complement:function(){return this._applyCombination(_O,arguments)},monochromatic:function(){return this._applyCombination(OO,arguments)},splitcomplement:function(){return this._applyCombination(AO,arguments)},triad:function(){return this._applyCombination(Vv,[3])},tetrad:function(){return this._applyCombination(Vv,[4])}},it.fromRatio=function(n,t){if(Eu(n)=="object"){var i={};for(var o in n)n.hasOwnProperty(o)&&(i[o]=o==="a"?n[o]:ts(n[o]));n=i}return it(n,t)},it.equals=function(n,t){return!(!n||!t)&&it(n).toRgbString()==it(t).toRgbString()},it.random=function(){return it.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},it.mix=function(n,t,i){i=i===0?0:i||50;var o=it(n).toRgb(),l=it(t).toRgb(),c=i/100;return it({r:(l.r-o.r)*c+o.r,g:(l.g-o.g)*c+o.g,b:(l.b-o.b)*c+o.b,a:(l.a-o.a)*c+o.a})},it.readability=function(n,t){var i=it(n),o=it(t);return(Math.max(i.getLuminance(),o.getLuminance())+.05)/(Math.min(i.getLuminance(),o.getLuminance())+.05)},it.isReadable=function(n,t,i){var o,l,c=it.readability(n,t);switch(l=!1,(o=(function(f){var p,h;return p=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),h=(f.size||"small").toLowerCase(),p!=="AA"&&p!=="AAA"&&(p="AA"),h!=="small"&&h!=="large"&&(h="small"),{level:p,size:h}})(i)).level+o.size){case"AAsmall":case"AAAlarge":l=c>=4.5;break;case"AAlarge":l=c>=3;break;case"AAAsmall":l=c>=7}return l},it.mostReadable=function(n,t,i){var o,l,c,f,p=null,h=0;l=(i=i||{}).includeFallbackColors,c=i.level,f=i.size;for(var m=0;m<t.length;m++)(o=it.readability(n,t[m]))>h&&(h=o,p=it(t[m]));return it.isReadable(n,p,{level:c,size:f})||!l?p:(i.includeFallbackColors=!1,it.mostReadable(n,["#fff","#000"],i))};var ih=it.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},CO=it.hexNames=(function(n){var t={};for(var i in n)n.hasOwnProperty(i)&&(t[n[i]]=i);return t})(ih);function Ox(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function Lt(n,t){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(n)&&(n="100%");var i=(function(o){return typeof o=="string"&&o.indexOf("%")!=-1})(n);return n=Math.min(t,Math.max(0,parseFloat(n))),i&&(n=parseInt(n*t,10)/100),Math.abs(n-t)<1e-6?1:n%t/parseFloat(t)}function Bu(n){return Math.min(1,Math.max(0,n))}function Ge(n){return parseInt(n,16)}function yn(n){return n.length==1?"0"+n:""+n}function ts(n){return n<=1&&(n=100*n+"%"),n}function Cx(n){return Math.round(255*parseFloat(n)).toString(16)}function Hv(n){return Ge(n)/255}var Ia,tu,eu,hn=(tu="[\\s|\\(]+("+(Ia="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ia+")[,|\\s]+("+Ia+")\\s*\\)?",eu="[\\s|\\(]+("+Ia+")[,|\\s]+("+Ia+")[,|\\s]+("+Ia+")[,|\\s]+("+Ia+")\\s*\\)?",{CSS_UNIT:new RegExp(Ia),rgb:new RegExp("rgb"+tu),rgba:new RegExp("rgba"+eu),hsl:new RegExp("hsl"+tu),hsla:new RegExp("hsla"+eu),hsv:new RegExp("hsv"+tu),hsva:new RegExp("hsva"+eu),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function ta(n){return!!hn.CSS_UNIT.exec(n)}var DO=function(n,t){var i=(typeof n=="string"?parseInt(n):n)||0;if(i>=-5&&i<=5){var o=i,l=parseFloat(t),c=l+o*(l/5)*-1;return(c==0||c<=Number.EPSILON)&&(c=.1),{animationPeriod:c+"s"}}return{animationPeriod:t}},kO=function(n,t){var i=n||{},o="";switch(t){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var l={};if(i.fontSize){var c=i.fontSize;l=(function(f,p){var h={};for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&p.indexOf(m)<0&&(h[m]=f[m]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(m=Object.getOwnPropertySymbols(f);g<m.length;g++)p.indexOf(m[g])<0&&Object.prototype.propertyIsEnumerable.call(f,m[g])&&(h[m[g]]=f[m[g]])}return h})(i,["fontSize"]),o=c}return{fontSize:o,styles:l}},MO={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},NO=function(n){var t=n.className,i=n.text,o=n.textColor,l=n.staticText,c=n.style;return i?X.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:mn(mn(mn({},l&&MO),o&&{color:o,mixBlendMode:"unset"}),c&&c)},typeof i=="string"&&i.length?i:"loading"):null},Dx="rgb(50, 205, 50)";function PO(n,t){if(t===void 0&&(t=0),n.length===0)throw new Error("Input array cannot be empty!");var i=[];return(function o(l,c){return c===void 0&&(c=0),i.push.apply(i,l),i.length<c&&o(i,c),i.slice(0,c)})(n,t)}se(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);it(Dx).toRgb();Array.from({length:4},(function(n,t){return"--atom-phase".concat(t+1,"-rgb")}));se(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return"--commet-phase".concat(t+1,"-color")}));se(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return"--OP-annulus-phase".concat(t+1,"-color")}));function _d(n){return n&&n.Math===Math&&n}se(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);_d(typeof window=="object"&&window)||_d(typeof self=="object"&&self)||_d(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(n,t){return"--OP-dotted-phase".concat(t+1,"-color")}));se(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return"--OP-spokes-phase".concat(t+1,"-color")}));se(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},(function(n,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")}));se(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]}));se(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return"--four-square-phase".concat(t+1,"-color")}));se(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);var Sr=Array.from({length:4},(function(n,t){return"--mosaic-phase".concat(t+1,"-color")})),jv=function(n){var t,i=kO(n?.style,n?.size),o=i.styles,l=i.fontSize,c=n?.easing,f=DO(n?.speedPlus,"1.5s").animationPeriod,p=Math.round(parseFloat(f)/9*100)/100;p+="s";var h=(function(m){var g={};if(m instanceof Array){for(var y=PO(m,Sr.length),x=0;x<y.length&&!(x>=4);x++)g[Sr[x]]=y[x];return g}try{if(typeof m!="string")throw new Error("Color String expected");for(var S=0;S<Sr.length;S++)g[Sr[S]]=m}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m)," received in <Mosaic /> indicator cannot be processed. Using default instead!")),S=0;S<Sr.length;S++)g[Sr[S]]=Dx}return g})((t=n?.color)!==null&&t!==void 0?t:"");return X.createElement("span",{className:"rli-d-i-b  mosaic-rli-bounding-box",style:mn(mn(mn(mn(mn({},l&&{fontSize:l}),f&&{"--rli-animation-duration":f}),c&&{"--rli-animation-function":c}),h),o),role:"status","aria-live":"polite","aria-label":"Loading"},X.createElement("span",{className:"rli-d-i-b mosaic-indicator",style:mn({},p&&{"--mosaic-skip-interval":p})},X.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube1"}),X.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube2"}),X.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube3"}),X.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube4"}),X.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube5"}),X.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube6"}),X.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube7"}),X.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube8"}),X.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube9"})),X.createElement(NO,{staticText:!0,text:n?.text,textColor:n?.textColor}))};se(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return"--riple-phase".concat(t+1,"-color")}));se(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return"--TD-pulsate-phase".concat(t+1,"-color")}));se(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return"--TD-brick-stack-phase".concat(t+1,"-color")}));se(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return"--TD-bob-phase".concat(t+1,"-color")}));se(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return"--TD-bounce-phase".concat(t+1,"-color")}));se(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return"--shape-phase".concat(t+1,"-color")}));se(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return"--trophySpin-phase".concat(t+1,"-color")}));se(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return"--slab-phase".concat(t+1,"-color")}));se(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(n,t){return"--life-line-phase".concat(t+1,"-color")}));const LO=()=>{};var qv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=function(n){const t=[];let i=0;for(let o=0;o<n.length;o++){let l=n.charCodeAt(o);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&o+1<n.length&&(n.charCodeAt(o+1)&64512)===56320?(l=65536+((l&1023)<<10)+(n.charCodeAt(++o)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},UO=function(n){const t=[];let i=0,o=0;for(;i<n.length;){const l=n[i++];if(l<128)t[o++]=String.fromCharCode(l);else if(l>191&&l<224){const c=n[i++];t[o++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=n[i++],f=n[i++],p=n[i++],h=((l&7)<<18|(c&63)<<12|(f&63)<<6|p&63)-65536;t[o++]=String.fromCharCode(55296+(h>>10)),t[o++]=String.fromCharCode(56320+(h&1023))}else{const c=n[i++],f=n[i++];t[o++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return t.join("")},Mx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let l=0;l<n.length;l+=3){const c=n[l],f=l+1<n.length,p=f?n[l+1]:0,h=l+2<n.length,m=h?n[l+2]:0,g=c>>2,y=(c&3)<<4|p>>4;let x=(p&15)<<2|m>>6,S=m&63;h||(S=64,f||(x=64)),o.push(i[g],i[y],i[x],i[S])}return o.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(kx(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):UO(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let l=0;l<n.length;){const c=i[n.charAt(l++)],p=l<n.length?i[n.charAt(l)]:0;++l;const m=l<n.length?i[n.charAt(l)]:64;++l;const y=l<n.length?i[n.charAt(l)]:64;if(++l,c==null||p==null||m==null||y==null)throw new IO;const x=c<<2|p>>4;if(o.push(x),m!==64){const S=p<<4&240|m>>2;if(o.push(S),y!==64){const w=m<<6&192|y;o.push(w)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class IO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BO=function(n){const t=kx(n);return Mx.encodeByteArray(t,!0)},_u=function(n){return BO(n).replace(/\./g,"")},Nx=function(n){try{return Mx.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=()=>zO().__FIREBASE_DEFAULTS__,HO=()=>{if(typeof process>"u"||typeof qv>"u")return;const n=qv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jO=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Nx(n[1]);return t&&JSON.parse(t)},np=()=>{try{return LO()||VO()||HO()||jO()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Px=n=>np()?.emulatorHosts?.[n],qO=n=>{const t=Px(n);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const o=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),o]:[t.substring(0,i),o]},Lx=()=>np()?.config,Ux=n=>np()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,o)=>{i?this.reject(i):this.resolve(o),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,o))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ix(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},o=t||"demo-project",l=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${o}`,aud:o,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...n};return[_u(JSON.stringify(i)),_u(JSON.stringify(f)),""].join(".")}const ls={};function YO(){const n={prod:[],emulator:[]};for(const t of Object.keys(ls))ls[t]?n.emulator.push(t):n.prod.push(t);return n}function XO(n){let t=document.getElementById(n),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),i=!0),{created:i,element:t}}let Fv=!1;function Bx(n,t){if(typeof window>"u"||typeof document>"u"||!qr(window.location.host)||ls[n]===t||ls[n]||Fv)return;ls[n]=t;function i(x){return`__firebase__banner__${x}`}const o="__firebase__banner",c=YO().prod.length>0;function f(){const x=document.getElementById(o);x&&x.remove()}function p(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function h(x,S){x.setAttribute("width","24"),x.setAttribute("id",S),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function m(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{Fv=!0,f()},x}function g(x,S){x.setAttribute("id",S),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function y(){const x=XO(o),S=i("text"),w=document.getElementById(S)||document.createElement("span"),_=i("learnmore"),R=document.getElementById(_)||document.createElement("a"),C=i("preprendIcon"),M=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const I=x.element;p(I),g(R,_);const K=m();h(M,C),I.append(M,w,R,K),document.body.appendChild(I)}c?(w.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function $O(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ZO(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function QO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WO(){const n=ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function JO(){try{return typeof indexedDB=="object"}catch{return!1}}function tC(){return new Promise((n,t)=>{try{let i=!0;const o="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(o);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(o),n(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{t(l.error?.message||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="FirebaseError";class ca extends Error{constructor(t,i,o){super(i),this.code=t,this.customData=o,this.name=eC,Object.setPrototypeOf(this,ca.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(t,i,o){this.service=t,this.serviceName=i,this.errors=o}create(t,...i){const o=i[0]||{},l=`${this.service}/${t}`,c=this.errors[t],f=c?nC(c,o):"Error",p=`${this.serviceName}: ${f} (${l}).`;return new ca(l,p,o)}}function nC(n,t){return n.replace(aC,(i,o)=>{const l=t[o];return l!=null?String(l):`<${o}?>`})}const aC=/\{\$([^}]+)}/g;function iC(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Lr(n,t){if(n===t)return!0;const i=Object.keys(n),o=Object.keys(t);for(const l of i){if(!o.includes(l))return!1;const c=n[l],f=t[l];if(Gv(c)&&Gv(f)){if(!Lr(c,f))return!1}else if(c!==f)return!1}for(const l of o)if(!i.includes(l))return!1;return!0}function Gv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(n){const t=[];for(const[i,o]of Object.entries(n))Array.isArray(o)?o.forEach(l=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(o));return t.length?"&"+t.join("&"):""}function es(n){const t={};return n.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[l,c]=o.split("=");t[decodeURIComponent(l)]=decodeURIComponent(c)}}),t}function ns(n){const t=n.indexOf("?");if(!t)return"";const i=n.indexOf("#",t);return n.substring(t,i>0?i:void 0)}function rC(n,t){const i=new oC(n,t);return i.subscribe.bind(i)}class oC{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(o=>{this.error(o)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,o){let l;if(t===void 0&&i===void 0&&o===void 0)throw new Error("Missing Observer.");sC(t,["next","error","complete"])?l=t:l={next:t,error:i,complete:o},l.next===void 0&&(l.next=Ad),l.error===void 0&&(l.error=Ad),l.complete===void 0&&(l.complete=Ad);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sC(n,t){if(typeof n!="object"||n===null)return!1;for(const i of t)if(i in n&&typeof n[i]=="function")return!0;return!1}function Ad(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(n){return n&&n._delegate?n._delegate:n}class Oi{constructor(t,i,o){this.name=t,this.instanceFactory=i,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const o=new FO;if(this.instancesDeferred.set(i,o),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&o.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),o=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(cC(t))try{this.getOrInitializeService({instanceIdentifier:Si})}catch{}for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});o.resolve(c)}catch{}}}}clearInstance(t=Si){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Si){return this.instances.has(t)}getOptions(t=Si){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:o,options:i});for(const[c,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);o===p&&f.resolve(l)}return l}onInit(t,i){const o=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(o)??new Set;l.add(t),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&t(c,o),()=>{l.delete(t)}}invokeOnInitCallbacks(t,i){const o=this.onInitCallbacks.get(i);if(o)for(const l of o)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let o=this.instances.get(t);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:uC(t),options:i}),this.instances.set(t,o),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(o,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,o)}catch{}return o||null}normalizeInstanceIdentifier(t=Si){return this.component?this.component.multipleInstances?t:Si:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uC(n){return n===Si?void 0:n}function cC(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new lC(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ct||(Ct={}));const dC={debug:Ct.DEBUG,verbose:Ct.VERBOSE,info:Ct.INFO,warn:Ct.WARN,error:Ct.ERROR,silent:Ct.SILENT},hC=Ct.INFO,pC={[Ct.DEBUG]:"log",[Ct.VERBOSE]:"log",[Ct.INFO]:"info",[Ct.WARN]:"warn",[Ct.ERROR]:"error"},mC=(n,t,...i)=>{if(t<n.logLevel)return;const o=new Date().toISOString(),l=pC[t];if(l)console[l](`[${o}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zx{constructor(t){this.name=t,this._logLevel=hC,this._logHandler=mC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ct))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dC[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ct.DEBUG,...t),this._logHandler(this,Ct.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ct.VERBOSE,...t),this._logHandler(this,Ct.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ct.INFO,...t),this._logHandler(this,Ct.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ct.WARN,...t),this._logHandler(this,Ct.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ct.ERROR,...t),this._logHandler(this,Ct.ERROR,...t)}}const gC=(n,t)=>t.some(i=>n instanceof i);let Yv,Xv;function yC(){return Yv||(Yv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vC(){return Xv||(Xv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vx=new WeakMap,rh=new WeakMap,Hx=new WeakMap,Rd=new WeakMap,ap=new WeakMap;function bC(n){const t=new Promise((i,o)=>{const l=()=>{n.removeEventListener("success",c),n.removeEventListener("error",f)},c=()=>{i(Ga(n.result)),l()},f=()=>{o(n.error),l()};n.addEventListener("success",c),n.addEventListener("error",f)});return t.then(i=>{i instanceof IDBCursor&&Vx.set(i,n)}).catch(()=>{}),ap.set(t,n),t}function xC(n){if(rh.has(n))return;const t=new Promise((i,o)=>{const l=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",f),n.removeEventListener("abort",f)},c=()=>{i(),l()},f=()=>{o(n.error||new DOMException("AbortError","AbortError")),l()};n.addEventListener("complete",c),n.addEventListener("error",f),n.addEventListener("abort",f)});rh.set(n,t)}let oh={get(n,t,i){if(n instanceof IDBTransaction){if(t==="done")return rh.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Hx.get(n);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Ga(n[t])},set(n,t,i){return n[t]=i,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function TC(n){oh=n(oh)}function SC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const o=n.call(Od(this),t,...i);return Hx.set(o,t.sort?t.sort():[t]),Ga(o)}:vC().includes(n)?function(...t){return n.apply(Od(this),t),Ga(Vx.get(this))}:function(...t){return Ga(n.apply(Od(this),t))}}function wC(n){return typeof n=="function"?SC(n):(n instanceof IDBTransaction&&xC(n),gC(n,yC())?new Proxy(n,oh):n)}function Ga(n){if(n instanceof IDBRequest)return bC(n);if(Rd.has(n))return Rd.get(n);const t=wC(n);return t!==n&&(Rd.set(n,t),ap.set(t,n)),t}const Od=n=>ap.get(n);function EC(n,t,{blocked:i,upgrade:o,blocking:l,terminated:c}={}){const f=indexedDB.open(n,t),p=Ga(f);return o&&f.addEventListener("upgradeneeded",h=>{o(Ga(f.result),h.oldVersion,h.newVersion,Ga(f.transaction),h)}),i&&f.addEventListener("blocked",h=>i(h.oldVersion,h.newVersion,h)),p.then(h=>{c&&h.addEventListener("close",()=>c()),l&&h.addEventListener("versionchange",m=>l(m.oldVersion,m.newVersion,m))}).catch(()=>{}),p}const _C=["get","getKey","getAll","getAllKeys","count"],AC=["put","add","delete","clear"],Cd=new Map;function Kv(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Cd.get(t))return Cd.get(t);const i=t.replace(/FromIndex$/,""),o=t!==i,l=AC.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(l||_C.includes(i)))return;const c=async function(f,...p){const h=this.transaction(f,l?"readwrite":"readonly");let m=h.store;return o&&(m=m.index(p.shift())),(await Promise.all([m[i](...p),l&&h.done]))[0]};return Cd.set(t,c),c}TC(n=>({...n,get:(t,i,o)=>Kv(t,i)||n.get(t,i,o),has:(t,i)=>!!Kv(t,i)||n.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(OC(i)){const o=i.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(i=>i).join(" ")}}function OC(n){return n.getComponent()?.type==="VERSION"}const sh="@firebase/app",$v="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new zx("@firebase/app"),CC="@firebase/app-compat",DC="@firebase/analytics-compat",kC="@firebase/analytics",MC="@firebase/app-check-compat",NC="@firebase/app-check",PC="@firebase/auth",LC="@firebase/auth-compat",UC="@firebase/database",IC="@firebase/data-connect",BC="@firebase/database-compat",zC="@firebase/functions",VC="@firebase/functions-compat",HC="@firebase/installations",jC="@firebase/installations-compat",qC="@firebase/messaging",FC="@firebase/messaging-compat",GC="@firebase/performance",YC="@firebase/performance-compat",XC="@firebase/remote-config",KC="@firebase/remote-config-compat",$C="@firebase/storage",ZC="@firebase/storage-compat",QC="@firebase/firestore",WC="@firebase/ai",JC="@firebase/firestore-compat",tD="firebase",eD="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="[DEFAULT]",nD={[sh]:"fire-core",[CC]:"fire-core-compat",[kC]:"fire-analytics",[DC]:"fire-analytics-compat",[NC]:"fire-app-check",[MC]:"fire-app-check-compat",[PC]:"fire-auth",[LC]:"fire-auth-compat",[UC]:"fire-rtdb",[IC]:"fire-data-connect",[BC]:"fire-rtdb-compat",[zC]:"fire-fn",[VC]:"fire-fn-compat",[HC]:"fire-iid",[jC]:"fire-iid-compat",[qC]:"fire-fcm",[FC]:"fire-fcm-compat",[GC]:"fire-perf",[YC]:"fire-perf-compat",[XC]:"fire-rc",[KC]:"fire-rc-compat",[$C]:"fire-gcs",[ZC]:"fire-gcs-compat",[QC]:"fire-fst",[JC]:"fire-fst-compat",[WC]:"fire-vertex","fire-js":"fire-js",[tD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Map,aD=new Map,uh=new Map;function Zv(n,t){try{n.container.addComponent(t)}catch(i){sa.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,i)}}function Ur(n){const t=n.name;if(uh.has(t))return sa.debug(`There were multiple attempts to register component ${t}.`),!1;uh.set(t,n);for(const i of Au.values())Zv(i,n);for(const i of aD.values())Zv(i,n);return!0}function ip(n,t){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(t)}function gn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ya=new Cs("app","Firebase",iD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(t,i,o){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ya.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=eD;function jx(n,t={}){let i=n;typeof t!="object"&&(t={name:t});const o={name:lh,automaticDataCollectionEnabled:!0,...t},l=o.name;if(typeof l!="string"||!l)throw Ya.create("bad-app-name",{appName:String(l)});if(i||(i=Lx()),!i)throw Ya.create("no-options");const c=Au.get(l);if(c){if(Lr(i,c.options)&&Lr(o,c.config))return c;throw Ya.create("duplicate-app",{appName:l})}const f=new fC(l);for(const h of uh.values())f.addComponent(h);const p=new rD(i,o,f);return Au.set(l,p),p}function qx(n=lh){const t=Au.get(n);if(!t&&n===lh&&Lx())return jx();if(!t)throw Ya.create("no-app",{appName:n});return t}function Xa(n,t,i){let o=nD[n]??n;i&&(o+=`-${i}`);const l=o.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const f=[`Unable to register library "${o}" with version "${t}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sa.warn(f.join(" "));return}Ur(new Oi(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD="firebase-heartbeat-database",sD=1,bs="firebase-heartbeat-store";let Dd=null;function Fx(){return Dd||(Dd=EC(oD,sD,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(bs)}catch(i){console.warn(i)}}}}).catch(n=>{throw Ya.create("idb-open",{originalErrorMessage:n.message})})),Dd}async function lD(n){try{const i=(await Fx()).transaction(bs),o=await i.objectStore(bs).get(Gx(n));return await i.done,o}catch(t){if(t instanceof ca)sa.warn(t.message);else{const i=Ya.create("idb-get",{originalErrorMessage:t?.message});sa.warn(i.message)}}}async function Qv(n,t){try{const o=(await Fx()).transaction(bs,"readwrite");await o.objectStore(bs).put(t,Gx(n)),await o.done}catch(i){if(i instanceof ca)sa.warn(i.message);else{const o=Ya.create("idb-set",{originalErrorMessage:i?.message});sa.warn(o.message)}}}function Gx(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=1024,cD=30;class fD{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new hD(i),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Wv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>cD){const l=pD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){sa.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wv(),{heartbeatsToSend:i,unsentEntries:o}=dD(this._heartbeatsCache.heartbeats),l=_u(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return sa.warn(t),""}}}function Wv(){return new Date().toISOString().substring(0,10)}function dD(n,t=uD){const i=[];let o=n.slice();for(const l of n){const c=i.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),Jv(i)>t){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),Jv(i)>t){i.pop();break}o=o.slice(1)}return{heartbeatsToSend:i,unsentEntries:o}}class hD{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JO()?tC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await lD(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const o=await this.read();return Qv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const o=await this.read();return Qv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Jv(n){return _u(JSON.stringify({version:2,heartbeats:n})).length}function pD(n){if(n.length===0)return-1;let t=0,i=n[0].date;for(let o=1;o<n.length;o++)n[o].date<i&&(i=n[o].date,t=o);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(n){Ur(new Oi("platform-logger",t=>new RC(t),"PRIVATE")),Ur(new Oi("heartbeat",t=>new fD(t),"PRIVATE")),Xa(sh,$v,n),Xa(sh,$v,"esm2020"),Xa("fire-js","")}mD("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx="firebasestorage.googleapis.com",Xx="storageBucket",gD=120*1e3,yD=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends ca{constructor(t,i,o=0){super(kd(t),`Firebase Storage: ${i} (${kd(t)})`),this.status_=o,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Gt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return kd(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ft;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ft||(Ft={}));function kd(n){return"storage/"+n}function rp(){const n="An unknown error occurred, please check the error payload for server response.";return new Gt(Ft.UNKNOWN,n)}function vD(n){return new Gt(Ft.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function bD(n){return new Gt(Ft.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xD(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Gt(Ft.UNAUTHENTICATED,n)}function TD(){return new Gt(Ft.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function SD(n){return new Gt(Ft.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function wD(){return new Gt(Ft.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ED(){return new Gt(Ft.CANCELED,"User canceled the upload/download.")}function _D(n){return new Gt(Ft.INVALID_URL,"Invalid URL '"+n+"'.")}function AD(n){return new Gt(Ft.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function RD(){return new Gt(Ft.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Xx+"' property when initializing the app?")}function OD(){return new Gt(Ft.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function CD(){return new Gt(Ft.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function DD(n){return new Gt(Ft.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ch(n){return new Gt(Ft.INVALID_ARGUMENT,n)}function Kx(){return new Gt(Ft.APP_DELETED,"The Firebase app was deleted.")}function kD(n){return new Gt(Ft.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function us(n,t){return new Gt(Ft.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function Qo(n){throw new Gt(Ft.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,i){this.bucket=t,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,i){let o;try{o=De.makeFromUrl(t,i)}catch{return new De(t,"")}if(o.path==="")return o;throw AD(t)}static makeFromUrl(t,i){let o=null;const l="([A-Za-z0-9.\\-_]+)";function c(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const f="(/(.*))?$",p=new RegExp("^gs://"+l+f,"i"),h={bucket:1,path:3};function m(K){K.path_=decodeURIComponent(K.path)}const g="v[A-Za-z0-9_]+",y=i.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",S=new RegExp(`^https?://${y}/${g}/b/${l}/o${x}`,"i"),w={bucket:1,path:3},_=i===Yx?"(?:storage.googleapis.com|storage.cloud.google.com)":i,R="([^?#]*)",C=new RegExp(`^https?://${_}/${l}/${R}`,"i"),I=[{regex:p,indices:h,postModify:c},{regex:S,indices:w,postModify:m},{regex:C,indices:{bucket:1,path:2},postModify:m}];for(let K=0;K<I.length;K++){const z=I[K],J=z.regex.exec(t);if(J){const $=J[z.indices.bucket];let Y=J[z.indices.path];Y||(Y=""),o=new De($,Y),z.postModify(o);break}}if(o==null)throw _D(t);return o}}class MD{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(n,t,i){let o=1,l=null,c=null,f=!1,p=0;function h(){return p===2}let m=!1;function g(...R){m||(m=!0,t.apply(null,R))}function y(R){l=setTimeout(()=>{l=null,n(S,h())},R)}function x(){c&&clearTimeout(c)}function S(R,...C){if(m){x();return}if(R){x(),g.call(null,R,...C);return}if(h()||f){x(),g.call(null,R,...C);return}o<64&&(o*=2);let I;p===1?(p=2,I=0):I=(o+Math.random())*1e3,y(I)}let w=!1;function _(R){w||(w=!0,x(),!m&&(l!==null?(R||(p=2),clearTimeout(l),y(0)):R||(p=1)))}return y(0),c=setTimeout(()=>{f=!0,_(!0)},i),_}function PD(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(n){return n!==void 0}function UD(n){return typeof n=="object"&&!Array.isArray(n)}function op(n){return typeof n=="string"||n instanceof String}function tb(n){return sp()&&n instanceof Blob}function sp(){return typeof Blob<"u"}function fh(n,t,i,o){if(o<t)throw ch(`Invalid value for '${n}'. Expected ${t} or greater.`);if(o>i)throw ch(`Invalid value for '${n}'. Expected ${i} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n,t,i){let o=t;return i==null&&(o=`https://${t}`),`${i}://${o}/v0${n}`}function $x(n){const t=encodeURIComponent;let i="?";for(const o in n)if(n.hasOwnProperty(o)){const l=t(o)+"="+t(n[o]);i=i+l+"&"}return i=i.slice(0,-1),i}var Ri;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ri||(Ri={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(n,t){const i=n>=500&&n<600,l=[408,429].indexOf(n)!==-1,c=t.indexOf(n)!==-1;return i||l||c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(t,i,o,l,c,f,p,h,m,g,y,x=!0,S=!1){this.url_=t,this.method_=i,this.headers_=o,this.body_=l,this.successCodes_=c,this.additionalRetryCodes_=f,this.callback_=p,this.errorCallback_=h,this.timeout_=m,this.progressCallback_=g,this.connectionFactory_=y,this.retry=x,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,_)=>{this.resolve_=w,this.reject_=_,this.start_()})}start_(){const t=(o,l)=>{if(l){o(!1,new nu(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const f=p=>{const h=p.loaded,m=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,m)};this.progressCallback_!==null&&c.addUploadProgressListener(f),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(f),this.pendingConnection_=null;const p=c.getErrorCode()===Ri.NO_ERROR,h=c.getStatus();if(!p||ID(h,this.additionalRetryCodes_)&&this.retry){const g=c.getErrorCode()===Ri.ABORT;o(!1,new nu(!1,null,g));return}const m=this.successCodes_.indexOf(h)!==-1;o(!0,new nu(m,c))})},i=(o,l)=>{const c=this.resolve_,f=this.reject_,p=l.connection;if(l.wasSuccessCode)try{const h=this.callback_(p,p.getResponse());LD(h)?c(h):c()}catch(h){f(h)}else if(p!==null){const h=rp();h.serverResponse=p.getErrorText(),this.errorCallback_?f(this.errorCallback_(p,h)):f(h)}else if(l.canceled){const h=this.appDelete_?Kx():ED();f(h)}else{const h=wD();f(h)}};this.canceled_?i(!1,new nu(!1,null,!0)):this.backoffId_=ND(t,i,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&PD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nu{constructor(t,i,o){this.wasSuccessCode=t,this.connection=i,this.canceled=!!o}}function zD(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function VD(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function HD(n,t){t&&(n["X-Firebase-GMPID"]=t)}function jD(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function qD(n,t,i,o,l,c,f=!0,p=!1){const h=$x(n.urlParams),m=n.url+h,g=Object.assign({},n.headers);return HD(g,t),zD(g,i),VD(g,c),jD(g,o),new BD(m,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,l,f,p)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function GD(...n){const t=FD();if(t!==void 0){const i=new t;for(let o=0;o<n.length;o++)i.append(n[o]);return i.getBlob()}else{if(sp())return new Blob(n);throw new Gt(Ft.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function YD(n,t,i){return n.webkitSlice?n.webkitSlice(t,i):n.mozSlice?n.mozSlice(t,i):n.slice?n.slice(t,i):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(n){if(typeof atob>"u")throw DD("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Md{constructor(t,i){this.data=t,this.contentType=i||null}}function KD(n,t){switch(n){case Dn.RAW:return new Md(Zx(t));case Dn.BASE64:case Dn.BASE64URL:return new Md(Qx(n,t));case Dn.DATA_URL:return new Md(ZD(t),QD(t))}throw rp()}function Zx(n){const t=[];for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);if(o<=127)t.push(o);else if(o<=2047)t.push(192|o>>6,128|o&63);else if((o&64512)===55296)if(!(i<n.length-1&&(n.charCodeAt(i+1)&64512)===56320))t.push(239,191,189);else{const c=o,f=n.charCodeAt(++i);o=65536|(c&1023)<<10|f&1023,t.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|o&63)}else(o&64512)===56320?t.push(239,191,189):t.push(224|o>>12,128|o>>6&63,128|o&63)}return new Uint8Array(t)}function $D(n){let t;try{t=decodeURIComponent(n)}catch{throw us(Dn.DATA_URL,"Malformed data URL.")}return Zx(t)}function Qx(n,t){switch(n){case Dn.BASE64:{const l=t.indexOf("-")!==-1,c=t.indexOf("_")!==-1;if(l||c)throw us(n,"Invalid character '"+(l?"-":"_")+"' found: is it base64url encoded?");break}case Dn.BASE64URL:{const l=t.indexOf("+")!==-1,c=t.indexOf("/")!==-1;if(l||c)throw us(n,"Invalid character '"+(l?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let i;try{i=XD(t)}catch(l){throw l.message.includes("polyfill")?l:us(n,"Invalid character found")}const o=new Uint8Array(i.length);for(let l=0;l<i.length;l++)o[l]=i.charCodeAt(l);return o}class Wx{constructor(t){this.base64=!1,this.contentType=null;const i=t.match(/^data:([^,]+)?,/);if(i===null)throw us(Dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const o=i[1]||null;o!=null&&(this.base64=WD(o,";base64"),this.contentType=this.base64?o.substring(0,o.length-7):o),this.rest=t.substring(t.indexOf(",")+1)}}function ZD(n){const t=new Wx(n);return t.base64?Qx(Dn.BASE64,t.rest):$D(t.rest)}function QD(n){return new Wx(n).contentType}function WD(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,i){let o=0,l="";tb(t)?(this.data_=t,o=t.size,l=t.type):t instanceof ArrayBuffer?(i?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),o=this.data_.length):t instanceof Uint8Array&&(i?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),o=t.length),this.size_=o,this.type_=l}size(){return this.size_}type(){return this.type_}slice(t,i){if(tb(this.data_)){const o=this.data_,l=YD(o,t,i);return l===null?null:new Va(l)}else{const o=new Uint8Array(this.data_.buffer,t,i-t);return new Va(o,!0)}}static getBlob(...t){if(sp()){const i=t.map(o=>o instanceof Va?o.data_:o);return new Va(GD.apply(null,i))}else{const i=t.map(f=>op(f)?KD(Dn.RAW,f).data:f.data_);let o=0;i.forEach(f=>{o+=f.byteLength});const l=new Uint8Array(o);let c=0;return i.forEach(f=>{for(let p=0;p<f.length;p++)l[c++]=f[p]}),new Va(l,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n){let t;try{t=JSON.parse(n)}catch{return null}return UD(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JD(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function tk(n,t){const i=t.split("/").filter(o=>o.length>0).join("/");return n.length===0?i:n+"/"+i}function Jx(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(n,t){return t}class Oe{constructor(t,i,o,l){this.server=t,this.local=i||t,this.writable=!!o,this.xform=l||ek}}let au=null;function nk(n){return!op(n)||n.length<2?n:Jx(n)}function tT(){if(au)return au;const n=[];n.push(new Oe("bucket")),n.push(new Oe("generation")),n.push(new Oe("metageneration")),n.push(new Oe("name","fullPath",!0));function t(c,f){return nk(f)}const i=new Oe("name");i.xform=t,n.push(i);function o(c,f){return f!==void 0?Number(f):f}const l=new Oe("size");return l.xform=o,n.push(l),n.push(new Oe("timeCreated")),n.push(new Oe("updated")),n.push(new Oe("md5Hash",null,!0)),n.push(new Oe("cacheControl",null,!0)),n.push(new Oe("contentDisposition",null,!0)),n.push(new Oe("contentEncoding",null,!0)),n.push(new Oe("contentLanguage",null,!0)),n.push(new Oe("contentType",null,!0)),n.push(new Oe("metadata","customMetadata",!0)),au=n,au}function ak(n,t){function i(){const o=n.bucket,l=n.fullPath,c=new De(o,l);return t._makeStorageReference(c)}Object.defineProperty(n,"ref",{get:i})}function ik(n,t,i){const o={};o.type="file";const l=i.length;for(let c=0;c<l;c++){const f=i[c];o[f.local]=f.xform(o,t[f.server])}return ak(o,n),o}function eT(n,t,i){const o=lp(t);return o===null?null:ik(n,o,i)}function rk(n,t,i,o){const l=lp(t);if(l===null||!op(l.downloadTokens))return null;const c=l.downloadTokens;if(c.length===0)return null;const f=encodeURIComponent;return c.split(",").map(m=>{const g=n.bucket,y=n.fullPath,x="/b/"+f(g)+"/o/"+f(y),S=zu(x,i,o),w=$x({alt:"media",token:m});return S+w})[0]}function ok(n,t){const i={},o=t.length;for(let l=0;l<o;l++){const c=t[l];c.writable&&(i[c.server]=n[c.local])}return JSON.stringify(i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="prefixes",nb="items";function sk(n,t,i){const o={prefixes:[],items:[],nextPageToken:i.nextPageToken};if(i[eb])for(const l of i[eb]){const c=l.replace(/\/$/,""),f=n._makeStorageReference(new De(t,c));o.prefixes.push(f)}if(i[nb])for(const l of i[nb]){const c=n._makeStorageReference(new De(t,l.name));o.items.push(c)}return o}function lk(n,t,i){const o=lp(i);return o===null?null:sk(n,t,o)}class up{constructor(t,i,o,l){this.url=t,this.method=i,this.handler=o,this.timeout=l,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(n){if(!n)throw rp()}function uk(n,t){function i(o,l){const c=eT(n,l,t);return cp(c!==null),c}return i}function ck(n,t){function i(o,l){const c=lk(n,t,l);return cp(c!==null),c}return i}function fk(n,t){function i(o,l){const c=eT(n,l,t);return cp(c!==null),rk(c,l,n.host,n._protocol)}return i}function fp(n){function t(i,o){let l;return i.getStatus()===401?i.getErrorText().includes("Firebase App Check token is invalid")?l=TD():l=xD():i.getStatus()===402?l=bD(n.bucket):i.getStatus()===403?l=SD(n.path):l=o,l.status=i.getStatus(),l.serverResponse=o.serverResponse,l}return t}function dk(n){const t=fp(n);function i(o,l){let c=t(o,l);return o.getStatus()===404&&(c=vD(n.path)),c.serverResponse=l.serverResponse,c}return i}function hk(n,t,i,o,l){const c={};t.isRoot?c.prefix="":c.prefix=t.path+"/",i.length>0&&(c.delimiter=i),o&&(c.pageToken=o),l&&(c.maxResults=l);const f=t.bucketOnlyServerUrl(),p=zu(f,n.host,n._protocol),h="GET",m=n.maxOperationRetryTime,g=new up(p,h,ck(n,t.bucket),m);return g.urlParams=c,g.errorHandler=fp(t),g}function pk(n,t,i){const o=t.fullServerUrl(),l=zu(o,n.host,n._protocol),c="GET",f=n.maxOperationRetryTime,p=new up(l,c,fk(n,i),f);return p.errorHandler=dk(t),p}function mk(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function gk(n,t,i){const o=Object.assign({},i);return o.fullPath=n.path,o.size=t.size(),o.contentType||(o.contentType=mk(null,t)),o}function yk(n,t,i,o,l){const c=t.bucketOnlyServerUrl(),f={"X-Goog-Upload-Protocol":"multipart"};function p(){let I="";for(let K=0;K<2;K++)I=I+Math.random().toString().slice(2);return I}const h=p();f["Content-Type"]="multipart/related; boundary="+h;const m=gk(t,o,l),g=ok(m,i),y="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+g+`\r
--`+h+`\r
Content-Type: `+m.contentType+`\r
\r
`,x=`\r
--`+h+"--",S=Va.getBlob(y,o,x);if(S===null)throw OD();const w={name:m.fullPath},_=zu(c,n.host,n._protocol),R="POST",C=n.maxUploadRetryTime,M=new up(_,R,uk(n,i),C);return M.urlParams=w,M.headers=f,M.body=S.uploadData(),M.errorHandler=fp(t),M}class vk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ri.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ri.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ri.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,i,o,l,c){if(this.sent_)throw Qo("cannot .send() more than once");if(qr(t)&&o&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(i,t,!0),c!==void 0)for(const f in c)c.hasOwnProperty(f)&&this.xhr_.setRequestHeader(f,c[f].toString());return l!==void 0?this.xhr_.send(l):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class bk extends vk{initXhr(){this.xhr_.responseType="text"}}function dp(){return new bk}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,i){this._service=t,i instanceof De?this._location=i:this._location=De.makeFromUrl(i,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,i){return new Ci(t,i)}get root(){const t=new De(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Jx(this._location.path)}get storage(){return this._service}get parent(){const t=JD(this._location.path);if(t===null)return null;const i=new De(this._location.bucket,t);return new Ci(this._service,i)}_throwIfRoot(t){if(this._location.path==="")throw kD(t)}}function xk(n,t,i){n._throwIfRoot("uploadBytes");const o=yk(n.storage,n._location,tT(),new Va(t,!0),i);return n.storage.makeRequestWithTokens(o,dp).then(l=>({metadata:l,ref:n}))}function Tk(n){const t={prefixes:[],items:[]};return nT(n,t).then(()=>t)}async function nT(n,t,i){const l=await Sk(n,{pageToken:i});t.prefixes.push(...l.prefixes),t.items.push(...l.items),l.nextPageToken!=null&&await nT(n,t,l.nextPageToken)}function Sk(n,t){t!=null&&typeof t.maxResults=="number"&&fh("options.maxResults",1,1e3,t.maxResults);const i=t||{},o=hk(n.storage,n._location,"/",i.pageToken,i.maxResults);return n.storage.makeRequestWithTokens(o,dp)}function wk(n){n._throwIfRoot("getDownloadURL");const t=pk(n.storage,n._location,tT());return n.storage.makeRequestWithTokens(t,dp).then(i=>{if(i===null)throw CD();return i})}function Ek(n,t){const i=tk(n._location.path,t),o=new De(n._location.bucket,i);return new Ci(n.storage,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(n){return/^[A-Za-z]+:\/\//.test(n)}function Ak(n,t){return new Ci(n,t)}function aT(n,t){if(n instanceof hp){const i=n;if(i._bucket==null)throw RD();const o=new Ci(i,i._bucket);return t!=null?aT(o,t):o}else return t!==void 0?Ek(n,t):n}function Rk(n,t){if(t&&_k(t)){if(n instanceof hp)return Ak(n,t);throw ch("To use ref(service, url), the first argument must be a Storage instance.")}else return aT(n,t)}function ab(n,t){const i=t?.[Xx];return i==null?null:De.makeFromBucketSpec(i,n)}function Ok(n,t,i,o={}){n.host=`${t}:${i}`;const l=qr(t);l&&(Ix(`https://${n.host}/b`),Bx("Storage",!0)),n._isUsingEmulator=!0,n._protocol=l?"https":"http";const{mockUserToken:c}=o;c&&(n._overrideAuthToken=typeof c=="string"?c:GO(c,n.app.options.projectId))}class hp{constructor(t,i,o,l,c,f=!1){this.app=t,this._authProvider=i,this._appCheckProvider=o,this._url=l,this._firebaseVersion=c,this._isUsingEmulator=f,this._bucket=null,this._host=Yx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gD,this._maxUploadRetryTime=yD,this._requests=new Set,l!=null?this._bucket=De.makeFromBucketSpec(l,this._host):this._bucket=ab(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=De.makeFromBucketSpec(this._url,t):this._bucket=ab(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){fh("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){fh("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const i=await t.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ci(this,t)}_makeRequest(t,i,o,l,c=!0){if(this._deleted)return new MD(Kx());{const f=qD(t,this._appId,o,l,i,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(t,i){const[o,l]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,i,o,l).getPromise()}}const ib="@firebase/storage",rb="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="storage";function rT(n,t,i){return n=sn(n),xk(n,t,i)}function pp(n){return n=sn(n),Tk(n)}function oT(n){return n=sn(n),wk(n)}function Gr(n,t){return n=sn(n),Rk(n,t)}function Ck(n=qx(),t){n=sn(n);const o=ip(n,iT).getImmediate({identifier:t}),l=qO("storage");return l&&Dk(o,...l),o}function Dk(n,t,i,o={}){Ok(n,t,i,o)}function kk(n,{instanceIdentifier:t}){const i=n.getProvider("app").getImmediate(),o=n.getProvider("auth-internal"),l=n.getProvider("app-check-internal");return new hp(i,o,l,t,Fr)}function Mk(){Ur(new Oi(iT,kk,"PUBLIC").setMultipleInstances(!0)),Xa(ib,rb,""),Xa(ib,rb,"esm2020")}Mk();var Nk="firebase",Pk="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xa(Nk,Pk,"app");function sT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lk=sT,lT=new Cs("auth","Firebase",sT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new zx("@firebase/auth");function Uk(n,...t){Ru.logLevel<=Ct.WARN&&Ru.warn(`Auth (${Fr}): ${n}`,...t)}function du(n,...t){Ru.logLevel<=Ct.ERROR&&Ru.error(`Auth (${Fr}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(n,...t){throw mp(n,...t)}function Nn(n,...t){return mp(n,...t)}function uT(n,t,i){const o={...Lk(),[t]:i};return new Cs("auth","Firebase",o).create(t,{appName:n.name})}function Ka(n){return uT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mp(n,...t){if(typeof n!="string"){const i=t[0],o=[...t.slice(1)];return o[0]&&(o[0].appName=n.name),n._errorFactory.create(i,...o)}return lT.create(n,...t)}function ut(n,t,...i){if(!n)throw mp(t,...i)}function ea(n){const t="INTERNAL ASSERTION FAILED: "+n;throw du(t),new Error(t)}function la(n,t){n||ea(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(){return typeof self<"u"&&self.location?.href||""}function Ik(){return ob()==="http:"||ob()==="https:"}function ob(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ik()||ZO()||"connection"in navigator)?navigator.onLine:!0}function zk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,i){this.shortDelay=t,this.longDelay=i,la(i>t,"Short delay should be less than long delay!"),this.isMobile=KO()||QO()}get(){return Bk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(n,t){la(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{static initialize(t,i,o){this.fetchImpl=t,i&&(this.headersImpl=i),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ea("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ea("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ea("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jk=new ks(3e4,6e4);function Ni(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function Wa(n,t,i,o,l={}){return fT(n,l,async()=>{let c={},f={};o&&(t==="GET"?f=o:c={body:JSON.stringify(o)});const p=Ds({key:n.config.apiKey,...f}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const m={method:t,headers:h,...c};return $O()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&qr(n.emulatorConfig.host)&&(m.credentials="include"),cT.fetch()(await dT(n,n.config.apiHost,i,p),m)})}async function fT(n,t,i){n._canInitEmulator=!1;const o={...Vk,...t};try{const l=new Fk(n),c=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw iu(n,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const p=c.ok?f.errorMessage:f.error.message,[h,m]=p.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw iu(n,"credential-already-in-use",f);if(h==="EMAIL_EXISTS")throw iu(n,"email-already-in-use",f);if(h==="USER_DISABLED")throw iu(n,"user-disabled",f);const g=o[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw uT(n,g,m);xn(n,g)}}catch(l){if(l instanceof ca)throw l;xn(n,"network-request-failed",{message:String(l)})}}async function Vu(n,t,i,o,l={}){const c=await Wa(n,t,i,o,l);return"mfaPendingCredential"in c&&xn(n,"multi-factor-auth-required",{_serverResponse:c}),c}async function dT(n,t,i,o){const l=`${t}${i}?${o}`,c=n,f=c.config.emulator?gp(n.config,l):`${n.config.apiScheme}://${l}`;return Hk.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}function qk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,o)=>{this.timer=setTimeout(()=>o(Nn(this.auth,"network-request-failed")),jk.get())})}}function iu(n,t,i){const o={appName:n.name};i.email&&(o.email=i.email),i.phoneNumber&&(o.phoneNumber=i.phoneNumber);const l=Nn(n,t,o);return l.customData._tokenResponse=i,l}function sb(n){return n!==void 0&&n.enterprise!==void 0}class Gk{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return qk(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Yk(n,t){return Wa(n,"GET","/v2/recaptchaConfig",Ni(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(n,t){return Wa(n,"POST","/v1/accounts:delete",t)}async function Ou(n,t){return Wa(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Kk(n,t=!1){const i=sn(n),o=await i.getIdToken(t),l=yp(o);ut(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,f=c?.sign_in_provider;return{claims:l,token:o,authTime:cs(Nd(l.auth_time)),issuedAtTime:cs(Nd(l.iat)),expirationTime:cs(Nd(l.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Nd(n){return Number(n)*1e3}function yp(n){const[t,i,o]=n.split(".");if(t===void 0||i===void 0||o===void 0)return du("JWT malformed, contained fewer than 3 sections"),null;try{const l=Nx(i);return l?JSON.parse(l):(du("Failed to decode base64 JWT payload"),null)}catch(l){return du("Caught error parsing JWT payload as JSON",l?.toString()),null}}function lb(n){const t=yp(n);return ut(t,"internal-error"),ut(typeof t.exp<"u","internal-error"),ut(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(n,t,i=!1){if(i)return t;try{return await t}catch(o){throw o instanceof ca&&$k(o)&&n.auth.currentUser===n&&await n.auth.signOut(),o}}function $k({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=cs(this.lastLoginAt),this.creationTime=cs(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cu(n){const t=n.auth,i=await n.getIdToken(),o=await xs(n,Ou(t,{idToken:i}));ut(o?.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=l.providerUserInfo?.length?hT(l.providerUserInfo):[],f=Wk(n.providerData,c),p=n.isAnonymous,h=!(n.email&&l.passwordHash)&&!f?.length,m=p?h:!1,g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new hh(l.createdAt,l.lastLoginAt),isAnonymous:m};Object.assign(n,g)}async function Qk(n){const t=sn(n);await Cu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Wk(n,t){return[...n.filter(o=>!t.some(l=>l.providerId===o.providerId)),...t]}function hT(n){return n.map(({providerId:t,...i})=>({providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(n,t){const i=await fT(n,{},async()=>{const o=Ds({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=n.config,f=await dT(n,l,"/v1/token",`key=${c}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:p,body:o};return n.emulatorConfig&&qr(n.emulatorConfig.host)&&(h.credentials="include"),cT.fetch()(f,h)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function t3(n,t){return Wa(n,"POST","/v2/accounts:revokeToken",Ni(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ut(t.idToken,"internal-error"),ut(typeof t.idToken<"u","internal-error"),ut(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):lb(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){ut(t.length!==0,"internal-error");const i=lb(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ut(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:o,refreshToken:l,expiresIn:c}=await Jk(t,i);this.updateTokensAndExpiration(o,l,Number(c))}updateTokensAndExpiration(t,i,o){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(t,i){const{refreshToken:o,accessToken:l,expirationTime:c}=i,f=new Dr;return o&&(ut(typeof o=="string","internal-error",{appName:t}),f.refreshToken=o),l&&(ut(typeof l=="string","internal-error",{appName:t}),f.accessToken=l),c&&(ut(typeof c=="number","internal-error",{appName:t}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return ea("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n,t){ut(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class vn{constructor({uid:t,auth:i,stsTokenManager:o,...l}){this.providerId="firebase",this.proactiveRefresh=new Zk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new hh(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const i=await xs(this,this.stsTokenManager.getToken(this.auth,t));return ut(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return Kk(this,t)}reload(){return Qk(this)}_assign(t){this!==t&&(ut(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>({...i})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new vn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(t){ut(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let o=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),o=!0),i&&await Cu(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Ka(this.auth));const t=await this.getIdToken();return await xs(this,Xk(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){const o=i.displayName??void 0,l=i.email??void 0,c=i.phoneNumber??void 0,f=i.photoURL??void 0,p=i.tenantId??void 0,h=i._redirectEventId??void 0,m=i.createdAt??void 0,g=i.lastLoginAt??void 0,{uid:y,emailVerified:x,isAnonymous:S,providerData:w,stsTokenManager:_}=i;ut(y&&_,t,"internal-error");const R=Dr.fromJSON(this.name,_);ut(typeof y=="string",t,"internal-error"),Ba(o,t.name),Ba(l,t.name),ut(typeof x=="boolean",t,"internal-error"),ut(typeof S=="boolean",t,"internal-error"),Ba(c,t.name),Ba(f,t.name),Ba(p,t.name),Ba(h,t.name),Ba(m,t.name),Ba(g,t.name);const C=new vn({uid:y,auth:t,email:l,emailVerified:x,displayName:o,isAnonymous:S,photoURL:f,phoneNumber:c,tenantId:p,stsTokenManager:R,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(C.providerData=w.map(M=>({...M}))),h&&(C._redirectEventId=h),C}static async _fromIdTokenResponse(t,i,o=!1){const l=new Dr;l.updateFromServerResponse(i);const c=new vn({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:o});return await Cu(c),c}static async _fromGetAccountInfoResponse(t,i,o){const l=i.users[0];ut(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?hT(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!c?.length,p=new Dr;p.updateFromIdToken(o);const h=new vn({uid:l.localId,auth:t,stsTokenManager:p,isAnonymous:f}),m={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new hh(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(h,m),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=new Map;function na(n){la(n instanceof Function,"Expected a class definition");let t=ub.get(n);return t?(la(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,ub.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}pT.type="NONE";const cb=pT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n,t,i){return`firebase:${n}:${t}:${i}`}class kr{constructor(t,i,o){this.persistence=t,this.auth=i,this.userKey=o;const{config:l,name:c}=this.auth;this.fullUserKey=hu(this.userKey,l.apiKey,c),this.fullPersistenceKey=hu("persistence",l.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await Ou(this.auth,{idToken:t}).catch(()=>{});return i?vn._fromGetAccountInfoResponse(this.auth,i,t):null}return vn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,o="authUser"){if(!i.length)return new kr(na(cb),t,o);const l=(await Promise.all(i.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let c=l[0]||na(cb);const f=hu(o,t.config.apiKey,t.name);let p=null;for(const m of i)try{const g=await m._get(f);if(g){let y;if(typeof g=="string"){const x=await Ou(t,{idToken:g}).catch(()=>{});if(!x)break;y=await vn._fromGetAccountInfoResponse(t,x,g)}else y=vn._fromJSON(t,g);m!==c&&(p=y),c=m;break}}catch{}const h=l.filter(m=>m._shouldAllowMigration);return!c._shouldAllowMigration||!h.length?new kr(c,t,o):(c=h[0],p&&await c._set(f,p.toJSON()),await Promise.all(i.map(async m=>{if(m!==c)try{await m._remove(f)}catch{}})),new kr(c,t,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(mT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xT(t))return"Blackberry";if(TT(t))return"Webos";if(gT(t))return"Safari";if((t.includes("chrome/")||yT(t))&&!t.includes("edge/"))return"Chrome";if(bT(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=n.match(i);if(o?.length===2)return o[1]}return"Other"}function mT(n=ke()){return/firefox\//i.test(n)}function gT(n=ke()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yT(n=ke()){return/crios\//i.test(n)}function vT(n=ke()){return/iemobile/i.test(n)}function bT(n=ke()){return/android/i.test(n)}function xT(n=ke()){return/blackberry/i.test(n)}function TT(n=ke()){return/webos/i.test(n)}function vp(n=ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function e3(n=ke()){return vp(n)&&!!window.navigator?.standalone}function n3(){return WO()&&document.documentMode===10}function ST(n=ke()){return vp(n)||bT(n)||TT(n)||xT(n)||/windows phone/i.test(n)||vT(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(n,t=[]){let i;switch(n){case"Browser":i=fb(ke());break;case"Worker":i=`${fb(ke())}-${n}`;break;default:i=n}const o=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${Fr}/${o}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const o=c=>new Promise((f,p)=>{try{const h=t(c);f(h)}catch(h){p(h)}});o.onAbort=i,this.queue.push(o);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const o of this.queue)await o(t),o.onAbort&&i.push(o.onAbort)}catch(o){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i3(n,t={}){return Wa(n,"GET","/v2/passwordPolicy",Ni(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r3=6;class o3{constructor(t){const i=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??r3,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,i),this.validatePasswordCharacterOptions(t,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(t,i){const o=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;o&&(i.meetsMinPasswordLength=t.length>=o),l&&(i.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let o;for(let l=0;l<t.length;l++)o=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(t,i,o,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{constructor(t,i,o,l){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=o,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new db(this),this.idTokenSubscription=new db(this),this.beforeStateQueue=new a3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=na(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await kr.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await Ou(this,{idToken:t}),o=await vn._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(o)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(gn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,f=o?._redirectEventId,p=await this.tryRedirectSignIn(t);(!c||c===f)&&p?.user&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ut(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Cu(t)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=zk()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(gn(this.app))return Promise.reject(Ka(this));const i=t?sn(t):null;return i&&ut(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&ut(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Ka(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return gn(this.app)?Promise.reject(Ka(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(na(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await i3(this),i=new o3(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Cs("auth","Firebase",t())}onAuthStateChanged(t,i,o){return this.registerStateListener(this.authStateSubscription,t,i,o)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,o){return this.registerStateListener(this.idTokenSubscription,t,i,o)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const o=this.onAuthStateChanged(()=>{o(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(o.tenantId=this.tenantId),await t3(this,o)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,i){const o=await this.getOrInitRedirectPersistenceManager(i);return t===null?o.removeCurrentUser():o.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&na(t)||this._popupRedirectResolver;ut(i,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[na(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,o,l){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ut(p,this,"internal-error"),p.then(()=>{f||c(this.currentUser)}),typeof i=="function"){const h=t.addObserver(i,o,l);return()=>{f=!0,h()}}else{const h=t.addObserver(i);return()=>{f=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ut(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&Uk(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Yr(n){return sn(n)}class db{constructor(t){this.auth=t,this.observer=null,this.addObserver=rC(i=>this.observer=i)}get next(){return ut(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function l3(n){Hu=n}function ET(n){return Hu.loadJS(n)}function u3(){return Hu.recaptchaEnterpriseScript}function c3(){return Hu.gapiScript}function f3(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class d3{constructor(){this.enterprise=new h3}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class h3{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const p3="recaptcha-enterprise",_T="NO_RECAPTCHA";class m3{constructor(t){this.type=p3,this.auth=Yr(t)}async verify(t="verify",i=!1){async function o(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(f,p)=>{Yk(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const m=new Gk(h);return c.tenantId==null?c._agentRecaptchaConfig=m:c._tenantRecaptchaConfigs[c.tenantId]=m,f(m.siteKey)}}).catch(h=>{p(h)})})}function l(c,f,p){const h=window.grecaptcha;sb(h)?h.enterprise.ready(()=>{h.enterprise.execute(c,{action:t}).then(m=>{f(m)}).catch(()=>{f(_T)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new d3().execute("siteKey",{action:"verify"}):new Promise((c,f)=>{o(this.auth).then(p=>{if(!i&&sb(window.grecaptcha))l(p,c,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let h=u3();h.length!==0&&(h+=p),ET(h).then(()=>{l(p,c,f)}).catch(m=>{f(m)})}}).catch(p=>{f(p)})})}}async function hb(n,t,i,o=!1,l=!1){const c=new m3(n);let f;if(l)f=_T;else try{f=await c.verify(i)}catch{f=await c.verify(i,!0)}const p={...t};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const h=p.phoneEnrollmentInfo.phoneNumber,m=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:m,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const h=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return o?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function pb(n,t,i,o,l){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await hb(n,t,i,i==="getOobCode");return o(n,c)}else return o(n,t).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await hb(n,t,i,i==="getOobCode");return o(n,f)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g3(n,t){const i=ip(n,"auth");if(i.isInitialized()){const l=i.getImmediate(),c=i.getOptions();if(Lr(c,t??{}))return l;xn(l,"already-initialized")}return i.initialize({options:t})}function y3(n,t){const i=t?.persistence||[],o=(Array.isArray(i)?i:[i]).map(na);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(o,t?.popupRedirectResolver)}function v3(n,t,i){const o=Yr(n);ut(/^https?:\/\//.test(t),o,"invalid-emulator-scheme");const l=!1,c=AT(t),{host:f,port:p}=b3(t),h=p===null?"":`:${p}`,m={url:`${c}//${f}${h}/`},g=Object.freeze({host:f,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!o._canInitEmulator){ut(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),ut(Lr(m,o.config.emulator)&&Lr(g,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=m,o.emulatorConfig=g,o.settings.appVerificationDisabledForTesting=!0,qr(f)?(Ix(`${c}//${f}${h}`),Bx("Auth",!0)):x3()}function AT(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function b3(n){const t=AT(n),i=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!i)return{host:"",port:null};const o=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(o);if(l){const c=l[1];return{host:c,port:mb(o.substr(c.length+1))}}else{const[c,f]=o.split(":");return{host:c,port:mb(f)}}}function mb(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function x3(){function n(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return ea("not implemented")}_getIdTokenResponse(t){return ea("not implemented")}_linkToIdToken(t,i){return ea("not implemented")}_getReauthenticationResolver(t){return ea("not implemented")}}async function T3(n,t){return Wa(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S3(n,t){return Vu(n,"POST","/v1/accounts:signInWithPassword",Ni(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w3(n,t){return Vu(n,"POST","/v1/accounts:signInWithEmailLink",Ni(n,t))}async function E3(n,t){return Vu(n,"POST","/v1/accounts:signInWithEmailLink",Ni(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends bp{constructor(t,i,o,l=null){super("password",o),this._email=t,this._password=i,this._tenantId=l}static _fromEmailAndPassword(t,i){return new Ts(t,i,"password")}static _fromEmailAndCode(t,i,o=null){return new Ts(t,i,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pb(t,i,"signInWithPassword",S3);case"emailLink":return w3(t,{email:this._email,oobCode:this._password});default:xn(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const o={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pb(t,o,"signUpPassword",T3);case"emailLink":return E3(t,{idToken:i,email:this._email,oobCode:this._password});default:xn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(n,t){return Vu(n,"POST","/v1/accounts:signInWithIdp",Ni(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _3="http://localhost";class Di extends bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Di(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):xn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:o,signInMethod:l,...c}=i;if(!o||!l)return null;const f=new Di(o,l);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(t){const i=this.buildRequest();return Mr(t,i)}_linkToIdToken(t,i){const o=this.buildRequest();return o.idToken=i,Mr(t,o)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Mr(t,i)}buildRequest(){const t={requestUri:_3,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=Ds(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A3(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function R3(n){const t=es(ns(n)).link,i=t?es(ns(t)).deep_link_id:null,o=es(ns(n)).deep_link_id;return(o?es(ns(o)).link:null)||o||i||t||n}class xp{constructor(t){const i=es(ns(t)),o=i.apiKey??null,l=i.oobCode??null,c=A3(i.mode??null);ut(o&&l&&c,"argument-error"),this.apiKey=o,this.operation=c,this.code=l,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(t){const i=R3(t);try{return new xp(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.providerId=Xr.PROVIDER_ID}static credential(t,i){return Ts._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const o=xp.parseLink(i);return ut(o,"argument-error"),Ts._fromEmailAndCode(t,o.code,o.tenantId)}}Xr.PROVIDER_ID="password";Xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends RT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends Ms{constructor(){super("facebook.com")}static credential(t){return Di._fromParams({providerId:Ha.PROVIDER_ID,signInMethod:Ha.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ha.credentialFromTaggedObject(t)}static credentialFromError(t){return Ha.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ha.credential(t.oauthAccessToken)}catch{return null}}}Ha.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ha.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Di._fromParams({providerId:ja.PROVIDER_ID,signInMethod:ja.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return ja.credentialFromTaggedObject(t)}static credentialFromError(t){return ja.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:o}=t;if(!i&&!o)return null;try{return ja.credential(i,o)}catch{return null}}}ja.GOOGLE_SIGN_IN_METHOD="google.com";ja.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Ms{constructor(){super("github.com")}static credential(t){return Di._fromParams({providerId:qa.PROVIDER_ID,signInMethod:qa.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return qa.credentialFromTaggedObject(t)}static credentialFromError(t){return qa.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return qa.credential(t.oauthAccessToken)}catch{return null}}}qa.GITHUB_SIGN_IN_METHOD="github.com";qa.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends Ms{constructor(){super("twitter.com")}static credential(t,i){return Di._fromParams({providerId:Fa.PROVIDER_ID,signInMethod:Fa.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return Fa.credentialFromTaggedObject(t)}static credentialFromError(t){return Fa.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:o}=t;if(!i||!o)return null;try{return Fa.credential(i,o)}catch{return null}}}Fa.TWITTER_SIGN_IN_METHOD="twitter.com";Fa.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,o,l=!1){const c=await vn._fromIdTokenResponse(t,o,l),f=gb(o);return new Ir({user:c,providerId:f,_tokenResponse:o,operationType:i})}static async _forOperation(t,i,o){await t._updateTokensIfNecessary(o,!0);const l=gb(o);return new Ir({user:t,providerId:l,_tokenResponse:o,operationType:i})}}function gb(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends ca{constructor(t,i,o,l){super(i.code,i.message),this.operationType=o,this.user=l,Object.setPrototypeOf(this,Du.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(t,i,o,l){return new Du(t,i,o,l)}}function OT(n,t,i,o){return(t==="reauthenticate"?i._getReauthenticationResolver(n):i._getIdTokenResponse(n)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Du._fromErrorAndOperation(n,c,t,o):c})}async function O3(n,t,i=!1){const o=await xs(n,t._linkToIdToken(n.auth,await n.getIdToken()),i);return Ir._forOperation(n,"link",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C3(n,t,i=!1){const{auth:o}=n;if(gn(o.app))return Promise.reject(Ka(o));const l="reauthenticate";try{const c=await xs(n,OT(o,l,t,n),i);ut(c.idToken,o,"internal-error");const f=yp(c.idToken);ut(f,o,"internal-error");const{sub:p}=f;return ut(n.uid===p,o,"user-mismatch"),Ir._forOperation(n,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&xn(o,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(n,t,i=!1){if(gn(n.app))return Promise.reject(Ka(n));const o="signIn",l=await OT(n,o,t),c=await Ir._fromIdTokenResponse(n,o,l);return i||await n._updateCurrentUser(c.user),c}async function D3(n,t){return CT(Yr(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k3(n){const t=Yr(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function M3(n,t,i){return gn(n.app)?Promise.reject(Ka(n)):D3(sn(n),Xr.credential(t,i)).catch(async o=>{throw o.code==="auth/password-does-not-meet-requirements"&&k3(n),o})}function N3(n,t,i,o){return sn(n).onIdTokenChanged(t,i,o)}function P3(n,t,i){return sn(n).beforeAuthStateChanged(t,i)}const ku="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(ku,"1"),this.storage.removeItem(ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L3=1e3,U3=10;class kT extends DT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ST(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const o=this.storage.getItem(i),l=this.localCache[i];o!==l&&t(i,l,o)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((f,p,h)=>{this.notifyListeners(f,h)});return}const o=t.key;i?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(o);!i&&this.localCache[o]===f||this.notifyListeners(o,f)},c=this.storage.getItem(o);n3()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,U3):l()}notifyListeners(t,i){this.localCache[t]=i;const o=this.listeners[t];if(o)for(const l of Array.from(o))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:o}),!0)})},L3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}kT.type="LOCAL";const I3=kT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT extends DT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}MT.type="SESSION";const NT=MT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B3(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(l=>l.isListeningto(t));if(i)return i;const o=new ju(t);return this.receivers.push(o),o}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:o,eventType:l,data:c}=i.data,f=this.handlersMap[l];if(!f?.size)return;i.ports[0].postMessage({status:"ack",eventId:o,eventType:l});const p=Array.from(f).map(async m=>m(i.origin,c)),h=await B3(p);i.ports[0].postMessage({status:"done",eventId:o,eventType:l,response:h})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ju.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n="",t=10){let i="";for(let o=0;o<t;o++)i+=Math.floor(Math.random()*10);return n+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z3{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,o=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,f;return new Promise((p,h)=>{const m=Tp("",20);l.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},o);f={messageChannel:l,onMessage(y){const x=y;if(x.data.eventId===m)switch(x.data.status){case"ack":clearTimeout(g),c=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(x.data.response);break;default:clearTimeout(g),clearTimeout(c),h(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:m,data:i},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function V3(n){Pn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function H3(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j3(){return navigator?.serviceWorker?.controller||null}function q3(){return PT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="firebaseLocalStorageDb",F3=1,Mu="firebaseLocalStorage",UT="fbase_key";class Ns{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function qu(n,t){return n.transaction([Mu],t?"readwrite":"readonly").objectStore(Mu)}function G3(){const n=indexedDB.deleteDatabase(LT);return new Ns(n).toPromise()}function ph(){const n=indexedDB.open(LT,F3);return new Promise((t,i)=>{n.addEventListener("error",()=>{i(n.error)}),n.addEventListener("upgradeneeded",()=>{const o=n.result;try{o.createObjectStore(Mu,{keyPath:UT})}catch(l){i(l)}}),n.addEventListener("success",async()=>{const o=n.result;o.objectStoreNames.contains(Mu)?t(o):(o.close(),await G3(),t(await ph()))})})}async function yb(n,t,i){const o=qu(n,!0).put({[UT]:t,value:i});return new Ns(o).toPromise()}async function Y3(n,t){const i=qu(n,!1).get(t),o=await new Ns(i).toPromise();return o===void 0?null:o.value}function vb(n,t){const i=qu(n,!0).delete(t);return new Ns(i).toPromise()}const X3=800,K3=3;class IT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ph(),this.db)}async _withRetries(t){let i=0;for(;;)try{const o=await this._openDb();return await t(o)}catch(o){if(i++>K3)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return PT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ju._getInstance(q3()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await H3(),!this.activeServiceWorker)return;this.sender=new z3(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||j3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ph();return await yb(t,ku,"1"),await vb(t,ku),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(o=>yb(o,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(o=>Y3(o,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>vb(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=qu(l,!1).getAll();return new Ns(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],o=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)o.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!o.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(t,i){this.localCache[t]=i;const o=this.listeners[t];if(o)for(const l of Array.from(o))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IT.type="LOCAL";const $3=IT;new ks(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z3(n,t){return t?na(t):(ut(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp extends bp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Mr(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Mr(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Mr(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function Q3(n){return CT(n.auth,new Sp(n),n.bypassAuthState)}function W3(n){const{auth:t,user:i}=n;return ut(i,t,"internal-error"),C3(i,new Sp(n),n.bypassAuthState)}async function J3(n){const{auth:t,user:i}=n;return ut(i,t,"internal-error"),O3(i,new Sp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(t,i,o,l,c=!1){this.auth=t,this.resolver=o,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:o,postBody:l,tenantId:c,error:f,type:p}=t;if(f){this.reject(f);return}const h={auth:this.auth,requestUri:i,sessionId:o,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(h))}catch(m){this.reject(m)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Q3;case"linkViaPopup":case"linkViaRedirect":return J3;case"reauthViaPopup":case"reauthViaRedirect":return W3;default:xn(this.auth,"internal-error")}}resolve(t){la(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){la(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=new ks(2e3,1e4);class Or extends BT{constructor(t,i,o,l,c){super(t,i,l,c),this.provider=o,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ut(t,this.auth,"internal-error"),t}async onExecution(){la(this.filter.length===1,"Popup operations only handle one event");const t=Tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,tM.get())};t()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM="pendingRedirect",pu=new Map;class nM extends BT{constructor(t,i,o=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o),this.eventId=null}async execute(){let t=pu.get(this.auth._key());if(!t){try{const o=await aM(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(o)}catch(i){t=()=>Promise.reject(i)}pu.set(this.auth._key(),t)}return this.bypassAuthState||pu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aM(n,t){const i=oM(t),o=rM(n);if(!await o._isAvailable())return!1;const l=await o._get(i)==="true";return await o._remove(i),l}function iM(n,t){pu.set(n._key(),t)}function rM(n){return na(n._redirectPersistence)}function oM(n){return hu(eM,n.config.apiKey,n.name)}async function sM(n,t,i=!1){if(gn(n.app))return Promise.reject(Ka(n));const o=Yr(n),l=Z3(o,t),f=await new nM(o,l,i).execute();return f&&!i&&(delete f.user._redirectEventId,await o._persistUserIfCurrent(f.user),await o._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=600*1e3;class uM{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(t,o)&&(i=!0,this.sendToConsumer(t,o),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!cM(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){if(t.error&&!zT(t)){const o=t.error.code?.split("auth/")[1]||"internal-error";i.onError(Nn(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const o=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&o}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=lM&&this.cachedEventUids.clear(),this.cachedEventUids.has(bb(t))}saveEventToCache(t){this.cachedEventUids.add(bb(t)),this.lastProcessedEventTime=Date.now()}}function bb(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function zT({type:n,error:t}){return n==="unknown"&&t?.code==="auth/no-auth-event"}function cM(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zT(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fM(n,t={}){return Wa(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hM=/^https?/;async function pM(n){if(n.config.emulator)return;const{authorizedDomains:t}=await fM(n);for(const i of t)try{if(mM(i))return}catch{}xn(n,"unauthorized-domain")}function mM(n){const t=dh(),{protocol:i,hostname:o}=new URL(t);if(n.startsWith("chrome-extension://")){const f=new URL(n);return f.hostname===""&&o===""?i==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&f.hostname===o}if(!hM.test(i))return!1;if(dM.test(n))return o===n;const l=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(o)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM=new ks(3e4,6e4);function xb(){const n=Pn().___jsl;if(n?.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let i=0;i<n.CP.length;i++)n.CP[i]=null}}function yM(n){return new Promise((t,i)=>{function o(){xb(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xb(),i(Nn(n,"network-request-failed"))},timeout:gM.get()})}if(Pn().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Pn().gapi?.load)o();else{const l=f3("iframefcb");return Pn()[l]=()=>{gapi.load?o():i(Nn(n,"network-request-failed"))},ET(`${c3()}?onload=${l}`).catch(c=>i(c))}}).catch(t=>{throw mu=null,t})}let mu=null;function vM(n){return mu=mu||yM(n),mu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM=new ks(5e3,15e3),xM="__/auth/iframe",TM="emulator/auth/iframe",SM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EM(n){const t=n.config;ut(t.authDomain,n,"auth-domain-config-required");const i=t.emulator?gp(t,TM):`https://${n.config.authDomain}/${xM}`,o={apiKey:t.apiKey,appName:n.name,v:Fr},l=wM.get(n.config.apiHost);l&&(o.eid=l);const c=n._getFrameworks();return c.length&&(o.fw=c.join(",")),`${i}?${Ds(o).slice(1)}`}async function _M(n){const t=await vM(n),i=Pn().gapi;return ut(i,n,"internal-error"),t.open({where:document.body,url:EM(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SM,dontclear:!0},o=>new Promise(async(l,c)=>{await o.restyle({setHideOnLeave:!1});const f=Nn(n,"network-request-failed"),p=Pn().setTimeout(()=>{c(f)},bM.get());function h(){Pn().clearTimeout(p),l(o)}o.ping(h).then(h,()=>{c(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RM=500,OM=600,CM="_blank",DM="http://localhost";class Tb{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kM(n,t,i,o=RM,l=OM){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-o)/2,0).toString();let p="";const h={...AM,width:o.toString(),height:l.toString(),top:c,left:f},m=ke().toLowerCase();i&&(p=yT(m)?CM:i),mT(m)&&(t=t||DM,h.scrollbars="yes");const g=Object.entries(h).reduce((x,[S,w])=>`${x}${S}=${w},`,"");if(e3(m)&&p!=="_self")return MM(t||"",p),new Tb(null);const y=window.open(t||"",p,g);ut(y,n,"popup-blocked");try{y.focus()}catch{}return new Tb(y)}function MM(n,t){const i=document.createElement("a");i.href=n,i.target=t;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM="__/auth/handler",PM="emulator/auth/handler",LM=encodeURIComponent("fac");async function Sb(n,t,i,o,l,c){ut(n.config.authDomain,n,"auth-domain-config-required"),ut(n.config.apiKey,n,"invalid-api-key");const f={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:o,v:Fr,eventId:l};if(t instanceof RT){t.setDefaultLanguage(n.languageCode),f.providerId=t.providerId||"",iC(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,y]of Object.entries({}))f[g]=y}if(t instanceof Ms){const g=t.getScopes().filter(y=>y!=="");g.length>0&&(f.scopes=g.join(","))}n.tenantId&&(f.tid=n.tenantId);const p=f;for(const g of Object.keys(p))p[g]===void 0&&delete p[g];const h=await n._getAppCheckToken(),m=h?`#${LM}=${encodeURIComponent(h)}`:"";return`${UM(n)}?${Ds(p).slice(1)}${m}`}function UM({config:n}){return n.emulator?gp(n,PM):`https://${n.authDomain}/${NM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="webStorageSupport";class IM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NT,this._completeRedirectFn=sM,this._overrideRedirectResult=iM}async _openPopup(t,i,o,l){la(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Sb(t,i,o,dh(),l);return kM(t,c,Tp())}async _openRedirect(t,i,o,l){await this._originValidation(t);const c=await Sb(t,i,o,dh(),l);return V3(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:l,promise:c}=this.eventManagers[i];return l?Promise.resolve(l):(la(c,"If manager is not set, promise should be"),c)}const o=this.initAndGetManager(t);return this.eventManagers[i]={promise:o},o.catch(()=>{delete this.eventManagers[i]}),o}async initAndGetManager(t){const i=await _M(t),o=new uM(t);return i.register("authEvent",l=>(ut(l?.authEvent,t,"invalid-auth-event"),{status:o.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:o},this.iframes[t._key()]=i,o}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(Pd,{type:Pd},l=>{const c=l?.[0]?.[Pd];c!==void 0&&i(!!c),xn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=pM(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return ST()||gT()||vp()}}const BM=IM;var wb="@firebase/auth",Eb="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(o=>{t(o?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ut(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VM(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HM(n){Ur(new Oi("auth",(t,{options:i})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=o.options;ut(f&&!f.includes(":"),"invalid-api-key",{appName:o.name});const h={apiKey:f,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wT(n)},m=new s3(o,l,c,h);return y3(m,i),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,o)=>{t.getProvider("auth-internal").initialize()})),Ur(new Oi("auth-internal",t=>{const i=Yr(t.getProvider("auth").getImmediate());return(o=>new zM(o))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xa(wb,Eb,VM(n)),Xa(wb,Eb,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM=300,qM=Ux("authIdTokenMaxAge")||jM;let _b=null;const FM=n=>async t=>{const i=t&&await t.getIdTokenResult(),o=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(o&&o>qM)return;const l=i?.token;_b!==l&&(_b=l,await fetch(n,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function GM(n=qx()){const t=ip(n,"auth");if(t.isInitialized())return t.getImmediate();const i=g3(n,{popupRedirectResolver:BM,persistence:[$3,I3,NT]}),o=Ux("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(o,location.origin);if(location.origin===c.origin){const f=FM(c.toString());P3(i,f,()=>f(i.currentUser)),N3(i,p=>f(p))}}const l=Px("auth");return l&&v3(i,`http://${l}`),i}function YM(){return document.getElementsByTagName("head")?.[0]??document}l3({loadJS(n){return new Promise((t,i)=>{const o=document.createElement("script");o.setAttribute("src",n),o.onload=t,o.onerror=l=>{const c=Nn("internal-error");c.customData=l,i(c)},o.type="text/javascript",o.charset="UTF-8",YM().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HM("Browser");const XM={apiKey:"AIzaSyAkLOx2lwDb-3HLPyrbr6hWH-yHn4Ly-wc",authDomain:"pi-sem6.firebaseapp.com",projectId:"pi-sem6",storageBucket:"pi-sem6.firebasestorage.app",messagingSenderId:"829276571631",appId:"1:829276571631:web:90227c4dedc85f75cfd81a",measurementId:"G-ZZVKB3RCPL"},VT=jx(XM),HT=GM(VT),Kr=Ck(VT);async function KM(n){try{const t=Gr(Kr,`construcoes/${n}`),i=await pp(t);return i.items.length>0||i.prefixes.length>0}catch(t){return console.error("Erro ao verificar pasta:",t),!1}}async function $M(n,t,i=!1){if(!n||!t)throw new Error("Arquivo ou código inválido");if(!await KM(t)&&!i)throw new Error(`A pasta "${t}" não existe. Apenas o administrador pode criá-la.`);try{const l=Gr(Kr,`construcoes/${t}/${n.name}`);await rT(l,n);let c=await oT(l);return c=c.replace("appspot.com","firebasestorage.app"),console.log("Imagem enviada com sucesso:",c),c}catch(l){throw console.error("Erro no upload da imagem:",l),l}}async function mh(){try{const n=Gr(Kr,"construcoes");return(await pp(n)).prefixes.map(i=>i.name)}catch(n){throw console.error("Erro ao listar pastas:",n),n}}async function ZM(n){if(!n)throw new Error("Código inválido para criação de pasta");try{const t=Gr(Kr,`construcoes/${n}/.placeholder`),i=new Blob([""],{type:"text/plain"});await rT(t,i),console.log(`Pasta '${n}' criada com sucesso.`)}catch(t){throw console.error("Erro ao criar nova pasta:",t),t}}async function QM(n){const t=Gr(Kr,`construcoes/${n}`);return(await pp(t)).items.map(o=>o.name)}async function Ab(n,t){const i=Gr(Kr,`construcoes/${n}/${t}`);let o=await oT(i);return o=o.replace("appspot.com","firebasestorage.app"),o}function WM({onUploadFile:n,onUploadImage:t,isLoading:i}){const o=bh(),[l,c]=O.useState(G.jsx(ud,{size:48,color:"white",style:{position:"absolute"}})),[f,p]=O.useState(G.jsx(ud,{size:48,color:"white",style:{position:"absolute"}})),[h,m]=O.useState(!1),[g,y]=O.useState(!1),[x,S]=O.useState([]),[w,_]=O.useState(""),[R,C]=O.useState([]),[M,I]=O.useState(""),[K,z]=O.useState("");O.useEffect(()=>{async function Y(){try{const Z=await mh();S(Z)}catch(Z){console.error("Erro ao listar pastas:",Z)}}Y()},[]),O.useEffect(()=>{async function Y(){if(!w){C([]),I(""),z("");return}try{const Z=await QM(w);C(Z)}catch(Z){console.error("Erro ao listar imagens:",Z)}}Y()},[w]);async function J(Y){c(G.jsx(jv,{color:"white",size:"medium"}));try{const Z=Y.target.files[0],bt=Z.name.split(".").pop().toLowerCase();if(!Z)return;await n(Z),m(!0),g&&o("/viewer")}catch(Z){c(G.jsx(I_,{size:48,color:"white",style:{position:"absolute"}})),console.error("Erro no upload de arquivo:",Z),alert("Erro ao enviar arquivo.")}finally{c(G.jsx(U_,{size:48,color:"white",style:{position:"absolute"}}))}}async function $(){if(!M)return alert("Selecione uma imagem primeiro!");p(G.jsx(jv,{color:"white",size:"medium"}));try{const Y=await Ab(w,M);await t(Y),y(!0),h&&o("/viewer")}catch(Y){console.error("Erro ao carregar imagem:",Y),alert("Erro ao selecionar imagem.")}finally{p(G.jsx(ud,{size:48,color:"white",style:{position:"absolute"}}))}}return O.useEffect(()=>{async function Y(){if(!w||!M){z("");return}try{const Z=await Ab(w,M);z(Z)}catch(Z){console.error("Erro ao gerar pré-visualização:",Z)}}Y()},[M,w]),G.jsxs(vs.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.7},children:[G.jsxs("div",{className:"container",children:[G.jsx("div",{className:"divisor"}),G.jsxs("div",{className:"collum",children:[G.jsx("h3",{children:"Insira o modelo da construção"}),G.jsxs(vs.div,{whileHover:{scale:1.03},whileTap:{scale:.97},className:"select-box",children:[G.jsx("label",{htmlFor:"file_upload"}),G.jsx("input",{type:"file",id:"file_upload",onChange:J}),G.jsx("div",{className:"icon-container",children:l})]})]}),G.jsx("div",{className:"divisor"}),G.jsxs("div",{className:"collum",children:[G.jsx("h3",{children:"Selecione a foto da construção existente"}),G.jsxs("select",{className:"photo-upload-input",value:w,onChange:Y=>{_(Y.target.value),I(""),z("")},children:[G.jsx("option",{value:"",children:"Selecione uma construção"}),x.map(Y=>G.jsx("option",{value:Y,children:Y},Y))]}),w&&G.jsxs("select",{className:"photo-upload-input",value:M,onChange:Y=>I(Y.target.value),children:[G.jsx("option",{value:"",children:"Selecione uma imagem"}),R.map(Y=>G.jsx("option",{value:Y,children:Y},Y))]}),K&&G.jsx("div",{className:"preview-container",style:{marginTop:"8px",textAlign:"center"},children:G.jsx("img",{src:K,alt:"Pré-visualização",style:{width:"220px",height:"80%",borderRadius:"8px",boxShadow:"0 0 10px rgba(0,0,0,0.3)"}})})]}),G.jsx("div",{className:"divisor"})]}),G.jsx("div",{className:"advance-button",children:G.jsx("button",{onClick:$,children:"Enviar para Comparação"})})]})}function JM(n){return zr({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Export"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M5.552,20.968a2.577,2.577,0,0,1-2.5-2.73c-.012-2.153,0-4.306,0-6.459a.5.5,0,0,1,1,0c0,2.2-.032,4.4,0,6.6.016,1.107.848,1.589,1.838,1.589H18.353A1.546,1.546,0,0,0,19.825,19a3.023,3.023,0,0,0,.1-1.061V11.779h0a.5.5,0,0,1,1,0c0,2.224.085,4.465,0,6.687a2.567,2.567,0,0,1-2.67,2.5Z"},child:[]},{tag:"path",attr:{d:"M12.337,3.176a.455.455,0,0,0-.311-.138c-.015,0-.028,0-.043-.006s-.027,0-.041.006a.457.457,0,0,0-.312.138L7.961,6.845a.5.5,0,0,0,.707.707l2.816-2.815V15.479a.5.5,0,0,0,1,0V4.737L15.3,7.552a.5.5,0,0,0,.707-.707Z"},child:[]}]}]}]})(n)}function t4({urn:n,imageUrl:t,screenshotUrl:i,setScreenshotUrl:o}){const l=O.useRef(null),[c,f]=O.useState(null),[p,h]=O.useState(!1),[m,g]=O.useState(null);function y(S){return S}O.useEffect(()=>{const S={env:"AutodeskProduction",getAccessToken(w,_){fetch("https://pii-6-sem.onrender.com/api/token").then(async R=>{const C=await R.text();try{const M=JSON.parse(C);M.access_token?w(M.access_token,M.expires_in):(console.error("Token inválido:",M),_&&_("Token inválido"))}catch{console.error("Resposta inesperada do servidor:",C),_&&_("Resposta inesperada do servidor")}})}};return Autodesk.Viewing.Initializer(S,()=>{const w=new Autodesk.Viewing.GuiViewer3D(l.current);w.start(),g(w),console.log("Viewer inicializado!"),n&&Autodesk.Viewing.Document.load("urn:"+n,_=>{const R=_.getRoot().getDefaultGeometry();w.loadDocumentNode(_,R).then(()=>{console.log("Modelo carregado com sucesso!")})},_=>console.error("Erro ao carregar documento:",_))}),()=>m&&m.finish()},[n]);async function x(){if(!m){alert("Viewer ainda não foi inicializado!");return}if(!t){alert("Envie uma imagem antes de comparar!");return}h(!0),f(null),m.getScreenShot(800,600,async S=>{try{o(S),console.log("Screenshot capturado!");const w=t,_=new FormData;console.log("Baixando imagem via URL:",w);const R=await fetch("https://pii-6-sem.onrender.com/api/fetch-image",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(!R.ok)throw new Error(`Falha ao baixar imagem Firebase (${R.status})`);const C=await R.blob(),M=await fetch(S);if(!M.ok)throw new Error(`Falha ao capturar screenshot (${M.status})`);const I=await M.blob();_.append("img1",C,"imagem1.jpg"),_.append("img2",I,"imagem2.jpg"),console.log("Enviando imagens para comparação...");const z=await(await fetch("https://pii-6-sem.onrender.com/api/compare",{method:"POST",body:_})).json();z.similarity?(f(z.similarity),console.log("Resultado da comparação:",z.similarity)):console.error("Falha ao obter similaridade:",z)}catch(w){console.error("Erro ao comparar imagens:",w),alert("Falha ao comparar imagens. Verifique se a imagem está acessível publicamente no Firebase.")}finally{h(!1)}})}return G.jsxs(vs.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.7},children:[G.jsxs("div",{className:"viewer-root",children:[G.jsx("div",{className:"viewer-divisor"}),G.jsx("div",{className:"viewer-container",style:{height:"90%",border:"1px solid #ccc",borderRadius:"10px",overflow:"hidden"},children:G.jsx("div",{ref:l,className:"viewer",style:{height:"100%",width:"100%"}})}),G.jsx("div",{className:"viewer-divisor"}),G.jsx("div",{className:"viewer-container",style:{height:"90%",borderRadius:"10px"},children:t&&G.jsx("div",{style:{width:"100%",height:"100%",justifyContent:"center",objectFit:"scale-down;",display:"flex",alignItems:"center"},children:G.jsx("img",{src:t,alt:"Imagem enviada",style:{maxWidth:"100%",maxHeight:"100%"}})})}),G.jsx("div",{className:"viewer-divisor"})]}),G.jsx("div",{className:"viewer-button",children:G.jsx("button",{onClick:x,disabled:!t||p,style:{},children:p?"Comparando...":"Comparar Imagens"})}),c&&G.jsx("div",{className:"viewer-similarity-root",children:G.jsxs("div",{className:"viewer-similarity-container",children:[G.jsx("h3",{children:"Resultado da comparação"}),G.jsx("div",{style:{width:"400px",height:"30px",borderRadius:"10px",background:"#ddd",margin:"0 auto 20px",overflow:"hidden",position:"relative"},children:G.jsxs("div",{style:{width:`${c.progresso}%`,height:"100%",background:"linear-gradient(90deg, #4caf50, #8bc34a)",color:"white",fontWeight:"bold",lineHeight:"30px",transition:"width 1s ease-in-out"},children:[c.progresso,"%"]})}),G.jsx("button",{style:{top:"24px",right:"24px",position:"absolute"},children:G.jsx(JM,{size:"30px"})}),c.diferencas&&G.jsxs("div",{style:{marginBottom:"15px"},children:[G.jsx("h4",{children:"Diferenças encontradas:"}),G.jsx("ul",{style:{textAlign:"left",display:"inline-block"},children:c.diferencas.map((S,w)=>G.jsx("li",{children:S},w))})]}),c.fase_construcao&&G.jsxs("p",{children:[G.jsx("strong",{children:"Fase da construção:"})," ",c.fase_construcao]})]})})]})}async function e4(n,t){return await M3(HT,n,t)}function n4(){return HT.currentUser}function a4(n){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}const i4=n=>{switch(n){case"success":return s4;case"info":return u4;case"warning":return l4;case"error":return c4;default:return null}},r4=Array(12).fill(0),o4=({visible:n,className:t})=>X.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":n},X.createElement("div",{className:"sonner-spinner"},r4.map((i,o)=>X.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),s4=X.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},X.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),l4=X.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},X.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),u4=X.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},X.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),c4=X.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},X.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),f4=X.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},X.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),X.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),d4=()=>{const[n,t]=X.useState(document.hidden);return X.useEffect(()=>{const i=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",i),()=>window.removeEventListener("visibilitychange",i)},[]),n};let gh=1;class h4{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{const i=this.subscribers.indexOf(t);this.subscribers.splice(i,1)}),this.publish=t=>{this.subscribers.forEach(i=>i(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var i;const{message:o,...l}=t,c=typeof t?.id=="number"||((i=t.id)==null?void 0:i.length)>0?t.id:gh++,f=this.toasts.find(h=>h.id===c),p=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(c)&&this.dismissedToasts.delete(c),f?this.toasts=this.toasts.map(h=>h.id===c?(this.publish({...h,...t,id:c,title:o}),{...h,...t,id:c,dismissible:p,title:o}):h):this.addToast({title:o,...l,dismissible:p,id:c}),c},this.dismiss=t=>(t?(this.dismissedToasts.add(t),requestAnimationFrame(()=>this.subscribers.forEach(i=>i({id:t,dismiss:!0})))):this.toasts.forEach(i=>{this.subscribers.forEach(o=>o({id:i.id,dismiss:!0}))}),t),this.message=(t,i)=>this.create({...i,message:t}),this.error=(t,i)=>this.create({...i,message:t,type:"error"}),this.success=(t,i)=>this.create({...i,type:"success",message:t}),this.info=(t,i)=>this.create({...i,type:"info",message:t}),this.warning=(t,i)=>this.create({...i,type:"warning",message:t}),this.loading=(t,i)=>this.create({...i,type:"loading",message:t}),this.promise=(t,i)=>{if(!i)return;let o;i.loading!==void 0&&(o=this.create({...i,promise:t,type:"loading",message:i.loading,description:typeof i.description!="function"?i.description:void 0}));const l=Promise.resolve(t instanceof Function?t():t);let c=o!==void 0,f;const p=l.then(async m=>{if(f=["resolve",m],X.isValidElement(m))c=!1,this.create({id:o,type:"default",message:m});else if(m4(m)&&!m.ok){c=!1;const y=typeof i.error=="function"?await i.error(`HTTP error! status: ${m.status}`):i.error,x=typeof i.description=="function"?await i.description(`HTTP error! status: ${m.status}`):i.description,w=typeof y=="object"&&!X.isValidElement(y)?y:{message:y};this.create({id:o,type:"error",description:x,...w})}else if(m instanceof Error){c=!1;const y=typeof i.error=="function"?await i.error(m):i.error,x=typeof i.description=="function"?await i.description(m):i.description,w=typeof y=="object"&&!X.isValidElement(y)?y:{message:y};this.create({id:o,type:"error",description:x,...w})}else if(i.success!==void 0){c=!1;const y=typeof i.success=="function"?await i.success(m):i.success,x=typeof i.description=="function"?await i.description(m):i.description,w=typeof y=="object"&&!X.isValidElement(y)?y:{message:y};this.create({id:o,type:"success",description:x,...w})}}).catch(async m=>{if(f=["reject",m],i.error!==void 0){c=!1;const g=typeof i.error=="function"?await i.error(m):i.error,y=typeof i.description=="function"?await i.description(m):i.description,S=typeof g=="object"&&!X.isValidElement(g)?g:{message:g};this.create({id:o,type:"error",description:y,...S})}}).finally(()=>{c&&(this.dismiss(o),o=void 0),i.finally==null||i.finally.call(i)}),h=()=>new Promise((m,g)=>p.then(()=>f[0]==="reject"?g(f[1]):m(f[1])).catch(g));return typeof o!="string"&&typeof o!="number"?{unwrap:h}:Object.assign(o,{unwrap:h})},this.custom=(t,i)=>{const o=i?.id||gh++;return this.create({jsx:t(o),id:o,...i}),o},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const Ue=new h4,p4=(n,t)=>{const i=t?.id||gh++;return Ue.addToast({title:n,...t,id:i}),i},m4=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",g4=p4,y4=()=>Ue.toasts,v4=()=>Ue.getActiveToasts(),Rb=Object.assign(g4,{success:Ue.success,info:Ue.info,warning:Ue.warning,error:Ue.error,custom:Ue.custom,message:Ue.message,promise:Ue.promise,dismiss:Ue.dismiss,loading:Ue.loading},{getHistory:y4,getToasts:v4});a4("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function ru(n){return n.label!==void 0}const b4=3,x4="24px",T4="16px",Ob=4e3,S4=356,w4=14,E4=45,_4=200;function Cn(...n){return n.filter(Boolean).join(" ")}function A4(n){const[t,i]=n.split("-"),o=[];return t&&o.push(t),i&&o.push(i),o}const R4=n=>{var t,i,o,l,c,f,p,h,m;const{invert:g,toast:y,unstyled:x,interacting:S,setHeights:w,visibleToasts:_,heights:R,index:C,toasts:M,expanded:I,removeToast:K,defaultRichColors:z,closeButton:J,style:$,cancelButtonStyle:Y,actionButtonStyle:Z,className:bt="",descriptionClassName:It="",duration:Mt,position:Wt,gap:we,expandByDefault:Nt,classNames:L,icons:q,closeButtonAriaLabel:tt="Close toast"}=n,[ht,E]=X.useState(null),[H,W]=X.useState(null),[F,Q]=X.useState(!1),[rt,nt]=X.useState(!1),[Jt,lt]=X.useState(!1),[Ee,fa]=X.useState(!1),[Un,Tn]=X.useState(!1),[$r,Ja]=X.useState(0),[Fu,Ps]=X.useState(0),be=X.useRef(y.duration||Mt||Ob),Ls=X.useRef(null),Ye=X.useRef(null),Us=C===0,Pi=C+1<=_,_e=y.type,In=y.dismissible!==!1,Gu=y.className||"",Yu=y.descriptionClassName||"",Sn=X.useMemo(()=>R.findIndex(dt=>dt.toastId===y.id)||0,[R,y.id]),Ae=X.useMemo(()=>{var dt;return(dt=y.closeButton)!=null?dt:J},[y.closeButton,J]),ln=X.useMemo(()=>y.duration||Mt||Ob,[y.duration,Mt]),he=X.useRef(0),da=X.useRef(0),Is=X.useRef(0),ha=X.useRef(null),[Li,Ui]=Wt.split("-"),wn=X.useMemo(()=>R.reduce((dt,Yt,te)=>te>=Sn?dt:dt+Yt.height,0),[R,Sn]),ti=d4(),ei=y.invert||g,Zr=_e==="loading";da.current=X.useMemo(()=>Sn*we+wn,[Sn,wn]),X.useEffect(()=>{be.current=ln},[ln]),X.useEffect(()=>{Q(!0)},[]),X.useEffect(()=>{const dt=Ye.current;if(dt){const Yt=dt.getBoundingClientRect().height;return Ps(Yt),w(te=>[{toastId:y.id,height:Yt,position:y.position},...te]),()=>w(te=>te.filter(pe=>pe.toastId!==y.id))}},[w,y.id]),X.useLayoutEffect(()=>{if(!F)return;const dt=Ye.current,Yt=dt.style.height;dt.style.height="auto";const te=dt.getBoundingClientRect().height;dt.style.height=Yt,Ps(te),w(pe=>pe.find(ie=>ie.toastId===y.id)?pe.map(ie=>ie.toastId===y.id?{...ie,height:te}:ie):[{toastId:y.id,height:te,position:y.position},...pe])},[F,y.title,y.description,w,y.id,y.jsx,y.action,y.cancel]);const un=X.useCallback(()=>{nt(!0),Ja(da.current),w(dt=>dt.filter(Yt=>Yt.toastId!==y.id)),setTimeout(()=>{K(y)},_4)},[y,K,w,da]);X.useEffect(()=>{if(y.promise&&_e==="loading"||y.duration===1/0||y.type==="loading")return;let dt;return I||S||ti?(()=>{if(Is.current<he.current){const pe=new Date().getTime()-he.current;be.current=be.current-pe}Is.current=new Date().getTime()})():(()=>{be.current!==1/0&&(he.current=new Date().getTime(),dt=setTimeout(()=>{y.onAutoClose==null||y.onAutoClose.call(y,y),un()},be.current))})(),()=>clearTimeout(dt)},[I,S,y,_e,ti,un]),X.useEffect(()=>{y.delete&&(un(),y.onDismiss==null||y.onDismiss.call(y,y))},[un,y.delete]);function Bs(){var dt;if(q?.loading){var Yt;return X.createElement("div",{className:Cn(L?.loader,y==null||(Yt=y.classNames)==null?void 0:Yt.loader,"sonner-loader"),"data-visible":_e==="loading"},q.loading)}return X.createElement(o4,{className:Cn(L?.loader,y==null||(dt=y.classNames)==null?void 0:dt.loader),visible:_e==="loading"})}const Qr=y.icon||q?.[_e]||i4(_e);var pa,zs;return X.createElement("li",{tabIndex:0,ref:Ye,className:Cn(bt,Gu,L?.toast,y==null||(t=y.classNames)==null?void 0:t.toast,L?.default,L?.[_e],y==null||(i=y.classNames)==null?void 0:i[_e]),"data-sonner-toast":"","data-rich-colors":(pa=y.richColors)!=null?pa:z,"data-styled":!(y.jsx||y.unstyled||x),"data-mounted":F,"data-promise":!!y.promise,"data-swiped":Un,"data-removed":rt,"data-visible":Pi,"data-y-position":Li,"data-x-position":Ui,"data-index":C,"data-front":Us,"data-swiping":Jt,"data-dismissible":In,"data-type":_e,"data-invert":ei,"data-swipe-out":Ee,"data-swipe-direction":H,"data-expanded":!!(I||Nt&&F),"data-testid":y.testId,style:{"--index":C,"--toasts-before":C,"--z-index":M.length-C,"--offset":`${rt?$r:da.current}px`,"--initial-height":Nt?"auto":`${Fu}px`,...$,...y.style},onDragEnd:()=>{lt(!1),E(null),ha.current=null},onPointerDown:dt=>{dt.button!==2&&(Zr||!In||(Ls.current=new Date,Ja(da.current),dt.target.setPointerCapture(dt.pointerId),dt.target.tagName!=="BUTTON"&&(lt(!0),ha.current={x:dt.clientX,y:dt.clientY})))},onPointerUp:()=>{var dt,Yt,te;if(Ee||!In)return;ha.current=null;const pe=Number(((dt=Ye.current)==null?void 0:dt.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),ni=Number(((Yt=Ye.current)==null?void 0:Yt.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),ie=new Date().getTime()-((te=Ls.current)==null?void 0:te.getTime()),Xt=ht==="x"?pe:ni,Kt=Math.abs(Xt)/ie;if(Math.abs(Xt)>=E4||Kt>.11){Ja(da.current),y.onDismiss==null||y.onDismiss.call(y,y),W(ht==="x"?pe>0?"right":"left":ni>0?"down":"up"),un(),fa(!0);return}else{var Dt,le;(Dt=Ye.current)==null||Dt.style.setProperty("--swipe-amount-x","0px"),(le=Ye.current)==null||le.style.setProperty("--swipe-amount-y","0px")}Tn(!1),lt(!1),E(null)},onPointerMove:dt=>{var Yt,te,pe;if(!ha.current||!In||((Yt=window.getSelection())==null?void 0:Yt.toString().length)>0)return;const ie=dt.clientY-ha.current.y,Xt=dt.clientX-ha.current.x;var Kt;const Dt=(Kt=n.swipeDirections)!=null?Kt:A4(Wt);!ht&&(Math.abs(Xt)>1||Math.abs(ie)>1)&&E(Math.abs(Xt)>Math.abs(ie)?"x":"y");let le={x:0,y:0};const Ii=Bn=>1/(1.5+Math.abs(Bn)/20);if(ht==="y"){if(Dt.includes("top")||Dt.includes("bottom"))if(Dt.includes("top")&&ie<0||Dt.includes("bottom")&&ie>0)le.y=ie;else{const Bn=ie*Ii(ie);le.y=Math.abs(Bn)<Math.abs(ie)?Bn:ie}}else if(ht==="x"&&(Dt.includes("left")||Dt.includes("right")))if(Dt.includes("left")&&Xt<0||Dt.includes("right")&&Xt>0)le.x=Xt;else{const Bn=Xt*Ii(Xt);le.x=Math.abs(Bn)<Math.abs(Xt)?Bn:Xt}(Math.abs(le.x)>0||Math.abs(le.y)>0)&&Tn(!0),(te=Ye.current)==null||te.style.setProperty("--swipe-amount-x",`${le.x}px`),(pe=Ye.current)==null||pe.style.setProperty("--swipe-amount-y",`${le.y}px`)}},Ae&&!y.jsx&&_e!=="loading"?X.createElement("button",{"aria-label":tt,"data-disabled":Zr,"data-close-button":!0,onClick:Zr||!In?()=>{}:()=>{un(),y.onDismiss==null||y.onDismiss.call(y,y)},className:Cn(L?.closeButton,y==null||(o=y.classNames)==null?void 0:o.closeButton)},(zs=q?.close)!=null?zs:f4):null,(_e||y.icon||y.promise)&&y.icon!==null&&(q?.[_e]!==null||y.icon)?X.createElement("div",{"data-icon":"",className:Cn(L?.icon,y==null||(l=y.classNames)==null?void 0:l.icon)},y.promise||y.type==="loading"&&!y.icon?y.icon||Bs():null,y.type!=="loading"?Qr:null):null,X.createElement("div",{"data-content":"",className:Cn(L?.content,y==null||(c=y.classNames)==null?void 0:c.content)},X.createElement("div",{"data-title":"",className:Cn(L?.title,y==null||(f=y.classNames)==null?void 0:f.title)},y.jsx?y.jsx:typeof y.title=="function"?y.title():y.title),y.description?X.createElement("div",{"data-description":"",className:Cn(It,Yu,L?.description,y==null||(p=y.classNames)==null?void 0:p.description)},typeof y.description=="function"?y.description():y.description):null),X.isValidElement(y.cancel)?y.cancel:y.cancel&&ru(y.cancel)?X.createElement("button",{"data-button":!0,"data-cancel":!0,style:y.cancelButtonStyle||Y,onClick:dt=>{ru(y.cancel)&&In&&(y.cancel.onClick==null||y.cancel.onClick.call(y.cancel,dt),un())},className:Cn(L?.cancelButton,y==null||(h=y.classNames)==null?void 0:h.cancelButton)},y.cancel.label):null,X.isValidElement(y.action)?y.action:y.action&&ru(y.action)?X.createElement("button",{"data-button":!0,"data-action":!0,style:y.actionButtonStyle||Z,onClick:dt=>{ru(y.action)&&(y.action.onClick==null||y.action.onClick.call(y.action,dt),!dt.defaultPrevented&&un())},className:Cn(L?.actionButton,y==null||(m=y.classNames)==null?void 0:m.actionButton)},y.action.label):null)};function Cb(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function O4(n,t){const i={};return[n,t].forEach((o,l)=>{const c=l===1,f=c?"--mobile-offset":"--offset",p=c?T4:x4;function h(m){["top","right","bottom","left"].forEach(g=>{i[`${f}-${g}`]=typeof m=="number"?`${m}px`:m})}typeof o=="number"||typeof o=="string"?h(o):typeof o=="object"?["top","right","bottom","left"].forEach(m=>{o[m]===void 0?i[`${f}-${m}`]=p:i[`${f}-${m}`]=typeof o[m]=="number"?`${o[m]}px`:o[m]}):h(p)}),i}const C4=X.forwardRef(function(t,i){const{id:o,invert:l,position:c="bottom-right",hotkey:f=["altKey","KeyT"],expand:p,closeButton:h,className:m,offset:g,mobileOffset:y,theme:x="light",richColors:S,duration:w,style:_,visibleToasts:R=b4,toastOptions:C,dir:M=Cb(),gap:I=w4,icons:K,containerAriaLabel:z="Notifications"}=t,[J,$]=X.useState([]),Y=X.useMemo(()=>o?J.filter(F=>F.toasterId===o):J.filter(F=>!F.toasterId),[J,o]),Z=X.useMemo(()=>Array.from(new Set([c].concat(Y.filter(F=>F.position).map(F=>F.position)))),[Y,c]),[bt,It]=X.useState([]),[Mt,Wt]=X.useState(!1),[we,Nt]=X.useState(!1),[L,q]=X.useState(x!=="system"?x:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),tt=X.useRef(null),ht=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=X.useRef(null),H=X.useRef(!1),W=X.useCallback(F=>{$(Q=>{var rt;return(rt=Q.find(nt=>nt.id===F.id))!=null&&rt.delete||Ue.dismiss(F.id),Q.filter(({id:nt})=>nt!==F.id)})},[]);return X.useEffect(()=>Ue.subscribe(F=>{if(F.dismiss){requestAnimationFrame(()=>{$(Q=>Q.map(rt=>rt.id===F.id?{...rt,delete:!0}:rt))});return}setTimeout(()=>{O_.flushSync(()=>{$(Q=>{const rt=Q.findIndex(nt=>nt.id===F.id);return rt!==-1?[...Q.slice(0,rt),{...Q[rt],...F},...Q.slice(rt+1)]:[F,...Q]})})})}),[J]),X.useEffect(()=>{if(x!=="system"){q(x);return}if(x==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?q("dark"):q("light")),typeof window>"u")return;const F=window.matchMedia("(prefers-color-scheme: dark)");try{F.addEventListener("change",({matches:Q})=>{q(Q?"dark":"light")})}catch{F.addListener(({matches:rt})=>{try{q(rt?"dark":"light")}catch(nt){console.error(nt)}})}},[x]),X.useEffect(()=>{J.length<=1&&Wt(!1)},[J]),X.useEffect(()=>{const F=Q=>{var rt;if(f.every(lt=>Q[lt]||Q.code===lt)){var Jt;Wt(!0),(Jt=tt.current)==null||Jt.focus()}Q.code==="Escape"&&(document.activeElement===tt.current||(rt=tt.current)!=null&&rt.contains(document.activeElement))&&Wt(!1)};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[f]),X.useEffect(()=>{if(tt.current)return()=>{E.current&&(E.current.focus({preventScroll:!0}),E.current=null,H.current=!1)}},[tt.current]),X.createElement("section",{ref:i,"aria-label":`${z} ${ht}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},Z.map((F,Q)=>{var rt;const[nt,Jt]=F.split("-");return Y.length?X.createElement("ol",{key:F,dir:M==="auto"?Cb():M,tabIndex:-1,ref:tt,className:m,"data-sonner-toaster":!0,"data-sonner-theme":L,"data-y-position":nt,"data-x-position":Jt,style:{"--front-toast-height":`${((rt=bt[0])==null?void 0:rt.height)||0}px`,"--width":`${S4}px`,"--gap":`${I}px`,..._,...O4(g,y)},onBlur:lt=>{H.current&&!lt.currentTarget.contains(lt.relatedTarget)&&(H.current=!1,E.current&&(E.current.focus({preventScroll:!0}),E.current=null))},onFocus:lt=>{lt.target instanceof HTMLElement&&lt.target.dataset.dismissible==="false"||H.current||(H.current=!0,E.current=lt.relatedTarget)},onMouseEnter:()=>Wt(!0),onMouseMove:()=>Wt(!0),onMouseLeave:()=>{we||Wt(!1)},onDragEnd:()=>Wt(!1),onPointerDown:lt=>{lt.target instanceof HTMLElement&&lt.target.dataset.dismissible==="false"||Nt(!0)},onPointerUp:()=>Nt(!1)},Y.filter(lt=>!lt.position&&Q===0||lt.position===F).map((lt,Ee)=>{var fa,Un;return X.createElement(R4,{key:lt.id,icons:K,index:Ee,toast:lt,defaultRichColors:S,duration:(fa=C?.duration)!=null?fa:w,className:C?.className,descriptionClassName:C?.descriptionClassName,invert:l,visibleToasts:R,closeButton:(Un=C?.closeButton)!=null?Un:h,interacting:we,position:F,style:C?.style,unstyled:C?.unstyled,classNames:C?.classNames,cancelButtonStyle:C?.cancelButtonStyle,actionButtonStyle:C?.actionButtonStyle,closeButtonAriaLabel:C?.closeButtonAriaLabel,removeToast:W,toasts:Y.filter(Tn=>Tn.position==lt.position),heights:bt.filter(Tn=>Tn.position==lt.position),setHeights:It,expandByDefault:p,gap:I,expanded:Mt,swipeDirections:t.swipeDirections})})):null}))});async function D4(n,t,i){try{await e4(n,t),Rb.success("Login feito com sucesso!"),/android|iphone|ipad|iPod/i.test(navigator.userAgent)?i("/photoupload"):i("/upload")}catch(o){let l="Erro desconhecido ao fazer login.";switch(o.code){case"auth/invalid-email":l="Email inválido.";break;case"auth/user-not-found":case"auth/invalid-credential":case"auth/wrong-password":l="Usuário ou senha incorreto.";break;case"auth/too-many-requests":l="Muitas tentativas. Tente novamente mais tarde.";break;case"auth/missing-password":l="Por favor, digite a senha.";break;default:o.message&&(l=o.message)}Rb.error(l)}}function k4(){const[n,t]=O.useState(""),[i,o]=O.useState(""),l=bh(),c=()=>D4(n,i,l);return G.jsxs("div",{className:"login-bg",children:[G.jsx(C4,{position:"top-right",autoClose:3e3,closeOnClick:!0}),G.jsxs(vs.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.7},className:"login-card",children:[G.jsxs("div",{className:"login-header",children:[G.jsx("h1",{className:"login-title",children:"Login"}),G.jsx("p",{className:"login-subtitle",children:"Faça login para continuar"})]}),G.jsx("input",{className:"login-input",type:"email",placeholder:"Email",value:n,onChange:f=>t(f.target.value)}),G.jsx("input",{className:"login-input",type:"password",placeholder:"Senha",value:i,onChange:f=>o(f.target.value)}),G.jsx(vs.button,{whileHover:{scale:1.03},whileTap:{scale:.97},className:"login-btn",onClick:c,children:"Entrar"})]})]})}function M4(n){return zr({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"},child:[]}]})(n)}function N4(n){return zr({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"},child:[]}]})(n)}function P4(){const[n,t]=O.useState(""),[i,o]=O.useState(null),[l,c]=O.useState(""),[f,p]=O.useState(!1),[h,m]=O.useState(""),[g,y]=O.useState([]),[x,S]=O.useState(!1),[w,_]=O.useState(!1),[R,C]=O.useState(""),[M,I]=O.useState("");O.useEffect(()=>{async function $(){try{const Z=await mh();y(Z)}catch(Z){console.error("Erro ao carregar pastas:",Z)}}async function Y(){const Z=n4();if(Z){const bt=Z.email==="admin@email.com";S(bt),await $()}}Y()},[]);const K=$=>o($.target.files[0]),z=async()=>{if(!i||!n||!M.trim()){m("Informe o código, o nome da imagem e selecione um arquivo!");return}p(!0),m("");try{const $=i.name.split(".").pop(),Y=new File([i],`${M}.${$}`,{type:i.type}),Z=await $M(Y,n,x);c(Z),alert("Upload concluído com sucesso!")}catch($){console.error("Erro ao enviar imagem:",$),m($.message)}finally{p(!1)}},J=async()=>{if(!R.trim()){alert("Informe um nome para a nova pasta!");return}try{await ZM(R),alert("Nova pasta criada com sucesso!"),_(!1),C("");const $=await mh();y($),t(R)}catch($){console.error("Erro ao criar pasta:",$),alert("Erro ao criar nova pasta.")}};return G.jsx("div",{className:"photo-upload-root",children:G.jsxs("div",{className:"photo-upload-box",children:[G.jsx("p",{children:"Selecione ou crie o código da construção"}),G.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[G.jsxs("select",{className:"photo-upload-input",value:n,onChange:$=>t($.target.value),children:[G.jsx("option",{value:"",children:"Selecione uma construção"}),g.map($=>G.jsx("option",{value:$,children:$},$))]}),x&&G.jsx("button",{title:"Criar nova construção",onClick:()=>_(!w),style:{backgroundColor:"#4b5ebeff",border:"none",borderRadius:"8px",padding:"10px 10px",cursor:"pointer"},children:G.jsx(M4,{size:22,color:"white"})})]}),w&&G.jsxs("div",{style:{marginTop:"10px"},children:[G.jsx("input",{type:"text",placeholder:"Nome da nova construção",value:R,onChange:$=>C($.target.value),className:"photo-upload-input"}),G.jsx("button",{onClick:J,style:{background:"#4b5ebeff"},children:"Criar pasta"})]}),G.jsx("p",{children:"Informe o nome da imagem"}),G.jsx("input",{type:"text",placeholder:"Ex: fachada_frontal",value:M,onChange:$=>I($.target.value),className:"photo-upload-input"}),G.jsx("p",{children:"Insira foto da construção"}),G.jsxs("div",{className:"photo-upload-container",children:[G.jsx("label",{htmlFor:"photo_upload",children:G.jsx(N4,{size:48,color:"white",style:{cursor:"pointer"}})}),G.jsx("input",{id:"photo_upload",type:"file",accept:"image/*",capture:"environment",style:{display:"none"},onChange:K})]}),G.jsx("button",{onClick:z,disabled:f,style:{background:"#4b5ebeff",marginTop:"12px"},children:f?"Enviando...":"Enviar Imagem"}),h&&G.jsx("p",{style:{color:"red"},children:h}),l&&G.jsxs("div",{className:"photo-preview",children:[G.jsx("img",{src:l,alt:"Pré-visualização"}),G.jsxs("p",{children:["URL: ",l]})]})]})})}function L4(){const[n,t]=O.useState(null),[i,o]=O.useState(null),[l,c]=O.useState(null),[f,p]=O.useState(!1);async function h(g){if(!g)return;p(!0);const y=new FormData;y.append("file",g);try{const S=await(await fetch("https://pii-6-sem.onrender.com/upload/file",{method:"POST",body:y})).json();S.urn?(t(S.urn),console.log("Upload concluído, URN:",S.urn)):console.error("Erro no upload:",S)}catch(x){console.error("Erro ao enviar arquivo:",x)}finally{p(!1)}}async function m(g){if(!g)return;if(typeof g=="string"){const w=new FormData;w.append("imageUrl",g);const R=await(await fetch("https://pii-6-sem.onrender.com/upload/image",{method:"POST",body:w})).json();R.imageUrl?o(R.imageUrl):console.error("Falha no upload:",R);return}const y=new FormData;y.append("file",g);const S=await(await fetch("https://pii-6-sem.onrender.com/upload/image",{method:"POST",body:y})).json();S.imageUrl?(o(S.imageUrl),console.log("Imagem enviada:",S.imageUrl)):console.error("Falha no upload:",S)}return G.jsx(y_,{children:G.jsxs(KE,{children:[G.jsx(Wo,{path:"/",element:G.jsx(k4,{})}),G.jsx(Wo,{path:"/photoupload",element:G.jsx(P4,{})}),G.jsx(Wo,{path:"/upload",element:G.jsx(WM,{onUploadFile:h,onUploadImage:m,isLoading:f})}),G.jsx(Wo,{path:"/viewer",element:G.jsx(t4,{urn:n,imageUrl:i,screenshotUrl:l,setScreenshotUrl:c})})]})})}iE.createRoot(document.getElementById("root")).render(G.jsx(O.StrictMode,{children:G.jsx(L4,{})}));
