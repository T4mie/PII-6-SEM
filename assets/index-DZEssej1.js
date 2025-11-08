(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Db(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ed={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function ZE(){if(ly)return Yo;ly=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(o,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:n,type:o,key:f,ref:l!==void 0?l:null,props:c}}return Yo.Fragment=t,Yo.jsx=i,Yo.jsxs=i,Yo}var uy;function QE(){return uy||(uy=1,ed.exports=ZE()),ed.exports}var K=QE(),nd={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function WE(){if(cy)return pt;cy=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(w){return w===null||typeof w!="object"?null:(w=y&&w[y]||w["@@iterator"],typeof w=="function"?w:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function R(w,H,W){this.props=w,this.context=H,this.refs=A,this.updater=W||S}R.prototype.isReactComponent={},R.prototype.setState=function(w,H){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,H,"setState")},R.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function C(){}C.prototype=R.prototype;function N(w,H,W){this.props=w,this.context=H,this.refs=A,this.updater=W||S}var I=N.prototype=new C;I.constructor=N,E(I,R.prototype),I.isPureReactComponent=!0;var X=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},J=Object.prototype.hasOwnProperty;function $(w,H,W,G,Q,rt){return W=rt.ref,{$$typeof:n,type:w,key:H,ref:W!==void 0?W:null,props:rt}}function F(w,H){return $(w.type,H,void 0,void 0,void 0,w.props)}function Z(w){return typeof w=="object"&&w!==null&&w.$$typeof===n}function xt(w){var H={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(W){return H[W]})}var It=/\/+/g;function Mt(w,H){return typeof w=="object"&&w!==null&&w.key!=null?xt(""+w.key):H.toString(36)}function Wt(){}function Ee(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(Wt,Wt):(w.status="pending",w.then(function(H){w.status==="pending"&&(w.status="fulfilled",w.value=H)},function(H){w.status==="pending"&&(w.status="rejected",w.reason=H)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function Nt(w,H,W,G,Q){var rt=typeof w;(rt==="undefined"||rt==="boolean")&&(w=null);var nt=!1;if(w===null)nt=!0;else switch(rt){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(w.$$typeof){case n:case t:nt=!0;break;case g:return nt=w._init,Nt(nt(w._payload),H,W,G,Q)}}if(nt)return Q=Q(w),nt=G===""?"."+Mt(w,0):G,X(Q)?(W="",nt!=null&&(W=nt.replace(It,"$&/")+"/"),Nt(Q,H,W,"",function(we){return we})):Q!=null&&(Z(Q)&&(Q=F(Q,W+(Q.key==null||w&&w.key===Q.key?"":(""+Q.key).replace(It,"$&/")+"/")+nt)),H.push(Q)),1;nt=0;var Jt=G===""?".":G+":";if(X(w))for(var lt=0;lt<w.length;lt++)G=w[lt],rt=Jt+Mt(G,lt),nt+=Nt(G,H,W,rt,Q);else if(lt=x(w),typeof lt=="function")for(w=lt.call(w),lt=0;!(G=w.next()).done;)G=G.value,rt=Jt+Mt(G,lt++),nt+=Nt(G,H,W,rt,Q);else if(rt==="object"){if(typeof w.then=="function")return Nt(Ee(w),H,W,G,Q);throw H=String(w),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return nt}function U(w,H,W){if(w==null)return w;var G=[],Q=0;return Nt(w,G,"","",function(rt){return H.call(W,rt,Q++)}),G}function q(w){if(w._status===-1){var H=w._result;H=H(),H.then(function(W){(w._status===0||w._status===-1)&&(w._status=1,w._result=W)},function(W){(w._status===0||w._status===-1)&&(w._status=2,w._result=W)}),w._status===-1&&(w._status=0,w._result=H)}if(w._status===1)return w._result.default;throw w._result}var tt=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function ht(){}return pt.Children={map:U,forEach:function(w,H,W){U(w,function(){H.apply(this,arguments)},W)},count:function(w){var H=0;return U(w,function(){H++}),H},toArray:function(w){return U(w,function(H){return H})||[]},only:function(w){if(!Z(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},pt.Component=R,pt.Fragment=i,pt.Profiler=l,pt.PureComponent=N,pt.StrictMode=o,pt.Suspense=h,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,pt.__COMPILER_RUNTIME={__proto__:null,c:function(w){return V.H.useMemoCache(w)}},pt.cache=function(w){return function(){return w.apply(null,arguments)}},pt.cloneElement=function(w,H,W){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var G=E({},w.props),Q=w.key,rt=void 0;if(H!=null)for(nt in H.ref!==void 0&&(rt=void 0),H.key!==void 0&&(Q=""+H.key),H)!J.call(H,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&H.ref===void 0||(G[nt]=H[nt]);var nt=arguments.length-2;if(nt===1)G.children=W;else if(1<nt){for(var Jt=Array(nt),lt=0;lt<nt;lt++)Jt[lt]=arguments[lt+2];G.children=Jt}return $(w.type,Q,void 0,void 0,rt,G)},pt.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:c,_context:w},w},pt.createElement=function(w,H,W){var G,Q={},rt=null;if(H!=null)for(G in H.key!==void 0&&(rt=""+H.key),H)J.call(H,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(Q[G]=H[G]);var nt=arguments.length-2;if(nt===1)Q.children=W;else if(1<nt){for(var Jt=Array(nt),lt=0;lt<nt;lt++)Jt[lt]=arguments[lt+2];Q.children=Jt}if(w&&w.defaultProps)for(G in nt=w.defaultProps,nt)Q[G]===void 0&&(Q[G]=nt[G]);return $(w,rt,void 0,void 0,null,Q)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(w){return{$$typeof:p,render:w}},pt.isValidElement=Z,pt.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:q}},pt.memo=function(w,H){return{$$typeof:m,type:w,compare:H===void 0?null:H}},pt.startTransition=function(w){var H=V.T,W={};V.T=W;try{var G=w(),Q=V.S;Q!==null&&Q(W,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(ht,tt)}catch(rt){tt(rt)}finally{V.T=H}},pt.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},pt.use=function(w){return V.H.use(w)},pt.useActionState=function(w,H,W){return V.H.useActionState(w,H,W)},pt.useCallback=function(w,H){return V.H.useCallback(w,H)},pt.useContext=function(w){return V.H.useContext(w)},pt.useDebugValue=function(){},pt.useDeferredValue=function(w,H){return V.H.useDeferredValue(w,H)},pt.useEffect=function(w,H,W){var G=V.H;if(typeof W=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return G.useEffect(w,H)},pt.useId=function(){return V.H.useId()},pt.useImperativeHandle=function(w,H,W){return V.H.useImperativeHandle(w,H,W)},pt.useInsertionEffect=function(w,H){return V.H.useInsertionEffect(w,H)},pt.useLayoutEffect=function(w,H){return V.H.useLayoutEffect(w,H)},pt.useMemo=function(w,H){return V.H.useMemo(w,H)},pt.useOptimistic=function(w,H){return V.H.useOptimistic(w,H)},pt.useReducer=function(w,H,W){return V.H.useReducer(w,H,W)},pt.useRef=function(w){return V.H.useRef(w)},pt.useState=function(w){return V.H.useState(w)},pt.useSyncExternalStore=function(w,H,W){return V.H.useSyncExternalStore(w,H,W)},pt.useTransition=function(){return V.H.useTransition()},pt.version="19.1.1",pt}var fy;function gh(){return fy||(fy=1,nd.exports=WE()),nd.exports}var O=gh();const Y=Db(O);var ad={exports:{}},Xo={},id={exports:{}},rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function JE(){return dy||(dy=1,(function(n){function t(U,q){var tt=U.length;U.push(q);t:for(;0<tt;){var ht=tt-1>>>1,w=U[ht];if(0<l(w,q))U[ht]=q,U[tt]=w,tt=ht;else break t}}function i(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var q=U[0],tt=U.pop();if(tt!==q){U[0]=tt;t:for(var ht=0,w=U.length,H=w>>>1;ht<H;){var W=2*(ht+1)-1,G=U[W],Q=W+1,rt=U[Q];if(0>l(G,tt))Q<w&&0>l(rt,G)?(U[ht]=rt,U[Q]=tt,ht=Q):(U[ht]=G,U[W]=tt,ht=W);else if(Q<w&&0>l(rt,tt))U[ht]=rt,U[Q]=tt,ht=Q;else break t}}return q}function l(U,q){var tt=U.sortIndex-q.sortIndex;return tt!==0?tt:U.id-q.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var h=[],m=[],g=1,y=null,x=3,S=!1,E=!1,A=!1,R=!1,C=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function X(U){for(var q=i(m);q!==null;){if(q.callback===null)o(m);else if(q.startTime<=U)o(m),q.sortIndex=q.expirationTime,t(h,q);else break;q=i(m)}}function V(U){if(A=!1,X(U),!E)if(i(h)!==null)E=!0,J||(J=!0,Mt());else{var q=i(m);q!==null&&Nt(V,q.startTime-U)}}var J=!1,$=-1,F=5,Z=-1;function xt(){return R?!0:!(n.unstable_now()-Z<F)}function It(){if(R=!1,J){var U=n.unstable_now();Z=U;var q=!0;try{t:{E=!1,A&&(A=!1,N($),$=-1),S=!0;var tt=x;try{e:{for(X(U),y=i(h);y!==null&&!(y.expirationTime>U&&xt());){var ht=y.callback;if(typeof ht=="function"){y.callback=null,x=y.priorityLevel;var w=ht(y.expirationTime<=U);if(U=n.unstable_now(),typeof w=="function"){y.callback=w,X(U),q=!0;break e}y===i(h)&&o(h),X(U)}else o(h);y=i(h)}if(y!==null)q=!0;else{var H=i(m);H!==null&&Nt(V,H.startTime-U),q=!1}}break t}finally{y=null,x=tt,S=!1}q=void 0}}finally{q?Mt():J=!1}}}var Mt;if(typeof I=="function")Mt=function(){I(It)};else if(typeof MessageChannel<"u"){var Wt=new MessageChannel,Ee=Wt.port2;Wt.port1.onmessage=It,Mt=function(){Ee.postMessage(null)}}else Mt=function(){C(It,0)};function Nt(U,q){$=C(function(){U(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_next=function(U){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var tt=x;x=q;try{return U()}finally{x=tt}},n.unstable_requestPaint=function(){R=!0},n.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var tt=x;x=U;try{return q()}finally{x=tt}},n.unstable_scheduleCallback=function(U,q,tt){var ht=n.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?ht+tt:ht):tt=ht,U){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=tt+w,U={id:g++,callback:q,priorityLevel:U,startTime:tt,expirationTime:w,sortIndex:-1},tt>ht?(U.sortIndex=tt,t(m,U),i(h)===null&&U===i(m)&&(A?(N($),$=-1):A=!0,Nt(V,tt-ht))):(U.sortIndex=w,t(h,U),E||S||(E=!0,J||(J=!0,Mt()))),U},n.unstable_shouldYield=xt,n.unstable_wrapCallback=function(U){var q=x;return function(){var tt=x;x=q;try{return U.apply(this,arguments)}finally{x=tt}}}})(rd)),rd}var hy;function tw(){return hy||(hy=1,id.exports=JE()),id.exports}var od={exports:{}},Te={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function ew(){if(py)return Te;py=1;var n=gh();function t(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(h,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:h,containerInfo:m,implementation:g}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Te.createPortal=function(h,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(h,m,null,g)},Te.flushSync=function(h){var m=f.T,g=o.p;try{if(f.T=null,o.p=2,h)return h()}finally{f.T=m,o.p=g,o.d.f()}},Te.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(h,m))},Te.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},Te.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var g=m.as,y=p(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?o.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:S}):g==="script"&&o.d.X(h,{crossOrigin:y,integrity:x,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Te.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=p(m.as,m.crossOrigin);o.d.M(h,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(h)},Te.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=p(g,m.crossOrigin);o.d.L(h,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Te.preloadModule=function(h,m){if(typeof h=="string")if(m){var g=p(m.as,m.crossOrigin);o.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(h)},Te.requestFormReset=function(h){o.d.r(h)},Te.unstable_batchedUpdates=function(h,m){return h(m)},Te.useFormState=function(h,m,g){return f.H.useFormState(h,m,g)},Te.useFormStatus=function(){return f.H.useHostTransitionStatus()},Te.version="19.1.1",Te}var my;function kb(){if(my)return od.exports;my=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),od.exports=ew(),od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function nw(){if(gy)return Xo;gy=1;var n=tw(),t=gh(),i=kb();function o(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function f(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(o(188))}function h(e){var a=e.alternate;if(!a){if(a=c(e),a===null)throw Error(o(188));return a!==e?null:e}for(var r=e,s=a;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(s=u.return,s!==null){r=s;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return p(u),e;if(d===s)return p(u),a;d=d.sibling}throw Error(o(188))}if(r.return!==s.return)r=u,s=d;else{for(var v=!1,b=u.child;b;){if(b===r){v=!0,r=u,s=d;break}if(b===s){v=!0,s=u,r=d;break}b=b.sibling}if(!v){for(b=d.child;b;){if(b===r){v=!0,r=d,s=u;break}if(b===s){v=!0,s=d,r=u;break}b=b.sibling}if(!v)throw Error(o(189))}}if(r.alternate!==s)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:a}function m(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=m(e),a!==null)return a;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),I=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),xt=Symbol.for("react.memo_cache_sentinel"),It=Symbol.iterator;function Mt(e){return e===null||typeof e!="object"?null:(e=It&&e[It]||e["@@iterator"],typeof e=="function"?e:null)}var Wt=Symbol.for("react.client.reference");function Ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Wt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case R:return"Profiler";case A:return"StrictMode";case V:return"Suspense";case J:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case I:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case X:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return a=e.displayName||null,a!==null?a:Ee(e.type)||"Memo";case F:a=e._payload,e=e._init;try{return Ee(e(a))}catch{}}return null}var Nt=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},ht=[],w=-1;function H(e){return{current:e}}function W(e){0>w||(e.current=ht[w],ht[w]=null,w--)}function G(e,a){w++,ht[w]=e.current,e.current=a}var Q=H(null),rt=H(null),nt=H(null),Jt=H(null);function lt(e,a){switch(G(nt,a),G(rt,e),G(Q,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?L0(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=L0(a),e=I0(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}W(Q),G(Q,e)}function we(){W(Q),W(rt),W(nt)}function fa(e){e.memoizedState!==null&&G(Jt,e);var a=Q.current,r=I0(a,e.type);a!==r&&(G(rt,e),G(Q,r))}function Ln(e){rt.current===e&&(W(Q),W(rt)),Jt.current===e&&(W(Jt),Ho._currentValue=tt)}var Tn=Object.prototype.hasOwnProperty,Kr=n.unstable_scheduleCallback,Ja=n.unstable_cancelCallback,Gu=n.unstable_shouldYield,Ns=n.unstable_requestPaint,be=n.unstable_now,Ps=n.unstable_getCurrentPriorityLevel,Ye=n.unstable_ImmediatePriority,Us=n.unstable_UserBlockingPriority,Pi=n.unstable_NormalPriority,_e=n.unstable_LowPriority,In=n.unstable_IdlePriority,Fu=n.log,Yu=n.unstable_setDisableYieldValue,Sn=null,Ae=null;function ln(e){if(typeof Fu=="function"&&Yu(e),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Sn,e)}catch{}}var he=Math.clz32?Math.clz32:ha,da=Math.log,Ls=Math.LN2;function ha(e){return e>>>=0,e===0?32:31-(da(e)/Ls|0)|0}var Ui=256,Li=4194304;function En(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ti(e,a,r){var s=e.pendingLanes;if(s===0)return 0;var u=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=s&134217727;return b!==0?(s=b&~d,s!==0?u=En(s):(v&=b,v!==0?u=En(v):r||(r=b&~e,r!==0&&(u=En(r))))):(b=s&~d,b!==0?u=En(b):v!==0?u=En(v):r||(r=s&~e,r!==0&&(u=En(r)))),u===0?0:a!==0&&a!==u&&(a&d)===0&&(d=u&-u,r=a&-a,d>=r||d===32&&(r&4194048)!==0)?a:u}function ei(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function $r(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function un(){var e=Ui;return Ui<<=1,(Ui&4194048)===0&&(Ui=256),e}function Is(){var e=Li;return Li<<=1,(Li&62914560)===0&&(Li=4194304),e}function Zr(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function pa(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bs(e,a,r,s,u,d){var v=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var b=e.entanglements,T=e.expirationTimes,M=e.hiddenUpdates;for(r=v&~r;0<r;){var B=31-he(r),j=1<<B;b[B]=0,T[B]=-1;var P=M[B];if(P!==null)for(M[B]=null,B=0;B<P.length;B++){var L=P[B];L!==null&&(L.lane&=-536870913)}r&=~j}s!==0&&dt(e,s,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~a))}function dt(e,a,r){e.pendingLanes|=a,e.suspendedLanes&=~a;var s=31-he(a);e.entangledLanes|=a,e.entanglements[s]=e.entanglements[s]|1073741824|r&4194090}function Yt(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var s=31-he(r),u=1<<s;u&a|e[s]&a&&(e[s]|=a),r&=~u}}function te(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ni(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:ny(e.type))}function ie(e,a){var r=q.p;try{return q.p=e,a()}finally{q.p=r}}var Xt=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Xt,Dt="__reactProps$"+Xt,le="__reactContainer$"+Xt,Ii="__reactEvents$"+Xt,Bn="__reactListeners$"+Xt,Ep="__reactHandles$"+Xt,wp="__reactResources$"+Xt,Qr="__reactMarker$"+Xt;function Xu(e){delete e[Kt],delete e[Dt],delete e[Ii],delete e[Bn],delete e[Ep]}function Bi(e){var a=e[Kt];if(a)return a;for(var r=e.parentNode;r;){if(a=r[le]||r[Kt]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=H0(e);e!==null;){if(r=e[Kt])return r;e=H0(e)}return a}e=r,r=e.parentNode}return null}function zi(e){if(e=e[Kt]||e[le]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function Wr(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(o(33))}function Vi(e){var a=e[wp];return a||(a=e[wp]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ue(e){e[Qr]=!0}var _p=new Set,Ap={};function ai(e,a){Hi(e,a),Hi(e+"Capture",a)}function Hi(e,a){for(Ap[e]=a,e=0;e<a.length;e++)_p.add(a[e])}var jT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rp={},Op={};function qT(e){return Tn.call(Op,e)?!0:Tn.call(Rp,e)?!1:jT.test(e)?Op[e]=!0:(Rp[e]=!0,!1)}function zs(e,a,r){if(qT(a))if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var s=a.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+r)}}function Vs(e,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+r)}}function zn(e,a,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(a,r,""+s)}}var Ku,Cp;function ji(e){if(Ku===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);Ku=a&&a[1]||"",Cp=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ku+e+Cp}var $u=!1;function Zu(e,a){if(!e||$u)return"";$u=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(a){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(L){var P=L}Reflect.construct(e,[],j)}else{try{j.call()}catch(L){P=L}e.call(j.prototype)}}else{try{throw Error()}catch(L){P=L}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(L){if(L&&P&&typeof L.stack=="string")return[L.stack,P.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=s.DetermineComponentFrameRoot(),v=d[0],b=d[1];if(v&&b){var T=v.split(`
`),M=b.split(`
`);for(u=s=0;s<T.length&&!T[s].includes("DetermineComponentFrameRoot");)s++;for(;u<M.length&&!M[u].includes("DetermineComponentFrameRoot");)u++;if(s===T.length||u===M.length)for(s=T.length-1,u=M.length-1;1<=s&&0<=u&&T[s]!==M[u];)u--;for(;1<=s&&0<=u;s--,u--)if(T[s]!==M[u]){if(s!==1||u!==1)do if(s--,u--,0>u||T[s]!==M[u]){var B=`
`+T[s].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=s&&0<=u);break}}}finally{$u=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?ji(r):""}function GT(e){switch(e.tag){case 26:case 27:case 5:return ji(e.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 15:return Zu(e.type,!1);case 11:return Zu(e.type.render,!1);case 1:return Zu(e.type,!0);case 31:return ji("Activity");default:return""}}function Dp(e){try{var a="";do a+=GT(e),e=e.return;while(e);return a}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kp(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function FT(e){var a=kp(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),s=""+e[a];if(!e.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,d=r.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return u.call(this)},set:function(v){s=""+v,d.call(this,v)}}),Object.defineProperty(e,a,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Hs(e){e._valueTracker||(e._valueTracker=FT(e))}function Mp(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),s="";return e&&(s=kp(e)?e.checked?"true":"false":e.value),e=s,e!==r?(a.setValue(e),!0):!1}function js(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var YT=/[\n"\\]/g;function Ke(e){return e.replace(YT,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Qu(e,a,r,s,u,d,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),a!=null?v==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Xe(a)):e.value!==""+Xe(a)&&(e.value=""+Xe(a)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),a!=null?Wu(e,v,Xe(a)):r!=null?Wu(e,v,Xe(r)):s!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Xe(b):e.removeAttribute("name")}function Np(e,a,r,s,u,d,v,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),a!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||a!=null))return;r=r!=null?""+Xe(r):"",a=a!=null?""+Xe(a):r,b||a===e.value||(e.value=a),e.defaultValue=a}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=b?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function Wu(e,a,r){a==="number"&&js(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function qi(e,a,r,s){if(e=e.options,a){a={};for(var u=0;u<r.length;u++)a["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=a.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Xe(r),a=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}a!==null||e[u].disabled||(a=e[u])}a!==null&&(a.selected=!0)}}function Pp(e,a,r){if(a!=null&&(a=""+Xe(a),a!==e.value&&(e.value=a),r==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=r!=null?""+Xe(r):""}function Up(e,a,r,s){if(a==null){if(s!=null){if(r!=null)throw Error(o(92));if(Nt(s)){if(1<s.length)throw Error(o(93));s=s[0]}r=s}r==null&&(r=""),a=r}r=Xe(a),e.defaultValue=r,s=e.textContent,s===r&&s!==""&&s!==null&&(e.value=s)}function Gi(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var XT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lp(e,a,r){var s=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?s?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":s?e.setProperty(a,r):typeof r!="number"||r===0||XT.has(a)?a==="float"?e.cssFloat=r:e[a]=(""+r).trim():e[a]=r+"px"}function Ip(e,a,r){if(a!=null&&typeof a!="object")throw Error(o(62));if(e=e.style,r!=null){for(var s in r)!r.hasOwnProperty(s)||a!=null&&a.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in a)s=a[u],a.hasOwnProperty(u)&&r[u]!==s&&Lp(e,u,s)}else for(var d in a)a.hasOwnProperty(d)&&Lp(e,d,a[d])}function Ju(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var KT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$T=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qs(e){return $T.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var tc=null;function ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fi=null,Yi=null;function Bp(e){var a=zi(e);if(a&&(e=a.stateNode)){var r=e[Dt]||null;t:switch(e=a.stateNode,a.type){case"input":if(Qu(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ke(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var s=r[a];if(s!==e&&s.form===e.form){var u=s[Dt]||null;if(!u)throw Error(o(90));Qu(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(a=0;a<r.length;a++)s=r[a],s.form===e.form&&Mp(s)}break t;case"textarea":Pp(e,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&qi(e,!!r.multiple,a,!1)}}}var nc=!1;function zp(e,a,r){if(nc)return e(a,r);nc=!0;try{var s=e(a);return s}finally{if(nc=!1,(Fi!==null||Yi!==null)&&(Ol(),Fi&&(a=Fi,e=Yi,Yi=Fi=null,Bp(a),e)))for(a=0;a<e.length;a++)Bp(e[a])}}function Jr(e,a){var r=e.stateNode;if(r===null)return null;var s=r[Dt]||null;if(s===null)return null;r=s[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,a,typeof r));return r}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=!1;if(Vn)try{var to={};Object.defineProperty(to,"passive",{get:function(){ac=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{ac=!1}var ma=null,ic=null,Gs=null;function Vp(){if(Gs)return Gs;var e,a=ic,r=a.length,s,u="value"in ma?ma.value:ma.textContent,d=u.length;for(e=0;e<r&&a[e]===u[e];e++);var v=r-e;for(s=1;s<=v&&a[r-s]===u[d-s];s++);return Gs=u.slice(e,1<s?1-s:void 0)}function Fs(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Ys(){return!0}function Hp(){return!1}function Me(e){function a(r,s,u,d,v){this._reactName=r,this._targetInst=u,this.type=s,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(r=e[b],this[b]=r?r(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ys:Hp,this.isPropagationStopped=Hp,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),a}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=Me(ii),eo=g({},ii,{view:0,detail:0}),ZT=Me(eo),rc,oc,no,Ks=g({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(rc=e.screenX-no.screenX,oc=e.screenY-no.screenY):oc=rc=0,no=e),rc)},movementY:function(e){return"movementY"in e?e.movementY:oc}}),jp=Me(Ks),QT=g({},Ks,{dataTransfer:0}),WT=Me(QT),JT=g({},eo,{relatedTarget:0}),sc=Me(JT),tS=g({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),eS=Me(tS),nS=g({},ii,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),aS=Me(nS),iS=g({},ii,{data:0}),qp=Me(iS),rS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=sS[e])?!!a[e]:!1}function lc(){return lS}var uS=g({},eo,{key:function(e){if(e.key){var a=rS[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(e){return e.type==="keypress"?Fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cS=Me(uS),fS=g({},Ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=Me(fS),dS=g({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),hS=Me(dS),pS=g({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=Me(pS),gS=g({},Ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yS=Me(gS),vS=g({},ii,{newState:0,oldState:0}),bS=Me(vS),xS=[9,13,27,32],uc=Vn&&"CompositionEvent"in window,ao=null;Vn&&"documentMode"in document&&(ao=document.documentMode);var TS=Vn&&"TextEvent"in window&&!ao,Fp=Vn&&(!uc||ao&&8<ao&&11>=ao),Yp=" ",Xp=!1;function Kp(e,a){switch(e){case"keyup":return xS.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xi=!1;function SS(e,a){switch(e){case"compositionend":return $p(a);case"keypress":return a.which!==32?null:(Xp=!0,Yp);case"textInput":return e=a.data,e===Yp&&Xp?null:e;default:return null}}function ES(e,a){if(Xi)return e==="compositionend"||!uc&&Kp(e,a)?(e=Vp(),Gs=ic=ma=null,Xi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Fp&&a.locale!=="ko"?null:a.data;default:return null}}var wS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!wS[e.type]:a==="textarea"}function Qp(e,a,r,s){Fi?Yi?Yi.push(s):Yi=[s]:Fi=s,a=Pl(a,"onChange"),0<a.length&&(r=new Xs("onChange","change",null,r,s),e.push({event:r,listeners:a}))}var io=null,ro=null;function _S(e){k0(e,0)}function $s(e){var a=Wr(e);if(Mp(a))return e}function Wp(e,a){if(e==="change")return a}var Jp=!1;if(Vn){var cc;if(Vn){var fc="oninput"in document;if(!fc){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),fc=typeof tm.oninput=="function"}cc=fc}else cc=!1;Jp=cc&&(!document.documentMode||9<document.documentMode)}function em(){io&&(io.detachEvent("onpropertychange",nm),ro=io=null)}function nm(e){if(e.propertyName==="value"&&$s(ro)){var a=[];Qp(a,ro,e,ec(e)),zp(_S,a)}}function AS(e,a,r){e==="focusin"?(em(),io=a,ro=r,io.attachEvent("onpropertychange",nm)):e==="focusout"&&em()}function RS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $s(ro)}function OS(e,a){if(e==="click")return $s(a)}function CS(e,a){if(e==="input"||e==="change")return $s(a)}function DS(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Be=typeof Object.is=="function"?Object.is:DS;function oo(e,a){if(Be(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),s=Object.keys(a);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var u=r[s];if(!Tn.call(a,u)||!Be(e[u],a[u]))return!1}return!0}function am(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function im(e,a){var r=am(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=a&&s>=a)return{node:r,offset:a-e};e=s}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=am(r)}}function rm(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?rm(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function om(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=js(e.document);a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=js(e.document)}return a}function dc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var kS=Vn&&"documentMode"in document&&11>=document.documentMode,Ki=null,hc=null,so=null,pc=!1;function sm(e,a,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;pc||Ki==null||Ki!==js(s)||(s=Ki,"selectionStart"in s&&dc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),so&&oo(so,s)||(so=s,s=Pl(hc,"onSelect"),0<s.length&&(a=new Xs("onSelect","select",null,a,r),e.push({event:a,listeners:s}),a.target=Ki)))}function ri(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var $i={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionrun:ri("Transition","TransitionRun"),transitionstart:ri("Transition","TransitionStart"),transitioncancel:ri("Transition","TransitionCancel"),transitionend:ri("Transition","TransitionEnd")},mc={},lm={};Vn&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function oi(e){if(mc[e])return mc[e];if(!$i[e])return e;var a=$i[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in lm)return mc[e]=a[r];return e}var um=oi("animationend"),cm=oi("animationiteration"),fm=oi("animationstart"),MS=oi("transitionrun"),NS=oi("transitionstart"),PS=oi("transitioncancel"),dm=oi("transitionend"),hm=new Map,gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gc.push("scrollEnd");function cn(e,a){hm.set(e,a),ai(a,[e])}var pm=new WeakMap;function $e(e,a){if(typeof e=="object"&&e!==null){var r=pm.get(e);return r!==void 0?r:(a={value:e,source:a,stack:Dp(a)},pm.set(e,a),a)}return{value:e,source:a,stack:Dp(a)}}var Ze=[],Zi=0,yc=0;function Zs(){for(var e=Zi,a=yc=Zi=0;a<e;){var r=Ze[a];Ze[a++]=null;var s=Ze[a];Ze[a++]=null;var u=Ze[a];Ze[a++]=null;var d=Ze[a];if(Ze[a++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}d!==0&&mm(r,u,d)}}function Qs(e,a,r,s){Ze[Zi++]=e,Ze[Zi++]=a,Ze[Zi++]=r,Ze[Zi++]=s,yc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function vc(e,a,r,s){return Qs(e,a,r,s),Ws(e)}function Qi(e,a){return Qs(e,null,null,a),Ws(e)}function mm(e,a,r){e.lanes|=r;var s=e.alternate;s!==null&&(s.lanes|=r);for(var u=!1,d=e.return;d!==null;)d.childLanes|=r,s=d.alternate,s!==null&&(s.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&a!==null&&(u=31-he(r),e=d.hiddenUpdates,s=e[u],s===null?e[u]=[a]:s.push(a),a.lane=r|536870912),d):null}function Ws(e){if(50<No)throw No=0,_f=null,Error(o(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Wi={};function US(e,a,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,a,r,s){return new US(e,a,r,s)}function bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hn(e,a){var r=e.alternate;return r===null?(r=ze(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function gm(e,a){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,a=r.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Js(e,a,r,s,u,d){var v=0;if(s=e,typeof e=="function")bc(e)&&(v=1);else if(typeof e=="string")v=IE(e,r,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Z:return e=ze(31,r,a,u),e.elementType=Z,e.lanes=d,e;case E:return si(r.children,u,d,a);case A:v=8,u|=24;break;case R:return e=ze(12,r,a,u|2),e.elementType=R,e.lanes=d,e;case V:return e=ze(13,r,a,u),e.elementType=V,e.lanes=d,e;case J:return e=ze(19,r,a,u),e.elementType=J,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:case I:v=10;break t;case N:v=9;break t;case X:v=11;break t;case $:v=14;break t;case F:v=16,s=null;break t}v=29,r=Error(o(130,e===null?"null":typeof e,"")),s=null}return a=ze(v,r,a,u),a.elementType=e,a.type=s,a.lanes=d,a}function si(e,a,r,s){return e=ze(7,e,s,a),e.lanes=r,e}function xc(e,a,r){return e=ze(6,e,null,a),e.lanes=r,e}function Tc(e,a,r){return a=ze(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Ji=[],tr=0,tl=null,el=0,Qe=[],We=0,li=null,jn=1,qn="";function ui(e,a){Ji[tr++]=el,Ji[tr++]=tl,tl=e,el=a}function ym(e,a,r){Qe[We++]=jn,Qe[We++]=qn,Qe[We++]=li,li=e;var s=jn;e=qn;var u=32-he(s)-1;s&=~(1<<u),r+=1;var d=32-he(a)+u;if(30<d){var v=u-u%5;d=(s&(1<<v)-1).toString(32),s>>=v,u-=v,jn=1<<32-he(a)+u|r<<u|s,qn=d+e}else jn=1<<d|r<<u|s,qn=e}function Sc(e){e.return!==null&&(ui(e,1),ym(e,1,0))}function Ec(e){for(;e===tl;)tl=Ji[--tr],Ji[tr]=null,el=Ji[--tr],Ji[tr]=null;for(;e===li;)li=Qe[--We],Qe[We]=null,qn=Qe[--We],Qe[We]=null,jn=Qe[--We],Qe[We]=null}var Re=null,Ht=null,St=!1,ci=null,wn=!1,wc=Error(o(519));function fi(e){var a=Error(o(418,""));throw co($e(a,e)),wc}function vm(e){var a=e.stateNode,r=e.type,s=e.memoizedProps;switch(a[Kt]=e,a[Dt]=s,r){case"dialog":vt("cancel",a),vt("close",a);break;case"iframe":case"object":case"embed":vt("load",a);break;case"video":case"audio":for(r=0;r<Uo.length;r++)vt(Uo[r],a);break;case"source":vt("error",a);break;case"img":case"image":case"link":vt("error",a),vt("load",a);break;case"details":vt("toggle",a);break;case"input":vt("invalid",a),Np(a,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Hs(a);break;case"select":vt("invalid",a);break;case"textarea":vt("invalid",a),Up(a,s.value,s.defaultValue,s.children),Hs(a)}r=s.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||s.suppressHydrationWarning===!0||U0(a.textContent,r)?(s.popover!=null&&(vt("beforetoggle",a),vt("toggle",a)),s.onScroll!=null&&vt("scroll",a),s.onScrollEnd!=null&&vt("scrollend",a),s.onClick!=null&&(a.onclick=Ul),a=!0):a=!1,a||fi(e)}function bm(e){for(Re=e.return;Re;)switch(Re.tag){case 5:case 13:wn=!1;return;case 27:case 3:wn=!0;return;default:Re=Re.return}}function lo(e){if(e!==Re)return!1;if(!St)return bm(e),St=!0,!1;var a=e.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Hf(e.type,e.memoizedProps)),r=!r),r&&Ht&&fi(e),bm(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));t:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(a===0){Ht=dn(e.nextSibling);break t}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++;e=e.nextSibling}Ht=null}}else a===27?(a=Ht,ka(e.type)?(e=Ff,Ff=null,Ht=e):Ht=a):Ht=Re?dn(e.stateNode.nextSibling):null;return!0}function uo(){Ht=Re=null,St=!1}function xm(){var e=ci;return e!==null&&(Ue===null?Ue=e:Ue.push.apply(Ue,e),ci=null),e}function co(e){ci===null?ci=[e]:ci.push(e)}var _c=H(null),di=null,Gn=null;function ga(e,a,r){G(_c,a._currentValue),a._currentValue=r}function Fn(e){e._currentValue=_c.current,W(_c)}function Ac(e,a,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,s!==null&&(s.childLanes|=a)):s!==null&&(s.childLanes&a)!==a&&(s.childLanes|=a),e===r)break;e=e.return}}function Rc(e,a,r,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var v=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var T=0;T<a.length;T++)if(b.context===a[T]){d.lanes|=r,b=d.alternate,b!==null&&(b.lanes|=r),Ac(d.return,r,e),s||(v=null);break t}d=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(o(341));v.lanes|=r,d=v.alternate,d!==null&&(d.lanes|=r),Ac(v,r,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function fo(e,a,r,s){e=null;for(var u=a,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(o(387));if(v=v.memoizedProps,v!==null){var b=u.type;Be(u.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(u===Jt.current){if(v=u.alternate,v===null)throw Error(o(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}u=u.return}e!==null&&Rc(a,e,r,s),a.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!Be(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hi(e){di=e,Gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xe(e){return Tm(di,e)}function al(e,a){return di===null&&hi(e),Tm(e,a)}function Tm(e,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},Gn===null){if(e===null)throw Error(o(308));Gn=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Gn=Gn.next=a;return r}var LS=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(r,s){e.push(s)}};this.abort=function(){a.aborted=!0,e.forEach(function(r){return r()})}},IS=n.unstable_scheduleCallback,BS=n.unstable_NormalPriority,re={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oc(){return{controller:new LS,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&IS(BS,function(){e.controller.abort()})}var po=null,Cc=0,er=0,nr=null;function zS(e,a){if(po===null){var r=po=[];Cc=0,er=Mf(),nr={status:"pending",value:void 0,then:function(s){r.push(s)}}}return Cc++,a.then(Sm,Sm),a}function Sm(){if(--Cc===0&&po!==null){nr!==null&&(nr.status="fulfilled");var e=po;po=null,er=0,nr=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function VS(e,a){var r=[],s={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){s.status="fulfilled",s.value=a;for(var u=0;u<r.length;u++)(0,r[u])(a)},function(u){for(s.status="rejected",s.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),s}var Em=U.S;U.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&zS(e,a),Em!==null&&Em(e,a)};var pi=H(null);function Dc(){var e=pi.current;return e!==null?e:kt.pooledCache}function il(e,a){a===null?G(pi,pi.current):G(pi,a.pool)}function wm(){var e=Dc();return e===null?null:{parent:re._currentValue,pool:e}}var mo=Error(o(460)),_m=Error(o(474)),rl=Error(o(542)),kc={then:function(){}};function Am(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ol(){}function Rm(e,a,r){switch(r=e[r],r===void 0?e.push(a):r!==a&&(a.then(ol,ol),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Cm(e),e;default:if(typeof a.status=="string")a.then(ol,ol);else{if(e=kt,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=a,e.status="pending",e.then(function(s){if(a.status==="pending"){var u=a;u.status="fulfilled",u.value=s}},function(s){if(a.status==="pending"){var u=a;u.status="rejected",u.reason=s}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Cm(e),e}throw go=a,mo}}var go=null;function Om(){if(go===null)throw Error(o(459));var e=go;return go=null,e}function Cm(e){if(e===mo||e===rl)throw Error(o(483))}var ya=!1;function Mc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nc(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,a,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Et&2)!==0){var u=s.pending;return u===null?a.next=a:(a.next=u.next,u.next=a),s.pending=a,a=Ws(e),mm(e,null,r),a}return Qs(e,s,a,r),Ws(e)}function yo(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var s=a.lanes;s&=e.pendingLanes,r|=s,a.lanes=r,Yt(e,r)}}function Pc(e,a){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var v={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=v:d=d.next=v,r=r.next}while(r!==null);d===null?u=d=a:d=d.next=a}else u=d=a;r={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:s.shared,callbacks:s.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}var Uc=!1;function vo(){if(Uc){var e=nr;if(e!==null)throw e}}function bo(e,a,r,s){Uc=!1;var u=e.updateQueue;ya=!1;var d=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var T=b,M=T.next;T.next=null,v===null?d=M:v.next=M,v=T;var B=e.alternate;B!==null&&(B=B.updateQueue,b=B.lastBaseUpdate,b!==v&&(b===null?B.firstBaseUpdate=M:b.next=M,B.lastBaseUpdate=T))}if(d!==null){var j=u.baseState;v=0,B=M=T=null,b=d;do{var P=b.lane&-536870913,L=P!==b.lane;if(L?(bt&P)===P:(s&P)===P){P!==0&&P===er&&(Uc=!0),B!==null&&(B=B.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ct=e,ot=b;P=a;var Rt=r;switch(ot.tag){case 1:if(ct=ot.payload,typeof ct=="function"){j=ct.call(Rt,j,P);break t}j=ct;break t;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=ot.payload,P=typeof ct=="function"?ct.call(Rt,j,P):ct,P==null)break t;j=g({},j,P);break t;case 2:ya=!0}}P=b.callback,P!==null&&(e.flags|=64,L&&(e.flags|=8192),L=u.callbacks,L===null?u.callbacks=[P]:L.push(P))}else L={lane:P,tag:b.tag,payload:b.payload,callback:b.callback,next:null},B===null?(M=B=L,T=j):B=B.next=L,v|=P;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;L=b,b=L.next,L.next=null,u.lastBaseUpdate=L,u.shared.pending=null}}while(!0);B===null&&(T=j),u.baseState=T,u.firstBaseUpdate=M,u.lastBaseUpdate=B,d===null&&(u.shared.lanes=0),Ra|=v,e.lanes=v,e.memoizedState=j}}function Dm(e,a){if(typeof e!="function")throw Error(o(191,e));e.call(a)}function km(e,a){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Dm(r[e],a)}var ar=H(null),sl=H(0);function Mm(e,a){e=Wn,G(sl,e),G(ar,a),Wn=e|a.baseLanes}function Lc(){G(sl,Wn),G(ar,ar.current)}function Ic(){Wn=sl.current,W(ar),W(sl)}var xa=0,mt=null,_t=null,ee=null,ll=!1,ir=!1,mi=!1,ul=0,xo=0,rr=null,HS=0;function $t(){throw Error(o(321))}function Bc(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!Be(e[r],a[r]))return!1;return!0}function zc(e,a,r,s,u,d){return xa=d,mt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,U.H=e===null||e.memoizedState===null?mg:gg,mi=!1,d=r(s,u),mi=!1,ir&&(d=Pm(a,r,s,u)),Nm(e),d}function Nm(e){U.H=ml;var a=_t!==null&&_t.next!==null;if(xa=0,ee=_t=mt=null,ll=!1,xo=0,rr=null,a)throw Error(o(300));e===null||ce||(e=e.dependencies,e!==null&&nl(e)&&(ce=!0))}function Pm(e,a,r,s){mt=e;var u=0;do{if(ir&&(rr=null),xo=0,ir=!1,25<=u)throw Error(o(301));if(u+=1,ee=_t=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=KS,d=a(r,s)}while(ir);return d}function jS(){var e=U.H,a=e.useState()[0];return a=typeof a.then=="function"?To(a):a,e=e.useState()[0],(_t!==null?_t.memoizedState:null)!==e&&(mt.flags|=1024),a}function Vc(){var e=ul!==0;return ul=0,e}function Hc(e,a,r){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r}function jc(e){if(ll){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}ll=!1}xa=0,ee=_t=mt=null,ir=!1,xo=ul=0,rr=null}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?mt.memoizedState=ee=e:ee=ee.next=e,ee}function ne(){if(_t===null){var e=mt.alternate;e=e!==null?e.memoizedState:null}else e=_t.next;var a=ee===null?mt.memoizedState:ee.next;if(a!==null)ee=a,_t=e;else{if(e===null)throw mt.alternate===null?Error(o(467)):Error(o(310));_t=e,e={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},ee===null?mt.memoizedState=ee=e:ee=ee.next=e}return ee}function qc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var a=xo;return xo+=1,rr===null&&(rr=[]),e=Rm(rr,e,a),a=mt,(ee===null?a.memoizedState:ee.next)===null&&(a=a.alternate,U.H=a===null||a.memoizedState===null?mg:gg),e}function cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return To(e);if(e.$$typeof===I)return xe(e)}throw Error(o(438,String(e)))}function Gc(e){var a=null,r=mt.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var s=mt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(a={data:s.data.map(function(u){return u.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=qc(),mt.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(e),s=0;s<e;s++)r[s]=xt;return a.index++,r}function Yn(e,a){return typeof a=="function"?a(e):a}function fl(e){var a=ne();return Fc(a,_t,e)}function Fc(e,a,r){var s=e.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=r;var u=e.baseQueue,d=s.pending;if(d!==null){if(u!==null){var v=u.next;u.next=d.next,d.next=v}a.baseQueue=u=d,s.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{a=u.next;var b=v=null,T=null,M=a,B=!1;do{var j=M.lane&-536870913;if(j!==M.lane?(bt&j)===j:(xa&j)===j){var P=M.revertLane;if(P===0)T!==null&&(T=T.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),j===er&&(B=!0);else if((xa&P)===P){M=M.next,P===er&&(B=!0);continue}else j={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},T===null?(b=T=j,v=d):T=T.next=j,mt.lanes|=P,Ra|=P;j=M.action,mi&&r(d,j),d=M.hasEagerState?M.eagerState:r(d,j)}else P={lane:j,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},T===null?(b=T=P,v=d):T=T.next=P,mt.lanes|=j,Ra|=j;M=M.next}while(M!==null&&M!==a);if(T===null?v=d:T.next=b,!Be(d,e.memoizedState)&&(ce=!0,B&&(r=nr,r!==null)))throw r;e.memoizedState=d,e.baseState=v,e.baseQueue=T,s.lastRenderedState=d}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Yc(e){var a=ne(),r=a.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=r.dispatch,u=r.pending,d=a.memoizedState;if(u!==null){r.pending=null;var v=u=u.next;do d=e(d,v.action),v=v.next;while(v!==u);Be(d,a.memoizedState)||(ce=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),r.lastRenderedState=d}return[d,s]}function Um(e,a,r){var s=mt,u=ne(),d=St;if(d){if(r===void 0)throw Error(o(407));r=r()}else r=a();var v=!Be((_t||u).memoizedState,r);v&&(u.memoizedState=r,ce=!0),u=u.queue;var b=Bm.bind(null,s,u,e);if(So(2048,8,b,[e]),u.getSnapshot!==a||v||ee!==null&&ee.memoizedState.tag&1){if(s.flags|=2048,or(9,dl(),Im.bind(null,s,u,r,a),null),kt===null)throw Error(o(349));d||(xa&124)!==0||Lm(s,a,r)}return r}function Lm(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=mt.updateQueue,a===null?(a=qc(),mt.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function Im(e,a,r,s){a.value=r,a.getSnapshot=s,zm(a)&&Vm(e)}function Bm(e,a,r){return r(function(){zm(a)&&Vm(e)})}function zm(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!Be(e,r)}catch{return!0}}function Vm(e){var a=Qi(e,2);a!==null&&Ge(a,e,2)}function Xc(e){var a=Ne();if(typeof e=="function"){var r=e;if(e=r(),mi){ln(!0);try{r()}finally{ln(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},a}function Hm(e,a,r,s){return e.baseState=r,Fc(e,_t,typeof s=="function"?s:Yn)}function qS(e,a,r,s,u){if(pl(e))throw Error(o(485));if(e=a.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};U.T!==null?r(!0):d.isTransition=!1,s(d),r=a.pending,r===null?(d.next=a.pending=d,jm(a,d)):(d.next=r.next,a.pending=r.next=d)}}function jm(e,a){var r=a.action,s=a.payload,u=e.state;if(a.isTransition){var d=U.T,v={};U.T=v;try{var b=r(u,s),T=U.S;T!==null&&T(v,b),qm(e,a,b)}catch(M){Kc(e,a,M)}finally{U.T=d}}else try{d=r(u,s),qm(e,a,d)}catch(M){Kc(e,a,M)}}function qm(e,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(s){Gm(e,a,s)},function(s){return Kc(e,a,s)}):Gm(e,a,r)}function Gm(e,a,r){a.status="fulfilled",a.value=r,Fm(a),e.state=r,a=e.pending,a!==null&&(r=a.next,r===a?e.pending=null:(r=r.next,a.next=r,jm(e,r)))}function Kc(e,a,r){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do a.status="rejected",a.reason=r,Fm(a),a=a.next;while(a!==s)}e.action=null}function Fm(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Ym(e,a){return a}function Xm(e,a){if(St){var r=kt.formState;if(r!==null){t:{var s=mt;if(St){if(Ht){e:{for(var u=Ht,d=wn;u.nodeType!==8;){if(!d){u=null;break e}if(u=dn(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ht=dn(u.nextSibling),s=u.data==="F!";break t}}fi(s)}s=!1}s&&(a=r[0])}}return r=Ne(),r.memoizedState=r.baseState=a,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ym,lastRenderedState:a},r.queue=s,r=dg.bind(null,mt,s),s.dispatch=r,s=Xc(!1),d=Jc.bind(null,mt,!1,s.queue),s=Ne(),u={state:a,dispatch:null,action:e,pending:null},s.queue=u,r=qS.bind(null,mt,u,d,r),u.dispatch=r,s.memoizedState=e,[a,r,!1]}function Km(e){var a=ne();return $m(a,_t,e)}function $m(e,a,r){if(a=Fc(e,a,Ym)[0],e=fl(Yn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var s=To(a)}catch(v){throw v===mo?rl:v}else s=a;a=ne();var u=a.queue,d=u.dispatch;return r!==a.memoizedState&&(mt.flags|=2048,or(9,dl(),GS.bind(null,u,r),null)),[s,d,e]}function GS(e,a){e.action=a}function Zm(e){var a=ne(),r=_t;if(r!==null)return $m(a,r,e);ne(),a=a.memoizedState,r=ne();var s=r.queue.dispatch;return r.memoizedState=e,[a,s,!1]}function or(e,a,r,s){return e={tag:e,create:r,deps:s,inst:a,next:null},a=mt.updateQueue,a===null&&(a=qc(),mt.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,a.lastEffect=e),e}function dl(){return{destroy:void 0,resource:void 0}}function Qm(){return ne().memoizedState}function hl(e,a,r,s){var u=Ne();s=s===void 0?null:s,mt.flags|=e,u.memoizedState=or(1|a,dl(),r,s)}function So(e,a,r,s){var u=ne();s=s===void 0?null:s;var d=u.memoizedState.inst;_t!==null&&s!==null&&Bc(s,_t.memoizedState.deps)?u.memoizedState=or(a,d,r,s):(mt.flags|=e,u.memoizedState=or(1|a,d,r,s))}function Wm(e,a){hl(8390656,8,e,a)}function Jm(e,a){So(2048,8,e,a)}function tg(e,a){return So(4,2,e,a)}function eg(e,a){return So(4,4,e,a)}function ng(e,a){if(typeof a=="function"){e=e();var r=a(e);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function ag(e,a,r){r=r!=null?r.concat([e]):null,So(4,4,ng.bind(null,a,e),r)}function $c(){}function ig(e,a){var r=ne();a=a===void 0?null:a;var s=r.memoizedState;return a!==null&&Bc(a,s[1])?s[0]:(r.memoizedState=[e,a],e)}function rg(e,a){var r=ne();a=a===void 0?null:a;var s=r.memoizedState;if(a!==null&&Bc(a,s[1]))return s[0];if(s=e(),mi){ln(!0);try{e()}finally{ln(!1)}}return r.memoizedState=[s,a],s}function Zc(e,a,r){return r===void 0||(xa&1073741824)!==0?e.memoizedState=a:(e.memoizedState=r,e=l0(),mt.lanes|=e,Ra|=e,r)}function og(e,a,r,s){return Be(r,a)?r:ar.current!==null?(e=Zc(e,r,s),Be(e,a)||(ce=!0),e):(xa&42)===0?(ce=!0,e.memoizedState=r):(e=l0(),mt.lanes|=e,Ra|=e,a)}function sg(e,a,r,s,u){var d=q.p;q.p=d!==0&&8>d?d:8;var v=U.T,b={};U.T=b,Jc(e,!1,a,r);try{var T=u(),M=U.S;if(M!==null&&M(b,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var B=VS(T,s);Eo(e,a,B,qe(e))}else Eo(e,a,s,qe(e))}catch(j){Eo(e,a,{then:function(){},status:"rejected",reason:j},qe())}finally{q.p=d,U.T=v}}function FS(){}function Qc(e,a,r,s){if(e.tag!==5)throw Error(o(476));var u=lg(e).queue;sg(e,u,a,tt,r===null?FS:function(){return ug(e),r(s)})}function lg(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:tt},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:r},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function ug(e){var a=lg(e).next.queue;Eo(e,a,{},qe())}function Wc(){return xe(Ho)}function cg(){return ne().memoizedState}function fg(){return ne().memoizedState}function YS(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var r=qe();e=va(r);var s=ba(a,e,r);s!==null&&(Ge(s,a,r),yo(s,a,r)),a={cache:Oc()},e.payload=a;return}a=a.return}}function XS(e,a,r){var s=qe();r={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},pl(e)?hg(a,r):(r=vc(e,a,r,s),r!==null&&(Ge(r,e,s),pg(r,a,s)))}function dg(e,a,r){var s=qe();Eo(e,a,r,s)}function Eo(e,a,r,s){var u={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(pl(e))hg(a,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var v=a.lastRenderedState,b=d(v,r);if(u.hasEagerState=!0,u.eagerState=b,Be(b,v))return Qs(e,a,u,0),kt===null&&Zs(),!1}catch{}finally{}if(r=vc(e,a,u,s),r!==null)return Ge(r,e,s),pg(r,a,s),!0}return!1}function Jc(e,a,r,s){if(s={lane:2,revertLane:Mf(),action:s,hasEagerState:!1,eagerState:null,next:null},pl(e)){if(a)throw Error(o(479))}else a=vc(e,r,s,2),a!==null&&Ge(a,e,2)}function pl(e){var a=e.alternate;return e===mt||a!==null&&a===mt}function hg(e,a){ir=ll=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function pg(e,a,r){if((r&4194048)!==0){var s=a.lanes;s&=e.pendingLanes,r|=s,a.lanes=r,Yt(e,r)}}var ml={readContext:xe,use:cl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t},mg={readContext:xe,use:cl,useCallback:function(e,a){return Ne().memoizedState=[e,a===void 0?null:a],e},useContext:xe,useEffect:Wm,useImperativeHandle:function(e,a,r){r=r!=null?r.concat([e]):null,hl(4194308,4,ng.bind(null,a,e),r)},useLayoutEffect:function(e,a){return hl(4194308,4,e,a)},useInsertionEffect:function(e,a){hl(4,2,e,a)},useMemo:function(e,a){var r=Ne();a=a===void 0?null:a;var s=e();if(mi){ln(!0);try{e()}finally{ln(!1)}}return r.memoizedState=[s,a],s},useReducer:function(e,a,r){var s=Ne();if(r!==void 0){var u=r(a);if(mi){ln(!0);try{r(a)}finally{ln(!1)}}}else u=a;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=XS.bind(null,mt,e),[s.memoizedState,e]},useRef:function(e){var a=Ne();return e={current:e},a.memoizedState=e},useState:function(e){e=Xc(e);var a=e.queue,r=dg.bind(null,mt,a);return a.dispatch=r,[e.memoizedState,r]},useDebugValue:$c,useDeferredValue:function(e,a){var r=Ne();return Zc(r,e,a)},useTransition:function(){var e=Xc(!1);return e=sg.bind(null,mt,e.queue,!0,!1),Ne().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,r){var s=mt,u=Ne();if(St){if(r===void 0)throw Error(o(407));r=r()}else{if(r=a(),kt===null)throw Error(o(349));(bt&124)!==0||Lm(s,a,r)}u.memoizedState=r;var d={value:r,getSnapshot:a};return u.queue=d,Wm(Bm.bind(null,s,d,e),[e]),s.flags|=2048,or(9,dl(),Im.bind(null,s,d,r,a),null),r},useId:function(){var e=Ne(),a=kt.identifierPrefix;if(St){var r=qn,s=jn;r=(s&~(1<<32-he(s)-1)).toString(32)+r,a="«"+a+"R"+r,r=ul++,0<r&&(a+="H"+r.toString(32)),a+="»"}else r=HS++,a="«"+a+"r"+r.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:Wc,useFormState:Xm,useActionState:Xm,useOptimistic:function(e){var a=Ne();a.memoizedState=a.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=Jc.bind(null,mt,!0,r),r.dispatch=a,[e,a]},useMemoCache:Gc,useCacheRefresh:function(){return Ne().memoizedState=YS.bind(null,mt)}},gg={readContext:xe,use:cl,useCallback:ig,useContext:xe,useEffect:Jm,useImperativeHandle:ag,useInsertionEffect:tg,useLayoutEffect:eg,useMemo:rg,useReducer:fl,useRef:Qm,useState:function(){return fl(Yn)},useDebugValue:$c,useDeferredValue:function(e,a){var r=ne();return og(r,_t.memoizedState,e,a)},useTransition:function(){var e=fl(Yn)[0],a=ne().memoizedState;return[typeof e=="boolean"?e:To(e),a]},useSyncExternalStore:Um,useId:cg,useHostTransitionStatus:Wc,useFormState:Km,useActionState:Km,useOptimistic:function(e,a){var r=ne();return Hm(r,_t,e,a)},useMemoCache:Gc,useCacheRefresh:fg},KS={readContext:xe,use:cl,useCallback:ig,useContext:xe,useEffect:Jm,useImperativeHandle:ag,useInsertionEffect:tg,useLayoutEffect:eg,useMemo:rg,useReducer:Yc,useRef:Qm,useState:function(){return Yc(Yn)},useDebugValue:$c,useDeferredValue:function(e,a){var r=ne();return _t===null?Zc(r,e,a):og(r,_t.memoizedState,e,a)},useTransition:function(){var e=Yc(Yn)[0],a=ne().memoizedState;return[typeof e=="boolean"?e:To(e),a]},useSyncExternalStore:Um,useId:cg,useHostTransitionStatus:Wc,useFormState:Zm,useActionState:Zm,useOptimistic:function(e,a){var r=ne();return _t!==null?Hm(r,_t,e,a):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Gc,useCacheRefresh:fg},sr=null,wo=0;function gl(e){var a=wo;return wo+=1,sr===null&&(sr=[]),Rm(sr,e,a)}function _o(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function yl(e,a){throw a.$$typeof===y?Error(o(525)):(e=Object.prototype.toString.call(a),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function yg(e){var a=e._init;return a(e._payload)}function vg(e){function a(D,_){if(e){var k=D.deletions;k===null?(D.deletions=[_],D.flags|=16):k.push(_)}}function r(D,_){if(!e)return null;for(;_!==null;)a(D,_),_=_.sibling;return null}function s(D){for(var _=new Map;D!==null;)D.key!==null?_.set(D.key,D):_.set(D.index,D),D=D.sibling;return _}function u(D,_){return D=Hn(D,_),D.index=0,D.sibling=null,D}function d(D,_,k){return D.index=k,e?(k=D.alternate,k!==null?(k=k.index,k<_?(D.flags|=67108866,_):k):(D.flags|=67108866,_)):(D.flags|=1048576,_)}function v(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function b(D,_,k,z){return _===null||_.tag!==6?(_=xc(k,D.mode,z),_.return=D,_):(_=u(_,k),_.return=D,_)}function T(D,_,k,z){var et=k.type;return et===E?B(D,_,k.props.children,z,k.key):_!==null&&(_.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===F&&yg(et)===_.type)?(_=u(_,k.props),_o(_,k),_.return=D,_):(_=Js(k.type,k.key,k.props,null,D.mode,z),_o(_,k),_.return=D,_)}function M(D,_,k,z){return _===null||_.tag!==4||_.stateNode.containerInfo!==k.containerInfo||_.stateNode.implementation!==k.implementation?(_=Tc(k,D.mode,z),_.return=D,_):(_=u(_,k.children||[]),_.return=D,_)}function B(D,_,k,z,et){return _===null||_.tag!==7?(_=si(k,D.mode,z,et),_.return=D,_):(_=u(_,k),_.return=D,_)}function j(D,_,k){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=xc(""+_,D.mode,k),_.return=D,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case x:return k=Js(_.type,_.key,_.props,null,D.mode,k),_o(k,_),k.return=D,k;case S:return _=Tc(_,D.mode,k),_.return=D,_;case F:var z=_._init;return _=z(_._payload),j(D,_,k)}if(Nt(_)||Mt(_))return _=si(_,D.mode,k,null),_.return=D,_;if(typeof _.then=="function")return j(D,gl(_),k);if(_.$$typeof===I)return j(D,al(D,_),k);yl(D,_)}return null}function P(D,_,k,z){var et=_!==null?_.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return et!==null?null:b(D,_,""+k,z);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return k.key===et?T(D,_,k,z):null;case S:return k.key===et?M(D,_,k,z):null;case F:return et=k._init,k=et(k._payload),P(D,_,k,z)}if(Nt(k)||Mt(k))return et!==null?null:B(D,_,k,z,null);if(typeof k.then=="function")return P(D,_,gl(k),z);if(k.$$typeof===I)return P(D,_,al(D,k),z);yl(D,k)}return null}function L(D,_,k,z,et){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return D=D.get(k)||null,b(_,D,""+z,et);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case x:return D=D.get(z.key===null?k:z.key)||null,T(_,D,z,et);case S:return D=D.get(z.key===null?k:z.key)||null,M(_,D,z,et);case F:var gt=z._init;return z=gt(z._payload),L(D,_,k,z,et)}if(Nt(z)||Mt(z))return D=D.get(k)||null,B(_,D,z,et,null);if(typeof z.then=="function")return L(D,_,k,gl(z),et);if(z.$$typeof===I)return L(D,_,k,al(_,z),et);yl(_,z)}return null}function ct(D,_,k,z){for(var et=null,gt=null,at=_,st=_=0,de=null;at!==null&&st<k.length;st++){at.index>st?(de=at,at=null):de=at.sibling;var Tt=P(D,at,k[st],z);if(Tt===null){at===null&&(at=de);break}e&&at&&Tt.alternate===null&&a(D,at),_=d(Tt,_,st),gt===null?et=Tt:gt.sibling=Tt,gt=Tt,at=de}if(st===k.length)return r(D,at),St&&ui(D,st),et;if(at===null){for(;st<k.length;st++)at=j(D,k[st],z),at!==null&&(_=d(at,_,st),gt===null?et=at:gt.sibling=at,gt=at);return St&&ui(D,st),et}for(at=s(at);st<k.length;st++)de=L(at,D,st,k[st],z),de!==null&&(e&&de.alternate!==null&&at.delete(de.key===null?st:de.key),_=d(de,_,st),gt===null?et=de:gt.sibling=de,gt=de);return e&&at.forEach(function(La){return a(D,La)}),St&&ui(D,st),et}function ot(D,_,k,z){if(k==null)throw Error(o(151));for(var et=null,gt=null,at=_,st=_=0,de=null,Tt=k.next();at!==null&&!Tt.done;st++,Tt=k.next()){at.index>st?(de=at,at=null):de=at.sibling;var La=P(D,at,Tt.value,z);if(La===null){at===null&&(at=de);break}e&&at&&La.alternate===null&&a(D,at),_=d(La,_,st),gt===null?et=La:gt.sibling=La,gt=La,at=de}if(Tt.done)return r(D,at),St&&ui(D,st),et;if(at===null){for(;!Tt.done;st++,Tt=k.next())Tt=j(D,Tt.value,z),Tt!==null&&(_=d(Tt,_,st),gt===null?et=Tt:gt.sibling=Tt,gt=Tt);return St&&ui(D,st),et}for(at=s(at);!Tt.done;st++,Tt=k.next())Tt=L(at,D,st,Tt.value,z),Tt!==null&&(e&&Tt.alternate!==null&&at.delete(Tt.key===null?st:Tt.key),_=d(Tt,_,st),gt===null?et=Tt:gt.sibling=Tt,gt=Tt);return e&&at.forEach(function($E){return a(D,$E)}),St&&ui(D,st),et}function Rt(D,_,k,z){if(typeof k=="object"&&k!==null&&k.type===E&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case x:t:{for(var et=k.key;_!==null;){if(_.key===et){if(et=k.type,et===E){if(_.tag===7){r(D,_.sibling),z=u(_,k.props.children),z.return=D,D=z;break t}}else if(_.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===F&&yg(et)===_.type){r(D,_.sibling),z=u(_,k.props),_o(z,k),z.return=D,D=z;break t}r(D,_);break}else a(D,_);_=_.sibling}k.type===E?(z=si(k.props.children,D.mode,z,k.key),z.return=D,D=z):(z=Js(k.type,k.key,k.props,null,D.mode,z),_o(z,k),z.return=D,D=z)}return v(D);case S:t:{for(et=k.key;_!==null;){if(_.key===et)if(_.tag===4&&_.stateNode.containerInfo===k.containerInfo&&_.stateNode.implementation===k.implementation){r(D,_.sibling),z=u(_,k.children||[]),z.return=D,D=z;break t}else{r(D,_);break}else a(D,_);_=_.sibling}z=Tc(k,D.mode,z),z.return=D,D=z}return v(D);case F:return et=k._init,k=et(k._payload),Rt(D,_,k,z)}if(Nt(k))return ct(D,_,k,z);if(Mt(k)){if(et=Mt(k),typeof et!="function")throw Error(o(150));return k=et.call(k),ot(D,_,k,z)}if(typeof k.then=="function")return Rt(D,_,gl(k),z);if(k.$$typeof===I)return Rt(D,_,al(D,k),z);yl(D,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,_!==null&&_.tag===6?(r(D,_.sibling),z=u(_,k),z.return=D,D=z):(r(D,_),z=xc(k,D.mode,z),z.return=D,D=z),v(D)):r(D,_)}return function(D,_,k,z){try{wo=0;var et=Rt(D,_,k,z);return sr=null,et}catch(at){if(at===mo||at===rl)throw at;var gt=ze(29,at,null,D.mode);return gt.lanes=z,gt.return=D,gt}finally{}}}var lr=vg(!0),bg=vg(!1),Je=H(null),_n=null;function Ta(e){var a=e.alternate;G(oe,oe.current&1),G(Je,e),_n===null&&(a===null||ar.current!==null||a.memoizedState!==null)&&(_n=e)}function xg(e){if(e.tag===22){if(G(oe,oe.current),G(Je,e),_n===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(_n=e)}}else Sa()}function Sa(){G(oe,oe.current),G(Je,Je.current)}function Xn(e){W(Je),_n===e&&(_n=null),W(oe)}var oe=H(0);function vl(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Gf(r)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function tf(e,a,r,s){a=e.memoizedState,r=r(s,a),r=r==null?a:g({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ef={enqueueSetState:function(e,a,r){e=e._reactInternals;var s=qe(),u=va(s);u.payload=a,r!=null&&(u.callback=r),a=ba(e,u,s),a!==null&&(Ge(a,e,s),yo(a,e,s))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var s=qe(),u=va(s);u.tag=1,u.payload=a,r!=null&&(u.callback=r),a=ba(e,u,s),a!==null&&(Ge(a,e,s),yo(a,e,s))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=qe(),s=va(r);s.tag=2,a!=null&&(s.callback=a),a=ba(e,s,r),a!==null&&(Ge(a,e,r),yo(a,e,r))}};function Tg(e,a,r,s,u,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,v):a.prototype&&a.prototype.isPureReactComponent?!oo(r,s)||!oo(u,d):!0}function Sg(e,a,r,s){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,s),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,s),a.state!==e&&ef.enqueueReplaceState(a,a.state,null)}function gi(e,a){var r=a;if("ref"in a){r={};for(var s in a)s!=="ref"&&(r[s]=a[s])}if(e=e.defaultProps){r===a&&(r=g({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}var bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Eg(e){bl(e)}function wg(e){console.error(e)}function _g(e){bl(e)}function xl(e,a){try{var r=e.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(s){setTimeout(function(){throw s})}}function Ag(e,a,r){try{var s=e.onCaughtError;s(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(e,a,r){return r=va(r),r.tag=3,r.payload={element:null},r.callback=function(){xl(e,a)},r}function Rg(e){return e=va(e),e.tag=3,e}function Og(e,a,r,s){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=s.value;e.payload=function(){return u(d)},e.callback=function(){Ag(a,r,s)}}var v=r.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Ag(a,r,s),typeof u!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function $S(e,a,r,s,u){if(r.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(a=r.alternate,a!==null&&fo(a,r,u,!0),r=Je.current,r!==null){switch(r.tag){case 13:return _n===null?Rf():r.alternate===null&&jt===0&&(jt=3),r.flags&=-257,r.flags|=65536,r.lanes=u,s===kc?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([s]):a.add(s),Cf(e,s,u)),!1;case 22:return r.flags|=65536,s===kc?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([s])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([s]):r.add(s)),Cf(e,s,u)),!1}throw Error(o(435,r.tag))}return Cf(e,s,u),Rf(),!1}if(St)return a=Je.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=u,s!==wc&&(e=Error(o(422),{cause:s}),co($e(e,r)))):(s!==wc&&(a=Error(o(423),{cause:s}),co($e(a,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=$e(s,r),u=nf(e.stateNode,s,u),Pc(e,u),jt!==4&&(jt=2)),!1;var d=Error(o(520),{cause:s});if(d=$e(d,r),Mo===null?Mo=[d]:Mo.push(d),jt!==4&&(jt=2),a===null)return!0;s=$e(s,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=nf(r.stateNode,s,e),Pc(r,e),!1;case 1:if(a=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Oa===null||!Oa.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Rg(u),Og(u,e,r,s),Pc(r,u),!1}r=r.return}while(r!==null);return!1}var Cg=Error(o(461)),ce=!1;function me(e,a,r,s){a.child=e===null?bg(a,null,r,s):lr(a,e.child,r,s)}function Dg(e,a,r,s,u){r=r.render;var d=a.ref;if("ref"in s){var v={};for(var b in s)b!=="ref"&&(v[b]=s[b])}else v=s;return hi(a),s=zc(e,a,r,v,d,u),b=Vc(),e!==null&&!ce?(Hc(e,a,u),Kn(e,a,u)):(St&&b&&Sc(a),a.flags|=1,me(e,a,s,u),a.child)}function kg(e,a,r,s,u){if(e===null){var d=r.type;return typeof d=="function"&&!bc(d)&&d.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=d,Mg(e,a,d,s,u)):(e=Js(r.type,null,s,a,a.mode,u),e.ref=a.ref,e.return=a,a.child=e)}if(d=e.child,!ff(e,u)){var v=d.memoizedProps;if(r=r.compare,r=r!==null?r:oo,r(v,s)&&e.ref===a.ref)return Kn(e,a,u)}return a.flags|=1,e=Hn(d,s),e.ref=a.ref,e.return=a,a.child=e}function Mg(e,a,r,s,u){if(e!==null){var d=e.memoizedProps;if(oo(d,s)&&e.ref===a.ref)if(ce=!1,a.pendingProps=s=d,ff(e,u))(e.flags&131072)!==0&&(ce=!0);else return a.lanes=e.lanes,Kn(e,a,u)}return af(e,a,r,s,u)}function Ng(e,a,r){var s=a.pendingProps,u=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((a.flags&128)!==0){if(s=d!==null?d.baseLanes|r:r,e!==null){for(u=a.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;a.childLanes=d&~s}else a.childLanes=0,a.child=null;return Pg(e,a,s,r)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&il(a,d!==null?d.cachePool:null),d!==null?Mm(a,d):Lc(),xg(a);else return a.lanes=a.childLanes=536870912,Pg(e,a,d!==null?d.baseLanes|r:r,r)}else d!==null?(il(a,d.cachePool),Mm(a,d),Sa(),a.memoizedState=null):(e!==null&&il(a,null),Lc(),Sa());return me(e,a,u,r),a.child}function Pg(e,a,r,s){var u=Dc();return u=u===null?null:{parent:re._currentValue,pool:u},a.memoizedState={baseLanes:r,cachePool:u},e!==null&&il(a,null),Lc(),xg(a),e!==null&&fo(e,a,s,!0),null}function Tl(e,a){var r=a.ref;if(r===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(o(284));(e===null||e.ref!==r)&&(a.flags|=4194816)}}function af(e,a,r,s,u){return hi(a),r=zc(e,a,r,s,void 0,u),s=Vc(),e!==null&&!ce?(Hc(e,a,u),Kn(e,a,u)):(St&&s&&Sc(a),a.flags|=1,me(e,a,r,u),a.child)}function Ug(e,a,r,s,u,d){return hi(a),a.updateQueue=null,r=Pm(a,s,r,u),Nm(e),s=Vc(),e!==null&&!ce?(Hc(e,a,d),Kn(e,a,d)):(St&&s&&Sc(a),a.flags|=1,me(e,a,r,d),a.child)}function Lg(e,a,r,s,u){if(hi(a),a.stateNode===null){var d=Wi,v=r.contextType;typeof v=="object"&&v!==null&&(d=xe(v)),d=new r(s,d),a.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ef,a.stateNode=d,d._reactInternals=a,d=a.stateNode,d.props=s,d.state=a.memoizedState,d.refs={},Mc(a),v=r.contextType,d.context=typeof v=="object"&&v!==null?xe(v):Wi,d.state=a.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(tf(a,r,v,s),d.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&ef.enqueueReplaceState(d,d.state,null),bo(a,s,d,u),vo(),d.state=a.memoizedState),typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!0}else if(e===null){d=a.stateNode;var b=a.memoizedProps,T=gi(r,b);d.props=T;var M=d.context,B=r.contextType;v=Wi,typeof B=="object"&&B!==null&&(v=xe(B));var j=r.getDerivedStateFromProps;B=typeof j=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=a.pendingProps!==b,B||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||M!==v)&&Sg(a,d,s,v),ya=!1;var P=a.memoizedState;d.state=P,bo(a,s,d,u),vo(),M=a.memoizedState,b||P!==M||ya?(typeof j=="function"&&(tf(a,r,j,s),M=a.memoizedState),(T=ya||Tg(a,r,T,s,P,M,v))?(B||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=s,a.memoizedState=M),d.props=s,d.state=M,d.context=v,s=T):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!1)}else{d=a.stateNode,Nc(e,a),v=a.memoizedProps,B=gi(r,v),d.props=B,j=a.pendingProps,P=d.context,M=r.contextType,T=Wi,typeof M=="object"&&M!==null&&(T=xe(M)),b=r.getDerivedStateFromProps,(M=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==j||P!==T)&&Sg(a,d,s,T),ya=!1,P=a.memoizedState,d.state=P,bo(a,s,d,u),vo();var L=a.memoizedState;v!==j||P!==L||ya||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof b=="function"&&(tf(a,r,b,s),L=a.memoizedState),(B=ya||Tg(a,r,B,s,P,L,T)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?(M||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,L,T),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,L,T)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=1024),a.memoizedProps=s,a.memoizedState=L),d.props=s,d.state=L,d.context=T,s=B):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(a.flags|=1024),s=!1)}return d=s,Tl(e,a),s=(a.flags&128)!==0,d||s?(d=a.stateNode,r=s&&typeof r.getDerivedStateFromError!="function"?null:d.render(),a.flags|=1,e!==null&&s?(a.child=lr(a,e.child,null,u),a.child=lr(a,null,r,u)):me(e,a,r,u),a.memoizedState=d.state,e=a.child):e=Kn(e,a,u),e}function Ig(e,a,r,s){return uo(),a.flags|=256,me(e,a,r,s),a.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:wm()}}function sf(e,a,r){return e=e!==null?e.childLanes&~r:0,a&&(e|=tn),e}function Bg(e,a,r){var s=a.pendingProps,u=!1,d=(a.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(oe.current&2)!==0),v&&(u=!0,a.flags&=-129),v=(a.flags&32)!==0,a.flags&=-33,e===null){if(St){if(u?Ta(a):Sa(),St){var b=Ht,T;if(T=b){t:{for(T=b,b=wn;T.nodeType!==8;){if(!b){b=null;break t}if(T=dn(T.nextSibling),T===null){b=null;break t}}b=T}b!==null?(a.memoizedState={dehydrated:b,treeContext:li!==null?{id:jn,overflow:qn}:null,retryLane:536870912,hydrationErrors:null},T=ze(18,null,null,0),T.stateNode=b,T.return=a,a.child=T,Re=a,Ht=null,T=!0):T=!1}T||fi(a)}if(b=a.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Gf(b)?a.lanes=32:a.lanes=536870912,null;Xn(a)}return b=s.children,s=s.fallback,u?(Sa(),u=a.mode,b=Sl({mode:"hidden",children:b},u),s=si(s,u,r,null),b.return=a,s.return=a,b.sibling=s,a.child=b,u=a.child,u.memoizedState=of(r),u.childLanes=sf(e,v,r),a.memoizedState=rf,s):(Ta(a),lf(a,b))}if(T=e.memoizedState,T!==null&&(b=T.dehydrated,b!==null)){if(d)a.flags&256?(Ta(a),a.flags&=-257,a=uf(e,a,r)):a.memoizedState!==null?(Sa(),a.child=e.child,a.flags|=128,a=null):(Sa(),u=s.fallback,b=a.mode,s=Sl({mode:"visible",children:s.children},b),u=si(u,b,r,null),u.flags|=2,s.return=a,u.return=a,s.sibling=u,a.child=s,lr(a,e.child,null,r),s=a.child,s.memoizedState=of(r),s.childLanes=sf(e,v,r),a.memoizedState=rf,a=u);else if(Ta(a),Gf(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var M=v.dgst;v=M,s=Error(o(419)),s.stack="",s.digest=v,co({value:s,source:null,stack:null}),a=uf(e,a,r)}else if(ce||fo(e,a,r,!1),v=(r&e.childLanes)!==0,ce||v){if(v=kt,v!==null&&(s=r&-r,s=(s&42)!==0?1:te(s),s=(s&(v.suspendedLanes|r))!==0?0:s,s!==0&&s!==T.retryLane))throw T.retryLane=s,Qi(e,s),Ge(v,e,s),Cg;b.data==="$?"||Rf(),a=uf(e,a,r)}else b.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=T.treeContext,Ht=dn(b.nextSibling),Re=a,St=!0,ci=null,wn=!1,e!==null&&(Qe[We++]=jn,Qe[We++]=qn,Qe[We++]=li,jn=e.id,qn=e.overflow,li=a),a=lf(a,s.children),a.flags|=4096);return a}return u?(Sa(),u=s.fallback,b=a.mode,T=e.child,M=T.sibling,s=Hn(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&65011712,M!==null?u=Hn(M,u):(u=si(u,b,r,null),u.flags|=2),u.return=a,s.return=a,s.sibling=u,a.child=s,s=u,u=a.child,b=e.child.memoizedState,b===null?b=of(r):(T=b.cachePool,T!==null?(M=re._currentValue,T=T.parent!==M?{parent:M,pool:M}:T):T=wm(),b={baseLanes:b.baseLanes|r,cachePool:T}),u.memoizedState=b,u.childLanes=sf(e,v,r),a.memoizedState=rf,s):(Ta(a),r=e.child,e=r.sibling,r=Hn(r,{mode:"visible",children:s.children}),r.return=a,r.sibling=null,e!==null&&(v=a.deletions,v===null?(a.deletions=[e],a.flags|=16):v.push(e)),a.child=r,a.memoizedState=null,r)}function lf(e,a){return a=Sl({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Sl(e,a){return e=ze(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function uf(e,a,r){return lr(a,e.child,null,r),e=lf(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function zg(e,a,r){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a),Ac(e.return,a,r)}function cf(e,a,r,s,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:u}:(d.isBackwards=a,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=r,d.tailMode=u)}function Vg(e,a,r){var s=a.pendingProps,u=s.revealOrder,d=s.tail;if(me(e,a,s.children,r),s=oe.current,(s&2)!==0)s=s&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zg(e,r,a);else if(e.tag===19)zg(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(G(oe,s),u){case"forwards":for(r=a.child,u=null;r!==null;)e=r.alternate,e!==null&&vl(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=a.child,a.child=null):(u=r.sibling,r.sibling=null),cf(a,!1,u,r,d);break;case"backwards":for(r=null,u=a.child,a.child=null;u!==null;){if(e=u.alternate,e!==null&&vl(e)===null){a.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}cf(a,!0,r,null,d);break;case"together":cf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Kn(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),Ra|=a.lanes,(r&a.childLanes)===0)if(e!==null){if(fo(e,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(o(153));if(a.child!==null){for(e=a.child,r=Hn(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=Hn(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function ff(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function ZS(e,a,r){switch(a.tag){case 3:lt(a,a.stateNode.containerInfo),ga(a,re,e.memoizedState.cache),uo();break;case 27:case 5:fa(a);break;case 4:lt(a,a.stateNode.containerInfo);break;case 10:ga(a,a.type,a.memoizedProps.value);break;case 13:var s=a.memoizedState;if(s!==null)return s.dehydrated!==null?(Ta(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Bg(e,a,r):(Ta(a),e=Kn(e,a,r),e!==null?e.sibling:null);Ta(a);break;case 19:var u=(e.flags&128)!==0;if(s=(r&a.childLanes)!==0,s||(fo(e,a,r,!1),s=(r&a.childLanes)!==0),u){if(s)return Vg(e,a,r);a.flags|=128}if(u=a.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),G(oe,oe.current),s)break;return null;case 22:case 23:return a.lanes=0,Ng(e,a,r);case 24:ga(a,re,e.memoizedState.cache)}return Kn(e,a,r)}function Hg(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps)ce=!0;else{if(!ff(e,r)&&(a.flags&128)===0)return ce=!1,ZS(e,a,r);ce=(e.flags&131072)!==0}else ce=!1,St&&(a.flags&1048576)!==0&&ym(a,el,a.index);switch(a.lanes=0,a.tag){case 16:t:{e=a.pendingProps;var s=a.elementType,u=s._init;if(s=u(s._payload),a.type=s,typeof s=="function")bc(s)?(e=gi(s,e),a.tag=1,a=Lg(null,a,s,e,r)):(a.tag=0,a=af(null,a,s,e,r));else{if(s!=null){if(u=s.$$typeof,u===X){a.tag=11,a=Dg(null,a,s,e,r);break t}else if(u===$){a.tag=14,a=kg(null,a,s,e,r);break t}}throw a=Ee(s)||s,Error(o(306,a,""))}}return a;case 0:return af(e,a,a.type,a.pendingProps,r);case 1:return s=a.type,u=gi(s,a.pendingProps),Lg(e,a,s,u,r);case 3:t:{if(lt(a,a.stateNode.containerInfo),e===null)throw Error(o(387));s=a.pendingProps;var d=a.memoizedState;u=d.element,Nc(e,a),bo(a,s,null,r);var v=a.memoizedState;if(s=v.cache,ga(a,re,s),s!==d.cache&&Rc(a,[re],r,!0),vo(),s=v.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:v.cache},a.updateQueue.baseState=d,a.memoizedState=d,a.flags&256){a=Ig(e,a,s,r);break t}else if(s!==u){u=$e(Error(o(424)),a),co(u),a=Ig(e,a,s,r);break t}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ht=dn(e.firstChild),Re=a,St=!0,ci=null,wn=!0,r=bg(a,null,s,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(uo(),s===u){a=Kn(e,a,r);break t}me(e,a,s,r)}a=a.child}return a;case 26:return Tl(e,a),e===null?(r=F0(a.type,null,a.pendingProps,null))?a.memoizedState=r:St||(r=a.type,e=a.pendingProps,s=Ll(nt.current).createElement(r),s[Kt]=a,s[Dt]=e,ye(s,r,e),ue(s),a.stateNode=s):a.memoizedState=F0(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return fa(a),e===null&&St&&(s=a.stateNode=j0(a.type,a.pendingProps,nt.current),Re=a,wn=!0,u=Ht,ka(a.type)?(Ff=u,Ht=dn(s.firstChild)):Ht=u),me(e,a,a.pendingProps.children,r),Tl(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&St&&((u=s=Ht)&&(s=wE(s,a.type,a.pendingProps,wn),s!==null?(a.stateNode=s,Re=a,Ht=dn(s.firstChild),wn=!1,u=!0):u=!1),u||fi(a)),fa(a),u=a.type,d=a.pendingProps,v=e!==null?e.memoizedProps:null,s=d.children,Hf(u,d)?s=null:v!==null&&Hf(u,v)&&(a.flags|=32),a.memoizedState!==null&&(u=zc(e,a,jS,null,null,r),Ho._currentValue=u),Tl(e,a),me(e,a,s,r),a.child;case 6:return e===null&&St&&((e=r=Ht)&&(r=_E(r,a.pendingProps,wn),r!==null?(a.stateNode=r,Re=a,Ht=null,e=!0):e=!1),e||fi(a)),null;case 13:return Bg(e,a,r);case 4:return lt(a,a.stateNode.containerInfo),s=a.pendingProps,e===null?a.child=lr(a,null,s,r):me(e,a,s,r),a.child;case 11:return Dg(e,a,a.type,a.pendingProps,r);case 7:return me(e,a,a.pendingProps,r),a.child;case 8:return me(e,a,a.pendingProps.children,r),a.child;case 12:return me(e,a,a.pendingProps.children,r),a.child;case 10:return s=a.pendingProps,ga(a,a.type,s.value),me(e,a,s.children,r),a.child;case 9:return u=a.type._context,s=a.pendingProps.children,hi(a),u=xe(u),s=s(u),a.flags|=1,me(e,a,s,r),a.child;case 14:return kg(e,a,a.type,a.pendingProps,r);case 15:return Mg(e,a,a.type,a.pendingProps,r);case 19:return Vg(e,a,r);case 31:return s=a.pendingProps,r=a.mode,s={mode:s.mode,children:s.children},e===null?(r=Sl(s,r),r.ref=a.ref,a.child=r,r.return=a,a=r):(r=Hn(e.child,s),r.ref=a.ref,a.child=r,r.return=a,a=r),a;case 22:return Ng(e,a,r);case 24:return hi(a),s=xe(re),e===null?(u=Dc(),u===null&&(u=kt,d=Oc(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),a.memoizedState={parent:s,cache:u},Mc(a),ga(a,re,u)):((e.lanes&r)!==0&&(Nc(e,a),bo(a,null,null,r),vo()),u=e.memoizedState,d=a.memoizedState,u.parent!==s?(u={parent:s,cache:s},a.memoizedState=u,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=u),ga(a,re,s)):(s=d.cache,ga(a,re,s),s!==u.cache&&Rc(a,[re],r,!0))),me(e,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(o(156,a.tag))}function $n(e){e.flags|=4}function jg(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Z0(a)){if(a=Je.current,a!==null&&((bt&4194048)===bt?_n!==null:(bt&62914560)!==bt&&(bt&536870912)===0||a!==_n))throw go=kc,_m;e.flags|=8192}}function El(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Is():536870912,e.lanes|=a,dr|=a)}function Ao(e,a){if(!St)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Bt(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(a)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=r,a}function QS(e,a,r){var s=a.pendingProps;switch(Ec(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(a),null;case 1:return Bt(a),null;case 3:return r=a.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Fn(re),we(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(lo(a)?$n(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,xm())),Bt(a),null;case 26:return r=a.memoizedState,e===null?($n(a),r!==null?(Bt(a),jg(a,r)):(Bt(a),a.flags&=-16777217)):r?r!==e.memoizedState?($n(a),Bt(a),jg(a,r)):(Bt(a),a.flags&=-16777217):(e.memoizedProps!==s&&$n(a),Bt(a),a.flags&=-16777217),null;case 27:Ln(a),r=nt.current;var u=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==s&&$n(a);else{if(!s){if(a.stateNode===null)throw Error(o(166));return Bt(a),null}e=Q.current,lo(a)?vm(a):(e=j0(u,s,r),a.stateNode=e,$n(a))}return Bt(a),null;case 5:if(Ln(a),r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==s&&$n(a);else{if(!s){if(a.stateNode===null)throw Error(o(166));return Bt(a),null}if(e=Q.current,lo(a))vm(a);else{switch(u=Ll(nt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?u.createElement(r,{is:s.is}):u.createElement(r)}}e[Kt]=a,e[Dt]=s;t:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break t;for(;u.sibling===null;){if(u.return===null||u.return===a)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=e;t:switch(ye(e,r,s),r){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&$n(a)}}return Bt(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==s&&$n(a);else{if(typeof s!="string"&&a.stateNode===null)throw Error(o(166));if(e=nt.current,lo(a)){if(e=a.stateNode,r=a.memoizedProps,s=null,u=Re,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[Kt]=a,e=!!(e.nodeValue===r||s!==null&&s.suppressHydrationWarning===!0||U0(e.nodeValue,r)),e||fi(a)}else e=Ll(e).createTextNode(s),e[Kt]=a,a.stateNode=e}return Bt(a),null;case 13:if(s=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=lo(a),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=a.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[Kt]=a}else uo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Bt(a),u=!1}else u=xm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return a.flags&256?(Xn(a),a):(Xn(a),null)}if(Xn(a),(a.flags&128)!==0)return a.lanes=r,a;if(r=s!==null,e=e!==null&&e.memoizedState!==null,r){s=a.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var d=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(d=s.memoizedState.cachePool.pool),d!==u&&(s.flags|=2048)}return r!==e&&r&&(a.child.flags|=8192),El(a,a.updateQueue),Bt(a),null;case 4:return we(),e===null&&Lf(a.stateNode.containerInfo),Bt(a),null;case 10:return Fn(a.type),Bt(a),null;case 19:if(W(oe),u=a.memoizedState,u===null)return Bt(a),null;if(s=(a.flags&128)!==0,d=u.rendering,d===null)if(s)Ao(u,!1);else{if(jt!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(d=vl(e),d!==null){for(a.flags|=128,Ao(u,!1),e=d.updateQueue,a.updateQueue=e,El(a,e),a.subtreeFlags=0,e=r,r=a.child;r!==null;)gm(r,e),r=r.sibling;return G(oe,oe.current&1|2),a.child}e=e.sibling}u.tail!==null&&be()>Al&&(a.flags|=128,s=!0,Ao(u,!1),a.lanes=4194304)}else{if(!s)if(e=vl(d),e!==null){if(a.flags|=128,s=!0,e=e.updateQueue,a.updateQueue=e,El(a,e),Ao(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!St)return Bt(a),null}else 2*be()-u.renderingStartTime>Al&&r!==536870912&&(a.flags|=128,s=!0,Ao(u,!1),a.lanes=4194304);u.isBackwards?(d.sibling=a.child,a.child=d):(e=u.last,e!==null?e.sibling=d:a.child=d,u.last=d)}return u.tail!==null?(a=u.tail,u.rendering=a,u.tail=a.sibling,u.renderingStartTime=be(),a.sibling=null,e=oe.current,G(oe,s?e&1|2:e&1),a):(Bt(a),null);case 22:case 23:return Xn(a),Ic(),s=a.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(a.flags|=8192):s&&(a.flags|=8192),s?(r&536870912)!==0&&(a.flags&128)===0&&(Bt(a),a.subtreeFlags&6&&(a.flags|=8192)):Bt(a),r=a.updateQueue,r!==null&&El(a,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==r&&(a.flags|=2048),e!==null&&W(pi),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),Fn(re),Bt(a),null;case 25:return null;case 30:return null}throw Error(o(156,a.tag))}function WS(e,a){switch(Ec(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Fn(re),we(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Ln(a),null;case 13:if(Xn(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(o(340));uo()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return W(oe),null;case 4:return we(),null;case 10:return Fn(a.type),null;case 22:case 23:return Xn(a),Ic(),e!==null&&W(pi),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Fn(re),null;case 25:return null;default:return null}}function qg(e,a){switch(Ec(a),a.tag){case 3:Fn(re),we();break;case 26:case 27:case 5:Ln(a);break;case 4:we();break;case 13:Xn(a);break;case 19:W(oe);break;case 10:Fn(a.type);break;case 22:case 23:Xn(a),Ic(),e!==null&&W(pi);break;case 24:Fn(re)}}function Ro(e,a){try{var r=a.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var u=s.next;r=u;do{if((r.tag&e)===e){s=void 0;var d=r.create,v=r.inst;s=d(),v.destroy=s}r=r.next}while(r!==u)}}catch(b){Ot(a,a.return,b)}}function Ea(e,a,r){try{var s=a.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var d=u.next;s=d;do{if((s.tag&e)===e){var v=s.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=a;var T=r,M=b;try{M()}catch(B){Ot(u,T,B)}}}s=s.next}while(s!==d)}}catch(B){Ot(a,a.return,B)}}function Gg(e){var a=e.updateQueue;if(a!==null){var r=e.stateNode;try{km(a,r)}catch(s){Ot(e,e.return,s)}}}function Fg(e,a,r){r.props=gi(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(s){Ot(e,a,s)}}function Oo(e,a){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof r=="function"?e.refCleanup=r(s):r.current=s}}catch(u){Ot(e,a,u)}}function An(e,a){var r=e.ref,s=e.refCleanup;if(r!==null)if(typeof s=="function")try{s()}catch(u){Ot(e,a,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Ot(e,a,u)}else r.current=null}function Yg(e){var a=e.type,r=e.memoizedProps,s=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&s.focus();break t;case"img":r.src?s.src=r.src:r.srcSet&&(s.srcset=r.srcSet)}}catch(u){Ot(e,e.return,u)}}function df(e,a,r){try{var s=e.stateNode;bE(s,e.type,r,a),s[Dt]=a}catch(u){Ot(e,e.return,u)}}function Xg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function hf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Xg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pf(e,a,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(e),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Ul));else if(s!==4&&(s===27&&ka(e.type)&&(r=e.stateNode,a=null),e=e.child,e!==null))for(pf(e,a,r),e=e.sibling;e!==null;)pf(e,a,r),e=e.sibling}function wl(e,a,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(s!==4&&(s===27&&ka(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(wl(e,a,r),e=e.sibling;e!==null;)wl(e,a,r),e=e.sibling}function Kg(e){var a=e.stateNode,r=e.memoizedProps;try{for(var s=e.type,u=a.attributes;u.length;)a.removeAttributeNode(u[0]);ye(a,s,r),a[Kt]=e,a[Dt]=r}catch(d){Ot(e,e.return,d)}}var Zn=!1,Zt=!1,mf=!1,$g=typeof WeakSet=="function"?WeakSet:Set,fe=null;function JS(e,a){if(e=e.containerInfo,zf=jl,e=om(e),dc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var u=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var v=0,b=-1,T=-1,M=0,B=0,j=e,P=null;e:for(;;){for(var L;j!==r||u!==0&&j.nodeType!==3||(b=v+u),j!==d||s!==0&&j.nodeType!==3||(T=v+s),j.nodeType===3&&(v+=j.nodeValue.length),(L=j.firstChild)!==null;)P=j,j=L;for(;;){if(j===e)break e;if(P===r&&++M===u&&(b=v),P===d&&++B===s&&(T=v),(L=j.nextSibling)!==null)break;j=P,P=j.parentNode}j=L}r=b===-1||T===-1?null:{start:b,end:T}}else r=null}r=r||{start:0,end:0}}else r=null;for(Vf={focusedElem:e,selectionRange:r},jl=!1,fe=a;fe!==null;)if(a=fe,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,fe=e;else for(;fe!==null;){switch(a=fe,d=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=a,u=d.memoizedProps,d=d.memoizedState,s=r.stateNode;try{var ct=gi(r.type,u,r.elementType===r.type);e=s.getSnapshotBeforeUpdate(ct,d),s.__reactInternalSnapshotBeforeUpdate=e}catch(ot){Ot(r,r.return,ot)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,r=e.nodeType,r===9)qf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=a.sibling,e!==null){e.return=a.return,fe=e;break}fe=a.return}}function Zg(e,a,r){var s=r.flags;switch(r.tag){case 0:case 11:case 15:wa(e,r),s&4&&Ro(5,r);break;case 1:if(wa(e,r),s&4)if(e=r.stateNode,a===null)try{e.componentDidMount()}catch(v){Ot(r,r.return,v)}else{var u=gi(r.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(u,a,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ot(r,r.return,v)}}s&64&&Gg(r),s&512&&Oo(r,r.return);break;case 3:if(wa(e,r),s&64&&(e=r.updateQueue,e!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{km(e,a)}catch(v){Ot(r,r.return,v)}}break;case 27:a===null&&s&4&&Kg(r);case 26:case 5:wa(e,r),a===null&&s&4&&Yg(r),s&512&&Oo(r,r.return);break;case 12:wa(e,r);break;case 13:wa(e,r),s&4&&Jg(e,r),s&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=lE.bind(null,r),AE(e,r))));break;case 22:if(s=r.memoizedState!==null||Zn,!s){a=a!==null&&a.memoizedState!==null||Zt,u=Zn;var d=Zt;Zn=s,(Zt=a)&&!d?_a(e,r,(r.subtreeFlags&8772)!==0):wa(e,r),Zn=u,Zt=d}break;case 30:break;default:wa(e,r)}}function Qg(e){var a=e.alternate;a!==null&&(e.alternate=null,Qg(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Xu(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pt=null,Pe=!1;function Qn(e,a,r){for(r=r.child;r!==null;)Wg(e,a,r),r=r.sibling}function Wg(e,a,r){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Sn,r)}catch{}switch(r.tag){case 26:Zt||An(r,a),Qn(e,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Zt||An(r,a);var s=Pt,u=Pe;ka(r.type)&&(Pt=r.stateNode,Pe=!1),Qn(e,a,r),Io(r.stateNode),Pt=s,Pe=u;break;case 5:Zt||An(r,a);case 6:if(s=Pt,u=Pe,Pt=null,Qn(e,a,r),Pt=s,Pe=u,Pt!==null)if(Pe)try{(Pt.nodeType===9?Pt.body:Pt.nodeName==="HTML"?Pt.ownerDocument.body:Pt).removeChild(r.stateNode)}catch(d){Ot(r,a,d)}else try{Pt.removeChild(r.stateNode)}catch(d){Ot(r,a,d)}break;case 18:Pt!==null&&(Pe?(e=Pt,V0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Fo(e)):V0(Pt,r.stateNode));break;case 4:s=Pt,u=Pe,Pt=r.stateNode.containerInfo,Pe=!0,Qn(e,a,r),Pt=s,Pe=u;break;case 0:case 11:case 14:case 15:Zt||Ea(2,r,a),Zt||Ea(4,r,a),Qn(e,a,r);break;case 1:Zt||(An(r,a),s=r.stateNode,typeof s.componentWillUnmount=="function"&&Fg(r,a,s)),Qn(e,a,r);break;case 21:Qn(e,a,r);break;case 22:Zt=(s=Zt)||r.memoizedState!==null,Qn(e,a,r),Zt=s;break;default:Qn(e,a,r)}}function Jg(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fo(e)}catch(r){Ot(a,a.return,r)}}function tE(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new $g),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new $g),a;default:throw Error(o(435,e.tag))}}function gf(e,a){var r=tE(e);a.forEach(function(s){var u=uE.bind(null,e,s);r.has(s)||(r.add(s),s.then(u,u))})}function Ve(e,a){var r=a.deletions;if(r!==null)for(var s=0;s<r.length;s++){var u=r[s],d=e,v=a,b=v;t:for(;b!==null;){switch(b.tag){case 27:if(ka(b.type)){Pt=b.stateNode,Pe=!1;break t}break;case 5:Pt=b.stateNode,Pe=!1;break t;case 3:case 4:Pt=b.stateNode.containerInfo,Pe=!0;break t}b=b.return}if(Pt===null)throw Error(o(160));Wg(d,v,u),Pt=null,Pe=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)t0(a,e),a=a.sibling}var fn=null;function t0(e,a){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ve(a,e),He(e),s&4&&(Ea(3,e,e.return),Ro(3,e),Ea(5,e,e.return));break;case 1:Ve(a,e),He(e),s&512&&(Zt||r===null||An(r,r.return)),s&64&&Zn&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?s:r.concat(s))));break;case 26:var u=fn;if(Ve(a,e),He(e),s&512&&(Zt||r===null||An(r,r.return)),s&4){var d=r!==null?r.memoizedState:null;if(s=e.memoizedState,r===null)if(s===null)if(e.stateNode===null){t:{s=e.type,r=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Qr]||d[Kt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(s),u.head.insertBefore(d,u.querySelector("head > title"))),ye(d,s,r),d[Kt]=e,ue(d),s=d;break t;case"link":var v=K0("link","href",u).get(s+(r.href||""));if(v){for(var b=0;b<v.length;b++)if(d=v[b],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){v.splice(b,1);break e}}d=u.createElement(s),ye(d,s,r),u.head.appendChild(d);break;case"meta":if(v=K0("meta","content",u).get(s+(r.content||""))){for(b=0;b<v.length;b++)if(d=v[b],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){v.splice(b,1);break e}}d=u.createElement(s),ye(d,s,r),u.head.appendChild(d);break;default:throw Error(o(468,s))}d[Kt]=e,ue(d),s=d}e.stateNode=s}else $0(u,e.type,e.stateNode);else e.stateNode=X0(u,s,e.memoizedProps);else d!==s?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,s===null?$0(u,e.type,e.stateNode):X0(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&df(e,e.memoizedProps,r.memoizedProps)}break;case 27:Ve(a,e),He(e),s&512&&(Zt||r===null||An(r,r.return)),r!==null&&s&4&&df(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Ve(a,e),He(e),s&512&&(Zt||r===null||An(r,r.return)),e.flags&32){u=e.stateNode;try{Gi(u,"")}catch(L){Ot(e,e.return,L)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,df(e,u,r!==null?r.memoizedProps:u)),s&1024&&(mf=!0);break;case 6:if(Ve(a,e),He(e),s&4){if(e.stateNode===null)throw Error(o(162));s=e.memoizedProps,r=e.stateNode;try{r.nodeValue=s}catch(L){Ot(e,e.return,L)}}break;case 3:if(zl=null,u=fn,fn=Il(a.containerInfo),Ve(a,e),fn=u,He(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Fo(a.containerInfo)}catch(L){Ot(e,e.return,L)}mf&&(mf=!1,e0(e));break;case 4:s=fn,fn=Il(e.stateNode.containerInfo),Ve(a,e),He(e),fn=s;break;case 12:Ve(a,e),He(e);break;case 13:Ve(a,e),He(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Sf=be()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,gf(e,s)));break;case 22:u=e.memoizedState!==null;var T=r!==null&&r.memoizedState!==null,M=Zn,B=Zt;if(Zn=M||u,Zt=B||T,Ve(a,e),Zt=B,Zn=M,He(e),s&8192)t:for(a=e.stateNode,a._visibility=u?a._visibility&-2:a._visibility|1,u&&(r===null||T||Zn||Zt||yi(e)),r=null,a=e;;){if(a.tag===5||a.tag===26){if(r===null){T=r=a;try{if(d=T.stateNode,u)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=T.stateNode;var j=T.memoizedProps.style,P=j!=null&&j.hasOwnProperty("display")?j.display:null;b.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(L){Ot(T,T.return,L)}}}else if(a.tag===6){if(r===null){T=a;try{T.stateNode.nodeValue=u?"":T.memoizedProps}catch(L){Ot(T,T.return,L)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}s&4&&(s=e.updateQueue,s!==null&&(r=s.retryQueue,r!==null&&(s.retryQueue=null,gf(e,r))));break;case 19:Ve(a,e),He(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,gf(e,s)));break;case 30:break;case 21:break;default:Ve(a,e),He(e)}}function He(e){var a=e.flags;if(a&2){try{for(var r,s=e.return;s!==null;){if(Xg(s)){r=s;break}s=s.return}if(r==null)throw Error(o(160));switch(r.tag){case 27:var u=r.stateNode,d=hf(e);wl(e,d,u);break;case 5:var v=r.stateNode;r.flags&32&&(Gi(v,""),r.flags&=-33);var b=hf(e);wl(e,b,v);break;case 3:case 4:var T=r.stateNode.containerInfo,M=hf(e);pf(e,M,T);break;default:throw Error(o(161))}}catch(B){Ot(e,e.return,B)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function e0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;e0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function wa(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Zg(e,a.alternate,a),a=a.sibling}function yi(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Ea(4,a,a.return),yi(a);break;case 1:An(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Fg(a,a.return,r),yi(a);break;case 27:Io(a.stateNode);case 26:case 5:An(a,a.return),yi(a);break;case 22:a.memoizedState===null&&yi(a);break;case 30:yi(a);break;default:yi(a)}e=e.sibling}}function _a(e,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var s=a.alternate,u=e,d=a,v=d.flags;switch(d.tag){case 0:case 11:case 15:_a(u,d,r),Ro(4,d);break;case 1:if(_a(u,d,r),s=d,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(M){Ot(s,s.return,M)}if(s=d,u=s.updateQueue,u!==null){var b=s.stateNode;try{var T=u.shared.hiddenCallbacks;if(T!==null)for(u.shared.hiddenCallbacks=null,u=0;u<T.length;u++)Dm(T[u],b)}catch(M){Ot(s,s.return,M)}}r&&v&64&&Gg(d),Oo(d,d.return);break;case 27:Kg(d);case 26:case 5:_a(u,d,r),r&&s===null&&v&4&&Yg(d),Oo(d,d.return);break;case 12:_a(u,d,r);break;case 13:_a(u,d,r),r&&v&4&&Jg(u,d);break;case 22:d.memoizedState===null&&_a(u,d,r),Oo(d,d.return);break;case 30:break;default:_a(u,d,r)}a=a.sibling}}function yf(e,a){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&ho(r))}function vf(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&ho(e))}function Rn(e,a,r,s){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)n0(e,a,r,s),a=a.sibling}function n0(e,a,r,s){var u=a.flags;switch(a.tag){case 0:case 11:case 15:Rn(e,a,r,s),u&2048&&Ro(9,a);break;case 1:Rn(e,a,r,s);break;case 3:Rn(e,a,r,s),u&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&ho(e)));break;case 12:if(u&2048){Rn(e,a,r,s),e=a.stateNode;try{var d=a.memoizedProps,v=d.id,b=d.onPostCommit;typeof b=="function"&&b(v,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Ot(a,a.return,T)}}else Rn(e,a,r,s);break;case 13:Rn(e,a,r,s);break;case 23:break;case 22:d=a.stateNode,v=a.alternate,a.memoizedState!==null?d._visibility&2?Rn(e,a,r,s):Co(e,a):d._visibility&2?Rn(e,a,r,s):(d._visibility|=2,ur(e,a,r,s,(a.subtreeFlags&10256)!==0)),u&2048&&yf(v,a);break;case 24:Rn(e,a,r,s),u&2048&&vf(a.alternate,a);break;default:Rn(e,a,r,s)}}function ur(e,a,r,s,u){for(u=u&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var d=e,v=a,b=r,T=s,M=v.flags;switch(v.tag){case 0:case 11:case 15:ur(d,v,b,T,u),Ro(8,v);break;case 23:break;case 22:var B=v.stateNode;v.memoizedState!==null?B._visibility&2?ur(d,v,b,T,u):Co(d,v):(B._visibility|=2,ur(d,v,b,T,u)),u&&M&2048&&yf(v.alternate,v);break;case 24:ur(d,v,b,T,u),u&&M&2048&&vf(v.alternate,v);break;default:ur(d,v,b,T,u)}a=a.sibling}}function Co(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=e,s=a,u=s.flags;switch(s.tag){case 22:Co(r,s),u&2048&&yf(s.alternate,s);break;case 24:Co(r,s),u&2048&&vf(s.alternate,s);break;default:Co(r,s)}a=a.sibling}}var Do=8192;function cr(e){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)a0(e),e=e.sibling}function a0(e){switch(e.tag){case 26:cr(e),e.flags&Do&&e.memoizedState!==null&&zE(fn,e.memoizedState,e.memoizedProps);break;case 5:cr(e);break;case 3:case 4:var a=fn;fn=Il(e.stateNode.containerInfo),cr(e),fn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Do,Do=16777216,cr(e),Do=a):cr(e));break;default:cr(e)}}function i0(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function ko(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var s=a[r];fe=s,o0(s,e)}i0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)r0(e),e=e.sibling}function r0(e){switch(e.tag){case 0:case 11:case 15:ko(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:ko(e);break;case 12:ko(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,_l(e)):ko(e);break;default:ko(e)}}function _l(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var s=a[r];fe=s,o0(s,e)}i0(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Ea(8,a,a.return),_l(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,_l(a));break;default:_l(a)}e=e.sibling}}function o0(e,a){for(;fe!==null;){var r=fe;switch(r.tag){case 0:case 11:case 15:Ea(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var s=r.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ho(r.memoizedState.cache)}if(s=r.child,s!==null)s.return=r,fe=s;else t:for(r=e;fe!==null;){s=fe;var u=s.sibling,d=s.return;if(Qg(s),s===r){fe=null;break t}if(u!==null){u.return=d,fe=u;break t}fe=d}}}var eE={getCacheForType:function(e){var a=xe(re),r=a.data.get(e);return r===void 0&&(r=e(),a.data.set(e,r)),r}},nE=typeof WeakMap=="function"?WeakMap:Map,Et=0,kt=null,yt=null,bt=0,wt=0,je=null,Aa=!1,fr=!1,bf=!1,Wn=0,jt=0,Ra=0,vi=0,xf=0,tn=0,dr=0,Mo=null,Ue=null,Tf=!1,Sf=0,Al=1/0,Rl=null,Oa=null,ge=0,Ca=null,hr=null,pr=0,Ef=0,wf=null,s0=null,No=0,_f=null;function qe(){if((Et&2)!==0&&bt!==0)return bt&-bt;if(U.T!==null){var e=er;return e!==0?e:Mf()}return ni()}function l0(){tn===0&&(tn=(bt&536870912)===0||St?un():536870912);var e=Je.current;return e!==null&&(e.flags|=32),tn}function Ge(e,a,r){(e===kt&&(wt===2||wt===9)||e.cancelPendingCommit!==null)&&(mr(e,0),Da(e,bt,tn,!1)),pa(e,r),((Et&2)===0||e!==kt)&&(e===kt&&((Et&2)===0&&(vi|=r),jt===4&&Da(e,bt,tn,!1)),On(e))}function u0(e,a,r){if((Et&6)!==0)throw Error(o(327));var s=!r&&(a&124)===0&&(a&e.expiredLanes)===0||ei(e,a),u=s?rE(e,a):Of(e,a,!0),d=s;do{if(u===0){fr&&!s&&Da(e,a,0,!1);break}else{if(r=e.current.alternate,d&&!aE(r)){u=Of(e,a,!1),d=!1;continue}if(u===2){if(d=a,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){a=v;t:{var b=e;u=Mo;var T=b.current.memoizedState.isDehydrated;if(T&&(mr(b,v).flags|=256),v=Of(b,v,!1),v!==2){if(bf&&!T){b.errorRecoveryDisabledLanes|=d,vi|=d,u=4;break t}d=Ue,Ue=u,d!==null&&(Ue===null?Ue=d:Ue.push.apply(Ue,d))}u=v}if(d=!1,u!==2)continue}}if(u===1){mr(e,0),Da(e,a,0,!0);break}t:{switch(s=e,d=u,d){case 0:case 1:throw Error(o(345));case 4:if((a&4194048)!==a)break;case 6:Da(s,a,tn,!Aa);break t;case 2:Ue=null;break;case 3:case 5:break;default:throw Error(o(329))}if((a&62914560)===a&&(u=Sf+300-be(),10<u)){if(Da(s,a,tn,!Aa),ti(s,0,!0)!==0)break t;s.timeoutHandle=B0(c0.bind(null,s,r,Ue,Rl,Tf,a,tn,vi,dr,Aa,d,2,-0,0),u);break t}c0(s,r,Ue,Rl,Tf,a,tn,vi,dr,Aa,d,0,-0,0)}}break}while(!0);On(e)}function c0(e,a,r,s,u,d,v,b,T,M,B,j,P,L){if(e.timeoutHandle=-1,j=a.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(Vo={stylesheets:null,count:0,unsuspend:BE},a0(a),j=VE(),j!==null)){e.cancelPendingCommit=j(y0.bind(null,e,a,d,r,s,u,v,b,T,B,1,P,L)),Da(e,d,v,!M);return}y0(e,a,d,r,s,u,v,b,T)}function aE(e){for(var a=e;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var s=0;s<r.length;s++){var u=r[s],d=u.getSnapshot;u=u.value;try{if(!Be(d(),u))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Da(e,a,r,s){a&=~xf,a&=~vi,e.suspendedLanes|=a,e.pingedLanes&=~a,s&&(e.warmLanes|=a),s=e.expirationTimes;for(var u=a;0<u;){var d=31-he(u),v=1<<d;s[d]=-1,u&=~v}r!==0&&dt(e,r,a)}function Ol(){return(Et&6)===0?(Po(0),!1):!0}function Af(){if(yt!==null){if(wt===0)var e=yt.return;else e=yt,Gn=di=null,jc(e),sr=null,wo=0,e=yt;for(;e!==null;)qg(e.alternate,e),e=e.return;yt=null}}function mr(e,a){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,TE(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Af(),kt=e,yt=r=Hn(e.current,null),bt=a,wt=0,je=null,Aa=!1,fr=ei(e,a),bf=!1,dr=tn=xf=vi=Ra=jt=0,Ue=Mo=null,Tf=!1,(a&8)!==0&&(a|=a&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=a;0<s;){var u=31-he(s),d=1<<u;a|=e[u],s&=~d}return Wn=a,Zs(),r}function f0(e,a){mt=null,U.H=ml,a===mo||a===rl?(a=Om(),wt=3):a===_m?(a=Om(),wt=4):wt=a===Cg?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,je=a,yt===null&&(jt=1,xl(e,$e(a,e.current)))}function d0(){var e=U.H;return U.H=ml,e===null?ml:e}function h0(){var e=U.A;return U.A=eE,e}function Rf(){jt=4,Aa||(bt&4194048)!==bt&&Je.current!==null||(fr=!0),(Ra&134217727)===0&&(vi&134217727)===0||kt===null||Da(kt,bt,tn,!1)}function Of(e,a,r){var s=Et;Et|=2;var u=d0(),d=h0();(kt!==e||bt!==a)&&(Rl=null,mr(e,a)),a=!1;var v=jt;t:do try{if(wt!==0&&yt!==null){var b=yt,T=je;switch(wt){case 8:Af(),v=6;break t;case 3:case 2:case 9:case 6:Je.current===null&&(a=!0);var M=wt;if(wt=0,je=null,gr(e,b,T,M),r&&fr){v=0;break t}break;default:M=wt,wt=0,je=null,gr(e,b,T,M)}}iE(),v=jt;break}catch(B){f0(e,B)}while(!0);return a&&e.shellSuspendCounter++,Gn=di=null,Et=s,U.H=u,U.A=d,yt===null&&(kt=null,bt=0,Zs()),v}function iE(){for(;yt!==null;)p0(yt)}function rE(e,a){var r=Et;Et|=2;var s=d0(),u=h0();kt!==e||bt!==a?(Rl=null,Al=be()+500,mr(e,a)):fr=ei(e,a);t:do try{if(wt!==0&&yt!==null){a=yt;var d=je;e:switch(wt){case 1:wt=0,je=null,gr(e,a,d,1);break;case 2:case 9:if(Am(d)){wt=0,je=null,m0(a);break}a=function(){wt!==2&&wt!==9||kt!==e||(wt=7),On(e)},d.then(a,a);break t;case 3:wt=7;break t;case 4:wt=5;break t;case 7:Am(d)?(wt=0,je=null,m0(a)):(wt=0,je=null,gr(e,a,d,7));break;case 5:var v=null;switch(yt.tag){case 26:v=yt.memoizedState;case 5:case 27:var b=yt;if(!v||Z0(v)){wt=0,je=null;var T=b.sibling;if(T!==null)yt=T;else{var M=b.return;M!==null?(yt=M,Cl(M)):yt=null}break e}}wt=0,je=null,gr(e,a,d,5);break;case 6:wt=0,je=null,gr(e,a,d,6);break;case 8:Af(),jt=6;break t;default:throw Error(o(462))}}oE();break}catch(B){f0(e,B)}while(!0);return Gn=di=null,U.H=s,U.A=u,Et=r,yt!==null?0:(kt=null,bt=0,Zs(),jt)}function oE(){for(;yt!==null&&!Gu();)p0(yt)}function p0(e){var a=Hg(e.alternate,e,Wn);e.memoizedProps=e.pendingProps,a===null?Cl(e):yt=a}function m0(e){var a=e,r=a.alternate;switch(a.tag){case 15:case 0:a=Ug(r,a,a.pendingProps,a.type,void 0,bt);break;case 11:a=Ug(r,a,a.pendingProps,a.type.render,a.ref,bt);break;case 5:jc(a);default:qg(r,a),a=yt=gm(a,Wn),a=Hg(r,a,Wn)}e.memoizedProps=e.pendingProps,a===null?Cl(e):yt=a}function gr(e,a,r,s){Gn=di=null,jc(a),sr=null,wo=0;var u=a.return;try{if($S(e,u,a,r,bt)){jt=1,xl(e,$e(r,e.current)),yt=null;return}}catch(d){if(u!==null)throw yt=u,d;jt=1,xl(e,$e(r,e.current)),yt=null;return}a.flags&32768?(St||s===1?e=!0:fr||(bt&536870912)!==0?e=!1:(Aa=e=!0,(s===2||s===9||s===3||s===6)&&(s=Je.current,s!==null&&s.tag===13&&(s.flags|=16384))),g0(a,e)):Cl(a)}function Cl(e){var a=e;do{if((a.flags&32768)!==0){g0(a,Aa);return}e=a.return;var r=QS(a.alternate,a,Wn);if(r!==null){yt=r;return}if(a=a.sibling,a!==null){yt=a;return}yt=a=e}while(a!==null);jt===0&&(jt=5)}function g0(e,a){do{var r=WS(e.alternate,e);if(r!==null){r.flags&=32767,yt=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(e=e.sibling,e!==null)){yt=e;return}yt=e=r}while(e!==null);jt=6,yt=null}function y0(e,a,r,s,u,d,v,b,T){e.cancelPendingCommit=null;do Dl();while(ge!==0);if((Et&6)!==0)throw Error(o(327));if(a!==null){if(a===e.current)throw Error(o(177));if(d=a.lanes|a.childLanes,d|=yc,Bs(e,r,d,v,b,T),e===kt&&(yt=kt=null,bt=0),hr=a,Ca=e,pr=r,Ef=d,wf=u,s0=s,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cE(Pi,function(){return S0(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||s){s=U.T,U.T=null,u=q.p,q.p=2,v=Et,Et|=4;try{JS(e,a,r)}finally{Et=v,q.p=u,U.T=s}}ge=1,v0(),b0(),x0()}}function v0(){if(ge===1){ge=0;var e=Ca,a=hr,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=U.T,U.T=null;var s=q.p;q.p=2;var u=Et;Et|=4;try{t0(a,e);var d=Vf,v=om(e.containerInfo),b=d.focusedElem,T=d.selectionRange;if(v!==b&&b&&b.ownerDocument&&rm(b.ownerDocument.documentElement,b)){if(T!==null&&dc(b)){var M=T.start,B=T.end;if(B===void 0&&(B=M),"selectionStart"in b)b.selectionStart=M,b.selectionEnd=Math.min(B,b.value.length);else{var j=b.ownerDocument||document,P=j&&j.defaultView||window;if(P.getSelection){var L=P.getSelection(),ct=b.textContent.length,ot=Math.min(T.start,ct),Rt=T.end===void 0?ot:Math.min(T.end,ct);!L.extend&&ot>Rt&&(v=Rt,Rt=ot,ot=v);var D=im(b,ot),_=im(b,Rt);if(D&&_&&(L.rangeCount!==1||L.anchorNode!==D.node||L.anchorOffset!==D.offset||L.focusNode!==_.node||L.focusOffset!==_.offset)){var k=j.createRange();k.setStart(D.node,D.offset),L.removeAllRanges(),ot>Rt?(L.addRange(k),L.extend(_.node,_.offset)):(k.setEnd(_.node,_.offset),L.addRange(k))}}}}for(j=[],L=b;L=L.parentNode;)L.nodeType===1&&j.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<j.length;b++){var z=j[b];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}jl=!!zf,Vf=zf=null}finally{Et=u,q.p=s,U.T=r}}e.current=a,ge=2}}function b0(){if(ge===2){ge=0;var e=Ca,a=hr,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=U.T,U.T=null;var s=q.p;q.p=2;var u=Et;Et|=4;try{Zg(e,a.alternate,a)}finally{Et=u,q.p=s,U.T=r}}ge=3}}function x0(){if(ge===4||ge===3){ge=0,Ns();var e=Ca,a=hr,r=pr,s=s0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ge=5:(ge=0,hr=Ca=null,T0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Oa=null),pe(r),a=a.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Sn,a,void 0,(a.current.flags&128)===128)}catch{}if(s!==null){a=U.T,u=q.p,q.p=2,U.T=null;try{for(var d=e.onRecoverableError,v=0;v<s.length;v++){var b=s[v];d(b.value,{componentStack:b.stack})}}finally{U.T=a,q.p=u}}(pr&3)!==0&&Dl(),On(e),u=e.pendingLanes,(r&4194090)!==0&&(u&42)!==0?e===_f?No++:(No=0,_f=e):No=0,Po(0)}}function T0(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,ho(a)))}function Dl(e){return v0(),b0(),x0(),S0()}function S0(){if(ge!==5)return!1;var e=Ca,a=Ef;Ef=0;var r=pe(pr),s=U.T,u=q.p;try{q.p=32>r?32:r,U.T=null,r=wf,wf=null;var d=Ca,v=pr;if(ge=0,hr=Ca=null,pr=0,(Et&6)!==0)throw Error(o(331));var b=Et;if(Et|=4,r0(d.current),n0(d,d.current,v,r),Et=b,Po(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Sn,d)}catch{}return!0}finally{q.p=u,U.T=s,T0(e,a)}}function E0(e,a,r){a=$e(r,a),a=nf(e.stateNode,a,2),e=ba(e,a,2),e!==null&&(pa(e,2),On(e))}function Ot(e,a,r){if(e.tag===3)E0(e,e,r);else for(;a!==null;){if(a.tag===3){E0(a,e,r);break}else if(a.tag===1){var s=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Oa===null||!Oa.has(s))){e=$e(r,e),r=Rg(2),s=ba(a,r,2),s!==null&&(Og(r,s,a,e),pa(s,2),On(s));break}}a=a.return}}function Cf(e,a,r){var s=e.pingCache;if(s===null){s=e.pingCache=new nE;var u=new Set;s.set(a,u)}else u=s.get(a),u===void 0&&(u=new Set,s.set(a,u));u.has(r)||(bf=!0,u.add(r),e=sE.bind(null,e,a,r),a.then(e,e))}function sE(e,a,r){var s=e.pingCache;s!==null&&s.delete(a),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,kt===e&&(bt&r)===r&&(jt===4||jt===3&&(bt&62914560)===bt&&300>be()-Sf?(Et&2)===0&&mr(e,0):xf|=r,dr===bt&&(dr=0)),On(e)}function w0(e,a){a===0&&(a=Is()),e=Qi(e,a),e!==null&&(pa(e,a),On(e))}function lE(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),w0(e,r)}function uE(e,a){var r=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(a),w0(e,r)}function cE(e,a){return Kr(e,a)}var kl=null,yr=null,Df=!1,Ml=!1,kf=!1,bi=0;function On(e){e!==yr&&e.next===null&&(yr===null?kl=yr=e:yr=yr.next=e),Ml=!0,Df||(Df=!0,dE())}function Po(e,a){if(!kf&&Ml){kf=!0;do for(var r=!1,s=kl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var d=0;else{var v=s.suspendedLanes,b=s.pingedLanes;d=(1<<31-he(42|e)+1)-1,d&=u&~(v&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,O0(s,d))}else d=bt,d=ti(s,s===kt?d:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(d&3)===0||ei(s,d)||(r=!0,O0(s,d));s=s.next}while(r);kf=!1}}function fE(){_0()}function _0(){Ml=Df=!1;var e=0;bi!==0&&(xE()&&(e=bi),bi=0);for(var a=be(),r=null,s=kl;s!==null;){var u=s.next,d=A0(s,a);d===0?(s.next=null,r===null?kl=u:r.next=u,u===null&&(yr=r)):(r=s,(e!==0||(d&3)!==0)&&(Ml=!0)),s=u}Po(e)}function A0(e,a){for(var r=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-he(d),b=1<<v,T=u[v];T===-1?((b&r)===0||(b&s)!==0)&&(u[v]=$r(b,a)):T<=a&&(e.expiredLanes|=b),d&=~b}if(a=kt,r=bt,r=ti(e,e===a?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,r===0||e===a&&(wt===2||wt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ja(s),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||ei(e,r)){if(a=r&-r,a===e.callbackPriority)return a;switch(s!==null&&Ja(s),pe(r)){case 2:case 8:r=Us;break;case 32:r=Pi;break;case 268435456:r=In;break;default:r=Pi}return s=R0.bind(null,e),r=Kr(r,s),e.callbackPriority=a,e.callbackNode=r,a}return s!==null&&s!==null&&Ja(s),e.callbackPriority=2,e.callbackNode=null,2}function R0(e,a){if(ge!==0&&ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Dl()&&e.callbackNode!==r)return null;var s=bt;return s=ti(e,e===kt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(u0(e,s,a),A0(e,be()),e.callbackNode!=null&&e.callbackNode===r?R0.bind(null,e):null)}function O0(e,a){if(Dl())return null;u0(e,a,!0)}function dE(){SE(function(){(Et&6)!==0?Kr(Ye,fE):_0()})}function Mf(){return bi===0&&(bi=un()),bi}function C0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qs(""+e)}function D0(e,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,e.id&&r.setAttribute("form",e.id),a.parentNode.insertBefore(r,a),e=new FormData(e),r.parentNode.removeChild(r),e}function hE(e,a,r,s,u){if(a==="submit"&&r&&r.stateNode===u){var d=C0((u[Dt]||null).action),v=s.submitter;v&&(a=(a=v[Dt]||null)?C0(a.formAction):v.getAttribute("formAction"),a!==null&&(d=a,v=null));var b=new Xs("action","action",null,s,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(bi!==0){var T=v?D0(u,v):new FormData(u);Qc(r,{pending:!0,data:T,method:u.method,action:d},null,T)}}else typeof d=="function"&&(b.preventDefault(),T=v?D0(u,v):new FormData(u),Qc(r,{pending:!0,data:T,method:u.method,action:d},d,T))},currentTarget:u}]})}}for(var Nf=0;Nf<gc.length;Nf++){var Pf=gc[Nf],pE=Pf.toLowerCase(),mE=Pf[0].toUpperCase()+Pf.slice(1);cn(pE,"on"+mE)}cn(um,"onAnimationEnd"),cn(cm,"onAnimationIteration"),cn(fm,"onAnimationStart"),cn("dblclick","onDoubleClick"),cn("focusin","onFocus"),cn("focusout","onBlur"),cn(MS,"onTransitionRun"),cn(NS,"onTransitionStart"),cn(PS,"onTransitionCancel"),cn(dm,"onTransitionEnd"),Hi("onMouseEnter",["mouseout","mouseover"]),Hi("onMouseLeave",["mouseout","mouseover"]),Hi("onPointerEnter",["pointerout","pointerover"]),Hi("onPointerLeave",["pointerout","pointerover"]),ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function k0(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],u=s.event;s=s.listeners;t:{var d=void 0;if(a)for(var v=s.length-1;0<=v;v--){var b=s[v],T=b.instance,M=b.currentTarget;if(b=b.listener,T!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=M;try{d(u)}catch(B){bl(B)}u.currentTarget=null,d=T}else for(v=0;v<s.length;v++){if(b=s[v],T=b.instance,M=b.currentTarget,b=b.listener,T!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=M;try{d(u)}catch(B){bl(B)}u.currentTarget=null,d=T}}}}function vt(e,a){var r=a[Ii];r===void 0&&(r=a[Ii]=new Set);var s=e+"__bubble";r.has(s)||(M0(a,e,2,!1),r.add(s))}function Uf(e,a,r){var s=0;a&&(s|=4),M0(r,e,s,a)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[Nl]){e[Nl]=!0,_p.forEach(function(r){r!=="selectionchange"&&(gE.has(r)||Uf(r,!1,e),Uf(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Nl]||(a[Nl]=!0,Uf("selectionchange",!1,a))}}function M0(e,a,r,s){switch(ny(a)){case 2:var u=qE;break;case 8:u=GE;break;default:u=Zf}r=u.bind(null,a,r,e),u=void 0,!ac||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(a,r,{capture:!0,passive:u}):e.addEventListener(a,r,!0):u!==void 0?e.addEventListener(a,r,{passive:u}):e.addEventListener(a,r,!1)}function If(e,a,r,s,u){var d=s;if((a&1)===0&&(a&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var b=s.stateNode.containerInfo;if(b===u)break;if(v===4)for(v=s.return;v!==null;){var T=v.tag;if((T===3||T===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;b!==null;){if(v=Bi(b),v===null)return;if(T=v.tag,T===5||T===6||T===26||T===27){s=d=v;continue t}b=b.parentNode}}s=s.return}zp(function(){var M=d,B=ec(r),j=[];t:{var P=hm.get(e);if(P!==void 0){var L=Xs,ct=e;switch(e){case"keypress":if(Fs(r)===0)break t;case"keydown":case"keyup":L=cS;break;case"focusin":ct="focus",L=sc;break;case"focusout":ct="blur",L=sc;break;case"beforeblur":case"afterblur":L=sc;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=WT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=hS;break;case um:case cm:case fm:L=eS;break;case dm:L=mS;break;case"scroll":case"scrollend":L=ZT;break;case"wheel":L=yS;break;case"copy":case"cut":case"paste":L=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Gp;break;case"toggle":case"beforetoggle":L=bS}var ot=(a&4)!==0,Rt=!ot&&(e==="scroll"||e==="scrollend"),D=ot?P!==null?P+"Capture":null:P;ot=[];for(var _=M,k;_!==null;){var z=_;if(k=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||k===null||D===null||(z=Jr(_,D),z!=null&&ot.push(Lo(_,z,k))),Rt)break;_=_.return}0<ot.length&&(P=new L(P,ct,null,r,B),j.push({event:P,listeners:ot}))}}if((a&7)===0){t:{if(P=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",P&&r!==tc&&(ct=r.relatedTarget||r.fromElement)&&(Bi(ct)||ct[le]))break t;if((L||P)&&(P=B.window===B?B:(P=B.ownerDocument)?P.defaultView||P.parentWindow:window,L?(ct=r.relatedTarget||r.toElement,L=M,ct=ct?Bi(ct):null,ct!==null&&(Rt=c(ct),ot=ct.tag,ct!==Rt||ot!==5&&ot!==27&&ot!==6)&&(ct=null)):(L=null,ct=M),L!==ct)){if(ot=jp,z="onMouseLeave",D="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(ot=Gp,z="onPointerLeave",D="onPointerEnter",_="pointer"),Rt=L==null?P:Wr(L),k=ct==null?P:Wr(ct),P=new ot(z,_+"leave",L,r,B),P.target=Rt,P.relatedTarget=k,z=null,Bi(B)===M&&(ot=new ot(D,_+"enter",ct,r,B),ot.target=k,ot.relatedTarget=Rt,z=ot),Rt=z,L&&ct)e:{for(ot=L,D=ct,_=0,k=ot;k;k=vr(k))_++;for(k=0,z=D;z;z=vr(z))k++;for(;0<_-k;)ot=vr(ot),_--;for(;0<k-_;)D=vr(D),k--;for(;_--;){if(ot===D||D!==null&&ot===D.alternate)break e;ot=vr(ot),D=vr(D)}ot=null}else ot=null;L!==null&&N0(j,P,L,ot,!1),ct!==null&&Rt!==null&&N0(j,Rt,ct,ot,!0)}}t:{if(P=M?Wr(M):window,L=P.nodeName&&P.nodeName.toLowerCase(),L==="select"||L==="input"&&P.type==="file")var et=Wp;else if(Zp(P))if(Jp)et=CS;else{et=RS;var gt=AS}else L=P.nodeName,!L||L.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?M&&Ju(M.elementType)&&(et=Wp):et=OS;if(et&&(et=et(e,M))){Qp(j,et,r,B);break t}gt&&gt(e,P,M),e==="focusout"&&M&&P.type==="number"&&M.memoizedProps.value!=null&&Wu(P,"number",P.value)}switch(gt=M?Wr(M):window,e){case"focusin":(Zp(gt)||gt.contentEditable==="true")&&(Ki=gt,hc=M,so=null);break;case"focusout":so=hc=Ki=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,sm(j,r,B);break;case"selectionchange":if(kS)break;case"keydown":case"keyup":sm(j,r,B)}var at;if(uc)t:{switch(e){case"compositionstart":var st="onCompositionStart";break t;case"compositionend":st="onCompositionEnd";break t;case"compositionupdate":st="onCompositionUpdate";break t}st=void 0}else Xi?Kp(e,r)&&(st="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(st="onCompositionStart");st&&(Fp&&r.locale!=="ko"&&(Xi||st!=="onCompositionStart"?st==="onCompositionEnd"&&Xi&&(at=Vp()):(ma=B,ic="value"in ma?ma.value:ma.textContent,Xi=!0)),gt=Pl(M,st),0<gt.length&&(st=new qp(st,e,null,r,B),j.push({event:st,listeners:gt}),at?st.data=at:(at=$p(r),at!==null&&(st.data=at)))),(at=TS?SS(e,r):ES(e,r))&&(st=Pl(M,"onBeforeInput"),0<st.length&&(gt=new qp("onBeforeInput","beforeinput",null,r,B),j.push({event:gt,listeners:st}),gt.data=at)),hE(j,e,M,r,B)}k0(j,a)})}function Lo(e,a,r){return{instance:e,listener:a,currentTarget:r}}function Pl(e,a){for(var r=a+"Capture",s=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Jr(e,r),u!=null&&s.unshift(Lo(e,u,d)),u=Jr(e,a),u!=null&&s.push(Lo(e,u,d))),e.tag===3)return s;e=e.return}return[]}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function N0(e,a,r,s,u){for(var d=a._reactName,v=[];r!==null&&r!==s;){var b=r,T=b.alternate,M=b.stateNode;if(b=b.tag,T!==null&&T===s)break;b!==5&&b!==26&&b!==27||M===null||(T=M,u?(M=Jr(r,d),M!=null&&v.unshift(Lo(r,M,T))):u||(M=Jr(r,d),M!=null&&v.push(Lo(r,M,T)))),r=r.return}v.length!==0&&e.push({event:a,listeners:v})}var yE=/\r\n?/g,vE=/\u0000|\uFFFD/g;function P0(e){return(typeof e=="string"?e:""+e).replace(yE,`
`).replace(vE,"")}function U0(e,a){return a=P0(a),P0(e)===a}function Ul(){}function At(e,a,r,s,u,d){switch(r){case"children":typeof s=="string"?a==="body"||a==="textarea"&&s===""||Gi(e,s):(typeof s=="number"||typeof s=="bigint")&&a!=="body"&&Gi(e,""+s);break;case"className":Vs(e,"class",s);break;case"tabIndex":Vs(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Vs(e,r,s);break;case"style":Ip(e,s,d);break;case"data":if(a!=="object"){Vs(e,"data",s);break}case"src":case"href":if(s===""&&(a!=="a"||r!=="href")){e.removeAttribute(r);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=qs(""+s),e.setAttribute(r,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(a!=="input"&&At(e,a,"name",u.name,u,null),At(e,a,"formEncType",u.formEncType,u,null),At(e,a,"formMethod",u.formMethod,u,null),At(e,a,"formTarget",u.formTarget,u,null)):(At(e,a,"encType",u.encType,u,null),At(e,a,"method",u.method,u,null),At(e,a,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=qs(""+s),e.setAttribute(r,s);break;case"onClick":s!=null&&(e.onclick=Ul);break;case"onScroll":s!=null&&vt("scroll",e);break;case"onScrollEnd":s!=null&&vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(r=s.__html,r!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}r=qs(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""+s):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":s===!0?e.setAttribute(r,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,s):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(r,s):e.removeAttribute(r);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(r):e.setAttribute(r,s);break;case"popover":vt("beforetoggle",e),vt("toggle",e),zs(e,"popover",s);break;case"xlinkActuate":zn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":zn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":zn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":zn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":zn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":zn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":zn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":zn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":zn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":zs(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=KT.get(r)||r,zs(e,r,s))}}function Bf(e,a,r,s,u,d){switch(r){case"style":Ip(e,s,d);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(r=s.__html,r!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"children":typeof s=="string"?Gi(e,s):(typeof s=="number"||typeof s=="bigint")&&Gi(e,""+s);break;case"onScroll":s!=null&&vt("scroll",e);break;case"onScrollEnd":s!=null&&vt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ap.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),a=r.slice(2,u?r.length-7:void 0),d=e[Dt]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(a,d,u),typeof s=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(a,s,u);break t}r in e?e[r]=s:s===!0?e.setAttribute(r,""):zs(e,r,s)}}}function ye(e,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",e),vt("load",e);var s=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var v=r[d];if(v!=null)switch(d){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:At(e,a,d,v,r,null)}}u&&At(e,a,"srcSet",r.srcSet,r,null),s&&At(e,a,"src",r.src,r,null);return;case"input":vt("invalid",e);var b=d=v=u=null,T=null,M=null;for(s in r)if(r.hasOwnProperty(s)){var B=r[s];if(B!=null)switch(s){case"name":u=B;break;case"type":v=B;break;case"checked":T=B;break;case"defaultChecked":M=B;break;case"value":d=B;break;case"defaultValue":b=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,a));break;default:At(e,a,s,B,r,null)}}Np(e,d,b,T,M,v,u,!1),Hs(e);return;case"select":vt("invalid",e),s=v=d=null;for(u in r)if(r.hasOwnProperty(u)&&(b=r[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":v=b;break;case"multiple":s=b;default:At(e,a,u,b,r,null)}a=d,r=v,e.multiple=!!s,a!=null?qi(e,!!s,a,!1):r!=null&&qi(e,!!s,r,!0);return;case"textarea":vt("invalid",e),d=u=s=null;for(v in r)if(r.hasOwnProperty(v)&&(b=r[v],b!=null))switch(v){case"value":s=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:At(e,a,v,b,r,null)}Up(e,s,u,d),Hs(e);return;case"option":for(T in r)if(r.hasOwnProperty(T)&&(s=r[T],s!=null))switch(T){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:At(e,a,T,s,r,null)}return;case"dialog":vt("beforetoggle",e),vt("toggle",e),vt("cancel",e),vt("close",e);break;case"iframe":case"object":vt("load",e);break;case"video":case"audio":for(s=0;s<Uo.length;s++)vt(Uo[s],e);break;case"image":vt("error",e),vt("load",e);break;case"details":vt("toggle",e);break;case"embed":case"source":case"link":vt("error",e),vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in r)if(r.hasOwnProperty(M)&&(s=r[M],s!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:At(e,a,M,s,r,null)}return;default:if(Ju(a)){for(B in r)r.hasOwnProperty(B)&&(s=r[B],s!==void 0&&Bf(e,a,B,s,r,void 0));return}}for(b in r)r.hasOwnProperty(b)&&(s=r[b],s!=null&&At(e,a,b,s,r,null))}function bE(e,a,r,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,v=null,b=null,T=null,M=null,B=null;for(L in r){var j=r[L];if(r.hasOwnProperty(L)&&j!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":T=j;default:s.hasOwnProperty(L)||At(e,a,L,null,s,j)}}for(var P in s){var L=s[P];if(j=r[P],s.hasOwnProperty(P)&&(L!=null||j!=null))switch(P){case"type":d=L;break;case"name":u=L;break;case"checked":M=L;break;case"defaultChecked":B=L;break;case"value":v=L;break;case"defaultValue":b=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,a));break;default:L!==j&&At(e,a,P,L,s,j)}}Qu(e,v,b,T,M,B,d,u);return;case"select":L=v=b=P=null;for(d in r)if(T=r[d],r.hasOwnProperty(d)&&T!=null)switch(d){case"value":break;case"multiple":L=T;default:s.hasOwnProperty(d)||At(e,a,d,null,s,T)}for(u in s)if(d=s[u],T=r[u],s.hasOwnProperty(u)&&(d!=null||T!=null))switch(u){case"value":P=d;break;case"defaultValue":b=d;break;case"multiple":v=d;default:d!==T&&At(e,a,u,d,s,T)}a=b,r=v,s=L,P!=null?qi(e,!!r,P,!1):!!s!=!!r&&(a!=null?qi(e,!!r,a,!0):qi(e,!!r,r?[]:"",!1));return;case"textarea":L=P=null;for(b in r)if(u=r[b],r.hasOwnProperty(b)&&u!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:At(e,a,b,null,s,u)}for(v in s)if(u=s[v],d=r[v],s.hasOwnProperty(v)&&(u!=null||d!=null))switch(v){case"value":P=u;break;case"defaultValue":L=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==d&&At(e,a,v,u,s,d)}Pp(e,P,L);return;case"option":for(var ct in r)if(P=r[ct],r.hasOwnProperty(ct)&&P!=null&&!s.hasOwnProperty(ct))switch(ct){case"selected":e.selected=!1;break;default:At(e,a,ct,null,s,P)}for(T in s)if(P=s[T],L=r[T],s.hasOwnProperty(T)&&P!==L&&(P!=null||L!=null))switch(T){case"selected":e.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:At(e,a,T,P,s,L)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in r)P=r[ot],r.hasOwnProperty(ot)&&P!=null&&!s.hasOwnProperty(ot)&&At(e,a,ot,null,s,P);for(M in s)if(P=s[M],L=r[M],s.hasOwnProperty(M)&&P!==L&&(P!=null||L!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(o(137,a));break;default:At(e,a,M,P,s,L)}return;default:if(Ju(a)){for(var Rt in r)P=r[Rt],r.hasOwnProperty(Rt)&&P!==void 0&&!s.hasOwnProperty(Rt)&&Bf(e,a,Rt,void 0,s,P);for(B in s)P=s[B],L=r[B],!s.hasOwnProperty(B)||P===L||P===void 0&&L===void 0||Bf(e,a,B,P,s,L);return}}for(var D in r)P=r[D],r.hasOwnProperty(D)&&P!=null&&!s.hasOwnProperty(D)&&At(e,a,D,null,s,P);for(j in s)P=s[j],L=r[j],!s.hasOwnProperty(j)||P===L||P==null&&L==null||At(e,a,j,P,s,L)}var zf=null,Vf=null;function Ll(e){return e.nodeType===9?e:e.ownerDocument}function L0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I0(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Hf(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var jf=null;function xE(){var e=window.event;return e&&e.type==="popstate"?e===jf?!1:(jf=e,!0):(jf=null,!1)}var B0=typeof setTimeout=="function"?setTimeout:void 0,TE=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,SE=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(e){return z0.resolve(null).then(e).catch(EE)}:B0;function EE(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function V0(e,a){var r=a,s=0,u=0;do{var d=r.nextSibling;if(e.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(0<s&&8>s){r=s;var v=e.ownerDocument;if(r&1&&Io(v.documentElement),r&2&&Io(v.body),r&4)for(r=v.head,Io(r),v=r.firstChild;v;){var b=v.nextSibling,T=v.nodeName;v[Qr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&v.rel.toLowerCase()==="stylesheet"||r.removeChild(v),v=b}}if(u===0){e.removeChild(d),Fo(a);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:s=r.charCodeAt(0)-48;else s=0;r=d}while(r);Fo(a)}function qf(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":qf(r),Xu(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function wE(e,a,r,s){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Qr])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=dn(e.nextSibling),e===null)break}return null}function _E(e,a,r){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=dn(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function AE(e,a){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")a();else{var s=function(){a(),r.removeEventListener("DOMContentLoaded",s)};r.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function dn(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var Ff=null;function H0(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return e;a--}else r==="/$"&&a++}e=e.previousSibling}return null}function j0(e,a,r){switch(a=Ll(r),e){case"html":if(e=a.documentElement,!e)throw Error(o(452));return e;case"head":if(e=a.head,!e)throw Error(o(453));return e;case"body":if(e=a.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Io(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Xu(e)}var en=new Map,q0=new Set;function Il(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jn=q.d;q.d={f:RE,r:OE,D:CE,C:DE,L:kE,m:ME,X:PE,S:NE,M:UE};function RE(){var e=Jn.f(),a=Ol();return e||a}function OE(e){var a=zi(e);a!==null&&a.tag===5&&a.type==="form"?ug(a):Jn.r(e)}var br=typeof document>"u"?null:document;function G0(e,a,r){var s=br;if(s&&typeof a=="string"&&a){var u=Ke(a);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),q0.has(u)||(q0.add(u),e={rel:e,crossOrigin:r,href:a},s.querySelector(u)===null&&(a=s.createElement("link"),ye(a,"link",e),ue(a),s.head.appendChild(a)))}}function CE(e){Jn.D(e),G0("dns-prefetch",e,null)}function DE(e,a){Jn.C(e,a),G0("preconnect",e,a)}function kE(e,a,r){Jn.L(e,a,r);var s=br;if(s&&e&&a){var u='link[rel="preload"][as="'+Ke(a)+'"]';a==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Ke(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Ke(r.imageSizes)+'"]')):u+='[href="'+Ke(e)+'"]';var d=u;switch(a){case"style":d=xr(e);break;case"script":d=Tr(e)}en.has(d)||(e=g({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:e,as:a},r),en.set(d,e),s.querySelector(u)!==null||a==="style"&&s.querySelector(Bo(d))||a==="script"&&s.querySelector(zo(d))||(a=s.createElement("link"),ye(a,"link",e),ue(a),s.head.appendChild(a)))}}function ME(e,a){Jn.m(e,a);var r=br;if(r&&e){var s=a&&typeof a.as=="string"?a.as:"script",u='link[rel="modulepreload"][as="'+Ke(s)+'"][href="'+Ke(e)+'"]',d=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Tr(e)}if(!en.has(d)&&(e=g({rel:"modulepreload",href:e},a),en.set(d,e),r.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(zo(d)))return}s=r.createElement("link"),ye(s,"link",e),ue(s),r.head.appendChild(s)}}}function NE(e,a,r){Jn.S(e,a,r);var s=br;if(s&&e){var u=Vi(s).hoistableStyles,d=xr(e);a=a||"default";var v=u.get(d);if(!v){var b={loading:0,preload:null};if(v=s.querySelector(Bo(d)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":a},r),(r=en.get(d))&&Yf(e,r);var T=v=s.createElement("link");ue(T),ye(T,"link",e),T._p=new Promise(function(M,B){T.onload=M,T.onerror=B}),T.addEventListener("load",function(){b.loading|=1}),T.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Bl(v,a,s)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(d,v)}}}function PE(e,a){Jn.X(e,a);var r=br;if(r&&e){var s=Vi(r).hoistableScripts,u=Tr(e),d=s.get(u);d||(d=r.querySelector(zo(u)),d||(e=g({src:e,async:!0},a),(a=en.get(u))&&Xf(e,a),d=r.createElement("script"),ue(d),ye(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(u,d))}}function UE(e,a){Jn.M(e,a);var r=br;if(r&&e){var s=Vi(r).hoistableScripts,u=Tr(e),d=s.get(u);d||(d=r.querySelector(zo(u)),d||(e=g({src:e,async:!0,type:"module"},a),(a=en.get(u))&&Xf(e,a),d=r.createElement("script"),ue(d),ye(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(u,d))}}function F0(e,a,r,s){var u=(u=nt.current)?Il(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=xr(r.href),r=Vi(u).hoistableStyles,s=r.get(a),s||(s={type:"style",instance:null,count:0,state:null},r.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=xr(r.href);var d=Vi(u).hoistableStyles,v=d.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=u.querySelector(Bo(e)))&&!d._p&&(v.instance=d,v.state.loading=5),en.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},en.set(e,r),d||LE(u,e,r,v.state))),a&&s===null)throw Error(o(528,""));return v}if(a&&s!==null)throw Error(o(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Tr(r),r=Vi(u).hoistableScripts,s=r.get(a),s||(s={type:"script",instance:null,count:0,state:null},r.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function xr(e){return'href="'+Ke(e)+'"'}function Bo(e){return'link[rel="stylesheet"]['+e+"]"}function Y0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function LE(e,a,r,s){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?s.loading=1:(a=e.createElement("link"),s.preload=a,a.addEventListener("load",function(){return s.loading|=1}),a.addEventListener("error",function(){return s.loading|=2}),ye(a,"link",r),ue(a),e.head.appendChild(a))}function Tr(e){return'[src="'+Ke(e)+'"]'}function zo(e){return"script[async]"+e}function X0(e,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var s=e.querySelector('style[data-href~="'+Ke(r.href)+'"]');if(s)return a.instance=s,ue(s),s;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),ue(s),ye(s,"style",u),Bl(s,r.precedence,e),a.instance=s;case"stylesheet":u=xr(r.href);var d=e.querySelector(Bo(u));if(d)return a.state.loading|=4,a.instance=d,ue(d),d;s=Y0(r),(u=en.get(u))&&Yf(s,u),d=(e.ownerDocument||e).createElement("link"),ue(d);var v=d;return v._p=new Promise(function(b,T){v.onload=b,v.onerror=T}),ye(d,"link",s),a.state.loading|=4,Bl(d,r.precedence,e),a.instance=d;case"script":return d=Tr(r.src),(u=e.querySelector(zo(d)))?(a.instance=u,ue(u),u):(s=r,(u=en.get(d))&&(s=g({},r),Xf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),ue(u),ye(u,"link",s),e.head.appendChild(u),a.instance=u);case"void":return null;default:throw Error(o(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(s=a.instance,a.state.loading|=4,Bl(s,r.precedence,e));return a.instance}function Bl(e,a,r){for(var s=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,d=u,v=0;v<s.length;v++){var b=s[v];if(b.dataset.precedence===a)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(e,a.firstChild))}function Yf(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Xf(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var zl=null;function K0(e,a,r){if(zl===null){var s=new Map,u=zl=new Map;u.set(r,s)}else u=zl,s=u.get(r),s||(s=new Map,u.set(r,s));if(s.has(e))return s;for(s.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var d=r[u];if(!(d[Qr]||d[Kt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(a)||"";v=e+v;var b=s.get(v);b?b.push(d):s.set(v,[d])}}return s}function $0(e,a,r){e=e.ownerDocument||e,e.head.insertBefore(r,a==="title"?e.querySelector("head > title"):null)}function IE(e,a,r){if(r===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Z0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Vo=null;function BE(){}function zE(e,a,r){if(Vo===null)throw Error(o(475));var s=Vo;if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(r.href),d=e.querySelector(Bo(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Vl.bind(s),e.then(s,s)),a.state.loading|=4,a.instance=d,ue(d);return}d=e.ownerDocument||e,r=Y0(r),(u=en.get(u))&&Yf(r,u),d=d.createElement("link"),ue(d);var v=d;v._p=new Promise(function(b,T){v.onload=b,v.onerror=T}),ye(d,"link",r),a.instance=d}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(s.count++,a=Vl.bind(s),e.addEventListener("load",a),e.addEventListener("error",a))}}function VE(){if(Vo===null)throw Error(o(475));var e=Vo;return e.stylesheets&&e.count===0&&Kf(e,e.stylesheets),0<e.count?function(a){var r=setTimeout(function(){if(e.stylesheets&&Kf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Vl(){if(this.count--,this.count===0){if(this.stylesheets)Kf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hl=null;function Kf(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hl=new Map,a.forEach(HE,e),Hl=null,Vl.call(e))}function HE(e,a){if(!(a.state.loading&4)){var r=Hl.get(e);if(r)var s=r.get(null);else{r=new Map,Hl.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var v=u[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(r.set(v.dataset.precedence,v),s=v)}s&&r.set(null,s)}u=a.instance,v=u.getAttribute("data-precedence"),d=r.get(v)||s,d===s&&r.set(null,u),r.set(v,u),this.count++,s=Vl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),a.state.loading|=4}}var Ho={$$typeof:I,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function jE(e,a,r,s,u,d,v,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zr(0),this.hiddenUpdates=Zr(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Q0(e,a,r,s,u,d,v,b,T,M,B,j){return e=new jE(e,a,r,v,b,T,M,j),a=1,d===!0&&(a|=24),d=ze(3,null,null,a),e.current=d,d.stateNode=e,a=Oc(),a.refCount++,e.pooledCache=a,a.refCount++,d.memoizedState={element:s,isDehydrated:r,cache:a},Mc(d),e}function W0(e){return e?(e=Wi,e):Wi}function J0(e,a,r,s,u,d){u=W0(u),s.context===null?s.context=u:s.pendingContext=u,s=va(a),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=ba(e,s,a),r!==null&&(Ge(r,e,a),yo(r,e,a))}function ty(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function $f(e,a){ty(e,a),(e=e.alternate)&&ty(e,a)}function ey(e){if(e.tag===13){var a=Qi(e,67108864);a!==null&&Ge(a,e,67108864),$f(e,67108864)}}var jl=!0;function qE(e,a,r,s){var u=U.T;U.T=null;var d=q.p;try{q.p=2,Zf(e,a,r,s)}finally{q.p=d,U.T=u}}function GE(e,a,r,s){var u=U.T;U.T=null;var d=q.p;try{q.p=8,Zf(e,a,r,s)}finally{q.p=d,U.T=u}}function Zf(e,a,r,s){if(jl){var u=Qf(s);if(u===null)If(e,a,s,ql,r),ay(e,s);else if(YE(u,e,a,r,s))s.stopPropagation();else if(ay(e,s),a&4&&-1<FE.indexOf(e)){for(;u!==null;){var d=zi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=En(d.pendingLanes);if(v!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var T=1<<31-he(v);b.entanglements[1]|=T,v&=~T}On(d),(Et&6)===0&&(Al=be()+500,Po(0))}}break;case 13:b=Qi(d,2),b!==null&&Ge(b,d,2),Ol(),$f(d,2)}if(d=Qf(s),d===null&&If(e,a,s,ql,r),d===u)break;u=d}u!==null&&s.stopPropagation()}else If(e,a,s,null,r)}}function Qf(e){return e=ec(e),Wf(e)}var ql=null;function Wf(e){if(ql=null,e=Bi(e),e!==null){var a=c(e);if(a===null)e=null;else{var r=a.tag;if(r===13){if(e=f(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return ql=e,null}function ny(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ps()){case Ye:return 2;case Us:return 8;case Pi:case _e:return 32;case In:return 268435456;default:return 32}default:return 32}}var Jf=!1,Ma=null,Na=null,Pa=null,jo=new Map,qo=new Map,Ua=[],FE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ay(e,a){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":jo.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(a.pointerId)}}function Go(e,a,r,s,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:a,domEventName:r,eventSystemFlags:s,nativeEvent:d,targetContainers:[u]},a!==null&&(a=zi(a),a!==null&&ey(a)),e):(e.eventSystemFlags|=s,a=e.targetContainers,u!==null&&a.indexOf(u)===-1&&a.push(u),e)}function YE(e,a,r,s,u){switch(a){case"focusin":return Ma=Go(Ma,e,a,r,s,u),!0;case"dragenter":return Na=Go(Na,e,a,r,s,u),!0;case"mouseover":return Pa=Go(Pa,e,a,r,s,u),!0;case"pointerover":var d=u.pointerId;return jo.set(d,Go(jo.get(d)||null,e,a,r,s,u)),!0;case"gotpointercapture":return d=u.pointerId,qo.set(d,Go(qo.get(d)||null,e,a,r,s,u)),!0}return!1}function iy(e){var a=Bi(e.target);if(a!==null){var r=c(a);if(r!==null){if(a=r.tag,a===13){if(a=f(r),a!==null){e.blockedOn=a,ie(e.priority,function(){if(r.tag===13){var s=qe();s=te(s);var u=Qi(r,s);u!==null&&Ge(u,r,s),$f(r,s)}});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=Qf(e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);tc=s,r.target.dispatchEvent(s),tc=null}else return a=zi(r),a!==null&&ey(a),e.blockedOn=r,!1;a.shift()}return!0}function ry(e,a,r){Gl(e)&&r.delete(a)}function XE(){Jf=!1,Ma!==null&&Gl(Ma)&&(Ma=null),Na!==null&&Gl(Na)&&(Na=null),Pa!==null&&Gl(Pa)&&(Pa=null),jo.forEach(ry),qo.forEach(ry)}function Fl(e,a){e.blockedOn===a&&(e.blockedOn=null,Jf||(Jf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,XE)))}var Yl=null;function oy(e){Yl!==e&&(Yl=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Yl===e&&(Yl=null);for(var a=0;a<e.length;a+=3){var r=e[a],s=e[a+1],u=e[a+2];if(typeof s!="function"){if(Wf(s||r)===null)continue;break}var d=zi(r);d!==null&&(e.splice(a,3),a-=3,Qc(d,{pending:!0,data:u,method:r.method,action:s},s,u))}}))}function Fo(e){function a(T){return Fl(T,e)}Ma!==null&&Fl(Ma,e),Na!==null&&Fl(Na,e),Pa!==null&&Fl(Pa,e),jo.forEach(a),qo.forEach(a);for(var r=0;r<Ua.length;r++){var s=Ua[r];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ua.length&&(r=Ua[0],r.blockedOn===null);)iy(r),r.blockedOn===null&&Ua.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(s=0;s<r.length;s+=3){var u=r[s],d=r[s+1],v=u[Dt]||null;if(typeof d=="function")v||oy(r);else if(v){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,v=d[Dt]||null)b=v.formAction;else if(Wf(u)!==null)continue}else b=v.action;typeof b=="function"?r[s+1]=b:(r.splice(s,3),s-=3),oy(r)}}}function td(e){this._internalRoot=e}Xl.prototype.render=td.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(o(409));var r=a.current,s=qe();J0(r,s,e,a,null,null)},Xl.prototype.unmount=td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;J0(e.current,2,null,e,null,null),Ol(),a[le]=null}};function Xl(e){this._internalRoot=e}Xl.prototype.unstable_scheduleHydration=function(e){if(e){var a=ni();e={blockedOn:null,target:e,priority:a};for(var r=0;r<Ua.length&&a!==0&&a<Ua[r].priority;r++);Ua.splice(r,0,e),r===0&&iy(e)}};var sy=t.version;if(sy!=="19.1.1")throw Error(o(527,sy,"19.1.1"));q.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=h(a),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var KE={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Sn=Kl.inject(KE),Ae=Kl}catch{}}return Xo.createRoot=function(e,a){if(!l(e))throw Error(o(299));var r=!1,s="",u=Eg,d=wg,v=_g,b=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks)),a=Q0(e,1,!1,null,null,r,s,u,d,v,b,null),e[le]=a.current,Lf(e),new td(a)},Xo.hydrateRoot=function(e,a,r){if(!l(e))throw Error(o(299));var s=!1,u="",d=Eg,v=wg,b=_g,T=null,M=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(v=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks),r.formState!==void 0&&(M=r.formState)),a=Q0(e,1,!0,a,r??null,s,u,d,v,b,T,M),a.context=W0(null),r=a.current,s=qe(),s=te(s),u=va(s),u.callback=null,ba(r,u,s),r=s,a.current.lanes=r,pa(a,r),On(a),e[le]=a.current,Lf(e),new Xl(a)},Xo.version="19.1.1",Xo}var yy;function aw(){if(yy)return ad.exports;yy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),ad.exports=nw(),ad.exports}var iw=aw();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var vy="popstate";function rw(n={}){function t(l,c){let{pathname:f="/",search:p="",hash:h=""}=ki(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Pd("",{pathname:f,search:p,hash:h},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let h=l.location.href,m=h.indexOf("#");p=m===-1?h:h.slice(0,m)}return p+"#"+(typeof c=="string"?c:fs(c))}function o(l,c){bn(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return sw(t,i,o,n)}function Vt(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function bn(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ow(){return Math.random().toString(36).substring(2,10)}function by(n,t){return{usr:n.state,key:n.key,idx:t}}function Pd(n,t,i=null,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?ki(t):t,state:i,key:t&&t.key||o||ow()}}function fs({pathname:n="/",search:t="",hash:i=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function ki(n){let t={};if(n){let i=n.indexOf("#");i>=0&&(t.hash=n.substring(i),n=n.substring(0,i));let o=n.indexOf("?");o>=0&&(t.search=n.substring(o),n=n.substring(0,o)),n&&(t.pathname=n)}return t}function sw(n,t,i,o={}){let{window:l=document.defaultView,v5Compat:c=!1}=o,f=l.history,p="POP",h=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function y(){p="POP";let R=g(),C=R==null?null:R-m;m=R,h&&h({action:p,location:A.location,delta:C})}function x(R,C){p="PUSH";let N=Pd(A.location,R,C);i&&i(N,R),m=g()+1;let I=by(N,m),X=A.createHref(N);try{f.pushState(I,"",X)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;l.location.assign(X)}c&&h&&h({action:p,location:A.location,delta:1})}function S(R,C){p="REPLACE";let N=Pd(A.location,R,C);i&&i(N,R),m=g();let I=by(N,m),X=A.createHref(N);f.replaceState(I,"",X),c&&h&&h({action:p,location:A.location,delta:0})}function E(R){return lw(R)}let A={get action(){return p},get location(){return n(l,f)},listen(R){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(vy,y),h=R,()=>{l.removeEventListener(vy,y),h=null}},createHref(R){return t(l,R)},createURL:E,encodeLocation(R){let C=E(R);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:x,replace:S,go(R){return f.go(R)}};return A}function lw(n,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Vt(i,"No window.location.(origin|href) available to create URL");let o=typeof n=="string"?n:fs(n);return o=o.replace(/ $/,"%20"),!t&&o.startsWith("//")&&(o=i+o),new URL(o,i)}function Mb(n,t,i="/"){return uw(n,t,i,!1)}function uw(n,t,i,o){let l=typeof t=="string"?ki(t):t,c=ia(l.pathname||"/",i);if(c==null)return null;let f=Nb(n);cw(f);let p=null;for(let h=0;p==null&&h<f.length;++h){let m=Tw(c);p=bw(f[h],m,o)}return p}function Nb(n,t=[],i=[],o="",l=!1){let c=(f,p,h=l,m)=>{let g={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(o)&&h)return;Vt(g.relativePath.startsWith(o),`Absolute route path "${g.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(o.length)}let y=aa([o,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&(Vt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Nb(f.children,t,x,y,h)),!(f.path==null&&!f.index)&&t.push({path:y,score:yw(y,f.index),routesMeta:x})};return n.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let h of Pb(f.path))c(f,p,!0,h)}),t}function Pb(n){let t=n.split("/");if(t.length===0)return[];let[i,...o]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(o.length===0)return l?[c,""]:[c];let f=Pb(o.join("/")),p=[];return p.push(...f.map(h=>h===""?c:[c,h].join("/"))),l&&p.push(...f),p.map(h=>n.startsWith("/")&&h===""?"/":h)}function cw(n){n.sort((t,i)=>t.score!==i.score?i.score-t.score:vw(t.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var fw=/^:[\w-]+$/,dw=3,hw=2,pw=1,mw=10,gw=-2,xy=n=>n==="*";function yw(n,t){let i=n.split("/"),o=i.length;return i.some(xy)&&(o+=gw),t&&(o+=hw),i.filter(l=>!xy(l)).reduce((l,c)=>l+(fw.test(c)?dw:c===""?pw:mw),o)}function vw(n,t){return n.length===t.length&&n.slice(0,-1).every((o,l)=>o===t[l])?n[n.length-1]-t[t.length-1]:0}function bw(n,t,i=!1){let{routesMeta:o}=n,l={},c="/",f=[];for(let p=0;p<o.length;++p){let h=o[p],m=p===o.length-1,g=c==="/"?t:t.slice(c.length)||"/",y=gu({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},g),x=h.route;if(!y&&m&&i&&!o[o.length-1].route.index&&(y=gu({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!y)return null;Object.assign(l,y.params),f.push({params:l,pathname:aa([c,y.pathname]),pathnameBase:_w(aa([c,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(c=aa([c,y.pathnameBase]))}return f}function gu(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,o]=xw(n.path,n.caseSensitive,n.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:o.reduce((m,{paramName:g,isOptional:y},x)=>{if(g==="*"){let E=p[x]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const S=p[x];return y&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:n}}function xw(n,t=!1,i=!0){bn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,h)=>(o.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),l+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":n!==""&&n!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),o]}function Tw(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function ia(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,o=n.charAt(i);return o&&o!=="/"?null:n.slice(i)||"/"}function Sw(n,t="/"){let{pathname:i,search:o="",hash:l=""}=typeof n=="string"?ki(n):n;return{pathname:i?i.startsWith("/")?i:Ew(i,t):t,search:Aw(o),hash:Rw(l)}}function Ew(n,t){let i=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function sd(n,t,i,o){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ww(n){return n.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Ub(n){let t=ww(n);return t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase)}function Lb(n,t,i,o=!1){let l;typeof n=="string"?l=ki(n):(l={...n},Vt(!l.pathname||!l.pathname.includes("?"),sd("?","pathname","search",l)),Vt(!l.pathname||!l.pathname.includes("#"),sd("#","pathname","hash",l)),Vt(!l.search||!l.search.includes("#"),sd("#","search","hash",l)));let c=n===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let y=t.length-1;if(!o&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),y-=1;l.pathname=x.join("/")}p=y>=0?t[y]:"/"}let h=Sw(l,p),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(m||g)&&(h.pathname+="/"),h}var aa=n=>n.join("/").replace(/\/\/+/g,"/"),_w=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Aw=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Rw=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Ow(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Ib=["POST","PUT","PATCH","DELETE"];new Set(Ib);var Cw=["GET",...Ib];new Set(Cw);var Br=O.createContext(null);Br.displayName="DataRouter";var Nu=O.createContext(null);Nu.displayName="DataRouterState";O.createContext(!1);var Bb=O.createContext({isTransitioning:!1});Bb.displayName="ViewTransition";var Dw=O.createContext(new Map);Dw.displayName="Fetchers";var kw=O.createContext(null);kw.displayName="Await";var Un=O.createContext(null);Un.displayName="Navigation";var Ts=O.createContext(null);Ts.displayName="Location";var ua=O.createContext({outlet:null,matches:[],isDataRoute:!1});ua.displayName="Route";var yh=O.createContext(null);yh.displayName="RouteError";function Mw(n,{relative:t}={}){Vt(Ss(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=O.useContext(Un),{hash:l,pathname:c,search:f}=Es(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:aa([i,c])),o.createHref({pathname:p,search:f,hash:l})}function Ss(){return O.useContext(Ts)!=null}function Mi(){return Vt(Ss(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Ts).location}var zb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vb(n){O.useContext(Un).static||O.useLayoutEffect(n)}function vh(){let{isDataRoute:n}=O.useContext(ua);return n?Fw():Nw()}function Nw(){Vt(Ss(),"useNavigate() may be used only in the context of a <Router> component.");let n=O.useContext(Br),{basename:t,navigator:i}=O.useContext(Un),{matches:o}=O.useContext(ua),{pathname:l}=Mi(),c=JSON.stringify(Ub(o)),f=O.useRef(!1);return Vb(()=>{f.current=!0}),O.useCallback((h,m={})=>{if(bn(f.current,zb),!f.current)return;if(typeof h=="number"){i.go(h);return}let g=Lb(h,JSON.parse(c),l,m.relative==="path");n==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:aa([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,c,l,n])}O.createContext(null);function Es(n,{relative:t}={}){let{matches:i}=O.useContext(ua),{pathname:o}=Mi(),l=JSON.stringify(Ub(i));return O.useMemo(()=>Lb(n,JSON.parse(l),o,t==="path"),[n,l,o,t])}function Pw(n,t){return Hb(n,t)}function Hb(n,t,i,o,l){Vt(Ss(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=O.useContext(Un),{matches:f}=O.useContext(ua),p=f[f.length-1],h=p?p.params:{},m=p?p.pathname:"/",g=p?p.pathnameBase:"/",y=p&&p.route;{let N=y&&y.path||"";jb(m,!y||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let x=Mi(),S;if(t){let N=typeof t=="string"?ki(t):t;Vt(g==="/"||N.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${N.pathname}" was given in the \`location\` prop.`),S=N}else S=x;let E=S.pathname||"/",A=E;if(g!=="/"){let N=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(N.length).join("/")}let R=Mb(n,{pathname:A});bn(y||R!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),bn(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=zw(R&&R.map(N=>Object.assign({},N,{params:Object.assign({},h,N.params),pathname:aa([g,c.encodeLocation?c.encodeLocation(N.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?g:aa([g,c.encodeLocation?c.encodeLocation(N.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathnameBase])})),f,i,o,l);return t&&C?O.createElement(Ts.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},C):C}function Uw(){let n=Gw(),t=Ow(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:c},"ErrorBoundary")," or"," ",O.createElement("code",{style:c},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),i?O.createElement("pre",{style:l},i):null,f)}var Lw=O.createElement(Uw,null),Iw=class extends O.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){this.props.unstable_onError?this.props.unstable_onError(n,t):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?O.createElement(ua.Provider,{value:this.props.routeContext},O.createElement(yh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Bw({routeContext:n,match:t,children:i}){let o=O.useContext(Br);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),O.createElement(ua.Provider,{value:n},i)}function zw(n,t=[],i=null,o=null,l=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let c=n,f=i?.errors;if(f!=null){let m=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Vt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,m+1))}let p=!1,h=-1;if(i)for(let m=0;m<c.length;m++){let g=c[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=m),g.route.id){let{loaderData:y,errors:x}=i,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||S){p=!0,h>=0?c=c.slice(0,h+1):c=[c[0]];break}}}return c.reduceRight((m,g,y)=>{let x,S=!1,E=null,A=null;i&&(x=f&&g.route.id?f[g.route.id]:void 0,E=g.route.errorElement||Lw,p&&(h<0&&y===0?(jb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,A=null):h===y&&(S=!0,A=g.route.hydrateFallbackElement||null)));let R=t.concat(c.slice(0,y+1)),C=()=>{let N;return x?N=E:S?N=A:g.route.Component?N=O.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=m,O.createElement(Bw,{match:g,routeContext:{outlet:m,matches:R,isDataRoute:i!=null},children:N})};return i&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?O.createElement(Iw,{location:i.location,revalidation:i.revalidation,component:E,error:x,children:C(),routeContext:{outlet:null,matches:R,isDataRoute:!0},unstable_onError:o}):C()},null)}function bh(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vw(n){let t=O.useContext(Br);return Vt(t,bh(n)),t}function Hw(n){let t=O.useContext(Nu);return Vt(t,bh(n)),t}function jw(n){let t=O.useContext(ua);return Vt(t,bh(n)),t}function xh(n){let t=jw(n),i=t.matches[t.matches.length-1];return Vt(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function qw(){return xh("useRouteId")}function Gw(){let n=O.useContext(yh),t=Hw("useRouteError"),i=xh("useRouteError");return n!==void 0?n:t.errors?.[i]}function Fw(){let{router:n}=Vw("useNavigate"),t=xh("useNavigate"),i=O.useRef(!1);return Vb(()=>{i.current=!0}),O.useCallback(async(l,c={})=>{bn(i.current,zb),i.current&&(typeof l=="number"?n.navigate(l):await n.navigate(l,{fromRouteId:t,...c}))},[n,t])}var Ty={};function jb(n,t,i){!t&&!Ty[n]&&(Ty[n]=!0,bn(!1,i))}O.memo(Yw);function Yw({routes:n,future:t,state:i,unstable_onError:o}){return Hb(n,void 0,i,o,t)}function Qo(n){Vt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Xw({basename:n="/",children:t=null,location:i,navigationType:o="POP",navigator:l,static:c=!1}){Vt(!Ss(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),p=O.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=ki(i));let{pathname:h="/",search:m="",hash:g="",state:y=null,key:x="default"}=i,S=O.useMemo(()=>{let E=ia(h,f);return E==null?null:{location:{pathname:E,search:m,hash:g,state:y,key:x},navigationType:o}},[f,h,m,g,y,x,o]);return bn(S!=null,`<Router basename="${f}"> is not able to match the URL "${h}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:O.createElement(Un.Provider,{value:p},O.createElement(Ts.Provider,{children:t,value:S}))}function Kw({children:n,location:t}){return Pw(Ud(n),t)}function Ud(n,t=[]){let i=[];return O.Children.forEach(n,(o,l)=>{if(!O.isValidElement(o))return;let c=[...t,l];if(o.type===O.Fragment){i.push.apply(i,Ud(o.props.children,c));return}Vt(o.type===Qo,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Vt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=Ud(o.props.children,c)),i.push(f)}),i}var ou="get",su="application/x-www-form-urlencoded";function Pu(n){return n!=null&&typeof n.tagName=="string"}function $w(n){return Pu(n)&&n.tagName.toLowerCase()==="button"}function Zw(n){return Pu(n)&&n.tagName.toLowerCase()==="form"}function Qw(n){return Pu(n)&&n.tagName.toLowerCase()==="input"}function Ww(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Jw(n,t){return n.button===0&&(!t||t==="_self")&&!Ww(n)}var $l=null;function t_(){if($l===null)try{new FormData(document.createElement("form"),0),$l=!1}catch{$l=!0}return $l}var e_=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ld(n){return n!=null&&!e_.has(n)?(bn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${su}"`),null):n}function n_(n,t){let i,o,l,c,f;if(Zw(n)){let p=n.getAttribute("action");o=p?ia(p,t):null,i=n.getAttribute("method")||ou,l=ld(n.getAttribute("enctype"))||su,c=new FormData(n)}else if($w(n)||Qw(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||p.getAttribute("action");if(o=h?ia(h,t):null,i=n.getAttribute("formmethod")||p.getAttribute("method")||ou,l=ld(n.getAttribute("formenctype"))||ld(p.getAttribute("enctype"))||su,c=new FormData(p,n),!t_()){let{name:m,type:g,value:y}=n;if(g==="image"){let x=m?`${m}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else m&&c.append(m,y)}}else{if(Pu(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ou,o=null,l=su,f=n}return c&&l==="text/plain"&&(f=c,c=void 0),{action:o,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Th(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function a_(n,t,i){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname=`_root.${i}`:t&&ia(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${i}`,o}async function i_(n,t){if(n.id in t)return t[n.id];try{let i=await import(n.module);return t[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function r_(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function o_(n,t,i){let o=await Promise.all(n.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await i_(c,i);return f.links?f.links():[]}return[]}));return c_(o.flat(1).filter(r_).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Sy(n,t,i,o,l,c){let f=(h,m)=>i[m]?h.route.id!==i[m].route.id:!0,p=(h,m)=>i[m].pathname!==h.pathname||i[m].route.path?.endsWith("*")&&i[m].params["*"]!==h.params["*"];return c==="assets"?t.filter((h,m)=>f(h,m)||p(h,m)):c==="data"?t.filter((h,m)=>{let g=o.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(f(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let y=h.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function s_(n,t,{includeHydrateFallback:i}={}){return l_(n.map(o=>{let l=t.routes[o.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function l_(n){return[...new Set(n)]}function u_(n){let t={},i=Object.keys(n).sort();for(let o of i)t[o]=n[o];return t}function c_(n,t){let i=new Set;return new Set(t),n.reduce((o,l)=>{let c=JSON.stringify(u_(l));return i.has(c)||(i.add(c),o.push({key:c,link:l})),o},[])}function qb(){let n=O.useContext(Br);return Th(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function f_(){let n=O.useContext(Nu);return Th(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Sh=O.createContext(void 0);Sh.displayName="FrameworkContext";function Gb(){let n=O.useContext(Sh);return Th(n,"You must render this element inside a <HydratedRouter> element"),n}function d_(n,t){let i=O.useContext(Sh),[o,l]=O.useState(!1),[c,f]=O.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:g,onTouchStart:y}=t,x=O.useRef(null);O.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let A=C=>{C.forEach(N=>{f(N.isIntersecting)})},R=new IntersectionObserver(A,{threshold:.5});return x.current&&R.observe(x.current),()=>{R.disconnect()}}},[n]),O.useEffect(()=>{if(o){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[o]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?n!=="intent"?[c,x,{}]:[c,x,{onFocus:Ko(p,S),onBlur:Ko(h,E),onMouseEnter:Ko(m,S),onMouseLeave:Ko(g,E),onTouchStart:Ko(y,S)}]:[!1,x,{}]}function Ko(n,t){return i=>{n&&n(i),i.defaultPrevented||t(i)}}function h_({page:n,...t}){let{router:i}=qb(),o=O.useMemo(()=>Mb(i.routes,n,i.basename),[i.routes,n,i.basename]);return o?O.createElement(m_,{page:n,matches:o,...t}):null}function p_(n){let{manifest:t,routeModules:i}=Gb(),[o,l]=O.useState([]);return O.useEffect(()=>{let c=!1;return o_(n,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[n,t,i]),o}function m_({page:n,matches:t,...i}){let o=Mi(),{manifest:l,routeModules:c}=Gb(),{basename:f}=qb(),{loaderData:p,matches:h}=f_(),m=O.useMemo(()=>Sy(n,t,h,l,o,"data"),[n,t,h,l,o]),g=O.useMemo(()=>Sy(n,t,h,l,o,"assets"),[n,t,h,l,o]),y=O.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let E=new Set,A=!1;if(t.forEach(C=>{let N=l.routes[C.route.id];!N||!N.hasLoader||(!m.some(I=>I.route.id===C.route.id)&&C.route.id in p&&c[C.route.id]?.shouldRevalidate||N.hasClientLoader?A=!0:E.add(C.route.id))}),E.size===0)return[];let R=a_(n,f,"data");return A&&E.size>0&&R.searchParams.set("_routes",t.filter(C=>E.has(C.route.id)).map(C=>C.route.id).join(",")),[R.pathname+R.search]},[f,p,o,l,m,t,n,c]),x=O.useMemo(()=>s_(g,l),[g,l]),S=p_(g);return O.createElement(O.Fragment,null,y.map(E=>O.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),x.map(E=>O.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),S.map(({key:E,link:A})=>O.createElement("link",{key:E,nonce:i.nonce,...A})))}function g_(...n){return t=>{n.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Fb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fb&&(window.__reactRouterVersion="7.9.4")}catch{}function y_({basename:n,children:t,window:i}){let o=O.useRef();o.current==null&&(o.current=rw({window:i,v5Compat:!0}));let l=o.current,[c,f]=O.useState({action:l.action,location:l.location}),p=O.useCallback(h=>{O.startTransition(()=>f(h))},[f]);return O.useLayoutEffect(()=>l.listen(p),[l,p]),O.createElement(Xw,{basename:n,children:t,location:c.location,navigationType:c.action,navigator:l})}var Yb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xb=O.forwardRef(function({onClick:t,discover:i="render",prefetch:o="none",relative:l,reloadDocument:c,replace:f,state:p,target:h,to:m,preventScrollReset:g,viewTransition:y,...x},S){let{basename:E}=O.useContext(Un),A=typeof m=="string"&&Yb.test(m),R,C=!1;if(typeof m=="string"&&A&&(R=m,Fb))try{let Z=new URL(window.location.href),xt=m.startsWith("//")?new URL(Z.protocol+m):new URL(m),It=ia(xt.pathname,E);xt.origin===Z.origin&&It!=null?m=It+xt.search+xt.hash:C=!0}catch{bn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=Mw(m,{relative:l}),[I,X,V]=d_(o,x),J=T_(m,{replace:f,state:p,target:h,preventScrollReset:g,relative:l,viewTransition:y});function $(Z){t&&t(Z),Z.defaultPrevented||J(Z)}let F=O.createElement("a",{...x,...V,href:R||N,onClick:C||c?t:$,ref:g_(S,X),target:h,"data-discover":!A&&i==="render"?"true":void 0});return I&&!A?O.createElement(O.Fragment,null,F,O.createElement(h_,{page:N})):F});Xb.displayName="Link";var v_=O.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:o="",end:l=!1,style:c,to:f,viewTransition:p,children:h,...m},g){let y=Es(f,{relative:m.relative}),x=Mi(),S=O.useContext(Nu),{navigator:E,basename:A}=O.useContext(Un),R=S!=null&&A_(y)&&p===!0,C=E.encodeLocation?E.encodeLocation(y).pathname:y.pathname,N=x.pathname,I=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(N=N.toLowerCase(),I=I?I.toLowerCase():null,C=C.toLowerCase()),I&&A&&(I=ia(I,A)||I);const X=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let V=N===C||!l&&N.startsWith(C)&&N.charAt(X)==="/",J=I!=null&&(I===C||!l&&I.startsWith(C)&&I.charAt(C.length)==="/"),$={isActive:V,isPending:J,isTransitioning:R},F=V?t:void 0,Z;typeof o=="function"?Z=o($):Z=[o,V?"active":null,J?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let xt=typeof c=="function"?c($):c;return O.createElement(Xb,{...m,"aria-current":F,className:Z,ref:g,style:xt,to:f,viewTransition:p},typeof h=="function"?h($):h)});v_.displayName="NavLink";var b_=O.forwardRef(({discover:n="render",fetcherKey:t,navigate:i,reloadDocument:o,replace:l,state:c,method:f=ou,action:p,onSubmit:h,relative:m,preventScrollReset:g,viewTransition:y,...x},S)=>{let E=w_(),A=__(p,{relative:m}),R=f.toLowerCase()==="get"?"get":"post",C=typeof p=="string"&&Yb.test(p),N=I=>{if(h&&h(I),I.defaultPrevented)return;I.preventDefault();let X=I.nativeEvent.submitter,V=X?.getAttribute("formmethod")||f;E(X||I.currentTarget,{fetcherKey:t,method:V,navigate:i,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:y})};return O.createElement("form",{ref:S,method:R,action:A,onSubmit:o?h:N,...x,"data-discover":!C&&n==="render"?"true":void 0})});b_.displayName="Form";function x_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kb(n){let t=O.useContext(Br);return Vt(t,x_(n)),t}function T_(n,{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:f}={}){let p=vh(),h=Mi(),m=Es(n,{relative:c});return O.useCallback(g=>{if(Jw(g,t)){g.preventDefault();let y=i!==void 0?i:fs(h)===fs(m);p(n,{replace:y,state:o,preventScrollReset:l,relative:c,viewTransition:f})}},[h,p,m,i,o,t,n,l,c,f])}var S_=0,E_=()=>`__${String(++S_)}__`;function w_(){let{router:n}=Kb("useSubmit"),{basename:t}=O.useContext(Un),i=qw();return O.useCallback(async(o,l={})=>{let{action:c,method:f,encType:p,formData:h,body:m}=n_(o,t);if(l.navigate===!1){let g=l.fetcherKey||E_();await n.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:h,body:m,formMethod:l.method||f,formEncType:l.encType||p,flushSync:l.flushSync})}else await n.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:h,body:m,formMethod:l.method||f,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[n,t,i])}function __(n,{relative:t}={}){let{basename:i}=O.useContext(Un),o=O.useContext(ua);Vt(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),c={...Es(n||".",{relative:t})},f=Mi();if(n==null){c.search=f.search;let p=new URLSearchParams(c.search),h=p.getAll("index");if(h.some(g=>g==="")){p.delete("index"),h.filter(y=>y).forEach(y=>p.append("index",y));let g=p.toString();c.search=g?`?${g}`:""}}return(!n||n===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:aa([i,c.pathname])),fs(c)}function A_(n,{relative:t}={}){let i=O.useContext(Bb);Vt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Kb("useViewTransitionState"),l=Es(n,{relative:t});if(!i.isTransitioning)return!1;let c=ia(i.currentLocation.pathname,o)||i.currentLocation.pathname,f=ia(i.nextLocation.pathname,o)||i.nextLocation.pathname;return gu(l.pathname,f)!=null||gu(l.pathname,c)!=null}var R_=kb();const O_=Db(R_);var $b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ey=Y.createContext&&Y.createContext($b),C_=["attr","size","title"];function D_(n,t){if(n==null)return{};var i=k_(n,t),o,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(l=0;l<c.length;l++)o=c[l],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}function k_(n,t){if(n==null)return{};var i={};for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){if(t.indexOf(o)>=0)continue;i[o]=n[o]}return i}function yu(){return yu=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},yu.apply(this,arguments)}function wy(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),i.push.apply(i,o)}return i}function vu(n){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?wy(Object(i),!0).forEach(function(o){M_(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):wy(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function M_(n,t,i){return t=N_(t),t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}function N_(n){var t=P_(n,"string");return typeof t=="symbol"?t:t+""}function P_(n,t){if(typeof n!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var o=i.call(n,t);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Zb(n){return n&&n.map((t,i)=>Y.createElement(t.tag,vu({key:i},t.attr),Zb(t.child)))}function Eh(n){return t=>Y.createElement(U_,yu({attr:vu({},n.attr)},t),Zb(n.child))}function U_(n){var t=i=>{var{attr:o,size:l,title:c}=n,f=D_(n,C_),p=l||i.size||"1em",h;return i.className&&(h=i.className),n.className&&(h=(h?h+" ":"")+n.className),Y.createElement("svg",yu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,f,{className:h,style:vu(vu({color:n.color||i.color},i.style),n.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&Y.createElement("title",null,c),n.children)};return Ey!==void 0?Y.createElement(Ey.Consumer,null,i=>t(i)):t($b)}function Zl(n){return Eh({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"},child:[]}]})(n)}const Qb=O.createContext({});function L_(n){const t=O.useRef(null);return t.current===null&&(t.current=n()),t.current}const wh=typeof window<"u",I_=wh?O.useLayoutEffect:O.useEffect,_h=O.createContext(null);function Ah(n,t){n.indexOf(t)===-1&&n.push(t)}function Rh(n,t){const i=n.indexOf(t);i>-1&&n.splice(i,1)}const ra=(n,t,i)=>i>t?t:i<n?n:i;let Oh=()=>{};const oa={},Wb=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Jb(n){return typeof n=="object"&&n!==null}const t1=n=>/^0[^.\s]+$/u.test(n);function Ch(n){let t;return()=>(t===void 0&&(t=n()),t)}const on=n=>n,B_=(n,t)=>i=>t(n(i)),ws=(...n)=>n.reduce(B_),ds=(n,t,i)=>{const o=t-n;return o===0?1:(i-n)/o};class Dh{constructor(){this.subscriptions=[]}add(t){return Ah(this.subscriptions,t),()=>Rh(this.subscriptions,t)}notify(t,i,o){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](t,i,o);else for(let c=0;c<l;c++){const f=this.subscriptions[c];f&&f(t,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const kn=n=>n*1e3,rn=n=>n/1e3;function e1(n,t){return t?n*(1e3/t):0}const n1=(n,t,i)=>(((1-3*i+3*t)*n+(3*i-6*t))*n+3*t)*n,z_=1e-7,V_=12;function H_(n,t,i,o,l){let c,f,p=0;do f=t+(i-t)/2,c=n1(f,o,l)-n,c>0?i=f:t=f;while(Math.abs(c)>z_&&++p<V_);return f}function _s(n,t,i,o){if(n===t&&i===o)return on;const l=c=>H_(c,0,1,n,i);return c=>c===0||c===1?c:n1(l(c),t,o)}const a1=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,i1=n=>t=>1-n(1-t),r1=_s(.33,1.53,.69,.99),kh=i1(r1),o1=a1(kh),s1=n=>(n*=2)<1?.5*kh(n):.5*(2-Math.pow(2,-10*(n-1))),Mh=n=>1-Math.sin(Math.acos(n)),l1=i1(Mh),u1=a1(Mh),j_=_s(.42,0,1,1),q_=_s(0,0,.58,1),c1=_s(.42,0,.58,1),G_=n=>Array.isArray(n)&&typeof n[0]!="number",f1=n=>Array.isArray(n)&&typeof n[0]=="number",F_={linear:on,easeIn:j_,easeInOut:c1,easeOut:q_,circIn:Mh,circInOut:u1,circOut:l1,backIn:kh,backInOut:o1,backOut:r1,anticipate:s1},Y_=n=>typeof n=="string",_y=n=>{if(f1(n)){Oh(n.length===4);const[t,i,o,l]=n;return _s(t,i,o,l)}else if(Y_(n))return F_[n];return n},Ql=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function X_(n,t){let i=new Set,o=new Set,l=!1,c=!1;const f=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(g){f.has(g)&&(m.schedule(g),n()),g(p)}const m={schedule:(g,y=!1,x=!1)=>{const E=x&&l?i:o;return y&&f.add(g),E.has(g)||E.add(g),g},cancel:g=>{o.delete(g),f.delete(g)},process:g=>{if(p=g,l){c=!0;return}l=!0,[i,o]=[o,i],i.forEach(h),i.clear(),l=!1,c&&(c=!1,m.process(g))}};return m}const K_=40;function d1(n,t){let i=!1,o=!0;const l={delta:0,timestamp:0,isProcessing:!1},c=()=>i=!0,f=Ql.reduce((I,X)=>(I[X]=X_(c),I),{}),{setup:p,read:h,resolveKeyframes:m,preUpdate:g,update:y,preRender:x,render:S,postRender:E}=f,A=()=>{const I=oa.useManualTiming?l.timestamp:performance.now();i=!1,oa.useManualTiming||(l.delta=o?1e3/60:Math.max(Math.min(I-l.timestamp,K_),1)),l.timestamp=I,l.isProcessing=!0,p.process(l),h.process(l),m.process(l),g.process(l),y.process(l),x.process(l),S.process(l),E.process(l),l.isProcessing=!1,i&&t&&(o=!1,n(A))},R=()=>{i=!0,o=!0,l.isProcessing||n(A)};return{schedule:Ql.reduce((I,X)=>{const V=f[X];return I[X]=(J,$=!1,F=!1)=>(i||R(),V.schedule(J,$,F)),I},{}),cancel:I=>{for(let X=0;X<Ql.length;X++)f[Ql[X]].cancel(I)},state:l,steps:f}}const{schedule:Lt,cancel:$a,state:ve,steps:ud}=d1(typeof requestAnimationFrame<"u"?requestAnimationFrame:on,!0);let lu;function $_(){lu=void 0}const Ie={now:()=>(lu===void 0&&Ie.set(ve.isProcessing||oa.useManualTiming?ve.timestamp:performance.now()),lu),set:n=>{lu=n,queueMicrotask($_)}},h1=n=>t=>typeof t=="string"&&t.startsWith(n),Nh=h1("--"),Z_=h1("var(--"),Ph=n=>Z_(n)?Q_.test(n.split("/*")[0].trim()):!1,Q_=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,zr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},hs={...zr,transform:n=>ra(0,1,n)},Wl={...zr,default:1},ns=n=>Math.round(n*1e5)/1e5,Uh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function W_(n){return n==null}const J_=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Lh=(n,t)=>i=>!!(typeof i=="string"&&J_.test(i)&&i.startsWith(n)||t&&!W_(i)&&Object.prototype.hasOwnProperty.call(i,t)),p1=(n,t,i)=>o=>{if(typeof o!="string")return o;const[l,c,f,p]=o.match(Uh);return{[n]:parseFloat(l),[t]:parseFloat(c),[i]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},t2=n=>ra(0,255,n),cd={...zr,transform:n=>Math.round(t2(n))},Ei={test:Lh("rgb","red"),parse:p1("red","green","blue"),transform:({red:n,green:t,blue:i,alpha:o=1})=>"rgba("+cd.transform(n)+", "+cd.transform(t)+", "+cd.transform(i)+", "+ns(hs.transform(o))+")"};function e2(n){let t="",i="",o="",l="";return n.length>5?(t=n.substring(1,3),i=n.substring(3,5),o=n.substring(5,7),l=n.substring(7,9)):(t=n.substring(1,2),i=n.substring(2,3),o=n.substring(3,4),l=n.substring(4,5),t+=t,i+=i,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Ld={test:Lh("#"),parse:e2,transform:Ei.transform},As=n=>({test:t=>typeof t=="string"&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),za=As("deg"),Mn=As("%"),ft=As("px"),n2=As("vh"),a2=As("vw"),Ay={...Mn,parse:n=>Mn.parse(n)/100,transform:n=>Mn.transform(n*100)},Er={test:Lh("hsl","hue"),parse:p1("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:i,alpha:o=1})=>"hsla("+Math.round(n)+", "+Mn.transform(ns(t))+", "+Mn.transform(ns(i))+", "+ns(hs.transform(o))+")"},ae={test:n=>Ei.test(n)||Ld.test(n)||Er.test(n),parse:n=>Ei.test(n)?Ei.parse(n):Er.test(n)?Er.parse(n):Ld.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ei.transform(n):Er.transform(n),getAnimatableNone:n=>{const t=ae.parse(n);return t.alpha=0,ae.transform(t)}},i2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function r2(n){return isNaN(n)&&typeof n=="string"&&(n.match(Uh)?.length||0)+(n.match(i2)?.length||0)>0}const m1="number",g1="color",o2="var",s2="var(",Ry="${}",l2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ps(n){const t=n.toString(),i=[],o={color:[],number:[],var:[]},l=[];let c=0;const p=t.replace(l2,h=>(ae.test(h)?(o.color.push(c),l.push(g1),i.push(ae.parse(h))):h.startsWith(s2)?(o.var.push(c),l.push(o2),i.push(h)):(o.number.push(c),l.push(m1),i.push(parseFloat(h))),++c,Ry)).split(Ry);return{values:i,split:p,indexes:o,types:l}}function y1(n){return ps(n).values}function v1(n){const{split:t,types:i}=ps(n),o=t.length;return l=>{let c="";for(let f=0;f<o;f++)if(c+=t[f],l[f]!==void 0){const p=i[f];p===m1?c+=ns(l[f]):p===g1?c+=ae.transform(l[f]):c+=l[f]}return c}}const u2=n=>typeof n=="number"?0:ae.test(n)?ae.getAnimatableNone(n):n;function c2(n){const t=y1(n);return v1(n)(t.map(u2))}const Za={test:r2,parse:y1,createTransformer:v1,getAnimatableNone:c2};function fd(n,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?n+(t-n)*6*i:i<1/2?t:i<2/3?n+(t-n)*(2/3-i)*6:n}function f2({hue:n,saturation:t,lightness:i,alpha:o}){n/=360,t/=100,i/=100;let l=0,c=0,f=0;if(!t)l=c=f=i;else{const p=i<.5?i*(1+t):i+t-i*t,h=2*i-p;l=fd(h,p,n+1/3),c=fd(h,p,n),f=fd(h,p,n-1/3)}return{red:Math.round(l*255),green:Math.round(c*255),blue:Math.round(f*255),alpha:o}}function bu(n,t){return i=>i>0?t:n}const zt=(n,t,i)=>n+(t-n)*i,dd=(n,t,i)=>{const o=n*n,l=i*(t*t-o)+o;return l<0?0:Math.sqrt(l)},d2=[Ld,Ei,Er],h2=n=>d2.find(t=>t.test(n));function Oy(n){const t=h2(n);if(!t)return!1;let i=t.parse(n);return t===Er&&(i=f2(i)),i}const Cy=(n,t)=>{const i=Oy(n),o=Oy(t);if(!i||!o)return bu(n,t);const l={...i};return c=>(l.red=dd(i.red,o.red,c),l.green=dd(i.green,o.green,c),l.blue=dd(i.blue,o.blue,c),l.alpha=zt(i.alpha,o.alpha,c),Ei.transform(l))},Id=new Set(["none","hidden"]);function p2(n,t){return Id.has(n)?i=>i<=0?n:t:i=>i>=1?t:n}function m2(n,t){return i=>zt(n,t,i)}function Ih(n){return typeof n=="number"?m2:typeof n=="string"?Ph(n)?bu:ae.test(n)?Cy:v2:Array.isArray(n)?b1:typeof n=="object"?ae.test(n)?Cy:g2:bu}function b1(n,t){const i=[...n],o=i.length,l=n.map((c,f)=>Ih(c)(c,t[f]));return c=>{for(let f=0;f<o;f++)i[f]=l[f](c);return i}}function g2(n,t){const i={...n,...t},o={};for(const l in i)n[l]!==void 0&&t[l]!==void 0&&(o[l]=Ih(n[l])(n[l],t[l]));return l=>{for(const c in o)i[c]=o[c](l);return i}}function y2(n,t){const i=[],o={color:0,var:0,number:0};for(let l=0;l<t.values.length;l++){const c=t.types[l],f=n.indexes[c][o[c]],p=n.values[f]??0;i[l]=p,o[c]++}return i}const v2=(n,t)=>{const i=Za.createTransformer(t),o=ps(n),l=ps(t);return o.indexes.var.length===l.indexes.var.length&&o.indexes.color.length===l.indexes.color.length&&o.indexes.number.length>=l.indexes.number.length?Id.has(n)&&!l.values.length||Id.has(t)&&!o.values.length?p2(n,t):ws(b1(y2(o,l),l.values),i):bu(n,t)};function x1(n,t,i){return typeof n=="number"&&typeof t=="number"&&typeof i=="number"?zt(n,t,i):Ih(n)(n,t)}const b2=n=>{const t=({timestamp:i})=>n(i);return{start:(i=!0)=>Lt.update(t,i),stop:()=>$a(t),now:()=>ve.isProcessing?ve.timestamp:Ie.now()}},T1=(n,t,i=10)=>{let o="";const l=Math.max(Math.round(t/i),2);for(let c=0;c<l;c++)o+=Math.round(n(c/(l-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},xu=2e4;function Bh(n){let t=0;const i=50;let o=n.next(t);for(;!o.done&&t<xu;)t+=i,o=n.next(t);return t>=xu?1/0:t}function x2(n,t=100,i){const o=i({...n,keyframes:[0,t]}),l=Math.min(Bh(o),xu);return{type:"keyframes",ease:c=>o.next(l*c).value/t,duration:rn(l)}}const T2=5;function S1(n,t,i){const o=Math.max(t-T2,0);return e1(i-n(o),t-o)}const qt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},hd=.001;function S2({duration:n=qt.duration,bounce:t=qt.bounce,velocity:i=qt.velocity,mass:o=qt.mass}){let l,c,f=1-t;f=ra(qt.minDamping,qt.maxDamping,f),n=ra(qt.minDuration,qt.maxDuration,rn(n)),f<1?(l=m=>{const g=m*f,y=g*n,x=g-i,S=Bd(m,f),E=Math.exp(-y);return hd-x/S*E},c=m=>{const y=m*f*n,x=y*i+i,S=Math.pow(f,2)*Math.pow(m,2)*n,E=Math.exp(-y),A=Bd(Math.pow(m,2),f);return(-l(m)+hd>0?-1:1)*((x-S)*E)/A}):(l=m=>{const g=Math.exp(-m*n),y=(m-i)*n+1;return-hd+g*y},c=m=>{const g=Math.exp(-m*n),y=(i-m)*(n*n);return g*y});const p=5/n,h=w2(l,c,p);if(n=kn(n),isNaN(h))return{stiffness:qt.stiffness,damping:qt.damping,duration:n};{const m=Math.pow(h,2)*o;return{stiffness:m,damping:f*2*Math.sqrt(o*m),duration:n}}}const E2=12;function w2(n,t,i){let o=i;for(let l=1;l<E2;l++)o=o-n(o)/t(o);return o}function Bd(n,t){return n*Math.sqrt(1-t*t)}const _2=["duration","bounce"],A2=["stiffness","damping","mass"];function Dy(n,t){return t.some(i=>n[i]!==void 0)}function R2(n){let t={velocity:qt.velocity,stiffness:qt.stiffness,damping:qt.damping,mass:qt.mass,isResolvedFromDuration:!1,...n};if(!Dy(n,A2)&&Dy(n,_2))if(n.visualDuration){const i=n.visualDuration,o=2*Math.PI/(i*1.2),l=o*o,c=2*ra(.05,1,1-(n.bounce||0))*Math.sqrt(l);t={...t,mass:qt.mass,stiffness:l,damping:c}}else{const i=S2(n);t={...t,...i,mass:qt.mass},t.isResolvedFromDuration=!0}return t}function Tu(n=qt.visualDuration,t=qt.bounce){const i=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:t}:n;let{restSpeed:o,restDelta:l}=i;const c=i.keyframes[0],f=i.keyframes[i.keyframes.length-1],p={done:!1,value:c},{stiffness:h,damping:m,mass:g,duration:y,velocity:x,isResolvedFromDuration:S}=R2({...i,velocity:-rn(i.velocity||0)}),E=x||0,A=m/(2*Math.sqrt(h*g)),R=f-c,C=rn(Math.sqrt(h/g)),N=Math.abs(R)<5;o||(o=N?qt.restSpeed.granular:qt.restSpeed.default),l||(l=N?qt.restDelta.granular:qt.restDelta.default);let I;if(A<1){const V=Bd(C,A);I=J=>{const $=Math.exp(-A*C*J);return f-$*((E+A*C*R)/V*Math.sin(V*J)+R*Math.cos(V*J))}}else if(A===1)I=V=>f-Math.exp(-C*V)*(R+(E+C*R)*V);else{const V=C*Math.sqrt(A*A-1);I=J=>{const $=Math.exp(-A*C*J),F=Math.min(V*J,300);return f-$*((E+A*C*R)*Math.sinh(F)+V*R*Math.cosh(F))/V}}const X={calculatedDuration:S&&y||null,next:V=>{const J=I(V);if(S)p.done=V>=y;else{let $=V===0?E:0;A<1&&($=V===0?kn(E):S1(I,V,J));const F=Math.abs($)<=o,Z=Math.abs(f-J)<=l;p.done=F&&Z}return p.value=p.done?f:J,p},toString:()=>{const V=Math.min(Bh(X),xu),J=T1($=>X.next(V*$).value,V,30);return V+"ms "+J},toTransition:()=>{}};return X}Tu.applyToOptions=n=>{const t=x2(n,100,Tu);return n.ease=t.ease,n.duration=kn(t.duration),n.type="keyframes",n};function zd({keyframes:n,velocity:t=0,power:i=.8,timeConstant:o=325,bounceDamping:l=10,bounceStiffness:c=500,modifyTarget:f,min:p,max:h,restDelta:m=.5,restSpeed:g}){const y=n[0],x={done:!1,value:y},S=F=>p!==void 0&&F<p||h!==void 0&&F>h,E=F=>p===void 0?h:h===void 0||Math.abs(p-F)<Math.abs(h-F)?p:h;let A=i*t;const R=y+A,C=f===void 0?R:f(R);C!==R&&(A=C-y);const N=F=>-A*Math.exp(-F/o),I=F=>C+N(F),X=F=>{const Z=N(F),xt=I(F);x.done=Math.abs(Z)<=m,x.value=x.done?C:xt};let V,J;const $=F=>{S(x.value)&&(V=F,J=Tu({keyframes:[x.value,E(x.value)],velocity:S1(I,F,x.value),damping:l,stiffness:c,restDelta:m,restSpeed:g}))};return $(0),{calculatedDuration:null,next:F=>{let Z=!1;return!J&&V===void 0&&(Z=!0,X(F),$(F)),V!==void 0&&F>=V?J.next(F-V):(!Z&&X(F),x)}}}function O2(n,t,i){const o=[],l=i||oa.mix||x1,c=n.length-1;for(let f=0;f<c;f++){let p=l(n[f],n[f+1]);if(t){const h=Array.isArray(t)?t[f]||on:t;p=ws(h,p)}o.push(p)}return o}function C2(n,t,{clamp:i=!0,ease:o,mixer:l}={}){const c=n.length;if(Oh(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const f=n[0]===n[1];n[0]>n[c-1]&&(n=[...n].reverse(),t=[...t].reverse());const p=O2(t,o,l),h=p.length,m=g=>{if(f&&g<n[0])return t[0];let y=0;if(h>1)for(;y<n.length-2&&!(g<n[y+1]);y++);const x=ds(n[y],n[y+1],g);return p[y](x)};return i?g=>m(ra(n[0],n[c-1],g)):m}function D2(n,t){const i=n[n.length-1];for(let o=1;o<=t;o++){const l=ds(0,t,o);n.push(zt(i,1,l))}}function k2(n){const t=[0];return D2(t,n.length-1),t}function M2(n,t){return n.map(i=>i*t)}function N2(n,t){return n.map(()=>t||c1).splice(0,n.length-1)}function as({duration:n=300,keyframes:t,times:i,ease:o="easeInOut"}){const l=G_(o)?o.map(_y):_y(o),c={done:!1,value:t[0]},f=M2(i&&i.length===t.length?i:k2(t),n),p=C2(f,t,{ease:Array.isArray(l)?l:N2(t,l)});return{calculatedDuration:n,next:h=>(c.value=p(h),c.done=h>=n,c)}}const P2=n=>n!==null;function zh(n,{repeat:t,repeatType:i="loop"},o,l=1){const c=n.filter(P2),p=l<0||t&&i!=="loop"&&t%2===1?0:c.length-1;return!p||o===void 0?c[p]:o}const U2={decay:zd,inertia:zd,tween:as,keyframes:as,spring:Tu};function E1(n){typeof n.type=="string"&&(n.type=U2[n.type])}class Vh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,i){return this.finished.then(t,i)}}const L2=n=>n/100;class Hh extends Vh{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:i}=this.options;i&&i.updatedAt!==Ie.now()&&this.tick(Ie.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;E1(t);const{type:i=as,repeat:o=0,repeatDelay:l=0,repeatType:c,velocity:f=0}=t;let{keyframes:p}=t;const h=i||as;h!==as&&typeof p[0]!="number"&&(this.mixKeyframes=ws(L2,x1(p[0],p[1])),p=[0,100]);const m=h({...t,keyframes:p});c==="mirror"&&(this.mirroredGenerator=h({...t,keyframes:[...p].reverse(),velocity:-f})),m.calculatedDuration===null&&(m.calculatedDuration=Bh(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+l,this.totalDuration=this.resolvedDuration*(o+1)-l,this.generator=m}updateTime(t){const i=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(t,i=!1){const{generator:o,totalDuration:l,mixKeyframes:c,mirroredGenerator:f,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return o.next(0);const{delay:m=0,keyframes:g,repeat:y,repeatType:x,repeatDelay:S,type:E,onUpdate:A,finalKeyframe:R}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-l/this.speed,this.startTime)),i?this.currentTime=t:this.updateTime(t);const C=this.currentTime-m*(this.playbackSpeed>=0?1:-1),N=this.playbackSpeed>=0?C<0:C>l;this.currentTime=Math.max(C,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let I=this.currentTime,X=o;if(y){const F=Math.min(this.currentTime,l)/p;let Z=Math.floor(F),xt=F%1;!xt&&F>=1&&(xt=1),xt===1&&Z--,Z=Math.min(Z,y+1),!!(Z%2)&&(x==="reverse"?(xt=1-xt,S&&(xt-=S/p)):x==="mirror"&&(X=f)),I=ra(0,1,xt)*p}const V=N?{done:!1,value:g[0]}:X.next(I);c&&(V.value=c(V.value));let{done:J}=V;!N&&h!==null&&(J=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const $=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&J);return $&&E!==zd&&(V.value=zh(g,this.options,R,this.speed)),A&&A(V.value),$&&this.finish(),V}then(t,i){return this.finished.then(t,i)}get duration(){return rn(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+rn(t)}get time(){return rn(this.currentTime)}set time(t){t=kn(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Ie.now());const i=this.playbackSpeed!==t;this.playbackSpeed=t,i&&(this.time=rn(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=b2,startTime:i}=this.options;this.driver||(this.driver=t(l=>this.tick(l))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=i??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ie.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function I2(n){for(let t=1;t<n.length;t++)n[t]??(n[t]=n[t-1])}const wi=n=>n*180/Math.PI,Vd=n=>{const t=wi(Math.atan2(n[1],n[0]));return Hd(t)},B2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Vd,rotateZ:Vd,skewX:n=>wi(Math.atan(n[1])),skewY:n=>wi(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Hd=n=>(n=n%360,n<0&&(n+=360),n),ky=Vd,My=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Ny=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),z2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:My,scaleY:Ny,scale:n=>(My(n)+Ny(n))/2,rotateX:n=>Hd(wi(Math.atan2(n[6],n[5]))),rotateY:n=>Hd(wi(Math.atan2(-n[2],n[0]))),rotateZ:ky,rotate:ky,skewX:n=>wi(Math.atan(n[4])),skewY:n=>wi(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function jd(n){return n.includes("scale")?1:0}function qd(n,t){if(!n||n==="none")return jd(t);const i=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,l;if(i)o=z2,l=i;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=B2,l=p}if(!l)return jd(t);const c=o[t],f=l[1].split(",").map(H2);return typeof c=="function"?c(f):f[c]}const V2=(n,t)=>{const{transform:i="none"}=getComputedStyle(n);return qd(i,t)};function H2(n){return parseFloat(n.trim())}const Vr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Hr=new Set(Vr),Py=n=>n===zr||n===ft,j2=new Set(["x","y","z"]),q2=Vr.filter(n=>!j2.has(n));function G2(n){const t=[];return q2.forEach(i=>{const o=n.getValue(i);o!==void 0&&(t.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),t}const _i={width:({x:n},{paddingLeft:t="0",paddingRight:i="0"})=>n.max-n.min-parseFloat(t)-parseFloat(i),height:({y:n},{paddingTop:t="0",paddingBottom:i="0"})=>n.max-n.min-parseFloat(t)-parseFloat(i),top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:(n,{transform:t})=>qd(t,"x"),y:(n,{transform:t})=>qd(t,"y")};_i.translateX=_i.x;_i.translateY=_i.y;const Ai=new Set;let Gd=!1,Fd=!1,Yd=!1;function w1(){if(Fd){const n=Array.from(Ai).filter(o=>o.needsMeasurement),t=new Set(n.map(o=>o.element)),i=new Map;t.forEach(o=>{const l=G2(o);l.length&&(i.set(o,l),o.render())}),n.forEach(o=>o.measureInitialState()),t.forEach(o=>{o.render();const l=i.get(o);l&&l.forEach(([c,f])=>{o.getValue(c)?.set(f)})}),n.forEach(o=>o.measureEndState()),n.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Fd=!1,Gd=!1,Ai.forEach(n=>n.complete(Yd)),Ai.clear()}function _1(){Ai.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Fd=!0)})}function F2(){Yd=!0,_1(),w1(),Yd=!1}class jh{constructor(t,i,o,l,c,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=i,this.name=o,this.motionValue=l,this.element=c,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Ai.add(this),Gd||(Gd=!0,Lt.read(_1),Lt.resolveKeyframes(w1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:i,element:o,motionValue:l}=this;if(t[0]===null){const c=l?.get(),f=t[t.length-1];if(c!==void 0)t[0]=c;else if(o&&i){const p=o.readValue(i,f);p!=null&&(t[0]=p)}t[0]===void 0&&(t[0]=f),l&&c===void 0&&l.set(t[0])}I2(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Ai.delete(this)}cancel(){this.state==="scheduled"&&(Ai.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Y2=n=>n.startsWith("--");function X2(n,t,i){Y2(t)?n.style.setProperty(t,i):n.style[t]=i}const K2=Ch(()=>window.ScrollTimeline!==void 0),$2={};function Z2(n,t){const i=Ch(n);return()=>$2[t]??i()}const A1=Z2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Wo=([n,t,i,o])=>`cubic-bezier(${n}, ${t}, ${i}, ${o})`,Uy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Wo([0,.65,.55,1]),circOut:Wo([.55,0,1,.45]),backIn:Wo([.31,.01,.66,-.59]),backOut:Wo([.33,1.53,.69,.99])};function R1(n,t){if(n)return typeof n=="function"?A1()?T1(n,t):"ease-out":f1(n)?Wo(n):Array.isArray(n)?n.map(i=>R1(i,t)||Uy.easeOut):Uy[n]}function Q2(n,t,i,{delay:o=0,duration:l=300,repeat:c=0,repeatType:f="loop",ease:p="easeOut",times:h}={},m=void 0){const g={[t]:i};h&&(g.offset=h);const y=R1(p,l);Array.isArray(y)&&(g.easing=y);const x={delay:o,duration:l,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:c+1,direction:f==="reverse"?"alternate":"normal"};return m&&(x.pseudoElement=m),n.animate(g,x)}function O1(n){return typeof n=="function"&&"applyToOptions"in n}function W2({type:n,...t}){return O1(n)&&A1()?n.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class J2 extends Vh{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:i,name:o,keyframes:l,pseudoElement:c,allowFlatten:f=!1,finalKeyframe:p,onComplete:h}=t;this.isPseudoElement=!!c,this.allowFlatten=f,this.options=t,Oh(typeof t.type!="string");const m=W2(t);this.animation=Q2(i,o,l,m,c),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const g=zh(l,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(g):X2(i,o,g),this.animation.cancel()}h?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return rn(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+rn(t)}get time(){return rn(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=kn(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:i}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&K2()?(this.animation.timeline=t,on):i(this)}}const C1={anticipate:s1,backInOut:o1,circInOut:u1};function tA(n){return n in C1}function eA(n){typeof n.ease=="string"&&tA(n.ease)&&(n.ease=C1[n.ease])}const Ly=10;class nA extends J2{constructor(t){eA(t),E1(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:i,onUpdate:o,onComplete:l,element:c,...f}=this.options;if(!i)return;if(t!==void 0){i.set(t);return}const p=new Hh({...f,autoplay:!1}),h=kn(this.finishedTime??this.time);i.setWithVelocity(p.sample(h-Ly).value,p.sample(h).value,Ly),p.stop()}}const Iy=(n,t)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Za.test(n)||n==="0")&&!n.startsWith("url("));function aA(n){const t=n[0];if(n.length===1)return!0;for(let i=0;i<n.length;i++)if(n[i]!==t)return!0}function iA(n,t,i,o){const l=n[0];if(l===null)return!1;if(t==="display"||t==="visibility")return!0;const c=n[n.length-1],f=Iy(l,t),p=Iy(c,t);return!f||!p?!1:aA(n)||(i==="spring"||O1(i))&&o}function Xd(n){n.duration=0,n.type="keyframes"}const rA=new Set(["opacity","clipPath","filter","transform"]),oA=Ch(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function sA(n){const{motionValue:t,name:i,repeatDelay:o,repeatType:l,damping:c,type:f}=n;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:m}=t.owner.getProps();return oA()&&i&&rA.has(i)&&(i!=="transform"||!m)&&!h&&!o&&l!=="mirror"&&c!==0&&f!=="inertia"}const lA=40;class uA extends Vh{constructor({autoplay:t=!0,delay:i=0,type:o="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:f="loop",keyframes:p,name:h,motionValue:m,element:g,...y}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ie.now();const x={autoplay:t,delay:i,type:o,repeat:l,repeatDelay:c,repeatType:f,name:h,motionValue:m,element:g,...y},S=g?.KeyframeResolver||jh;this.keyframeResolver=new S(p,(E,A,R)=>this.onKeyframesResolved(E,A,x,!R),h,m,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,i,o,l){this.keyframeResolver=void 0;const{name:c,type:f,velocity:p,delay:h,isHandoff:m,onUpdate:g}=o;this.resolvedAt=Ie.now(),iA(t,c,f,p)||((oa.instantAnimations||!h)&&g?.(zh(t,o,i)),t[0]=t[t.length-1],Xd(o),o.repeat=0);const x={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>lA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...o,keyframes:t},S=!m&&sA(x)?new nA({...x,element:x.motionValue.owner.current}):new Hh(x);S.finished.then(()=>this.notifyFinished()).catch(on),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(t,i){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),F2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const cA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fA(n){const t=cA.exec(n);if(!t)return[,];const[,i,o,l]=t;return[`--${i??o}`,l]}function D1(n,t,i=1){const[o,l]=fA(n);if(!o)return;const c=window.getComputedStyle(t).getPropertyValue(o);if(c){const f=c.trim();return Wb(f)?parseFloat(f):f}return Ph(l)?D1(l,t,i+1):l}function qh(n,t){return n?.[t]??n?.default??n}const k1=new Set(["width","height","top","left","right","bottom",...Vr]),dA={test:n=>n==="auto",parse:n=>n},M1=n=>t=>t.test(n),N1=[zr,ft,Mn,za,a2,n2,dA],By=n=>N1.find(M1(n));function hA(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||t1(n):!0}const pA=new Set(["brightness","contrast","saturate","opacity"]);function mA(n){const[t,i]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[o]=i.match(Uh)||[];if(!o)return n;const l=i.replace(o,"");let c=pA.has(t)?1:0;return o!==i&&(c*=100),t+"("+c+l+")"}const gA=/\b([a-z-]*)\(.*?\)/gu,Kd={...Za,getAnimatableNone:n=>{const t=n.match(gA);return t?t.map(mA).join(" "):n}},zy={...zr,transform:Math.round},yA={rotate:za,rotateX:za,rotateY:za,rotateZ:za,scale:Wl,scaleX:Wl,scaleY:Wl,scaleZ:Wl,skew:za,skewX:za,skewY:za,distance:ft,translateX:ft,translateY:ft,translateZ:ft,x:ft,y:ft,z:ft,perspective:ft,transformPerspective:ft,opacity:hs,originX:Ay,originY:Ay,originZ:ft},Gh={borderWidth:ft,borderTopWidth:ft,borderRightWidth:ft,borderBottomWidth:ft,borderLeftWidth:ft,borderRadius:ft,radius:ft,borderTopLeftRadius:ft,borderTopRightRadius:ft,borderBottomRightRadius:ft,borderBottomLeftRadius:ft,width:ft,maxWidth:ft,height:ft,maxHeight:ft,top:ft,right:ft,bottom:ft,left:ft,padding:ft,paddingTop:ft,paddingRight:ft,paddingBottom:ft,paddingLeft:ft,margin:ft,marginTop:ft,marginRight:ft,marginBottom:ft,marginLeft:ft,backgroundPositionX:ft,backgroundPositionY:ft,...yA,zIndex:zy,fillOpacity:hs,strokeOpacity:hs,numOctaves:zy},vA={...Gh,color:ae,backgroundColor:ae,outlineColor:ae,fill:ae,stroke:ae,borderColor:ae,borderTopColor:ae,borderRightColor:ae,borderBottomColor:ae,borderLeftColor:ae,filter:Kd,WebkitFilter:Kd},P1=n=>vA[n];function U1(n,t){let i=P1(n);return i!==Kd&&(i=Za),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const bA=new Set(["auto","none","0"]);function xA(n,t,i){let o=0,l;for(;o<n.length&&!l;){const c=n[o];typeof c=="string"&&!bA.has(c)&&ps(c).values.length&&(l=n[o]),o++}if(l&&i)for(const c of t)n[c]=U1(i,l)}class TA extends jh{constructor(t,i,o,l,c){super(t,i,o,l,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let h=0;h<t.length;h++){let m=t[h];if(typeof m=="string"&&(m=m.trim(),Ph(m))){const g=D1(m,i.current);g!==void 0&&(t[h]=g),h===t.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!k1.has(o)||t.length!==2)return;const[l,c]=t,f=By(l),p=By(c);if(f!==p)if(Py(f)&&Py(p))for(let h=0;h<t.length;h++){const m=t[h];typeof m=="string"&&(t[h]=parseFloat(m))}else _i[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:i}=this,o=[];for(let l=0;l<t.length;l++)(t[l]===null||hA(t[l]))&&o.push(l);o.length&&xA(t,o,i)}measureInitialState(){const{element:t,unresolvedKeyframes:i,name:o}=this;if(!t||!t.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=_i[o](t.measureViewportBox(),window.getComputedStyle(t.current)),i[0]=this.measuredOrigin;const l=i[i.length-1];l!==void 0&&t.getValue(o,l).jump(l,!1)}measureEndState(){const{element:t,name:i,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(i);l&&l.jump(this.measuredOrigin,!1);const c=o.length-1,f=o[c];o[c]=_i[i](t.measureViewportBox(),window.getComputedStyle(t.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,h])=>{t.getValue(p).set(h)}),this.resolveNoneKeyframes()}}function SA(n,t,i){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let o=document;const l=i?.[n]??o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}const L1=(n,t)=>t&&typeof n=="number"?t.transform(n):n;function EA(n){return Jb(n)&&"offsetHeight"in n}const Vy=30,wA=n=>!isNaN(parseFloat(n));class _A{constructor(t,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const l=Ie.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=i.owner}setCurrent(t){this.current=t,this.updatedAt=Ie.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=wA(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new Dh);const o=this.events[t].add(i);return t==="change"?()=>{o(),Lt.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-o}jump(t,i=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Ie.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Vy)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Vy);return e1(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Nr(n,t){return new _A(n,t)}const{schedule:Fh}=d1(queueMicrotask,!1),pn={x:!1,y:!1};function I1(){return pn.x||pn.y}function AA(n){return n==="x"||n==="y"?pn[n]?null:(pn[n]=!0,()=>{pn[n]=!1}):pn.x||pn.y?null:(pn.x=pn.y=!0,()=>{pn.x=pn.y=!1})}function B1(n,t){const i=SA(n),o=new AbortController,l={passive:!0,...t,signal:o.signal};return[i,l,()=>o.abort()]}function Hy(n){return!(n.pointerType==="touch"||I1())}function RA(n,t,i={}){const[o,l,c]=B1(n,i),f=p=>{if(!Hy(p))return;const{target:h}=p,m=t(h,p);if(typeof m!="function"||!h)return;const g=y=>{Hy(y)&&(m(y),h.removeEventListener("pointerleave",g))};h.addEventListener("pointerleave",g,l)};return o.forEach(p=>{p.addEventListener("pointerenter",f,l)}),c}const z1=(n,t)=>t?n===t?!0:z1(n,t.parentElement):!1,Yh=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,OA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function CA(n){return OA.has(n.tagName)||n.tabIndex!==-1}const uu=new WeakSet;function jy(n){return t=>{t.key==="Enter"&&n(t)}}function pd(n,t){n.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const DA=(n,t)=>{const i=n.currentTarget;if(!i)return;const o=jy(()=>{if(uu.has(i))return;pd(i,"down");const l=jy(()=>{pd(i,"up")}),c=()=>pd(i,"cancel");i.addEventListener("keyup",l,t),i.addEventListener("blur",c,t)});i.addEventListener("keydown",o,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",o),t)};function qy(n){return Yh(n)&&!I1()}function kA(n,t,i={}){const[o,l,c]=B1(n,i),f=p=>{const h=p.currentTarget;if(!qy(p))return;uu.add(h);const m=t(h,p),g=(S,E)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",x),uu.has(h)&&uu.delete(h),qy(S)&&typeof m=="function"&&m(S,{success:E})},y=S=>{g(S,h===window||h===document||i.useGlobalTarget||z1(h,S.target))},x=S=>{g(S,!1)};window.addEventListener("pointerup",y,l),window.addEventListener("pointercancel",x,l)};return o.forEach(p=>{(i.useGlobalTarget?window:p).addEventListener("pointerdown",f,l),EA(p)&&(p.addEventListener("focus",m=>DA(m,l)),!CA(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),c}function V1(n){return Jb(n)&&"ownerSVGElement"in n}function MA(n){return V1(n)&&n.tagName==="svg"}const Se=n=>!!(n&&n.getVelocity),NA=[...N1,ae,Za],PA=n=>NA.find(M1(n)),H1=O.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function UA(n=!0){const t=O.useContext(_h);if(t===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:l}=t,c=O.useId();O.useEffect(()=>{if(n)return l(c)},[n]);const f=O.useCallback(()=>n&&o&&o(c),[c,o,n]);return!i&&o?[!1,f]:[!0]}const j1=O.createContext({strict:!1}),Gy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Pr={};for(const n in Gy)Pr[n]={isEnabled:t=>Gy[n].some(i=>!!t[i])};function LA(n){for(const t in n)Pr[t]={...Pr[t],...n[t]}}const IA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Su(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||IA.has(n)}let q1=n=>!Su(n);function BA(n){typeof n=="function"&&(q1=t=>t.startsWith("on")?!Su(t):n(t))}try{BA(require("@emotion/is-prop-valid").default)}catch{}function zA(n,t,i){const o={};for(const l in n)l==="values"&&typeof n.values=="object"||(q1(l)||i===!0&&Su(l)||!t&&!Su(l)||n.draggable&&l.startsWith("onDrag"))&&(o[l]=n[l]);return o}const Uu=O.createContext({});function Lu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ms(n){return typeof n=="string"||Array.isArray(n)}const Xh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Kh=["initial",...Xh];function Iu(n){return Lu(n.animate)||Kh.some(t=>ms(n[t]))}function G1(n){return!!(Iu(n)||n.variants)}function VA(n,t){if(Iu(n)){const{initial:i,animate:o}=n;return{initial:i===!1||ms(i)?i:void 0,animate:ms(o)?o:void 0}}return n.inherit!==!1?t:{}}function HA(n){const{initial:t,animate:i}=VA(n,O.useContext(Uu));return O.useMemo(()=>({initial:t,animate:i}),[Fy(t),Fy(i)])}function Fy(n){return Array.isArray(n)?n.join(" "):n}const gs={};function jA(n){for(const t in n)gs[t]=n[t],Nh(t)&&(gs[t].isCSSVariable=!0)}function F1(n,{layout:t,layoutId:i}){return Hr.has(n)||n.startsWith("origin")||(t||i!==void 0)&&(!!gs[n]||n==="opacity")}const qA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},GA=Vr.length;function FA(n,t,i){let o="",l=!0;for(let c=0;c<GA;c++){const f=Vr[c],p=n[f];if(p===void 0)continue;let h=!0;if(typeof p=="number"?h=p===(f.startsWith("scale")?1:0):h=parseFloat(p)===0,!h||i){const m=L1(p,Gh[f]);if(!h){l=!1;const g=qA[f]||f;o+=`${g}(${m}) `}i&&(t[f]=m)}}return o=o.trim(),i?o=i(t,l?"":o):l&&(o="none"),o}function $h(n,t,i){const{style:o,vars:l,transformOrigin:c}=n;let f=!1,p=!1;for(const h in t){const m=t[h];if(Hr.has(h)){f=!0;continue}else if(Nh(h)){l[h]=m;continue}else{const g=L1(m,Gh[h]);h.startsWith("origin")?(p=!0,c[h]=g):o[h]=g}}if(t.transform||(f||i?o.transform=FA(t,n.transform,i):o.transform&&(o.transform="none")),p){const{originX:h="50%",originY:m="50%",originZ:g=0}=c;o.transformOrigin=`${h} ${m} ${g}`}}const Zh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Y1(n,t,i){for(const o in t)!Se(t[o])&&!F1(o,i)&&(n[o]=t[o])}function YA({transformTemplate:n},t){return O.useMemo(()=>{const i=Zh();return $h(i,t,n),Object.assign({},i.vars,i.style)},[t])}function XA(n,t){const i=n.style||{},o={};return Y1(o,i,n),Object.assign(o,YA(n,t)),o}function KA(n,t){const i={},o=XA(n,t);return n.drag&&n.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(i.tabIndex=0),i.style=o,i}const $A={offset:"stroke-dashoffset",array:"stroke-dasharray"},ZA={offset:"strokeDashoffset",array:"strokeDasharray"};function QA(n,t,i=1,o=0,l=!0){n.pathLength=1;const c=l?$A:ZA;n[c.offset]=ft.transform(-o);const f=ft.transform(t),p=ft.transform(i);n[c.array]=`${f} ${p}`}function X1(n,{attrX:t,attrY:i,attrScale:o,pathLength:l,pathSpacing:c=1,pathOffset:f=0,...p},h,m,g){if($h(n,p,m),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:y,style:x}=n;y.transform&&(x.transform=y.transform,delete y.transform),(x.transform||y.transformOrigin)&&(x.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),x.transform&&(x.transformBox=g?.transformBox??"fill-box",delete y.transformBox),t!==void 0&&(y.x=t),i!==void 0&&(y.y=i),o!==void 0&&(y.scale=o),l!==void 0&&QA(y,l,c,f,!1)}const K1=()=>({...Zh(),attrs:{}}),$1=n=>typeof n=="string"&&n.toLowerCase()==="svg";function WA(n,t,i,o){const l=O.useMemo(()=>{const c=K1();return X1(c,t,$1(o),n.transformTemplate,n.style),{...c.attrs,style:{...c.style}}},[t]);if(n.style){const c={};Y1(c,n.style,n),l.style={...c,...l.style}}return l}const JA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qh(n){return typeof n!="string"||n.includes("-")?!1:!!(JA.indexOf(n)>-1||/[A-Z]/u.test(n))}function t5(n,t,i,{latestValues:o},l,c=!1){const p=(Qh(n)?WA:KA)(t,o,l,n),h=zA(t,typeof n=="string",c),m=n!==O.Fragment?{...h,...p,ref:i}:{},{children:g}=t,y=O.useMemo(()=>Se(g)?g.get():g,[g]);return O.createElement(n,{...m,children:y})}function Yy(n){const t=[{},{}];return n?.values.forEach((i,o)=>{t[0][o]=i.get(),t[1][o]=i.getVelocity()}),t}function Wh(n,t,i,o){if(typeof t=="function"){const[l,c]=Yy(o);t=t(i!==void 0?i:n.custom,l,c)}if(typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"){const[l,c]=Yy(o);t=t(i!==void 0?i:n.custom,l,c)}return t}function cu(n){return Se(n)?n.get():n}function e5({scrapeMotionValuesFromProps:n,createRenderState:t},i,o,l){return{latestValues:n5(i,o,l,n),renderState:t()}}function n5(n,t,i,o){const l={},c=o(n,{});for(const x in c)l[x]=cu(c[x]);let{initial:f,animate:p}=n;const h=Iu(n),m=G1(n);t&&m&&!h&&n.inherit!==!1&&(f===void 0&&(f=t.initial),p===void 0&&(p=t.animate));let g=i?i.initial===!1:!1;g=g||f===!1;const y=g?p:f;if(y&&typeof y!="boolean"&&!Lu(y)){const x=Array.isArray(y)?y:[y];for(let S=0;S<x.length;S++){const E=Wh(n,x[S]);if(E){const{transitionEnd:A,transition:R,...C}=E;for(const N in C){let I=C[N];if(Array.isArray(I)){const X=g?I.length-1:0;I=I[X]}I!==null&&(l[N]=I)}for(const N in A)l[N]=A[N]}}}return l}const Z1=n=>(t,i)=>{const o=O.useContext(Uu),l=O.useContext(_h),c=()=>e5(n,t,o,l);return i?c():L_(c)};function Jh(n,t,i){const{style:o}=n,l={};for(const c in o)(Se(o[c])||t.style&&Se(t.style[c])||F1(c,n)||i?.getValue(c)?.liveStyle!==void 0)&&(l[c]=o[c]);return l}const a5=Z1({scrapeMotionValuesFromProps:Jh,createRenderState:Zh});function Q1(n,t,i){const o=Jh(n,t,i);for(const l in n)if(Se(n[l])||Se(t[l])){const c=Vr.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;o[c]=n[l]}return o}const i5=Z1({scrapeMotionValuesFromProps:Q1,createRenderState:K1}),r5=Symbol.for("motionComponentSymbol");function wr(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function o5(n,t,i){return O.useCallback(o=>{o&&n.onMount&&n.onMount(o),t&&(o?t.mount(o):t.unmount()),i&&(typeof i=="function"?i(o):wr(i)&&(i.current=o))},[t])}const tp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),s5="framerAppearId",W1="data-"+tp(s5),J1=O.createContext({});function l5(n,t,i,o,l){const{visualElement:c}=O.useContext(Uu),f=O.useContext(j1),p=O.useContext(_h),h=O.useContext(H1).reducedMotion,m=O.useRef(null);o=o||f.renderer,!m.current&&o&&(m.current=o(n,{visualState:t,parent:c,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:h}));const g=m.current,y=O.useContext(J1);g&&!g.projection&&l&&(g.type==="html"||g.type==="svg")&&u5(m.current,i,l,y);const x=O.useRef(!1);O.useInsertionEffect(()=>{g&&x.current&&g.update(i,p)});const S=i[W1],E=O.useRef(!!S&&!window.MotionHandoffIsComplete?.(S)&&window.MotionHasOptimisedAnimation?.(S));return I_(()=>{g&&(x.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),E.current&&g.animationState&&g.animationState.animateChanges())}),O.useEffect(()=>{g&&(!E.current&&g.animationState&&g.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(S)}),E.current=!1),g.enteringChildren=void 0)}),g}function u5(n,t,i,o){const{layoutId:l,layout:c,drag:f,dragConstraints:p,layoutScroll:h,layoutRoot:m,layoutCrossfade:g}=t;n.projection=new i(n.latestValues,t["data-framer-portal-id"]?void 0:tx(n.parent)),n.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!f||p&&wr(p),visualElement:n,animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,crossfade:g,layoutScroll:h,layoutRoot:m})}function tx(n){if(n)return n.options.allowProjection!==!1?n.projection:tx(n.parent)}function md(n,{forwardMotionProps:t=!1}={},i,o){i&&LA(i);const l=Qh(n)?i5:a5;function c(p,h){let m;const g={...O.useContext(H1),...p,layoutId:c5(p)},{isStatic:y}=g,x=HA(p),S=l(p,y);if(!y&&wh){f5();const E=d5(g);m=E.MeasureLayout,x.visualElement=l5(n,S,g,o,E.ProjectionNode)}return K.jsxs(Uu.Provider,{value:x,children:[m&&x.visualElement?K.jsx(m,{visualElement:x.visualElement,...g}):null,t5(n,p,o5(S,x.visualElement,h),S,y,t)]})}c.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const f=O.forwardRef(c);return f[r5]=n,f}function c5({layoutId:n}){const t=O.useContext(Qb).id;return t&&n!==void 0?t+"-"+n:n}function f5(n,t){O.useContext(j1).strict}function d5(n){const{drag:t,layout:i}=Pr;if(!t&&!i)return{};const o={...t,...i};return{MeasureLayout:t?.isEnabled(n)||i?.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function h5(n,t){if(typeof Proxy>"u")return md;const i=new Map,o=(c,f)=>md(c,f,n,t),l=(c,f)=>o(c,f);return new Proxy(l,{get:(c,f)=>f==="create"?o:(i.has(f)||i.set(f,md(f,void 0,n,t)),i.get(f))})}function ex({top:n,left:t,right:i,bottom:o}){return{x:{min:t,max:i},y:{min:n,max:o}}}function p5({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function m5(n,t){if(!t)return n;const i=t({x:n.left,y:n.top}),o=t({x:n.right,y:n.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function gd(n){return n===void 0||n===1}function $d({scale:n,scaleX:t,scaleY:i}){return!gd(n)||!gd(t)||!gd(i)}function Ti(n){return $d(n)||nx(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function nx(n){return Xy(n.x)||Xy(n.y)}function Xy(n){return n&&n!=="0%"}function Eu(n,t,i){const o=n-i,l=t*o;return i+l}function Ky(n,t,i,o,l){return l!==void 0&&(n=Eu(n,l,o)),Eu(n,i,o)+t}function Zd(n,t=0,i=1,o,l){n.min=Ky(n.min,t,i,o,l),n.max=Ky(n.max,t,i,o,l)}function ax(n,{x:t,y:i}){Zd(n.x,t.translate,t.scale,t.originPoint),Zd(n.y,i.translate,i.scale,i.originPoint)}const $y=.999999999999,Zy=1.0000000000001;function g5(n,t,i,o=!1){const l=i.length;if(!l)return;t.x=t.y=1;let c,f;for(let p=0;p<l;p++){c=i[p],f=c.projectionDelta;const{visualElement:h}=c.options;h&&h.props.style&&h.props.style.display==="contents"||(o&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Ar(n,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),f&&(t.x*=f.x.scale,t.y*=f.y.scale,ax(n,f)),o&&Ti(c.latestValues)&&Ar(n,c.latestValues))}t.x<Zy&&t.x>$y&&(t.x=1),t.y<Zy&&t.y>$y&&(t.y=1)}function _r(n,t){n.min=n.min+t,n.max=n.max+t}function Qy(n,t,i,o,l=.5){const c=zt(n.min,n.max,l);Zd(n,t,i,c,o)}function Ar(n,t){Qy(n.x,t.x,t.scaleX,t.scale,t.originX),Qy(n.y,t.y,t.scaleY,t.scale,t.originY)}function ix(n,t){return ex(m5(n.getBoundingClientRect(),t))}function y5(n,t,i){const o=ix(n,i),{scroll:l}=t;return l&&(_r(o.x,l.offset.x),_r(o.y,l.offset.y)),o}const Wy=()=>({translate:0,scale:1,origin:0,originPoint:0}),Rr=()=>({x:Wy(),y:Wy()}),Jy=()=>({min:0,max:0}),Qt=()=>({x:Jy(),y:Jy()}),Qd={current:null},rx={current:!1};function v5(){if(rx.current=!0,!!wh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>Qd.current=n.matches;n.addEventListener("change",t),t()}else Qd.current=!1}const b5=new WeakMap;function x5(n,t,i){for(const o in t){const l=t[o],c=i[o];if(Se(l))n.addValue(o,l);else if(Se(c))n.addValue(o,Nr(l,{owner:n}));else if(c!==l)if(n.hasValue(o)){const f=n.getValue(o);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=n.getStaticValue(o);n.addValue(o,Nr(f!==void 0?f:l,{owner:n}))}}for(const o in i)t[o]===void 0&&n.removeValue(o);return t}const tv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class T5{scrapeMotionValuesFromProps(t,i,o){return{}}constructor({parent:t,props:i,presenceContext:o,reducedMotionConfig:l,blockInitialAnimation:c,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=jh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=Ie.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Lt.render(this.render,!1,!0))};const{latestValues:h,renderState:m}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=i.initial?{...h}:{},this.renderState=m,this.parent=t,this.props=i,this.presenceContext=o,this.depth=t?t.depth+1:0,this.reducedMotionConfig=l,this.options=p,this.blockInitialAnimation=!!c,this.isControllingVariants=Iu(i),this.isVariantNode=G1(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...y}=this.scrapeMotionValuesFromProps(i,{},this);for(const x in y){const S=y[x];h[x]!==void 0&&Se(S)&&S.set(h[x])}}mount(t){this.current=t,b5.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),rx.current||v5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Qd.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),$a(this.notifyUpdate),$a(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,i){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const o=Hr.has(t);o&&this.onBindTransform&&this.onBindTransform();const l=i.on("change",f=>{this.latestValues[t]=f,this.props.onUpdate&&Lt.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,i)),this.valueSubscriptions.set(t,()=>{l(),c&&c(),i.owner&&i.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Pr){const i=Pr[t];if(!i)continue;const{isEnabled:o,Feature:l}=i;if(!this.features[t]&&l&&o(this.props)&&(this.features[t]=new l(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<tv.length;o++){const l=tv[o];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const c="on"+l,f=t[c];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=x5(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){const o=this.values.get(t);i!==o&&(o&&this.removeValue(t),this.bindToMotionValue(t,i),this.values.set(t,i),this.latestValues[t]=i.get())}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let o=this.values.get(t);return o===void 0&&i!==void 0&&(o=Nr(i===null?void 0:i,{owner:this}),this.addValue(t,o)),o}readValue(t,i){let o=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return o!=null&&(typeof o=="string"&&(Wb(o)||t1(o))?o=parseFloat(o):!PA(o)&&Za.test(i)&&(o=U1(t,i)),this.setBaseTarget(t,Se(o)?o.get():o)),Se(o)?o.get():o}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const c=Wh(this.props,i,this.presenceContext?.custom);c&&(o=c[t])}if(i&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,t);return l!==void 0&&!Se(l)?l:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new Dh),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}scheduleRenderMicrotask(){Fh.render(this.render)}}class ox extends T5{constructor(){super(...arguments),this.KeyframeResolver=TA}sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){return t.style?t.style[i]:void 0}removeValueFromRenderState(t,{vars:i,style:o}){delete i[t],delete o[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Se(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function sx(n,{style:t,vars:i},o,l){const c=n.style;let f;for(f in t)c[f]=t[f];l?.applyProjectionStyles(c,o);for(f in i)c.setProperty(f,i[f])}function S5(n){return window.getComputedStyle(n)}class E5 extends ox{constructor(){super(...arguments),this.type="html",this.renderInstance=sx}readValueFromInstance(t,i){if(Hr.has(i))return this.projection?.isProjecting?jd(i):V2(t,i);{const o=S5(t),l=(Nh(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:i}){return ix(t,i)}build(t,i,o){$h(t,i,o.transformTemplate)}scrapeMotionValuesFromProps(t,i,o){return Jh(t,i,o)}}const lx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function w5(n,t,i,o){sx(n,t,void 0,o);for(const l in t.attrs)n.setAttribute(lx.has(l)?l:tp(l),t.attrs[l])}class _5 extends ox{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qt}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(Hr.has(i)){const o=P1(i);return o&&o.default||0}return i=lx.has(i)?i:tp(i),t.getAttribute(i)}scrapeMotionValuesFromProps(t,i,o){return Q1(t,i,o)}build(t,i,o){X1(t,i,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(t,i,o,l){w5(t,i,o,l)}mount(t){this.isSVGTag=$1(t.tagName),super.mount(t)}}const A5=(n,t)=>Qh(n)?new _5(t):new E5(t,{allowProjection:n!==O.Fragment});function Cr(n,t,i){const o=n.getProps();return Wh(o,t,i!==void 0?i:o.custom,n)}const Wd=n=>Array.isArray(n);function R5(n,t,i){n.hasValue(t)?n.getValue(t).set(i):n.addValue(t,Nr(i))}function O5(n){return Wd(n)?n[n.length-1]||0:n}function C5(n,t){const i=Cr(n,t);let{transitionEnd:o={},transition:l={},...c}=i||{};c={...c,...o};for(const f in c){const p=O5(c[f]);R5(n,f,p)}}function D5(n){return!!(Se(n)&&n.add)}function Jd(n,t){const i=n.getValue("willChange");if(D5(i))return i.add(t);if(!i&&oa.WillChange){const o=new oa.WillChange("auto");n.addValue("willChange",o),o.add(t)}}function ux(n){return n.props[W1]}const k5=n=>n!==null;function M5(n,{repeat:t,repeatType:i="loop"},o){const l=n.filter(k5),c=t&&i!=="loop"&&t%2===1?0:l.length-1;return l[c]}const N5={type:"spring",stiffness:500,damping:25,restSpeed:10},P5=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),U5={type:"keyframes",duration:.8},L5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},I5=(n,{keyframes:t})=>t.length>2?U5:Hr.has(n)?n.startsWith("scale")?P5(t[1]):N5:L5;function B5({when:n,delay:t,delayChildren:i,staggerChildren:o,staggerDirection:l,repeat:c,repeatType:f,repeatDelay:p,from:h,elapsed:m,...g}){return!!Object.keys(g).length}const ep=(n,t,i,o={},l,c)=>f=>{const p=qh(o,n)||{},h=p.delay||o.delay||0;let{elapsed:m=0}=o;m=m-kn(h);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...p,delay:-m,onUpdate:x=>{t.set(x),p.onUpdate&&p.onUpdate(x)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:n,motionValue:t,element:c?void 0:l};B5(p)||Object.assign(g,I5(n,g)),g.duration&&(g.duration=kn(g.duration)),g.repeatDelay&&(g.repeatDelay=kn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Xd(g),g.delay===0&&(y=!0)),(oa.instantAnimations||oa.skipAnimations)&&(y=!0,Xd(g),g.delay=0),g.allowFlatten=!p.type&&!p.ease,y&&!c&&t.get()!==void 0){const x=M5(g.keyframes,p);if(x!==void 0){Lt.update(()=>{g.onUpdate(x),g.onComplete()});return}}return p.isSync?new Hh(g):new uA(g)};function z5({protectedKeys:n,needsAnimating:t},i){const o=n.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,o}function cx(n,t,{delay:i=0,transitionOverride:o,type:l}={}){let{transition:c=n.getDefaultTransition(),transitionEnd:f,...p}=t;o&&(c=o);const h=[],m=l&&n.animationState&&n.animationState.getState()[l];for(const g in p){const y=n.getValue(g,n.latestValues[g]??null),x=p[g];if(x===void 0||m&&z5(m,g))continue;const S={delay:i,...qh(c||{},g)},E=y.get();if(E!==void 0&&!y.isAnimating&&!Array.isArray(x)&&x===E&&!S.velocity)continue;let A=!1;if(window.MotionHandoffAnimation){const C=ux(n);if(C){const N=window.MotionHandoffAnimation(C,g,Lt);N!==null&&(S.startTime=N,A=!0)}}Jd(n,g),y.start(ep(g,y,x,n.shouldReduceMotion&&k1.has(g)?{type:!1}:S,n,A));const R=y.animation;R&&h.push(R)}return f&&Promise.all(h).then(()=>{Lt.update(()=>{f&&C5(n,f)})}),h}function fx(n,t,i,o=0,l=1){const c=Array.from(n).sort((m,g)=>m.sortNodePosition(g)).indexOf(t),f=n.size,p=(f-1)*o;return typeof i=="function"?i(c,f):l===1?c*o:p-c*o}function th(n,t,i={}){const o=Cr(n,t,i.type==="exit"?n.presenceContext?.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(l=i.transitionOverride);const c=o?()=>Promise.all(cx(n,o,i)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:g,staggerDirection:y}=l;return V5(n,t,h,m,g,y,i)}:()=>Promise.resolve(),{when:p}=l;if(p){const[h,m]=p==="beforeChildren"?[c,f]:[f,c];return h().then(()=>m())}else return Promise.all([c(),f(i.delay)])}function V5(n,t,i=0,o=0,l=0,c=1,f){const p=[];for(const h of n.variantChildren)h.notify("AnimationStart",t),p.push(th(h,t,{...f,delay:i+(typeof o=="function"?0:o)+fx(n.variantChildren,h,o,l,c)}).then(()=>h.notify("AnimationComplete",t)));return Promise.all(p)}function H5(n,t,i={}){n.notify("AnimationStart",t);let o;if(Array.isArray(t)){const l=t.map(c=>th(n,c,i));o=Promise.all(l)}else if(typeof t=="string")o=th(n,t,i);else{const l=typeof t=="function"?Cr(n,t,i.custom):t;o=Promise.all(cx(n,l,i))}return o.then(()=>{n.notify("AnimationComplete",t)})}function dx(n,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==n.length)return!1;for(let o=0;o<i;o++)if(t[o]!==n[o])return!1;return!0}const j5=Kh.length;function hx(n){if(!n)return;if(!n.isControllingVariants){const i=n.parent?hx(n.parent)||{}:{};return n.props.initial!==void 0&&(i.initial=n.props.initial),i}const t={};for(let i=0;i<j5;i++){const o=Kh[i],l=n.props[o];(ms(l)||l===!1)&&(t[o]=l)}return t}const q5=[...Xh].reverse(),G5=Xh.length;function F5(n){return t=>Promise.all(t.map(({animation:i,options:o})=>H5(n,i,o)))}function Y5(n){let t=F5(n),i=ev(),o=!0;const l=h=>(m,g)=>{const y=Cr(n,g,h==="exit"?n.presenceContext?.custom:void 0);if(y){const{transition:x,transitionEnd:S,...E}=y;m={...m,...E,...S}}return m};function c(h){t=h(n)}function f(h){const{props:m}=n,g=hx(n.parent)||{},y=[],x=new Set;let S={},E=1/0;for(let R=0;R<G5;R++){const C=q5[R],N=i[C],I=m[C]!==void 0?m[C]:g[C],X=ms(I),V=C===h?N.isActive:null;V===!1&&(E=R);let J=I===g[C]&&I!==m[C]&&X;if(J&&o&&n.manuallyAnimateOnMount&&(J=!1),N.protectedKeys={...S},!N.isActive&&V===null||!I&&!N.prevProp||Lu(I)||typeof I=="boolean")continue;const $=X5(N.prevProp,I);let F=$||C===h&&N.isActive&&!J&&X||R>E&&X,Z=!1;const xt=Array.isArray(I)?I:[I];let It=xt.reduce(l(C),{});V===!1&&(It={});const{prevResolvedValues:Mt={}}=N,Wt={...Mt,...It},Ee=q=>{F=!0,x.has(q)&&(Z=!0,x.delete(q)),N.needsAnimating[q]=!0;const tt=n.getValue(q);tt&&(tt.liveStyle=!1)};for(const q in Wt){const tt=It[q],ht=Mt[q];if(S.hasOwnProperty(q))continue;let w=!1;Wd(tt)&&Wd(ht)?w=!dx(tt,ht):w=tt!==ht,w?tt!=null?Ee(q):x.add(q):tt!==void 0&&x.has(q)?Ee(q):N.protectedKeys[q]=!0}N.prevProp=I,N.prevResolvedValues=It,N.isActive&&(S={...S,...It}),o&&n.blockInitialAnimation&&(F=!1);const Nt=J&&$;F&&(!Nt||Z)&&y.push(...xt.map(q=>{const tt={type:C};if(typeof q=="string"&&o&&!Nt&&n.manuallyAnimateOnMount&&n.parent){const{parent:ht}=n,w=Cr(ht,q);if(ht.enteringChildren&&w){const{delayChildren:H}=w.transition||{};tt.delay=fx(ht.enteringChildren,n,H)}}return{animation:q,options:tt}}))}if(x.size){const R={};if(typeof m.initial!="boolean"){const C=Cr(n,Array.isArray(m.initial)?m.initial[0]:m.initial);C&&C.transition&&(R.transition=C.transition)}x.forEach(C=>{const N=n.getBaseTarget(C),I=n.getValue(C);I&&(I.liveStyle=!0),R[C]=N??null}),y.push({animation:R})}let A=!!y.length;return o&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(A=!1),o=!1,A?t(y):Promise.resolve()}function p(h,m){if(i[h].isActive===m)return Promise.resolve();n.variantChildren?.forEach(y=>y.animationState?.setActive(h,m)),i[h].isActive=m;const g=f(h);for(const y in i)i[y].protectedKeys={};return g}return{animateChanges:f,setActive:p,setAnimateFunction:c,getState:()=>i,reset:()=>{i=ev()}}}function X5(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!dx(t,n):!1}function xi(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ev(){return{animate:xi(!0),whileInView:xi(),whileHover:xi(),whileTap:xi(),whileDrag:xi(),whileFocus:xi(),exit:xi()}}class Qa{constructor(t){this.isMounted=!1,this.node=t}update(){}}class K5 extends Qa{constructor(t){super(t),t.animationState||(t.animationState=Y5(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Lu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let $5=0;class Z5 extends Qa{constructor(){super(...arguments),this.id=$5++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const l=this.node.animationState.setActive("exit",!t);i&&!t&&l.then(()=>{i(this.id)})}mount(){const{register:t,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const Q5={animation:{Feature:K5},exit:{Feature:Z5}};function ys(n,t,i,o={passive:!0}){return n.addEventListener(t,i,o),()=>n.removeEventListener(t,i)}function Rs(n){return{point:{x:n.pageX,y:n.pageY}}}const W5=n=>t=>Yh(t)&&n(t,Rs(t));function is(n,t,i,o){return ys(n,t,W5(i),o)}const px=1e-4,J5=1-px,tR=1+px,mx=.01,eR=0-mx,nR=0+mx;function Ce(n){return n.max-n.min}function aR(n,t,i){return Math.abs(n-t)<=i}function nv(n,t,i,o=.5){n.origin=o,n.originPoint=zt(t.min,t.max,n.origin),n.scale=Ce(i)/Ce(t),n.translate=zt(i.min,i.max,n.origin)-n.originPoint,(n.scale>=J5&&n.scale<=tR||isNaN(n.scale))&&(n.scale=1),(n.translate>=eR&&n.translate<=nR||isNaN(n.translate))&&(n.translate=0)}function rs(n,t,i,o){nv(n.x,t.x,i.x,o?o.originX:void 0),nv(n.y,t.y,i.y,o?o.originY:void 0)}function av(n,t,i){n.min=i.min+t.min,n.max=n.min+Ce(t)}function iR(n,t,i){av(n.x,t.x,i.x),av(n.y,t.y,i.y)}function iv(n,t,i){n.min=t.min-i.min,n.max=n.min+Ce(t)}function os(n,t,i){iv(n.x,t.x,i.x),iv(n.y,t.y,i.y)}function an(n){return[n("x"),n("y")]}const gx=({current:n})=>n?n.ownerDocument.defaultView:null,rv=(n,t)=>Math.abs(n-t);function rR(n,t){const i=rv(n.x,t.x),o=rv(n.y,t.y);return Math.sqrt(i**2+o**2)}class yx{constructor(t,i,{transformPagePoint:o,contextWindow:l=window,dragSnapToOrigin:c=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=vd(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,E=rR(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!E)return;const{point:A}=x,{timestamp:R}=ve;this.history.push({...A,timestamp:R});const{onStart:C,onMove:N}=this.handlers;S||(C&&C(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),N&&N(this.lastMoveEvent,x)},this.handlePointerMove=(x,S)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=yd(S,this.transformPagePoint),Lt.update(this.updatePoint,!0)},this.handlePointerUp=(x,S)=>{this.end();const{onEnd:E,onSessionEnd:A,resumeAnimation:R}=this.handlers;if(this.dragSnapToOrigin&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=vd(x.type==="pointercancel"?this.lastMoveEventInfo:yd(S,this.transformPagePoint),this.history);this.startEvent&&E&&E(x,C),A&&A(x,C)},!Yh(t))return;this.dragSnapToOrigin=c,this.handlers=i,this.transformPagePoint=o,this.distanceThreshold=f,this.contextWindow=l||window;const p=Rs(t),h=yd(p,this.transformPagePoint),{point:m}=h,{timestamp:g}=ve;this.history=[{...m,timestamp:g}];const{onSessionStart:y}=i;y&&y(t,vd(h,this.history)),this.removeListeners=ws(is(this.contextWindow,"pointermove",this.handlePointerMove),is(this.contextWindow,"pointerup",this.handlePointerUp),is(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),$a(this.updatePoint)}}function yd(n,t){return t?{point:t(n.point)}:n}function ov(n,t){return{x:n.x-t.x,y:n.y-t.y}}function vd({point:n},t){return{point:n,delta:ov(n,vx(t)),offset:ov(n,oR(t)),velocity:sR(t,.1)}}function oR(n){return n[0]}function vx(n){return n[n.length-1]}function sR(n,t){if(n.length<2)return{x:0,y:0};let i=n.length-1,o=null;const l=vx(n);for(;i>=0&&(o=n[i],!(l.timestamp-o.timestamp>kn(t)));)i--;if(!o)return{x:0,y:0};const c=rn(l.timestamp-o.timestamp);if(c===0)return{x:0,y:0};const f={x:(l.x-o.x)/c,y:(l.y-o.y)/c};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function lR(n,{min:t,max:i},o){return t!==void 0&&n<t?n=o?zt(t,n,o.min):Math.max(n,t):i!==void 0&&n>i&&(n=o?zt(i,n,o.max):Math.min(n,i)),n}function sv(n,t,i){return{min:t!==void 0?n.min+t:void 0,max:i!==void 0?n.max+i-(n.max-n.min):void 0}}function uR(n,{top:t,left:i,bottom:o,right:l}){return{x:sv(n.x,i,l),y:sv(n.y,t,o)}}function lv(n,t){let i=t.min-n.min,o=t.max-n.max;return t.max-t.min<n.max-n.min&&([i,o]=[o,i]),{min:i,max:o}}function cR(n,t){return{x:lv(n.x,t.x),y:lv(n.y,t.y)}}function fR(n,t){let i=.5;const o=Ce(n),l=Ce(t);return l>o?i=ds(t.min,t.max-o,n.min):o>l&&(i=ds(n.min,n.max-l,t.min)),ra(0,1,i)}function dR(n,t){const i={};return t.min!==void 0&&(i.min=t.min-n.min),t.max!==void 0&&(i.max=t.max-n.min),i}const eh=.35;function hR(n=eh){return n===!1?n=0:n===!0&&(n=eh),{x:uv(n,"left","right"),y:uv(n,"top","bottom")}}function uv(n,t,i){return{min:cv(n,t),max:cv(n,i)}}function cv(n,t){return typeof n=="number"?n:n[t]||0}const pR=new WeakMap;class mR{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:i=!1,distanceThreshold:o}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const c=y=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Rs(y).point)},f=(y,x)=>{const{drag:S,dragPropagation:E,onDragStart:A}=this.getProps();if(S&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=AA(S),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),an(C=>{let N=this.getAxisMotionValue(C).get()||0;if(Mn.test(N)){const{projection:I}=this.visualElement;if(I&&I.layout){const X=I.layout.layoutBox[C];X&&(N=Ce(X)*(parseFloat(N)/100))}}this.originPoint[C]=N}),A&&Lt.postRender(()=>A(y,x)),Jd(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},p=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x;const{dragPropagation:S,dragDirectionLock:E,onDirectionLock:A,onDrag:R}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:C}=x;if(E&&this.currentDirection===null){this.currentDirection=gR(C),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",x.point,C),this.updateAxis("y",x.point,C),this.visualElement.render(),R&&R(y,x)},h=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x,this.stop(y,x),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>an(y=>this.getAnimationState(y)==="paused"&&this.getAxisMotionValue(y).animation?.play()),{dragSnapToOrigin:g}=this.getProps();this.panSession=new yx(t,{onSessionStart:c,onStart:f,onMove:p,onSessionEnd:h,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:o,contextWindow:gx(this.visualElement)})}stop(t,i){const o=t||this.latestPointerEvent,l=i||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!l||!o)return;const{velocity:f}=l;this.startAnimation(f);const{onDragEnd:p}=this.getProps();p&&Lt.postRender(()=>p(o,l))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(t,i,o){const{drag:l}=this.getProps();if(!o||!Jl(t,l,this.currentDirection))return;const c=this.getAxisMotionValue(t);let f=this.originPoint[t]+o[t];this.constraints&&this.constraints[t]&&(f=lR(f,this.constraints[t],this.elastic[t])),c.set(f)}resolveConstraints(){const{dragConstraints:t,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,l=this.constraints;t&&wr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=uR(o.layoutBox,t):this.constraints=!1,this.elastic=hR(i),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&an(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=dR(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!wr(t))return!1;const o=t.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const c=y5(o,l.root,this.visualElement.getTransformPagePoint());let f=cR(l.layout.layoutBox,c);if(i){const p=i(p5(f));this.hasMutatedConstraints=!!p,p&&(f=ex(p))}return f}startAnimation(t){const{drag:i,dragMomentum:o,dragElastic:l,dragTransition:c,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},m=an(g=>{if(!Jl(g,i,this.currentDirection))return;let y=h&&h[g]||{};f&&(y={min:0,max:0});const x=l?200:1e6,S=l?40:1e7,E={type:"inertia",velocity:o?t[g]:0,bounceStiffness:x,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...c,...y};return this.startAxisValueAnimation(g,E)});return Promise.all(m).then(p)}startAxisValueAnimation(t,i){const o=this.getAxisMotionValue(t);return Jd(this.visualElement,t),o.start(ep(t,o,0,i,this.visualElement,!1))}stopAnimation(){an(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){an(t=>this.getAxisMotionValue(t).animation?.pause())}getAnimationState(t){return this.getAxisMotionValue(t).animation?.state}getAxisMotionValue(t){const i=`_drag${t.toUpperCase()}`,o=this.visualElement.getProps(),l=o[i];return l||this.visualElement.getValue(t,(o.initial?o.initial[t]:void 0)||0)}snapToCursor(t){an(i=>{const{drag:o}=this.getProps();if(!Jl(i,o,this.currentDirection))return;const{projection:l}=this.visualElement,c=this.getAxisMotionValue(i);if(l&&l.layout){const{min:f,max:p}=l.layout.layoutBox[i];c.set(t[i]-zt(f,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!wr(i)||!o||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};an(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const h=p.get();l[f]=fR({min:h,max:h},this.constraints[f])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),an(f=>{if(!Jl(f,t,null))return;const p=this.getAxisMotionValue(f),{min:h,max:m}=this.constraints[f];p.set(zt(h,m,l[f]))})}addListeners(){if(!this.visualElement.current)return;pR.set(this.visualElement,this);const t=this.visualElement.current,i=is(t,"pointerdown",h=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(h)}),o=()=>{const{dragConstraints:h}=this.getProps();wr(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,c=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Lt.read(o);const f=ys(window,"resize",()=>this.scalePositionWithinConstraints()),p=l.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(an(g=>{const y=this.getAxisMotionValue(g);y&&(this.originPoint[g]+=h[g].translate,y.set(y.get()+h[g].translate))}),this.visualElement.render())}));return()=>{f(),i(),c(),p&&p()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:l=!1,dragConstraints:c=!1,dragElastic:f=eh,dragMomentum:p=!0}=t;return{...t,drag:i,dragDirectionLock:o,dragPropagation:l,dragConstraints:c,dragElastic:f,dragMomentum:p}}}function Jl(n,t,i){return(t===!0||t===n)&&(i===null||i===n)}function gR(n,t=10){let i=null;return Math.abs(n.y)>t?i="y":Math.abs(n.x)>t&&(i="x"),i}class yR extends Qa{constructor(t){super(t),this.removeGroupControls=on,this.removeListeners=on,this.controls=new mR(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||on}unmount(){this.removeGroupControls(),this.removeListeners()}}const fv=n=>(t,i)=>{n&&Lt.postRender(()=>n(t,i))};class vR extends Qa{constructor(){super(...arguments),this.removePointerDownListener=on}onPointerDown(t){this.session=new yx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:gx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:o,onPanEnd:l}=this.node.getProps();return{onSessionStart:fv(t),onStart:fv(i),onMove:o,onEnd:(c,f)=>{delete this.session,l&&Lt.postRender(()=>l(c,f))}}}mount(){this.removePointerDownListener=is(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const fu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function dv(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const $o={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(ft.test(n))n=parseFloat(n);else return n;const i=dv(n,t.target.x),o=dv(n,t.target.y);return`${i}% ${o}%`}},bR={correct:(n,{treeScale:t,projectionDelta:i})=>{const o=n,l=Za.parse(n);if(l.length>5)return o;const c=Za.createTransformer(n),f=typeof l[0]!="number"?1:0,p=i.x.scale*t.x,h=i.y.scale*t.y;l[0+f]/=p,l[1+f]/=h;const m=zt(p,h,.5);return typeof l[2+f]=="number"&&(l[2+f]/=m),typeof l[3+f]=="number"&&(l[3+f]/=m),c(l)}};let bd=!1;class xR extends O.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:o,layoutId:l}=this.props,{projection:c}=t;jA(TR),c&&(i.group&&i.group.add(c),o&&o.register&&l&&o.register(c),bd&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),fu.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:o,drag:l,isPresent:c}=this.props,{projection:f}=o;return f&&(f.isPresent=c,bd=!0,l||t.layoutDependency!==i||i===void 0||t.isPresent!==c?f.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?f.promote():f.relegate()||Lt.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Fh.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:l}=t;bd=!0,l&&(l.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(l),o&&o.deregister&&o.deregister(l))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function bx(n){const[t,i]=UA(),o=O.useContext(Qb);return K.jsx(xR,{...n,layoutGroup:o,switchLayoutGroup:O.useContext(J1),isPresent:t,safeToRemove:i})}const TR={borderRadius:{...$o,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:$o,borderTopRightRadius:$o,borderBottomLeftRadius:$o,borderBottomRightRadius:$o,boxShadow:bR};function SR(n,t,i){const o=Se(n)?n:Nr(n);return o.start(ep("",o,t,i)),o.animation}const ER=(n,t)=>n.depth-t.depth;class wR{constructor(){this.children=[],this.isDirty=!1}add(t){Ah(this.children,t),this.isDirty=!0}remove(t){Rh(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(ER),this.isDirty=!1,this.children.forEach(t)}}function _R(n,t){const i=Ie.now(),o=({timestamp:l})=>{const c=l-i;c>=t&&($a(o),n(c-t))};return Lt.setup(o,!0),()=>$a(o)}const xx=["TopLeft","TopRight","BottomLeft","BottomRight"],AR=xx.length,hv=n=>typeof n=="string"?parseFloat(n):n,pv=n=>typeof n=="number"||ft.test(n);function RR(n,t,i,o,l,c){l?(n.opacity=zt(0,i.opacity??1,OR(o)),n.opacityExit=zt(t.opacity??1,0,CR(o))):c&&(n.opacity=zt(t.opacity??1,i.opacity??1,o));for(let f=0;f<AR;f++){const p=`border${xx[f]}Radius`;let h=mv(t,p),m=mv(i,p);if(h===void 0&&m===void 0)continue;h||(h=0),m||(m=0),h===0||m===0||pv(h)===pv(m)?(n[p]=Math.max(zt(hv(h),hv(m),o),0),(Mn.test(m)||Mn.test(h))&&(n[p]+="%")):n[p]=m}(t.rotate||i.rotate)&&(n.rotate=zt(t.rotate||0,i.rotate||0,o))}function mv(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const OR=Tx(0,.5,l1),CR=Tx(.5,.95,on);function Tx(n,t,i){return o=>o<n?0:o>t?1:i(ds(n,t,o))}function gv(n,t){n.min=t.min,n.max=t.max}function nn(n,t){gv(n.x,t.x),gv(n.y,t.y)}function yv(n,t){n.translate=t.translate,n.scale=t.scale,n.originPoint=t.originPoint,n.origin=t.origin}function vv(n,t,i,o,l){return n-=t,n=Eu(n,1/i,o),l!==void 0&&(n=Eu(n,1/l,o)),n}function DR(n,t=0,i=1,o=.5,l,c=n,f=n){if(Mn.test(t)&&(t=parseFloat(t),t=zt(f.min,f.max,t/100)-f.min),typeof t!="number")return;let p=zt(c.min,c.max,o);n===c&&(p-=t),n.min=vv(n.min,t,i,p,l),n.max=vv(n.max,t,i,p,l)}function bv(n,t,[i,o,l],c,f){DR(n,t[i],t[o],t[l],t.scale,c,f)}const kR=["x","scaleX","originX"],MR=["y","scaleY","originY"];function xv(n,t,i,o){bv(n.x,t,kR,i?i.x:void 0,o?o.x:void 0),bv(n.y,t,MR,i?i.y:void 0,o?o.y:void 0)}function Tv(n){return n.translate===0&&n.scale===1}function Sx(n){return Tv(n.x)&&Tv(n.y)}function Sv(n,t){return n.min===t.min&&n.max===t.max}function NR(n,t){return Sv(n.x,t.x)&&Sv(n.y,t.y)}function Ev(n,t){return Math.round(n.min)===Math.round(t.min)&&Math.round(n.max)===Math.round(t.max)}function Ex(n,t){return Ev(n.x,t.x)&&Ev(n.y,t.y)}function wv(n){return Ce(n.x)/Ce(n.y)}function _v(n,t){return n.translate===t.translate&&n.scale===t.scale&&n.originPoint===t.originPoint}class PR{constructor(){this.members=[]}add(t){Ah(this.members,t),t.scheduleRender()}remove(t){if(Rh(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){const i=this.members.findIndex(l=>t===l);if(i===0)return!1;let o;for(let l=i;l>=0;l--){const c=this.members[l];if(c.isPresent!==!1){o=c;break}}return o?(this.promote(o),!0):!1}promote(t,i){const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,i&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:l}=t.options;l===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:i,resumingFrom:o}=t;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function UR(n,t,i){let o="";const l=n.x.translate/t.x,c=n.y.translate/t.y,f=i?.z||0;if((l||c||f)&&(o=`translate3d(${l}px, ${c}px, ${f}px) `),(t.x!==1||t.y!==1)&&(o+=`scale(${1/t.x}, ${1/t.y}) `),i){const{transformPerspective:m,rotate:g,rotateX:y,rotateY:x,skewX:S,skewY:E}=i;m&&(o=`perspective(${m}px) ${o}`),g&&(o+=`rotate(${g}deg) `),y&&(o+=`rotateX(${y}deg) `),x&&(o+=`rotateY(${x}deg) `),S&&(o+=`skewX(${S}deg) `),E&&(o+=`skewY(${E}deg) `)}const p=n.x.scale*t.x,h=n.y.scale*t.y;return(p!==1||h!==1)&&(o+=`scale(${p}, ${h})`),o||"none"}const xd=["","X","Y","Z"],LR=1e3;let IR=0;function Td(n,t,i,o){const{latestValues:l}=t;l[n]&&(i[n]=l[n],t.setStaticValue(n,0),o&&(o[n]=0))}function wx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:t}=n.options;if(!t)return;const i=ux(t);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:l,layoutId:c}=n.options;window.MotionCancelOptimisedAnimation(i,"transform",Lt,!(l||c))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&wx(o)}function _x({attachResizeListener:n,defaultParent:t,measureScroll:i,checkIsScrollRoot:o,resetTransform:l}){return class{constructor(f={},p=t?.()){this.id=IR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(VR),this.nodes.forEach(GR),this.nodes.forEach(FR),this.nodes.forEach(HR)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new wR)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Dh),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const h=this.eventHandlers.get(f);h&&h.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=V1(f)&&!MA(f),this.instance=f;const{layoutId:p,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||p)&&(this.isLayoutDirty=!0),n){let g,y=0;const x=()=>this.root.updateBlockedByResize=!1;Lt.read(()=>{y=window.innerWidth}),n(f,()=>{const S=window.innerWidth;S!==y&&(y=S,this.root.updateBlockedByResize=!0,g&&g(),g=_R(x,250),fu.hasAnimatedSinceResize&&(fu.hasAnimatedSinceResize=!1,this.nodes.forEach(Ov)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:y,hasRelativeLayoutChanged:x,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||m.getDefaultTransition()||ZR,{onLayoutAnimationStart:A,onLayoutAnimationComplete:R}=m.getProps(),C=!this.targetLayout||!Ex(this.targetLayout,S),N=!y&&x;if(this.options.layoutRoot||this.resumeFrom||N||y&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const I={...qh(E,"layout"),onPlay:A,onComplete:R};(m.shouldReduceMotion||this.options.layoutRoot)&&(I.delay=0,I.type=!1),this.startAnimation(I),this.setAnimationOrigin(g,N)}else y||Ov(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),$a(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(YR),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&wx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Av);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Rv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(qR),this.nodes.forEach(BR),this.nodes.forEach(zR)):this.nodes.forEach(Rv),this.clearAllSnapshots();const p=Ie.now();ve.delta=ra(0,1e3/60,p-ve.timestamp),ve.timestamp=p,ve.isProcessing=!0,ud.update.process(ve),ud.preRender.process(ve),ud.render.process(ve),ve.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Fh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(jR),this.sharedNodes.forEach(XR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Lt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Lt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ce(this.snapshot.measuredBox.x)&&!Ce(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p&&this.instance){const h=o(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:h,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!Sx(this.projectionDelta),h=this.getTransformTemplate(),m=h?h(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;f&&this.instance&&(p||Ti(this.latestValues)||g)&&(l(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return f&&(h=this.removeTransform(h)),QR(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return Qt();const p=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(WR))){const{scroll:m}=this.root;m&&(_r(p.x,m.offset.x),_r(p.y,m.offset.y))}return p}removeElementScroll(f){const p=Qt();if(nn(p,f),this.scroll?.wasRoot)return p;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:g,options:y}=m;m!==this.root&&g&&y.layoutScroll&&(g.wasRoot&&nn(p,f),_r(p.x,g.offset.x),_r(p.y,g.offset.y))}return p}applyTransform(f,p=!1){const h=Qt();nn(h,f);for(let m=0;m<this.path.length;m++){const g=this.path[m];!p&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Ar(h,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Ti(g.latestValues)&&Ar(h,g.latestValues)}return Ti(this.latestValues)&&Ar(h,this.latestValues),h}removeTransform(f){const p=Qt();nn(p,f);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!m.instance||!Ti(m.latestValues))continue;$d(m.latestValues)&&m.updateSnapshot();const g=Qt(),y=m.measurePageBox();nn(g,y),xv(p,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return Ti(this.latestValues)&&xv(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ve.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(f||h&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!(!this.layout||!(g||y))){if(this.resolvedRelativeTargetAt=ve.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),os(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),nn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qt(),this.targetWithTransforms=Qt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),iR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):nn(this.target,this.layout.layoutBox),ax(this.target,this.targetDelta)):nn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),os(this.relativeTargetOrigin,this.target,x.target),nn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||$d(this.parent.latestValues)||nx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),p=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===ve.timestamp&&(h=!1),h)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;nn(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,x=this.treeScale.y;g5(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Qt());const{target:S}=f;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(yv(this.prevProjectionDelta.x,this.projectionDelta.x),yv(this.prevProjectionDelta.y,this.projectionDelta.y)),rs(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==x||!_v(this.projectionDelta.x,this.prevProjectionDelta.x)||!_v(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Rr(),this.projectionDelta=Rr(),this.projectionDeltaWithTransform=Rr()}setAnimationOrigin(f,p=!1){const h=this.snapshot,m=h?h.latestValues:{},g={...this.latestValues},y=Rr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const x=Qt(),S=h?h.source:void 0,E=this.layout?this.layout.source:void 0,A=S!==E,R=this.getStack(),C=!R||R.members.length<=1,N=!!(A&&!C&&this.options.crossfade===!0&&!this.path.some($R));this.animationProgress=0;let I;this.mixTargetDelta=X=>{const V=X/1e3;Cv(y.x,f.x,V),Cv(y.y,f.y,V),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(os(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),KR(this.relativeTarget,this.relativeTargetOrigin,x,V),I&&NR(this.relativeTarget,I)&&(this.isProjectionDirty=!1),I||(I=Qt()),nn(I,this.relativeTarget)),A&&(this.animationValues=g,RR(g,m,this.latestValues,V,N,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=V},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&($a(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Lt.update(()=>{fu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Nr(0)),this.currentAnimation=SR(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),f.onUpdate&&f.onUpdate(p)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(LR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:h,layout:m,latestValues:g}=f;if(!(!p||!h||!m)){if(this!==f&&this.layout&&m&&Ax(this.options.animationType,this.layout.layoutBox,m.layoutBox)){h=this.target||Qt();const y=Ce(this.layout.layoutBox.x);h.x.min=f.target.x.min,h.x.max=h.x.min+y;const x=Ce(this.layout.layoutBox.y);h.y.min=f.target.y.min,h.y.max=h.y.min+x}nn(p,h),Ar(p,g),rs(this.projectionDeltaWithTransform,this.layoutCorrected,p,g)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new PR),this.sharedNodes.get(f).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:h}={}){const m=this.getStack();m&&m.promote(this,h),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:h}=f;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const m={};h.z&&Td("z",f,m,this.animationValues);for(let g=0;g<xd.length;g++)Td(`rotate${xd[g]}`,f,m,this.animationValues),Td(`skew${xd[g]}`,f,m,this.animationValues);f.render();for(const g in m)f.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);f.scheduleRender()}applyProjectionStyles(f,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=cu(p?.pointerEvents)||"",f.transform=h?h(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=cu(p?.pointerEvents)||""),this.hasProjected&&!Ti(this.latestValues)&&(f.transform=h?h({},""):"none",this.hasProjected=!1);return}f.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let y=UR(this.projectionDeltaWithTransform,this.treeScale,g);h&&(y=h(g,y)),f.transform=y;const{x,y:S}=this.projectionDelta;f.transformOrigin=`${x.origin*100}% ${S.origin*100}% 0`,m.animationValues?f.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:f.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const E in gs){if(g[E]===void 0)continue;const{correct:A,applyTo:R,isCSSVariable:C}=gs[E],N=y==="none"?g[E]:A(g[E],m);if(R){const I=R.length;for(let X=0;X<I;X++)f[R[X]]=N}else C?this.options.visualElement.renderState.vars[E]=N:f[E]=N}this.options.layoutId&&(f.pointerEvents=m===this?cu(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Av),this.root.sharedNodes.clear()}}}function BR(n){n.updateLayout()}function zR(n){const t=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:l}=n.options,c=t.source!==n.layout.source;l==="size"?an(g=>{const y=c?t.measuredBox[g]:t.layoutBox[g],x=Ce(y);y.min=i[g].min,y.max=y.min+x}):Ax(l,t.layoutBox,i)&&an(g=>{const y=c?t.measuredBox[g]:t.layoutBox[g],x=Ce(i[g]);y.max=y.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+x)});const f=Rr();rs(f,i,t.layoutBox);const p=Rr();c?rs(p,n.applyTransform(o,!0),t.measuredBox):rs(p,i,t.layoutBox);const h=!Sx(f);let m=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:y,layout:x}=g;if(y&&x){const S=Qt();os(S,t.layoutBox,y.layoutBox);const E=Qt();os(E,i,x.layoutBox),Ex(S,E)||(m=!0),g.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=S,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:p,layoutDelta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function VR(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function HR(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function jR(n){n.clearSnapshot()}function Av(n){n.clearMeasurements()}function Rv(n){n.isLayoutDirty=!1}function qR(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function Ov(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function GR(n){n.resolveTargetDelta()}function FR(n){n.calcProjection()}function YR(n){n.resetSkewAndRotation()}function XR(n){n.removeLeadSnapshot()}function Cv(n,t,i){n.translate=zt(t.translate,0,i),n.scale=zt(t.scale,1,i),n.origin=t.origin,n.originPoint=t.originPoint}function Dv(n,t,i,o){n.min=zt(t.min,i.min,o),n.max=zt(t.max,i.max,o)}function KR(n,t,i,o){Dv(n.x,t.x,i.x,o),Dv(n.y,t.y,i.y,o)}function $R(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const ZR={duration:.45,ease:[.4,0,.1,1]},kv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Mv=kv("applewebkit/")&&!kv("chrome/")?Math.round:on;function Nv(n){n.min=Mv(n.min),n.max=Mv(n.max)}function QR(n){Nv(n.x),Nv(n.y)}function Ax(n,t,i){return n==="position"||n==="preserve-aspect"&&!aR(wv(t),wv(i),.2)}function WR(n){return n!==n.root&&n.scroll?.wasRoot}const JR=_x({attachResizeListener:(n,t)=>ys(n,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Sd={current:void 0},Rx=_x({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Sd.current){const n=new JR({});n.mount(window),n.setOptions({layoutScroll:!0}),Sd.current=n}return Sd.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),tO={pan:{Feature:vR},drag:{Feature:yR,ProjectionNode:Rx,MeasureLayout:bx}};function Pv(n,t,i){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",i==="Start");const l="onHover"+i,c=o[l];c&&Lt.postRender(()=>c(t,Rs(t)))}class eO extends Qa{mount(){const{current:t}=this.node;t&&(this.unmount=RA(t,(i,o)=>(Pv(this.node,o,"Start"),l=>Pv(this.node,l,"End"))))}unmount(){}}class nO extends Qa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ws(ys(this.node.current,"focus",()=>this.onFocus()),ys(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Uv(n,t,i){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",i==="Start");const l="onTap"+(i==="End"?"":i),c=o[l];c&&Lt.postRender(()=>c(t,Rs(t)))}class aO extends Qa{mount(){const{current:t}=this.node;t&&(this.unmount=kA(t,(i,o)=>(Uv(this.node,o,"Start"),(l,{success:c})=>Uv(this.node,l,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const nh=new WeakMap,Ed=new WeakMap,iO=n=>{const t=nh.get(n.target);t&&t(n)},rO=n=>{n.forEach(iO)};function oO({root:n,...t}){const i=n||document;Ed.has(i)||Ed.set(i,{});const o=Ed.get(i),l=JSON.stringify(t);return o[l]||(o[l]=new IntersectionObserver(rO,{root:n,...t})),o[l]}function sO(n,t,i){const o=oO(t);return nh.set(n,i),o.observe(n),()=>{nh.delete(n),o.unobserve(n)}}const lO={some:0,all:1};class uO extends Qa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:i,margin:o,amount:l="some",once:c}=t,f={root:i?i.current:void 0,rootMargin:o,threshold:typeof l=="number"?l:lO[l]},p=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,c&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),x=m?g:y;x&&x(h)};return sO(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(cO(t,i))&&this.startObserver()}unmount(){}}function cO({viewport:n={}},{viewport:t={}}={}){return i=>n[i]!==t[i]}const fO={inView:{Feature:uO},tap:{Feature:aO},focus:{Feature:nO},hover:{Feature:eO}},dO={layout:{ProjectionNode:Rx,MeasureLayout:bx}},hO={...Q5,...fO,...tO,...dO},ss=h5(hO,A5);function se(n,t){t===void 0&&(t={});var i=t.insertAt;if(n&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",i==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}}se(`.react-loading-indicator-normalize,
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
}`);var mn=function(){return mn=Object.assign||function(n){for(var t,i=1,o=arguments.length;i<o;i++)for(var l in t=arguments[i])Object.prototype.hasOwnProperty.call(t,l)&&(n[l]=t[l]);return n},mn.apply(this,arguments)};function wu(n){return wu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wu(n)}var pO=/^\s+/,mO=/\s+$/;function it(n,t){if(t=t||{},(n=n||"")instanceof it)return n;if(!(this instanceof it))return new it(n,t);var i=(function(o){var l={r:0,g:0,b:0},c=1,f=null,p=null,h=null,m=!1,g=!1;typeof o=="string"&&(o=(function(E){E=E.replace(pO,"").replace(mO,"").toLowerCase();var A,R=!1;if(ah[E])E=ah[E],R=!0;else if(E=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(A=hn.rgb.exec(E))?{r:A[1],g:A[2],b:A[3]}:(A=hn.rgba.exec(E))?{r:A[1],g:A[2],b:A[3],a:A[4]}:(A=hn.hsl.exec(E))?{h:A[1],s:A[2],l:A[3]}:(A=hn.hsla.exec(E))?{h:A[1],s:A[2],l:A[3],a:A[4]}:(A=hn.hsv.exec(E))?{h:A[1],s:A[2],v:A[3]}:(A=hn.hsva.exec(E))?{h:A[1],s:A[2],v:A[3],a:A[4]}:(A=hn.hex8.exec(E))?{r:Fe(A[1]),g:Fe(A[2]),b:Fe(A[3]),a:Hv(A[4]),format:R?"name":"hex8"}:(A=hn.hex6.exec(E))?{r:Fe(A[1]),g:Fe(A[2]),b:Fe(A[3]),format:R?"name":"hex"}:(A=hn.hex4.exec(E))?{r:Fe(A[1]+""+A[1]),g:Fe(A[2]+""+A[2]),b:Fe(A[3]+""+A[3]),a:Hv(A[4]+""+A[4]),format:R?"name":"hex8"}:(A=hn.hex3.exec(E))?{r:Fe(A[1]+""+A[1]),g:Fe(A[2]+""+A[2]),b:Fe(A[3]+""+A[3]),format:R?"name":"hex"}:!1})(o)),wu(o)=="object"&&(ta(o.r)&&ta(o.g)&&ta(o.b)?(y=o.r,x=o.g,S=o.b,l={r:255*Ut(y,255),g:255*Ut(x,255),b:255*Ut(S,255)},m=!0,g=String(o.r).substr(-1)==="%"?"prgb":"rgb"):ta(o.h)&&ta(o.s)&&ta(o.v)?(f=Jo(o.s),p=Jo(o.v),l=(function(E,A,R){E=6*Ut(E,360),A=Ut(A,100),R=Ut(R,100);var C=Math.floor(E),N=E-C,I=R*(1-A),X=R*(1-N*A),V=R*(1-(1-N)*A),J=C%6,$=[R,X,I,I,V,R][J],F=[V,R,R,X,I,I][J],Z=[I,I,V,R,R,X][J];return{r:255*$,g:255*F,b:255*Z}})(o.h,f,p),m=!0,g="hsv"):ta(o.h)&&ta(o.s)&&ta(o.l)&&(f=Jo(o.s),h=Jo(o.l),l=(function(E,A,R){var C,N,I;function X($,F,Z){return Z<0&&(Z+=1),Z>1&&(Z-=1),Z<1/6?$+6*(F-$)*Z:Z<.5?F:Z<2/3?$+(F-$)*(2/3-Z)*6:$}if(E=Ut(E,360),A=Ut(A,100),R=Ut(R,100),A===0)C=N=I=R;else{var V=R<.5?R*(1+A):R+A-R*A,J=2*R-V;C=X(J,V,E+1/3),N=X(J,V,E),I=X(J,V,E-1/3)}return{r:255*C,g:255*N,b:255*I}})(o.h,f,h),m=!0,g="hsl"),o.hasOwnProperty("a")&&(c=o.a));var y,x,S;return c=Ox(c),{ok:m,format:o.format||g,r:Math.min(255,Math.max(l.r,0)),g:Math.min(255,Math.max(l.g,0)),b:Math.min(255,Math.max(l.b,0)),a:c}})(n);this._originalInput=n,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||i.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function Lv(n,t,i){n=Ut(n,255),t=Ut(t,255),i=Ut(i,255);var o,l,c=Math.max(n,t,i),f=Math.min(n,t,i),p=(c+f)/2;if(c==f)o=l=0;else{var h=c-f;switch(l=p>.5?h/(2-c-f):h/(c+f),c){case n:o=(t-i)/h+(t<i?6:0);break;case t:o=(i-n)/h+2;break;case i:o=(n-t)/h+4}o/=6}return{h:o,s:l,l:p}}function Iv(n,t,i){n=Ut(n,255),t=Ut(t,255),i=Ut(i,255);var o,l,c=Math.max(n,t,i),f=Math.min(n,t,i),p=c,h=c-f;if(l=c===0?0:h/c,c==f)o=0;else{switch(c){case n:o=(t-i)/h+(t<i?6:0);break;case t:o=(i-n)/h+2;break;case i:o=(n-t)/h+4}o/=6}return{h:o,s:l,v:p}}function Bv(n,t,i,o){var l=[yn(Math.round(n).toString(16)),yn(Math.round(t).toString(16)),yn(Math.round(i).toString(16))];return o&&l[0].charAt(0)==l[0].charAt(1)&&l[1].charAt(0)==l[1].charAt(1)&&l[2].charAt(0)==l[2].charAt(1)?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0):l.join("")}function zv(n,t,i,o){return[yn(Cx(o)),yn(Math.round(n).toString(16)),yn(Math.round(t).toString(16)),yn(Math.round(i).toString(16))].join("")}function gO(n,t){t=t===0?0:t||10;var i=it(n).toHsl();return i.s-=t/100,i.s=Bu(i.s),it(i)}function yO(n,t){t=t===0?0:t||10;var i=it(n).toHsl();return i.s+=t/100,i.s=Bu(i.s),it(i)}function vO(n){return it(n).desaturate(100)}function bO(n,t){t=t===0?0:t||10;var i=it(n).toHsl();return i.l+=t/100,i.l=Bu(i.l),it(i)}function xO(n,t){t=t===0?0:t||10;var i=it(n).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-t/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-t/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-t/100*255))),it(i)}function TO(n,t){t=t===0?0:t||10;var i=it(n).toHsl();return i.l-=t/100,i.l=Bu(i.l),it(i)}function SO(n,t){var i=it(n).toHsl(),o=(i.h+t)%360;return i.h=o<0?360+o:o,it(i)}function EO(n){var t=it(n).toHsl();return t.h=(t.h+180)%360,it(t)}function Vv(n,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var i=it(n).toHsl(),o=[it(n)],l=360/t,c=1;c<t;c++)o.push(it({h:(i.h+c*l)%360,s:i.s,l:i.l}));return o}function wO(n){var t=it(n).toHsl(),i=t.h;return[it(n),it({h:(i+72)%360,s:t.s,l:t.l}),it({h:(i+216)%360,s:t.s,l:t.l})]}function _O(n,t,i){t=t||6,i=i||30;var o=it(n).toHsl(),l=360/i,c=[it(n)];for(o.h=(o.h-(l*t>>1)+720)%360;--t;)o.h=(o.h+l)%360,c.push(it(o));return c}function AO(n,t){t=t||6;for(var i=it(n).toHsv(),o=i.h,l=i.s,c=i.v,f=[],p=1/t;t--;)f.push(it({h:o,s:l,v:c})),c=(c+p)%1;return f}it.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,t,i,o=this.toRgb();return n=o.r/255,t=o.g/255,i=o.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(n){return this._a=Ox(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=Iv(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=Iv(this._r,this._g,this._b),t=Math.round(360*n.h),i=Math.round(100*n.s),o=Math.round(100*n.v);return this._a==1?"hsv("+t+", "+i+"%, "+o+"%)":"hsva("+t+", "+i+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var n=Lv(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=Lv(this._r,this._g,this._b),t=Math.round(360*n.h),i=Math.round(100*n.s),o=Math.round(100*n.l);return this._a==1?"hsl("+t+", "+i+"%, "+o+"%)":"hsla("+t+", "+i+"%, "+o+"%, "+this._roundA+")"},toHex:function(n){return Bv(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return(function(t,i,o,l,c){var f=[yn(Math.round(t).toString(16)),yn(Math.round(i).toString(16)),yn(Math.round(o).toString(16)),yn(Cx(l))];return c&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")})(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ut(this._r,255))+"%",g:Math.round(100*Ut(this._g,255))+"%",b:Math.round(100*Ut(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ut(this._r,255))+"%, "+Math.round(100*Ut(this._g,255))+"%, "+Math.round(100*Ut(this._b,255))+"%)":"rgba("+Math.round(100*Ut(this._r,255))+"%, "+Math.round(100*Ut(this._g,255))+"%, "+Math.round(100*Ut(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(RO[Bv(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var t="#"+zv(this._r,this._g,this._b,this._a),i=t,o=this._gradientType?"GradientType = 1, ":"";if(n){var l=it(n);i="#"+zv(l._r,l._g,l._b,l._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+t+",endColorstr="+i+")"},toString:function(n){var t=!!n;n=n||this._format;var i=!1,o=this._a<1&&this._a>=0;return t||!o||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(i=this.toRgbString()),n==="prgb"&&(i=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(i=this.toHexString()),n==="hex3"&&(i=this.toHexString(!0)),n==="hex4"&&(i=this.toHex8String(!0)),n==="hex8"&&(i=this.toHex8String()),n==="name"&&(i=this.toName()),n==="hsl"&&(i=this.toHslString()),n==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return it(this.toString())},_applyModification:function(n,t){var i=n.apply(null,[this].concat([].slice.call(t)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(bO,arguments)},brighten:function(){return this._applyModification(xO,arguments)},darken:function(){return this._applyModification(TO,arguments)},desaturate:function(){return this._applyModification(gO,arguments)},saturate:function(){return this._applyModification(yO,arguments)},greyscale:function(){return this._applyModification(vO,arguments)},spin:function(){return this._applyModification(SO,arguments)},_applyCombination:function(n,t){return n.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(_O,arguments)},complement:function(){return this._applyCombination(EO,arguments)},monochromatic:function(){return this._applyCombination(AO,arguments)},splitcomplement:function(){return this._applyCombination(wO,arguments)},triad:function(){return this._applyCombination(Vv,[3])},tetrad:function(){return this._applyCombination(Vv,[4])}},it.fromRatio=function(n,t){if(wu(n)=="object"){var i={};for(var o in n)n.hasOwnProperty(o)&&(i[o]=o==="a"?n[o]:Jo(n[o]));n=i}return it(n,t)},it.equals=function(n,t){return!(!n||!t)&&it(n).toRgbString()==it(t).toRgbString()},it.random=function(){return it.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},it.mix=function(n,t,i){i=i===0?0:i||50;var o=it(n).toRgb(),l=it(t).toRgb(),c=i/100;return it({r:(l.r-o.r)*c+o.r,g:(l.g-o.g)*c+o.g,b:(l.b-o.b)*c+o.b,a:(l.a-o.a)*c+o.a})},it.readability=function(n,t){var i=it(n),o=it(t);return(Math.max(i.getLuminance(),o.getLuminance())+.05)/(Math.min(i.getLuminance(),o.getLuminance())+.05)},it.isReadable=function(n,t,i){var o,l,c=it.readability(n,t);switch(l=!1,(o=(function(f){var p,h;return p=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),h=(f.size||"small").toLowerCase(),p!=="AA"&&p!=="AAA"&&(p="AA"),h!=="small"&&h!=="large"&&(h="small"),{level:p,size:h}})(i)).level+o.size){case"AAsmall":case"AAAlarge":l=c>=4.5;break;case"AAlarge":l=c>=3;break;case"AAAsmall":l=c>=7}return l},it.mostReadable=function(n,t,i){var o,l,c,f,p=null,h=0;l=(i=i||{}).includeFallbackColors,c=i.level,f=i.size;for(var m=0;m<t.length;m++)(o=it.readability(n,t[m]))>h&&(h=o,p=it(t[m]));return it.isReadable(n,p,{level:c,size:f})||!l?p:(i.includeFallbackColors=!1,it.mostReadable(n,["#fff","#000"],i))};var ah=it.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},RO=it.hexNames=(function(n){var t={};for(var i in n)n.hasOwnProperty(i)&&(t[n[i]]=i);return t})(ah);function Ox(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function Ut(n,t){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(n)&&(n="100%");var i=(function(o){return typeof o=="string"&&o.indexOf("%")!=-1})(n);return n=Math.min(t,Math.max(0,parseFloat(n))),i&&(n=parseInt(n*t,10)/100),Math.abs(n-t)<1e-6?1:n%t/parseFloat(t)}function Bu(n){return Math.min(1,Math.max(0,n))}function Fe(n){return parseInt(n,16)}function yn(n){return n.length==1?"0"+n:""+n}function Jo(n){return n<=1&&(n=100*n+"%"),n}function Cx(n){return Math.round(255*parseFloat(n)).toString(16)}function Hv(n){return Fe(n)/255}var Ia,tu,eu,hn=(tu="[\\s|\\(]+("+(Ia="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ia+")[,|\\s]+("+Ia+")\\s*\\)?",eu="[\\s|\\(]+("+Ia+")[,|\\s]+("+Ia+")[,|\\s]+("+Ia+")[,|\\s]+("+Ia+")\\s*\\)?",{CSS_UNIT:new RegExp(Ia),rgb:new RegExp("rgb"+tu),rgba:new RegExp("rgba"+eu),hsl:new RegExp("hsl"+tu),hsla:new RegExp("hsla"+eu),hsv:new RegExp("hsv"+tu),hsva:new RegExp("hsva"+eu),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function ta(n){return!!hn.CSS_UNIT.exec(n)}var OO=function(n,t){var i=(typeof n=="string"?parseInt(n):n)||0;if(i>=-5&&i<=5){var o=i,l=parseFloat(t),c=l+o*(l/5)*-1;return(c==0||c<=Number.EPSILON)&&(c=.1),{animationPeriod:c+"s"}}return{animationPeriod:t}},CO=function(n,t){var i=n||{},o="";switch(t){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var l={};if(i.fontSize){var c=i.fontSize;l=(function(f,p){var h={};for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&p.indexOf(m)<0&&(h[m]=f[m]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(m=Object.getOwnPropertySymbols(f);g<m.length;g++)p.indexOf(m[g])<0&&Object.prototype.propertyIsEnumerable.call(f,m[g])&&(h[m[g]]=f[m[g]])}return h})(i,["fontSize"]),o=c}return{fontSize:o,styles:l}},DO={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},kO=function(n){var t=n.className,i=n.text,o=n.textColor,l=n.staticText,c=n.style;return i?Y.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:mn(mn(mn({},l&&DO),o&&{color:o,mixBlendMode:"unset"}),c&&c)},typeof i=="string"&&i.length?i:"loading"):null},Dx="rgb(50, 205, 50)";function MO(n,t){if(t===void 0&&(t=0),n.length===0)throw new Error("Input array cannot be empty!");var i=[];return(function o(l,c){return c===void 0&&(c=0),i.push.apply(i,l),i.length<c&&o(i,c),i.slice(0,c)})(n,t)}se(`.atom-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,t){return"--OP-annulus-phase".concat(t+1,"-color")}));function wd(n){return n&&n.Math===Math&&n}se(`.OP-dotted-rli-bounding-box {
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
}`);wd(typeof window=="object"&&window)||wd(typeof self=="object"&&self)||wd(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(n,t){return"--OP-dotted-phase".concat(t+1,"-color")}));se(`.OP-spokes-rli-bounding-box {
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
}`);var Sr=Array.from({length:4},(function(n,t){return"--mosaic-phase".concat(t+1,"-color")})),jv=function(n){var t,i=CO(n?.style,n?.size),o=i.styles,l=i.fontSize,c=n?.easing,f=OO(n?.speedPlus,"1.5s").animationPeriod,p=Math.round(parseFloat(f)/9*100)/100;p+="s";var h=(function(m){var g={};if(m instanceof Array){for(var y=MO(m,Sr.length),x=0;x<y.length&&!(x>=4);x++)g[Sr[x]]=y[x];return g}try{if(typeof m!="string")throw new Error("Color String expected");for(var S=0;S<Sr.length;S++)g[Sr[S]]=m}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m)," received in <Mosaic /> indicator cannot be processed. Using default instead!")),S=0;S<Sr.length;S++)g[Sr[S]]=Dx}return g})((t=n?.color)!==null&&t!==void 0?t:"");return Y.createElement("span",{className:"rli-d-i-b  mosaic-rli-bounding-box",style:mn(mn(mn(mn(mn({},l&&{fontSize:l}),f&&{"--rli-animation-duration":f}),c&&{"--rli-animation-function":c}),h),o),role:"status","aria-live":"polite","aria-label":"Loading"},Y.createElement("span",{className:"rli-d-i-b mosaic-indicator",style:mn({},p&&{"--mosaic-skip-interval":p})},Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube1"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube2"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube3"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube4"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube5"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube6"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube7"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube8"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube9"})),Y.createElement(kO,{staticText:!0,text:n?.text,textColor:n?.textColor}))};se(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,t){return"--life-line-phase".concat(t+1,"-color")}));const NO=()=>{};var qv={};/**
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
 */const kx=function(n){const t=[];let i=0;for(let o=0;o<n.length;o++){let l=n.charCodeAt(o);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&o+1<n.length&&(n.charCodeAt(o+1)&64512)===56320?(l=65536+((l&1023)<<10)+(n.charCodeAt(++o)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},PO=function(n){const t=[];let i=0,o=0;for(;i<n.length;){const l=n[i++];if(l<128)t[o++]=String.fromCharCode(l);else if(l>191&&l<224){const c=n[i++];t[o++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=n[i++],f=n[i++],p=n[i++],h=((l&7)<<18|(c&63)<<12|(f&63)<<6|p&63)-65536;t[o++]=String.fromCharCode(55296+(h>>10)),t[o++]=String.fromCharCode(56320+(h&1023))}else{const c=n[i++],f=n[i++];t[o++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return t.join("")},Mx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let l=0;l<n.length;l+=3){const c=n[l],f=l+1<n.length,p=f?n[l+1]:0,h=l+2<n.length,m=h?n[l+2]:0,g=c>>2,y=(c&3)<<4|p>>4;let x=(p&15)<<2|m>>6,S=m&63;h||(S=64,f||(x=64)),o.push(i[g],i[y],i[x],i[S])}return o.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(kx(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):PO(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let l=0;l<n.length;){const c=i[n.charAt(l++)],p=l<n.length?i[n.charAt(l)]:0;++l;const m=l<n.length?i[n.charAt(l)]:64;++l;const y=l<n.length?i[n.charAt(l)]:64;if(++l,c==null||p==null||m==null||y==null)throw new UO;const x=c<<2|p>>4;if(o.push(x),m!==64){const S=p<<4&240|m>>2;if(o.push(S),y!==64){const E=m<<6&192|y;o.push(E)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class UO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LO=function(n){const t=kx(n);return Mx.encodeByteArray(t,!0)},_u=function(n){return LO(n).replace(/\./g,"")},Nx=function(n){try{return Mx.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function IO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const BO=()=>IO().__FIREBASE_DEFAULTS__,zO=()=>{if(typeof process>"u"||typeof qv>"u")return;const n=qv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},VO=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Nx(n[1]);return t&&JSON.parse(t)},np=()=>{try{return NO()||BO()||zO()||VO()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Px=n=>np()?.emulatorHosts?.[n],HO=n=>{const t=Px(n);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const o=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),o]:[t.substring(0,i),o]},Ux=()=>np()?.config,Lx=n=>np()?.[`_${n}`];/**
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
 */class jO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,o)=>{i?this.reject(i):this.resolve(o),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,o))}}}/**
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
 */function jr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ix(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function qO(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},o=t||"demo-project",l=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${o}`,aud:o,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...n};return[_u(JSON.stringify(i)),_u(JSON.stringify(f)),""].join(".")}const ls={};function GO(){const n={prod:[],emulator:[]};for(const t of Object.keys(ls))ls[t]?n.emulator.push(t):n.prod.push(t);return n}function FO(n){let t=document.getElementById(n),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),i=!0),{created:i,element:t}}let Gv=!1;function Bx(n,t){if(typeof window>"u"||typeof document>"u"||!jr(window.location.host)||ls[n]===t||ls[n]||Gv)return;ls[n]=t;function i(x){return`__firebase__banner__${x}`}const o="__firebase__banner",c=GO().prod.length>0;function f(){const x=document.getElementById(o);x&&x.remove()}function p(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function h(x,S){x.setAttribute("width","24"),x.setAttribute("id",S),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function m(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{Gv=!0,f()},x}function g(x,S){x.setAttribute("id",S),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function y(){const x=FO(o),S=i("text"),E=document.getElementById(S)||document.createElement("span"),A=i("learnmore"),R=document.getElementById(A)||document.createElement("a"),C=i("preprendIcon"),N=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const I=x.element;p(I),g(R,A);const X=m();h(N,C),I.append(N,E,R,X),document.body.appendChild(I)}c?(E.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function XO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KO(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $O(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZO(){const n=ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function QO(){try{return typeof indexedDB=="object"}catch{return!1}}function WO(){return new Promise((n,t)=>{try{let i=!0;const o="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(o);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(o),n(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{t(l.error?.message||"")}}catch(i){t(i)}})}/**
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
 */const JO="FirebaseError";class ca extends Error{constructor(t,i,o){super(i),this.code=t,this.customData=o,this.name=JO,Object.setPrototypeOf(this,ca.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(t,i,o){this.service=t,this.serviceName=i,this.errors=o}create(t,...i){const o=i[0]||{},l=`${this.service}/${t}`,c=this.errors[t],f=c?tC(c,o):"Error",p=`${this.serviceName}: ${f} (${l}).`;return new ca(l,p,o)}}function tC(n,t){return n.replace(eC,(i,o)=>{const l=t[o];return l!=null?String(l):`<${o}?>`})}const eC=/\{\$([^}]+)}/g;function nC(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ur(n,t){if(n===t)return!0;const i=Object.keys(n),o=Object.keys(t);for(const l of i){if(!o.includes(l))return!1;const c=n[l],f=t[l];if(Fv(c)&&Fv(f)){if(!Ur(c,f))return!1}else if(c!==f)return!1}for(const l of o)if(!i.includes(l))return!1;return!0}function Fv(n){return n!==null&&typeof n=="object"}/**
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
 */function Cs(n){const t=[];for(const[i,o]of Object.entries(n))Array.isArray(o)?o.forEach(l=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(o));return t.length?"&"+t.join("&"):""}function ts(n){const t={};return n.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[l,c]=o.split("=");t[decodeURIComponent(l)]=decodeURIComponent(c)}}),t}function es(n){const t=n.indexOf("?");if(!t)return"";const i=n.indexOf("#",t);return n.substring(t,i>0?i:void 0)}function aC(n,t){const i=new iC(n,t);return i.subscribe.bind(i)}class iC{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(o=>{this.error(o)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,o){let l;if(t===void 0&&i===void 0&&o===void 0)throw new Error("Missing Observer.");rC(t,["next","error","complete"])?l=t:l={next:t,error:i,complete:o},l.next===void 0&&(l.next=_d),l.error===void 0&&(l.error=_d),l.complete===void 0&&(l.complete=_d);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rC(n,t){if(typeof n!="object"||n===null)return!1;for(const i of t)if(i in n&&typeof n[i]=="function")return!0;return!1}function _d(){}/**
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
 */class oC{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const o=new jO;if(this.instancesDeferred.set(i,o),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&o.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),o=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(lC(t))try{this.getOrInitializeService({instanceIdentifier:Si})}catch{}for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});o.resolve(c)}catch{}}}}clearInstance(t=Si){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Si){return this.instances.has(t)}getOptions(t=Si){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:o,options:i});for(const[c,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);o===p&&f.resolve(l)}return l}onInit(t,i){const o=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(o)??new Set;l.add(t),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&t(c,o),()=>{l.delete(t)}}invokeOnInitCallbacks(t,i){const o=this.onInitCallbacks.get(i);if(o)for(const l of o)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let o=this.instances.get(t);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:sC(t),options:i}),this.instances.set(t,o),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(o,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,o)}catch{}return o||null}normalizeInstanceIdentifier(t=Si){return this.component?this.component.multipleInstances?t:Si:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sC(n){return n===Si?void 0:n}function lC(n){return n.instantiationMode==="EAGER"}/**
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
 */class uC{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new oC(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ct;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ct||(Ct={}));const cC={debug:Ct.DEBUG,verbose:Ct.VERBOSE,info:Ct.INFO,warn:Ct.WARN,error:Ct.ERROR,silent:Ct.SILENT},fC=Ct.INFO,dC={[Ct.DEBUG]:"log",[Ct.VERBOSE]:"log",[Ct.INFO]:"info",[Ct.WARN]:"warn",[Ct.ERROR]:"error"},hC=(n,t,...i)=>{if(t<n.logLevel)return;const o=new Date().toISOString(),l=dC[t];if(l)console[l](`[${o}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zx{constructor(t){this.name=t,this._logLevel=fC,this._logHandler=hC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ct))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?cC[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ct.DEBUG,...t),this._logHandler(this,Ct.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ct.VERBOSE,...t),this._logHandler(this,Ct.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ct.INFO,...t),this._logHandler(this,Ct.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ct.WARN,...t),this._logHandler(this,Ct.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ct.ERROR,...t),this._logHandler(this,Ct.ERROR,...t)}}const pC=(n,t)=>t.some(i=>n instanceof i);let Yv,Xv;function mC(){return Yv||(Yv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gC(){return Xv||(Xv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vx=new WeakMap,ih=new WeakMap,Hx=new WeakMap,Ad=new WeakMap,ap=new WeakMap;function yC(n){const t=new Promise((i,o)=>{const l=()=>{n.removeEventListener("success",c),n.removeEventListener("error",f)},c=()=>{i(Fa(n.result)),l()},f=()=>{o(n.error),l()};n.addEventListener("success",c),n.addEventListener("error",f)});return t.then(i=>{i instanceof IDBCursor&&Vx.set(i,n)}).catch(()=>{}),ap.set(t,n),t}function vC(n){if(ih.has(n))return;const t=new Promise((i,o)=>{const l=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",f),n.removeEventListener("abort",f)},c=()=>{i(),l()},f=()=>{o(n.error||new DOMException("AbortError","AbortError")),l()};n.addEventListener("complete",c),n.addEventListener("error",f),n.addEventListener("abort",f)});ih.set(n,t)}let rh={get(n,t,i){if(n instanceof IDBTransaction){if(t==="done")return ih.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Hx.get(n);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Fa(n[t])},set(n,t,i){return n[t]=i,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function bC(n){rh=n(rh)}function xC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const o=n.call(Rd(this),t,...i);return Hx.set(o,t.sort?t.sort():[t]),Fa(o)}:gC().includes(n)?function(...t){return n.apply(Rd(this),t),Fa(Vx.get(this))}:function(...t){return Fa(n.apply(Rd(this),t))}}function TC(n){return typeof n=="function"?xC(n):(n instanceof IDBTransaction&&vC(n),pC(n,mC())?new Proxy(n,rh):n)}function Fa(n){if(n instanceof IDBRequest)return yC(n);if(Ad.has(n))return Ad.get(n);const t=TC(n);return t!==n&&(Ad.set(n,t),ap.set(t,n)),t}const Rd=n=>ap.get(n);function SC(n,t,{blocked:i,upgrade:o,blocking:l,terminated:c}={}){const f=indexedDB.open(n,t),p=Fa(f);return o&&f.addEventListener("upgradeneeded",h=>{o(Fa(f.result),h.oldVersion,h.newVersion,Fa(f.transaction),h)}),i&&f.addEventListener("blocked",h=>i(h.oldVersion,h.newVersion,h)),p.then(h=>{c&&h.addEventListener("close",()=>c()),l&&h.addEventListener("versionchange",m=>l(m.oldVersion,m.newVersion,m))}).catch(()=>{}),p}const EC=["get","getKey","getAll","getAllKeys","count"],wC=["put","add","delete","clear"],Od=new Map;function Kv(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Od.get(t))return Od.get(t);const i=t.replace(/FromIndex$/,""),o=t!==i,l=wC.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(l||EC.includes(i)))return;const c=async function(f,...p){const h=this.transaction(f,l?"readwrite":"readonly");let m=h.store;return o&&(m=m.index(p.shift())),(await Promise.all([m[i](...p),l&&h.done]))[0]};return Od.set(t,c),c}bC(n=>({...n,get:(t,i,o)=>Kv(t,i)||n.get(t,i,o),has:(t,i)=>!!Kv(t,i)||n.has(t,i)}));/**
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
 */class _C{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(AC(i)){const o=i.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(i=>i).join(" ")}}function AC(n){return n.getComponent()?.type==="VERSION"}const oh="@firebase/app",$v="0.14.4";/**
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
 */const sa=new zx("@firebase/app"),RC="@firebase/app-compat",OC="@firebase/analytics-compat",CC="@firebase/analytics",DC="@firebase/app-check-compat",kC="@firebase/app-check",MC="@firebase/auth",NC="@firebase/auth-compat",PC="@firebase/database",UC="@firebase/data-connect",LC="@firebase/database-compat",IC="@firebase/functions",BC="@firebase/functions-compat",zC="@firebase/installations",VC="@firebase/installations-compat",HC="@firebase/messaging",jC="@firebase/messaging-compat",qC="@firebase/performance",GC="@firebase/performance-compat",FC="@firebase/remote-config",YC="@firebase/remote-config-compat",XC="@firebase/storage",KC="@firebase/storage-compat",$C="@firebase/firestore",ZC="@firebase/ai",QC="@firebase/firestore-compat",WC="firebase",JC="12.4.0";/**
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
 */const sh="[DEFAULT]",tD={[oh]:"fire-core",[RC]:"fire-core-compat",[CC]:"fire-analytics",[OC]:"fire-analytics-compat",[kC]:"fire-app-check",[DC]:"fire-app-check-compat",[MC]:"fire-auth",[NC]:"fire-auth-compat",[PC]:"fire-rtdb",[UC]:"fire-data-connect",[LC]:"fire-rtdb-compat",[IC]:"fire-fn",[BC]:"fire-fn-compat",[zC]:"fire-iid",[VC]:"fire-iid-compat",[HC]:"fire-fcm",[jC]:"fire-fcm-compat",[qC]:"fire-perf",[GC]:"fire-perf-compat",[FC]:"fire-rc",[YC]:"fire-rc-compat",[XC]:"fire-gcs",[KC]:"fire-gcs-compat",[$C]:"fire-fst",[QC]:"fire-fst-compat",[ZC]:"fire-vertex","fire-js":"fire-js",[WC]:"fire-js-all"};/**
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
 */const Au=new Map,eD=new Map,lh=new Map;function Zv(n,t){try{n.container.addComponent(t)}catch(i){sa.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,i)}}function Lr(n){const t=n.name;if(lh.has(t))return sa.debug(`There were multiple attempts to register component ${t}.`),!1;lh.set(t,n);for(const i of Au.values())Zv(i,n);for(const i of eD.values())Zv(i,n);return!0}function ip(n,t){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(t)}function gn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const nD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ya=new Os("app","Firebase",nD);/**
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
 */class aD{constructor(t,i,o){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ya.create("app-deleted",{appName:this._name})}}/**
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
 */const qr=JC;function jx(n,t={}){let i=n;typeof t!="object"&&(t={name:t});const o={name:sh,automaticDataCollectionEnabled:!0,...t},l=o.name;if(typeof l!="string"||!l)throw Ya.create("bad-app-name",{appName:String(l)});if(i||(i=Ux()),!i)throw Ya.create("no-options");const c=Au.get(l);if(c){if(Ur(i,c.options)&&Ur(o,c.config))return c;throw Ya.create("duplicate-app",{appName:l})}const f=new uC(l);for(const h of lh.values())f.addComponent(h);const p=new aD(i,o,f);return Au.set(l,p),p}function qx(n=sh){const t=Au.get(n);if(!t&&n===sh&&Ux())return jx();if(!t)throw Ya.create("no-app",{appName:n});return t}function Xa(n,t,i){let o=tD[n]??n;i&&(o+=`-${i}`);const l=o.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const f=[`Unable to register library "${o}" with version "${t}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sa.warn(f.join(" "));return}Lr(new Oi(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const iD="firebase-heartbeat-database",rD=1,vs="firebase-heartbeat-store";let Cd=null;function Gx(){return Cd||(Cd=SC(iD,rD,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(vs)}catch(i){console.warn(i)}}}}).catch(n=>{throw Ya.create("idb-open",{originalErrorMessage:n.message})})),Cd}async function oD(n){try{const i=(await Gx()).transaction(vs),o=await i.objectStore(vs).get(Fx(n));return await i.done,o}catch(t){if(t instanceof ca)sa.warn(t.message);else{const i=Ya.create("idb-get",{originalErrorMessage:t?.message});sa.warn(i.message)}}}async function Qv(n,t){try{const o=(await Gx()).transaction(vs,"readwrite");await o.objectStore(vs).put(t,Fx(n)),await o.done}catch(i){if(i instanceof ca)sa.warn(i.message);else{const o=Ya.create("idb-set",{originalErrorMessage:i?.message});sa.warn(o.message)}}}function Fx(n){return`${n.name}!${n.options.appId}`}/**
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
 */const sD=1024,lD=30;class uD{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new fD(i),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Wv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>lD){const l=dD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){sa.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wv(),{heartbeatsToSend:i,unsentEntries:o}=cD(this._heartbeatsCache.heartbeats),l=_u(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return sa.warn(t),""}}}function Wv(){return new Date().toISOString().substring(0,10)}function cD(n,t=sD){const i=[];let o=n.slice();for(const l of n){const c=i.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),Jv(i)>t){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),Jv(i)>t){i.pop();break}o=o.slice(1)}return{heartbeatsToSend:i,unsentEntries:o}}class fD{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QO()?WO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await oD(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const o=await this.read();return Qv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const o=await this.read();return Qv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Jv(n){return _u(JSON.stringify({version:2,heartbeats:n})).length}function dD(n){if(n.length===0)return-1;let t=0,i=n[0].date;for(let o=1;o<n.length;o++)n[o].date<i&&(i=n[o].date,t=o);return t}/**
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
 */function hD(n){Lr(new Oi("platform-logger",t=>new _C(t),"PRIVATE")),Lr(new Oi("heartbeat",t=>new uD(t),"PRIVATE")),Xa(oh,$v,n),Xa(oh,$v,"esm2020"),Xa("fire-js","")}hD("");/**
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
 */const Yx="firebasestorage.googleapis.com",Xx="storageBucket",pD=120*1e3,mD=600*1e3;/**
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
 */class Ft extends ca{constructor(t,i,o=0){super(Dd(t),`Firebase Storage: ${i} (${Dd(t)})`),this.status_=o,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ft.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Dd(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Gt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Gt||(Gt={}));function Dd(n){return"storage/"+n}function rp(){const n="An unknown error occurred, please check the error payload for server response.";return new Ft(Gt.UNKNOWN,n)}function gD(n){return new Ft(Gt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function yD(n){return new Ft(Gt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function vD(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ft(Gt.UNAUTHENTICATED,n)}function bD(){return new Ft(Gt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function xD(n){return new Ft(Gt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function TD(){return new Ft(Gt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SD(){return new Ft(Gt.CANCELED,"User canceled the upload/download.")}function ED(n){return new Ft(Gt.INVALID_URL,"Invalid URL '"+n+"'.")}function wD(n){return new Ft(Gt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function _D(){return new Ft(Gt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Xx+"' property when initializing the app?")}function AD(){return new Ft(Gt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function RD(){return new Ft(Gt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function OD(n){return new Ft(Gt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function uh(n){return new Ft(Gt.INVALID_ARGUMENT,n)}function Kx(){return new Ft(Gt.APP_DELETED,"The Firebase app was deleted.")}function CD(n){return new Ft(Gt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function us(n,t){return new Ft(Gt.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function Zo(n){throw new Ft(Gt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class De{constructor(t,i){this.bucket=t,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,i){let o;try{o=De.makeFromUrl(t,i)}catch{return new De(t,"")}if(o.path==="")return o;throw wD(t)}static makeFromUrl(t,i){let o=null;const l="([A-Za-z0-9.\\-_]+)";function c(X){X.path.charAt(X.path.length-1)==="/"&&(X.path_=X.path_.slice(0,-1))}const f="(/(.*))?$",p=new RegExp("^gs://"+l+f,"i"),h={bucket:1,path:3};function m(X){X.path_=decodeURIComponent(X.path)}const g="v[A-Za-z0-9_]+",y=i.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",S=new RegExp(`^https?://${y}/${g}/b/${l}/o${x}`,"i"),E={bucket:1,path:3},A=i===Yx?"(?:storage.googleapis.com|storage.cloud.google.com)":i,R="([^?#]*)",C=new RegExp(`^https?://${A}/${l}/${R}`,"i"),I=[{regex:p,indices:h,postModify:c},{regex:S,indices:E,postModify:m},{regex:C,indices:{bucket:1,path:2},postModify:m}];for(let X=0;X<I.length;X++){const V=I[X],J=V.regex.exec(t);if(J){const $=J[V.indices.bucket];let F=J[V.indices.path];F||(F=""),o=new De($,F),V.postModify(o);break}}if(o==null)throw ED(t);return o}}class DD{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function kD(n,t,i){let o=1,l=null,c=null,f=!1,p=0;function h(){return p===2}let m=!1;function g(...R){m||(m=!0,t.apply(null,R))}function y(R){l=setTimeout(()=>{l=null,n(S,h())},R)}function x(){c&&clearTimeout(c)}function S(R,...C){if(m){x();return}if(R){x(),g.call(null,R,...C);return}if(h()||f){x(),g.call(null,R,...C);return}o<64&&(o*=2);let I;p===1?(p=2,I=0):I=(o+Math.random())*1e3,y(I)}let E=!1;function A(R){E||(E=!0,x(),!m&&(l!==null?(R||(p=2),clearTimeout(l),y(0)):R||(p=1)))}return y(0),c=setTimeout(()=>{f=!0,A(!0)},i),A}function MD(n){n(!1)}/**
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
 */function ND(n){return n!==void 0}function PD(n){return typeof n=="object"&&!Array.isArray(n)}function op(n){return typeof n=="string"||n instanceof String}function tb(n){return sp()&&n instanceof Blob}function sp(){return typeof Blob<"u"}function ch(n,t,i,o){if(o<t)throw uh(`Invalid value for '${n}'. Expected ${t} or greater.`);if(o>i)throw uh(`Invalid value for '${n}'. Expected ${i} or less.`)}/**
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
 */function UD(n,t){const i=n>=500&&n<600,l=[408,429].indexOf(n)!==-1,c=t.indexOf(n)!==-1;return i||l||c}/**
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
 */class LD{constructor(t,i,o,l,c,f,p,h,m,g,y,x=!0,S=!1){this.url_=t,this.method_=i,this.headers_=o,this.body_=l,this.successCodes_=c,this.additionalRetryCodes_=f,this.callback_=p,this.errorCallback_=h,this.timeout_=m,this.progressCallback_=g,this.connectionFactory_=y,this.retry=x,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,A)=>{this.resolve_=E,this.reject_=A,this.start_()})}start_(){const t=(o,l)=>{if(l){o(!1,new nu(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const f=p=>{const h=p.loaded,m=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,m)};this.progressCallback_!==null&&c.addUploadProgressListener(f),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(f),this.pendingConnection_=null;const p=c.getErrorCode()===Ri.NO_ERROR,h=c.getStatus();if(!p||UD(h,this.additionalRetryCodes_)&&this.retry){const g=c.getErrorCode()===Ri.ABORT;o(!1,new nu(!1,null,g));return}const m=this.successCodes_.indexOf(h)!==-1;o(!0,new nu(m,c))})},i=(o,l)=>{const c=this.resolve_,f=this.reject_,p=l.connection;if(l.wasSuccessCode)try{const h=this.callback_(p,p.getResponse());ND(h)?c(h):c()}catch(h){f(h)}else if(p!==null){const h=rp();h.serverResponse=p.getErrorText(),this.errorCallback_?f(this.errorCallback_(p,h)):f(h)}else if(l.canceled){const h=this.appDelete_?Kx():SD();f(h)}else{const h=TD();f(h)}};this.canceled_?i(!1,new nu(!1,null,!0)):this.backoffId_=kD(t,i,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&MD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nu{constructor(t,i,o){this.wasSuccessCode=t,this.connection=i,this.canceled=!!o}}function ID(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function BD(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function zD(n,t){t&&(n["X-Firebase-GMPID"]=t)}function VD(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function HD(n,t,i,o,l,c,f=!0,p=!1){const h=$x(n.urlParams),m=n.url+h,g=Object.assign({},n.headers);return zD(g,t),ID(g,i),BD(g,c),VD(g,o),new LD(m,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,l,f,p)}/**
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
 */function jD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qD(...n){const t=jD();if(t!==void 0){const i=new t;for(let o=0;o<n.length;o++)i.append(n[o]);return i.getBlob()}else{if(sp())return new Blob(n);throw new Ft(Gt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function GD(n,t,i){return n.webkitSlice?n.webkitSlice(t,i):n.mozSlice?n.mozSlice(t,i):n.slice?n.slice(t,i):null}/**
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
 */function FD(n){if(typeof atob>"u")throw OD("base-64");return atob(n)}/**
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
 */const Dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class kd{constructor(t,i){this.data=t,this.contentType=i||null}}function YD(n,t){switch(n){case Dn.RAW:return new kd(Zx(t));case Dn.BASE64:case Dn.BASE64URL:return new kd(Qx(n,t));case Dn.DATA_URL:return new kd(KD(t),$D(t))}throw rp()}function Zx(n){const t=[];for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);if(o<=127)t.push(o);else if(o<=2047)t.push(192|o>>6,128|o&63);else if((o&64512)===55296)if(!(i<n.length-1&&(n.charCodeAt(i+1)&64512)===56320))t.push(239,191,189);else{const c=o,f=n.charCodeAt(++i);o=65536|(c&1023)<<10|f&1023,t.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|o&63)}else(o&64512)===56320?t.push(239,191,189):t.push(224|o>>12,128|o>>6&63,128|o&63)}return new Uint8Array(t)}function XD(n){let t;try{t=decodeURIComponent(n)}catch{throw us(Dn.DATA_URL,"Malformed data URL.")}return Zx(t)}function Qx(n,t){switch(n){case Dn.BASE64:{const l=t.indexOf("-")!==-1,c=t.indexOf("_")!==-1;if(l||c)throw us(n,"Invalid character '"+(l?"-":"_")+"' found: is it base64url encoded?");break}case Dn.BASE64URL:{const l=t.indexOf("+")!==-1,c=t.indexOf("/")!==-1;if(l||c)throw us(n,"Invalid character '"+(l?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let i;try{i=FD(t)}catch(l){throw l.message.includes("polyfill")?l:us(n,"Invalid character found")}const o=new Uint8Array(i.length);for(let l=0;l<i.length;l++)o[l]=i.charCodeAt(l);return o}class Wx{constructor(t){this.base64=!1,this.contentType=null;const i=t.match(/^data:([^,]+)?,/);if(i===null)throw us(Dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const o=i[1]||null;o!=null&&(this.base64=ZD(o,";base64"),this.contentType=this.base64?o.substring(0,o.length-7):o),this.rest=t.substring(t.indexOf(",")+1)}}function KD(n){const t=new Wx(n);return t.base64?Qx(Dn.BASE64,t.rest):XD(t.rest)}function $D(n){return new Wx(n).contentType}function ZD(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
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
 */class Va{constructor(t,i){let o=0,l="";tb(t)?(this.data_=t,o=t.size,l=t.type):t instanceof ArrayBuffer?(i?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),o=this.data_.length):t instanceof Uint8Array&&(i?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),o=t.length),this.size_=o,this.type_=l}size(){return this.size_}type(){return this.type_}slice(t,i){if(tb(this.data_)){const o=this.data_,l=GD(o,t,i);return l===null?null:new Va(l)}else{const o=new Uint8Array(this.data_.buffer,t,i-t);return new Va(o,!0)}}static getBlob(...t){if(sp()){const i=t.map(o=>o instanceof Va?o.data_:o);return new Va(qD.apply(null,i))}else{const i=t.map(f=>op(f)?YD(Dn.RAW,f).data:f.data_);let o=0;i.forEach(f=>{o+=f.byteLength});const l=new Uint8Array(o);let c=0;return i.forEach(f=>{for(let p=0;p<f.length;p++)l[c++]=f[p]}),new Va(l,!0)}}uploadData(){return this.data_}}/**
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
 */function lp(n){let t;try{t=JSON.parse(n)}catch{return null}return PD(t)?t:null}/**
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
 */function QD(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function WD(n,t){const i=t.split("/").filter(o=>o.length>0).join("/");return n.length===0?i:n+"/"+i}function Jx(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
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
 */function JD(n,t){return t}class Oe{constructor(t,i,o,l){this.server=t,this.local=i||t,this.writable=!!o,this.xform=l||JD}}let au=null;function tk(n){return!op(n)||n.length<2?n:Jx(n)}function tT(){if(au)return au;const n=[];n.push(new Oe("bucket")),n.push(new Oe("generation")),n.push(new Oe("metageneration")),n.push(new Oe("name","fullPath",!0));function t(c,f){return tk(f)}const i=new Oe("name");i.xform=t,n.push(i);function o(c,f){return f!==void 0?Number(f):f}const l=new Oe("size");return l.xform=o,n.push(l),n.push(new Oe("timeCreated")),n.push(new Oe("updated")),n.push(new Oe("md5Hash",null,!0)),n.push(new Oe("cacheControl",null,!0)),n.push(new Oe("contentDisposition",null,!0)),n.push(new Oe("contentEncoding",null,!0)),n.push(new Oe("contentLanguage",null,!0)),n.push(new Oe("contentType",null,!0)),n.push(new Oe("metadata","customMetadata",!0)),au=n,au}function ek(n,t){function i(){const o=n.bucket,l=n.fullPath,c=new De(o,l);return t._makeStorageReference(c)}Object.defineProperty(n,"ref",{get:i})}function nk(n,t,i){const o={};o.type="file";const l=i.length;for(let c=0;c<l;c++){const f=i[c];o[f.local]=f.xform(o,t[f.server])}return ek(o,n),o}function eT(n,t,i){const o=lp(t);return o===null?null:nk(n,o,i)}function ak(n,t,i,o){const l=lp(t);if(l===null||!op(l.downloadTokens))return null;const c=l.downloadTokens;if(c.length===0)return null;const f=encodeURIComponent;return c.split(",").map(m=>{const g=n.bucket,y=n.fullPath,x="/b/"+f(g)+"/o/"+f(y),S=zu(x,i,o),E=$x({alt:"media",token:m});return S+E})[0]}function ik(n,t){const i={},o=t.length;for(let l=0;l<o;l++){const c=t[l];c.writable&&(i[c.server]=n[c.local])}return JSON.stringify(i)}/**
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
 */const eb="prefixes",nb="items";function rk(n,t,i){const o={prefixes:[],items:[],nextPageToken:i.nextPageToken};if(i[eb])for(const l of i[eb]){const c=l.replace(/\/$/,""),f=n._makeStorageReference(new De(t,c));o.prefixes.push(f)}if(i[nb])for(const l of i[nb]){const c=n._makeStorageReference(new De(t,l.name));o.items.push(c)}return o}function ok(n,t,i){const o=lp(i);return o===null?null:rk(n,t,o)}class up{constructor(t,i,o,l){this.url=t,this.method=i,this.handler=o,this.timeout=l,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function cp(n){if(!n)throw rp()}function sk(n,t){function i(o,l){const c=eT(n,l,t);return cp(c!==null),c}return i}function lk(n,t){function i(o,l){const c=ok(n,t,l);return cp(c!==null),c}return i}function uk(n,t){function i(o,l){const c=eT(n,l,t);return cp(c!==null),ak(c,l,n.host,n._protocol)}return i}function fp(n){function t(i,o){let l;return i.getStatus()===401?i.getErrorText().includes("Firebase App Check token is invalid")?l=bD():l=vD():i.getStatus()===402?l=yD(n.bucket):i.getStatus()===403?l=xD(n.path):l=o,l.status=i.getStatus(),l.serverResponse=o.serverResponse,l}return t}function ck(n){const t=fp(n);function i(o,l){let c=t(o,l);return o.getStatus()===404&&(c=gD(n.path)),c.serverResponse=l.serverResponse,c}return i}function fk(n,t,i,o,l){const c={};t.isRoot?c.prefix="":c.prefix=t.path+"/",i.length>0&&(c.delimiter=i),o&&(c.pageToken=o),l&&(c.maxResults=l);const f=t.bucketOnlyServerUrl(),p=zu(f,n.host,n._protocol),h="GET",m=n.maxOperationRetryTime,g=new up(p,h,lk(n,t.bucket),m);return g.urlParams=c,g.errorHandler=fp(t),g}function dk(n,t,i){const o=t.fullServerUrl(),l=zu(o,n.host,n._protocol),c="GET",f=n.maxOperationRetryTime,p=new up(l,c,uk(n,i),f);return p.errorHandler=ck(t),p}function hk(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function pk(n,t,i){const o=Object.assign({},i);return o.fullPath=n.path,o.size=t.size(),o.contentType||(o.contentType=hk(null,t)),o}function mk(n,t,i,o,l){const c=t.bucketOnlyServerUrl(),f={"X-Goog-Upload-Protocol":"multipart"};function p(){let I="";for(let X=0;X<2;X++)I=I+Math.random().toString().slice(2);return I}const h=p();f["Content-Type"]="multipart/related; boundary="+h;const m=pk(t,o,l),g=ik(m,i),y="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+g+`\r
--`+h+`\r
Content-Type: `+m.contentType+`\r
\r
`,x=`\r
--`+h+"--",S=Va.getBlob(y,o,x);if(S===null)throw AD();const E={name:m.fullPath},A=zu(c,n.host,n._protocol),R="POST",C=n.maxUploadRetryTime,N=new up(A,R,sk(n,i),C);return N.urlParams=E,N.headers=f,N.body=S.uploadData(),N.errorHandler=fp(t),N}class gk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ri.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ri.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ri.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,i,o,l,c){if(this.sent_)throw Zo("cannot .send() more than once");if(jr(t)&&o&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(i,t,!0),c!==void 0)for(const f in c)c.hasOwnProperty(f)&&this.xhr_.setRequestHeader(f,c[f].toString());return l!==void 0?this.xhr_.send(l):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class yk extends gk{initXhr(){this.xhr_.responseType="text"}}function dp(){return new yk}/**
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
 */class Ci{constructor(t,i){this._service=t,i instanceof De?this._location=i:this._location=De.makeFromUrl(i,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,i){return new Ci(t,i)}get root(){const t=new De(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Jx(this._location.path)}get storage(){return this._service}get parent(){const t=QD(this._location.path);if(t===null)return null;const i=new De(this._location.bucket,t);return new Ci(this._service,i)}_throwIfRoot(t){if(this._location.path==="")throw CD(t)}}function vk(n,t,i){n._throwIfRoot("uploadBytes");const o=mk(n.storage,n._location,tT(),new Va(t,!0),i);return n.storage.makeRequestWithTokens(o,dp).then(l=>({metadata:l,ref:n}))}function bk(n){const t={prefixes:[],items:[]};return nT(n,t).then(()=>t)}async function nT(n,t,i){const l=await xk(n,{pageToken:i});t.prefixes.push(...l.prefixes),t.items.push(...l.items),l.nextPageToken!=null&&await nT(n,t,l.nextPageToken)}function xk(n,t){t!=null&&typeof t.maxResults=="number"&&ch("options.maxResults",1,1e3,t.maxResults);const i=t||{},o=fk(n.storage,n._location,"/",i.pageToken,i.maxResults);return n.storage.makeRequestWithTokens(o,dp)}function Tk(n){n._throwIfRoot("getDownloadURL");const t=dk(n.storage,n._location,tT());return n.storage.makeRequestWithTokens(t,dp).then(i=>{if(i===null)throw RD();return i})}function Sk(n,t){const i=WD(n._location.path,t),o=new De(n._location.bucket,i);return new Ci(n.storage,o)}/**
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
 */function Ek(n){return/^[A-Za-z]+:\/\//.test(n)}function wk(n,t){return new Ci(n,t)}function aT(n,t){if(n instanceof hp){const i=n;if(i._bucket==null)throw _D();const o=new Ci(i,i._bucket);return t!=null?aT(o,t):o}else return t!==void 0?Sk(n,t):n}function _k(n,t){if(t&&Ek(t)){if(n instanceof hp)return wk(n,t);throw uh("To use ref(service, url), the first argument must be a Storage instance.")}else return aT(n,t)}function ab(n,t){const i=t?.[Xx];return i==null?null:De.makeFromBucketSpec(i,n)}function Ak(n,t,i,o={}){n.host=`${t}:${i}`;const l=jr(t);l&&(Ix(`https://${n.host}/b`),Bx("Storage",!0)),n._isUsingEmulator=!0,n._protocol=l?"https":"http";const{mockUserToken:c}=o;c&&(n._overrideAuthToken=typeof c=="string"?c:qO(c,n.app.options.projectId))}class hp{constructor(t,i,o,l,c,f=!1){this.app=t,this._authProvider=i,this._appCheckProvider=o,this._url=l,this._firebaseVersion=c,this._isUsingEmulator=f,this._bucket=null,this._host=Yx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pD,this._maxUploadRetryTime=mD,this._requests=new Set,l!=null?this._bucket=De.makeFromBucketSpec(l,this._host):this._bucket=ab(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=De.makeFromBucketSpec(this._url,t):this._bucket=ab(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ch("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ch("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const i=await t.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ci(this,t)}_makeRequest(t,i,o,l,c=!0){if(this._deleted)return new DD(Kx());{const f=HD(t,this._appId,o,l,i,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(t,i){const[o,l]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,i,o,l).getPromise()}}const ib="@firebase/storage",rb="0.14.0";/**
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
 */const iT="storage";function rT(n,t,i){return n=sn(n),vk(n,t,i)}function pp(n){return n=sn(n),bk(n)}function oT(n){return n=sn(n),Tk(n)}function Gr(n,t){return n=sn(n),_k(n,t)}function Rk(n=qx(),t){n=sn(n);const o=ip(n,iT).getImmediate({identifier:t}),l=HO("storage");return l&&Ok(o,...l),o}function Ok(n,t,i,o={}){Ak(n,t,i,o)}function Ck(n,{instanceIdentifier:t}){const i=n.getProvider("app").getImmediate(),o=n.getProvider("auth-internal"),l=n.getProvider("app-check-internal");return new hp(i,o,l,t,qr)}function Dk(){Lr(new Oi(iT,Ck,"PUBLIC").setMultipleInstances(!0)),Xa(ib,rb,""),Xa(ib,rb,"esm2020")}Dk();var kk="firebase",Mk="12.4.0";/**
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
 */Xa(kk,Mk,"app");function sT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nk=sT,lT=new Os("auth","Firebase",sT());/**
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
 */const Ru=new zx("@firebase/auth");function Pk(n,...t){Ru.logLevel<=Ct.WARN&&Ru.warn(`Auth (${qr}): ${n}`,...t)}function du(n,...t){Ru.logLevel<=Ct.ERROR&&Ru.error(`Auth (${qr}): ${n}`,...t)}/**
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
 */function xn(n,...t){throw mp(n,...t)}function Nn(n,...t){return mp(n,...t)}function uT(n,t,i){const o={...Nk(),[t]:i};return new Os("auth","Firebase",o).create(t,{appName:n.name})}function Ka(n){return uT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mp(n,...t){if(typeof n!="string"){const i=t[0],o=[...t.slice(1)];return o[0]&&(o[0].appName=n.name),n._errorFactory.create(i,...o)}return lT.create(n,...t)}function ut(n,t,...i){if(!n)throw mp(t,...i)}function ea(n){const t="INTERNAL ASSERTION FAILED: "+n;throw du(t),new Error(t)}function la(n,t){n||ea(t)}/**
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
 */function fh(){return typeof self<"u"&&self.location?.href||""}function Uk(){return ob()==="http:"||ob()==="https:"}function ob(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Lk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uk()||KO()||"connection"in navigator)?navigator.onLine:!0}function Ik(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ds{constructor(t,i){this.shortDelay=t,this.longDelay=i,la(i>t,"Short delay should be less than long delay!"),this.isMobile=YO()||$O()}get(){return Lk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */const Bk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Vk=new Ds(3e4,6e4);function Ni(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function Wa(n,t,i,o,l={}){return fT(n,l,async()=>{let c={},f={};o&&(t==="GET"?f=o:c={body:JSON.stringify(o)});const p=Cs({key:n.config.apiKey,...f}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const m={method:t,headers:h,...c};return XO()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&jr(n.emulatorConfig.host)&&(m.credentials="include"),cT.fetch()(await dT(n,n.config.apiHost,i,p),m)})}async function fT(n,t,i){n._canInitEmulator=!1;const o={...Bk,...t};try{const l=new jk(n),c=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw iu(n,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const p=c.ok?f.errorMessage:f.error.message,[h,m]=p.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw iu(n,"credential-already-in-use",f);if(h==="EMAIL_EXISTS")throw iu(n,"email-already-in-use",f);if(h==="USER_DISABLED")throw iu(n,"user-disabled",f);const g=o[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw uT(n,g,m);xn(n,g)}}catch(l){if(l instanceof ca)throw l;xn(n,"network-request-failed",{message:String(l)})}}async function Vu(n,t,i,o,l={}){const c=await Wa(n,t,i,o,l);return"mfaPendingCredential"in c&&xn(n,"multi-factor-auth-required",{_serverResponse:c}),c}async function dT(n,t,i,o){const l=`${t}${i}?${o}`,c=n,f=c.config.emulator?gp(n.config,l):`${n.config.apiScheme}://${l}`;return zk.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}function Hk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,o)=>{this.timer=setTimeout(()=>o(Nn(this.auth,"network-request-failed")),Vk.get())})}}function iu(n,t,i){const o={appName:n.name};i.email&&(o.email=i.email),i.phoneNumber&&(o.phoneNumber=i.phoneNumber);const l=Nn(n,t,o);return l.customData._tokenResponse=i,l}function sb(n){return n!==void 0&&n.enterprise!==void 0}class qk{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return Hk(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Gk(n,t){return Wa(n,"GET","/v2/recaptchaConfig",Ni(n,t))}/**
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
 */async function Fk(n,t){return Wa(n,"POST","/v1/accounts:delete",t)}async function Ou(n,t){return Wa(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function cs(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Yk(n,t=!1){const i=sn(n),o=await i.getIdToken(t),l=yp(o);ut(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,f=c?.sign_in_provider;return{claims:l,token:o,authTime:cs(Md(l.auth_time)),issuedAtTime:cs(Md(l.iat)),expirationTime:cs(Md(l.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Md(n){return Number(n)*1e3}function yp(n){const[t,i,o]=n.split(".");if(t===void 0||i===void 0||o===void 0)return du("JWT malformed, contained fewer than 3 sections"),null;try{const l=Nx(i);return l?JSON.parse(l):(du("Failed to decode base64 JWT payload"),null)}catch(l){return du("Caught error parsing JWT payload as JSON",l?.toString()),null}}function lb(n){const t=yp(n);return ut(t,"internal-error"),ut(typeof t.exp<"u","internal-error"),ut(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function bs(n,t,i=!1){if(i)return t;try{return await t}catch(o){throw o instanceof ca&&Xk(o)&&n.auth.currentUser===n&&await n.auth.signOut(),o}}function Xk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Kk{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dh{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=cs(this.lastLoginAt),this.creationTime=cs(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cu(n){const t=n.auth,i=await n.getIdToken(),o=await bs(n,Ou(t,{idToken:i}));ut(o?.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=l.providerUserInfo?.length?hT(l.providerUserInfo):[],f=Zk(n.providerData,c),p=n.isAnonymous,h=!(n.email&&l.passwordHash)&&!f?.length,m=p?h:!1,g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new dh(l.createdAt,l.lastLoginAt),isAnonymous:m};Object.assign(n,g)}async function $k(n){const t=sn(n);await Cu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Zk(n,t){return[...n.filter(o=>!t.some(l=>l.providerId===o.providerId)),...t]}function hT(n){return n.map(({providerId:t,...i})=>({providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
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
 */async function Qk(n,t){const i=await fT(n,{},async()=>{const o=Cs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=n.config,f=await dT(n,l,"/v1/token",`key=${c}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:p,body:o};return n.emulatorConfig&&jr(n.emulatorConfig.host)&&(h.credentials="include"),cT.fetch()(f,h)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Wk(n,t){return Wa(n,"POST","/v2/accounts:revokeToken",Ni(n,t))}/**
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
 */class Dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ut(t.idToken,"internal-error"),ut(typeof t.idToken<"u","internal-error"),ut(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):lb(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){ut(t.length!==0,"internal-error");const i=lb(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ut(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:o,refreshToken:l,expiresIn:c}=await Qk(t,i);this.updateTokensAndExpiration(o,l,Number(c))}updateTokensAndExpiration(t,i,o){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(t,i){const{refreshToken:o,accessToken:l,expirationTime:c}=i,f=new Dr;return o&&(ut(typeof o=="string","internal-error",{appName:t}),f.refreshToken=o),l&&(ut(typeof l=="string","internal-error",{appName:t}),f.accessToken=l),c&&(ut(typeof c=="number","internal-error",{appName:t}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return ea("not implemented")}}/**
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
 */function Ba(n,t){ut(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class vn{constructor({uid:t,auth:i,stsTokenManager:o,...l}){this.providerId="firebase",this.proactiveRefresh=new Kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new dh(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const i=await bs(this,this.stsTokenManager.getToken(this.auth,t));return ut(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return Yk(this,t)}reload(){return $k(this)}_assign(t){this!==t&&(ut(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>({...i})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new vn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(t){ut(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let o=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),o=!0),i&&await Cu(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Ka(this.auth));const t=await this.getIdToken();return await bs(this,Fk(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){const o=i.displayName??void 0,l=i.email??void 0,c=i.phoneNumber??void 0,f=i.photoURL??void 0,p=i.tenantId??void 0,h=i._redirectEventId??void 0,m=i.createdAt??void 0,g=i.lastLoginAt??void 0,{uid:y,emailVerified:x,isAnonymous:S,providerData:E,stsTokenManager:A}=i;ut(y&&A,t,"internal-error");const R=Dr.fromJSON(this.name,A);ut(typeof y=="string",t,"internal-error"),Ba(o,t.name),Ba(l,t.name),ut(typeof x=="boolean",t,"internal-error"),ut(typeof S=="boolean",t,"internal-error"),Ba(c,t.name),Ba(f,t.name),Ba(p,t.name),Ba(h,t.name),Ba(m,t.name),Ba(g,t.name);const C=new vn({uid:y,auth:t,email:l,emailVerified:x,displayName:o,isAnonymous:S,photoURL:f,phoneNumber:c,tenantId:p,stsTokenManager:R,createdAt:m,lastLoginAt:g});return E&&Array.isArray(E)&&(C.providerData=E.map(N=>({...N}))),h&&(C._redirectEventId=h),C}static async _fromIdTokenResponse(t,i,o=!1){const l=new Dr;l.updateFromServerResponse(i);const c=new vn({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:o});return await Cu(c),c}static async _fromGetAccountInfoResponse(t,i,o){const l=i.users[0];ut(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?hT(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!c?.length,p=new Dr;p.updateFromIdToken(o);const h=new vn({uid:l.localId,auth:t,stsTokenManager:p,isAnonymous:f}),m={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new dh(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(h,m),h}}/**
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
 */function fb(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(mT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xT(t))return"Blackberry";if(TT(t))return"Webos";if(gT(t))return"Safari";if((t.includes("chrome/")||yT(t))&&!t.includes("edge/"))return"Chrome";if(bT(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=n.match(i);if(o?.length===2)return o[1]}return"Other"}function mT(n=ke()){return/firefox\//i.test(n)}function gT(n=ke()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yT(n=ke()){return/crios\//i.test(n)}function vT(n=ke()){return/iemobile/i.test(n)}function bT(n=ke()){return/android/i.test(n)}function xT(n=ke()){return/blackberry/i.test(n)}function TT(n=ke()){return/webos/i.test(n)}function vp(n=ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Jk(n=ke()){return vp(n)&&!!window.navigator?.standalone}function tM(){return ZO()&&document.documentMode===10}function ST(n=ke()){return vp(n)||bT(n)||TT(n)||xT(n)||/windows phone/i.test(n)||vT(n)}/**
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
 */function ET(n,t=[]){let i;switch(n){case"Browser":i=fb(ke());break;case"Worker":i=`${fb(ke())}-${n}`;break;default:i=n}const o=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${qr}/${o}`}/**
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
 */class eM{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const o=c=>new Promise((f,p)=>{try{const h=t(c);f(h)}catch(h){p(h)}});o.onAbort=i,this.queue.push(o);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const o of this.queue)await o(t),o.onAbort&&i.push(o.onAbort)}catch(o){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o?.message})}}}/**
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
 */async function nM(n,t={}){return Wa(n,"GET","/v2/passwordPolicy",Ni(n,t))}/**
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
 */const aM=6;class iM{constructor(t){const i=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??aM,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,i),this.validatePasswordCharacterOptions(t,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(t,i){const o=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;o&&(i.meetsMinPasswordLength=t.length>=o),l&&(i.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let o;for(let l=0;l<t.length;l++)o=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(t,i,o,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
 */class rM{constructor(t,i,o,l){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=o,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new db(this),this.idTokenSubscription=new db(this),this.beforeStateQueue=new eM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=na(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await kr.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await Ou(this,{idToken:t}),o=await vn._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(o)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(gn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,f=o?._redirectEventId,p=await this.tryRedirectSignIn(t);(!c||c===f)&&p?.user&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ut(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Cu(t)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Ik()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(gn(this.app))return Promise.reject(Ka(this));const i=t?sn(t):null;return i&&ut(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&ut(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Ka(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return gn(this.app)?Promise.reject(Ka(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(na(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await nM(this),i=new iM(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Os("auth","Firebase",t())}onAuthStateChanged(t,i,o){return this.registerStateListener(this.authStateSubscription,t,i,o)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,o){return this.registerStateListener(this.idTokenSubscription,t,i,o)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const o=this.onAuthStateChanged(()=>{o(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(o.tenantId=this.tenantId),await Wk(this,o)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,i){const o=await this.getOrInitRedirectPersistenceManager(i);return t===null?o.removeCurrentUser():o.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&na(t)||this._popupRedirectResolver;ut(i,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[na(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,o,l){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ut(p,this,"internal-error"),p.then(()=>{f||c(this.currentUser)}),typeof i=="function"){const h=t.addObserver(i,o,l);return()=>{f=!0,h()}}else{const h=t.addObserver(i);return()=>{f=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ut(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ET(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&Pk(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Fr(n){return sn(n)}class db{constructor(t){this.auth=t,this.observer=null,this.addObserver=aC(i=>this.observer=i)}get next(){return ut(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oM(n){Hu=n}function wT(n){return Hu.loadJS(n)}function sM(){return Hu.recaptchaEnterpriseScript}function lM(){return Hu.gapiScript}function uM(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class cM{constructor(){this.enterprise=new fM}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class fM{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const dM="recaptcha-enterprise",_T="NO_RECAPTCHA";class hM{constructor(t){this.type=dM,this.auth=Fr(t)}async verify(t="verify",i=!1){async function o(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(f,p)=>{Gk(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const m=new qk(h);return c.tenantId==null?c._agentRecaptchaConfig=m:c._tenantRecaptchaConfigs[c.tenantId]=m,f(m.siteKey)}}).catch(h=>{p(h)})})}function l(c,f,p){const h=window.grecaptcha;sb(h)?h.enterprise.ready(()=>{h.enterprise.execute(c,{action:t}).then(m=>{f(m)}).catch(()=>{f(_T)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new cM().execute("siteKey",{action:"verify"}):new Promise((c,f)=>{o(this.auth).then(p=>{if(!i&&sb(window.grecaptcha))l(p,c,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let h=sM();h.length!==0&&(h+=p),wT(h).then(()=>{l(p,c,f)}).catch(m=>{f(m)})}}).catch(p=>{f(p)})})}}async function hb(n,t,i,o=!1,l=!1){const c=new hM(n);let f;if(l)f=_T;else try{f=await c.verify(i)}catch{f=await c.verify(i,!0)}const p={...t};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const h=p.phoneEnrollmentInfo.phoneNumber,m=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:m,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const h=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return o?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function pb(n,t,i,o,l){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await hb(n,t,i,i==="getOobCode");return o(n,c)}else return o(n,t).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await hb(n,t,i,i==="getOobCode");return o(n,f)}else return Promise.reject(c)})}/**
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
 */function pM(n,t){const i=ip(n,"auth");if(i.isInitialized()){const l=i.getImmediate(),c=i.getOptions();if(Ur(c,t??{}))return l;xn(l,"already-initialized")}return i.initialize({options:t})}function mM(n,t){const i=t?.persistence||[],o=(Array.isArray(i)?i:[i]).map(na);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(o,t?.popupRedirectResolver)}function gM(n,t,i){const o=Fr(n);ut(/^https?:\/\//.test(t),o,"invalid-emulator-scheme");const l=!1,c=AT(t),{host:f,port:p}=yM(t),h=p===null?"":`:${p}`,m={url:`${c}//${f}${h}/`},g=Object.freeze({host:f,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!o._canInitEmulator){ut(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),ut(Ur(m,o.config.emulator)&&Ur(g,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=m,o.emulatorConfig=g,o.settings.appVerificationDisabledForTesting=!0,jr(f)?(Ix(`${c}//${f}${h}`),Bx("Auth",!0)):vM()}function AT(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function yM(n){const t=AT(n),i=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!i)return{host:"",port:null};const o=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(o);if(l){const c=l[1];return{host:c,port:mb(o.substr(c.length+1))}}else{const[c,f]=o.split(":");return{host:c,port:mb(f)}}}function mb(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function vM(){function n(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class bp{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return ea("not implemented")}_getIdTokenResponse(t){return ea("not implemented")}_linkToIdToken(t,i){return ea("not implemented")}_getReauthenticationResolver(t){return ea("not implemented")}}async function bM(n,t){return Wa(n,"POST","/v1/accounts:signUp",t)}/**
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
 */async function xM(n,t){return Vu(n,"POST","/v1/accounts:signInWithPassword",Ni(n,t))}/**
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
 */async function TM(n,t){return Vu(n,"POST","/v1/accounts:signInWithEmailLink",Ni(n,t))}async function SM(n,t){return Vu(n,"POST","/v1/accounts:signInWithEmailLink",Ni(n,t))}/**
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
 */class xs extends bp{constructor(t,i,o,l=null){super("password",o),this._email=t,this._password=i,this._tenantId=l}static _fromEmailAndPassword(t,i){return new xs(t,i,"password")}static _fromEmailAndCode(t,i,o=null){return new xs(t,i,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pb(t,i,"signInWithPassword",xM);case"emailLink":return TM(t,{email:this._email,oobCode:this._password});default:xn(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const o={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pb(t,o,"signUpPassword",bM);case"emailLink":return SM(t,{idToken:i,email:this._email,oobCode:this._password});default:xn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */const EM="http://localhost";class Di extends bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Di(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):xn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:o,signInMethod:l,...c}=i;if(!o||!l)return null;const f=new Di(o,l);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(t){const i=this.buildRequest();return Mr(t,i)}_linkToIdToken(t,i){const o=this.buildRequest();return o.idToken=i,Mr(t,o)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Mr(t,i)}buildRequest(){const t={requestUri:EM,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=Cs(i)}return t}}/**
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
 */function wM(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _M(n){const t=ts(es(n)).link,i=t?ts(es(t)).deep_link_id:null,o=ts(es(n)).deep_link_id;return(o?ts(es(o)).link:null)||o||i||t||n}class xp{constructor(t){const i=ts(es(t)),o=i.apiKey??null,l=i.oobCode??null,c=wM(i.mode??null);ut(o&&l&&c,"argument-error"),this.apiKey=o,this.operation=c,this.code=l,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(t){const i=_M(t);try{return new xp(i)}catch{return null}}}/**
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
 */class Yr{constructor(){this.providerId=Yr.PROVIDER_ID}static credential(t,i){return xs._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const o=xp.parseLink(i);return ut(o,"argument-error"),xs._fromEmailAndCode(t,o.code,o.tenantId)}}Yr.PROVIDER_ID="password";Yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ks extends RT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ha extends ks{constructor(){super("facebook.com")}static credential(t){return Di._fromParams({providerId:Ha.PROVIDER_ID,signInMethod:Ha.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ha.credentialFromTaggedObject(t)}static credentialFromError(t){return Ha.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ha.credential(t.oauthAccessToken)}catch{return null}}}Ha.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ha.PROVIDER_ID="facebook.com";/**
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
 */class ja extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Di._fromParams({providerId:ja.PROVIDER_ID,signInMethod:ja.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return ja.credentialFromTaggedObject(t)}static credentialFromError(t){return ja.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:o}=t;if(!i&&!o)return null;try{return ja.credential(i,o)}catch{return null}}}ja.GOOGLE_SIGN_IN_METHOD="google.com";ja.PROVIDER_ID="google.com";/**
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
 */class qa extends ks{constructor(){super("github.com")}static credential(t){return Di._fromParams({providerId:qa.PROVIDER_ID,signInMethod:qa.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return qa.credentialFromTaggedObject(t)}static credentialFromError(t){return qa.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return qa.credential(t.oauthAccessToken)}catch{return null}}}qa.GITHUB_SIGN_IN_METHOD="github.com";qa.PROVIDER_ID="github.com";/**
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
 */class Ga extends ks{constructor(){super("twitter.com")}static credential(t,i){return Di._fromParams({providerId:Ga.PROVIDER_ID,signInMethod:Ga.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return Ga.credentialFromTaggedObject(t)}static credentialFromError(t){return Ga.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:o}=t;if(!i||!o)return null;try{return Ga.credential(i,o)}catch{return null}}}Ga.TWITTER_SIGN_IN_METHOD="twitter.com";Ga.PROVIDER_ID="twitter.com";/**
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
 */class Du extends ca{constructor(t,i,o,l){super(i.code,i.message),this.operationType=o,this.user=l,Object.setPrototypeOf(this,Du.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(t,i,o,l){return new Du(t,i,o,l)}}function OT(n,t,i,o){return(t==="reauthenticate"?i._getReauthenticationResolver(n):i._getIdTokenResponse(n)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Du._fromErrorAndOperation(n,c,t,o):c})}async function AM(n,t,i=!1){const o=await bs(n,t._linkToIdToken(n.auth,await n.getIdToken()),i);return Ir._forOperation(n,"link",o)}/**
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
 */async function RM(n,t,i=!1){const{auth:o}=n;if(gn(o.app))return Promise.reject(Ka(o));const l="reauthenticate";try{const c=await bs(n,OT(o,l,t,n),i);ut(c.idToken,o,"internal-error");const f=yp(c.idToken);ut(f,o,"internal-error");const{sub:p}=f;return ut(n.uid===p,o,"user-mismatch"),Ir._forOperation(n,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&xn(o,"user-mismatch"),c}}/**
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
 */async function CT(n,t,i=!1){if(gn(n.app))return Promise.reject(Ka(n));const o="signIn",l=await OT(n,o,t),c=await Ir._fromIdTokenResponse(n,o,l);return i||await n._updateCurrentUser(c.user),c}async function OM(n,t){return CT(Fr(n),t)}/**
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
 */async function CM(n){const t=Fr(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function DM(n,t,i){return gn(n.app)?Promise.reject(Ka(n)):OM(sn(n),Yr.credential(t,i)).catch(async o=>{throw o.code==="auth/password-does-not-meet-requirements"&&CM(n),o})}function kM(n,t,i,o){return sn(n).onIdTokenChanged(t,i,o)}function MM(n,t,i){return sn(n).beforeAuthStateChanged(t,i)}const ku="__sak";/**
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
 */const NM=1e3,PM=10;class kT extends DT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ST(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const o=this.storage.getItem(i),l=this.localCache[i];o!==l&&t(i,l,o)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((f,p,h)=>{this.notifyListeners(f,h)});return}const o=t.key;i?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(o);!i&&this.localCache[o]===f||this.notifyListeners(o,f)},c=this.storage.getItem(o);tM()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,PM):l()}notifyListeners(t,i){this.localCache[t]=i;const o=this.listeners[t];if(o)for(const l of Array.from(o))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:o}),!0)})},NM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}kT.type="LOCAL";const UM=kT;/**
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
 */function LM(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class ju{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(l=>l.isListeningto(t));if(i)return i;const o=new ju(t);return this.receivers.push(o),o}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:o,eventType:l,data:c}=i.data,f=this.handlersMap[l];if(!f?.size)return;i.ports[0].postMessage({status:"ack",eventId:o,eventType:l});const p=Array.from(f).map(async m=>m(i.origin,c)),h=await LM(p);i.ports[0].postMessage({status:"done",eventId:o,eventType:l,response:h})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ju.receivers=[];/**
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
 */class IM{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,o=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,f;return new Promise((p,h)=>{const m=Tp("",20);l.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},o);f={messageChannel:l,onMessage(y){const x=y;if(x.data.eventId===m)switch(x.data.status){case"ack":clearTimeout(g),c=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(x.data.response);break;default:clearTimeout(g),clearTimeout(c),h(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:m,data:i},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Pn(){return window}function BM(n){Pn().location.href=n}/**
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
 */function PT(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function zM(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VM(){return navigator?.serviceWorker?.controller||null}function HM(){return PT()?self:null}/**
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
 */const UT="firebaseLocalStorageDb",jM=1,Mu="firebaseLocalStorage",LT="fbase_key";class Ms{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function qu(n,t){return n.transaction([Mu],t?"readwrite":"readonly").objectStore(Mu)}function qM(){const n=indexedDB.deleteDatabase(UT);return new Ms(n).toPromise()}function hh(){const n=indexedDB.open(UT,jM);return new Promise((t,i)=>{n.addEventListener("error",()=>{i(n.error)}),n.addEventListener("upgradeneeded",()=>{const o=n.result;try{o.createObjectStore(Mu,{keyPath:LT})}catch(l){i(l)}}),n.addEventListener("success",async()=>{const o=n.result;o.objectStoreNames.contains(Mu)?t(o):(o.close(),await qM(),t(await hh()))})})}async function yb(n,t,i){const o=qu(n,!0).put({[LT]:t,value:i});return new Ms(o).toPromise()}async function GM(n,t){const i=qu(n,!1).get(t),o=await new Ms(i).toPromise();return o===void 0?null:o.value}function vb(n,t){const i=qu(n,!0).delete(t);return new Ms(i).toPromise()}const FM=800,YM=3;class IT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hh(),this.db)}async _withRetries(t){let i=0;for(;;)try{const o=await this._openDb();return await t(o)}catch(o){if(i++>YM)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return PT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ju._getInstance(HM()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await zM(),!this.activeServiceWorker)return;this.sender=new IM(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||VM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hh();return await yb(t,ku,"1"),await vb(t,ku),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(o=>yb(o,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(o=>GM(o,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>vb(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=qu(l,!1).getAll();return new Ms(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],o=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)o.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!o.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(t,i){this.localCache[t]=i;const o=this.listeners[t];if(o)for(const l of Array.from(o))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IT.type="LOCAL";const XM=IT;new Ds(3e4,6e4);/**
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
 */function KM(n,t){return t?na(t):(ut(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Sp extends bp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Mr(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Mr(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Mr(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function $M(n){return CT(n.auth,new Sp(n),n.bypassAuthState)}function ZM(n){const{auth:t,user:i}=n;return ut(i,t,"internal-error"),RM(i,new Sp(n),n.bypassAuthState)}async function QM(n){const{auth:t,user:i}=n;return ut(i,t,"internal-error"),AM(i,new Sp(n),n.bypassAuthState)}/**
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
 */class BT{constructor(t,i,o,l,c=!1){this.auth=t,this.resolver=o,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:o,postBody:l,tenantId:c,error:f,type:p}=t;if(f){this.reject(f);return}const h={auth:this.auth,requestUri:i,sessionId:o,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(h))}catch(m){this.reject(m)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return $M;case"linkViaPopup":case"linkViaRedirect":return QM;case"reauthViaPopup":case"reauthViaRedirect":return ZM;default:xn(this.auth,"internal-error")}}resolve(t){la(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){la(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const WM=new Ds(2e3,1e4);class Or extends BT{constructor(t,i,o,l,c){super(t,i,l,c),this.provider=o,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ut(t,this.auth,"internal-error"),t}async onExecution(){la(this.filter.length===1,"Popup operations only handle one event");const t=Tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,WM.get())};t()}}Or.currentPopupAction=null;/**
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
 */const JM="pendingRedirect",pu=new Map;class t3 extends BT{constructor(t,i,o=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o),this.eventId=null}async execute(){let t=pu.get(this.auth._key());if(!t){try{const o=await e3(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(o)}catch(i){t=()=>Promise.reject(i)}pu.set(this.auth._key(),t)}return this.bypassAuthState||pu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function e3(n,t){const i=i3(t),o=a3(n);if(!await o._isAvailable())return!1;const l=await o._get(i)==="true";return await o._remove(i),l}function n3(n,t){pu.set(n._key(),t)}function a3(n){return na(n._redirectPersistence)}function i3(n){return hu(JM,n.config.apiKey,n.name)}async function r3(n,t,i=!1){if(gn(n.app))return Promise.reject(Ka(n));const o=Fr(n),l=KM(o,t),f=await new t3(o,l,i).execute();return f&&!i&&(delete f.user._redirectEventId,await o._persistUserIfCurrent(f.user),await o._setRedirectUser(null,t)),f}/**
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
 */const o3=600*1e3;class s3{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(t,o)&&(i=!0,this.sendToConsumer(t,o),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!l3(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){if(t.error&&!zT(t)){const o=t.error.code?.split("auth/")[1]||"internal-error";i.onError(Nn(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const o=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&o}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=o3&&this.cachedEventUids.clear(),this.cachedEventUids.has(bb(t))}saveEventToCache(t){this.cachedEventUids.add(bb(t)),this.lastProcessedEventTime=Date.now()}}function bb(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function zT({type:n,error:t}){return n==="unknown"&&t?.code==="auth/no-auth-event"}function l3(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zT(n);default:return!1}}/**
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
 */async function u3(n,t={}){return Wa(n,"GET","/v1/projects",t)}/**
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
 */const c3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,f3=/^https?/;async function d3(n){if(n.config.emulator)return;const{authorizedDomains:t}=await u3(n);for(const i of t)try{if(h3(i))return}catch{}xn(n,"unauthorized-domain")}function h3(n){const t=fh(),{protocol:i,hostname:o}=new URL(t);if(n.startsWith("chrome-extension://")){const f=new URL(n);return f.hostname===""&&o===""?i==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&f.hostname===o}if(!f3.test(i))return!1;if(c3.test(n))return o===n;const l=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(o)}/**
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
 */const p3=new Ds(3e4,6e4);function xb(){const n=Pn().___jsl;if(n?.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let i=0;i<n.CP.length;i++)n.CP[i]=null}}function m3(n){return new Promise((t,i)=>{function o(){xb(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xb(),i(Nn(n,"network-request-failed"))},timeout:p3.get()})}if(Pn().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Pn().gapi?.load)o();else{const l=uM("iframefcb");return Pn()[l]=()=>{gapi.load?o():i(Nn(n,"network-request-failed"))},wT(`${lM()}?onload=${l}`).catch(c=>i(c))}}).catch(t=>{throw mu=null,t})}let mu=null;function g3(n){return mu=mu||m3(n),mu}/**
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
 */const y3=new Ds(5e3,15e3),v3="__/auth/iframe",b3="emulator/auth/iframe",x3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T3=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S3(n){const t=n.config;ut(t.authDomain,n,"auth-domain-config-required");const i=t.emulator?gp(t,b3):`https://${n.config.authDomain}/${v3}`,o={apiKey:t.apiKey,appName:n.name,v:qr},l=T3.get(n.config.apiHost);l&&(o.eid=l);const c=n._getFrameworks();return c.length&&(o.fw=c.join(",")),`${i}?${Cs(o).slice(1)}`}async function E3(n){const t=await g3(n),i=Pn().gapi;return ut(i,n,"internal-error"),t.open({where:document.body,url:S3(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:x3,dontclear:!0},o=>new Promise(async(l,c)=>{await o.restyle({setHideOnLeave:!1});const f=Nn(n,"network-request-failed"),p=Pn().setTimeout(()=>{c(f)},y3.get());function h(){Pn().clearTimeout(p),l(o)}o.ping(h).then(h,()=>{c(f)})}))}/**
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
 */const w3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_3=500,A3=600,R3="_blank",O3="http://localhost";class Tb{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function C3(n,t,i,o=_3,l=A3){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-o)/2,0).toString();let p="";const h={...w3,width:o.toString(),height:l.toString(),top:c,left:f},m=ke().toLowerCase();i&&(p=yT(m)?R3:i),mT(m)&&(t=t||O3,h.scrollbars="yes");const g=Object.entries(h).reduce((x,[S,E])=>`${x}${S}=${E},`,"");if(Jk(m)&&p!=="_self")return D3(t||"",p),new Tb(null);const y=window.open(t||"",p,g);ut(y,n,"popup-blocked");try{y.focus()}catch{}return new Tb(y)}function D3(n,t){const i=document.createElement("a");i.href=n,i.target=t;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(o)}/**
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
 */const k3="__/auth/handler",M3="emulator/auth/handler",N3=encodeURIComponent("fac");async function Sb(n,t,i,o,l,c){ut(n.config.authDomain,n,"auth-domain-config-required"),ut(n.config.apiKey,n,"invalid-api-key");const f={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:o,v:qr,eventId:l};if(t instanceof RT){t.setDefaultLanguage(n.languageCode),f.providerId=t.providerId||"",nC(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,y]of Object.entries({}))f[g]=y}if(t instanceof ks){const g=t.getScopes().filter(y=>y!=="");g.length>0&&(f.scopes=g.join(","))}n.tenantId&&(f.tid=n.tenantId);const p=f;for(const g of Object.keys(p))p[g]===void 0&&delete p[g];const h=await n._getAppCheckToken(),m=h?`#${N3}=${encodeURIComponent(h)}`:"";return`${P3(n)}?${Cs(p).slice(1)}${m}`}function P3({config:n}){return n.emulator?gp(n,M3):`https://${n.authDomain}/${k3}`}/**
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
 */const Nd="webStorageSupport";class U3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NT,this._completeRedirectFn=r3,this._overrideRedirectResult=n3}async _openPopup(t,i,o,l){la(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Sb(t,i,o,fh(),l);return C3(t,c,Tp())}async _openRedirect(t,i,o,l){await this._originValidation(t);const c=await Sb(t,i,o,fh(),l);return BM(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:l,promise:c}=this.eventManagers[i];return l?Promise.resolve(l):(la(c,"If manager is not set, promise should be"),c)}const o=this.initAndGetManager(t);return this.eventManagers[i]={promise:o},o.catch(()=>{delete this.eventManagers[i]}),o}async initAndGetManager(t){const i=await E3(t),o=new s3(t);return i.register("authEvent",l=>(ut(l?.authEvent,t,"invalid-auth-event"),{status:o.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:o},this.iframes[t._key()]=i,o}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(Nd,{type:Nd},l=>{const c=l?.[0]?.[Nd];c!==void 0&&i(!!c),xn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=d3(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return ST()||gT()||vp()}}const L3=U3;var Eb="@firebase/auth",wb="1.11.0";/**
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
 */class I3{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(o=>{t(o?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ut(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function B3(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function z3(n){Lr(new Oi("auth",(t,{options:i})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=o.options;ut(f&&!f.includes(":"),"invalid-api-key",{appName:o.name});const h={apiKey:f,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ET(n)},m=new rM(o,l,c,h);return mM(m,i),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,o)=>{t.getProvider("auth-internal").initialize()})),Lr(new Oi("auth-internal",t=>{const i=Fr(t.getProvider("auth").getImmediate());return(o=>new I3(o))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xa(Eb,wb,B3(n)),Xa(Eb,wb,"esm2020")}/**
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
 */const V3=300,H3=Lx("authIdTokenMaxAge")||V3;let _b=null;const j3=n=>async t=>{const i=t&&await t.getIdTokenResult(),o=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(o&&o>H3)return;const l=i?.token;_b!==l&&(_b=l,await fetch(n,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function q3(n=qx()){const t=ip(n,"auth");if(t.isInitialized())return t.getImmediate();const i=pM(n,{popupRedirectResolver:L3,persistence:[XM,UM,NT]}),o=Lx("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(o,location.origin);if(location.origin===c.origin){const f=j3(c.toString());MM(i,f,()=>f(i.currentUser)),kM(i,p=>f(p))}}const l=Px("auth");return l&&gM(i,`http://${l}`),i}function G3(){return document.getElementsByTagName("head")?.[0]??document}oM({loadJS(n){return new Promise((t,i)=>{const o=document.createElement("script");o.setAttribute("src",n),o.onload=t,o.onerror=l=>{const c=Nn("internal-error");c.customData=l,i(c)},o.type="text/javascript",o.charset="UTF-8",G3().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});z3("Browser");const F3={apiKey:"AIzaSyAkLOx2lwDb-3HLPyrbr6hWH-yHn4Ly-wc",authDomain:"pi-sem6.firebaseapp.com",projectId:"pi-sem6",storageBucket:"pi-sem6.firebasestorage.app",messagingSenderId:"829276571631",appId:"1:829276571631:web:90227c4dedc85f75cfd81a",measurementId:"G-ZZVKB3RCPL"},VT=jx(F3),HT=q3(VT),Xr=Rk(VT);async function Y3(n){try{const t=Gr(Xr,`construcoes/${n}`),i=await pp(t);return i.items.length>0||i.prefixes.length>0}catch(t){return console.error("Erro ao verificar pasta:",t),!1}}async function X3(n,t,i=!1){if(!n||!t)throw new Error("Arquivo ou código inválido");if(!await Y3(t)&&!i)throw new Error(`A pasta "${t}" não existe. Apenas o administrador pode criá-la.`);try{const l=Gr(Xr,`construcoes/${t}/${n.name}`);return await rT(l,n),await oT(l)}catch(l){throw console.error("Erro no upload da imagem:",l),l}}async function ph(){try{const n=Gr(Xr,"construcoes");return(await pp(n)).prefixes.map(i=>i.name)}catch(n){throw console.error("Erro ao listar pastas:",n),n}}async function K3(n){if(!n)throw new Error("Código inválido para criação de pasta");try{const t=Gr(Xr,`construcoes/${n}/.placeholder`),i=new Blob([""],{type:"text/plain"});await rT(t,i),console.log(`Pasta '${n}' criada com sucesso.`)}catch(t){throw console.error("Erro ao criar nova pasta:",t),t}}async function $3(n){const t=Gr(Xr,`construcoes/${n}`);return(await pp(t)).items.map(o=>o.name)}async function Ab(n,t){const i=Gr(Xr,`construcoes/${n}/${t}`);return await oT(i)}function Z3({onUploadFile:n,onUploadImage:t,isLoading:i}){const o=vh(),[l,c]=O.useState(K.jsx(Zl,{size:48,color:"white",style:{position:"absolute"}})),[f,p]=O.useState(K.jsx(Zl,{size:48,color:"white",style:{position:"absolute"}})),[h,m]=O.useState(!1),[g,y]=O.useState(!1),[x,S]=O.useState([]),[E,A]=O.useState(""),[R,C]=O.useState([]),[N,I]=O.useState(""),[X,V]=O.useState("");O.useEffect(()=>{async function F(){try{const Z=await ph();S(Z)}catch(Z){console.error("Erro ao listar pastas:",Z)}}F()},[]),O.useEffect(()=>{async function F(){if(!E){C([]),I(""),V("");return}try{const Z=await $3(E);C(Z)}catch(Z){console.error("Erro ao listar imagens:",Z)}}F()},[E]);async function J(F){c(K.jsx(jv,{color:"white",size:"medium"}));try{const Z=F.target.files[0];if(!Z)return;await n(Z),m(!0),g&&o("/viewer")}catch(Z){console.error("Erro no upload de arquivo:",Z),alert("Erro ao enviar arquivo.")}finally{c(K.jsx(Zl,{size:48,color:"white",style:{position:"absolute"}}))}}async function $(){if(!N)return alert("Selecione uma imagem primeiro!");p(K.jsx(jv,{color:"white",size:"medium"}));try{const F=await Ab(E,N);await t(F),y(!0),h&&o("/viewer")}catch(F){console.error("Erro ao carregar imagem:",F),alert("Erro ao selecionar imagem.")}finally{p(K.jsx(Zl,{size:48,color:"white",style:{position:"absolute"}}))}}return O.useEffect(()=>{async function F(){if(!E||!N){V("");return}try{const Z=await Ab(E,N);V(Z)}catch(Z){console.error("Erro ao gerar pré-visualização:",Z)}}F()},[N,E]),K.jsxs(ss.div,{className:"container",initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.7},children:[K.jsx("div",{className:"divisor"}),K.jsxs("div",{className:"collum",children:[K.jsx("h2",{children:"Insira o modelo da construção"}),K.jsxs(ss.div,{whileHover:{scale:1.03},whileTap:{scale:.97},className:"select-box",children:[K.jsx("label",{htmlFor:"file_upload"}),K.jsx("input",{type:"file",id:"file_upload",onChange:J}),K.jsx("div",{className:"icon-container",children:l})]})]}),K.jsx("div",{className:"divisor"}),K.jsxs("div",{className:"collum",children:[K.jsx("h2",{children:"Selecione a foto da construção existente"}),K.jsxs("select",{className:"photo-upload-input",value:E,onChange:F=>{A(F.target.value),I(""),V("")},children:[K.jsx("option",{value:"",children:"Selecione uma construção"}),x.map(F=>K.jsx("option",{value:F,children:F},F))]}),E&&K.jsxs("select",{className:"photo-upload-input",value:N,onChange:F=>I(F.target.value),children:[K.jsx("option",{value:"",children:"Selecione uma imagem"}),R.map(F=>K.jsx("option",{value:F,children:F},F))]}),X&&K.jsx("div",{className:"preview-container",style:{marginTop:"10px",textAlign:"center"},children:K.jsx("img",{src:X,alt:"Pré-visualização",style:{width:"220px",height:"auto",borderRadius:"8px",boxShadow:"0 0 10px rgba(0,0,0,0.3)"}})}),K.jsx(ss.div,{whileHover:{scale:1.03},whileTap:{scale:.97},className:"select-box",onClick:$,style:{cursor:"pointer"},children:K.jsx("div",{className:"icon-container",children:f})})]}),K.jsx("div",{className:"divisor"})]})}function Q3({urn:n,imageUrl:t,screenshotUrl:i,setScreenshotUrl:o}){const l=O.useRef(null),[c,f]=O.useState(null),[p,h]=O.useState(!1),[m,g]=O.useState(null);O.useEffect(()=>{const x={env:"AutodeskProduction",getAccessToken(S,E){fetch("https://pii-6-sem.onrender.com/api/token").then(async A=>{const R=await A.text();try{const C=JSON.parse(R);C.access_token?S(C.access_token,C.expires_in):(console.error("Token inválido:",C),E&&E("Token inválido"))}catch{console.error("Resposta inesperada do servidor:",R),E&&E("Resposta inesperada do servidor")}})}};return Autodesk.Viewing.Initializer(x,()=>{const S=new Autodesk.Viewing.GuiViewer3D(l.current);S.start(),g(S),console.log("Viewer inicializado!"),n&&Autodesk.Viewing.Document.load("urn:"+n,E=>{const A=E.getRoot().getDefaultGeometry();S.loadDocumentNode(E,A).then(()=>{console.log("Modelo carregado com sucesso!")})},E=>console.error("Erro ao carregar documento:",E))}),()=>m&&m.finish()},[n]);async function y(){if(!m){alert("Viewer ainda não foi inicializado!");return}if(!t){alert("Envie uma imagem antes de comparar!");return}h(!0),f(null),m.getScreenShot(800,600,async x=>{try{o(x),console.log("Screenshot capturado!");const S=new FormData,E=await fetch(t).then(N=>N.blob()),A=await fetch(x).then(N=>N.blob());S.append("img1",E,"imagem1.jpg"),S.append("img2",A,"imagem2.jpg");const C=await(await fetch("https://pii-6-sem.onrender.com/api/compare",{method:"POST",body:S})).json();C.similarity?(f(C.similarity),console.log("Resultado da comparação:",C.similarity)):console.error("Falha ao obter similaridade:",C)}catch(S){console.error("Erro ao comparar imagens:",S)}finally{h(!1)}})}return K.jsxs("div",{style:{textAlign:"center"},children:[K.jsx("div",{className:"viewer-container",style:{height:"600px",border:"1px solid #ccc",borderRadius:"10px",overflow:"hidden"},children:K.jsx("div",{ref:l,className:"viewer",style:{height:"100%",width:"100%"}})}),t&&K.jsxs("div",{style:{marginTop:"25px"},children:[K.jsx("h4",{children:"Imagem enviada:"}),K.jsx("img",{src:t,alt:"Imagem enviada",style:{maxWidth:"400px",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0.3)"}})]}),i&&K.jsxs("div",{style:{marginTop:"25px"},children:[K.jsx("h4",{children:"Último screenshot:"}),K.jsx("img",{src:i,alt:"Screenshot do modelo",style:{maxWidth:"500px",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0.3)"}})]}),K.jsx("div",{style:{marginTop:"30px"},children:K.jsx("button",{onClick:y,disabled:!t||p,style:{padding:"12px 25px",background:"#4caf50",color:"white",border:"none",borderRadius:"8px",fontSize:"16px",cursor:"pointer"},children:p?"Comparando...":"Comparar Imagens"})}),c&&K.jsxs("div",{style:{marginTop:"40px"},children:[K.jsx("h3",{children:"Similaridade entre as imagens"}),K.jsx("div",{style:{width:"400px",height:"30px",borderRadius:"10px",background:"#ddd",margin:"0 auto",overflow:"hidden",position:"relative"},children:K.jsx("div",{style:{width:`${c.replace("%","")}%`,height:"100%",background:"linear-gradient(90deg, #4caf50, #8bc34a)",color:"white",fontWeight:"bold",lineHeight:"30px",transition:"width 1s ease-in-out"},children:c})})]})]})}async function W3(n,t){return await DM(HT,n,t)}function J3(){return HT.currentUser}function t4(n){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}const e4=n=>{switch(n){case"success":return i4;case"info":return o4;case"warning":return r4;case"error":return s4;default:return null}},n4=Array(12).fill(0),a4=({visible:n,className:t})=>Y.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":n},Y.createElement("div",{className:"sonner-spinner"},n4.map((i,o)=>Y.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),i4=Y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Y.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),r4=Y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},Y.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),o4=Y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Y.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),s4=Y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Y.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),l4=Y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},Y.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Y.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),u4=()=>{const[n,t]=Y.useState(document.hidden);return Y.useEffect(()=>{const i=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",i),()=>window.removeEventListener("visibilitychange",i)},[]),n};let mh=1;class c4{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{const i=this.subscribers.indexOf(t);this.subscribers.splice(i,1)}),this.publish=t=>{this.subscribers.forEach(i=>i(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var i;const{message:o,...l}=t,c=typeof t?.id=="number"||((i=t.id)==null?void 0:i.length)>0?t.id:mh++,f=this.toasts.find(h=>h.id===c),p=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(c)&&this.dismissedToasts.delete(c),f?this.toasts=this.toasts.map(h=>h.id===c?(this.publish({...h,...t,id:c,title:o}),{...h,...t,id:c,dismissible:p,title:o}):h):this.addToast({title:o,...l,dismissible:p,id:c}),c},this.dismiss=t=>(t?(this.dismissedToasts.add(t),requestAnimationFrame(()=>this.subscribers.forEach(i=>i({id:t,dismiss:!0})))):this.toasts.forEach(i=>{this.subscribers.forEach(o=>o({id:i.id,dismiss:!0}))}),t),this.message=(t,i)=>this.create({...i,message:t}),this.error=(t,i)=>this.create({...i,message:t,type:"error"}),this.success=(t,i)=>this.create({...i,type:"success",message:t}),this.info=(t,i)=>this.create({...i,type:"info",message:t}),this.warning=(t,i)=>this.create({...i,type:"warning",message:t}),this.loading=(t,i)=>this.create({...i,type:"loading",message:t}),this.promise=(t,i)=>{if(!i)return;let o;i.loading!==void 0&&(o=this.create({...i,promise:t,type:"loading",message:i.loading,description:typeof i.description!="function"?i.description:void 0}));const l=Promise.resolve(t instanceof Function?t():t);let c=o!==void 0,f;const p=l.then(async m=>{if(f=["resolve",m],Y.isValidElement(m))c=!1,this.create({id:o,type:"default",message:m});else if(d4(m)&&!m.ok){c=!1;const y=typeof i.error=="function"?await i.error(`HTTP error! status: ${m.status}`):i.error,x=typeof i.description=="function"?await i.description(`HTTP error! status: ${m.status}`):i.description,E=typeof y=="object"&&!Y.isValidElement(y)?y:{message:y};this.create({id:o,type:"error",description:x,...E})}else if(m instanceof Error){c=!1;const y=typeof i.error=="function"?await i.error(m):i.error,x=typeof i.description=="function"?await i.description(m):i.description,E=typeof y=="object"&&!Y.isValidElement(y)?y:{message:y};this.create({id:o,type:"error",description:x,...E})}else if(i.success!==void 0){c=!1;const y=typeof i.success=="function"?await i.success(m):i.success,x=typeof i.description=="function"?await i.description(m):i.description,E=typeof y=="object"&&!Y.isValidElement(y)?y:{message:y};this.create({id:o,type:"success",description:x,...E})}}).catch(async m=>{if(f=["reject",m],i.error!==void 0){c=!1;const g=typeof i.error=="function"?await i.error(m):i.error,y=typeof i.description=="function"?await i.description(m):i.description,S=typeof g=="object"&&!Y.isValidElement(g)?g:{message:g};this.create({id:o,type:"error",description:y,...S})}}).finally(()=>{c&&(this.dismiss(o),o=void 0),i.finally==null||i.finally.call(i)}),h=()=>new Promise((m,g)=>p.then(()=>f[0]==="reject"?g(f[1]):m(f[1])).catch(g));return typeof o!="string"&&typeof o!="number"?{unwrap:h}:Object.assign(o,{unwrap:h})},this.custom=(t,i)=>{const o=i?.id||mh++;return this.create({jsx:t(o),id:o,...i}),o},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const Le=new c4,f4=(n,t)=>{const i=t?.id||mh++;return Le.addToast({title:n,...t,id:i}),i},d4=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",h4=f4,p4=()=>Le.toasts,m4=()=>Le.getActiveToasts(),Rb=Object.assign(h4,{success:Le.success,info:Le.info,warning:Le.warning,error:Le.error,custom:Le.custom,message:Le.message,promise:Le.promise,dismiss:Le.dismiss,loading:Le.loading},{getHistory:p4,getToasts:m4});t4("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function ru(n){return n.label!==void 0}const g4=3,y4="24px",v4="16px",Ob=4e3,b4=356,x4=14,T4=45,S4=200;function Cn(...n){return n.filter(Boolean).join(" ")}function E4(n){const[t,i]=n.split("-"),o=[];return t&&o.push(t),i&&o.push(i),o}const w4=n=>{var t,i,o,l,c,f,p,h,m;const{invert:g,toast:y,unstyled:x,interacting:S,setHeights:E,visibleToasts:A,heights:R,index:C,toasts:N,expanded:I,removeToast:X,defaultRichColors:V,closeButton:J,style:$,cancelButtonStyle:F,actionButtonStyle:Z,className:xt="",descriptionClassName:It="",duration:Mt,position:Wt,gap:Ee,expandByDefault:Nt,classNames:U,icons:q,closeButtonAriaLabel:tt="Close toast"}=n,[ht,w]=Y.useState(null),[H,W]=Y.useState(null),[G,Q]=Y.useState(!1),[rt,nt]=Y.useState(!1),[Jt,lt]=Y.useState(!1),[we,fa]=Y.useState(!1),[Ln,Tn]=Y.useState(!1),[Kr,Ja]=Y.useState(0),[Gu,Ns]=Y.useState(0),be=Y.useRef(y.duration||Mt||Ob),Ps=Y.useRef(null),Ye=Y.useRef(null),Us=C===0,Pi=C+1<=A,_e=y.type,In=y.dismissible!==!1,Fu=y.className||"",Yu=y.descriptionClassName||"",Sn=Y.useMemo(()=>R.findIndex(dt=>dt.toastId===y.id)||0,[R,y.id]),Ae=Y.useMemo(()=>{var dt;return(dt=y.closeButton)!=null?dt:J},[y.closeButton,J]),ln=Y.useMemo(()=>y.duration||Mt||Ob,[y.duration,Mt]),he=Y.useRef(0),da=Y.useRef(0),Ls=Y.useRef(0),ha=Y.useRef(null),[Ui,Li]=Wt.split("-"),En=Y.useMemo(()=>R.reduce((dt,Yt,te)=>te>=Sn?dt:dt+Yt.height,0),[R,Sn]),ti=u4(),ei=y.invert||g,$r=_e==="loading";da.current=Y.useMemo(()=>Sn*Ee+En,[Sn,En]),Y.useEffect(()=>{be.current=ln},[ln]),Y.useEffect(()=>{Q(!0)},[]),Y.useEffect(()=>{const dt=Ye.current;if(dt){const Yt=dt.getBoundingClientRect().height;return Ns(Yt),E(te=>[{toastId:y.id,height:Yt,position:y.position},...te]),()=>E(te=>te.filter(pe=>pe.toastId!==y.id))}},[E,y.id]),Y.useLayoutEffect(()=>{if(!G)return;const dt=Ye.current,Yt=dt.style.height;dt.style.height="auto";const te=dt.getBoundingClientRect().height;dt.style.height=Yt,Ns(te),E(pe=>pe.find(ie=>ie.toastId===y.id)?pe.map(ie=>ie.toastId===y.id?{...ie,height:te}:ie):[{toastId:y.id,height:te,position:y.position},...pe])},[G,y.title,y.description,E,y.id,y.jsx,y.action,y.cancel]);const un=Y.useCallback(()=>{nt(!0),Ja(da.current),E(dt=>dt.filter(Yt=>Yt.toastId!==y.id)),setTimeout(()=>{X(y)},S4)},[y,X,E,da]);Y.useEffect(()=>{if(y.promise&&_e==="loading"||y.duration===1/0||y.type==="loading")return;let dt;return I||S||ti?(()=>{if(Ls.current<he.current){const pe=new Date().getTime()-he.current;be.current=be.current-pe}Ls.current=new Date().getTime()})():(()=>{be.current!==1/0&&(he.current=new Date().getTime(),dt=setTimeout(()=>{y.onAutoClose==null||y.onAutoClose.call(y,y),un()},be.current))})(),()=>clearTimeout(dt)},[I,S,y,_e,ti,un]),Y.useEffect(()=>{y.delete&&(un(),y.onDismiss==null||y.onDismiss.call(y,y))},[un,y.delete]);function Is(){var dt;if(q?.loading){var Yt;return Y.createElement("div",{className:Cn(U?.loader,y==null||(Yt=y.classNames)==null?void 0:Yt.loader,"sonner-loader"),"data-visible":_e==="loading"},q.loading)}return Y.createElement(a4,{className:Cn(U?.loader,y==null||(dt=y.classNames)==null?void 0:dt.loader),visible:_e==="loading"})}const Zr=y.icon||q?.[_e]||e4(_e);var pa,Bs;return Y.createElement("li",{tabIndex:0,ref:Ye,className:Cn(xt,Fu,U?.toast,y==null||(t=y.classNames)==null?void 0:t.toast,U?.default,U?.[_e],y==null||(i=y.classNames)==null?void 0:i[_e]),"data-sonner-toast":"","data-rich-colors":(pa=y.richColors)!=null?pa:V,"data-styled":!(y.jsx||y.unstyled||x),"data-mounted":G,"data-promise":!!y.promise,"data-swiped":Ln,"data-removed":rt,"data-visible":Pi,"data-y-position":Ui,"data-x-position":Li,"data-index":C,"data-front":Us,"data-swiping":Jt,"data-dismissible":In,"data-type":_e,"data-invert":ei,"data-swipe-out":we,"data-swipe-direction":H,"data-expanded":!!(I||Nt&&G),"data-testid":y.testId,style:{"--index":C,"--toasts-before":C,"--z-index":N.length-C,"--offset":`${rt?Kr:da.current}px`,"--initial-height":Nt?"auto":`${Gu}px`,...$,...y.style},onDragEnd:()=>{lt(!1),w(null),ha.current=null},onPointerDown:dt=>{dt.button!==2&&($r||!In||(Ps.current=new Date,Ja(da.current),dt.target.setPointerCapture(dt.pointerId),dt.target.tagName!=="BUTTON"&&(lt(!0),ha.current={x:dt.clientX,y:dt.clientY})))},onPointerUp:()=>{var dt,Yt,te;if(we||!In)return;ha.current=null;const pe=Number(((dt=Ye.current)==null?void 0:dt.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),ni=Number(((Yt=Ye.current)==null?void 0:Yt.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),ie=new Date().getTime()-((te=Ps.current)==null?void 0:te.getTime()),Xt=ht==="x"?pe:ni,Kt=Math.abs(Xt)/ie;if(Math.abs(Xt)>=T4||Kt>.11){Ja(da.current),y.onDismiss==null||y.onDismiss.call(y,y),W(ht==="x"?pe>0?"right":"left":ni>0?"down":"up"),un(),fa(!0);return}else{var Dt,le;(Dt=Ye.current)==null||Dt.style.setProperty("--swipe-amount-x","0px"),(le=Ye.current)==null||le.style.setProperty("--swipe-amount-y","0px")}Tn(!1),lt(!1),w(null)},onPointerMove:dt=>{var Yt,te,pe;if(!ha.current||!In||((Yt=window.getSelection())==null?void 0:Yt.toString().length)>0)return;const ie=dt.clientY-ha.current.y,Xt=dt.clientX-ha.current.x;var Kt;const Dt=(Kt=n.swipeDirections)!=null?Kt:E4(Wt);!ht&&(Math.abs(Xt)>1||Math.abs(ie)>1)&&w(Math.abs(Xt)>Math.abs(ie)?"x":"y");let le={x:0,y:0};const Ii=Bn=>1/(1.5+Math.abs(Bn)/20);if(ht==="y"){if(Dt.includes("top")||Dt.includes("bottom"))if(Dt.includes("top")&&ie<0||Dt.includes("bottom")&&ie>0)le.y=ie;else{const Bn=ie*Ii(ie);le.y=Math.abs(Bn)<Math.abs(ie)?Bn:ie}}else if(ht==="x"&&(Dt.includes("left")||Dt.includes("right")))if(Dt.includes("left")&&Xt<0||Dt.includes("right")&&Xt>0)le.x=Xt;else{const Bn=Xt*Ii(Xt);le.x=Math.abs(Bn)<Math.abs(Xt)?Bn:Xt}(Math.abs(le.x)>0||Math.abs(le.y)>0)&&Tn(!0),(te=Ye.current)==null||te.style.setProperty("--swipe-amount-x",`${le.x}px`),(pe=Ye.current)==null||pe.style.setProperty("--swipe-amount-y",`${le.y}px`)}},Ae&&!y.jsx&&_e!=="loading"?Y.createElement("button",{"aria-label":tt,"data-disabled":$r,"data-close-button":!0,onClick:$r||!In?()=>{}:()=>{un(),y.onDismiss==null||y.onDismiss.call(y,y)},className:Cn(U?.closeButton,y==null||(o=y.classNames)==null?void 0:o.closeButton)},(Bs=q?.close)!=null?Bs:l4):null,(_e||y.icon||y.promise)&&y.icon!==null&&(q?.[_e]!==null||y.icon)?Y.createElement("div",{"data-icon":"",className:Cn(U?.icon,y==null||(l=y.classNames)==null?void 0:l.icon)},y.promise||y.type==="loading"&&!y.icon?y.icon||Is():null,y.type!=="loading"?Zr:null):null,Y.createElement("div",{"data-content":"",className:Cn(U?.content,y==null||(c=y.classNames)==null?void 0:c.content)},Y.createElement("div",{"data-title":"",className:Cn(U?.title,y==null||(f=y.classNames)==null?void 0:f.title)},y.jsx?y.jsx:typeof y.title=="function"?y.title():y.title),y.description?Y.createElement("div",{"data-description":"",className:Cn(It,Yu,U?.description,y==null||(p=y.classNames)==null?void 0:p.description)},typeof y.description=="function"?y.description():y.description):null),Y.isValidElement(y.cancel)?y.cancel:y.cancel&&ru(y.cancel)?Y.createElement("button",{"data-button":!0,"data-cancel":!0,style:y.cancelButtonStyle||F,onClick:dt=>{ru(y.cancel)&&In&&(y.cancel.onClick==null||y.cancel.onClick.call(y.cancel,dt),un())},className:Cn(U?.cancelButton,y==null||(h=y.classNames)==null?void 0:h.cancelButton)},y.cancel.label):null,Y.isValidElement(y.action)?y.action:y.action&&ru(y.action)?Y.createElement("button",{"data-button":!0,"data-action":!0,style:y.actionButtonStyle||Z,onClick:dt=>{ru(y.action)&&(y.action.onClick==null||y.action.onClick.call(y.action,dt),!dt.defaultPrevented&&un())},className:Cn(U?.actionButton,y==null||(m=y.classNames)==null?void 0:m.actionButton)},y.action.label):null)};function Cb(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function _4(n,t){const i={};return[n,t].forEach((o,l)=>{const c=l===1,f=c?"--mobile-offset":"--offset",p=c?v4:y4;function h(m){["top","right","bottom","left"].forEach(g=>{i[`${f}-${g}`]=typeof m=="number"?`${m}px`:m})}typeof o=="number"||typeof o=="string"?h(o):typeof o=="object"?["top","right","bottom","left"].forEach(m=>{o[m]===void 0?i[`${f}-${m}`]=p:i[`${f}-${m}`]=typeof o[m]=="number"?`${o[m]}px`:o[m]}):h(p)}),i}const A4=Y.forwardRef(function(t,i){const{id:o,invert:l,position:c="bottom-right",hotkey:f=["altKey","KeyT"],expand:p,closeButton:h,className:m,offset:g,mobileOffset:y,theme:x="light",richColors:S,duration:E,style:A,visibleToasts:R=g4,toastOptions:C,dir:N=Cb(),gap:I=x4,icons:X,containerAriaLabel:V="Notifications"}=t,[J,$]=Y.useState([]),F=Y.useMemo(()=>o?J.filter(G=>G.toasterId===o):J.filter(G=>!G.toasterId),[J,o]),Z=Y.useMemo(()=>Array.from(new Set([c].concat(F.filter(G=>G.position).map(G=>G.position)))),[F,c]),[xt,It]=Y.useState([]),[Mt,Wt]=Y.useState(!1),[Ee,Nt]=Y.useState(!1),[U,q]=Y.useState(x!=="system"?x:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),tt=Y.useRef(null),ht=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),w=Y.useRef(null),H=Y.useRef(!1),W=Y.useCallback(G=>{$(Q=>{var rt;return(rt=Q.find(nt=>nt.id===G.id))!=null&&rt.delete||Le.dismiss(G.id),Q.filter(({id:nt})=>nt!==G.id)})},[]);return Y.useEffect(()=>Le.subscribe(G=>{if(G.dismiss){requestAnimationFrame(()=>{$(Q=>Q.map(rt=>rt.id===G.id?{...rt,delete:!0}:rt))});return}setTimeout(()=>{O_.flushSync(()=>{$(Q=>{const rt=Q.findIndex(nt=>nt.id===G.id);return rt!==-1?[...Q.slice(0,rt),{...Q[rt],...G},...Q.slice(rt+1)]:[G,...Q]})})})}),[J]),Y.useEffect(()=>{if(x!=="system"){q(x);return}if(x==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?q("dark"):q("light")),typeof window>"u")return;const G=window.matchMedia("(prefers-color-scheme: dark)");try{G.addEventListener("change",({matches:Q})=>{q(Q?"dark":"light")})}catch{G.addListener(({matches:rt})=>{try{q(rt?"dark":"light")}catch(nt){console.error(nt)}})}},[x]),Y.useEffect(()=>{J.length<=1&&Wt(!1)},[J]),Y.useEffect(()=>{const G=Q=>{var rt;if(f.every(lt=>Q[lt]||Q.code===lt)){var Jt;Wt(!0),(Jt=tt.current)==null||Jt.focus()}Q.code==="Escape"&&(document.activeElement===tt.current||(rt=tt.current)!=null&&rt.contains(document.activeElement))&&Wt(!1)};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[f]),Y.useEffect(()=>{if(tt.current)return()=>{w.current&&(w.current.focus({preventScroll:!0}),w.current=null,H.current=!1)}},[tt.current]),Y.createElement("section",{ref:i,"aria-label":`${V} ${ht}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},Z.map((G,Q)=>{var rt;const[nt,Jt]=G.split("-");return F.length?Y.createElement("ol",{key:G,dir:N==="auto"?Cb():N,tabIndex:-1,ref:tt,className:m,"data-sonner-toaster":!0,"data-sonner-theme":U,"data-y-position":nt,"data-x-position":Jt,style:{"--front-toast-height":`${((rt=xt[0])==null?void 0:rt.height)||0}px`,"--width":`${b4}px`,"--gap":`${I}px`,...A,..._4(g,y)},onBlur:lt=>{H.current&&!lt.currentTarget.contains(lt.relatedTarget)&&(H.current=!1,w.current&&(w.current.focus({preventScroll:!0}),w.current=null))},onFocus:lt=>{lt.target instanceof HTMLElement&&lt.target.dataset.dismissible==="false"||H.current||(H.current=!0,w.current=lt.relatedTarget)},onMouseEnter:()=>Wt(!0),onMouseMove:()=>Wt(!0),onMouseLeave:()=>{Ee||Wt(!1)},onDragEnd:()=>Wt(!1),onPointerDown:lt=>{lt.target instanceof HTMLElement&&lt.target.dataset.dismissible==="false"||Nt(!0)},onPointerUp:()=>Nt(!1)},F.filter(lt=>!lt.position&&Q===0||lt.position===G).map((lt,we)=>{var fa,Ln;return Y.createElement(w4,{key:lt.id,icons:X,index:we,toast:lt,defaultRichColors:S,duration:(fa=C?.duration)!=null?fa:E,className:C?.className,descriptionClassName:C?.descriptionClassName,invert:l,visibleToasts:R,closeButton:(Ln=C?.closeButton)!=null?Ln:h,interacting:Ee,position:G,style:C?.style,unstyled:C?.unstyled,classNames:C?.classNames,cancelButtonStyle:C?.cancelButtonStyle,actionButtonStyle:C?.actionButtonStyle,closeButtonAriaLabel:C?.closeButtonAriaLabel,removeToast:W,toasts:F.filter(Tn=>Tn.position==lt.position),heights:xt.filter(Tn=>Tn.position==lt.position),setHeights:It,expandByDefault:p,gap:I,expanded:Mt,swipeDirections:t.swipeDirections})})):null}))});async function R4(n,t,i){try{await W3(n,t),Rb.success("Login feito com sucesso!"),/android|iphone|ipad|iPod/i.test(navigator.userAgent)?i("/photoupload"):i("/upload")}catch(o){let l="Erro desconhecido ao fazer login.";switch(o.code){case"auth/invalid-email":l="Email inválido.";break;case"auth/user-not-found":case"auth/invalid-credential":case"auth/wrong-password":l="Usuário ou senha incorreto.";break;case"auth/too-many-requests":l="Muitas tentativas. Tente novamente mais tarde.";break;case"auth/missing-password":l="Por favor, digite a senha.";break;default:o.message&&(l=o.message)}Rb.error(l)}}function O4(){const[n,t]=O.useState(""),[i,o]=O.useState(""),l=vh(),c=()=>R4(n,i,l);return K.jsxs("div",{className:"login-bg",children:[K.jsx(A4,{position:"top-right",autoClose:3e3,closeOnClick:!0}),K.jsxs(ss.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.7},className:"login-card",children:[K.jsxs("div",{className:"login-header",children:[K.jsx("h1",{className:"login-title",children:"Login"}),K.jsx("p",{className:"login-subtitle",children:"Faça login para continuar"})]}),K.jsx("input",{className:"login-input",type:"email",placeholder:"Email",value:n,onChange:f=>t(f.target.value)}),K.jsx("input",{className:"login-input",type:"password",placeholder:"Senha",value:i,onChange:f=>o(f.target.value)}),K.jsx(ss.button,{whileHover:{scale:1.03},whileTap:{scale:.97},className:"login-btn",onClick:c,children:"Entrar"})]})]})}function C4(n){return Eh({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"},child:[]}]})(n)}function D4(n){return Eh({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"},child:[]}]})(n)}function k4(){const[n,t]=O.useState(""),[i,o]=O.useState(null),[l,c]=O.useState(""),[f,p]=O.useState(!1),[h,m]=O.useState(""),[g,y]=O.useState([]),[x,S]=O.useState(!1),[E,A]=O.useState(!1),[R,C]=O.useState(""),[N,I]=O.useState("");O.useEffect(()=>{async function $(){try{const Z=await ph();y(Z)}catch(Z){console.error("Erro ao carregar pastas:",Z)}}async function F(){const Z=J3();if(Z){const xt=Z.email==="admin@email.com";S(xt),await $()}}F()},[]);const X=$=>o($.target.files[0]),V=async()=>{if(!i||!n||!N.trim()){m("Informe o código, o nome da imagem e selecione um arquivo!");return}p(!0),m("");try{const $=i.name.split(".").pop(),F=new File([i],`${N}.${$}`,{type:i.type}),Z=await X3(F,n,x);c(Z),alert("Upload concluído com sucesso!")}catch($){console.error("Erro ao enviar imagem:",$),m($.message)}finally{p(!1)}},J=async()=>{if(!R.trim()){alert("Informe um nome para a nova pasta!");return}try{await K3(R),alert("Nova pasta criada com sucesso!"),A(!1),C("");const $=await ph();y($),t(R)}catch($){console.error("Erro ao criar pasta:",$),alert("Erro ao criar nova pasta.")}};return K.jsx("div",{className:"photo-upload-root",children:K.jsxs("div",{className:"photo-upload-box",children:[K.jsx("p",{children:"Selecione ou crie o código da construção"}),K.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[K.jsxs("select",{className:"photo-upload-input",value:n,onChange:$=>t($.target.value),children:[K.jsx("option",{value:"",children:"Selecione uma construção"}),g.map($=>K.jsx("option",{value:$,children:$},$))]}),x&&K.jsx("button",{title:"Criar nova construção",onClick:()=>A(!E),style:{backgroundColor:"#1e88e5",border:"none",borderRadius:"8px",padding:"8px 10px",cursor:"pointer"},children:K.jsx(C4,{size:22,color:"white"})})]}),E&&K.jsxs("div",{style:{marginTop:"10px"},children:[K.jsx("input",{type:"text",placeholder:"Nome da nova construção",value:R,onChange:$=>C($.target.value),className:"photo-upload-input"}),K.jsx("button",{onClick:J,children:"Criar pasta"})]}),K.jsx("p",{children:"Informe o nome da imagem"}),K.jsx("input",{type:"text",placeholder:"Ex: fachada_frontal",value:N,onChange:$=>I($.target.value),className:"photo-upload-input"}),K.jsx("p",{children:"Insira foto da construção"}),K.jsxs("div",{className:"photo-upload-container",children:[K.jsx("label",{htmlFor:"photo_upload",children:K.jsx(D4,{size:48,color:"white",style:{cursor:"pointer"}})}),K.jsx("input",{id:"photo_upload",type:"file",accept:"image/*",capture:"environment",style:{display:"none"},onChange:X})]}),K.jsx("button",{onClick:V,disabled:f,children:f?"Enviando...":"Enviar Imagem"}),h&&K.jsx("p",{style:{color:"red"},children:h}),l&&K.jsxs("div",{className:"photo-preview",children:[K.jsx("img",{src:l,alt:"Pré-visualização"}),K.jsxs("p",{children:["URL: ",l]})]})]})})}function M4(){const[n,t]=O.useState(null),[i,o]=O.useState(null),[l,c]=O.useState(null),[f,p]=O.useState(!1);async function h(g){if(!g)return;p(!0);const y=new FormData;y.append("file",g);try{const S=await(await fetch("https://pii-6-sem.onrender.com/upload/file",{method:"POST",body:y})).json();S.urn?(t(S.urn),console.log("Upload concluído, URN:",S.urn)):console.error("Erro no upload:",S)}catch(x){console.error("Erro ao enviar arquivo:",x)}finally{p(!1)}}async function m(g){if(!g)return;if(typeof g=="string"){const E=new FormData;E.append("imageUrl",g);const R=await(await fetch("https://pii-6-sem.onrender.com/upload/image",{method:"POST",body:E})).json();R.imageUrl?o(R.imageUrl):console.error("Falha no upload:",R);return}const y=new FormData;y.append("file",g);const S=await(await fetch("https://pii-6-sem.onrender.com/upload/image",{method:"POST",body:y})).json();S.imageUrl?(o(S.imageUrl),console.log("Imagem enviada:",S.imageUrl)):console.error("Falha no upload:",S)}return K.jsx(y_,{children:K.jsxs(Kw,{children:[K.jsx(Qo,{path:"/",element:K.jsx(O4,{})}),K.jsx(Qo,{path:"/photoupload",element:K.jsx(k4,{})}),K.jsx(Qo,{path:"/upload",element:K.jsx(Z3,{onUploadFile:h,onUploadImage:m,isLoading:f})}),K.jsx(Qo,{path:"/viewer",element:K.jsx(Q3,{urn:n,imageUrl:i,screenshotUrl:l,setScreenshotUrl:c})})]})})}iw.createRoot(document.getElementById("root")).render(K.jsx(O.StrictMode,{children:K.jsx(M4,{})}));
