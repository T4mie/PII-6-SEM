(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Kv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ld={exports:{}},Qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by;function U_(){if(by)return Qo;by=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(o,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:e,type:o,key:f,ref:l!==void 0?l:null,props:u}}return Qo.Fragment=t,Qo.jsx=i,Qo.jsxs=i,Qo}var vy;function B_(){return vy||(vy=1,ld.exports=U_()),ld.exports}var X=B_(),ud={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty;function z_(){if(Ty)return pt;Ty=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function T(w){return w===null||typeof w!="object"?null:(w=y&&w[y]||w["@@iterator"],typeof w=="function"?w:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,A={};function C(w,V,Z){this.props=w,this.context=V,this.refs=A,this.updater=Z||x}C.prototype.isReactComponent={},C.prototype.setState=function(w,V){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,V,"setState")},C.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function R(){}R.prototype=C.prototype;function L(w,V,Z){this.props=w,this.context=V,this.refs=A,this.updater=Z||x}var U=L.prototype=new R;U.constructor=L,_(U,C.prototype),U.isPureReactComponent=!0;var Y=Array.isArray,j={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function at(w,V,Z,F,$,it){return Z=it.ref,{$$typeof:e,type:w,key:V,ref:Z!==void 0?Z:null,props:it}}function K(w,V){return at(w.type,V,void 0,void 0,void 0,w.props)}function rt(w){return typeof w=="object"&&w!==null&&w.$$typeof===e}function St(w){var V={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(Z){return V[Z]})}var Ut=/\/+/g;function Mt(w,V){return typeof w=="object"&&w!==null&&w.key!=null?St(""+w.key):V.toString(36)}function Wt(){}function we(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(Wt,Wt):(w.status="pending",w.then(function(V){w.status==="pending"&&(w.status="fulfilled",w.value=V)},function(V){w.status==="pending"&&(w.status="rejected",w.reason=V)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function Nt(w,V,Z,F,$){var it=typeof w;(it==="undefined"||it==="boolean")&&(w=null);var tt=!1;if(w===null)tt=!0;else switch(it){case"bigint":case"string":case"number":tt=!0;break;case"object":switch(w.$$typeof){case e:case t:tt=!0;break;case g:return tt=w._init,Nt(tt(w._payload),V,Z,F,$)}}if(tt)return $=$(w),tt=F===""?"."+Mt(w,0):F,Y($)?(Z="",tt!=null&&(Z=tt.replace(Ut,"$&/")+"/"),Nt($,V,Z,"",function(_e){return _e})):$!=null&&(rt($)&&($=K($,Z+($.key==null||w&&w.key===$.key?"":(""+$.key).replace(Ut,"$&/")+"/")+tt)),V.push($)),1;tt=0;var Jt=F===""?".":F+":";if(Y(w))for(var lt=0;lt<w.length;lt++)F=w[lt],it=Jt+Mt(F,lt),tt+=Nt(F,V,Z,it,$);else if(lt=T(w),typeof lt=="function")for(w=lt.call(w),lt=0;!(F=w.next()).done;)F=F.value,it=Jt+Mt(F,lt++),tt+=Nt(F,V,Z,it,$);else if(it==="object"){if(typeof w.then=="function")return Nt(we(w),V,Z,F,$);throw V=String(w),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return tt}function P(w,V,Z){if(w==null)return w;var F=[],$=0;return Nt(w,F,"","",function(it){return V.call(Z,it,$++)}),F}function q(w){if(w._status===-1){var V=w._result;V=V(),V.then(function(Z){(w._status===0||w._status===-1)&&(w._status=1,w._result=Z)},function(Z){(w._status===0||w._status===-1)&&(w._status=2,w._result=Z)}),w._status===-1&&(w._status=0,w._result=V)}if(w._status===1)return w._result.default;throw w._result}var Q=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function ht(){}return pt.Children={map:P,forEach:function(w,V,Z){P(w,function(){V.apply(this,arguments)},Z)},count:function(w){var V=0;return P(w,function(){V++}),V},toArray:function(w){return P(w,function(V){return V})||[]},only:function(w){if(!rt(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},pt.Component=C,pt.Fragment=i,pt.Profiler=l,pt.PureComponent=L,pt.StrictMode=o,pt.Suspense=p,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,pt.__COMPILER_RUNTIME={__proto__:null,c:function(w){return j.H.useMemoCache(w)}},pt.cache=function(w){return function(){return w.apply(null,arguments)}},pt.cloneElement=function(w,V,Z){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var F=_({},w.props),$=w.key,it=void 0;if(V!=null)for(tt in V.ref!==void 0&&(it=void 0),V.key!==void 0&&($=""+V.key),V)!W.call(V,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&V.ref===void 0||(F[tt]=V[tt]);var tt=arguments.length-2;if(tt===1)F.children=Z;else if(1<tt){for(var Jt=Array(tt),lt=0;lt<tt;lt++)Jt[lt]=arguments[lt+2];F.children=Jt}return at(w.type,$,void 0,void 0,it,F)},pt.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:u,_context:w},w},pt.createElement=function(w,V,Z){var F,$={},it=null;if(V!=null)for(F in V.key!==void 0&&(it=""+V.key),V)W.call(V,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&($[F]=V[F]);var tt=arguments.length-2;if(tt===1)$.children=Z;else if(1<tt){for(var Jt=Array(tt),lt=0;lt<tt;lt++)Jt[lt]=arguments[lt+2];$.children=Jt}if(w&&w.defaultProps)for(F in tt=w.defaultProps,tt)$[F]===void 0&&($[F]=tt[F]);return at(w,it,void 0,void 0,null,$)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(w){return{$$typeof:h,render:w}},pt.isValidElement=rt,pt.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:q}},pt.memo=function(w,V){return{$$typeof:m,type:w,compare:V===void 0?null:V}},pt.startTransition=function(w){var V=j.T,Z={};j.T=Z;try{var F=w(),$=j.S;$!==null&&$(Z,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ht,Q)}catch(it){Q(it)}finally{j.T=V}},pt.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},pt.use=function(w){return j.H.use(w)},pt.useActionState=function(w,V,Z){return j.H.useActionState(w,V,Z)},pt.useCallback=function(w,V){return j.H.useCallback(w,V)},pt.useContext=function(w){return j.H.useContext(w)},pt.useDebugValue=function(){},pt.useDeferredValue=function(w,V){return j.H.useDeferredValue(w,V)},pt.useEffect=function(w,V,Z){var F=j.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(w,V)},pt.useId=function(){return j.H.useId()},pt.useImperativeHandle=function(w,V,Z){return j.H.useImperativeHandle(w,V,Z)},pt.useInsertionEffect=function(w,V){return j.H.useInsertionEffect(w,V)},pt.useLayoutEffect=function(w,V){return j.H.useLayoutEffect(w,V)},pt.useMemo=function(w,V){return j.H.useMemo(w,V)},pt.useOptimistic=function(w,V){return j.H.useOptimistic(w,V)},pt.useReducer=function(w,V,Z){return j.H.useReducer(w,V,Z)},pt.useRef=function(w){return j.H.useRef(w)},pt.useState=function(w){return j.H.useState(w)},pt.useSyncExternalStore=function(w,V,Z){return j.H.useSyncExternalStore(w,V,Z)},pt.useTransition=function(){return j.H.useTransition()},pt.version="19.1.1",pt}var Sy;function Eh(){return Sy||(Sy=1,ud.exports=z_()),ud.exports}var D=Eh();const G=Kv(D);var cd={exports:{}},Wo={},fd={exports:{}},dd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function V_(){return xy||(xy=1,(function(e){function t(P,q){var Q=P.length;P.push(q);t:for(;0<Q;){var ht=Q-1>>>1,w=P[ht];if(0<l(w,q))P[ht]=q,P[Q]=w,Q=ht;else break t}}function i(P){return P.length===0?null:P[0]}function o(P){if(P.length===0)return null;var q=P[0],Q=P.pop();if(Q!==q){P[0]=Q;t:for(var ht=0,w=P.length,V=w>>>1;ht<V;){var Z=2*(ht+1)-1,F=P[Z],$=Z+1,it=P[$];if(0>l(F,Q))$<w&&0>l(it,F)?(P[ht]=it,P[$]=Q,ht=$):(P[ht]=F,P[Z]=Q,ht=Z);else if($<w&&0>l(it,Q))P[ht]=it,P[$]=Q,ht=$;else break t}}return q}function l(P,q){var Q=P.sortIndex-q.sortIndex;return Q!==0?Q:P.id-q.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();e.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,y=null,T=3,x=!1,_=!1,A=!1,C=!1,R=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function Y(P){for(var q=i(m);q!==null;){if(q.callback===null)o(m);else if(q.startTime<=P)o(m),q.sortIndex=q.expirationTime,t(p,q);else break;q=i(m)}}function j(P){if(A=!1,Y(P),!_)if(i(p)!==null)_=!0,W||(W=!0,Mt());else{var q=i(m);q!==null&&Nt(j,q.startTime-P)}}var W=!1,at=-1,K=5,rt=-1;function St(){return C?!0:!(e.unstable_now()-rt<K)}function Ut(){if(C=!1,W){var P=e.unstable_now();rt=P;var q=!0;try{t:{_=!1,A&&(A=!1,L(at),at=-1),x=!0;var Q=T;try{e:{for(Y(P),y=i(p);y!==null&&!(y.expirationTime>P&&St());){var ht=y.callback;if(typeof ht=="function"){y.callback=null,T=y.priorityLevel;var w=ht(y.expirationTime<=P);if(P=e.unstable_now(),typeof w=="function"){y.callback=w,Y(P),q=!0;break e}y===i(p)&&o(p),Y(P)}else o(p);y=i(p)}if(y!==null)q=!0;else{var V=i(m);V!==null&&Nt(j,V.startTime-P),q=!1}}break t}finally{y=null,T=Q,x=!1}q=void 0}}finally{q?Mt():W=!1}}}var Mt;if(typeof U=="function")Mt=function(){U(Ut)};else if(typeof MessageChannel<"u"){var Wt=new MessageChannel,we=Wt.port2;Wt.port1.onmessage=Ut,Mt=function(){we.postMessage(null)}}else Mt=function(){R(Ut,0)};function Nt(P,q){at=R(function(){P(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return T},e.unstable_next=function(P){switch(T){case 1:case 2:case 3:var q=3;break;default:q=T}var Q=T;T=q;try{return P()}finally{T=Q}},e.unstable_requestPaint=function(){C=!0},e.unstable_runWithPriority=function(P,q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Q=T;T=P;try{return q()}finally{T=Q}},e.unstable_scheduleCallback=function(P,q,Q){var ht=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ht+Q:ht):Q=ht,P){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=Q+w,P={id:g++,callback:q,priorityLevel:P,startTime:Q,expirationTime:w,sortIndex:-1},Q>ht?(P.sortIndex=Q,t(m,P),i(p)===null&&P===i(m)&&(A?(L(at),at=-1):A=!0,Nt(j,Q-ht))):(P.sortIndex=w,t(p,P),_||x||(_=!0,W||(W=!0,Mt()))),P},e.unstable_shouldYield=St,e.unstable_wrapCallback=function(P){var q=T;return function(){var Q=T;T=q;try{return P.apply(this,arguments)}finally{T=Q}}}})(dd)),dd}var wy;function H_(){return wy||(wy=1,fd.exports=V_()),fd.exports}var hd={exports:{}},Se={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y;function j_(){if(_y)return Se;_y=1;var e=Eh();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:m,implementation:g}}var f=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Se.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,g)},Se.flushSync=function(p){var m=f.T,g=o.p;try{if(f.T=null,o.p=2,p)return p()}finally{f.T=m,o.p=g,o.d.f()}},Se.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(p,m))},Se.prefetchDNS=function(p){typeof p=="string"&&o.d.D(p)},Se.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,x=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?o.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:T,fetchPriority:x}):g==="script"&&o.d.X(p,{crossOrigin:y,integrity:T,fetchPriority:x,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Se.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);o.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(p)},Se.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin);o.d.L(p,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Se.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);o.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(p)},Se.requestFormReset=function(p){o.d.r(p)},Se.unstable_batchedUpdates=function(p,m){return p(m)},Se.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Se.useFormStatus=function(){return f.H.useHostTransitionStatus()},Se.version="19.1.1",Se}var Ey;function $v(){if(Ey)return hd.exports;Ey=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),hd.exports=j_(),hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function q_(){if(Ay)return Wo;Ay=1;var e=H_(),t=Eh(),i=$v();function o(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var a=n,r=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(r=a.return),n=a.return;while(n)}return a.tag===3?r:null}function f(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function h(n){if(u(n)!==n)throw Error(o(188))}function p(n){var a=n.alternate;if(!a){if(a=u(n),a===null)throw Error(o(188));return a!==n?null:n}for(var r=n,s=a;;){var c=r.return;if(c===null)break;var d=c.alternate;if(d===null){if(s=c.return,s!==null){r=s;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===r)return h(c),n;if(d===s)return h(c),a;d=d.sibling}throw Error(o(188))}if(r.return!==s.return)r=c,s=d;else{for(var b=!1,v=c.child;v;){if(v===r){b=!0,r=c,s=d;break}if(v===s){b=!0,s=c,r=d;break}v=v.sibling}if(!b){for(v=d.child;v;){if(v===r){b=!0,r=d,s=c;break}if(v===s){b=!0,s=d,r=c;break}v=v.sibling}if(!b)throw Error(o(189))}}if(r.alternate!==s)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?n:a}function m(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=m(n),a!==null)return a;n=n.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),at=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),rt=Symbol.for("react.activity"),St=Symbol.for("react.memo_cache_sentinel"),Ut=Symbol.iterator;function Mt(n){return n===null||typeof n!="object"?null:(n=Ut&&n[Ut]||n["@@iterator"],typeof n=="function"?n:null)}var Wt=Symbol.for("react.client.reference");function we(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Wt?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _:return"Fragment";case C:return"Profiler";case A:return"StrictMode";case j:return"Suspense";case W:return"SuspenseList";case rt:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case x:return"Portal";case U:return(n.displayName||"Context")+".Provider";case L:return(n._context.displayName||"Context")+".Consumer";case Y:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case at:return a=n.displayName||null,a!==null?a:we(n.type)||"Memo";case K:a=n._payload,n=n._init;try{return we(n(a))}catch{}}return null}var Nt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},ht=[],w=-1;function V(n){return{current:n}}function Z(n){0>w||(n.current=ht[w],ht[w]=null,w--)}function F(n,a){w++,ht[w]=n.current,n.current=a}var $=V(null),it=V(null),tt=V(null),Jt=V(null);function lt(n,a){switch(F(tt,a),F(it,n),F($,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?Y0(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=Y0(a),n=X0(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Z($),F($,n)}function _e(){Z($),Z(it),Z(tt)}function ga(n){n.memoizedState!==null&&F(Jt,n);var a=$.current,r=X0(a,n.type);a!==r&&(F(it,n),F($,r))}function jn(n){it.current===n&&(Z($),Z(it)),Jt.current===n&&(Z(Jt),Yo._currentValue=Q)}var An=Object.prototype.hasOwnProperty,Jr=e.unstable_scheduleCallback,ai=e.unstable_cancelCallback,Qu=e.unstable_shouldYield,Bs=e.unstable_requestPaint,ve=e.unstable_now,zs=e.unstable_getCurrentPriorityLevel,$e=e.unstable_ImmediatePriority,Vs=e.unstable_UserBlockingPriority,ji=e.unstable_NormalPriority,Ee=e.unstable_LowPriority,qn=e.unstable_IdlePriority,Wu=e.log,Ju=e.unstable_setDisableYieldValue,Rn=null,Ae=null;function fn(n){if(typeof Wu=="function"&&Ju(n),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Rn,n)}catch{}}var he=Math.clz32?Math.clz32:ba,ya=Math.log,Hs=Math.LN2;function ba(n){return n>>>=0,n===0?32:31-(ya(n)/Hs|0)|0}var qi=256,Fi=4194304;function On(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ii(n,a,r){var s=n.pendingLanes;if(s===0)return 0;var c=0,d=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var v=s&134217727;return v!==0?(s=v&~d,s!==0?c=On(s):(b&=v,b!==0?c=On(b):r||(r=v&~n,r!==0&&(c=On(r))))):(v=s&~d,v!==0?c=On(v):b!==0?c=On(b):r||(r=s&~n,r!==0&&(c=On(r)))),c===0?0:a!==0&&a!==c&&(a&d)===0&&(d=c&-c,r=a&-a,d>=r||d===32&&(r&4194048)!==0)?a:c}function ri(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function to(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dn(){var n=qi;return qi<<=1,(qi&4194048)===0&&(qi=256),n}function js(){var n=Fi;return Fi<<=1,(Fi&62914560)===0&&(Fi=4194304),n}function eo(n){for(var a=[],r=0;31>r;r++)a.push(n);return a}function va(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function qs(n,a,r,s,c,d){var b=n.pendingLanes;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=r,n.entangledLanes&=r,n.errorRecoveryDisabledLanes&=r,n.shellSuspendCounter=0;var v=n.entanglements,S=n.expirationTimes,M=n.hiddenUpdates;for(r=b&~r;0<r;){var B=31-he(r),H=1<<B;v[B]=0,S[B]=-1;var N=M[B];if(N!==null)for(M[B]=null,B=0;B<N.length;B++){var I=N[B];I!==null&&(I.lane&=-536870913)}r&=~H}s!==0&&dt(n,s,0),d!==0&&c===0&&n.tag!==0&&(n.suspendedLanes|=d&~(b&~a))}function dt(n,a,r){n.pendingLanes|=a,n.suspendedLanes&=~a;var s=31-he(a);n.entangledLanes|=a,n.entanglements[s]=n.entanglements[s]|1073741824|r&4194090}function Yt(n,a){var r=n.entangledLanes|=a;for(n=n.entanglements;r;){var s=31-he(r),c=1<<s;c&a|n[s]&a&&(n[s]|=a),r&=~c}}function te(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function pe(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function oi(){var n=q.p;return n!==0?n:(n=window.event,n===void 0?32:dy(n.type))}function ie(n,a){var r=q.p;try{return q.p=n,a()}finally{q.p=r}}var Xt=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Xt,Dt="__reactProps$"+Xt,le="__reactContainer$"+Xt,Gi="__reactEvents$"+Xt,Fn="__reactListeners$"+Xt,Np="__reactHandles$"+Xt,Pp="__reactResources$"+Xt,no="__reactMarker$"+Xt;function tc(n){delete n[Kt],delete n[Dt],delete n[Gi],delete n[Fn],delete n[Np]}function Yi(n){var a=n[Kt];if(a)return a;for(var r=n.parentNode;r;){if(a=r[le]||r[Kt]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(n=Q0(n);n!==null;){if(r=n[Kt])return r;n=Q0(n)}return a}n=r,r=n.parentNode}return null}function Xi(n){if(n=n[Kt]||n[le]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function ao(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(o(33))}function Ki(n){var a=n[Pp];return a||(a=n[Pp]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ue(n){n[no]=!0}var Ip=new Set,Lp={};function si(n,a){$i(n,a),$i(n+"Capture",a)}function $i(n,a){for(Lp[n]=a,n=0;n<a.length;n++)Ip.add(a[n])}var Cx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Up={},Bp={};function Dx(n){return An.call(Bp,n)?!0:An.call(Up,n)?!1:Cx.test(n)?Bp[n]=!0:(Up[n]=!0,!1)}function Fs(n,a,r){if(Dx(a))if(r===null)n.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var s=a.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+r)}}function Gs(n,a,r){if(r===null)n.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+r)}}function Gn(n,a,r,s){if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttributeNS(a,r,""+s)}}var ec,zp;function Zi(n){if(ec===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);ec=a&&a[1]||"",zp=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ec+n+zp}var nc=!1;function ac(n,a){if(!n||nc)return"";nc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(a){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(I){var N=I}Reflect.construct(n,[],H)}else{try{H.call()}catch(I){N=I}n.call(H.prototype)}}else{try{throw Error()}catch(I){N=I}(H=n())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(I){if(I&&N&&typeof I.stack=="string")return[I.stack,N.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=s.DetermineComponentFrameRoot(),b=d[0],v=d[1];if(b&&v){var S=b.split(`
`),M=v.split(`
`);for(c=s=0;s<S.length&&!S[s].includes("DetermineComponentFrameRoot");)s++;for(;c<M.length&&!M[c].includes("DetermineComponentFrameRoot");)c++;if(s===S.length||c===M.length)for(s=S.length-1,c=M.length-1;1<=s&&0<=c&&S[s]!==M[c];)c--;for(;1<=s&&0<=c;s--,c--)if(S[s]!==M[c]){if(s!==1||c!==1)do if(s--,c--,0>c||S[s]!==M[c]){var B=`
`+S[s].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=s&&0<=c);break}}}finally{nc=!1,Error.prepareStackTrace=r}return(r=n?n.displayName||n.name:"")?Zi(r):""}function kx(n){switch(n.tag){case 26:case 27:case 5:return Zi(n.type);case 16:return Zi("Lazy");case 13:return Zi("Suspense");case 19:return Zi("SuspenseList");case 0:case 15:return ac(n.type,!1);case 11:return ac(n.type.render,!1);case 1:return ac(n.type,!0);case 31:return Zi("Activity");default:return""}}function Vp(n){try{var a="";do a+=kx(n),n=n.return;while(n);return a}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Ze(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Hp(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Mx(n){var a=Hp(n)?"checked":"value",r=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),s=""+n[a];if(!n.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,d=r.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return c.call(this)},set:function(b){s=""+b,d.call(this,b)}}),Object.defineProperty(n,a,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Ys(n){n._valueTracker||(n._valueTracker=Mx(n))}function jp(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var r=a.getValue(),s="";return n&&(s=Hp(n)?n.checked?"true":"false":n.value),n=s,n!==r?(a.setValue(n),!0):!1}function Xs(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Nx=/[\n"\\]/g;function Qe(n){return n.replace(Nx,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function ic(n,a,r,s,c,d,b,v){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),a!=null?b==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+Ze(a)):n.value!==""+Ze(a)&&(n.value=""+Ze(a)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),a!=null?rc(n,b,Ze(a)):r!=null?rc(n,b,Ze(r)):s!=null&&n.removeAttribute("value"),c==null&&d!=null&&(n.defaultChecked=!!d),c!=null&&(n.checked=c&&typeof c!="function"&&typeof c!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.name=""+Ze(v):n.removeAttribute("name")}function qp(n,a,r,s,c,d,b,v){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),a!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||a!=null))return;r=r!=null?""+Ze(r):"",a=a!=null?""+Ze(a):r,v||a===n.value||(n.value=a),n.defaultValue=a}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,n.checked=v?n.checked:!!s,n.defaultChecked=!!s,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b)}function rc(n,a,r){a==="number"&&Xs(n.ownerDocument)===n||n.defaultValue===""+r||(n.defaultValue=""+r)}function Qi(n,a,r,s){if(n=n.options,a){a={};for(var c=0;c<r.length;c++)a["$"+r[c]]=!0;for(r=0;r<n.length;r++)c=a.hasOwnProperty("$"+n[r].value),n[r].selected!==c&&(n[r].selected=c),c&&s&&(n[r].defaultSelected=!0)}else{for(r=""+Ze(r),a=null,c=0;c<n.length;c++){if(n[c].value===r){n[c].selected=!0,s&&(n[c].defaultSelected=!0);return}a!==null||n[c].disabled||(a=n[c])}a!==null&&(a.selected=!0)}}function Fp(n,a,r){if(a!=null&&(a=""+Ze(a),a!==n.value&&(n.value=a),r==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=r!=null?""+Ze(r):""}function Gp(n,a,r,s){if(a==null){if(s!=null){if(r!=null)throw Error(o(92));if(Nt(s)){if(1<s.length)throw Error(o(93));s=s[0]}r=s}r==null&&(r=""),a=r}r=Ze(a),n.defaultValue=r,s=n.textContent,s===r&&s!==""&&s!==null&&(n.value=s)}function Wi(n,a){if(a){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=a;return}}n.textContent=a}var Px=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yp(n,a,r){var s=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?s?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":s?n.setProperty(a,r):typeof r!="number"||r===0||Px.has(a)?a==="float"?n.cssFloat=r:n[a]=(""+r).trim():n[a]=r+"px"}function Xp(n,a,r){if(a!=null&&typeof a!="object")throw Error(o(62));if(n=n.style,r!=null){for(var s in r)!r.hasOwnProperty(s)||a!=null&&a.hasOwnProperty(s)||(s.indexOf("--")===0?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="");for(var c in a)s=a[c],a.hasOwnProperty(c)&&r[c]!==s&&Yp(n,c,s)}else for(var d in a)a.hasOwnProperty(d)&&Yp(n,d,a[d])}function oc(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ks(n){return Lx.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var sc=null;function lc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ji=null,tr=null;function Kp(n){var a=Xi(n);if(a&&(n=a.stateNode)){var r=n[Dt]||null;t:switch(n=a.stateNode,a.type){case"input":if(ic(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Qe(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var s=r[a];if(s!==n&&s.form===n.form){var c=s[Dt]||null;if(!c)throw Error(o(90));ic(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(a=0;a<r.length;a++)s=r[a],s.form===n.form&&jp(s)}break t;case"textarea":Fp(n,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Qi(n,!!r.multiple,a,!1)}}}var uc=!1;function $p(n,a,r){if(uc)return n(a,r);uc=!0;try{var s=n(a);return s}finally{if(uc=!1,(Ji!==null||tr!==null)&&(Nl(),Ji&&(a=Ji,n=tr,tr=Ji=null,Kp(a),n)))for(a=0;a<n.length;a++)Kp(n[a])}}function io(n,a){var r=n.stateNode;if(r===null)return null;var s=r[Dt]||null;if(s===null)return null;r=s[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(n=n.type,s=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!s;break t;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(o(231,a,typeof r));return r}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=!1;if(Yn)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){cc=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{cc=!1}var Ta=null,fc=null,$s=null;function Zp(){if($s)return $s;var n,a=fc,r=a.length,s,c="value"in Ta?Ta.value:Ta.textContent,d=c.length;for(n=0;n<r&&a[n]===c[n];n++);var b=r-n;for(s=1;s<=b&&a[r-s]===c[d-s];s++);return $s=c.slice(n,1<s?1-s:void 0)}function Zs(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Qs(){return!0}function Qp(){return!1}function Me(n){function a(r,s,c,d,b){this._reactName=r,this._targetInst=c,this.type=s,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var v in n)n.hasOwnProperty(v)&&(r=n[v],this[v]=r?r(d):d[v]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Qs:Qp,this.isPropagationStopped=Qp,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),a}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=Me(li),oo=g({},li,{view:0,detail:0}),Ux=Me(oo),dc,hc,so,Js=g({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==so&&(so&&n.type==="mousemove"?(dc=n.screenX-so.screenX,hc=n.screenY-so.screenY):hc=dc=0,so=n),dc)},movementY:function(n){return"movementY"in n?n.movementY:hc}}),Wp=Me(Js),Bx=g({},Js,{dataTransfer:0}),zx=Me(Bx),Vx=g({},oo,{relatedTarget:0}),pc=Me(Vx),Hx=g({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),jx=Me(Hx),qx=g({},li,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fx=Me(qx),Gx=g({},li,{data:0}),Jp=Me(Gx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $x(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=Kx[n])?!!a[n]:!1}function mc(){return $x}var Zx=g({},oo,{key:function(n){if(n.key){var a=Yx[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Zs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Xx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(n){return n.type==="keypress"?Zs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Zs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Qx=Me(Zx),Wx=g({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tm=Me(Wx),Jx=g({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),tw=Me(Jx),ew=g({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),nw=Me(ew),aw=g({},Js,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),iw=Me(aw),rw=g({},li,{newState:0,oldState:0}),ow=Me(rw),sw=[9,13,27,32],gc=Yn&&"CompositionEvent"in window,lo=null;Yn&&"documentMode"in document&&(lo=document.documentMode);var lw=Yn&&"TextEvent"in window&&!lo,em=Yn&&(!gc||lo&&8<lo&&11>=lo),nm=" ",am=!1;function im(n,a){switch(n){case"keyup":return sw.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var er=!1;function uw(n,a){switch(n){case"compositionend":return rm(a);case"keypress":return a.which!==32?null:(am=!0,nm);case"textInput":return n=a.data,n===nm&&am?null:n;default:return null}}function cw(n,a){if(er)return n==="compositionend"||!gc&&im(n,a)?(n=Zp(),$s=fc=Ta=null,er=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return em&&a.locale!=="ko"?null:a.data;default:return null}}var fw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!fw[n.type]:a==="textarea"}function sm(n,a,r,s){Ji?tr?tr.push(s):tr=[s]:Ji=s,a=zl(a,"onChange"),0<a.length&&(r=new Ws("onChange","change",null,r,s),n.push({event:r,listeners:a}))}var uo=null,co=null;function dw(n){H0(n,0)}function tl(n){var a=ao(n);if(jp(a))return n}function lm(n,a){if(n==="change")return a}var um=!1;if(Yn){var yc;if(Yn){var bc="oninput"in document;if(!bc){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),bc=typeof cm.oninput=="function"}yc=bc}else yc=!1;um=yc&&(!document.documentMode||9<document.documentMode)}function fm(){uo&&(uo.detachEvent("onpropertychange",dm),co=uo=null)}function dm(n){if(n.propertyName==="value"&&tl(co)){var a=[];sm(a,co,n,lc(n)),$p(dw,a)}}function hw(n,a,r){n==="focusin"?(fm(),uo=a,co=r,uo.attachEvent("onpropertychange",dm)):n==="focusout"&&fm()}function pw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return tl(co)}function mw(n,a){if(n==="click")return tl(a)}function gw(n,a){if(n==="input"||n==="change")return tl(a)}function yw(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var Be=typeof Object.is=="function"?Object.is:yw;function fo(n,a){if(Be(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var r=Object.keys(n),s=Object.keys(a);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var c=r[s];if(!An.call(a,c)||!Be(n[c],a[c]))return!1}return!0}function hm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pm(n,a){var r=hm(n);n=0;for(var s;r;){if(r.nodeType===3){if(s=n+r.textContent.length,n<=a&&s>=a)return{node:r,offset:a-n};n=s}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=hm(r)}}function mm(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?mm(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function gm(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Xs(n.document);a instanceof n.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)n=a.contentWindow;else break;a=Xs(n.document)}return a}function vc(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var bw=Yn&&"documentMode"in document&&11>=document.documentMode,nr=null,Tc=null,ho=null,Sc=!1;function ym(n,a,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Sc||nr==null||nr!==Xs(s)||(s=nr,"selectionStart"in s&&vc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ho&&fo(ho,s)||(ho=s,s=zl(Tc,"onSelect"),0<s.length&&(a=new Ws("onSelect","select",null,a,r),n.push({event:a,listeners:s}),a.target=nr)))}function ui(n,a){var r={};return r[n.toLowerCase()]=a.toLowerCase(),r["Webkit"+n]="webkit"+a,r["Moz"+n]="moz"+a,r}var ar={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionrun:ui("Transition","TransitionRun"),transitionstart:ui("Transition","TransitionStart"),transitioncancel:ui("Transition","TransitionCancel"),transitionend:ui("Transition","TransitionEnd")},xc={},bm={};Yn&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function ci(n){if(xc[n])return xc[n];if(!ar[n])return n;var a=ar[n],r;for(r in a)if(a.hasOwnProperty(r)&&r in bm)return xc[n]=a[r];return n}var vm=ci("animationend"),Tm=ci("animationiteration"),Sm=ci("animationstart"),vw=ci("transitionrun"),Tw=ci("transitionstart"),Sw=ci("transitioncancel"),xm=ci("transitionend"),wm=new Map,wc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wc.push("scrollEnd");function hn(n,a){wm.set(n,a),si(a,[n])}var _m=new WeakMap;function We(n,a){if(typeof n=="object"&&n!==null){var r=_m.get(n);return r!==void 0?r:(a={value:n,source:a,stack:Vp(a)},_m.set(n,a),a)}return{value:n,source:a,stack:Vp(a)}}var Je=[],ir=0,_c=0;function el(){for(var n=ir,a=_c=ir=0;a<n;){var r=Je[a];Je[a++]=null;var s=Je[a];Je[a++]=null;var c=Je[a];Je[a++]=null;var d=Je[a];if(Je[a++]=null,s!==null&&c!==null){var b=s.pending;b===null?c.next=c:(c.next=b.next,b.next=c),s.pending=c}d!==0&&Em(r,c,d)}}function nl(n,a,r,s){Je[ir++]=n,Je[ir++]=a,Je[ir++]=r,Je[ir++]=s,_c|=s,n.lanes|=s,n=n.alternate,n!==null&&(n.lanes|=s)}function Ec(n,a,r,s){return nl(n,a,r,s),al(n)}function rr(n,a){return nl(n,null,null,a),al(n)}function Em(n,a,r){n.lanes|=r;var s=n.alternate;s!==null&&(s.lanes|=r);for(var c=!1,d=n.return;d!==null;)d.childLanes|=r,s=d.alternate,s!==null&&(s.childLanes|=r),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(c=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,c&&a!==null&&(c=31-he(r),n=d.hiddenUpdates,s=n[c],s===null?n[c]=[a]:s.push(a),a.lane=r|536870912),d):null}function al(n){if(50<Bo)throw Bo=0,Mf=null,Error(o(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var or={};function xw(n,a,r,s){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(n,a,r,s){return new xw(n,a,r,s)}function Ac(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Xn(n,a){var r=n.alternate;return r===null?(r=ze(n.tag,a,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=a,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&65011712,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,a=n.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r.refCleanup=n.refCleanup,r}function Am(n,a){n.flags&=65011714;var r=n.alternate;return r===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=r.childLanes,n.lanes=r.lanes,n.child=r.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=r.memoizedProps,n.memoizedState=r.memoizedState,n.updateQueue=r.updateQueue,n.type=r.type,a=r.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function il(n,a,r,s,c,d){var b=0;if(s=n,typeof n=="function")Ac(n)&&(b=1);else if(typeof n=="string")b=__(n,r,$.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case rt:return n=ze(31,r,a,c),n.elementType=rt,n.lanes=d,n;case _:return fi(r.children,c,d,a);case A:b=8,c|=24;break;case C:return n=ze(12,r,a,c|2),n.elementType=C,n.lanes=d,n;case j:return n=ze(13,r,a,c),n.elementType=j,n.lanes=d,n;case W:return n=ze(19,r,a,c),n.elementType=W,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:case U:b=10;break t;case L:b=9;break t;case Y:b=11;break t;case at:b=14;break t;case K:b=16,s=null;break t}b=29,r=Error(o(130,n===null?"null":typeof n,"")),s=null}return a=ze(b,r,a,c),a.elementType=n,a.type=s,a.lanes=d,a}function fi(n,a,r,s){return n=ze(7,n,s,a),n.lanes=r,n}function Rc(n,a,r){return n=ze(6,n,null,a),n.lanes=r,n}function Oc(n,a,r){return a=ze(4,n.children!==null?n.children:[],n.key,a),a.lanes=r,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var sr=[],lr=0,rl=null,ol=0,tn=[],en=0,di=null,Kn=1,$n="";function hi(n,a){sr[lr++]=ol,sr[lr++]=rl,rl=n,ol=a}function Rm(n,a,r){tn[en++]=Kn,tn[en++]=$n,tn[en++]=di,di=n;var s=Kn;n=$n;var c=32-he(s)-1;s&=~(1<<c),r+=1;var d=32-he(a)+c;if(30<d){var b=c-c%5;d=(s&(1<<b)-1).toString(32),s>>=b,c-=b,Kn=1<<32-he(a)+c|r<<c|s,$n=d+n}else Kn=1<<d|r<<c|s,$n=n}function Cc(n){n.return!==null&&(hi(n,1),Rm(n,1,0))}function Dc(n){for(;n===rl;)rl=sr[--lr],sr[lr]=null,ol=sr[--lr],sr[lr]=null;for(;n===di;)di=tn[--en],tn[en]=null,$n=tn[--en],tn[en]=null,Kn=tn[--en],tn[en]=null}var Re=null,Ht=null,xt=!1,pi=null,Cn=!1,kc=Error(o(519));function mi(n){var a=Error(o(418,""));throw go(We(a,n)),kc}function Om(n){var a=n.stateNode,r=n.type,s=n.memoizedProps;switch(a[Kt]=n,a[Dt]=s,r){case"dialog":bt("cancel",a),bt("close",a);break;case"iframe":case"object":case"embed":bt("load",a);break;case"video":case"audio":for(r=0;r<Vo.length;r++)bt(Vo[r],a);break;case"source":bt("error",a);break;case"img":case"image":case"link":bt("error",a),bt("load",a);break;case"details":bt("toggle",a);break;case"input":bt("invalid",a),qp(a,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ys(a);break;case"select":bt("invalid",a);break;case"textarea":bt("invalid",a),Gp(a,s.value,s.defaultValue,s.children),Ys(a)}r=s.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||s.suppressHydrationWarning===!0||G0(a.textContent,r)?(s.popover!=null&&(bt("beforetoggle",a),bt("toggle",a)),s.onScroll!=null&&bt("scroll",a),s.onScrollEnd!=null&&bt("scrollend",a),s.onClick!=null&&(a.onclick=Vl),a=!0):a=!1,a||mi(n)}function Cm(n){for(Re=n.return;Re;)switch(Re.tag){case 5:case 13:Cn=!1;return;case 27:case 3:Cn=!0;return;default:Re=Re.return}}function po(n){if(n!==Re)return!1;if(!xt)return Cm(n),xt=!0,!1;var a=n.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=n.type,r=!(r!=="form"&&r!=="button")||Kf(n.type,n.memoizedProps)),r=!r),r&&Ht&&mi(n),Cm(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));t:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(r=n.data,r==="/$"){if(a===0){Ht=mn(n.nextSibling);break t}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++;n=n.nextSibling}Ht=null}}else a===27?(a=Ht,La(n.type)?(n=Wf,Wf=null,Ht=n):Ht=a):Ht=Re?mn(n.stateNode.nextSibling):null;return!0}function mo(){Ht=Re=null,xt=!1}function Dm(){var n=pi;return n!==null&&(Ie===null?Ie=n:Ie.push.apply(Ie,n),pi=null),n}function go(n){pi===null?pi=[n]:pi.push(n)}var Mc=V(null),gi=null,Zn=null;function Sa(n,a,r){F(Mc,a._currentValue),a._currentValue=r}function Qn(n){n._currentValue=Mc.current,Z(Mc)}function Nc(n,a,r){for(;n!==null;){var s=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,s!==null&&(s.childLanes|=a)):s!==null&&(s.childLanes&a)!==a&&(s.childLanes|=a),n===r)break;n=n.return}}function Pc(n,a,r,s){var c=n.child;for(c!==null&&(c.return=n);c!==null;){var d=c.dependencies;if(d!==null){var b=c.child;d=d.firstContext;t:for(;d!==null;){var v=d;d=c;for(var S=0;S<a.length;S++)if(v.context===a[S]){d.lanes|=r,v=d.alternate,v!==null&&(v.lanes|=r),Nc(d.return,r,n),s||(b=null);break t}d=v.next}}else if(c.tag===18){if(b=c.return,b===null)throw Error(o(341));b.lanes|=r,d=b.alternate,d!==null&&(d.lanes|=r),Nc(b,r,n),b=null}else b=c.child;if(b!==null)b.return=c;else for(b=c;b!==null;){if(b===n){b=null;break}if(c=b.sibling,c!==null){c.return=b.return,b=c;break}b=b.return}c=b}}function yo(n,a,r,s){n=null;for(var c=a,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var b=c.alternate;if(b===null)throw Error(o(387));if(b=b.memoizedProps,b!==null){var v=c.type;Be(c.pendingProps.value,b.value)||(n!==null?n.push(v):n=[v])}}else if(c===Jt.current){if(b=c.alternate,b===null)throw Error(o(387));b.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(n!==null?n.push(Yo):n=[Yo])}c=c.return}n!==null&&Pc(a,n,r,s),a.flags|=262144}function sl(n){for(n=n.firstContext;n!==null;){if(!Be(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function yi(n){gi=n,Zn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Te(n){return km(gi,n)}function ll(n,a){return gi===null&&yi(n),km(n,a)}function km(n,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},Zn===null){if(n===null)throw Error(o(308));Zn=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Zn=Zn.next=a;return r}var ww=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(r,s){n.push(s)}};this.abort=function(){a.aborted=!0,n.forEach(function(r){return r()})}},_w=e.unstable_scheduleCallback,Ew=e.unstable_NormalPriority,re={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ic(){return{controller:new ww,data:new Map,refCount:0}}function bo(n){n.refCount--,n.refCount===0&&_w(Ew,function(){n.controller.abort()})}var vo=null,Lc=0,ur=0,cr=null;function Aw(n,a){if(vo===null){var r=vo=[];Lc=0,ur=zf(),cr={status:"pending",value:void 0,then:function(s){r.push(s)}}}return Lc++,a.then(Mm,Mm),a}function Mm(){if(--Lc===0&&vo!==null){cr!==null&&(cr.status="fulfilled");var n=vo;vo=null,ur=0,cr=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function Rw(n,a){var r=[],s={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return n.then(function(){s.status="fulfilled",s.value=a;for(var c=0;c<r.length;c++)(0,r[c])(a)},function(c){for(s.status="rejected",s.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),s}var Nm=P.S;P.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&Aw(n,a),Nm!==null&&Nm(n,a)};var bi=V(null);function Uc(){var n=bi.current;return n!==null?n:kt.pooledCache}function ul(n,a){a===null?F(bi,bi.current):F(bi,a.pool)}function Pm(){var n=Uc();return n===null?null:{parent:re._currentValue,pool:n}}var To=Error(o(460)),Im=Error(o(474)),cl=Error(o(542)),Bc={then:function(){}};function Lm(n){return n=n.status,n==="fulfilled"||n==="rejected"}function fl(){}function Um(n,a,r){switch(r=n[r],r===void 0?n.push(a):r!==a&&(a.then(fl,fl),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,zm(n),n;default:if(typeof a.status=="string")a.then(fl,fl);else{if(n=kt,n!==null&&100<n.shellSuspendCounter)throw Error(o(482));n=a,n.status="pending",n.then(function(s){if(a.status==="pending"){var c=a;c.status="fulfilled",c.value=s}},function(s){if(a.status==="pending"){var c=a;c.status="rejected",c.reason=s}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,zm(n),n}throw So=a,To}}var So=null;function Bm(){if(So===null)throw Error(o(459));var n=So;return So=null,n}function zm(n){if(n===To||n===cl)throw Error(o(483))}var xa=!1;function zc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vc(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function wa(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function _a(n,a,r){var s=n.updateQueue;if(s===null)return null;if(s=s.shared,(wt&2)!==0){var c=s.pending;return c===null?a.next=a:(a.next=c.next,c.next=a),s.pending=a,a=al(n),Em(n,null,r),a}return nl(n,s,a,r),al(n)}function xo(n,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var s=a.lanes;s&=n.pendingLanes,r|=s,a.lanes=r,Yt(n,r)}}function Hc(n,a){var r=n.updateQueue,s=n.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var c=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?c=d=b:d=d.next=b,r=r.next}while(r!==null);d===null?c=d=a:d=d.next=a}else c=d=a;r={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:s.shared,callbacks:s.callbacks},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=a:n.next=a,r.lastBaseUpdate=a}var jc=!1;function wo(){if(jc){var n=cr;if(n!==null)throw n}}function _o(n,a,r,s){jc=!1;var c=n.updateQueue;xa=!1;var d=c.firstBaseUpdate,b=c.lastBaseUpdate,v=c.shared.pending;if(v!==null){c.shared.pending=null;var S=v,M=S.next;S.next=null,b===null?d=M:b.next=M,b=S;var B=n.alternate;B!==null&&(B=B.updateQueue,v=B.lastBaseUpdate,v!==b&&(v===null?B.firstBaseUpdate=M:v.next=M,B.lastBaseUpdate=S))}if(d!==null){var H=c.baseState;b=0,B=M=S=null,v=d;do{var N=v.lane&-536870913,I=N!==v.lane;if(I?(vt&N)===N:(s&N)===N){N!==0&&N===ur&&(jc=!0),B!==null&&(B=B.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var ct=n,ot=v;N=a;var Rt=r;switch(ot.tag){case 1:if(ct=ot.payload,typeof ct=="function"){H=ct.call(Rt,H,N);break t}H=ct;break t;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=ot.payload,N=typeof ct=="function"?ct.call(Rt,H,N):ct,N==null)break t;H=g({},H,N);break t;case 2:xa=!0}}N=v.callback,N!==null&&(n.flags|=64,I&&(n.flags|=8192),I=c.callbacks,I===null?c.callbacks=[N]:I.push(N))}else I={lane:N,tag:v.tag,payload:v.payload,callback:v.callback,next:null},B===null?(M=B=I,S=H):B=B.next=I,b|=N;if(v=v.next,v===null){if(v=c.shared.pending,v===null)break;I=v,v=I.next,I.next=null,c.lastBaseUpdate=I,c.shared.pending=null}}while(!0);B===null&&(S=H),c.baseState=S,c.firstBaseUpdate=M,c.lastBaseUpdate=B,d===null&&(c.shared.lanes=0),Ma|=b,n.lanes=b,n.memoizedState=H}}function Vm(n,a){if(typeof n!="function")throw Error(o(191,n));n.call(a)}function Hm(n,a){var r=n.callbacks;if(r!==null)for(n.callbacks=null,n=0;n<r.length;n++)Vm(r[n],a)}var fr=V(null),dl=V(0);function jm(n,a){n=ia,F(dl,n),F(fr,a),ia=n|a.baseLanes}function qc(){F(dl,ia),F(fr,fr.current)}function Fc(){ia=dl.current,Z(fr),Z(dl)}var Ea=0,mt=null,Et=null,ee=null,hl=!1,dr=!1,vi=!1,pl=0,Eo=0,hr=null,Ow=0;function $t(){throw Error(o(321))}function Gc(n,a){if(a===null)return!1;for(var r=0;r<a.length&&r<n.length;r++)if(!Be(n[r],a[r]))return!1;return!0}function Yc(n,a,r,s,c,d){return Ea=d,mt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,P.H=n===null||n.memoizedState===null?Eg:Ag,vi=!1,d=r(s,c),vi=!1,dr&&(d=Fm(a,r,s,c)),qm(n),d}function qm(n){P.H=Tl;var a=Et!==null&&Et.next!==null;if(Ea=0,ee=Et=mt=null,hl=!1,Eo=0,hr=null,a)throw Error(o(300));n===null||ce||(n=n.dependencies,n!==null&&sl(n)&&(ce=!0))}function Fm(n,a,r,s){mt=n;var c=0;do{if(dr&&(hr=null),Eo=0,dr=!1,25<=c)throw Error(o(301));if(c+=1,ee=Et=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=Iw,d=a(r,s)}while(dr);return d}function Cw(){var n=P.H,a=n.useState()[0];return a=typeof a.then=="function"?Ao(a):a,n=n.useState()[0],(Et!==null?Et.memoizedState:null)!==n&&(mt.flags|=1024),a}function Xc(){var n=pl!==0;return pl=0,n}function Kc(n,a,r){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~r}function $c(n){if(hl){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}hl=!1}Ea=0,ee=Et=mt=null,dr=!1,Eo=pl=0,hr=null}function Ne(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?mt.memoizedState=ee=n:ee=ee.next=n,ee}function ne(){if(Et===null){var n=mt.alternate;n=n!==null?n.memoizedState:null}else n=Et.next;var a=ee===null?mt.memoizedState:ee.next;if(a!==null)ee=a,Et=n;else{if(n===null)throw mt.alternate===null?Error(o(467)):Error(o(310));Et=n,n={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},ee===null?mt.memoizedState=ee=n:ee=ee.next=n}return ee}function Zc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(n){var a=Eo;return Eo+=1,hr===null&&(hr=[]),n=Um(hr,n,a),a=mt,(ee===null?a.memoizedState:ee.next)===null&&(a=a.alternate,P.H=a===null||a.memoizedState===null?Eg:Ag),n}function ml(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Ao(n);if(n.$$typeof===U)return Te(n)}throw Error(o(438,String(n)))}function Qc(n){var a=null,r=mt.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var s=mt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(a={data:s.data.map(function(c){return c.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=Zc(),mt.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(n),s=0;s<n;s++)r[s]=St;return a.index++,r}function Wn(n,a){return typeof a=="function"?a(n):a}function gl(n){var a=ne();return Wc(a,Et,n)}function Wc(n,a,r){var s=n.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=r;var c=n.baseQueue,d=s.pending;if(d!==null){if(c!==null){var b=c.next;c.next=d.next,d.next=b}a.baseQueue=c=d,s.pending=null}if(d=n.baseState,c===null)n.memoizedState=d;else{a=c.next;var v=b=null,S=null,M=a,B=!1;do{var H=M.lane&-536870913;if(H!==M.lane?(vt&H)===H:(Ea&H)===H){var N=M.revertLane;if(N===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),H===ur&&(B=!0);else if((Ea&N)===N){M=M.next,N===ur&&(B=!0);continue}else H={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(v=S=H,b=d):S=S.next=H,mt.lanes|=N,Ma|=N;H=M.action,vi&&r(d,H),d=M.hasEagerState?M.eagerState:r(d,H)}else N={lane:H,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(v=S=N,b=d):S=S.next=N,mt.lanes|=H,Ma|=H;M=M.next}while(M!==null&&M!==a);if(S===null?b=d:S.next=v,!Be(d,n.memoizedState)&&(ce=!0,B&&(r=cr,r!==null)))throw r;n.memoizedState=d,n.baseState=b,n.baseQueue=S,s.lastRenderedState=d}return c===null&&(s.lanes=0),[n.memoizedState,s.dispatch]}function Jc(n){var a=ne(),r=a.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=n;var s=r.dispatch,c=r.pending,d=a.memoizedState;if(c!==null){r.pending=null;var b=c=c.next;do d=n(d,b.action),b=b.next;while(b!==c);Be(d,a.memoizedState)||(ce=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),r.lastRenderedState=d}return[d,s]}function Gm(n,a,r){var s=mt,c=ne(),d=xt;if(d){if(r===void 0)throw Error(o(407));r=r()}else r=a();var b=!Be((Et||c).memoizedState,r);b&&(c.memoizedState=r,ce=!0),c=c.queue;var v=Km.bind(null,s,c,n);if(Ro(2048,8,v,[n]),c.getSnapshot!==a||b||ee!==null&&ee.memoizedState.tag&1){if(s.flags|=2048,pr(9,yl(),Xm.bind(null,s,c,r,a),null),kt===null)throw Error(o(349));d||(Ea&124)!==0||Ym(s,a,r)}return r}function Ym(n,a,r){n.flags|=16384,n={getSnapshot:a,value:r},a=mt.updateQueue,a===null?(a=Zc(),mt.updateQueue=a,a.stores=[n]):(r=a.stores,r===null?a.stores=[n]:r.push(n))}function Xm(n,a,r,s){a.value=r,a.getSnapshot=s,$m(a)&&Zm(n)}function Km(n,a,r){return r(function(){$m(a)&&Zm(n)})}function $m(n){var a=n.getSnapshot;n=n.value;try{var r=a();return!Be(n,r)}catch{return!0}}function Zm(n){var a=rr(n,2);a!==null&&Fe(a,n,2)}function tf(n){var a=Ne();if(typeof n=="function"){var r=n;if(n=r(),vi){fn(!0);try{r()}finally{fn(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:n},a}function Qm(n,a,r,s){return n.baseState=r,Wc(n,Et,typeof s=="function"?s:Wn)}function Dw(n,a,r,s,c){if(vl(n))throw Error(o(485));if(n=a.action,n!==null){var d={payload:c,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};P.T!==null?r(!0):d.isTransition=!1,s(d),r=a.pending,r===null?(d.next=a.pending=d,Wm(a,d)):(d.next=r.next,a.pending=r.next=d)}}function Wm(n,a){var r=a.action,s=a.payload,c=n.state;if(a.isTransition){var d=P.T,b={};P.T=b;try{var v=r(c,s),S=P.S;S!==null&&S(b,v),Jm(n,a,v)}catch(M){ef(n,a,M)}finally{P.T=d}}else try{d=r(c,s),Jm(n,a,d)}catch(M){ef(n,a,M)}}function Jm(n,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(s){tg(n,a,s)},function(s){return ef(n,a,s)}):tg(n,a,r)}function tg(n,a,r){a.status="fulfilled",a.value=r,eg(a),n.state=r,a=n.pending,a!==null&&(r=a.next,r===a?n.pending=null:(r=r.next,a.next=r,Wm(n,r)))}function ef(n,a,r){var s=n.pending;if(n.pending=null,s!==null){s=s.next;do a.status="rejected",a.reason=r,eg(a),a=a.next;while(a!==s)}n.action=null}function eg(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function ng(n,a){return a}function ag(n,a){if(xt){var r=kt.formState;if(r!==null){t:{var s=mt;if(xt){if(Ht){e:{for(var c=Ht,d=Cn;c.nodeType!==8;){if(!d){c=null;break e}if(c=mn(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Ht=mn(c.nextSibling),s=c.data==="F!";break t}}mi(s)}s=!1}s&&(a=r[0])}}return r=Ne(),r.memoizedState=r.baseState=a,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ng,lastRenderedState:a},r.queue=s,r=xg.bind(null,mt,s),s.dispatch=r,s=tf(!1),d=sf.bind(null,mt,!1,s.queue),s=Ne(),c={state:a,dispatch:null,action:n,pending:null},s.queue=c,r=Dw.bind(null,mt,c,d,r),c.dispatch=r,s.memoizedState=n,[a,r,!1]}function ig(n){var a=ne();return rg(a,Et,n)}function rg(n,a,r){if(a=Wc(n,a,ng)[0],n=gl(Wn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var s=Ao(a)}catch(b){throw b===To?cl:b}else s=a;a=ne();var c=a.queue,d=c.dispatch;return r!==a.memoizedState&&(mt.flags|=2048,pr(9,yl(),kw.bind(null,c,r),null)),[s,d,n]}function kw(n,a){n.action=a}function og(n){var a=ne(),r=Et;if(r!==null)return rg(a,r,n);ne(),a=a.memoizedState,r=ne();var s=r.queue.dispatch;return r.memoizedState=n,[a,s,!1]}function pr(n,a,r,s){return n={tag:n,create:r,deps:s,inst:a,next:null},a=mt.updateQueue,a===null&&(a=Zc(),mt.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=n.next=n:(s=r.next,r.next=n,n.next=s,a.lastEffect=n),n}function yl(){return{destroy:void 0,resource:void 0}}function sg(){return ne().memoizedState}function bl(n,a,r,s){var c=Ne();s=s===void 0?null:s,mt.flags|=n,c.memoizedState=pr(1|a,yl(),r,s)}function Ro(n,a,r,s){var c=ne();s=s===void 0?null:s;var d=c.memoizedState.inst;Et!==null&&s!==null&&Gc(s,Et.memoizedState.deps)?c.memoizedState=pr(a,d,r,s):(mt.flags|=n,c.memoizedState=pr(1|a,d,r,s))}function lg(n,a){bl(8390656,8,n,a)}function ug(n,a){Ro(2048,8,n,a)}function cg(n,a){return Ro(4,2,n,a)}function fg(n,a){return Ro(4,4,n,a)}function dg(n,a){if(typeof a=="function"){n=n();var r=a(n);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function hg(n,a,r){r=r!=null?r.concat([n]):null,Ro(4,4,dg.bind(null,a,n),r)}function nf(){}function pg(n,a){var r=ne();a=a===void 0?null:a;var s=r.memoizedState;return a!==null&&Gc(a,s[1])?s[0]:(r.memoizedState=[n,a],n)}function mg(n,a){var r=ne();a=a===void 0?null:a;var s=r.memoizedState;if(a!==null&&Gc(a,s[1]))return s[0];if(s=n(),vi){fn(!0);try{n()}finally{fn(!1)}}return r.memoizedState=[s,a],s}function af(n,a,r){return r===void 0||(Ea&1073741824)!==0?n.memoizedState=a:(n.memoizedState=r,n=b0(),mt.lanes|=n,Ma|=n,r)}function gg(n,a,r,s){return Be(r,a)?r:fr.current!==null?(n=af(n,r,s),Be(n,a)||(ce=!0),n):(Ea&42)===0?(ce=!0,n.memoizedState=r):(n=b0(),mt.lanes|=n,Ma|=n,a)}function yg(n,a,r,s,c){var d=q.p;q.p=d!==0&&8>d?d:8;var b=P.T,v={};P.T=v,sf(n,!1,a,r);try{var S=c(),M=P.S;if(M!==null&&M(v,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var B=Rw(S,s);Oo(n,a,B,qe(n))}else Oo(n,a,s,qe(n))}catch(H){Oo(n,a,{then:function(){},status:"rejected",reason:H},qe())}finally{q.p=d,P.T=b}}function Mw(){}function rf(n,a,r,s){if(n.tag!==5)throw Error(o(476));var c=bg(n).queue;yg(n,c,a,Q,r===null?Mw:function(){return vg(n),r(s)})}function bg(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:Q},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:r},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function vg(n){var a=bg(n).next.queue;Oo(n,a,{},qe())}function of(){return Te(Yo)}function Tg(){return ne().memoizedState}function Sg(){return ne().memoizedState}function Nw(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var r=qe();n=wa(r);var s=_a(a,n,r);s!==null&&(Fe(s,a,r),xo(s,a,r)),a={cache:Ic()},n.payload=a;return}a=a.return}}function Pw(n,a,r){var s=qe();r={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},vl(n)?wg(a,r):(r=Ec(n,a,r,s),r!==null&&(Fe(r,n,s),_g(r,a,s)))}function xg(n,a,r){var s=qe();Oo(n,a,r,s)}function Oo(n,a,r,s){var c={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(vl(n))wg(a,c);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var b=a.lastRenderedState,v=d(b,r);if(c.hasEagerState=!0,c.eagerState=v,Be(v,b))return nl(n,a,c,0),kt===null&&el(),!1}catch{}finally{}if(r=Ec(n,a,c,s),r!==null)return Fe(r,n,s),_g(r,a,s),!0}return!1}function sf(n,a,r,s){if(s={lane:2,revertLane:zf(),action:s,hasEagerState:!1,eagerState:null,next:null},vl(n)){if(a)throw Error(o(479))}else a=Ec(n,r,s,2),a!==null&&Fe(a,n,2)}function vl(n){var a=n.alternate;return n===mt||a!==null&&a===mt}function wg(n,a){dr=hl=!0;var r=n.pending;r===null?a.next=a:(a.next=r.next,r.next=a),n.pending=a}function _g(n,a,r){if((r&4194048)!==0){var s=a.lanes;s&=n.pendingLanes,r|=s,a.lanes=r,Yt(n,r)}}var Tl={readContext:Te,use:ml,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t},Eg={readContext:Te,use:ml,useCallback:function(n,a){return Ne().memoizedState=[n,a===void 0?null:a],n},useContext:Te,useEffect:lg,useImperativeHandle:function(n,a,r){r=r!=null?r.concat([n]):null,bl(4194308,4,dg.bind(null,a,n),r)},useLayoutEffect:function(n,a){return bl(4194308,4,n,a)},useInsertionEffect:function(n,a){bl(4,2,n,a)},useMemo:function(n,a){var r=Ne();a=a===void 0?null:a;var s=n();if(vi){fn(!0);try{n()}finally{fn(!1)}}return r.memoizedState=[s,a],s},useReducer:function(n,a,r){var s=Ne();if(r!==void 0){var c=r(a);if(vi){fn(!0);try{r(a)}finally{fn(!1)}}}else c=a;return s.memoizedState=s.baseState=c,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:c},s.queue=n,n=n.dispatch=Pw.bind(null,mt,n),[s.memoizedState,n]},useRef:function(n){var a=Ne();return n={current:n},a.memoizedState=n},useState:function(n){n=tf(n);var a=n.queue,r=xg.bind(null,mt,a);return a.dispatch=r,[n.memoizedState,r]},useDebugValue:nf,useDeferredValue:function(n,a){var r=Ne();return af(r,n,a)},useTransition:function(){var n=tf(!1);return n=yg.bind(null,mt,n.queue,!0,!1),Ne().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,r){var s=mt,c=Ne();if(xt){if(r===void 0)throw Error(o(407));r=r()}else{if(r=a(),kt===null)throw Error(o(349));(vt&124)!==0||Ym(s,a,r)}c.memoizedState=r;var d={value:r,getSnapshot:a};return c.queue=d,lg(Km.bind(null,s,d,n),[n]),s.flags|=2048,pr(9,yl(),Xm.bind(null,s,d,r,a),null),r},useId:function(){var n=Ne(),a=kt.identifierPrefix;if(xt){var r=$n,s=Kn;r=(s&~(1<<32-he(s)-1)).toString(32)+r,a="«"+a+"R"+r,r=pl++,0<r&&(a+="H"+r.toString(32)),a+="»"}else r=Ow++,a="«"+a+"r"+r.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:of,useFormState:ag,useActionState:ag,useOptimistic:function(n){var a=Ne();a.memoizedState=a.baseState=n;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=sf.bind(null,mt,!0,r),r.dispatch=a,[n,a]},useMemoCache:Qc,useCacheRefresh:function(){return Ne().memoizedState=Nw.bind(null,mt)}},Ag={readContext:Te,use:ml,useCallback:pg,useContext:Te,useEffect:ug,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:fg,useMemo:mg,useReducer:gl,useRef:sg,useState:function(){return gl(Wn)},useDebugValue:nf,useDeferredValue:function(n,a){var r=ne();return gg(r,Et.memoizedState,n,a)},useTransition:function(){var n=gl(Wn)[0],a=ne().memoizedState;return[typeof n=="boolean"?n:Ao(n),a]},useSyncExternalStore:Gm,useId:Tg,useHostTransitionStatus:of,useFormState:ig,useActionState:ig,useOptimistic:function(n,a){var r=ne();return Qm(r,Et,n,a)},useMemoCache:Qc,useCacheRefresh:Sg},Iw={readContext:Te,use:ml,useCallback:pg,useContext:Te,useEffect:ug,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:fg,useMemo:mg,useReducer:Jc,useRef:sg,useState:function(){return Jc(Wn)},useDebugValue:nf,useDeferredValue:function(n,a){var r=ne();return Et===null?af(r,n,a):gg(r,Et.memoizedState,n,a)},useTransition:function(){var n=Jc(Wn)[0],a=ne().memoizedState;return[typeof n=="boolean"?n:Ao(n),a]},useSyncExternalStore:Gm,useId:Tg,useHostTransitionStatus:of,useFormState:og,useActionState:og,useOptimistic:function(n,a){var r=ne();return Et!==null?Qm(r,Et,n,a):(r.baseState=n,[n,r.queue.dispatch])},useMemoCache:Qc,useCacheRefresh:Sg},mr=null,Co=0;function Sl(n){var a=Co;return Co+=1,mr===null&&(mr=[]),Um(mr,n,a)}function Do(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function xl(n,a){throw a.$$typeof===y?Error(o(525)):(n=Object.prototype.toString.call(a),Error(o(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function Rg(n){var a=n._init;return a(n._payload)}function Og(n){function a(O,E){if(n){var k=O.deletions;k===null?(O.deletions=[E],O.flags|=16):k.push(E)}}function r(O,E){if(!n)return null;for(;E!==null;)a(O,E),E=E.sibling;return null}function s(O){for(var E=new Map;O!==null;)O.key!==null?E.set(O.key,O):E.set(O.index,O),O=O.sibling;return E}function c(O,E){return O=Xn(O,E),O.index=0,O.sibling=null,O}function d(O,E,k){return O.index=k,n?(k=O.alternate,k!==null?(k=k.index,k<E?(O.flags|=67108866,E):k):(O.flags|=67108866,E)):(O.flags|=1048576,E)}function b(O){return n&&O.alternate===null&&(O.flags|=67108866),O}function v(O,E,k,z){return E===null||E.tag!==6?(E=Rc(k,O.mode,z),E.return=O,E):(E=c(E,k),E.return=O,E)}function S(O,E,k,z){var J=k.type;return J===_?B(O,E,k.props.children,z,k.key):E!==null&&(E.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===K&&Rg(J)===E.type)?(E=c(E,k.props),Do(E,k),E.return=O,E):(E=il(k.type,k.key,k.props,null,O.mode,z),Do(E,k),E.return=O,E)}function M(O,E,k,z){return E===null||E.tag!==4||E.stateNode.containerInfo!==k.containerInfo||E.stateNode.implementation!==k.implementation?(E=Oc(k,O.mode,z),E.return=O,E):(E=c(E,k.children||[]),E.return=O,E)}function B(O,E,k,z,J){return E===null||E.tag!==7?(E=fi(k,O.mode,z,J),E.return=O,E):(E=c(E,k),E.return=O,E)}function H(O,E,k){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Rc(""+E,O.mode,k),E.return=O,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case T:return k=il(E.type,E.key,E.props,null,O.mode,k),Do(k,E),k.return=O,k;case x:return E=Oc(E,O.mode,k),E.return=O,E;case K:var z=E._init;return E=z(E._payload),H(O,E,k)}if(Nt(E)||Mt(E))return E=fi(E,O.mode,k,null),E.return=O,E;if(typeof E.then=="function")return H(O,Sl(E),k);if(E.$$typeof===U)return H(O,ll(O,E),k);xl(O,E)}return null}function N(O,E,k,z){var J=E!==null?E.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return J!==null?null:v(O,E,""+k,z);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case T:return k.key===J?S(O,E,k,z):null;case x:return k.key===J?M(O,E,k,z):null;case K:return J=k._init,k=J(k._payload),N(O,E,k,z)}if(Nt(k)||Mt(k))return J!==null?null:B(O,E,k,z,null);if(typeof k.then=="function")return N(O,E,Sl(k),z);if(k.$$typeof===U)return N(O,E,ll(O,k),z);xl(O,k)}return null}function I(O,E,k,z,J){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return O=O.get(k)||null,v(E,O,""+z,J);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case T:return O=O.get(z.key===null?k:z.key)||null,S(E,O,z,J);case x:return O=O.get(z.key===null?k:z.key)||null,M(E,O,z,J);case K:var gt=z._init;return z=gt(z._payload),I(O,E,k,z,J)}if(Nt(z)||Mt(z))return O=O.get(k)||null,B(E,O,z,J,null);if(typeof z.then=="function")return I(O,E,k,Sl(z),J);if(z.$$typeof===U)return I(O,E,k,ll(E,z),J);xl(E,z)}return null}function ct(O,E,k,z){for(var J=null,gt=null,et=E,st=E=0,de=null;et!==null&&st<k.length;st++){et.index>st?(de=et,et=null):de=et.sibling;var Tt=N(O,et,k[st],z);if(Tt===null){et===null&&(et=de);break}n&&et&&Tt.alternate===null&&a(O,et),E=d(Tt,E,st),gt===null?J=Tt:gt.sibling=Tt,gt=Tt,et=de}if(st===k.length)return r(O,et),xt&&hi(O,st),J;if(et===null){for(;st<k.length;st++)et=H(O,k[st],z),et!==null&&(E=d(et,E,st),gt===null?J=et:gt.sibling=et,gt=et);return xt&&hi(O,st),J}for(et=s(et);st<k.length;st++)de=I(et,O,st,k[st],z),de!==null&&(n&&de.alternate!==null&&et.delete(de.key===null?st:de.key),E=d(de,E,st),gt===null?J=de:gt.sibling=de,gt=de);return n&&et.forEach(function(Ha){return a(O,Ha)}),xt&&hi(O,st),J}function ot(O,E,k,z){if(k==null)throw Error(o(151));for(var J=null,gt=null,et=E,st=E=0,de=null,Tt=k.next();et!==null&&!Tt.done;st++,Tt=k.next()){et.index>st?(de=et,et=null):de=et.sibling;var Ha=N(O,et,Tt.value,z);if(Ha===null){et===null&&(et=de);break}n&&et&&Ha.alternate===null&&a(O,et),E=d(Ha,E,st),gt===null?J=Ha:gt.sibling=Ha,gt=Ha,et=de}if(Tt.done)return r(O,et),xt&&hi(O,st),J;if(et===null){for(;!Tt.done;st++,Tt=k.next())Tt=H(O,Tt.value,z),Tt!==null&&(E=d(Tt,E,st),gt===null?J=Tt:gt.sibling=Tt,gt=Tt);return xt&&hi(O,st),J}for(et=s(et);!Tt.done;st++,Tt=k.next())Tt=I(et,O,st,Tt.value,z),Tt!==null&&(n&&Tt.alternate!==null&&et.delete(Tt.key===null?st:Tt.key),E=d(Tt,E,st),gt===null?J=Tt:gt.sibling=Tt,gt=Tt);return n&&et.forEach(function(L_){return a(O,L_)}),xt&&hi(O,st),J}function Rt(O,E,k,z){if(typeof k=="object"&&k!==null&&k.type===_&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case T:t:{for(var J=k.key;E!==null;){if(E.key===J){if(J=k.type,J===_){if(E.tag===7){r(O,E.sibling),z=c(E,k.props.children),z.return=O,O=z;break t}}else if(E.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===K&&Rg(J)===E.type){r(O,E.sibling),z=c(E,k.props),Do(z,k),z.return=O,O=z;break t}r(O,E);break}else a(O,E);E=E.sibling}k.type===_?(z=fi(k.props.children,O.mode,z,k.key),z.return=O,O=z):(z=il(k.type,k.key,k.props,null,O.mode,z),Do(z,k),z.return=O,O=z)}return b(O);case x:t:{for(J=k.key;E!==null;){if(E.key===J)if(E.tag===4&&E.stateNode.containerInfo===k.containerInfo&&E.stateNode.implementation===k.implementation){r(O,E.sibling),z=c(E,k.children||[]),z.return=O,O=z;break t}else{r(O,E);break}else a(O,E);E=E.sibling}z=Oc(k,O.mode,z),z.return=O,O=z}return b(O);case K:return J=k._init,k=J(k._payload),Rt(O,E,k,z)}if(Nt(k))return ct(O,E,k,z);if(Mt(k)){if(J=Mt(k),typeof J!="function")throw Error(o(150));return k=J.call(k),ot(O,E,k,z)}if(typeof k.then=="function")return Rt(O,E,Sl(k),z);if(k.$$typeof===U)return Rt(O,E,ll(O,k),z);xl(O,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,E!==null&&E.tag===6?(r(O,E.sibling),z=c(E,k),z.return=O,O=z):(r(O,E),z=Rc(k,O.mode,z),z.return=O,O=z),b(O)):r(O,E)}return function(O,E,k,z){try{Co=0;var J=Rt(O,E,k,z);return mr=null,J}catch(et){if(et===To||et===cl)throw et;var gt=ze(29,et,null,O.mode);return gt.lanes=z,gt.return=O,gt}finally{}}}var gr=Og(!0),Cg=Og(!1),nn=V(null),Dn=null;function Aa(n){var a=n.alternate;F(oe,oe.current&1),F(nn,n),Dn===null&&(a===null||fr.current!==null||a.memoizedState!==null)&&(Dn=n)}function Dg(n){if(n.tag===22){if(F(oe,oe.current),F(nn,n),Dn===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(Dn=n)}}else Ra()}function Ra(){F(oe,oe.current),F(nn,nn.current)}function Jn(n){Z(nn),Dn===n&&(Dn=null),Z(oe)}var oe=V(0);function wl(n){for(var a=n;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Qf(r)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function lf(n,a,r,s){a=n.memoizedState,r=r(s,a),r=r==null?a:g({},a,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var uf={enqueueSetState:function(n,a,r){n=n._reactInternals;var s=qe(),c=wa(s);c.payload=a,r!=null&&(c.callback=r),a=_a(n,c,s),a!==null&&(Fe(a,n,s),xo(a,n,s))},enqueueReplaceState:function(n,a,r){n=n._reactInternals;var s=qe(),c=wa(s);c.tag=1,c.payload=a,r!=null&&(c.callback=r),a=_a(n,c,s),a!==null&&(Fe(a,n,s),xo(a,n,s))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var r=qe(),s=wa(r);s.tag=2,a!=null&&(s.callback=a),a=_a(n,s,r),a!==null&&(Fe(a,n,r),xo(a,n,r))}};function kg(n,a,r,s,c,d,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(s,d,b):a.prototype&&a.prototype.isPureReactComponent?!fo(r,s)||!fo(c,d):!0}function Mg(n,a,r,s){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,s),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,s),a.state!==n&&uf.enqueueReplaceState(a,a.state,null)}function Ti(n,a){var r=a;if("ref"in a){r={};for(var s in a)s!=="ref"&&(r[s]=a[s])}if(n=n.defaultProps){r===a&&(r=g({},r));for(var c in n)r[c]===void 0&&(r[c]=n[c])}return r}var _l=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Ng(n){_l(n)}function Pg(n){console.error(n)}function Ig(n){_l(n)}function El(n,a){try{var r=n.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(s){setTimeout(function(){throw s})}}function Lg(n,a,r){try{var s=n.onCaughtError;s(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function cf(n,a,r){return r=wa(r),r.tag=3,r.payload={element:null},r.callback=function(){El(n,a)},r}function Ug(n){return n=wa(n),n.tag=3,n}function Bg(n,a,r,s){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;n.payload=function(){return c(d)},n.callback=function(){Lg(a,r,s)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){Lg(a,r,s),typeof c!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})})}function Lw(n,a,r,s,c){if(r.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(a=r.alternate,a!==null&&yo(a,r,c,!0),r=nn.current,r!==null){switch(r.tag){case 13:return Dn===null?Pf():r.alternate===null&&jt===0&&(jt=3),r.flags&=-257,r.flags|=65536,r.lanes=c,s===Bc?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([s]):a.add(s),Lf(n,s,c)),!1;case 22:return r.flags|=65536,s===Bc?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([s])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([s]):r.add(s)),Lf(n,s,c)),!1}throw Error(o(435,r.tag))}return Lf(n,s,c),Pf(),!1}if(xt)return a=nn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=c,s!==kc&&(n=Error(o(422),{cause:s}),go(We(n,r)))):(s!==kc&&(a=Error(o(423),{cause:s}),go(We(a,r))),n=n.current.alternate,n.flags|=65536,c&=-c,n.lanes|=c,s=We(s,r),c=cf(n.stateNode,s,c),Hc(n,c),jt!==4&&(jt=2)),!1;var d=Error(o(520),{cause:s});if(d=We(d,r),Uo===null?Uo=[d]:Uo.push(d),jt!==4&&(jt=2),a===null)return!0;s=We(s,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,n=c&-c,r.lanes|=n,n=cf(r.stateNode,s,n),Hc(r,n),!1;case 1:if(a=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Na===null||!Na.has(d))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Ug(c),Bg(c,n,r,s),Hc(r,c),!1}r=r.return}while(r!==null);return!1}var zg=Error(o(461)),ce=!1;function me(n,a,r,s){a.child=n===null?Cg(a,null,r,s):gr(a,n.child,r,s)}function Vg(n,a,r,s,c){r=r.render;var d=a.ref;if("ref"in s){var b={};for(var v in s)v!=="ref"&&(b[v]=s[v])}else b=s;return yi(a),s=Yc(n,a,r,b,d,c),v=Xc(),n!==null&&!ce?(Kc(n,a,c),ta(n,a,c)):(xt&&v&&Cc(a),a.flags|=1,me(n,a,s,c),a.child)}function Hg(n,a,r,s,c){if(n===null){var d=r.type;return typeof d=="function"&&!Ac(d)&&d.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=d,jg(n,a,d,s,c)):(n=il(r.type,null,s,a,a.mode,c),n.ref=a.ref,n.return=a,a.child=n)}if(d=n.child,!bf(n,c)){var b=d.memoizedProps;if(r=r.compare,r=r!==null?r:fo,r(b,s)&&n.ref===a.ref)return ta(n,a,c)}return a.flags|=1,n=Xn(d,s),n.ref=a.ref,n.return=a,a.child=n}function jg(n,a,r,s,c){if(n!==null){var d=n.memoizedProps;if(fo(d,s)&&n.ref===a.ref)if(ce=!1,a.pendingProps=s=d,bf(n,c))(n.flags&131072)!==0&&(ce=!0);else return a.lanes=n.lanes,ta(n,a,c)}return ff(n,a,r,s,c)}function qg(n,a,r){var s=a.pendingProps,c=s.children,d=n!==null?n.memoizedState:null;if(s.mode==="hidden"){if((a.flags&128)!==0){if(s=d!==null?d.baseLanes|r:r,n!==null){for(c=a.child=n.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;a.childLanes=d&~s}else a.childLanes=0,a.child=null;return Fg(n,a,s,r)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&ul(a,d!==null?d.cachePool:null),d!==null?jm(a,d):qc(),Dg(a);else return a.lanes=a.childLanes=536870912,Fg(n,a,d!==null?d.baseLanes|r:r,r)}else d!==null?(ul(a,d.cachePool),jm(a,d),Ra(),a.memoizedState=null):(n!==null&&ul(a,null),qc(),Ra());return me(n,a,c,r),a.child}function Fg(n,a,r,s){var c=Uc();return c=c===null?null:{parent:re._currentValue,pool:c},a.memoizedState={baseLanes:r,cachePool:c},n!==null&&ul(a,null),qc(),Dg(a),n!==null&&yo(n,a,s,!0),null}function Al(n,a){var r=a.ref;if(r===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(o(284));(n===null||n.ref!==r)&&(a.flags|=4194816)}}function ff(n,a,r,s,c){return yi(a),r=Yc(n,a,r,s,void 0,c),s=Xc(),n!==null&&!ce?(Kc(n,a,c),ta(n,a,c)):(xt&&s&&Cc(a),a.flags|=1,me(n,a,r,c),a.child)}function Gg(n,a,r,s,c,d){return yi(a),a.updateQueue=null,r=Fm(a,s,r,c),qm(n),s=Xc(),n!==null&&!ce?(Kc(n,a,d),ta(n,a,d)):(xt&&s&&Cc(a),a.flags|=1,me(n,a,r,d),a.child)}function Yg(n,a,r,s,c){if(yi(a),a.stateNode===null){var d=or,b=r.contextType;typeof b=="object"&&b!==null&&(d=Te(b)),d=new r(s,d),a.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=uf,a.stateNode=d,d._reactInternals=a,d=a.stateNode,d.props=s,d.state=a.memoizedState,d.refs={},zc(a),b=r.contextType,d.context=typeof b=="object"&&b!==null?Te(b):or,d.state=a.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(lf(a,r,b,s),d.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&uf.enqueueReplaceState(d,d.state,null),_o(a,s,d,c),wo(),d.state=a.memoizedState),typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!0}else if(n===null){d=a.stateNode;var v=a.memoizedProps,S=Ti(r,v);d.props=S;var M=d.context,B=r.contextType;b=or,typeof B=="object"&&B!==null&&(b=Te(B));var H=r.getDerivedStateFromProps;B=typeof H=="function"||typeof d.getSnapshotBeforeUpdate=="function",v=a.pendingProps!==v,B||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v||M!==b)&&Mg(a,d,s,b),xa=!1;var N=a.memoizedState;d.state=N,_o(a,s,d,c),wo(),M=a.memoizedState,v||N!==M||xa?(typeof H=="function"&&(lf(a,r,H,s),M=a.memoizedState),(S=xa||kg(a,r,S,s,N,M,b))?(B||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=s,a.memoizedState=M),d.props=s,d.state=M,d.context=b,s=S):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!1)}else{d=a.stateNode,Vc(n,a),b=a.memoizedProps,B=Ti(r,b),d.props=B,H=a.pendingProps,N=d.context,M=r.contextType,S=or,typeof M=="object"&&M!==null&&(S=Te(M)),v=r.getDerivedStateFromProps,(M=typeof v=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==H||N!==S)&&Mg(a,d,s,S),xa=!1,N=a.memoizedState,d.state=N,_o(a,s,d,c),wo();var I=a.memoizedState;b!==H||N!==I||xa||n!==null&&n.dependencies!==null&&sl(n.dependencies)?(typeof v=="function"&&(lf(a,r,v,s),I=a.memoizedState),(B=xa||kg(a,r,B,s,N,I,S)||n!==null&&n.dependencies!==null&&sl(n.dependencies))?(M||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,I,S),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,I,S)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===n.memoizedProps&&N===n.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&N===n.memoizedState||(a.flags|=1024),a.memoizedProps=s,a.memoizedState=I),d.props=s,d.state=I,d.context=S,s=B):(typeof d.componentDidUpdate!="function"||b===n.memoizedProps&&N===n.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&N===n.memoizedState||(a.flags|=1024),s=!1)}return d=s,Al(n,a),s=(a.flags&128)!==0,d||s?(d=a.stateNode,r=s&&typeof r.getDerivedStateFromError!="function"?null:d.render(),a.flags|=1,n!==null&&s?(a.child=gr(a,n.child,null,c),a.child=gr(a,null,r,c)):me(n,a,r,c),a.memoizedState=d.state,n=a.child):n=ta(n,a,c),n}function Xg(n,a,r,s){return mo(),a.flags|=256,me(n,a,r,s),a.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(n){return{baseLanes:n,cachePool:Pm()}}function pf(n,a,r){return n=n!==null?n.childLanes&~r:0,a&&(n|=an),n}function Kg(n,a,r){var s=a.pendingProps,c=!1,d=(a.flags&128)!==0,b;if((b=d)||(b=n!==null&&n.memoizedState===null?!1:(oe.current&2)!==0),b&&(c=!0,a.flags&=-129),b=(a.flags&32)!==0,a.flags&=-33,n===null){if(xt){if(c?Aa(a):Ra(),xt){var v=Ht,S;if(S=v){t:{for(S=v,v=Cn;S.nodeType!==8;){if(!v){v=null;break t}if(S=mn(S.nextSibling),S===null){v=null;break t}}v=S}v!==null?(a.memoizedState={dehydrated:v,treeContext:di!==null?{id:Kn,overflow:$n}:null,retryLane:536870912,hydrationErrors:null},S=ze(18,null,null,0),S.stateNode=v,S.return=a,a.child=S,Re=a,Ht=null,S=!0):S=!1}S||mi(a)}if(v=a.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return Qf(v)?a.lanes=32:a.lanes=536870912,null;Jn(a)}return v=s.children,s=s.fallback,c?(Ra(),c=a.mode,v=Rl({mode:"hidden",children:v},c),s=fi(s,c,r,null),v.return=a,s.return=a,v.sibling=s,a.child=v,c=a.child,c.memoizedState=hf(r),c.childLanes=pf(n,b,r),a.memoizedState=df,s):(Aa(a),mf(a,v))}if(S=n.memoizedState,S!==null&&(v=S.dehydrated,v!==null)){if(d)a.flags&256?(Aa(a),a.flags&=-257,a=gf(n,a,r)):a.memoizedState!==null?(Ra(),a.child=n.child,a.flags|=128,a=null):(Ra(),c=s.fallback,v=a.mode,s=Rl({mode:"visible",children:s.children},v),c=fi(c,v,r,null),c.flags|=2,s.return=a,c.return=a,s.sibling=c,a.child=s,gr(a,n.child,null,r),s=a.child,s.memoizedState=hf(r),s.childLanes=pf(n,b,r),a.memoizedState=df,a=c);else if(Aa(a),Qf(v)){if(b=v.nextSibling&&v.nextSibling.dataset,b)var M=b.dgst;b=M,s=Error(o(419)),s.stack="",s.digest=b,go({value:s,source:null,stack:null}),a=gf(n,a,r)}else if(ce||yo(n,a,r,!1),b=(r&n.childLanes)!==0,ce||b){if(b=kt,b!==null&&(s=r&-r,s=(s&42)!==0?1:te(s),s=(s&(b.suspendedLanes|r))!==0?0:s,s!==0&&s!==S.retryLane))throw S.retryLane=s,rr(n,s),Fe(b,n,s),zg;v.data==="$?"||Pf(),a=gf(n,a,r)}else v.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=S.treeContext,Ht=mn(v.nextSibling),Re=a,xt=!0,pi=null,Cn=!1,n!==null&&(tn[en++]=Kn,tn[en++]=$n,tn[en++]=di,Kn=n.id,$n=n.overflow,di=a),a=mf(a,s.children),a.flags|=4096);return a}return c?(Ra(),c=s.fallback,v=a.mode,S=n.child,M=S.sibling,s=Xn(S,{mode:"hidden",children:s.children}),s.subtreeFlags=S.subtreeFlags&65011712,M!==null?c=Xn(M,c):(c=fi(c,v,r,null),c.flags|=2),c.return=a,s.return=a,s.sibling=c,a.child=s,s=c,c=a.child,v=n.child.memoizedState,v===null?v=hf(r):(S=v.cachePool,S!==null?(M=re._currentValue,S=S.parent!==M?{parent:M,pool:M}:S):S=Pm(),v={baseLanes:v.baseLanes|r,cachePool:S}),c.memoizedState=v,c.childLanes=pf(n,b,r),a.memoizedState=df,s):(Aa(a),r=n.child,n=r.sibling,r=Xn(r,{mode:"visible",children:s.children}),r.return=a,r.sibling=null,n!==null&&(b=a.deletions,b===null?(a.deletions=[n],a.flags|=16):b.push(n)),a.child=r,a.memoizedState=null,r)}function mf(n,a){return a=Rl({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function Rl(n,a){return n=ze(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function gf(n,a,r){return gr(a,n.child,null,r),n=mf(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function $g(n,a,r){n.lanes|=a;var s=n.alternate;s!==null&&(s.lanes|=a),Nc(n.return,a,r)}function yf(n,a,r,s,c){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:c}:(d.isBackwards=a,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=r,d.tailMode=c)}function Zg(n,a,r){var s=a.pendingProps,c=s.revealOrder,d=s.tail;if(me(n,a,s.children,r),s=oe.current,(s&2)!==0)s=s&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$g(n,r,a);else if(n.tag===19)$g(n,r,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break t;for(;n.sibling===null;){if(n.return===null||n.return===a)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}s&=1}switch(F(oe,s),c){case"forwards":for(r=a.child,c=null;r!==null;)n=r.alternate,n!==null&&wl(n)===null&&(c=r),r=r.sibling;r=c,r===null?(c=a.child,a.child=null):(c=r.sibling,r.sibling=null),yf(a,!1,c,r,d);break;case"backwards":for(r=null,c=a.child,a.child=null;c!==null;){if(n=c.alternate,n!==null&&wl(n)===null){a.child=c;break}n=c.sibling,c.sibling=r,r=c,c=n}yf(a,!0,r,null,d);break;case"together":yf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ta(n,a,r){if(n!==null&&(a.dependencies=n.dependencies),Ma|=a.lanes,(r&a.childLanes)===0)if(n!==null){if(yo(n,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(o(153));if(a.child!==null){for(n=a.child,r=Xn(n,n.pendingProps),a.child=r,r.return=a;n.sibling!==null;)n=n.sibling,r=r.sibling=Xn(n,n.pendingProps),r.return=a;r.sibling=null}return a.child}function bf(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&sl(n)))}function Uw(n,a,r){switch(a.tag){case 3:lt(a,a.stateNode.containerInfo),Sa(a,re,n.memoizedState.cache),mo();break;case 27:case 5:ga(a);break;case 4:lt(a,a.stateNode.containerInfo);break;case 10:Sa(a,a.type,a.memoizedProps.value);break;case 13:var s=a.memoizedState;if(s!==null)return s.dehydrated!==null?(Aa(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Kg(n,a,r):(Aa(a),n=ta(n,a,r),n!==null?n.sibling:null);Aa(a);break;case 19:var c=(n.flags&128)!==0;if(s=(r&a.childLanes)!==0,s||(yo(n,a,r,!1),s=(r&a.childLanes)!==0),c){if(s)return Zg(n,a,r);a.flags|=128}if(c=a.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),F(oe,oe.current),s)break;return null;case 22:case 23:return a.lanes=0,qg(n,a,r);case 24:Sa(a,re,n.memoizedState.cache)}return ta(n,a,r)}function Qg(n,a,r){if(n!==null)if(n.memoizedProps!==a.pendingProps)ce=!0;else{if(!bf(n,r)&&(a.flags&128)===0)return ce=!1,Uw(n,a,r);ce=(n.flags&131072)!==0}else ce=!1,xt&&(a.flags&1048576)!==0&&Rm(a,ol,a.index);switch(a.lanes=0,a.tag){case 16:t:{n=a.pendingProps;var s=a.elementType,c=s._init;if(s=c(s._payload),a.type=s,typeof s=="function")Ac(s)?(n=Ti(s,n),a.tag=1,a=Yg(null,a,s,n,r)):(a.tag=0,a=ff(null,a,s,n,r));else{if(s!=null){if(c=s.$$typeof,c===Y){a.tag=11,a=Vg(null,a,s,n,r);break t}else if(c===at){a.tag=14,a=Hg(null,a,s,n,r);break t}}throw a=we(s)||s,Error(o(306,a,""))}}return a;case 0:return ff(n,a,a.type,a.pendingProps,r);case 1:return s=a.type,c=Ti(s,a.pendingProps),Yg(n,a,s,c,r);case 3:t:{if(lt(a,a.stateNode.containerInfo),n===null)throw Error(o(387));s=a.pendingProps;var d=a.memoizedState;c=d.element,Vc(n,a),_o(a,s,null,r);var b=a.memoizedState;if(s=b.cache,Sa(a,re,s),s!==d.cache&&Pc(a,[re],r,!0),wo(),s=b.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:b.cache},a.updateQueue.baseState=d,a.memoizedState=d,a.flags&256){a=Xg(n,a,s,r);break t}else if(s!==c){c=We(Error(o(424)),a),go(c),a=Xg(n,a,s,r);break t}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Ht=mn(n.firstChild),Re=a,xt=!0,pi=null,Cn=!0,r=Cg(a,null,s,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(mo(),s===c){a=ta(n,a,r);break t}me(n,a,s,r)}a=a.child}return a;case 26:return Al(n,a),n===null?(r=ey(a.type,null,a.pendingProps,null))?a.memoizedState=r:xt||(r=a.type,n=a.pendingProps,s=Hl(tt.current).createElement(r),s[Kt]=a,s[Dt]=n,ye(s,r,n),ue(s),a.stateNode=s):a.memoizedState=ey(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return ga(a),n===null&&xt&&(s=a.stateNode=W0(a.type,a.pendingProps,tt.current),Re=a,Cn=!0,c=Ht,La(a.type)?(Wf=c,Ht=mn(s.firstChild)):Ht=c),me(n,a,a.pendingProps.children,r),Al(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&xt&&((c=s=Ht)&&(s=f_(s,a.type,a.pendingProps,Cn),s!==null?(a.stateNode=s,Re=a,Ht=mn(s.firstChild),Cn=!1,c=!0):c=!1),c||mi(a)),ga(a),c=a.type,d=a.pendingProps,b=n!==null?n.memoizedProps:null,s=d.children,Kf(c,d)?s=null:b!==null&&Kf(c,b)&&(a.flags|=32),a.memoizedState!==null&&(c=Yc(n,a,Cw,null,null,r),Yo._currentValue=c),Al(n,a),me(n,a,s,r),a.child;case 6:return n===null&&xt&&((n=r=Ht)&&(r=d_(r,a.pendingProps,Cn),r!==null?(a.stateNode=r,Re=a,Ht=null,n=!0):n=!1),n||mi(a)),null;case 13:return Kg(n,a,r);case 4:return lt(a,a.stateNode.containerInfo),s=a.pendingProps,n===null?a.child=gr(a,null,s,r):me(n,a,s,r),a.child;case 11:return Vg(n,a,a.type,a.pendingProps,r);case 7:return me(n,a,a.pendingProps,r),a.child;case 8:return me(n,a,a.pendingProps.children,r),a.child;case 12:return me(n,a,a.pendingProps.children,r),a.child;case 10:return s=a.pendingProps,Sa(a,a.type,s.value),me(n,a,s.children,r),a.child;case 9:return c=a.type._context,s=a.pendingProps.children,yi(a),c=Te(c),s=s(c),a.flags|=1,me(n,a,s,r),a.child;case 14:return Hg(n,a,a.type,a.pendingProps,r);case 15:return jg(n,a,a.type,a.pendingProps,r);case 19:return Zg(n,a,r);case 31:return s=a.pendingProps,r=a.mode,s={mode:s.mode,children:s.children},n===null?(r=Rl(s,r),r.ref=a.ref,a.child=r,r.return=a,a=r):(r=Xn(n.child,s),r.ref=a.ref,a.child=r,r.return=a,a=r),a;case 22:return qg(n,a,r);case 24:return yi(a),s=Te(re),n===null?(c=Uc(),c===null&&(c=kt,d=Ic(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=r),c=d),a.memoizedState={parent:s,cache:c},zc(a),Sa(a,re,c)):((n.lanes&r)!==0&&(Vc(n,a),_o(a,null,null,r),wo()),c=n.memoizedState,d=a.memoizedState,c.parent!==s?(c={parent:s,cache:s},a.memoizedState=c,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=c),Sa(a,re,s)):(s=d.cache,Sa(a,re,s),s!==c.cache&&Pc(a,[re],r,!0))),me(n,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(o(156,a.tag))}function ea(n){n.flags|=4}function Wg(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!oy(a)){if(a=nn.current,a!==null&&((vt&4194048)===vt?Dn!==null:(vt&62914560)!==vt&&(vt&536870912)===0||a!==Dn))throw So=Bc,Im;n.flags|=8192}}function Ol(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?js():536870912,n.lanes|=a,Tr|=a)}function ko(n,a){if(!xt)switch(n.tailMode){case"hidden":a=n.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:s.sibling=null}}function Bt(n){var a=n.alternate!==null&&n.alternate.child===n.child,r=0,s=0;if(a)for(var c=n.child;c!==null;)r|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=n,c=c.sibling;else for(c=n.child;c!==null;)r|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=n,c=c.sibling;return n.subtreeFlags|=s,n.childLanes=r,a}function Bw(n,a,r){var s=a.pendingProps;switch(Dc(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(a),null;case 1:return Bt(a),null;case 3:return r=a.stateNode,s=null,n!==null&&(s=n.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Qn(re),_e(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(po(a)?ea(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Dm())),Bt(a),null;case 26:return r=a.memoizedState,n===null?(ea(a),r!==null?(Bt(a),Wg(a,r)):(Bt(a),a.flags&=-16777217)):r?r!==n.memoizedState?(ea(a),Bt(a),Wg(a,r)):(Bt(a),a.flags&=-16777217):(n.memoizedProps!==s&&ea(a),Bt(a),a.flags&=-16777217),null;case 27:jn(a),r=tt.current;var c=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==s&&ea(a);else{if(!s){if(a.stateNode===null)throw Error(o(166));return Bt(a),null}n=$.current,po(a)?Om(a):(n=W0(c,s,r),a.stateNode=n,ea(a))}return Bt(a),null;case 5:if(jn(a),r=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==s&&ea(a);else{if(!s){if(a.stateNode===null)throw Error(o(166));return Bt(a),null}if(n=$.current,po(a))Om(a);else{switch(c=Hl(tt.current),n){case 1:n=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:n=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":n=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":n=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":n=c.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?n.multiple=!0:s.size&&(n.size=s.size);break;default:n=typeof s.is=="string"?c.createElement(r,{is:s.is}):c.createElement(r)}}n[Kt]=a,n[Dt]=s;t:for(c=a.child;c!==null;){if(c.tag===5||c.tag===6)n.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break t;for(;c.sibling===null;){if(c.return===null||c.return===a)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}a.stateNode=n;t:switch(ye(n,r,s),r){case"button":case"input":case"select":case"textarea":n=!!s.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&ea(a)}}return Bt(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==s&&ea(a);else{if(typeof s!="string"&&a.stateNode===null)throw Error(o(166));if(n=tt.current,po(a)){if(n=a.stateNode,r=a.memoizedProps,s=null,c=Re,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}n[Kt]=a,n=!!(n.nodeValue===r||s!==null&&s.suppressHydrationWarning===!0||G0(n.nodeValue,r)),n||mi(a)}else n=Hl(n).createTextNode(s),n[Kt]=a,a.stateNode=n}return Bt(a),null;case 13:if(s=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(c=po(a),s!==null&&s.dehydrated!==null){if(n===null){if(!c)throw Error(o(318));if(c=a.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[Kt]=a}else mo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Bt(a),c=!1}else c=Dm(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=c),c=!0;if(!c)return a.flags&256?(Jn(a),a):(Jn(a),null)}if(Jn(a),(a.flags&128)!==0)return a.lanes=r,a;if(r=s!==null,n=n!==null&&n.memoizedState!==null,r){s=a.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var d=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(d=s.memoizedState.cachePool.pool),d!==c&&(s.flags|=2048)}return r!==n&&r&&(a.child.flags|=8192),Ol(a,a.updateQueue),Bt(a),null;case 4:return _e(),n===null&&qf(a.stateNode.containerInfo),Bt(a),null;case 10:return Qn(a.type),Bt(a),null;case 19:if(Z(oe),c=a.memoizedState,c===null)return Bt(a),null;if(s=(a.flags&128)!==0,d=c.rendering,d===null)if(s)ko(c,!1);else{if(jt!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(d=wl(n),d!==null){for(a.flags|=128,ko(c,!1),n=d.updateQueue,a.updateQueue=n,Ol(a,n),a.subtreeFlags=0,n=r,r=a.child;r!==null;)Am(r,n),r=r.sibling;return F(oe,oe.current&1|2),a.child}n=n.sibling}c.tail!==null&&ve()>kl&&(a.flags|=128,s=!0,ko(c,!1),a.lanes=4194304)}else{if(!s)if(n=wl(d),n!==null){if(a.flags|=128,s=!0,n=n.updateQueue,a.updateQueue=n,Ol(a,n),ko(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!xt)return Bt(a),null}else 2*ve()-c.renderingStartTime>kl&&r!==536870912&&(a.flags|=128,s=!0,ko(c,!1),a.lanes=4194304);c.isBackwards?(d.sibling=a.child,a.child=d):(n=c.last,n!==null?n.sibling=d:a.child=d,c.last=d)}return c.tail!==null?(a=c.tail,c.rendering=a,c.tail=a.sibling,c.renderingStartTime=ve(),a.sibling=null,n=oe.current,F(oe,s?n&1|2:n&1),a):(Bt(a),null);case 22:case 23:return Jn(a),Fc(),s=a.memoizedState!==null,n!==null?n.memoizedState!==null!==s&&(a.flags|=8192):s&&(a.flags|=8192),s?(r&536870912)!==0&&(a.flags&128)===0&&(Bt(a),a.subtreeFlags&6&&(a.flags|=8192)):Bt(a),r=a.updateQueue,r!==null&&Ol(a,r.retryQueue),r=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==r&&(a.flags|=2048),n!==null&&Z(bi),null;case 24:return r=null,n!==null&&(r=n.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),Qn(re),Bt(a),null;case 25:return null;case 30:return null}throw Error(o(156,a.tag))}function zw(n,a){switch(Dc(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Qn(re),_e(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return jn(a),null;case 13:if(Jn(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(o(340));mo()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return Z(oe),null;case 4:return _e(),null;case 10:return Qn(a.type),null;case 22:case 23:return Jn(a),Fc(),n!==null&&Z(bi),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Qn(re),null;case 25:return null;default:return null}}function Jg(n,a){switch(Dc(a),a.tag){case 3:Qn(re),_e();break;case 26:case 27:case 5:jn(a);break;case 4:_e();break;case 13:Jn(a);break;case 19:Z(oe);break;case 10:Qn(a.type);break;case 22:case 23:Jn(a),Fc(),n!==null&&Z(bi);break;case 24:Qn(re)}}function Mo(n,a){try{var r=a.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var c=s.next;r=c;do{if((r.tag&n)===n){s=void 0;var d=r.create,b=r.inst;s=d(),b.destroy=s}r=r.next}while(r!==c)}}catch(v){Ot(a,a.return,v)}}function Oa(n,a,r){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var d=c.next;s=d;do{if((s.tag&n)===n){var b=s.inst,v=b.destroy;if(v!==void 0){b.destroy=void 0,c=a;var S=r,M=v;try{M()}catch(B){Ot(c,S,B)}}}s=s.next}while(s!==d)}}catch(B){Ot(a,a.return,B)}}function t0(n){var a=n.updateQueue;if(a!==null){var r=n.stateNode;try{Hm(a,r)}catch(s){Ot(n,n.return,s)}}}function e0(n,a,r){r.props=Ti(n.type,n.memoizedProps),r.state=n.memoizedState;try{r.componentWillUnmount()}catch(s){Ot(n,a,s)}}function No(n,a){try{var r=n.ref;if(r!==null){switch(n.tag){case 26:case 27:case 5:var s=n.stateNode;break;case 30:s=n.stateNode;break;default:s=n.stateNode}typeof r=="function"?n.refCleanup=r(s):r.current=s}}catch(c){Ot(n,a,c)}}function kn(n,a){var r=n.ref,s=n.refCleanup;if(r!==null)if(typeof s=="function")try{s()}catch(c){Ot(n,a,c)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Ot(n,a,c)}else r.current=null}function n0(n){var a=n.type,r=n.memoizedProps,s=n.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&s.focus();break t;case"img":r.src?s.src=r.src:r.srcSet&&(s.srcset=r.srcSet)}}catch(c){Ot(n,n.return,c)}}function vf(n,a,r){try{var s=n.stateNode;o_(s,n.type,r,a),s[Dt]=a}catch(c){Ot(n,n.return,c)}}function a0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&La(n.type)||n.tag===4}function Tf(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||a0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&La(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sf(n,a,r){var s=n.tag;if(s===5||s===6)n=n.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(n,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(n),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Vl));else if(s!==4&&(s===27&&La(n.type)&&(r=n.stateNode,a=null),n=n.child,n!==null))for(Sf(n,a,r),n=n.sibling;n!==null;)Sf(n,a,r),n=n.sibling}function Cl(n,a,r){var s=n.tag;if(s===5||s===6)n=n.stateNode,a?r.insertBefore(n,a):r.appendChild(n);else if(s!==4&&(s===27&&La(n.type)&&(r=n.stateNode),n=n.child,n!==null))for(Cl(n,a,r),n=n.sibling;n!==null;)Cl(n,a,r),n=n.sibling}function i0(n){var a=n.stateNode,r=n.memoizedProps;try{for(var s=n.type,c=a.attributes;c.length;)a.removeAttributeNode(c[0]);ye(a,s,r),a[Kt]=n,a[Dt]=r}catch(d){Ot(n,n.return,d)}}var na=!1,Zt=!1,xf=!1,r0=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Vw(n,a){if(n=n.containerInfo,Yf=Xl,n=gm(n),vc(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else t:{r=(r=n.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var c=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var b=0,v=-1,S=-1,M=0,B=0,H=n,N=null;e:for(;;){for(var I;H!==r||c!==0&&H.nodeType!==3||(v=b+c),H!==d||s!==0&&H.nodeType!==3||(S=b+s),H.nodeType===3&&(b+=H.nodeValue.length),(I=H.firstChild)!==null;)N=H,H=I;for(;;){if(H===n)break e;if(N===r&&++M===c&&(v=b),N===d&&++B===s&&(S=b),(I=H.nextSibling)!==null)break;H=N,N=H.parentNode}H=I}r=v===-1||S===-1?null:{start:v,end:S}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xf={focusedElem:n,selectionRange:r},Xl=!1,fe=a;fe!==null;)if(a=fe,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,fe=n;else for(;fe!==null;){switch(a=fe,d=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,r=a,c=d.memoizedProps,d=d.memoizedState,s=r.stateNode;try{var ct=Ti(r.type,c,r.elementType===r.type);n=s.getSnapshotBeforeUpdate(ct,d),s.__reactInternalSnapshotBeforeUpdate=n}catch(ot){Ot(r,r.return,ot)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,r=n.nodeType,r===9)Zf(n);else if(r===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Zf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(o(163))}if(n=a.sibling,n!==null){n.return=a.return,fe=n;break}fe=a.return}}function o0(n,a,r){var s=r.flags;switch(r.tag){case 0:case 11:case 15:Ca(n,r),s&4&&Mo(5,r);break;case 1:if(Ca(n,r),s&4)if(n=r.stateNode,a===null)try{n.componentDidMount()}catch(b){Ot(r,r.return,b)}else{var c=Ti(r.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(c,a,n.__reactInternalSnapshotBeforeUpdate)}catch(b){Ot(r,r.return,b)}}s&64&&t0(r),s&512&&No(r,r.return);break;case 3:if(Ca(n,r),s&64&&(n=r.updateQueue,n!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{Hm(n,a)}catch(b){Ot(r,r.return,b)}}break;case 27:a===null&&s&4&&i0(r);case 26:case 5:Ca(n,r),a===null&&s&4&&n0(r),s&512&&No(r,r.return);break;case 12:Ca(n,r);break;case 13:Ca(n,r),s&4&&u0(n,r),s&64&&(n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(r=$w.bind(null,r),h_(n,r))));break;case 22:if(s=r.memoizedState!==null||na,!s){a=a!==null&&a.memoizedState!==null||Zt,c=na;var d=Zt;na=s,(Zt=a)&&!d?Da(n,r,(r.subtreeFlags&8772)!==0):Ca(n,r),na=c,Zt=d}break;case 30:break;default:Ca(n,r)}}function s0(n){var a=n.alternate;a!==null&&(n.alternate=null,s0(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&tc(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Pt=null,Pe=!1;function aa(n,a,r){for(r=r.child;r!==null;)l0(n,a,r),r=r.sibling}function l0(n,a,r){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Rn,r)}catch{}switch(r.tag){case 26:Zt||kn(r,a),aa(n,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Zt||kn(r,a);var s=Pt,c=Pe;La(r.type)&&(Pt=r.stateNode,Pe=!1),aa(n,a,r),jo(r.stateNode),Pt=s,Pe=c;break;case 5:Zt||kn(r,a);case 6:if(s=Pt,c=Pe,Pt=null,aa(n,a,r),Pt=s,Pe=c,Pt!==null)if(Pe)try{(Pt.nodeType===9?Pt.body:Pt.nodeName==="HTML"?Pt.ownerDocument.body:Pt).removeChild(r.stateNode)}catch(d){Ot(r,a,d)}else try{Pt.removeChild(r.stateNode)}catch(d){Ot(r,a,d)}break;case 18:Pt!==null&&(Pe?(n=Pt,Z0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,r.stateNode),Zo(n)):Z0(Pt,r.stateNode));break;case 4:s=Pt,c=Pe,Pt=r.stateNode.containerInfo,Pe=!0,aa(n,a,r),Pt=s,Pe=c;break;case 0:case 11:case 14:case 15:Zt||Oa(2,r,a),Zt||Oa(4,r,a),aa(n,a,r);break;case 1:Zt||(kn(r,a),s=r.stateNode,typeof s.componentWillUnmount=="function"&&e0(r,a,s)),aa(n,a,r);break;case 21:aa(n,a,r);break;case 22:Zt=(s=Zt)||r.memoizedState!==null,aa(n,a,r),Zt=s;break;default:aa(n,a,r)}}function u0(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Zo(n)}catch(r){Ot(a,a.return,r)}}function Hw(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new r0),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new r0),a;default:throw Error(o(435,n.tag))}}function wf(n,a){var r=Hw(n);a.forEach(function(s){var c=Zw.bind(null,n,s);r.has(s)||(r.add(s),s.then(c,c))})}function Ve(n,a){var r=a.deletions;if(r!==null)for(var s=0;s<r.length;s++){var c=r[s],d=n,b=a,v=b;t:for(;v!==null;){switch(v.tag){case 27:if(La(v.type)){Pt=v.stateNode,Pe=!1;break t}break;case 5:Pt=v.stateNode,Pe=!1;break t;case 3:case 4:Pt=v.stateNode.containerInfo,Pe=!0;break t}v=v.return}if(Pt===null)throw Error(o(160));l0(d,b,c),Pt=null,Pe=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)c0(a,n),a=a.sibling}var pn=null;function c0(n,a){var r=n.alternate,s=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Ve(a,n),He(n),s&4&&(Oa(3,n,n.return),Mo(3,n),Oa(5,n,n.return));break;case 1:Ve(a,n),He(n),s&512&&(Zt||r===null||kn(r,r.return)),s&64&&na&&(n=n.updateQueue,n!==null&&(s=n.callbacks,s!==null&&(r=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=r===null?s:r.concat(s))));break;case 26:var c=pn;if(Ve(a,n),He(n),s&512&&(Zt||r===null||kn(r,r.return)),s&4){var d=r!==null?r.memoizedState:null;if(s=n.memoizedState,r===null)if(s===null)if(n.stateNode===null){t:{s=n.type,r=n.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":d=c.getElementsByTagName("title")[0],(!d||d[no]||d[Kt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(s),c.head.insertBefore(d,c.querySelector("head > title"))),ye(d,s,r),d[Kt]=n,ue(d),s=d;break t;case"link":var b=iy("link","href",c).get(s+(r.href||""));if(b){for(var v=0;v<b.length;v++)if(d=b[v],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(v,1);break e}}d=c.createElement(s),ye(d,s,r),c.head.appendChild(d);break;case"meta":if(b=iy("meta","content",c).get(s+(r.content||""))){for(v=0;v<b.length;v++)if(d=b[v],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(v,1);break e}}d=c.createElement(s),ye(d,s,r),c.head.appendChild(d);break;default:throw Error(o(468,s))}d[Kt]=n,ue(d),s=d}n.stateNode=s}else ry(c,n.type,n.stateNode);else n.stateNode=ay(c,s,n.memoizedProps);else d!==s?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,s===null?ry(c,n.type,n.stateNode):ay(c,s,n.memoizedProps)):s===null&&n.stateNode!==null&&vf(n,n.memoizedProps,r.memoizedProps)}break;case 27:Ve(a,n),He(n),s&512&&(Zt||r===null||kn(r,r.return)),r!==null&&s&4&&vf(n,n.memoizedProps,r.memoizedProps);break;case 5:if(Ve(a,n),He(n),s&512&&(Zt||r===null||kn(r,r.return)),n.flags&32){c=n.stateNode;try{Wi(c,"")}catch(I){Ot(n,n.return,I)}}s&4&&n.stateNode!=null&&(c=n.memoizedProps,vf(n,c,r!==null?r.memoizedProps:c)),s&1024&&(xf=!0);break;case 6:if(Ve(a,n),He(n),s&4){if(n.stateNode===null)throw Error(o(162));s=n.memoizedProps,r=n.stateNode;try{r.nodeValue=s}catch(I){Ot(n,n.return,I)}}break;case 3:if(Fl=null,c=pn,pn=jl(a.containerInfo),Ve(a,n),pn=c,He(n),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Zo(a.containerInfo)}catch(I){Ot(n,n.return,I)}xf&&(xf=!1,f0(n));break;case 4:s=pn,pn=jl(n.stateNode.containerInfo),Ve(a,n),He(n),pn=s;break;case 12:Ve(a,n),He(n);break;case 13:Ve(a,n),He(n),n.child.flags&8192&&n.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Cf=ve()),s&4&&(s=n.updateQueue,s!==null&&(n.updateQueue=null,wf(n,s)));break;case 22:c=n.memoizedState!==null;var S=r!==null&&r.memoizedState!==null,M=na,B=Zt;if(na=M||c,Zt=B||S,Ve(a,n),Zt=B,na=M,He(n),s&8192)t:for(a=n.stateNode,a._visibility=c?a._visibility&-2:a._visibility|1,c&&(r===null||S||na||Zt||Si(n)),r=null,a=n;;){if(a.tag===5||a.tag===26){if(r===null){S=r=a;try{if(d=S.stateNode,c)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{v=S.stateNode;var H=S.memoizedProps.style,N=H!=null&&H.hasOwnProperty("display")?H.display:null;v.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(I){Ot(S,S.return,I)}}}else if(a.tag===6){if(r===null){S=a;try{S.stateNode.nodeValue=c?"":S.memoizedProps}catch(I){Ot(S,S.return,I)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break t;for(;a.sibling===null;){if(a.return===null||a.return===n)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}s&4&&(s=n.updateQueue,s!==null&&(r=s.retryQueue,r!==null&&(s.retryQueue=null,wf(n,r))));break;case 19:Ve(a,n),He(n),s&4&&(s=n.updateQueue,s!==null&&(n.updateQueue=null,wf(n,s)));break;case 30:break;case 21:break;default:Ve(a,n),He(n)}}function He(n){var a=n.flags;if(a&2){try{for(var r,s=n.return;s!==null;){if(a0(s)){r=s;break}s=s.return}if(r==null)throw Error(o(160));switch(r.tag){case 27:var c=r.stateNode,d=Tf(n);Cl(n,d,c);break;case 5:var b=r.stateNode;r.flags&32&&(Wi(b,""),r.flags&=-33);var v=Tf(n);Cl(n,v,b);break;case 3:case 4:var S=r.stateNode.containerInfo,M=Tf(n);Sf(n,M,S);break;default:throw Error(o(161))}}catch(B){Ot(n,n.return,B)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function f0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;f0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Ca(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)o0(n,a.alternate,a),a=a.sibling}function Si(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:Oa(4,a,a.return),Si(a);break;case 1:kn(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&e0(a,a.return,r),Si(a);break;case 27:jo(a.stateNode);case 26:case 5:kn(a,a.return),Si(a);break;case 22:a.memoizedState===null&&Si(a);break;case 30:Si(a);break;default:Si(a)}n=n.sibling}}function Da(n,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var s=a.alternate,c=n,d=a,b=d.flags;switch(d.tag){case 0:case 11:case 15:Da(c,d,r),Mo(4,d);break;case 1:if(Da(c,d,r),s=d,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(M){Ot(s,s.return,M)}if(s=d,c=s.updateQueue,c!==null){var v=s.stateNode;try{var S=c.shared.hiddenCallbacks;if(S!==null)for(c.shared.hiddenCallbacks=null,c=0;c<S.length;c++)Vm(S[c],v)}catch(M){Ot(s,s.return,M)}}r&&b&64&&t0(d),No(d,d.return);break;case 27:i0(d);case 26:case 5:Da(c,d,r),r&&s===null&&b&4&&n0(d),No(d,d.return);break;case 12:Da(c,d,r);break;case 13:Da(c,d,r),r&&b&4&&u0(c,d);break;case 22:d.memoizedState===null&&Da(c,d,r),No(d,d.return);break;case 30:break;default:Da(c,d,r)}a=a.sibling}}function _f(n,a){var r=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==r&&(n!=null&&n.refCount++,r!=null&&bo(r))}function Ef(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&bo(n))}function Mn(n,a,r,s){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)d0(n,a,r,s),a=a.sibling}function d0(n,a,r,s){var c=a.flags;switch(a.tag){case 0:case 11:case 15:Mn(n,a,r,s),c&2048&&Mo(9,a);break;case 1:Mn(n,a,r,s);break;case 3:Mn(n,a,r,s),c&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&bo(n)));break;case 12:if(c&2048){Mn(n,a,r,s),n=a.stateNode;try{var d=a.memoizedProps,b=d.id,v=d.onPostCommit;typeof v=="function"&&v(b,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(S){Ot(a,a.return,S)}}else Mn(n,a,r,s);break;case 13:Mn(n,a,r,s);break;case 23:break;case 22:d=a.stateNode,b=a.alternate,a.memoizedState!==null?d._visibility&2?Mn(n,a,r,s):Po(n,a):d._visibility&2?Mn(n,a,r,s):(d._visibility|=2,yr(n,a,r,s,(a.subtreeFlags&10256)!==0)),c&2048&&_f(b,a);break;case 24:Mn(n,a,r,s),c&2048&&Ef(a.alternate,a);break;default:Mn(n,a,r,s)}}function yr(n,a,r,s,c){for(c=c&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var d=n,b=a,v=r,S=s,M=b.flags;switch(b.tag){case 0:case 11:case 15:yr(d,b,v,S,c),Mo(8,b);break;case 23:break;case 22:var B=b.stateNode;b.memoizedState!==null?B._visibility&2?yr(d,b,v,S,c):Po(d,b):(B._visibility|=2,yr(d,b,v,S,c)),c&&M&2048&&_f(b.alternate,b);break;case 24:yr(d,b,v,S,c),c&&M&2048&&Ef(b.alternate,b);break;default:yr(d,b,v,S,c)}a=a.sibling}}function Po(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=n,s=a,c=s.flags;switch(s.tag){case 22:Po(r,s),c&2048&&_f(s.alternate,s);break;case 24:Po(r,s),c&2048&&Ef(s.alternate,s);break;default:Po(r,s)}a=a.sibling}}var Io=8192;function br(n){if(n.subtreeFlags&Io)for(n=n.child;n!==null;)h0(n),n=n.sibling}function h0(n){switch(n.tag){case 26:br(n),n.flags&Io&&n.memoizedState!==null&&A_(pn,n.memoizedState,n.memoizedProps);break;case 5:br(n);break;case 3:case 4:var a=pn;pn=jl(n.stateNode.containerInfo),br(n),pn=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Io,Io=16777216,br(n),Io=a):br(n));break;default:br(n)}}function p0(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Lo(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var s=a[r];fe=s,g0(s,n)}p0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)m0(n),n=n.sibling}function m0(n){switch(n.tag){case 0:case 11:case 15:Lo(n),n.flags&2048&&Oa(9,n,n.return);break;case 3:Lo(n);break;case 12:Lo(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,Dl(n)):Lo(n);break;default:Lo(n)}}function Dl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var s=a[r];fe=s,g0(s,n)}p0(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:Oa(8,a,a.return),Dl(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,Dl(a));break;default:Dl(a)}n=n.sibling}}function g0(n,a){for(;fe!==null;){var r=fe;switch(r.tag){case 0:case 11:case 15:Oa(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var s=r.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:bo(r.memoizedState.cache)}if(s=r.child,s!==null)s.return=r,fe=s;else t:for(r=n;fe!==null;){s=fe;var c=s.sibling,d=s.return;if(s0(s),s===r){fe=null;break t}if(c!==null){c.return=d,fe=c;break t}fe=d}}}var jw={getCacheForType:function(n){var a=Te(re),r=a.data.get(n);return r===void 0&&(r=n(),a.data.set(n,r)),r}},qw=typeof WeakMap=="function"?WeakMap:Map,wt=0,kt=null,yt=null,vt=0,_t=0,je=null,ka=!1,vr=!1,Af=!1,ia=0,jt=0,Ma=0,xi=0,Rf=0,an=0,Tr=0,Uo=null,Ie=null,Of=!1,Cf=0,kl=1/0,Ml=null,Na=null,ge=0,Pa=null,Sr=null,xr=0,Df=0,kf=null,y0=null,Bo=0,Mf=null;function qe(){if((wt&2)!==0&&vt!==0)return vt&-vt;if(P.T!==null){var n=ur;return n!==0?n:zf()}return oi()}function b0(){an===0&&(an=(vt&536870912)===0||xt?dn():536870912);var n=nn.current;return n!==null&&(n.flags|=32),an}function Fe(n,a,r){(n===kt&&(_t===2||_t===9)||n.cancelPendingCommit!==null)&&(wr(n,0),Ia(n,vt,an,!1)),va(n,r),((wt&2)===0||n!==kt)&&(n===kt&&((wt&2)===0&&(xi|=r),jt===4&&Ia(n,vt,an,!1)),Nn(n))}function v0(n,a,r){if((wt&6)!==0)throw Error(o(327));var s=!r&&(a&124)===0&&(a&n.expiredLanes)===0||ri(n,a),c=s?Yw(n,a):If(n,a,!0),d=s;do{if(c===0){vr&&!s&&Ia(n,a,0,!1);break}else{if(r=n.current.alternate,d&&!Fw(r)){c=If(n,a,!1),d=!1;continue}if(c===2){if(d=a,n.errorRecoveryDisabledLanes&d)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){a=b;t:{var v=n;c=Uo;var S=v.current.memoizedState.isDehydrated;if(S&&(wr(v,b).flags|=256),b=If(v,b,!1),b!==2){if(Af&&!S){v.errorRecoveryDisabledLanes|=d,xi|=d,c=4;break t}d=Ie,Ie=c,d!==null&&(Ie===null?Ie=d:Ie.push.apply(Ie,d))}c=b}if(d=!1,c!==2)continue}}if(c===1){wr(n,0),Ia(n,a,0,!0);break}t:{switch(s=n,d=c,d){case 0:case 1:throw Error(o(345));case 4:if((a&4194048)!==a)break;case 6:Ia(s,a,an,!ka);break t;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(o(329))}if((a&62914560)===a&&(c=Cf+300-ve(),10<c)){if(Ia(s,a,an,!ka),ii(s,0,!0)!==0)break t;s.timeoutHandle=K0(T0.bind(null,s,r,Ie,Ml,Of,a,an,xi,Tr,ka,d,2,-0,0),c);break t}T0(s,r,Ie,Ml,Of,a,an,xi,Tr,ka,d,0,-0,0)}}break}while(!0);Nn(n)}function T0(n,a,r,s,c,d,b,v,S,M,B,H,N,I){if(n.timeoutHandle=-1,H=a.subtreeFlags,(H&8192||(H&16785408)===16785408)&&(Go={stylesheets:null,count:0,unsuspend:E_},h0(a),H=R_(),H!==null)){n.cancelPendingCommit=H(R0.bind(null,n,a,d,r,s,c,b,v,S,B,1,N,I)),Ia(n,d,b,!M);return}R0(n,a,d,r,s,c,b,v,S)}function Fw(n){for(var a=n;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var s=0;s<r.length;s++){var c=r[s],d=c.getSnapshot;c=c.value;try{if(!Be(d(),c))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ia(n,a,r,s){a&=~Rf,a&=~xi,n.suspendedLanes|=a,n.pingedLanes&=~a,s&&(n.warmLanes|=a),s=n.expirationTimes;for(var c=a;0<c;){var d=31-he(c),b=1<<d;s[d]=-1,c&=~b}r!==0&&dt(n,r,a)}function Nl(){return(wt&6)===0?(zo(0),!1):!0}function Nf(){if(yt!==null){if(_t===0)var n=yt.return;else n=yt,Zn=gi=null,$c(n),mr=null,Co=0,n=yt;for(;n!==null;)Jg(n.alternate,n),n=n.return;yt=null}}function wr(n,a){var r=n.timeoutHandle;r!==-1&&(n.timeoutHandle=-1,l_(r)),r=n.cancelPendingCommit,r!==null&&(n.cancelPendingCommit=null,r()),Nf(),kt=n,yt=r=Xn(n.current,null),vt=a,_t=0,je=null,ka=!1,vr=ri(n,a),Af=!1,Tr=an=Rf=xi=Ma=jt=0,Ie=Uo=null,Of=!1,(a&8)!==0&&(a|=a&32);var s=n.entangledLanes;if(s!==0)for(n=n.entanglements,s&=a;0<s;){var c=31-he(s),d=1<<c;a|=n[c],s&=~d}return ia=a,el(),r}function S0(n,a){mt=null,P.H=Tl,a===To||a===cl?(a=Bm(),_t=3):a===Im?(a=Bm(),_t=4):_t=a===zg?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,je=a,yt===null&&(jt=1,El(n,We(a,n.current)))}function x0(){var n=P.H;return P.H=Tl,n===null?Tl:n}function w0(){var n=P.A;return P.A=jw,n}function Pf(){jt=4,ka||(vt&4194048)!==vt&&nn.current!==null||(vr=!0),(Ma&134217727)===0&&(xi&134217727)===0||kt===null||Ia(kt,vt,an,!1)}function If(n,a,r){var s=wt;wt|=2;var c=x0(),d=w0();(kt!==n||vt!==a)&&(Ml=null,wr(n,a)),a=!1;var b=jt;t:do try{if(_t!==0&&yt!==null){var v=yt,S=je;switch(_t){case 8:Nf(),b=6;break t;case 3:case 2:case 9:case 6:nn.current===null&&(a=!0);var M=_t;if(_t=0,je=null,_r(n,v,S,M),r&&vr){b=0;break t}break;default:M=_t,_t=0,je=null,_r(n,v,S,M)}}Gw(),b=jt;break}catch(B){S0(n,B)}while(!0);return a&&n.shellSuspendCounter++,Zn=gi=null,wt=s,P.H=c,P.A=d,yt===null&&(kt=null,vt=0,el()),b}function Gw(){for(;yt!==null;)_0(yt)}function Yw(n,a){var r=wt;wt|=2;var s=x0(),c=w0();kt!==n||vt!==a?(Ml=null,kl=ve()+500,wr(n,a)):vr=ri(n,a);t:do try{if(_t!==0&&yt!==null){a=yt;var d=je;e:switch(_t){case 1:_t=0,je=null,_r(n,a,d,1);break;case 2:case 9:if(Lm(d)){_t=0,je=null,E0(a);break}a=function(){_t!==2&&_t!==9||kt!==n||(_t=7),Nn(n)},d.then(a,a);break t;case 3:_t=7;break t;case 4:_t=5;break t;case 7:Lm(d)?(_t=0,je=null,E0(a)):(_t=0,je=null,_r(n,a,d,7));break;case 5:var b=null;switch(yt.tag){case 26:b=yt.memoizedState;case 5:case 27:var v=yt;if(!b||oy(b)){_t=0,je=null;var S=v.sibling;if(S!==null)yt=S;else{var M=v.return;M!==null?(yt=M,Pl(M)):yt=null}break e}}_t=0,je=null,_r(n,a,d,5);break;case 6:_t=0,je=null,_r(n,a,d,6);break;case 8:Nf(),jt=6;break t;default:throw Error(o(462))}}Xw();break}catch(B){S0(n,B)}while(!0);return Zn=gi=null,P.H=s,P.A=c,wt=r,yt!==null?0:(kt=null,vt=0,el(),jt)}function Xw(){for(;yt!==null&&!Qu();)_0(yt)}function _0(n){var a=Qg(n.alternate,n,ia);n.memoizedProps=n.pendingProps,a===null?Pl(n):yt=a}function E0(n){var a=n,r=a.alternate;switch(a.tag){case 15:case 0:a=Gg(r,a,a.pendingProps,a.type,void 0,vt);break;case 11:a=Gg(r,a,a.pendingProps,a.type.render,a.ref,vt);break;case 5:$c(a);default:Jg(r,a),a=yt=Am(a,ia),a=Qg(r,a,ia)}n.memoizedProps=n.pendingProps,a===null?Pl(n):yt=a}function _r(n,a,r,s){Zn=gi=null,$c(a),mr=null,Co=0;var c=a.return;try{if(Lw(n,c,a,r,vt)){jt=1,El(n,We(r,n.current)),yt=null;return}}catch(d){if(c!==null)throw yt=c,d;jt=1,El(n,We(r,n.current)),yt=null;return}a.flags&32768?(xt||s===1?n=!0:vr||(vt&536870912)!==0?n=!1:(ka=n=!0,(s===2||s===9||s===3||s===6)&&(s=nn.current,s!==null&&s.tag===13&&(s.flags|=16384))),A0(a,n)):Pl(a)}function Pl(n){var a=n;do{if((a.flags&32768)!==0){A0(a,ka);return}n=a.return;var r=Bw(a.alternate,a,ia);if(r!==null){yt=r;return}if(a=a.sibling,a!==null){yt=a;return}yt=a=n}while(a!==null);jt===0&&(jt=5)}function A0(n,a){do{var r=zw(n.alternate,n);if(r!==null){r.flags&=32767,yt=r;return}if(r=n.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(n=n.sibling,n!==null)){yt=n;return}yt=n=r}while(n!==null);jt=6,yt=null}function R0(n,a,r,s,c,d,b,v,S){n.cancelPendingCommit=null;do Il();while(ge!==0);if((wt&6)!==0)throw Error(o(327));if(a!==null){if(a===n.current)throw Error(o(177));if(d=a.lanes|a.childLanes,d|=_c,qs(n,r,d,b,v,S),n===kt&&(yt=kt=null,vt=0),Sr=a,Pa=n,xr=r,Df=d,kf=c,y0=s,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Qw(ji,function(){return M0(),null})):(n.callbackNode=null,n.callbackPriority=0),s=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,c=q.p,q.p=2,b=wt,wt|=4;try{Vw(n,a,r)}finally{wt=b,q.p=c,P.T=s}}ge=1,O0(),C0(),D0()}}function O0(){if(ge===1){ge=0;var n=Pa,a=Sr,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=P.T,P.T=null;var s=q.p;q.p=2;var c=wt;wt|=4;try{c0(a,n);var d=Xf,b=gm(n.containerInfo),v=d.focusedElem,S=d.selectionRange;if(b!==v&&v&&v.ownerDocument&&mm(v.ownerDocument.documentElement,v)){if(S!==null&&vc(v)){var M=S.start,B=S.end;if(B===void 0&&(B=M),"selectionStart"in v)v.selectionStart=M,v.selectionEnd=Math.min(B,v.value.length);else{var H=v.ownerDocument||document,N=H&&H.defaultView||window;if(N.getSelection){var I=N.getSelection(),ct=v.textContent.length,ot=Math.min(S.start,ct),Rt=S.end===void 0?ot:Math.min(S.end,ct);!I.extend&&ot>Rt&&(b=Rt,Rt=ot,ot=b);var O=pm(v,ot),E=pm(v,Rt);if(O&&E&&(I.rangeCount!==1||I.anchorNode!==O.node||I.anchorOffset!==O.offset||I.focusNode!==E.node||I.focusOffset!==E.offset)){var k=H.createRange();k.setStart(O.node,O.offset),I.removeAllRanges(),ot>Rt?(I.addRange(k),I.extend(E.node,E.offset)):(k.setEnd(E.node,E.offset),I.addRange(k))}}}}for(H=[],I=v;I=I.parentNode;)I.nodeType===1&&H.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<H.length;v++){var z=H[v];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Xl=!!Yf,Xf=Yf=null}finally{wt=c,q.p=s,P.T=r}}n.current=a,ge=2}}function C0(){if(ge===2){ge=0;var n=Pa,a=Sr,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=P.T,P.T=null;var s=q.p;q.p=2;var c=wt;wt|=4;try{o0(n,a.alternate,a)}finally{wt=c,q.p=s,P.T=r}}ge=3}}function D0(){if(ge===4||ge===3){ge=0,Bs();var n=Pa,a=Sr,r=xr,s=y0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ge=5:(ge=0,Sr=Pa=null,k0(n,n.pendingLanes));var c=n.pendingLanes;if(c===0&&(Na=null),pe(r),a=a.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Rn,a,void 0,(a.current.flags&128)===128)}catch{}if(s!==null){a=P.T,c=q.p,q.p=2,P.T=null;try{for(var d=n.onRecoverableError,b=0;b<s.length;b++){var v=s[b];d(v.value,{componentStack:v.stack})}}finally{P.T=a,q.p=c}}(xr&3)!==0&&Il(),Nn(n),c=n.pendingLanes,(r&4194090)!==0&&(c&42)!==0?n===Mf?Bo++:(Bo=0,Mf=n):Bo=0,zo(0)}}function k0(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,bo(a)))}function Il(n){return O0(),C0(),D0(),M0()}function M0(){if(ge!==5)return!1;var n=Pa,a=Df;Df=0;var r=pe(xr),s=P.T,c=q.p;try{q.p=32>r?32:r,P.T=null,r=kf,kf=null;var d=Pa,b=xr;if(ge=0,Sr=Pa=null,xr=0,(wt&6)!==0)throw Error(o(331));var v=wt;if(wt|=4,m0(d.current),d0(d,d.current,b,r),wt=v,zo(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Rn,d)}catch{}return!0}finally{q.p=c,P.T=s,k0(n,a)}}function N0(n,a,r){a=We(r,a),a=cf(n.stateNode,a,2),n=_a(n,a,2),n!==null&&(va(n,2),Nn(n))}function Ot(n,a,r){if(n.tag===3)N0(n,n,r);else for(;a!==null;){if(a.tag===3){N0(a,n,r);break}else if(a.tag===1){var s=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Na===null||!Na.has(s))){n=We(r,n),r=Ug(2),s=_a(a,r,2),s!==null&&(Bg(r,s,a,n),va(s,2),Nn(s));break}}a=a.return}}function Lf(n,a,r){var s=n.pingCache;if(s===null){s=n.pingCache=new qw;var c=new Set;s.set(a,c)}else c=s.get(a),c===void 0&&(c=new Set,s.set(a,c));c.has(r)||(Af=!0,c.add(r),n=Kw.bind(null,n,a,r),a.then(n,n))}function Kw(n,a,r){var s=n.pingCache;s!==null&&s.delete(a),n.pingedLanes|=n.suspendedLanes&r,n.warmLanes&=~r,kt===n&&(vt&r)===r&&(jt===4||jt===3&&(vt&62914560)===vt&&300>ve()-Cf?(wt&2)===0&&wr(n,0):Rf|=r,Tr===vt&&(Tr=0)),Nn(n)}function P0(n,a){a===0&&(a=js()),n=rr(n,a),n!==null&&(va(n,a),Nn(n))}function $w(n){var a=n.memoizedState,r=0;a!==null&&(r=a.retryLane),P0(n,r)}function Zw(n,a){var r=0;switch(n.tag){case 13:var s=n.stateNode,c=n.memoizedState;c!==null&&(r=c.retryLane);break;case 19:s=n.stateNode;break;case 22:s=n.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(a),P0(n,r)}function Qw(n,a){return Jr(n,a)}var Ll=null,Er=null,Uf=!1,Ul=!1,Bf=!1,wi=0;function Nn(n){n!==Er&&n.next===null&&(Er===null?Ll=Er=n:Er=Er.next=n),Ul=!0,Uf||(Uf=!0,Jw())}function zo(n,a){if(!Bf&&Ul){Bf=!0;do for(var r=!1,s=Ll;s!==null;){if(n!==0){var c=s.pendingLanes;if(c===0)var d=0;else{var b=s.suspendedLanes,v=s.pingedLanes;d=(1<<31-he(42|n)+1)-1,d&=c&~(b&~v),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,B0(s,d))}else d=vt,d=ii(s,s===kt?d:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(d&3)===0||ri(s,d)||(r=!0,B0(s,d));s=s.next}while(r);Bf=!1}}function Ww(){I0()}function I0(){Ul=Uf=!1;var n=0;wi!==0&&(s_()&&(n=wi),wi=0);for(var a=ve(),r=null,s=Ll;s!==null;){var c=s.next,d=L0(s,a);d===0?(s.next=null,r===null?Ll=c:r.next=c,c===null&&(Er=r)):(r=s,(n!==0||(d&3)!==0)&&(Ul=!0)),s=c}zo(n)}function L0(n,a){for(var r=n.suspendedLanes,s=n.pingedLanes,c=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var b=31-he(d),v=1<<b,S=c[b];S===-1?((v&r)===0||(v&s)!==0)&&(c[b]=to(v,a)):S<=a&&(n.expiredLanes|=v),d&=~v}if(a=kt,r=vt,r=ii(n,n===a?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),s=n.callbackNode,r===0||n===a&&(_t===2||_t===9)||n.cancelPendingCommit!==null)return s!==null&&s!==null&&ai(s),n.callbackNode=null,n.callbackPriority=0;if((r&3)===0||ri(n,r)){if(a=r&-r,a===n.callbackPriority)return a;switch(s!==null&&ai(s),pe(r)){case 2:case 8:r=Vs;break;case 32:r=ji;break;case 268435456:r=qn;break;default:r=ji}return s=U0.bind(null,n),r=Jr(r,s),n.callbackPriority=a,n.callbackNode=r,a}return s!==null&&s!==null&&ai(s),n.callbackPriority=2,n.callbackNode=null,2}function U0(n,a){if(ge!==0&&ge!==5)return n.callbackNode=null,n.callbackPriority=0,null;var r=n.callbackNode;if(Il()&&n.callbackNode!==r)return null;var s=vt;return s=ii(n,n===kt?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),s===0?null:(v0(n,s,a),L0(n,ve()),n.callbackNode!=null&&n.callbackNode===r?U0.bind(null,n):null)}function B0(n,a){if(Il())return null;v0(n,a,!0)}function Jw(){u_(function(){(wt&6)!==0?Jr($e,Ww):I0()})}function zf(){return wi===0&&(wi=dn()),wi}function z0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ks(""+n)}function V0(n,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,n.id&&r.setAttribute("form",n.id),a.parentNode.insertBefore(r,a),n=new FormData(n),r.parentNode.removeChild(r),n}function t_(n,a,r,s,c){if(a==="submit"&&r&&r.stateNode===c){var d=z0((c[Dt]||null).action),b=s.submitter;b&&(a=(a=b[Dt]||null)?z0(a.formAction):b.getAttribute("formAction"),a!==null&&(d=a,b=null));var v=new Ws("action","action",null,s,c);n.push({event:v,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(wi!==0){var S=b?V0(c,b):new FormData(c);rf(r,{pending:!0,data:S,method:c.method,action:d},null,S)}}else typeof d=="function"&&(v.preventDefault(),S=b?V0(c,b):new FormData(c),rf(r,{pending:!0,data:S,method:c.method,action:d},d,S))},currentTarget:c}]})}}for(var Vf=0;Vf<wc.length;Vf++){var Hf=wc[Vf],e_=Hf.toLowerCase(),n_=Hf[0].toUpperCase()+Hf.slice(1);hn(e_,"on"+n_)}hn(vm,"onAnimationEnd"),hn(Tm,"onAnimationIteration"),hn(Sm,"onAnimationStart"),hn("dblclick","onDoubleClick"),hn("focusin","onFocus"),hn("focusout","onBlur"),hn(vw,"onTransitionRun"),hn(Tw,"onTransitionStart"),hn(Sw,"onTransitionCancel"),hn(xm,"onTransitionEnd"),$i("onMouseEnter",["mouseout","mouseover"]),$i("onMouseLeave",["mouseout","mouseover"]),$i("onPointerEnter",["pointerout","pointerover"]),$i("onPointerLeave",["pointerout","pointerover"]),si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),si("onBeforeInput",["compositionend","keypress","textInput","paste"]),si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function H0(n,a){a=(a&4)!==0;for(var r=0;r<n.length;r++){var s=n[r],c=s.event;s=s.listeners;t:{var d=void 0;if(a)for(var b=s.length-1;0<=b;b--){var v=s[b],S=v.instance,M=v.currentTarget;if(v=v.listener,S!==d&&c.isPropagationStopped())break t;d=v,c.currentTarget=M;try{d(c)}catch(B){_l(B)}c.currentTarget=null,d=S}else for(b=0;b<s.length;b++){if(v=s[b],S=v.instance,M=v.currentTarget,v=v.listener,S!==d&&c.isPropagationStopped())break t;d=v,c.currentTarget=M;try{d(c)}catch(B){_l(B)}c.currentTarget=null,d=S}}}}function bt(n,a){var r=a[Gi];r===void 0&&(r=a[Gi]=new Set);var s=n+"__bubble";r.has(s)||(j0(a,n,2,!1),r.add(s))}function jf(n,a,r){var s=0;a&&(s|=4),j0(r,n,s,a)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function qf(n){if(!n[Bl]){n[Bl]=!0,Ip.forEach(function(r){r!=="selectionchange"&&(a_.has(r)||jf(r,!1,n),jf(r,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Bl]||(a[Bl]=!0,jf("selectionchange",!1,a))}}function j0(n,a,r,s){switch(dy(a)){case 2:var c=D_;break;case 8:c=k_;break;default:c=ad}r=c.bind(null,a,r,n),c=void 0,!cc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(c=!0),s?c!==void 0?n.addEventListener(a,r,{capture:!0,passive:c}):n.addEventListener(a,r,!0):c!==void 0?n.addEventListener(a,r,{passive:c}):n.addEventListener(a,r,!1)}function Ff(n,a,r,s,c){var d=s;if((a&1)===0&&(a&2)===0&&s!==null)t:for(;;){if(s===null)return;var b=s.tag;if(b===3||b===4){var v=s.stateNode.containerInfo;if(v===c)break;if(b===4)for(b=s.return;b!==null;){var S=b.tag;if((S===3||S===4)&&b.stateNode.containerInfo===c)return;b=b.return}for(;v!==null;){if(b=Yi(v),b===null)return;if(S=b.tag,S===5||S===6||S===26||S===27){s=d=b;continue t}v=v.parentNode}}s=s.return}$p(function(){var M=d,B=lc(r),H=[];t:{var N=wm.get(n);if(N!==void 0){var I=Ws,ct=n;switch(n){case"keypress":if(Zs(r)===0)break t;case"keydown":case"keyup":I=Qx;break;case"focusin":ct="focus",I=pc;break;case"focusout":ct="blur",I=pc;break;case"beforeblur":case"afterblur":I=pc;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=tw;break;case vm:case Tm:case Sm:I=jx;break;case xm:I=nw;break;case"scroll":case"scrollend":I=Ux;break;case"wheel":I=iw;break;case"copy":case"cut":case"paste":I=Fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=tm;break;case"toggle":case"beforetoggle":I=ow}var ot=(a&4)!==0,Rt=!ot&&(n==="scroll"||n==="scrollend"),O=ot?N!==null?N+"Capture":null:N;ot=[];for(var E=M,k;E!==null;){var z=E;if(k=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||k===null||O===null||(z=io(E,O),z!=null&&ot.push(Ho(E,z,k))),Rt)break;E=E.return}0<ot.length&&(N=new I(N,ct,null,r,B),H.push({event:N,listeners:ot}))}}if((a&7)===0){t:{if(N=n==="mouseover"||n==="pointerover",I=n==="mouseout"||n==="pointerout",N&&r!==sc&&(ct=r.relatedTarget||r.fromElement)&&(Yi(ct)||ct[le]))break t;if((I||N)&&(N=B.window===B?B:(N=B.ownerDocument)?N.defaultView||N.parentWindow:window,I?(ct=r.relatedTarget||r.toElement,I=M,ct=ct?Yi(ct):null,ct!==null&&(Rt=u(ct),ot=ct.tag,ct!==Rt||ot!==5&&ot!==27&&ot!==6)&&(ct=null)):(I=null,ct=M),I!==ct)){if(ot=Wp,z="onMouseLeave",O="onMouseEnter",E="mouse",(n==="pointerout"||n==="pointerover")&&(ot=tm,z="onPointerLeave",O="onPointerEnter",E="pointer"),Rt=I==null?N:ao(I),k=ct==null?N:ao(ct),N=new ot(z,E+"leave",I,r,B),N.target=Rt,N.relatedTarget=k,z=null,Yi(B)===M&&(ot=new ot(O,E+"enter",ct,r,B),ot.target=k,ot.relatedTarget=Rt,z=ot),Rt=z,I&&ct)e:{for(ot=I,O=ct,E=0,k=ot;k;k=Ar(k))E++;for(k=0,z=O;z;z=Ar(z))k++;for(;0<E-k;)ot=Ar(ot),E--;for(;0<k-E;)O=Ar(O),k--;for(;E--;){if(ot===O||O!==null&&ot===O.alternate)break e;ot=Ar(ot),O=Ar(O)}ot=null}else ot=null;I!==null&&q0(H,N,I,ot,!1),ct!==null&&Rt!==null&&q0(H,Rt,ct,ot,!0)}}t:{if(N=M?ao(M):window,I=N.nodeName&&N.nodeName.toLowerCase(),I==="select"||I==="input"&&N.type==="file")var J=lm;else if(om(N))if(um)J=gw;else{J=pw;var gt=hw}else I=N.nodeName,!I||I.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?M&&oc(M.elementType)&&(J=lm):J=mw;if(J&&(J=J(n,M))){sm(H,J,r,B);break t}gt&&gt(n,N,M),n==="focusout"&&M&&N.type==="number"&&M.memoizedProps.value!=null&&rc(N,"number",N.value)}switch(gt=M?ao(M):window,n){case"focusin":(om(gt)||gt.contentEditable==="true")&&(nr=gt,Tc=M,ho=null);break;case"focusout":ho=Tc=nr=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,ym(H,r,B);break;case"selectionchange":if(bw)break;case"keydown":case"keyup":ym(H,r,B)}var et;if(gc)t:{switch(n){case"compositionstart":var st="onCompositionStart";break t;case"compositionend":st="onCompositionEnd";break t;case"compositionupdate":st="onCompositionUpdate";break t}st=void 0}else er?im(n,r)&&(st="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(st="onCompositionStart");st&&(em&&r.locale!=="ko"&&(er||st!=="onCompositionStart"?st==="onCompositionEnd"&&er&&(et=Zp()):(Ta=B,fc="value"in Ta?Ta.value:Ta.textContent,er=!0)),gt=zl(M,st),0<gt.length&&(st=new Jp(st,n,null,r,B),H.push({event:st,listeners:gt}),et?st.data=et:(et=rm(r),et!==null&&(st.data=et)))),(et=lw?uw(n,r):cw(n,r))&&(st=zl(M,"onBeforeInput"),0<st.length&&(gt=new Jp("onBeforeInput","beforeinput",null,r,B),H.push({event:gt,listeners:st}),gt.data=et)),t_(H,n,M,r,B)}H0(H,a)})}function Ho(n,a,r){return{instance:n,listener:a,currentTarget:r}}function zl(n,a){for(var r=a+"Capture",s=[];n!==null;){var c=n,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=io(n,r),c!=null&&s.unshift(Ho(n,c,d)),c=io(n,a),c!=null&&s.push(Ho(n,c,d))),n.tag===3)return s;n=n.return}return[]}function Ar(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function q0(n,a,r,s,c){for(var d=a._reactName,b=[];r!==null&&r!==s;){var v=r,S=v.alternate,M=v.stateNode;if(v=v.tag,S!==null&&S===s)break;v!==5&&v!==26&&v!==27||M===null||(S=M,c?(M=io(r,d),M!=null&&b.unshift(Ho(r,M,S))):c||(M=io(r,d),M!=null&&b.push(Ho(r,M,S)))),r=r.return}b.length!==0&&n.push({event:a,listeners:b})}var i_=/\r\n?/g,r_=/\u0000|\uFFFD/g;function F0(n){return(typeof n=="string"?n:""+n).replace(i_,`
`).replace(r_,"")}function G0(n,a){return a=F0(a),F0(n)===a}function Vl(){}function At(n,a,r,s,c,d){switch(r){case"children":typeof s=="string"?a==="body"||a==="textarea"&&s===""||Wi(n,s):(typeof s=="number"||typeof s=="bigint")&&a!=="body"&&Wi(n,""+s);break;case"className":Gs(n,"class",s);break;case"tabIndex":Gs(n,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Gs(n,r,s);break;case"style":Xp(n,s,d);break;case"data":if(a!=="object"){Gs(n,"data",s);break}case"src":case"href":if(s===""&&(a!=="a"||r!=="href")){n.removeAttribute(r);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){n.removeAttribute(r);break}s=Ks(""+s),n.setAttribute(r,s);break;case"action":case"formAction":if(typeof s=="function"){n.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(a!=="input"&&At(n,a,"name",c.name,c,null),At(n,a,"formEncType",c.formEncType,c,null),At(n,a,"formMethod",c.formMethod,c,null),At(n,a,"formTarget",c.formTarget,c,null)):(At(n,a,"encType",c.encType,c,null),At(n,a,"method",c.method,c,null),At(n,a,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){n.removeAttribute(r);break}s=Ks(""+s),n.setAttribute(r,s);break;case"onClick":s!=null&&(n.onclick=Vl);break;case"onScroll":s!=null&&bt("scroll",n);break;case"onScrollEnd":s!=null&&bt("scrollend",n);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(r=s.__html,r!=null){if(c.children!=null)throw Error(o(60));n.innerHTML=r}}break;case"multiple":n.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":n.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){n.removeAttribute("xlink:href");break}r=Ks(""+s),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?n.setAttribute(r,""+s):n.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?n.setAttribute(r,""):n.removeAttribute(r);break;case"capture":case"download":s===!0?n.setAttribute(r,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?n.setAttribute(r,s):n.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?n.setAttribute(r,s):n.removeAttribute(r);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?n.removeAttribute(r):n.setAttribute(r,s);break;case"popover":bt("beforetoggle",n),bt("toggle",n),Fs(n,"popover",s);break;case"xlinkActuate":Gn(n,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Gn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Gn(n,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Gn(n,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Gn(n,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Gn(n,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Gn(n,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Gn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Gn(n,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Fs(n,"is",s);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Ix.get(r)||r,Fs(n,r,s))}}function Gf(n,a,r,s,c,d){switch(r){case"style":Xp(n,s,d);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(r=s.__html,r!=null){if(c.children!=null)throw Error(o(60));n.innerHTML=r}}break;case"children":typeof s=="string"?Wi(n,s):(typeof s=="number"||typeof s=="bigint")&&Wi(n,""+s);break;case"onScroll":s!=null&&bt("scroll",n);break;case"onScrollEnd":s!=null&&bt("scrollend",n);break;case"onClick":s!=null&&(n.onclick=Vl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lp.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),a=r.slice(2,c?r.length-7:void 0),d=n[Dt]||null,d=d!=null?d[r]:null,typeof d=="function"&&n.removeEventListener(a,d,c),typeof s=="function")){typeof d!="function"&&d!==null&&(r in n?n[r]=null:n.hasAttribute(r)&&n.removeAttribute(r)),n.addEventListener(a,s,c);break t}r in n?n[r]=s:s===!0?n.setAttribute(r,""):Fs(n,r,s)}}}function ye(n,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",n),bt("load",n);var s=!1,c=!1,d;for(d in r)if(r.hasOwnProperty(d)){var b=r[d];if(b!=null)switch(d){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:At(n,a,d,b,r,null)}}c&&At(n,a,"srcSet",r.srcSet,r,null),s&&At(n,a,"src",r.src,r,null);return;case"input":bt("invalid",n);var v=d=b=c=null,S=null,M=null;for(s in r)if(r.hasOwnProperty(s)){var B=r[s];if(B!=null)switch(s){case"name":c=B;break;case"type":b=B;break;case"checked":S=B;break;case"defaultChecked":M=B;break;case"value":d=B;break;case"defaultValue":v=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,a));break;default:At(n,a,s,B,r,null)}}qp(n,d,v,S,M,b,c,!1),Ys(n);return;case"select":bt("invalid",n),s=b=d=null;for(c in r)if(r.hasOwnProperty(c)&&(v=r[c],v!=null))switch(c){case"value":d=v;break;case"defaultValue":b=v;break;case"multiple":s=v;default:At(n,a,c,v,r,null)}a=d,r=b,n.multiple=!!s,a!=null?Qi(n,!!s,a,!1):r!=null&&Qi(n,!!s,r,!0);return;case"textarea":bt("invalid",n),d=c=s=null;for(b in r)if(r.hasOwnProperty(b)&&(v=r[b],v!=null))switch(b){case"value":s=v;break;case"defaultValue":c=v;break;case"children":d=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:At(n,a,b,v,r,null)}Gp(n,s,c,d),Ys(n);return;case"option":for(S in r)if(r.hasOwnProperty(S)&&(s=r[S],s!=null))switch(S){case"selected":n.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:At(n,a,S,s,r,null)}return;case"dialog":bt("beforetoggle",n),bt("toggle",n),bt("cancel",n),bt("close",n);break;case"iframe":case"object":bt("load",n);break;case"video":case"audio":for(s=0;s<Vo.length;s++)bt(Vo[s],n);break;case"image":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"embed":case"source":case"link":bt("error",n),bt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in r)if(r.hasOwnProperty(M)&&(s=r[M],s!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:At(n,a,M,s,r,null)}return;default:if(oc(a)){for(B in r)r.hasOwnProperty(B)&&(s=r[B],s!==void 0&&Gf(n,a,B,s,r,void 0));return}}for(v in r)r.hasOwnProperty(v)&&(s=r[v],s!=null&&At(n,a,v,s,r,null))}function o_(n,a,r,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,b=null,v=null,S=null,M=null,B=null;for(I in r){var H=r[I];if(r.hasOwnProperty(I)&&H!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":S=H;default:s.hasOwnProperty(I)||At(n,a,I,null,s,H)}}for(var N in s){var I=s[N];if(H=r[N],s.hasOwnProperty(N)&&(I!=null||H!=null))switch(N){case"type":d=I;break;case"name":c=I;break;case"checked":M=I;break;case"defaultChecked":B=I;break;case"value":b=I;break;case"defaultValue":v=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(o(137,a));break;default:I!==H&&At(n,a,N,I,s,H)}}ic(n,b,v,S,M,B,d,c);return;case"select":I=b=v=N=null;for(d in r)if(S=r[d],r.hasOwnProperty(d)&&S!=null)switch(d){case"value":break;case"multiple":I=S;default:s.hasOwnProperty(d)||At(n,a,d,null,s,S)}for(c in s)if(d=s[c],S=r[c],s.hasOwnProperty(c)&&(d!=null||S!=null))switch(c){case"value":N=d;break;case"defaultValue":v=d;break;case"multiple":b=d;default:d!==S&&At(n,a,c,d,s,S)}a=v,r=b,s=I,N!=null?Qi(n,!!r,N,!1):!!s!=!!r&&(a!=null?Qi(n,!!r,a,!0):Qi(n,!!r,r?[]:"",!1));return;case"textarea":I=N=null;for(v in r)if(c=r[v],r.hasOwnProperty(v)&&c!=null&&!s.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:At(n,a,v,null,s,c)}for(b in s)if(c=s[b],d=r[b],s.hasOwnProperty(b)&&(c!=null||d!=null))switch(b){case"value":N=c;break;case"defaultValue":I=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==d&&At(n,a,b,c,s,d)}Fp(n,N,I);return;case"option":for(var ct in r)if(N=r[ct],r.hasOwnProperty(ct)&&N!=null&&!s.hasOwnProperty(ct))switch(ct){case"selected":n.selected=!1;break;default:At(n,a,ct,null,s,N)}for(S in s)if(N=s[S],I=r[S],s.hasOwnProperty(S)&&N!==I&&(N!=null||I!=null))switch(S){case"selected":n.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:At(n,a,S,N,s,I)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in r)N=r[ot],r.hasOwnProperty(ot)&&N!=null&&!s.hasOwnProperty(ot)&&At(n,a,ot,null,s,N);for(M in s)if(N=s[M],I=r[M],s.hasOwnProperty(M)&&N!==I&&(N!=null||I!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,a));break;default:At(n,a,M,N,s,I)}return;default:if(oc(a)){for(var Rt in r)N=r[Rt],r.hasOwnProperty(Rt)&&N!==void 0&&!s.hasOwnProperty(Rt)&&Gf(n,a,Rt,void 0,s,N);for(B in s)N=s[B],I=r[B],!s.hasOwnProperty(B)||N===I||N===void 0&&I===void 0||Gf(n,a,B,N,s,I);return}}for(var O in r)N=r[O],r.hasOwnProperty(O)&&N!=null&&!s.hasOwnProperty(O)&&At(n,a,O,null,s,N);for(H in s)N=s[H],I=r[H],!s.hasOwnProperty(H)||N===I||N==null&&I==null||At(n,a,H,N,s,I)}var Yf=null,Xf=null;function Hl(n){return n.nodeType===9?n:n.ownerDocument}function Y0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X0(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function Kf(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var $f=null;function s_(){var n=window.event;return n&&n.type==="popstate"?n===$f?!1:($f=n,!0):($f=null,!1)}var K0=typeof setTimeout=="function"?setTimeout:void 0,l_=typeof clearTimeout=="function"?clearTimeout:void 0,$0=typeof Promise=="function"?Promise:void 0,u_=typeof queueMicrotask=="function"?queueMicrotask:typeof $0<"u"?function(n){return $0.resolve(null).then(n).catch(c_)}:K0;function c_(n){setTimeout(function(){throw n})}function La(n){return n==="head"}function Z0(n,a){var r=a,s=0,c=0;do{var d=r.nextSibling;if(n.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(0<s&&8>s){r=s;var b=n.ownerDocument;if(r&1&&jo(b.documentElement),r&2&&jo(b.body),r&4)for(r=b.head,jo(r),b=r.firstChild;b;){var v=b.nextSibling,S=b.nodeName;b[no]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&b.rel.toLowerCase()==="stylesheet"||r.removeChild(b),b=v}}if(c===0){n.removeChild(d),Zo(a);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:s=r.charCodeAt(0)-48;else s=0;r=d}while(r);Zo(a)}function Zf(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Zf(r),tc(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}n.removeChild(r)}}function f_(n,a,r,s){for(;n.nodeType===1;){var c=r;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!s&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(s){if(!n[no])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==c.rel||n.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||n.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||n.getAttribute("title")!==(c.title==null?null:c.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(c.src==null?null:c.src)||n.getAttribute("type")!==(c.type==null?null:c.type)||n.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=mn(n.nextSibling),n===null)break}return null}function d_(n,a,r){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=mn(n.nextSibling),n===null))return null;return n}function Qf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function h_(n,a){var r=n.ownerDocument;if(n.data!=="$?"||r.readyState==="complete")a();else{var s=function(){a(),r.removeEventListener("DOMContentLoaded",s)};r.addEventListener("DOMContentLoaded",s),n._reactRetry=s}}function mn(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var Wf=null;function Q0(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return n;a--}else r==="/$"&&a++}n=n.previousSibling}return null}function W0(n,a,r){switch(a=Hl(r),n){case"html":if(n=a.documentElement,!n)throw Error(o(452));return n;case"head":if(n=a.head,!n)throw Error(o(453));return n;case"body":if(n=a.body,!n)throw Error(o(454));return n;default:throw Error(o(451))}}function jo(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);tc(n)}var rn=new Map,J0=new Set;function jl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ra=q.d;q.d={f:p_,r:m_,D:g_,C:y_,L:b_,m:v_,X:S_,S:T_,M:x_};function p_(){var n=ra.f(),a=Nl();return n||a}function m_(n){var a=Xi(n);a!==null&&a.tag===5&&a.type==="form"?vg(a):ra.r(n)}var Rr=typeof document>"u"?null:document;function ty(n,a,r){var s=Rr;if(s&&typeof a=="string"&&a){var c=Qe(a);c='link[rel="'+n+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),J0.has(c)||(J0.add(c),n={rel:n,crossOrigin:r,href:a},s.querySelector(c)===null&&(a=s.createElement("link"),ye(a,"link",n),ue(a),s.head.appendChild(a)))}}function g_(n){ra.D(n),ty("dns-prefetch",n,null)}function y_(n,a){ra.C(n,a),ty("preconnect",n,a)}function b_(n,a,r){ra.L(n,a,r);var s=Rr;if(s&&n&&a){var c='link[rel="preload"][as="'+Qe(a)+'"]';a==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+Qe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+Qe(r.imageSizes)+'"]')):c+='[href="'+Qe(n)+'"]';var d=c;switch(a){case"style":d=Or(n);break;case"script":d=Cr(n)}rn.has(d)||(n=g({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:n,as:a},r),rn.set(d,n),s.querySelector(c)!==null||a==="style"&&s.querySelector(qo(d))||a==="script"&&s.querySelector(Fo(d))||(a=s.createElement("link"),ye(a,"link",n),ue(a),s.head.appendChild(a)))}}function v_(n,a){ra.m(n,a);var r=Rr;if(r&&n){var s=a&&typeof a.as=="string"?a.as:"script",c='link[rel="modulepreload"][as="'+Qe(s)+'"][href="'+Qe(n)+'"]',d=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Cr(n)}if(!rn.has(d)&&(n=g({rel:"modulepreload",href:n},a),rn.set(d,n),r.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Fo(d)))return}s=r.createElement("link"),ye(s,"link",n),ue(s),r.head.appendChild(s)}}}function T_(n,a,r){ra.S(n,a,r);var s=Rr;if(s&&n){var c=Ki(s).hoistableStyles,d=Or(n);a=a||"default";var b=c.get(d);if(!b){var v={loading:0,preload:null};if(b=s.querySelector(qo(d)))v.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":a},r),(r=rn.get(d))&&Jf(n,r);var S=b=s.createElement("link");ue(S),ye(S,"link",n),S._p=new Promise(function(M,B){S.onload=M,S.onerror=B}),S.addEventListener("load",function(){v.loading|=1}),S.addEventListener("error",function(){v.loading|=2}),v.loading|=4,ql(b,a,s)}b={type:"stylesheet",instance:b,count:1,state:v},c.set(d,b)}}}function S_(n,a){ra.X(n,a);var r=Rr;if(r&&n){var s=Ki(r).hoistableScripts,c=Cr(n),d=s.get(c);d||(d=r.querySelector(Fo(c)),d||(n=g({src:n,async:!0},a),(a=rn.get(c))&&td(n,a),d=r.createElement("script"),ue(d),ye(d,"link",n),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(c,d))}}function x_(n,a){ra.M(n,a);var r=Rr;if(r&&n){var s=Ki(r).hoistableScripts,c=Cr(n),d=s.get(c);d||(d=r.querySelector(Fo(c)),d||(n=g({src:n,async:!0,type:"module"},a),(a=rn.get(c))&&td(n,a),d=r.createElement("script"),ue(d),ye(d,"link",n),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},s.set(c,d))}}function ey(n,a,r,s){var c=(c=tt.current)?jl(c):null;if(!c)throw Error(o(446));switch(n){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=Or(r.href),r=Ki(c).hoistableStyles,s=r.get(a),s||(s={type:"style",instance:null,count:0,state:null},r.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){n=Or(r.href);var d=Ki(c).hoistableStyles,b=d.get(n);if(b||(c=c.ownerDocument||c,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,b),(d=c.querySelector(qo(n)))&&!d._p&&(b.instance=d,b.state.loading=5),rn.has(n)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},rn.set(n,r),d||w_(c,n,r,b.state))),a&&s===null)throw Error(o(528,""));return b}if(a&&s!==null)throw Error(o(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Cr(r),r=Ki(c).hoistableScripts,s=r.get(a),s||(s={type:"script",instance:null,count:0,state:null},r.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,n))}}function Or(n){return'href="'+Qe(n)+'"'}function qo(n){return'link[rel="stylesheet"]['+n+"]"}function ny(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function w_(n,a,r,s){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?s.loading=1:(a=n.createElement("link"),s.preload=a,a.addEventListener("load",function(){return s.loading|=1}),a.addEventListener("error",function(){return s.loading|=2}),ye(a,"link",r),ue(a),n.head.appendChild(a))}function Cr(n){return'[src="'+Qe(n)+'"]'}function Fo(n){return"script[async]"+n}function ay(n,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var s=n.querySelector('style[data-href~="'+Qe(r.href)+'"]');if(s)return a.instance=s,ue(s),s;var c=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return s=(n.ownerDocument||n).createElement("style"),ue(s),ye(s,"style",c),ql(s,r.precedence,n),a.instance=s;case"stylesheet":c=Or(r.href);var d=n.querySelector(qo(c));if(d)return a.state.loading|=4,a.instance=d,ue(d),d;s=ny(r),(c=rn.get(c))&&Jf(s,c),d=(n.ownerDocument||n).createElement("link"),ue(d);var b=d;return b._p=new Promise(function(v,S){b.onload=v,b.onerror=S}),ye(d,"link",s),a.state.loading|=4,ql(d,r.precedence,n),a.instance=d;case"script":return d=Cr(r.src),(c=n.querySelector(Fo(d)))?(a.instance=c,ue(c),c):(s=r,(c=rn.get(d))&&(s=g({},r),td(s,c)),n=n.ownerDocument||n,c=n.createElement("script"),ue(c),ye(c,"link",s),n.head.appendChild(c),a.instance=c);case"void":return null;default:throw Error(o(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(s=a.instance,a.state.loading|=4,ql(s,r.precedence,n));return a.instance}function ql(n,a,r){for(var s=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,d=c,b=0;b<s.length;b++){var v=s[b];if(v.dataset.precedence===a)d=v;else if(d!==c)break}d?d.parentNode.insertBefore(n,d.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(n,a.firstChild))}function Jf(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function td(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Fl=null;function iy(n,a,r){if(Fl===null){var s=new Map,c=Fl=new Map;c.set(r,s)}else c=Fl,s=c.get(r),s||(s=new Map,c.set(r,s));if(s.has(n))return s;for(s.set(n,null),r=r.getElementsByTagName(n),c=0;c<r.length;c++){var d=r[c];if(!(d[no]||d[Kt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(a)||"";b=n+b;var v=s.get(b);v?v.push(d):s.set(b,[d])}}return s}function ry(n,a,r){n=n.ownerDocument||n,n.head.insertBefore(r,a==="title"?n.querySelector("head > title"):null)}function __(n,a,r){if(r===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function oy(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Go=null;function E_(){}function A_(n,a,r){if(Go===null)throw Error(o(475));var s=Go;if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Or(r.href),d=n.querySelector(qo(c));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(s.count++,s=Gl.bind(s),n.then(s,s)),a.state.loading|=4,a.instance=d,ue(d);return}d=n.ownerDocument||n,r=ny(r),(c=rn.get(c))&&Jf(r,c),d=d.createElement("link"),ue(d);var b=d;b._p=new Promise(function(v,S){b.onload=v,b.onerror=S}),ye(d,"link",r),a.instance=d}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(s.count++,a=Gl.bind(s),n.addEventListener("load",a),n.addEventListener("error",a))}}function R_(){if(Go===null)throw Error(o(475));var n=Go;return n.stylesheets&&n.count===0&&ed(n,n.stylesheets),0<n.count?function(a){var r=setTimeout(function(){if(n.stylesheets&&ed(n,n.stylesheets),n.unsuspend){var s=n.unsuspend;n.unsuspend=null,s()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(r)}}:null}function Gl(){if(this.count--,this.count===0){if(this.stylesheets)ed(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Yl=null;function ed(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Yl=new Map,a.forEach(O_,n),Yl=null,Gl.call(n))}function O_(n,a){if(!(a.state.loading&4)){var r=Yl.get(n);if(r)var s=r.get(null);else{r=new Map,Yl.set(n,r);for(var c=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var b=c[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),s=b)}s&&r.set(null,s)}c=a.instance,b=c.getAttribute("data-precedence"),d=r.get(b)||s,d===s&&r.set(null,c),r.set(b,c),this.count++,s=Gl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),d?d.parentNode.insertBefore(c,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(c,n.firstChild)),a.state.loading|=4}}var Yo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function C_(n,a,r,s,c,d,b,v){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=eo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eo(0),this.hiddenUpdates=eo(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function sy(n,a,r,s,c,d,b,v,S,M,B,H){return n=new C_(n,a,r,b,v,S,M,H),a=1,d===!0&&(a|=24),d=ze(3,null,null,a),n.current=d,d.stateNode=n,a=Ic(),a.refCount++,n.pooledCache=a,a.refCount++,d.memoizedState={element:s,isDehydrated:r,cache:a},zc(d),n}function ly(n){return n?(n=or,n):or}function uy(n,a,r,s,c,d){c=ly(c),s.context===null?s.context=c:s.pendingContext=c,s=wa(a),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=_a(n,s,a),r!==null&&(Fe(r,n,a),xo(r,n,a))}function cy(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<a?r:a}}function nd(n,a){cy(n,a),(n=n.alternate)&&cy(n,a)}function fy(n){if(n.tag===13){var a=rr(n,67108864);a!==null&&Fe(a,n,67108864),nd(n,67108864)}}var Xl=!0;function D_(n,a,r,s){var c=P.T;P.T=null;var d=q.p;try{q.p=2,ad(n,a,r,s)}finally{q.p=d,P.T=c}}function k_(n,a,r,s){var c=P.T;P.T=null;var d=q.p;try{q.p=8,ad(n,a,r,s)}finally{q.p=d,P.T=c}}function ad(n,a,r,s){if(Xl){var c=id(s);if(c===null)Ff(n,a,s,Kl,r),hy(n,s);else if(N_(c,n,a,r,s))s.stopPropagation();else if(hy(n,s),a&4&&-1<M_.indexOf(n)){for(;c!==null;){var d=Xi(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=On(d.pendingLanes);if(b!==0){var v=d;for(v.pendingLanes|=2,v.entangledLanes|=2;b;){var S=1<<31-he(b);v.entanglements[1]|=S,b&=~S}Nn(d),(wt&6)===0&&(kl=ve()+500,zo(0))}}break;case 13:v=rr(d,2),v!==null&&Fe(v,d,2),Nl(),nd(d,2)}if(d=id(s),d===null&&Ff(n,a,s,Kl,r),d===c)break;c=d}c!==null&&s.stopPropagation()}else Ff(n,a,s,null,r)}}function id(n){return n=lc(n),rd(n)}var Kl=null;function rd(n){if(Kl=null,n=Yi(n),n!==null){var a=u(n);if(a===null)n=null;else{var r=a.tag;if(r===13){if(n=f(a),n!==null)return n;n=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Kl=n,null}function dy(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zs()){case $e:return 2;case Vs:return 8;case ji:case Ee:return 32;case qn:return 268435456;default:return 32}default:return 32}}var od=!1,Ua=null,Ba=null,za=null,Xo=new Map,Ko=new Map,Va=[],M_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hy(n,a){switch(n){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Xo.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(a.pointerId)}}function $o(n,a,r,s,c,d){return n===null||n.nativeEvent!==d?(n={blockedOn:a,domEventName:r,eventSystemFlags:s,nativeEvent:d,targetContainers:[c]},a!==null&&(a=Xi(a),a!==null&&fy(a)),n):(n.eventSystemFlags|=s,a=n.targetContainers,c!==null&&a.indexOf(c)===-1&&a.push(c),n)}function N_(n,a,r,s,c){switch(a){case"focusin":return Ua=$o(Ua,n,a,r,s,c),!0;case"dragenter":return Ba=$o(Ba,n,a,r,s,c),!0;case"mouseover":return za=$o(za,n,a,r,s,c),!0;case"pointerover":var d=c.pointerId;return Xo.set(d,$o(Xo.get(d)||null,n,a,r,s,c)),!0;case"gotpointercapture":return d=c.pointerId,Ko.set(d,$o(Ko.get(d)||null,n,a,r,s,c)),!0}return!1}function py(n){var a=Yi(n.target);if(a!==null){var r=u(a);if(r!==null){if(a=r.tag,a===13){if(a=f(r),a!==null){n.blockedOn=a,ie(n.priority,function(){if(r.tag===13){var s=qe();s=te(s);var c=rr(r,s);c!==null&&Fe(c,r,s),nd(r,s)}});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $l(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var r=id(n.nativeEvent);if(r===null){r=n.nativeEvent;var s=new r.constructor(r.type,r);sc=s,r.target.dispatchEvent(s),sc=null}else return a=Xi(r),a!==null&&fy(a),n.blockedOn=r,!1;a.shift()}return!0}function my(n,a,r){$l(n)&&r.delete(a)}function P_(){od=!1,Ua!==null&&$l(Ua)&&(Ua=null),Ba!==null&&$l(Ba)&&(Ba=null),za!==null&&$l(za)&&(za=null),Xo.forEach(my),Ko.forEach(my)}function Zl(n,a){n.blockedOn===a&&(n.blockedOn=null,od||(od=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,P_)))}var Ql=null;function gy(n){Ql!==n&&(Ql=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Ql===n&&(Ql=null);for(var a=0;a<n.length;a+=3){var r=n[a],s=n[a+1],c=n[a+2];if(typeof s!="function"){if(rd(s||r)===null)continue;break}var d=Xi(r);d!==null&&(n.splice(a,3),a-=3,rf(d,{pending:!0,data:c,method:r.method,action:s},s,c))}}))}function Zo(n){function a(S){return Zl(S,n)}Ua!==null&&Zl(Ua,n),Ba!==null&&Zl(Ba,n),za!==null&&Zl(za,n),Xo.forEach(a),Ko.forEach(a);for(var r=0;r<Va.length;r++){var s=Va[r];s.blockedOn===n&&(s.blockedOn=null)}for(;0<Va.length&&(r=Va[0],r.blockedOn===null);)py(r),r.blockedOn===null&&Va.shift();if(r=(n.ownerDocument||n).$$reactFormReplay,r!=null)for(s=0;s<r.length;s+=3){var c=r[s],d=r[s+1],b=c[Dt]||null;if(typeof d=="function")b||gy(r);else if(b){var v=null;if(d&&d.hasAttribute("formAction")){if(c=d,b=d[Dt]||null)v=b.formAction;else if(rd(c)!==null)continue}else v=b.action;typeof v=="function"?r[s+1]=v:(r.splice(s,3),s-=3),gy(r)}}}function sd(n){this._internalRoot=n}Wl.prototype.render=sd.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(o(409));var r=a.current,s=qe();uy(r,s,n,a,null,null)},Wl.prototype.unmount=sd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;uy(n.current,2,null,n,null,null),Nl(),a[le]=null}};function Wl(n){this._internalRoot=n}Wl.prototype.unstable_scheduleHydration=function(n){if(n){var a=oi();n={blockedOn:null,target:n,priority:a};for(var r=0;r<Va.length&&a!==0&&a<Va[r].priority;r++);Va.splice(r,0,n),r===0&&py(n)}};var yy=t.version;if(yy!=="19.1.1")throw Error(o(527,yy,"19.1.1"));q.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(o(188)):(n=Object.keys(n).join(","),Error(o(268,n)));return n=p(a),n=n!==null?m(n):null,n=n===null?null:n.stateNode,n};var I_={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{Rn=Jl.inject(I_),Ae=Jl}catch{}}return Wo.createRoot=function(n,a){if(!l(n))throw Error(o(299));var r=!1,s="",c=Ng,d=Pg,b=Ig,v=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(v=a.unstable_transitionCallbacks)),a=sy(n,1,!1,null,null,r,s,c,d,b,v,null),n[le]=a.current,qf(n),new sd(a)},Wo.hydrateRoot=function(n,a,r){if(!l(n))throw Error(o(299));var s=!1,c="",d=Ng,b=Pg,v=Ig,S=null,M=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks),r.formState!==void 0&&(M=r.formState)),a=sy(n,1,!0,a,r??null,s,c,d,b,v,S,M),a.context=ly(null),r=a.current,s=qe(),s=te(s),c=wa(s),c.callback=null,_a(r,c,s),r=s,a.current.lanes=r,va(a,r),Nn(a),n[le]=a.current,qf(n),new Wl(a)},Wo.version="19.1.1",Wo}var Ry;function F_(){if(Ry)return cd.exports;Ry=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),cd.exports=q_(),cd.exports}var G_=F_();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Oy="popstate";function Y_(e={}){function t(l,u){let{pathname:f="/",search:h="",hash:p=""}=Bi(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Fd("",{pathname:f,search:h,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let p=l.location.href,m=p.indexOf("#");h=m===-1?p:p.slice(0,m)}return h+"#"+(typeof u=="string"?u:gs(u))}function o(l,u){xn(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return K_(t,i,o,e)}function Vt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function X_(){return Math.random().toString(36).substring(2,10)}function Cy(e,t){return{usr:e.state,key:e.key,idx:t}}function Fd(e,t,i=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Bi(t):t,state:i,key:t&&t.key||o||X_()}}function gs({pathname:e="/",search:t="",hash:i=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Bi(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substring(i),e=e.substring(0,i));let o=e.indexOf("?");o>=0&&(t.search=e.substring(o),e=e.substring(0,o)),e&&(t.pathname=e)}return t}function K_(e,t,i,o={}){let{window:l=document.defaultView,v5Compat:u=!1}=o,f=l.history,h="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function y(){h="POP";let C=g(),R=C==null?null:C-m;m=C,p&&p({action:h,location:A.location,delta:R})}function T(C,R){h="PUSH";let L=Fd(A.location,C,R);i&&i(L,C),m=g()+1;let U=Cy(L,m),Y=A.createHref(L);try{f.pushState(U,"",Y)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;l.location.assign(Y)}u&&p&&p({action:h,location:A.location,delta:1})}function x(C,R){h="REPLACE";let L=Fd(A.location,C,R);i&&i(L,C),m=g();let U=Cy(L,m),Y=A.createHref(L);f.replaceState(U,"",Y),u&&p&&p({action:h,location:A.location,delta:0})}function _(C){return $_(C)}let A={get action(){return h},get location(){return e(l,f)},listen(C){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(Oy,y),p=C,()=>{l.removeEventListener(Oy,y),p=null}},createHref(C){return t(l,C)},createURL:_,encodeLocation(C){let R=_(C);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:T,replace:x,go(C){return f.go(C)}};return A}function $_(e,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Vt(i,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:gs(e);return o=o.replace(/ $/,"%20"),!t&&o.startsWith("//")&&(o=i+o),new URL(o,i)}function Zv(e,t,i="/"){return Z_(e,t,i,!1)}function Z_(e,t,i,o){let l=typeof t=="string"?Bi(t):t,u=ca(l.pathname||"/",i);if(u==null)return null;let f=Qv(e);Q_(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=lE(u);h=oE(f[p],m,o)}return h}function Qv(e,t=[],i=[],o="",l=!1){let u=(f,h,p=l,m)=>{let g={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(o)&&p)return;Vt(g.relativePath.startsWith(o),`Absolute route path "${g.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(o.length)}let y=ua([o,g.relativePath]),T=i.concat(g);f.children&&f.children.length>0&&(Vt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Qv(f.children,t,T,y,p)),!(f.path==null&&!f.index)&&t.push({path:y,score:iE(y,f.index),routesMeta:T})};return e.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))u(f,h);else for(let p of Wv(f.path))u(f,h,!0,p)}),t}function Wv(e){let t=e.split("/");if(t.length===0)return[];let[i,...o]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(o.length===0)return l?[u,""]:[u];let f=Wv(o.join("/")),h=[];return h.push(...f.map(p=>p===""?u:[u,p].join("/"))),l&&h.push(...f),h.map(p=>e.startsWith("/")&&p===""?"/":p)}function Q_(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:rE(t.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var W_=/^:[\w-]+$/,J_=3,tE=2,eE=1,nE=10,aE=-2,Dy=e=>e==="*";function iE(e,t){let i=e.split("/"),o=i.length;return i.some(Dy)&&(o+=aE),t&&(o+=tE),i.filter(l=>!Dy(l)).reduce((l,u)=>l+(W_.test(u)?J_:u===""?eE:nE),o)}function rE(e,t){return e.length===t.length&&e.slice(0,-1).every((o,l)=>o===t[l])?e[e.length-1]-t[t.length-1]:0}function oE(e,t,i=!1){let{routesMeta:o}=e,l={},u="/",f=[];for(let h=0;h<o.length;++h){let p=o[h],m=h===o.length-1,g=u==="/"?t:t.slice(u.length)||"/",y=Tu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),T=p.route;if(!y&&m&&i&&!o[o.length-1].route.index&&(y=Tu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!y)return null;Object.assign(l,y.params),f.push({params:l,pathname:ua([u,y.pathname]),pathnameBase:dE(ua([u,y.pathnameBase])),route:T}),y.pathnameBase!=="/"&&(u=ua([u,y.pathnameBase]))}return f}function Tu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,o]=sE(e.path,e.caseSensitive,e.end),l=t.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:o.reduce((m,{paramName:g,isOptional:y},T)=>{if(g==="*"){let _=h[T]||"";f=u.slice(0,u.length-_.length).replace(/(.)\/+$/,"$1")}const x=h[T];return y&&!x?m[g]=void 0:m[g]=(x||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:f,pattern:e}}function sE(e,t=!1,i=!0){xn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(o.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),o]}function lE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ca(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,o=e.charAt(i);return o&&o!=="/"?null:e.slice(i)||"/"}function uE(e,t="/"){let{pathname:i,search:o="",hash:l=""}=typeof e=="string"?Bi(e):e;return{pathname:i?i.startsWith("/")?i:cE(i,t):t,search:hE(o),hash:pE(l)}}function cE(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function pd(e,t,i,o){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fE(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Jv(e){let t=fE(e);return t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase)}function t1(e,t,i,o=!1){let l;typeof e=="string"?l=Bi(e):(l={...e},Vt(!l.pathname||!l.pathname.includes("?"),pd("?","pathname","search",l)),Vt(!l.pathname||!l.pathname.includes("#"),pd("#","pathname","hash",l)),Vt(!l.search||!l.search.includes("#"),pd("#","search","hash",l)));let u=e===""||l.pathname==="",f=u?"/":l.pathname,h;if(f==null)h=i;else{let y=t.length-1;if(!o&&f.startsWith("..")){let T=f.split("/");for(;T[0]==="..";)T.shift(),y-=1;l.pathname=T.join("/")}h=y>=0?t[y]:"/"}let p=uE(l,h),m=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var ua=e=>e.join("/").replace(/\/\/+/g,"/"),dE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var e1=["POST","PUT","PATCH","DELETE"];new Set(e1);var gE=["GET",...e1];new Set(gE);var Gr=D.createContext(null);Gr.displayName="DataRouter";var Bu=D.createContext(null);Bu.displayName="DataRouterState";D.createContext(!1);var n1=D.createContext({isTransitioning:!1});n1.displayName="ViewTransition";var yE=D.createContext(new Map);yE.displayName="Fetchers";var bE=D.createContext(null);bE.displayName="Await";var Hn=D.createContext(null);Hn.displayName="Navigation";var As=D.createContext(null);As.displayName="Location";var ma=D.createContext({outlet:null,matches:[],isDataRoute:!1});ma.displayName="Route";var Ah=D.createContext(null);Ah.displayName="RouteError";function vE(e,{relative:t}={}){Vt(Rs(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=D.useContext(Hn),{hash:l,pathname:u,search:f}=Os(e,{relative:t}),h=u;return i!=="/"&&(h=u==="/"?i:ua([i,u])),o.createHref({pathname:h,search:f,hash:l})}function Rs(){return D.useContext(As)!=null}function zi(){return Vt(Rs(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(As).location}var a1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function i1(e){D.useContext(Hn).static||D.useLayoutEffect(e)}function Rh(){let{isDataRoute:e}=D.useContext(ma);return e?ME():TE()}function TE(){Vt(Rs(),"useNavigate() may be used only in the context of a <Router> component.");let e=D.useContext(Gr),{basename:t,navigator:i}=D.useContext(Hn),{matches:o}=D.useContext(ma),{pathname:l}=zi(),u=JSON.stringify(Jv(o)),f=D.useRef(!1);return i1(()=>{f.current=!0}),D.useCallback((p,m={})=>{if(xn(f.current,a1),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=t1(p,JSON.parse(u),l,m.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ua([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,u,l,e])}D.createContext(null);function Os(e,{relative:t}={}){let{matches:i}=D.useContext(ma),{pathname:o}=zi(),l=JSON.stringify(Jv(i));return D.useMemo(()=>t1(e,JSON.parse(l),o,t==="path"),[e,l,o,t])}function SE(e,t){return r1(e,t)}function r1(e,t,i,o,l){Vt(Rs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=D.useContext(Hn),{matches:f}=D.useContext(ma),h=f[f.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",y=h&&h.route;{let L=y&&y.path||"";o1(m,!y||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let T=zi(),x;if(t){let L=typeof t=="string"?Bi(t):t;Vt(g==="/"||L.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),x=L}else x=T;let _=x.pathname||"/",A=_;if(g!=="/"){let L=g.replace(/^\//,"").split("/");A="/"+_.replace(/^\//,"").split("/").slice(L.length).join("/")}let C=Zv(e,{pathname:A});xn(y||C!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),xn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=AE(C&&C.map(L=>Object.assign({},L,{params:Object.assign({},p,L.params),pathname:ua([g,u.encodeLocation?u.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:ua([g,u.encodeLocation?u.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),f,i,o,l);return t&&R?D.createElement(As.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},R):R}function xE(){let e=kE(),t=mE(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",e),f=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:u},"ErrorBoundary")," or"," ",D.createElement("code",{style:u},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},t),i?D.createElement("pre",{style:l},i):null,f)}var wE=D.createElement(xE,null),_E=class extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?D.createElement(ma.Provider,{value:this.props.routeContext},D.createElement(Ah.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function EE({routeContext:e,match:t,children:i}){let o=D.useContext(Gr);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),D.createElement(ma.Provider,{value:e},i)}function AE(e,t=[],i=null,o=null,l=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let u=e,f=i?.errors;if(f!=null){let m=u.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Vt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,m+1))}let h=!1,p=-1;if(i)for(let m=0;m<u.length;m++){let g=u[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:y,errors:T}=i,x=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||x){h=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((m,g,y)=>{let T,x=!1,_=null,A=null;i&&(T=f&&g.route.id?f[g.route.id]:void 0,_=g.route.errorElement||wE,h&&(p<0&&y===0?(o1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,A=null):p===y&&(x=!0,A=g.route.hydrateFallbackElement||null)));let C=t.concat(u.slice(0,y+1)),R=()=>{let L;return T?L=_:x?L=A:g.route.Component?L=D.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=m,D.createElement(EE,{match:g,routeContext:{outlet:m,matches:C,isDataRoute:i!=null},children:L})};return i&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?D.createElement(_E,{location:i.location,revalidation:i.revalidation,component:_,error:T,children:R(),routeContext:{outlet:null,matches:C,isDataRoute:!0},unstable_onError:o}):R()},null)}function Oh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function RE(e){let t=D.useContext(Gr);return Vt(t,Oh(e)),t}function OE(e){let t=D.useContext(Bu);return Vt(t,Oh(e)),t}function CE(e){let t=D.useContext(ma);return Vt(t,Oh(e)),t}function Ch(e){let t=CE(e),i=t.matches[t.matches.length-1];return Vt(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function DE(){return Ch("useRouteId")}function kE(){let e=D.useContext(Ah),t=OE("useRouteError"),i=Ch("useRouteError");return e!==void 0?e:t.errors?.[i]}function ME(){let{router:e}=RE("useNavigate"),t=Ch("useNavigate"),i=D.useRef(!1);return i1(()=>{i.current=!0}),D.useCallback(async(l,u={})=>{xn(i.current,a1),i.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:t,...u}))},[e,t])}var ky={};function o1(e,t,i){!t&&!ky[e]&&(ky[e]=!0,xn(!1,i))}D.memo(NE);function NE({routes:e,future:t,state:i,unstable_onError:o}){return r1(e,void 0,i,o,t)}function ns(e){Vt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function PE({basename:e="/",children:t=null,location:i,navigationType:o="POP",navigator:l,static:u=!1}){Vt(!Rs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),h=D.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=Bi(i));let{pathname:p="/",search:m="",hash:g="",state:y=null,key:T="default"}=i,x=D.useMemo(()=>{let _=ca(p,f);return _==null?null:{location:{pathname:_,search:m,hash:g,state:y,key:T},navigationType:o}},[f,p,m,g,y,T,o]);return xn(x!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:D.createElement(Hn.Provider,{value:h},D.createElement(As.Provider,{children:t,value:x}))}function IE({children:e,location:t}){return SE(Gd(e),t)}function Gd(e,t=[]){let i=[];return D.Children.forEach(e,(o,l)=>{if(!D.isValidElement(o))return;let u=[...t,l];if(o.type===D.Fragment){i.push.apply(i,Gd(o.props.children,u));return}Vt(o.type===ns,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Vt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=Gd(o.props.children,u)),i.push(f)}),i}var cu="get",fu="application/x-www-form-urlencoded";function zu(e){return e!=null&&typeof e.tagName=="string"}function LE(e){return zu(e)&&e.tagName.toLowerCase()==="button"}function UE(e){return zu(e)&&e.tagName.toLowerCase()==="form"}function BE(e){return zu(e)&&e.tagName.toLowerCase()==="input"}function zE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function VE(e,t){return e.button===0&&(!t||t==="_self")&&!zE(e)}var tu=null;function HE(){if(tu===null)try{new FormData(document.createElement("form"),0),tu=!1}catch{tu=!0}return tu}var jE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function md(e){return e!=null&&!jE.has(e)?(xn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fu}"`),null):e}function qE(e,t){let i,o,l,u,f;if(UE(e)){let h=e.getAttribute("action");o=h?ca(h,t):null,i=e.getAttribute("method")||cu,l=md(e.getAttribute("enctype"))||fu,u=new FormData(e)}else if(LE(e)||BE(e)&&(e.type==="submit"||e.type==="image")){let h=e.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||h.getAttribute("action");if(o=p?ca(p,t):null,i=e.getAttribute("formmethod")||h.getAttribute("method")||cu,l=md(e.getAttribute("formenctype"))||md(h.getAttribute("enctype"))||fu,u=new FormData(h,e),!HE()){let{name:m,type:g,value:y}=e;if(g==="image"){let T=m?`${m}.`:"";u.append(`${T}x`,"0"),u.append(`${T}y`,"0")}else m&&u.append(m,y)}}else{if(zu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=cu,o=null,l=fu,f=e}return u&&l==="text/plain"&&(f=u,u=void 0),{action:o,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Dh(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function FE(e,t,i){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return o.pathname==="/"?o.pathname=`_root.${i}`:t&&ca(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${i}`,o}async function GE(e,t){if(e.id in t)return t[e.id];try{let i=await import(e.module);return t[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function YE(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function XE(e,t,i){let o=await Promise.all(e.map(async l=>{let u=t.routes[l.route.id];if(u){let f=await GE(u,i);return f.links?f.links():[]}return[]}));return QE(o.flat(1).filter(YE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function My(e,t,i,o,l,u){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>i[m].pathname!==p.pathname||i[m].route.path?.endsWith("*")&&i[m].params["*"]!==p.params["*"];return u==="assets"?t.filter((p,m)=>f(p,m)||h(p,m)):u==="data"?t.filter((p,m)=>{let g=o.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let y=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function KE(e,t,{includeHydrateFallback:i}={}){return $E(e.map(o=>{let l=t.routes[o.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function $E(e){return[...new Set(e)]}function ZE(e){let t={},i=Object.keys(e).sort();for(let o of i)t[o]=e[o];return t}function QE(e,t){let i=new Set;return new Set(t),e.reduce((o,l)=>{let u=JSON.stringify(ZE(l));return i.has(u)||(i.add(u),o.push({key:u,link:l})),o},[])}function s1(){let e=D.useContext(Gr);return Dh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function WE(){let e=D.useContext(Bu);return Dh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var kh=D.createContext(void 0);kh.displayName="FrameworkContext";function l1(){let e=D.useContext(kh);return Dh(e,"You must render this element inside a <HydratedRouter> element"),e}function JE(e,t){let i=D.useContext(kh),[o,l]=D.useState(!1),[u,f]=D.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:y}=t,T=D.useRef(null);D.useEffect(()=>{if(e==="render"&&f(!0),e==="viewport"){let A=R=>{R.forEach(L=>{f(L.isIntersecting)})},C=new IntersectionObserver(A,{threshold:.5});return T.current&&C.observe(T.current),()=>{C.disconnect()}}},[e]),D.useEffect(()=>{if(o){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[o]);let x=()=>{l(!0)},_=()=>{l(!1),f(!1)};return i?e!=="intent"?[u,T,{}]:[u,T,{onFocus:Jo(h,x),onBlur:Jo(p,_),onMouseEnter:Jo(m,x),onMouseLeave:Jo(g,_),onTouchStart:Jo(y,x)}]:[!1,T,{}]}function Jo(e,t){return i=>{e&&e(i),i.defaultPrevented||t(i)}}function t2({page:e,...t}){let{router:i}=s1(),o=D.useMemo(()=>Zv(i.routes,e,i.basename),[i.routes,e,i.basename]);return o?D.createElement(n2,{page:e,matches:o,...t}):null}function e2(e){let{manifest:t,routeModules:i}=l1(),[o,l]=D.useState([]);return D.useEffect(()=>{let u=!1;return XE(e,t,i).then(f=>{u||l(f)}),()=>{u=!0}},[e,t,i]),o}function n2({page:e,matches:t,...i}){let o=zi(),{manifest:l,routeModules:u}=l1(),{basename:f}=s1(),{loaderData:h,matches:p}=WE(),m=D.useMemo(()=>My(e,t,p,l,o,"data"),[e,t,p,l,o]),g=D.useMemo(()=>My(e,t,p,l,o,"assets"),[e,t,p,l,o]),y=D.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let _=new Set,A=!1;if(t.forEach(R=>{let L=l.routes[R.route.id];!L||!L.hasLoader||(!m.some(U=>U.route.id===R.route.id)&&R.route.id in h&&u[R.route.id]?.shouldRevalidate||L.hasClientLoader?A=!0:_.add(R.route.id))}),_.size===0)return[];let C=FE(e,f,"data");return A&&_.size>0&&C.searchParams.set("_routes",t.filter(R=>_.has(R.route.id)).map(R=>R.route.id).join(",")),[C.pathname+C.search]},[f,h,o,l,m,t,e,u]),T=D.useMemo(()=>KE(g,l),[g,l]),x=e2(g);return D.createElement(D.Fragment,null,y.map(_=>D.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...i})),T.map(_=>D.createElement("link",{key:_,rel:"modulepreload",href:_,...i})),x.map(({key:_,link:A})=>D.createElement("link",{key:_,nonce:i.nonce,...A})))}function a2(...e){return t=>{e.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var u1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{u1&&(window.__reactRouterVersion="7.9.4")}catch{}function i2({basename:e,children:t,window:i}){let o=D.useRef();o.current==null&&(o.current=Y_({window:i,v5Compat:!0}));let l=o.current,[u,f]=D.useState({action:l.action,location:l.location}),h=D.useCallback(p=>{D.startTransition(()=>f(p))},[f]);return D.useLayoutEffect(()=>l.listen(h),[l,h]),D.createElement(PE,{basename:e,children:t,location:u.location,navigationType:u.action,navigator:l})}var c1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,f1=D.forwardRef(function({onClick:t,discover:i="render",prefetch:o="none",relative:l,reloadDocument:u,replace:f,state:h,target:p,to:m,preventScrollReset:g,viewTransition:y,...T},x){let{basename:_}=D.useContext(Hn),A=typeof m=="string"&&c1.test(m),C,R=!1;if(typeof m=="string"&&A&&(C=m,u1))try{let rt=new URL(window.location.href),St=m.startsWith("//")?new URL(rt.protocol+m):new URL(m),Ut=ca(St.pathname,_);St.origin===rt.origin&&Ut!=null?m=Ut+St.search+St.hash:R=!0}catch{xn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=vE(m,{relative:l}),[U,Y,j]=JE(o,T),W=l2(m,{replace:f,state:h,target:p,preventScrollReset:g,relative:l,viewTransition:y});function at(rt){t&&t(rt),rt.defaultPrevented||W(rt)}let K=D.createElement("a",{...T,...j,href:C||L,onClick:R||u?t:at,ref:a2(x,Y),target:p,"data-discover":!A&&i==="render"?"true":void 0});return U&&!A?D.createElement(D.Fragment,null,K,D.createElement(t2,{page:L})):K});f1.displayName="Link";var r2=D.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:o="",end:l=!1,style:u,to:f,viewTransition:h,children:p,...m},g){let y=Os(f,{relative:m.relative}),T=zi(),x=D.useContext(Bu),{navigator:_,basename:A}=D.useContext(Hn),C=x!=null&&h2(y)&&h===!0,R=_.encodeLocation?_.encodeLocation(y).pathname:y.pathname,L=T.pathname,U=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(L=L.toLowerCase(),U=U?U.toLowerCase():null,R=R.toLowerCase()),U&&A&&(U=ca(U,A)||U);const Y=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let j=L===R||!l&&L.startsWith(R)&&L.charAt(Y)==="/",W=U!=null&&(U===R||!l&&U.startsWith(R)&&U.charAt(R.length)==="/"),at={isActive:j,isPending:W,isTransitioning:C},K=j?t:void 0,rt;typeof o=="function"?rt=o(at):rt=[o,j?"active":null,W?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let St=typeof u=="function"?u(at):u;return D.createElement(f1,{...m,"aria-current":K,className:rt,ref:g,style:St,to:f,viewTransition:h},typeof p=="function"?p(at):p)});r2.displayName="NavLink";var o2=D.forwardRef(({discover:e="render",fetcherKey:t,navigate:i,reloadDocument:o,replace:l,state:u,method:f=cu,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:y,...T},x)=>{let _=f2(),A=d2(h,{relative:m}),C=f.toLowerCase()==="get"?"get":"post",R=typeof h=="string"&&c1.test(h),L=U=>{if(p&&p(U),U.defaultPrevented)return;U.preventDefault();let Y=U.nativeEvent.submitter,j=Y?.getAttribute("formmethod")||f;_(Y||U.currentTarget,{fetcherKey:t,method:j,navigate:i,replace:l,state:u,relative:m,preventScrollReset:g,viewTransition:y})};return D.createElement("form",{ref:x,method:C,action:A,onSubmit:o?p:L,...T,"data-discover":!R&&e==="render"?"true":void 0})});o2.displayName="Form";function s2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d1(e){let t=D.useContext(Gr);return Vt(t,s2(e)),t}function l2(e,{target:t,replace:i,state:o,preventScrollReset:l,relative:u,viewTransition:f}={}){let h=Rh(),p=zi(),m=Os(e,{relative:u});return D.useCallback(g=>{if(VE(g,t)){g.preventDefault();let y=i!==void 0?i:gs(p)===gs(m);h(e,{replace:y,state:o,preventScrollReset:l,relative:u,viewTransition:f})}},[p,h,m,i,o,t,e,l,u,f])}var u2=0,c2=()=>`__${String(++u2)}__`;function f2(){let{router:e}=d1("useSubmit"),{basename:t}=D.useContext(Hn),i=DE();return D.useCallback(async(o,l={})=>{let{action:u,method:f,encType:h,formData:p,body:m}=qE(o,t);if(l.navigate===!1){let g=l.fetcherKey||c2();await e.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await e.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,t,i])}function d2(e,{relative:t}={}){let{basename:i}=D.useContext(Hn),o=D.useContext(ma);Vt(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),u={...Os(e||".",{relative:t})},f=zi();if(e==null){u.search=f.search;let h=new URLSearchParams(u.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(y=>y).forEach(y=>h.append("index",y));let g=h.toString();u.search=g?`?${g}`:""}}return(!e||e===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ua([i,u.pathname])),gs(u)}function h2(e,{relative:t}={}){let i=D.useContext(n1);Vt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=d1("useViewTransitionState"),l=Os(e,{relative:t});if(!i.isTransitioning)return!1;let u=ca(i.currentLocation.pathname,o)||i.currentLocation.pathname,f=ca(i.nextLocation.pathname,o)||i.nextLocation.pathname;return Tu(l.pathname,f)!=null||Tu(l.pathname,u)!=null}var p2=$v();const m2=Kv(p2);var h1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ny=G.createContext&&G.createContext(h1),g2=["attr","size","title"];function y2(e,t){if(e==null)return{};var i=b2(e,t),o,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)o=u[l],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}function b2(e,t){if(e==null)return{};var i={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;i[o]=e[o]}return i}function Su(){return Su=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Su.apply(this,arguments)}function Py(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),i.push.apply(i,o)}return i}function xu(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Py(Object(i),!0).forEach(function(o){v2(e,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Py(Object(i)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(i,o))})}return e}function v2(e,t,i){return t=T2(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function T2(e){var t=S2(e,"string");return typeof t=="symbol"?t:t+""}function S2(e,t){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var o=i.call(e,t);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function p1(e){return e&&e.map((t,i)=>G.createElement(t.tag,xu({key:i},t.attr),p1(t.child)))}function Vu(e){return t=>G.createElement(x2,Su({attr:xu({},e.attr)},t),p1(e.child))}function x2(e){var t=i=>{var{attr:o,size:l,title:u}=e,f=y2(e,g2),h=l||i.size||"1em",p;return i.className&&(p=i.className),e.className&&(p=(p?p+" ":"")+e.className),G.createElement("svg",Su({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,f,{className:p,style:xu(xu({color:e.color||i.color},i.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),u&&G.createElement("title",null,u),e.children)};return Ny!==void 0?G.createElement(Ny.Consumer,null,i=>t(i)):t(h1)}function m1(e){return Vu({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function Iy(e){return Vu({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"},child:[]}]})(e)}function g1(e){return Vu({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"},child:[]}]})(e)}async function w2(e,t,i){const o=e.target.files[0];if(!o)return!1;const l=o.name.split(".").pop().toLowerCase();return l!=="stl"&&l!=="obj"&&l!=="dae"?(t(X.jsx(g1,{size:48,color:"red",style:{position:"absolute"}})),!1):(i&&await i(o),t(X.jsx(m1,{size:48,color:"green",style:{position:"absolute"}})),!0)}async function _2(e,t,i){const o=e.target.files[0];if(!o)return!1;const l=o.name.split(".").pop().toLowerCase();return l!=="png"&&l!=="jpeg"&&l!=="jpg"?(t(X.jsx(g1,{size:48,color:"red",style:{position:"absolute"}})),!1):(i&&await i(o),t(X.jsx(m1,{size:48,color:"green",style:{position:"absolute"}})),!0)}const y1=D.createContext({});function E2(e){const t=D.useRef(null);return t.current===null&&(t.current=e()),t.current}const Mh=typeof window<"u",A2=Mh?D.useLayoutEffect:D.useEffect,Nh=D.createContext(null);function Ph(e,t){e.indexOf(t)===-1&&e.push(t)}function Ih(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}const fa=(e,t,i)=>i>t?t:i<e?e:i;let Lh=()=>{};const da={},b1=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function v1(e){return typeof e=="object"&&e!==null}const T1=e=>/^0[^.\s]+$/u.test(e);function Uh(e){let t;return()=>(t===void 0&&(t=e()),t)}const un=e=>e,R2=(e,t)=>i=>t(e(i)),Cs=(...e)=>e.reduce(R2),ys=(e,t,i)=>{const o=t-e;return o===0?1:(i-e)/o};class Bh{constructor(){this.subscriptions=[]}add(t){return Ph(this.subscriptions,t),()=>Ih(this.subscriptions,t)}notify(t,i,o){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](t,i,o);else for(let u=0;u<l;u++){const f=this.subscriptions[u];f&&f(t,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ln=e=>e*1e3,ln=e=>e/1e3;function S1(e,t){return t?e*(1e3/t):0}const x1=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e,O2=1e-7,C2=12;function D2(e,t,i,o,l){let u,f,h=0;do f=t+(i-t)/2,u=x1(f,o,l)-e,u>0?i=f:t=f;while(Math.abs(u)>O2&&++h<C2);return f}function Ds(e,t,i,o){if(e===t&&i===o)return un;const l=u=>D2(u,0,1,e,i);return u=>u===0||u===1?u:x1(l(u),t,o)}const w1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,_1=e=>t=>1-e(1-t),E1=Ds(.33,1.53,.69,.99),zh=_1(E1),A1=w1(zh),R1=e=>(e*=2)<1?.5*zh(e):.5*(2-Math.pow(2,-10*(e-1))),Vh=e=>1-Math.sin(Math.acos(e)),O1=_1(Vh),C1=w1(Vh),k2=Ds(.42,0,1,1),M2=Ds(0,0,.58,1),D1=Ds(.42,0,.58,1),N2=e=>Array.isArray(e)&&typeof e[0]!="number",k1=e=>Array.isArray(e)&&typeof e[0]=="number",P2={linear:un,easeIn:k2,easeInOut:D1,easeOut:M2,circIn:Vh,circInOut:C1,circOut:O1,backIn:zh,backInOut:A1,backOut:E1,anticipate:R1},I2=e=>typeof e=="string",Ly=e=>{if(k1(e)){Lh(e.length===4);const[t,i,o,l]=e;return Ds(t,i,o,l)}else if(I2(e))return P2[e];return e},eu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function L2(e,t){let i=new Set,o=new Set,l=!1,u=!1;const f=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){f.has(g)&&(m.schedule(g),e()),g(h)}const m={schedule:(g,y=!1,T=!1)=>{const _=T&&l?i:o;return y&&f.add(g),_.has(g)||_.add(g),g},cancel:g=>{o.delete(g),f.delete(g)},process:g=>{if(h=g,l){u=!0;return}l=!0,[i,o]=[o,i],i.forEach(p),i.clear(),l=!1,u&&(u=!1,m.process(g))}};return m}const U2=40;function M1(e,t){let i=!1,o=!0;const l={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,f=eu.reduce((U,Y)=>(U[Y]=L2(u),U),{}),{setup:h,read:p,resolveKeyframes:m,preUpdate:g,update:y,preRender:T,render:x,postRender:_}=f,A=()=>{const U=da.useManualTiming?l.timestamp:performance.now();i=!1,da.useManualTiming||(l.delta=o?1e3/60:Math.max(Math.min(U-l.timestamp,U2),1)),l.timestamp=U,l.isProcessing=!0,h.process(l),p.process(l),m.process(l),g.process(l),y.process(l),T.process(l),x.process(l),_.process(l),l.isProcessing=!1,i&&t&&(o=!1,e(A))},C=()=>{i=!0,o=!0,l.isProcessing||e(A)};return{schedule:eu.reduce((U,Y)=>{const j=f[Y];return U[Y]=(W,at=!1,K=!1)=>(i||C(),j.schedule(W,at,K)),U},{}),cancel:U=>{for(let Y=0;Y<eu.length;Y++)f[eu[Y]].cancel(U)},state:l,steps:f}}const{schedule:Lt,cancel:Ja,state:be,steps:gd}=M1(typeof requestAnimationFrame<"u"?requestAnimationFrame:un,!0);let du;function B2(){du=void 0}const Ue={now:()=>(du===void 0&&Ue.set(be.isProcessing||da.useManualTiming?be.timestamp:performance.now()),du),set:e=>{du=e,queueMicrotask(B2)}},N1=e=>t=>typeof t=="string"&&t.startsWith(e),Hh=N1("--"),z2=N1("var(--"),jh=e=>z2(e)?V2.test(e.split("/*")[0].trim()):!1,V2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Yr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},bs={...Yr,transform:e=>fa(0,1,e)},nu={...Yr,default:1},ss=e=>Math.round(e*1e5)/1e5,qh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function H2(e){return e==null}const j2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Fh=(e,t)=>i=>!!(typeof i=="string"&&j2.test(i)&&i.startsWith(e)||t&&!H2(i)&&Object.prototype.hasOwnProperty.call(i,t)),P1=(e,t,i)=>o=>{if(typeof o!="string")return o;const[l,u,f,h]=o.match(qh);return{[e]:parseFloat(l),[t]:parseFloat(u),[i]:parseFloat(f),alpha:h!==void 0?parseFloat(h):1}},q2=e=>fa(0,255,e),yd={...Yr,transform:e=>Math.round(q2(e))},Ri={test:Fh("rgb","red"),parse:P1("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:o=1})=>"rgba("+yd.transform(e)+", "+yd.transform(t)+", "+yd.transform(i)+", "+ss(bs.transform(o))+")"};function F2(e){let t="",i="",o="",l="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),o=e.substring(5,7),l=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),o=e.substring(3,4),l=e.substring(4,5),t+=t,i+=i,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Yd={test:Fh("#"),parse:F2,transform:Ri.transform},ks=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Fa=ks("deg"),Un=ks("%"),ft=ks("px"),G2=ks("vh"),Y2=ks("vw"),Uy={...Un,parse:e=>Un.parse(e)/100,transform:e=>Un.transform(e*100)},kr={test:Fh("hsl","hue"),parse:P1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:o=1})=>"hsla("+Math.round(e)+", "+Un.transform(ss(t))+", "+Un.transform(ss(i))+", "+ss(bs.transform(o))+")"},ae={test:e=>Ri.test(e)||Yd.test(e)||kr.test(e),parse:e=>Ri.test(e)?Ri.parse(e):kr.test(e)?kr.parse(e):Yd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Ri.transform(e):kr.transform(e),getAnimatableNone:e=>{const t=ae.parse(e);return t.alpha=0,ae.transform(t)}},X2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function K2(e){return isNaN(e)&&typeof e=="string"&&(e.match(qh)?.length||0)+(e.match(X2)?.length||0)>0}const I1="number",L1="color",$2="var",Z2="var(",By="${}",Q2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function vs(e){const t=e.toString(),i=[],o={color:[],number:[],var:[]},l=[];let u=0;const h=t.replace(Q2,p=>(ae.test(p)?(o.color.push(u),l.push(L1),i.push(ae.parse(p))):p.startsWith(Z2)?(o.var.push(u),l.push($2),i.push(p)):(o.number.push(u),l.push(I1),i.push(parseFloat(p))),++u,By)).split(By);return{values:i,split:h,indexes:o,types:l}}function U1(e){return vs(e).values}function B1(e){const{split:t,types:i}=vs(e),o=t.length;return l=>{let u="";for(let f=0;f<o;f++)if(u+=t[f],l[f]!==void 0){const h=i[f];h===I1?u+=ss(l[f]):h===L1?u+=ae.transform(l[f]):u+=l[f]}return u}}const W2=e=>typeof e=="number"?0:ae.test(e)?ae.getAnimatableNone(e):e;function J2(e){const t=U1(e);return B1(e)(t.map(W2))}const ti={test:K2,parse:U1,createTransformer:B1,getAnimatableNone:J2};function bd(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function tA({hue:e,saturation:t,lightness:i,alpha:o}){e/=360,t/=100,i/=100;let l=0,u=0,f=0;if(!t)l=u=f=i;else{const h=i<.5?i*(1+t):i+t-i*t,p=2*i-h;l=bd(p,h,e+1/3),u=bd(p,h,e),f=bd(p,h,e-1/3)}return{red:Math.round(l*255),green:Math.round(u*255),blue:Math.round(f*255),alpha:o}}function wu(e,t){return i=>i>0?t:e}const zt=(e,t,i)=>e+(t-e)*i,vd=(e,t,i)=>{const o=e*e,l=i*(t*t-o)+o;return l<0?0:Math.sqrt(l)},eA=[Yd,Ri,kr],nA=e=>eA.find(t=>t.test(e));function zy(e){const t=nA(e);if(!t)return!1;let i=t.parse(e);return t===kr&&(i=tA(i)),i}const Vy=(e,t)=>{const i=zy(e),o=zy(t);if(!i||!o)return wu(e,t);const l={...i};return u=>(l.red=vd(i.red,o.red,u),l.green=vd(i.green,o.green,u),l.blue=vd(i.blue,o.blue,u),l.alpha=zt(i.alpha,o.alpha,u),Ri.transform(l))},Xd=new Set(["none","hidden"]);function aA(e,t){return Xd.has(e)?i=>i<=0?e:t:i=>i>=1?t:e}function iA(e,t){return i=>zt(e,t,i)}function Gh(e){return typeof e=="number"?iA:typeof e=="string"?jh(e)?wu:ae.test(e)?Vy:sA:Array.isArray(e)?z1:typeof e=="object"?ae.test(e)?Vy:rA:wu}function z1(e,t){const i=[...e],o=i.length,l=e.map((u,f)=>Gh(u)(u,t[f]));return u=>{for(let f=0;f<o;f++)i[f]=l[f](u);return i}}function rA(e,t){const i={...e,...t},o={};for(const l in i)e[l]!==void 0&&t[l]!==void 0&&(o[l]=Gh(e[l])(e[l],t[l]));return l=>{for(const u in o)i[u]=o[u](l);return i}}function oA(e,t){const i=[],o={color:0,var:0,number:0};for(let l=0;l<t.values.length;l++){const u=t.types[l],f=e.indexes[u][o[u]],h=e.values[f]??0;i[l]=h,o[u]++}return i}const sA=(e,t)=>{const i=ti.createTransformer(t),o=vs(e),l=vs(t);return o.indexes.var.length===l.indexes.var.length&&o.indexes.color.length===l.indexes.color.length&&o.indexes.number.length>=l.indexes.number.length?Xd.has(e)&&!l.values.length||Xd.has(t)&&!o.values.length?aA(e,t):Cs(z1(oA(o,l),l.values),i):wu(e,t)};function V1(e,t,i){return typeof e=="number"&&typeof t=="number"&&typeof i=="number"?zt(e,t,i):Gh(e)(e,t)}const lA=e=>{const t=({timestamp:i})=>e(i);return{start:(i=!0)=>Lt.update(t,i),stop:()=>Ja(t),now:()=>be.isProcessing?be.timestamp:Ue.now()}},H1=(e,t,i=10)=>{let o="";const l=Math.max(Math.round(t/i),2);for(let u=0;u<l;u++)o+=Math.round(e(u/(l-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},_u=2e4;function Yh(e){let t=0;const i=50;let o=e.next(t);for(;!o.done&&t<_u;)t+=i,o=e.next(t);return t>=_u?1/0:t}function uA(e,t=100,i){const o=i({...e,keyframes:[0,t]}),l=Math.min(Yh(o),_u);return{type:"keyframes",ease:u=>o.next(l*u).value/t,duration:ln(l)}}const cA=5;function j1(e,t,i){const o=Math.max(t-cA,0);return S1(i-e(o),t-o)}const qt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Td=.001;function fA({duration:e=qt.duration,bounce:t=qt.bounce,velocity:i=qt.velocity,mass:o=qt.mass}){let l,u,f=1-t;f=fa(qt.minDamping,qt.maxDamping,f),e=fa(qt.minDuration,qt.maxDuration,ln(e)),f<1?(l=m=>{const g=m*f,y=g*e,T=g-i,x=Kd(m,f),_=Math.exp(-y);return Td-T/x*_},u=m=>{const y=m*f*e,T=y*i+i,x=Math.pow(f,2)*Math.pow(m,2)*e,_=Math.exp(-y),A=Kd(Math.pow(m,2),f);return(-l(m)+Td>0?-1:1)*((T-x)*_)/A}):(l=m=>{const g=Math.exp(-m*e),y=(m-i)*e+1;return-Td+g*y},u=m=>{const g=Math.exp(-m*e),y=(i-m)*(e*e);return g*y});const h=5/e,p=hA(l,u,h);if(e=Ln(e),isNaN(p))return{stiffness:qt.stiffness,damping:qt.damping,duration:e};{const m=Math.pow(p,2)*o;return{stiffness:m,damping:f*2*Math.sqrt(o*m),duration:e}}}const dA=12;function hA(e,t,i){let o=i;for(let l=1;l<dA;l++)o=o-e(o)/t(o);return o}function Kd(e,t){return e*Math.sqrt(1-t*t)}const pA=["duration","bounce"],mA=["stiffness","damping","mass"];function Hy(e,t){return t.some(i=>e[i]!==void 0)}function gA(e){let t={velocity:qt.velocity,stiffness:qt.stiffness,damping:qt.damping,mass:qt.mass,isResolvedFromDuration:!1,...e};if(!Hy(e,mA)&&Hy(e,pA))if(e.visualDuration){const i=e.visualDuration,o=2*Math.PI/(i*1.2),l=o*o,u=2*fa(.05,1,1-(e.bounce||0))*Math.sqrt(l);t={...t,mass:qt.mass,stiffness:l,damping:u}}else{const i=fA(e);t={...t,...i,mass:qt.mass},t.isResolvedFromDuration=!0}return t}function Eu(e=qt.visualDuration,t=qt.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:o,restDelta:l}=i;const u=i.keyframes[0],f=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:m,mass:g,duration:y,velocity:T,isResolvedFromDuration:x}=gA({...i,velocity:-ln(i.velocity||0)}),_=T||0,A=m/(2*Math.sqrt(p*g)),C=f-u,R=ln(Math.sqrt(p/g)),L=Math.abs(C)<5;o||(o=L?qt.restSpeed.granular:qt.restSpeed.default),l||(l=L?qt.restDelta.granular:qt.restDelta.default);let U;if(A<1){const j=Kd(R,A);U=W=>{const at=Math.exp(-A*R*W);return f-at*((_+A*R*C)/j*Math.sin(j*W)+C*Math.cos(j*W))}}else if(A===1)U=j=>f-Math.exp(-R*j)*(C+(_+R*C)*j);else{const j=R*Math.sqrt(A*A-1);U=W=>{const at=Math.exp(-A*R*W),K=Math.min(j*W,300);return f-at*((_+A*R*C)*Math.sinh(K)+j*C*Math.cosh(K))/j}}const Y={calculatedDuration:x&&y||null,next:j=>{const W=U(j);if(x)h.done=j>=y;else{let at=j===0?_:0;A<1&&(at=j===0?Ln(_):j1(U,j,W));const K=Math.abs(at)<=o,rt=Math.abs(f-W)<=l;h.done=K&&rt}return h.value=h.done?f:W,h},toString:()=>{const j=Math.min(Yh(Y),_u),W=H1(at=>Y.next(j*at).value,j,30);return j+"ms "+W},toTransition:()=>{}};return Y}Eu.applyToOptions=e=>{const t=uA(e,100,Eu);return e.ease=t.ease,e.duration=Ln(t.duration),e.type="keyframes",e};function $d({keyframes:e,velocity:t=0,power:i=.8,timeConstant:o=325,bounceDamping:l=10,bounceStiffness:u=500,modifyTarget:f,min:h,max:p,restDelta:m=.5,restSpeed:g}){const y=e[0],T={done:!1,value:y},x=K=>h!==void 0&&K<h||p!==void 0&&K>p,_=K=>h===void 0?p:p===void 0||Math.abs(h-K)<Math.abs(p-K)?h:p;let A=i*t;const C=y+A,R=f===void 0?C:f(C);R!==C&&(A=R-y);const L=K=>-A*Math.exp(-K/o),U=K=>R+L(K),Y=K=>{const rt=L(K),St=U(K);T.done=Math.abs(rt)<=m,T.value=T.done?R:St};let j,W;const at=K=>{x(T.value)&&(j=K,W=Eu({keyframes:[T.value,_(T.value)],velocity:j1(U,K,T.value),damping:l,stiffness:u,restDelta:m,restSpeed:g}))};return at(0),{calculatedDuration:null,next:K=>{let rt=!1;return!W&&j===void 0&&(rt=!0,Y(K),at(K)),j!==void 0&&K>=j?W.next(K-j):(!rt&&Y(K),T)}}}function yA(e,t,i){const o=[],l=i||da.mix||V1,u=e.length-1;for(let f=0;f<u;f++){let h=l(e[f],e[f+1]);if(t){const p=Array.isArray(t)?t[f]||un:t;h=Cs(p,h)}o.push(h)}return o}function bA(e,t,{clamp:i=!0,ease:o,mixer:l}={}){const u=e.length;if(Lh(u===t.length),u===1)return()=>t[0];if(u===2&&t[0]===t[1])return()=>t[1];const f=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),t=[...t].reverse());const h=yA(t,o,l),p=h.length,m=g=>{if(f&&g<e[0])return t[0];let y=0;if(p>1)for(;y<e.length-2&&!(g<e[y+1]);y++);const T=ys(e[y],e[y+1],g);return h[y](T)};return i?g=>m(fa(e[0],e[u-1],g)):m}function vA(e,t){const i=e[e.length-1];for(let o=1;o<=t;o++){const l=ys(0,t,o);e.push(zt(i,1,l))}}function TA(e){const t=[0];return vA(t,e.length-1),t}function SA(e,t){return e.map(i=>i*t)}function xA(e,t){return e.map(()=>t||D1).splice(0,e.length-1)}function ls({duration:e=300,keyframes:t,times:i,ease:o="easeInOut"}){const l=N2(o)?o.map(Ly):Ly(o),u={done:!1,value:t[0]},f=SA(i&&i.length===t.length?i:TA(t),e),h=bA(f,t,{ease:Array.isArray(l)?l:xA(t,l)});return{calculatedDuration:e,next:p=>(u.value=h(p),u.done=p>=e,u)}}const wA=e=>e!==null;function Xh(e,{repeat:t,repeatType:i="loop"},o,l=1){const u=e.filter(wA),h=l<0||t&&i!=="loop"&&t%2===1?0:u.length-1;return!h||o===void 0?u[h]:o}const _A={decay:$d,inertia:$d,tween:ls,keyframes:ls,spring:Eu};function q1(e){typeof e.type=="string"&&(e.type=_A[e.type])}class Kh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,i){return this.finished.then(t,i)}}const EA=e=>e/100;class $h extends Kh{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:i}=this.options;i&&i.updatedAt!==Ue.now()&&this.tick(Ue.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;q1(t);const{type:i=ls,repeat:o=0,repeatDelay:l=0,repeatType:u,velocity:f=0}=t;let{keyframes:h}=t;const p=i||ls;p!==ls&&typeof h[0]!="number"&&(this.mixKeyframes=Cs(EA,V1(h[0],h[1])),h=[0,100]);const m=p({...t,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...h].reverse(),velocity:-f})),m.calculatedDuration===null&&(m.calculatedDuration=Yh(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+l,this.totalDuration=this.resolvedDuration*(o+1)-l,this.generator=m}updateTime(t){const i=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(t,i=!1){const{generator:o,totalDuration:l,mixKeyframes:u,mirroredGenerator:f,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return o.next(0);const{delay:m=0,keyframes:g,repeat:y,repeatType:T,repeatDelay:x,type:_,onUpdate:A,finalKeyframe:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-l/this.speed,this.startTime)),i?this.currentTime=t:this.updateTime(t);const R=this.currentTime-m*(this.playbackSpeed>=0?1:-1),L=this.playbackSpeed>=0?R<0:R>l;this.currentTime=Math.max(R,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let U=this.currentTime,Y=o;if(y){const K=Math.min(this.currentTime,l)/h;let rt=Math.floor(K),St=K%1;!St&&K>=1&&(St=1),St===1&&rt--,rt=Math.min(rt,y+1),!!(rt%2)&&(T==="reverse"?(St=1-St,x&&(St-=x/h)):T==="mirror"&&(Y=f)),U=fa(0,1,St)*h}const j=L?{done:!1,value:g[0]}:Y.next(U);u&&(j.value=u(j.value));let{done:W}=j;!L&&p!==null&&(W=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const at=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return at&&_!==$d&&(j.value=Xh(g,this.options,C,this.speed)),A&&A(j.value),at&&this.finish(),j}then(t,i){return this.finished.then(t,i)}get duration(){return ln(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+ln(t)}get time(){return ln(this.currentTime)}set time(t){t=Ln(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Ue.now());const i=this.playbackSpeed!==t;this.playbackSpeed=t,i&&(this.time=ln(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=lA,startTime:i}=this.options;this.driver||(this.driver=t(l=>this.tick(l))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=i??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ue.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function AA(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Oi=e=>e*180/Math.PI,Zd=e=>{const t=Oi(Math.atan2(e[1],e[0]));return Qd(t)},RA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Zd,rotateZ:Zd,skewX:e=>Oi(Math.atan(e[1])),skewY:e=>Oi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Qd=e=>(e=e%360,e<0&&(e+=360),e),jy=Zd,qy=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Fy=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),OA={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:qy,scaleY:Fy,scale:e=>(qy(e)+Fy(e))/2,rotateX:e=>Qd(Oi(Math.atan2(e[6],e[5]))),rotateY:e=>Qd(Oi(Math.atan2(-e[2],e[0]))),rotateZ:jy,rotate:jy,skewX:e=>Oi(Math.atan(e[4])),skewY:e=>Oi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Wd(e){return e.includes("scale")?1:0}function Jd(e,t){if(!e||e==="none")return Wd(t);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,l;if(i)o=OA,l=i;else{const h=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=RA,l=h}if(!l)return Wd(t);const u=o[t],f=l[1].split(",").map(DA);return typeof u=="function"?u(f):f[u]}const CA=(e,t)=>{const{transform:i="none"}=getComputedStyle(e);return Jd(i,t)};function DA(e){return parseFloat(e.trim())}const Xr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Kr=new Set(Xr),Gy=e=>e===Yr||e===ft,kA=new Set(["x","y","z"]),MA=Xr.filter(e=>!kA.has(e));function NA(e){const t=[];return MA.forEach(i=>{const o=e.getValue(i);o!==void 0&&(t.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),t}const Di={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Jd(t,"x"),y:(e,{transform:t})=>Jd(t,"y")};Di.translateX=Di.x;Di.translateY=Di.y;const ki=new Set;let th=!1,eh=!1,nh=!1;function F1(){if(eh){const e=Array.from(ki).filter(o=>o.needsMeasurement),t=new Set(e.map(o=>o.element)),i=new Map;t.forEach(o=>{const l=NA(o);l.length&&(i.set(o,l),o.render())}),e.forEach(o=>o.measureInitialState()),t.forEach(o=>{o.render();const l=i.get(o);l&&l.forEach(([u,f])=>{o.getValue(u)?.set(f)})}),e.forEach(o=>o.measureEndState()),e.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}eh=!1,th=!1,ki.forEach(e=>e.complete(nh)),ki.clear()}function G1(){ki.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(eh=!0)})}function PA(){nh=!0,G1(),F1(),nh=!1}class Zh{constructor(t,i,o,l,u,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=i,this.name=o,this.motionValue=l,this.element=u,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(ki.add(this),th||(th=!0,Lt.read(G1),Lt.resolveKeyframes(F1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:i,element:o,motionValue:l}=this;if(t[0]===null){const u=l?.get(),f=t[t.length-1];if(u!==void 0)t[0]=u;else if(o&&i){const h=o.readValue(i,f);h!=null&&(t[0]=h)}t[0]===void 0&&(t[0]=f),l&&u===void 0&&l.set(t[0])}AA(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),ki.delete(this)}cancel(){this.state==="scheduled"&&(ki.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const IA=e=>e.startsWith("--");function LA(e,t,i){IA(t)?e.style.setProperty(t,i):e.style[t]=i}const UA=Uh(()=>window.ScrollTimeline!==void 0),BA={};function zA(e,t){const i=Uh(e);return()=>BA[t]??i()}const Y1=zA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),as=([e,t,i,o])=>`cubic-bezier(${e}, ${t}, ${i}, ${o})`,Yy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:as([0,.65,.55,1]),circOut:as([.55,0,1,.45]),backIn:as([.31,.01,.66,-.59]),backOut:as([.33,1.53,.69,.99])};function X1(e,t){if(e)return typeof e=="function"?Y1()?H1(e,t):"ease-out":k1(e)?as(e):Array.isArray(e)?e.map(i=>X1(i,t)||Yy.easeOut):Yy[e]}function VA(e,t,i,{delay:o=0,duration:l=300,repeat:u=0,repeatType:f="loop",ease:h="easeOut",times:p}={},m=void 0){const g={[t]:i};p&&(g.offset=p);const y=X1(h,l);Array.isArray(y)&&(g.easing=y);const T={delay:o,duration:l,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:u+1,direction:f==="reverse"?"alternate":"normal"};return m&&(T.pseudoElement=m),e.animate(g,T)}function K1(e){return typeof e=="function"&&"applyToOptions"in e}function HA({type:e,...t}){return K1(e)&&Y1()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class jA extends Kh{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:i,name:o,keyframes:l,pseudoElement:u,allowFlatten:f=!1,finalKeyframe:h,onComplete:p}=t;this.isPseudoElement=!!u,this.allowFlatten=f,this.options=t,Lh(typeof t.type!="string");const m=HA(t);this.animation=VA(i,o,l,m,u),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=Xh(l,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(g):LA(i,o,g),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return ln(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+ln(t)}get time(){return ln(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Ln(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:i}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&UA()?(this.animation.timeline=t,un):i(this)}}const $1={anticipate:R1,backInOut:A1,circInOut:C1};function qA(e){return e in $1}function FA(e){typeof e.ease=="string"&&qA(e.ease)&&(e.ease=$1[e.ease])}const Xy=10;class GA extends jA{constructor(t){FA(t),q1(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:i,onUpdate:o,onComplete:l,element:u,...f}=this.options;if(!i)return;if(t!==void 0){i.set(t);return}const h=new $h({...f,autoplay:!1}),p=Ln(this.finishedTime??this.time);i.setWithVelocity(h.sample(p-Xy).value,h.sample(p).value,Xy),h.stop()}}const Ky=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ti.test(e)||e==="0")&&!e.startsWith("url("));function YA(e){const t=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}function XA(e,t,i,o){const l=e[0];if(l===null)return!1;if(t==="display"||t==="visibility")return!0;const u=e[e.length-1],f=Ky(l,t),h=Ky(u,t);return!f||!h?!1:YA(e)||(i==="spring"||K1(i))&&o}function ah(e){e.duration=0,e.type="keyframes"}const KA=new Set(["opacity","clipPath","filter","transform"]),$A=Uh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function ZA(e){const{motionValue:t,name:i,repeatDelay:o,repeatType:l,damping:u,type:f}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=t.owner.getProps();return $A()&&i&&KA.has(i)&&(i!=="transform"||!m)&&!p&&!o&&l!=="mirror"&&u!==0&&f!=="inertia"}const QA=40;class WA extends Kh{constructor({autoplay:t=!0,delay:i=0,type:o="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:f="loop",keyframes:h,name:p,motionValue:m,element:g,...y}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ue.now();const T={autoplay:t,delay:i,type:o,repeat:l,repeatDelay:u,repeatType:f,name:p,motionValue:m,element:g,...y},x=g?.KeyframeResolver||Zh;this.keyframeResolver=new x(h,(_,A,C)=>this.onKeyframesResolved(_,A,T,!C),p,m,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,i,o,l){this.keyframeResolver=void 0;const{name:u,type:f,velocity:h,delay:p,isHandoff:m,onUpdate:g}=o;this.resolvedAt=Ue.now(),XA(t,u,f,h)||((da.instantAnimations||!p)&&g?.(Xh(t,o,i)),t[0]=t[t.length-1],ah(o),o.repeat=0);const T={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>QA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...o,keyframes:t},x=!m&&ZA(T)?new GA({...T,element:T.motionValue.owner.current}):new $h(T);x.finished.then(()=>this.notifyFinished()).catch(un),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(t,i){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),PA()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const JA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function t5(e){const t=JA.exec(e);if(!t)return[,];const[,i,o,l]=t;return[`--${i??o}`,l]}function Z1(e,t,i=1){const[o,l]=t5(e);if(!o)return;const u=window.getComputedStyle(t).getPropertyValue(o);if(u){const f=u.trim();return b1(f)?parseFloat(f):f}return jh(l)?Z1(l,t,i+1):l}function Qh(e,t){return e?.[t]??e?.default??e}const Q1=new Set(["width","height","top","left","right","bottom",...Xr]),e5={test:e=>e==="auto",parse:e=>e},W1=e=>t=>t.test(e),J1=[Yr,ft,Un,Fa,Y2,G2,e5],$y=e=>J1.find(W1(e));function n5(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||T1(e):!0}const a5=new Set(["brightness","contrast","saturate","opacity"]);function i5(e){const[t,i]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=i.match(qh)||[];if(!o)return e;const l=i.replace(o,"");let u=a5.has(t)?1:0;return o!==i&&(u*=100),t+"("+u+l+")"}const r5=/\b([a-z-]*)\(.*?\)/gu,ih={...ti,getAnimatableNone:e=>{const t=e.match(r5);return t?t.map(i5).join(" "):e}},Zy={...Yr,transform:Math.round},o5={rotate:Fa,rotateX:Fa,rotateY:Fa,rotateZ:Fa,scale:nu,scaleX:nu,scaleY:nu,scaleZ:nu,skew:Fa,skewX:Fa,skewY:Fa,distance:ft,translateX:ft,translateY:ft,translateZ:ft,x:ft,y:ft,z:ft,perspective:ft,transformPerspective:ft,opacity:bs,originX:Uy,originY:Uy,originZ:ft},Wh={borderWidth:ft,borderTopWidth:ft,borderRightWidth:ft,borderBottomWidth:ft,borderLeftWidth:ft,borderRadius:ft,radius:ft,borderTopLeftRadius:ft,borderTopRightRadius:ft,borderBottomRightRadius:ft,borderBottomLeftRadius:ft,width:ft,maxWidth:ft,height:ft,maxHeight:ft,top:ft,right:ft,bottom:ft,left:ft,padding:ft,paddingTop:ft,paddingRight:ft,paddingBottom:ft,paddingLeft:ft,margin:ft,marginTop:ft,marginRight:ft,marginBottom:ft,marginLeft:ft,backgroundPositionX:ft,backgroundPositionY:ft,...o5,zIndex:Zy,fillOpacity:bs,strokeOpacity:bs,numOctaves:Zy},s5={...Wh,color:ae,backgroundColor:ae,outlineColor:ae,fill:ae,stroke:ae,borderColor:ae,borderTopColor:ae,borderRightColor:ae,borderBottomColor:ae,borderLeftColor:ae,filter:ih,WebkitFilter:ih},tT=e=>s5[e];function eT(e,t){let i=tT(e);return i!==ih&&(i=ti),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const l5=new Set(["auto","none","0"]);function u5(e,t,i){let o=0,l;for(;o<e.length&&!l;){const u=e[o];typeof u=="string"&&!l5.has(u)&&vs(u).values.length&&(l=e[o]),o++}if(l&&i)for(const u of t)e[u]=eT(i,l)}class c5 extends Zh{constructor(t,i,o,l,u){super(t,i,o,l,u,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let p=0;p<t.length;p++){let m=t[p];if(typeof m=="string"&&(m=m.trim(),jh(m))){const g=Z1(m,i.current);g!==void 0&&(t[p]=g),p===t.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!Q1.has(o)||t.length!==2)return;const[l,u]=t,f=$y(l),h=$y(u);if(f!==h)if(Gy(f)&&Gy(h))for(let p=0;p<t.length;p++){const m=t[p];typeof m=="string"&&(t[p]=parseFloat(m))}else Di[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:i}=this,o=[];for(let l=0;l<t.length;l++)(t[l]===null||n5(t[l]))&&o.push(l);o.length&&u5(t,o,i)}measureInitialState(){const{element:t,unresolvedKeyframes:i,name:o}=this;if(!t||!t.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Di[o](t.measureViewportBox(),window.getComputedStyle(t.current)),i[0]=this.measuredOrigin;const l=i[i.length-1];l!==void 0&&t.getValue(o,l).jump(l,!1)}measureEndState(){const{element:t,name:i,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(i);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,f=o[u];o[u]=Di[i](t.measureViewportBox(),window.getComputedStyle(t.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([h,p])=>{t.getValue(h).set(p)}),this.resolveNoneKeyframes()}}function f5(e,t,i){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let o=document;const l=i?.[e]??o.querySelectorAll(e);return l?Array.from(l):[]}return Array.from(e)}const nT=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function d5(e){return v1(e)&&"offsetHeight"in e}const Qy=30,h5=e=>!isNaN(parseFloat(e));class p5{constructor(t,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const l=Ue.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=i.owner}setCurrent(t){this.current=t,this.updatedAt=Ue.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=h5(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new Bh);const o=this.events[t].add(i);return t==="change"?()=>{o(),Lt.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-o}jump(t,i=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Ue.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Qy)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Qy);return S1(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function jr(e,t){return new p5(e,t)}const{schedule:Jh}=M1(queueMicrotask,!1),yn={x:!1,y:!1};function aT(){return yn.x||yn.y}function m5(e){return e==="x"||e==="y"?yn[e]?null:(yn[e]=!0,()=>{yn[e]=!1}):yn.x||yn.y?null:(yn.x=yn.y=!0,()=>{yn.x=yn.y=!1})}function iT(e,t){const i=f5(e),o=new AbortController,l={passive:!0,...t,signal:o.signal};return[i,l,()=>o.abort()]}function Wy(e){return!(e.pointerType==="touch"||aT())}function g5(e,t,i={}){const[o,l,u]=iT(e,i),f=h=>{if(!Wy(h))return;const{target:p}=h,m=t(p,h);if(typeof m!="function"||!p)return;const g=y=>{Wy(y)&&(m(y),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,l)};return o.forEach(h=>{h.addEventListener("pointerenter",f,l)}),u}const rT=(e,t)=>t?e===t?!0:rT(e,t.parentElement):!1,tp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,y5=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function b5(e){return y5.has(e.tagName)||e.tabIndex!==-1}const hu=new WeakSet;function Jy(e){return t=>{t.key==="Enter"&&e(t)}}function Sd(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const v5=(e,t)=>{const i=e.currentTarget;if(!i)return;const o=Jy(()=>{if(hu.has(i))return;Sd(i,"down");const l=Jy(()=>{Sd(i,"up")}),u=()=>Sd(i,"cancel");i.addEventListener("keyup",l,t),i.addEventListener("blur",u,t)});i.addEventListener("keydown",o,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",o),t)};function tb(e){return tp(e)&&!aT()}function T5(e,t,i={}){const[o,l,u]=iT(e,i),f=h=>{const p=h.currentTarget;if(!tb(h))return;hu.add(p);const m=t(p,h),g=(x,_)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",T),hu.has(p)&&hu.delete(p),tb(x)&&typeof m=="function"&&m(x,{success:_})},y=x=>{g(x,p===window||p===document||i.useGlobalTarget||rT(p,x.target))},T=x=>{g(x,!1)};window.addEventListener("pointerup",y,l),window.addEventListener("pointercancel",T,l)};return o.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",f,l),d5(h)&&(h.addEventListener("focus",m=>v5(m,l)),!b5(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function oT(e){return v1(e)&&"ownerSVGElement"in e}function S5(e){return oT(e)&&e.tagName==="svg"}const xe=e=>!!(e&&e.getVelocity),x5=[...J1,ae,ti],w5=e=>x5.find(W1(e)),sT=D.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function _5(e=!0){const t=D.useContext(Nh);if(t===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:l}=t,u=D.useId();D.useEffect(()=>{if(e)return l(u)},[e]);const f=D.useCallback(()=>e&&o&&o(u),[u,o,e]);return!i&&o?[!1,f]:[!0]}const lT=D.createContext({strict:!1}),eb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},qr={};for(const e in eb)qr[e]={isEnabled:t=>eb[e].some(i=>!!t[i])};function E5(e){for(const t in e)qr[t]={...qr[t],...e[t]}}const A5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Au(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||A5.has(e)}let uT=e=>!Au(e);function R5(e){typeof e=="function"&&(uT=t=>t.startsWith("on")?!Au(t):e(t))}try{R5(require("@emotion/is-prop-valid").default)}catch{}function O5(e,t,i){const o={};for(const l in e)l==="values"&&typeof e.values=="object"||(uT(l)||i===!0&&Au(l)||!t&&!Au(l)||e.draggable&&l.startsWith("onDrag"))&&(o[l]=e[l]);return o}const Hu=D.createContext({});function ju(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Ts(e){return typeof e=="string"||Array.isArray(e)}const ep=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],np=["initial",...ep];function qu(e){return ju(e.animate)||np.some(t=>Ts(e[t]))}function cT(e){return!!(qu(e)||e.variants)}function C5(e,t){if(qu(e)){const{initial:i,animate:o}=e;return{initial:i===!1||Ts(i)?i:void 0,animate:Ts(o)?o:void 0}}return e.inherit!==!1?t:{}}function D5(e){const{initial:t,animate:i}=C5(e,D.useContext(Hu));return D.useMemo(()=>({initial:t,animate:i}),[nb(t),nb(i)])}function nb(e){return Array.isArray(e)?e.join(" "):e}const Ss={};function k5(e){for(const t in e)Ss[t]=e[t],Hh(t)&&(Ss[t].isCSSVariable=!0)}function fT(e,{layout:t,layoutId:i}){return Kr.has(e)||e.startsWith("origin")||(t||i!==void 0)&&(!!Ss[e]||e==="opacity")}const M5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},N5=Xr.length;function P5(e,t,i){let o="",l=!0;for(let u=0;u<N5;u++){const f=Xr[u],h=e[f];if(h===void 0)continue;let p=!0;if(typeof h=="number"?p=h===(f.startsWith("scale")?1:0):p=parseFloat(h)===0,!p||i){const m=nT(h,Wh[f]);if(!p){l=!1;const g=M5[f]||f;o+=`${g}(${m}) `}i&&(t[f]=m)}}return o=o.trim(),i?o=i(t,l?"":o):l&&(o="none"),o}function ap(e,t,i){const{style:o,vars:l,transformOrigin:u}=e;let f=!1,h=!1;for(const p in t){const m=t[p];if(Kr.has(p)){f=!0;continue}else if(Hh(p)){l[p]=m;continue}else{const g=nT(m,Wh[p]);p.startsWith("origin")?(h=!0,u[p]=g):o[p]=g}}if(t.transform||(f||i?o.transform=P5(t,e.transform,i):o.transform&&(o.transform="none")),h){const{originX:p="50%",originY:m="50%",originZ:g=0}=u;o.transformOrigin=`${p} ${m} ${g}`}}const ip=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function dT(e,t,i){for(const o in t)!xe(t[o])&&!fT(o,i)&&(e[o]=t[o])}function I5({transformTemplate:e},t){return D.useMemo(()=>{const i=ip();return ap(i,t,e),Object.assign({},i.vars,i.style)},[t])}function L5(e,t){const i=e.style||{},o={};return dT(o,i,e),Object.assign(o,I5(e,t)),o}function U5(e,t){const i={},o=L5(e,t);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=o,i}const B5={offset:"stroke-dashoffset",array:"stroke-dasharray"},z5={offset:"strokeDashoffset",array:"strokeDasharray"};function V5(e,t,i=1,o=0,l=!0){e.pathLength=1;const u=l?B5:z5;e[u.offset]=ft.transform(-o);const f=ft.transform(t),h=ft.transform(i);e[u.array]=`${f} ${h}`}function hT(e,{attrX:t,attrY:i,attrScale:o,pathLength:l,pathSpacing:u=1,pathOffset:f=0,...h},p,m,g){if(ap(e,h,m),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:T}=e;y.transform&&(T.transform=y.transform,delete y.transform),(T.transform||y.transformOrigin)&&(T.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),T.transform&&(T.transformBox=g?.transformBox??"fill-box",delete y.transformBox),t!==void 0&&(y.x=t),i!==void 0&&(y.y=i),o!==void 0&&(y.scale=o),l!==void 0&&V5(y,l,u,f,!1)}const pT=()=>({...ip(),attrs:{}}),mT=e=>typeof e=="string"&&e.toLowerCase()==="svg";function H5(e,t,i,o){const l=D.useMemo(()=>{const u=pT();return hT(u,t,mT(o),e.transformTemplate,e.style),{...u.attrs,style:{...u.style}}},[t]);if(e.style){const u={};dT(u,e.style,e),l.style={...u,...l.style}}return l}const j5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function rp(e){return typeof e!="string"||e.includes("-")?!1:!!(j5.indexOf(e)>-1||/[A-Z]/u.test(e))}function q5(e,t,i,{latestValues:o},l,u=!1){const h=(rp(e)?H5:U5)(t,o,l,e),p=O5(t,typeof e=="string",u),m=e!==D.Fragment?{...p,...h,ref:i}:{},{children:g}=t,y=D.useMemo(()=>xe(g)?g.get():g,[g]);return D.createElement(e,{...m,children:y})}function ab(e){const t=[{},{}];return e?.values.forEach((i,o)=>{t[0][o]=i.get(),t[1][o]=i.getVelocity()}),t}function op(e,t,i,o){if(typeof t=="function"){const[l,u]=ab(o);t=t(i!==void 0?i:e.custom,l,u)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[l,u]=ab(o);t=t(i!==void 0?i:e.custom,l,u)}return t}function pu(e){return xe(e)?e.get():e}function F5({scrapeMotionValuesFromProps:e,createRenderState:t},i,o,l){return{latestValues:G5(i,o,l,e),renderState:t()}}function G5(e,t,i,o){const l={},u=o(e,{});for(const T in u)l[T]=pu(u[T]);let{initial:f,animate:h}=e;const p=qu(e),m=cT(e);t&&m&&!p&&e.inherit!==!1&&(f===void 0&&(f=t.initial),h===void 0&&(h=t.animate));let g=i?i.initial===!1:!1;g=g||f===!1;const y=g?h:f;if(y&&typeof y!="boolean"&&!ju(y)){const T=Array.isArray(y)?y:[y];for(let x=0;x<T.length;x++){const _=op(e,T[x]);if(_){const{transitionEnd:A,transition:C,...R}=_;for(const L in R){let U=R[L];if(Array.isArray(U)){const Y=g?U.length-1:0;U=U[Y]}U!==null&&(l[L]=U)}for(const L in A)l[L]=A[L]}}}return l}const gT=e=>(t,i)=>{const o=D.useContext(Hu),l=D.useContext(Nh),u=()=>F5(e,t,o,l);return i?u():E2(u)};function sp(e,t,i){const{style:o}=e,l={};for(const u in o)(xe(o[u])||t.style&&xe(t.style[u])||fT(u,e)||i?.getValue(u)?.liveStyle!==void 0)&&(l[u]=o[u]);return l}const Y5=gT({scrapeMotionValuesFromProps:sp,createRenderState:ip});function yT(e,t,i){const o=sp(e,t,i);for(const l in e)if(xe(e[l])||xe(t[l])){const u=Xr.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;o[u]=e[l]}return o}const X5=gT({scrapeMotionValuesFromProps:yT,createRenderState:pT}),K5=Symbol.for("motionComponentSymbol");function Mr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function $5(e,t,i){return D.useCallback(o=>{o&&e.onMount&&e.onMount(o),t&&(o?t.mount(o):t.unmount()),i&&(typeof i=="function"?i(o):Mr(i)&&(i.current=o))},[t])}const lp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Z5="framerAppearId",bT="data-"+lp(Z5),vT=D.createContext({});function Q5(e,t,i,o,l){const{visualElement:u}=D.useContext(Hu),f=D.useContext(lT),h=D.useContext(Nh),p=D.useContext(sT).reducedMotion,m=D.useRef(null);o=o||f.renderer,!m.current&&o&&(m.current=o(e,{visualState:t,parent:u,props:i,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const g=m.current,y=D.useContext(vT);g&&!g.projection&&l&&(g.type==="html"||g.type==="svg")&&W5(m.current,i,l,y);const T=D.useRef(!1);D.useInsertionEffect(()=>{g&&T.current&&g.update(i,h)});const x=i[bT],_=D.useRef(!!x&&!window.MotionHandoffIsComplete?.(x)&&window.MotionHasOptimisedAnimation?.(x));return A2(()=>{g&&(T.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),_.current&&g.animationState&&g.animationState.animateChanges())}),D.useEffect(()=>{g&&(!_.current&&g.animationState&&g.animationState.animateChanges(),_.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(x)}),_.current=!1),g.enteringChildren=void 0)}),g}function W5(e,t,i,o){const{layoutId:l,layout:u,drag:f,dragConstraints:h,layoutScroll:p,layoutRoot:m,layoutCrossfade:g}=t;e.projection=new i(e.latestValues,t["data-framer-portal-id"]?void 0:TT(e.parent)),e.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!f||h&&Mr(h),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,crossfade:g,layoutScroll:p,layoutRoot:m})}function TT(e){if(e)return e.options.allowProjection!==!1?e.projection:TT(e.parent)}function xd(e,{forwardMotionProps:t=!1}={},i,o){i&&E5(i);const l=rp(e)?X5:Y5;function u(h,p){let m;const g={...D.useContext(sT),...h,layoutId:J5(h)},{isStatic:y}=g,T=D5(h),x=l(h,y);if(!y&&Mh){tR();const _=eR(g);m=_.MeasureLayout,T.visualElement=Q5(e,x,g,o,_.ProjectionNode)}return X.jsxs(Hu.Provider,{value:T,children:[m&&T.visualElement?X.jsx(m,{visualElement:T.visualElement,...g}):null,q5(e,h,$5(x,T.visualElement,p),x,y,t)]})}u.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const f=D.forwardRef(u);return f[K5]=e,f}function J5({layoutId:e}){const t=D.useContext(y1).id;return t&&e!==void 0?t+"-"+e:e}function tR(e,t){D.useContext(lT).strict}function eR(e){const{drag:t,layout:i}=qr;if(!t&&!i)return{};const o={...t,...i};return{MeasureLayout:t?.isEnabled(e)||i?.isEnabled(e)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function nR(e,t){if(typeof Proxy>"u")return xd;const i=new Map,o=(u,f)=>xd(u,f,e,t),l=(u,f)=>o(u,f);return new Proxy(l,{get:(u,f)=>f==="create"?o:(i.has(f)||i.set(f,xd(f,void 0,e,t)),i.get(f))})}function ST({top:e,left:t,right:i,bottom:o}){return{x:{min:t,max:i},y:{min:e,max:o}}}function aR({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function iR(e,t){if(!t)return e;const i=t({x:e.left,y:e.top}),o=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function wd(e){return e===void 0||e===1}function rh({scale:e,scaleX:t,scaleY:i}){return!wd(e)||!wd(t)||!wd(i)}function Ei(e){return rh(e)||xT(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function xT(e){return ib(e.x)||ib(e.y)}function ib(e){return e&&e!=="0%"}function Ru(e,t,i){const o=e-i,l=t*o;return i+l}function rb(e,t,i,o,l){return l!==void 0&&(e=Ru(e,l,o)),Ru(e,i,o)+t}function oh(e,t=0,i=1,o,l){e.min=rb(e.min,t,i,o,l),e.max=rb(e.max,t,i,o,l)}function wT(e,{x:t,y:i}){oh(e.x,t.translate,t.scale,t.originPoint),oh(e.y,i.translate,i.scale,i.originPoint)}const ob=.999999999999,sb=1.0000000000001;function rR(e,t,i,o=!1){const l=i.length;if(!l)return;t.x=t.y=1;let u,f;for(let h=0;h<l;h++){u=i[h],f=u.projectionDelta;const{visualElement:p}=u.options;p&&p.props.style&&p.props.style.display==="contents"||(o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Pr(e,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),f&&(t.x*=f.x.scale,t.y*=f.y.scale,wT(e,f)),o&&Ei(u.latestValues)&&Pr(e,u.latestValues))}t.x<sb&&t.x>ob&&(t.x=1),t.y<sb&&t.y>ob&&(t.y=1)}function Nr(e,t){e.min=e.min+t,e.max=e.max+t}function lb(e,t,i,o,l=.5){const u=zt(e.min,e.max,l);oh(e,t,i,u,o)}function Pr(e,t){lb(e.x,t.x,t.scaleX,t.scale,t.originX),lb(e.y,t.y,t.scaleY,t.scale,t.originY)}function _T(e,t){return ST(iR(e.getBoundingClientRect(),t))}function oR(e,t,i){const o=_T(e,i),{scroll:l}=t;return l&&(Nr(o.x,l.offset.x),Nr(o.y,l.offset.y)),o}const ub=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ir=()=>({x:ub(),y:ub()}),cb=()=>({min:0,max:0}),Qt=()=>({x:cb(),y:cb()}),sh={current:null},ET={current:!1};function sR(){if(ET.current=!0,!!Mh)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>sh.current=e.matches;e.addEventListener("change",t),t()}else sh.current=!1}const lR=new WeakMap;function uR(e,t,i){for(const o in t){const l=t[o],u=i[o];if(xe(l))e.addValue(o,l);else if(xe(u))e.addValue(o,jr(l,{owner:e}));else if(u!==l)if(e.hasValue(o)){const f=e.getValue(o);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=e.getStaticValue(o);e.addValue(o,jr(f!==void 0?f:l,{owner:e}))}}for(const o in i)t[o]===void 0&&e.removeValue(o);return t}const fb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class cR{scrapeMotionValuesFromProps(t,i,o){return{}}constructor({parent:t,props:i,presenceContext:o,reducedMotionConfig:l,blockInitialAnimation:u,visualState:f},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Zh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=Ue.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,Lt.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=f;this.latestValues=p,this.baseTarget={...p},this.initialValues=i.initial?{...p}:{},this.renderState=m,this.parent=t,this.props=i,this.presenceContext=o,this.depth=t?t.depth+1:0,this.reducedMotionConfig=l,this.options=h,this.blockInitialAnimation=!!u,this.isControllingVariants=qu(i),this.isVariantNode=cT(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...y}=this.scrapeMotionValuesFromProps(i,{},this);for(const T in y){const x=y[T];p[T]!==void 0&&xe(x)&&x.set(p[T])}}mount(t){this.current=t,lR.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),ET.current||sR(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:sh.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Ja(this.notifyUpdate),Ja(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,i){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const o=Kr.has(t);o&&this.onBindTransform&&this.onBindTransform();const l=i.on("change",f=>{this.latestValues[t]=f,this.props.onUpdate&&Lt.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,t,i)),this.valueSubscriptions.set(t,()=>{l(),u&&u(),i.owner&&i.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in qr){const i=qr[t];if(!i)continue;const{isEnabled:o,Feature:l}=i;if(!this.features[t]&&l&&o(this.props)&&(this.features[t]=new l(this)),this.features[t]){const u=this.features[t];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<fb.length;o++){const l=fb[o];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const u="on"+l,f=t[u];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=uR(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){const o=this.values.get(t);i!==o&&(o&&this.removeValue(t),this.bindToMotionValue(t,i),this.values.set(t,i),this.latestValues[t]=i.get())}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let o=this.values.get(t);return o===void 0&&i!==void 0&&(o=jr(i===null?void 0:i,{owner:this}),this.addValue(t,o)),o}readValue(t,i){let o=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return o!=null&&(typeof o=="string"&&(b1(o)||T1(o))?o=parseFloat(o):!w5(o)&&ti.test(i)&&(o=eT(t,i)),this.setBaseTarget(t,xe(o)?o.get():o)),xe(o)?o.get():o}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const u=op(this.props,i,this.presenceContext?.custom);u&&(o=u[t])}if(i&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,t);return l!==void 0&&!xe(l)?l:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new Bh),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}scheduleRenderMicrotask(){Jh.render(this.render)}}class AT extends cR{constructor(){super(...arguments),this.KeyframeResolver=c5}sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){return t.style?t.style[i]:void 0}removeValueFromRenderState(t,{vars:i,style:o}){delete i[t],delete o[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;xe(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function RT(e,{style:t,vars:i},o,l){const u=e.style;let f;for(f in t)u[f]=t[f];l?.applyProjectionStyles(u,o);for(f in i)u.setProperty(f,i[f])}function fR(e){return window.getComputedStyle(e)}class dR extends AT{constructor(){super(...arguments),this.type="html",this.renderInstance=RT}readValueFromInstance(t,i){if(Kr.has(i))return this.projection?.isProjecting?Wd(i):CA(t,i);{const o=fR(t),l=(Hh(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:i}){return _T(t,i)}build(t,i,o){ap(t,i,o.transformTemplate)}scrapeMotionValuesFromProps(t,i,o){return sp(t,i,o)}}const OT=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function hR(e,t,i,o){RT(e,t,void 0,o);for(const l in t.attrs)e.setAttribute(OT.has(l)?l:lp(l),t.attrs[l])}class pR extends AT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qt}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(Kr.has(i)){const o=tT(i);return o&&o.default||0}return i=OT.has(i)?i:lp(i),t.getAttribute(i)}scrapeMotionValuesFromProps(t,i,o){return yT(t,i,o)}build(t,i,o){hT(t,i,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(t,i,o,l){hR(t,i,o,l)}mount(t){this.isSVGTag=mT(t.tagName),super.mount(t)}}const mR=(e,t)=>rp(e)?new pR(t):new dR(t,{allowProjection:e!==D.Fragment});function Ur(e,t,i){const o=e.getProps();return op(o,t,i!==void 0?i:o.custom,e)}const lh=e=>Array.isArray(e);function gR(e,t,i){e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,jr(i))}function yR(e){return lh(e)?e[e.length-1]||0:e}function bR(e,t){const i=Ur(e,t);let{transitionEnd:o={},transition:l={},...u}=i||{};u={...u,...o};for(const f in u){const h=yR(u[f]);gR(e,f,h)}}function vR(e){return!!(xe(e)&&e.add)}function uh(e,t){const i=e.getValue("willChange");if(vR(i))return i.add(t);if(!i&&da.WillChange){const o=new da.WillChange("auto");e.addValue("willChange",o),o.add(t)}}function CT(e){return e.props[bT]}const TR=e=>e!==null;function SR(e,{repeat:t,repeatType:i="loop"},o){const l=e.filter(TR),u=t&&i!=="loop"&&t%2===1?0:l.length-1;return l[u]}const xR={type:"spring",stiffness:500,damping:25,restSpeed:10},wR=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),_R={type:"keyframes",duration:.8},ER={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},AR=(e,{keyframes:t})=>t.length>2?_R:Kr.has(e)?e.startsWith("scale")?wR(t[1]):xR:ER;function RR({when:e,delay:t,delayChildren:i,staggerChildren:o,staggerDirection:l,repeat:u,repeatType:f,repeatDelay:h,from:p,elapsed:m,...g}){return!!Object.keys(g).length}const up=(e,t,i,o={},l,u)=>f=>{const h=Qh(o,e)||{},p=h.delay||o.delay||0;let{elapsed:m=0}=o;m=m-Ln(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...h,delay:-m,onUpdate:T=>{t.set(T),h.onUpdate&&h.onUpdate(T)},onComplete:()=>{f(),h.onComplete&&h.onComplete()},name:e,motionValue:t,element:u?void 0:l};RR(h)||Object.assign(g,AR(e,g)),g.duration&&(g.duration=Ln(g.duration)),g.repeatDelay&&(g.repeatDelay=Ln(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(ah(g),g.delay===0&&(y=!0)),(da.instantAnimations||da.skipAnimations)&&(y=!0,ah(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,y&&!u&&t.get()!==void 0){const T=SR(g.keyframes,h);if(T!==void 0){Lt.update(()=>{g.onUpdate(T),g.onComplete()});return}}return h.isSync?new $h(g):new WA(g)};function OR({protectedKeys:e,needsAnimating:t},i){const o=e.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,o}function DT(e,t,{delay:i=0,transitionOverride:o,type:l}={}){let{transition:u=e.getDefaultTransition(),transitionEnd:f,...h}=t;o&&(u=o);const p=[],m=l&&e.animationState&&e.animationState.getState()[l];for(const g in h){const y=e.getValue(g,e.latestValues[g]??null),T=h[g];if(T===void 0||m&&OR(m,g))continue;const x={delay:i,...Qh(u||{},g)},_=y.get();if(_!==void 0&&!y.isAnimating&&!Array.isArray(T)&&T===_&&!x.velocity)continue;let A=!1;if(window.MotionHandoffAnimation){const R=CT(e);if(R){const L=window.MotionHandoffAnimation(R,g,Lt);L!==null&&(x.startTime=L,A=!0)}}uh(e,g),y.start(up(g,y,T,e.shouldReduceMotion&&Q1.has(g)?{type:!1}:x,e,A));const C=y.animation;C&&p.push(C)}return f&&Promise.all(p).then(()=>{Lt.update(()=>{f&&bR(e,f)})}),p}function kT(e,t,i,o=0,l=1){const u=Array.from(e).sort((m,g)=>m.sortNodePosition(g)).indexOf(t),f=e.size,h=(f-1)*o;return typeof i=="function"?i(u,f):l===1?u*o:h-u*o}function ch(e,t,i={}){const o=Ur(e,t,i.type==="exit"?e.presenceContext?.custom:void 0);let{transition:l=e.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(l=i.transitionOverride);const u=o?()=>Promise.all(DT(e,o,i)):()=>Promise.resolve(),f=e.variantChildren&&e.variantChildren.size?(p=0)=>{const{delayChildren:m=0,staggerChildren:g,staggerDirection:y}=l;return CR(e,t,p,m,g,y,i)}:()=>Promise.resolve(),{when:h}=l;if(h){const[p,m]=h==="beforeChildren"?[u,f]:[f,u];return p().then(()=>m())}else return Promise.all([u(),f(i.delay)])}function CR(e,t,i=0,o=0,l=0,u=1,f){const h=[];for(const p of e.variantChildren)p.notify("AnimationStart",t),h.push(ch(p,t,{...f,delay:i+(typeof o=="function"?0:o)+kT(e.variantChildren,p,o,l,u)}).then(()=>p.notify("AnimationComplete",t)));return Promise.all(h)}function DR(e,t,i={}){e.notify("AnimationStart",t);let o;if(Array.isArray(t)){const l=t.map(u=>ch(e,u,i));o=Promise.all(l)}else if(typeof t=="string")o=ch(e,t,i);else{const l=typeof t=="function"?Ur(e,t,i.custom):t;o=Promise.all(DT(e,l,i))}return o.then(()=>{e.notify("AnimationComplete",t)})}function MT(e,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==e.length)return!1;for(let o=0;o<i;o++)if(t[o]!==e[o])return!1;return!0}const kR=np.length;function NT(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?NT(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const t={};for(let i=0;i<kR;i++){const o=np[i],l=e.props[o];(Ts(l)||l===!1)&&(t[o]=l)}return t}const MR=[...ep].reverse(),NR=ep.length;function PR(e){return t=>Promise.all(t.map(({animation:i,options:o})=>DR(e,i,o)))}function IR(e){let t=PR(e),i=db(),o=!0;const l=p=>(m,g)=>{const y=Ur(e,g,p==="exit"?e.presenceContext?.custom:void 0);if(y){const{transition:T,transitionEnd:x,..._}=y;m={...m,..._,...x}}return m};function u(p){t=p(e)}function f(p){const{props:m}=e,g=NT(e.parent)||{},y=[],T=new Set;let x={},_=1/0;for(let C=0;C<NR;C++){const R=MR[C],L=i[R],U=m[R]!==void 0?m[R]:g[R],Y=Ts(U),j=R===p?L.isActive:null;j===!1&&(_=C);let W=U===g[R]&&U!==m[R]&&Y;if(W&&o&&e.manuallyAnimateOnMount&&(W=!1),L.protectedKeys={...x},!L.isActive&&j===null||!U&&!L.prevProp||ju(U)||typeof U=="boolean")continue;const at=LR(L.prevProp,U);let K=at||R===p&&L.isActive&&!W&&Y||C>_&&Y,rt=!1;const St=Array.isArray(U)?U:[U];let Ut=St.reduce(l(R),{});j===!1&&(Ut={});const{prevResolvedValues:Mt={}}=L,Wt={...Mt,...Ut},we=q=>{K=!0,T.has(q)&&(rt=!0,T.delete(q)),L.needsAnimating[q]=!0;const Q=e.getValue(q);Q&&(Q.liveStyle=!1)};for(const q in Wt){const Q=Ut[q],ht=Mt[q];if(x.hasOwnProperty(q))continue;let w=!1;lh(Q)&&lh(ht)?w=!MT(Q,ht):w=Q!==ht,w?Q!=null?we(q):T.add(q):Q!==void 0&&T.has(q)?we(q):L.protectedKeys[q]=!0}L.prevProp=U,L.prevResolvedValues=Ut,L.isActive&&(x={...x,...Ut}),o&&e.blockInitialAnimation&&(K=!1);const Nt=W&&at;K&&(!Nt||rt)&&y.push(...St.map(q=>{const Q={type:R};if(typeof q=="string"&&o&&!Nt&&e.manuallyAnimateOnMount&&e.parent){const{parent:ht}=e,w=Ur(ht,q);if(ht.enteringChildren&&w){const{delayChildren:V}=w.transition||{};Q.delay=kT(ht.enteringChildren,e,V)}}return{animation:q,options:Q}}))}if(T.size){const C={};if(typeof m.initial!="boolean"){const R=Ur(e,Array.isArray(m.initial)?m.initial[0]:m.initial);R&&R.transition&&(C.transition=R.transition)}T.forEach(R=>{const L=e.getBaseTarget(R),U=e.getValue(R);U&&(U.liveStyle=!0),C[R]=L??null}),y.push({animation:C})}let A=!!y.length;return o&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(A=!1),o=!1,A?t(y):Promise.resolve()}function h(p,m){if(i[p].isActive===m)return Promise.resolve();e.variantChildren?.forEach(y=>y.animationState?.setActive(p,m)),i[p].isActive=m;const g=f(p);for(const y in i)i[y].protectedKeys={};return g}return{animateChanges:f,setActive:h,setAnimateFunction:u,getState:()=>i,reset:()=>{i=db()}}}function LR(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!MT(t,e):!1}function _i(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function db(){return{animate:_i(!0),whileInView:_i(),whileHover:_i(),whileTap:_i(),whileDrag:_i(),whileFocus:_i(),exit:_i()}}class ei{constructor(t){this.isMounted=!1,this.node=t}update(){}}class UR extends ei{constructor(t){super(t),t.animationState||(t.animationState=IR(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();ju(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let BR=0;class zR extends ei{constructor(){super(...arguments),this.id=BR++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const l=this.node.animationState.setActive("exit",!t);i&&!t&&l.then(()=>{i(this.id)})}mount(){const{register:t,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const VR={animation:{Feature:UR},exit:{Feature:zR}};function xs(e,t,i,o={passive:!0}){return e.addEventListener(t,i,o),()=>e.removeEventListener(t,i)}function Ms(e){return{point:{x:e.pageX,y:e.pageY}}}const HR=e=>t=>tp(t)&&e(t,Ms(t));function us(e,t,i,o){return xs(e,t,HR(i),o)}const PT=1e-4,jR=1-PT,qR=1+PT,IT=.01,FR=0-IT,GR=0+IT;function Ce(e){return e.max-e.min}function YR(e,t,i){return Math.abs(e-t)<=i}function hb(e,t,i,o=.5){e.origin=o,e.originPoint=zt(t.min,t.max,e.origin),e.scale=Ce(i)/Ce(t),e.translate=zt(i.min,i.max,e.origin)-e.originPoint,(e.scale>=jR&&e.scale<=qR||isNaN(e.scale))&&(e.scale=1),(e.translate>=FR&&e.translate<=GR||isNaN(e.translate))&&(e.translate=0)}function cs(e,t,i,o){hb(e.x,t.x,i.x,o?o.originX:void 0),hb(e.y,t.y,i.y,o?o.originY:void 0)}function pb(e,t,i){e.min=i.min+t.min,e.max=e.min+Ce(t)}function XR(e,t,i){pb(e.x,t.x,i.x),pb(e.y,t.y,i.y)}function mb(e,t,i){e.min=t.min-i.min,e.max=e.min+Ce(t)}function fs(e,t,i){mb(e.x,t.x,i.x),mb(e.y,t.y,i.y)}function sn(e){return[e("x"),e("y")]}const LT=({current:e})=>e?e.ownerDocument.defaultView:null,gb=(e,t)=>Math.abs(e-t);function KR(e,t){const i=gb(e.x,t.x),o=gb(e.y,t.y);return Math.sqrt(i**2+o**2)}class UT{constructor(t,i,{transformPagePoint:o,contextWindow:l=window,dragSnapToOrigin:u=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=Ed(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,_=KR(T.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!_)return;const{point:A}=T,{timestamp:C}=be;this.history.push({...A,timestamp:C});const{onStart:R,onMove:L}=this.handlers;x||(R&&R(this.lastMoveEvent,T),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,T)},this.handlePointerMove=(T,x)=>{this.lastMoveEvent=T,this.lastMoveEventInfo=_d(x,this.transformPagePoint),Lt.update(this.updatePoint,!0)},this.handlePointerUp=(T,x)=>{this.end();const{onEnd:_,onSessionEnd:A,resumeAnimation:C}=this.handlers;if(this.dragSnapToOrigin&&C&&C(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=Ed(T.type==="pointercancel"?this.lastMoveEventInfo:_d(x,this.transformPagePoint),this.history);this.startEvent&&_&&_(T,R),A&&A(T,R)},!tp(t))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=o,this.distanceThreshold=f,this.contextWindow=l||window;const h=Ms(t),p=_d(h,this.transformPagePoint),{point:m}=p,{timestamp:g}=be;this.history=[{...m,timestamp:g}];const{onSessionStart:y}=i;y&&y(t,Ed(p,this.history)),this.removeListeners=Cs(us(this.contextWindow,"pointermove",this.handlePointerMove),us(this.contextWindow,"pointerup",this.handlePointerUp),us(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ja(this.updatePoint)}}function _d(e,t){return t?{point:t(e.point)}:e}function yb(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ed({point:e},t){return{point:e,delta:yb(e,BT(t)),offset:yb(e,$R(t)),velocity:ZR(t,.1)}}function $R(e){return e[0]}function BT(e){return e[e.length-1]}function ZR(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,o=null;const l=BT(e);for(;i>=0&&(o=e[i],!(l.timestamp-o.timestamp>Ln(t)));)i--;if(!o)return{x:0,y:0};const u=ln(l.timestamp-o.timestamp);if(u===0)return{x:0,y:0};const f={x:(l.x-o.x)/u,y:(l.y-o.y)/u};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function QR(e,{min:t,max:i},o){return t!==void 0&&e<t?e=o?zt(t,e,o.min):Math.max(e,t):i!==void 0&&e>i&&(e=o?zt(i,e,o.max):Math.min(e,i)),e}function bb(e,t,i){return{min:t!==void 0?e.min+t:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function WR(e,{top:t,left:i,bottom:o,right:l}){return{x:bb(e.x,i,l),y:bb(e.y,t,o)}}function vb(e,t){let i=t.min-e.min,o=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,o]=[o,i]),{min:i,max:o}}function JR(e,t){return{x:vb(e.x,t.x),y:vb(e.y,t.y)}}function tO(e,t){let i=.5;const o=Ce(e),l=Ce(t);return l>o?i=ys(t.min,t.max-o,e.min):o>l&&(i=ys(e.min,e.max-l,t.min)),fa(0,1,i)}function eO(e,t){const i={};return t.min!==void 0&&(i.min=t.min-e.min),t.max!==void 0&&(i.max=t.max-e.min),i}const fh=.35;function nO(e=fh){return e===!1?e=0:e===!0&&(e=fh),{x:Tb(e,"left","right"),y:Tb(e,"top","bottom")}}function Tb(e,t,i){return{min:Sb(e,t),max:Sb(e,i)}}function Sb(e,t){return typeof e=="number"?e:e[t]||0}const aO=new WeakMap;class iO{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:i=!1,distanceThreshold:o}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const u=y=>{const{dragSnapToOrigin:T}=this.getProps();T?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Ms(y).point)},f=(y,T)=>{const{drag:x,dragPropagation:_,onDragStart:A}=this.getProps();if(x&&!_&&(this.openDragLock&&this.openDragLock(),this.openDragLock=m5(x),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=T,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),sn(R=>{let L=this.getAxisMotionValue(R).get()||0;if(Un.test(L)){const{projection:U}=this.visualElement;if(U&&U.layout){const Y=U.layout.layoutBox[R];Y&&(L=Ce(Y)*(parseFloat(L)/100))}}this.originPoint[R]=L}),A&&Lt.postRender(()=>A(y,T)),uh(this.visualElement,"transform");const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},h=(y,T)=>{this.latestPointerEvent=y,this.latestPanInfo=T;const{dragPropagation:x,dragDirectionLock:_,onDirectionLock:A,onDrag:C}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:R}=T;if(_&&this.currentDirection===null){this.currentDirection=rO(R),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",T.point,R),this.updateAxis("y",T.point,R),this.visualElement.render(),C&&C(y,T)},p=(y,T)=>{this.latestPointerEvent=y,this.latestPanInfo=T,this.stop(y,T),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>sn(y=>this.getAnimationState(y)==="paused"&&this.getAxisMotionValue(y).animation?.play()),{dragSnapToOrigin:g}=this.getProps();this.panSession=new UT(t,{onSessionStart:u,onStart:f,onMove:h,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:o,contextWindow:LT(this.visualElement)})}stop(t,i){const o=t||this.latestPointerEvent,l=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!l||!o)return;const{velocity:f}=l;this.startAnimation(f);const{onDragEnd:h}=this.getProps();h&&Lt.postRender(()=>h(o,l))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(t,i,o){const{drag:l}=this.getProps();if(!o||!au(t,l,this.currentDirection))return;const u=this.getAxisMotionValue(t);let f=this.originPoint[t]+o[t];this.constraints&&this.constraints[t]&&(f=QR(f,this.constraints[t],this.elastic[t])),u.set(f)}resolveConstraints(){const{dragConstraints:t,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,l=this.constraints;t&&Mr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=WR(o.layoutBox,t):this.constraints=!1,this.elastic=nO(i),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&sn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=eO(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!Mr(t))return!1;const o=t.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const u=oR(o,l.root,this.visualElement.getTransformPagePoint());let f=JR(l.layout.layoutBox,u);if(i){const h=i(aR(f));this.hasMutatedConstraints=!!h,h&&(f=ST(h))}return f}startAnimation(t){const{drag:i,dragMomentum:o,dragElastic:l,dragTransition:u,dragSnapToOrigin:f,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},m=sn(g=>{if(!au(g,i,this.currentDirection))return;let y=p&&p[g]||{};f&&(y={min:0,max:0});const T=l?200:1e6,x=l?40:1e7,_={type:"inertia",velocity:o?t[g]:0,bounceStiffness:T,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...u,...y};return this.startAxisValueAnimation(g,_)});return Promise.all(m).then(h)}startAxisValueAnimation(t,i){const o=this.getAxisMotionValue(t);return uh(this.visualElement,t),o.start(up(t,o,0,i,this.visualElement,!1))}stopAnimation(){sn(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){sn(t=>this.getAxisMotionValue(t).animation?.pause())}getAnimationState(t){return this.getAxisMotionValue(t).animation?.state}getAxisMotionValue(t){const i=`_drag${t.toUpperCase()}`,o=this.visualElement.getProps(),l=o[i];return l||this.visualElement.getValue(t,(o.initial?o.initial[t]:void 0)||0)}snapToCursor(t){sn(i=>{const{drag:o}=this.getProps();if(!au(i,o,this.currentDirection))return;const{projection:l}=this.visualElement,u=this.getAxisMotionValue(i);if(l&&l.layout){const{min:f,max:h}=l.layout.layoutBox[i];u.set(t[i]-zt(f,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!Mr(i)||!o||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};sn(f=>{const h=this.getAxisMotionValue(f);if(h&&this.constraints!==!1){const p=h.get();l[f]=tO({min:p,max:p},this.constraints[f])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),sn(f=>{if(!au(f,t,null))return;const h=this.getAxisMotionValue(f),{min:p,max:m}=this.constraints[f];h.set(zt(p,m,l[f]))})}addListeners(){if(!this.visualElement.current)return;aO.set(this.visualElement,this);const t=this.visualElement.current,i=us(t,"pointerdown",p=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(p)}),o=()=>{const{dragConstraints:p}=this.getProps();Mr(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,u=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Lt.read(o);const f=xs(window,"resize",()=>this.scalePositionWithinConstraints()),h=l.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(sn(g=>{const y=this.getAxisMotionValue(g);y&&(this.originPoint[g]+=p[g].translate,y.set(y.get()+p[g].translate))}),this.visualElement.render())}));return()=>{f(),i(),u(),h&&h()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:l=!1,dragConstraints:u=!1,dragElastic:f=fh,dragMomentum:h=!0}=t;return{...t,drag:i,dragDirectionLock:o,dragPropagation:l,dragConstraints:u,dragElastic:f,dragMomentum:h}}}function au(e,t,i){return(t===!0||t===e)&&(i===null||i===e)}function rO(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}class oO extends ei{constructor(t){super(t),this.removeGroupControls=un,this.removeListeners=un,this.controls=new iO(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||un}unmount(){this.removeGroupControls(),this.removeListeners()}}const xb=e=>(t,i)=>{e&&Lt.postRender(()=>e(t,i))};class sO extends ei{constructor(){super(...arguments),this.removePointerDownListener=un}onPointerDown(t){this.session=new UT(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:LT(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:o,onPanEnd:l}=this.node.getProps();return{onSessionStart:xb(t),onStart:xb(i),onMove:o,onEnd:(u,f)=>{delete this.session,l&&Lt.postRender(()=>l(u,f))}}}mount(){this.removePointerDownListener=us(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const mu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function wb(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ts={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(ft.test(e))e=parseFloat(e);else return e;const i=wb(e,t.target.x),o=wb(e,t.target.y);return`${i}% ${o}%`}},lO={correct:(e,{treeScale:t,projectionDelta:i})=>{const o=e,l=ti.parse(e);if(l.length>5)return o;const u=ti.createTransformer(e),f=typeof l[0]!="number"?1:0,h=i.x.scale*t.x,p=i.y.scale*t.y;l[0+f]/=h,l[1+f]/=p;const m=zt(h,p,.5);return typeof l[2+f]=="number"&&(l[2+f]/=m),typeof l[3+f]=="number"&&(l[3+f]/=m),u(l)}};let Ad=!1;class uO extends D.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:o,layoutId:l}=this.props,{projection:u}=t;k5(cO),u&&(i.group&&i.group.add(u),o&&o.register&&l&&o.register(u),Ad&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),mu.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:o,drag:l,isPresent:u}=this.props,{projection:f}=o;return f&&(f.isPresent=u,Ad=!0,l||t.layoutDependency!==i||i===void 0||t.isPresent!==u?f.willUpdate():this.safeToRemove(),t.isPresent!==u&&(u?f.promote():f.relegate()||Lt.postRender(()=>{const h=f.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Jh.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:l}=t;Ad=!0,l&&(l.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(l),o&&o.deregister&&o.deregister(l))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function zT(e){const[t,i]=_5(),o=D.useContext(y1);return X.jsx(uO,{...e,layoutGroup:o,switchLayoutGroup:D.useContext(vT),isPresent:t,safeToRemove:i})}const cO={borderRadius:{...ts,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ts,borderTopRightRadius:ts,borderBottomLeftRadius:ts,borderBottomRightRadius:ts,boxShadow:lO};function fO(e,t,i){const o=xe(e)?e:jr(e);return o.start(up("",o,t,i)),o.animation}const dO=(e,t)=>e.depth-t.depth;class hO{constructor(){this.children=[],this.isDirty=!1}add(t){Ph(this.children,t),this.isDirty=!0}remove(t){Ih(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(dO),this.isDirty=!1,this.children.forEach(t)}}function pO(e,t){const i=Ue.now(),o=({timestamp:l})=>{const u=l-i;u>=t&&(Ja(o),e(u-t))};return Lt.setup(o,!0),()=>Ja(o)}const VT=["TopLeft","TopRight","BottomLeft","BottomRight"],mO=VT.length,_b=e=>typeof e=="string"?parseFloat(e):e,Eb=e=>typeof e=="number"||ft.test(e);function gO(e,t,i,o,l,u){l?(e.opacity=zt(0,i.opacity??1,yO(o)),e.opacityExit=zt(t.opacity??1,0,bO(o))):u&&(e.opacity=zt(t.opacity??1,i.opacity??1,o));for(let f=0;f<mO;f++){const h=`border${VT[f]}Radius`;let p=Ab(t,h),m=Ab(i,h);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||Eb(p)===Eb(m)?(e[h]=Math.max(zt(_b(p),_b(m),o),0),(Un.test(m)||Un.test(p))&&(e[h]+="%")):e[h]=m}(t.rotate||i.rotate)&&(e.rotate=zt(t.rotate||0,i.rotate||0,o))}function Ab(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const yO=HT(0,.5,O1),bO=HT(.5,.95,un);function HT(e,t,i){return o=>o<e?0:o>t?1:i(ys(e,t,o))}function Rb(e,t){e.min=t.min,e.max=t.max}function on(e,t){Rb(e.x,t.x),Rb(e.y,t.y)}function Ob(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Cb(e,t,i,o,l){return e-=t,e=Ru(e,1/i,o),l!==void 0&&(e=Ru(e,1/l,o)),e}function vO(e,t=0,i=1,o=.5,l,u=e,f=e){if(Un.test(t)&&(t=parseFloat(t),t=zt(f.min,f.max,t/100)-f.min),typeof t!="number")return;let h=zt(u.min,u.max,o);e===u&&(h-=t),e.min=Cb(e.min,t,i,h,l),e.max=Cb(e.max,t,i,h,l)}function Db(e,t,[i,o,l],u,f){vO(e,t[i],t[o],t[l],t.scale,u,f)}const TO=["x","scaleX","originX"],SO=["y","scaleY","originY"];function kb(e,t,i,o){Db(e.x,t,TO,i?i.x:void 0,o?o.x:void 0),Db(e.y,t,SO,i?i.y:void 0,o?o.y:void 0)}function Mb(e){return e.translate===0&&e.scale===1}function jT(e){return Mb(e.x)&&Mb(e.y)}function Nb(e,t){return e.min===t.min&&e.max===t.max}function xO(e,t){return Nb(e.x,t.x)&&Nb(e.y,t.y)}function Pb(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function qT(e,t){return Pb(e.x,t.x)&&Pb(e.y,t.y)}function Ib(e){return Ce(e.x)/Ce(e.y)}function Lb(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class wO{constructor(){this.members=[]}add(t){Ph(this.members,t),t.scheduleRender()}remove(t){if(Ih(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){const i=this.members.findIndex(l=>t===l);if(i===0)return!1;let o;for(let l=i;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1){o=u;break}}return o?(this.promote(o),!0):!1}promote(t,i){const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,i&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:l}=t.options;l===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:i,resumingFrom:o}=t;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function _O(e,t,i){let o="";const l=e.x.translate/t.x,u=e.y.translate/t.y,f=i?.z||0;if((l||u||f)&&(o=`translate3d(${l}px, ${u}px, ${f}px) `),(t.x!==1||t.y!==1)&&(o+=`scale(${1/t.x}, ${1/t.y}) `),i){const{transformPerspective:m,rotate:g,rotateX:y,rotateY:T,skewX:x,skewY:_}=i;m&&(o=`perspective(${m}px) ${o}`),g&&(o+=`rotate(${g}deg) `),y&&(o+=`rotateX(${y}deg) `),T&&(o+=`rotateY(${T}deg) `),x&&(o+=`skewX(${x}deg) `),_&&(o+=`skewY(${_}deg) `)}const h=e.x.scale*t.x,p=e.y.scale*t.y;return(h!==1||p!==1)&&(o+=`scale(${h}, ${p})`),o||"none"}const Rd=["","X","Y","Z"],EO=1e3;let AO=0;function Od(e,t,i,o){const{latestValues:l}=t;l[e]&&(i[e]=l[e],t.setStaticValue(e,0),o&&(o[e]=0))}function FT(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const i=CT(t);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:l,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",Lt,!(l||u))}const{parent:o}=e;o&&!o.hasCheckedOptimisedAppear&&FT(o)}function GT({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:o,resetTransform:l}){return class{constructor(f={},h=t?.()){this.id=AO++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(CO),this.nodes.forEach(NO),this.nodes.forEach(PO),this.nodes.forEach(DO)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new hO)}addEventListener(f,h){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Bh),this.eventHandlers.get(f).add(h)}notifyListeners(f,...h){const p=this.eventHandlers.get(f);p&&p.notify(...h)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=oT(f)&&!S5(f),this.instance=f;const{layoutId:h,layout:p,visualElement:m}=this.options;if(m&&!m.current&&m.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),e){let g,y=0;const T=()=>this.root.updateBlockedByResize=!1;Lt.read(()=>{y=window.innerWidth}),e(f,()=>{const x=window.innerWidth;x!==y&&(y=x,this.root.updateBlockedByResize=!0,g&&g(),g=pO(T,250),mu.hasAnimatedSinceResize&&(mu.hasAnimatedSinceResize=!1,this.nodes.forEach(zb)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&m&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:y,hasRelativeLayoutChanged:T,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||m.getDefaultTransition()||zO,{onLayoutAnimationStart:A,onLayoutAnimationComplete:C}=m.getProps(),R=!this.targetLayout||!qT(this.targetLayout,x),L=!y&&T;if(this.options.layoutRoot||this.resumeFrom||L||y&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const U={...Qh(_,"layout"),onPlay:A,onComplete:C};(m.shouldReduceMotion||this.options.layoutRoot)&&(U.delay=0,U.type=!1),this.startAnimation(U),this.setAnimationOrigin(g,L)}else y||zb(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ja(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(IO),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&FT(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ub);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Bb);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(MO),this.nodes.forEach(RO),this.nodes.forEach(OO)):this.nodes.forEach(Bb),this.clearAllSnapshots();const h=Ue.now();be.delta=fa(0,1e3/60,h-be.timestamp),be.timestamp=h,be.isProcessing=!0,gd.update.process(be),gd.preRender.process(be),gd.render.process(be),be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Jh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(kO),this.sharedNodes.forEach(LO)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Lt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Lt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ce(this.snapshot.measuredBox.x)&&!Ce(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(h=!1),h&&this.instance){const p=o(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!jT(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;f&&this.instance&&(h||Ei(this.latestValues)||g)&&(l(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return f&&(p=this.removeTransform(p)),VO(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return Qt();const h=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(HO))){const{scroll:m}=this.root;m&&(Nr(h.x,m.offset.x),Nr(h.y,m.offset.y))}return h}removeElementScroll(f){const h=Qt();if(on(h,f),this.scroll?.wasRoot)return h;for(let p=0;p<this.path.length;p++){const m=this.path[p],{scroll:g,options:y}=m;m!==this.root&&g&&y.layoutScroll&&(g.wasRoot&&on(h,f),Nr(h.x,g.offset.x),Nr(h.y,g.offset.y))}return h}applyTransform(f,h=!1){const p=Qt();on(p,f);for(let m=0;m<this.path.length;m++){const g=this.path[m];!h&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Pr(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Ei(g.latestValues)&&Pr(p,g.latestValues)}return Ei(this.latestValues)&&Pr(p,this.latestValues),p}removeTransform(f){const h=Qt();on(h,f);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!Ei(m.latestValues))continue;rh(m.latestValues)&&m.updateSnapshot();const g=Qt(),y=m.measurePageBox();on(g,y),kb(h,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return Ei(this.latestValues)&&kb(h,this.latestValues),h}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!(!this.layout||!(g||y))){if(this.resolvedRelativeTargetAt=be.timestamp,!this.targetDelta&&!this.relativeTarget){const T=this.getClosestProjectingParent();T&&T.layout&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),fs(this.relativeTargetOrigin,this.layout.layoutBox,T.layout.layoutBox),on(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qt(),this.targetWithTransforms=Qt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),XR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):on(this.target,this.layout.layoutBox),wT(this.target,this.targetDelta)):on(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const T=this.getClosestProjectingParent();T&&!!T.resumingFrom==!!this.resumingFrom&&!T.options.layoutScroll&&T.target&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),fs(this.relativeTargetOrigin,this.target,T.target),on(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||rh(this.parent.latestValues)||xT(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),h=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===be.timestamp&&(p=!1),p)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;on(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,T=this.treeScale.y;rR(this.layoutCorrected,this.treeScale,this.path,h),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Qt());const{target:x}=f;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ob(this.prevProjectionDelta.x,this.projectionDelta.x),Ob(this.prevProjectionDelta.y,this.projectionDelta.y)),cs(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==T||!Lb(this.projectionDelta.x,this.prevProjectionDelta.x)||!Lb(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ir(),this.projectionDelta=Ir(),this.projectionDeltaWithTransform=Ir()}setAnimationOrigin(f,h=!1){const p=this.snapshot,m=p?p.latestValues:{},g={...this.latestValues},y=Ir();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const T=Qt(),x=p?p.source:void 0,_=this.layout?this.layout.source:void 0,A=x!==_,C=this.getStack(),R=!C||C.members.length<=1,L=!!(A&&!R&&this.options.crossfade===!0&&!this.path.some(BO));this.animationProgress=0;let U;this.mixTargetDelta=Y=>{const j=Y/1e3;Vb(y.x,f.x,j),Vb(y.y,f.y,j),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fs(T,this.layout.layoutBox,this.relativeParent.layout.layoutBox),UO(this.relativeTarget,this.relativeTargetOrigin,T,j),U&&xO(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=Qt()),on(U,this.relativeTarget)),A&&(this.animationValues=g,gO(g,m,this.latestValues,j,L,R)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Ja(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Lt.update(()=>{mu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=jr(0)),this.currentAnimation=fO(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:h=>{this.mixTargetDelta(h),f.onUpdate&&f.onUpdate(h)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(EO),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:h,target:p,layout:m,latestValues:g}=f;if(!(!h||!p||!m)){if(this!==f&&this.layout&&m&&YT(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||Qt();const y=Ce(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+y;const T=Ce(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+T}on(h,p),Pr(h,g),cs(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(f,h){this.sharedNodes.has(f)||this.sharedNodes.set(f,new wO),this.sharedNodes.get(f).add(h);const m=h.options.initialPromotionConfig;h.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(h):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:h,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let h=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const m={};p.z&&Od("z",f,m,this.animationValues);for(let g=0;g<Rd.length;g++)Od(`rotate${Rd[g]}`,f,m,this.animationValues),Od(`skew${Rd[g]}`,f,m,this.animationValues);f.render();for(const g in m)f.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);f.scheduleRender()}applyProjectionStyles(f,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=pu(h?.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=pu(h?.pointerEvents)||""),this.hasProjected&&!Ei(this.latestValues)&&(f.transform=p?p({},""):"none",this.hasProjected=!1);return}f.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let y=_O(this.projectionDeltaWithTransform,this.treeScale,g);p&&(y=p(g,y)),f.transform=y;const{x:T,y:x}=this.projectionDelta;f.transformOrigin=`${T.origin*100}% ${x.origin*100}% 0`,m.animationValues?f.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:f.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const _ in Ss){if(g[_]===void 0)continue;const{correct:A,applyTo:C,isCSSVariable:R}=Ss[_],L=y==="none"?g[_]:A(g[_],m);if(C){const U=C.length;for(let Y=0;Y<U;Y++)f[C[Y]]=L}else R?this.options.visualElement.renderState.vars[_]=L:f[_]=L}this.options.layoutId&&(f.pointerEvents=m===this?pu(h?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Ub),this.root.sharedNodes.clear()}}}function RO(e){e.updateLayout()}function OO(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=e.layout,{animationType:l}=e.options,u=t.source!==e.layout.source;l==="size"?sn(g=>{const y=u?t.measuredBox[g]:t.layoutBox[g],T=Ce(y);y.min=i[g].min,y.max=y.min+T}):YT(l,t.layoutBox,i)&&sn(g=>{const y=u?t.measuredBox[g]:t.layoutBox[g],T=Ce(i[g]);y.max=y.min+T,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[g].max=e.relativeTarget[g].min+T)});const f=Ir();cs(f,i,t.layoutBox);const h=Ir();u?cs(h,e.applyTransform(o,!0),t.measuredBox):cs(h,i,t.layoutBox);const p=!jT(f);let m=!1;if(!e.resumeFrom){const g=e.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:y,layout:T}=g;if(y&&T){const x=Qt();fs(x,t.layoutBox,y.layoutBox);const _=Qt();fs(_,i,T.layoutBox),qT(x,_)||(m=!0),g.options.layoutRoot&&(e.relativeTarget=_,e.relativeTargetOrigin=x,e.relativeParent=g)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:h,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:m})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function CO(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function DO(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function kO(e){e.clearSnapshot()}function Ub(e){e.clearMeasurements()}function Bb(e){e.isLayoutDirty=!1}function MO(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function zb(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function NO(e){e.resolveTargetDelta()}function PO(e){e.calcProjection()}function IO(e){e.resetSkewAndRotation()}function LO(e){e.removeLeadSnapshot()}function Vb(e,t,i){e.translate=zt(t.translate,0,i),e.scale=zt(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function Hb(e,t,i,o){e.min=zt(t.min,i.min,o),e.max=zt(t.max,i.max,o)}function UO(e,t,i,o){Hb(e.x,t.x,i.x,o),Hb(e.y,t.y,i.y,o)}function BO(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const zO={duration:.45,ease:[.4,0,.1,1]},jb=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),qb=jb("applewebkit/")&&!jb("chrome/")?Math.round:un;function Fb(e){e.min=qb(e.min),e.max=qb(e.max)}function VO(e){Fb(e.x),Fb(e.y)}function YT(e,t,i){return e==="position"||e==="preserve-aspect"&&!YR(Ib(t),Ib(i),.2)}function HO(e){return e!==e.root&&e.scroll?.wasRoot}const jO=GT({attachResizeListener:(e,t)=>xs(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Cd={current:void 0},XT=GT({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Cd.current){const e=new jO({});e.mount(window),e.setOptions({layoutScroll:!0}),Cd.current=e}return Cd.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),qO={pan:{Feature:sO},drag:{Feature:oO,ProjectionNode:XT,MeasureLayout:zT}};function Gb(e,t,i){const{props:o}=e;e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",i==="Start");const l="onHover"+i,u=o[l];u&&Lt.postRender(()=>u(t,Ms(t)))}class FO extends ei{mount(){const{current:t}=this.node;t&&(this.unmount=g5(t,(i,o)=>(Gb(this.node,o,"Start"),l=>Gb(this.node,l,"End"))))}unmount(){}}class GO extends ei{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Cs(xs(this.node.current,"focus",()=>this.onFocus()),xs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Yb(e,t,i){const{props:o}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&o.whileTap&&e.animationState.setActive("whileTap",i==="Start");const l="onTap"+(i==="End"?"":i),u=o[l];u&&Lt.postRender(()=>u(t,Ms(t)))}class YO extends ei{mount(){const{current:t}=this.node;t&&(this.unmount=T5(t,(i,o)=>(Yb(this.node,o,"Start"),(l,{success:u})=>Yb(this.node,l,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const dh=new WeakMap,Dd=new WeakMap,XO=e=>{const t=dh.get(e.target);t&&t(e)},KO=e=>{e.forEach(XO)};function $O({root:e,...t}){const i=e||document;Dd.has(i)||Dd.set(i,{});const o=Dd.get(i),l=JSON.stringify(t);return o[l]||(o[l]=new IntersectionObserver(KO,{root:e,...t})),o[l]}function ZO(e,t,i){const o=$O(t);return dh.set(e,i),o.observe(e),()=>{dh.delete(e),o.unobserve(e)}}const QO={some:0,all:1};class WO extends ei{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:i,margin:o,amount:l="some",once:u}=t,f={root:i?i.current:void 0,rootMargin:o,threshold:typeof l=="number"?l:QO[l]},h=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,u&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),T=m?g:y;T&&T(p)};return ZO(this.node.current,f,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(JO(t,i))&&this.startObserver()}unmount(){}}function JO({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}const tC={inView:{Feature:WO},tap:{Feature:YO},focus:{Feature:GO},hover:{Feature:FO}},eC={layout:{ProjectionNode:XT,MeasureLayout:zT}},nC={...VR,...tC,...qO,...eC},ds=nR(nC,mR);function se(e,t){t===void 0&&(t={});var i=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",i==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}se(`.react-loading-indicator-normalize,
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
}`);var bn=function(){return bn=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var l in t=arguments[i])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},bn.apply(this,arguments)};function Ou(e){return Ou=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ou(e)}var aC=/^\s+/,iC=/\s+$/;function nt(e,t){if(t=t||{},(e=e||"")instanceof nt)return e;if(!(this instanceof nt))return new nt(e,t);var i=(function(o){var l={r:0,g:0,b:0},u=1,f=null,h=null,p=null,m=!1,g=!1;typeof o=="string"&&(o=(function(_){_=_.replace(aC,"").replace(iC,"").toLowerCase();var A,C=!1;if(hh[_])_=hh[_],C=!0;else if(_=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(A=gn.rgb.exec(_))?{r:A[1],g:A[2],b:A[3]}:(A=gn.rgba.exec(_))?{r:A[1],g:A[2],b:A[3],a:A[4]}:(A=gn.hsl.exec(_))?{h:A[1],s:A[2],l:A[3]}:(A=gn.hsla.exec(_))?{h:A[1],s:A[2],l:A[3],a:A[4]}:(A=gn.hsv.exec(_))?{h:A[1],s:A[2],v:A[3]}:(A=gn.hsva.exec(_))?{h:A[1],s:A[2],v:A[3],a:A[4]}:(A=gn.hex8.exec(_))?{r:Ge(A[1]),g:Ge(A[2]),b:Ge(A[3]),a:Wb(A[4]),format:C?"name":"hex8"}:(A=gn.hex6.exec(_))?{r:Ge(A[1]),g:Ge(A[2]),b:Ge(A[3]),format:C?"name":"hex"}:(A=gn.hex4.exec(_))?{r:Ge(A[1]+""+A[1]),g:Ge(A[2]+""+A[2]),b:Ge(A[3]+""+A[3]),a:Wb(A[4]+""+A[4]),format:C?"name":"hex8"}:(A=gn.hex3.exec(_))?{r:Ge(A[1]+""+A[1]),g:Ge(A[2]+""+A[2]),b:Ge(A[3]+""+A[3]),format:C?"name":"hex"}:!1})(o)),Ou(o)=="object"&&(oa(o.r)&&oa(o.g)&&oa(o.b)?(y=o.r,T=o.g,x=o.b,l={r:255*It(y,255),g:255*It(T,255),b:255*It(x,255)},m=!0,g=String(o.r).substr(-1)==="%"?"prgb":"rgb"):oa(o.h)&&oa(o.s)&&oa(o.v)?(f=is(o.s),h=is(o.v),l=(function(_,A,C){_=6*It(_,360),A=It(A,100),C=It(C,100);var R=Math.floor(_),L=_-R,U=C*(1-A),Y=C*(1-L*A),j=C*(1-(1-L)*A),W=R%6,at=[C,Y,U,U,j,C][W],K=[j,C,C,Y,U,U][W],rt=[U,U,j,C,C,Y][W];return{r:255*at,g:255*K,b:255*rt}})(o.h,f,h),m=!0,g="hsv"):oa(o.h)&&oa(o.s)&&oa(o.l)&&(f=is(o.s),p=is(o.l),l=(function(_,A,C){var R,L,U;function Y(at,K,rt){return rt<0&&(rt+=1),rt>1&&(rt-=1),rt<1/6?at+6*(K-at)*rt:rt<.5?K:rt<2/3?at+(K-at)*(2/3-rt)*6:at}if(_=It(_,360),A=It(A,100),C=It(C,100),A===0)R=L=U=C;else{var j=C<.5?C*(1+A):C+A-C*A,W=2*C-j;R=Y(W,j,_+1/3),L=Y(W,j,_),U=Y(W,j,_-1/3)}return{r:255*R,g:255*L,b:255*U}})(o.h,f,p),m=!0,g="hsl"),o.hasOwnProperty("a")&&(u=o.a));var y,T,x;return u=KT(u),{ok:m,format:o.format||g,r:Math.min(255,Math.max(l.r,0)),g:Math.min(255,Math.max(l.g,0)),b:Math.min(255,Math.max(l.b,0)),a:u}})(e);this._originalInput=e,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||i.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function Xb(e,t,i){e=It(e,255),t=It(t,255),i=It(i,255);var o,l,u=Math.max(e,t,i),f=Math.min(e,t,i),h=(u+f)/2;if(u==f)o=l=0;else{var p=u-f;switch(l=h>.5?p/(2-u-f):p/(u+f),u){case e:o=(t-i)/p+(t<i?6:0);break;case t:o=(i-e)/p+2;break;case i:o=(e-t)/p+4}o/=6}return{h:o,s:l,l:h}}function Kb(e,t,i){e=It(e,255),t=It(t,255),i=It(i,255);var o,l,u=Math.max(e,t,i),f=Math.min(e,t,i),h=u,p=u-f;if(l=u===0?0:p/u,u==f)o=0;else{switch(u){case e:o=(t-i)/p+(t<i?6:0);break;case t:o=(i-e)/p+2;break;case i:o=(e-t)/p+4}o/=6}return{h:o,s:l,v:h}}function $b(e,t,i,o){var l=[Tn(Math.round(e).toString(16)),Tn(Math.round(t).toString(16)),Tn(Math.round(i).toString(16))];return o&&l[0].charAt(0)==l[0].charAt(1)&&l[1].charAt(0)==l[1].charAt(1)&&l[2].charAt(0)==l[2].charAt(1)?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0):l.join("")}function Zb(e,t,i,o){return[Tn($T(o)),Tn(Math.round(e).toString(16)),Tn(Math.round(t).toString(16)),Tn(Math.round(i).toString(16))].join("")}function rC(e,t){t=t===0?0:t||10;var i=nt(e).toHsl();return i.s-=t/100,i.s=Fu(i.s),nt(i)}function oC(e,t){t=t===0?0:t||10;var i=nt(e).toHsl();return i.s+=t/100,i.s=Fu(i.s),nt(i)}function sC(e){return nt(e).desaturate(100)}function lC(e,t){t=t===0?0:t||10;var i=nt(e).toHsl();return i.l+=t/100,i.l=Fu(i.l),nt(i)}function uC(e,t){t=t===0?0:t||10;var i=nt(e).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-t/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-t/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-t/100*255))),nt(i)}function cC(e,t){t=t===0?0:t||10;var i=nt(e).toHsl();return i.l-=t/100,i.l=Fu(i.l),nt(i)}function fC(e,t){var i=nt(e).toHsl(),o=(i.h+t)%360;return i.h=o<0?360+o:o,nt(i)}function dC(e){var t=nt(e).toHsl();return t.h=(t.h+180)%360,nt(t)}function Qb(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var i=nt(e).toHsl(),o=[nt(e)],l=360/t,u=1;u<t;u++)o.push(nt({h:(i.h+u*l)%360,s:i.s,l:i.l}));return o}function hC(e){var t=nt(e).toHsl(),i=t.h;return[nt(e),nt({h:(i+72)%360,s:t.s,l:t.l}),nt({h:(i+216)%360,s:t.s,l:t.l})]}function pC(e,t,i){t=t||6,i=i||30;var o=nt(e).toHsl(),l=360/i,u=[nt(e)];for(o.h=(o.h-(l*t>>1)+720)%360;--t;)o.h=(o.h+l)%360,u.push(nt(o));return u}function mC(e,t){t=t||6;for(var i=nt(e).toHsv(),o=i.h,l=i.s,u=i.v,f=[],h=1/t;t--;)f.push(nt({h:o,s:l,v:u})),u=(u+h)%1;return f}nt.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,i,o=this.toRgb();return e=o.r/255,t=o.g/255,i=o.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(e){return this._a=KT(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Kb(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Kb(this._r,this._g,this._b),t=Math.round(360*e.h),i=Math.round(100*e.s),o=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+i+"%, "+o+"%)":"hsva("+t+", "+i+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var e=Xb(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Xb(this._r,this._g,this._b),t=Math.round(360*e.h),i=Math.round(100*e.s),o=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+i+"%, "+o+"%)":"hsla("+t+", "+i+"%, "+o+"%, "+this._roundA+")"},toHex:function(e){return $b(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return(function(t,i,o,l,u){var f=[Tn(Math.round(t).toString(16)),Tn(Math.round(i).toString(16)),Tn(Math.round(o).toString(16)),Tn($T(l))];return u&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")})(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*It(this._r,255))+"%",g:Math.round(100*It(this._g,255))+"%",b:Math.round(100*It(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*It(this._r,255))+"%, "+Math.round(100*It(this._g,255))+"%, "+Math.round(100*It(this._b,255))+"%)":"rgba("+Math.round(100*It(this._r,255))+"%, "+Math.round(100*It(this._g,255))+"%, "+Math.round(100*It(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(gC[$b(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+Zb(this._r,this._g,this._b,this._a),i=t,o=this._gradientType?"GradientType = 1, ":"";if(e){var l=nt(e);i="#"+Zb(l._r,l._g,l._b,l._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+t+",endColorstr="+i+")"},toString:function(e){var t=!!e;e=e||this._format;var i=!1,o=this._a<1&&this._a>=0;return t||!o||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return nt(this.toString())},_applyModification:function(e,t){var i=e.apply(null,[this].concat([].slice.call(t)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(lC,arguments)},brighten:function(){return this._applyModification(uC,arguments)},darken:function(){return this._applyModification(cC,arguments)},desaturate:function(){return this._applyModification(rC,arguments)},saturate:function(){return this._applyModification(oC,arguments)},greyscale:function(){return this._applyModification(sC,arguments)},spin:function(){return this._applyModification(fC,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(pC,arguments)},complement:function(){return this._applyCombination(dC,arguments)},monochromatic:function(){return this._applyCombination(mC,arguments)},splitcomplement:function(){return this._applyCombination(hC,arguments)},triad:function(){return this._applyCombination(Qb,[3])},tetrad:function(){return this._applyCombination(Qb,[4])}},nt.fromRatio=function(e,t){if(Ou(e)=="object"){var i={};for(var o in e)e.hasOwnProperty(o)&&(i[o]=o==="a"?e[o]:is(e[o]));e=i}return nt(e,t)},nt.equals=function(e,t){return!(!e||!t)&&nt(e).toRgbString()==nt(t).toRgbString()},nt.random=function(){return nt.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},nt.mix=function(e,t,i){i=i===0?0:i||50;var o=nt(e).toRgb(),l=nt(t).toRgb(),u=i/100;return nt({r:(l.r-o.r)*u+o.r,g:(l.g-o.g)*u+o.g,b:(l.b-o.b)*u+o.b,a:(l.a-o.a)*u+o.a})},nt.readability=function(e,t){var i=nt(e),o=nt(t);return(Math.max(i.getLuminance(),o.getLuminance())+.05)/(Math.min(i.getLuminance(),o.getLuminance())+.05)},nt.isReadable=function(e,t,i){var o,l,u=nt.readability(e,t);switch(l=!1,(o=(function(f){var h,p;return h=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(f.size||"small").toLowerCase(),h!=="AA"&&h!=="AAA"&&(h="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:h,size:p}})(i)).level+o.size){case"AAsmall":case"AAAlarge":l=u>=4.5;break;case"AAlarge":l=u>=3;break;case"AAAsmall":l=u>=7}return l},nt.mostReadable=function(e,t,i){var o,l,u,f,h=null,p=0;l=(i=i||{}).includeFallbackColors,u=i.level,f=i.size;for(var m=0;m<t.length;m++)(o=nt.readability(e,t[m]))>p&&(p=o,h=nt(t[m]));return nt.isReadable(e,h,{level:u,size:f})||!l?h:(i.includeFallbackColors=!1,nt.mostReadable(e,["#fff","#000"],i))};var hh=nt.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},gC=nt.hexNames=(function(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t})(hh);function KT(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function It(e,t){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(e)&&(e="100%");var i=(function(o){return typeof o=="string"&&o.indexOf("%")!=-1})(e);return e=Math.min(t,Math.max(0,parseFloat(e))),i&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function Fu(e){return Math.min(1,Math.max(0,e))}function Ge(e){return parseInt(e,16)}function Tn(e){return e.length==1?"0"+e:""+e}function is(e){return e<=1&&(e=100*e+"%"),e}function $T(e){return Math.round(255*parseFloat(e)).toString(16)}function Wb(e){return Ge(e)/255}var ja,iu,ru,gn=(iu="[\\s|\\(]+("+(ja="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ja+")[,|\\s]+("+ja+")\\s*\\)?",ru="[\\s|\\(]+("+ja+")[,|\\s]+("+ja+")[,|\\s]+("+ja+")[,|\\s]+("+ja+")\\s*\\)?",{CSS_UNIT:new RegExp(ja),rgb:new RegExp("rgb"+iu),rgba:new RegExp("rgba"+ru),hsl:new RegExp("hsl"+iu),hsla:new RegExp("hsla"+ru),hsv:new RegExp("hsv"+iu),hsva:new RegExp("hsva"+ru),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function oa(e){return!!gn.CSS_UNIT.exec(e)}var yC=function(e,t){var i=(typeof e=="string"?parseInt(e):e)||0;if(i>=-5&&i<=5){var o=i,l=parseFloat(t),u=l+o*(l/5)*-1;return(u==0||u<=Number.EPSILON)&&(u=.1),{animationPeriod:u+"s"}}return{animationPeriod:t}},bC=function(e,t){var i=e||{},o="";switch(t){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var l={};if(i.fontSize){var u=i.fontSize;l=(function(f,h){var p={};for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&h.indexOf(m)<0&&(p[m]=f[m]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(m=Object.getOwnPropertySymbols(f);g<m.length;g++)h.indexOf(m[g])<0&&Object.prototype.propertyIsEnumerable.call(f,m[g])&&(p[m[g]]=f[m[g]])}return p})(i,["fontSize"]),o=u}return{fontSize:o,styles:l}},vC={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},TC=function(e){var t=e.className,i=e.text,o=e.textColor,l=e.staticText,u=e.style;return i?G.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:bn(bn(bn({},l&&vC),o&&{color:o,mixBlendMode:"unset"}),u&&u)},typeof i=="string"&&i.length?i:"loading"):null},ZT="rgb(50, 205, 50)";function SC(e,t){if(t===void 0&&(t=0),e.length===0)throw new Error("Input array cannot be empty!");var i=[];return(function o(l,u){return u===void 0&&(u=0),i.push.apply(i,l),i.length<u&&o(i,u),i.slice(0,u)})(e,t)}se(`.atom-rli-bounding-box {
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
}`);nt(ZT).toRgb();Array.from({length:4},(function(e,t){return"--atom-phase".concat(t+1,"-rgb")}));se(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--commet-phase".concat(t+1,"-color")}));se(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")}));function kd(e){return e&&e.Math===Math&&e}se(`.OP-dotted-rli-bounding-box {
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
}`);kd(typeof window=="object"&&window)||kd(typeof self=="object"&&self)||kd(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")}));se(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")}));se(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")}));se(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]}));se(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--four-square-phase".concat(t+1,"-color")}));se(`.mosaic-rli-bounding-box {
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
}`);var Dr=Array.from({length:4},(function(e,t){return"--mosaic-phase".concat(t+1,"-color")})),Jb=function(e){var t,i=bC(e?.style,e?.size),o=i.styles,l=i.fontSize,u=e?.easing,f=yC(e?.speedPlus,"1.5s").animationPeriod,h=Math.round(parseFloat(f)/9*100)/100;h+="s";var p=(function(m){var g={};if(m instanceof Array){for(var y=SC(m,Dr.length),T=0;T<y.length&&!(T>=4);T++)g[Dr[T]]=y[T];return g}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<Dr.length;x++)g[Dr[x]]=m}catch(_){for(_ instanceof Error?console.warn("[".concat(_.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m)," received in <Mosaic /> indicator cannot be processed. Using default instead!")),x=0;x<Dr.length;x++)g[Dr[x]]=ZT}return g})((t=e?.color)!==null&&t!==void 0?t:"");return G.createElement("span",{className:"rli-d-i-b  mosaic-rli-bounding-box",style:bn(bn(bn(bn(bn({},l&&{fontSize:l}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),p),o),role:"status","aria-live":"polite","aria-label":"Loading"},G.createElement("span",{className:"rli-d-i-b mosaic-indicator",style:bn({},h&&{"--mosaic-skip-interval":h})},G.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube1"}),G.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube2"}),G.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube3"}),G.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube4"}),G.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube5"}),G.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube6"}),G.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube7"}),G.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube8"}),G.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube9"})),G.createElement(TC,{staticText:!0,text:e?.text,textColor:e?.textColor}))};se(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--riple-phase".concat(t+1,"-color")}));se(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")}));se(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")}));se(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--TD-bob-phase".concat(t+1,"-color")}));se(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")}));se(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--shape-phase".concat(t+1,"-color")}));se(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--trophySpin-phase".concat(t+1,"-color")}));se(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--slab-phase".concat(t+1,"-color")}));se(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--life-line-phase".concat(t+1,"-color")}));function xC({onUploadFile:e,onUploadImage:t,isLoading:i}){const o=Rh(),[l,u]=D.useState(X.jsx(Iy,{size:48,color:"white",style:{position:"absolute"}})),[f,h]=D.useState(X.jsx(Iy,{size:48,color:"white",style:{position:"absolute"}})),[p,m]=D.useState(!1),[g,y]=D.useState(!1);async function T(_){u(X.jsx(Jb,{color:"white",size:"medium",text:"",textColor:"",style:{alignSelf:"center"}}));const A=await w2(_,u,e);A&&m(!0),A&&g&&o("/viewer")}async function x(_){h(X.jsx(Jb,{color:"white",size:"medium",text:"",textColor:"",style:{alignSelf:"center"}}));const A=await _2(_,h,t);A&&y(!0),A&&p&&o("/viewer")}return X.jsxs(ds.div,{className:"container",initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.7},children:[X.jsx("div",{className:"divisor"}),X.jsxs("div",{className:"collum",children:[X.jsx("h2",{children:"Insira o modelo da construção"}),X.jsxs(ds.div,{whileHover:{scale:1.03},whileTap:{scale:.97},className:"select-box",children:[X.jsx("label",{htmlFor:"file_upload"}),X.jsx("input",{type:"file",id:"file_upload",onChange:T}),X.jsx("div",{className:"icon-container",children:l})]})]}),X.jsx("div",{className:"divisor"}),X.jsxs("div",{className:"collum",children:[X.jsx("h2",{children:"Insira a foto da construção"}),X.jsxs(ds.div,{whileHover:{scale:1.03},whileTap:{scale:.97},className:"select-box",children:[X.jsx("label",{htmlFor:"img_upload"}),X.jsx("input",{type:"file",id:"img_upload",onChange:x}),X.jsx("div",{className:"icon-container",children:f})]})]}),X.jsx("div",{className:"divisor"})]})}function wC({urn:e,imageUrl:t,screenshotUrl:i,setScreenshotUrl:o}){const l=D.useRef(null),[u,f]=D.useState(null),[h,p]=D.useState(!1),[m,g]=D.useState(null);D.useEffect(()=>{const T={env:"AutodeskProduction",getAccessToken(x,_){fetch("https://pii-6-sem.onrender.com/api/token").then(async A=>{const C=await A.text();try{const R=JSON.parse(C);R.access_token?x(R.access_token,R.expires_in):(console.error("Token inválido:",R),_&&_("Token inválido"))}catch{console.error("Resposta inesperada do servidor:",C),_&&_("Resposta inesperada do servidor")}})}};return Autodesk.Viewing.Initializer(T,()=>{const x=new Autodesk.Viewing.GuiViewer3D(l.current);x.start(),g(x),console.log("Viewer inicializado!"),e&&Autodesk.Viewing.Document.load("urn:"+e,_=>{const A=_.getRoot().getDefaultGeometry();x.loadDocumentNode(_,A).then(()=>{console.log("Modelo carregado com sucesso!")})},_=>console.error("Erro ao carregar documento:",_))}),()=>m&&m.finish()},[e]);async function y(){if(!m){alert("Viewer ainda não foi inicializado!");return}if(!t){alert("Envie uma imagem antes de comparar!");return}p(!0),f(null),m.getScreenShot(800,600,async T=>{try{o(T),console.log("Screenshot capturado!");const x=new FormData,_=await fetch(t).then(L=>L.blob()),A=await fetch(T).then(L=>L.blob());x.append("img1",_,"imagem1.jpg"),x.append("img2",A,"imagem2.jpg");const R=await(await fetch("https://pii-6-sem.onrender.com/api/compare",{method:"POST",body:x})).json();R.similarity?(f(R.similarity),console.log("Resultado da comparação:",R.similarity)):console.error("Falha ao obter similaridade:",R)}catch(x){console.error("Erro ao comparar imagens:",x)}finally{p(!1)}})}return X.jsxs("div",{style:{textAlign:"center"},children:[X.jsx("div",{className:"viewer-container",style:{height:"600px",border:"1px solid #ccc",borderRadius:"10px",overflow:"hidden"},children:X.jsx("div",{ref:l,className:"viewer",style:{height:"100%",width:"100%"}})}),t&&X.jsxs("div",{style:{marginTop:"25px"},children:[X.jsx("h4",{children:"Imagem enviada:"}),X.jsx("img",{src:t,alt:"Imagem enviada",style:{maxWidth:"400px",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0.3)"}})]}),i&&X.jsxs("div",{style:{marginTop:"25px"},children:[X.jsx("h4",{children:"Último screenshot:"}),X.jsx("img",{src:i,alt:"Screenshot do modelo",style:{maxWidth:"500px",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0.3)"}})]}),X.jsx("div",{style:{marginTop:"30px"},children:X.jsx("button",{onClick:y,disabled:!t||h,style:{padding:"12px 25px",background:"#4caf50",color:"white",border:"none",borderRadius:"8px",fontSize:"16px",cursor:"pointer"},children:h?"Comparando...":"Comparar Imagens"})}),u&&X.jsxs("div",{style:{marginTop:"40px"},children:[X.jsx("h3",{children:"Similaridade entre as imagens"}),X.jsx("div",{style:{width:"400px",height:"30px",borderRadius:"10px",background:"#ddd",margin:"0 auto",overflow:"hidden",position:"relative"},children:X.jsx("div",{style:{width:`${u.replace("%","")}%`,height:"100%",background:"linear-gradient(90deg, #4caf50, #8bc34a)",color:"white",fontWeight:"bold",lineHeight:"30px",transition:"width 1s ease-in-out"},children:u})})]})]})}const _C=()=>{};var tv={};/**
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
 */const QT=function(e){const t=[];let i=0;for(let o=0;o<e.length;o++){let l=e.charCodeAt(o);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&o+1<e.length&&(e.charCodeAt(o+1)&64512)===56320?(l=65536+((l&1023)<<10)+(e.charCodeAt(++o)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},EC=function(e){const t=[];let i=0,o=0;for(;i<e.length;){const l=e[i++];if(l<128)t[o++]=String.fromCharCode(l);else if(l>191&&l<224){const u=e[i++];t[o++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=e[i++],f=e[i++],h=e[i++],p=((l&7)<<18|(u&63)<<12|(f&63)<<6|h&63)-65536;t[o++]=String.fromCharCode(55296+(p>>10)),t[o++]=String.fromCharCode(56320+(p&1023))}else{const u=e[i++],f=e[i++];t[o++]=String.fromCharCode((l&15)<<12|(u&63)<<6|f&63)}}return t.join("")},WT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let l=0;l<e.length;l+=3){const u=e[l],f=l+1<e.length,h=f?e[l+1]:0,p=l+2<e.length,m=p?e[l+2]:0,g=u>>2,y=(u&3)<<4|h>>4;let T=(h&15)<<2|m>>6,x=m&63;p||(x=64,f||(T=64)),o.push(i[g],i[y],i[T],i[x])}return o.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(QT(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):EC(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let l=0;l<e.length;){const u=i[e.charAt(l++)],h=l<e.length?i[e.charAt(l)]:0;++l;const m=l<e.length?i[e.charAt(l)]:64;++l;const y=l<e.length?i[e.charAt(l)]:64;if(++l,u==null||h==null||m==null||y==null)throw new AC;const T=u<<2|h>>4;if(o.push(T),m!==64){const x=h<<4&240|m>>2;if(o.push(x),y!==64){const _=m<<6&192|y;o.push(_)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class AC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RC=function(e){const t=QT(e);return WT.encodeByteArray(t,!0)},JT=function(e){return RC(e).replace(/\./g,"")},tS=function(e){try{return WT.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function OC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const CC=()=>OC().__FIREBASE_DEFAULTS__,DC=()=>{if(typeof process>"u"||typeof tv>"u")return;const e=tv.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},kC=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&tS(e[1]);return t&&JSON.parse(t)},cp=()=>{try{return _C()||CC()||DC()||kC()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},MC=e=>cp()?.emulatorHosts?.[e],eS=()=>cp()?.config,nS=e=>cp()?.[`_${e}`];/**
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
 */class NC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,o)=>{i?this.reject(i):this.resolve(o),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,o))}}}/**
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
 */function Ns(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function PC(e){return(await fetch(e,{credentials:"include"})).ok}const hs={};function IC(){const e={prod:[],emulator:[]};for(const t of Object.keys(hs))hs[t]?e.emulator.push(t):e.prod.push(t);return e}function LC(e){let t=document.getElementById(e),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),i=!0),{created:i,element:t}}let ev=!1;function UC(e,t){if(typeof window>"u"||typeof document>"u"||!Ns(window.location.host)||hs[e]===t||hs[e]||ev)return;hs[e]=t;function i(T){return`__firebase__banner__${T}`}const o="__firebase__banner",u=IC().prod.length>0;function f(){const T=document.getElementById(o);T&&T.remove()}function h(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,x){T.setAttribute("width","24"),T.setAttribute("id",x),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function m(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{ev=!0,f()},T}function g(T,x){T.setAttribute("id",x),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function y(){const T=LC(o),x=i("text"),_=document.getElementById(x)||document.createElement("span"),A=i("learnmore"),C=document.getElementById(A)||document.createElement("a"),R=i("preprendIcon"),L=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const U=T.element;h(U),g(C,A);const Y=m();p(L,R),U.append(L,_,C,Y),document.body.appendChild(U)}u?(_.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function zC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aS(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function VC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HC(){const e=ke();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function iS(){try{return typeof indexedDB=="object"}catch{return!1}}function rS(){return new Promise((e,t)=>{try{let i=!0;const o="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(o);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(o),e(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{t(l.error?.message||"")}}catch(i){t(i)}})}function jC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const qC="FirebaseError";class En extends Error{constructor(t,i,o){super(i),this.code=t,this.customData=o,this.name=qC,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(t,i,o){this.service=t,this.serviceName=i,this.errors=o}create(t,...i){const o=i[0]||{},l=`${this.service}/${t}`,u=this.errors[t],f=u?FC(u,o):"Error",h=`${this.serviceName}: ${f} (${l}).`;return new En(l,h,o)}}function FC(e,t){return e.replace(GC,(i,o)=>{const l=t[o];return l!=null?String(l):`<${o}?>`})}const GC=/\{\$([^}]+)}/g;function YC(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ni(e,t){if(e===t)return!0;const i=Object.keys(e),o=Object.keys(t);for(const l of i){if(!o.includes(l))return!1;const u=e[l],f=t[l];if(nv(u)&&nv(f)){if(!Ni(u,f))return!1}else if(u!==f)return!1}for(const l of o)if(!i.includes(l))return!1;return!0}function nv(e){return e!==null&&typeof e=="object"}/**
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
 */function Ps(e){const t=[];for(const[i,o]of Object.entries(e))Array.isArray(o)?o.forEach(l=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(o));return t.length?"&"+t.join("&"):""}function rs(e){const t={};return e.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[l,u]=o.split("=");t[decodeURIComponent(l)]=decodeURIComponent(u)}}),t}function os(e){const t=e.indexOf("?");if(!t)return"";const i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}function XC(e,t){const i=new KC(e,t);return i.subscribe.bind(i)}class KC{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(o=>{this.error(o)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,o){let l;if(t===void 0&&i===void 0&&o===void 0)throw new Error("Missing Observer.");$C(t,["next","error","complete"])?l=t:l={next:t,error:i,complete:o},l.next===void 0&&(l.next=Md),l.error===void 0&&(l.error=Md),l.complete===void 0&&(l.complete=Md);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $C(e,t){if(typeof e!="object"||e===null)return!1;for(const i of t)if(i in e&&typeof e[i]=="function")return!0;return!1}function Md(){}/**
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
 */const ZC=1e3,QC=2,WC=14400*1e3,JC=.5;function av(e,t=ZC,i=QC){const o=t*Math.pow(i,e),l=Math.round(JC*o*(Math.random()-.5)*2);return Math.min(WC,o+l)}/**
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
 */function Ke(e){return e&&e._delegate?e._delegate:e}class wn{constructor(t,i,o){this.name=t,this.instanceFactory=i,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ai="[DEFAULT]";/**
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
 */class tD{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const o=new NC;if(this.instancesDeferred.set(i,o),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&o.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),o=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(nD(t))try{this.getOrInitializeService({instanceIdentifier:Ai})}catch{}for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:l});o.resolve(u)}catch{}}}}clearInstance(t=Ai){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ai){return this.instances.has(t)}getOptions(t=Ai){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:o,options:i});for(const[u,f]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(u);o===h&&f.resolve(l)}return l}onInit(t,i){const o=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(o)??new Set;l.add(t),this.onInitCallbacks.set(o,l);const u=this.instances.get(o);return u&&t(u,o),()=>{l.delete(t)}}invokeOnInitCallbacks(t,i){const o=this.onInitCallbacks.get(i);if(o)for(const l of o)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let o=this.instances.get(t);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:eD(t),options:i}),this.instances.set(t,o),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(o,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,o)}catch{}return o||null}normalizeInstanceIdentifier(t=Ai){return this.component?this.component.multipleInstances?t:Ai:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eD(e){return e===Ai?void 0:e}function nD(e){return e.instantiationMode==="EAGER"}/**
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
 */class aD{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new tD(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ct;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Ct||(Ct={}));const iD={debug:Ct.DEBUG,verbose:Ct.VERBOSE,info:Ct.INFO,warn:Ct.WARN,error:Ct.ERROR,silent:Ct.SILENT},rD=Ct.INFO,oD={[Ct.DEBUG]:"log",[Ct.VERBOSE]:"log",[Ct.INFO]:"info",[Ct.WARN]:"warn",[Ct.ERROR]:"error"},sD=(e,t,...i)=>{if(t<e.logLevel)return;const o=new Date().toISOString(),l=oD[t];if(l)console[l](`[${o}]  ${e.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fp{constructor(t){this.name=t,this._logLevel=rD,this._logHandler=sD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ct))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?iD[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ct.DEBUG,...t),this._logHandler(this,Ct.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ct.VERBOSE,...t),this._logHandler(this,Ct.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ct.INFO,...t),this._logHandler(this,Ct.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ct.WARN,...t),this._logHandler(this,Ct.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ct.ERROR,...t),this._logHandler(this,Ct.ERROR,...t)}}const lD=(e,t)=>t.some(i=>e instanceof i);let iv,rv;function uD(){return iv||(iv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cD(){return rv||(rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oS=new WeakMap,ph=new WeakMap,sS=new WeakMap,Nd=new WeakMap,dp=new WeakMap;function fD(e){const t=new Promise((i,o)=>{const l=()=>{e.removeEventListener("success",u),e.removeEventListener("error",f)},u=()=>{i(Za(e.result)),l()},f=()=>{o(e.error),l()};e.addEventListener("success",u),e.addEventListener("error",f)});return t.then(i=>{i instanceof IDBCursor&&oS.set(i,e)}).catch(()=>{}),dp.set(t,e),t}function dD(e){if(ph.has(e))return;const t=new Promise((i,o)=>{const l=()=>{e.removeEventListener("complete",u),e.removeEventListener("error",f),e.removeEventListener("abort",f)},u=()=>{i(),l()},f=()=>{o(e.error||new DOMException("AbortError","AbortError")),l()};e.addEventListener("complete",u),e.addEventListener("error",f),e.addEventListener("abort",f)});ph.set(e,t)}let mh={get(e,t,i){if(e instanceof IDBTransaction){if(t==="done")return ph.get(e);if(t==="objectStoreNames")return e.objectStoreNames||sS.get(e);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Za(e[t])},set(e,t,i){return e[t]=i,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function hD(e){mh=e(mh)}function pD(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const o=e.call(Pd(this),t,...i);return sS.set(o,t.sort?t.sort():[t]),Za(o)}:cD().includes(e)?function(...t){return e.apply(Pd(this),t),Za(oS.get(this))}:function(...t){return Za(e.apply(Pd(this),t))}}function mD(e){return typeof e=="function"?pD(e):(e instanceof IDBTransaction&&dD(e),lD(e,uD())?new Proxy(e,mh):e)}function Za(e){if(e instanceof IDBRequest)return fD(e);if(Nd.has(e))return Nd.get(e);const t=mD(e);return t!==e&&(Nd.set(e,t),dp.set(t,e)),t}const Pd=e=>dp.get(e);function lS(e,t,{blocked:i,upgrade:o,blocking:l,terminated:u}={}){const f=indexedDB.open(e,t),h=Za(f);return o&&f.addEventListener("upgradeneeded",p=>{o(Za(f.result),p.oldVersion,p.newVersion,Za(f.transaction),p)}),i&&f.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),h.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",m=>l(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const gD=["get","getKey","getAll","getAllKeys","count"],yD=["put","add","delete","clear"],Id=new Map;function ov(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Id.get(t))return Id.get(t);const i=t.replace(/FromIndex$/,""),o=t!==i,l=yD.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(l||gD.includes(i)))return;const u=async function(f,...h){const p=this.transaction(f,l?"readwrite":"readonly");let m=p.store;return o&&(m=m.index(h.shift())),(await Promise.all([m[i](...h),l&&p.done]))[0]};return Id.set(t,u),u}hD(e=>({...e,get:(t,i,o)=>ov(t,i)||e.get(t,i,o),has:(t,i)=>!!ov(t,i)||e.has(t,i)}));/**
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
 */class bD{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(vD(i)){const o=i.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(i=>i).join(" ")}}function vD(e){return e.getComponent()?.type==="VERSION"}const gh="@firebase/app",sv="0.14.4";/**
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
 */const ha=new fp("@firebase/app"),TD="@firebase/app-compat",SD="@firebase/analytics-compat",xD="@firebase/analytics",wD="@firebase/app-check-compat",_D="@firebase/app-check",ED="@firebase/auth",AD="@firebase/auth-compat",RD="@firebase/database",OD="@firebase/data-connect",CD="@firebase/database-compat",DD="@firebase/functions",kD="@firebase/functions-compat",MD="@firebase/installations",ND="@firebase/installations-compat",PD="@firebase/messaging",ID="@firebase/messaging-compat",LD="@firebase/performance",UD="@firebase/performance-compat",BD="@firebase/remote-config",zD="@firebase/remote-config-compat",VD="@firebase/storage",HD="@firebase/storage-compat",jD="@firebase/firestore",qD="@firebase/ai",FD="@firebase/firestore-compat",GD="firebase",YD="12.4.0";/**
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
 */const yh="[DEFAULT]",XD={[gh]:"fire-core",[TD]:"fire-core-compat",[xD]:"fire-analytics",[SD]:"fire-analytics-compat",[_D]:"fire-app-check",[wD]:"fire-app-check-compat",[ED]:"fire-auth",[AD]:"fire-auth-compat",[RD]:"fire-rtdb",[OD]:"fire-data-connect",[CD]:"fire-rtdb-compat",[DD]:"fire-fn",[kD]:"fire-fn-compat",[MD]:"fire-iid",[ND]:"fire-iid-compat",[PD]:"fire-fcm",[ID]:"fire-fcm-compat",[LD]:"fire-perf",[UD]:"fire-perf-compat",[BD]:"fire-rc",[zD]:"fire-rc-compat",[VD]:"fire-gcs",[HD]:"fire-gcs-compat",[jD]:"fire-fst",[FD]:"fire-fst-compat",[qD]:"fire-vertex","fire-js":"fire-js",[GD]:"fire-js-all"};/**
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
 */const Cu=new Map,KD=new Map,bh=new Map;function lv(e,t){try{e.container.addComponent(t)}catch(i){ha.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function Vn(e){const t=e.name;if(bh.has(t))return ha.debug(`There were multiple attempts to register component ${t}.`),!1;bh.set(t,e);for(const i of Cu.values())lv(i,e);for(const i of KD.values())lv(i,e);return!0}function $r(e,t){const i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}function vn(e){return e==null?!1:e.settings!==void 0}/**
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
 */const $D={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qa=new Vi("app","Firebase",$D);/**
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
 */class ZD{constructor(t,i,o){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qa.create("app-deleted",{appName:this._name})}}/**
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
 */const Zr=YD;function uS(e,t={}){let i=e;typeof t!="object"&&(t={name:t});const o={name:yh,automaticDataCollectionEnabled:!0,...t},l=o.name;if(typeof l!="string"||!l)throw Qa.create("bad-app-name",{appName:String(l)});if(i||(i=eS()),!i)throw Qa.create("no-options");const u=Cu.get(l);if(u){if(Ni(i,u.options)&&Ni(o,u.config))return u;throw Qa.create("duplicate-app",{appName:l})}const f=new aD(l);for(const p of bh.values())f.addComponent(p);const h=new ZD(i,o,f);return Cu.set(l,h),h}function cS(e=yh){const t=Cu.get(e);if(!t&&e===yh&&eS())return uS();if(!t)throw Qa.create("no-app",{appName:e});return t}function cn(e,t,i){let o=XD[e]??e;i&&(o+=`-${i}`);const l=o.match(/\s|\//),u=t.match(/\s|\//);if(l||u){const f=[`Unable to register library "${o}" with version "${t}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ha.warn(f.join(" "));return}Vn(new wn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const QD="firebase-heartbeat-database",WD=1,ws="firebase-heartbeat-store";let Ld=null;function fS(){return Ld||(Ld=lS(QD,WD,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ws)}catch(i){console.warn(i)}}}}).catch(e=>{throw Qa.create("idb-open",{originalErrorMessage:e.message})})),Ld}async function JD(e){try{const i=(await fS()).transaction(ws),o=await i.objectStore(ws).get(dS(e));return await i.done,o}catch(t){if(t instanceof En)ha.warn(t.message);else{const i=Qa.create("idb-get",{originalErrorMessage:t?.message});ha.warn(i.message)}}}async function uv(e,t){try{const o=(await fS()).transaction(ws,"readwrite");await o.objectStore(ws).put(t,dS(e)),await o.done}catch(i){if(i instanceof En)ha.warn(i.message);else{const o=Qa.create("idb-set",{originalErrorMessage:i?.message});ha.warn(o.message)}}}function dS(e){return`${e.name}!${e.options.appId}`}/**
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
 */const tk=1024,ek=30;class nk{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new ik(i),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=cv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>ek){const l=rk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){ha.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=cv(),{heartbeatsToSend:i,unsentEntries:o}=ak(this._heartbeatsCache.heartbeats),l=JT(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return ha.warn(t),""}}}function cv(){return new Date().toISOString().substring(0,10)}function ak(e,t=tk){const i=[];let o=e.slice();for(const l of e){const u=i.find(f=>f.agent===l.agent);if(u){if(u.dates.push(l.date),fv(i)>t){u.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),fv(i)>t){i.pop();break}o=o.slice(1)}return{heartbeatsToSend:i,unsentEntries:o}}class ik{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iS()?rS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await JD(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const o=await this.read();return uv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const o=await this.read();return uv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function fv(e){return JT(JSON.stringify({version:2,heartbeats:e})).length}function rk(e){if(e.length===0)return-1;let t=0,i=e[0].date;for(let o=1;o<e.length;o++)e[o].date<i&&(i=e[o].date,t=o);return t}/**
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
 */function ok(e){Vn(new wn("platform-logger",t=>new bD(t),"PRIVATE")),Vn(new wn("heartbeat",t=>new nk(t),"PRIVATE")),cn(gh,sv,e),cn(gh,sv,"esm2020"),cn("fire-js","")}ok("");function hS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sk=hS,pS=new Vi("auth","Firebase",hS());/**
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
 */const Du=new fp("@firebase/auth");function lk(e,...t){Du.logLevel<=Ct.WARN&&Du.warn(`Auth (${Zr}): ${e}`,...t)}function gu(e,...t){Du.logLevel<=Ct.ERROR&&Du.error(`Auth (${Zr}): ${e}`,...t)}/**
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
 */function _n(e,...t){throw hp(e,...t)}function Bn(e,...t){return hp(e,...t)}function mS(e,t,i){const o={...sk(),[t]:i};return new Vi("auth","Firebase",o).create(t,{appName:e.name})}function Wa(e){return mS(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hp(e,...t){if(typeof e!="string"){const i=t[0],o=[...t.slice(1)];return o[0]&&(o[0].appName=e.name),e._errorFactory.create(i,...o)}return pS.create(e,...t)}function ut(e,t,...i){if(!e)throw hp(t,...i)}function sa(e){const t="INTERNAL ASSERTION FAILED: "+e;throw gu(t),new Error(t)}function pa(e,t){e||sa(t)}/**
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
 */function vh(){return typeof self<"u"&&self.location?.href||""}function uk(){return dv()==="http:"||dv()==="https:"}function dv(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function ck(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uk()||aS()||"connection"in navigator)?navigator.onLine:!0}function fk(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Is{constructor(t,i){this.shortDelay=t,this.longDelay=i,pa(i>t,"Short delay should be less than long delay!"),this.isMobile=BC()||VC()}get(){return ck()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pp(e,t){pa(e.emulator,"Emulator should always be set here");const{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class gS{static initialize(t,i,o){this.fetchImpl=t,i&&(this.headersImpl=i),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sa("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sa("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sa("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pk=new Is(3e4,6e4);function Hi(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function ni(e,t,i,o,l={}){return yS(e,l,async()=>{let u={},f={};o&&(t==="GET"?f=o:u={body:JSON.stringify(o)});const h=Ps({key:e.config.apiKey,...f}).slice(1),p=await e._getAdditionalHeaders();p["Content-Type"]="application/json",e.languageCode&&(p["X-Firebase-Locale"]=e.languageCode);const m={method:t,headers:p,...u};return zC()||(m.referrerPolicy="no-referrer"),e.emulatorConfig&&Ns(e.emulatorConfig.host)&&(m.credentials="include"),gS.fetch()(await bS(e,e.config.apiHost,i,h),m)})}async function yS(e,t,i){e._canInitEmulator=!1;const o={...dk,...t};try{const l=new gk(e),u=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw ou(e,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const h=u.ok?f.errorMessage:f.error.message,[p,m]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ou(e,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw ou(e,"email-already-in-use",f);if(p==="USER_DISABLED")throw ou(e,"user-disabled",f);const g=o[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw mS(e,g,m);_n(e,g)}}catch(l){if(l instanceof En)throw l;_n(e,"network-request-failed",{message:String(l)})}}async function Gu(e,t,i,o,l={}){const u=await ni(e,t,i,o,l);return"mfaPendingCredential"in u&&_n(e,"multi-factor-auth-required",{_serverResponse:u}),u}async function bS(e,t,i,o){const l=`${t}${i}?${o}`,u=e,f=u.config.emulator?pp(e.config,l):`${e.config.apiScheme}://${l}`;return hk.includes(i)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function mk(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,o)=>{this.timer=setTimeout(()=>o(Bn(this.auth,"network-request-failed")),pk.get())})}}function ou(e,t,i){const o={appName:e.name};i.email&&(o.email=i.email),i.phoneNumber&&(o.phoneNumber=i.phoneNumber);const l=Bn(e,t,o);return l.customData._tokenResponse=i,l}function hv(e){return e!==void 0&&e.enterprise!==void 0}class yk{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return mk(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bk(e,t){return ni(e,"GET","/v2/recaptchaConfig",Hi(e,t))}/**
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
 */async function vk(e,t){return ni(e,"POST","/v1/accounts:delete",t)}async function ku(e,t){return ni(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ps(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Tk(e,t=!1){const i=Ke(e),o=await i.getIdToken(t),l=mp(o);ut(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,f=u?.sign_in_provider;return{claims:l,token:o,authTime:ps(Ud(l.auth_time)),issuedAtTime:ps(Ud(l.iat)),expirationTime:ps(Ud(l.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Ud(e){return Number(e)*1e3}function mp(e){const[t,i,o]=e.split(".");if(t===void 0||i===void 0||o===void 0)return gu("JWT malformed, contained fewer than 3 sections"),null;try{const l=tS(i);return l?JSON.parse(l):(gu("Failed to decode base64 JWT payload"),null)}catch(l){return gu("Caught error parsing JWT payload as JSON",l?.toString()),null}}function pv(e){const t=mp(e);return ut(t,"internal-error"),ut(typeof t.exp<"u","internal-error"),ut(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function _s(e,t,i=!1){if(i)return t;try{return await t}catch(o){throw o instanceof En&&Sk(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function Sk({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class xk{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Th{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=ps(this.lastLoginAt),this.creationTime=ps(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mu(e){const t=e.auth,i=await e.getIdToken(),o=await _s(e,ku(t,{idToken:i}));ut(o?.users.length,t,"internal-error");const l=o.users[0];e._notifyReloadListener(l);const u=l.providerUserInfo?.length?vS(l.providerUserInfo):[],f=_k(e.providerData,u),h=e.isAnonymous,p=!(e.email&&l.passwordHash)&&!f?.length,m=h?p:!1,g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Th(l.createdAt,l.lastLoginAt),isAnonymous:m};Object.assign(e,g)}async function wk(e){const t=Ke(e);await Mu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _k(e,t){return[...e.filter(o=>!t.some(l=>l.providerId===o.providerId)),...t]}function vS(e){return e.map(({providerId:t,...i})=>({providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
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
 */async function Ek(e,t){const i=await yS(e,{},async()=>{const o=Ps({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:u}=e.config,f=await bS(e,l,"/v1/token",`key=${u}`),h=await e._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:h,body:o};return e.emulatorConfig&&Ns(e.emulatorConfig.host)&&(p.credentials="include"),gS.fetch()(f,p)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Ak(e,t){return ni(e,"POST","/v2/accounts:revokeToken",Hi(e,t))}/**
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
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ut(t.idToken,"internal-error"),ut(typeof t.idToken<"u","internal-error"),ut(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):pv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){ut(t.length!==0,"internal-error");const i=pv(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ut(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:o,refreshToken:l,expiresIn:u}=await Ek(t,i);this.updateTokensAndExpiration(o,l,Number(u))}updateTokensAndExpiration(t,i,o){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(t,i){const{refreshToken:o,accessToken:l,expirationTime:u}=i,f=new Br;return o&&(ut(typeof o=="string","internal-error",{appName:t}),f.refreshToken=o),l&&(ut(typeof l=="string","internal-error",{appName:t}),f.accessToken=l),u&&(ut(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return sa("not implemented")}}/**
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
 */function qa(e,t){ut(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Sn{constructor({uid:t,auth:i,stsTokenManager:o,...l}){this.providerId="firebase",this.proactiveRefresh=new xk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Th(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const i=await _s(this,this.stsTokenManager.getToken(this.auth,t));return ut(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return Tk(this,t)}reload(){return wk(this)}_assign(t){this!==t&&(ut(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>({...i})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Sn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(t){ut(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let o=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),o=!0),i&&await Mu(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Wa(this.auth));const t=await this.getIdToken();return await _s(this,vk(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){const o=i.displayName??void 0,l=i.email??void 0,u=i.phoneNumber??void 0,f=i.photoURL??void 0,h=i.tenantId??void 0,p=i._redirectEventId??void 0,m=i.createdAt??void 0,g=i.lastLoginAt??void 0,{uid:y,emailVerified:T,isAnonymous:x,providerData:_,stsTokenManager:A}=i;ut(y&&A,t,"internal-error");const C=Br.fromJSON(this.name,A);ut(typeof y=="string",t,"internal-error"),qa(o,t.name),qa(l,t.name),ut(typeof T=="boolean",t,"internal-error"),ut(typeof x=="boolean",t,"internal-error"),qa(u,t.name),qa(f,t.name),qa(h,t.name),qa(p,t.name),qa(m,t.name),qa(g,t.name);const R=new Sn({uid:y,auth:t,email:l,emailVerified:T,displayName:o,isAnonymous:x,photoURL:f,phoneNumber:u,tenantId:h,stsTokenManager:C,createdAt:m,lastLoginAt:g});return _&&Array.isArray(_)&&(R.providerData=_.map(L=>({...L}))),p&&(R._redirectEventId=p),R}static async _fromIdTokenResponse(t,i,o=!1){const l=new Br;l.updateFromServerResponse(i);const u=new Sn({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:o});return await Mu(u),u}static async _fromGetAccountInfoResponse(t,i,o){const l=i.users[0];ut(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?vS(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!u?.length,h=new Br;h.updateFromIdToken(o);const p=new Sn({uid:l.localId,auth:t,stsTokenManager:h,isAnonymous:f}),m={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Th(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!u?.length};return Object.assign(p,m),p}}/**
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
 */const mv=new Map;function la(e){pa(e instanceof Function,"Expected a class definition");let t=mv.get(e);return t?(pa(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,mv.set(e,t),t)}/**
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
 */class TS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}TS.type="NONE";const gv=TS;/**
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
 */function yu(e,t,i){return`firebase:${e}:${t}:${i}`}class zr{constructor(t,i,o){this.persistence=t,this.auth=i,this.userKey=o;const{config:l,name:u}=this.auth;this.fullUserKey=yu(this.userKey,l.apiKey,u),this.fullPersistenceKey=yu("persistence",l.apiKey,u),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await ku(this.auth,{idToken:t}).catch(()=>{});return i?Sn._fromGetAccountInfoResponse(this.auth,i,t):null}return Sn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,o="authUser"){if(!i.length)return new zr(la(gv),t,o);const l=(await Promise.all(i.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let u=l[0]||la(gv);const f=yu(o,t.config.apiKey,t.name);let h=null;for(const m of i)try{const g=await m._get(f);if(g){let y;if(typeof g=="string"){const T=await ku(t,{idToken:g}).catch(()=>{});if(!T)break;y=await Sn._fromGetAccountInfoResponse(t,T,g)}else y=Sn._fromJSON(t,g);m!==u&&(h=y),u=m;break}}catch{}const p=l.filter(m=>m._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new zr(u,t,o):(u=p[0],h&&await u._set(f,h.toJSON()),await Promise.all(i.map(async m=>{if(m!==u)try{await m._remove(f)}catch{}})),new zr(u,t,o))}}/**
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
 */function yv(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_S(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(SS(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(AS(t))return"Blackberry";if(RS(t))return"Webos";if(xS(t))return"Safari";if((t.includes("chrome/")||wS(t))&&!t.includes("edge/"))return"Chrome";if(ES(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=e.match(i);if(o?.length===2)return o[1]}return"Other"}function SS(e=ke()){return/firefox\//i.test(e)}function xS(e=ke()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wS(e=ke()){return/crios\//i.test(e)}function _S(e=ke()){return/iemobile/i.test(e)}function ES(e=ke()){return/android/i.test(e)}function AS(e=ke()){return/blackberry/i.test(e)}function RS(e=ke()){return/webos/i.test(e)}function gp(e=ke()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Rk(e=ke()){return gp(e)&&!!window.navigator?.standalone}function Ok(){return HC()&&document.documentMode===10}function OS(e=ke()){return gp(e)||ES(e)||RS(e)||AS(e)||/windows phone/i.test(e)||_S(e)}/**
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
 */function CS(e,t=[]){let i;switch(e){case"Browser":i=yv(ke());break;case"Worker":i=`${yv(ke())}-${e}`;break;default:i=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${Zr}/${o}`}/**
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
 */class Ck{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const o=u=>new Promise((f,h)=>{try{const p=t(u);f(p)}catch(p){h(p)}});o.onAbort=i,this.queue.push(o);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const o of this.queue)await o(t),o.onAbort&&i.push(o.onAbort)}catch(o){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o?.message})}}}/**
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
 */async function Dk(e,t={}){return ni(e,"GET","/v2/passwordPolicy",Hi(e,t))}/**
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
 */const kk=6;class Mk{constructor(t){const i=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??kk,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,i),this.validatePasswordCharacterOptions(t,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(t,i){const o=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;o&&(i.meetsMinPasswordLength=t.length>=o),l&&(i.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let o;for(let l=0;l<t.length;l++)o=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(t,i,o,l,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class Nk{constructor(t,i,o,l){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=o,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bv(this),this.idTokenSubscription=new bv(this),this.beforeStateQueue=new Ck(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=la(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await zr.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await ku(this,{idToken:t}),o=await Sn._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(o)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(vn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=o?._redirectEventId,h=await this.tryRedirectSignIn(t);(!u||u===f)&&h?.user&&(o=h.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ut(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Mu(t)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=fk()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(vn(this.app))return Promise.reject(Wa(this));const i=t?Ke(t):null;return i&&ut(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&ut(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Wa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return vn(this.app)?Promise.reject(Wa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(la(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Dk(this),i=new Mk(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Vi("auth","Firebase",t())}onAuthStateChanged(t,i,o){return this.registerStateListener(this.authStateSubscription,t,i,o)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,o){return this.registerStateListener(this.idTokenSubscription,t,i,o)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const o=this.onAuthStateChanged(()=>{o(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(o.tenantId=this.tenantId),await Ak(this,o)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,i){const o=await this.getOrInitRedirectPersistenceManager(i);return t===null?o.removeCurrentUser():o.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&la(t)||this._popupRedirectResolver;ut(i,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[la(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,o,l){if(this._deleted)return()=>{};const u=typeof i=="function"?i:i.next.bind(i);let f=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(ut(h,this,"internal-error"),h.then(()=>{f||u(this.currentUser)}),typeof i=="function"){const p=t.addObserver(i,o,l);return()=>{f=!0,p()}}else{const p=t.addObserver(i);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ut(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=CS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&lk(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Qr(e){return Ke(e)}class bv{constructor(t){this.auth=t,this.observer=null,this.addObserver=XC(i=>this.observer=i)}get next(){return ut(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pk(e){Yu=e}function DS(e){return Yu.loadJS(e)}function Ik(){return Yu.recaptchaEnterpriseScript}function Lk(){return Yu.gapiScript}function Uk(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class Bk{constructor(){this.enterprise=new zk}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class zk{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const Vk="recaptcha-enterprise",kS="NO_RECAPTCHA";class Hk{constructor(t){this.type=Vk,this.auth=Qr(t)}async verify(t="verify",i=!1){async function o(u){if(!i){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,h)=>{bk(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new yk(p);return u.tenantId==null?u._agentRecaptchaConfig=m:u._tenantRecaptchaConfigs[u.tenantId]=m,f(m.siteKey)}}).catch(p=>{h(p)})})}function l(u,f,h){const p=window.grecaptcha;hv(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:t}).then(m=>{f(m)}).catch(()=>{f(kS)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Bk().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{o(this.auth).then(h=>{if(!i&&hv(window.grecaptcha))l(h,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=Ik();p.length!==0&&(p+=h),DS(p).then(()=>{l(h,u,f)}).catch(m=>{f(m)})}}).catch(h=>{f(h)})})}}async function vv(e,t,i,o=!1,l=!1){const u=new Hk(e);let f;if(l)f=kS;else try{f=await u.verify(i)}catch{f=await u.verify(i,!0)}const h={...t};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return o?Object.assign(h,{captchaResp:f}):Object.assign(h,{captchaResponse:f}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Tv(e,t,i,o,l){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await vv(e,t,i,i==="getOobCode");return o(e,u)}else return o(e,t).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await vv(e,t,i,i==="getOobCode");return o(e,f)}else return Promise.reject(u)})}/**
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
 */function jk(e,t){const i=$r(e,"auth");if(i.isInitialized()){const l=i.getImmediate(),u=i.getOptions();if(Ni(u,t??{}))return l;_n(l,"already-initialized")}return i.initialize({options:t})}function qk(e,t){const i=t?.persistence||[],o=(Array.isArray(i)?i:[i]).map(la);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(o,t?.popupRedirectResolver)}function Fk(e,t,i){const o=Qr(e);ut(/^https?:\/\//.test(t),o,"invalid-emulator-scheme");const l=!1,u=MS(t),{host:f,port:h}=Gk(t),p=h===null?"":`:${h}`,m={url:`${u}//${f}${p}/`},g=Object.freeze({host:f,port:h,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!o._canInitEmulator){ut(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),ut(Ni(m,o.config.emulator)&&Ni(g,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=m,o.emulatorConfig=g,o.settings.appVerificationDisabledForTesting=!0,Ns(f)?(PC(`${u}//${f}${p}`),UC("Auth",!0)):Yk()}function MS(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Gk(e){const t=MS(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};const o=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(o);if(l){const u=l[1];return{host:u,port:Sv(o.substr(u.length+1))}}else{const[u,f]=o.split(":");return{host:u,port:Sv(f)}}}function Sv(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Yk(){function e(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class yp{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return sa("not implemented")}_getIdTokenResponse(t){return sa("not implemented")}_linkToIdToken(t,i){return sa("not implemented")}_getReauthenticationResolver(t){return sa("not implemented")}}async function Xk(e,t){return ni(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Kk(e,t){return Gu(e,"POST","/v1/accounts:signInWithPassword",Hi(e,t))}/**
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
 */async function $k(e,t){return Gu(e,"POST","/v1/accounts:signInWithEmailLink",Hi(e,t))}async function Zk(e,t){return Gu(e,"POST","/v1/accounts:signInWithEmailLink",Hi(e,t))}/**
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
 */class Es extends yp{constructor(t,i,o,l=null){super("password",o),this._email=t,this._password=i,this._tenantId=l}static _fromEmailAndPassword(t,i){return new Es(t,i,"password")}static _fromEmailAndCode(t,i,o=null){return new Es(t,i,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tv(t,i,"signInWithPassword",Kk);case"emailLink":return $k(t,{email:this._email,oobCode:this._password});default:_n(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const o={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tv(t,o,"signUpPassword",Xk);case"emailLink":return Zk(t,{idToken:i,email:this._email,oobCode:this._password});default:_n(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Vr(e,t){return Gu(e,"POST","/v1/accounts:signInWithIdp",Hi(e,t))}/**
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
 */const Qk="http://localhost";class Pi extends yp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Pi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):_n("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:o,signInMethod:l,...u}=i;if(!o||!l)return null;const f=new Pi(o,l);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const i=this.buildRequest();return Vr(t,i)}_linkToIdToken(t,i){const o=this.buildRequest();return o.idToken=i,Vr(t,o)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Vr(t,i)}buildRequest(){const t={requestUri:Qk,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=Ps(i)}return t}}/**
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
 */function Wk(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jk(e){const t=rs(os(e)).link,i=t?rs(os(t)).deep_link_id:null,o=rs(os(e)).deep_link_id;return(o?rs(os(o)).link:null)||o||i||t||e}class bp{constructor(t){const i=rs(os(t)),o=i.apiKey??null,l=i.oobCode??null,u=Wk(i.mode??null);ut(o&&l&&u,"argument-error"),this.apiKey=o,this.operation=u,this.code=l,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(t){const i=Jk(t);try{return new bp(i)}catch{return null}}}/**
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
 */class Wr{constructor(){this.providerId=Wr.PROVIDER_ID}static credential(t,i){return Es._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const o=bp.parseLink(i);return ut(o,"argument-error"),Es._fromEmailAndCode(t,o.code,o.tenantId)}}Wr.PROVIDER_ID="password";Wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class NS{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ls extends NS{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ga extends Ls{constructor(){super("facebook.com")}static credential(t){return Pi._fromParams({providerId:Ga.PROVIDER_ID,signInMethod:Ga.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ga.credentialFromTaggedObject(t)}static credentialFromError(t){return Ga.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ga.credential(t.oauthAccessToken)}catch{return null}}}Ga.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ga.PROVIDER_ID="facebook.com";/**
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
 */class Ya extends Ls{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Pi._fromParams({providerId:Ya.PROVIDER_ID,signInMethod:Ya.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return Ya.credentialFromTaggedObject(t)}static credentialFromError(t){return Ya.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:o}=t;if(!i&&!o)return null;try{return Ya.credential(i,o)}catch{return null}}}Ya.GOOGLE_SIGN_IN_METHOD="google.com";Ya.PROVIDER_ID="google.com";/**
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
 */class Xa extends Ls{constructor(){super("github.com")}static credential(t){return Pi._fromParams({providerId:Xa.PROVIDER_ID,signInMethod:Xa.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xa.credentialFromTaggedObject(t)}static credentialFromError(t){return Xa.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Xa.credential(t.oauthAccessToken)}catch{return null}}}Xa.GITHUB_SIGN_IN_METHOD="github.com";Xa.PROVIDER_ID="github.com";/**
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
 */class Ka extends Ls{constructor(){super("twitter.com")}static credential(t,i){return Pi._fromParams({providerId:Ka.PROVIDER_ID,signInMethod:Ka.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return Ka.credentialFromTaggedObject(t)}static credentialFromError(t){return Ka.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:o}=t;if(!i||!o)return null;try{return Ka.credential(i,o)}catch{return null}}}Ka.TWITTER_SIGN_IN_METHOD="twitter.com";Ka.PROVIDER_ID="twitter.com";/**
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
 */class Fr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,o,l=!1){const u=await Sn._fromIdTokenResponse(t,o,l),f=xv(o);return new Fr({user:u,providerId:f,_tokenResponse:o,operationType:i})}static async _forOperation(t,i,o){await t._updateTokensIfNecessary(o,!0);const l=xv(o);return new Fr({user:t,providerId:l,_tokenResponse:o,operationType:i})}}function xv(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Nu extends En{constructor(t,i,o,l){super(i.code,i.message),this.operationType=o,this.user=l,Object.setPrototypeOf(this,Nu.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(t,i,o,l){return new Nu(t,i,o,l)}}function PS(e,t,i,o){return(t==="reauthenticate"?i._getReauthenticationResolver(e):i._getIdTokenResponse(e)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Nu._fromErrorAndOperation(e,u,t,o):u})}async function tM(e,t,i=!1){const o=await _s(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return Fr._forOperation(e,"link",o)}/**
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
 */async function eM(e,t,i=!1){const{auth:o}=e;if(vn(o.app))return Promise.reject(Wa(o));const l="reauthenticate";try{const u=await _s(e,PS(o,l,t,e),i);ut(u.idToken,o,"internal-error");const f=mp(u.idToken);ut(f,o,"internal-error");const{sub:h}=f;return ut(e.uid===h,o,"user-mismatch"),Fr._forOperation(e,l,u)}catch(u){throw u?.code==="auth/user-not-found"&&_n(o,"user-mismatch"),u}}/**
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
 */async function IS(e,t,i=!1){if(vn(e.app))return Promise.reject(Wa(e));const o="signIn",l=await PS(e,o,t),u=await Fr._fromIdTokenResponse(e,o,l);return i||await e._updateCurrentUser(u.user),u}async function nM(e,t){return IS(Qr(e),t)}/**
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
 */async function aM(e){const t=Qr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function iM(e,t,i){return vn(e.app)?Promise.reject(Wa(e)):nM(Ke(e),Wr.credential(t,i)).catch(async o=>{throw o.code==="auth/password-does-not-meet-requirements"&&aM(e),o})}function rM(e,t,i,o){return Ke(e).onIdTokenChanged(t,i,o)}function oM(e,t,i){return Ke(e).beforeAuthStateChanged(t,i)}const Pu="__sak";/**
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
 */class LS{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Pu,"1"),this.storage.removeItem(Pu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const sM=1e3,lM=10;class US extends LS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=OS(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const o=this.storage.getItem(i),l=this.localCache[i];o!==l&&t(i,l,o)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((f,h,p)=>{this.notifyListeners(f,p)});return}const o=t.key;i?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(o);!i&&this.localCache[o]===f||this.notifyListeners(o,f)},u=this.storage.getItem(o);Ok()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,lM):l()}notifyListeners(t,i){this.localCache[t]=i;const o=this.listeners[t];if(o)for(const l of Array.from(o))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:o}),!0)})},sM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}US.type="LOCAL";const uM=US;/**
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
 */class BS extends LS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}BS.type="SESSION";const zS=BS;/**
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
 */function cM(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Xu{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(l=>l.isListeningto(t));if(i)return i;const o=new Xu(t);return this.receivers.push(o),o}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:o,eventType:l,data:u}=i.data,f=this.handlersMap[l];if(!f?.size)return;i.ports[0].postMessage({status:"ack",eventId:o,eventType:l});const h=Array.from(f).map(async m=>m(i.origin,u)),p=await cM(h);i.ports[0].postMessage({status:"done",eventId:o,eventType:l,response:p})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xu.receivers=[];/**
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
 */function vp(e="",t=10){let i="";for(let o=0;o<t;o++)i+=Math.floor(Math.random()*10);return e+i}/**
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
 */class fM{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,o=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,f;return new Promise((h,p)=>{const m=vp("",20);l.port1.start();const g=setTimeout(()=>{p(new Error("unsupported_event"))},o);f={messageChannel:l,onMessage(y){const T=y;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(g),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),h(T.data.response);break;default:clearTimeout(g),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:m,data:i},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function zn(){return window}function dM(e){zn().location.href=e}/**
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
 */function VS(){return typeof zn().WorkerGlobalScope<"u"&&typeof zn().importScripts=="function"}async function hM(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pM(){return navigator?.serviceWorker?.controller||null}function mM(){return VS()?self:null}/**
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
 */const HS="firebaseLocalStorageDb",gM=1,Iu="firebaseLocalStorage",jS="fbase_key";class Us{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Ku(e,t){return e.transaction([Iu],t?"readwrite":"readonly").objectStore(Iu)}function yM(){const e=indexedDB.deleteDatabase(HS);return new Us(e).toPromise()}function Sh(){const e=indexedDB.open(HS,gM);return new Promise((t,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{const o=e.result;try{o.createObjectStore(Iu,{keyPath:jS})}catch(l){i(l)}}),e.addEventListener("success",async()=>{const o=e.result;o.objectStoreNames.contains(Iu)?t(o):(o.close(),await yM(),t(await Sh()))})})}async function wv(e,t,i){const o=Ku(e,!0).put({[jS]:t,value:i});return new Us(o).toPromise()}async function bM(e,t){const i=Ku(e,!1).get(t),o=await new Us(i).toPromise();return o===void 0?null:o.value}function _v(e,t){const i=Ku(e,!0).delete(t);return new Us(i).toPromise()}const vM=800,TM=3;class qS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sh(),this.db)}async _withRetries(t){let i=0;for(;;)try{const o=await this._openDb();return await t(o)}catch(o){if(i++>TM)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return VS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xu._getInstance(mM()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await hM(),!this.activeServiceWorker)return;this.sender=new fM(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||pM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Sh();return await wv(t,Pu,"1"),await _v(t,Pu),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(o=>wv(o,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(o=>bM(o,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>_v(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const u=Ku(l,!1).getAll();return new Us(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],o=new Set;if(t.length!==0)for(const{fbase_key:l,value:u}of t)o.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!o.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(t,i){this.localCache[t]=i;const o=this.listeners[t];if(o)for(const l of Array.from(o))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qS.type="LOCAL";const SM=qS;new Is(3e4,6e4);/**
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
 */function xM(e,t){return t?la(t):(ut(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Tp extends yp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Vr(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Vr(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Vr(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function wM(e){return IS(e.auth,new Tp(e),e.bypassAuthState)}function _M(e){const{auth:t,user:i}=e;return ut(i,t,"internal-error"),eM(i,new Tp(e),e.bypassAuthState)}async function EM(e){const{auth:t,user:i}=e;return ut(i,t,"internal-error"),tM(i,new Tp(e),e.bypassAuthState)}/**
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
 */class FS{constructor(t,i,o,l,u=!1){this.auth=t,this.resolver=o,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:o,postBody:l,tenantId:u,error:f,type:h}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:i,sessionId:o,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(m){this.reject(m)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return wM;case"linkViaPopup":case"linkViaRedirect":return EM;case"reauthViaPopup":case"reauthViaRedirect":return _M;default:_n(this.auth,"internal-error")}}resolve(t){pa(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pa(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AM=new Is(2e3,1e4);class Lr extends FS{constructor(t,i,o,l,u){super(t,i,l,u),this.provider=o,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ut(t,this.auth,"internal-error"),t}async onExecution(){pa(this.filter.length===1,"Popup operations only handle one event");const t=vp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,AM.get())};t()}}Lr.currentPopupAction=null;/**
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
 */const RM="pendingRedirect",bu=new Map;class OM extends FS{constructor(t,i,o=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o),this.eventId=null}async execute(){let t=bu.get(this.auth._key());if(!t){try{const o=await CM(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(o)}catch(i){t=()=>Promise.reject(i)}bu.set(this.auth._key(),t)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CM(e,t){const i=MM(t),o=kM(e);if(!await o._isAvailable())return!1;const l=await o._get(i)==="true";return await o._remove(i),l}function DM(e,t){bu.set(e._key(),t)}function kM(e){return la(e._redirectPersistence)}function MM(e){return yu(RM,e.config.apiKey,e.name)}async function NM(e,t,i=!1){if(vn(e.app))return Promise.reject(Wa(e));const o=Qr(e),l=xM(o,t),f=await new OM(o,l,i).execute();return f&&!i&&(delete f.user._redirectEventId,await o._persistUserIfCurrent(f.user),await o._setRedirectUser(null,t)),f}/**
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
 */const PM=600*1e3;class IM{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(t,o)&&(i=!0,this.sendToConsumer(t,o),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!LM(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){if(t.error&&!GS(t)){const o=t.error.code?.split("auth/")[1]||"internal-error";i.onError(Bn(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const o=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&o}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=PM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ev(t))}saveEventToCache(t){this.cachedEventUids.add(Ev(t)),this.lastProcessedEventTime=Date.now()}}function Ev(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function GS({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function LM(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GS(e);default:return!1}}/**
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
 */async function UM(e,t={}){return ni(e,"GET","/v1/projects",t)}/**
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
 */const BM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zM=/^https?/;async function VM(e){if(e.config.emulator)return;const{authorizedDomains:t}=await UM(e);for(const i of t)try{if(HM(i))return}catch{}_n(e,"unauthorized-domain")}function HM(e){const t=vh(),{protocol:i,hostname:o}=new URL(t);if(e.startsWith("chrome-extension://")){const f=new URL(e);return f.hostname===""&&o===""?i==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&f.hostname===o}if(!zM.test(i))return!1;if(BM.test(e))return o===e;const l=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(o)}/**
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
 */const jM=new Is(3e4,6e4);function Av(){const e=zn().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let i=0;i<e.CP.length;i++)e.CP[i]=null}}function qM(e){return new Promise((t,i)=>{function o(){Av(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Av(),i(Bn(e,"network-request-failed"))},timeout:jM.get()})}if(zn().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(zn().gapi?.load)o();else{const l=Uk("iframefcb");return zn()[l]=()=>{gapi.load?o():i(Bn(e,"network-request-failed"))},DS(`${Lk()}?onload=${l}`).catch(u=>i(u))}}).catch(t=>{throw vu=null,t})}let vu=null;function FM(e){return vu=vu||qM(e),vu}/**
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
 */const GM=new Is(5e3,15e3),YM="__/auth/iframe",XM="emulator/auth/iframe",KM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$M=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZM(e){const t=e.config;ut(t.authDomain,e,"auth-domain-config-required");const i=t.emulator?pp(t,XM):`https://${e.config.authDomain}/${YM}`,o={apiKey:t.apiKey,appName:e.name,v:Zr},l=$M.get(e.config.apiHost);l&&(o.eid=l);const u=e._getFrameworks();return u.length&&(o.fw=u.join(",")),`${i}?${Ps(o).slice(1)}`}async function QM(e){const t=await FM(e),i=zn().gapi;return ut(i,e,"internal-error"),t.open({where:document.body,url:ZM(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KM,dontclear:!0},o=>new Promise(async(l,u)=>{await o.restyle({setHideOnLeave:!1});const f=Bn(e,"network-request-failed"),h=zn().setTimeout(()=>{u(f)},GM.get());function p(){zn().clearTimeout(h),l(o)}o.ping(p).then(p,()=>{u(f)})}))}/**
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
 */const WM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JM=500,t3=600,e3="_blank",n3="http://localhost";class Rv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function a3(e,t,i,o=JM,l=t3){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-o)/2,0).toString();let h="";const p={...WM,width:o.toString(),height:l.toString(),top:u,left:f},m=ke().toLowerCase();i&&(h=wS(m)?e3:i),SS(m)&&(t=t||n3,p.scrollbars="yes");const g=Object.entries(p).reduce((T,[x,_])=>`${T}${x}=${_},`,"");if(Rk(m)&&h!=="_self")return i3(t||"",h),new Rv(null);const y=window.open(t||"",h,g);ut(y,e,"popup-blocked");try{y.focus()}catch{}return new Rv(y)}function i3(e,t){const i=document.createElement("a");i.href=e,i.target=t;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(o)}/**
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
 */const r3="__/auth/handler",o3="emulator/auth/handler",s3=encodeURIComponent("fac");async function Ov(e,t,i,o,l,u){ut(e.config.authDomain,e,"auth-domain-config-required"),ut(e.config.apiKey,e,"invalid-api-key");const f={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:o,v:Zr,eventId:l};if(t instanceof NS){t.setDefaultLanguage(e.languageCode),f.providerId=t.providerId||"",YC(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,y]of Object.entries({}))f[g]=y}if(t instanceof Ls){const g=t.getScopes().filter(y=>y!=="");g.length>0&&(f.scopes=g.join(","))}e.tenantId&&(f.tid=e.tenantId);const h=f;for(const g of Object.keys(h))h[g]===void 0&&delete h[g];const p=await e._getAppCheckToken(),m=p?`#${s3}=${encodeURIComponent(p)}`:"";return`${l3(e)}?${Ps(h).slice(1)}${m}`}function l3({config:e}){return e.emulator?pp(e,o3):`https://${e.authDomain}/${r3}`}/**
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
 */const Bd="webStorageSupport";class u3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zS,this._completeRedirectFn=NM,this._overrideRedirectResult=DM}async _openPopup(t,i,o,l){pa(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const u=await Ov(t,i,o,vh(),l);return a3(t,u,vp())}async _openRedirect(t,i,o,l){await this._originValidation(t);const u=await Ov(t,i,o,vh(),l);return dM(u),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:l,promise:u}=this.eventManagers[i];return l?Promise.resolve(l):(pa(u,"If manager is not set, promise should be"),u)}const o=this.initAndGetManager(t);return this.eventManagers[i]={promise:o},o.catch(()=>{delete this.eventManagers[i]}),o}async initAndGetManager(t){const i=await QM(t),o=new IM(t);return i.register("authEvent",l=>(ut(l?.authEvent,t,"invalid-auth-event"),{status:o.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:o},this.iframes[t._key()]=i,o}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(Bd,{type:Bd},l=>{const u=l?.[0]?.[Bd];u!==void 0&&i(!!u),_n(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=VM(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return OS()||xS()||gp()}}const c3=u3;var Cv="@firebase/auth",Dv="1.11.0";/**
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
 */class f3{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(o=>{t(o?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ut(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function d3(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function h3(e){Vn(new wn("auth",(t,{options:i})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:h}=o.options;ut(f&&!f.includes(":"),"invalid-api-key",{appName:o.name});const p={apiKey:f,authDomain:h,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CS(e)},m=new Nk(o,l,u,p);return qk(m,i),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,o)=>{t.getProvider("auth-internal").initialize()})),Vn(new wn("auth-internal",t=>{const i=Qr(t.getProvider("auth").getImmediate());return(o=>new f3(o))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Cv,Dv,d3(e)),cn(Cv,Dv,"esm2020")}/**
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
 */const p3=300,m3=nS("authIdTokenMaxAge")||p3;let kv=null;const g3=e=>async t=>{const i=t&&await t.getIdTokenResult(),o=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(o&&o>m3)return;const l=i?.token;kv!==l&&(kv=l,await fetch(e,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function y3(e=cS()){const t=$r(e,"auth");if(t.isInitialized())return t.getImmediate();const i=jk(e,{popupRedirectResolver:c3,persistence:[SM,uM,zS]}),o=nS("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(o,location.origin);if(location.origin===u.origin){const f=g3(u.toString());oM(i,f,()=>f(i.currentUser)),rM(i,h=>f(h))}}const l=MC("auth");return l&&Fk(i,`http://${l}`),i}function b3(){return document.getElementsByTagName("head")?.[0]??document}Pk({loadJS(e){return new Promise((t,i)=>{const o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=l=>{const u=Bn("internal-error");u.customData=l,i(u)},o.type="text/javascript",o.charset="UTF-8",b3().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});h3("Browser");var v3="firebase",T3="12.4.0";/**
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
 */cn(v3,T3,"app");const YS="@firebase/installations",Sp="0.6.19";/**
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
 */const XS=1e4,KS=`w:${Sp}`,$S="FIS_v2",S3="https://firebaseinstallations.googleapis.com/v1",x3=3600*1e3,w3="installations",_3="Installations";/**
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
 */const E3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ii=new Vi(w3,_3,E3);function ZS(e){return e instanceof En&&e.code.includes("request-failed")}/**
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
 */function QS({projectId:e}){return`${S3}/projects/${e}/installations`}function WS(e){return{token:e.token,requestStatus:2,expiresIn:R3(e.expiresIn),creationTime:Date.now()}}async function JS(e,t){const o=(await t.json()).error;return Ii.create("request-failed",{requestName:e,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function tx({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function A3(e,{refreshToken:t}){const i=tx(e);return i.append("Authorization",O3(t)),i}async function ex(e){const t=await e();return t.status>=500&&t.status<600?e():t}function R3(e){return Number(e.replace("s","000"))}function O3(e){return`${$S} ${e}`}/**
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
 */async function C3({appConfig:e,heartbeatServiceProvider:t},{fid:i}){const o=QS(e),l=tx(e),u=t.getImmediate({optional:!0});if(u){const m=await u.getHeartbeatsHeader();m&&l.append("x-firebase-client",m)}const f={fid:i,authVersion:$S,appId:e.appId,sdkVersion:KS},h={method:"POST",headers:l,body:JSON.stringify(f)},p=await ex(()=>fetch(o,h));if(p.ok){const m=await p.json();return{fid:m.fid||i,registrationStatus:2,refreshToken:m.refreshToken,authToken:WS(m.authToken)}}else throw await JS("Create Installation",p)}/**
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
 */function nx(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function D3(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const k3=/^[cdef][\w-]{21}$/,xh="";function M3(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const i=N3(e);return k3.test(i)?i:xh}catch{return xh}}function N3(e){return D3(e).substr(0,22)}/**
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
 */function $u(e){return`${e.appName}!${e.appId}`}/**
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
 */const ax=new Map;function ix(e,t){const i=$u(e);rx(i,t),P3(i,t)}function rx(e,t){const i=ax.get(e);if(i)for(const o of i)o(t)}function P3(e,t){const i=I3();i&&i.postMessage({key:e,fid:t}),L3()}let Ci=null;function I3(){return!Ci&&"BroadcastChannel"in self&&(Ci=new BroadcastChannel("[Firebase] FID Change"),Ci.onmessage=e=>{rx(e.data.key,e.data.fid)}),Ci}function L3(){ax.size===0&&Ci&&(Ci.close(),Ci=null)}/**
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
 */const U3="firebase-installations-database",B3=1,Li="firebase-installations-store";let zd=null;function xp(){return zd||(zd=lS(U3,B3,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Li)}}})),zd}async function Lu(e,t){const i=$u(e),l=(await xp()).transaction(Li,"readwrite"),u=l.objectStore(Li),f=await u.get(i);return await u.put(t,i),await l.done,(!f||f.fid!==t.fid)&&ix(e,t.fid),t}async function ox(e){const t=$u(e),o=(await xp()).transaction(Li,"readwrite");await o.objectStore(Li).delete(t),await o.done}async function Zu(e,t){const i=$u(e),l=(await xp()).transaction(Li,"readwrite"),u=l.objectStore(Li),f=await u.get(i),h=t(f);return h===void 0?await u.delete(i):await u.put(h,i),await l.done,h&&(!f||f.fid!==h.fid)&&ix(e,h.fid),h}/**
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
 */async function wp(e){let t;const i=await Zu(e.appConfig,o=>{const l=z3(o),u=V3(e,l);return t=u.registrationPromise,u.installationEntry});return i.fid===xh?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}function z3(e){const t=e||{fid:M3(),registrationStatus:0};return sx(t)}function V3(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Ii.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},o=H3(e,i);return{installationEntry:i,registrationPromise:o}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:j3(e)}:{installationEntry:t}}async function H3(e,t){try{const i=await C3(e,t);return Lu(e.appConfig,i)}catch(i){throw ZS(i)&&i.customData.serverCode===409?await ox(e.appConfig):await Lu(e.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function j3(e){let t=await Mv(e.appConfig);for(;t.registrationStatus===1;)await nx(100),t=await Mv(e.appConfig);if(t.registrationStatus===0){const{installationEntry:i,registrationPromise:o}=await wp(e);return o||i}return t}function Mv(e){return Zu(e,t=>{if(!t)throw Ii.create("installation-not-found");return sx(t)})}function sx(e){return q3(e)?{fid:e.fid,registrationStatus:0}:e}function q3(e){return e.registrationStatus===1&&e.registrationTime+XS<Date.now()}/**
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
 */async function F3({appConfig:e,heartbeatServiceProvider:t},i){const o=G3(e,i),l=A3(e,i),u=t.getImmediate({optional:!0});if(u){const m=await u.getHeartbeatsHeader();m&&l.append("x-firebase-client",m)}const f={installation:{sdkVersion:KS,appId:e.appId}},h={method:"POST",headers:l,body:JSON.stringify(f)},p=await ex(()=>fetch(o,h));if(p.ok){const m=await p.json();return WS(m)}else throw await JS("Generate Auth Token",p)}function G3(e,{fid:t}){return`${QS(e)}/${t}/authTokens:generate`}/**
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
 */async function _p(e,t=!1){let i;const o=await Zu(e.appConfig,u=>{if(!lx(u))throw Ii.create("not-registered");const f=u.authToken;if(!t&&K3(f))return u;if(f.requestStatus===1)return i=Y3(e,t),u;{if(!navigator.onLine)throw Ii.create("app-offline");const h=Z3(u);return i=X3(e,h),h}});return i?await i:o.authToken}async function Y3(e,t){let i=await Nv(e.appConfig);for(;i.authToken.requestStatus===1;)await nx(100),i=await Nv(e.appConfig);const o=i.authToken;return o.requestStatus===0?_p(e,t):o}function Nv(e){return Zu(e,t=>{if(!lx(t))throw Ii.create("not-registered");const i=t.authToken;return Q3(i)?{...t,authToken:{requestStatus:0}}:t})}async function X3(e,t){try{const i=await F3(e,t),o={...t,authToken:i};return await Lu(e.appConfig,o),i}catch(i){if(ZS(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await ox(e.appConfig);else{const o={...t,authToken:{requestStatus:0}};await Lu(e.appConfig,o)}throw i}}function lx(e){return e!==void 0&&e.registrationStatus===2}function K3(e){return e.requestStatus===2&&!$3(e)}function $3(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+x3}function Z3(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Q3(e){return e.requestStatus===1&&e.requestTime+XS<Date.now()}/**
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
 */async function W3(e){const t=e,{installationEntry:i,registrationPromise:o}=await wp(t);return o?o.catch(console.error):_p(t).catch(console.error),i.fid}/**
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
 */async function J3(e,t=!1){const i=e;return await t4(i),(await _p(i,t)).token}async function t4(e){const{registrationPromise:t}=await wp(e);t&&await t}/**
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
 */function e4(e){if(!e||!e.options)throw Vd("App Configuration");if(!e.name)throw Vd("App Name");const t=["projectId","apiKey","appId"];for(const i of t)if(!e.options[i])throw Vd(i);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Vd(e){return Ii.create("missing-app-config-values",{valueName:e})}/**
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
 */const ux="installations",n4="installations-internal",a4=e=>{const t=e.getProvider("app").getImmediate(),i=e4(t),o=$r(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},i4=e=>{const t=e.getProvider("app").getImmediate(),i=$r(t,ux).getImmediate();return{getId:()=>W3(i),getToken:l=>J3(i,l)}};function r4(){Vn(new wn(ux,a4,"PUBLIC")),Vn(new wn(n4,i4,"PRIVATE"))}r4();cn(YS,Sp);cn(YS,Sp,"esm2020");/**
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
 */const Uu="analytics",o4="firebase_id",s4="origin",l4=60*1e3,u4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ep="https://www.googletagmanager.com/gtag/js";/**
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
 */const De=new fp("@firebase/analytics");/**
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
 */const c4={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xe=new Vi("analytics","Analytics",c4);/**
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
 */function f4(e){if(!e.startsWith(Ep)){const t=Xe.create("invalid-gtag-resource",{gtagURL:e});return De.warn(t.message),""}return e}function cx(e){return Promise.all(e.map(t=>t.catch(i=>i)))}function d4(e,t){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(e,t)),i}function h4(e,t){const i=d4("firebase-js-sdk-policy",{createScriptURL:f4}),o=document.createElement("script"),l=`${Ep}?l=${e}&id=${t}`;o.src=i?i?.createScriptURL(l):l,o.async=!0,document.head.appendChild(o)}function p4(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function m4(e,t,i,o,l,u){const f=o[l];try{if(f)await t[f];else{const p=(await cx(i)).find(m=>m.measurementId===l);p&&await t[p.appId]}}catch(h){De.error(h)}e("config",l,u)}async function g4(e,t,i,o,l){try{let u=[];if(l&&l.send_to){let f=l.send_to;Array.isArray(f)||(f=[f]);const h=await cx(i);for(const p of f){const m=h.find(y=>y.measurementId===p),g=m&&t[m.appId];if(g)u.push(g);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),e("event",o,l||{})}catch(u){De.error(u)}}function y4(e,t,i,o){async function l(u,...f){try{if(u==="event"){const[h,p]=f;await g4(e,t,i,h,p)}else if(u==="config"){const[h,p]=f;await m4(e,t,i,o,h,p)}else if(u==="consent"){const[h,p]=f;e("consent",h,p)}else if(u==="get"){const[h,p,m]=f;e("get",h,p,m)}else if(u==="set"){const[h]=f;e("set",h)}else e(u,...f)}catch(h){De.error(h)}}return l}function b4(e,t,i,o,l){let u=function(...f){window[o].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=y4(u,e,t,i),{gtagCore:u,wrappedGtag:window[l]}}function v4(e){const t=window.document.getElementsByTagName("script");for(const i of Object.values(t))if(i.src&&i.src.includes(Ep)&&i.src.includes(e))return i;return null}/**
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
 */const T4=30,S4=1e3;class x4{constructor(t={},i=S4){this.throttleMetadata=t,this.intervalMillis=i}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,i){this.throttleMetadata[t]=i}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const fx=new x4;function w4(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function _4(e){const{appId:t,apiKey:i}=e,o={method:"GET",headers:w4(i)},l=u4.replace("{app-id}",t),u=await fetch(l,o);if(u.status!==200&&u.status!==304){let f="";try{const h=await u.json();h.error?.message&&(f=h.error.message)}catch{}throw Xe.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function E4(e,t=fx,i){const{appId:o,apiKey:l,measurementId:u}=e.options;if(!o)throw Xe.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:o};throw Xe.create("no-api-key")}const f=t.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new O4;return setTimeout(async()=>{h.abort()},l4),dx({appId:o,apiKey:l,measurementId:u},f,h,t)}async function dx(e,{throttleEndTimeMillis:t,backoffCount:i},o,l=fx){const{appId:u,measurementId:f}=e;try{await A4(o,t)}catch(h){if(f)return De.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${h?.message}]`),{appId:u,measurementId:f};throw h}try{const h=await _4(e);return l.deleteThrottleMetadata(u),h}catch(h){const p=h;if(!R4(p)){if(l.deleteThrottleMetadata(u),f)return De.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:u,measurementId:f};throw h}const m=Number(p?.customData?.httpStatus)===503?av(i,l.intervalMillis,T4):av(i,l.intervalMillis),g={throttleEndTimeMillis:Date.now()+m,backoffCount:i+1};return l.setThrottleMetadata(u,g),De.debug(`Calling attemptFetch again in ${m} millis`),dx(e,g,o,l)}}function A4(e,t){return new Promise((i,o)=>{const l=Math.max(t-Date.now(),0),u=setTimeout(i,l);e.addEventListener(()=>{clearTimeout(u),o(Xe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function R4(e){if(!(e instanceof En)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class O4{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function C4(e,t,i,o,l){if(l&&l.global){e("event",i,o);return}else{const u=await t,f={...o,send_to:u};e("event",i,f)}}async function D4(e,t,i,o){if(o&&o.global){const l={};for(const u of Object.keys(i))l[`user_properties.${u}`]=i[u];return e("set",l),Promise.resolve()}else{const l=await t;e("config",l,{update:!0,user_properties:i})}}/**
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
 */async function k4(){if(iS())try{await rS()}catch(e){return De.warn(Xe.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return De.warn(Xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function M4(e,t,i,o,l,u,f){const h=E4(e);h.then(T=>{i[T.measurementId]=T.appId,e.options.measurementId&&T.measurementId!==e.options.measurementId&&De.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>De.error(T)),t.push(h);const p=k4().then(T=>{if(T)return o.getId()}),[m,g]=await Promise.all([h,p]);v4(u)||h4(u,m.measurementId),l("js",new Date);const y=f?.config??{};return y[s4]="firebase",y.update=!0,g!=null&&(y[o4]=g),l("config",m.measurementId,y),m.measurementId}/**
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
 */class N4{constructor(t){this.app=t}_delete(){return delete Hr[this.app.options.appId],Promise.resolve()}}let Hr={},Pv=[];const Iv={};let Hd="dataLayer",P4="gtag",Lv,Ap,Uv=!1;function I4(){const e=[];if(aS()&&e.push("This is a browser extension environment."),jC()||e.push("Cookies are not available."),e.length>0){const t=e.map((o,l)=>`(${l+1}) ${o}`).join(" "),i=Xe.create("invalid-analytics-context",{errorInfo:t});De.warn(i.message)}}function L4(e,t,i){I4();const o=e.options.appId;if(!o)throw Xe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)De.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xe.create("no-api-key");if(Hr[o]!=null)throw Xe.create("already-exists",{id:o});if(!Uv){p4(Hd);const{wrappedGtag:u,gtagCore:f}=b4(Hr,Pv,Iv,Hd,P4);Ap=u,Lv=f,Uv=!0}return Hr[o]=M4(e,Pv,Iv,t,Lv,Hd,i),new N4(e)}function U4(e=cS()){e=Ke(e);const t=$r(e,Uu);return t.isInitialized()?t.getImmediate():B4(e)}function B4(e,t={}){const i=$r(e,Uu);if(i.isInitialized()){const l=i.getImmediate();if(Ni(t,i.getOptions()))return l;throw Xe.create("already-initialized")}return i.initialize({options:t})}function z4(e,t,i){e=Ke(e),D4(Ap,Hr[e.app.options.appId],t,i).catch(o=>De.error(o))}function V4(e,t,i,o){e=Ke(e),C4(Ap,Hr[e.app.options.appId],t,i,o).catch(l=>De.error(l))}const Bv="@firebase/analytics",zv="0.10.19";function H4(){Vn(new wn(Uu,(t,{options:i})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return L4(o,l,i)},"PUBLIC")),Vn(new wn("analytics-internal",e,"PRIVATE")),cn(Bv,zv),cn(Bv,zv,"esm2020");function e(t){try{const i=t.getProvider(Uu).getImmediate();return{logEvent:(o,l,u)=>V4(i,o,l,u),setUserProperties:(o,l)=>z4(i,o,l)}}catch(i){throw Xe.create("interop-component-reg-failed",{reason:i})}}}H4();const j4={apiKey:"AIzaSyAkLOx2lwDb-3HLPyrbr6hWH-yHn4Ly-wc",authDomain:"pi-sem6.firebaseapp.com",projectId:"pi-sem6",storageBucket:"pi-sem6.firebasestorage.app",messagingSenderId:"829276571631",appId:"1:829276571631:web:90227c4dedc85f75cfd81a",measurementId:"G-ZZVKB3RCPL"},Rp=uS(j4);U4(Rp);const q4=y3(Rp),F4=getStorage(Rp);async function G4(e,t){return await iM(q4,e,t)}function Y4(e){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}const X4=e=>{switch(e){case"success":return Z4;case"info":return W4;case"warning":return Q4;case"error":return J4;default:return null}},K4=Array(12).fill(0),$4=({visible:e,className:t})=>G.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},G.createElement("div",{className:"sonner-spinner"},K4.map((i,o)=>G.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),Z4=G.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},G.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Q4=G.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},G.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),W4=G.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},G.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),J4=G.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},G.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),t6=G.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},G.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),G.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),e6=()=>{const[e,t]=G.useState(document.hidden);return G.useEffect(()=>{const i=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",i),()=>window.removeEventListener("visibilitychange",i)},[]),e};let wh=1;class n6{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{const i=this.subscribers.indexOf(t);this.subscribers.splice(i,1)}),this.publish=t=>{this.subscribers.forEach(i=>i(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var i;const{message:o,...l}=t,u=typeof t?.id=="number"||((i=t.id)==null?void 0:i.length)>0?t.id:wh++,f=this.toasts.find(p=>p.id===u),h=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(u)&&this.dismissedToasts.delete(u),f?this.toasts=this.toasts.map(p=>p.id===u?(this.publish({...p,...t,id:u,title:o}),{...p,...t,id:u,dismissible:h,title:o}):p):this.addToast({title:o,...l,dismissible:h,id:u}),u},this.dismiss=t=>(t?(this.dismissedToasts.add(t),requestAnimationFrame(()=>this.subscribers.forEach(i=>i({id:t,dismiss:!0})))):this.toasts.forEach(i=>{this.subscribers.forEach(o=>o({id:i.id,dismiss:!0}))}),t),this.message=(t,i)=>this.create({...i,message:t}),this.error=(t,i)=>this.create({...i,message:t,type:"error"}),this.success=(t,i)=>this.create({...i,type:"success",message:t}),this.info=(t,i)=>this.create({...i,type:"info",message:t}),this.warning=(t,i)=>this.create({...i,type:"warning",message:t}),this.loading=(t,i)=>this.create({...i,type:"loading",message:t}),this.promise=(t,i)=>{if(!i)return;let o;i.loading!==void 0&&(o=this.create({...i,promise:t,type:"loading",message:i.loading,description:typeof i.description!="function"?i.description:void 0}));const l=Promise.resolve(t instanceof Function?t():t);let u=o!==void 0,f;const h=l.then(async m=>{if(f=["resolve",m],G.isValidElement(m))u=!1,this.create({id:o,type:"default",message:m});else if(i6(m)&&!m.ok){u=!1;const y=typeof i.error=="function"?await i.error(`HTTP error! status: ${m.status}`):i.error,T=typeof i.description=="function"?await i.description(`HTTP error! status: ${m.status}`):i.description,_=typeof y=="object"&&!G.isValidElement(y)?y:{message:y};this.create({id:o,type:"error",description:T,..._})}else if(m instanceof Error){u=!1;const y=typeof i.error=="function"?await i.error(m):i.error,T=typeof i.description=="function"?await i.description(m):i.description,_=typeof y=="object"&&!G.isValidElement(y)?y:{message:y};this.create({id:o,type:"error",description:T,..._})}else if(i.success!==void 0){u=!1;const y=typeof i.success=="function"?await i.success(m):i.success,T=typeof i.description=="function"?await i.description(m):i.description,_=typeof y=="object"&&!G.isValidElement(y)?y:{message:y};this.create({id:o,type:"success",description:T,..._})}}).catch(async m=>{if(f=["reject",m],i.error!==void 0){u=!1;const g=typeof i.error=="function"?await i.error(m):i.error,y=typeof i.description=="function"?await i.description(m):i.description,x=typeof g=="object"&&!G.isValidElement(g)?g:{message:g};this.create({id:o,type:"error",description:y,...x})}}).finally(()=>{u&&(this.dismiss(o),o=void 0),i.finally==null||i.finally.call(i)}),p=()=>new Promise((m,g)=>h.then(()=>f[0]==="reject"?g(f[1]):m(f[1])).catch(g));return typeof o!="string"&&typeof o!="number"?{unwrap:p}:Object.assign(o,{unwrap:p})},this.custom=(t,i)=>{const o=i?.id||wh++;return this.create({jsx:t(o),id:o,...i}),o},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const Le=new n6,a6=(e,t)=>{const i=t?.id||wh++;return Le.addToast({title:e,...t,id:i}),i},i6=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",r6=a6,o6=()=>Le.toasts,s6=()=>Le.getActiveToasts(),Vv=Object.assign(r6,{success:Le.success,info:Le.info,warning:Le.warning,error:Le.error,custom:Le.custom,message:Le.message,promise:Le.promise,dismiss:Le.dismiss,loading:Le.loading},{getHistory:o6,getToasts:s6});Y4("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function su(e){return e.label!==void 0}const l6=3,u6="24px",c6="16px",Hv=4e3,f6=356,d6=14,h6=45,p6=200;function Pn(...e){return e.filter(Boolean).join(" ")}function m6(e){const[t,i]=e.split("-"),o=[];return t&&o.push(t),i&&o.push(i),o}const g6=e=>{var t,i,o,l,u,f,h,p,m;const{invert:g,toast:y,unstyled:T,interacting:x,setHeights:_,visibleToasts:A,heights:C,index:R,toasts:L,expanded:U,removeToast:Y,defaultRichColors:j,closeButton:W,style:at,cancelButtonStyle:K,actionButtonStyle:rt,className:St="",descriptionClassName:Ut="",duration:Mt,position:Wt,gap:we,expandByDefault:Nt,classNames:P,icons:q,closeButtonAriaLabel:Q="Close toast"}=e,[ht,w]=G.useState(null),[V,Z]=G.useState(null),[F,$]=G.useState(!1),[it,tt]=G.useState(!1),[Jt,lt]=G.useState(!1),[_e,ga]=G.useState(!1),[jn,An]=G.useState(!1),[Jr,ai]=G.useState(0),[Qu,Bs]=G.useState(0),ve=G.useRef(y.duration||Mt||Hv),zs=G.useRef(null),$e=G.useRef(null),Vs=R===0,ji=R+1<=A,Ee=y.type,qn=y.dismissible!==!1,Wu=y.className||"",Ju=y.descriptionClassName||"",Rn=G.useMemo(()=>C.findIndex(dt=>dt.toastId===y.id)||0,[C,y.id]),Ae=G.useMemo(()=>{var dt;return(dt=y.closeButton)!=null?dt:W},[y.closeButton,W]),fn=G.useMemo(()=>y.duration||Mt||Hv,[y.duration,Mt]),he=G.useRef(0),ya=G.useRef(0),Hs=G.useRef(0),ba=G.useRef(null),[qi,Fi]=Wt.split("-"),On=G.useMemo(()=>C.reduce((dt,Yt,te)=>te>=Rn?dt:dt+Yt.height,0),[C,Rn]),ii=e6(),ri=y.invert||g,to=Ee==="loading";ya.current=G.useMemo(()=>Rn*we+On,[Rn,On]),G.useEffect(()=>{ve.current=fn},[fn]),G.useEffect(()=>{$(!0)},[]),G.useEffect(()=>{const dt=$e.current;if(dt){const Yt=dt.getBoundingClientRect().height;return Bs(Yt),_(te=>[{toastId:y.id,height:Yt,position:y.position},...te]),()=>_(te=>te.filter(pe=>pe.toastId!==y.id))}},[_,y.id]),G.useLayoutEffect(()=>{if(!F)return;const dt=$e.current,Yt=dt.style.height;dt.style.height="auto";const te=dt.getBoundingClientRect().height;dt.style.height=Yt,Bs(te),_(pe=>pe.find(ie=>ie.toastId===y.id)?pe.map(ie=>ie.toastId===y.id?{...ie,height:te}:ie):[{toastId:y.id,height:te,position:y.position},...pe])},[F,y.title,y.description,_,y.id,y.jsx,y.action,y.cancel]);const dn=G.useCallback(()=>{tt(!0),ai(ya.current),_(dt=>dt.filter(Yt=>Yt.toastId!==y.id)),setTimeout(()=>{Y(y)},p6)},[y,Y,_,ya]);G.useEffect(()=>{if(y.promise&&Ee==="loading"||y.duration===1/0||y.type==="loading")return;let dt;return U||x||ii?(()=>{if(Hs.current<he.current){const pe=new Date().getTime()-he.current;ve.current=ve.current-pe}Hs.current=new Date().getTime()})():(()=>{ve.current!==1/0&&(he.current=new Date().getTime(),dt=setTimeout(()=>{y.onAutoClose==null||y.onAutoClose.call(y,y),dn()},ve.current))})(),()=>clearTimeout(dt)},[U,x,y,Ee,ii,dn]),G.useEffect(()=>{y.delete&&(dn(),y.onDismiss==null||y.onDismiss.call(y,y))},[dn,y.delete]);function js(){var dt;if(q?.loading){var Yt;return G.createElement("div",{className:Pn(P?.loader,y==null||(Yt=y.classNames)==null?void 0:Yt.loader,"sonner-loader"),"data-visible":Ee==="loading"},q.loading)}return G.createElement($4,{className:Pn(P?.loader,y==null||(dt=y.classNames)==null?void 0:dt.loader),visible:Ee==="loading"})}const eo=y.icon||q?.[Ee]||X4(Ee);var va,qs;return G.createElement("li",{tabIndex:0,ref:$e,className:Pn(St,Wu,P?.toast,y==null||(t=y.classNames)==null?void 0:t.toast,P?.default,P?.[Ee],y==null||(i=y.classNames)==null?void 0:i[Ee]),"data-sonner-toast":"","data-rich-colors":(va=y.richColors)!=null?va:j,"data-styled":!(y.jsx||y.unstyled||T),"data-mounted":F,"data-promise":!!y.promise,"data-swiped":jn,"data-removed":it,"data-visible":ji,"data-y-position":qi,"data-x-position":Fi,"data-index":R,"data-front":Vs,"data-swiping":Jt,"data-dismissible":qn,"data-type":Ee,"data-invert":ri,"data-swipe-out":_e,"data-swipe-direction":V,"data-expanded":!!(U||Nt&&F),"data-testid":y.testId,style:{"--index":R,"--toasts-before":R,"--z-index":L.length-R,"--offset":`${it?Jr:ya.current}px`,"--initial-height":Nt?"auto":`${Qu}px`,...at,...y.style},onDragEnd:()=>{lt(!1),w(null),ba.current=null},onPointerDown:dt=>{dt.button!==2&&(to||!qn||(zs.current=new Date,ai(ya.current),dt.target.setPointerCapture(dt.pointerId),dt.target.tagName!=="BUTTON"&&(lt(!0),ba.current={x:dt.clientX,y:dt.clientY})))},onPointerUp:()=>{var dt,Yt,te;if(_e||!qn)return;ba.current=null;const pe=Number(((dt=$e.current)==null?void 0:dt.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),oi=Number(((Yt=$e.current)==null?void 0:Yt.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),ie=new Date().getTime()-((te=zs.current)==null?void 0:te.getTime()),Xt=ht==="x"?pe:oi,Kt=Math.abs(Xt)/ie;if(Math.abs(Xt)>=h6||Kt>.11){ai(ya.current),y.onDismiss==null||y.onDismiss.call(y,y),Z(ht==="x"?pe>0?"right":"left":oi>0?"down":"up"),dn(),ga(!0);return}else{var Dt,le;(Dt=$e.current)==null||Dt.style.setProperty("--swipe-amount-x","0px"),(le=$e.current)==null||le.style.setProperty("--swipe-amount-y","0px")}An(!1),lt(!1),w(null)},onPointerMove:dt=>{var Yt,te,pe;if(!ba.current||!qn||((Yt=window.getSelection())==null?void 0:Yt.toString().length)>0)return;const ie=dt.clientY-ba.current.y,Xt=dt.clientX-ba.current.x;var Kt;const Dt=(Kt=e.swipeDirections)!=null?Kt:m6(Wt);!ht&&(Math.abs(Xt)>1||Math.abs(ie)>1)&&w(Math.abs(Xt)>Math.abs(ie)?"x":"y");let le={x:0,y:0};const Gi=Fn=>1/(1.5+Math.abs(Fn)/20);if(ht==="y"){if(Dt.includes("top")||Dt.includes("bottom"))if(Dt.includes("top")&&ie<0||Dt.includes("bottom")&&ie>0)le.y=ie;else{const Fn=ie*Gi(ie);le.y=Math.abs(Fn)<Math.abs(ie)?Fn:ie}}else if(ht==="x"&&(Dt.includes("left")||Dt.includes("right")))if(Dt.includes("left")&&Xt<0||Dt.includes("right")&&Xt>0)le.x=Xt;else{const Fn=Xt*Gi(Xt);le.x=Math.abs(Fn)<Math.abs(Xt)?Fn:Xt}(Math.abs(le.x)>0||Math.abs(le.y)>0)&&An(!0),(te=$e.current)==null||te.style.setProperty("--swipe-amount-x",`${le.x}px`),(pe=$e.current)==null||pe.style.setProperty("--swipe-amount-y",`${le.y}px`)}},Ae&&!y.jsx&&Ee!=="loading"?G.createElement("button",{"aria-label":Q,"data-disabled":to,"data-close-button":!0,onClick:to||!qn?()=>{}:()=>{dn(),y.onDismiss==null||y.onDismiss.call(y,y)},className:Pn(P?.closeButton,y==null||(o=y.classNames)==null?void 0:o.closeButton)},(qs=q?.close)!=null?qs:t6):null,(Ee||y.icon||y.promise)&&y.icon!==null&&(q?.[Ee]!==null||y.icon)?G.createElement("div",{"data-icon":"",className:Pn(P?.icon,y==null||(l=y.classNames)==null?void 0:l.icon)},y.promise||y.type==="loading"&&!y.icon?y.icon||js():null,y.type!=="loading"?eo:null):null,G.createElement("div",{"data-content":"",className:Pn(P?.content,y==null||(u=y.classNames)==null?void 0:u.content)},G.createElement("div",{"data-title":"",className:Pn(P?.title,y==null||(f=y.classNames)==null?void 0:f.title)},y.jsx?y.jsx:typeof y.title=="function"?y.title():y.title),y.description?G.createElement("div",{"data-description":"",className:Pn(Ut,Ju,P?.description,y==null||(h=y.classNames)==null?void 0:h.description)},typeof y.description=="function"?y.description():y.description):null),G.isValidElement(y.cancel)?y.cancel:y.cancel&&su(y.cancel)?G.createElement("button",{"data-button":!0,"data-cancel":!0,style:y.cancelButtonStyle||K,onClick:dt=>{su(y.cancel)&&qn&&(y.cancel.onClick==null||y.cancel.onClick.call(y.cancel,dt),dn())},className:Pn(P?.cancelButton,y==null||(p=y.classNames)==null?void 0:p.cancelButton)},y.cancel.label):null,G.isValidElement(y.action)?y.action:y.action&&su(y.action)?G.createElement("button",{"data-button":!0,"data-action":!0,style:y.actionButtonStyle||rt,onClick:dt=>{su(y.action)&&(y.action.onClick==null||y.action.onClick.call(y.action,dt),!dt.defaultPrevented&&dn())},className:Pn(P?.actionButton,y==null||(m=y.classNames)==null?void 0:m.actionButton)},y.action.label):null)};function jv(){if(typeof window>"u"||typeof document>"u")return"ltr";const e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function y6(e,t){const i={};return[e,t].forEach((o,l)=>{const u=l===1,f=u?"--mobile-offset":"--offset",h=u?c6:u6;function p(m){["top","right","bottom","left"].forEach(g=>{i[`${f}-${g}`]=typeof m=="number"?`${m}px`:m})}typeof o=="number"||typeof o=="string"?p(o):typeof o=="object"?["top","right","bottom","left"].forEach(m=>{o[m]===void 0?i[`${f}-${m}`]=h:i[`${f}-${m}`]=typeof o[m]=="number"?`${o[m]}px`:o[m]}):p(h)}),i}const b6=G.forwardRef(function(t,i){const{id:o,invert:l,position:u="bottom-right",hotkey:f=["altKey","KeyT"],expand:h,closeButton:p,className:m,offset:g,mobileOffset:y,theme:T="light",richColors:x,duration:_,style:A,visibleToasts:C=l6,toastOptions:R,dir:L=jv(),gap:U=d6,icons:Y,containerAriaLabel:j="Notifications"}=t,[W,at]=G.useState([]),K=G.useMemo(()=>o?W.filter(F=>F.toasterId===o):W.filter(F=>!F.toasterId),[W,o]),rt=G.useMemo(()=>Array.from(new Set([u].concat(K.filter(F=>F.position).map(F=>F.position)))),[K,u]),[St,Ut]=G.useState([]),[Mt,Wt]=G.useState(!1),[we,Nt]=G.useState(!1),[P,q]=G.useState(T!=="system"?T:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),Q=G.useRef(null),ht=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),w=G.useRef(null),V=G.useRef(!1),Z=G.useCallback(F=>{at($=>{var it;return(it=$.find(tt=>tt.id===F.id))!=null&&it.delete||Le.dismiss(F.id),$.filter(({id:tt})=>tt!==F.id)})},[]);return G.useEffect(()=>Le.subscribe(F=>{if(F.dismiss){requestAnimationFrame(()=>{at($=>$.map(it=>it.id===F.id?{...it,delete:!0}:it))});return}setTimeout(()=>{m2.flushSync(()=>{at($=>{const it=$.findIndex(tt=>tt.id===F.id);return it!==-1?[...$.slice(0,it),{...$[it],...F},...$.slice(it+1)]:[F,...$]})})})}),[W]),G.useEffect(()=>{if(T!=="system"){q(T);return}if(T==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?q("dark"):q("light")),typeof window>"u")return;const F=window.matchMedia("(prefers-color-scheme: dark)");try{F.addEventListener("change",({matches:$})=>{q($?"dark":"light")})}catch{F.addListener(({matches:it})=>{try{q(it?"dark":"light")}catch(tt){console.error(tt)}})}},[T]),G.useEffect(()=>{W.length<=1&&Wt(!1)},[W]),G.useEffect(()=>{const F=$=>{var it;if(f.every(lt=>$[lt]||$.code===lt)){var Jt;Wt(!0),(Jt=Q.current)==null||Jt.focus()}$.code==="Escape"&&(document.activeElement===Q.current||(it=Q.current)!=null&&it.contains(document.activeElement))&&Wt(!1)};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[f]),G.useEffect(()=>{if(Q.current)return()=>{w.current&&(w.current.focus({preventScroll:!0}),w.current=null,V.current=!1)}},[Q.current]),G.createElement("section",{ref:i,"aria-label":`${j} ${ht}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},rt.map((F,$)=>{var it;const[tt,Jt]=F.split("-");return K.length?G.createElement("ol",{key:F,dir:L==="auto"?jv():L,tabIndex:-1,ref:Q,className:m,"data-sonner-toaster":!0,"data-sonner-theme":P,"data-y-position":tt,"data-x-position":Jt,style:{"--front-toast-height":`${((it=St[0])==null?void 0:it.height)||0}px`,"--width":`${f6}px`,"--gap":`${U}px`,...A,...y6(g,y)},onBlur:lt=>{V.current&&!lt.currentTarget.contains(lt.relatedTarget)&&(V.current=!1,w.current&&(w.current.focus({preventScroll:!0}),w.current=null))},onFocus:lt=>{lt.target instanceof HTMLElement&&lt.target.dataset.dismissible==="false"||V.current||(V.current=!0,w.current=lt.relatedTarget)},onMouseEnter:()=>Wt(!0),onMouseMove:()=>Wt(!0),onMouseLeave:()=>{we||Wt(!1)},onDragEnd:()=>Wt(!1),onPointerDown:lt=>{lt.target instanceof HTMLElement&&lt.target.dataset.dismissible==="false"||Nt(!0)},onPointerUp:()=>Nt(!1)},K.filter(lt=>!lt.position&&$===0||lt.position===F).map((lt,_e)=>{var ga,jn;return G.createElement(g6,{key:lt.id,icons:Y,index:_e,toast:lt,defaultRichColors:x,duration:(ga=R?.duration)!=null?ga:_,className:R?.className,descriptionClassName:R?.descriptionClassName,invert:l,visibleToasts:C,closeButton:(jn=R?.closeButton)!=null?jn:p,interacting:we,position:F,style:R?.style,unstyled:R?.unstyled,classNames:R?.classNames,cancelButtonStyle:R?.cancelButtonStyle,actionButtonStyle:R?.actionButtonStyle,closeButtonAriaLabel:R?.closeButtonAriaLabel,removeToast:Z,toasts:K.filter(An=>An.position==lt.position),heights:St.filter(An=>An.position==lt.position),setHeights:Ut,expandByDefault:h,gap:U,expanded:Mt,swipeDirections:t.swipeDirections})})):null}))});async function v6(e,t,i){try{await G4(e,t),Vv.success("Login feito com sucesso!"),/android|iphone|ipad|iPod/i.test(navigator.userAgent)?i("/photoupload"):i("/upload")}catch(o){let l="Erro desconhecido ao fazer login.";switch(o.code){case"auth/invalid-email":l="Email inválido.";break;case"auth/user-not-found":case"auth/invalid-credential":case"auth/wrong-password":l="Usuário ou senha incorreto.";break;case"auth/too-many-requests":l="Muitas tentativas. Tente novamente mais tarde.";break;case"auth/missing-password":l="Por favor, digite a senha.";break;default:o.message&&(l=o.message)}Vv.error(l)}}function T6(){const[e,t]=D.useState(""),[i,o]=D.useState(""),l=Rh(),u=()=>v6(e,i,l);return X.jsxs("div",{className:"login-bg",children:[X.jsx(b6,{position:"top-right",autoClose:3e3,closeOnClick:!0}),X.jsxs(ds.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.7},className:"login-card",children:[X.jsxs("div",{className:"login-header",children:[X.jsx("h1",{className:"login-title",children:"Login"}),X.jsx("p",{className:"login-subtitle",children:"Faça login para continuar"})]}),X.jsx("input",{className:"login-input",type:"email",placeholder:"Email",value:e,onChange:f=>t(f.target.value)}),X.jsx("input",{className:"login-input",type:"password",placeholder:"Senha",value:i,onChange:f=>o(f.target.value)}),X.jsx(ds.button,{whileHover:{scale:1.03},whileTap:{scale:.97},className:"login-btn",onClick:u,children:"Entrar"})]})]})}function S6(e){return Vu({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"},child:[]}]})(e)}/**
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
 */const hx="firebasestorage.googleapis.com",px="storageBucket",x6=120*1e3,w6=600*1e3;/**
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
 */class Gt extends En{constructor(t,i,o=0){super(jd(t),`Firebase Storage: ${i} (${jd(t)})`),this.status_=o,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Gt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return jd(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ft;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ft||(Ft={}));function jd(e){return"storage/"+e}function Op(){const e="An unknown error occurred, please check the error payload for server response.";return new Gt(Ft.UNKNOWN,e)}function _6(e){return new Gt(Ft.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function E6(e){return new Gt(Ft.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function A6(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Gt(Ft.UNAUTHENTICATED,e)}function R6(){return new Gt(Ft.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function O6(e){return new Gt(Ft.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function C6(){return new Gt(Ft.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function D6(){return new Gt(Ft.CANCELED,"User canceled the upload/download.")}function k6(e){return new Gt(Ft.INVALID_URL,"Invalid URL '"+e+"'.")}function M6(e){return new Gt(Ft.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function N6(){return new Gt(Ft.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+px+"' property when initializing the app?")}function P6(){return new Gt(Ft.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function I6(){return new Gt(Ft.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function L6(e){return new Gt(Ft.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _h(e){return new Gt(Ft.INVALID_ARGUMENT,e)}function mx(){return new Gt(Ft.APP_DELETED,"The Firebase app was deleted.")}function U6(e){return new Gt(Ft.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ms(e,t){return new Gt(Ft.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function es(e){throw new Gt(Ft.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class Ye{constructor(t,i){this.bucket=t,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,i){let o;try{o=Ye.makeFromUrl(t,i)}catch{return new Ye(t,"")}if(o.path==="")return o;throw M6(t)}static makeFromUrl(t,i){let o=null;const l="([A-Za-z0-9.\\-_]+)";function u(Y){Y.path.charAt(Y.path.length-1)==="/"&&(Y.path_=Y.path_.slice(0,-1))}const f="(/(.*))?$",h=new RegExp("^gs://"+l+f,"i"),p={bucket:1,path:3};function m(Y){Y.path_=decodeURIComponent(Y.path)}const g="v[A-Za-z0-9_]+",y=i.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",x=new RegExp(`^https?://${y}/${g}/b/${l}/o${T}`,"i"),_={bucket:1,path:3},A=i===hx?"(?:storage.googleapis.com|storage.cloud.google.com)":i,C="([^?#]*)",R=new RegExp(`^https?://${A}/${l}/${C}`,"i"),U=[{regex:h,indices:p,postModify:u},{regex:x,indices:_,postModify:m},{regex:R,indices:{bucket:1,path:2},postModify:m}];for(let Y=0;Y<U.length;Y++){const j=U[Y],W=j.regex.exec(t);if(W){const at=W[j.indices.bucket];let K=W[j.indices.path];K||(K=""),o=new Ye(at,K),j.postModify(o);break}}if(o==null)throw k6(t);return o}}class B6{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function z6(e,t,i){let o=1,l=null,u=null,f=!1,h=0;function p(){return h===2}let m=!1;function g(...C){m||(m=!0,t.apply(null,C))}function y(C){l=setTimeout(()=>{l=null,e(x,p())},C)}function T(){u&&clearTimeout(u)}function x(C,...R){if(m){T();return}if(C){T(),g.call(null,C,...R);return}if(p()||f){T(),g.call(null,C,...R);return}o<64&&(o*=2);let U;h===1?(h=2,U=0):U=(o+Math.random())*1e3,y(U)}let _=!1;function A(C){_||(_=!0,T(),!m&&(l!==null?(C||(h=2),clearTimeout(l),y(0)):C||(h=1)))}return y(0),u=setTimeout(()=>{f=!0,A(!0)},i),A}function V6(e){e(!1)}/**
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
 */function H6(e){return e!==void 0}function j6(e){return typeof e=="object"&&!Array.isArray(e)}function Cp(e){return typeof e=="string"||e instanceof String}function qv(e){return Dp()&&e instanceof Blob}function Dp(){return typeof Blob<"u"}function Fv(e,t,i,o){if(o<t)throw _h(`Invalid value for '${e}'. Expected ${t} or greater.`);if(o>i)throw _h(`Invalid value for '${e}'. Expected ${i} or less.`)}/**
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
 */function kp(e,t,i){let o=t;return i==null&&(o=`https://${t}`),`${i}://${o}/v0${e}`}function gx(e){const t=encodeURIComponent;let i="?";for(const o in e)if(e.hasOwnProperty(o)){const l=t(o)+"="+t(e[o]);i=i+l+"&"}return i=i.slice(0,-1),i}var Mi;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Mi||(Mi={}));/**
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
 */function q6(e,t){const i=e>=500&&e<600,l=[408,429].indexOf(e)!==-1,u=t.indexOf(e)!==-1;return i||l||u}/**
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
 */class F6{constructor(t,i,o,l,u,f,h,p,m,g,y,T=!0,x=!1){this.url_=t,this.method_=i,this.headers_=o,this.body_=l,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=h,this.errorCallback_=p,this.timeout_=m,this.progressCallback_=g,this.connectionFactory_=y,this.retry=T,this.isUsingEmulator=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,A)=>{this.resolve_=_,this.reject_=A,this.start_()})}start_(){const t=(o,l)=>{if(l){o(!1,new lu(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=h=>{const p=h.loaded,m=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,m)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const h=u.getErrorCode()===Mi.NO_ERROR,p=u.getStatus();if(!h||q6(p,this.additionalRetryCodes_)&&this.retry){const g=u.getErrorCode()===Mi.ABORT;o(!1,new lu(!1,null,g));return}const m=this.successCodes_.indexOf(p)!==-1;o(!0,new lu(m,u))})},i=(o,l)=>{const u=this.resolve_,f=this.reject_,h=l.connection;if(l.wasSuccessCode)try{const p=this.callback_(h,h.getResponse());H6(p)?u(p):u()}catch(p){f(p)}else if(h!==null){const p=Op();p.serverResponse=h.getErrorText(),this.errorCallback_?f(this.errorCallback_(h,p)):f(p)}else if(l.canceled){const p=this.appDelete_?mx():D6();f(p)}else{const p=C6();f(p)}};this.canceled_?i(!1,new lu(!1,null,!0)):this.backoffId_=z6(t,i,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&V6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lu{constructor(t,i,o){this.wasSuccessCode=t,this.connection=i,this.canceled=!!o}}function G6(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Y6(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function X6(e,t){t&&(e["X-Firebase-GMPID"]=t)}function K6(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function $6(e,t,i,o,l,u,f=!0,h=!1){const p=gx(e.urlParams),m=e.url+p,g=Object.assign({},e.headers);return X6(g,t),G6(g,i),Y6(g,u),K6(g,o),new F6(m,e.method,g,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,l,f,h)}/**
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
 */function Z6(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Q6(...e){const t=Z6();if(t!==void 0){const i=new t;for(let o=0;o<e.length;o++)i.append(e[o]);return i.getBlob()}else{if(Dp())return new Blob(e);throw new Gt(Ft.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function W6(e,t,i){return e.webkitSlice?e.webkitSlice(t,i):e.mozSlice?e.mozSlice(t,i):e.slice?e.slice(t,i):null}/**
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
 */function J6(e){if(typeof atob>"u")throw L6("base-64");return atob(e)}/**
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
 */const In={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qd{constructor(t,i){this.data=t,this.contentType=i||null}}function tN(e,t){switch(e){case In.RAW:return new qd(yx(t));case In.BASE64:case In.BASE64URL:return new qd(bx(e,t));case In.DATA_URL:return new qd(nN(t),aN(t))}throw Op()}function yx(e){const t=[];for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o<=127)t.push(o);else if(o<=2047)t.push(192|o>>6,128|o&63);else if((o&64512)===55296)if(!(i<e.length-1&&(e.charCodeAt(i+1)&64512)===56320))t.push(239,191,189);else{const u=o,f=e.charCodeAt(++i);o=65536|(u&1023)<<10|f&1023,t.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|o&63)}else(o&64512)===56320?t.push(239,191,189):t.push(224|o>>12,128|o>>6&63,128|o&63)}return new Uint8Array(t)}function eN(e){let t;try{t=decodeURIComponent(e)}catch{throw ms(In.DATA_URL,"Malformed data URL.")}return yx(t)}function bx(e,t){switch(e){case In.BASE64:{const l=t.indexOf("-")!==-1,u=t.indexOf("_")!==-1;if(l||u)throw ms(e,"Invalid character '"+(l?"-":"_")+"' found: is it base64url encoded?");break}case In.BASE64URL:{const l=t.indexOf("+")!==-1,u=t.indexOf("/")!==-1;if(l||u)throw ms(e,"Invalid character '"+(l?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let i;try{i=J6(t)}catch(l){throw l.message.includes("polyfill")?l:ms(e,"Invalid character found")}const o=new Uint8Array(i.length);for(let l=0;l<i.length;l++)o[l]=i.charCodeAt(l);return o}class vx{constructor(t){this.base64=!1,this.contentType=null;const i=t.match(/^data:([^,]+)?,/);if(i===null)throw ms(In.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const o=i[1]||null;o!=null&&(this.base64=iN(o,";base64"),this.contentType=this.base64?o.substring(0,o.length-7):o),this.rest=t.substring(t.indexOf(",")+1)}}function nN(e){const t=new vx(e);return t.base64?bx(In.BASE64,t.rest):eN(t.rest)}function aN(e){return new vx(e).contentType}function iN(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class $a{constructor(t,i){let o=0,l="";qv(t)?(this.data_=t,o=t.size,l=t.type):t instanceof ArrayBuffer?(i?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),o=this.data_.length):t instanceof Uint8Array&&(i?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),o=t.length),this.size_=o,this.type_=l}size(){return this.size_}type(){return this.type_}slice(t,i){if(qv(this.data_)){const o=this.data_,l=W6(o,t,i);return l===null?null:new $a(l)}else{const o=new Uint8Array(this.data_.buffer,t,i-t);return new $a(o,!0)}}static getBlob(...t){if(Dp()){const i=t.map(o=>o instanceof $a?o.data_:o);return new $a(Q6.apply(null,i))}else{const i=t.map(f=>Cp(f)?tN(In.RAW,f).data:f.data_);let o=0;i.forEach(f=>{o+=f.byteLength});const l=new Uint8Array(o);let u=0;return i.forEach(f=>{for(let h=0;h<f.length;h++)l[u++]=f[h]}),new $a(l,!0)}}uploadData(){return this.data_}}/**
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
 */function Tx(e){let t;try{t=JSON.parse(e)}catch{return null}return j6(t)?t:null}/**
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
 */function rN(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function oN(e,t){const i=t.split("/").filter(o=>o.length>0).join("/");return e.length===0?i:e+"/"+i}function Sx(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function sN(e,t){return t}class Oe{constructor(t,i,o,l){this.server=t,this.local=i||t,this.writable=!!o,this.xform=l||sN}}let uu=null;function lN(e){return!Cp(e)||e.length<2?e:Sx(e)}function xx(){if(uu)return uu;const e=[];e.push(new Oe("bucket")),e.push(new Oe("generation")),e.push(new Oe("metageneration")),e.push(new Oe("name","fullPath",!0));function t(u,f){return lN(f)}const i=new Oe("name");i.xform=t,e.push(i);function o(u,f){return f!==void 0?Number(f):f}const l=new Oe("size");return l.xform=o,e.push(l),e.push(new Oe("timeCreated")),e.push(new Oe("updated")),e.push(new Oe("md5Hash",null,!0)),e.push(new Oe("cacheControl",null,!0)),e.push(new Oe("contentDisposition",null,!0)),e.push(new Oe("contentEncoding",null,!0)),e.push(new Oe("contentLanguage",null,!0)),e.push(new Oe("contentType",null,!0)),e.push(new Oe("metadata","customMetadata",!0)),uu=e,uu}function uN(e,t){function i(){const o=e.bucket,l=e.fullPath,u=new Ye(o,l);return t._makeStorageReference(u)}Object.defineProperty(e,"ref",{get:i})}function cN(e,t,i){const o={};o.type="file";const l=i.length;for(let u=0;u<l;u++){const f=i[u];o[f.local]=f.xform(o,t[f.server])}return uN(o,e),o}function wx(e,t,i){const o=Tx(t);return o===null?null:cN(e,o,i)}function fN(e,t,i,o){const l=Tx(t);if(l===null||!Cp(l.downloadTokens))return null;const u=l.downloadTokens;if(u.length===0)return null;const f=encodeURIComponent;return u.split(",").map(m=>{const g=e.bucket,y=e.fullPath,T="/b/"+f(g)+"/o/"+f(y),x=kp(T,i,o),_=gx({alt:"media",token:m});return x+_})[0]}function dN(e,t){const i={},o=t.length;for(let l=0;l<o;l++){const u=t[l];u.writable&&(i[u.server]=e[u.local])}return JSON.stringify(i)}class _x{constructor(t,i,o,l){this.url=t,this.method=i,this.handler=o,this.timeout=l,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ex(e){if(!e)throw Op()}function hN(e,t){function i(o,l){const u=wx(e,l,t);return Ex(u!==null),u}return i}function pN(e,t){function i(o,l){const u=wx(e,l,t);return Ex(u!==null),fN(u,l,e.host,e._protocol)}return i}function Ax(e){function t(i,o){let l;return i.getStatus()===401?i.getErrorText().includes("Firebase App Check token is invalid")?l=R6():l=A6():i.getStatus()===402?l=E6(e.bucket):i.getStatus()===403?l=O6(e.path):l=o,l.status=i.getStatus(),l.serverResponse=o.serverResponse,l}return t}function mN(e){const t=Ax(e);function i(o,l){let u=t(o,l);return o.getStatus()===404&&(u=_6(e.path)),u.serverResponse=l.serverResponse,u}return i}function gN(e,t,i){const o=t.fullServerUrl(),l=kp(o,e.host,e._protocol),u="GET",f=e.maxOperationRetryTime,h=new _x(l,u,pN(e,i),f);return h.errorHandler=mN(t),h}function yN(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function bN(e,t,i){const o=Object.assign({},i);return o.fullPath=e.path,o.size=t.size(),o.contentType||(o.contentType=yN(null,t)),o}function vN(e,t,i,o,l){const u=t.bucketOnlyServerUrl(),f={"X-Goog-Upload-Protocol":"multipart"};function h(){let U="";for(let Y=0;Y<2;Y++)U=U+Math.random().toString().slice(2);return U}const p=h();f["Content-Type"]="multipart/related; boundary="+p;const m=bN(t,o,l),g=dN(m,i),y="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+g+`\r
--`+p+`\r
Content-Type: `+m.contentType+`\r
\r
`,T=`\r
--`+p+"--",x=$a.getBlob(y,o,T);if(x===null)throw P6();const _={name:m.fullPath},A=kp(u,e.host,e._protocol),C="POST",R=e.maxUploadRetryTime,L=new _x(A,C,hN(e,i),R);return L.urlParams=_,L.headers=f,L.body=x.uploadData(),L.errorHandler=Ax(t),L}class TN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mi.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mi.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mi.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,i,o,l,u){if(this.sent_)throw es("cannot .send() more than once");if(Ns(t)&&o&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(i,t,!0),u!==void 0)for(const f in u)u.hasOwnProperty(f)&&this.xhr_.setRequestHeader(f,u[f].toString());return l!==void 0?this.xhr_.send(l):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw es("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw es("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw es("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw es("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class SN extends TN{initXhr(){this.xhr_.responseType="text"}}function Rx(){return new SN}/**
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
 */class Ui{constructor(t,i){this._service=t,i instanceof Ye?this._location=i:this._location=Ye.makeFromUrl(i,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,i){return new Ui(t,i)}get root(){const t=new Ye(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Sx(this._location.path)}get storage(){return this._service}get parent(){const t=rN(this._location.path);if(t===null)return null;const i=new Ye(this._location.bucket,t);return new Ui(this._service,i)}_throwIfRoot(t){if(this._location.path==="")throw U6(t)}}function xN(e,t,i){e._throwIfRoot("uploadBytes");const o=vN(e.storage,e._location,xx(),new $a(t,!0),i);return e.storage.makeRequestWithTokens(o,Rx).then(l=>({metadata:l,ref:e}))}function wN(e){e._throwIfRoot("getDownloadURL");const t=gN(e.storage,e._location,xx());return e.storage.makeRequestWithTokens(t,Rx).then(i=>{if(i===null)throw I6();return i})}function _N(e,t){const i=oN(e._location.path,t),o=new Ye(e._location.bucket,i);return new Ui(e.storage,o)}/**
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
 */function EN(e){return/^[A-Za-z]+:\/\//.test(e)}function AN(e,t){return new Ui(e,t)}function Ox(e,t){if(e instanceof Mp){const i=e;if(i._bucket==null)throw N6();const o=new Ui(i,i._bucket);return t!=null?Ox(o,t):o}else return t!==void 0?_N(e,t):e}function RN(e,t){if(t&&EN(t)){if(e instanceof Mp)return AN(e,t);throw _h("To use ref(service, url), the first argument must be a Storage instance.")}else return Ox(e,t)}function Gv(e,t){const i=t?.[px];return i==null?null:Ye.makeFromBucketSpec(i,e)}class Mp{constructor(t,i,o,l,u,f=!1){this.app=t,this._authProvider=i,this._appCheckProvider=o,this._url=l,this._firebaseVersion=u,this._isUsingEmulator=f,this._bucket=null,this._host=hx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=x6,this._maxUploadRetryTime=w6,this._requests=new Set,l!=null?this._bucket=Ye.makeFromBucketSpec(l,this._host):this._bucket=Gv(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ye.makeFromBucketSpec(this._url,t):this._bucket=Gv(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Fv("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Fv("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const i=await t.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ui(this,t)}_makeRequest(t,i,o,l,u=!0){if(this._deleted)return new B6(mx());{const f=$6(t,this._appId,o,l,i,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(t,i){const[o,l]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,i,o,l).getPromise()}}const Yv="@firebase/storage",Xv="0.14.0";/**
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
 */const ON="storage";function CN(e,t,i){return e=Ke(e),xN(e,t,i)}function DN(e){return e=Ke(e),wN(e)}function kN(e,t){return e=Ke(e),RN(e,t)}function MN(e,{instanceIdentifier:t}){const i=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return new Mp(i,o,l,t,Zr)}function NN(){Vn(new wn(ON,MN,"PUBLIC").setMultipleInstances(!0)),cn(Yv,Xv,""),cn(Yv,Xv,"esm2020")}NN();async function PN(e,t){if(!e||!t)throw new Error("Arquivo ou código inválido");try{const i=kN(F4,`construcoes/${t}/${e.name}`);return await CN(i,e),await DN(i)}catch(i){throw console.error("Erro no upload da imagem:",i),i}}function IN(){const[e,t]=useState(""),[i,o]=useState(null),[l,u]=useState(""),[f,h]=useState(!1),p=g=>{o(g.target.files[0])},m=async()=>{if(!i||!e){alert("Informe o código e selecione uma imagem!");return}h(!0);try{const g=await PN(i,e);u(g),alert("Upload concluído com sucesso!")}catch{alert("Erro ao enviar imagem.")}finally{h(!1)}};return X.jsx("div",{className:"photo-upload-root",children:X.jsxs("div",{className:"photo-upload-box",children:[X.jsx("p",{children:"Insira o código da construção"}),X.jsx("input",{className:"photo-upload-input",type:"text",value:e,onChange:g=>t(g.target.value),placeholder:"Código de Construção"}),X.jsx("p",{children:"Insira foto da construção"}),X.jsxs("div",{className:"photo-upload-container",children:[X.jsx("label",{htmlFor:"photo_upload",children:X.jsx(S6,{size:48,color:"white",style:{cursor:"pointer"}})}),X.jsx("input",{id:"photo_upload",type:"file",accept:"image/*",capture:"environment",style:{display:"none"},onChange:p})]}),X.jsx("button",{onClick:m,disabled:f,children:f?"Enviando...":"Enviar Imagem"}),l&&X.jsxs("div",{className:"photo-preview",children:[X.jsx("img",{src:l,alt:"Pré-visualização"}),X.jsxs("p",{children:["URL: ",l]})]})]})})}function LN(){const[e,t]=D.useState(null),[i,o]=D.useState(null),[l,u]=D.useState(null),[f,h]=D.useState(!1);async function p(g){if(!g)return;h(!0);const y=new FormData;y.append("file",g);try{const x=await(await fetch("https://pii-6-sem.onrender.com/upload/file",{method:"POST",body:y})).json();x.urn?(t(x.urn),console.log("Upload concluído, URN:",x.urn)):console.error("Erro no upload:",x)}catch(T){console.error("Erro ao enviar arquivo:",T)}finally{h(!1)}}async function m(g){if(!g)return;const y=new FormData;y.append("file",g);const x=await(await fetch("https://pii-6-sem.onrender.com/upload/image",{method:"POST",body:y})).json();x.imageUrl?(o(x.imageUrl),console.log("Imagem enviada:",x.imageUrl)):console.error("Falha no upload:",x)}return X.jsx(i2,{children:X.jsxs(IE,{children:[X.jsx(ns,{path:"/",element:X.jsx(T6,{})}),X.jsx(ns,{path:"/photoupload",element:X.jsx(IN,{})}),X.jsx(ns,{path:"/upload",element:X.jsx(xC,{onUploadFile:p,onUploadImage:m,isLoading:f})}),X.jsx(ns,{path:"/viewer",element:X.jsx(wC,{urn:e,imageUrl:i,screenshotUrl:l,setScreenshotUrl:u})})]})})}G_.createRoot(document.getElementById("root")).render(X.jsx(D.StrictMode,{children:X.jsx(LN,{})}));
