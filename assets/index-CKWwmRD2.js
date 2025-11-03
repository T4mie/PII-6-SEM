(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function xb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Zf={exports:{}},jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function Zw(){if(Q0)return jo;Q0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(o,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:n,type:o,key:f,ref:l!==void 0?l:null,props:c}}return jo.Fragment=e,jo.jsx=i,jo.jsxs=i,jo}var W0;function Qw(){return W0||(W0=1,Zf.exports=Zw()),Zf.exports}var F=Qw(),Qf={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function Ww(){if(J0)return pt;J0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function T(x){return x===null||typeof x!="object"?null:(x=y&&x[y]||x["@@iterator"],typeof x=="function"?x:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,A={};function k(x,B,$){this.props=x,this.context=B,this.refs=A,this.updater=$||w}k.prototype.isReactComponent={},k.prototype.setState=function(x,B){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,B,"setState")},k.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function D(){}D.prototype=k.prototype;function L(x,B,$){this.props=x,this.context=B,this.refs=A,this.updater=$||w}var U=L.prototype=new D;U.constructor=L,_(U,k.prototype),U.isPureReactComponent=!0;var K=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},J=Object.prototype.hasOwnProperty;function it(x,B,$,q,X,at){return $=at.ref,{$$typeof:n,type:x,key:B,ref:$!==void 0?$:null,props:at}}function Q(x,B){return it(x.type,B,void 0,void 0,void 0,x.props)}function rt(x){return typeof x=="object"&&x!==null&&x.$$typeof===n}function St(x){var B={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function($){return B[$]})}var Ut=/\/+/g;function kt(x,B){return typeof x=="object"&&x!==null&&x.key!=null?St(""+x.key):B.toString(36)}function Zt(){}function Se(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Zt,Zt):(x.status="pending",x.then(function(B){x.status==="pending"&&(x.status="fulfilled",x.value=B)},function(B){x.status==="pending"&&(x.status="rejected",x.reason=B)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Pt(x,B,$,q,X){var at=typeof x;(at==="undefined"||at==="boolean")&&(x=null);var tt=!1;if(x===null)tt=!0;else switch(at){case"bigint":case"string":case"number":tt=!0;break;case"object":switch(x.$$typeof){case n:case e:tt=!0;break;case g:return tt=x._init,Pt(tt(x._payload),B,$,q,X)}}if(tt)return X=X(x),tt=q===""?"."+kt(x,0):q,K(X)?($="",tt!=null&&($=tt.replace(Ut,"$&/")+"/"),Pt(X,B,$,"",function(xe){return xe})):X!=null&&(rt(X)&&(X=Q(X,$+(X.key==null||x&&x.key===X.key?"":(""+X.key).replace(Ut,"$&/")+"/")+tt)),B.push(X)),1;tt=0;var Qt=q===""?".":q+":";if(K(x))for(var lt=0;lt<x.length;lt++)q=x[lt],at=Qt+kt(q,lt),tt+=Pt(q,B,$,at,X);else if(lt=T(x),typeof lt=="function")for(x=lt.call(x),lt=0;!(q=x.next()).done;)q=q.value,at=Qt+kt(q,lt++),tt+=Pt(q,B,$,at,X);else if(at==="object"){if(typeof x.then=="function")return Pt(Se(x),B,$,q,X);throw B=String(x),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return tt}function N(x,B,$){if(x==null)return x;var q=[],X=0;return Pt(x,q,"","",function(at){return B.call($,at,X++)}),q}function j(x){if(x._status===-1){var B=x._result;B=B(),B.then(function($){(x._status===0||x._status===-1)&&(x._status=1,x._result=$)},function($){(x._status===0||x._status===-1)&&(x._status=2,x._result=$)}),x._status===-1&&(x._status=0,x._result=B)}if(x._status===1)return x._result.default;throw x._result}var Z=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ht(){}return pt.Children={map:N,forEach:function(x,B,$){N(x,function(){B.apply(this,arguments)},$)},count:function(x){var B=0;return N(x,function(){B++}),B},toArray:function(x){return N(x,function(B){return B})||[]},only:function(x){if(!rt(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},pt.Component=k,pt.Fragment=i,pt.Profiler=l,pt.PureComponent=L,pt.StrictMode=o,pt.Suspense=p,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,pt.__COMPILER_RUNTIME={__proto__:null,c:function(x){return G.H.useMemoCache(x)}},pt.cache=function(x){return function(){return x.apply(null,arguments)}},pt.cloneElement=function(x,B,$){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var q=_({},x.props),X=x.key,at=void 0;if(B!=null)for(tt in B.ref!==void 0&&(at=void 0),B.key!==void 0&&(X=""+B.key),B)!J.call(B,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&B.ref===void 0||(q[tt]=B[tt]);var tt=arguments.length-2;if(tt===1)q.children=$;else if(1<tt){for(var Qt=Array(tt),lt=0;lt<tt;lt++)Qt[lt]=arguments[lt+2];q.children=Qt}return it(x.type,X,void 0,void 0,at,q)},pt.createContext=function(x){return x={$$typeof:f,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:c,_context:x},x},pt.createElement=function(x,B,$){var q,X={},at=null;if(B!=null)for(q in B.key!==void 0&&(at=""+B.key),B)J.call(B,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(X[q]=B[q]);var tt=arguments.length-2;if(tt===1)X.children=$;else if(1<tt){for(var Qt=Array(tt),lt=0;lt<tt;lt++)Qt[lt]=arguments[lt+2];X.children=Qt}if(x&&x.defaultProps)for(q in tt=x.defaultProps,tt)X[q]===void 0&&(X[q]=tt[q]);return it(x,at,void 0,void 0,null,X)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(x){return{$$typeof:h,render:x}},pt.isValidElement=rt,pt.lazy=function(x){return{$$typeof:g,_payload:{_status:-1,_result:x},_init:j}},pt.memo=function(x,B){return{$$typeof:m,type:x,compare:B===void 0?null:B}},pt.startTransition=function(x){var B=G.T,$={};G.T=$;try{var q=x(),X=G.S;X!==null&&X($,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(ht,Z)}catch(at){Z(at)}finally{G.T=B}},pt.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},pt.use=function(x){return G.H.use(x)},pt.useActionState=function(x,B,$){return G.H.useActionState(x,B,$)},pt.useCallback=function(x,B){return G.H.useCallback(x,B)},pt.useContext=function(x){return G.H.useContext(x)},pt.useDebugValue=function(){},pt.useDeferredValue=function(x,B){return G.H.useDeferredValue(x,B)},pt.useEffect=function(x,B,$){var q=G.H;if(typeof $=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(x,B)},pt.useId=function(){return G.H.useId()},pt.useImperativeHandle=function(x,B,$){return G.H.useImperativeHandle(x,B,$)},pt.useInsertionEffect=function(x,B){return G.H.useInsertionEffect(x,B)},pt.useLayoutEffect=function(x,B){return G.H.useLayoutEffect(x,B)},pt.useMemo=function(x,B){return G.H.useMemo(x,B)},pt.useOptimistic=function(x,B){return G.H.useOptimistic(x,B)},pt.useReducer=function(x,B,$){return G.H.useReducer(x,B,$)},pt.useRef=function(x){return G.H.useRef(x)},pt.useState=function(x){return G.H.useState(x)},pt.useSyncExternalStore=function(x,B,$){return G.H.useSyncExternalStore(x,B,$)},pt.useTransition=function(){return G.H.useTransition()},pt.version="19.1.1",pt}var ty;function ch(){return ty||(ty=1,Qf.exports=Ww()),Qf.exports}var R=ch();const Y=xb(R);var Wf={exports:{}},qo={},Jf={exports:{}},td={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function Jw(){return ey||(ey=1,(function(n){function e(N,j){var Z=N.length;N.push(j);t:for(;0<Z;){var ht=Z-1>>>1,x=N[ht];if(0<l(x,j))N[ht]=j,N[Z]=x,Z=ht;else break t}}function i(N){return N.length===0?null:N[0]}function o(N){if(N.length===0)return null;var j=N[0],Z=N.pop();if(Z!==j){N[0]=Z;t:for(var ht=0,x=N.length,B=x>>>1;ht<B;){var $=2*(ht+1)-1,q=N[$],X=$+1,at=N[X];if(0>l(q,Z))X<x&&0>l(at,q)?(N[ht]=at,N[X]=Z,ht=X):(N[ht]=q,N[$]=Z,ht=$);else if(X<x&&0>l(at,Z))N[ht]=at,N[X]=Z,ht=X;else break t}}return j}function l(N,j){var Z=N.sortIndex-j.sortIndex;return Z!==0?Z:N.id-j.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();n.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,y=null,T=3,w=!1,_=!1,A=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function K(N){for(var j=i(m);j!==null;){if(j.callback===null)o(m);else if(j.startTime<=N)o(m),j.sortIndex=j.expirationTime,e(p,j);else break;j=i(m)}}function G(N){if(A=!1,K(N),!_)if(i(p)!==null)_=!0,J||(J=!0,kt());else{var j=i(m);j!==null&&Pt(G,j.startTime-N)}}var J=!1,it=-1,Q=5,rt=-1;function St(){return k?!0:!(n.unstable_now()-rt<Q)}function Ut(){if(k=!1,J){var N=n.unstable_now();rt=N;var j=!0;try{t:{_=!1,A&&(A=!1,L(it),it=-1),w=!0;var Z=T;try{e:{for(K(N),y=i(p);y!==null&&!(y.expirationTime>N&&St());){var ht=y.callback;if(typeof ht=="function"){y.callback=null,T=y.priorityLevel;var x=ht(y.expirationTime<=N);if(N=n.unstable_now(),typeof x=="function"){y.callback=x,K(N),j=!0;break e}y===i(p)&&o(p),K(N)}else o(p);y=i(p)}if(y!==null)j=!0;else{var B=i(m);B!==null&&Pt(G,B.startTime-N),j=!1}}break t}finally{y=null,T=Z,w=!1}j=void 0}}finally{j?kt():J=!1}}}var kt;if(typeof U=="function")kt=function(){U(Ut)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,Se=Zt.port2;Zt.port1.onmessage=Ut,kt=function(){Se.postMessage(null)}}else kt=function(){D(Ut,0)};function Pt(N,j){it=D(function(){N(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_next=function(N){switch(T){case 1:case 2:case 3:var j=3;break;default:j=T}var Z=T;T=j;try{return N()}finally{T=Z}},n.unstable_requestPaint=function(){k=!0},n.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=T;T=N;try{return j()}finally{T=Z}},n.unstable_scheduleCallback=function(N,j,Z){var ht=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ht+Z:ht):Z=ht,N){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=Z+x,N={id:g++,callback:j,priorityLevel:N,startTime:Z,expirationTime:x,sortIndex:-1},Z>ht?(N.sortIndex=Z,e(m,N),i(p)===null&&N===i(m)&&(A?(L(it),it=-1):A=!0,Pt(G,Z-ht))):(N.sortIndex=x,e(p,N),_||w||(_=!0,J||(J=!0,kt()))),N},n.unstable_shouldYield=St,n.unstable_wrapCallback=function(N){var j=T;return function(){var Z=T;T=j;try{return N.apply(this,arguments)}finally{T=Z}}}})(td)),td}var ny;function tE(){return ny||(ny=1,Jf.exports=Jw()),Jf.exports}var ed={exports:{}},be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function eE(){if(ay)return be;ay=1;var n=ch();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:m,implementation:g}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,be.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},be.flushSync=function(p){var m=f.T,g=o.p;try{if(f.T=null,o.p=2,p)return p()}finally{f.T=m,o.p=g,o.d.f()}},be.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(p,m))},be.prefetchDNS=function(p){typeof p=="string"&&o.d.D(p)},be.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?o.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:T,fetchPriority:w}):g==="script"&&o.d.X(p,{crossOrigin:y,integrity:T,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},be.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);o.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(p)},be.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin);o.d.L(p,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},be.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);o.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(p)},be.requestFormReset=function(p){o.d.r(p)},be.unstable_batchedUpdates=function(p,m){return p(m)},be.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},be.useFormStatus=function(){return f.H.useHostTransitionStatus()},be.version="19.1.1",be}var iy;function wb(){if(iy)return ed.exports;iy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ed.exports=eE(),ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function nE(){if(ry)return qo;ry=1;var n=tE(),e=ch(),i=wb();function o(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function f(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(o(188))}function p(t){var a=t.alternate;if(!a){if(a=c(t),a===null)throw Error(o(188));return a!==t?null:t}for(var r=t,s=a;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(s=u.return,s!==null){r=s;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return h(u),t;if(d===s)return h(u),a;d=d.sibling}throw Error(o(188))}if(r.return!==s.return)r=u,s=d;else{for(var v=!1,b=u.child;b;){if(b===r){v=!0,r=u,s=d;break}if(b===s){v=!0,s=u,r=d;break}b=b.sibling}if(!v){for(b=d.child;b;){if(b===r){v=!0,r=d,s=u;break}if(b===s){v=!0,s=d,r=u;break}b=b.sibling}if(!v)throw Error(o(189))}}if(r.alternate!==s)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?t:a}function m(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=m(t),a!==null)return a;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),rt=Symbol.for("react.activity"),St=Symbol.for("react.memo_cache_sentinel"),Ut=Symbol.iterator;function kt(t){return t===null||typeof t!="object"?null:(t=Ut&&t[Ut]||t["@@iterator"],typeof t=="function"?t:null)}var Zt=Symbol.for("react.client.reference");function Se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Zt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _:return"Fragment";case k:return"Profiler";case A:return"StrictMode";case G:return"Suspense";case J:return"SuspenseList";case rt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case U:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case K:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case it:return a=t.displayName||null,a!==null?a:Se(t.type)||"Memo";case Q:a=t._payload,t=t._init;try{return Se(t(a))}catch{}}return null}var Pt=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ht=[],x=-1;function B(t){return{current:t}}function $(t){0>x||(t.current=ht[x],ht[x]=null,x--)}function q(t,a){x++,ht[x]=t.current,t.current=a}var X=B(null),at=B(null),tt=B(null),Qt=B(null);function lt(t,a){switch(q(tt,a),q(at,t),q(X,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?_0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=_0(a),t=A0(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(X),q(X,t)}function xe(){$(X),$(at),$(tt)}function fa(t){t.memoizedState!==null&&q(Qt,t);var a=X.current,r=A0(a,t.type);a!==r&&(q(at,t),q(X,r))}function Ln(t){at.current===t&&($(X),$(at)),Qt.current===t&&($(Qt),Uo._currentValue=Z)}var yn=Object.prototype.hasOwnProperty,Gr=n.unstable_scheduleCallback,Qa=n.unstable_cancelCallback,Vu=n.unstable_shouldYield,Os=n.unstable_requestPaint,ye=n.unstable_now,Rs=n.unstable_getCurrentPriorityLevel,Ge=n.unstable_ImmediatePriority,Cs=n.unstable_UserBlockingPriority,Ni=n.unstable_NormalPriority,we=n.unstable_LowPriority,Un=n.unstable_IdlePriority,Bu=n.log,Hu=n.unstable_setDisableYieldValue,vn=null,Ee=null;function rn(t){if(typeof Bu=="function"&&Hu(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(vn,t)}catch{}}var fe=Math.clz32?Math.clz32:ha,da=Math.log,Ds=Math.LN2;function ha(t){return t>>>=0,t===0?32:31-(da(t)/Ds|0)|0}var Ii=256,Li=4194304;function bn(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Wa(t,a,r){var s=t.pendingLanes;if(s===0)return 0;var u=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~d,s!==0?u=bn(s):(v&=b,v!==0?u=bn(v):r||(r=b&~t,r!==0&&(u=bn(r))))):(b=s&~d,b!==0?u=bn(b):v!==0?u=bn(v):r||(r=s&~t,r!==0&&(u=bn(r)))),u===0?0:a!==0&&a!==u&&(a&d)===0&&(d=u&-u,r=a&-a,d>=r||d===32&&(r&4194048)!==0)?a:u}function Ja(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Yr(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function on(){var t=Ii;return Ii<<=1,(Ii&4194048)===0&&(Ii=256),t}function Ms(){var t=Li;return Li<<=1,(Li&62914560)===0&&(Li=4194304),t}function Fr(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function pa(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ks(t,a,r,s,u,d){var v=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var b=t.entanglements,S=t.expirationTimes,M=t.hiddenUpdates;for(r=v&~r;0<r;){var z=31-fe(r),H=1<<z;b[z]=0,S[z]=-1;var P=M[z];if(P!==null)for(M[z]=null,z=0;z<P.length;z++){var I=P[z];I!==null&&(I.lane&=-536870913)}r&=~H}s!==0&&dt(t,s,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~a))}function dt(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var s=31-fe(a);t.entangledLanes|=a,t.entanglements[s]=t.entanglements[s]|1073741824|r&4194090}function Gt(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var s=31-fe(r),u=1<<s;u&a|t[s]&a&&(t[s]|=a),r&=~u}}function Wt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function de(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ti(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:Y0(t.type))}function ne(t,a){var r=j.p;try{return j.p=t,a()}finally{j.p=r}}var Yt=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Yt,Dt="__reactProps$"+Yt,oe="__reactContainer$"+Yt,Ui="__reactEvents$"+Yt,zn="__reactListeners$"+Yt,dp="__reactHandles$"+Yt,hp="__reactResources$"+Yt,Xr="__reactMarker$"+Yt;function ju(t){delete t[Ft],delete t[Dt],delete t[Ui],delete t[zn],delete t[dp]}function zi(t){var a=t[Ft];if(a)return a;for(var r=t.parentNode;r;){if(a=r[oe]||r[Ft]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=D0(t);t!==null;){if(r=t[Ft])return r;t=D0(t)}return a}t=r,r=t.parentNode}return null}function Vi(t){if(t=t[Ft]||t[oe]){var a=t.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return t}return null}function Kr(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(o(33))}function Bi(t){var a=t[hp];return a||(a=t[hp]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function se(t){t[Xr]=!0}var pp=new Set,mp={};function ei(t,a){Hi(t,a),Hi(t+"Capture",a)}function Hi(t,a){for(mp[t]=a,t=0;t<a.length;t++)pp.add(a[t])}var jS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gp={},yp={};function qS(t){return yn.call(yp,t)?!0:yn.call(gp,t)?!1:jS.test(t)?yp[t]=!0:(gp[t]=!0,!1)}function Ps(t,a,r){if(qS(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var s=a.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function Ns(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function Vn(t,a,r,s){if(s===null)t.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+s)}}var qu,vp;function ji(t){if(qu===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);qu=a&&a[1]||"",vp=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qu+t+vp}var Gu=!1;function Yu(t,a){if(!t||Gu)return"";Gu=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(a){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(I){var P=I}Reflect.construct(t,[],H)}else{try{H.call()}catch(I){P=I}t.call(H.prototype)}}else{try{throw Error()}catch(I){P=I}(H=t())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(I){if(I&&P&&typeof I.stack=="string")return[I.stack,P.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=s.DetermineComponentFrameRoot(),v=d[0],b=d[1];if(v&&b){var S=v.split(`
`),M=b.split(`
`);for(u=s=0;s<S.length&&!S[s].includes("DetermineComponentFrameRoot");)s++;for(;u<M.length&&!M[u].includes("DetermineComponentFrameRoot");)u++;if(s===S.length||u===M.length)for(s=S.length-1,u=M.length-1;1<=s&&0<=u&&S[s]!==M[u];)u--;for(;1<=s&&0<=u;s--,u--)if(S[s]!==M[u]){if(s!==1||u!==1)do if(s--,u--,0>u||S[s]!==M[u]){var z=`
`+S[s].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=s&&0<=u);break}}}finally{Gu=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?ji(r):""}function GS(t){switch(t.tag){case 26:case 27:case 5:return ji(t.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 15:return Yu(t.type,!1);case 11:return Yu(t.type.render,!1);case 1:return Yu(t.type,!0);case 31:return ji("Activity");default:return""}}function bp(t){try{var a="";do a+=GS(t),t=t.return;while(t);return a}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Ye(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tp(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function YS(t){var a=Tp(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),s=""+t[a];if(!t.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,d=r.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return u.call(this)},set:function(v){s=""+v,d.call(this,v)}}),Object.defineProperty(t,a,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Is(t){t._valueTracker||(t._valueTracker=YS(t))}function Sp(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),s="";return t&&(s=Tp(t)?t.checked?"true":"false":t.value),t=s,t!==r?(a.setValue(t),!0):!1}function Ls(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var FS=/[\n"\\]/g;function Fe(t){return t.replace(FS,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Fu(t,a,r,s,u,d,v,b){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),a!=null?v==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+Ye(a)):t.value!==""+Ye(a)&&(t.value=""+Ye(a)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),a!=null?Xu(t,v,Ye(a)):r!=null?Xu(t,v,Ye(r)):s!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Ye(b):t.removeAttribute("name")}function xp(t,a,r,s,u,d,v,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),a!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||a!=null))return;r=r!=null?""+Ye(r):"",a=a!=null?""+Ye(a):r,b||a===t.value||(t.value=a),t.defaultValue=a}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function Xu(t,a,r){a==="number"&&Ls(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function qi(t,a,r,s){if(t=t.options,a){a={};for(var u=0;u<r.length;u++)a["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=a.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&s&&(t[r].defaultSelected=!0)}else{for(r=""+Ye(r),a=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}a!==null||t[u].disabled||(a=t[u])}a!==null&&(a.selected=!0)}}function wp(t,a,r){if(a!=null&&(a=""+Ye(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+Ye(r):""}function Ep(t,a,r,s){if(a==null){if(s!=null){if(r!=null)throw Error(o(92));if(Pt(s)){if(1<s.length)throw Error(o(93));s=s[0]}r=s}r==null&&(r=""),a=r}r=Ye(a),t.defaultValue=r,s=t.textContent,s===r&&s!==""&&s!==null&&(t.value=s)}function Gi(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var XS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _p(t,a,r){var s=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?s?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":s?t.setProperty(a,r):typeof r!="number"||r===0||XS.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function Ap(t,a,r){if(a!=null&&typeof a!="object")throw Error(o(62));if(t=t.style,r!=null){for(var s in r)!r.hasOwnProperty(s)||a!=null&&a.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in a)s=a[u],a.hasOwnProperty(u)&&r[u]!==s&&_p(t,u,s)}else for(var d in a)a.hasOwnProperty(d)&&_p(t,d,a[d])}function Ku(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var KS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$S=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Us(t){return $S.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var $u=null;function Zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yi=null,Fi=null;function Op(t){var a=Vi(t);if(a&&(t=a.stateNode)){var r=t[Dt]||null;t:switch(t=a.stateNode,a.type){case"input":if(Fu(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Fe(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var s=r[a];if(s!==t&&s.form===t.form){var u=s[Dt]||null;if(!u)throw Error(o(90));Fu(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(a=0;a<r.length;a++)s=r[a],s.form===t.form&&Sp(s)}break t;case"textarea":wp(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&qi(t,!!r.multiple,a,!1)}}}var Qu=!1;function Rp(t,a,r){if(Qu)return t(a,r);Qu=!0;try{var s=t(a);return s}finally{if(Qu=!1,(Yi!==null||Fi!==null)&&(xl(),Yi&&(a=Yi,t=Fi,Fi=Yi=null,Op(a),t)))for(a=0;a<t.length;a++)Op(t[a])}}function $r(t,a){var r=t.stateNode;if(r===null)return null;var s=r[Dt]||null;if(s===null)return null;r=s[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(o(231,a,typeof r));return r}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wu=!1;if(Bn)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Wu=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Wu=!1}var ma=null,Ju=null,zs=null;function Cp(){if(zs)return zs;var t,a=Ju,r=a.length,s,u="value"in ma?ma.value:ma.textContent,d=u.length;for(t=0;t<r&&a[t]===u[t];t++);var v=r-t;for(s=1;s<=v&&a[r-s]===u[d-s];s++);return zs=u.slice(t,1<s?1-s:void 0)}function Vs(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Bs(){return!0}function Dp(){return!1}function Ce(t){function a(r,s,u,d,v){this._reactName=r,this._targetInst=u,this.type=s,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(r=t[b],this[b]=r?r(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Bs:Dp,this.isPropagationStopped=Dp,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Bs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Bs)},persist:function(){},isPersistent:Bs}),a}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=Ce(ni),Qr=g({},ni,{view:0,detail:0}),ZS=Ce(Qr),tc,ec,Wr,js=g({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wr&&(Wr&&t.type==="mousemove"?(tc=t.screenX-Wr.screenX,ec=t.screenY-Wr.screenY):ec=tc=0,Wr=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),Mp=Ce(js),QS=g({},js,{dataTransfer:0}),WS=Ce(QS),JS=g({},Qr,{relatedTarget:0}),nc=Ce(JS),tx=g({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),ex=Ce(tx),nx=g({},ni,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ax=Ce(nx),ix=g({},ni,{data:0}),kp=Ce(ix),rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lx(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=sx[t])?!!a[t]:!1}function ac(){return lx}var ux=g({},Qr,{key:function(t){if(t.key){var a=rx[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Vs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ox[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?Vs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cx=Ce(ux),fx=g({},js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Ce(fx),dx=g({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),hx=Ce(dx),px=g({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),mx=Ce(px),gx=g({},js,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=Ce(gx),vx=g({},ni,{newState:0,oldState:0}),bx=Ce(vx),Tx=[9,13,27,32],ic=Bn&&"CompositionEvent"in window,Jr=null;Bn&&"documentMode"in document&&(Jr=document.documentMode);var Sx=Bn&&"TextEvent"in window&&!Jr,Np=Bn&&(!ic||Jr&&8<Jr&&11>=Jr),Ip=" ",Lp=!1;function Up(t,a){switch(t){case"keyup":return Tx.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xi=!1;function xx(t,a){switch(t){case"compositionend":return zp(a);case"keypress":return a.which!==32?null:(Lp=!0,Ip);case"textInput":return t=a.data,t===Ip&&Lp?null:t;default:return null}}function wx(t,a){if(Xi)return t==="compositionend"||!ic&&Up(t,a)?(t=Cp(),zs=Ju=ma=null,Xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Np&&a.locale!=="ko"?null:a.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!Ex[t.type]:a==="textarea"}function Bp(t,a,r,s){Yi?Fi?Fi.push(s):Fi=[s]:Yi=s,a=Rl(a,"onChange"),0<a.length&&(r=new Hs("onChange","change",null,r,s),t.push({event:r,listeners:a}))}var to=null,eo=null;function _x(t){T0(t,0)}function qs(t){var a=Kr(t);if(Sp(a))return t}function Hp(t,a){if(t==="change")return a}var jp=!1;if(Bn){var rc;if(Bn){var oc="oninput"in document;if(!oc){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),oc=typeof qp.oninput=="function"}rc=oc}else rc=!1;jp=rc&&(!document.documentMode||9<document.documentMode)}function Gp(){to&&(to.detachEvent("onpropertychange",Yp),eo=to=null)}function Yp(t){if(t.propertyName==="value"&&qs(eo)){var a=[];Bp(a,eo,t,Zu(t)),Rp(_x,a)}}function Ax(t,a,r){t==="focusin"?(Gp(),to=a,eo=r,to.attachEvent("onpropertychange",Yp)):t==="focusout"&&Gp()}function Ox(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qs(eo)}function Rx(t,a){if(t==="click")return qs(a)}function Cx(t,a){if(t==="input"||t==="change")return qs(a)}function Dx(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var Ie=typeof Object.is=="function"?Object.is:Dx;function no(t,a){if(Ie(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),s=Object.keys(a);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var u=r[s];if(!yn.call(a,u)||!Ie(t[u],a[u]))return!1}return!0}function Fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xp(t,a){var r=Fp(t);t=0;for(var s;r;){if(r.nodeType===3){if(s=t+r.textContent.length,t<=a&&s>=a)return{node:r,offset:a-t};t=s}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Fp(r)}}function Kp(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Kp(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function $p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Ls(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=Ls(t.document)}return a}function sc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var Mx=Bn&&"documentMode"in document&&11>=document.documentMode,Ki=null,lc=null,ao=null,uc=!1;function Zp(t,a,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;uc||Ki==null||Ki!==Ls(s)||(s=Ki,"selectionStart"in s&&sc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ao&&no(ao,s)||(ao=s,s=Rl(lc,"onSelect"),0<s.length&&(a=new Hs("onSelect","select",null,a,r),t.push({event:a,listeners:s}),a.target=Ki)))}function ai(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var $i={animationend:ai("Animation","AnimationEnd"),animationiteration:ai("Animation","AnimationIteration"),animationstart:ai("Animation","AnimationStart"),transitionrun:ai("Transition","TransitionRun"),transitionstart:ai("Transition","TransitionStart"),transitioncancel:ai("Transition","TransitionCancel"),transitionend:ai("Transition","TransitionEnd")},cc={},Qp={};Bn&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function ii(t){if(cc[t])return cc[t];if(!$i[t])return t;var a=$i[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in Qp)return cc[t]=a[r];return t}var Wp=ii("animationend"),Jp=ii("animationiteration"),tm=ii("animationstart"),kx=ii("transitionrun"),Px=ii("transitionstart"),Nx=ii("transitioncancel"),em=ii("transitionend"),nm=new Map,fc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fc.push("scrollEnd");function sn(t,a){nm.set(t,a),ei(a,[t])}var am=new WeakMap;function Xe(t,a){if(typeof t=="object"&&t!==null){var r=am.get(t);return r!==void 0?r:(a={value:t,source:a,stack:bp(a)},am.set(t,a),a)}return{value:t,source:a,stack:bp(a)}}var Ke=[],Zi=0,dc=0;function Gs(){for(var t=Zi,a=dc=Zi=0;a<t;){var r=Ke[a];Ke[a++]=null;var s=Ke[a];Ke[a++]=null;var u=Ke[a];Ke[a++]=null;var d=Ke[a];if(Ke[a++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}d!==0&&im(r,u,d)}}function Ys(t,a,r,s){Ke[Zi++]=t,Ke[Zi++]=a,Ke[Zi++]=r,Ke[Zi++]=s,dc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function hc(t,a,r,s){return Ys(t,a,r,s),Fs(t)}function Qi(t,a){return Ys(t,null,null,a),Fs(t)}function im(t,a,r){t.lanes|=r;var s=t.alternate;s!==null&&(s.lanes|=r);for(var u=!1,d=t.return;d!==null;)d.childLanes|=r,s=d.alternate,s!==null&&(s.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&a!==null&&(u=31-fe(r),t=d.hiddenUpdates,s=t[u],s===null?t[u]=[a]:s.push(a),a.lane=r|536870912),d):null}function Fs(t){if(50<Co)throw Co=0,Tf=null,Error(o(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Wi={};function Ix(t,a,r,s){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(t,a,r,s){return new Ix(t,a,r,s)}function pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hn(t,a){var r=t.alternate;return r===null?(r=Le(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function rm(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Xs(t,a,r,s,u,d){var v=0;if(s=t,typeof t=="function")pc(t)&&(v=1);else if(typeof t=="string")v=Uw(t,r,X.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case rt:return t=Le(31,r,a,u),t.elementType=rt,t.lanes=d,t;case _:return ri(r.children,u,d,a);case A:v=8,u|=24;break;case k:return t=Le(12,r,a,u|2),t.elementType=k,t.lanes=d,t;case G:return t=Le(13,r,a,u),t.elementType=G,t.lanes=d,t;case J:return t=Le(19,r,a,u),t.elementType=J,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:case U:v=10;break t;case L:v=9;break t;case K:v=11;break t;case it:v=14;break t;case Q:v=16,s=null;break t}v=29,r=Error(o(130,t===null?"null":typeof t,"")),s=null}return a=Le(v,r,a,u),a.elementType=t,a.type=s,a.lanes=d,a}function ri(t,a,r,s){return t=Le(7,t,s,a),t.lanes=r,t}function mc(t,a,r){return t=Le(6,t,null,a),t.lanes=r,t}function gc(t,a,r){return a=Le(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Ji=[],tr=0,Ks=null,$s=0,$e=[],Ze=0,oi=null,jn=1,qn="";function si(t,a){Ji[tr++]=$s,Ji[tr++]=Ks,Ks=t,$s=a}function om(t,a,r){$e[Ze++]=jn,$e[Ze++]=qn,$e[Ze++]=oi,oi=t;var s=jn;t=qn;var u=32-fe(s)-1;s&=~(1<<u),r+=1;var d=32-fe(a)+u;if(30<d){var v=u-u%5;d=(s&(1<<v)-1).toString(32),s>>=v,u-=v,jn=1<<32-fe(a)+u|r<<u|s,qn=d+t}else jn=1<<d|r<<u|s,qn=t}function yc(t){t.return!==null&&(si(t,1),om(t,1,0))}function vc(t){for(;t===Ks;)Ks=Ji[--tr],Ji[tr]=null,$s=Ji[--tr],Ji[tr]=null;for(;t===oi;)oi=$e[--Ze],$e[Ze]=null,qn=$e[--Ze],$e[Ze]=null,jn=$e[--Ze],$e[Ze]=null}var _e=null,Ht=null,xt=!1,li=null,Tn=!1,bc=Error(o(519));function ui(t){var a=Error(o(418,""));throw oo(Xe(a,t)),bc}function sm(t){var a=t.stateNode,r=t.type,s=t.memoizedProps;switch(a[Ft]=t,a[Dt]=s,r){case"dialog":vt("cancel",a),vt("close",a);break;case"iframe":case"object":case"embed":vt("load",a);break;case"video":case"audio":for(r=0;r<Mo.length;r++)vt(Mo[r],a);break;case"source":vt("error",a);break;case"img":case"image":case"link":vt("error",a),vt("load",a);break;case"details":vt("toggle",a);break;case"input":vt("invalid",a),xp(a,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Is(a);break;case"select":vt("invalid",a);break;case"textarea":vt("invalid",a),Ep(a,s.value,s.defaultValue,s.children),Is(a)}r=s.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||s.suppressHydrationWarning===!0||E0(a.textContent,r)?(s.popover!=null&&(vt("beforetoggle",a),vt("toggle",a)),s.onScroll!=null&&vt("scroll",a),s.onScrollEnd!=null&&vt("scrollend",a),s.onClick!=null&&(a.onclick=Cl),a=!0):a=!1,a||ui(t)}function lm(t){for(_e=t.return;_e;)switch(_e.tag){case 5:case 13:Tn=!1;return;case 27:case 3:Tn=!0;return;default:_e=_e.return}}function io(t){if(t!==_e)return!1;if(!xt)return lm(t),xt=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Lf(t.type,t.memoizedProps)),r=!r),r&&Ht&&ui(t),lm(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(a===0){Ht=un(t.nextSibling);break t}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++;t=t.nextSibling}Ht=null}}else a===27?(a=Ht,Ma(t.type)?(t=Bf,Bf=null,Ht=t):Ht=a):Ht=_e?un(t.stateNode.nextSibling):null;return!0}function ro(){Ht=_e=null,xt=!1}function um(){var t=li;return t!==null&&(ke===null?ke=t:ke.push.apply(ke,t),li=null),t}function oo(t){li===null?li=[t]:li.push(t)}var Tc=B(null),ci=null,Gn=null;function ga(t,a,r){q(Tc,a._currentValue),a._currentValue=r}function Yn(t){t._currentValue=Tc.current,$(Tc)}function Sc(t,a,r){for(;t!==null;){var s=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,s!==null&&(s.childLanes|=a)):s!==null&&(s.childLanes&a)!==a&&(s.childLanes|=a),t===r)break;t=t.return}}function xc(t,a,r,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var v=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var S=0;S<a.length;S++)if(b.context===a[S]){d.lanes|=r,b=d.alternate,b!==null&&(b.lanes|=r),Sc(d.return,r,t),s||(v=null);break t}d=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(o(341));v.lanes|=r,d=v.alternate,d!==null&&(d.lanes|=r),Sc(v,r,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function so(t,a,r,s){t=null;for(var u=a,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(o(387));if(v=v.memoizedProps,v!==null){var b=u.type;Ie(u.pendingProps.value,v.value)||(t!==null?t.push(b):t=[b])}}else if(u===Qt.current){if(v=u.alternate,v===null)throw Error(o(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}u=u.return}t!==null&&xc(a,t,r,s),a.flags|=262144}function Zs(t){for(t=t.firstContext;t!==null;){if(!Ie(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fi(t){ci=t,Gn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ve(t){return cm(ci,t)}function Qs(t,a){return ci===null&&fi(t),cm(t,a)}function cm(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},Gn===null){if(t===null)throw Error(o(308));Gn=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Gn=Gn.next=a;return r}var Lx=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,s){t.push(s)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},Ux=n.unstable_scheduleCallback,zx=n.unstable_NormalPriority,ae={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wc(){return{controller:new Lx,data:new Map,refCount:0}}function lo(t){t.refCount--,t.refCount===0&&Ux(zx,function(){t.controller.abort()})}var uo=null,Ec=0,er=0,nr=null;function Vx(t,a){if(uo===null){var r=uo=[];Ec=0,er=Of(),nr={status:"pending",value:void 0,then:function(s){r.push(s)}}}return Ec++,a.then(fm,fm),a}function fm(){if(--Ec===0&&uo!==null){nr!==null&&(nr.status="fulfilled");var t=uo;uo=null,er=0,nr=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function Bx(t,a){var r=[],s={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){s.status="fulfilled",s.value=a;for(var u=0;u<r.length;u++)(0,r[u])(a)},function(u){for(s.status="rejected",s.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),s}var dm=N.S;N.S=function(t,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&Vx(t,a),dm!==null&&dm(t,a)};var di=B(null);function _c(){var t=di.current;return t!==null?t:Mt.pooledCache}function Ws(t,a){a===null?q(di,di.current):q(di,a.pool)}function hm(){var t=_c();return t===null?null:{parent:ae._currentValue,pool:t}}var co=Error(o(460)),pm=Error(o(474)),Js=Error(o(542)),Ac={then:function(){}};function mm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function tl(){}function gm(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then(tl,tl),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,vm(t),t;default:if(typeof a.status=="string")a.then(tl,tl);else{if(t=Mt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=a,t.status="pending",t.then(function(s){if(a.status==="pending"){var u=a;u.status="fulfilled",u.value=s}},function(s){if(a.status==="pending"){var u=a;u.status="rejected",u.reason=s}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,vm(t),t}throw fo=a,co}}var fo=null;function ym(){if(fo===null)throw Error(o(459));var t=fo;return fo=null,t}function vm(t){if(t===co||t===Js)throw Error(o(483))}var ya=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rc(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ba(t,a,r){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(wt&2)!==0){var u=s.pending;return u===null?a.next=a:(a.next=u.next,u.next=a),s.pending=a,a=Fs(t),im(t,null,r),a}return Ys(t,s,a,r),Fs(t)}function ho(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var s=a.lanes;s&=t.pendingLanes,r|=s,a.lanes=r,Gt(t,r)}}function Cc(t,a){var r=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var v={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=v:d=d.next=v,r=r.next}while(r!==null);d===null?u=d=a:d=d.next=a}else u=d=a;r={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:s.shared,callbacks:s.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var Dc=!1;function po(){if(Dc){var t=nr;if(t!==null)throw t}}function mo(t,a,r,s){Dc=!1;var u=t.updateQueue;ya=!1;var d=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var S=b,M=S.next;S.next=null,v===null?d=M:v.next=M,v=S;var z=t.alternate;z!==null&&(z=z.updateQueue,b=z.lastBaseUpdate,b!==v&&(b===null?z.firstBaseUpdate=M:b.next=M,z.lastBaseUpdate=S))}if(d!==null){var H=u.baseState;v=0,z=M=S=null,b=d;do{var P=b.lane&-536870913,I=P!==b.lane;if(I?(bt&P)===P:(s&P)===P){P!==0&&P===er&&(Dc=!0),z!==null&&(z=z.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ct=t,ot=b;P=a;var Ot=r;switch(ot.tag){case 1:if(ct=ot.payload,typeof ct=="function"){H=ct.call(Ot,H,P);break t}H=ct;break t;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=ot.payload,P=typeof ct=="function"?ct.call(Ot,H,P):ct,P==null)break t;H=g({},H,P);break t;case 2:ya=!0}}P=b.callback,P!==null&&(t.flags|=64,I&&(t.flags|=8192),I=u.callbacks,I===null?u.callbacks=[P]:I.push(P))}else I={lane:P,tag:b.tag,payload:b.payload,callback:b.callback,next:null},z===null?(M=z=I,S=H):z=z.next=I,v|=P;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;I=b,b=I.next,I.next=null,u.lastBaseUpdate=I,u.shared.pending=null}}while(!0);z===null&&(S=H),u.baseState=S,u.firstBaseUpdate=M,u.lastBaseUpdate=z,d===null&&(u.shared.lanes=0),Oa|=v,t.lanes=v,t.memoizedState=H}}function bm(t,a){if(typeof t!="function")throw Error(o(191,t));t.call(a)}function Tm(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)bm(r[t],a)}var ar=B(null),el=B(0);function Sm(t,a){t=Wn,q(el,t),q(ar,a),Wn=t|a.baseLanes}function Mc(){q(el,Wn),q(ar,ar.current)}function kc(){Wn=el.current,$(ar),$(el)}var Ta=0,mt=null,_t=null,Jt=null,nl=!1,ir=!1,hi=!1,al=0,go=0,rr=null,Hx=0;function Xt(){throw Error(o(321))}function Pc(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!Ie(t[r],a[r]))return!1;return!0}function Nc(t,a,r,s,u,d){return Ta=d,mt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,N.H=t===null||t.memoizedState===null?ig:rg,hi=!1,d=r(s,u),hi=!1,ir&&(d=wm(a,r,s,u)),xm(t),d}function xm(t){N.H=ul;var a=_t!==null&&_t.next!==null;if(Ta=0,Jt=_t=mt=null,nl=!1,go=0,rr=null,a)throw Error(o(300));t===null||le||(t=t.dependencies,t!==null&&Zs(t)&&(le=!0))}function wm(t,a,r,s){mt=t;var u=0;do{if(ir&&(rr=null),go=0,ir=!1,25<=u)throw Error(o(301));if(u+=1,Jt=_t=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}N.H=Kx,d=a(r,s)}while(ir);return d}function jx(){var t=N.H,a=t.useState()[0];return a=typeof a.then=="function"?yo(a):a,t=t.useState()[0],(_t!==null?_t.memoizedState:null)!==t&&(mt.flags|=1024),a}function Ic(){var t=al!==0;return al=0,t}function Lc(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function Uc(t){if(nl){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}nl=!1}Ta=0,Jt=_t=mt=null,ir=!1,go=al=0,rr=null}function De(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?mt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function te(){if(_t===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var a=Jt===null?mt.memoizedState:Jt.next;if(a!==null)Jt=a,_t=t;else{if(t===null)throw mt.alternate===null?Error(o(467)):Error(o(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Jt===null?mt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function zc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(t){var a=go;return go+=1,rr===null&&(rr=[]),t=gm(rr,t,a),a=mt,(Jt===null?a.memoizedState:Jt.next)===null&&(a=a.alternate,N.H=a===null||a.memoizedState===null?ig:rg),t}function il(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return yo(t);if(t.$$typeof===U)return ve(t)}throw Error(o(438,String(t)))}function Vc(t){var a=null,r=mt.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var s=mt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(a={data:s.data.map(function(u){return u.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=zc(),mt.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),s=0;s<t;s++)r[s]=St;return a.index++,r}function Fn(t,a){return typeof a=="function"?a(t):a}function rl(t){var a=te();return Bc(a,_t,t)}function Bc(t,a,r){var s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=r;var u=t.baseQueue,d=s.pending;if(d!==null){if(u!==null){var v=u.next;u.next=d.next,d.next=v}a.baseQueue=u=d,s.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{a=u.next;var b=v=null,S=null,M=a,z=!1;do{var H=M.lane&-536870913;if(H!==M.lane?(bt&H)===H:(Ta&H)===H){var P=M.revertLane;if(P===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),H===er&&(z=!0);else if((Ta&P)===P){M=M.next,P===er&&(z=!0);continue}else H={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(b=S=H,v=d):S=S.next=H,mt.lanes|=P,Oa|=P;H=M.action,hi&&r(d,H),d=M.hasEagerState?M.eagerState:r(d,H)}else P={lane:H,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(b=S=P,v=d):S=S.next=P,mt.lanes|=H,Oa|=H;M=M.next}while(M!==null&&M!==a);if(S===null?v=d:S.next=b,!Ie(d,t.memoizedState)&&(le=!0,z&&(r=nr,r!==null)))throw r;t.memoizedState=d,t.baseState=v,t.baseQueue=S,s.lastRenderedState=d}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Hc(t){var a=te(),r=a.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=t;var s=r.dispatch,u=r.pending,d=a.memoizedState;if(u!==null){r.pending=null;var v=u=u.next;do d=t(d,v.action),v=v.next;while(v!==u);Ie(d,a.memoizedState)||(le=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),r.lastRenderedState=d}return[d,s]}function Em(t,a,r){var s=mt,u=te(),d=xt;if(d){if(r===void 0)throw Error(o(407));r=r()}else r=a();var v=!Ie((_t||u).memoizedState,r);v&&(u.memoizedState=r,le=!0),u=u.queue;var b=Om.bind(null,s,u,t);if(vo(2048,8,b,[t]),u.getSnapshot!==a||v||Jt!==null&&Jt.memoizedState.tag&1){if(s.flags|=2048,or(9,ol(),Am.bind(null,s,u,r,a),null),Mt===null)throw Error(o(349));d||(Ta&124)!==0||_m(s,a,r)}return r}function _m(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=mt.updateQueue,a===null?(a=zc(),mt.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function Am(t,a,r,s){a.value=r,a.getSnapshot=s,Rm(a)&&Cm(t)}function Om(t,a,r){return r(function(){Rm(a)&&Cm(t)})}function Rm(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!Ie(t,r)}catch{return!0}}function Cm(t){var a=Qi(t,2);a!==null&&He(a,t,2)}function jc(t){var a=De();if(typeof t=="function"){var r=t;if(t=r(),hi){rn(!0);try{r()}finally{rn(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:t},a}function Dm(t,a,r,s){return t.baseState=r,Bc(t,_t,typeof s=="function"?s:Fn)}function qx(t,a,r,s,u){if(ll(t))throw Error(o(485));if(t=a.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};N.T!==null?r(!0):d.isTransition=!1,s(d),r=a.pending,r===null?(d.next=a.pending=d,Mm(a,d)):(d.next=r.next,a.pending=r.next=d)}}function Mm(t,a){var r=a.action,s=a.payload,u=t.state;if(a.isTransition){var d=N.T,v={};N.T=v;try{var b=r(u,s),S=N.S;S!==null&&S(v,b),km(t,a,b)}catch(M){qc(t,a,M)}finally{N.T=d}}else try{d=r(u,s),km(t,a,d)}catch(M){qc(t,a,M)}}function km(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(s){Pm(t,a,s)},function(s){return qc(t,a,s)}):Pm(t,a,r)}function Pm(t,a,r){a.status="fulfilled",a.value=r,Nm(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,Mm(t,r)))}function qc(t,a,r){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do a.status="rejected",a.reason=r,Nm(a),a=a.next;while(a!==s)}t.action=null}function Nm(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Im(t,a){return a}function Lm(t,a){if(xt){var r=Mt.formState;if(r!==null){t:{var s=mt;if(xt){if(Ht){e:{for(var u=Ht,d=Tn;u.nodeType!==8;){if(!d){u=null;break e}if(u=un(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ht=un(u.nextSibling),s=u.data==="F!";break t}}ui(s)}s=!1}s&&(a=r[0])}}return r=De(),r.memoizedState=r.baseState=a,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:a},r.queue=s,r=eg.bind(null,mt,s),s.dispatch=r,s=jc(!1),d=Kc.bind(null,mt,!1,s.queue),s=De(),u={state:a,dispatch:null,action:t,pending:null},s.queue=u,r=qx.bind(null,mt,u,d,r),u.dispatch=r,s.memoizedState=t,[a,r,!1]}function Um(t){var a=te();return zm(a,_t,t)}function zm(t,a,r){if(a=Bc(t,a,Im)[0],t=rl(Fn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var s=yo(a)}catch(v){throw v===co?Js:v}else s=a;a=te();var u=a.queue,d=u.dispatch;return r!==a.memoizedState&&(mt.flags|=2048,or(9,ol(),Gx.bind(null,u,r),null)),[s,d,t]}function Gx(t,a){t.action=a}function Vm(t){var a=te(),r=_t;if(r!==null)return zm(a,r,t);te(),a=a.memoizedState,r=te();var s=r.queue.dispatch;return r.memoizedState=t,[a,s,!1]}function or(t,a,r,s){return t={tag:t,create:r,deps:s,inst:a,next:null},a=mt.updateQueue,a===null&&(a=zc(),mt.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(s=r.next,r.next=t,t.next=s,a.lastEffect=t),t}function ol(){return{destroy:void 0,resource:void 0}}function Bm(){return te().memoizedState}function sl(t,a,r,s){var u=De();s=s===void 0?null:s,mt.flags|=t,u.memoizedState=or(1|a,ol(),r,s)}function vo(t,a,r,s){var u=te();s=s===void 0?null:s;var d=u.memoizedState.inst;_t!==null&&s!==null&&Pc(s,_t.memoizedState.deps)?u.memoizedState=or(a,d,r,s):(mt.flags|=t,u.memoizedState=or(1|a,d,r,s))}function Hm(t,a){sl(8390656,8,t,a)}function jm(t,a){vo(2048,8,t,a)}function qm(t,a){return vo(4,2,t,a)}function Gm(t,a){return vo(4,4,t,a)}function Ym(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Fm(t,a,r){r=r!=null?r.concat([t]):null,vo(4,4,Ym.bind(null,a,t),r)}function Gc(){}function Xm(t,a){var r=te();a=a===void 0?null:a;var s=r.memoizedState;return a!==null&&Pc(a,s[1])?s[0]:(r.memoizedState=[t,a],t)}function Km(t,a){var r=te();a=a===void 0?null:a;var s=r.memoizedState;if(a!==null&&Pc(a,s[1]))return s[0];if(s=t(),hi){rn(!0);try{t()}finally{rn(!1)}}return r.memoizedState=[s,a],s}function Yc(t,a,r){return r===void 0||(Ta&1073741824)!==0?t.memoizedState=a:(t.memoizedState=r,t=Qg(),mt.lanes|=t,Oa|=t,r)}function $m(t,a,r,s){return Ie(r,a)?r:ar.current!==null?(t=Yc(t,r,s),Ie(t,a)||(le=!0),t):(Ta&42)===0?(le=!0,t.memoizedState=r):(t=Qg(),mt.lanes|=t,Oa|=t,a)}function Zm(t,a,r,s,u){var d=j.p;j.p=d!==0&&8>d?d:8;var v=N.T,b={};N.T=b,Kc(t,!1,a,r);try{var S=u(),M=N.S;if(M!==null&&M(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var z=Bx(S,s);bo(t,a,z,Be(t))}else bo(t,a,s,Be(t))}catch(H){bo(t,a,{then:function(){},status:"rejected",reason:H},Be())}finally{j.p=d,N.T=v}}function Yx(){}function Fc(t,a,r,s){if(t.tag!==5)throw Error(o(476));var u=Qm(t).queue;Zm(t,u,a,Z,r===null?Yx:function(){return Wm(t),r(s)})}function Qm(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:Z},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Wm(t){var a=Qm(t).next.queue;bo(t,a,{},Be())}function Xc(){return ve(Uo)}function Jm(){return te().memoizedState}function tg(){return te().memoizedState}function Fx(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=Be();t=va(r);var s=ba(a,t,r);s!==null&&(He(s,a,r),ho(s,a,r)),a={cache:wc()},t.payload=a;return}a=a.return}}function Xx(t,a,r){var s=Be();r={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},ll(t)?ng(a,r):(r=hc(t,a,r,s),r!==null&&(He(r,t,s),ag(r,a,s)))}function eg(t,a,r){var s=Be();bo(t,a,r,s)}function bo(t,a,r,s){var u={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(ll(t))ng(a,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var v=a.lastRenderedState,b=d(v,r);if(u.hasEagerState=!0,u.eagerState=b,Ie(b,v))return Ys(t,a,u,0),Mt===null&&Gs(),!1}catch{}finally{}if(r=hc(t,a,u,s),r!==null)return He(r,t,s),ag(r,a,s),!0}return!1}function Kc(t,a,r,s){if(s={lane:2,revertLane:Of(),action:s,hasEagerState:!1,eagerState:null,next:null},ll(t)){if(a)throw Error(o(479))}else a=hc(t,r,s,2),a!==null&&He(a,t,2)}function ll(t){var a=t.alternate;return t===mt||a!==null&&a===mt}function ng(t,a){ir=nl=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function ag(t,a,r){if((r&4194048)!==0){var s=a.lanes;s&=t.pendingLanes,r|=s,a.lanes=r,Gt(t,r)}}var ul={readContext:ve,use:il,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useLayoutEffect:Xt,useInsertionEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useSyncExternalStore:Xt,useId:Xt,useHostTransitionStatus:Xt,useFormState:Xt,useActionState:Xt,useOptimistic:Xt,useMemoCache:Xt,useCacheRefresh:Xt},ig={readContext:ve,use:il,useCallback:function(t,a){return De().memoizedState=[t,a===void 0?null:a],t},useContext:ve,useEffect:Hm,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,sl(4194308,4,Ym.bind(null,a,t),r)},useLayoutEffect:function(t,a){return sl(4194308,4,t,a)},useInsertionEffect:function(t,a){sl(4,2,t,a)},useMemo:function(t,a){var r=De();a=a===void 0?null:a;var s=t();if(hi){rn(!0);try{t()}finally{rn(!1)}}return r.memoizedState=[s,a],s},useReducer:function(t,a,r){var s=De();if(r!==void 0){var u=r(a);if(hi){rn(!0);try{r(a)}finally{rn(!1)}}}else u=a;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Xx.bind(null,mt,t),[s.memoizedState,t]},useRef:function(t){var a=De();return t={current:t},a.memoizedState=t},useState:function(t){t=jc(t);var a=t.queue,r=eg.bind(null,mt,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:Gc,useDeferredValue:function(t,a){var r=De();return Yc(r,t,a)},useTransition:function(){var t=jc(!1);return t=Zm.bind(null,mt,t.queue,!0,!1),De().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var s=mt,u=De();if(xt){if(r===void 0)throw Error(o(407));r=r()}else{if(r=a(),Mt===null)throw Error(o(349));(bt&124)!==0||_m(s,a,r)}u.memoizedState=r;var d={value:r,getSnapshot:a};return u.queue=d,Hm(Om.bind(null,s,d,t),[t]),s.flags|=2048,or(9,ol(),Am.bind(null,s,d,r,a),null),r},useId:function(){var t=De(),a=Mt.identifierPrefix;if(xt){var r=qn,s=jn;r=(s&~(1<<32-fe(s)-1)).toString(32)+r,a="«"+a+"R"+r,r=al++,0<r&&(a+="H"+r.toString(32)),a+="»"}else r=Hx++,a="«"+a+"r"+r.toString(32)+"»";return t.memoizedState=a},useHostTransitionStatus:Xc,useFormState:Lm,useActionState:Lm,useOptimistic:function(t){var a=De();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=Kc.bind(null,mt,!0,r),r.dispatch=a,[t,a]},useMemoCache:Vc,useCacheRefresh:function(){return De().memoizedState=Fx.bind(null,mt)}},rg={readContext:ve,use:il,useCallback:Xm,useContext:ve,useEffect:jm,useImperativeHandle:Fm,useInsertionEffect:qm,useLayoutEffect:Gm,useMemo:Km,useReducer:rl,useRef:Bm,useState:function(){return rl(Fn)},useDebugValue:Gc,useDeferredValue:function(t,a){var r=te();return $m(r,_t.memoizedState,t,a)},useTransition:function(){var t=rl(Fn)[0],a=te().memoizedState;return[typeof t=="boolean"?t:yo(t),a]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:Xc,useFormState:Um,useActionState:Um,useOptimistic:function(t,a){var r=te();return Dm(r,_t,t,a)},useMemoCache:Vc,useCacheRefresh:tg},Kx={readContext:ve,use:il,useCallback:Xm,useContext:ve,useEffect:jm,useImperativeHandle:Fm,useInsertionEffect:qm,useLayoutEffect:Gm,useMemo:Km,useReducer:Hc,useRef:Bm,useState:function(){return Hc(Fn)},useDebugValue:Gc,useDeferredValue:function(t,a){var r=te();return _t===null?Yc(r,t,a):$m(r,_t.memoizedState,t,a)},useTransition:function(){var t=Hc(Fn)[0],a=te().memoizedState;return[typeof t=="boolean"?t:yo(t),a]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:Xc,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,a){var r=te();return _t!==null?Dm(r,_t,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Vc,useCacheRefresh:tg},sr=null,To=0;function cl(t){var a=To;return To+=1,sr===null&&(sr=[]),gm(sr,t,a)}function So(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function fl(t,a){throw a.$$typeof===y?Error(o(525)):(t=Object.prototype.toString.call(a),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function og(t){var a=t._init;return a(t._payload)}function sg(t){function a(O,E){if(t){var C=O.deletions;C===null?(O.deletions=[E],O.flags|=16):C.push(E)}}function r(O,E){if(!t)return null;for(;E!==null;)a(O,E),E=E.sibling;return null}function s(O){for(var E=new Map;O!==null;)O.key!==null?E.set(O.key,O):E.set(O.index,O),O=O.sibling;return E}function u(O,E){return O=Hn(O,E),O.index=0,O.sibling=null,O}function d(O,E,C){return O.index=C,t?(C=O.alternate,C!==null?(C=C.index,C<E?(O.flags|=67108866,E):C):(O.flags|=67108866,E)):(O.flags|=1048576,E)}function v(O){return t&&O.alternate===null&&(O.flags|=67108866),O}function b(O,E,C,V){return E===null||E.tag!==6?(E=mc(C,O.mode,V),E.return=O,E):(E=u(E,C),E.return=O,E)}function S(O,E,C,V){var W=C.type;return W===_?z(O,E,C.props.children,V,C.key):E!==null&&(E.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Q&&og(W)===E.type)?(E=u(E,C.props),So(E,C),E.return=O,E):(E=Xs(C.type,C.key,C.props,null,O.mode,V),So(E,C),E.return=O,E)}function M(O,E,C,V){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=gc(C,O.mode,V),E.return=O,E):(E=u(E,C.children||[]),E.return=O,E)}function z(O,E,C,V,W){return E===null||E.tag!==7?(E=ri(C,O.mode,V,W),E.return=O,E):(E=u(E,C),E.return=O,E)}function H(O,E,C){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=mc(""+E,O.mode,C),E.return=O,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case T:return C=Xs(E.type,E.key,E.props,null,O.mode,C),So(C,E),C.return=O,C;case w:return E=gc(E,O.mode,C),E.return=O,E;case Q:var V=E._init;return E=V(E._payload),H(O,E,C)}if(Pt(E)||kt(E))return E=ri(E,O.mode,C,null),E.return=O,E;if(typeof E.then=="function")return H(O,cl(E),C);if(E.$$typeof===U)return H(O,Qs(O,E),C);fl(O,E)}return null}function P(O,E,C,V){var W=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return W!==null?null:b(O,E,""+C,V);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case T:return C.key===W?S(O,E,C,V):null;case w:return C.key===W?M(O,E,C,V):null;case Q:return W=C._init,C=W(C._payload),P(O,E,C,V)}if(Pt(C)||kt(C))return W!==null?null:z(O,E,C,V,null);if(typeof C.then=="function")return P(O,E,cl(C),V);if(C.$$typeof===U)return P(O,E,Qs(O,C),V);fl(O,C)}return null}function I(O,E,C,V,W){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return O=O.get(C)||null,b(E,O,""+V,W);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case T:return O=O.get(V.key===null?C:V.key)||null,S(E,O,V,W);case w:return O=O.get(V.key===null?C:V.key)||null,M(E,O,V,W);case Q:var gt=V._init;return V=gt(V._payload),I(O,E,C,V,W)}if(Pt(V)||kt(V))return O=O.get(C)||null,z(E,O,V,W,null);if(typeof V.then=="function")return I(O,E,C,cl(V),W);if(V.$$typeof===U)return I(O,E,C,Qs(E,V),W);fl(E,V)}return null}function ct(O,E,C,V){for(var W=null,gt=null,et=E,st=E=0,ce=null;et!==null&&st<C.length;st++){et.index>st?(ce=et,et=null):ce=et.sibling;var Tt=P(O,et,C[st],V);if(Tt===null){et===null&&(et=ce);break}t&&et&&Tt.alternate===null&&a(O,et),E=d(Tt,E,st),gt===null?W=Tt:gt.sibling=Tt,gt=Tt,et=ce}if(st===C.length)return r(O,et),xt&&si(O,st),W;if(et===null){for(;st<C.length;st++)et=H(O,C[st],V),et!==null&&(E=d(et,E,st),gt===null?W=et:gt.sibling=et,gt=et);return xt&&si(O,st),W}for(et=s(et);st<C.length;st++)ce=I(et,O,st,C[st],V),ce!==null&&(t&&ce.alternate!==null&&et.delete(ce.key===null?st:ce.key),E=d(ce,E,st),gt===null?W=ce:gt.sibling=ce,gt=ce);return t&&et.forEach(function(La){return a(O,La)}),xt&&si(O,st),W}function ot(O,E,C,V){if(C==null)throw Error(o(151));for(var W=null,gt=null,et=E,st=E=0,ce=null,Tt=C.next();et!==null&&!Tt.done;st++,Tt=C.next()){et.index>st?(ce=et,et=null):ce=et.sibling;var La=P(O,et,Tt.value,V);if(La===null){et===null&&(et=ce);break}t&&et&&La.alternate===null&&a(O,et),E=d(La,E,st),gt===null?W=La:gt.sibling=La,gt=La,et=ce}if(Tt.done)return r(O,et),xt&&si(O,st),W;if(et===null){for(;!Tt.done;st++,Tt=C.next())Tt=H(O,Tt.value,V),Tt!==null&&(E=d(Tt,E,st),gt===null?W=Tt:gt.sibling=Tt,gt=Tt);return xt&&si(O,st),W}for(et=s(et);!Tt.done;st++,Tt=C.next())Tt=I(et,O,st,Tt.value,V),Tt!==null&&(t&&Tt.alternate!==null&&et.delete(Tt.key===null?st:Tt.key),E=d(Tt,E,st),gt===null?W=Tt:gt.sibling=Tt,gt=Tt);return t&&et.forEach(function($w){return a(O,$w)}),xt&&si(O,st),W}function Ot(O,E,C,V){if(typeof C=="object"&&C!==null&&C.type===_&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case T:t:{for(var W=C.key;E!==null;){if(E.key===W){if(W=C.type,W===_){if(E.tag===7){r(O,E.sibling),V=u(E,C.props.children),V.return=O,O=V;break t}}else if(E.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Q&&og(W)===E.type){r(O,E.sibling),V=u(E,C.props),So(V,C),V.return=O,O=V;break t}r(O,E);break}else a(O,E);E=E.sibling}C.type===_?(V=ri(C.props.children,O.mode,V,C.key),V.return=O,O=V):(V=Xs(C.type,C.key,C.props,null,O.mode,V),So(V,C),V.return=O,O=V)}return v(O);case w:t:{for(W=C.key;E!==null;){if(E.key===W)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){r(O,E.sibling),V=u(E,C.children||[]),V.return=O,O=V;break t}else{r(O,E);break}else a(O,E);E=E.sibling}V=gc(C,O.mode,V),V.return=O,O=V}return v(O);case Q:return W=C._init,C=W(C._payload),Ot(O,E,C,V)}if(Pt(C))return ct(O,E,C,V);if(kt(C)){if(W=kt(C),typeof W!="function")throw Error(o(150));return C=W.call(C),ot(O,E,C,V)}if(typeof C.then=="function")return Ot(O,E,cl(C),V);if(C.$$typeof===U)return Ot(O,E,Qs(O,C),V);fl(O,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,E!==null&&E.tag===6?(r(O,E.sibling),V=u(E,C),V.return=O,O=V):(r(O,E),V=mc(C,O.mode,V),V.return=O,O=V),v(O)):r(O,E)}return function(O,E,C,V){try{To=0;var W=Ot(O,E,C,V);return sr=null,W}catch(et){if(et===co||et===Js)throw et;var gt=Le(29,et,null,O.mode);return gt.lanes=V,gt.return=O,gt}finally{}}}var lr=sg(!0),lg=sg(!1),Qe=B(null),Sn=null;function Sa(t){var a=t.alternate;q(ie,ie.current&1),q(Qe,t),Sn===null&&(a===null||ar.current!==null||a.memoizedState!==null)&&(Sn=t)}function ug(t){if(t.tag===22){if(q(ie,ie.current),q(Qe,t),Sn===null){var a=t.alternate;a!==null&&a.memoizedState!==null&&(Sn=t)}}else xa()}function xa(){q(ie,ie.current),q(Qe,Qe.current)}function Xn(t){$(Qe),Sn===t&&(Sn=null),$(ie)}var ie=B(0);function dl(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Vf(r)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function $c(t,a,r,s){a=t.memoizedState,r=r(s,a),r=r==null?a:g({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Zc={enqueueSetState:function(t,a,r){t=t._reactInternals;var s=Be(),u=va(s);u.payload=a,r!=null&&(u.callback=r),a=ba(t,u,s),a!==null&&(He(a,t,s),ho(a,t,s))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var s=Be(),u=va(s);u.tag=1,u.payload=a,r!=null&&(u.callback=r),a=ba(t,u,s),a!==null&&(He(a,t,s),ho(a,t,s))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=Be(),s=va(r);s.tag=2,a!=null&&(s.callback=a),a=ba(t,s,r),a!==null&&(He(a,t,r),ho(a,t,r))}};function cg(t,a,r,s,u,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,d,v):a.prototype&&a.prototype.isPureReactComponent?!no(r,s)||!no(u,d):!0}function fg(t,a,r,s){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,s),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,s),a.state!==t&&Zc.enqueueReplaceState(a,a.state,null)}function pi(t,a){var r=a;if("ref"in a){r={};for(var s in a)s!=="ref"&&(r[s]=a[s])}if(t=t.defaultProps){r===a&&(r=g({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function dg(t){hl(t)}function hg(t){console.error(t)}function pg(t){hl(t)}function pl(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(s){setTimeout(function(){throw s})}}function mg(t,a,r){try{var s=t.onCaughtError;s(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qc(t,a,r){return r=va(r),r.tag=3,r.payload={element:null},r.callback=function(){pl(t,a)},r}function gg(t){return t=va(t),t.tag=3,t}function yg(t,a,r,s){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=s.value;t.payload=function(){return u(d)},t.callback=function(){mg(a,r,s)}}var v=r.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){mg(a,r,s),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function $x(t,a,r,s,u){if(r.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(a=r.alternate,a!==null&&so(a,r,u,!0),r=Qe.current,r!==null){switch(r.tag){case 13:return Sn===null?xf():r.alternate===null&&jt===0&&(jt=3),r.flags&=-257,r.flags|=65536,r.lanes=u,s===Ac?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([s]):a.add(s),Ef(t,s,u)),!1;case 22:return r.flags|=65536,s===Ac?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([s])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([s]):r.add(s)),Ef(t,s,u)),!1}throw Error(o(435,r.tag))}return Ef(t,s,u),xf(),!1}if(xt)return a=Qe.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=u,s!==bc&&(t=Error(o(422),{cause:s}),oo(Xe(t,r)))):(s!==bc&&(a=Error(o(423),{cause:s}),oo(Xe(a,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Xe(s,r),u=Qc(t.stateNode,s,u),Cc(t,u),jt!==4&&(jt=2)),!1;var d=Error(o(520),{cause:s});if(d=Xe(d,r),Ro===null?Ro=[d]:Ro.push(d),jt!==4&&(jt=2),a===null)return!0;s=Xe(s,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=Qc(r.stateNode,s,t),Cc(r,t),!1;case 1:if(a=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ra===null||!Ra.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=gg(u),yg(u,t,r,s),Cc(r,u),!1}r=r.return}while(r!==null);return!1}var vg=Error(o(461)),le=!1;function he(t,a,r,s){a.child=t===null?lg(a,null,r,s):lr(a,t.child,r,s)}function bg(t,a,r,s,u){r=r.render;var d=a.ref;if("ref"in s){var v={};for(var b in s)b!=="ref"&&(v[b]=s[b])}else v=s;return fi(a),s=Nc(t,a,r,v,d,u),b=Ic(),t!==null&&!le?(Lc(t,a,u),Kn(t,a,u)):(xt&&b&&yc(a),a.flags|=1,he(t,a,s,u),a.child)}function Tg(t,a,r,s,u){if(t===null){var d=r.type;return typeof d=="function"&&!pc(d)&&d.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=d,Sg(t,a,d,s,u)):(t=Xs(r.type,null,s,a,a.mode,u),t.ref=a.ref,t.return=a,a.child=t)}if(d=t.child,!of(t,u)){var v=d.memoizedProps;if(r=r.compare,r=r!==null?r:no,r(v,s)&&t.ref===a.ref)return Kn(t,a,u)}return a.flags|=1,t=Hn(d,s),t.ref=a.ref,t.return=a,a.child=t}function Sg(t,a,r,s,u){if(t!==null){var d=t.memoizedProps;if(no(d,s)&&t.ref===a.ref)if(le=!1,a.pendingProps=s=d,of(t,u))(t.flags&131072)!==0&&(le=!0);else return a.lanes=t.lanes,Kn(t,a,u)}return Wc(t,a,r,s,u)}function xg(t,a,r){var s=a.pendingProps,u=s.children,d=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((a.flags&128)!==0){if(s=d!==null?d.baseLanes|r:r,t!==null){for(u=a.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;a.childLanes=d&~s}else a.childLanes=0,a.child=null;return wg(t,a,s,r)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ws(a,d!==null?d.cachePool:null),d!==null?Sm(a,d):Mc(),ug(a);else return a.lanes=a.childLanes=536870912,wg(t,a,d!==null?d.baseLanes|r:r,r)}else d!==null?(Ws(a,d.cachePool),Sm(a,d),xa(),a.memoizedState=null):(t!==null&&Ws(a,null),Mc(),xa());return he(t,a,u,r),a.child}function wg(t,a,r,s){var u=_c();return u=u===null?null:{parent:ae._currentValue,pool:u},a.memoizedState={baseLanes:r,cachePool:u},t!==null&&Ws(a,null),Mc(),ug(a),t!==null&&so(t,a,s,!0),null}function ml(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(o(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function Wc(t,a,r,s,u){return fi(a),r=Nc(t,a,r,s,void 0,u),s=Ic(),t!==null&&!le?(Lc(t,a,u),Kn(t,a,u)):(xt&&s&&yc(a),a.flags|=1,he(t,a,r,u),a.child)}function Eg(t,a,r,s,u,d){return fi(a),a.updateQueue=null,r=wm(a,s,r,u),xm(t),s=Ic(),t!==null&&!le?(Lc(t,a,d),Kn(t,a,d)):(xt&&s&&yc(a),a.flags|=1,he(t,a,r,d),a.child)}function _g(t,a,r,s,u){if(fi(a),a.stateNode===null){var d=Wi,v=r.contextType;typeof v=="object"&&v!==null&&(d=ve(v)),d=new r(s,d),a.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Zc,a.stateNode=d,d._reactInternals=a,d=a.stateNode,d.props=s,d.state=a.memoizedState,d.refs={},Oc(a),v=r.contextType,d.context=typeof v=="object"&&v!==null?ve(v):Wi,d.state=a.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&($c(a,r,v,s),d.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Zc.enqueueReplaceState(d,d.state,null),mo(a,s,d,u),po(),d.state=a.memoizedState),typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!0}else if(t===null){d=a.stateNode;var b=a.memoizedProps,S=pi(r,b);d.props=S;var M=d.context,z=r.contextType;v=Wi,typeof z=="object"&&z!==null&&(v=ve(z));var H=r.getDerivedStateFromProps;z=typeof H=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=a.pendingProps!==b,z||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||M!==v)&&fg(a,d,s,v),ya=!1;var P=a.memoizedState;d.state=P,mo(a,s,d,u),po(),M=a.memoizedState,b||P!==M||ya?(typeof H=="function"&&($c(a,r,H,s),M=a.memoizedState),(S=ya||cg(a,r,S,s,P,M,v))?(z||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=s,a.memoizedState=M),d.props=s,d.state=M,d.context=v,s=S):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!1)}else{d=a.stateNode,Rc(t,a),v=a.memoizedProps,z=pi(r,v),d.props=z,H=a.pendingProps,P=d.context,M=r.contextType,S=Wi,typeof M=="object"&&M!==null&&(S=ve(M)),b=r.getDerivedStateFromProps,(M=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==H||P!==S)&&fg(a,d,s,S),ya=!1,P=a.memoizedState,d.state=P,mo(a,s,d,u),po();var I=a.memoizedState;v!==H||P!==I||ya||t!==null&&t.dependencies!==null&&Zs(t.dependencies)?(typeof b=="function"&&($c(a,r,b,s),I=a.memoizedState),(z=ya||cg(a,r,z,s,P,I,S)||t!==null&&t.dependencies!==null&&Zs(t.dependencies))?(M||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,I,S),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,I,S)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&P===t.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&P===t.memoizedState||(a.flags|=1024),a.memoizedProps=s,a.memoizedState=I),d.props=s,d.state=I,d.context=S,s=z):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&P===t.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&P===t.memoizedState||(a.flags|=1024),s=!1)}return d=s,ml(t,a),s=(a.flags&128)!==0,d||s?(d=a.stateNode,r=s&&typeof r.getDerivedStateFromError!="function"?null:d.render(),a.flags|=1,t!==null&&s?(a.child=lr(a,t.child,null,u),a.child=lr(a,null,r,u)):he(t,a,r,u),a.memoizedState=d.state,t=a.child):t=Kn(t,a,u),t}function Ag(t,a,r,s){return ro(),a.flags|=256,he(t,a,r,s),a.child}var Jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tf(t){return{baseLanes:t,cachePool:hm()}}function ef(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=We),t}function Og(t,a,r){var s=a.pendingProps,u=!1,d=(a.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(ie.current&2)!==0),v&&(u=!0,a.flags&=-129),v=(a.flags&32)!==0,a.flags&=-33,t===null){if(xt){if(u?Sa(a):xa(),xt){var b=Ht,S;if(S=b){t:{for(S=b,b=Tn;S.nodeType!==8;){if(!b){b=null;break t}if(S=un(S.nextSibling),S===null){b=null;break t}}b=S}b!==null?(a.memoizedState={dehydrated:b,treeContext:oi!==null?{id:jn,overflow:qn}:null,retryLane:536870912,hydrationErrors:null},S=Le(18,null,null,0),S.stateNode=b,S.return=a,a.child=S,_e=a,Ht=null,S=!0):S=!1}S||ui(a)}if(b=a.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Vf(b)?a.lanes=32:a.lanes=536870912,null;Xn(a)}return b=s.children,s=s.fallback,u?(xa(),u=a.mode,b=gl({mode:"hidden",children:b},u),s=ri(s,u,r,null),b.return=a,s.return=a,b.sibling=s,a.child=b,u=a.child,u.memoizedState=tf(r),u.childLanes=ef(t,v,r),a.memoizedState=Jc,s):(Sa(a),nf(a,b))}if(S=t.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(d)a.flags&256?(Sa(a),a.flags&=-257,a=af(t,a,r)):a.memoizedState!==null?(xa(),a.child=t.child,a.flags|=128,a=null):(xa(),u=s.fallback,b=a.mode,s=gl({mode:"visible",children:s.children},b),u=ri(u,b,r,null),u.flags|=2,s.return=a,u.return=a,s.sibling=u,a.child=s,lr(a,t.child,null,r),s=a.child,s.memoizedState=tf(r),s.childLanes=ef(t,v,r),a.memoizedState=Jc,a=u);else if(Sa(a),Vf(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var M=v.dgst;v=M,s=Error(o(419)),s.stack="",s.digest=v,oo({value:s,source:null,stack:null}),a=af(t,a,r)}else if(le||so(t,a,r,!1),v=(r&t.childLanes)!==0,le||v){if(v=Mt,v!==null&&(s=r&-r,s=(s&42)!==0?1:Wt(s),s=(s&(v.suspendedLanes|r))!==0?0:s,s!==0&&s!==S.retryLane))throw S.retryLane=s,Qi(t,s),He(v,t,s),vg;b.data==="$?"||xf(),a=af(t,a,r)}else b.data==="$?"?(a.flags|=192,a.child=t.child,a=null):(t=S.treeContext,Ht=un(b.nextSibling),_e=a,xt=!0,li=null,Tn=!1,t!==null&&($e[Ze++]=jn,$e[Ze++]=qn,$e[Ze++]=oi,jn=t.id,qn=t.overflow,oi=a),a=nf(a,s.children),a.flags|=4096);return a}return u?(xa(),u=s.fallback,b=a.mode,S=t.child,M=S.sibling,s=Hn(S,{mode:"hidden",children:s.children}),s.subtreeFlags=S.subtreeFlags&65011712,M!==null?u=Hn(M,u):(u=ri(u,b,r,null),u.flags|=2),u.return=a,s.return=a,s.sibling=u,a.child=s,s=u,u=a.child,b=t.child.memoizedState,b===null?b=tf(r):(S=b.cachePool,S!==null?(M=ae._currentValue,S=S.parent!==M?{parent:M,pool:M}:S):S=hm(),b={baseLanes:b.baseLanes|r,cachePool:S}),u.memoizedState=b,u.childLanes=ef(t,v,r),a.memoizedState=Jc,s):(Sa(a),r=t.child,t=r.sibling,r=Hn(r,{mode:"visible",children:s.children}),r.return=a,r.sibling=null,t!==null&&(v=a.deletions,v===null?(a.deletions=[t],a.flags|=16):v.push(t)),a.child=r,a.memoizedState=null,r)}function nf(t,a){return a=gl({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function gl(t,a){return t=Le(22,t,null,a),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function af(t,a,r){return lr(a,t.child,null,r),t=nf(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Rg(t,a,r){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a),Sc(t.return,a,r)}function rf(t,a,r,s,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:u}:(d.isBackwards=a,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=r,d.tailMode=u)}function Cg(t,a,r){var s=a.pendingProps,u=s.revealOrder,d=s.tail;if(he(t,a,s.children,r),s=ie.current,(s&2)!==0)s=s&1|2,a.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rg(t,r,a);else if(t.tag===19)Rg(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(q(ie,s),u){case"forwards":for(r=a.child,u=null;r!==null;)t=r.alternate,t!==null&&dl(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=a.child,a.child=null):(u=r.sibling,r.sibling=null),rf(a,!1,u,r,d);break;case"backwards":for(r=null,u=a.child,a.child=null;u!==null;){if(t=u.alternate,t!==null&&dl(t)===null){a.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}rf(a,!0,r,null,d);break;case"together":rf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Kn(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),Oa|=a.lanes,(r&a.childLanes)===0)if(t!==null){if(so(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(o(153));if(a.child!==null){for(t=a.child,r=Hn(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=Hn(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function of(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Zs(t)))}function Zx(t,a,r){switch(a.tag){case 3:lt(a,a.stateNode.containerInfo),ga(a,ae,t.memoizedState.cache),ro();break;case 27:case 5:fa(a);break;case 4:lt(a,a.stateNode.containerInfo);break;case 10:ga(a,a.type,a.memoizedProps.value);break;case 13:var s=a.memoizedState;if(s!==null)return s.dehydrated!==null?(Sa(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Og(t,a,r):(Sa(a),t=Kn(t,a,r),t!==null?t.sibling:null);Sa(a);break;case 19:var u=(t.flags&128)!==0;if(s=(r&a.childLanes)!==0,s||(so(t,a,r,!1),s=(r&a.childLanes)!==0),u){if(s)return Cg(t,a,r);a.flags|=128}if(u=a.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),q(ie,ie.current),s)break;return null;case 22:case 23:return a.lanes=0,xg(t,a,r);case 24:ga(a,ae,t.memoizedState.cache)}return Kn(t,a,r)}function Dg(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)le=!0;else{if(!of(t,r)&&(a.flags&128)===0)return le=!1,Zx(t,a,r);le=(t.flags&131072)!==0}else le=!1,xt&&(a.flags&1048576)!==0&&om(a,$s,a.index);switch(a.lanes=0,a.tag){case 16:t:{t=a.pendingProps;var s=a.elementType,u=s._init;if(s=u(s._payload),a.type=s,typeof s=="function")pc(s)?(t=pi(s,t),a.tag=1,a=_g(null,a,s,t,r)):(a.tag=0,a=Wc(null,a,s,t,r));else{if(s!=null){if(u=s.$$typeof,u===K){a.tag=11,a=bg(null,a,s,t,r);break t}else if(u===it){a.tag=14,a=Tg(null,a,s,t,r);break t}}throw a=Se(s)||s,Error(o(306,a,""))}}return a;case 0:return Wc(t,a,a.type,a.pendingProps,r);case 1:return s=a.type,u=pi(s,a.pendingProps),_g(t,a,s,u,r);case 3:t:{if(lt(a,a.stateNode.containerInfo),t===null)throw Error(o(387));s=a.pendingProps;var d=a.memoizedState;u=d.element,Rc(t,a),mo(a,s,null,r);var v=a.memoizedState;if(s=v.cache,ga(a,ae,s),s!==d.cache&&xc(a,[ae],r,!0),po(),s=v.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:v.cache},a.updateQueue.baseState=d,a.memoizedState=d,a.flags&256){a=Ag(t,a,s,r);break t}else if(s!==u){u=Xe(Error(o(424)),a),oo(u),a=Ag(t,a,s,r);break t}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ht=un(t.firstChild),_e=a,xt=!0,li=null,Tn=!0,r=lg(a,null,s,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(ro(),s===u){a=Kn(t,a,r);break t}he(t,a,s,r)}a=a.child}return a;case 26:return ml(t,a),t===null?(r=N0(a.type,null,a.pendingProps,null))?a.memoizedState=r:xt||(r=a.type,t=a.pendingProps,s=Dl(tt.current).createElement(r),s[Ft]=a,s[Dt]=t,me(s,r,t),se(s),a.stateNode=s):a.memoizedState=N0(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return fa(a),t===null&&xt&&(s=a.stateNode=M0(a.type,a.pendingProps,tt.current),_e=a,Tn=!0,u=Ht,Ma(a.type)?(Bf=u,Ht=un(s.firstChild)):Ht=u),he(t,a,a.pendingProps.children,r),ml(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&xt&&((u=s=Ht)&&(s=Ew(s,a.type,a.pendingProps,Tn),s!==null?(a.stateNode=s,_e=a,Ht=un(s.firstChild),Tn=!1,u=!0):u=!1),u||ui(a)),fa(a),u=a.type,d=a.pendingProps,v=t!==null?t.memoizedProps:null,s=d.children,Lf(u,d)?s=null:v!==null&&Lf(u,v)&&(a.flags|=32),a.memoizedState!==null&&(u=Nc(t,a,jx,null,null,r),Uo._currentValue=u),ml(t,a),he(t,a,s,r),a.child;case 6:return t===null&&xt&&((t=r=Ht)&&(r=_w(r,a.pendingProps,Tn),r!==null?(a.stateNode=r,_e=a,Ht=null,t=!0):t=!1),t||ui(a)),null;case 13:return Og(t,a,r);case 4:return lt(a,a.stateNode.containerInfo),s=a.pendingProps,t===null?a.child=lr(a,null,s,r):he(t,a,s,r),a.child;case 11:return bg(t,a,a.type,a.pendingProps,r);case 7:return he(t,a,a.pendingProps,r),a.child;case 8:return he(t,a,a.pendingProps.children,r),a.child;case 12:return he(t,a,a.pendingProps.children,r),a.child;case 10:return s=a.pendingProps,ga(a,a.type,s.value),he(t,a,s.children,r),a.child;case 9:return u=a.type._context,s=a.pendingProps.children,fi(a),u=ve(u),s=s(u),a.flags|=1,he(t,a,s,r),a.child;case 14:return Tg(t,a,a.type,a.pendingProps,r);case 15:return Sg(t,a,a.type,a.pendingProps,r);case 19:return Cg(t,a,r);case 31:return s=a.pendingProps,r=a.mode,s={mode:s.mode,children:s.children},t===null?(r=gl(s,r),r.ref=a.ref,a.child=r,r.return=a,a=r):(r=Hn(t.child,s),r.ref=a.ref,a.child=r,r.return=a,a=r),a;case 22:return xg(t,a,r);case 24:return fi(a),s=ve(ae),t===null?(u=_c(),u===null&&(u=Mt,d=wc(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),a.memoizedState={parent:s,cache:u},Oc(a),ga(a,ae,u)):((t.lanes&r)!==0&&(Rc(t,a),mo(a,null,null,r),po()),u=t.memoizedState,d=a.memoizedState,u.parent!==s?(u={parent:s,cache:s},a.memoizedState=u,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=u),ga(a,ae,s)):(s=d.cache,ga(a,ae,s),s!==u.cache&&xc(a,[ae],r,!0))),he(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(o(156,a.tag))}function $n(t){t.flags|=4}function Mg(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!V0(a)){if(a=Qe.current,a!==null&&((bt&4194048)===bt?Sn!==null:(bt&62914560)!==bt&&(bt&536870912)===0||a!==Sn))throw fo=Ac,pm;t.flags|=8192}}function yl(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?Ms():536870912,t.lanes|=a,dr|=a)}function xo(t,a){if(!xt)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function zt(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,s=0;if(a)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=r,a}function Qx(t,a,r){var s=a.pendingProps;switch(vc(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(a),null;case 1:return zt(a),null;case 3:return r=a.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Yn(ae),xe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(io(a)?$n(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,um())),zt(a),null;case 26:return r=a.memoizedState,t===null?($n(a),r!==null?(zt(a),Mg(a,r)):(zt(a),a.flags&=-16777217)):r?r!==t.memoizedState?($n(a),zt(a),Mg(a,r)):(zt(a),a.flags&=-16777217):(t.memoizedProps!==s&&$n(a),zt(a),a.flags&=-16777217),null;case 27:Ln(a),r=tt.current;var u=a.type;if(t!==null&&a.stateNode!=null)t.memoizedProps!==s&&$n(a);else{if(!s){if(a.stateNode===null)throw Error(o(166));return zt(a),null}t=X.current,io(a)?sm(a):(t=M0(u,s,r),a.stateNode=t,$n(a))}return zt(a),null;case 5:if(Ln(a),r=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==s&&$n(a);else{if(!s){if(a.stateNode===null)throw Error(o(166));return zt(a),null}if(t=X.current,io(a))sm(a);else{switch(u=Dl(tt.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?u.createElement(r,{is:s.is}):u.createElement(r)}}t[Ft]=a,t[Dt]=s;t:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break t;for(;u.sibling===null;){if(u.return===null||u.return===a)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=t;t:switch(me(t,r,s),r){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&$n(a)}}return zt(a),a.flags&=-16777217,null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==s&&$n(a);else{if(typeof s!="string"&&a.stateNode===null)throw Error(o(166));if(t=tt.current,io(a)){if(t=a.stateNode,r=a.memoizedProps,s=null,u=_e,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Ft]=a,t=!!(t.nodeValue===r||s!==null&&s.suppressHydrationWarning===!0||E0(t.nodeValue,r)),t||ui(a)}else t=Dl(t).createTextNode(s),t[Ft]=a,a.stateNode=t}return zt(a),null;case 13:if(s=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=io(a),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(o(318));if(u=a.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[Ft]=a}else ro(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;zt(a),u=!1}else u=um(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return a.flags&256?(Xn(a),a):(Xn(a),null)}if(Xn(a),(a.flags&128)!==0)return a.lanes=r,a;if(r=s!==null,t=t!==null&&t.memoizedState!==null,r){s=a.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var d=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(d=s.memoizedState.cachePool.pool),d!==u&&(s.flags|=2048)}return r!==t&&r&&(a.child.flags|=8192),yl(a,a.updateQueue),zt(a),null;case 4:return xe(),t===null&&Mf(a.stateNode.containerInfo),zt(a),null;case 10:return Yn(a.type),zt(a),null;case 19:if($(ie),u=a.memoizedState,u===null)return zt(a),null;if(s=(a.flags&128)!==0,d=u.rendering,d===null)if(s)xo(u,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(d=dl(t),d!==null){for(a.flags|=128,xo(u,!1),t=d.updateQueue,a.updateQueue=t,yl(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)rm(r,t),r=r.sibling;return q(ie,ie.current&1|2),a.child}t=t.sibling}u.tail!==null&&ye()>Tl&&(a.flags|=128,s=!0,xo(u,!1),a.lanes=4194304)}else{if(!s)if(t=dl(d),t!==null){if(a.flags|=128,s=!0,t=t.updateQueue,a.updateQueue=t,yl(a,t),xo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!xt)return zt(a),null}else 2*ye()-u.renderingStartTime>Tl&&r!==536870912&&(a.flags|=128,s=!0,xo(u,!1),a.lanes=4194304);u.isBackwards?(d.sibling=a.child,a.child=d):(t=u.last,t!==null?t.sibling=d:a.child=d,u.last=d)}return u.tail!==null?(a=u.tail,u.rendering=a,u.tail=a.sibling,u.renderingStartTime=ye(),a.sibling=null,t=ie.current,q(ie,s?t&1|2:t&1),a):(zt(a),null);case 22:case 23:return Xn(a),kc(),s=a.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(a.flags|=8192):s&&(a.flags|=8192),s?(r&536870912)!==0&&(a.flags&128)===0&&(zt(a),a.subtreeFlags&6&&(a.flags|=8192)):zt(a),r=a.updateQueue,r!==null&&yl(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==r&&(a.flags|=2048),t!==null&&$(di),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),Yn(ae),zt(a),null;case 25:return null;case 30:return null}throw Error(o(156,a.tag))}function Wx(t,a){switch(vc(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Yn(ae),xe(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Ln(a),null;case 13:if(Xn(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(o(340));ro()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return $(ie),null;case 4:return xe(),null;case 10:return Yn(a.type),null;case 22:case 23:return Xn(a),kc(),t!==null&&$(di),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Yn(ae),null;case 25:return null;default:return null}}function kg(t,a){switch(vc(a),a.tag){case 3:Yn(ae),xe();break;case 26:case 27:case 5:Ln(a);break;case 4:xe();break;case 13:Xn(a);break;case 19:$(ie);break;case 10:Yn(a.type);break;case 22:case 23:Xn(a),kc(),t!==null&&$(di);break;case 24:Yn(ae)}}function wo(t,a){try{var r=a.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var u=s.next;r=u;do{if((r.tag&t)===t){s=void 0;var d=r.create,v=r.inst;s=d(),v.destroy=s}r=r.next}while(r!==u)}}catch(b){Rt(a,a.return,b)}}function wa(t,a,r){try{var s=a.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var d=u.next;s=d;do{if((s.tag&t)===t){var v=s.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=a;var S=r,M=b;try{M()}catch(z){Rt(u,S,z)}}}s=s.next}while(s!==d)}}catch(z){Rt(a,a.return,z)}}function Pg(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{Tm(a,r)}catch(s){Rt(t,t.return,s)}}}function Ng(t,a,r){r.props=pi(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(s){Rt(t,a,s)}}function Eo(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof r=="function"?t.refCleanup=r(s):r.current=s}}catch(u){Rt(t,a,u)}}function xn(t,a){var r=t.ref,s=t.refCleanup;if(r!==null)if(typeof s=="function")try{s()}catch(u){Rt(t,a,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Rt(t,a,u)}else r.current=null}function Ig(t){var a=t.type,r=t.memoizedProps,s=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&s.focus();break t;case"img":r.src?s.src=r.src:r.srcSet&&(s.srcset=r.srcSet)}}catch(u){Rt(t,t.return,u)}}function sf(t,a,r){try{var s=t.stateNode;bw(s,t.type,r,a),s[Dt]=a}catch(u){Rt(t,t.return,u)}}function Lg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ma(t.type)||t.tag===4}function lf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ma(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,a,r){var s=t.tag;if(s===5||s===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Cl));else if(s!==4&&(s===27&&Ma(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(uf(t,a,r),t=t.sibling;t!==null;)uf(t,a,r),t=t.sibling}function vl(t,a,r){var s=t.tag;if(s===5||s===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(s!==4&&(s===27&&Ma(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(vl(t,a,r),t=t.sibling;t!==null;)vl(t,a,r),t=t.sibling}function Ug(t){var a=t.stateNode,r=t.memoizedProps;try{for(var s=t.type,u=a.attributes;u.length;)a.removeAttributeNode(u[0]);me(a,s,r),a[Ft]=t,a[Dt]=r}catch(d){Rt(t,t.return,d)}}var Zn=!1,Kt=!1,cf=!1,zg=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Jx(t,a){if(t=t.containerInfo,Nf=Ll,t=$p(t),sc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var u=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var v=0,b=-1,S=-1,M=0,z=0,H=t,P=null;e:for(;;){for(var I;H!==r||u!==0&&H.nodeType!==3||(b=v+u),H!==d||s!==0&&H.nodeType!==3||(S=v+s),H.nodeType===3&&(v+=H.nodeValue.length),(I=H.firstChild)!==null;)P=H,H=I;for(;;){if(H===t)break e;if(P===r&&++M===u&&(b=v),P===d&&++z===s&&(S=v),(I=H.nextSibling)!==null)break;H=P,P=H.parentNode}H=I}r=b===-1||S===-1?null:{start:b,end:S}}else r=null}r=r||{start:0,end:0}}else r=null;for(If={focusedElem:t,selectionRange:r},Ll=!1,ue=a;ue!==null;)if(a=ue,t=a.child,(a.subtreeFlags&1024)!==0&&t!==null)t.return=a,ue=t;else for(;ue!==null;){switch(a=ue,d=a.alternate,t=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=a,u=d.memoizedProps,d=d.memoizedState,s=r.stateNode;try{var ct=pi(r.type,u,r.elementType===r.type);t=s.getSnapshotBeforeUpdate(ct,d),s.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Rt(r,r.return,ot)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)zf(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=a.sibling,t!==null){t.return=a.return,ue=t;break}ue=a.return}}function Vg(t,a,r){var s=r.flags;switch(r.tag){case 0:case 11:case 15:Ea(t,r),s&4&&wo(5,r);break;case 1:if(Ea(t,r),s&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(v){Rt(r,r.return,v)}else{var u=pi(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(u,a,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Rt(r,r.return,v)}}s&64&&Pg(r),s&512&&Eo(r,r.return);break;case 3:if(Ea(t,r),s&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{Tm(t,a)}catch(v){Rt(r,r.return,v)}}break;case 27:a===null&&s&4&&Ug(r);case 26:case 5:Ea(t,r),a===null&&s&4&&Ig(r),s&512&&Eo(r,r.return);break;case 12:Ea(t,r);break;case 13:Ea(t,r),s&4&&jg(t,r),s&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=lw.bind(null,r),Aw(t,r))));break;case 22:if(s=r.memoizedState!==null||Zn,!s){a=a!==null&&a.memoizedState!==null||Kt,u=Zn;var d=Kt;Zn=s,(Kt=a)&&!d?_a(t,r,(r.subtreeFlags&8772)!==0):Ea(t,r),Zn=u,Kt=d}break;case 30:break;default:Ea(t,r)}}function Bg(t){var a=t.alternate;a!==null&&(t.alternate=null,Bg(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&ju(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Nt=null,Me=!1;function Qn(t,a,r){for(r=r.child;r!==null;)Hg(t,a,r),r=r.sibling}function Hg(t,a,r){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(vn,r)}catch{}switch(r.tag){case 26:Kt||xn(r,a),Qn(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Kt||xn(r,a);var s=Nt,u=Me;Ma(r.type)&&(Nt=r.stateNode,Me=!1),Qn(t,a,r),Po(r.stateNode),Nt=s,Me=u;break;case 5:Kt||xn(r,a);case 6:if(s=Nt,u=Me,Nt=null,Qn(t,a,r),Nt=s,Me=u,Nt!==null)if(Me)try{(Nt.nodeType===9?Nt.body:Nt.nodeName==="HTML"?Nt.ownerDocument.body:Nt).removeChild(r.stateNode)}catch(d){Rt(r,a,d)}else try{Nt.removeChild(r.stateNode)}catch(d){Rt(r,a,d)}break;case 18:Nt!==null&&(Me?(t=Nt,C0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Ho(t)):C0(Nt,r.stateNode));break;case 4:s=Nt,u=Me,Nt=r.stateNode.containerInfo,Me=!0,Qn(t,a,r),Nt=s,Me=u;break;case 0:case 11:case 14:case 15:Kt||wa(2,r,a),Kt||wa(4,r,a),Qn(t,a,r);break;case 1:Kt||(xn(r,a),s=r.stateNode,typeof s.componentWillUnmount=="function"&&Ng(r,a,s)),Qn(t,a,r);break;case 21:Qn(t,a,r);break;case 22:Kt=(s=Kt)||r.memoizedState!==null,Qn(t,a,r),Kt=s;break;default:Qn(t,a,r)}}function jg(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ho(t)}catch(r){Rt(a,a.return,r)}}function tw(t){switch(t.tag){case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new zg),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new zg),a;default:throw Error(o(435,t.tag))}}function ff(t,a){var r=tw(t);a.forEach(function(s){var u=uw.bind(null,t,s);r.has(s)||(r.add(s),s.then(u,u))})}function Ue(t,a){var r=a.deletions;if(r!==null)for(var s=0;s<r.length;s++){var u=r[s],d=t,v=a,b=v;t:for(;b!==null;){switch(b.tag){case 27:if(Ma(b.type)){Nt=b.stateNode,Me=!1;break t}break;case 5:Nt=b.stateNode,Me=!1;break t;case 3:case 4:Nt=b.stateNode.containerInfo,Me=!0;break t}b=b.return}if(Nt===null)throw Error(o(160));Hg(d,v,u),Nt=null,Me=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)qg(a,t),a=a.sibling}var ln=null;function qg(t,a){var r=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ue(a,t),ze(t),s&4&&(wa(3,t,t.return),wo(3,t),wa(5,t,t.return));break;case 1:Ue(a,t),ze(t),s&512&&(Kt||r===null||xn(r,r.return)),s&64&&Zn&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?s:r.concat(s))));break;case 26:var u=ln;if(Ue(a,t),ze(t),s&512&&(Kt||r===null||xn(r,r.return)),s&4){var d=r!==null?r.memoizedState:null;if(s=t.memoizedState,r===null)if(s===null)if(t.stateNode===null){t:{s=t.type,r=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Xr]||d[Ft]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(s),u.head.insertBefore(d,u.querySelector("head > title"))),me(d,s,r),d[Ft]=t,se(d),s=d;break t;case"link":var v=U0("link","href",u).get(s+(r.href||""));if(v){for(var b=0;b<v.length;b++)if(d=v[b],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){v.splice(b,1);break e}}d=u.createElement(s),me(d,s,r),u.head.appendChild(d);break;case"meta":if(v=U0("meta","content",u).get(s+(r.content||""))){for(b=0;b<v.length;b++)if(d=v[b],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){v.splice(b,1);break e}}d=u.createElement(s),me(d,s,r),u.head.appendChild(d);break;default:throw Error(o(468,s))}d[Ft]=t,se(d),s=d}t.stateNode=s}else z0(u,t.type,t.stateNode);else t.stateNode=L0(u,s,t.memoizedProps);else d!==s?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,s===null?z0(u,t.type,t.stateNode):L0(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&sf(t,t.memoizedProps,r.memoizedProps)}break;case 27:Ue(a,t),ze(t),s&512&&(Kt||r===null||xn(r,r.return)),r!==null&&s&4&&sf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Ue(a,t),ze(t),s&512&&(Kt||r===null||xn(r,r.return)),t.flags&32){u=t.stateNode;try{Gi(u,"")}catch(I){Rt(t,t.return,I)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,sf(t,u,r!==null?r.memoizedProps:u)),s&1024&&(cf=!0);break;case 6:if(Ue(a,t),ze(t),s&4){if(t.stateNode===null)throw Error(o(162));s=t.memoizedProps,r=t.stateNode;try{r.nodeValue=s}catch(I){Rt(t,t.return,I)}}break;case 3:if(Pl=null,u=ln,ln=Ml(a.containerInfo),Ue(a,t),ln=u,ze(t),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Ho(a.containerInfo)}catch(I){Rt(t,t.return,I)}cf&&(cf=!1,Gg(t));break;case 4:s=ln,ln=Ml(t.stateNode.containerInfo),Ue(a,t),ze(t),ln=s;break;case 12:Ue(a,t),ze(t);break;case 13:Ue(a,t),ze(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(yf=ye()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,ff(t,s)));break;case 22:u=t.memoizedState!==null;var S=r!==null&&r.memoizedState!==null,M=Zn,z=Kt;if(Zn=M||u,Kt=z||S,Ue(a,t),Kt=z,Zn=M,ze(t),s&8192)t:for(a=t.stateNode,a._visibility=u?a._visibility&-2:a._visibility|1,u&&(r===null||S||Zn||Kt||mi(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){S=r=a;try{if(d=S.stateNode,u)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=S.stateNode;var H=S.memoizedProps.style,P=H!=null&&H.hasOwnProperty("display")?H.display:null;b.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(I){Rt(S,S.return,I)}}}else if(a.tag===6){if(r===null){S=a;try{S.stateNode.nodeValue=u?"":S.memoizedProps}catch(I){Rt(S,S.return,I)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}s&4&&(s=t.updateQueue,s!==null&&(r=s.retryQueue,r!==null&&(s.retryQueue=null,ff(t,r))));break;case 19:Ue(a,t),ze(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,ff(t,s)));break;case 30:break;case 21:break;default:Ue(a,t),ze(t)}}function ze(t){var a=t.flags;if(a&2){try{for(var r,s=t.return;s!==null;){if(Lg(s)){r=s;break}s=s.return}if(r==null)throw Error(o(160));switch(r.tag){case 27:var u=r.stateNode,d=lf(t);vl(t,d,u);break;case 5:var v=r.stateNode;r.flags&32&&(Gi(v,""),r.flags&=-33);var b=lf(t);vl(t,b,v);break;case 3:case 4:var S=r.stateNode.containerInfo,M=lf(t);uf(t,M,S);break;default:throw Error(o(161))}}catch(z){Rt(t,t.return,z)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function Gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;Gg(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Ea(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Vg(t,a.alternate,a),a=a.sibling}function mi(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:wa(4,a,a.return),mi(a);break;case 1:xn(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Ng(a,a.return,r),mi(a);break;case 27:Po(a.stateNode);case 26:case 5:xn(a,a.return),mi(a);break;case 22:a.memoizedState===null&&mi(a);break;case 30:mi(a);break;default:mi(a)}t=t.sibling}}function _a(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var s=a.alternate,u=t,d=a,v=d.flags;switch(d.tag){case 0:case 11:case 15:_a(u,d,r),wo(4,d);break;case 1:if(_a(u,d,r),s=d,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(M){Rt(s,s.return,M)}if(s=d,u=s.updateQueue,u!==null){var b=s.stateNode;try{var S=u.shared.hiddenCallbacks;if(S!==null)for(u.shared.hiddenCallbacks=null,u=0;u<S.length;u++)bm(S[u],b)}catch(M){Rt(s,s.return,M)}}r&&v&64&&Pg(d),Eo(d,d.return);break;case 27:Ug(d);case 26:case 5:_a(u,d,r),r&&s===null&&v&4&&Ig(d),Eo(d,d.return);break;case 12:_a(u,d,r);break;case 13:_a(u,d,r),r&&v&4&&jg(u,d);break;case 22:d.memoizedState===null&&_a(u,d,r),Eo(d,d.return);break;case 30:break;default:_a(u,d,r)}a=a.sibling}}function df(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&lo(r))}function hf(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&lo(t))}function wn(t,a,r,s){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Yg(t,a,r,s),a=a.sibling}function Yg(t,a,r,s){var u=a.flags;switch(a.tag){case 0:case 11:case 15:wn(t,a,r,s),u&2048&&wo(9,a);break;case 1:wn(t,a,r,s);break;case 3:wn(t,a,r,s),u&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&lo(t)));break;case 12:if(u&2048){wn(t,a,r,s),t=a.stateNode;try{var d=a.memoizedProps,v=d.id,b=d.onPostCommit;typeof b=="function"&&b(v,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Rt(a,a.return,S)}}else wn(t,a,r,s);break;case 13:wn(t,a,r,s);break;case 23:break;case 22:d=a.stateNode,v=a.alternate,a.memoizedState!==null?d._visibility&2?wn(t,a,r,s):_o(t,a):d._visibility&2?wn(t,a,r,s):(d._visibility|=2,ur(t,a,r,s,(a.subtreeFlags&10256)!==0)),u&2048&&df(v,a);break;case 24:wn(t,a,r,s),u&2048&&hf(a.alternate,a);break;default:wn(t,a,r,s)}}function ur(t,a,r,s,u){for(u=u&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var d=t,v=a,b=r,S=s,M=v.flags;switch(v.tag){case 0:case 11:case 15:ur(d,v,b,S,u),wo(8,v);break;case 23:break;case 22:var z=v.stateNode;v.memoizedState!==null?z._visibility&2?ur(d,v,b,S,u):_o(d,v):(z._visibility|=2,ur(d,v,b,S,u)),u&&M&2048&&df(v.alternate,v);break;case 24:ur(d,v,b,S,u),u&&M&2048&&hf(v.alternate,v);break;default:ur(d,v,b,S,u)}a=a.sibling}}function _o(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,s=a,u=s.flags;switch(s.tag){case 22:_o(r,s),u&2048&&df(s.alternate,s);break;case 24:_o(r,s),u&2048&&hf(s.alternate,s);break;default:_o(r,s)}a=a.sibling}}var Ao=8192;function cr(t){if(t.subtreeFlags&Ao)for(t=t.child;t!==null;)Fg(t),t=t.sibling}function Fg(t){switch(t.tag){case 26:cr(t),t.flags&Ao&&t.memoizedState!==null&&Vw(ln,t.memoizedState,t.memoizedProps);break;case 5:cr(t);break;case 3:case 4:var a=ln;ln=Ml(t.stateNode.containerInfo),cr(t),ln=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Ao,Ao=16777216,cr(t),Ao=a):cr(t));break;default:cr(t)}}function Xg(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function Oo(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var s=a[r];ue=s,$g(s,t)}Xg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kg(t),t=t.sibling}function Kg(t){switch(t.tag){case 0:case 11:case 15:Oo(t),t.flags&2048&&wa(9,t,t.return);break;case 3:Oo(t);break;case 12:Oo(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,bl(t)):Oo(t);break;default:Oo(t)}}function bl(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var s=a[r];ue=s,$g(s,t)}Xg(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:wa(8,a,a.return),bl(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,bl(a));break;default:bl(a)}t=t.sibling}}function $g(t,a){for(;ue!==null;){var r=ue;switch(r.tag){case 0:case 11:case 15:wa(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var s=r.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:lo(r.memoizedState.cache)}if(s=r.child,s!==null)s.return=r,ue=s;else t:for(r=t;ue!==null;){s=ue;var u=s.sibling,d=s.return;if(Bg(s),s===r){ue=null;break t}if(u!==null){u.return=d,ue=u;break t}ue=d}}}var ew={getCacheForType:function(t){var a=ve(ae),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r}},nw=typeof WeakMap=="function"?WeakMap:Map,wt=0,Mt=null,yt=null,bt=0,Et=0,Ve=null,Aa=!1,fr=!1,pf=!1,Wn=0,jt=0,Oa=0,gi=0,mf=0,We=0,dr=0,Ro=null,ke=null,gf=!1,yf=0,Tl=1/0,Sl=null,Ra=null,pe=0,Ca=null,hr=null,pr=0,vf=0,bf=null,Zg=null,Co=0,Tf=null;function Be(){if((wt&2)!==0&&bt!==0)return bt&-bt;if(N.T!==null){var t=er;return t!==0?t:Of()}return ti()}function Qg(){We===0&&(We=(bt&536870912)===0||xt?on():536870912);var t=Qe.current;return t!==null&&(t.flags|=32),We}function He(t,a,r){(t===Mt&&(Et===2||Et===9)||t.cancelPendingCommit!==null)&&(mr(t,0),Da(t,bt,We,!1)),pa(t,r),((wt&2)===0||t!==Mt)&&(t===Mt&&((wt&2)===0&&(gi|=r),jt===4&&Da(t,bt,We,!1)),En(t))}function Wg(t,a,r){if((wt&6)!==0)throw Error(o(327));var s=!r&&(a&124)===0&&(a&t.expiredLanes)===0||Ja(t,a),u=s?rw(t,a):wf(t,a,!0),d=s;do{if(u===0){fr&&!s&&Da(t,a,0,!1);break}else{if(r=t.current.alternate,d&&!aw(r)){u=wf(t,a,!1),d=!1;continue}if(u===2){if(d=a,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){a=v;t:{var b=t;u=Ro;var S=b.current.memoizedState.isDehydrated;if(S&&(mr(b,v).flags|=256),v=wf(b,v,!1),v!==2){if(pf&&!S){b.errorRecoveryDisabledLanes|=d,gi|=d,u=4;break t}d=ke,ke=u,d!==null&&(ke===null?ke=d:ke.push.apply(ke,d))}u=v}if(d=!1,u!==2)continue}}if(u===1){mr(t,0),Da(t,a,0,!0);break}t:{switch(s=t,d=u,d){case 0:case 1:throw Error(o(345));case 4:if((a&4194048)!==a)break;case 6:Da(s,a,We,!Aa);break t;case 2:ke=null;break;case 3:case 5:break;default:throw Error(o(329))}if((a&62914560)===a&&(u=yf+300-ye(),10<u)){if(Da(s,a,We,!Aa),Wa(s,0,!0)!==0)break t;s.timeoutHandle=O0(Jg.bind(null,s,r,ke,Sl,gf,a,We,gi,dr,Aa,d,2,-0,0),u);break t}Jg(s,r,ke,Sl,gf,a,We,gi,dr,Aa,d,0,-0,0)}}break}while(!0);En(t)}function Jg(t,a,r,s,u,d,v,b,S,M,z,H,P,I){if(t.timeoutHandle=-1,H=a.subtreeFlags,(H&8192||(H&16785408)===16785408)&&(Lo={stylesheets:null,count:0,unsuspend:zw},Fg(a),H=Bw(),H!==null)){t.cancelPendingCommit=H(o0.bind(null,t,a,d,r,s,u,v,b,S,z,1,P,I)),Da(t,d,v,!M);return}o0(t,a,d,r,s,u,v,b,S)}function aw(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var s=0;s<r.length;s++){var u=r[s],d=u.getSnapshot;u=u.value;try{if(!Ie(d(),u))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Da(t,a,r,s){a&=~mf,a&=~gi,t.suspendedLanes|=a,t.pingedLanes&=~a,s&&(t.warmLanes|=a),s=t.expirationTimes;for(var u=a;0<u;){var d=31-fe(u),v=1<<d;s[d]=-1,u&=~v}r!==0&&dt(t,r,a)}function xl(){return(wt&6)===0?(Do(0),!1):!0}function Sf(){if(yt!==null){if(Et===0)var t=yt.return;else t=yt,Gn=ci=null,Uc(t),sr=null,To=0,t=yt;for(;t!==null;)kg(t.alternate,t),t=t.return;yt=null}}function mr(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Sw(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Sf(),Mt=t,yt=r=Hn(t.current,null),bt=a,Et=0,Ve=null,Aa=!1,fr=Ja(t,a),pf=!1,dr=We=mf=gi=Oa=jt=0,ke=Ro=null,gf=!1,(a&8)!==0&&(a|=a&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=a;0<s;){var u=31-fe(s),d=1<<u;a|=t[u],s&=~d}return Wn=a,Gs(),r}function t0(t,a){mt=null,N.H=ul,a===co||a===Js?(a=ym(),Et=3):a===pm?(a=ym(),Et=4):Et=a===vg?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ve=a,yt===null&&(jt=1,pl(t,Xe(a,t.current)))}function e0(){var t=N.H;return N.H=ul,t===null?ul:t}function n0(){var t=N.A;return N.A=ew,t}function xf(){jt=4,Aa||(bt&4194048)!==bt&&Qe.current!==null||(fr=!0),(Oa&134217727)===0&&(gi&134217727)===0||Mt===null||Da(Mt,bt,We,!1)}function wf(t,a,r){var s=wt;wt|=2;var u=e0(),d=n0();(Mt!==t||bt!==a)&&(Sl=null,mr(t,a)),a=!1;var v=jt;t:do try{if(Et!==0&&yt!==null){var b=yt,S=Ve;switch(Et){case 8:Sf(),v=6;break t;case 3:case 2:case 9:case 6:Qe.current===null&&(a=!0);var M=Et;if(Et=0,Ve=null,gr(t,b,S,M),r&&fr){v=0;break t}break;default:M=Et,Et=0,Ve=null,gr(t,b,S,M)}}iw(),v=jt;break}catch(z){t0(t,z)}while(!0);return a&&t.shellSuspendCounter++,Gn=ci=null,wt=s,N.H=u,N.A=d,yt===null&&(Mt=null,bt=0,Gs()),v}function iw(){for(;yt!==null;)a0(yt)}function rw(t,a){var r=wt;wt|=2;var s=e0(),u=n0();Mt!==t||bt!==a?(Sl=null,Tl=ye()+500,mr(t,a)):fr=Ja(t,a);t:do try{if(Et!==0&&yt!==null){a=yt;var d=Ve;e:switch(Et){case 1:Et=0,Ve=null,gr(t,a,d,1);break;case 2:case 9:if(mm(d)){Et=0,Ve=null,i0(a);break}a=function(){Et!==2&&Et!==9||Mt!==t||(Et=7),En(t)},d.then(a,a);break t;case 3:Et=7;break t;case 4:Et=5;break t;case 7:mm(d)?(Et=0,Ve=null,i0(a)):(Et=0,Ve=null,gr(t,a,d,7));break;case 5:var v=null;switch(yt.tag){case 26:v=yt.memoizedState;case 5:case 27:var b=yt;if(!v||V0(v)){Et=0,Ve=null;var S=b.sibling;if(S!==null)yt=S;else{var M=b.return;M!==null?(yt=M,wl(M)):yt=null}break e}}Et=0,Ve=null,gr(t,a,d,5);break;case 6:Et=0,Ve=null,gr(t,a,d,6);break;case 8:Sf(),jt=6;break t;default:throw Error(o(462))}}ow();break}catch(z){t0(t,z)}while(!0);return Gn=ci=null,N.H=s,N.A=u,wt=r,yt!==null?0:(Mt=null,bt=0,Gs(),jt)}function ow(){for(;yt!==null&&!Vu();)a0(yt)}function a0(t){var a=Dg(t.alternate,t,Wn);t.memoizedProps=t.pendingProps,a===null?wl(t):yt=a}function i0(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=Eg(r,a,a.pendingProps,a.type,void 0,bt);break;case 11:a=Eg(r,a,a.pendingProps,a.type.render,a.ref,bt);break;case 5:Uc(a);default:kg(r,a),a=yt=rm(a,Wn),a=Dg(r,a,Wn)}t.memoizedProps=t.pendingProps,a===null?wl(t):yt=a}function gr(t,a,r,s){Gn=ci=null,Uc(a),sr=null,To=0;var u=a.return;try{if($x(t,u,a,r,bt)){jt=1,pl(t,Xe(r,t.current)),yt=null;return}}catch(d){if(u!==null)throw yt=u,d;jt=1,pl(t,Xe(r,t.current)),yt=null;return}a.flags&32768?(xt||s===1?t=!0:fr||(bt&536870912)!==0?t=!1:(Aa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Qe.current,s!==null&&s.tag===13&&(s.flags|=16384))),r0(a,t)):wl(a)}function wl(t){var a=t;do{if((a.flags&32768)!==0){r0(a,Aa);return}t=a.return;var r=Qx(a.alternate,a,Wn);if(r!==null){yt=r;return}if(a=a.sibling,a!==null){yt=a;return}yt=a=t}while(a!==null);jt===0&&(jt=5)}function r0(t,a){do{var r=Wx(t.alternate,t);if(r!==null){r.flags&=32767,yt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){yt=t;return}yt=t=r}while(t!==null);jt=6,yt=null}function o0(t,a,r,s,u,d,v,b,S){t.cancelPendingCommit=null;do El();while(pe!==0);if((wt&6)!==0)throw Error(o(327));if(a!==null){if(a===t.current)throw Error(o(177));if(d=a.lanes|a.childLanes,d|=dc,ks(t,r,d,v,b,S),t===Mt&&(yt=Mt=null,bt=0),hr=a,Ca=t,pr=r,vf=d,bf=u,Zg=s,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,cw(Ni,function(){return f0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,u=j.p,j.p=2,v=wt,wt|=4;try{Jx(t,a,r)}finally{wt=v,j.p=u,N.T=s}}pe=1,s0(),l0(),u0()}}function s0(){if(pe===1){pe=0;var t=Ca,a=hr,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=N.T,N.T=null;var s=j.p;j.p=2;var u=wt;wt|=4;try{qg(a,t);var d=If,v=$p(t.containerInfo),b=d.focusedElem,S=d.selectionRange;if(v!==b&&b&&b.ownerDocument&&Kp(b.ownerDocument.documentElement,b)){if(S!==null&&sc(b)){var M=S.start,z=S.end;if(z===void 0&&(z=M),"selectionStart"in b)b.selectionStart=M,b.selectionEnd=Math.min(z,b.value.length);else{var H=b.ownerDocument||document,P=H&&H.defaultView||window;if(P.getSelection){var I=P.getSelection(),ct=b.textContent.length,ot=Math.min(S.start,ct),Ot=S.end===void 0?ot:Math.min(S.end,ct);!I.extend&&ot>Ot&&(v=Ot,Ot=ot,ot=v);var O=Xp(b,ot),E=Xp(b,Ot);if(O&&E&&(I.rangeCount!==1||I.anchorNode!==O.node||I.anchorOffset!==O.offset||I.focusNode!==E.node||I.focusOffset!==E.offset)){var C=H.createRange();C.setStart(O.node,O.offset),I.removeAllRanges(),ot>Ot?(I.addRange(C),I.extend(E.node,E.offset)):(C.setEnd(E.node,E.offset),I.addRange(C))}}}}for(H=[],I=b;I=I.parentNode;)I.nodeType===1&&H.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<H.length;b++){var V=H[b];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Ll=!!Nf,If=Nf=null}finally{wt=u,j.p=s,N.T=r}}t.current=a,pe=2}}function l0(){if(pe===2){pe=0;var t=Ca,a=hr,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=N.T,N.T=null;var s=j.p;j.p=2;var u=wt;wt|=4;try{Vg(t,a.alternate,a)}finally{wt=u,j.p=s,N.T=r}}pe=3}}function u0(){if(pe===4||pe===3){pe=0,Os();var t=Ca,a=hr,r=pr,s=Zg;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?pe=5:(pe=0,hr=Ca=null,c0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ra=null),de(r),a=a.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(vn,a,void 0,(a.current.flags&128)===128)}catch{}if(s!==null){a=N.T,u=j.p,j.p=2,N.T=null;try{for(var d=t.onRecoverableError,v=0;v<s.length;v++){var b=s[v];d(b.value,{componentStack:b.stack})}}finally{N.T=a,j.p=u}}(pr&3)!==0&&El(),En(t),u=t.pendingLanes,(r&4194090)!==0&&(u&42)!==0?t===Tf?Co++:(Co=0,Tf=t):Co=0,Do(0)}}function c0(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,lo(a)))}function El(t){return s0(),l0(),u0(),f0()}function f0(){if(pe!==5)return!1;var t=Ca,a=vf;vf=0;var r=de(pr),s=N.T,u=j.p;try{j.p=32>r?32:r,N.T=null,r=bf,bf=null;var d=Ca,v=pr;if(pe=0,hr=Ca=null,pr=0,(wt&6)!==0)throw Error(o(331));var b=wt;if(wt|=4,Kg(d.current),Yg(d,d.current,v,r),wt=b,Do(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(vn,d)}catch{}return!0}finally{j.p=u,N.T=s,c0(t,a)}}function d0(t,a,r){a=Xe(r,a),a=Qc(t.stateNode,a,2),t=ba(t,a,2),t!==null&&(pa(t,2),En(t))}function Rt(t,a,r){if(t.tag===3)d0(t,t,r);else for(;a!==null;){if(a.tag===3){d0(a,t,r);break}else if(a.tag===1){var s=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ra===null||!Ra.has(s))){t=Xe(r,t),r=gg(2),s=ba(a,r,2),s!==null&&(yg(r,s,a,t),pa(s,2),En(s));break}}a=a.return}}function Ef(t,a,r){var s=t.pingCache;if(s===null){s=t.pingCache=new nw;var u=new Set;s.set(a,u)}else u=s.get(a),u===void 0&&(u=new Set,s.set(a,u));u.has(r)||(pf=!0,u.add(r),t=sw.bind(null,t,a,r),a.then(t,t))}function sw(t,a,r){var s=t.pingCache;s!==null&&s.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Mt===t&&(bt&r)===r&&(jt===4||jt===3&&(bt&62914560)===bt&&300>ye()-yf?(wt&2)===0&&mr(t,0):mf|=r,dr===bt&&(dr=0)),En(t)}function h0(t,a){a===0&&(a=Ms()),t=Qi(t,a),t!==null&&(pa(t,a),En(t))}function lw(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),h0(t,r)}function uw(t,a){var r=0;switch(t.tag){case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(a),h0(t,r)}function cw(t,a){return Gr(t,a)}var _l=null,yr=null,_f=!1,Al=!1,Af=!1,yi=0;function En(t){t!==yr&&t.next===null&&(yr===null?_l=yr=t:yr=yr.next=t),Al=!0,_f||(_f=!0,dw())}function Do(t,a){if(!Af&&Al){Af=!0;do for(var r=!1,s=_l;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var d=0;else{var v=s.suspendedLanes,b=s.pingedLanes;d=(1<<31-fe(42|t)+1)-1,d&=u&~(v&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,y0(s,d))}else d=bt,d=Wa(s,s===Mt?d:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(d&3)===0||Ja(s,d)||(r=!0,y0(s,d));s=s.next}while(r);Af=!1}}function fw(){p0()}function p0(){Al=_f=!1;var t=0;yi!==0&&(Tw()&&(t=yi),yi=0);for(var a=ye(),r=null,s=_l;s!==null;){var u=s.next,d=m0(s,a);d===0?(s.next=null,r===null?_l=u:r.next=u,u===null&&(yr=r)):(r=s,(t!==0||(d&3)!==0)&&(Al=!0)),s=u}Do(t)}function m0(t,a){for(var r=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-fe(d),b=1<<v,S=u[v];S===-1?((b&r)===0||(b&s)!==0)&&(u[v]=Yr(b,a)):S<=a&&(t.expiredLanes|=b),d&=~b}if(a=Mt,r=bt,r=Wa(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,r===0||t===a&&(Et===2||Et===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Qa(s),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ja(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(s!==null&&Qa(s),de(r)){case 2:case 8:r=Cs;break;case 32:r=Ni;break;case 268435456:r=Un;break;default:r=Ni}return s=g0.bind(null,t),r=Gr(r,s),t.callbackPriority=a,t.callbackNode=r,a}return s!==null&&s!==null&&Qa(s),t.callbackPriority=2,t.callbackNode=null,2}function g0(t,a){if(pe!==0&&pe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(El()&&t.callbackNode!==r)return null;var s=bt;return s=Wa(t,t===Mt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Wg(t,s,a),m0(t,ye()),t.callbackNode!=null&&t.callbackNode===r?g0.bind(null,t):null)}function y0(t,a){if(El())return null;Wg(t,a,!0)}function dw(){xw(function(){(wt&6)!==0?Gr(Ge,fw):p0()})}function Of(){return yi===0&&(yi=on()),yi}function v0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Us(""+t)}function b0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function hw(t,a,r,s,u){if(a==="submit"&&r&&r.stateNode===u){var d=v0((u[Dt]||null).action),v=s.submitter;v&&(a=(a=v[Dt]||null)?v0(a.formAction):v.getAttribute("formAction"),a!==null&&(d=a,v=null));var b=new Hs("action","action",null,s,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(yi!==0){var S=v?b0(u,v):new FormData(u);Fc(r,{pending:!0,data:S,method:u.method,action:d},null,S)}}else typeof d=="function"&&(b.preventDefault(),S=v?b0(u,v):new FormData(u),Fc(r,{pending:!0,data:S,method:u.method,action:d},d,S))},currentTarget:u}]})}}for(var Rf=0;Rf<fc.length;Rf++){var Cf=fc[Rf],pw=Cf.toLowerCase(),mw=Cf[0].toUpperCase()+Cf.slice(1);sn(pw,"on"+mw)}sn(Wp,"onAnimationEnd"),sn(Jp,"onAnimationIteration"),sn(tm,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(kx,"onTransitionRun"),sn(Px,"onTransitionStart"),sn(Nx,"onTransitionCancel"),sn(em,"onTransitionEnd"),Hi("onMouseEnter",["mouseout","mouseover"]),Hi("onMouseLeave",["mouseout","mouseover"]),Hi("onPointerEnter",["pointerout","pointerover"]),Hi("onPointerLeave",["pointerout","pointerover"]),ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ei("onBeforeInput",["compositionend","keypress","textInput","paste"]),ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function T0(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var s=t[r],u=s.event;s=s.listeners;t:{var d=void 0;if(a)for(var v=s.length-1;0<=v;v--){var b=s[v],S=b.instance,M=b.currentTarget;if(b=b.listener,S!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=M;try{d(u)}catch(z){hl(z)}u.currentTarget=null,d=S}else for(v=0;v<s.length;v++){if(b=s[v],S=b.instance,M=b.currentTarget,b=b.listener,S!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=M;try{d(u)}catch(z){hl(z)}u.currentTarget=null,d=S}}}}function vt(t,a){var r=a[Ui];r===void 0&&(r=a[Ui]=new Set);var s=t+"__bubble";r.has(s)||(S0(a,t,2,!1),r.add(s))}function Df(t,a,r){var s=0;a&&(s|=4),S0(r,t,s,a)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function Mf(t){if(!t[Ol]){t[Ol]=!0,pp.forEach(function(r){r!=="selectionchange"&&(gw.has(r)||Df(r,!1,t),Df(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Ol]||(a[Ol]=!0,Df("selectionchange",!1,a))}}function S0(t,a,r,s){switch(Y0(a)){case 2:var u=qw;break;case 8:u=Gw;break;default:u=Yf}r=u.bind(null,a,r,t),u=void 0,!Wu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(a,r,{capture:!0,passive:u}):t.addEventListener(a,r,!0):u!==void 0?t.addEventListener(a,r,{passive:u}):t.addEventListener(a,r,!1)}function kf(t,a,r,s,u){var d=s;if((a&1)===0&&(a&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var b=s.stateNode.containerInfo;if(b===u)break;if(v===4)for(v=s.return;v!==null;){var S=v.tag;if((S===3||S===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;b!==null;){if(v=zi(b),v===null)return;if(S=v.tag,S===5||S===6||S===26||S===27){s=d=v;continue t}b=b.parentNode}}s=s.return}Rp(function(){var M=d,z=Zu(r),H=[];t:{var P=nm.get(t);if(P!==void 0){var I=Hs,ct=t;switch(t){case"keypress":if(Vs(r)===0)break t;case"keydown":case"keyup":I=cx;break;case"focusin":ct="focus",I=nc;break;case"focusout":ct="blur",I=nc;break;case"beforeblur":case"afterblur":I=nc;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=WS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=hx;break;case Wp:case Jp:case tm:I=ex;break;case em:I=mx;break;case"scroll":case"scrollend":I=ZS;break;case"wheel":I=yx;break;case"copy":case"cut":case"paste":I=ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Pp;break;case"toggle":case"beforetoggle":I=bx}var ot=(a&4)!==0,Ot=!ot&&(t==="scroll"||t==="scrollend"),O=ot?P!==null?P+"Capture":null:P;ot=[];for(var E=M,C;E!==null;){var V=E;if(C=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||C===null||O===null||(V=$r(E,O),V!=null&&ot.push(ko(E,V,C))),Ot)break;E=E.return}0<ot.length&&(P=new I(P,ct,null,r,z),H.push({event:P,listeners:ot}))}}if((a&7)===0){t:{if(P=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",P&&r!==$u&&(ct=r.relatedTarget||r.fromElement)&&(zi(ct)||ct[oe]))break t;if((I||P)&&(P=z.window===z?z:(P=z.ownerDocument)?P.defaultView||P.parentWindow:window,I?(ct=r.relatedTarget||r.toElement,I=M,ct=ct?zi(ct):null,ct!==null&&(Ot=c(ct),ot=ct.tag,ct!==Ot||ot!==5&&ot!==27&&ot!==6)&&(ct=null)):(I=null,ct=M),I!==ct)){if(ot=Mp,V="onMouseLeave",O="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(ot=Pp,V="onPointerLeave",O="onPointerEnter",E="pointer"),Ot=I==null?P:Kr(I),C=ct==null?P:Kr(ct),P=new ot(V,E+"leave",I,r,z),P.target=Ot,P.relatedTarget=C,V=null,zi(z)===M&&(ot=new ot(O,E+"enter",ct,r,z),ot.target=C,ot.relatedTarget=Ot,V=ot),Ot=V,I&&ct)e:{for(ot=I,O=ct,E=0,C=ot;C;C=vr(C))E++;for(C=0,V=O;V;V=vr(V))C++;for(;0<E-C;)ot=vr(ot),E--;for(;0<C-E;)O=vr(O),C--;for(;E--;){if(ot===O||O!==null&&ot===O.alternate)break e;ot=vr(ot),O=vr(O)}ot=null}else ot=null;I!==null&&x0(H,P,I,ot,!1),ct!==null&&Ot!==null&&x0(H,Ot,ct,ot,!0)}}t:{if(P=M?Kr(M):window,I=P.nodeName&&P.nodeName.toLowerCase(),I==="select"||I==="input"&&P.type==="file")var W=Hp;else if(Vp(P))if(jp)W=Cx;else{W=Ox;var gt=Ax}else I=P.nodeName,!I||I.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?M&&Ku(M.elementType)&&(W=Hp):W=Rx;if(W&&(W=W(t,M))){Bp(H,W,r,z);break t}gt&&gt(t,P,M),t==="focusout"&&M&&P.type==="number"&&M.memoizedProps.value!=null&&Xu(P,"number",P.value)}switch(gt=M?Kr(M):window,t){case"focusin":(Vp(gt)||gt.contentEditable==="true")&&(Ki=gt,lc=M,ao=null);break;case"focusout":ao=lc=Ki=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,Zp(H,r,z);break;case"selectionchange":if(Mx)break;case"keydown":case"keyup":Zp(H,r,z)}var et;if(ic)t:{switch(t){case"compositionstart":var st="onCompositionStart";break t;case"compositionend":st="onCompositionEnd";break t;case"compositionupdate":st="onCompositionUpdate";break t}st=void 0}else Xi?Up(t,r)&&(st="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(st="onCompositionStart");st&&(Np&&r.locale!=="ko"&&(Xi||st!=="onCompositionStart"?st==="onCompositionEnd"&&Xi&&(et=Cp()):(ma=z,Ju="value"in ma?ma.value:ma.textContent,Xi=!0)),gt=Rl(M,st),0<gt.length&&(st=new kp(st,t,null,r,z),H.push({event:st,listeners:gt}),et?st.data=et:(et=zp(r),et!==null&&(st.data=et)))),(et=Sx?xx(t,r):wx(t,r))&&(st=Rl(M,"onBeforeInput"),0<st.length&&(gt=new kp("onBeforeInput","beforeinput",null,r,z),H.push({event:gt,listeners:st}),gt.data=et)),hw(H,t,M,r,z)}T0(H,a)})}function ko(t,a,r){return{instance:t,listener:a,currentTarget:r}}function Rl(t,a){for(var r=a+"Capture",s=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=$r(t,r),u!=null&&s.unshift(ko(t,u,d)),u=$r(t,a),u!=null&&s.push(ko(t,u,d))),t.tag===3)return s;t=t.return}return[]}function vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function x0(t,a,r,s,u){for(var d=a._reactName,v=[];r!==null&&r!==s;){var b=r,S=b.alternate,M=b.stateNode;if(b=b.tag,S!==null&&S===s)break;b!==5&&b!==26&&b!==27||M===null||(S=M,u?(M=$r(r,d),M!=null&&v.unshift(ko(r,M,S))):u||(M=$r(r,d),M!=null&&v.push(ko(r,M,S)))),r=r.return}v.length!==0&&t.push({event:a,listeners:v})}var yw=/\r\n?/g,vw=/\u0000|\uFFFD/g;function w0(t){return(typeof t=="string"?t:""+t).replace(yw,`
`).replace(vw,"")}function E0(t,a){return a=w0(a),w0(t)===a}function Cl(){}function At(t,a,r,s,u,d){switch(r){case"children":typeof s=="string"?a==="body"||a==="textarea"&&s===""||Gi(t,s):(typeof s=="number"||typeof s=="bigint")&&a!=="body"&&Gi(t,""+s);break;case"className":Ns(t,"class",s);break;case"tabIndex":Ns(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ns(t,r,s);break;case"style":Ap(t,s,d);break;case"data":if(a!=="object"){Ns(t,"data",s);break}case"src":case"href":if(s===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(r);break}s=Us(""+s),t.setAttribute(r,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(a!=="input"&&At(t,a,"name",u.name,u,null),At(t,a,"formEncType",u.formEncType,u,null),At(t,a,"formMethod",u.formMethod,u,null),At(t,a,"formTarget",u.formTarget,u,null)):(At(t,a,"encType",u.encType,u,null),At(t,a,"method",u.method,u,null),At(t,a,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(r);break}s=Us(""+s),t.setAttribute(r,s);break;case"onClick":s!=null&&(t.onclick=Cl);break;case"onScroll":s!=null&&vt("scroll",t);break;case"onScrollEnd":s!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(r=s.__html,r!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=r}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}r=Us(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(r,""+s):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":s===!0?t.setAttribute(r,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(r,s):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(r,s):t.removeAttribute(r);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(r):t.setAttribute(r,s);break;case"popover":vt("beforetoggle",t),vt("toggle",t),Ps(t,"popover",s);break;case"xlinkActuate":Vn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Vn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Vn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Vn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Vn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Vn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Vn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Vn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Vn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ps(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=KS.get(r)||r,Ps(t,r,s))}}function Pf(t,a,r,s,u,d){switch(r){case"style":Ap(t,s,d);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(r=s.__html,r!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=r}}break;case"children":typeof s=="string"?Gi(t,s):(typeof s=="number"||typeof s=="bigint")&&Gi(t,""+s);break;case"onScroll":s!=null&&vt("scroll",t);break;case"onScrollEnd":s!=null&&vt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Cl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mp.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),a=r.slice(2,u?r.length-7:void 0),d=t[Dt]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(a,d,u),typeof s=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,s,u);break t}r in t?t[r]=s:s===!0?t.setAttribute(r,""):Ps(t,r,s)}}}function me(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var s=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var v=r[d];if(v!=null)switch(d){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:At(t,a,d,v,r,null)}}u&&At(t,a,"srcSet",r.srcSet,r,null),s&&At(t,a,"src",r.src,r,null);return;case"input":vt("invalid",t);var b=d=v=u=null,S=null,M=null;for(s in r)if(r.hasOwnProperty(s)){var z=r[s];if(z!=null)switch(s){case"name":u=z;break;case"type":v=z;break;case"checked":S=z;break;case"defaultChecked":M=z;break;case"value":d=z;break;case"defaultValue":b=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,a));break;default:At(t,a,s,z,r,null)}}xp(t,d,b,S,M,v,u,!1),Is(t);return;case"select":vt("invalid",t),s=v=d=null;for(u in r)if(r.hasOwnProperty(u)&&(b=r[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":v=b;break;case"multiple":s=b;default:At(t,a,u,b,r,null)}a=d,r=v,t.multiple=!!s,a!=null?qi(t,!!s,a,!1):r!=null&&qi(t,!!s,r,!0);return;case"textarea":vt("invalid",t),d=u=s=null;for(v in r)if(r.hasOwnProperty(v)&&(b=r[v],b!=null))switch(v){case"value":s=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:At(t,a,v,b,r,null)}Ep(t,s,u,d),Is(t);return;case"option":for(S in r)if(r.hasOwnProperty(S)&&(s=r[S],s!=null))switch(S){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:At(t,a,S,s,r,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(s=0;s<Mo.length;s++)vt(Mo[s],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in r)if(r.hasOwnProperty(M)&&(s=r[M],s!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:At(t,a,M,s,r,null)}return;default:if(Ku(a)){for(z in r)r.hasOwnProperty(z)&&(s=r[z],s!==void 0&&Pf(t,a,z,s,r,void 0));return}}for(b in r)r.hasOwnProperty(b)&&(s=r[b],s!=null&&At(t,a,b,s,r,null))}function bw(t,a,r,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,v=null,b=null,S=null,M=null,z=null;for(I in r){var H=r[I];if(r.hasOwnProperty(I)&&H!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":S=H;default:s.hasOwnProperty(I)||At(t,a,I,null,s,H)}}for(var P in s){var I=s[P];if(H=r[P],s.hasOwnProperty(P)&&(I!=null||H!=null))switch(P){case"type":d=I;break;case"name":u=I;break;case"checked":M=I;break;case"defaultChecked":z=I;break;case"value":v=I;break;case"defaultValue":b=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(o(137,a));break;default:I!==H&&At(t,a,P,I,s,H)}}Fu(t,v,b,S,M,z,d,u);return;case"select":I=v=b=P=null;for(d in r)if(S=r[d],r.hasOwnProperty(d)&&S!=null)switch(d){case"value":break;case"multiple":I=S;default:s.hasOwnProperty(d)||At(t,a,d,null,s,S)}for(u in s)if(d=s[u],S=r[u],s.hasOwnProperty(u)&&(d!=null||S!=null))switch(u){case"value":P=d;break;case"defaultValue":b=d;break;case"multiple":v=d;default:d!==S&&At(t,a,u,d,s,S)}a=b,r=v,s=I,P!=null?qi(t,!!r,P,!1):!!s!=!!r&&(a!=null?qi(t,!!r,a,!0):qi(t,!!r,r?[]:"",!1));return;case"textarea":I=P=null;for(b in r)if(u=r[b],r.hasOwnProperty(b)&&u!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:At(t,a,b,null,s,u)}for(v in s)if(u=s[v],d=r[v],s.hasOwnProperty(v)&&(u!=null||d!=null))switch(v){case"value":P=u;break;case"defaultValue":I=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==d&&At(t,a,v,u,s,d)}wp(t,P,I);return;case"option":for(var ct in r)if(P=r[ct],r.hasOwnProperty(ct)&&P!=null&&!s.hasOwnProperty(ct))switch(ct){case"selected":t.selected=!1;break;default:At(t,a,ct,null,s,P)}for(S in s)if(P=s[S],I=r[S],s.hasOwnProperty(S)&&P!==I&&(P!=null||I!=null))switch(S){case"selected":t.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:At(t,a,S,P,s,I)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in r)P=r[ot],r.hasOwnProperty(ot)&&P!=null&&!s.hasOwnProperty(ot)&&At(t,a,ot,null,s,P);for(M in s)if(P=s[M],I=r[M],s.hasOwnProperty(M)&&P!==I&&(P!=null||I!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(o(137,a));break;default:At(t,a,M,P,s,I)}return;default:if(Ku(a)){for(var Ot in r)P=r[Ot],r.hasOwnProperty(Ot)&&P!==void 0&&!s.hasOwnProperty(Ot)&&Pf(t,a,Ot,void 0,s,P);for(z in s)P=s[z],I=r[z],!s.hasOwnProperty(z)||P===I||P===void 0&&I===void 0||Pf(t,a,z,P,s,I);return}}for(var O in r)P=r[O],r.hasOwnProperty(O)&&P!=null&&!s.hasOwnProperty(O)&&At(t,a,O,null,s,P);for(H in s)P=s[H],I=r[H],!s.hasOwnProperty(H)||P===I||P==null&&I==null||At(t,a,H,P,s,I)}var Nf=null,If=null;function Dl(t){return t.nodeType===9?t:t.ownerDocument}function _0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A0(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Lf(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Uf=null;function Tw(){var t=window.event;return t&&t.type==="popstate"?t===Uf?!1:(Uf=t,!0):(Uf=null,!1)}var O0=typeof setTimeout=="function"?setTimeout:void 0,Sw=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,xw=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(t){return R0.resolve(null).then(t).catch(ww)}:O0;function ww(t){setTimeout(function(){throw t})}function Ma(t){return t==="head"}function C0(t,a){var r=a,s=0,u=0;do{var d=r.nextSibling;if(t.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(0<s&&8>s){r=s;var v=t.ownerDocument;if(r&1&&Po(v.documentElement),r&2&&Po(v.body),r&4)for(r=v.head,Po(r),v=r.firstChild;v;){var b=v.nextSibling,S=v.nodeName;v[Xr]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&v.rel.toLowerCase()==="stylesheet"||r.removeChild(v),v=b}}if(u===0){t.removeChild(d),Ho(a);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:s=r.charCodeAt(0)-48;else s=0;r=d}while(r);Ho(a)}function zf(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":zf(r),ju(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Ew(t,a,r,s){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Xr])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=un(t.nextSibling),t===null)break}return null}function _w(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=un(t.nextSibling),t===null))return null;return t}function Vf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Aw(t,a){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")a();else{var s=function(){a(),r.removeEventListener("DOMContentLoaded",s)};r.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function un(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return t}var Bf=null;function D0(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return t;a--}else r==="/$"&&a++}t=t.previousSibling}return null}function M0(t,a,r){switch(a=Dl(r),t){case"html":if(t=a.documentElement,!t)throw Error(o(452));return t;case"head":if(t=a.head,!t)throw Error(o(453));return t;case"body":if(t=a.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Po(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);ju(t)}var Je=new Map,k0=new Set;function Ml(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Jn=j.d;j.d={f:Ow,r:Rw,D:Cw,C:Dw,L:Mw,m:kw,X:Nw,S:Pw,M:Iw};function Ow(){var t=Jn.f(),a=xl();return t||a}function Rw(t){var a=Vi(t);a!==null&&a.tag===5&&a.type==="form"?Wm(a):Jn.r(t)}var br=typeof document>"u"?null:document;function P0(t,a,r){var s=br;if(s&&typeof a=="string"&&a){var u=Fe(a);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),k0.has(u)||(k0.add(u),t={rel:t,crossOrigin:r,href:a},s.querySelector(u)===null&&(a=s.createElement("link"),me(a,"link",t),se(a),s.head.appendChild(a)))}}function Cw(t){Jn.D(t),P0("dns-prefetch",t,null)}function Dw(t,a){Jn.C(t,a),P0("preconnect",t,a)}function Mw(t,a,r){Jn.L(t,a,r);var s=br;if(s&&t&&a){var u='link[rel="preload"][as="'+Fe(a)+'"]';a==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Fe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Fe(r.imageSizes)+'"]')):u+='[href="'+Fe(t)+'"]';var d=u;switch(a){case"style":d=Tr(t);break;case"script":d=Sr(t)}Je.has(d)||(t=g({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),Je.set(d,t),s.querySelector(u)!==null||a==="style"&&s.querySelector(No(d))||a==="script"&&s.querySelector(Io(d))||(a=s.createElement("link"),me(a,"link",t),se(a),s.head.appendChild(a)))}}function kw(t,a){Jn.m(t,a);var r=br;if(r&&t){var s=a&&typeof a.as=="string"?a.as:"script",u='link[rel="modulepreload"][as="'+Fe(s)+'"][href="'+Fe(t)+'"]',d=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Sr(t)}if(!Je.has(d)&&(t=g({rel:"modulepreload",href:t},a),Je.set(d,t),r.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Io(d)))return}s=r.createElement("link"),me(s,"link",t),se(s),r.head.appendChild(s)}}}function Pw(t,a,r){Jn.S(t,a,r);var s=br;if(s&&t){var u=Bi(s).hoistableStyles,d=Tr(t);a=a||"default";var v=u.get(d);if(!v){var b={loading:0,preload:null};if(v=s.querySelector(No(d)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":a},r),(r=Je.get(d))&&Hf(t,r);var S=v=s.createElement("link");se(S),me(S,"link",t),S._p=new Promise(function(M,z){S.onload=M,S.onerror=z}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,kl(v,a,s)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(d,v)}}}function Nw(t,a){Jn.X(t,a);var r=br;if(r&&t){var s=Bi(r).hoistableScripts,u=Sr(t),d=s.get(u);d||(d=r.querySelector(Io(u)),d||(t=g({src:t,async:!0},a),(a=Je.get(u))&&jf(t,a),d=r.createElement("script"),se(d),me(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(u,d))}}function Iw(t,a){Jn.M(t,a);var r=br;if(r&&t){var s=Bi(r).hoistableScripts,u=Sr(t),d=s.get(u);d||(d=r.querySelector(Io(u)),d||(t=g({src:t,async:!0,type:"module"},a),(a=Je.get(u))&&jf(t,a),d=r.createElement("script"),se(d),me(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(u,d))}}function N0(t,a,r,s){var u=(u=tt.current)?Ml(u):null;if(!u)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=Tr(r.href),r=Bi(u).hoistableStyles,s=r.get(a),s||(s={type:"style",instance:null,count:0,state:null},r.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Tr(r.href);var d=Bi(u).hoistableStyles,v=d.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=u.querySelector(No(t)))&&!d._p&&(v.instance=d,v.state.loading=5),Je.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Je.set(t,r),d||Lw(u,t,r,v.state))),a&&s===null)throw Error(o(528,""));return v}if(a&&s!==null)throw Error(o(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Sr(r),r=Bi(u).hoistableScripts,s=r.get(a),s||(s={type:"script",instance:null,count:0,state:null},r.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Tr(t){return'href="'+Fe(t)+'"'}function No(t){return'link[rel="stylesheet"]['+t+"]"}function I0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Lw(t,a,r,s){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?s.loading=1:(a=t.createElement("link"),s.preload=a,a.addEventListener("load",function(){return s.loading|=1}),a.addEventListener("error",function(){return s.loading|=2}),me(a,"link",r),se(a),t.head.appendChild(a))}function Sr(t){return'[src="'+Fe(t)+'"]'}function Io(t){return"script[async]"+t}function L0(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var s=t.querySelector('style[data-href~="'+Fe(r.href)+'"]');if(s)return a.instance=s,se(s),s;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),se(s),me(s,"style",u),kl(s,r.precedence,t),a.instance=s;case"stylesheet":u=Tr(r.href);var d=t.querySelector(No(u));if(d)return a.state.loading|=4,a.instance=d,se(d),d;s=I0(r),(u=Je.get(u))&&Hf(s,u),d=(t.ownerDocument||t).createElement("link"),se(d);var v=d;return v._p=new Promise(function(b,S){v.onload=b,v.onerror=S}),me(d,"link",s),a.state.loading|=4,kl(d,r.precedence,t),a.instance=d;case"script":return d=Sr(r.src),(u=t.querySelector(Io(d)))?(a.instance=u,se(u),u):(s=r,(u=Je.get(d))&&(s=g({},r),jf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),se(u),me(u,"link",s),t.head.appendChild(u),a.instance=u);case"void":return null;default:throw Error(o(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(s=a.instance,a.state.loading|=4,kl(s,r.precedence,t));return a.instance}function kl(t,a,r){for(var s=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,d=u,v=0;v<s.length;v++){var b=s[v];if(b.dataset.precedence===a)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function Hf(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function jf(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Pl=null;function U0(t,a,r){if(Pl===null){var s=new Map,u=Pl=new Map;u.set(r,s)}else u=Pl,s=u.get(r),s||(s=new Map,u.set(r,s));if(s.has(t))return s;for(s.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var d=r[u];if(!(d[Xr]||d[Ft]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(a)||"";v=t+v;var b=s.get(v);b?b.push(d):s.set(v,[d])}}return s}function z0(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function Uw(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function V0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Lo=null;function zw(){}function Vw(t,a,r){if(Lo===null)throw Error(o(475));var s=Lo;if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Tr(r.href),d=t.querySelector(No(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Nl.bind(s),t.then(s,s)),a.state.loading|=4,a.instance=d,se(d);return}d=t.ownerDocument||t,r=I0(r),(u=Je.get(u))&&Hf(r,u),d=d.createElement("link"),se(d);var v=d;v._p=new Promise(function(b,S){v.onload=b,v.onerror=S}),me(d,"link",r),a.instance=d}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(s.count++,a=Nl.bind(s),t.addEventListener("load",a),t.addEventListener("error",a))}}function Bw(){if(Lo===null)throw Error(o(475));var t=Lo;return t.stylesheets&&t.count===0&&qf(t,t.stylesheets),0<t.count?function(a){var r=setTimeout(function(){if(t.stylesheets&&qf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r)}}:null}function Nl(){if(this.count--,this.count===0){if(this.stylesheets)qf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Il=null;function qf(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Il=new Map,a.forEach(Hw,t),Il=null,Nl.call(t))}function Hw(t,a){if(!(a.state.loading&4)){var r=Il.get(t);if(r)var s=r.get(null);else{r=new Map,Il.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var v=u[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(r.set(v.dataset.precedence,v),s=v)}s&&r.set(null,s)}u=a.instance,v=u.getAttribute("data-precedence"),d=r.get(v)||s,d===s&&r.set(null,u),r.set(v,u),this.count++,s=Nl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),a.state.loading|=4}}var Uo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function jw(t,a,r,s,u,d,v,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fr(0),this.hiddenUpdates=Fr(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function B0(t,a,r,s,u,d,v,b,S,M,z,H){return t=new jw(t,a,r,v,b,S,M,H),a=1,d===!0&&(a|=24),d=Le(3,null,null,a),t.current=d,d.stateNode=t,a=wc(),a.refCount++,t.pooledCache=a,a.refCount++,d.memoizedState={element:s,isDehydrated:r,cache:a},Oc(d),t}function H0(t){return t?(t=Wi,t):Wi}function j0(t,a,r,s,u,d){u=H0(u),s.context===null?s.context=u:s.pendingContext=u,s=va(a),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=ba(t,s,a),r!==null&&(He(r,t,a),ho(r,t,a))}function q0(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function Gf(t,a){q0(t,a),(t=t.alternate)&&q0(t,a)}function G0(t){if(t.tag===13){var a=Qi(t,67108864);a!==null&&He(a,t,67108864),Gf(t,67108864)}}var Ll=!0;function qw(t,a,r,s){var u=N.T;N.T=null;var d=j.p;try{j.p=2,Yf(t,a,r,s)}finally{j.p=d,N.T=u}}function Gw(t,a,r,s){var u=N.T;N.T=null;var d=j.p;try{j.p=8,Yf(t,a,r,s)}finally{j.p=d,N.T=u}}function Yf(t,a,r,s){if(Ll){var u=Ff(s);if(u===null)kf(t,a,s,Ul,r),F0(t,s);else if(Fw(u,t,a,r,s))s.stopPropagation();else if(F0(t,s),a&4&&-1<Yw.indexOf(t)){for(;u!==null;){var d=Vi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=bn(d.pendingLanes);if(v!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var S=1<<31-fe(v);b.entanglements[1]|=S,v&=~S}En(d),(wt&6)===0&&(Tl=ye()+500,Do(0))}}break;case 13:b=Qi(d,2),b!==null&&He(b,d,2),xl(),Gf(d,2)}if(d=Ff(s),d===null&&kf(t,a,s,Ul,r),d===u)break;u=d}u!==null&&s.stopPropagation()}else kf(t,a,s,null,r)}}function Ff(t){return t=Zu(t),Xf(t)}var Ul=null;function Xf(t){if(Ul=null,t=zi(t),t!==null){var a=c(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=f(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Ul=t,null}function Y0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rs()){case Ge:return 2;case Cs:return 8;case Ni:case we:return 32;case Un:return 268435456;default:return 32}default:return 32}}var Kf=!1,ka=null,Pa=null,Na=null,zo=new Map,Vo=new Map,Ia=[],Yw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F0(t,a){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":zo.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(a.pointerId)}}function Bo(t,a,r,s,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:a,domEventName:r,eventSystemFlags:s,nativeEvent:d,targetContainers:[u]},a!==null&&(a=Vi(a),a!==null&&G0(a)),t):(t.eventSystemFlags|=s,a=t.targetContainers,u!==null&&a.indexOf(u)===-1&&a.push(u),t)}function Fw(t,a,r,s,u){switch(a){case"focusin":return ka=Bo(ka,t,a,r,s,u),!0;case"dragenter":return Pa=Bo(Pa,t,a,r,s,u),!0;case"mouseover":return Na=Bo(Na,t,a,r,s,u),!0;case"pointerover":var d=u.pointerId;return zo.set(d,Bo(zo.get(d)||null,t,a,r,s,u)),!0;case"gotpointercapture":return d=u.pointerId,Vo.set(d,Bo(Vo.get(d)||null,t,a,r,s,u)),!0}return!1}function X0(t){var a=zi(t.target);if(a!==null){var r=c(a);if(r!==null){if(a=r.tag,a===13){if(a=f(r),a!==null){t.blockedOn=a,ne(t.priority,function(){if(r.tag===13){var s=Be();s=Wt(s);var u=Qi(r,s);u!==null&&He(u,r,s),Gf(r,s)}});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=Ff(t.nativeEvent);if(r===null){r=t.nativeEvent;var s=new r.constructor(r.type,r);$u=s,r.target.dispatchEvent(s),$u=null}else return a=Vi(r),a!==null&&G0(a),t.blockedOn=r,!1;a.shift()}return!0}function K0(t,a,r){zl(t)&&r.delete(a)}function Xw(){Kf=!1,ka!==null&&zl(ka)&&(ka=null),Pa!==null&&zl(Pa)&&(Pa=null),Na!==null&&zl(Na)&&(Na=null),zo.forEach(K0),Vo.forEach(K0)}function Vl(t,a){t.blockedOn===a&&(t.blockedOn=null,Kf||(Kf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Xw)))}var Bl=null;function $0(t){Bl!==t&&(Bl=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Bl===t&&(Bl=null);for(var a=0;a<t.length;a+=3){var r=t[a],s=t[a+1],u=t[a+2];if(typeof s!="function"){if(Xf(s||r)===null)continue;break}var d=Vi(r);d!==null&&(t.splice(a,3),a-=3,Fc(d,{pending:!0,data:u,method:r.method,action:s},s,u))}}))}function Ho(t){function a(S){return Vl(S,t)}ka!==null&&Vl(ka,t),Pa!==null&&Vl(Pa,t),Na!==null&&Vl(Na,t),zo.forEach(a),Vo.forEach(a);for(var r=0;r<Ia.length;r++){var s=Ia[r];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ia.length&&(r=Ia[0],r.blockedOn===null);)X0(r),r.blockedOn===null&&Ia.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(s=0;s<r.length;s+=3){var u=r[s],d=r[s+1],v=u[Dt]||null;if(typeof d=="function")v||$0(r);else if(v){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,v=d[Dt]||null)b=v.formAction;else if(Xf(u)!==null)continue}else b=v.action;typeof b=="function"?r[s+1]=b:(r.splice(s,3),s-=3),$0(r)}}}function $f(t){this._internalRoot=t}Hl.prototype.render=$f.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(o(409));var r=a.current,s=Be();j0(r,s,t,a,null,null)},Hl.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;j0(t.current,2,null,t,null,null),xl(),a[oe]=null}};function Hl(t){this._internalRoot=t}Hl.prototype.unstable_scheduleHydration=function(t){if(t){var a=ti();t={blockedOn:null,target:t,priority:a};for(var r=0;r<Ia.length&&a!==0&&a<Ia[r].priority;r++);Ia.splice(r,0,t),r===0&&X0(t)}};var Z0=e.version;if(Z0!=="19.1.1")throw Error(o(527,Z0,"19.1.1"));j.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=p(a),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Kw={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{vn=jl.inject(Kw),Ee=jl}catch{}}return qo.createRoot=function(t,a){if(!l(t))throw Error(o(299));var r=!1,s="",u=dg,d=hg,v=pg,b=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks)),a=B0(t,1,!1,null,null,r,s,u,d,v,b,null),t[oe]=a.current,Mf(t),new $f(a)},qo.hydrateRoot=function(t,a,r){if(!l(t))throw Error(o(299));var s=!1,u="",d=dg,v=hg,b=pg,S=null,M=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(v=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks),r.formState!==void 0&&(M=r.formState)),a=B0(t,1,!0,a,r??null,s,u,d,v,b,S,M),a.context=H0(null),r=a.current,s=Be(),s=Wt(s),u=va(s),u.callback=null,ba(r,u,s),r=s,a.current.lanes=r,pa(a,r),En(a),t[oe]=a.current,Mf(t),new Hl(a)},qo.version="19.1.1",qo}var oy;function aE(){if(oy)return Wf.exports;oy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Wf.exports=nE(),Wf.exports}var iE=aE();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var sy="popstate";function rE(n={}){function e(l,c){let{pathname:f="/",search:h="",hash:p=""}=Di(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Dd("",{pathname:f,search:h,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let p=l.location.href,m=p.indexOf("#");h=m===-1?p:p.slice(0,m)}return h+"#"+(typeof c=="string"?c:rs(c))}function o(l,c){mn(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return sE(e,i,o,n)}function Bt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function mn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oE(){return Math.random().toString(36).substring(2,10)}function ly(n,e){return{usr:n.state,key:n.key,idx:e}}function Dd(n,e,i=null,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Di(e):e,state:i,key:e&&e.key||o||oE()}}function rs({pathname:n="/",search:e="",hash:i=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function Di(n){let e={};if(n){let i=n.indexOf("#");i>=0&&(e.hash=n.substring(i),n=n.substring(0,i));let o=n.indexOf("?");o>=0&&(e.search=n.substring(o),n=n.substring(0,o)),n&&(e.pathname=n)}return e}function sE(n,e,i,o={}){let{window:l=document.defaultView,v5Compat:c=!1}=o,f=l.history,h="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function y(){h="POP";let k=g(),D=k==null?null:k-m;m=k,p&&p({action:h,location:A.location,delta:D})}function T(k,D){h="PUSH";let L=Dd(A.location,k,D);i&&i(L,k),m=g()+1;let U=ly(L,m),K=A.createHref(L);try{f.pushState(U,"",K)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(K)}c&&p&&p({action:h,location:A.location,delta:1})}function w(k,D){h="REPLACE";let L=Dd(A.location,k,D);i&&i(L,k),m=g();let U=ly(L,m),K=A.createHref(L);f.replaceState(U,"",K),c&&p&&p({action:h,location:A.location,delta:0})}function _(k){return lE(k)}let A={get action(){return h},get location(){return n(l,f)},listen(k){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(sy,y),p=k,()=>{l.removeEventListener(sy,y),p=null}},createHref(k){return e(l,k)},createURL:_,encodeLocation(k){let D=_(k);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:T,replace:w,go(k){return f.go(k)}};return A}function lE(n,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Bt(i,"No window.location.(origin|href) available to create URL");let o=typeof n=="string"?n:rs(n);return o=o.replace(/ $/,"%20"),!e&&o.startsWith("//")&&(o=i+o),new URL(o,i)}function Eb(n,e,i="/"){return uE(n,e,i,!1)}function uE(n,e,i,o){let l=typeof e=="string"?Di(e):e,c=ia(l.pathname||"/",i);if(c==null)return null;let f=_b(n);cE(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=SE(c);h=bE(f[p],m,o)}return h}function _b(n,e=[],i=[],o="",l=!1){let c=(f,h,p=l,m)=>{let g={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(o)&&p)return;Bt(g.relativePath.startsWith(o),`Absolute route path "${g.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(o.length)}let y=aa([o,g.relativePath]),T=i.concat(g);f.children&&f.children.length>0&&(Bt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),_b(f.children,e,T,y,p)),!(f.path==null&&!f.index)&&e.push({path:y,score:yE(y,f.index),routesMeta:T})};return n.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let p of Ab(f.path))c(f,h,!0,p)}),e}function Ab(n){let e=n.split("/");if(e.length===0)return[];let[i,...o]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(o.length===0)return l?[c,""]:[c];let f=Ab(o.join("/")),h=[];return h.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&h.push(...f),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function cE(n){n.sort((e,i)=>e.score!==i.score?i.score-e.score:vE(e.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var fE=/^:[\w-]+$/,dE=3,hE=2,pE=1,mE=10,gE=-2,uy=n=>n==="*";function yE(n,e){let i=n.split("/"),o=i.length;return i.some(uy)&&(o+=gE),e&&(o+=hE),i.filter(l=>!uy(l)).reduce((l,c)=>l+(fE.test(c)?dE:c===""?pE:mE),o)}function vE(n,e){return n.length===e.length&&n.slice(0,-1).every((o,l)=>o===e[l])?n[n.length-1]-e[e.length-1]:0}function bE(n,e,i=!1){let{routesMeta:o}=n,l={},c="/",f=[];for(let h=0;h<o.length;++h){let p=o[h],m=h===o.length-1,g=c==="/"?e:e.slice(c.length)||"/",y=su({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),T=p.route;if(!y&&m&&i&&!o[o.length-1].route.index&&(y=su({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!y)return null;Object.assign(l,y.params),f.push({params:l,pathname:aa([c,y.pathname]),pathnameBase:_E(aa([c,y.pathnameBase])),route:T}),y.pathnameBase!=="/"&&(c=aa([c,y.pathnameBase]))}return f}function su(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,o]=TE(n.path,n.caseSensitive,n.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:o.reduce((m,{paramName:g,isOptional:y},T)=>{if(g==="*"){let _=h[T]||"";f=c.slice(0,c.length-_.length).replace(/(.)\/+$/,"$1")}const w=h[T];return y&&!w?m[g]=void 0:m[g]=(w||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:n}}function TE(n,e=!1,i=!0){mn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(o.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),l+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":n!==""&&n!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),o]}function SE(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function ia(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,o=n.charAt(i);return o&&o!=="/"?null:n.slice(i)||"/"}function xE(n,e="/"){let{pathname:i,search:o="",hash:l=""}=typeof n=="string"?Di(n):n;return{pathname:i?i.startsWith("/")?i:wE(i,e):e,search:AE(o),hash:OE(l)}}function wE(n,e){let i=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function nd(n,e,i,o){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function EE(n){return n.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Ob(n){let e=EE(n);return e.map((i,o)=>o===e.length-1?i.pathname:i.pathnameBase)}function Rb(n,e,i,o=!1){let l;typeof n=="string"?l=Di(n):(l={...n},Bt(!l.pathname||!l.pathname.includes("?"),nd("?","pathname","search",l)),Bt(!l.pathname||!l.pathname.includes("#"),nd("#","pathname","hash",l)),Bt(!l.search||!l.search.includes("#"),nd("#","search","hash",l)));let c=n===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let y=e.length-1;if(!o&&f.startsWith("..")){let T=f.split("/");for(;T[0]==="..";)T.shift(),y-=1;l.pathname=T.join("/")}h=y>=0?e[y]:"/"}let p=xE(l,h),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var aa=n=>n.join("/").replace(/\/\/+/g,"/"),_E=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),AE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,OE=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function RE(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Cb=["POST","PUT","PATCH","DELETE"];new Set(Cb);var CE=["GET",...Cb];new Set(CE);var Ur=R.createContext(null);Ur.displayName="DataRouter";var _u=R.createContext(null);_u.displayName="DataRouterState";R.createContext(!1);var Db=R.createContext({isTransitioning:!1});Db.displayName="ViewTransition";var DE=R.createContext(new Map);DE.displayName="Fetchers";var ME=R.createContext(null);ME.displayName="Await";var Pn=R.createContext(null);Pn.displayName="Navigation";var ms=R.createContext(null);ms.displayName="Location";var ca=R.createContext({outlet:null,matches:[],isDataRoute:!1});ca.displayName="Route";var fh=R.createContext(null);fh.displayName="RouteError";function kE(n,{relative:e}={}){Bt(gs(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=R.useContext(Pn),{hash:l,pathname:c,search:f}=ys(n,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:aa([i,c])),o.createHref({pathname:h,search:f,hash:l})}function gs(){return R.useContext(ms)!=null}function Mi(){return Bt(gs(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(ms).location}var Mb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function kb(n){R.useContext(Pn).static||R.useLayoutEffect(n)}function dh(){let{isDataRoute:n}=R.useContext(ca);return n?YE():PE()}function PE(){Bt(gs(),"useNavigate() may be used only in the context of a <Router> component.");let n=R.useContext(Ur),{basename:e,navigator:i}=R.useContext(Pn),{matches:o}=R.useContext(ca),{pathname:l}=Mi(),c=JSON.stringify(Ob(o)),f=R.useRef(!1);return kb(()=>{f.current=!0}),R.useCallback((p,m={})=>{if(mn(f.current,Mb),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=Rb(p,JSON.parse(c),l,m.relative==="path");n==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:aa([e,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[e,i,c,l,n])}R.createContext(null);function ys(n,{relative:e}={}){let{matches:i}=R.useContext(ca),{pathname:o}=Mi(),l=JSON.stringify(Ob(i));return R.useMemo(()=>Rb(n,JSON.parse(l),o,e==="path"),[n,l,o,e])}function NE(n,e){return Pb(n,e)}function Pb(n,e,i,o,l){Bt(gs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=R.useContext(Pn),{matches:f}=R.useContext(ca),h=f[f.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",y=h&&h.route;{let L=y&&y.path||"";Nb(m,!y||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let T=Mi(),w;if(e){let L=typeof e=="string"?Di(e):e;Bt(g==="/"||L.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),w=L}else w=T;let _=w.pathname||"/",A=_;if(g!=="/"){let L=g.replace(/^\//,"").split("/");A="/"+_.replace(/^\//,"").split("/").slice(L.length).join("/")}let k=Eb(n,{pathname:A});mn(y||k!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),mn(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=VE(k&&k.map(L=>Object.assign({},L,{params:Object.assign({},p,L.params),pathname:aa([g,c.encodeLocation?c.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:aa([g,c.encodeLocation?c.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),f,i,o,l);return e&&D?R.createElement(ms.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},D):D}function IE(){let n=GE(),e=RE(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:c},"ErrorBoundary")," or"," ",R.createElement("code",{style:c},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),i?R.createElement("pre",{style:l},i):null,f)}var LE=R.createElement(IE,null),UE=class extends R.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.unstable_onError?this.props.unstable_onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?R.createElement(ca.Provider,{value:this.props.routeContext},R.createElement(fh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zE({routeContext:n,match:e,children:i}){let o=R.useContext(Ur);return o&&o.static&&o.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=e.route.id),R.createElement(ca.Provider,{value:n},i)}function VE(n,e=[],i=null,o=null,l=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let c=n,f=i?.errors;if(f!=null){let m=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Bt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,m+1))}let h=!1,p=-1;if(i)for(let m=0;m<c.length;m++){let g=c[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:y,errors:T}=i,w=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||w){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((m,g,y)=>{let T,w=!1,_=null,A=null;i&&(T=f&&g.route.id?f[g.route.id]:void 0,_=g.route.errorElement||LE,h&&(p<0&&y===0?(Nb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,A=null):p===y&&(w=!0,A=g.route.hydrateFallbackElement||null)));let k=e.concat(c.slice(0,y+1)),D=()=>{let L;return T?L=_:w?L=A:g.route.Component?L=R.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=m,R.createElement(zE,{match:g,routeContext:{outlet:m,matches:k,isDataRoute:i!=null},children:L})};return i&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?R.createElement(UE,{location:i.location,revalidation:i.revalidation,component:_,error:T,children:D(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:o}):D()},null)}function hh(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function BE(n){let e=R.useContext(Ur);return Bt(e,hh(n)),e}function HE(n){let e=R.useContext(_u);return Bt(e,hh(n)),e}function jE(n){let e=R.useContext(ca);return Bt(e,hh(n)),e}function ph(n){let e=jE(n),i=e.matches[e.matches.length-1];return Bt(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function qE(){return ph("useRouteId")}function GE(){let n=R.useContext(fh),e=HE("useRouteError"),i=ph("useRouteError");return n!==void 0?n:e.errors?.[i]}function YE(){let{router:n}=BE("useNavigate"),e=ph("useNavigate"),i=R.useRef(!1);return kb(()=>{i.current=!0}),R.useCallback(async(l,c={})=>{mn(i.current,Mb),i.current&&(typeof l=="number"?n.navigate(l):await n.navigate(l,{fromRouteId:e,...c}))},[n,e])}var cy={};function Nb(n,e,i){!e&&!cy[n]&&(cy[n]=!0,mn(!1,i))}R.memo(FE);function FE({routes:n,future:e,state:i,unstable_onError:o}){return Pb(n,void 0,i,o,e)}function Fo(n){Bt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function XE({basename:n="/",children:e=null,location:i,navigationType:o="POP",navigator:l,static:c=!1}){Bt(!gs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),h=R.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Di(i));let{pathname:p="/",search:m="",hash:g="",state:y=null,key:T="default"}=i,w=R.useMemo(()=>{let _=ia(p,f);return _==null?null:{location:{pathname:_,search:m,hash:g,state:y,key:T},navigationType:o}},[f,p,m,g,y,T,o]);return mn(w!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:R.createElement(Pn.Provider,{value:h},R.createElement(ms.Provider,{children:e,value:w}))}function KE({children:n,location:e}){return NE(Md(n),e)}function Md(n,e=[]){let i=[];return R.Children.forEach(n,(o,l)=>{if(!R.isValidElement(o))return;let c=[...e,l];if(o.type===R.Fragment){i.push.apply(i,Md(o.props.children,c));return}Bt(o.type===Fo,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Bt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=Md(o.props.children,c)),i.push(f)}),i}var Ql="get",Wl="application/x-www-form-urlencoded";function Au(n){return n!=null&&typeof n.tagName=="string"}function $E(n){return Au(n)&&n.tagName.toLowerCase()==="button"}function ZE(n){return Au(n)&&n.tagName.toLowerCase()==="form"}function QE(n){return Au(n)&&n.tagName.toLowerCase()==="input"}function WE(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function JE(n,e){return n.button===0&&(!e||e==="_self")&&!WE(n)}var ql=null;function t2(){if(ql===null)try{new FormData(document.createElement("form"),0),ql=!1}catch{ql=!0}return ql}var e2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ad(n){return n!=null&&!e2.has(n)?(mn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wl}"`),null):n}function n2(n,e){let i,o,l,c,f;if(ZE(n)){let h=n.getAttribute("action");o=h?ia(h,e):null,i=n.getAttribute("method")||Ql,l=ad(n.getAttribute("enctype"))||Wl,c=new FormData(n)}else if($E(n)||QE(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||h.getAttribute("action");if(o=p?ia(p,e):null,i=n.getAttribute("formmethod")||h.getAttribute("method")||Ql,l=ad(n.getAttribute("formenctype"))||ad(h.getAttribute("enctype"))||Wl,c=new FormData(h,n),!t2()){let{name:m,type:g,value:y}=n;if(g==="image"){let T=m?`${m}.`:"";c.append(`${T}x`,"0"),c.append(`${T}y`,"0")}else m&&c.append(m,y)}}else{if(Au(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ql,o=null,l=Wl,f=n}return c&&l==="text/plain"&&(f=c,c=void 0),{action:o,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mh(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function a2(n,e,i){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname=`_root.${i}`:e&&ia(o.pathname,e)==="/"?o.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${i}`,o}async function i2(n,e){if(n.id in e)return e[n.id];try{let i=await import(n.module);return e[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function r2(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function o2(n,e,i){let o=await Promise.all(n.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await i2(c,i);return f.links?f.links():[]}return[]}));return c2(o.flat(1).filter(r2).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function fy(n,e,i,o,l,c){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>i[m].pathname!==p.pathname||i[m].route.path?.endsWith("*")&&i[m].params["*"]!==p.params["*"];return c==="assets"?e.filter((p,m)=>f(p,m)||h(p,m)):c==="data"?e.filter((p,m)=>{let g=o.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let y=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function s2(n,e,{includeHydrateFallback:i}={}){return l2(n.map(o=>{let l=e.routes[o.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function l2(n){return[...new Set(n)]}function u2(n){let e={},i=Object.keys(n).sort();for(let o of i)e[o]=n[o];return e}function c2(n,e){let i=new Set;return new Set(e),n.reduce((o,l)=>{let c=JSON.stringify(u2(l));return i.has(c)||(i.add(c),o.push({key:c,link:l})),o},[])}function Ib(){let n=R.useContext(Ur);return mh(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function f2(){let n=R.useContext(_u);return mh(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var gh=R.createContext(void 0);gh.displayName="FrameworkContext";function Lb(){let n=R.useContext(gh);return mh(n,"You must render this element inside a <HydratedRouter> element"),n}function d2(n,e){let i=R.useContext(gh),[o,l]=R.useState(!1),[c,f]=R.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:y}=e,T=R.useRef(null);R.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let A=D=>{D.forEach(L=>{f(L.isIntersecting)})},k=new IntersectionObserver(A,{threshold:.5});return T.current&&k.observe(T.current),()=>{k.disconnect()}}},[n]),R.useEffect(()=>{if(o){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[o]);let w=()=>{l(!0)},_=()=>{l(!1),f(!1)};return i?n!=="intent"?[c,T,{}]:[c,T,{onFocus:Go(h,w),onBlur:Go(p,_),onMouseEnter:Go(m,w),onMouseLeave:Go(g,_),onTouchStart:Go(y,w)}]:[!1,T,{}]}function Go(n,e){return i=>{n&&n(i),i.defaultPrevented||e(i)}}function h2({page:n,...e}){let{router:i}=Ib(),o=R.useMemo(()=>Eb(i.routes,n,i.basename),[i.routes,n,i.basename]);return o?R.createElement(m2,{page:n,matches:o,...e}):null}function p2(n){let{manifest:e,routeModules:i}=Lb(),[o,l]=R.useState([]);return R.useEffect(()=>{let c=!1;return o2(n,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[n,e,i]),o}function m2({page:n,matches:e,...i}){let o=Mi(),{manifest:l,routeModules:c}=Lb(),{basename:f}=Ib(),{loaderData:h,matches:p}=f2(),m=R.useMemo(()=>fy(n,e,p,l,o,"data"),[n,e,p,l,o]),g=R.useMemo(()=>fy(n,e,p,l,o,"assets"),[n,e,p,l,o]),y=R.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let _=new Set,A=!1;if(e.forEach(D=>{let L=l.routes[D.route.id];!L||!L.hasLoader||(!m.some(U=>U.route.id===D.route.id)&&D.route.id in h&&c[D.route.id]?.shouldRevalidate||L.hasClientLoader?A=!0:_.add(D.route.id))}),_.size===0)return[];let k=a2(n,f,"data");return A&&_.size>0&&k.searchParams.set("_routes",e.filter(D=>_.has(D.route.id)).map(D=>D.route.id).join(",")),[k.pathname+k.search]},[f,h,o,l,m,e,n,c]),T=R.useMemo(()=>s2(g,l),[g,l]),w=p2(g);return R.createElement(R.Fragment,null,y.map(_=>R.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...i})),T.map(_=>R.createElement("link",{key:_,rel:"modulepreload",href:_,...i})),w.map(({key:_,link:A})=>R.createElement("link",{key:_,nonce:i.nonce,...A})))}function g2(...n){return e=>{n.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Ub=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ub&&(window.__reactRouterVersion="7.9.4")}catch{}function y2({basename:n,children:e,window:i}){let o=R.useRef();o.current==null&&(o.current=rE({window:i,v5Compat:!0}));let l=o.current,[c,f]=R.useState({action:l.action,location:l.location}),h=R.useCallback(p=>{R.startTransition(()=>f(p))},[f]);return R.useLayoutEffect(()=>l.listen(h),[l,h]),R.createElement(XE,{basename:n,children:e,location:c.location,navigationType:c.action,navigator:l})}var zb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vb=R.forwardRef(function({onClick:e,discover:i="render",prefetch:o="none",relative:l,reloadDocument:c,replace:f,state:h,target:p,to:m,preventScrollReset:g,viewTransition:y,...T},w){let{basename:_}=R.useContext(Pn),A=typeof m=="string"&&zb.test(m),k,D=!1;if(typeof m=="string"&&A&&(k=m,Ub))try{let rt=new URL(window.location.href),St=m.startsWith("//")?new URL(rt.protocol+m):new URL(m),Ut=ia(St.pathname,_);St.origin===rt.origin&&Ut!=null?m=Ut+St.search+St.hash:D=!0}catch{mn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=kE(m,{relative:l}),[U,K,G]=d2(o,T),J=S2(m,{replace:f,state:h,target:p,preventScrollReset:g,relative:l,viewTransition:y});function it(rt){e&&e(rt),rt.defaultPrevented||J(rt)}let Q=R.createElement("a",{...T,...G,href:k||L,onClick:D||c?e:it,ref:g2(w,K),target:p,"data-discover":!A&&i==="render"?"true":void 0});return U&&!A?R.createElement(R.Fragment,null,Q,R.createElement(h2,{page:L})):Q});Vb.displayName="Link";var v2=R.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:o="",end:l=!1,style:c,to:f,viewTransition:h,children:p,...m},g){let y=ys(f,{relative:m.relative}),T=Mi(),w=R.useContext(_u),{navigator:_,basename:A}=R.useContext(Pn),k=w!=null&&A2(y)&&h===!0,D=_.encodeLocation?_.encodeLocation(y).pathname:y.pathname,L=T.pathname,U=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(L=L.toLowerCase(),U=U?U.toLowerCase():null,D=D.toLowerCase()),U&&A&&(U=ia(U,A)||U);const K=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let G=L===D||!l&&L.startsWith(D)&&L.charAt(K)==="/",J=U!=null&&(U===D||!l&&U.startsWith(D)&&U.charAt(D.length)==="/"),it={isActive:G,isPending:J,isTransitioning:k},Q=G?e:void 0,rt;typeof o=="function"?rt=o(it):rt=[o,G?"active":null,J?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let St=typeof c=="function"?c(it):c;return R.createElement(Vb,{...m,"aria-current":Q,className:rt,ref:g,style:St,to:f,viewTransition:h},typeof p=="function"?p(it):p)});v2.displayName="NavLink";var b2=R.forwardRef(({discover:n="render",fetcherKey:e,navigate:i,reloadDocument:o,replace:l,state:c,method:f=Ql,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:y,...T},w)=>{let _=E2(),A=_2(h,{relative:m}),k=f.toLowerCase()==="get"?"get":"post",D=typeof h=="string"&&zb.test(h),L=U=>{if(p&&p(U),U.defaultPrevented)return;U.preventDefault();let K=U.nativeEvent.submitter,G=K?.getAttribute("formmethod")||f;_(K||U.currentTarget,{fetcherKey:e,method:G,navigate:i,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:y})};return R.createElement("form",{ref:w,method:k,action:A,onSubmit:o?p:L,...T,"data-discover":!D&&n==="render"?"true":void 0})});b2.displayName="Form";function T2(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bb(n){let e=R.useContext(Ur);return Bt(e,T2(n)),e}function S2(n,{target:e,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=dh(),p=Mi(),m=ys(n,{relative:c});return R.useCallback(g=>{if(JE(g,e)){g.preventDefault();let y=i!==void 0?i:rs(p)===rs(m);h(n,{replace:y,state:o,preventScrollReset:l,relative:c,viewTransition:f})}},[p,h,m,i,o,e,n,l,c,f])}var x2=0,w2=()=>`__${String(++x2)}__`;function E2(){let{router:n}=Bb("useSubmit"),{basename:e}=R.useContext(Pn),i=qE();return R.useCallback(async(o,l={})=>{let{action:c,method:f,encType:h,formData:p,body:m}=n2(o,e);if(l.navigate===!1){let g=l.fetcherKey||w2();await n.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await n.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[n,e,i])}function _2(n,{relative:e}={}){let{basename:i}=R.useContext(Pn),o=R.useContext(ca);Bt(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),c={...ys(n||".",{relative:e})},f=Mi();if(n==null){c.search=f.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(y=>y).forEach(y=>h.append("index",y));let g=h.toString();c.search=g?`?${g}`:""}}return(!n||n===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:aa([i,c.pathname])),rs(c)}function A2(n,{relative:e}={}){let i=R.useContext(Db);Bt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Bb("useViewTransitionState"),l=ys(n,{relative:e});if(!i.isTransitioning)return!1;let c=ia(i.currentLocation.pathname,o)||i.currentLocation.pathname,f=ia(i.nextLocation.pathname,o)||i.nextLocation.pathname;return su(l.pathname,f)!=null||su(l.pathname,c)!=null}var O2=wb();const R2=xb(O2);var Hb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},dy=Y.createContext&&Y.createContext(Hb),C2=["attr","size","title"];function D2(n,e){if(n==null)return{};var i=M2(n,e),o,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(l=0;l<c.length;l++)o=c[l],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}function M2(n,e){if(n==null)return{};var i={};for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){if(e.indexOf(o)>=0)continue;i[o]=n[o]}return i}function lu(){return lu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},lu.apply(this,arguments)}function hy(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),i.push.apply(i,o)}return i}function uu(n){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?hy(Object(i),!0).forEach(function(o){k2(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):hy(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function k2(n,e,i){return e=P2(e),e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function P2(n){var e=N2(n,"string");return typeof e=="symbol"?e:e+""}function N2(n,e){if(typeof n!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var o=i.call(n,e);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function jb(n){return n&&n.map((e,i)=>Y.createElement(e.tag,uu({key:i},e.attr),jb(e.child)))}function Ou(n){return e=>Y.createElement(I2,lu({attr:uu({},n.attr)},e),jb(n.child))}function I2(n){var e=i=>{var{attr:o,size:l,title:c}=n,f=D2(n,C2),h=l||i.size||"1em",p;return i.className&&(p=i.className),n.className&&(p=(p?p+" ":"")+n.className),Y.createElement("svg",lu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,f,{className:p,style:uu(uu({color:n.color||i.color},i.style),n.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&Y.createElement("title",null,c),n.children)};return dy!==void 0?Y.createElement(dy.Consumer,null,i=>e(i)):e(Hb)}function qb(n){return Ou({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(n)}function py(n){return Ou({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"},child:[]}]})(n)}function Gb(n){return Ou({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"},child:[]}]})(n)}async function L2(n,e,i){const o=n.target.files[0];return o?o.name.split(".").pop().toLowerCase()!=="stl"?(e(F.jsx(Gb,{size:48,color:"red",style:{position:"absolute"}})),!1):(i&&await i(o),e(F.jsx(qb,{size:48,color:"green",style:{position:"absolute"}})),!0):!1}async function U2(n,e,i){const o=n.target.files[0];if(!o)return!1;const l=o.name.split(".").pop().toLowerCase();return l!=="png"&&l!=="jpeg"&&l!=="jpg"?(e(F.jsx(Gb,{size:48,color:"red",style:{position:"absolute"}})),!1):(i&&await i(o),e(F.jsx(qb,{size:48,color:"green",style:{position:"absolute"}})),!0)}const Yb=R.createContext({});function z2(n){const e=R.useRef(null);return e.current===null&&(e.current=n()),e.current}const yh=typeof window<"u",V2=yh?R.useLayoutEffect:R.useEffect,vh=R.createContext(null);function bh(n,e){n.indexOf(e)===-1&&n.push(e)}function Th(n,e){const i=n.indexOf(e);i>-1&&n.splice(i,1)}const ra=(n,e,i)=>i>e?e:i<n?n:i;let Sh=()=>{};const oa={},Fb=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Xb(n){return typeof n=="object"&&n!==null}const Kb=n=>/^0[^.\s]+$/u.test(n);function xh(n){let e;return()=>(e===void 0&&(e=n()),e)}const an=n=>n,B2=(n,e)=>i=>e(n(i)),vs=(...n)=>n.reduce(B2),os=(n,e,i)=>{const o=e-n;return o===0?1:(i-n)/o};class wh{constructor(){this.subscriptions=[]}add(e){return bh(this.subscriptions,e),()=>Th(this.subscriptions,e)}notify(e,i,o){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](e,i,o);else for(let c=0;c<l;c++){const f=this.subscriptions[c];f&&f(e,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const On=n=>n*1e3,nn=n=>n/1e3;function $b(n,e){return e?n*(1e3/e):0}const Zb=(n,e,i)=>(((1-3*i+3*e)*n+(3*i-6*e))*n+3*e)*n,H2=1e-7,j2=12;function q2(n,e,i,o,l){let c,f,h=0;do f=e+(i-e)/2,c=Zb(f,o,l)-n,c>0?i=f:e=f;while(Math.abs(c)>H2&&++h<j2);return f}function bs(n,e,i,o){if(n===e&&i===o)return an;const l=c=>q2(c,0,1,n,i);return c=>c===0||c===1?c:Zb(l(c),e,o)}const Qb=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Wb=n=>e=>1-n(1-e),Jb=bs(.33,1.53,.69,.99),Eh=Wb(Jb),t1=Qb(Eh),e1=n=>(n*=2)<1?.5*Eh(n):.5*(2-Math.pow(2,-10*(n-1))),_h=n=>1-Math.sin(Math.acos(n)),n1=Wb(_h),a1=Qb(_h),G2=bs(.42,0,1,1),Y2=bs(0,0,.58,1),i1=bs(.42,0,.58,1),F2=n=>Array.isArray(n)&&typeof n[0]!="number",r1=n=>Array.isArray(n)&&typeof n[0]=="number",X2={linear:an,easeIn:G2,easeInOut:i1,easeOut:Y2,circIn:_h,circInOut:a1,circOut:n1,backIn:Eh,backInOut:t1,backOut:Jb,anticipate:e1},K2=n=>typeof n=="string",my=n=>{if(r1(n)){Sh(n.length===4);const[e,i,o,l]=n;return bs(e,i,o,l)}else if(K2(n))return X2[n];return n},Gl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function $2(n,e){let i=new Set,o=new Set,l=!1,c=!1;const f=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){f.has(g)&&(m.schedule(g),n()),g(h)}const m={schedule:(g,y=!1,T=!1)=>{const _=T&&l?i:o;return y&&f.add(g),_.has(g)||_.add(g),g},cancel:g=>{o.delete(g),f.delete(g)},process:g=>{if(h=g,l){c=!0;return}l=!0,[i,o]=[o,i],i.forEach(p),i.clear(),l=!1,c&&(c=!1,m.process(g))}};return m}const Z2=40;function o1(n,e){let i=!1,o=!0;const l={delta:0,timestamp:0,isProcessing:!1},c=()=>i=!0,f=Gl.reduce((U,K)=>(U[K]=$2(c),U),{}),{setup:h,read:p,resolveKeyframes:m,preUpdate:g,update:y,preRender:T,render:w,postRender:_}=f,A=()=>{const U=oa.useManualTiming?l.timestamp:performance.now();i=!1,oa.useManualTiming||(l.delta=o?1e3/60:Math.max(Math.min(U-l.timestamp,Z2),1)),l.timestamp=U,l.isProcessing=!0,h.process(l),p.process(l),m.process(l),g.process(l),y.process(l),T.process(l),w.process(l),_.process(l),l.isProcessing=!1,i&&e&&(o=!1,n(A))},k=()=>{i=!0,o=!0,l.isProcessing||n(A)};return{schedule:Gl.reduce((U,K)=>{const G=f[K];return U[K]=(J,it=!1,Q=!1)=>(i||k(),G.schedule(J,it,Q)),U},{}),cancel:U=>{for(let K=0;K<Gl.length;K++)f[Gl[K]].cancel(U)},state:l,steps:f}}const{schedule:Lt,cancel:Xa,state:ge,steps:id}=o1(typeof requestAnimationFrame<"u"?requestAnimationFrame:an,!0);let Jl;function Q2(){Jl=void 0}const Ne={now:()=>(Jl===void 0&&Ne.set(ge.isProcessing||oa.useManualTiming?ge.timestamp:performance.now()),Jl),set:n=>{Jl=n,queueMicrotask(Q2)}},s1=n=>e=>typeof e=="string"&&e.startsWith(n),Ah=s1("--"),W2=s1("var(--"),Oh=n=>W2(n)?J2.test(n.split("/*")[0].trim()):!1,J2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,zr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ss={...zr,transform:n=>ra(0,1,n)},Yl={...zr,default:1},Qo=n=>Math.round(n*1e5)/1e5,Rh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function t_(n){return n==null}const e_=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ch=(n,e)=>i=>!!(typeof i=="string"&&e_.test(i)&&i.startsWith(n)||e&&!t_(i)&&Object.prototype.hasOwnProperty.call(i,e)),l1=(n,e,i)=>o=>{if(typeof o!="string")return o;const[l,c,f,h]=o.match(Rh);return{[n]:parseFloat(l),[e]:parseFloat(c),[i]:parseFloat(f),alpha:h!==void 0?parseFloat(h):1}},n_=n=>ra(0,255,n),rd={...zr,transform:n=>Math.round(n_(n))},Si={test:Ch("rgb","red"),parse:l1("red","green","blue"),transform:({red:n,green:e,blue:i,alpha:o=1})=>"rgba("+rd.transform(n)+", "+rd.transform(e)+", "+rd.transform(i)+", "+Qo(ss.transform(o))+")"};function a_(n){let e="",i="",o="",l="";return n.length>5?(e=n.substring(1,3),i=n.substring(3,5),o=n.substring(5,7),l=n.substring(7,9)):(e=n.substring(1,2),i=n.substring(2,3),o=n.substring(3,4),l=n.substring(4,5),e+=e,i+=i,o+=o,l+=l),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const kd={test:Ch("#"),parse:a_,transform:Si.transform},Ts=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Va=Ts("deg"),Rn=Ts("%"),ft=Ts("px"),i_=Ts("vh"),r_=Ts("vw"),gy={...Rn,parse:n=>Rn.parse(n)/100,transform:n=>Rn.transform(n*100)},wr={test:Ch("hsl","hue"),parse:l1("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:i,alpha:o=1})=>"hsla("+Math.round(n)+", "+Rn.transform(Qo(e))+", "+Rn.transform(Qo(i))+", "+Qo(ss.transform(o))+")"},ee={test:n=>Si.test(n)||kd.test(n)||wr.test(n),parse:n=>Si.test(n)?Si.parse(n):wr.test(n)?wr.parse(n):kd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Si.transform(n):wr.transform(n),getAnimatableNone:n=>{const e=ee.parse(n);return e.alpha=0,ee.transform(e)}},o_=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function s_(n){return isNaN(n)&&typeof n=="string"&&(n.match(Rh)?.length||0)+(n.match(o_)?.length||0)>0}const u1="number",c1="color",l_="var",u_="var(",yy="${}",c_=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ls(n){const e=n.toString(),i=[],o={color:[],number:[],var:[]},l=[];let c=0;const h=e.replace(c_,p=>(ee.test(p)?(o.color.push(c),l.push(c1),i.push(ee.parse(p))):p.startsWith(u_)?(o.var.push(c),l.push(l_),i.push(p)):(o.number.push(c),l.push(u1),i.push(parseFloat(p))),++c,yy)).split(yy);return{values:i,split:h,indexes:o,types:l}}function f1(n){return ls(n).values}function d1(n){const{split:e,types:i}=ls(n),o=e.length;return l=>{let c="";for(let f=0;f<o;f++)if(c+=e[f],l[f]!==void 0){const h=i[f];h===u1?c+=Qo(l[f]):h===c1?c+=ee.transform(l[f]):c+=l[f]}return c}}const f_=n=>typeof n=="number"?0:ee.test(n)?ee.getAnimatableNone(n):n;function d_(n){const e=f1(n);return d1(n)(e.map(f_))}const Ka={test:s_,parse:f1,createTransformer:d1,getAnimatableNone:d_};function od(n,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?n+(e-n)*6*i:i<1/2?e:i<2/3?n+(e-n)*(2/3-i)*6:n}function h_({hue:n,saturation:e,lightness:i,alpha:o}){n/=360,e/=100,i/=100;let l=0,c=0,f=0;if(!e)l=c=f=i;else{const h=i<.5?i*(1+e):i+e-i*e,p=2*i-h;l=od(p,h,n+1/3),c=od(p,h,n),f=od(p,h,n-1/3)}return{red:Math.round(l*255),green:Math.round(c*255),blue:Math.round(f*255),alpha:o}}function cu(n,e){return i=>i>0?e:n}const Vt=(n,e,i)=>n+(e-n)*i,sd=(n,e,i)=>{const o=n*n,l=i*(e*e-o)+o;return l<0?0:Math.sqrt(l)},p_=[kd,Si,wr],m_=n=>p_.find(e=>e.test(n));function vy(n){const e=m_(n);if(!e)return!1;let i=e.parse(n);return e===wr&&(i=h_(i)),i}const by=(n,e)=>{const i=vy(n),o=vy(e);if(!i||!o)return cu(n,e);const l={...i};return c=>(l.red=sd(i.red,o.red,c),l.green=sd(i.green,o.green,c),l.blue=sd(i.blue,o.blue,c),l.alpha=Vt(i.alpha,o.alpha,c),Si.transform(l))},Pd=new Set(["none","hidden"]);function g_(n,e){return Pd.has(n)?i=>i<=0?n:e:i=>i>=1?e:n}function y_(n,e){return i=>Vt(n,e,i)}function Dh(n){return typeof n=="number"?y_:typeof n=="string"?Oh(n)?cu:ee.test(n)?by:T_:Array.isArray(n)?h1:typeof n=="object"?ee.test(n)?by:v_:cu}function h1(n,e){const i=[...n],o=i.length,l=n.map((c,f)=>Dh(c)(c,e[f]));return c=>{for(let f=0;f<o;f++)i[f]=l[f](c);return i}}function v_(n,e){const i={...n,...e},o={};for(const l in i)n[l]!==void 0&&e[l]!==void 0&&(o[l]=Dh(n[l])(n[l],e[l]));return l=>{for(const c in o)i[c]=o[c](l);return i}}function b_(n,e){const i=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const c=e.types[l],f=n.indexes[c][o[c]],h=n.values[f]??0;i[l]=h,o[c]++}return i}const T_=(n,e)=>{const i=Ka.createTransformer(e),o=ls(n),l=ls(e);return o.indexes.var.length===l.indexes.var.length&&o.indexes.color.length===l.indexes.color.length&&o.indexes.number.length>=l.indexes.number.length?Pd.has(n)&&!l.values.length||Pd.has(e)&&!o.values.length?g_(n,e):vs(h1(b_(o,l),l.values),i):cu(n,e)};function p1(n,e,i){return typeof n=="number"&&typeof e=="number"&&typeof i=="number"?Vt(n,e,i):Dh(n)(n,e)}const S_=n=>{const e=({timestamp:i})=>n(i);return{start:(i=!0)=>Lt.update(e,i),stop:()=>Xa(e),now:()=>ge.isProcessing?ge.timestamp:Ne.now()}},m1=(n,e,i=10)=>{let o="";const l=Math.max(Math.round(e/i),2);for(let c=0;c<l;c++)o+=Math.round(n(c/(l-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},fu=2e4;function Mh(n){let e=0;const i=50;let o=n.next(e);for(;!o.done&&e<fu;)e+=i,o=n.next(e);return e>=fu?1/0:e}function x_(n,e=100,i){const o=i({...n,keyframes:[0,e]}),l=Math.min(Mh(o),fu);return{type:"keyframes",ease:c=>o.next(l*c).value/e,duration:nn(l)}}const w_=5;function g1(n,e,i){const o=Math.max(e-w_,0);return $b(i-n(o),e-o)}const qt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ld=.001;function E_({duration:n=qt.duration,bounce:e=qt.bounce,velocity:i=qt.velocity,mass:o=qt.mass}){let l,c,f=1-e;f=ra(qt.minDamping,qt.maxDamping,f),n=ra(qt.minDuration,qt.maxDuration,nn(n)),f<1?(l=m=>{const g=m*f,y=g*n,T=g-i,w=Nd(m,f),_=Math.exp(-y);return ld-T/w*_},c=m=>{const y=m*f*n,T=y*i+i,w=Math.pow(f,2)*Math.pow(m,2)*n,_=Math.exp(-y),A=Nd(Math.pow(m,2),f);return(-l(m)+ld>0?-1:1)*((T-w)*_)/A}):(l=m=>{const g=Math.exp(-m*n),y=(m-i)*n+1;return-ld+g*y},c=m=>{const g=Math.exp(-m*n),y=(i-m)*(n*n);return g*y});const h=5/n,p=A_(l,c,h);if(n=On(n),isNaN(p))return{stiffness:qt.stiffness,damping:qt.damping,duration:n};{const m=Math.pow(p,2)*o;return{stiffness:m,damping:f*2*Math.sqrt(o*m),duration:n}}}const __=12;function A_(n,e,i){let o=i;for(let l=1;l<__;l++)o=o-n(o)/e(o);return o}function Nd(n,e){return n*Math.sqrt(1-e*e)}const O_=["duration","bounce"],R_=["stiffness","damping","mass"];function Ty(n,e){return e.some(i=>n[i]!==void 0)}function C_(n){let e={velocity:qt.velocity,stiffness:qt.stiffness,damping:qt.damping,mass:qt.mass,isResolvedFromDuration:!1,...n};if(!Ty(n,R_)&&Ty(n,O_))if(n.visualDuration){const i=n.visualDuration,o=2*Math.PI/(i*1.2),l=o*o,c=2*ra(.05,1,1-(n.bounce||0))*Math.sqrt(l);e={...e,mass:qt.mass,stiffness:l,damping:c}}else{const i=E_(n);e={...e,...i,mass:qt.mass},e.isResolvedFromDuration=!0}return e}function du(n=qt.visualDuration,e=qt.bounce){const i=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:o,restDelta:l}=i;const c=i.keyframes[0],f=i.keyframes[i.keyframes.length-1],h={done:!1,value:c},{stiffness:p,damping:m,mass:g,duration:y,velocity:T,isResolvedFromDuration:w}=C_({...i,velocity:-nn(i.velocity||0)}),_=T||0,A=m/(2*Math.sqrt(p*g)),k=f-c,D=nn(Math.sqrt(p/g)),L=Math.abs(k)<5;o||(o=L?qt.restSpeed.granular:qt.restSpeed.default),l||(l=L?qt.restDelta.granular:qt.restDelta.default);let U;if(A<1){const G=Nd(D,A);U=J=>{const it=Math.exp(-A*D*J);return f-it*((_+A*D*k)/G*Math.sin(G*J)+k*Math.cos(G*J))}}else if(A===1)U=G=>f-Math.exp(-D*G)*(k+(_+D*k)*G);else{const G=D*Math.sqrt(A*A-1);U=J=>{const it=Math.exp(-A*D*J),Q=Math.min(G*J,300);return f-it*((_+A*D*k)*Math.sinh(Q)+G*k*Math.cosh(Q))/G}}const K={calculatedDuration:w&&y||null,next:G=>{const J=U(G);if(w)h.done=G>=y;else{let it=G===0?_:0;A<1&&(it=G===0?On(_):g1(U,G,J));const Q=Math.abs(it)<=o,rt=Math.abs(f-J)<=l;h.done=Q&&rt}return h.value=h.done?f:J,h},toString:()=>{const G=Math.min(Mh(K),fu),J=m1(it=>K.next(G*it).value,G,30);return G+"ms "+J},toTransition:()=>{}};return K}du.applyToOptions=n=>{const e=x_(n,100,du);return n.ease=e.ease,n.duration=On(e.duration),n.type="keyframes",n};function Id({keyframes:n,velocity:e=0,power:i=.8,timeConstant:o=325,bounceDamping:l=10,bounceStiffness:c=500,modifyTarget:f,min:h,max:p,restDelta:m=.5,restSpeed:g}){const y=n[0],T={done:!1,value:y},w=Q=>h!==void 0&&Q<h||p!==void 0&&Q>p,_=Q=>h===void 0?p:p===void 0||Math.abs(h-Q)<Math.abs(p-Q)?h:p;let A=i*e;const k=y+A,D=f===void 0?k:f(k);D!==k&&(A=D-y);const L=Q=>-A*Math.exp(-Q/o),U=Q=>D+L(Q),K=Q=>{const rt=L(Q),St=U(Q);T.done=Math.abs(rt)<=m,T.value=T.done?D:St};let G,J;const it=Q=>{w(T.value)&&(G=Q,J=du({keyframes:[T.value,_(T.value)],velocity:g1(U,Q,T.value),damping:l,stiffness:c,restDelta:m,restSpeed:g}))};return it(0),{calculatedDuration:null,next:Q=>{let rt=!1;return!J&&G===void 0&&(rt=!0,K(Q),it(Q)),G!==void 0&&Q>=G?J.next(Q-G):(!rt&&K(Q),T)}}}function D_(n,e,i){const o=[],l=i||oa.mix||p1,c=n.length-1;for(let f=0;f<c;f++){let h=l(n[f],n[f+1]);if(e){const p=Array.isArray(e)?e[f]||an:e;h=vs(p,h)}o.push(h)}return o}function M_(n,e,{clamp:i=!0,ease:o,mixer:l}={}){const c=n.length;if(Sh(c===e.length),c===1)return()=>e[0];if(c===2&&e[0]===e[1])return()=>e[1];const f=n[0]===n[1];n[0]>n[c-1]&&(n=[...n].reverse(),e=[...e].reverse());const h=D_(e,o,l),p=h.length,m=g=>{if(f&&g<n[0])return e[0];let y=0;if(p>1)for(;y<n.length-2&&!(g<n[y+1]);y++);const T=os(n[y],n[y+1],g);return h[y](T)};return i?g=>m(ra(n[0],n[c-1],g)):m}function k_(n,e){const i=n[n.length-1];for(let o=1;o<=e;o++){const l=os(0,e,o);n.push(Vt(i,1,l))}}function P_(n){const e=[0];return k_(e,n.length-1),e}function N_(n,e){return n.map(i=>i*e)}function I_(n,e){return n.map(()=>e||i1).splice(0,n.length-1)}function Wo({duration:n=300,keyframes:e,times:i,ease:o="easeInOut"}){const l=F2(o)?o.map(my):my(o),c={done:!1,value:e[0]},f=N_(i&&i.length===e.length?i:P_(e),n),h=M_(f,e,{ease:Array.isArray(l)?l:I_(e,l)});return{calculatedDuration:n,next:p=>(c.value=h(p),c.done=p>=n,c)}}const L_=n=>n!==null;function kh(n,{repeat:e,repeatType:i="loop"},o,l=1){const c=n.filter(L_),h=l<0||e&&i!=="loop"&&e%2===1?0:c.length-1;return!h||o===void 0?c[h]:o}const U_={decay:Id,inertia:Id,tween:Wo,keyframes:Wo,spring:du};function y1(n){typeof n.type=="string"&&(n.type=U_[n.type])}class Ph{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,i){return this.finished.then(e,i)}}const z_=n=>n/100;class Nh extends Ph{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:i}=this.options;i&&i.updatedAt!==Ne.now()&&this.tick(Ne.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;y1(e);const{type:i=Wo,repeat:o=0,repeatDelay:l=0,repeatType:c,velocity:f=0}=e;let{keyframes:h}=e;const p=i||Wo;p!==Wo&&typeof h[0]!="number"&&(this.mixKeyframes=vs(z_,p1(h[0],h[1])),h=[0,100]);const m=p({...e,keyframes:h});c==="mirror"&&(this.mirroredGenerator=p({...e,keyframes:[...h].reverse(),velocity:-f})),m.calculatedDuration===null&&(m.calculatedDuration=Mh(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+l,this.totalDuration=this.resolvedDuration*(o+1)-l,this.generator=m}updateTime(e){const i=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(e,i=!1){const{generator:o,totalDuration:l,mixKeyframes:c,mirroredGenerator:f,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return o.next(0);const{delay:m=0,keyframes:g,repeat:y,repeatType:T,repeatDelay:w,type:_,onUpdate:A,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-l/this.speed,this.startTime)),i?this.currentTime=e:this.updateTime(e);const D=this.currentTime-m*(this.playbackSpeed>=0?1:-1),L=this.playbackSpeed>=0?D<0:D>l;this.currentTime=Math.max(D,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let U=this.currentTime,K=o;if(y){const Q=Math.min(this.currentTime,l)/h;let rt=Math.floor(Q),St=Q%1;!St&&Q>=1&&(St=1),St===1&&rt--,rt=Math.min(rt,y+1),!!(rt%2)&&(T==="reverse"?(St=1-St,w&&(St-=w/h)):T==="mirror"&&(K=f)),U=ra(0,1,St)*h}const G=L?{done:!1,value:g[0]}:K.next(U);c&&(G.value=c(G.value));let{done:J}=G;!L&&p!==null&&(J=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const it=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&J);return it&&_!==Id&&(G.value=kh(g,this.options,k,this.speed)),A&&A(G.value),it&&this.finish(),G}then(e,i){return this.finished.then(e,i)}get duration(){return nn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+nn(e)}get time(){return nn(this.currentTime)}set time(e){e=On(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Ne.now());const i=this.playbackSpeed!==e;this.playbackSpeed=e,i&&(this.time=nn(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=S_,startTime:i}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=i??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ne.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function V_(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const xi=n=>n*180/Math.PI,Ld=n=>{const e=xi(Math.atan2(n[1],n[0]));return Ud(e)},B_={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Ld,rotateZ:Ld,skewX:n=>xi(Math.atan(n[1])),skewY:n=>xi(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Ud=n=>(n=n%360,n<0&&(n+=360),n),Sy=Ld,xy=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),wy=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),H_={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:xy,scaleY:wy,scale:n=>(xy(n)+wy(n))/2,rotateX:n=>Ud(xi(Math.atan2(n[6],n[5]))),rotateY:n=>Ud(xi(Math.atan2(-n[2],n[0]))),rotateZ:Sy,rotate:Sy,skewX:n=>xi(Math.atan(n[4])),skewY:n=>xi(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function zd(n){return n.includes("scale")?1:0}function Vd(n,e){if(!n||n==="none")return zd(e);const i=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,l;if(i)o=H_,l=i;else{const h=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=B_,l=h}if(!l)return zd(e);const c=o[e],f=l[1].split(",").map(q_);return typeof c=="function"?c(f):f[c]}const j_=(n,e)=>{const{transform:i="none"}=getComputedStyle(n);return Vd(i,e)};function q_(n){return parseFloat(n.trim())}const Vr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Br=new Set(Vr),Ey=n=>n===zr||n===ft,G_=new Set(["x","y","z"]),Y_=Vr.filter(n=>!G_.has(n));function F_(n){const e=[];return Y_.forEach(i=>{const o=n.getValue(i);o!==void 0&&(e.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),e}const Ei={width:({x:n},{paddingLeft:e="0",paddingRight:i="0"})=>n.max-n.min-parseFloat(e)-parseFloat(i),height:({y:n},{paddingTop:e="0",paddingBottom:i="0"})=>n.max-n.min-parseFloat(e)-parseFloat(i),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Vd(e,"x"),y:(n,{transform:e})=>Vd(e,"y")};Ei.translateX=Ei.x;Ei.translateY=Ei.y;const _i=new Set;let Bd=!1,Hd=!1,jd=!1;function v1(){if(Hd){const n=Array.from(_i).filter(o=>o.needsMeasurement),e=new Set(n.map(o=>o.element)),i=new Map;e.forEach(o=>{const l=F_(o);l.length&&(i.set(o,l),o.render())}),n.forEach(o=>o.measureInitialState()),e.forEach(o=>{o.render();const l=i.get(o);l&&l.forEach(([c,f])=>{o.getValue(c)?.set(f)})}),n.forEach(o=>o.measureEndState()),n.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Hd=!1,Bd=!1,_i.forEach(n=>n.complete(jd)),_i.clear()}function b1(){_i.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Hd=!0)})}function X_(){jd=!0,b1(),v1(),jd=!1}class Ih{constructor(e,i,o,l,c,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=i,this.name=o,this.motionValue=l,this.element=c,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(_i.add(this),Bd||(Bd=!0,Lt.read(b1),Lt.resolveKeyframes(v1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:i,element:o,motionValue:l}=this;if(e[0]===null){const c=l?.get(),f=e[e.length-1];if(c!==void 0)e[0]=c;else if(o&&i){const h=o.readValue(i,f);h!=null&&(e[0]=h)}e[0]===void 0&&(e[0]=f),l&&c===void 0&&l.set(e[0])}V_(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),_i.delete(this)}cancel(){this.state==="scheduled"&&(_i.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const K_=n=>n.startsWith("--");function $_(n,e,i){K_(e)?n.style.setProperty(e,i):n.style[e]=i}const Z_=xh(()=>window.ScrollTimeline!==void 0),Q_={};function W_(n,e){const i=xh(n);return()=>Q_[e]??i()}const T1=W_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Xo=([n,e,i,o])=>`cubic-bezier(${n}, ${e}, ${i}, ${o})`,_y={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xo([0,.65,.55,1]),circOut:Xo([.55,0,1,.45]),backIn:Xo([.31,.01,.66,-.59]),backOut:Xo([.33,1.53,.69,.99])};function S1(n,e){if(n)return typeof n=="function"?T1()?m1(n,e):"ease-out":r1(n)?Xo(n):Array.isArray(n)?n.map(i=>S1(i,e)||_y.easeOut):_y[n]}function J_(n,e,i,{delay:o=0,duration:l=300,repeat:c=0,repeatType:f="loop",ease:h="easeOut",times:p}={},m=void 0){const g={[e]:i};p&&(g.offset=p);const y=S1(h,l);Array.isArray(y)&&(g.easing=y);const T={delay:o,duration:l,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:c+1,direction:f==="reverse"?"alternate":"normal"};return m&&(T.pseudoElement=m),n.animate(g,T)}function x1(n){return typeof n=="function"&&"applyToOptions"in n}function tA({type:n,...e}){return x1(n)&&T1()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class eA extends Ph{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:i,name:o,keyframes:l,pseudoElement:c,allowFlatten:f=!1,finalKeyframe:h,onComplete:p}=e;this.isPseudoElement=!!c,this.allowFlatten=f,this.options=e,Sh(typeof e.type!="string");const m=tA(e);this.animation=J_(i,o,l,m,c),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const g=kh(l,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(g):$_(i,o,g),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return nn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+nn(e)}get time(){return nn(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=On(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:i}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&Z_()?(this.animation.timeline=e,an):i(this)}}const w1={anticipate:e1,backInOut:t1,circInOut:a1};function nA(n){return n in w1}function aA(n){typeof n.ease=="string"&&nA(n.ease)&&(n.ease=w1[n.ease])}const Ay=10;class iA extends eA{constructor(e){aA(e),y1(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:i,onUpdate:o,onComplete:l,element:c,...f}=this.options;if(!i)return;if(e!==void 0){i.set(e);return}const h=new Nh({...f,autoplay:!1}),p=On(this.finishedTime??this.time);i.setWithVelocity(h.sample(p-Ay).value,h.sample(p).value,Ay),h.stop()}}const Oy=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ka.test(n)||n==="0")&&!n.startsWith("url("));function rA(n){const e=n[0];if(n.length===1)return!0;for(let i=0;i<n.length;i++)if(n[i]!==e)return!0}function oA(n,e,i,o){const l=n[0];if(l===null)return!1;if(e==="display"||e==="visibility")return!0;const c=n[n.length-1],f=Oy(l,e),h=Oy(c,e);return!f||!h?!1:rA(n)||(i==="spring"||x1(i))&&o}function qd(n){n.duration=0,n.type="keyframes"}const sA=new Set(["opacity","clipPath","filter","transform"]),lA=xh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function uA(n){const{motionValue:e,name:i,repeatDelay:o,repeatType:l,damping:c,type:f}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=e.owner.getProps();return lA()&&i&&sA.has(i)&&(i!=="transform"||!m)&&!p&&!o&&l!=="mirror"&&c!==0&&f!=="inertia"}const cA=40;class fA extends Ph{constructor({autoplay:e=!0,delay:i=0,type:o="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:f="loop",keyframes:h,name:p,motionValue:m,element:g,...y}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ne.now();const T={autoplay:e,delay:i,type:o,repeat:l,repeatDelay:c,repeatType:f,name:p,motionValue:m,element:g,...y},w=g?.KeyframeResolver||Ih;this.keyframeResolver=new w(h,(_,A,k)=>this.onKeyframesResolved(_,A,T,!k),p,m,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,i,o,l){this.keyframeResolver=void 0;const{name:c,type:f,velocity:h,delay:p,isHandoff:m,onUpdate:g}=o;this.resolvedAt=Ne.now(),oA(e,c,f,h)||((oa.instantAnimations||!p)&&g?.(kh(e,o,i)),e[0]=e[e.length-1],qd(o),o.repeat=0);const T={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>cA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...o,keyframes:e},w=!m&&uA(T)?new iA({...T,element:T.motionValue.owner.current}):new Nh(T);w.finished.then(()=>this.notifyFinished()).catch(an),this.pendingTimeline&&(this.stopTimeline=w.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=w}get finished(){return this._animation?this.animation.finished:this._finished}then(e,i){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),X_()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const dA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function hA(n){const e=dA.exec(n);if(!e)return[,];const[,i,o,l]=e;return[`--${i??o}`,l]}function E1(n,e,i=1){const[o,l]=hA(n);if(!o)return;const c=window.getComputedStyle(e).getPropertyValue(o);if(c){const f=c.trim();return Fb(f)?parseFloat(f):f}return Oh(l)?E1(l,e,i+1):l}function Lh(n,e){return n?.[e]??n?.default??n}const _1=new Set(["width","height","top","left","right","bottom",...Vr]),pA={test:n=>n==="auto",parse:n=>n},A1=n=>e=>e.test(n),O1=[zr,ft,Rn,Va,r_,i_,pA],Ry=n=>O1.find(A1(n));function mA(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Kb(n):!0}const gA=new Set(["brightness","contrast","saturate","opacity"]);function yA(n){const[e,i]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[o]=i.match(Rh)||[];if(!o)return n;const l=i.replace(o,"");let c=gA.has(e)?1:0;return o!==i&&(c*=100),e+"("+c+l+")"}const vA=/\b([a-z-]*)\(.*?\)/gu,Gd={...Ka,getAnimatableNone:n=>{const e=n.match(vA);return e?e.map(yA).join(" "):n}},Cy={...zr,transform:Math.round},bA={rotate:Va,rotateX:Va,rotateY:Va,rotateZ:Va,scale:Yl,scaleX:Yl,scaleY:Yl,scaleZ:Yl,skew:Va,skewX:Va,skewY:Va,distance:ft,translateX:ft,translateY:ft,translateZ:ft,x:ft,y:ft,z:ft,perspective:ft,transformPerspective:ft,opacity:ss,originX:gy,originY:gy,originZ:ft},Uh={borderWidth:ft,borderTopWidth:ft,borderRightWidth:ft,borderBottomWidth:ft,borderLeftWidth:ft,borderRadius:ft,radius:ft,borderTopLeftRadius:ft,borderTopRightRadius:ft,borderBottomRightRadius:ft,borderBottomLeftRadius:ft,width:ft,maxWidth:ft,height:ft,maxHeight:ft,top:ft,right:ft,bottom:ft,left:ft,padding:ft,paddingTop:ft,paddingRight:ft,paddingBottom:ft,paddingLeft:ft,margin:ft,marginTop:ft,marginRight:ft,marginBottom:ft,marginLeft:ft,backgroundPositionX:ft,backgroundPositionY:ft,...bA,zIndex:Cy,fillOpacity:ss,strokeOpacity:ss,numOctaves:Cy},TA={...Uh,color:ee,backgroundColor:ee,outlineColor:ee,fill:ee,stroke:ee,borderColor:ee,borderTopColor:ee,borderRightColor:ee,borderBottomColor:ee,borderLeftColor:ee,filter:Gd,WebkitFilter:Gd},R1=n=>TA[n];function C1(n,e){let i=R1(n);return i!==Gd&&(i=Ka),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const SA=new Set(["auto","none","0"]);function xA(n,e,i){let o=0,l;for(;o<n.length&&!l;){const c=n[o];typeof c=="string"&&!SA.has(c)&&ls(c).values.length&&(l=n[o]),o++}if(l&&i)for(const c of e)n[c]=C1(i,l)}class wA extends Ih{constructor(e,i,o,l,c){super(e,i,o,l,c,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let p=0;p<e.length;p++){let m=e[p];if(typeof m=="string"&&(m=m.trim(),Oh(m))){const g=E1(m,i.current);g!==void 0&&(e[p]=g),p===e.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!_1.has(o)||e.length!==2)return;const[l,c]=e,f=Ry(l),h=Ry(c);if(f!==h)if(Ey(f)&&Ey(h))for(let p=0;p<e.length;p++){const m=e[p];typeof m=="string"&&(e[p]=parseFloat(m))}else Ei[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:i}=this,o=[];for(let l=0;l<e.length;l++)(e[l]===null||mA(e[l]))&&o.push(l);o.length&&xA(e,o,i)}measureInitialState(){const{element:e,unresolvedKeyframes:i,name:o}=this;if(!e||!e.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ei[o](e.measureViewportBox(),window.getComputedStyle(e.current)),i[0]=this.measuredOrigin;const l=i[i.length-1];l!==void 0&&e.getValue(o,l).jump(l,!1)}measureEndState(){const{element:e,name:i,unresolvedKeyframes:o}=this;if(!e||!e.current)return;const l=e.getValue(i);l&&l.jump(this.measuredOrigin,!1);const c=o.length-1,f=o[c];o[c]=Ei[i](e.measureViewportBox(),window.getComputedStyle(e.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([h,p])=>{e.getValue(h).set(p)}),this.resolveNoneKeyframes()}}function EA(n,e,i){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let o=document;const l=i?.[n]??o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}const D1=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function _A(n){return Xb(n)&&"offsetHeight"in n}const Dy=30,AA=n=>!isNaN(parseFloat(n));class OA{constructor(e,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const l=Ne.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=i.owner}setCurrent(e){this.current=e,this.updatedAt=Ne.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=AA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new wh);const o=this.events[e].add(i);return e==="change"?()=>{o(),Lt.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-o}jump(e,i=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ne.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Dy)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Dy);return $b(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Nr(n,e){return new OA(n,e)}const{schedule:zh}=o1(queueMicrotask,!1),fn={x:!1,y:!1};function M1(){return fn.x||fn.y}function RA(n){return n==="x"||n==="y"?fn[n]?null:(fn[n]=!0,()=>{fn[n]=!1}):fn.x||fn.y?null:(fn.x=fn.y=!0,()=>{fn.x=fn.y=!1})}function k1(n,e){const i=EA(n),o=new AbortController,l={passive:!0,...e,signal:o.signal};return[i,l,()=>o.abort()]}function My(n){return!(n.pointerType==="touch"||M1())}function CA(n,e,i={}){const[o,l,c]=k1(n,i),f=h=>{if(!My(h))return;const{target:p}=h,m=e(p,h);if(typeof m!="function"||!p)return;const g=y=>{My(y)&&(m(y),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,l)};return o.forEach(h=>{h.addEventListener("pointerenter",f,l)}),c}const P1=(n,e)=>e?n===e?!0:P1(n,e.parentElement):!1,Vh=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,DA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function MA(n){return DA.has(n.tagName)||n.tabIndex!==-1}const tu=new WeakSet;function ky(n){return e=>{e.key==="Enter"&&n(e)}}function ud(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const kA=(n,e)=>{const i=n.currentTarget;if(!i)return;const o=ky(()=>{if(tu.has(i))return;ud(i,"down");const l=ky(()=>{ud(i,"up")}),c=()=>ud(i,"cancel");i.addEventListener("keyup",l,e),i.addEventListener("blur",c,e)});i.addEventListener("keydown",o,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",o),e)};function Py(n){return Vh(n)&&!M1()}function PA(n,e,i={}){const[o,l,c]=k1(n,i),f=h=>{const p=h.currentTarget;if(!Py(h))return;tu.add(p);const m=e(p,h),g=(w,_)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",T),tu.has(p)&&tu.delete(p),Py(w)&&typeof m=="function"&&m(w,{success:_})},y=w=>{g(w,p===window||p===document||i.useGlobalTarget||P1(p,w.target))},T=w=>{g(w,!1)};window.addEventListener("pointerup",y,l),window.addEventListener("pointercancel",T,l)};return o.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",f,l),_A(h)&&(h.addEventListener("focus",m=>kA(m,l)),!MA(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),c}function N1(n){return Xb(n)&&"ownerSVGElement"in n}function NA(n){return N1(n)&&n.tagName==="svg"}const Te=n=>!!(n&&n.getVelocity),IA=[...O1,ee,Ka],LA=n=>IA.find(A1(n)),I1=R.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function UA(n=!0){const e=R.useContext(vh);if(e===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:l}=e,c=R.useId();R.useEffect(()=>{if(n)return l(c)},[n]);const f=R.useCallback(()=>n&&o&&o(c),[c,o,n]);return!i&&o?[!1,f]:[!0]}const L1=R.createContext({strict:!1}),Ny={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ir={};for(const n in Ny)Ir[n]={isEnabled:e=>Ny[n].some(i=>!!e[i])};function zA(n){for(const e in n)Ir[e]={...Ir[e],...n[e]}}const VA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function hu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||VA.has(n)}let U1=n=>!hu(n);function BA(n){typeof n=="function"&&(U1=e=>e.startsWith("on")?!hu(e):n(e))}try{BA(require("@emotion/is-prop-valid").default)}catch{}function HA(n,e,i){const o={};for(const l in n)l==="values"&&typeof n.values=="object"||(U1(l)||i===!0&&hu(l)||!e&&!hu(l)||n.draggable&&l.startsWith("onDrag"))&&(o[l]=n[l]);return o}const Ru=R.createContext({});function Cu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function us(n){return typeof n=="string"||Array.isArray(n)}const Bh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hh=["initial",...Bh];function Du(n){return Cu(n.animate)||Hh.some(e=>us(n[e]))}function z1(n){return!!(Du(n)||n.variants)}function jA(n,e){if(Du(n)){const{initial:i,animate:o}=n;return{initial:i===!1||us(i)?i:void 0,animate:us(o)?o:void 0}}return n.inherit!==!1?e:{}}function qA(n){const{initial:e,animate:i}=jA(n,R.useContext(Ru));return R.useMemo(()=>({initial:e,animate:i}),[Iy(e),Iy(i)])}function Iy(n){return Array.isArray(n)?n.join(" "):n}const cs={};function GA(n){for(const e in n)cs[e]=n[e],Ah(e)&&(cs[e].isCSSVariable=!0)}function V1(n,{layout:e,layoutId:i}){return Br.has(n)||n.startsWith("origin")||(e||i!==void 0)&&(!!cs[n]||n==="opacity")}const YA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},FA=Vr.length;function XA(n,e,i){let o="",l=!0;for(let c=0;c<FA;c++){const f=Vr[c],h=n[f];if(h===void 0)continue;let p=!0;if(typeof h=="number"?p=h===(f.startsWith("scale")?1:0):p=parseFloat(h)===0,!p||i){const m=D1(h,Uh[f]);if(!p){l=!1;const g=YA[f]||f;o+=`${g}(${m}) `}i&&(e[f]=m)}}return o=o.trim(),i?o=i(e,l?"":o):l&&(o="none"),o}function jh(n,e,i){const{style:o,vars:l,transformOrigin:c}=n;let f=!1,h=!1;for(const p in e){const m=e[p];if(Br.has(p)){f=!0;continue}else if(Ah(p)){l[p]=m;continue}else{const g=D1(m,Uh[p]);p.startsWith("origin")?(h=!0,c[p]=g):o[p]=g}}if(e.transform||(f||i?o.transform=XA(e,n.transform,i):o.transform&&(o.transform="none")),h){const{originX:p="50%",originY:m="50%",originZ:g=0}=c;o.transformOrigin=`${p} ${m} ${g}`}}const qh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function B1(n,e,i){for(const o in e)!Te(e[o])&&!V1(o,i)&&(n[o]=e[o])}function KA({transformTemplate:n},e){return R.useMemo(()=>{const i=qh();return jh(i,e,n),Object.assign({},i.vars,i.style)},[e])}function $A(n,e){const i=n.style||{},o={};return B1(o,i,n),Object.assign(o,KA(n,e)),o}function ZA(n,e){const i={},o=$A(n,e);return n.drag&&n.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(i.tabIndex=0),i.style=o,i}const QA={offset:"stroke-dashoffset",array:"stroke-dasharray"},WA={offset:"strokeDashoffset",array:"strokeDasharray"};function JA(n,e,i=1,o=0,l=!0){n.pathLength=1;const c=l?QA:WA;n[c.offset]=ft.transform(-o);const f=ft.transform(e),h=ft.transform(i);n[c.array]=`${f} ${h}`}function H1(n,{attrX:e,attrY:i,attrScale:o,pathLength:l,pathSpacing:c=1,pathOffset:f=0,...h},p,m,g){if(jh(n,h,m),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:y,style:T}=n;y.transform&&(T.transform=y.transform,delete y.transform),(T.transform||y.transformOrigin)&&(T.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),T.transform&&(T.transformBox=g?.transformBox??"fill-box",delete y.transformBox),e!==void 0&&(y.x=e),i!==void 0&&(y.y=i),o!==void 0&&(y.scale=o),l!==void 0&&JA(y,l,c,f,!1)}const j1=()=>({...qh(),attrs:{}}),q1=n=>typeof n=="string"&&n.toLowerCase()==="svg";function t5(n,e,i,o){const l=R.useMemo(()=>{const c=j1();return H1(c,e,q1(o),n.transformTemplate,n.style),{...c.attrs,style:{...c.style}}},[e]);if(n.style){const c={};B1(c,n.style,n),l.style={...c,...l.style}}return l}const e5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Gh(n){return typeof n!="string"||n.includes("-")?!1:!!(e5.indexOf(n)>-1||/[A-Z]/u.test(n))}function n5(n,e,i,{latestValues:o},l,c=!1){const h=(Gh(n)?t5:ZA)(e,o,l,n),p=HA(e,typeof n=="string",c),m=n!==R.Fragment?{...p,...h,ref:i}:{},{children:g}=e,y=R.useMemo(()=>Te(g)?g.get():g,[g]);return R.createElement(n,{...m,children:y})}function Ly(n){const e=[{},{}];return n?.values.forEach((i,o)=>{e[0][o]=i.get(),e[1][o]=i.getVelocity()}),e}function Yh(n,e,i,o){if(typeof e=="function"){const[l,c]=Ly(o);e=e(i!==void 0?i:n.custom,l,c)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[l,c]=Ly(o);e=e(i!==void 0?i:n.custom,l,c)}return e}function eu(n){return Te(n)?n.get():n}function a5({scrapeMotionValuesFromProps:n,createRenderState:e},i,o,l){return{latestValues:i5(i,o,l,n),renderState:e()}}function i5(n,e,i,o){const l={},c=o(n,{});for(const T in c)l[T]=eu(c[T]);let{initial:f,animate:h}=n;const p=Du(n),m=z1(n);e&&m&&!p&&n.inherit!==!1&&(f===void 0&&(f=e.initial),h===void 0&&(h=e.animate));let g=i?i.initial===!1:!1;g=g||f===!1;const y=g?h:f;if(y&&typeof y!="boolean"&&!Cu(y)){const T=Array.isArray(y)?y:[y];for(let w=0;w<T.length;w++){const _=Yh(n,T[w]);if(_){const{transitionEnd:A,transition:k,...D}=_;for(const L in D){let U=D[L];if(Array.isArray(U)){const K=g?U.length-1:0;U=U[K]}U!==null&&(l[L]=U)}for(const L in A)l[L]=A[L]}}}return l}const G1=n=>(e,i)=>{const o=R.useContext(Ru),l=R.useContext(vh),c=()=>a5(n,e,o,l);return i?c():z2(c)};function Fh(n,e,i){const{style:o}=n,l={};for(const c in o)(Te(o[c])||e.style&&Te(e.style[c])||V1(c,n)||i?.getValue(c)?.liveStyle!==void 0)&&(l[c]=o[c]);return l}const r5=G1({scrapeMotionValuesFromProps:Fh,createRenderState:qh});function Y1(n,e,i){const o=Fh(n,e,i);for(const l in n)if(Te(n[l])||Te(e[l])){const c=Vr.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;o[c]=n[l]}return o}const o5=G1({scrapeMotionValuesFromProps:Y1,createRenderState:j1}),s5=Symbol.for("motionComponentSymbol");function Er(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function l5(n,e,i){return R.useCallback(o=>{o&&n.onMount&&n.onMount(o),e&&(o?e.mount(o):e.unmount()),i&&(typeof i=="function"?i(o):Er(i)&&(i.current=o))},[e])}const Xh=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),u5="framerAppearId",F1="data-"+Xh(u5),X1=R.createContext({});function c5(n,e,i,o,l){const{visualElement:c}=R.useContext(Ru),f=R.useContext(L1),h=R.useContext(vh),p=R.useContext(I1).reducedMotion,m=R.useRef(null);o=o||f.renderer,!m.current&&o&&(m.current=o(n,{visualState:e,parent:c,props:i,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const g=m.current,y=R.useContext(X1);g&&!g.projection&&l&&(g.type==="html"||g.type==="svg")&&f5(m.current,i,l,y);const T=R.useRef(!1);R.useInsertionEffect(()=>{g&&T.current&&g.update(i,h)});const w=i[F1],_=R.useRef(!!w&&!window.MotionHandoffIsComplete?.(w)&&window.MotionHasOptimisedAnimation?.(w));return V2(()=>{g&&(T.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),_.current&&g.animationState&&g.animationState.animateChanges())}),R.useEffect(()=>{g&&(!_.current&&g.animationState&&g.animationState.animateChanges(),_.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(w)}),_.current=!1),g.enteringChildren=void 0)}),g}function f5(n,e,i,o){const{layoutId:l,layout:c,drag:f,dragConstraints:h,layoutScroll:p,layoutRoot:m,layoutCrossfade:g}=e;n.projection=new i(n.latestValues,e["data-framer-portal-id"]?void 0:K1(n.parent)),n.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!f||h&&Er(h),visualElement:n,animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,crossfade:g,layoutScroll:p,layoutRoot:m})}function K1(n){if(n)return n.options.allowProjection!==!1?n.projection:K1(n.parent)}function cd(n,{forwardMotionProps:e=!1}={},i,o){i&&zA(i);const l=Gh(n)?o5:r5;function c(h,p){let m;const g={...R.useContext(I1),...h,layoutId:d5(h)},{isStatic:y}=g,T=qA(h),w=l(h,y);if(!y&&yh){h5();const _=p5(g);m=_.MeasureLayout,T.visualElement=c5(n,w,g,o,_.ProjectionNode)}return F.jsxs(Ru.Provider,{value:T,children:[m&&T.visualElement?F.jsx(m,{visualElement:T.visualElement,...g}):null,n5(n,h,l5(w,T.visualElement,p),w,y,e)]})}c.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const f=R.forwardRef(c);return f[s5]=n,f}function d5({layoutId:n}){const e=R.useContext(Yb).id;return e&&n!==void 0?e+"-"+n:n}function h5(n,e){R.useContext(L1).strict}function p5(n){const{drag:e,layout:i}=Ir;if(!e&&!i)return{};const o={...e,...i};return{MeasureLayout:e?.isEnabled(n)||i?.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function m5(n,e){if(typeof Proxy>"u")return cd;const i=new Map,o=(c,f)=>cd(c,f,n,e),l=(c,f)=>o(c,f);return new Proxy(l,{get:(c,f)=>f==="create"?o:(i.has(f)||i.set(f,cd(f,void 0,n,e)),i.get(f))})}function $1({top:n,left:e,right:i,bottom:o}){return{x:{min:e,max:i},y:{min:n,max:o}}}function g5({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function y5(n,e){if(!e)return n;const i=e({x:n.left,y:n.top}),o=e({x:n.right,y:n.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function fd(n){return n===void 0||n===1}function Yd({scale:n,scaleX:e,scaleY:i}){return!fd(n)||!fd(e)||!fd(i)}function bi(n){return Yd(n)||Z1(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Z1(n){return Uy(n.x)||Uy(n.y)}function Uy(n){return n&&n!=="0%"}function pu(n,e,i){const o=n-i,l=e*o;return i+l}function zy(n,e,i,o,l){return l!==void 0&&(n=pu(n,l,o)),pu(n,i,o)+e}function Fd(n,e=0,i=1,o,l){n.min=zy(n.min,e,i,o,l),n.max=zy(n.max,e,i,o,l)}function Q1(n,{x:e,y:i}){Fd(n.x,e.translate,e.scale,e.originPoint),Fd(n.y,i.translate,i.scale,i.originPoint)}const Vy=.999999999999,By=1.0000000000001;function v5(n,e,i,o=!1){const l=i.length;if(!l)return;e.x=e.y=1;let c,f;for(let h=0;h<l;h++){c=i[h],f=c.projectionDelta;const{visualElement:p}=c.options;p&&p.props.style&&p.props.style.display==="contents"||(o&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Ar(n,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),f&&(e.x*=f.x.scale,e.y*=f.y.scale,Q1(n,f)),o&&bi(c.latestValues)&&Ar(n,c.latestValues))}e.x<By&&e.x>Vy&&(e.x=1),e.y<By&&e.y>Vy&&(e.y=1)}function _r(n,e){n.min=n.min+e,n.max=n.max+e}function Hy(n,e,i,o,l=.5){const c=Vt(n.min,n.max,l);Fd(n,e,i,c,o)}function Ar(n,e){Hy(n.x,e.x,e.scaleX,e.scale,e.originX),Hy(n.y,e.y,e.scaleY,e.scale,e.originY)}function W1(n,e){return $1(y5(n.getBoundingClientRect(),e))}function b5(n,e,i){const o=W1(n,i),{scroll:l}=e;return l&&(_r(o.x,l.offset.x),_r(o.y,l.offset.y)),o}const jy=()=>({translate:0,scale:1,origin:0,originPoint:0}),Or=()=>({x:jy(),y:jy()}),qy=()=>({min:0,max:0}),$t=()=>({x:qy(),y:qy()}),Xd={current:null},J1={current:!1};function T5(){if(J1.current=!0,!!yh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Xd.current=n.matches;n.addEventListener("change",e),e()}else Xd.current=!1}const S5=new WeakMap;function x5(n,e,i){for(const o in e){const l=e[o],c=i[o];if(Te(l))n.addValue(o,l);else if(Te(c))n.addValue(o,Nr(l,{owner:n}));else if(c!==l)if(n.hasValue(o)){const f=n.getValue(o);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=n.getStaticValue(o);n.addValue(o,Nr(f!==void 0?f:l,{owner:n}))}}for(const o in i)e[o]===void 0&&n.removeValue(o);return e}const Gy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class w5{scrapeMotionValuesFromProps(e,i,o){return{}}constructor({parent:e,props:i,presenceContext:o,reducedMotionConfig:l,blockInitialAnimation:c,visualState:f},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ih,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=Ne.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,Lt.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=f;this.latestValues=p,this.baseTarget={...p},this.initialValues=i.initial?{...p}:{},this.renderState=m,this.parent=e,this.props=i,this.presenceContext=o,this.depth=e?e.depth+1:0,this.reducedMotionConfig=l,this.options=h,this.blockInitialAnimation=!!c,this.isControllingVariants=Du(i),this.isVariantNode=z1(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,...y}=this.scrapeMotionValuesFromProps(i,{},this);for(const T in y){const w=y[T];p[T]!==void 0&&Te(w)&&w.set(p[T])}}mount(e){this.current=e,S5.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),J1.current||T5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Xd.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Xa(this.notifyUpdate),Xa(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const i=this.features[e];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,i){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const o=Br.has(e);o&&this.onBindTransform&&this.onBindTransform();const l=i.on("change",f=>{this.latestValues[e]=f,this.props.onUpdate&&Lt.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,i)),this.valueSubscriptions.set(e,()=>{l(),c&&c(),i.owner&&i.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ir){const i=Ir[e];if(!i)continue;const{isEnabled:o,Feature:l}=i;if(!this.features[e]&&l&&o(this.props)&&(this.features[e]=new l(this)),this.features[e]){const c=this.features[e];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$t()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<Gy.length;o++){const l=Gy[o];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const c="on"+l,f=e[c];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=x5(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){const o=this.values.get(e);i!==o&&(o&&this.removeValue(e),this.bindToMotionValue(e,i),this.values.set(e,i),this.latestValues[e]=i.get())}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let o=this.values.get(e);return o===void 0&&i!==void 0&&(o=Nr(i===null?void 0:i,{owner:this}),this.addValue(e,o)),o}readValue(e,i){let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(Fb(o)||Kb(o))?o=parseFloat(o):!LA(o)&&Ka.test(i)&&(o=C1(e,i)),this.setBaseTarget(e,Te(o)?o.get():o)),Te(o)?o.get():o}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const c=Yh(this.props,i,this.presenceContext?.custom);c&&(o=c[e])}if(i&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!Te(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new wh),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}scheduleRenderMicrotask(){zh.render(this.render)}}class tT extends w5{constructor(){super(...arguments),this.KeyframeResolver=wA}sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){return e.style?e.style[i]:void 0}removeValueFromRenderState(e,{vars:i,style:o}){delete i[e],delete o[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Te(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function eT(n,{style:e,vars:i},o,l){const c=n.style;let f;for(f in e)c[f]=e[f];l?.applyProjectionStyles(c,o);for(f in i)c.setProperty(f,i[f])}function E5(n){return window.getComputedStyle(n)}class _5 extends tT{constructor(){super(...arguments),this.type="html",this.renderInstance=eT}readValueFromInstance(e,i){if(Br.has(i))return this.projection?.isProjecting?zd(i):j_(e,i);{const o=E5(e),l=(Ah(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(e,{transformPagePoint:i}){return W1(e,i)}build(e,i,o){jh(e,i,o.transformTemplate)}scrapeMotionValuesFromProps(e,i,o){return Fh(e,i,o)}}const nT=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function A5(n,e,i,o){eT(n,e,void 0,o);for(const l in e.attrs)n.setAttribute(nT.has(l)?l:Xh(l),e.attrs[l])}class O5 extends tT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$t}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if(Br.has(i)){const o=R1(i);return o&&o.default||0}return i=nT.has(i)?i:Xh(i),e.getAttribute(i)}scrapeMotionValuesFromProps(e,i,o){return Y1(e,i,o)}build(e,i,o){H1(e,i,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(e,i,o,l){A5(e,i,o,l)}mount(e){this.isSVGTag=q1(e.tagName),super.mount(e)}}const R5=(n,e)=>Gh(n)?new O5(e):new _5(e,{allowProjection:n!==R.Fragment});function Cr(n,e,i){const o=n.getProps();return Yh(o,e,i!==void 0?i:o.custom,n)}const Kd=n=>Array.isArray(n);function C5(n,e,i){n.hasValue(e)?n.getValue(e).set(i):n.addValue(e,Nr(i))}function D5(n){return Kd(n)?n[n.length-1]||0:n}function M5(n,e){const i=Cr(n,e);let{transitionEnd:o={},transition:l={},...c}=i||{};c={...c,...o};for(const f in c){const h=D5(c[f]);C5(n,f,h)}}function k5(n){return!!(Te(n)&&n.add)}function $d(n,e){const i=n.getValue("willChange");if(k5(i))return i.add(e);if(!i&&oa.WillChange){const o=new oa.WillChange("auto");n.addValue("willChange",o),o.add(e)}}function aT(n){return n.props[F1]}const P5=n=>n!==null;function N5(n,{repeat:e,repeatType:i="loop"},o){const l=n.filter(P5),c=e&&i!=="loop"&&e%2===1?0:l.length-1;return l[c]}const I5={type:"spring",stiffness:500,damping:25,restSpeed:10},L5=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),U5={type:"keyframes",duration:.8},z5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},V5=(n,{keyframes:e})=>e.length>2?U5:Br.has(n)?n.startsWith("scale")?L5(e[1]):I5:z5;function B5({when:n,delay:e,delayChildren:i,staggerChildren:o,staggerDirection:l,repeat:c,repeatType:f,repeatDelay:h,from:p,elapsed:m,...g}){return!!Object.keys(g).length}const Kh=(n,e,i,o={},l,c)=>f=>{const h=Lh(o,n)||{},p=h.delay||o.delay||0;let{elapsed:m=0}=o;m=m-On(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...h,delay:-m,onUpdate:T=>{e.set(T),h.onUpdate&&h.onUpdate(T)},onComplete:()=>{f(),h.onComplete&&h.onComplete()},name:n,motionValue:e,element:c?void 0:l};B5(h)||Object.assign(g,V5(n,g)),g.duration&&(g.duration=On(g.duration)),g.repeatDelay&&(g.repeatDelay=On(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(qd(g),g.delay===0&&(y=!0)),(oa.instantAnimations||oa.skipAnimations)&&(y=!0,qd(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,y&&!c&&e.get()!==void 0){const T=N5(g.keyframes,h);if(T!==void 0){Lt.update(()=>{g.onUpdate(T),g.onComplete()});return}}return h.isSync?new Nh(g):new fA(g)};function H5({protectedKeys:n,needsAnimating:e},i){const o=n.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,o}function iT(n,e,{delay:i=0,transitionOverride:o,type:l}={}){let{transition:c=n.getDefaultTransition(),transitionEnd:f,...h}=e;o&&(c=o);const p=[],m=l&&n.animationState&&n.animationState.getState()[l];for(const g in h){const y=n.getValue(g,n.latestValues[g]??null),T=h[g];if(T===void 0||m&&H5(m,g))continue;const w={delay:i,...Lh(c||{},g)},_=y.get();if(_!==void 0&&!y.isAnimating&&!Array.isArray(T)&&T===_&&!w.velocity)continue;let A=!1;if(window.MotionHandoffAnimation){const D=aT(n);if(D){const L=window.MotionHandoffAnimation(D,g,Lt);L!==null&&(w.startTime=L,A=!0)}}$d(n,g),y.start(Kh(g,y,T,n.shouldReduceMotion&&_1.has(g)?{type:!1}:w,n,A));const k=y.animation;k&&p.push(k)}return f&&Promise.all(p).then(()=>{Lt.update(()=>{f&&M5(n,f)})}),p}function rT(n,e,i,o=0,l=1){const c=Array.from(n).sort((m,g)=>m.sortNodePosition(g)).indexOf(e),f=n.size,h=(f-1)*o;return typeof i=="function"?i(c,f):l===1?c*o:h-c*o}function Zd(n,e,i={}){const o=Cr(n,e,i.type==="exit"?n.presenceContext?.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(l=i.transitionOverride);const c=o?()=>Promise.all(iT(n,o,i)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:m=0,staggerChildren:g,staggerDirection:y}=l;return j5(n,e,p,m,g,y,i)}:()=>Promise.resolve(),{when:h}=l;if(h){const[p,m]=h==="beforeChildren"?[c,f]:[f,c];return p().then(()=>m())}else return Promise.all([c(),f(i.delay)])}function j5(n,e,i=0,o=0,l=0,c=1,f){const h=[];for(const p of n.variantChildren)p.notify("AnimationStart",e),h.push(Zd(p,e,{...f,delay:i+(typeof o=="function"?0:o)+rT(n.variantChildren,p,o,l,c)}).then(()=>p.notify("AnimationComplete",e)));return Promise.all(h)}function q5(n,e,i={}){n.notify("AnimationStart",e);let o;if(Array.isArray(e)){const l=e.map(c=>Zd(n,c,i));o=Promise.all(l)}else if(typeof e=="string")o=Zd(n,e,i);else{const l=typeof e=="function"?Cr(n,e,i.custom):e;o=Promise.all(iT(n,l,i))}return o.then(()=>{n.notify("AnimationComplete",e)})}function oT(n,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==n.length)return!1;for(let o=0;o<i;o++)if(e[o]!==n[o])return!1;return!0}const G5=Hh.length;function sT(n){if(!n)return;if(!n.isControllingVariants){const i=n.parent?sT(n.parent)||{}:{};return n.props.initial!==void 0&&(i.initial=n.props.initial),i}const e={};for(let i=0;i<G5;i++){const o=Hh[i],l=n.props[o];(us(l)||l===!1)&&(e[o]=l)}return e}const Y5=[...Bh].reverse(),F5=Bh.length;function X5(n){return e=>Promise.all(e.map(({animation:i,options:o})=>q5(n,i,o)))}function K5(n){let e=X5(n),i=Yy(),o=!0;const l=p=>(m,g)=>{const y=Cr(n,g,p==="exit"?n.presenceContext?.custom:void 0);if(y){const{transition:T,transitionEnd:w,..._}=y;m={...m,..._,...w}}return m};function c(p){e=p(n)}function f(p){const{props:m}=n,g=sT(n.parent)||{},y=[],T=new Set;let w={},_=1/0;for(let k=0;k<F5;k++){const D=Y5[k],L=i[D],U=m[D]!==void 0?m[D]:g[D],K=us(U),G=D===p?L.isActive:null;G===!1&&(_=k);let J=U===g[D]&&U!==m[D]&&K;if(J&&o&&n.manuallyAnimateOnMount&&(J=!1),L.protectedKeys={...w},!L.isActive&&G===null||!U&&!L.prevProp||Cu(U)||typeof U=="boolean")continue;const it=$5(L.prevProp,U);let Q=it||D===p&&L.isActive&&!J&&K||k>_&&K,rt=!1;const St=Array.isArray(U)?U:[U];let Ut=St.reduce(l(D),{});G===!1&&(Ut={});const{prevResolvedValues:kt={}}=L,Zt={...kt,...Ut},Se=j=>{Q=!0,T.has(j)&&(rt=!0,T.delete(j)),L.needsAnimating[j]=!0;const Z=n.getValue(j);Z&&(Z.liveStyle=!1)};for(const j in Zt){const Z=Ut[j],ht=kt[j];if(w.hasOwnProperty(j))continue;let x=!1;Kd(Z)&&Kd(ht)?x=!oT(Z,ht):x=Z!==ht,x?Z!=null?Se(j):T.add(j):Z!==void 0&&T.has(j)?Se(j):L.protectedKeys[j]=!0}L.prevProp=U,L.prevResolvedValues=Ut,L.isActive&&(w={...w,...Ut}),o&&n.blockInitialAnimation&&(Q=!1);const Pt=J&&it;Q&&(!Pt||rt)&&y.push(...St.map(j=>{const Z={type:D};if(typeof j=="string"&&o&&!Pt&&n.manuallyAnimateOnMount&&n.parent){const{parent:ht}=n,x=Cr(ht,j);if(ht.enteringChildren&&x){const{delayChildren:B}=x.transition||{};Z.delay=rT(ht.enteringChildren,n,B)}}return{animation:j,options:Z}}))}if(T.size){const k={};if(typeof m.initial!="boolean"){const D=Cr(n,Array.isArray(m.initial)?m.initial[0]:m.initial);D&&D.transition&&(k.transition=D.transition)}T.forEach(D=>{const L=n.getBaseTarget(D),U=n.getValue(D);U&&(U.liveStyle=!0),k[D]=L??null}),y.push({animation:k})}let A=!!y.length;return o&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(A=!1),o=!1,A?e(y):Promise.resolve()}function h(p,m){if(i[p].isActive===m)return Promise.resolve();n.variantChildren?.forEach(y=>y.animationState?.setActive(p,m)),i[p].isActive=m;const g=f(p);for(const y in i)i[y].protectedKeys={};return g}return{animateChanges:f,setActive:h,setAnimateFunction:c,getState:()=>i,reset:()=>{i=Yy()}}}function $5(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!oT(e,n):!1}function vi(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Yy(){return{animate:vi(!0),whileInView:vi(),whileHover:vi(),whileTap:vi(),whileDrag:vi(),whileFocus:vi(),exit:vi()}}class $a{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Z5 extends $a{constructor(e){super(e),e.animationState||(e.animationState=K5(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Cu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let Q5=0;class W5 extends $a{constructor(){super(...arguments),this.id=Q5++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===o)return;const l=this.node.animationState.setActive("exit",!e);i&&!e&&l.then(()=>{i(this.id)})}mount(){const{register:e,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const J5={animation:{Feature:Z5},exit:{Feature:W5}};function fs(n,e,i,o={passive:!0}){return n.addEventListener(e,i,o),()=>n.removeEventListener(e,i)}function Ss(n){return{point:{x:n.pageX,y:n.pageY}}}const tO=n=>e=>Vh(e)&&n(e,Ss(e));function Jo(n,e,i,o){return fs(n,e,tO(i),o)}const lT=1e-4,eO=1-lT,nO=1+lT,uT=.01,aO=0-uT,iO=0+uT;function Ae(n){return n.max-n.min}function rO(n,e,i){return Math.abs(n-e)<=i}function Fy(n,e,i,o=.5){n.origin=o,n.originPoint=Vt(e.min,e.max,n.origin),n.scale=Ae(i)/Ae(e),n.translate=Vt(i.min,i.max,n.origin)-n.originPoint,(n.scale>=eO&&n.scale<=nO||isNaN(n.scale))&&(n.scale=1),(n.translate>=aO&&n.translate<=iO||isNaN(n.translate))&&(n.translate=0)}function ts(n,e,i,o){Fy(n.x,e.x,i.x,o?o.originX:void 0),Fy(n.y,e.y,i.y,o?o.originY:void 0)}function Xy(n,e,i){n.min=i.min+e.min,n.max=n.min+Ae(e)}function oO(n,e,i){Xy(n.x,e.x,i.x),Xy(n.y,e.y,i.y)}function Ky(n,e,i){n.min=e.min-i.min,n.max=n.min+Ae(e)}function es(n,e,i){Ky(n.x,e.x,i.x),Ky(n.y,e.y,i.y)}function en(n){return[n("x"),n("y")]}const cT=({current:n})=>n?n.ownerDocument.defaultView:null,$y=(n,e)=>Math.abs(n-e);function sO(n,e){const i=$y(n.x,e.x),o=$y(n.y,e.y);return Math.sqrt(i**2+o**2)}class fT{constructor(e,i,{transformPagePoint:o,contextWindow:l=window,dragSnapToOrigin:c=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=hd(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,_=sO(T.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!_)return;const{point:A}=T,{timestamp:k}=ge;this.history.push({...A,timestamp:k});const{onStart:D,onMove:L}=this.handlers;w||(D&&D(this.lastMoveEvent,T),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,T)},this.handlePointerMove=(T,w)=>{this.lastMoveEvent=T,this.lastMoveEventInfo=dd(w,this.transformPagePoint),Lt.update(this.updatePoint,!0)},this.handlePointerUp=(T,w)=>{this.end();const{onEnd:_,onSessionEnd:A,resumeAnimation:k}=this.handlers;if(this.dragSnapToOrigin&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=hd(T.type==="pointercancel"?this.lastMoveEventInfo:dd(w,this.transformPagePoint),this.history);this.startEvent&&_&&_(T,D),A&&A(T,D)},!Vh(e))return;this.dragSnapToOrigin=c,this.handlers=i,this.transformPagePoint=o,this.distanceThreshold=f,this.contextWindow=l||window;const h=Ss(e),p=dd(h,this.transformPagePoint),{point:m}=p,{timestamp:g}=ge;this.history=[{...m,timestamp:g}];const{onSessionStart:y}=i;y&&y(e,hd(p,this.history)),this.removeListeners=vs(Jo(this.contextWindow,"pointermove",this.handlePointerMove),Jo(this.contextWindow,"pointerup",this.handlePointerUp),Jo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Xa(this.updatePoint)}}function dd(n,e){return e?{point:e(n.point)}:n}function Zy(n,e){return{x:n.x-e.x,y:n.y-e.y}}function hd({point:n},e){return{point:n,delta:Zy(n,dT(e)),offset:Zy(n,lO(e)),velocity:uO(e,.1)}}function lO(n){return n[0]}function dT(n){return n[n.length-1]}function uO(n,e){if(n.length<2)return{x:0,y:0};let i=n.length-1,o=null;const l=dT(n);for(;i>=0&&(o=n[i],!(l.timestamp-o.timestamp>On(e)));)i--;if(!o)return{x:0,y:0};const c=nn(l.timestamp-o.timestamp);if(c===0)return{x:0,y:0};const f={x:(l.x-o.x)/c,y:(l.y-o.y)/c};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function cO(n,{min:e,max:i},o){return e!==void 0&&n<e?n=o?Vt(e,n,o.min):Math.max(n,e):i!==void 0&&n>i&&(n=o?Vt(i,n,o.max):Math.min(n,i)),n}function Qy(n,e,i){return{min:e!==void 0?n.min+e:void 0,max:i!==void 0?n.max+i-(n.max-n.min):void 0}}function fO(n,{top:e,left:i,bottom:o,right:l}){return{x:Qy(n.x,i,l),y:Qy(n.y,e,o)}}function Wy(n,e){let i=e.min-n.min,o=e.max-n.max;return e.max-e.min<n.max-n.min&&([i,o]=[o,i]),{min:i,max:o}}function dO(n,e){return{x:Wy(n.x,e.x),y:Wy(n.y,e.y)}}function hO(n,e){let i=.5;const o=Ae(n),l=Ae(e);return l>o?i=os(e.min,e.max-o,n.min):o>l&&(i=os(n.min,n.max-l,e.min)),ra(0,1,i)}function pO(n,e){const i={};return e.min!==void 0&&(i.min=e.min-n.min),e.max!==void 0&&(i.max=e.max-n.min),i}const Qd=.35;function mO(n=Qd){return n===!1?n=0:n===!0&&(n=Qd),{x:Jy(n,"left","right"),y:Jy(n,"top","bottom")}}function Jy(n,e,i){return{min:tv(n,e),max:tv(n,i)}}function tv(n,e){return typeof n=="number"?n:n[e]||0}const gO=new WeakMap;class yO{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$t(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:i=!1,distanceThreshold:o}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const c=y=>{const{dragSnapToOrigin:T}=this.getProps();T?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Ss(y).point)},f=(y,T)=>{const{drag:w,dragPropagation:_,onDragStart:A}=this.getProps();if(w&&!_&&(this.openDragLock&&this.openDragLock(),this.openDragLock=RA(w),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=T,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),en(D=>{let L=this.getAxisMotionValue(D).get()||0;if(Rn.test(L)){const{projection:U}=this.visualElement;if(U&&U.layout){const K=U.layout.layoutBox[D];K&&(L=Ae(K)*(parseFloat(L)/100))}}this.originPoint[D]=L}),A&&Lt.postRender(()=>A(y,T)),$d(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},h=(y,T)=>{this.latestPointerEvent=y,this.latestPanInfo=T;const{dragPropagation:w,dragDirectionLock:_,onDirectionLock:A,onDrag:k}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:D}=T;if(_&&this.currentDirection===null){this.currentDirection=vO(D),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",T.point,D),this.updateAxis("y",T.point,D),this.visualElement.render(),k&&k(y,T)},p=(y,T)=>{this.latestPointerEvent=y,this.latestPanInfo=T,this.stop(y,T),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>en(y=>this.getAnimationState(y)==="paused"&&this.getAxisMotionValue(y).animation?.play()),{dragSnapToOrigin:g}=this.getProps();this.panSession=new fT(e,{onSessionStart:c,onStart:f,onMove:h,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:o,contextWindow:cT(this.visualElement)})}stop(e,i){const o=e||this.latestPointerEvent,l=i||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!l||!o)return;const{velocity:f}=l;this.startAnimation(f);const{onDragEnd:h}=this.getProps();h&&Lt.postRender(()=>h(o,l))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(e,i,o){const{drag:l}=this.getProps();if(!o||!Fl(e,l,this.currentDirection))return;const c=this.getAxisMotionValue(e);let f=this.originPoint[e]+o[e];this.constraints&&this.constraints[e]&&(f=cO(f,this.constraints[e],this.elastic[e])),c.set(f)}resolveConstraints(){const{dragConstraints:e,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,l=this.constraints;e&&Er(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&o?this.constraints=fO(o.layoutBox,e):this.constraints=!1,this.elastic=mO(i),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&en(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=pO(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!Er(e))return!1;const o=e.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const c=b5(o,l.root,this.visualElement.getTransformPagePoint());let f=dO(l.layout.layoutBox,c);if(i){const h=i(g5(f));this.hasMutatedConstraints=!!h,h&&(f=$1(h))}return f}startAnimation(e){const{drag:i,dragMomentum:o,dragElastic:l,dragTransition:c,dragSnapToOrigin:f,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},m=en(g=>{if(!Fl(g,i,this.currentDirection))return;let y=p&&p[g]||{};f&&(y={min:0,max:0});const T=l?200:1e6,w=l?40:1e7,_={type:"inertia",velocity:o?e[g]:0,bounceStiffness:T,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...c,...y};return this.startAxisValueAnimation(g,_)});return Promise.all(m).then(h)}startAxisValueAnimation(e,i){const o=this.getAxisMotionValue(e);return $d(this.visualElement,e),o.start(Kh(e,o,0,i,this.visualElement,!1))}stopAnimation(){en(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){en(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const i=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps(),l=o[i];return l||this.visualElement.getValue(e,(o.initial?o.initial[e]:void 0)||0)}snapToCursor(e){en(i=>{const{drag:o}=this.getProps();if(!Fl(i,o,this.currentDirection))return;const{projection:l}=this.visualElement,c=this.getAxisMotionValue(i);if(l&&l.layout){const{min:f,max:h}=l.layout.layoutBox[i];c.set(e[i]-Vt(f,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!Er(i)||!o||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};en(f=>{const h=this.getAxisMotionValue(f);if(h&&this.constraints!==!1){const p=h.get();l[f]=hO({min:p,max:p},this.constraints[f])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),en(f=>{if(!Fl(f,e,null))return;const h=this.getAxisMotionValue(f),{min:p,max:m}=this.constraints[f];h.set(Vt(p,m,l[f]))})}addListeners(){if(!this.visualElement.current)return;gO.set(this.visualElement,this);const e=this.visualElement.current,i=Jo(e,"pointerdown",p=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(p)}),o=()=>{const{dragConstraints:p}=this.getProps();Er(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,c=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Lt.read(o);const f=fs(window,"resize",()=>this.scalePositionWithinConstraints()),h=l.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(en(g=>{const y=this.getAxisMotionValue(g);y&&(this.originPoint[g]+=p[g].translate,y.set(y.get()+p[g].translate))}),this.visualElement.render())}));return()=>{f(),i(),c(),h&&h()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:l=!1,dragConstraints:c=!1,dragElastic:f=Qd,dragMomentum:h=!0}=e;return{...e,drag:i,dragDirectionLock:o,dragPropagation:l,dragConstraints:c,dragElastic:f,dragMomentum:h}}}function Fl(n,e,i){return(e===!0||e===n)&&(i===null||i===n)}function vO(n,e=10){let i=null;return Math.abs(n.y)>e?i="y":Math.abs(n.x)>e&&(i="x"),i}class bO extends $a{constructor(e){super(e),this.removeGroupControls=an,this.removeListeners=an,this.controls=new yO(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||an}unmount(){this.removeGroupControls(),this.removeListeners()}}const ev=n=>(e,i)=>{n&&Lt.postRender(()=>n(e,i))};class TO extends $a{constructor(){super(...arguments),this.removePointerDownListener=an}onPointerDown(e){this.session=new fT(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:cT(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:o,onPanEnd:l}=this.node.getProps();return{onSessionStart:ev(e),onStart:ev(i),onMove:o,onEnd:(c,f)=>{delete this.session,l&&Lt.postRender(()=>l(c,f))}}}mount(){this.removePointerDownListener=Jo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const nu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function nv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Yo={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(ft.test(n))n=parseFloat(n);else return n;const i=nv(n,e.target.x),o=nv(n,e.target.y);return`${i}% ${o}%`}},SO={correct:(n,{treeScale:e,projectionDelta:i})=>{const o=n,l=Ka.parse(n);if(l.length>5)return o;const c=Ka.createTransformer(n),f=typeof l[0]!="number"?1:0,h=i.x.scale*e.x,p=i.y.scale*e.y;l[0+f]/=h,l[1+f]/=p;const m=Vt(h,p,.5);return typeof l[2+f]=="number"&&(l[2+f]/=m),typeof l[3+f]=="number"&&(l[3+f]/=m),c(l)}};let pd=!1;class xO extends R.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:o,layoutId:l}=this.props,{projection:c}=e;GA(wO),c&&(i.group&&i.group.add(c),o&&o.register&&l&&o.register(c),pd&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),nu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:o,drag:l,isPresent:c}=this.props,{projection:f}=o;return f&&(f.isPresent=c,pd=!0,l||e.layoutDependency!==i||i===void 0||e.isPresent!==c?f.willUpdate():this.safeToRemove(),e.isPresent!==c&&(c?f.promote():f.relegate()||Lt.postRender(()=>{const h=f.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),zh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:l}=e;pd=!0,l&&(l.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(l),o&&o.deregister&&o.deregister(l))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function hT(n){const[e,i]=UA(),o=R.useContext(Yb);return F.jsx(xO,{...n,layoutGroup:o,switchLayoutGroup:R.useContext(X1),isPresent:e,safeToRemove:i})}const wO={borderRadius:{...Yo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Yo,borderTopRightRadius:Yo,borderBottomLeftRadius:Yo,borderBottomRightRadius:Yo,boxShadow:SO};function EO(n,e,i){const o=Te(n)?n:Nr(n);return o.start(Kh("",o,e,i)),o.animation}const _O=(n,e)=>n.depth-e.depth;class AO{constructor(){this.children=[],this.isDirty=!1}add(e){bh(this.children,e),this.isDirty=!0}remove(e){Th(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(_O),this.isDirty=!1,this.children.forEach(e)}}function OO(n,e){const i=Ne.now(),o=({timestamp:l})=>{const c=l-i;c>=e&&(Xa(o),n(c-e))};return Lt.setup(o,!0),()=>Xa(o)}const pT=["TopLeft","TopRight","BottomLeft","BottomRight"],RO=pT.length,av=n=>typeof n=="string"?parseFloat(n):n,iv=n=>typeof n=="number"||ft.test(n);function CO(n,e,i,o,l,c){l?(n.opacity=Vt(0,i.opacity??1,DO(o)),n.opacityExit=Vt(e.opacity??1,0,MO(o))):c&&(n.opacity=Vt(e.opacity??1,i.opacity??1,o));for(let f=0;f<RO;f++){const h=`border${pT[f]}Radius`;let p=rv(e,h),m=rv(i,h);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||iv(p)===iv(m)?(n[h]=Math.max(Vt(av(p),av(m),o),0),(Rn.test(m)||Rn.test(p))&&(n[h]+="%")):n[h]=m}(e.rotate||i.rotate)&&(n.rotate=Vt(e.rotate||0,i.rotate||0,o))}function rv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const DO=mT(0,.5,n1),MO=mT(.5,.95,an);function mT(n,e,i){return o=>o<n?0:o>e?1:i(os(n,e,o))}function ov(n,e){n.min=e.min,n.max=e.max}function tn(n,e){ov(n.x,e.x),ov(n.y,e.y)}function sv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function lv(n,e,i,o,l){return n-=e,n=pu(n,1/i,o),l!==void 0&&(n=pu(n,1/l,o)),n}function kO(n,e=0,i=1,o=.5,l,c=n,f=n){if(Rn.test(e)&&(e=parseFloat(e),e=Vt(f.min,f.max,e/100)-f.min),typeof e!="number")return;let h=Vt(c.min,c.max,o);n===c&&(h-=e),n.min=lv(n.min,e,i,h,l),n.max=lv(n.max,e,i,h,l)}function uv(n,e,[i,o,l],c,f){kO(n,e[i],e[o],e[l],e.scale,c,f)}const PO=["x","scaleX","originX"],NO=["y","scaleY","originY"];function cv(n,e,i,o){uv(n.x,e,PO,i?i.x:void 0,o?o.x:void 0),uv(n.y,e,NO,i?i.y:void 0,o?o.y:void 0)}function fv(n){return n.translate===0&&n.scale===1}function gT(n){return fv(n.x)&&fv(n.y)}function dv(n,e){return n.min===e.min&&n.max===e.max}function IO(n,e){return dv(n.x,e.x)&&dv(n.y,e.y)}function hv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function yT(n,e){return hv(n.x,e.x)&&hv(n.y,e.y)}function pv(n){return Ae(n.x)/Ae(n.y)}function mv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class LO{constructor(){this.members=[]}add(e){bh(this.members,e),e.scheduleRender()}remove(e){if(Th(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){const i=this.members.findIndex(l=>e===l);if(i===0)return!1;let o;for(let l=i;l>=0;l--){const c=this.members[l];if(c.isPresent!==!1){o=c;break}}return o?(this.promote(o),!0):!1}promote(e,i){const o=this.lead;if(e!==o&&(this.prevLead=o,this.lead=e,e.show(),o)){o.instance&&o.scheduleRender(),e.scheduleRender(),e.resumeFrom=o,i&&(e.resumeFrom.preserveOpacity=!0),o.snapshot&&(e.snapshot=o.snapshot,e.snapshot.latestValues=o.animationValues||o.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:l}=e.options;l===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:i,resumingFrom:o}=e;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function UO(n,e,i){let o="";const l=n.x.translate/e.x,c=n.y.translate/e.y,f=i?.z||0;if((l||c||f)&&(o=`translate3d(${l}px, ${c}px, ${f}px) `),(e.x!==1||e.y!==1)&&(o+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:m,rotate:g,rotateX:y,rotateY:T,skewX:w,skewY:_}=i;m&&(o=`perspective(${m}px) ${o}`),g&&(o+=`rotate(${g}deg) `),y&&(o+=`rotateX(${y}deg) `),T&&(o+=`rotateY(${T}deg) `),w&&(o+=`skewX(${w}deg) `),_&&(o+=`skewY(${_}deg) `)}const h=n.x.scale*e.x,p=n.y.scale*e.y;return(h!==1||p!==1)&&(o+=`scale(${h}, ${p})`),o||"none"}const md=["","X","Y","Z"],zO=1e3;let VO=0;function gd(n,e,i,o){const{latestValues:l}=e;l[n]&&(i[n]=l[n],e.setStaticValue(n,0),o&&(o[n]=0))}function vT(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const i=aT(e);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:l,layoutId:c}=n.options;window.MotionCancelOptimisedAnimation(i,"transform",Lt,!(l||c))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&vT(o)}function bT({attachResizeListener:n,defaultParent:e,measureScroll:i,checkIsScrollRoot:o,resetTransform:l}){return class{constructor(f={},h=e?.()){this.id=VO++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(jO),this.nodes.forEach(FO),this.nodes.forEach(XO),this.nodes.forEach(qO)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new AO)}addEventListener(f,h){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new wh),this.eventHandlers.get(f).add(h)}notifyListeners(f,...h){const p=this.eventHandlers.get(f);p&&p.notify(...h)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=N1(f)&&!NA(f),this.instance=f;const{layoutId:h,layout:p,visualElement:m}=this.options;if(m&&!m.current&&m.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),n){let g,y=0;const T=()=>this.root.updateBlockedByResize=!1;Lt.read(()=>{y=window.innerWidth}),n(f,()=>{const w=window.innerWidth;w!==y&&(y=w,this.root.updateBlockedByResize=!0,g&&g(),g=OO(T,250),nu.hasAnimatedSinceResize&&(nu.hasAnimatedSinceResize=!1,this.nodes.forEach(vv)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&m&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:y,hasRelativeLayoutChanged:T,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||m.getDefaultTransition()||WO,{onLayoutAnimationStart:A,onLayoutAnimationComplete:k}=m.getProps(),D=!this.targetLayout||!yT(this.targetLayout,w),L=!y&&T;if(this.options.layoutRoot||this.resumeFrom||L||y&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const U={...Lh(_,"layout"),onPlay:A,onComplete:k};(m.shouldReduceMotion||this.options.layoutRoot)&&(U.delay=0,U.type=!1),this.startAnimation(U),this.setAnimationOrigin(g,L)}else y||vv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Xa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(KO),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&vT(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(gv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(yv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(YO),this.nodes.forEach(BO),this.nodes.forEach(HO)):this.nodes.forEach(yv),this.clearAllSnapshots();const h=Ne.now();ge.delta=ra(0,1e3/60,h-ge.timestamp),ge.timestamp=h,ge.isProcessing=!0,id.update.process(ge),id.preRender.process(ge),id.render.process(ge),ge.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,zh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(GO),this.sharedNodes.forEach($O)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Lt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Lt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ae(this.snapshot.measuredBox.x)&&!Ae(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=$t(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(h=!1),h&&this.instance){const p=o(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!gT(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;f&&this.instance&&(h||bi(this.latestValues)||g)&&(l(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return f&&(p=this.removeTransform(p)),JO(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return $t();const h=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(tR))){const{scroll:m}=this.root;m&&(_r(h.x,m.offset.x),_r(h.y,m.offset.y))}return h}removeElementScroll(f){const h=$t();if(tn(h,f),this.scroll?.wasRoot)return h;for(let p=0;p<this.path.length;p++){const m=this.path[p],{scroll:g,options:y}=m;m!==this.root&&g&&y.layoutScroll&&(g.wasRoot&&tn(h,f),_r(h.x,g.offset.x),_r(h.y,g.offset.y))}return h}applyTransform(f,h=!1){const p=$t();tn(p,f);for(let m=0;m<this.path.length;m++){const g=this.path[m];!h&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Ar(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),bi(g.latestValues)&&Ar(p,g.latestValues)}return bi(this.latestValues)&&Ar(p,this.latestValues),p}removeTransform(f){const h=$t();tn(h,f);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!bi(m.latestValues))continue;Yd(m.latestValues)&&m.updateSnapshot();const g=$t(),y=m.measurePageBox();tn(g,y),cv(h,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return bi(this.latestValues)&&cv(h,this.latestValues),h}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ge.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!(!this.layout||!(g||y))){if(this.resolvedRelativeTargetAt=ge.timestamp,!this.targetDelta&&!this.relativeTarget){const T=this.getClosestProjectingParent();T&&T.layout&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$t(),this.relativeTargetOrigin=$t(),es(this.relativeTargetOrigin,this.layout.layoutBox,T.layout.layoutBox),tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=$t(),this.targetWithTransforms=$t()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),oO(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):tn(this.target,this.layout.layoutBox),Q1(this.target,this.targetDelta)):tn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const T=this.getClosestProjectingParent();T&&!!T.resumingFrom==!!this.resumingFrom&&!T.options.layoutScroll&&T.target&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$t(),this.relativeTargetOrigin=$t(),es(this.relativeTargetOrigin,this.target,T.target),tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Yd(this.parent.latestValues)||Z1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),h=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===ge.timestamp&&(p=!1),p)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;tn(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,T=this.treeScale.y;v5(this.layoutCorrected,this.treeScale,this.path,h),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=$t());const{target:w}=f;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(sv(this.prevProjectionDelta.x,this.projectionDelta.x),sv(this.prevProjectionDelta.y,this.projectionDelta.y)),ts(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==T||!mv(this.projectionDelta.x,this.prevProjectionDelta.x)||!mv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Or(),this.projectionDelta=Or(),this.projectionDeltaWithTransform=Or()}setAnimationOrigin(f,h=!1){const p=this.snapshot,m=p?p.latestValues:{},g={...this.latestValues},y=Or();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const T=$t(),w=p?p.source:void 0,_=this.layout?this.layout.source:void 0,A=w!==_,k=this.getStack(),D=!k||k.members.length<=1,L=!!(A&&!D&&this.options.crossfade===!0&&!this.path.some(QO));this.animationProgress=0;let U;this.mixTargetDelta=K=>{const G=K/1e3;bv(y.x,f.x,G),bv(y.y,f.y,G),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(es(T,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ZO(this.relativeTarget,this.relativeTargetOrigin,T,G),U&&IO(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=$t()),tn(U,this.relativeTarget)),A&&(this.animationValues=g,CO(g,m,this.latestValues,G,L,D)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=G},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Xa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Lt.update(()=>{nu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Nr(0)),this.currentAnimation=EO(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:h=>{this.mixTargetDelta(h),f.onUpdate&&f.onUpdate(h)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(zO),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:h,target:p,layout:m,latestValues:g}=f;if(!(!h||!p||!m)){if(this!==f&&this.layout&&m&&TT(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||$t();const y=Ae(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+y;const T=Ae(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+T}tn(h,p),Ar(h,g),ts(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(f,h){this.sharedNodes.has(f)||this.sharedNodes.set(f,new LO),this.sharedNodes.get(f).add(h);const m=h.options.initialPromotionConfig;h.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(h):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:h,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let h=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const m={};p.z&&gd("z",f,m,this.animationValues);for(let g=0;g<md.length;g++)gd(`rotate${md[g]}`,f,m,this.animationValues),gd(`skew${md[g]}`,f,m,this.animationValues);f.render();for(const g in m)f.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);f.scheduleRender()}applyProjectionStyles(f,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=eu(h?.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=eu(h?.pointerEvents)||""),this.hasProjected&&!bi(this.latestValues)&&(f.transform=p?p({},""):"none",this.hasProjected=!1);return}f.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let y=UO(this.projectionDeltaWithTransform,this.treeScale,g);p&&(y=p(g,y)),f.transform=y;const{x:T,y:w}=this.projectionDelta;f.transformOrigin=`${T.origin*100}% ${w.origin*100}% 0`,m.animationValues?f.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:f.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const _ in cs){if(g[_]===void 0)continue;const{correct:A,applyTo:k,isCSSVariable:D}=cs[_],L=y==="none"?g[_]:A(g[_],m);if(k){const U=k.length;for(let K=0;K<U;K++)f[k[K]]=L}else D?this.options.visualElement.renderState.vars[_]=L:f[_]=L}this.options.layoutId&&(f.pointerEvents=m===this?eu(h?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(gv),this.root.sharedNodes.clear()}}}function BO(n){n.updateLayout()}function HO(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:l}=n.options,c=e.source!==n.layout.source;l==="size"?en(g=>{const y=c?e.measuredBox[g]:e.layoutBox[g],T=Ae(y);y.min=i[g].min,y.max=y.min+T}):TT(l,e.layoutBox,i)&&en(g=>{const y=c?e.measuredBox[g]:e.layoutBox[g],T=Ae(i[g]);y.max=y.min+T,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+T)});const f=Or();ts(f,i,e.layoutBox);const h=Or();c?ts(h,n.applyTransform(o,!0),e.measuredBox):ts(h,i,e.layoutBox);const p=!gT(f);let m=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:y,layout:T}=g;if(y&&T){const w=$t();es(w,e.layoutBox,y.layoutBox);const _=$t();es(_,i,T.layoutBox),yT(w,_)||(m=!0),g.options.layoutRoot&&(n.relativeTarget=_,n.relativeTargetOrigin=w,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:h,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function jO(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function qO(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function GO(n){n.clearSnapshot()}function gv(n){n.clearMeasurements()}function yv(n){n.isLayoutDirty=!1}function YO(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function vv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function FO(n){n.resolveTargetDelta()}function XO(n){n.calcProjection()}function KO(n){n.resetSkewAndRotation()}function $O(n){n.removeLeadSnapshot()}function bv(n,e,i){n.translate=Vt(e.translate,0,i),n.scale=Vt(e.scale,1,i),n.origin=e.origin,n.originPoint=e.originPoint}function Tv(n,e,i,o){n.min=Vt(e.min,i.min,o),n.max=Vt(e.max,i.max,o)}function ZO(n,e,i,o){Tv(n.x,e.x,i.x,o),Tv(n.y,e.y,i.y,o)}function QO(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const WO={duration:.45,ease:[.4,0,.1,1]},Sv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),xv=Sv("applewebkit/")&&!Sv("chrome/")?Math.round:an;function wv(n){n.min=xv(n.min),n.max=xv(n.max)}function JO(n){wv(n.x),wv(n.y)}function TT(n,e,i){return n==="position"||n==="preserve-aspect"&&!rO(pv(e),pv(i),.2)}function tR(n){return n!==n.root&&n.scroll?.wasRoot}const eR=bT({attachResizeListener:(n,e)=>fs(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),yd={current:void 0},ST=bT({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!yd.current){const n=new eR({});n.mount(window),n.setOptions({layoutScroll:!0}),yd.current=n}return yd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),nR={pan:{Feature:TO},drag:{Feature:bO,ProjectionNode:ST,MeasureLayout:hT}};function Ev(n,e,i){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",i==="Start");const l="onHover"+i,c=o[l];c&&Lt.postRender(()=>c(e,Ss(e)))}class aR extends $a{mount(){const{current:e}=this.node;e&&(this.unmount=CA(e,(i,o)=>(Ev(this.node,o,"Start"),l=>Ev(this.node,l,"End"))))}unmount(){}}class iR extends $a{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=vs(fs(this.node.current,"focus",()=>this.onFocus()),fs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function _v(n,e,i){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",i==="Start");const l="onTap"+(i==="End"?"":i),c=o[l];c&&Lt.postRender(()=>c(e,Ss(e)))}class rR extends $a{mount(){const{current:e}=this.node;e&&(this.unmount=PA(e,(i,o)=>(_v(this.node,o,"Start"),(l,{success:c})=>_v(this.node,l,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Wd=new WeakMap,vd=new WeakMap,oR=n=>{const e=Wd.get(n.target);e&&e(n)},sR=n=>{n.forEach(oR)};function lR({root:n,...e}){const i=n||document;vd.has(i)||vd.set(i,{});const o=vd.get(i),l=JSON.stringify(e);return o[l]||(o[l]=new IntersectionObserver(sR,{root:n,...e})),o[l]}function uR(n,e,i){const o=lR(e);return Wd.set(n,i),o.observe(n),()=>{Wd.delete(n),o.unobserve(n)}}const cR={some:0,all:1};class fR extends $a{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:i,margin:o,amount:l="some",once:c}=e,f={root:i?i.current:void 0,rootMargin:o,threshold:typeof l=="number"?l:cR[l]},h=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,c&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),T=m?g:y;T&&T(p)};return uR(this.node.current,f,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(dR(e,i))&&this.startObserver()}unmount(){}}function dR({viewport:n={}},{viewport:e={}}={}){return i=>n[i]!==e[i]}const hR={inView:{Feature:fR},tap:{Feature:rR},focus:{Feature:iR},hover:{Feature:aR}},pR={layout:{ProjectionNode:ST,MeasureLayout:hT}},mR={...J5,...hR,...nR,...pR},ns=m5(mR,R5);function re(n,e){e===void 0&&(e={});var i=e.insertAt;if(n&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",i==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}}re(`.react-loading-indicator-normalize,
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
}`);var dn=function(){return dn=Object.assign||function(n){for(var e,i=1,o=arguments.length;i<o;i++)for(var l in e=arguments[i])Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l]);return n},dn.apply(this,arguments)};function mu(n){return mu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mu(n)}var gR=/^\s+/,yR=/\s+$/;function nt(n,e){if(e=e||{},(n=n||"")instanceof nt)return n;if(!(this instanceof nt))return new nt(n,e);var i=(function(o){var l={r:0,g:0,b:0},c=1,f=null,h=null,p=null,m=!1,g=!1;typeof o=="string"&&(o=(function(_){_=_.replace(gR,"").replace(yR,"").toLowerCase();var A,k=!1;if(Jd[_])_=Jd[_],k=!0;else if(_=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(A=cn.rgb.exec(_))?{r:A[1],g:A[2],b:A[3]}:(A=cn.rgba.exec(_))?{r:A[1],g:A[2],b:A[3],a:A[4]}:(A=cn.hsl.exec(_))?{h:A[1],s:A[2],l:A[3]}:(A=cn.hsla.exec(_))?{h:A[1],s:A[2],l:A[3],a:A[4]}:(A=cn.hsv.exec(_))?{h:A[1],s:A[2],v:A[3]}:(A=cn.hsva.exec(_))?{h:A[1],s:A[2],v:A[3],a:A[4]}:(A=cn.hex8.exec(_))?{r:je(A[1]),g:je(A[2]),b:je(A[3]),a:Mv(A[4]),format:k?"name":"hex8"}:(A=cn.hex6.exec(_))?{r:je(A[1]),g:je(A[2]),b:je(A[3]),format:k?"name":"hex"}:(A=cn.hex4.exec(_))?{r:je(A[1]+""+A[1]),g:je(A[2]+""+A[2]),b:je(A[3]+""+A[3]),a:Mv(A[4]+""+A[4]),format:k?"name":"hex8"}:(A=cn.hex3.exec(_))?{r:je(A[1]+""+A[1]),g:je(A[2]+""+A[2]),b:je(A[3]+""+A[3]),format:k?"name":"hex"}:!1})(o)),mu(o)=="object"&&(ta(o.r)&&ta(o.g)&&ta(o.b)?(y=o.r,T=o.g,w=o.b,l={r:255*It(y,255),g:255*It(T,255),b:255*It(w,255)},m=!0,g=String(o.r).substr(-1)==="%"?"prgb":"rgb"):ta(o.h)&&ta(o.s)&&ta(o.v)?(f=Ko(o.s),h=Ko(o.v),l=(function(_,A,k){_=6*It(_,360),A=It(A,100),k=It(k,100);var D=Math.floor(_),L=_-D,U=k*(1-A),K=k*(1-L*A),G=k*(1-(1-L)*A),J=D%6,it=[k,K,U,U,G,k][J],Q=[G,k,k,K,U,U][J],rt=[U,U,G,k,k,K][J];return{r:255*it,g:255*Q,b:255*rt}})(o.h,f,h),m=!0,g="hsv"):ta(o.h)&&ta(o.s)&&ta(o.l)&&(f=Ko(o.s),p=Ko(o.l),l=(function(_,A,k){var D,L,U;function K(it,Q,rt){return rt<0&&(rt+=1),rt>1&&(rt-=1),rt<1/6?it+6*(Q-it)*rt:rt<.5?Q:rt<2/3?it+(Q-it)*(2/3-rt)*6:it}if(_=It(_,360),A=It(A,100),k=It(k,100),A===0)D=L=U=k;else{var G=k<.5?k*(1+A):k+A-k*A,J=2*k-G;D=K(J,G,_+1/3),L=K(J,G,_),U=K(J,G,_-1/3)}return{r:255*D,g:255*L,b:255*U}})(o.h,f,p),m=!0,g="hsl"),o.hasOwnProperty("a")&&(c=o.a));var y,T,w;return c=xT(c),{ok:m,format:o.format||g,r:Math.min(255,Math.max(l.r,0)),g:Math.min(255,Math.max(l.g,0)),b:Math.min(255,Math.max(l.b,0)),a:c}})(n);this._originalInput=n,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||i.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function Av(n,e,i){n=It(n,255),e=It(e,255),i=It(i,255);var o,l,c=Math.max(n,e,i),f=Math.min(n,e,i),h=(c+f)/2;if(c==f)o=l=0;else{var p=c-f;switch(l=h>.5?p/(2-c-f):p/(c+f),c){case n:o=(e-i)/p+(e<i?6:0);break;case e:o=(i-n)/p+2;break;case i:o=(n-e)/p+4}o/=6}return{h:o,s:l,l:h}}function Ov(n,e,i){n=It(n,255),e=It(e,255),i=It(i,255);var o,l,c=Math.max(n,e,i),f=Math.min(n,e,i),h=c,p=c-f;if(l=c===0?0:p/c,c==f)o=0;else{switch(c){case n:o=(e-i)/p+(e<i?6:0);break;case e:o=(i-n)/p+2;break;case i:o=(n-e)/p+4}o/=6}return{h:o,s:l,v:h}}function Rv(n,e,i,o){var l=[hn(Math.round(n).toString(16)),hn(Math.round(e).toString(16)),hn(Math.round(i).toString(16))];return o&&l[0].charAt(0)==l[0].charAt(1)&&l[1].charAt(0)==l[1].charAt(1)&&l[2].charAt(0)==l[2].charAt(1)?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0):l.join("")}function Cv(n,e,i,o){return[hn(wT(o)),hn(Math.round(n).toString(16)),hn(Math.round(e).toString(16)),hn(Math.round(i).toString(16))].join("")}function vR(n,e){e=e===0?0:e||10;var i=nt(n).toHsl();return i.s-=e/100,i.s=Mu(i.s),nt(i)}function bR(n,e){e=e===0?0:e||10;var i=nt(n).toHsl();return i.s+=e/100,i.s=Mu(i.s),nt(i)}function TR(n){return nt(n).desaturate(100)}function SR(n,e){e=e===0?0:e||10;var i=nt(n).toHsl();return i.l+=e/100,i.l=Mu(i.l),nt(i)}function xR(n,e){e=e===0?0:e||10;var i=nt(n).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-e/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-e/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-e/100*255))),nt(i)}function wR(n,e){e=e===0?0:e||10;var i=nt(n).toHsl();return i.l-=e/100,i.l=Mu(i.l),nt(i)}function ER(n,e){var i=nt(n).toHsl(),o=(i.h+e)%360;return i.h=o<0?360+o:o,nt(i)}function _R(n){var e=nt(n).toHsl();return e.h=(e.h+180)%360,nt(e)}function Dv(n,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var i=nt(n).toHsl(),o=[nt(n)],l=360/e,c=1;c<e;c++)o.push(nt({h:(i.h+c*l)%360,s:i.s,l:i.l}));return o}function AR(n){var e=nt(n).toHsl(),i=e.h;return[nt(n),nt({h:(i+72)%360,s:e.s,l:e.l}),nt({h:(i+216)%360,s:e.s,l:e.l})]}function OR(n,e,i){e=e||6,i=i||30;var o=nt(n).toHsl(),l=360/i,c=[nt(n)];for(o.h=(o.h-(l*e>>1)+720)%360;--e;)o.h=(o.h+l)%360,c.push(nt(o));return c}function RR(n,e){e=e||6;for(var i=nt(n).toHsv(),o=i.h,l=i.s,c=i.v,f=[],h=1/e;e--;)f.push(nt({h:o,s:l,v:c})),c=(c+h)%1;return f}nt.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,e,i,o=this.toRgb();return n=o.r/255,e=o.g/255,i=o.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(n){return this._a=xT(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=Ov(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=Ov(this._r,this._g,this._b),e=Math.round(360*n.h),i=Math.round(100*n.s),o=Math.round(100*n.v);return this._a==1?"hsv("+e+", "+i+"%, "+o+"%)":"hsva("+e+", "+i+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var n=Av(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=Av(this._r,this._g,this._b),e=Math.round(360*n.h),i=Math.round(100*n.s),o=Math.round(100*n.l);return this._a==1?"hsl("+e+", "+i+"%, "+o+"%)":"hsla("+e+", "+i+"%, "+o+"%, "+this._roundA+")"},toHex:function(n){return Rv(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return(function(e,i,o,l,c){var f=[hn(Math.round(e).toString(16)),hn(Math.round(i).toString(16)),hn(Math.round(o).toString(16)),hn(wT(l))];return c&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")})(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*It(this._r,255))+"%",g:Math.round(100*It(this._g,255))+"%",b:Math.round(100*It(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*It(this._r,255))+"%, "+Math.round(100*It(this._g,255))+"%, "+Math.round(100*It(this._b,255))+"%)":"rgba("+Math.round(100*It(this._r,255))+"%, "+Math.round(100*It(this._g,255))+"%, "+Math.round(100*It(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(CR[Rv(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var e="#"+Cv(this._r,this._g,this._b,this._a),i=e,o=this._gradientType?"GradientType = 1, ":"";if(n){var l=nt(n);i="#"+Cv(l._r,l._g,l._b,l._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+e+",endColorstr="+i+")"},toString:function(n){var e=!!n;n=n||this._format;var i=!1,o=this._a<1&&this._a>=0;return e||!o||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(i=this.toRgbString()),n==="prgb"&&(i=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(i=this.toHexString()),n==="hex3"&&(i=this.toHexString(!0)),n==="hex4"&&(i=this.toHex8String(!0)),n==="hex8"&&(i=this.toHex8String()),n==="name"&&(i=this.toName()),n==="hsl"&&(i=this.toHslString()),n==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return nt(this.toString())},_applyModification:function(n,e){var i=n.apply(null,[this].concat([].slice.call(e)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(SR,arguments)},brighten:function(){return this._applyModification(xR,arguments)},darken:function(){return this._applyModification(wR,arguments)},desaturate:function(){return this._applyModification(vR,arguments)},saturate:function(){return this._applyModification(bR,arguments)},greyscale:function(){return this._applyModification(TR,arguments)},spin:function(){return this._applyModification(ER,arguments)},_applyCombination:function(n,e){return n.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(OR,arguments)},complement:function(){return this._applyCombination(_R,arguments)},monochromatic:function(){return this._applyCombination(RR,arguments)},splitcomplement:function(){return this._applyCombination(AR,arguments)},triad:function(){return this._applyCombination(Dv,[3])},tetrad:function(){return this._applyCombination(Dv,[4])}},nt.fromRatio=function(n,e){if(mu(n)=="object"){var i={};for(var o in n)n.hasOwnProperty(o)&&(i[o]=o==="a"?n[o]:Ko(n[o]));n=i}return nt(n,e)},nt.equals=function(n,e){return!(!n||!e)&&nt(n).toRgbString()==nt(e).toRgbString()},nt.random=function(){return nt.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},nt.mix=function(n,e,i){i=i===0?0:i||50;var o=nt(n).toRgb(),l=nt(e).toRgb(),c=i/100;return nt({r:(l.r-o.r)*c+o.r,g:(l.g-o.g)*c+o.g,b:(l.b-o.b)*c+o.b,a:(l.a-o.a)*c+o.a})},nt.readability=function(n,e){var i=nt(n),o=nt(e);return(Math.max(i.getLuminance(),o.getLuminance())+.05)/(Math.min(i.getLuminance(),o.getLuminance())+.05)},nt.isReadable=function(n,e,i){var o,l,c=nt.readability(n,e);switch(l=!1,(o=(function(f){var h,p;return h=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(f.size||"small").toLowerCase(),h!=="AA"&&h!=="AAA"&&(h="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:h,size:p}})(i)).level+o.size){case"AAsmall":case"AAAlarge":l=c>=4.5;break;case"AAlarge":l=c>=3;break;case"AAAsmall":l=c>=7}return l},nt.mostReadable=function(n,e,i){var o,l,c,f,h=null,p=0;l=(i=i||{}).includeFallbackColors,c=i.level,f=i.size;for(var m=0;m<e.length;m++)(o=nt.readability(n,e[m]))>p&&(p=o,h=nt(e[m]));return nt.isReadable(n,h,{level:c,size:f})||!l?h:(i.includeFallbackColors=!1,nt.mostReadable(n,["#fff","#000"],i))};var Jd=nt.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},CR=nt.hexNames=(function(n){var e={};for(var i in n)n.hasOwnProperty(i)&&(e[n[i]]=i);return e})(Jd);function xT(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function It(n,e){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(n)&&(n="100%");var i=(function(o){return typeof o=="string"&&o.indexOf("%")!=-1})(n);return n=Math.min(e,Math.max(0,parseFloat(n))),i&&(n=parseInt(n*e,10)/100),Math.abs(n-e)<1e-6?1:n%e/parseFloat(e)}function Mu(n){return Math.min(1,Math.max(0,n))}function je(n){return parseInt(n,16)}function hn(n){return n.length==1?"0"+n:""+n}function Ko(n){return n<=1&&(n=100*n+"%"),n}function wT(n){return Math.round(255*parseFloat(n)).toString(16)}function Mv(n){return je(n)/255}var Ua,Xl,Kl,cn=(Xl="[\\s|\\(]+("+(Ua="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ua+")[,|\\s]+("+Ua+")\\s*\\)?",Kl="[\\s|\\(]+("+Ua+")[,|\\s]+("+Ua+")[,|\\s]+("+Ua+")[,|\\s]+("+Ua+")\\s*\\)?",{CSS_UNIT:new RegExp(Ua),rgb:new RegExp("rgb"+Xl),rgba:new RegExp("rgba"+Kl),hsl:new RegExp("hsl"+Xl),hsla:new RegExp("hsla"+Kl),hsv:new RegExp("hsv"+Xl),hsva:new RegExp("hsva"+Kl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function ta(n){return!!cn.CSS_UNIT.exec(n)}var DR=function(n,e){var i=(typeof n=="string"?parseInt(n):n)||0;if(i>=-5&&i<=5){var o=i,l=parseFloat(e),c=l+o*(l/5)*-1;return(c==0||c<=Number.EPSILON)&&(c=.1),{animationPeriod:c+"s"}}return{animationPeriod:e}},MR=function(n,e){var i=n||{},o="";switch(e){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var l={};if(i.fontSize){var c=i.fontSize;l=(function(f,h){var p={};for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&h.indexOf(m)<0&&(p[m]=f[m]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(m=Object.getOwnPropertySymbols(f);g<m.length;g++)h.indexOf(m[g])<0&&Object.prototype.propertyIsEnumerable.call(f,m[g])&&(p[m[g]]=f[m[g]])}return p})(i,["fontSize"]),o=c}return{fontSize:o,styles:l}},kR={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},PR=function(n){var e=n.className,i=n.text,o=n.textColor,l=n.staticText,c=n.style;return i?Y.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(e||"").trim(),style:dn(dn(dn({},l&&kR),o&&{color:o,mixBlendMode:"unset"}),c&&c)},typeof i=="string"&&i.length?i:"loading"):null},ET="rgb(50, 205, 50)";function NR(n,e){if(e===void 0&&(e=0),n.length===0)throw new Error("Input array cannot be empty!");var i=[];return(function o(l,c){return c===void 0&&(c=0),i.push.apply(i,l),i.length<c&&o(i,c),i.slice(0,c)})(n,e)}re(`.atom-rli-bounding-box {
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
}`);nt(ET).toRgb();Array.from({length:4},(function(n,e){return"--atom-phase".concat(e+1,"-rgb")}));re(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--commet-phase".concat(e+1,"-color")}));re(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--OP-annulus-phase".concat(e+1,"-color")}));function bd(n){return n&&n.Math===Math&&n}re(`.OP-dotted-rli-bounding-box {
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
}`);bd(typeof window=="object"&&window)||bd(typeof self=="object"&&self)||bd(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(n,e){return"--OP-dotted-phase".concat(e+1,"-color")}));re(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--OP-spokes-phase".concat(e+1,"-color")}));re(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--OP-annulus-dual-sectors-phase".concat(e+1,"-color")}));re(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return["--OP-annulus-track-phase".concat(e+1,"-color"),"--OP-annulus-sector-phase".concat(e+1,"-color")]}));re(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--four-square-phase".concat(e+1,"-color")}));re(`.mosaic-rli-bounding-box {
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
}`);var xr=Array.from({length:4},(function(n,e){return"--mosaic-phase".concat(e+1,"-color")})),kv=function(n){var e,i=MR(n?.style,n?.size),o=i.styles,l=i.fontSize,c=n?.easing,f=DR(n?.speedPlus,"1.5s").animationPeriod,h=Math.round(parseFloat(f)/9*100)/100;h+="s";var p=(function(m){var g={};if(m instanceof Array){for(var y=NR(m,xr.length),T=0;T<y.length&&!(T>=4);T++)g[xr[T]]=y[T];return g}try{if(typeof m!="string")throw new Error("Color String expected");for(var w=0;w<xr.length;w++)g[xr[w]]=m}catch(_){for(_ instanceof Error?console.warn("[".concat(_.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m)," received in <Mosaic /> indicator cannot be processed. Using default instead!")),w=0;w<xr.length;w++)g[xr[w]]=ET}return g})((e=n?.color)!==null&&e!==void 0?e:"");return Y.createElement("span",{className:"rli-d-i-b  mosaic-rli-bounding-box",style:dn(dn(dn(dn(dn({},l&&{fontSize:l}),f&&{"--rli-animation-duration":f}),c&&{"--rli-animation-function":c}),p),o),role:"status","aria-live":"polite","aria-label":"Loading"},Y.createElement("span",{className:"rli-d-i-b mosaic-indicator",style:dn({},h&&{"--mosaic-skip-interval":h})},Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube1"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube2"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube3"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube4"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube5"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube6"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube7"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube8"}),Y.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube9"})),Y.createElement(PR,{staticText:!0,text:n?.text,textColor:n?.textColor}))};re(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--riple-phase".concat(e+1,"-color")}));re(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--TD-pulsate-phase".concat(e+1,"-color")}));re(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--TD-brick-stack-phase".concat(e+1,"-color")}));re(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--TD-bob-phase".concat(e+1,"-color")}));re(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--TD-bounce-phase".concat(e+1,"-color")}));re(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--shape-phase".concat(e+1,"-color")}));re(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--trophySpin-phase".concat(e+1,"-color")}));re(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--slab-phase".concat(e+1,"-color")}));re(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},(function(n,e){return"--life-line-phase".concat(e+1,"-color")}));function IR({onUploadFile:n,onUploadImage:e,isLoading:i}){const o=dh(),[l,c]=R.useState(F.jsx(py,{size:48,color:"white",style:{position:"absolute"}})),[f,h]=R.useState(F.jsx(py,{size:48,color:"white",style:{position:"absolute"}})),[p,m]=R.useState(!1),[g,y]=R.useState(!1);async function T(_){c(F.jsx(kv,{color:"white",size:"medium",text:"",textColor:"",style:{alignSelf:"center"}}));const A=await L2(_,c,n);A&&m(!0),A&&g&&o("/viewer")}async function w(_){h(F.jsx(kv,{color:"white",size:"medium",text:"",textColor:"",style:{alignSelf:"center"}}));const A=await U2(_,h,e);A&&y(!0),A&&p&&o("/viewer")}return F.jsxs(ns.div,{className:"container",initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.7},children:[F.jsx("div",{className:"divisor"}),F.jsxs("div",{className:"collum",children:[F.jsx("h2",{children:"Insira o modelo da construção"}),F.jsxs(ns.div,{whileHover:{scale:1.03},whileTap:{scale:.97},className:"select-box",children:[F.jsx("label",{htmlFor:"file_upload"}),F.jsx("input",{type:"file",id:"file_upload",onChange:T}),F.jsx("div",{className:"icon-container",children:l})]})]}),F.jsx("div",{className:"divisor"}),F.jsxs("div",{className:"collum",children:[F.jsx("h2",{children:"Insira a foto da construção"}),F.jsxs(ns.div,{whileHover:{scale:1.03},whileTap:{scale:.97},className:"select-box",children:[F.jsx("label",{htmlFor:"img_upload"}),F.jsx("input",{type:"file",id:"img_upload",onChange:w}),F.jsx("div",{className:"icon-container",children:f})]})]}),F.jsx("div",{className:"divisor"})]})}function LR({urn:n,imageUrl:e,screenshotUrl:i,setScreenshotUrl:o}){const l=R.useRef(null),[c,f]=R.useState(null),[h,p]=R.useState(!1);let m=null;return R.useEffect(()=>{const g={env:"AutodeskProduction",getAccessToken(y,T){fetch("https://pii-6-sem.onrender.com/api/token").then(async w=>{const _=await w.text();try{const A=JSON.parse(_);A.access_token?y(A.access_token,A.expires_in):(console.error("Token inválido:",A),T&&T("Token inválido"))}catch{console.error("Resposta inesperada do servidor:",_),T&&T("Resposta inesperada do servidor")}})}};return Autodesk.Viewing.Initializer(g,()=>{m=new Autodesk.Viewing.GuiViewer3D(l.current),m.start(),console.log("Viewer inicializado!"),n&&Autodesk.Viewing.Document.load("urn:"+n,y=>{const T=y.getRoot().getDefaultGeometry();m.loadDocumentNode(y,T).then(()=>{console.log("Modelo carregado com sucesso!"),setTimeout(()=>{m.getScreenShot(800,600,async w=>{if(o(w),console.log("Screenshot capturado!"),e){p(!0);try{const _=new FormData,A=await fetch(e).then(U=>U.blob()),k=await fetch(w).then(U=>U.blob());console.log("imagem um: ",A," imagem dois: ",k),_.append("img1",A,"imagem1.jpg"),_.append("img2",k,"imagem2.jpg");const L=await(await fetch("https://pii-6-sem.onrender.com/api/compare",{method:"POST",body:_})).json();f(L.similarity),console.log("Resultado da comparação:",L.similarity)}catch(_){console.error("Erro ao comparar imagens:",_)}finally{p(!1)}}else console.warn("Nenhuma imagem enviada para comparar.")})},2e3)})},y=>console.error("Erro ao carregar documento:",y))}),()=>m&&m.finish()},[n]),F.jsxs("div",{style:{textAlign:"center"},children:[F.jsx("div",{className:"viewer-container",style:{height:"600px",border:"1px solid #ccc",borderRadius:"10px",overflow:"hidden"},children:F.jsx("div",{ref:l,className:"viewer",style:{height:"100%",width:"100%"}})}),e&&F.jsxs("div",{style:{marginTop:"25px"},children:[F.jsx("h4",{children:"Imagem enviada:"}),F.jsx("img",{src:e,alt:"Imagem enviada",style:{maxWidth:"400px",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0.3)"}})]}),i&&F.jsxs("div",{style:{marginTop:"25px"},children:[F.jsx("h4",{children:"Screenshot automático do modelo:"}),F.jsx("img",{src:i,alt:"Screenshot do modelo",style:{maxWidth:"500px",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0.3)"}})]}),h&&F.jsxs("div",{style:{marginTop:"30px"},children:[F.jsx("h4",{children:"Comparando imagens..."}),F.jsx("div",{className:"loader",style:{border:"5px solid #f3f3f3",borderTop:"5px solid #4caf50",borderRadius:"50%",width:"40px",height:"40px",margin:"15px auto",animation:"spin 1s linear infinite"}}),F.jsx("style",{children:`@keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }`})]}),c&&F.jsxs("div",{style:{marginTop:"40px"},children:[F.jsx("h3",{children:"Similaridade entre as imagens"}),F.jsx("div",{style:{width:"400px",height:"30px",borderRadius:"10px",background:"#ddd",margin:"0 auto",overflow:"hidden",position:"relative"},children:F.jsx("div",{style:{width:`${c.replace("%","")}%`,height:"100%",background:"linear-gradient(90deg, #4caf50, #8bc34a)",color:"white",fontWeight:"bold",lineHeight:"30px",transition:"width 1s ease-in-out"},children:c})})]})]})}const UR=()=>{};var Pv={};/**
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
 */const _T=function(n){const e=[];let i=0;for(let o=0;o<n.length;o++){let l=n.charCodeAt(o);l<128?e[i++]=l:l<2048?(e[i++]=l>>6|192,e[i++]=l&63|128):(l&64512)===55296&&o+1<n.length&&(n.charCodeAt(o+1)&64512)===56320?(l=65536+((l&1023)<<10)+(n.charCodeAt(++o)&1023),e[i++]=l>>18|240,e[i++]=l>>12&63|128,e[i++]=l>>6&63|128,e[i++]=l&63|128):(e[i++]=l>>12|224,e[i++]=l>>6&63|128,e[i++]=l&63|128)}return e},zR=function(n){const e=[];let i=0,o=0;for(;i<n.length;){const l=n[i++];if(l<128)e[o++]=String.fromCharCode(l);else if(l>191&&l<224){const c=n[i++];e[o++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=n[i++],f=n[i++],h=n[i++],p=((l&7)<<18|(c&63)<<12|(f&63)<<6|h&63)-65536;e[o++]=String.fromCharCode(55296+(p>>10)),e[o++]=String.fromCharCode(56320+(p&1023))}else{const c=n[i++],f=n[i++];e[o++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return e.join("")},AT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let l=0;l<n.length;l+=3){const c=n[l],f=l+1<n.length,h=f?n[l+1]:0,p=l+2<n.length,m=p?n[l+2]:0,g=c>>2,y=(c&3)<<4|h>>4;let T=(h&15)<<2|m>>6,w=m&63;p||(w=64,f||(T=64)),o.push(i[g],i[y],i[T],i[w])}return o.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_T(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let l=0;l<n.length;){const c=i[n.charAt(l++)],h=l<n.length?i[n.charAt(l)]:0;++l;const m=l<n.length?i[n.charAt(l)]:64;++l;const y=l<n.length?i[n.charAt(l)]:64;if(++l,c==null||h==null||m==null||y==null)throw new VR;const T=c<<2|h>>4;if(o.push(T),m!==64){const w=h<<4&240|m>>2;if(o.push(w),y!==64){const _=m<<6&192|y;o.push(_)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class VR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BR=function(n){const e=_T(n);return AT.encodeByteArray(e,!0)},OT=function(n){return BR(n).replace(/\./g,"")},RT=function(n){try{return AT.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function HR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jR=()=>HR().__FIREBASE_DEFAULTS__,qR=()=>{if(typeof process>"u"||typeof Pv>"u")return;const n=Pv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},GR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&RT(n[1]);return e&&JSON.parse(e)},$h=()=>{try{return UR()||jR()||qR()||GR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},YR=n=>$h()?.emulatorHosts?.[n],CT=()=>$h()?.config,DT=n=>$h()?.[`_${n}`];/**
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
 */class FR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,o)=>{i?this.reject(i):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,o))}}}/**
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
 */function ku(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function XR(n){return(await fetch(n,{credentials:"include"})).ok}const as={};function KR(){const n={prod:[],emulator:[]};for(const e of Object.keys(as))as[e]?n.emulator.push(e):n.prod.push(e);return n}function $R(n){let e=document.getElementById(n),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),i=!0),{created:i,element:e}}let Nv=!1;function ZR(n,e){if(typeof window>"u"||typeof document>"u"||!ku(window.location.host)||as[n]===e||as[n]||Nv)return;as[n]=e;function i(T){return`__firebase__banner__${T}`}const o="__firebase__banner",c=KR().prod.length>0;function f(){const T=document.getElementById(o);T&&T.remove()}function h(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,w){T.setAttribute("width","24"),T.setAttribute("id",w),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function m(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Nv=!0,f()},T}function g(T,w){T.setAttribute("id",w),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function y(){const T=$R(o),w=i("text"),_=document.getElementById(w)||document.createElement("span"),A=i("learnmore"),k=document.getElementById(A)||document.createElement("a"),D=i("preprendIcon"),L=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const U=T.element;h(U),g(k,A);const K=m();p(L,D),U.append(L,_,k,K),document.body.appendChild(U)}c?(_.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function WR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function JR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tC(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kT(){try{return typeof indexedDB=="object"}catch{return!1}}function PT(){return new Promise((n,e)=>{try{let i=!0;const o="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(o);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(o),n(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{e(l.error?.message||"")}}catch(i){e(i)}})}function eC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const nC="FirebaseError";class Nn extends Error{constructor(e,i,o){super(i),this.code=e,this.customData=o,this.name=nC,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,i,o){this.service=e,this.serviceName=i,this.errors=o}create(e,...i){const o=i[0]||{},l=`${this.service}/${e}`,c=this.errors[e],f=c?aC(c,o):"Error",h=`${this.serviceName}: ${f} (${l}).`;return new Nn(l,h,o)}}function aC(n,e){return n.replace(iC,(i,o)=>{const l=e[o];return l!=null?String(l):`<${o}?>`})}const iC=/\{\$([^}]+)}/g;function rC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ai(n,e){if(n===e)return!0;const i=Object.keys(n),o=Object.keys(e);for(const l of i){if(!o.includes(l))return!1;const c=n[l],f=e[l];if(Iv(c)&&Iv(f)){if(!Ai(c,f))return!1}else if(c!==f)return!1}for(const l of o)if(!i.includes(l))return!1;return!0}function Iv(n){return n!==null&&typeof n=="object"}/**
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
 */function xs(n){const e=[];for(const[i,o]of Object.entries(n))Array.isArray(o)?o.forEach(l=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(o));return e.length?"&"+e.join("&"):""}function $o(n){const e={};return n.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[l,c]=o.split("=");e[decodeURIComponent(l)]=decodeURIComponent(c)}}),e}function Zo(n){const e=n.indexOf("?");if(!e)return"";const i=n.indexOf("#",e);return n.substring(e,i>0?i:void 0)}function oC(n,e){const i=new sC(n,e);return i.subscribe.bind(i)}class sC{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(o=>{this.error(o)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,o){let l;if(e===void 0&&i===void 0&&o===void 0)throw new Error("Missing Observer.");lC(e,["next","error","complete"])?l=e:l={next:e,error:i,complete:o},l.next===void 0&&(l.next=Td),l.error===void 0&&(l.error=Td),l.complete===void 0&&(l.complete=Td);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lC(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function Td(){}/**
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
 */const uC=1e3,cC=2,fC=14400*1e3,dC=.5;function Lv(n,e=uC,i=cC){const o=e*Math.pow(i,n),l=Math.round(dC*o*(Math.random()-.5)*2);return Math.min(fC,o+l)}/**
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
 */function In(n){return n&&n._delegate?n._delegate:n}class kn{constructor(e,i,o){this.name=e,this.instanceFactory=i,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ti="[DEFAULT]";/**
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
 */class hC{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const o=new FR;if(this.instancesDeferred.set(i,o),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&o.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e?.identifier),o=e?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mC(e))try{this.getOrInitializeService({instanceIdentifier:Ti})}catch{}for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});o.resolve(c)}catch{}}}}clearInstance(e=Ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ti){return this.instances.has(e)}getOptions(e=Ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:o,options:i});for(const[c,f]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(c);o===h&&f.resolve(l)}return l}onInit(e,i){const o=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(o)??new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,i){const o=this.onInitCallbacks.get(i);if(o)for(const l of o)try{l(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:pC(e),options:i}),this.instances.set(e,o),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=Ti){return this.component?this.component.multipleInstances?e:Ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pC(n){return n===Ti?void 0:n}function mC(n){return n.instantiationMode==="EAGER"}/**
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
 */class gC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new hC(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ct;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ct||(Ct={}));const yC={debug:Ct.DEBUG,verbose:Ct.VERBOSE,info:Ct.INFO,warn:Ct.WARN,error:Ct.ERROR,silent:Ct.SILENT},vC=Ct.INFO,bC={[Ct.DEBUG]:"log",[Ct.VERBOSE]:"log",[Ct.INFO]:"info",[Ct.WARN]:"warn",[Ct.ERROR]:"error"},TC=(n,e,...i)=>{if(e<n.logLevel)return;const o=new Date().toISOString(),l=bC[e];if(l)console[l](`[${o}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zh{constructor(e){this.name=e,this._logLevel=vC,this._logHandler=TC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ct))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ct.DEBUG,...e),this._logHandler(this,Ct.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ct.VERBOSE,...e),this._logHandler(this,Ct.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ct.INFO,...e),this._logHandler(this,Ct.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ct.WARN,...e),this._logHandler(this,Ct.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ct.ERROR,...e),this._logHandler(this,Ct.ERROR,...e)}}const SC=(n,e)=>e.some(i=>n instanceof i);let Uv,zv;function xC(){return Uv||(Uv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wC(){return zv||(zv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const NT=new WeakMap,th=new WeakMap,IT=new WeakMap,Sd=new WeakMap,Qh=new WeakMap;function EC(n){const e=new Promise((i,o)=>{const l=()=>{n.removeEventListener("success",c),n.removeEventListener("error",f)},c=()=>{i(Ga(n.result)),l()},f=()=>{o(n.error),l()};n.addEventListener("success",c),n.addEventListener("error",f)});return e.then(i=>{i instanceof IDBCursor&&NT.set(i,n)}).catch(()=>{}),Qh.set(e,n),e}function _C(n){if(th.has(n))return;const e=new Promise((i,o)=>{const l=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",f),n.removeEventListener("abort",f)},c=()=>{i(),l()},f=()=>{o(n.error||new DOMException("AbortError","AbortError")),l()};n.addEventListener("complete",c),n.addEventListener("error",f),n.addEventListener("abort",f)});th.set(n,e)}let eh={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return th.get(n);if(e==="objectStoreNames")return n.objectStoreNames||IT.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Ga(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function AC(n){eh=n(eh)}function OC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const o=n.call(xd(this),e,...i);return IT.set(o,e.sort?e.sort():[e]),Ga(o)}:wC().includes(n)?function(...e){return n.apply(xd(this),e),Ga(NT.get(this))}:function(...e){return Ga(n.apply(xd(this),e))}}function RC(n){return typeof n=="function"?OC(n):(n instanceof IDBTransaction&&_C(n),SC(n,xC())?new Proxy(n,eh):n)}function Ga(n){if(n instanceof IDBRequest)return EC(n);if(Sd.has(n))return Sd.get(n);const e=RC(n);return e!==n&&(Sd.set(n,e),Qh.set(e,n)),e}const xd=n=>Qh.get(n);function LT(n,e,{blocked:i,upgrade:o,blocking:l,terminated:c}={}){const f=indexedDB.open(n,e),h=Ga(f);return o&&f.addEventListener("upgradeneeded",p=>{o(Ga(f.result),p.oldVersion,p.newVersion,Ga(f.transaction),p)}),i&&f.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),h.then(p=>{c&&p.addEventListener("close",()=>c()),l&&p.addEventListener("versionchange",m=>l(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const CC=["get","getKey","getAll","getAllKeys","count"],DC=["put","add","delete","clear"],wd=new Map;function Vv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wd.get(e))return wd.get(e);const i=e.replace(/FromIndex$/,""),o=e!==i,l=DC.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(l||CC.includes(i)))return;const c=async function(f,...h){const p=this.transaction(f,l?"readwrite":"readonly");let m=p.store;return o&&(m=m.index(h.shift())),(await Promise.all([m[i](...h),l&&p.done]))[0]};return wd.set(e,c),c}AC(n=>({...n,get:(e,i,o)=>Vv(e,i)||n.get(e,i,o),has:(e,i)=>!!Vv(e,i)||n.has(e,i)}));/**
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
 */class MC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(kC(i)){const o=i.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(i=>i).join(" ")}}function kC(n){return n.getComponent()?.type==="VERSION"}const nh="@firebase/app",Bv="0.14.4";/**
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
 */const sa=new Zh("@firebase/app"),PC="@firebase/app-compat",NC="@firebase/analytics-compat",IC="@firebase/analytics",LC="@firebase/app-check-compat",UC="@firebase/app-check",zC="@firebase/auth",VC="@firebase/auth-compat",BC="@firebase/database",HC="@firebase/data-connect",jC="@firebase/database-compat",qC="@firebase/functions",GC="@firebase/functions-compat",YC="@firebase/installations",FC="@firebase/installations-compat",XC="@firebase/messaging",KC="@firebase/messaging-compat",$C="@firebase/performance",ZC="@firebase/performance-compat",QC="@firebase/remote-config",WC="@firebase/remote-config-compat",JC="@firebase/storage",tD="@firebase/storage-compat",eD="@firebase/firestore",nD="@firebase/ai",aD="@firebase/firestore-compat",iD="firebase",rD="12.4.0";/**
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
 */const ah="[DEFAULT]",oD={[nh]:"fire-core",[PC]:"fire-core-compat",[IC]:"fire-analytics",[NC]:"fire-analytics-compat",[UC]:"fire-app-check",[LC]:"fire-app-check-compat",[zC]:"fire-auth",[VC]:"fire-auth-compat",[BC]:"fire-rtdb",[HC]:"fire-data-connect",[jC]:"fire-rtdb-compat",[qC]:"fire-fn",[GC]:"fire-fn-compat",[YC]:"fire-iid",[FC]:"fire-iid-compat",[XC]:"fire-fcm",[KC]:"fire-fcm-compat",[$C]:"fire-perf",[ZC]:"fire-perf-compat",[QC]:"fire-rc",[WC]:"fire-rc-compat",[JC]:"fire-gcs",[tD]:"fire-gcs-compat",[eD]:"fire-fst",[aD]:"fire-fst-compat",[nD]:"fire-vertex","fire-js":"fire-js",[iD]:"fire-js-all"};/**
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
 */const gu=new Map,sD=new Map,ih=new Map;function Hv(n,e){try{n.container.addComponent(e)}catch(i){sa.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function la(n){const e=n.name;if(ih.has(e))return sa.debug(`There were multiple attempts to register component ${e}.`),!1;ih.set(e,n);for(const i of gu.values())Hv(i,n);for(const i of sD.values())Hv(i,n);return!0}function Hr(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function An(n){return n==null?!1:n.settings!==void 0}/**
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
 */const lD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ya=new ki("app","Firebase",lD);/**
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
 */class uD{constructor(e,i,o){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ya.create("app-deleted",{appName:this._name})}}/**
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
 */const ws=rD;function UT(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const o={name:ah,automaticDataCollectionEnabled:!0,...e},l=o.name;if(typeof l!="string"||!l)throw Ya.create("bad-app-name",{appName:String(l)});if(i||(i=CT()),!i)throw Ya.create("no-options");const c=gu.get(l);if(c){if(Ai(i,c.options)&&Ai(o,c.config))return c;throw Ya.create("duplicate-app",{appName:l})}const f=new gC(l);for(const p of ih.values())f.addComponent(p);const h=new uD(i,o,f);return gu.set(l,h),h}function zT(n=ah){const e=gu.get(n);if(!e&&n===ah&&CT())return UT();if(!e)throw Ya.create("no-app",{appName:n});return e}function Cn(n,e,i){let o=oD[n]??n;i&&(o+=`-${i}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sa.warn(f.join(" "));return}la(new kn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const cD="firebase-heartbeat-database",fD=1,ds="firebase-heartbeat-store";let Ed=null;function VT(){return Ed||(Ed=LT(cD,fD,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ds)}catch(i){console.warn(i)}}}}).catch(n=>{throw Ya.create("idb-open",{originalErrorMessage:n.message})})),Ed}async function dD(n){try{const i=(await VT()).transaction(ds),o=await i.objectStore(ds).get(BT(n));return await i.done,o}catch(e){if(e instanceof Nn)sa.warn(e.message);else{const i=Ya.create("idb-get",{originalErrorMessage:e?.message});sa.warn(i.message)}}}async function jv(n,e){try{const o=(await VT()).transaction(ds,"readwrite");await o.objectStore(ds).put(e,BT(n)),await o.done}catch(i){if(i instanceof Nn)sa.warn(i.message);else{const o=Ya.create("idb-set",{originalErrorMessage:i?.message});sa.warn(o.message)}}}function BT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const hD=1024,pD=30;class mD{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new yD(i),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=qv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>pD){const l=vD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){sa.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qv(),{heartbeatsToSend:i,unsentEntries:o}=gD(this._heartbeatsCache.heartbeats),l=OT(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(e){return sa.warn(e),""}}}function qv(){return new Date().toISOString().substring(0,10)}function gD(n,e=hD){const i=[];let o=n.slice();for(const l of n){const c=i.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),Gv(i)>e){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),Gv(i)>e){i.pop();break}o=o.slice(1)}return{heartbeatsToSend:i,unsentEntries:o}}class yD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kT()?PT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await dD(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const o=await this.read();return jv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const o=await this.read();return jv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Gv(n){return OT(JSON.stringify({version:2,heartbeats:n})).length}function vD(n){if(n.length===0)return-1;let e=0,i=n[0].date;for(let o=1;o<n.length;o++)n[o].date<i&&(i=n[o].date,e=o);return e}/**
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
 */function bD(n){la(new kn("platform-logger",e=>new MC(e),"PRIVATE")),la(new kn("heartbeat",e=>new mD(e),"PRIVATE")),Cn(nh,Bv,n),Cn(nh,Bv,"esm2020"),Cn("fire-js","")}bD("");function HT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TD=HT,jT=new ki("auth","Firebase",HT());/**
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
 */const yu=new Zh("@firebase/auth");function SD(n,...e){yu.logLevel<=Ct.WARN&&yu.warn(`Auth (${ws}): ${n}`,...e)}function au(n,...e){yu.logLevel<=Ct.ERROR&&yu.error(`Auth (${ws}): ${n}`,...e)}/**
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
 */function gn(n,...e){throw Wh(n,...e)}function Dn(n,...e){return Wh(n,...e)}function qT(n,e,i){const o={...TD(),[e]:i};return new ki("auth","Firebase",o).create(e,{appName:n.name})}function Fa(n){return qT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wh(n,...e){if(typeof n!="string"){const i=e[0],o=[...e.slice(1)];return o[0]&&(o[0].appName=n.name),n._errorFactory.create(i,...o)}return jT.create(n,...e)}function ut(n,e,...i){if(!n)throw Wh(e,...i)}function ea(n){const e="INTERNAL ASSERTION FAILED: "+n;throw au(e),new Error(e)}function ua(n,e){n||ea(e)}/**
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
 */function rh(){return typeof self<"u"&&self.location?.href||""}function xD(){return Yv()==="http:"||Yv()==="https:"}function Yv(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function wD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xD()||MT()||"connection"in navigator)?navigator.onLine:!0}function ED(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Es{constructor(e,i){this.shortDelay=e,this.longDelay=i,ua(i>e,"Short delay should be less than long delay!"),this.isMobile=QR()||JR()}get(){return wD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jh(n,e){ua(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class GT{static initialize(e,i,o){this.fetchImpl=e,i&&(this.headersImpl=i),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ea("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ea("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ea("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _D={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const AD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],OD=new Es(3e4,6e4);function Pi(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Za(n,e,i,o,l={}){return YT(n,l,async()=>{let c={},f={};o&&(e==="GET"?f=o:c={body:JSON.stringify(o)});const h=xs({key:n.config.apiKey,...f}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m={method:e,headers:p,...c};return WR()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&ku(n.emulatorConfig.host)&&(m.credentials="include"),GT.fetch()(await FT(n,n.config.apiHost,i,h),m)})}async function YT(n,e,i){n._canInitEmulator=!1;const o={..._D,...e};try{const l=new CD(n),c=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw $l(n,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const h=c.ok?f.errorMessage:f.error.message,[p,m]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw $l(n,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw $l(n,"email-already-in-use",f);if(p==="USER_DISABLED")throw $l(n,"user-disabled",f);const g=o[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw qT(n,g,m);gn(n,g)}}catch(l){if(l instanceof Nn)throw l;gn(n,"network-request-failed",{message:String(l)})}}async function Pu(n,e,i,o,l={}){const c=await Za(n,e,i,o,l);return"mfaPendingCredential"in c&&gn(n,"multi-factor-auth-required",{_serverResponse:c}),c}async function FT(n,e,i,o){const l=`${e}${i}?${o}`,c=n,f=c.config.emulator?Jh(n.config,l):`${n.config.apiScheme}://${l}`;return AD.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}function RD(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,o)=>{this.timer=setTimeout(()=>o(Dn(this.auth,"network-request-failed")),OD.get())})}}function $l(n,e,i){const o={appName:n.name};i.email&&(o.email=i.email),i.phoneNumber&&(o.phoneNumber=i.phoneNumber);const l=Dn(n,e,o);return l.customData._tokenResponse=i,l}function Fv(n){return n!==void 0&&n.enterprise!==void 0}class DD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return RD(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function MD(n,e){return Za(n,"GET","/v2/recaptchaConfig",Pi(n,e))}/**
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
 */async function kD(n,e){return Za(n,"POST","/v1/accounts:delete",e)}async function vu(n,e){return Za(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function is(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PD(n,e=!1){const i=In(n),o=await i.getIdToken(e),l=tp(o);ut(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,f=c?.sign_in_provider;return{claims:l,token:o,authTime:is(_d(l.auth_time)),issuedAtTime:is(_d(l.iat)),expirationTime:is(_d(l.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function _d(n){return Number(n)*1e3}function tp(n){const[e,i,o]=n.split(".");if(e===void 0||i===void 0||o===void 0)return au("JWT malformed, contained fewer than 3 sections"),null;try{const l=RT(i);return l?JSON.parse(l):(au("Failed to decode base64 JWT payload"),null)}catch(l){return au("Caught error parsing JWT payload as JSON",l?.toString()),null}}function Xv(n){const e=tp(n);return ut(e,"internal-error"),ut(typeof e.exp<"u","internal-error"),ut(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hs(n,e,i=!1){if(i)return e;try{return await e}catch(o){throw o instanceof Nn&&ND(o)&&n.auth.currentUser===n&&await n.auth.signOut(),o}}function ND({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ID{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class oh{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=is(this.lastLoginAt),this.creationTime=is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bu(n){const e=n.auth,i=await n.getIdToken(),o=await hs(n,vu(e,{idToken:i}));ut(o?.users.length,e,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=l.providerUserInfo?.length?XT(l.providerUserInfo):[],f=UD(n.providerData,c),h=n.isAnonymous,p=!(n.email&&l.passwordHash)&&!f?.length,m=h?p:!1,g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new oh(l.createdAt,l.lastLoginAt),isAnonymous:m};Object.assign(n,g)}async function LD(n){const e=In(n);await bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UD(n,e){return[...n.filter(o=>!e.some(l=>l.providerId===o.providerId)),...e]}function XT(n){return n.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
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
 */async function zD(n,e){const i=await YT(n,{},async()=>{const o=xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=n.config,f=await FT(n,l,"/v1/token",`key=${c}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:h,body:o};return n.emulatorConfig&&ku(n.emulatorConfig.host)&&(p.credentials="include"),GT.fetch()(f,p)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function VD(n,e){return Za(n,"POST","/v2/accounts:revokeToken",Pi(n,e))}/**
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
 */class Dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ut(e.idToken,"internal-error"),ut(typeof e.idToken<"u","internal-error"),ut(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){ut(e.length!==0,"internal-error");const i=Xv(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ut(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:o,refreshToken:l,expiresIn:c}=await zD(e,i);this.updateTokensAndExpiration(o,l,Number(c))}updateTokensAndExpiration(e,i,o){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(e,i){const{refreshToken:o,accessToken:l,expirationTime:c}=i,f=new Dr;return o&&(ut(typeof o=="string","internal-error",{appName:e}),f.refreshToken=o),l&&(ut(typeof l=="string","internal-error",{appName:e}),f.accessToken=l),c&&(ut(typeof c=="number","internal-error",{appName:e}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return ea("not implemented")}}/**
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
 */function za(n,e){ut(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pn{constructor({uid:e,auth:i,stsTokenManager:o,...l}){this.providerId="firebase",this.proactiveRefresh=new ID(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new oh(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const i=await hs(this,this.stsTokenManager.getToken(this.auth,e));return ut(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return PD(this,e)}reload(){return LD(this)}_assign(e){this!==e&&(ut(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new pn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){ut(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let o=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),o=!0),i&&await bu(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(Fa(this.auth));const e=await this.getIdToken();return await hs(this,kD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const o=i.displayName??void 0,l=i.email??void 0,c=i.phoneNumber??void 0,f=i.photoURL??void 0,h=i.tenantId??void 0,p=i._redirectEventId??void 0,m=i.createdAt??void 0,g=i.lastLoginAt??void 0,{uid:y,emailVerified:T,isAnonymous:w,providerData:_,stsTokenManager:A}=i;ut(y&&A,e,"internal-error");const k=Dr.fromJSON(this.name,A);ut(typeof y=="string",e,"internal-error"),za(o,e.name),za(l,e.name),ut(typeof T=="boolean",e,"internal-error"),ut(typeof w=="boolean",e,"internal-error"),za(c,e.name),za(f,e.name),za(h,e.name),za(p,e.name),za(m,e.name),za(g,e.name);const D=new pn({uid:y,auth:e,email:l,emailVerified:T,displayName:o,isAnonymous:w,photoURL:f,phoneNumber:c,tenantId:h,stsTokenManager:k,createdAt:m,lastLoginAt:g});return _&&Array.isArray(_)&&(D.providerData=_.map(L=>({...L}))),p&&(D._redirectEventId=p),D}static async _fromIdTokenResponse(e,i,o=!1){const l=new Dr;l.updateFromServerResponse(i);const c=new pn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o});return await bu(c),c}static async _fromGetAccountInfoResponse(e,i,o){const l=i.users[0];ut(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?XT(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!c?.length,h=new Dr;h.updateFromIdToken(o);const p=new pn({uid:l.localId,auth:e,stsTokenManager:h,isAnonymous:f}),m={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new oh(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(p,m),p}}/**
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
 */const Kv=new Map;function na(n){ua(n instanceof Function,"Expected a class definition");let e=Kv.get(n);return e?(ua(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kv.set(n,e),e)}/**
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
 */class KT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}KT.type="NONE";const $v=KT;/**
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
 */function iu(n,e,i){return`firebase:${n}:${e}:${i}`}class Mr{constructor(e,i,o){this.persistence=e,this.auth=i,this.userKey=o;const{config:l,name:c}=this.auth;this.fullUserKey=iu(this.userKey,l.apiKey,c),this.fullPersistenceKey=iu("persistence",l.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await vu(this.auth,{idToken:e}).catch(()=>{});return i?pn._fromGetAccountInfoResponse(this.auth,i,e):null}return pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,o="authUser"){if(!i.length)return new Mr(na($v),e,o);const l=(await Promise.all(i.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let c=l[0]||na($v);const f=iu(o,e.config.apiKey,e.name);let h=null;for(const m of i)try{const g=await m._get(f);if(g){let y;if(typeof g=="string"){const T=await vu(e,{idToken:g}).catch(()=>{});if(!T)break;y=await pn._fromGetAccountInfoResponse(e,T,g)}else y=pn._fromJSON(e,g);m!==c&&(h=y),c=m;break}}catch{}const p=l.filter(m=>m._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new Mr(c,e,o):(c=p[0],h&&await c._set(f,h.toJSON()),await Promise.all(i.map(async m=>{if(m!==c)try{await m._remove(f)}catch{}})),new Mr(c,e,o))}}/**
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
 */function Zv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(WT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($T(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tS(e))return"Blackberry";if(eS(e))return"Webos";if(ZT(e))return"Safari";if((e.includes("chrome/")||QT(e))&&!e.includes("edge/"))return"Chrome";if(JT(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=n.match(i);if(o?.length===2)return o[1]}return"Other"}function $T(n=Re()){return/firefox\//i.test(n)}function ZT(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QT(n=Re()){return/crios\//i.test(n)}function WT(n=Re()){return/iemobile/i.test(n)}function JT(n=Re()){return/android/i.test(n)}function tS(n=Re()){return/blackberry/i.test(n)}function eS(n=Re()){return/webos/i.test(n)}function ep(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function BD(n=Re()){return ep(n)&&!!window.navigator?.standalone}function HD(){return tC()&&document.documentMode===10}function nS(n=Re()){return ep(n)||JT(n)||eS(n)||tS(n)||/windows phone/i.test(n)||WT(n)}/**
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
 */function aS(n,e=[]){let i;switch(n){case"Browser":i=Zv(Re());break;case"Worker":i=`${Zv(Re())}-${n}`;break;default:i=n}const o=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${ws}/${o}`}/**
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
 */class jD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const o=c=>new Promise((f,h)=>{try{const p=e(c);f(p)}catch(p){h(p)}});o.onAbort=i,this.queue.push(o);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const o of this.queue)await o(e),o.onAbort&&i.push(o.onAbort)}catch(o){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o?.message})}}}/**
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
 */async function qD(n,e={}){return Za(n,"GET","/v2/passwordPolicy",Pi(n,e))}/**
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
 */const GD=6;class YD{constructor(e){const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??GD,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const o=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;o&&(i.meetsMinPasswordLength=e.length>=o),l&&(i.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let o;for(let l=0;l<e.length;l++)o=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(e,i,o,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class FD{constructor(e,i,o,l){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=o,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qv(this),this.idTokenSubscription=new Qv(this),this.beforeStateQueue=new jD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=na(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Mr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await vu(this,{idToken:e}),o=await pn._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(o)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(An(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,f=o?._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===f)&&h?.user&&(o=h.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ut(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await bu(e)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ED()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(Fa(this));const i=e?In(e):null;return i&&ut(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&ut(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(Fa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(Fa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(na(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qD(this),i=new YD(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,i,o){return this.registerStateListener(this.authStateSubscription,e,i,o)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,o){return this.registerStateListener(this.idTokenSubscription,e,i,o)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const o=this.onAuthStateChanged(()=>{o(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(o.tenantId=this.tenantId),await VD(this,o)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,i){const o=await this.getOrInitRedirectPersistenceManager(i);return e===null?o.removeCurrentUser():o.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&na(e)||this._popupRedirectResolver;ut(i,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[na(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,o,l){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let f=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(ut(h,this,"internal-error"),h.then(()=>{f||c(this.currentUser)}),typeof i=="function"){const p=e.addObserver(i,o,l);return()=>{f=!0,p()}}else{const p=e.addObserver(i);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ut(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(e["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(e["X-Firebase-AppCheck"]=o),e}async _getAppCheckToken(){if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&SD(`Error while retrieving App Check token: ${e.error}`),e?.token}}function jr(n){return In(n)}class Qv{constructor(e){this.auth=e,this.observer=null,this.addObserver=oC(i=>this.observer=i)}get next(){return ut(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Nu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XD(n){Nu=n}function iS(n){return Nu.loadJS(n)}function KD(){return Nu.recaptchaEnterpriseScript}function $D(){return Nu.gapiScript}function ZD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class QD{constructor(){this.enterprise=new WD}ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}class WD{ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}const JD="recaptcha-enterprise",rS="NO_RECAPTCHA";class tM{constructor(e){this.type=JD,this.auth=jr(e)}async verify(e="verify",i=!1){async function o(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(f,h)=>{MD(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new DD(p);return c.tenantId==null?c._agentRecaptchaConfig=m:c._tenantRecaptchaConfigs[c.tenantId]=m,f(m.siteKey)}}).catch(p=>{h(p)})})}function l(c,f,h){const p=window.grecaptcha;Fv(p)?p.enterprise.ready(()=>{p.enterprise.execute(c,{action:e}).then(m=>{f(m)}).catch(()=>{f(rS)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QD().execute("siteKey",{action:"verify"}):new Promise((c,f)=>{o(this.auth).then(h=>{if(!i&&Fv(window.grecaptcha))l(h,c,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=KD();p.length!==0&&(p+=h),iS(p).then(()=>{l(h,c,f)}).catch(m=>{f(m)})}}).catch(h=>{f(h)})})}}async function Wv(n,e,i,o=!1,l=!1){const c=new tM(n);let f;if(l)f=rS;else try{f=await c.verify(i)}catch{f=await c.verify(i,!0)}const h={...e};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return o?Object.assign(h,{captchaResp:f}):Object.assign(h,{captchaResponse:f}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Jv(n,e,i,o,l){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Wv(n,e,i,i==="getOobCode");return o(n,c)}else return o(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Wv(n,e,i,i==="getOobCode");return o(n,f)}else return Promise.reject(c)})}/**
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
 */function eM(n,e){const i=Hr(n,"auth");if(i.isInitialized()){const l=i.getImmediate(),c=i.getOptions();if(Ai(c,e??{}))return l;gn(l,"already-initialized")}return i.initialize({options:e})}function nM(n,e){const i=e?.persistence||[],o=(Array.isArray(i)?i:[i]).map(na);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(o,e?.popupRedirectResolver)}function aM(n,e,i){const o=jr(n);ut(/^https?:\/\//.test(e),o,"invalid-emulator-scheme");const l=!1,c=oS(e),{host:f,port:h}=iM(e),p=h===null?"":`:${h}`,m={url:`${c}//${f}${p}/`},g=Object.freeze({host:f,port:h,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!o._canInitEmulator){ut(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),ut(Ai(m,o.config.emulator)&&Ai(g,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=m,o.emulatorConfig=g,o.settings.appVerificationDisabledForTesting=!0,ku(f)?(XR(`${c}//${f}${p}`),ZR("Auth",!0)):rM()}function oS(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function iM(n){const e=oS(n),i=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!i)return{host:"",port:null};const o=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(o);if(l){const c=l[1];return{host:c,port:tb(o.substr(c.length+1))}}else{const[c,f]=o.split(":");return{host:c,port:tb(f)}}}function tb(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function rM(){function n(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class np{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return ea("not implemented")}_getIdTokenResponse(e){return ea("not implemented")}_linkToIdToken(e,i){return ea("not implemented")}_getReauthenticationResolver(e){return ea("not implemented")}}async function oM(n,e){return Za(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function sM(n,e){return Pu(n,"POST","/v1/accounts:signInWithPassword",Pi(n,e))}/**
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
 */async function lM(n,e){return Pu(n,"POST","/v1/accounts:signInWithEmailLink",Pi(n,e))}async function uM(n,e){return Pu(n,"POST","/v1/accounts:signInWithEmailLink",Pi(n,e))}/**
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
 */class ps extends np{constructor(e,i,o,l=null){super("password",o),this._email=e,this._password=i,this._tenantId=l}static _fromEmailAndPassword(e,i){return new ps(e,i,"password")}static _fromEmailAndCode(e,i,o=null){return new ps(e,i,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jv(e,i,"signInWithPassword",sM);case"emailLink":return lM(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":const o={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jv(e,o,"signUpPassword",oM);case"emailLink":return uM(e,{idToken:i,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function kr(n,e){return Pu(n,"POST","/v1/accounts:signInWithIdp",Pi(n,e))}/**
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
 */const cM="http://localhost";class Oi extends np{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new Oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):gn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:o,signInMethod:l,...c}=i;if(!o||!l)return null;const f=new Oi(o,l);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(e){const i=this.buildRequest();return kr(e,i)}_linkToIdToken(e,i){const o=this.buildRequest();return o.idToken=i,kr(e,o)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,kr(e,i)}buildRequest(){const e={requestUri:cM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=xs(i)}return e}}/**
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
 */function fM(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dM(n){const e=$o(Zo(n)).link,i=e?$o(Zo(e)).deep_link_id:null,o=$o(Zo(n)).deep_link_id;return(o?$o(Zo(o)).link:null)||o||i||e||n}class ap{constructor(e){const i=$o(Zo(e)),o=i.apiKey??null,l=i.oobCode??null,c=fM(i.mode??null);ut(o&&l&&c,"argument-error"),this.apiKey=o,this.operation=c,this.code=l,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(e){const i=dM(e);try{return new ap(i)}catch{return null}}}/**
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
 */class qr{constructor(){this.providerId=qr.PROVIDER_ID}static credential(e,i){return ps._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const o=ap.parseLink(i);return ut(o,"argument-error"),ps._fromEmailAndCode(e,o.code,o.tenantId)}}qr.PROVIDER_ID="password";qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _s extends sS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ba extends _s{constructor(){super("facebook.com")}static credential(e){return Oi._fromParams({providerId:Ba.PROVIDER_ID,signInMethod:Ba.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ba.credentialFromTaggedObject(e)}static credentialFromError(e){return Ba.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ba.credential(e.oauthAccessToken)}catch{return null}}}Ba.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ba.PROVIDER_ID="facebook.com";/**
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
 */class Ha extends _s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return Oi._fromParams({providerId:Ha.PROVIDER_ID,signInMethod:Ha.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Ha.credentialFromTaggedObject(e)}static credentialFromError(e){return Ha.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:o}=e;if(!i&&!o)return null;try{return Ha.credential(i,o)}catch{return null}}}Ha.GOOGLE_SIGN_IN_METHOD="google.com";Ha.PROVIDER_ID="google.com";/**
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
 */class ja extends _s{constructor(){super("github.com")}static credential(e){return Oi._fromParams({providerId:ja.PROVIDER_ID,signInMethod:ja.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ja.credentialFromTaggedObject(e)}static credentialFromError(e){return ja.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ja.credential(e.oauthAccessToken)}catch{return null}}}ja.GITHUB_SIGN_IN_METHOD="github.com";ja.PROVIDER_ID="github.com";/**
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
 */class qa extends _s{constructor(){super("twitter.com")}static credential(e,i){return Oi._fromParams({providerId:qa.PROVIDER_ID,signInMethod:qa.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return qa.credentialFromTaggedObject(e)}static credentialFromError(e){return qa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:o}=e;if(!i||!o)return null;try{return qa.credential(i,o)}catch{return null}}}qa.TWITTER_SIGN_IN_METHOD="twitter.com";qa.PROVIDER_ID="twitter.com";/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,o,l=!1){const c=await pn._fromIdTokenResponse(e,o,l),f=eb(o);return new Lr({user:c,providerId:f,_tokenResponse:o,operationType:i})}static async _forOperation(e,i,o){await e._updateTokensIfNecessary(o,!0);const l=eb(o);return new Lr({user:e,providerId:l,_tokenResponse:o,operationType:i})}}function eb(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Tu extends Nn{constructor(e,i,o,l){super(i.code,i.message),this.operationType=o,this.user=l,Object.setPrototypeOf(this,Tu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(e,i,o,l){return new Tu(e,i,o,l)}}function lS(n,e,i,o){return(e==="reauthenticate"?i._getReauthenticationResolver(n):i._getIdTokenResponse(n)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Tu._fromErrorAndOperation(n,c,e,o):c})}async function hM(n,e,i=!1){const o=await hs(n,e._linkToIdToken(n.auth,await n.getIdToken()),i);return Lr._forOperation(n,"link",o)}/**
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
 */async function pM(n,e,i=!1){const{auth:o}=n;if(An(o.app))return Promise.reject(Fa(o));const l="reauthenticate";try{const c=await hs(n,lS(o,l,e,n),i);ut(c.idToken,o,"internal-error");const f=tp(c.idToken);ut(f,o,"internal-error");const{sub:h}=f;return ut(n.uid===h,o,"user-mismatch"),Lr._forOperation(n,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&gn(o,"user-mismatch"),c}}/**
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
 */async function uS(n,e,i=!1){if(An(n.app))return Promise.reject(Fa(n));const o="signIn",l=await lS(n,o,e),c=await Lr._fromIdTokenResponse(n,o,l);return i||await n._updateCurrentUser(c.user),c}async function mM(n,e){return uS(jr(n),e)}/**
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
 */async function gM(n){const e=jr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function yM(n,e,i){return An(n.app)?Promise.reject(Fa(n)):mM(In(n),qr.credential(e,i)).catch(async o=>{throw o.code==="auth/password-does-not-meet-requirements"&&gM(n),o})}function vM(n,e,i,o){return In(n).onIdTokenChanged(e,i,o)}function bM(n,e,i){return In(n).beforeAuthStateChanged(e,i)}const Su="__sak";/**
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
 */class cS{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Su,"1"),this.storage.removeItem(Su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const TM=1e3,SM=10;class fS extends cS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const o=this.storage.getItem(i),l=this.localCache[i];o!==l&&e(i,l,o)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((f,h,p)=>{this.notifyListeners(f,p)});return}const o=e.key;i?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(o);!i&&this.localCache[o]===f||this.notifyListeners(o,f)},c=this.storage.getItem(o);HD()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,SM):l()}notifyListeners(e,i){this.localCache[e]=i;const o=this.listeners[e];if(o)for(const l of Array.from(o))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:o}),!0)})},TM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}fS.type="LOCAL";const xM=fS;/**
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
 */class dS extends cS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}dS.type="SESSION";const hS=dS;/**
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
 */function wM(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(l=>l.isListeningto(e));if(i)return i;const o=new Iu(e);return this.receivers.push(o),o}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:o,eventType:l,data:c}=i.data,f=this.handlersMap[l];if(!f?.size)return;i.ports[0].postMessage({status:"ack",eventId:o,eventType:l});const h=Array.from(f).map(async m=>m(i.origin,c)),p=await wM(h);i.ports[0].postMessage({status:"done",eventId:o,eventType:l,response:p})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Iu.receivers=[];/**
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
 */function ip(n="",e=10){let i="";for(let o=0;o<e;o++)i+=Math.floor(Math.random()*10);return n+i}/**
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
 */class EM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,o=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,f;return new Promise((h,p)=>{const m=ip("",20);l.port1.start();const g=setTimeout(()=>{p(new Error("unsupported_event"))},o);f={messageChannel:l,onMessage(y){const T=y;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(g),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),h(T.data.response);break;default:clearTimeout(g),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:m,data:i},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Mn(){return window}function _M(n){Mn().location.href=n}/**
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
 */function pS(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function AM(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OM(){return navigator?.serviceWorker?.controller||null}function RM(){return pS()?self:null}/**
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
 */const mS="firebaseLocalStorageDb",CM=1,xu="firebaseLocalStorage",gS="fbase_key";class As{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Lu(n,e){return n.transaction([xu],e?"readwrite":"readonly").objectStore(xu)}function DM(){const n=indexedDB.deleteDatabase(mS);return new As(n).toPromise()}function sh(){const n=indexedDB.open(mS,CM);return new Promise((e,i)=>{n.addEventListener("error",()=>{i(n.error)}),n.addEventListener("upgradeneeded",()=>{const o=n.result;try{o.createObjectStore(xu,{keyPath:gS})}catch(l){i(l)}}),n.addEventListener("success",async()=>{const o=n.result;o.objectStoreNames.contains(xu)?e(o):(o.close(),await DM(),e(await sh()))})})}async function nb(n,e,i){const o=Lu(n,!0).put({[gS]:e,value:i});return new As(o).toPromise()}async function MM(n,e){const i=Lu(n,!1).get(e),o=await new As(i).toPromise();return o===void 0?null:o.value}function ab(n,e){const i=Lu(n,!0).delete(e);return new As(i).toPromise()}const kM=800,PM=3;class yS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sh(),this.db)}async _withRetries(e){let i=0;for(;;)try{const o=await this._openDb();return await e(o)}catch(o){if(i++>PM)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Iu._getInstance(RM()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await AM(),!this.activeServiceWorker)return;this.sender=new EM(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sh();return await nb(e,Su,"1"),await ab(e,Su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(o=>nb(o,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(o=>MM(o,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>ab(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=Lu(l,!1).getAll();return new As(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],o=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)o.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!o.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(e,i){this.localCache[e]=i;const o=this.listeners[e];if(o)for(const l of Array.from(o))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yS.type="LOCAL";const NM=yS;new Es(3e4,6e4);/**
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
 */function IM(n,e){return e?na(e):(ut(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class rp extends np{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kr(e,this._buildIdpRequest())}_linkToIdToken(e,i){return kr(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function LM(n){return uS(n.auth,new rp(n),n.bypassAuthState)}function UM(n){const{auth:e,user:i}=n;return ut(i,e,"internal-error"),pM(i,new rp(n),n.bypassAuthState)}async function zM(n){const{auth:e,user:i}=n;return ut(i,e,"internal-error"),hM(i,new rp(n),n.bypassAuthState)}/**
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
 */class vS{constructor(e,i,o,l,c=!1){this.auth=e,this.resolver=o,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:o,postBody:l,tenantId:c,error:f,type:h}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:i,sessionId:o,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LM;case"linkViaPopup":case"linkViaRedirect":return zM;case"reauthViaPopup":case"reauthViaRedirect":return UM;default:gn(this.auth,"internal-error")}}resolve(e){ua(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ua(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VM=new Es(2e3,1e4);class Rr extends vS{constructor(e,i,o,l,c){super(e,i,l,c),this.provider=o,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ut(e,this.auth,"internal-error"),e}async onExecution(){ua(this.filter.length===1,"Popup operations only handle one event");const e=ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VM.get())};e()}}Rr.currentPopupAction=null;/**
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
 */const BM="pendingRedirect",ru=new Map;class HM extends vS{constructor(e,i,o=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o),this.eventId=null}async execute(){let e=ru.get(this.auth._key());if(!e){try{const o=await jM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(o)}catch(i){e=()=>Promise.reject(i)}ru.set(this.auth._key(),e)}return this.bypassAuthState||ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jM(n,e){const i=YM(e),o=GM(n);if(!await o._isAvailable())return!1;const l=await o._get(i)==="true";return await o._remove(i),l}function qM(n,e){ru.set(n._key(),e)}function GM(n){return na(n._redirectPersistence)}function YM(n){return iu(BM,n.config.apiKey,n.name)}async function FM(n,e,i=!1){if(An(n.app))return Promise.reject(Fa(n));const o=jr(n),l=IM(o,e),f=await new HM(o,l,i).execute();return f&&!i&&(delete f.user._redirectEventId,await o._persistUserIfCurrent(f.user),await o._setRedirectUser(null,e)),f}/**
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
 */const XM=600*1e3;class KM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(e,o)&&(i=!0,this.sendToConsumer(e,o),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$M(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){if(e.error&&!bS(e)){const o=e.error.code?.split("auth/")[1]||"internal-error";i.onError(Dn(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const o=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&o}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XM&&this.cachedEventUids.clear(),this.cachedEventUids.has(ib(e))}saveEventToCache(e){this.cachedEventUids.add(ib(e)),this.lastProcessedEventTime=Date.now()}}function ib(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bS({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function $M(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bS(n);default:return!1}}/**
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
 */async function ZM(n,e={}){return Za(n,"GET","/v1/projects",e)}/**
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
 */const QM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WM=/^https?/;async function JM(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ZM(n);for(const i of e)try{if(t3(i))return}catch{}gn(n,"unauthorized-domain")}function t3(n){const e=rh(),{protocol:i,hostname:o}=new URL(e);if(n.startsWith("chrome-extension://")){const f=new URL(n);return f.hostname===""&&o===""?i==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&f.hostname===o}if(!WM.test(i))return!1;if(QM.test(n))return o===n;const l=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(o)}/**
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
 */const e3=new Es(3e4,6e4);function rb(){const n=Mn().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let i=0;i<n.CP.length;i++)n.CP[i]=null}}function n3(n){return new Promise((e,i)=>{function o(){rb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rb(),i(Dn(n,"network-request-failed"))},timeout:e3.get()})}if(Mn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Mn().gapi?.load)o();else{const l=ZD("iframefcb");return Mn()[l]=()=>{gapi.load?o():i(Dn(n,"network-request-failed"))},iS(`${$D()}?onload=${l}`).catch(c=>i(c))}}).catch(e=>{throw ou=null,e})}let ou=null;function a3(n){return ou=ou||n3(n),ou}/**
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
 */const i3=new Es(5e3,15e3),r3="__/auth/iframe",o3="emulator/auth/iframe",s3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},l3=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function u3(n){const e=n.config;ut(e.authDomain,n,"auth-domain-config-required");const i=e.emulator?Jh(e,o3):`https://${n.config.authDomain}/${r3}`,o={apiKey:e.apiKey,appName:n.name,v:ws},l=l3.get(n.config.apiHost);l&&(o.eid=l);const c=n._getFrameworks();return c.length&&(o.fw=c.join(",")),`${i}?${xs(o).slice(1)}`}async function c3(n){const e=await a3(n),i=Mn().gapi;return ut(i,n,"internal-error"),e.open({where:document.body,url:u3(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:s3,dontclear:!0},o=>new Promise(async(l,c)=>{await o.restyle({setHideOnLeave:!1});const f=Dn(n,"network-request-failed"),h=Mn().setTimeout(()=>{c(f)},i3.get());function p(){Mn().clearTimeout(h),l(o)}o.ping(p).then(p,()=>{c(f)})}))}/**
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
 */const f3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},d3=500,h3=600,p3="_blank",m3="http://localhost";class ob{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function g3(n,e,i,o=d3,l=h3){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-o)/2,0).toString();let h="";const p={...f3,width:o.toString(),height:l.toString(),top:c,left:f},m=Re().toLowerCase();i&&(h=QT(m)?p3:i),$T(m)&&(e=e||m3,p.scrollbars="yes");const g=Object.entries(p).reduce((T,[w,_])=>`${T}${w}=${_},`,"");if(BD(m)&&h!=="_self")return y3(e||"",h),new ob(null);const y=window.open(e||"",h,g);ut(y,n,"popup-blocked");try{y.focus()}catch{}return new ob(y)}function y3(n,e){const i=document.createElement("a");i.href=n,i.target=e;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(o)}/**
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
 */const v3="__/auth/handler",b3="emulator/auth/handler",T3=encodeURIComponent("fac");async function sb(n,e,i,o,l,c){ut(n.config.authDomain,n,"auth-domain-config-required"),ut(n.config.apiKey,n,"invalid-api-key");const f={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:o,v:ws,eventId:l};if(e instanceof sS){e.setDefaultLanguage(n.languageCode),f.providerId=e.providerId||"",rC(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,y]of Object.entries({}))f[g]=y}if(e instanceof _s){const g=e.getScopes().filter(y=>y!=="");g.length>0&&(f.scopes=g.join(","))}n.tenantId&&(f.tid=n.tenantId);const h=f;for(const g of Object.keys(h))h[g]===void 0&&delete h[g];const p=await n._getAppCheckToken(),m=p?`#${T3}=${encodeURIComponent(p)}`:"";return`${S3(n)}?${xs(h).slice(1)}${m}`}function S3({config:n}){return n.emulator?Jh(n,b3):`https://${n.authDomain}/${v3}`}/**
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
 */const Ad="webStorageSupport";class x3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hS,this._completeRedirectFn=FM,this._overrideRedirectResult=qM}async _openPopup(e,i,o,l){ua(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await sb(e,i,o,rh(),l);return g3(e,c,ip())}async _openRedirect(e,i,o,l){await this._originValidation(e);const c=await sb(e,i,o,rh(),l);return _M(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:l,promise:c}=this.eventManagers[i];return l?Promise.resolve(l):(ua(c,"If manager is not set, promise should be"),c)}const o=this.initAndGetManager(e);return this.eventManagers[i]={promise:o},o.catch(()=>{delete this.eventManagers[i]}),o}async initAndGetManager(e){const i=await c3(e),o=new KM(e);return i.register("authEvent",l=>(ut(l?.authEvent,e,"invalid-auth-event"),{status:o.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:o},this.iframes[e._key()]=i,o}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(Ad,{type:Ad},l=>{const c=l?.[0]?.[Ad];c!==void 0&&i(!!c),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=JM(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return nS()||ZT()||ep()}}const w3=x3;var lb="@firebase/auth",ub="1.11.0";/**
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
 */class E3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(o=>{e(o?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ut(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _3(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function A3(n){la(new kn("auth",(e,{options:i})=>{const o=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:f,authDomain:h}=o.options;ut(f&&!f.includes(":"),"invalid-api-key",{appName:o.name});const p={apiKey:f,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aS(n)},m=new FD(o,l,c,p);return nM(m,i),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,o)=>{e.getProvider("auth-internal").initialize()})),la(new kn("auth-internal",e=>{const i=jr(e.getProvider("auth").getImmediate());return(o=>new E3(o))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(lb,ub,_3(n)),Cn(lb,ub,"esm2020")}/**
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
 */const O3=300,R3=DT("authIdTokenMaxAge")||O3;let cb=null;const C3=n=>async e=>{const i=e&&await e.getIdTokenResult(),o=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(o&&o>R3)return;const l=i?.token;cb!==l&&(cb=l,await fetch(n,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function D3(n=zT()){const e=Hr(n,"auth");if(e.isInitialized())return e.getImmediate();const i=eM(n,{popupRedirectResolver:w3,persistence:[NM,xM,hS]}),o=DT("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(o,location.origin);if(location.origin===c.origin){const f=C3(c.toString());bM(i,f,()=>f(i.currentUser)),vM(i,h=>f(h))}}const l=YR("auth");return l&&aM(i,`http://${l}`),i}function M3(){return document.getElementsByTagName("head")?.[0]??document}XD({loadJS(n){return new Promise((e,i)=>{const o=document.createElement("script");o.setAttribute("src",n),o.onload=e,o.onerror=l=>{const c=Dn("internal-error");c.customData=l,i(c)},o.type="text/javascript",o.charset="UTF-8",M3().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});A3("Browser");var k3="firebase",P3="12.4.0";/**
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
 */Cn(k3,P3,"app");const TS="@firebase/installations",op="0.6.19";/**
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
 */const SS=1e4,xS=`w:${op}`,wS="FIS_v2",N3="https://firebaseinstallations.googleapis.com/v1",I3=3600*1e3,L3="installations",U3="Installations";/**
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
 */const z3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ri=new ki(L3,U3,z3);function ES(n){return n instanceof Nn&&n.code.includes("request-failed")}/**
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
 */function _S({projectId:n}){return`${N3}/projects/${n}/installations`}function AS(n){return{token:n.token,requestStatus:2,expiresIn:B3(n.expiresIn),creationTime:Date.now()}}async function OS(n,e){const o=(await e.json()).error;return Ri.create("request-failed",{requestName:n,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function RS({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function V3(n,{refreshToken:e}){const i=RS(n);return i.append("Authorization",H3(e)),i}async function CS(n){const e=await n();return e.status>=500&&e.status<600?n():e}function B3(n){return Number(n.replace("s","000"))}function H3(n){return`${wS} ${n}`}/**
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
 */async function j3({appConfig:n,heartbeatServiceProvider:e},{fid:i}){const o=_S(n),l=RS(n),c=e.getImmediate({optional:!0});if(c){const m=await c.getHeartbeatsHeader();m&&l.append("x-firebase-client",m)}const f={fid:i,authVersion:wS,appId:n.appId,sdkVersion:xS},h={method:"POST",headers:l,body:JSON.stringify(f)},p=await CS(()=>fetch(o,h));if(p.ok){const m=await p.json();return{fid:m.fid||i,registrationStatus:2,refreshToken:m.refreshToken,authToken:AS(m.authToken)}}else throw await OS("Create Installation",p)}/**
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
 */function DS(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function q3(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const G3=/^[cdef][\w-]{21}$/,lh="";function Y3(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const i=F3(n);return G3.test(i)?i:lh}catch{return lh}}function F3(n){return q3(n).substr(0,22)}/**
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
 */function Uu(n){return`${n.appName}!${n.appId}`}/**
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
 */const MS=new Map;function kS(n,e){const i=Uu(n);PS(i,e),X3(i,e)}function PS(n,e){const i=MS.get(n);if(i)for(const o of i)o(e)}function X3(n,e){const i=K3();i&&i.postMessage({key:n,fid:e}),$3()}let wi=null;function K3(){return!wi&&"BroadcastChannel"in self&&(wi=new BroadcastChannel("[Firebase] FID Change"),wi.onmessage=n=>{PS(n.data.key,n.data.fid)}),wi}function $3(){MS.size===0&&wi&&(wi.close(),wi=null)}/**
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
 */const Z3="firebase-installations-database",Q3=1,Ci="firebase-installations-store";let Od=null;function sp(){return Od||(Od=LT(Z3,Q3,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ci)}}})),Od}async function wu(n,e){const i=Uu(n),l=(await sp()).transaction(Ci,"readwrite"),c=l.objectStore(Ci),f=await c.get(i);return await c.put(e,i),await l.done,(!f||f.fid!==e.fid)&&kS(n,e.fid),e}async function NS(n){const e=Uu(n),o=(await sp()).transaction(Ci,"readwrite");await o.objectStore(Ci).delete(e),await o.done}async function zu(n,e){const i=Uu(n),l=(await sp()).transaction(Ci,"readwrite"),c=l.objectStore(Ci),f=await c.get(i),h=e(f);return h===void 0?await c.delete(i):await c.put(h,i),await l.done,h&&(!f||f.fid!==h.fid)&&kS(n,h.fid),h}/**
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
 */async function lp(n){let e;const i=await zu(n.appConfig,o=>{const l=W3(o),c=J3(n,l);return e=c.registrationPromise,c.installationEntry});return i.fid===lh?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function W3(n){const e=n||{fid:Y3(),registrationStatus:0};return IS(e)}function J3(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Ri.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},o=tk(n,i);return{installationEntry:i,registrationPromise:o}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ek(n)}:{installationEntry:e}}async function tk(n,e){try{const i=await j3(n,e);return wu(n.appConfig,i)}catch(i){throw ES(i)&&i.customData.serverCode===409?await NS(n.appConfig):await wu(n.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function ek(n){let e=await fb(n.appConfig);for(;e.registrationStatus===1;)await DS(100),e=await fb(n.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:o}=await lp(n);return o||i}return e}function fb(n){return zu(n,e=>{if(!e)throw Ri.create("installation-not-found");return IS(e)})}function IS(n){return nk(n)?{fid:n.fid,registrationStatus:0}:n}function nk(n){return n.registrationStatus===1&&n.registrationTime+SS<Date.now()}/**
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
 */async function ak({appConfig:n,heartbeatServiceProvider:e},i){const o=ik(n,i),l=V3(n,i),c=e.getImmediate({optional:!0});if(c){const m=await c.getHeartbeatsHeader();m&&l.append("x-firebase-client",m)}const f={installation:{sdkVersion:xS,appId:n.appId}},h={method:"POST",headers:l,body:JSON.stringify(f)},p=await CS(()=>fetch(o,h));if(p.ok){const m=await p.json();return AS(m)}else throw await OS("Generate Auth Token",p)}function ik(n,{fid:e}){return`${_S(n)}/${e}/authTokens:generate`}/**
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
 */async function up(n,e=!1){let i;const o=await zu(n.appConfig,c=>{if(!LS(c))throw Ri.create("not-registered");const f=c.authToken;if(!e&&sk(f))return c;if(f.requestStatus===1)return i=rk(n,e),c;{if(!navigator.onLine)throw Ri.create("app-offline");const h=uk(c);return i=ok(n,h),h}});return i?await i:o.authToken}async function rk(n,e){let i=await db(n.appConfig);for(;i.authToken.requestStatus===1;)await DS(100),i=await db(n.appConfig);const o=i.authToken;return o.requestStatus===0?up(n,e):o}function db(n){return zu(n,e=>{if(!LS(e))throw Ri.create("not-registered");const i=e.authToken;return ck(i)?{...e,authToken:{requestStatus:0}}:e})}async function ok(n,e){try{const i=await ak(n,e),o={...e,authToken:i};return await wu(n.appConfig,o),i}catch(i){if(ES(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await NS(n.appConfig);else{const o={...e,authToken:{requestStatus:0}};await wu(n.appConfig,o)}throw i}}function LS(n){return n!==void 0&&n.registrationStatus===2}function sk(n){return n.requestStatus===2&&!lk(n)}function lk(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+I3}function uk(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function ck(n){return n.requestStatus===1&&n.requestTime+SS<Date.now()}/**
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
 */async function fk(n){const e=n,{installationEntry:i,registrationPromise:o}=await lp(e);return o?o.catch(console.error):up(e).catch(console.error),i.fid}/**
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
 */async function dk(n,e=!1){const i=n;return await hk(i),(await up(i,e)).token}async function hk(n){const{registrationPromise:e}=await lp(n);e&&await e}/**
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
 */function pk(n){if(!n||!n.options)throw Rd("App Configuration");if(!n.name)throw Rd("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!n.options[i])throw Rd(i);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Rd(n){return Ri.create("missing-app-config-values",{valueName:n})}/**
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
 */const US="installations",mk="installations-internal",gk=n=>{const e=n.getProvider("app").getImmediate(),i=pk(e),o=Hr(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},yk=n=>{const e=n.getProvider("app").getImmediate(),i=Hr(e,US).getImmediate();return{getId:()=>fk(i),getToken:l=>dk(i,l)}};function vk(){la(new kn(US,gk,"PUBLIC")),la(new kn(mk,yk,"PRIVATE"))}vk();Cn(TS,op);Cn(TS,op,"esm2020");/**
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
 */const Eu="analytics",bk="firebase_id",Tk="origin",Sk=60*1e3,xk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cp="https://www.googletagmanager.com/gtag/js";/**
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
 */const Oe=new Zh("@firebase/analytics");/**
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
 */const wk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},qe=new ki("analytics","Analytics",wk);/**
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
 */function Ek(n){if(!n.startsWith(cp)){const e=qe.create("invalid-gtag-resource",{gtagURL:n});return Oe.warn(e.message),""}return n}function zS(n){return Promise.all(n.map(e=>e.catch(i=>i)))}function _k(n,e){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(n,e)),i}function Ak(n,e){const i=_k("firebase-js-sdk-policy",{createScriptURL:Ek}),o=document.createElement("script"),l=`${cp}?l=${n}&id=${e}`;o.src=i?i?.createScriptURL(l):l,o.async=!0,document.head.appendChild(o)}function Ok(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Rk(n,e,i,o,l,c){const f=o[l];try{if(f)await e[f];else{const p=(await zS(i)).find(m=>m.measurementId===l);p&&await e[p.appId]}}catch(h){Oe.error(h)}n("config",l,c)}async function Ck(n,e,i,o,l){try{let c=[];if(l&&l.send_to){let f=l.send_to;Array.isArray(f)||(f=[f]);const h=await zS(i);for(const p of f){const m=h.find(y=>y.measurementId===p),g=m&&e[m.appId];if(g)c.push(g);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),n("event",o,l||{})}catch(c){Oe.error(c)}}function Dk(n,e,i,o){async function l(c,...f){try{if(c==="event"){const[h,p]=f;await Ck(n,e,i,h,p)}else if(c==="config"){const[h,p]=f;await Rk(n,e,i,o,h,p)}else if(c==="consent"){const[h,p]=f;n("consent",h,p)}else if(c==="get"){const[h,p,m]=f;n("get",h,p,m)}else if(c==="set"){const[h]=f;n("set",h)}else n(c,...f)}catch(h){Oe.error(h)}}return l}function Mk(n,e,i,o,l){let c=function(...f){window[o].push(arguments)};return window[l]&&typeof window[l]=="function"&&(c=window[l]),window[l]=Dk(c,n,e,i),{gtagCore:c,wrappedGtag:window[l]}}function kk(n){const e=window.document.getElementsByTagName("script");for(const i of Object.values(e))if(i.src&&i.src.includes(cp)&&i.src.includes(n))return i;return null}/**
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
 */const Pk=30,Nk=1e3;class Ik{constructor(e={},i=Nk){this.throttleMetadata=e,this.intervalMillis=i}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,i){this.throttleMetadata[e]=i}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const VS=new Ik;function Lk(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Uk(n){const{appId:e,apiKey:i}=n,o={method:"GET",headers:Lk(i)},l=xk.replace("{app-id}",e),c=await fetch(l,o);if(c.status!==200&&c.status!==304){let f="";try{const h=await c.json();h.error?.message&&(f=h.error.message)}catch{}throw qe.create("config-fetch-failed",{httpStatus:c.status,responseMessage:f})}return c.json()}async function zk(n,e=VS,i){const{appId:o,apiKey:l,measurementId:c}=n.options;if(!o)throw qe.create("no-app-id");if(!l){if(c)return{measurementId:c,appId:o};throw qe.create("no-api-key")}const f=e.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new Hk;return setTimeout(async()=>{h.abort()},Sk),BS({appId:o,apiKey:l,measurementId:c},f,h,e)}async function BS(n,{throttleEndTimeMillis:e,backoffCount:i},o,l=VS){const{appId:c,measurementId:f}=n;try{await Vk(o,e)}catch(h){if(f)return Oe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${h?.message}]`),{appId:c,measurementId:f};throw h}try{const h=await Uk(n);return l.deleteThrottleMetadata(c),h}catch(h){const p=h;if(!Bk(p)){if(l.deleteThrottleMetadata(c),f)return Oe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:c,measurementId:f};throw h}const m=Number(p?.customData?.httpStatus)===503?Lv(i,l.intervalMillis,Pk):Lv(i,l.intervalMillis),g={throttleEndTimeMillis:Date.now()+m,backoffCount:i+1};return l.setThrottleMetadata(c,g),Oe.debug(`Calling attemptFetch again in ${m} millis`),BS(n,g,o,l)}}function Vk(n,e){return new Promise((i,o)=>{const l=Math.max(e-Date.now(),0),c=setTimeout(i,l);n.addEventListener(()=>{clearTimeout(c),o(qe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Bk(n){if(!(n instanceof Nn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Hk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function jk(n,e,i,o,l){if(l&&l.global){n("event",i,o);return}else{const c=await e,f={...o,send_to:c};n("event",i,f)}}async function qk(n,e,i,o){if(o&&o.global){const l={};for(const c of Object.keys(i))l[`user_properties.${c}`]=i[c];return n("set",l),Promise.resolve()}else{const l=await e;n("config",l,{update:!0,user_properties:i})}}/**
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
 */async function Gk(){if(kT())try{await PT()}catch(n){return Oe.warn(qe.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return Oe.warn(qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Yk(n,e,i,o,l,c,f){const h=zk(n);h.then(T=>{i[T.measurementId]=T.appId,n.options.measurementId&&T.measurementId!==n.options.measurementId&&Oe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>Oe.error(T)),e.push(h);const p=Gk().then(T=>{if(T)return o.getId()}),[m,g]=await Promise.all([h,p]);kk(c)||Ak(c,m.measurementId),l("js",new Date);const y=f?.config??{};return y[Tk]="firebase",y.update=!0,g!=null&&(y[bk]=g),l("config",m.measurementId,y),m.measurementId}/**
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
 */class Fk{constructor(e){this.app=e}_delete(){return delete Pr[this.app.options.appId],Promise.resolve()}}let Pr={},hb=[];const pb={};let Cd="dataLayer",Xk="gtag",mb,fp,gb=!1;function Kk(){const n=[];if(MT()&&n.push("This is a browser extension environment."),eC()||n.push("Cookies are not available."),n.length>0){const e=n.map((o,l)=>`(${l+1}) ${o}`).join(" "),i=qe.create("invalid-analytics-context",{errorInfo:e});Oe.warn(i.message)}}function $k(n,e,i){Kk();const o=n.options.appId;if(!o)throw qe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Oe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qe.create("no-api-key");if(Pr[o]!=null)throw qe.create("already-exists",{id:o});if(!gb){Ok(Cd);const{wrappedGtag:c,gtagCore:f}=Mk(Pr,hb,pb,Cd,Xk);fp=c,mb=f,gb=!0}return Pr[o]=Yk(n,hb,pb,e,mb,Cd,i),new Fk(n)}function Zk(n=zT()){n=In(n);const e=Hr(n,Eu);return e.isInitialized()?e.getImmediate():Qk(n)}function Qk(n,e={}){const i=Hr(n,Eu);if(i.isInitialized()){const l=i.getImmediate();if(Ai(e,i.getOptions()))return l;throw qe.create("already-initialized")}return i.initialize({options:e})}function Wk(n,e,i){n=In(n),qk(fp,Pr[n.app.options.appId],e,i).catch(o=>Oe.error(o))}function Jk(n,e,i,o){n=In(n),jk(fp,Pr[n.app.options.appId],e,i,o).catch(l=>Oe.error(l))}const yb="@firebase/analytics",vb="0.10.19";function t4(){la(new kn(Eu,(e,{options:i})=>{const o=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return $k(o,l,i)},"PUBLIC")),la(new kn("analytics-internal",n,"PRIVATE")),Cn(yb,vb),Cn(yb,vb,"esm2020");function n(e){try{const i=e.getProvider(Eu).getImmediate();return{logEvent:(o,l,c)=>Jk(i,o,l,c),setUserProperties:(o,l)=>Wk(i,o,l)}}catch(i){throw qe.create("interop-component-reg-failed",{reason:i})}}}t4();const e4={apiKey:"AIzaSyAkLOx2lwDb-3HLPyrbr6hWH-yHn4Ly-wc",authDomain:"pi-sem6.firebaseapp.com",projectId:"pi-sem6",storageBucket:"pi-sem6.firebasestorage.app",messagingSenderId:"829276571631",appId:"1:829276571631:web:90227c4dedc85f75cfd81a",measurementId:"G-ZZVKB3RCPL"},HS=UT(e4);Zk(HS);const n4=D3(HS);async function a4(n,e){return await yM(n4,n,e)}function i4(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}const r4=n=>{switch(n){case"success":return l4;case"info":return c4;case"warning":return u4;case"error":return f4;default:return null}},o4=Array(12).fill(0),s4=({visible:n,className:e})=>Y.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":n},Y.createElement("div",{className:"sonner-spinner"},o4.map((i,o)=>Y.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),l4=Y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Y.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),u4=Y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},Y.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),c4=Y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Y.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),f4=Y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Y.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),d4=Y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},Y.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Y.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),h4=()=>{const[n,e]=Y.useState(document.hidden);return Y.useEffect(()=>{const i=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",i),()=>window.removeEventListener("visibilitychange",i)},[]),n};let uh=1;class p4{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{const i=this.subscribers.indexOf(e);this.subscribers.splice(i,1)}),this.publish=e=>{this.subscribers.forEach(i=>i(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var i;const{message:o,...l}=e,c=typeof e?.id=="number"||((i=e.id)==null?void 0:i.length)>0?e.id:uh++,f=this.toasts.find(p=>p.id===c),h=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(c)&&this.dismissedToasts.delete(c),f?this.toasts=this.toasts.map(p=>p.id===c?(this.publish({...p,...e,id:c,title:o}),{...p,...e,id:c,dismissible:h,title:o}):p):this.addToast({title:o,...l,dismissible:h,id:c}),c},this.dismiss=e=>(e?(this.dismissedToasts.add(e),requestAnimationFrame(()=>this.subscribers.forEach(i=>i({id:e,dismiss:!0})))):this.toasts.forEach(i=>{this.subscribers.forEach(o=>o({id:i.id,dismiss:!0}))}),e),this.message=(e,i)=>this.create({...i,message:e}),this.error=(e,i)=>this.create({...i,message:e,type:"error"}),this.success=(e,i)=>this.create({...i,type:"success",message:e}),this.info=(e,i)=>this.create({...i,type:"info",message:e}),this.warning=(e,i)=>this.create({...i,type:"warning",message:e}),this.loading=(e,i)=>this.create({...i,type:"loading",message:e}),this.promise=(e,i)=>{if(!i)return;let o;i.loading!==void 0&&(o=this.create({...i,promise:e,type:"loading",message:i.loading,description:typeof i.description!="function"?i.description:void 0}));const l=Promise.resolve(e instanceof Function?e():e);let c=o!==void 0,f;const h=l.then(async m=>{if(f=["resolve",m],Y.isValidElement(m))c=!1,this.create({id:o,type:"default",message:m});else if(g4(m)&&!m.ok){c=!1;const y=typeof i.error=="function"?await i.error(`HTTP error! status: ${m.status}`):i.error,T=typeof i.description=="function"?await i.description(`HTTP error! status: ${m.status}`):i.description,_=typeof y=="object"&&!Y.isValidElement(y)?y:{message:y};this.create({id:o,type:"error",description:T,..._})}else if(m instanceof Error){c=!1;const y=typeof i.error=="function"?await i.error(m):i.error,T=typeof i.description=="function"?await i.description(m):i.description,_=typeof y=="object"&&!Y.isValidElement(y)?y:{message:y};this.create({id:o,type:"error",description:T,..._})}else if(i.success!==void 0){c=!1;const y=typeof i.success=="function"?await i.success(m):i.success,T=typeof i.description=="function"?await i.description(m):i.description,_=typeof y=="object"&&!Y.isValidElement(y)?y:{message:y};this.create({id:o,type:"success",description:T,..._})}}).catch(async m=>{if(f=["reject",m],i.error!==void 0){c=!1;const g=typeof i.error=="function"?await i.error(m):i.error,y=typeof i.description=="function"?await i.description(m):i.description,w=typeof g=="object"&&!Y.isValidElement(g)?g:{message:g};this.create({id:o,type:"error",description:y,...w})}}).finally(()=>{c&&(this.dismiss(o),o=void 0),i.finally==null||i.finally.call(i)}),p=()=>new Promise((m,g)=>h.then(()=>f[0]==="reject"?g(f[1]):m(f[1])).catch(g));return typeof o!="string"&&typeof o!="number"?{unwrap:p}:Object.assign(o,{unwrap:p})},this.custom=(e,i)=>{const o=i?.id||uh++;return this.create({jsx:e(o),id:o,...i}),o},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const Pe=new p4,m4=(n,e)=>{const i=e?.id||uh++;return Pe.addToast({title:n,...e,id:i}),i},g4=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",y4=m4,v4=()=>Pe.toasts,b4=()=>Pe.getActiveToasts(),bb=Object.assign(y4,{success:Pe.success,info:Pe.info,warning:Pe.warning,error:Pe.error,custom:Pe.custom,message:Pe.message,promise:Pe.promise,dismiss:Pe.dismiss,loading:Pe.loading},{getHistory:v4,getToasts:b4});i4("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function Zl(n){return n.label!==void 0}const T4=3,S4="24px",x4="16px",Tb=4e3,w4=356,E4=14,_4=45,A4=200;function _n(...n){return n.filter(Boolean).join(" ")}function O4(n){const[e,i]=n.split("-"),o=[];return e&&o.push(e),i&&o.push(i),o}const R4=n=>{var e,i,o,l,c,f,h,p,m;const{invert:g,toast:y,unstyled:T,interacting:w,setHeights:_,visibleToasts:A,heights:k,index:D,toasts:L,expanded:U,removeToast:K,defaultRichColors:G,closeButton:J,style:it,cancelButtonStyle:Q,actionButtonStyle:rt,className:St="",descriptionClassName:Ut="",duration:kt,position:Zt,gap:Se,expandByDefault:Pt,classNames:N,icons:j,closeButtonAriaLabel:Z="Close toast"}=n,[ht,x]=Y.useState(null),[B,$]=Y.useState(null),[q,X]=Y.useState(!1),[at,tt]=Y.useState(!1),[Qt,lt]=Y.useState(!1),[xe,fa]=Y.useState(!1),[Ln,yn]=Y.useState(!1),[Gr,Qa]=Y.useState(0),[Vu,Os]=Y.useState(0),ye=Y.useRef(y.duration||kt||Tb),Rs=Y.useRef(null),Ge=Y.useRef(null),Cs=D===0,Ni=D+1<=A,we=y.type,Un=y.dismissible!==!1,Bu=y.className||"",Hu=y.descriptionClassName||"",vn=Y.useMemo(()=>k.findIndex(dt=>dt.toastId===y.id)||0,[k,y.id]),Ee=Y.useMemo(()=>{var dt;return(dt=y.closeButton)!=null?dt:J},[y.closeButton,J]),rn=Y.useMemo(()=>y.duration||kt||Tb,[y.duration,kt]),fe=Y.useRef(0),da=Y.useRef(0),Ds=Y.useRef(0),ha=Y.useRef(null),[Ii,Li]=Zt.split("-"),bn=Y.useMemo(()=>k.reduce((dt,Gt,Wt)=>Wt>=vn?dt:dt+Gt.height,0),[k,vn]),Wa=h4(),Ja=y.invert||g,Yr=we==="loading";da.current=Y.useMemo(()=>vn*Se+bn,[vn,bn]),Y.useEffect(()=>{ye.current=rn},[rn]),Y.useEffect(()=>{X(!0)},[]),Y.useEffect(()=>{const dt=Ge.current;if(dt){const Gt=dt.getBoundingClientRect().height;return Os(Gt),_(Wt=>[{toastId:y.id,height:Gt,position:y.position},...Wt]),()=>_(Wt=>Wt.filter(de=>de.toastId!==y.id))}},[_,y.id]),Y.useLayoutEffect(()=>{if(!q)return;const dt=Ge.current,Gt=dt.style.height;dt.style.height="auto";const Wt=dt.getBoundingClientRect().height;dt.style.height=Gt,Os(Wt),_(de=>de.find(ne=>ne.toastId===y.id)?de.map(ne=>ne.toastId===y.id?{...ne,height:Wt}:ne):[{toastId:y.id,height:Wt,position:y.position},...de])},[q,y.title,y.description,_,y.id,y.jsx,y.action,y.cancel]);const on=Y.useCallback(()=>{tt(!0),Qa(da.current),_(dt=>dt.filter(Gt=>Gt.toastId!==y.id)),setTimeout(()=>{K(y)},A4)},[y,K,_,da]);Y.useEffect(()=>{if(y.promise&&we==="loading"||y.duration===1/0||y.type==="loading")return;let dt;return U||w||Wa?(()=>{if(Ds.current<fe.current){const de=new Date().getTime()-fe.current;ye.current=ye.current-de}Ds.current=new Date().getTime()})():(()=>{ye.current!==1/0&&(fe.current=new Date().getTime(),dt=setTimeout(()=>{y.onAutoClose==null||y.onAutoClose.call(y,y),on()},ye.current))})(),()=>clearTimeout(dt)},[U,w,y,we,Wa,on]),Y.useEffect(()=>{y.delete&&(on(),y.onDismiss==null||y.onDismiss.call(y,y))},[on,y.delete]);function Ms(){var dt;if(j?.loading){var Gt;return Y.createElement("div",{className:_n(N?.loader,y==null||(Gt=y.classNames)==null?void 0:Gt.loader,"sonner-loader"),"data-visible":we==="loading"},j.loading)}return Y.createElement(s4,{className:_n(N?.loader,y==null||(dt=y.classNames)==null?void 0:dt.loader),visible:we==="loading"})}const Fr=y.icon||j?.[we]||r4(we);var pa,ks;return Y.createElement("li",{tabIndex:0,ref:Ge,className:_n(St,Bu,N?.toast,y==null||(e=y.classNames)==null?void 0:e.toast,N?.default,N?.[we],y==null||(i=y.classNames)==null?void 0:i[we]),"data-sonner-toast":"","data-rich-colors":(pa=y.richColors)!=null?pa:G,"data-styled":!(y.jsx||y.unstyled||T),"data-mounted":q,"data-promise":!!y.promise,"data-swiped":Ln,"data-removed":at,"data-visible":Ni,"data-y-position":Ii,"data-x-position":Li,"data-index":D,"data-front":Cs,"data-swiping":Qt,"data-dismissible":Un,"data-type":we,"data-invert":Ja,"data-swipe-out":xe,"data-swipe-direction":B,"data-expanded":!!(U||Pt&&q),"data-testid":y.testId,style:{"--index":D,"--toasts-before":D,"--z-index":L.length-D,"--offset":`${at?Gr:da.current}px`,"--initial-height":Pt?"auto":`${Vu}px`,...it,...y.style},onDragEnd:()=>{lt(!1),x(null),ha.current=null},onPointerDown:dt=>{dt.button!==2&&(Yr||!Un||(Rs.current=new Date,Qa(da.current),dt.target.setPointerCapture(dt.pointerId),dt.target.tagName!=="BUTTON"&&(lt(!0),ha.current={x:dt.clientX,y:dt.clientY})))},onPointerUp:()=>{var dt,Gt,Wt;if(xe||!Un)return;ha.current=null;const de=Number(((dt=Ge.current)==null?void 0:dt.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),ti=Number(((Gt=Ge.current)==null?void 0:Gt.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),ne=new Date().getTime()-((Wt=Rs.current)==null?void 0:Wt.getTime()),Yt=ht==="x"?de:ti,Ft=Math.abs(Yt)/ne;if(Math.abs(Yt)>=_4||Ft>.11){Qa(da.current),y.onDismiss==null||y.onDismiss.call(y,y),$(ht==="x"?de>0?"right":"left":ti>0?"down":"up"),on(),fa(!0);return}else{var Dt,oe;(Dt=Ge.current)==null||Dt.style.setProperty("--swipe-amount-x","0px"),(oe=Ge.current)==null||oe.style.setProperty("--swipe-amount-y","0px")}yn(!1),lt(!1),x(null)},onPointerMove:dt=>{var Gt,Wt,de;if(!ha.current||!Un||((Gt=window.getSelection())==null?void 0:Gt.toString().length)>0)return;const ne=dt.clientY-ha.current.y,Yt=dt.clientX-ha.current.x;var Ft;const Dt=(Ft=n.swipeDirections)!=null?Ft:O4(Zt);!ht&&(Math.abs(Yt)>1||Math.abs(ne)>1)&&x(Math.abs(Yt)>Math.abs(ne)?"x":"y");let oe={x:0,y:0};const Ui=zn=>1/(1.5+Math.abs(zn)/20);if(ht==="y"){if(Dt.includes("top")||Dt.includes("bottom"))if(Dt.includes("top")&&ne<0||Dt.includes("bottom")&&ne>0)oe.y=ne;else{const zn=ne*Ui(ne);oe.y=Math.abs(zn)<Math.abs(ne)?zn:ne}}else if(ht==="x"&&(Dt.includes("left")||Dt.includes("right")))if(Dt.includes("left")&&Yt<0||Dt.includes("right")&&Yt>0)oe.x=Yt;else{const zn=Yt*Ui(Yt);oe.x=Math.abs(zn)<Math.abs(Yt)?zn:Yt}(Math.abs(oe.x)>0||Math.abs(oe.y)>0)&&yn(!0),(Wt=Ge.current)==null||Wt.style.setProperty("--swipe-amount-x",`${oe.x}px`),(de=Ge.current)==null||de.style.setProperty("--swipe-amount-y",`${oe.y}px`)}},Ee&&!y.jsx&&we!=="loading"?Y.createElement("button",{"aria-label":Z,"data-disabled":Yr,"data-close-button":!0,onClick:Yr||!Un?()=>{}:()=>{on(),y.onDismiss==null||y.onDismiss.call(y,y)},className:_n(N?.closeButton,y==null||(o=y.classNames)==null?void 0:o.closeButton)},(ks=j?.close)!=null?ks:d4):null,(we||y.icon||y.promise)&&y.icon!==null&&(j?.[we]!==null||y.icon)?Y.createElement("div",{"data-icon":"",className:_n(N?.icon,y==null||(l=y.classNames)==null?void 0:l.icon)},y.promise||y.type==="loading"&&!y.icon?y.icon||Ms():null,y.type!=="loading"?Fr:null):null,Y.createElement("div",{"data-content":"",className:_n(N?.content,y==null||(c=y.classNames)==null?void 0:c.content)},Y.createElement("div",{"data-title":"",className:_n(N?.title,y==null||(f=y.classNames)==null?void 0:f.title)},y.jsx?y.jsx:typeof y.title=="function"?y.title():y.title),y.description?Y.createElement("div",{"data-description":"",className:_n(Ut,Hu,N?.description,y==null||(h=y.classNames)==null?void 0:h.description)},typeof y.description=="function"?y.description():y.description):null),Y.isValidElement(y.cancel)?y.cancel:y.cancel&&Zl(y.cancel)?Y.createElement("button",{"data-button":!0,"data-cancel":!0,style:y.cancelButtonStyle||Q,onClick:dt=>{Zl(y.cancel)&&Un&&(y.cancel.onClick==null||y.cancel.onClick.call(y.cancel,dt),on())},className:_n(N?.cancelButton,y==null||(p=y.classNames)==null?void 0:p.cancelButton)},y.cancel.label):null,Y.isValidElement(y.action)?y.action:y.action&&Zl(y.action)?Y.createElement("button",{"data-button":!0,"data-action":!0,style:y.actionButtonStyle||rt,onClick:dt=>{Zl(y.action)&&(y.action.onClick==null||y.action.onClick.call(y.action,dt),!dt.defaultPrevented&&on())},className:_n(N?.actionButton,y==null||(m=y.classNames)==null?void 0:m.actionButton)},y.action.label):null)};function Sb(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function C4(n,e){const i={};return[n,e].forEach((o,l)=>{const c=l===1,f=c?"--mobile-offset":"--offset",h=c?x4:S4;function p(m){["top","right","bottom","left"].forEach(g=>{i[`${f}-${g}`]=typeof m=="number"?`${m}px`:m})}typeof o=="number"||typeof o=="string"?p(o):typeof o=="object"?["top","right","bottom","left"].forEach(m=>{o[m]===void 0?i[`${f}-${m}`]=h:i[`${f}-${m}`]=typeof o[m]=="number"?`${o[m]}px`:o[m]}):p(h)}),i}const D4=Y.forwardRef(function(e,i){const{id:o,invert:l,position:c="bottom-right",hotkey:f=["altKey","KeyT"],expand:h,closeButton:p,className:m,offset:g,mobileOffset:y,theme:T="light",richColors:w,duration:_,style:A,visibleToasts:k=T4,toastOptions:D,dir:L=Sb(),gap:U=E4,icons:K,containerAriaLabel:G="Notifications"}=e,[J,it]=Y.useState([]),Q=Y.useMemo(()=>o?J.filter(q=>q.toasterId===o):J.filter(q=>!q.toasterId),[J,o]),rt=Y.useMemo(()=>Array.from(new Set([c].concat(Q.filter(q=>q.position).map(q=>q.position)))),[Q,c]),[St,Ut]=Y.useState([]),[kt,Zt]=Y.useState(!1),[Se,Pt]=Y.useState(!1),[N,j]=Y.useState(T!=="system"?T:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),Z=Y.useRef(null),ht=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),x=Y.useRef(null),B=Y.useRef(!1),$=Y.useCallback(q=>{it(X=>{var at;return(at=X.find(tt=>tt.id===q.id))!=null&&at.delete||Pe.dismiss(q.id),X.filter(({id:tt})=>tt!==q.id)})},[]);return Y.useEffect(()=>Pe.subscribe(q=>{if(q.dismiss){requestAnimationFrame(()=>{it(X=>X.map(at=>at.id===q.id?{...at,delete:!0}:at))});return}setTimeout(()=>{R2.flushSync(()=>{it(X=>{const at=X.findIndex(tt=>tt.id===q.id);return at!==-1?[...X.slice(0,at),{...X[at],...q},...X.slice(at+1)]:[q,...X]})})})}),[J]),Y.useEffect(()=>{if(T!=="system"){j(T);return}if(T==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?j("dark"):j("light")),typeof window>"u")return;const q=window.matchMedia("(prefers-color-scheme: dark)");try{q.addEventListener("change",({matches:X})=>{j(X?"dark":"light")})}catch{q.addListener(({matches:at})=>{try{j(at?"dark":"light")}catch(tt){console.error(tt)}})}},[T]),Y.useEffect(()=>{J.length<=1&&Zt(!1)},[J]),Y.useEffect(()=>{const q=X=>{var at;if(f.every(lt=>X[lt]||X.code===lt)){var Qt;Zt(!0),(Qt=Z.current)==null||Qt.focus()}X.code==="Escape"&&(document.activeElement===Z.current||(at=Z.current)!=null&&at.contains(document.activeElement))&&Zt(!1)};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[f]),Y.useEffect(()=>{if(Z.current)return()=>{x.current&&(x.current.focus({preventScroll:!0}),x.current=null,B.current=!1)}},[Z.current]),Y.createElement("section",{ref:i,"aria-label":`${G} ${ht}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},rt.map((q,X)=>{var at;const[tt,Qt]=q.split("-");return Q.length?Y.createElement("ol",{key:q,dir:L==="auto"?Sb():L,tabIndex:-1,ref:Z,className:m,"data-sonner-toaster":!0,"data-sonner-theme":N,"data-y-position":tt,"data-x-position":Qt,style:{"--front-toast-height":`${((at=St[0])==null?void 0:at.height)||0}px`,"--width":`${w4}px`,"--gap":`${U}px`,...A,...C4(g,y)},onBlur:lt=>{B.current&&!lt.currentTarget.contains(lt.relatedTarget)&&(B.current=!1,x.current&&(x.current.focus({preventScroll:!0}),x.current=null))},onFocus:lt=>{lt.target instanceof HTMLElement&&lt.target.dataset.dismissible==="false"||B.current||(B.current=!0,x.current=lt.relatedTarget)},onMouseEnter:()=>Zt(!0),onMouseMove:()=>Zt(!0),onMouseLeave:()=>{Se||Zt(!1)},onDragEnd:()=>Zt(!1),onPointerDown:lt=>{lt.target instanceof HTMLElement&&lt.target.dataset.dismissible==="false"||Pt(!0)},onPointerUp:()=>Pt(!1)},Q.filter(lt=>!lt.position&&X===0||lt.position===q).map((lt,xe)=>{var fa,Ln;return Y.createElement(R4,{key:lt.id,icons:K,index:xe,toast:lt,defaultRichColors:w,duration:(fa=D?.duration)!=null?fa:_,className:D?.className,descriptionClassName:D?.descriptionClassName,invert:l,visibleToasts:k,closeButton:(Ln=D?.closeButton)!=null?Ln:p,interacting:Se,position:q,style:D?.style,unstyled:D?.unstyled,classNames:D?.classNames,cancelButtonStyle:D?.cancelButtonStyle,actionButtonStyle:D?.actionButtonStyle,closeButtonAriaLabel:D?.closeButtonAriaLabel,removeToast:$,toasts:Q.filter(yn=>yn.position==lt.position),heights:St.filter(yn=>yn.position==lt.position),setHeights:Ut,expandByDefault:h,gap:U,expanded:kt,swipeDirections:e.swipeDirections})})):null}))});async function M4(n,e,i){try{await a4(n,e),bb.success("Login feito com sucesso!"),/android|iphone|ipad|iPod/i.test(navigator.userAgent)?i("/photoupload"):i("/upload")}catch(o){let l="Erro desconhecido ao fazer login.";switch(o.code){case"auth/invalid-email":l="Email inválido.";break;case"auth/user-not-found":case"auth/invalid-credential":case"auth/wrong-password":l="Usuário ou senha incorreto.";break;case"auth/too-many-requests":l="Muitas tentativas. Tente novamente mais tarde.";break;case"auth/missing-password":l="Por favor, digite a senha.";break;default:o.message&&(l=o.message)}bb.error(l)}}function k4(){const[n,e]=R.useState(""),[i,o]=R.useState(""),l=dh(),c=()=>M4(n,i,l);return F.jsxs("div",{className:"login-bg",children:[F.jsx(D4,{position:"top-right",autoClose:3e3,closeOnClick:!0}),F.jsxs(ns.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.7},className:"login-card",children:[F.jsxs("div",{className:"login-header",children:[F.jsx("h1",{className:"login-title",children:"Login"}),F.jsx("p",{className:"login-subtitle",children:"Faça login para continuar"})]}),F.jsx("input",{className:"login-input",type:"email",placeholder:"Email",value:n,onChange:f=>e(f.target.value)}),F.jsx("input",{className:"login-input",type:"password",placeholder:"Senha",value:i,onChange:f=>o(f.target.value)}),F.jsx(ns.button,{whileHover:{scale:1.03},whileTap:{scale:.97},className:"login-btn",onClick:c,children:"Entrar"})]})]})}function P4(n){return Ou({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"},child:[]}]})(n)}function N4(){return F.jsx("div",{className:"photo-upload-root",children:F.jsxs("div",{className:"photo-upload-box",children:[F.jsx("p",{children:"Insira o código da construção"}),F.jsx("input",{className:"photo-upload-input",type:"text",placeholder:"Código de Construção"}),F.jsx("p",{children:"Insira foto da construção a ser utilizada"}),F.jsxs("div",{className:"photo-upload-container",children:[F.jsx("label",{htmlFor:"photo_upload"}),F.jsx(P4,{size:48,color:"white",style:{position:"absolute"}})]}),F.jsx("input",{id:"photo_upload",type:"file",accept:"image/*",capture:"environment",style:{display:"none"}})]})})}function I4(){const[n,e]=R.useState(null),[i,o]=R.useState(null),[l,c]=R.useState(null),[f,h]=R.useState(!1);async function p(g){if(!g)return;h(!0);const y=new FormData;y.append("file",g);try{const w=await(await fetch("https://pii-6-sem.onrender.com/upload/file",{method:"POST",body:y})).json();w.urn?(e(w.urn),console.log("Upload concluído, URN:",w.urn)):console.error("Erro no upload:",w)}catch(T){console.error("Erro ao enviar arquivo:",T)}finally{h(!1)}}async function m(g){if(!g)return;const y=new FormData;y.append("file",g);const w=await(await fetch("https://pii-6-sem.onrender.com/upload/image",{method:"POST",body:y})).json();w.imageUrl?(o(w.imageUrl),console.log("Imagem enviada:",w.imageUrl)):console.error("Falha no upload:",w)}return F.jsx(y2,{children:F.jsxs(KE,{children:[F.jsx(Fo,{path:"/",element:F.jsx(k4,{})}),F.jsx(Fo,{path:"/photoupload",element:F.jsx(N4,{})}),F.jsx(Fo,{path:"/upload",element:F.jsx(IR,{onUploadFile:p,onUploadImage:m,isLoading:f})}),F.jsx(Fo,{path:"/viewer",element:F.jsx(LR,{urn:n,imageUrl:i,screenshotUrl:l,setScreenshotUrl:c})})]})})}iE.createRoot(document.getElementById("root")).render(F.jsx(R.StrictMode,{children:F.jsx(I4,{})}));
