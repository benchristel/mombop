var dt=(e,n,a)=>new Promise((t,i)=>{var r=l=>{try{s(a.next(l))}catch(c){i(c)}},o=l=>{try{s(a.throw(l))}catch(c){i(c)}},s=l=>l.done?t(l.value):Promise.resolve(l.value).then(r,o);s((a=a.apply(e,n)).next())});function Qe(e,n,a){return a={path:n,exports:{},require:function(t,i){return zu(t,i==null?a.path:i)}},e(a,a.exports),a.exports}function zu(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var No=Object.getOwnPropertySymbols,_u=Object.prototype.hasOwnProperty,Ju=Object.prototype.propertyIsEnumerable;function Vu(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Zu(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var n={},a=0;a<10;a++)n["_"+String.fromCharCode(a)]=a;var t=Object.getOwnPropertyNames(n).map(function(r){return n[r]});if(t.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(r){i[r]=r}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch(r){return!1}}var qu=Zu()?Object.assign:function(e,n){for(var a,t=Vu(e),i,r=1;r<arguments.length;r++){a=Object(arguments[r]);for(var o in a)_u.call(a,o)&&(t[o]=a[o]);if(No){i=No(a);for(var s=0;s<i.length;s++)Ju.call(a,i[s])&&(t[i[s]]=a[i[s]])}}return t},H=qu;var Xu=Qe(function(e,n){var a=60103,t=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var i=60109,r=60110,o=60112;n.Suspense=60113;var s=60115,l=60116;if(typeof Symbol=="function"&&Symbol.for){var c=Symbol.for;a=c("react.element"),t=c("react.portal"),n.Fragment=c("react.fragment"),n.StrictMode=c("react.strict_mode"),n.Profiler=c("react.profiler"),i=c("react.provider"),r=c("react.context"),o=c("react.forward_ref"),n.Suspense=c("react.suspense"),s=c("react.memo"),l=c("react.lazy")}var y=typeof Symbol=="function"&&Symbol.iterator;function W(h){return h===null||typeof h!="object"?null:(h=y&&h[y]||h["@@iterator"],typeof h=="function"?h:null)}function m(h){for(var T="https://reactjs.org/docs/error-decoder.html?invariant="+h,R=1;R<arguments.length;R++)T+="&args[]="+encodeURIComponent(arguments[R]);return"Minified React error #"+h+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P={};function E(h,T,R){this.props=h,this.context=T,this.refs=P,this.updater=R||M}E.prototype.isReactComponent={},E.prototype.setState=function(h,T){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error(m(85));this.updater.enqueueSetState(this,h,T,"setState")},E.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function g(){}g.prototype=E.prototype;function u(h,T,R){this.props=h,this.context=T,this.refs=P,this.updater=R||M}var d=u.prototype=new g;d.constructor=u,H(d,E.prototype),d.isPureReactComponent=!0;var p={current:null},f=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function A(h,T,R){var b,S={},v=null,w=null;if(T!=null)for(b in T.ref!==void 0&&(w=T.ref),T.key!==void 0&&(v=""+T.key),T)f.call(T,b)&&!O.hasOwnProperty(b)&&(S[b]=T[b]);var B=arguments.length-2;if(B===1)S.children=R;else if(1<B){for(var D=Array(B),q=0;q<B;q++)D[q]=arguments[q+2];S.children=D}if(h&&h.defaultProps)for(b in B=h.defaultProps,B)S[b]===void 0&&(S[b]=B[b]);return{$$typeof:a,type:h,key:v,ref:w,props:S,_owner:p.current}}function C(h,T){return{$$typeof:a,type:h.type,key:T,ref:h.ref,props:h.props,_owner:h._owner}}function K(h){return typeof h=="object"&&h!==null&&h.$$typeof===a}function N(h){var T={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(R){return T[R]})}var z=/\/+/g;function he(h,T){return typeof h=="object"&&h!==null&&h.key!=null?N(""+h.key):T.toString(36)}function Un(h,T,R,b,S){var v=typeof h;(v==="undefined"||v==="boolean")&&(h=null);var w=!1;if(h===null)w=!0;else switch(v){case"string":case"number":w=!0;break;case"object":switch(h.$$typeof){case a:case t:w=!0}}if(w)return w=h,S=S(w),h=b===""?"."+he(w,0):b,Array.isArray(S)?(R="",h!=null&&(R=h.replace(z,"$&/")+"/"),Un(S,T,R,"",function(q){return q})):S!=null&&(K(S)&&(S=C(S,R+(!S.key||w&&w.key===S.key?"":(""+S.key).replace(z,"$&/")+"/")+h)),T.push(S)),1;if(w=0,b=b===""?".":b+":",Array.isArray(h))for(var B=0;B<h.length;B++){v=h[B];var D=b+he(v,B);w+=Un(v,T,R,D,S)}else if(D=W(h),typeof D=="function")for(h=D.call(h),B=0;!(v=h.next()).done;)v=v.value,D=b+he(v,B++),w+=Un(v,T,R,D,S);else if(v==="object")throw T=""+h,Error(m(31,T==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":T));return w}function ae(h,T,R){if(h==null)return h;var b=[],S=0;return Un(h,b,"","",function(v){return T.call(R,v,S++)}),b}function ne(h){if(h._status===-1){var T=h._result;T=T(),h._status=0,h._result=T,T.then(function(R){h._status===0&&(R=R.default,h._status=1,h._result=R)},function(R){h._status===0&&(h._status=2,h._result=R)})}if(h._status===1)return h._result;throw h._result}var pn={current:null};function te(){var h=pn.current;if(h===null)throw Error(m(321));return h}var fn={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:p,IsSomeRendererActing:{current:!1},assign:H};n.Children={map:ae,forEach:function(h,T,R){ae(h,function(){T.apply(this,arguments)},R)},count:function(h){var T=0;return ae(h,function(){T++}),T},toArray:function(h){return ae(h,function(T){return T})||[]},only:function(h){if(!K(h))throw Error(m(143));return h}},n.Component=E,n.PureComponent=u,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fn,n.cloneElement=function(h,T,R){if(h==null)throw Error(m(267,h));var b=H({},h.props),S=h.key,v=h.ref,w=h._owner;if(T!=null){if(T.ref!==void 0&&(v=T.ref,w=p.current),T.key!==void 0&&(S=""+T.key),h.type&&h.type.defaultProps)var B=h.type.defaultProps;for(D in T)f.call(T,D)&&!O.hasOwnProperty(D)&&(b[D]=T[D]===void 0&&B!==void 0?B[D]:T[D])}var D=arguments.length-2;if(D===1)b.children=R;else if(1<D){B=Array(D);for(var q=0;q<D;q++)B[q]=arguments[q+2];b.children=B}return{$$typeof:a,type:h.type,key:S,ref:v,props:b,_owner:w}},n.createContext=function(h,T){return T===void 0&&(T=null),h={$$typeof:r,_calculateChangedBits:T,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider={$$typeof:i,_context:h},h.Consumer=h},n.createElement=A,n.createFactory=function(h){var T=A.bind(null,h);return T.type=h,T},n.createRef=function(){return{current:null}},n.forwardRef=function(h){return{$$typeof:o,render:h}},n.isValidElement=K,n.lazy=function(h){return{$$typeof:l,_payload:{_status:-1,_result:h},_init:ne}},n.memo=function(h,T){return{$$typeof:s,type:h,compare:T===void 0?null:T}},n.useCallback=function(h,T){return te().useCallback(h,T)},n.useContext=function(h,T){return te().useContext(h,T)},n.useDebugValue=function(){},n.useEffect=function(h,T){return te().useEffect(h,T)},n.useImperativeHandle=function(h,T,R){return te().useImperativeHandle(h,T,R)},n.useLayoutEffect=function(h,T){return te().useLayoutEffect(h,T)},n.useMemo=function(h,T){return te().useMemo(h,T)},n.useReducer=function(h,T,R){return te().useReducer(h,T,R)},n.useRef=function(h){return te().useRef(h)},n.useState=function(h){return te().useState(h)},n.version="17.0.2"}),L=Qe(function(e){e.exports=Xu});var ih=L.Children,rh=L.Component,Gn=L.Fragment,oh=L.Profiler,sh=L.PureComponent,lh=L.StrictMode,uh=L.Suspense,dh=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ch=L.cloneElement,gh=L.createContext,F=L.createElement,hh=L.createFactory,ph=L.createRef,fh=L.forwardRef,mh=L.isValidElement,Sh=L.lazy,kh=L.memo,yh=L.useCallback,Th=L.useContext,Ah=L.useDebugValue,je=L.useEffect,vh=L.useImperativeHandle,Ih=L.useLayoutEffect,Mh=L.useMemo,Eh=L.useReducer,Sn=L.useRef,we=L.useState,Ch=L.version;var $u=Qe(function(e,n){var a,t,i,r;if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();n.unstable_now=function(){return s.now()-l}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var c=null,y=null,W=function(){if(c!==null)try{var S=n.unstable_now();c(!0,S),c=null}catch(v){throw setTimeout(W,0),v}};a=function(S){c!==null?setTimeout(a,0,S):(c=S,setTimeout(W,0))},t=function(S,v){y=setTimeout(S,v)},i=function(){clearTimeout(y)},n.unstable_shouldYield=function(){return!1},r=n.unstable_forceFrameRate=function(){}}else{var m=window.setTimeout,M=window.clearTimeout;if(typeof console!="undefined"){var P=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof P!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var E=!1,g=null,u=-1,d=5,p=0;n.unstable_shouldYield=function(){return n.unstable_now()>=p},r=function(){},n.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):d=0<S?Math.floor(1e3/S):5};var f=new MessageChannel,O=f.port2;f.port1.onmessage=function(){if(g!==null){var S=n.unstable_now();p=S+d;try{g(!0,S)?O.postMessage(null):(E=!1,g=null)}catch(v){throw O.postMessage(null),v}}else E=!1},a=function(S){g=S,E||(E=!0,O.postMessage(null))},t=function(S,v){u=m(function(){S(n.unstable_now())},v)},i=function(){M(u),u=-1}}function A(S,v){var w=S.length;S.push(v);e:for(;;){var B=w-1>>>1,D=S[B];if(D!==void 0&&0<N(D,v))S[B]=v,S[w]=D,w=B;else break e}}function C(S){return S=S[0],S===void 0?null:S}function K(S){var v=S[0];if(v!==void 0){var w=S.pop();if(w!==v){S[0]=w;e:for(var B=0,D=S.length;B<D;){var q=2*(B+1)-1,mn=S[q],ga=q+1,Bn=S[ga];if(mn!==void 0&&0>N(mn,w))Bn!==void 0&&0>N(Bn,mn)?(S[B]=Bn,S[ga]=w,B=ga):(S[B]=mn,S[q]=w,B=q);else if(Bn!==void 0&&0>N(Bn,w))S[B]=Bn,S[ga]=w,B=ga;else break e}}return v}return null}function N(S,v){var w=S.sortIndex-v.sortIndex;return w!==0?w:S.id-v.id}var z=[],he=[],Un=1,ae=null,ne=3,pn=!1,te=!1,fn=!1;function h(S){for(var v=C(he);v!==null;){if(v.callback===null)K(he);else if(v.startTime<=S)K(he),v.sortIndex=v.expirationTime,A(z,v);else break;v=C(he)}}function T(S){if(fn=!1,h(S),!te)if(C(z)!==null)te=!0,a(R);else{var v=C(he);v!==null&&t(T,v.startTime-S)}}function R(S,v){te=!1,fn&&(fn=!1,i()),pn=!0;var w=ne;try{for(h(v),ae=C(z);ae!==null&&(!(ae.expirationTime>v)||S&&!n.unstable_shouldYield());){var B=ae.callback;if(typeof B=="function"){ae.callback=null,ne=ae.priorityLevel;var D=B(ae.expirationTime<=v);v=n.unstable_now(),typeof D=="function"?ae.callback=D:ae===C(z)&&K(z),h(v)}else K(z);ae=C(z)}if(ae!==null)var q=!0;else{var mn=C(he);mn!==null&&t(T,mn.startTime-v),q=!1}return q}finally{ae=null,ne=w,pn=!1}}var b=r;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(S){S.callback=null},n.unstable_continueExecution=function(){te||pn||(te=!0,a(R))},n.unstable_getCurrentPriorityLevel=function(){return ne},n.unstable_getFirstCallbackNode=function(){return C(z)},n.unstable_next=function(S){switch(ne){case 1:case 2:case 3:var v=3;break;default:v=ne}var w=ne;ne=v;try{return S()}finally{ne=w}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=b,n.unstable_runWithPriority=function(S,v){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var w=ne;ne=S;try{return v()}finally{ne=w}},n.unstable_scheduleCallback=function(S,v,w){var B=n.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?B+w:B):w=B,S){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=w+D,S={id:Un++,callback:v,priorityLevel:S,startTime:w,expirationTime:D,sortIndex:-1},w>B?(S.sortIndex=w,A(he,S),C(z)===null&&S===C(he)&&(fn?i():fn=!0,t(T,w-B))):(S.sortIndex=D,A(z,S),te||pn||(te=!0,a(R))),S},n.unstable_wrapCallback=function(S){var v=ne;return function(){var w=ne;ne=v;try{return S.apply(this,arguments)}finally{ne=w}}}}),X=Qe(function(e){e.exports=$u});function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!L)throw Error(k(227));var Ko=new Set,ha={};function kn(e,n){Dn(e,n),Dn(e+"Capture",n)}function Dn(e,n){for(ha[e]=n,e=0;e<n.length;e++)Ko.add(n[e])}var Le=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ed=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uo=Object.prototype.hasOwnProperty,Bo={},Go={};function nd(e){return Uo.call(Go,e)?!0:Uo.call(Bo,e)?!1:ed.test(e)?Go[e]=!0:(Bo[e]=!0,!1)}function ad(e,n,a,t){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function td(e,n,a,t){if(n===null||typeof n=="undefined"||ad(e,n,a,t))return!0;if(t)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,a,t,i,r,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=i,this.mustUseProperty=a,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ie[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ai=/[\-:]([a-z])/g;function vi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ai,vi);ie[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ai,vi);ie[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ai,vi);ie[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ii(e,n,a,t){var i=ie.hasOwnProperty(n)?ie[n]:null,r=i!==null?i.type===0:t?!1:!(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N");r||(td(n,a,i,t)&&(a=null),t||i===null?nd(n)&&(a===null?e.removeAttribute(n):e.setAttribute(n,""+a)):i.mustUseProperty?e[i.propertyName]=a===null?i.type===3?!1:"":a:(n=i.attributeName,t=i.attributeNamespace,a===null?e.removeAttribute(n):(i=i.type,a=i===3||i===4&&a===!0?"":""+a,t?e.setAttributeNS(t,n,a):e.setAttribute(n,a))))}var yn=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=60103,Tn=60106,ze=60107,Mi=60108,fa=60114,Ei=60109,Ci=60110,ct=60112,ma=60113,gt=60120,ht=60115,wi=60116,Wi=60121,Pi=60128,Do=60129,Oi=60130,Ni=60131;typeof Symbol=="function"&&Symbol.for&&($=Symbol.for,pa=$("react.element"),Tn=$("react.portal"),ze=$("react.fragment"),Mi=$("react.strict_mode"),fa=$("react.profiler"),Ei=$("react.provider"),Ci=$("react.context"),ct=$("react.forward_ref"),ma=$("react.suspense"),gt=$("react.suspense_list"),ht=$("react.memo"),wi=$("react.lazy"),Wi=$("react.block"),$("react.scope"),Pi=$("react.opaque.id"),Do=$("react.debug_trace_mode"),Oi=$("react.offscreen"),Ni=$("react.legacy_hidden"));var $,Ro=typeof Symbol=="function"&&Symbol.iterator;function Sa(e){return e===null||typeof e!="object"?null:(e=Ro&&e[Ro]||e["@@iterator"],typeof e=="function"?e:null)}var Ki;function ka(e){if(Ki===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ki=n&&n[1]||""}return`
`+Ki+e}var Ui=!1;function pt(e,n){if(!e||Ui)return"";Ui=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(l){var t=l}Reflect.construct(e,[],n)}else{try{n.call()}catch(l){t=l}e.call(n.prototype)}else{try{throw Error()}catch(l){t=l}e()}}catch(l){if(l&&t&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),r=t.stack.split(`
`),o=i.length-1,s=r.length-1;1<=o&&0<=s&&i[o]!==r[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==r[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==r[s])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=s);break}}}finally{Ui=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?ka(e):""}function id(e){switch(e.tag){case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return e=pt(e.type,!1),e;case 11:return e=pt(e.type.render,!1),e;case 22:return e=pt(e.type._render,!1),e;case 1:return e=pt(e.type,!0),e;default:return""}}function Rn(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ze:return"Fragment";case Tn:return"Portal";case fa:return"Profiler";case Mi:return"StrictMode";case ma:return"Suspense";case gt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ci:return(e.displayName||"Context")+".Consumer";case Ei:return(e._context.displayName||"Context")+".Provider";case ct:var n=e.render;return n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case ht:return Rn(e.type);case Wi:return Rn(e._render);case wi:n=e._payload,e=e._init;try{return Rn(e(n))}catch(a){}}return null}function _e(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Lo(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rd(e){var n=Lo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof a!="undefined"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){t=""+o,r.call(this,o)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(o){t=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ft(e){e._valueTracker||(e._valueTracker=rd(e))}function Ho(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),t="";return e&&(t=Lo(e)?e.checked?"true":"false":e.value),e=t,e!==a?(n.setValue(e),!0):!1}function mt(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(n){return e.body}}function Bi(e,n){var a=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a!=null?a:e._wrapperState.initialChecked})}function bo(e,n){var a=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;a=_e(n.value!=null?n.value:a),e._wrapperState={initialChecked:t,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Fo(e,n){n=n.checked,n!=null&&Ii(e,"checked",n,!1)}function Di(e,n){Fo(e,n);var a=_e(n.value),t=n.type;if(a!=null)t==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Gi(e,n.type,a):n.hasOwnProperty("defaultValue")&&Gi(e,n.type,_e(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Yo(e,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,a||n===e.value||(e.value=n),e.defaultValue=n}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Gi(e,n,a){(n!=="number"||mt(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}function od(e){var n="";return L.Children.forEach(e,function(a){a!=null&&(n+=a)}),n}function Ri(e,n){return e=H({children:void 0},n),(n=od(n.children))&&(e.children=n),e}function Ln(e,n,a,t){if(e=e.options,n){n={};for(var i=0;i<a.length;i++)n["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=n.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&t&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,t&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Li(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xo(e,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(k(92));if(Array.isArray(a)){if(!(1>=a.length))throw Error(k(93));a=a[0]}n=a}n==null&&(n=""),a=n}e._wrapperState={initialValue:_e(a)}}function Qo(e,n){var a=_e(n.value),t=_e(n.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),n.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),t!=null&&(e.defaultValue=""+t)}function jo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}var Hi={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function zo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?zo(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var St,_o=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(n,a,t,i){MSApp.execUnsafeLocalFunction(function(){return e(n,a,t,i)})}:e}(function(e,n){if(e.namespaceURI!==Hi.svg||"innerHTML"in e)e.innerHTML=n;else{for(St=St||document.createElement("div"),St.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=St.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ya(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ta={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sd=["Webkit","ms","Moz","O"];Object.keys(Ta).forEach(function(e){sd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ta[n]=Ta[e]})});function Jo(e,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||Ta.hasOwnProperty(e)&&Ta[e]?(""+n).trim():n+"px"}function Vo(e,n){e=e.style;for(var a in n)if(n.hasOwnProperty(a)){var t=a.indexOf("--")===0,i=Jo(a,n[a],t);a==="float"&&(a="cssFloat"),t?e.setProperty(a,i):e[a]=i}}var ld=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fi(e,n){if(n){if(ld[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(!(typeof n.dangerouslySetInnerHTML=="object"&&"__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Yi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qi=null,Hn=null,bn=null;function Zo(e){if(e=Aa(e)){if(typeof Qi!="function")throw Error(k(280));var n=e.stateNode;n&&(n=kt(n),Qi(e.stateNode,e.type,n))}}function qo(e){Hn?bn?bn.push(e):bn=[e]:Hn=e}function Xo(){if(Hn){var e=Hn,n=bn;if(bn=Hn=null,Zo(e),n)for(e=0;e<n.length;e++)Zo(n[e])}}function ji(e,n){return e(n)}function $o(e,n,a,t,i){return e(n,a,t,i)}function zi(){}var es=ji,An=!1,_i=!1;function Ji(){(Hn!==null||bn!==null)&&(zi(),Xo())}function ud(e,n,a){if(_i)return e(n,a);_i=!0;try{return es(e,n,a)}finally{_i=!1,Ji()}}function va(e,n){var a=e.stateNode;if(a===null)return null;var t=kt(a);if(t===null)return null;a=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(k(231,n,typeof a));return a}var Vi=!1;if(Le)try{Fn={},Object.defineProperty(Fn,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch(e){Vi=!1}var Fn;function dd(e,n,a,t,i,r,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{n.apply(a,c)}catch(y){this.onError(y)}}var Ia=!1,yt=null,Tt=!1,Zi=null,cd={onError:function(e){Ia=!0,yt=e}};function gd(e,n,a,t,i,r,o,s,l){Ia=!1,yt=null,dd.apply(cd,arguments)}function hd(e,n,a,t,i,r,o,s,l){if(gd.apply(this,arguments),Ia){if(Ia){var c=yt;Ia=!1,yt=null}else throw Error(k(198));Tt||(Tt=!0,Zi=c)}}function vn(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&1026)!=0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function ns(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function as(e){if(vn(e)!==e)throw Error(k(188))}function pd(e){var n=e.alternate;if(!n){if(n=vn(e),n===null)throw Error(k(188));return n!==e?null:e}for(var a=e,t=n;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(t=i.return,t!==null){a=t;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return as(i),e;if(r===t)return as(i),n;r=r.sibling}throw Error(k(188))}if(a.return!==t.return)a=i,t=r;else{for(var o=!1,s=i.child;s;){if(s===a){o=!0,a=i,t=r;break}if(s===t){o=!0,t=i,a=r;break}s=s.sibling}if(!o){for(s=r.child;s;){if(s===a){o=!0,a=r,t=i;break}if(s===t){o=!0,t=r,a=i;break}s=s.sibling}if(!o)throw Error(k(189))}}if(a.alternate!==t)throw Error(k(190))}if(a.tag!==3)throw Error(k(188));return a.stateNode.current===a?e:n}function ts(e){if(e=pd(e),!e)return null;for(var n=e;;){if(n.tag===5||n.tag===6)return n;if(n.child)n.child.return=n,n=n.child;else{if(n===e)break;for(;!n.sibling;){if(!n.return||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}return null}function is(e,n){for(var a=e.alternate;n!==null;){if(n===e||n===a)return!0;n=n.return}return!1}var rs,qi,os,ss,Xi=!1,Oe=[],Je=null,Ve=null,Ze=null,Ma=new Map,Ea=new Map,Ca=[],ls="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $i(e,n,a,t,i){return{blockedOn:e,domEventName:n,eventSystemFlags:a|16,nativeEvent:i,targetContainers:[t]}}function us(e,n){switch(e){case"focusin":case"focusout":Je=null;break;case"dragenter":case"dragleave":Ve=null;break;case"mouseover":case"mouseout":Ze=null;break;case"pointerover":case"pointerout":Ma.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(n.pointerId)}}function wa(e,n,a,t,i,r){return e===null||e.nativeEvent!==r?(e=$i(n,a,t,i,r),n!==null&&(n=Aa(n),n!==null&&qi(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function fd(e,n,a,t,i){switch(n){case"focusin":return Je=wa(Je,e,n,a,t,i),!0;case"dragenter":return Ve=wa(Ve,e,n,a,t,i),!0;case"mouseover":return Ze=wa(Ze,e,n,a,t,i),!0;case"pointerover":var r=i.pointerId;return Ma.set(r,wa(Ma.get(r)||null,e,n,a,t,i)),!0;case"gotpointercapture":return r=i.pointerId,Ea.set(r,wa(Ea.get(r)||null,e,n,a,t,i)),!0}return!1}function md(e){var n=In(e.target);if(n!==null){var a=vn(n);if(a!==null){if(n=a.tag,n===13){if(n=ns(a),n!==null){e.blockedOn=n,ss(e.lanePriority,function(){X.unstable_runWithPriority(e.priority,function(){os(a)})});return}}else if(n===3&&a.stateNode.hydrate){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function At(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=er(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(a!==null)return n=Aa(a),n!==null&&qi(n),e.blockedOn=a,!1;n.shift()}return!0}function ds(e,n,a){At(e)&&a.delete(n)}function Sd(){for(Xi=!1;0<Oe.length;){var e=Oe[0];if(e.blockedOn!==null){e=Aa(e.blockedOn),e!==null&&rs(e);break}for(var n=e.targetContainers;0<n.length;){var a=er(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(a!==null){e.blockedOn=a;break}n.shift()}e.blockedOn===null&&Oe.shift()}Je!==null&&At(Je)&&(Je=null),Ve!==null&&At(Ve)&&(Ve=null),Ze!==null&&At(Ze)&&(Ze=null),Ma.forEach(ds),Ea.forEach(ds)}function Wa(e,n){e.blockedOn===n&&(e.blockedOn=null,Xi||(Xi=!0,X.unstable_scheduleCallback(X.unstable_NormalPriority,Sd)))}function cs(e){function n(i){return Wa(i,e)}if(0<Oe.length){Wa(Oe[0],e);for(var a=1;a<Oe.length;a++){var t=Oe[a];t.blockedOn===e&&(t.blockedOn=null)}}for(Je!==null&&Wa(Je,e),Ve!==null&&Wa(Ve,e),Ze!==null&&Wa(Ze,e),Ma.forEach(n),Ea.forEach(n),a=0;a<Ca.length;a++)t=Ca[a],t.blockedOn===e&&(t.blockedOn=null);for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)md(a),a.blockedOn===null&&Ca.shift()}function vt(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Yn={animationend:vt("Animation","AnimationEnd"),animationiteration:vt("Animation","AnimationIteration"),animationstart:vt("Animation","AnimationStart"),transitionend:vt("Transition","TransitionEnd")},nr={},gs={};Le&&(gs=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function It(e){if(nr[e])return nr[e];if(!Yn[e])return e;var n=Yn[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in gs)return nr[e]=n[a];return e}var hs=It("animationend"),ps=It("animationiteration"),fs=It("animationstart"),ms=It("transitionend"),Ss=new Map,ar=new Map,kd=["abort","abort",hs,"animationEnd",ps,"animationIteration",fs,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",ms,"transitionEnd","waiting","waiting"];function tr(e,n){for(var a=0;a<e.length;a+=2){var t=e[a],i=e[a+1];i="on"+(i[0].toUpperCase()+i.slice(1)),ar.set(t,n),Ss.set(t,i),kn(i,[t])}}var yd=X.unstable_now;yd();var Y=8;function xn(e){if((1&e)!=0)return Y=15,1;if((2&e)!=0)return Y=14,2;if((4&e)!=0)return Y=13,4;var n=24&e;return n!==0?(Y=12,n):(e&32)!=0?(Y=11,32):(n=192&e,n!==0?(Y=10,n):(e&256)!=0?(Y=9,256):(n=3584&e,n!==0?(Y=8,n):(e&4096)!=0?(Y=7,4096):(n=4186112&e,n!==0?(Y=6,n):(n=62914560&e,n!==0?(Y=5,n):e&67108864?(Y=4,67108864):(e&134217728)!=0?(Y=3,134217728):(n=805306368&e,n!==0?(Y=2,n):(1073741824&e)!=0?(Y=1,1073741824):(Y=8,e))))))}function Td(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Ad(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(k(358,e))}}function Pa(e,n){var a=e.pendingLanes;if(a===0)return Y=0;var t=0,i=0,r=e.expiredLanes,o=e.suspendedLanes,s=e.pingedLanes;if(r!==0)t=r,i=Y=15;else if(r=a&134217727,r!==0){var l=r&~o;l!==0?(t=xn(l),i=Y):(s&=r,s!==0&&(t=xn(s),i=Y))}else r=a&~o,r!==0?(t=xn(r),i=Y):s!==0&&(t=xn(s),i=Y);if(t===0)return 0;if(t=31-qe(t),t=a&((0>t?0:1<<t)<<1)-1,n!==0&&n!==t&&(n&o)==0){if(xn(n),i<=Y)return n;Y=i}if(n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)a=31-qe(n),i=1<<a,t|=e[a],n&=~i;return t}function ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mt(e,n){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Qn(24&~n),e===0?Mt(10,n):e;case 10:return e=Qn(192&~n),e===0?Mt(8,n):e;case 8:return e=Qn(3584&~n),e===0&&(e=Qn(4186112&~n),e===0&&(e=512)),e;case 2:return n=Qn(805306368&~n),n===0&&(n=268435456),n}throw Error(k(358,e))}function Qn(e){return e&-e}function ir(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Et(e,n,a){e.pendingLanes|=n;var t=n-1;e.suspendedLanes&=t,e.pingedLanes&=t,e=e.eventTimes,n=31-qe(n),e[n]=a}var qe=Math.clz32?Math.clz32:vd,Id=Math.log,Md=Math.LN2;function vd(e){return e===0?32:31-(Id(e)/Md|0)|0}var Ed=X.unstable_UserBlockingPriority,Cd=X.unstable_runWithPriority,Ct=!0;function wd(e,n,a,t){An||zi();var i=rr,r=An;An=!0;try{$o(i,e,n,a,t)}finally{(An=r)||Ji()}}function Wd(e,n,a,t){Cd(Ed,rr.bind(null,e,n,a,t))}function rr(e,n,a,t){if(Ct){var i;if((i=(n&4)==0)&&0<Oe.length&&-1<ls.indexOf(e))e=$i(null,e,n,a,t),Oe.push(e);else{var r=er(e,n,a,t);if(r===null)i&&us(e,t);else{if(i){if(-1<ls.indexOf(e)){e=$i(r,e,n,a,t),Oe.push(e);return}if(fd(r,e,n,a,t))return;us(e,t)}ys(e,n,t,null,a)}}}}function er(e,n,a,t){var i=xi(t);if(i=In(i),i!==null){var r=vn(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=ns(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.hydrate)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return ys(e,n,t,i,a),null}var Xe=null,or=null,wt=null;function Ts(){if(wt)return wt;var e,n=or,a=n.length,t,i="value"in Xe?Xe.value:Xe.textContent,r=i.length;for(e=0;e<a&&n[e]===i[e];e++);var o=a-e;for(t=1;t<=o&&n[a-t]===i[r-t];t++);return wt=i.slice(e,1<t?1-t:void 0)}function Wt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Pt(){return!0}function As(){return!1}function ye(e){function n(a,t,i,r,o){this._reactName=a,this._targetInst=i,this.type=t,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Pt:As,this.isPropagationStopped=As,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pt)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pt)},persist:function(){},isPersistent:Pt}),n}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sr=ye(jn),Oa=H({},jn,{view:0,detail:0}),Pd=ye(Oa),lr,ur,Na,Ot=H({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Na&&(Na&&e.type==="mousemove"?(lr=e.screenX-Na.screenX,ur=e.screenY-Na.screenY):ur=lr=0,Na=e),lr)},movementY:function(e){return"movementY"in e?e.movementY:ur}}),vs=ye(Ot),Od=H({},Ot,{dataTransfer:0}),Nd=ye(Od),Kd=H({},Oa,{relatedTarget:0}),cr=ye(Kd),Ud=H({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=ye(Ud),Gd=H({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dd=ye(Gd),Rd=H({},jn,{data:0}),Is=ye(Rd),Ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=bd[e])?!!n[e]:!1}function dr(){return Fd}var Yd=H({},Oa,{key:function(e){if(e.key){var n=Ld[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dr,charCode:function(e){return e.type==="keypress"?Wt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xd=ye(Yd),Qd=H({},Ot,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ms=ye(Qd),jd=H({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dr}),zd=ye(jd),_d=H({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jd=ye(_d),Vd=H({},Ot,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=ye(Vd),qd=[9,13,27,32],gr=Le&&"CompositionEvent"in window,Ka=null;Le&&"documentMode"in document&&(Ka=document.documentMode);var Xd=Le&&"TextEvent"in window&&!Ka,Es=Le&&(!gr||Ka&&8<Ka&&11>=Ka),Cs=String.fromCharCode(32),ws=!1;function Ws(e,n){switch(e){case"keyup":return qd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ps(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function $d(e,n){switch(e){case"compositionend":return Ps(n);case"keypress":return n.which!==32?null:(ws=!0,Cs);case"textInput":return e=n.data,e===Cs&&ws?null:e;default:return null}}function ec(e,n){if(zn)return e==="compositionend"||!gr&&Ws(e,n)?(e=Ts(),wt=or=Xe=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Es&&n.locale!=="ko"?null:n.data;default:return null}}var nc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Os(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!nc[e.type]:n==="textarea"}function Ns(e,n,a,t){qo(t),n=Nt(n,"onChange"),0<n.length&&(a=new sr("onChange","change",null,a,t),e.push({event:a,listeners:n}))}var Ua=null,Ba=null;function ac(e){Ks(e,0)}function Kt(e){var n=_n(e);if(Ho(n))return e}function tc(e,n){if(e==="change")return n}var Us=!1;Le&&(Le?(Bt="oninput"in document,Bt||(hr=document.createElement("div"),hr.setAttribute("oninput","return;"),Bt=typeof hr.oninput=="function"),Ut=Bt):Ut=!1,Us=Ut&&(!document.documentMode||9<document.documentMode));var Ut,Bt,hr;function Gs(){Ua&&(Ua.detachEvent("onpropertychange",Bs),Ba=Ua=null)}function Bs(e){if(e.propertyName==="value"&&Kt(Ba)){var n=[];if(Ns(n,Ba,e,xi(e)),e=ac,An)e(n);else{An=!0;try{ji(e,n)}finally{An=!1,Ji()}}}}function ic(e,n,a){e==="focusin"?(Gs(),Ua=n,Ba=a,Ua.attachEvent("onpropertychange",Bs)):e==="focusout"&&Gs()}function rc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kt(Ba)}function oc(e,n){if(e==="click")return Kt(n)}function sc(e,n){if(e==="input"||e==="change")return Kt(n)}function lc(e,n){return e===n&&(e!==0||1/e==1/n)||e!==e&&n!==n}var Ae=typeof Object.is=="function"?Object.is:lc,uc=Object.prototype.hasOwnProperty;function Ga(e,n){if(Ae(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),t=Object.keys(n);if(a.length!==t.length)return!1;for(t=0;t<a.length;t++)if(!uc.call(n,a[t])||!Ae(e[a[t]],n[a[t]]))return!1;return!0}function Ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rs(e,n){var a=Ds(e);e=0;for(var t;a;){if(a.nodeType===3){if(t=e+a.textContent.length,e<=n&&t>=n)return{node:a,offset:n-e};e=t}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ds(a)}}function Ls(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ls(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hs(){for(var e=window,n=mt();n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch(t){a=!1}if(a)e=n.contentWindow;else break;n=mt(e.document)}return n}function pr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var dc=Le&&"documentMode"in document&&11>=document.documentMode,Jn=null,fr=null,Da=null,mr=!1;function bs(e,n,a){var t=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mr||Jn==null||Jn!==mt(t)||(t=Jn,"selectionStart"in t&&pr(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Da&&Ga(Da,t)||(Da=t,t=Nt(fr,"onSelect"),0<t.length&&(n=new sr("onSelect","select",null,n,a),e.push({event:n,listeners:t}),n.target=Jn)))}tr("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);tr("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);tr(kd,2);for(var Fs="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Sr=0;Sr<Fs.length;Sr++)ar.set(Fs[Sr],0);Dn("onMouseEnter",["mouseout","mouseover"]);Dn("onMouseLeave",["mouseout","mouseover"]);Dn("onPointerEnter",["pointerout","pointerover"]);Dn("onPointerLeave",["pointerout","pointerover"]);kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ys=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function xs(e,n,a){var t=e.type||"unknown-event";e.currentTarget=a,hd(t,n,void 0,e),e.currentTarget=null}function Ks(e,n){n=(n&4)!=0;for(var a=0;a<e.length;a++){var t=e[a],i=t.event;t=t.listeners;e:{var r=void 0;if(n)for(var o=t.length-1;0<=o;o--){var s=t[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==r&&i.isPropagationStopped())break e;xs(i,s,c),r=l}else for(o=0;o<t.length;o++){if(s=t[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==r&&i.isPropagationStopped())break e;xs(i,s,c),r=l}}}if(Tt)throw e=Zi,Tt=!1,Zi=null,e}function Q(e,n){var a=js(n),t=e+"__bubble";a.has(t)||(Qs(n,e,2,!1),a.add(t))}var zs="_reactListening"+Math.random().toString(36).slice(2);function Js(e){e[zs]||(e[zs]=!0,Ko.forEach(function(n){Ys.has(n)||_s(n,!1,e,null),_s(n,!0,e,null)}))}function _s(e,n,a,t){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,r=a;if(e==="selectionchange"&&a.nodeType!==9&&(r=a.ownerDocument),t!==null&&!n&&Ys.has(e)){if(e!=="scroll")return;i|=2,r=t}var o=js(r),s=e+"__"+(n?"capture":"bubble");o.has(s)||(n&&(i|=4),Qs(r,e,i,n),o.add(s))}function Qs(e,n,a,t){var i=ar.get(n);switch(i===void 0?2:i){case 0:i=wd;break;case 1:i=Wd;break;default:i=rr}a=i.bind(null,n,a,e),i=void 0,!Vi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),t?i!==void 0?e.addEventListener(n,a,{capture:!0,passive:i}):e.addEventListener(n,a,!0):i!==void 0?e.addEventListener(n,a,{passive:i}):e.addEventListener(n,a,!1)}function ys(e,n,a,t,i){var r=t;if((n&1)==0&&(n&2)==0&&t!==null)e:for(;;){if(t===null)return;var o=t.tag;if(o===3||o===4){var s=t.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=t.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=In(s),o===null)return;if(l=o.tag,l===5||l===6){t=r=o;continue e}s=s.parentNode}}t=t.return}ud(function(){var c=r,y=xi(a),W=[];e:{var m=Ss.get(e);if(m!==void 0){var M=sr,P=e;switch(e){case"keypress":if(Wt(a)===0)break e;case"keydown":case"keyup":M=xd;break;case"focusin":P="focus",M=cr;break;case"focusout":P="blur",M=cr;break;case"beforeblur":case"afterblur":M=cr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Nd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=zd;break;case hs:case ps:case fs:M=Bd;break;case ms:M=Jd;break;case"scroll":M=Pd;break;case"wheel":M=Zd;break;case"copy":case"cut":case"paste":M=Dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Ms}var E=(n&4)!=0,g=!E&&e==="scroll",u=E?m!==null?m+"Capture":null:m;E=[];for(var d=c,p;d!==null;){p=d;var f=p.stateNode;if(p.tag===5&&f!==null&&(p=f,u!==null&&(f=va(d,u),f!=null&&E.push(La(d,f,p)))),g)break;d=d.return}0<E.length&&(m=new M(m,P,null,a,y),W.push({event:m,listeners:E}))}}if((n&7)==0){e:{if(m=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",m&&(n&16)==0&&(P=a.relatedTarget||a.fromElement)&&(In(P)||P[Zn]))break e;if((M||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,M?(P=a.relatedTarget||a.toElement,M=c,P=P?In(P):null,P!==null&&(g=vn(P),P!==g||P.tag!==5&&P.tag!==6)&&(P=null)):(M=null,P=c),M!==P)){if(E=vs,f="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(E=Ms,f="onPointerLeave",u="onPointerEnter",d="pointer"),g=M==null?m:_n(M),p=P==null?m:_n(P),m=new E(f,d+"leave",M,a,y),m.target=g,m.relatedTarget=p,f=null,In(y)===c&&(E=new E(u,d+"enter",P,a,y),E.target=p,E.relatedTarget=g,f=E),g=f,M&&P)n:{for(E=M,u=P,d=0,p=E;p;p=Vn(p))d++;for(p=0,f=u;f;f=Vn(f))p++;for(;0<d-p;)E=Vn(E),d--;for(;0<p-d;)u=Vn(u),p--;for(;d--;){if(E===u||u!==null&&E===u.alternate)break n;E=Vn(E),u=Vn(u)}E=null}else E=null;M!==null&&Vs(W,m,M,E,!1),P!==null&&g!==null&&Vs(W,g,P,E,!0)}}e:{if(m=c?_n(c):window,M=m.nodeName&&m.nodeName.toLowerCase(),M==="select"||M==="input"&&m.type==="file")var O=tc;else if(Os(m))if(Us)O=sc;else{O=rc;var A=ic}else(M=m.nodeName)&&M.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=oc);if(O&&(O=O(e,c))){Ns(W,O,a,y);break e}A&&A(e,m,c),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&Gi(m,"number",m.value)}switch(A=c?_n(c):window,e){case"focusin":(Os(A)||A.contentEditable==="true")&&(Jn=A,fr=c,Da=null);break;case"focusout":Da=fr=Jn=null;break;case"mousedown":mr=!0;break;case"contextmenu":case"mouseup":case"dragend":mr=!1,bs(W,a,y);break;case"selectionchange":if(dc)break;case"keydown":case"keyup":bs(W,a,y)}var C;if(gr)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else zn?Ws(e,a)&&(K="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(Es&&a.locale!=="ko"&&(zn||K!=="onCompositionStart"?K==="onCompositionEnd"&&zn&&(C=Ts()):(Xe=y,or="value"in Xe?Xe.value:Xe.textContent,zn=!0)),A=Nt(c,K),0<A.length&&(K=new Is(K,e,null,a,y),W.push({event:K,listeners:A}),C?K.data=C:(C=Ps(a),C!==null&&(K.data=C)))),(C=Xd?$d(e,a):ec(e,a))&&(c=Nt(c,"onBeforeInput"),0<c.length&&(y=new Is("onBeforeInput","beforeinput",null,a,y),W.push({event:y,listeners:c}),y.data=C))}Ks(W,n)})}function La(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Nt(e,n){for(var a=n+"Capture",t=[];e!==null;){var i=e,r=i.stateNode;i.tag===5&&r!==null&&(i=r,r=va(e,a),r!=null&&t.unshift(La(e,r,i)),r=va(e,n),r!=null&&t.push(La(e,r,i))),e=e.return}return t}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vs(e,n,a,t,i){for(var r=n._reactName,o=[];a!==null&&a!==t;){var s=a,l=s.alternate,c=s.stateNode;if(l!==null&&l===t)break;s.tag===5&&c!==null&&(s=c,i?(l=va(a,r),l!=null&&o.unshift(La(a,l,s))):i||(l=va(a,r),l!=null&&o.push(La(a,l,s)))),a=a.return}o.length!==0&&e.push({event:n,listeners:o})}function Gt(){}var kr=null,yr=null;function Zs(e,n){switch(e){case"button":case"input":case"select":case"textarea":return!!n.autoFocus}return!1}function Tr(e,n){return e==="textarea"||e==="option"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qs=typeof setTimeout=="function"?setTimeout:void 0,cc=typeof clearTimeout=="function"?clearTimeout:void 0;function Ar(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function qn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break}return e}function Xs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}var vr=0;function gc(e){return{$$typeof:Pi,toString:e,valueOf:e}}var Dt=Math.random().toString(36).slice(2),$e="__reactFiber$"+Dt,Rt="__reactProps$"+Dt,Zn="__reactContainer$"+Dt,$s="__reactEvents$"+Dt;function In(e){var n=e[$e];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Zn]||a[$e]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Xs(e);e!==null;){if(a=e[$e])return a;e=Xs(e)}return n}e=a,a=e.parentNode}return null}function Aa(e){return e=e[$e]||e[Zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function kt(e){return e[Rt]||null}function js(e){var n=e[$s];return n===void 0&&(n=e[$s]=new Set),n}var Ir=[],Xn=-1;function en(e){return{current:e}}function j(e){0>Xn||(e.current=Ir[Xn],Ir[Xn]=null,Xn--)}function _(e,n){Xn++,Ir[Xn]=e.current,e.current=n}var nn={},se=en(nn),pe=en(!1),Mn=nn;function $n(e,n){var a=e.type.contextTypes;if(!a)return nn;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var i={},r;for(r in a)i[r]=n[r];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function fe(e){return e=e.childContextTypes,e!=null}function Lt(){j(pe),j(se)}function el(e,n,a){if(se.current!==nn)throw Error(k(168));_(se,n),_(pe,a)}function nl(e,n,a){var t=e.stateNode;if(e=n.childContextTypes,typeof t.getChildContext!="function")return a;t=t.getChildContext();for(var i in t)if(!(i in e))throw Error(k(108,Rn(n)||"Unknown",i));return H({},a,t)}function Ht(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,Mn=se.current,_(se,e),_(pe,pe.current),!0}function al(e,n,a){var t=e.stateNode;if(!t)throw Error(k(169));a?(e=nl(e,n,Mn),t.__reactInternalMemoizedMergedChildContext=e,j(pe),j(se),_(se,e)):j(pe),_(pe,a)}var Mr=null,En=null,hc=X.unstable_runWithPriority,Er=X.unstable_scheduleCallback,Cr=X.unstable_cancelCallback,pc=X.unstable_shouldYield,tl=X.unstable_requestPaint,wr=X.unstable_now,fc=X.unstable_getCurrentPriorityLevel,bt=X.unstable_ImmediatePriority,il=X.unstable_UserBlockingPriority,rl=X.unstable_NormalPriority,ol=X.unstable_LowPriority,sl=X.unstable_IdlePriority,Wr={},mc=tl!==void 0?tl:function(){},He=null,Ft=null,Pr=!1,ll=wr(),le=1e4>ll?wr:function(){return wr()-ll};function ea(){switch(fc()){case bt:return 99;case il:return 98;case rl:return 97;case ol:return 96;case sl:return 95;default:throw Error(k(332))}}function ul(e){switch(e){case 99:return bt;case 98:return il;case 97:return rl;case 96:return ol;case 95:return sl;default:throw Error(k(332))}}function Cn(e,n){return e=ul(e),hc(e,n)}function Ha(e,n,a){return e=ul(e),Er(e,n,a)}function Ne(){if(Ft!==null){var e=Ft;Ft=null,Cr(e)}dl()}function dl(){if(!Pr&&He!==null){Pr=!0;var e=0;try{var n=He;Cn(99,function(){for(;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}}),He=null}catch(a){throw He!==null&&(He=He.slice(e+1)),Er(bt,Ne),a}finally{Pr=!1}}}var Sc=yn.ReactCurrentBatchConfig;function We(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var a in e)n[a]===void 0&&(n[a]=e[a]);return n}return n}var Yt=en(null),xt=null,na=null,Qt=null;function Or(){Qt=na=xt=null}function Nr(e){var n=Yt.current;j(Yt),e.type._context._currentValue=n}function cl(e,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)===n){if(a===null||(a.childLanes&n)===n)break;a.childLanes|=n}else e.childLanes|=n,a!==null&&(a.childLanes|=n);e=e.return}}function aa(e,n){xt=e,Qt=na=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!=0&&(Pe=!0),e.firstContext=null)}function ve(e,n){if(Qt!==e&&n!==!1&&n!==0)if((typeof n!="number"||n===1073741823)&&(Qt=e,n=1073741823),n={context:e,observedBits:n,next:null},na===null){if(xt===null)throw Error(k(308));na=n,xt.dependencies={lanes:0,firstContext:n,responders:null}}else na=na.next=n;return e._currentValue}var an=!1;function Kr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function gl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function rn(e,n){if(e=e.updateQueue,e!==null){e=e.shared;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}}function hl(e,n){var a=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,a===t)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};r===null?i=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?i=r=n:r=r.next=n}else i=r=n;a={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:t.shared,effects:t.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}function Fa(e,n,a,t){var i=e.updateQueue;an=!1;var r=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?r=c:o.next=c,o=l;var y=e.alternate;if(y!==null){y=y.updateQueue;var W=y.lastBaseUpdate;W!==o&&(W===null?y.firstBaseUpdate=c:W.next=c,y.lastBaseUpdate=l)}}if(r!==null){W=i.baseState,o=0,y=c=l=null;do{s=r.lane;var m=r.eventTime;if((t&s)===s){y!==null&&(y=y.next={eventTime:m,lane:0,tag:r.tag,payload:r.payload,callback:r.callback,next:null});e:{var M=e,P=r;switch(s=n,m=a,P.tag){case 1:if(M=P.payload,typeof M=="function"){W=M.call(m,W,s);break e}W=M;break e;case 3:M.flags=M.flags&-4097|64;case 0:if(M=P.payload,s=typeof M=="function"?M.call(m,W,s):M,s==null)break e;W=H({},W,s);break e;case 2:an=!0}}r.callback!==null&&(e.flags|=32,s=i.effects,s===null?i.effects=[r]:s.push(r))}else m={eventTime:m,lane:s,tag:r.tag,payload:r.payload,callback:r.callback,next:null},y===null?(c=y=m,l=W):y=y.next=m,o|=s;if(r=r.next,r===null){if(s=i.shared.pending,s===null)break;r=s.next,s.next=null,i.lastBaseUpdate=s,i.shared.pending=null}}while(1);y===null&&(l=W),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=y,ba|=o,e.lanes=o,e.memoizedState=W}}function pl(e,n,a){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],i=t.callback;if(i!==null){if(t.callback=null,t=a,typeof i!="function")throw Error(k(191,i));i.call(t)}}}var fl=new L.Component().refs;function jt(e,n,a,t){n=e.memoizedState,a=a(t,n),a=a==null?n:H({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var zt={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var t=Te(),i=on(e),r=tn(t,i);r.payload=n,a!=null&&(r.callback=a),rn(e,r),sn(e,i,t)},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var t=Te(),i=on(e),r=tn(t,i);r.tag=1,r.payload=n,a!=null&&(r.callback=a),rn(e,r),sn(e,i,t)},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Te(),t=on(e),i=tn(a,t);i.tag=2,n!=null&&(i.callback=n),rn(e,i),sn(e,t,a)}};function ml(e,n,a,t,i,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,r,o):n.prototype&&n.prototype.isPureReactComponent?!Ga(a,t)||!Ga(i,r):!0}function Sl(e,n,a){var t=!1,i=nn,r=n.contextType;return typeof r=="object"&&r!==null?r=ve(r):(i=fe(n)?Mn:se.current,t=n.contextTypes,r=(t=t!=null)?$n(e,i):nn),n=new n(a,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=zt,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=r),n}function kl(e,n,a,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,t),n.state!==e&&zt.enqueueReplaceState(n,n.state,null)}function Ur(e,n,a,t){var i=e.stateNode;i.props=a,i.state=e.memoizedState,i.refs=fl,Kr(e);var r=n.contextType;typeof r=="object"&&r!==null?i.context=ve(r):(r=fe(n)?Mn:se.current,i.context=$n(e,r)),Fa(e,a,i,t),i.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(jt(e,n,r,a),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&zt.enqueueReplaceState(i,i.state,null),Fa(e,a,i,t),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var _t=Array.isArray;function Ya(e,n,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(k(309));var t=a.stateNode}if(!t)throw Error(k(147,e));var i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(r){var o=t.refs;o===fl&&(o=t.refs={}),r===null?delete o[i]:o[i]=r},n._stringRef=i,n)}if(typeof e!="string")throw Error(k(284));if(!a._owner)throw Error(k(290,e))}return e}function Jt(e,n){if(e.type!=="textarea")throw Error(k(31,Object.prototype.toString.call(n)==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":n))}function yl(e){function n(g,u){if(e){var d=g.lastEffect;d!==null?(d.nextEffect=u,g.lastEffect=u):g.firstEffect=g.lastEffect=u,u.nextEffect=null,u.flags=8}}function a(g,u){if(!e)return null;for(;u!==null;)n(g,u),u=u.sibling;return null}function t(g,u){for(g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function i(g,u){return g=ln(g,u),g.index=0,g.sibling=null,g}function r(g,u,d){return g.index=d,e?(d=g.alternate,d!==null?(d=d.index,d<u?(g.flags=2,u):d):(g.flags=2,u)):u}function o(g){return e&&g.alternate===null&&(g.flags=2),g}function s(g,u,d,p){return u===null||u.tag!==6?(u=Br(d,g.mode,p),u.return=g,u):(u=i(u,d),u.return=g,u)}function l(g,u,d,p){return u!==null&&u.elementType===d.type?(p=i(u,d.props),p.ref=Ya(g,u,d),p.return=g,p):(p=Vt(d.type,d.key,d.props,null,g.mode,p),p.ref=Ya(g,u,d),p.return=g,p)}function c(g,u,d,p){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Gr(d,g.mode,p),u.return=g,u):(u=i(u,d.children||[]),u.return=g,u)}function y(g,u,d,p,f){return u===null||u.tag!==7?(u=ta(d,g.mode,p,f),u.return=g,u):(u=i(u,d),u.return=g,u)}function W(g,u,d){if(typeof u=="string"||typeof u=="number")return u=Br(""+u,g.mode,d),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case pa:return d=Vt(u.type,u.key,u.props,null,g.mode,d),d.ref=Ya(g,null,u),d.return=g,d;case Tn:return u=Gr(u,g.mode,d),u.return=g,u}if(_t(u)||Sa(u))return u=ta(u,g.mode,d,null),u.return=g,u;Jt(g,u)}return null}function m(g,u,d,p){var f=u!==null?u.key:null;if(typeof d=="string"||typeof d=="number")return f!==null?null:s(g,u,""+d,p);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pa:return d.key===f?d.type===ze?y(g,u,d.props.children,p,f):l(g,u,d,p):null;case Tn:return d.key===f?c(g,u,d,p):null}if(_t(d)||Sa(d))return f!==null?null:y(g,u,d,p,null);Jt(g,d)}return null}function M(g,u,d,p,f){if(typeof p=="string"||typeof p=="number")return g=g.get(d)||null,s(u,g,""+p,f);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pa:return g=g.get(p.key===null?d:p.key)||null,p.type===ze?y(u,g,p.props.children,f,p.key):l(u,g,p,f);case Tn:return g=g.get(p.key===null?d:p.key)||null,c(u,g,p,f)}if(_t(p)||Sa(p))return g=g.get(d)||null,y(u,g,p,f,null);Jt(u,p)}return null}function P(g,u,d,p){for(var f=null,O=null,A=u,C=u=0,K=null;A!==null&&C<d.length;C++){A.index>C?(K=A,A=null):K=A.sibling;var N=m(g,A,d[C],p);if(N===null){A===null&&(A=K);break}e&&A&&N.alternate===null&&n(g,A),u=r(N,u,C),O===null?f=N:O.sibling=N,O=N,A=K}if(C===d.length)return a(g,A),f;if(A===null){for(;C<d.length;C++)A=W(g,d[C],p),A!==null&&(u=r(A,u,C),O===null?f=A:O.sibling=A,O=A);return f}for(A=t(g,A);C<d.length;C++)K=M(A,g,C,d[C],p),K!==null&&(e&&K.alternate!==null&&A.delete(K.key===null?C:K.key),u=r(K,u,C),O===null?f=K:O.sibling=K,O=K);return e&&A.forEach(function(z){return n(g,z)}),f}function E(g,u,d,p){var f=Sa(d);if(typeof f!="function")throw Error(k(150));if(d=f.call(d),d==null)throw Error(k(151));for(var O=f=null,A=u,C=u=0,K=null,N=d.next();A!==null&&!N.done;C++,N=d.next()){A.index>C?(K=A,A=null):K=A.sibling;var z=m(g,A,N.value,p);if(z===null){A===null&&(A=K);break}e&&A&&z.alternate===null&&n(g,A),u=r(z,u,C),O===null?f=z:O.sibling=z,O=z,A=K}if(N.done)return a(g,A),f;if(A===null){for(;!N.done;C++,N=d.next())N=W(g,N.value,p),N!==null&&(u=r(N,u,C),O===null?f=N:O.sibling=N,O=N);return f}for(A=t(g,A);!N.done;C++,N=d.next())N=M(A,g,C,N.value,p),N!==null&&(e&&N.alternate!==null&&A.delete(N.key===null?C:N.key),u=r(N,u,C),O===null?f=N:O.sibling=N,O=N);return e&&A.forEach(function(he){return n(g,he)}),f}return function(g,u,d,p){var f=typeof d=="object"&&d!==null&&d.type===ze&&d.key===null;f&&(d=d.props.children);var O=typeof d=="object"&&d!==null;if(O)switch(d.$$typeof){case pa:e:{for(O=d.key,f=u;f!==null;){if(f.key===O){switch(f.tag){case 7:if(d.type===ze){a(g,f.sibling),u=i(f,d.props.children),u.return=g,g=u;break e}break;default:if(f.elementType===d.type){a(g,f.sibling),u=i(f,d.props),u.ref=Ya(g,f,d),u.return=g,g=u;break e}}a(g,f);break}else n(g,f);f=f.sibling}d.type===ze?(u=ta(d.props.children,g.mode,p,d.key),u.return=g,g=u):(p=Vt(d.type,d.key,d.props,null,g.mode,p),p.ref=Ya(g,u,d),p.return=g,g=p)}return o(g);case Tn:e:{for(f=d.key;u!==null;){if(u.key===f)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){a(g,u.sibling),u=i(u,d.children||[]),u.return=g,g=u;break e}else{a(g,u);break}else n(g,u);u=u.sibling}u=Gr(d,g.mode,p),u.return=g,g=u}return o(g)}if(typeof d=="string"||typeof d=="number")return d=""+d,u!==null&&u.tag===6?(a(g,u.sibling),u=i(u,d),u.return=g,g=u):(a(g,u),u=Br(d,g.mode,p),u.return=g,g=u),o(g);if(_t(d))return P(g,u,d,p);if(Sa(d))return E(g,u,d,p);if(O&&Jt(g,d),typeof d=="undefined"&&!f)switch(g.tag){case 1:case 22:case 0:case 11:case 15:throw Error(k(152,Rn(g.type)||"Component"))}return a(g,u)}}var Zt=yl(!0),Tl=yl(!1),xa={},Ke=en(xa),Qa=en(xa),ja=en(xa);function wn(e){if(e===xa)throw Error(k(174));return e}function Dr(e,n){switch(_(ja,n),_(Qa,e),_(Ke,xa),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:bi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=bi(n,e)}j(Ke),_(Ke,n)}function ia(){j(Ke),j(Qa),j(ja)}function Al(e){wn(ja.current);var n=wn(Ke.current),a=bi(n,e.type);n!==a&&(_(Qa,e),_(Ke,a))}function Rr(e){Qa.current===e&&(j(Ke),j(Qa))}var J=en(0);function qt(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&64)!=0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var be=null,un=null,Ue=!1;function vl(e,n){var a=Ie(5,null,null,0);a.elementType="DELETED",a.type="DELETED",a.stateNode=n,a.return=e,a.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=a,e.lastEffect=a):e.firstEffect=e.lastEffect=a}function Il(e,n){switch(e.tag){case 5:var a=e.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,!0):!1;case 13:return!1;default:return!1}}function Lr(e){if(Ue){var n=un;if(n){var a=n;if(!Il(e,n)){if(n=qn(a.nextSibling),!n||!Il(e,n)){e.flags=e.flags&-1025|2,Ue=!1,be=e;return}vl(be,a)}be=e,un=qn(n.firstChild)}else e.flags=e.flags&-1025|2,Ue=!1,be=e}}function Ml(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Xt(e){if(e!==be)return!1;if(!Ue)return Ml(e),Ue=!0,!1;var n=e.type;if(e.tag!==5||n!=="head"&&n!=="body"&&!Tr(n,e.memoizedProps))for(n=un;n;)vl(e,n),n=qn(n.nextSibling);if(Ml(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(n===0){un=qn(e.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}e=e.nextSibling}un=null}}else un=be?qn(e.stateNode.nextSibling):null;return!0}function Hr(){un=be=null,Ue=!1}var ra=[];function br(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var za=yn.ReactCurrentDispatcher,Me=yn.ReactCurrentBatchConfig,_a=0,Z=null,ue=null,re=null,$t=!1,Ja=!1;function me(){throw Error(k(321))}function Fr(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Ae(e[a],n[a]))return!1;return!0}function Yr(e,n,a,t,i,r){if(_a=r,Z=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,za.current=e===null||e.memoizedState===null?kc:yc,e=a(t,i),Ja){r=0;do{if(Ja=!1,!(25>r))throw Error(k(301));r+=1,re=ue=null,n.updateQueue=null,za.current=Tc,e=a(t,i)}while(Ja)}if(za.current=ei,n=ue!==null&&ue.next!==null,_a=0,re=ue=Z=null,$t=!1,n)throw Error(k(300));return e}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Z.memoizedState=re=e:re=re.next=e,re}function Pn(){if(ue===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var n=re===null?Z.memoizedState:re.next;if(n!==null)re=n,ue=e;else{if(e===null)throw Error(k(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},re===null?Z.memoizedState=re=e:re=re.next=e}return re}function Be(e,n){return typeof n=="function"?n(e):n}function Va(e){var n=Pn(),a=n.queue;if(a===null)throw Error(k(311));a.lastRenderedReducer=e;var t=ue,i=t.baseQueue,r=a.pending;if(r!==null){if(i!==null){var o=i.next;i.next=r.next,r.next=o}t.baseQueue=i=r,a.pending=null}if(i!==null){i=i.next,t=t.baseState;var s=o=r=null,l=i;do{var c=l.lane;if((_a&c)===c)s!==null&&(s=s.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),t=l.eagerReducer===e?l.eagerState:e(t,l.action);else{var y={lane:c,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};s===null?(o=s=y,r=t):s=s.next=y,Z.lanes|=c,ba|=c}l=l.next}while(l!==null&&l!==i);s===null?r=t:s.next=o,Ae(t,n.memoizedState)||(Pe=!0),n.memoizedState=t,n.baseState=r,n.baseQueue=s,a.lastRenderedState=t}return[n.memoizedState,a.dispatch]}function Za(e){var n=Pn(),a=n.queue;if(a===null)throw Error(k(311));a.lastRenderedReducer=e;var t=a.dispatch,i=a.pending,r=n.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do r=e(r,o.action),o=o.next;while(o!==i);Ae(r,n.memoizedState)||(Pe=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),a.lastRenderedState=r}return[r,t]}function El(e,n,a){var t=n._getVersion;t=t(n._source);var i=n._workInProgressVersionPrimary;if(i!==null?e=i===t:(e=e.mutableReadLanes,(e=(_a&e)===e)&&(n._workInProgressVersionPrimary=t,ra.push(n))),e)return a(n._source);throw ra.push(n),Error(k(350))}function Cl(e,n,a,t){var i=ge;if(i===null)throw Error(k(349));var r=n._getVersion,o=r(n._source),s=za.current,l=s.useState(function(){return El(i,n,a)}),c=l[1],y=l[0];l=re;var W=e.memoizedState,m=W.refs,M=m.getSnapshot,P=W.source;W=W.subscribe;var E=Z;return e.memoizedState={refs:m,source:n,subscribe:t},s.useEffect(function(){m.getSnapshot=a,m.setSnapshot=c;var g=r(n._source);if(!Ae(o,g)){g=a(n._source),Ae(y,g)||(c(g),g=on(E),i.mutableReadLanes|=g&i.pendingLanes),g=i.mutableReadLanes,i.entangledLanes|=g;for(var u=i.entanglements,d=g;0<d;){var p=31-qe(d),f=1<<p;u[p]|=g,d&=~f}}},[a,n,t]),s.useEffect(function(){return t(n._source,function(){var g=m.getSnapshot,u=m.setSnapshot;try{u(g(n._source));var d=on(E);i.mutableReadLanes|=d&i.pendingLanes}catch(p){u(function(){throw p})}})},[n,t]),Ae(M,a)&&Ae(P,n)&&Ae(W,t)||(e={pending:null,dispatch:null,lastRenderedReducer:Be,lastRenderedState:y},e.dispatch=c=xr.bind(null,Z,e),l.queue=e,l.baseQueue=null,y=El(i,n,a),l.memoizedState=l.baseState=y),y}function wl(e,n,a){var t=Pn();return Cl(t,e,n,a)}function qa(e){var n=Wn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e=n.queue={pending:null,dispatch:null,lastRenderedReducer:Be,lastRenderedState:e},e=e.dispatch=xr.bind(null,Z,e),[n.memoizedState,e]}function ni(e,n,a,t){return e={tag:e,create:n,destroy:a,deps:t,next:null},n=Z.updateQueue,n===null?(n={lastEffect:null},Z.updateQueue=n,n.lastEffect=e.next=e):(a=n.lastEffect,a===null?n.lastEffect=e.next=e:(t=a.next,a.next=e,e.next=t,n.lastEffect=e)),e}function Wl(e){var n=Wn();return e={current:e},n.memoizedState=e}function ai(){return Pn().memoizedState}function Qr(e,n,a,t){var i=Wn();Z.flags|=e,i.memoizedState=ni(1|n,a,void 0,t===void 0?null:t)}function jr(e,n,a,t){var i=Pn();t=t===void 0?null:t;var r=void 0;if(ue!==null){var o=ue.memoizedState;if(r=o.destroy,t!==null&&Fr(t,o.deps)){ni(n,a,r,t);return}}Z.flags|=e,i.memoizedState=ni(1|n,a,r,t)}function Pl(e,n){return Qr(516,4,e,n)}function ti(e,n){return jr(516,4,e,n)}function Ol(e,n){return jr(4,2,e,n)}function Nl(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Kl(e,n,a){return a=a!=null?a.concat([e]):null,jr(4,2,Nl.bind(null,n,e),a)}function zr(){}function Ul(e,n){var a=Pn();n=n===void 0?null:n;var t=a.memoizedState;return t!==null&&n!==null&&Fr(n,t[1])?t[0]:(a.memoizedState=[e,n],e)}function Bl(e,n){var a=Pn();n=n===void 0?null:n;var t=a.memoizedState;return t!==null&&n!==null&&Fr(n,t[1])?t[0]:(e=e(),a.memoizedState=[e,n],e)}function Ac(e,n){var a=ea();Cn(98>a?98:a,function(){e(!0)}),Cn(97<a?97:a,function(){var t=Me.transition;Me.transition=1;try{e(!1),n()}finally{Me.transition=t}})}function xr(e,n,a){var t=Te(),i=on(e),r={lane:i,action:a,eagerReducer:null,eagerState:null,next:null},o=n.pending;if(o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r,o=e.alternate,e===Z||o!==null&&o===Z)Ja=$t=!0;else{if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,l=o(s,a);if(r.eagerReducer=o,r.eagerState=l,Ae(l,s))return}catch(c){}finally{}sn(e,i,t)}}var ei={readContext:ve,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useOpaqueIdentifier:me,unstable_isNewReconciler:!1},kc={readContext:ve,useCallback:function(e,n){return Wn().memoizedState=[e,n===void 0?null:n],e},useContext:ve,useEffect:Pl,useImperativeHandle:function(e,n,a){return a=a!=null?a.concat([e]):null,Qr(4,2,Nl.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Qr(4,2,e,n)},useMemo:function(e,n){var a=Wn();return n=n===void 0?null:n,e=e(),a.memoizedState=[e,n],e},useReducer:function(e,n,a){var t=Wn();return n=a!==void 0?a(n):n,t.memoizedState=t.baseState=n,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},e=e.dispatch=xr.bind(null,Z,e),[t.memoizedState,e]},useRef:Wl,useState:qa,useDebugValue:zr,useDeferredValue:function(e){var n=qa(e),a=n[0],t=n[1];return Pl(function(){var i=Me.transition;Me.transition=1;try{t(e)}finally{Me.transition=i}},[e]),a},useTransition:function(){var e=qa(!1),n=e[0];return e=Ac.bind(null,e[1]),Wl(e),[e,n]},useMutableSource:function(e,n,a){var t=Wn();return t.memoizedState={refs:{getSnapshot:n,setSnapshot:null},source:e,subscribe:a},Cl(t,e,n,a)},useOpaqueIdentifier:function(){if(Ue){var e=!1,n=gc(function(){throw e||(e=!0,a("r:"+(vr++).toString(36))),Error(k(355))}),a=qa(n)[1];return(Z.mode&2)==0&&(Z.flags|=516,ni(5,function(){a("r:"+(vr++).toString(36))},void 0,null)),n}return n="r:"+(vr++).toString(36),qa(n),n},unstable_isNewReconciler:!1},yc={readContext:ve,useCallback:Ul,useContext:ve,useEffect:ti,useImperativeHandle:Kl,useLayoutEffect:Ol,useMemo:Bl,useReducer:Va,useRef:ai,useState:function(){return Va(Be)},useDebugValue:zr,useDeferredValue:function(e){var n=Va(Be),a=n[0],t=n[1];return ti(function(){var i=Me.transition;Me.transition=1;try{t(e)}finally{Me.transition=i}},[e]),a},useTransition:function(){var e=Va(Be)[0];return[ai().current,e]},useMutableSource:wl,useOpaqueIdentifier:function(){return Va(Be)[0]},unstable_isNewReconciler:!1},Tc={readContext:ve,useCallback:Ul,useContext:ve,useEffect:ti,useImperativeHandle:Kl,useLayoutEffect:Ol,useMemo:Bl,useReducer:Za,useRef:ai,useState:function(){return Za(Be)},useDebugValue:zr,useDeferredValue:function(e){var n=Za(Be),a=n[0],t=n[1];return ti(function(){var i=Me.transition;Me.transition=1;try{t(e)}finally{Me.transition=i}},[e]),a},useTransition:function(){var e=Za(Be)[0];return[ai().current,e]},useMutableSource:wl,useOpaqueIdentifier:function(){return Za(Be)[0]},unstable_isNewReconciler:!1},vc=yn.ReactCurrentOwner,Pe=!1;function Se(e,n,a,t){n.child=e===null?Tl(n,null,a,t):Zt(n,e.child,a,t)}function Gl(e,n,a,t,i){a=a.render;var r=n.ref;return aa(n,i),t=Yr(e,n,a,t,r,i),e!==null&&!Pe?(n.updateQueue=e.updateQueue,n.flags&=-517,e.lanes&=~i,Fe(e,n,i)):(n.flags|=1,Se(e,n,t,i),n.child)}function Rl(e,n,a,t,i,r){if(e===null){var o=a.type;return typeof o=="function"&&!_r(o)&&o.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=o,Dl(e,n,o,t,i,r)):(e=Vt(a.type,null,t,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}return o=e.child,(i&r)==0&&(i=o.memoizedProps,a=a.compare,a=a!==null?a:Ga,a(i,t)&&e.ref===n.ref)?Fe(e,n,r):(n.flags|=1,e=ln(o,t),e.ref=n.ref,e.return=n,n.child=e)}function Dl(e,n,a,t,i,r){if(e!==null&&Ga(e.memoizedProps,t)&&e.ref===n.ref)if(Pe=!1,(r&i)!=0)(e.flags&16384)!=0&&(Pe=!0);else return n.lanes=e.lanes,Fe(e,n,r);return Jr(e,n,a,t,r)}function Vr(e,n,a){var t=n.pendingProps,i=t.children,r=e!==null?e.memoizedState:null;if(t.mode==="hidden"||t.mode==="unstable-defer-without-hiding")if((n.mode&4)==0)n.memoizedState={baseLanes:0},ii(n,a);else if((a&1073741824)!=0)n.memoizedState={baseLanes:0},ii(n,r!==null?r.baseLanes:a);else return e=r!==null?r.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e},ii(n,e),null;else r!==null?(t=r.baseLanes|a,n.memoizedState=null):t=a,ii(n,t);return Se(e,n,i,a),n.child}function Ll(e,n){var a=n.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(n.flags|=128)}function Jr(e,n,a,t,i){var r=fe(a)?Mn:se.current;return r=$n(n,r),aa(n,i),a=Yr(e,n,a,t,r,i),e!==null&&!Pe?(n.updateQueue=e.updateQueue,n.flags&=-517,e.lanes&=~i,Fe(e,n,i)):(n.flags|=1,Se(e,n,a,i),n.child)}function Hl(e,n,a,t,i){if(fe(a)){var r=!0;Ht(n)}else r=!1;if(aa(n,i),n.stateNode===null)e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),Sl(n,a,t),Ur(n,a,t,i),t=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var l=o.context,c=a.contextType;typeof c=="object"&&c!==null?c=ve(c):(c=fe(a)?Mn:se.current,c=$n(n,c));var y=a.getDerivedStateFromProps,W=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";W||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==t||l!==c)&&kl(n,o,t,c),an=!1;var m=n.memoizedState;o.state=m,Fa(n,t,o,i),l=n.memoizedState,s!==t||m!==l||pe.current||an?(typeof y=="function"&&(jt(n,a,y,t),l=n.memoizedState),(s=an||ml(n,a,s,t,m,l,c))?(W||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4)):(typeof o.componentDidMount=="function"&&(n.flags|=4),n.memoizedProps=t,n.memoizedState=l),o.props=t,o.state=l,o.context=c,t=s):(typeof o.componentDidMount=="function"&&(n.flags|=4),t=!1)}else{o=n.stateNode,gl(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:We(n.type,s),o.props=c,W=n.pendingProps,m=o.context,l=a.contextType,typeof l=="object"&&l!==null?l=ve(l):(l=fe(a)?Mn:se.current,l=$n(n,l));var M=a.getDerivedStateFromProps;(y=typeof M=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==W||m!==l)&&kl(n,o,t,l),an=!1,m=n.memoizedState,o.state=m,Fa(n,t,o,i);var P=n.memoizedState;s!==W||m!==P||pe.current||an?(typeof M=="function"&&(jt(n,a,M,t),P=n.memoizedState),(c=an||ml(n,a,c,t,m,P,l))?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(t,P,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(t,P,l)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=256)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=256),n.memoizedProps=t,n.memoizedState=P),o.props=t,o.state=P,o.context=l,t=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=256),t=!1)}return Zr(e,n,a,t,r,i)}function Zr(e,n,a,t,i,r){Ll(e,n);var o=(n.flags&64)!=0;if(!t&&!o)return i&&al(n,a,!1),Fe(e,n,r);t=n.stateNode,vc.current=n;var s=o&&typeof a.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&o?(n.child=Zt(n,e.child,null,r),n.child=Zt(n,null,s,r)):Se(e,n,s,r),n.memoizedState=t.state,i&&al(n,a,!0),n.child}function bl(e){var n=e.stateNode;n.pendingContext?el(e,n.pendingContext,n.pendingContext!==n.context):n.context&&el(e,n.context,!1),Dr(e,n.containerInfo)}var ri={dehydrated:null,retryLane:0};function Ql(e,n,a){var t=n.pendingProps,i=J.current,r=!1,o;return(o=(n.flags&64)!=0)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!=0),o?(r=!0,n.flags&=-65):e!==null&&e.memoizedState===null||t.fallback===void 0||t.unstable_avoidThisFallback===!0||(i|=1),_(J,i&1),e===null?(t.fallback!==void 0&&Lr(n),e=t.children,i=t.fallback,r?(e=Fl(n,e,i,a),n.child.memoizedState={baseLanes:a},n.memoizedState=ri,e):typeof t.unstable_expectedLoadTime=="number"?(e=Fl(n,e,i,a),n.child.memoizedState={baseLanes:a},n.memoizedState=ri,n.lanes=33554432,e):(a=qr({mode:"visible",children:e},n.mode,a,null),a.return=n,n.child=a)):e.memoizedState!==null?r?(t=xl(e,n,t.children,t.fallback,a),r=n.child,i=e.child.memoizedState,r.memoizedState=i===null?{baseLanes:a}:{baseLanes:i.baseLanes|a},r.childLanes=e.childLanes&~a,n.memoizedState=ri,t):(a=Yl(e,n,t.children,a),n.memoizedState=null,a):r?(t=xl(e,n,t.children,t.fallback,a),r=n.child,i=e.child.memoizedState,r.memoizedState=i===null?{baseLanes:a}:{baseLanes:i.baseLanes|a},r.childLanes=e.childLanes&~a,n.memoizedState=ri,t):(a=Yl(e,n,t.children,a),n.memoizedState=null,a)}function Fl(e,n,a,t){var i=e.mode,r=e.child;return n={mode:"hidden",children:n},(i&2)==0&&r!==null?(r.childLanes=0,r.pendingProps=n):r=qr(n,i,0,null),a=ta(a,i,t,null),r.return=e,a.return=e,r.sibling=a,e.child=r,a}function Yl(e,n,a,t){var i=e.child;return e=i.sibling,a=ln(i,{mode:"visible",children:a}),(n.mode&2)==0&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,n.firstEffect=n.lastEffect=e),n.child=a}function xl(e,n,a,t,i){var r=n.mode,o=e.child;e=o.sibling;var s={mode:"hidden",children:a};return(r&2)==0&&n.child!==o?(a=n.child,a.childLanes=0,a.pendingProps=s,o=a.lastEffect,o!==null?(n.firstEffect=a.firstEffect,n.lastEffect=o,o.nextEffect=null):n.firstEffect=n.lastEffect=null):a=ln(o,s),e!==null?t=ln(e,t):(t=ta(t,r,i,null),t.flags|=2),t.return=n,a.return=n,a.sibling=t,n.child=a,t}function jl(e,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),cl(e.return,n)}function Xr(e,n,a,t,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:a,tailMode:i,lastEffect:r}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=t,o.tail=a,o.tailMode=i,o.lastEffect=r)}function zl(e,n,a){var t=n.pendingProps,i=t.revealOrder,r=t.tail;if(Se(e,n,t.children,a),t=J.current,(t&2)!=0)t=t&1|2,n.flags|=64;else{if(e!==null&&(e.flags&64)!=0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jl(e,a);else if(e.tag===19)jl(e,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(_(J,t),(n.mode&2)==0)n.memoizedState=null;else switch(i){case"forwards":for(a=n.child,i=null;a!==null;)e=a.alternate,e!==null&&qt(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=n.child,n.child=null):(i=a.sibling,a.sibling=null),Xr(n,!1,i,a,r,n.lastEffect);break;case"backwards":for(a=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&qt(e)===null){n.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Xr(n,!0,a,null,r,n.lastEffect);break;case"together":Xr(n,!1,null,null,void 0,n.lastEffect);break;default:n.memoizedState=null}return n.child}function Fe(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)!=0){if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,a=ln(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ln(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}return null}var _l,$r,Jl,Vl;_l=function(e,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};$r=function(){};Jl=function(e,n,a,t){var i=e.memoizedProps;if(i!==t){e=n.stateNode,wn(Ke.current);var r=null;switch(a){case"input":i=Bi(e,i),t=Bi(e,t),r=[];break;case"option":i=Ri(e,i),t=Ri(e,t),r=[];break;case"select":i=H({},i,{value:void 0}),t=H({},t,{value:void 0}),r=[];break;case"textarea":i=Li(e,i),t=Li(e,t),r=[];break;default:typeof i.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=Gt)}Fi(a,t);var o;a=null;for(c in i)if(!t.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(a||(a={}),a[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ha.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in t){var l=t[c];if(s=i!=null?i[c]:void 0,t.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(a||(a={}),a[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(a||(a={}),a[o]=l[o])}else a||(r||(r=[]),r.push(c,a)),a=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(r=r||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ha.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Q("scroll",e),r||s===l||(r=[])):typeof l=="object"&&l!==null&&l.$$typeof===Pi?l.toString():(r=r||[]).push(c,l))}a&&(r=r||[]).push("style",a);var c=r;(n.updateQueue=c)&&(n.flags|=4)}};Vl=function(e,n,a,t){a!==t&&(n.flags|=4)};function Xa(e,n){if(!Ue)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Ic(e,n,a){var t=n.pendingProps;switch(n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return fe(n.type)&&Lt(),null;case 3:return ia(),j(pe),j(se),br(),t=n.stateNode,t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Xt(n)?n.flags|=4:t.hydrate||(n.flags|=256)),$r(n),null;case 5:Rr(n);var i=wn(ja.current);if(a=n.type,e!==null&&n.stateNode!=null)Jl(e,n,a,t,i),e.ref!==n.ref&&(n.flags|=128);else{if(!t){if(n.stateNode===null)throw Error(k(166));return null}if(e=wn(Ke.current),Xt(n)){t=n.stateNode,a=n.type;var r=n.memoizedProps;switch(t[$e]=n,t[Rt]=r,a){case"dialog":Q("cancel",t),Q("close",t);break;case"iframe":case"object":case"embed":Q("load",t);break;case"video":case"audio":for(e=0;e<Ra.length;e++)Q(Ra[e],t);break;case"source":Q("error",t);break;case"img":case"image":case"link":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"input":bo(t,r),Q("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},Q("invalid",t);break;case"textarea":xo(t,r),Q("invalid",t)}Fi(a,r),e=null;for(var o in r)r.hasOwnProperty(o)&&(i=r[o],o==="children"?typeof i=="string"?t.textContent!==i&&(e=["children",i]):typeof i=="number"&&t.textContent!==""+i&&(e=["children",""+i]):ha.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&Q("scroll",t));switch(a){case"input":ft(t),Yo(t,r,!0);break;case"textarea":ft(t),jo(t);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(t.onclick=Gt)}t=e,n.updateQueue=t,t!==null&&(n.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,e===Hi.html&&(e=zo(a)),e===Hi.html?a==="script"?(e=o.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=o.createElement(a,{is:t.is}):(e=o.createElement(a),a==="select"&&(o=e,t.multiple?o.multiple=!0:t.size&&(o.size=t.size))):e=o.createElementNS(e,a),e[$e]=n,e[Rt]=t,_l(e,n,!1,!1),n.stateNode=e,o=Yi(a,t),a){case"dialog":Q("cancel",e),Q("close",e),i=t;break;case"iframe":case"object":case"embed":Q("load",e),i=t;break;case"video":case"audio":for(i=0;i<Ra.length;i++)Q(Ra[i],e);i=t;break;case"source":Q("error",e),i=t;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=t;break;case"details":Q("toggle",e),i=t;break;case"input":bo(e,t),i=Bi(e,t),Q("invalid",e);break;case"option":i=Ri(e,t);break;case"select":e._wrapperState={wasMultiple:!!t.multiple},i=H({},t,{value:void 0}),Q("invalid",e);break;case"textarea":xo(e,t),i=Li(e,t),Q("invalid",e);break;default:i=t}Fi(a,i);var s=i;for(r in s)if(s.hasOwnProperty(r)){var l=s[r];r==="style"?Vo(e,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_o(e,l)):r==="children"?typeof l=="string"?(a!=="textarea"||l!=="")&&ya(e,l):typeof l=="number"&&ya(e,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(ha.hasOwnProperty(r)?l!=null&&r==="onScroll"&&Q("scroll",e):l!=null&&Ii(e,r,l,o))}switch(a){case"input":ft(e),Yo(e,t,!1);break;case"textarea":ft(e),jo(e);break;case"option":t.value!=null&&e.setAttribute("value",""+_e(t.value));break;case"select":e.multiple=!!t.multiple,r=t.value,r!=null?Ln(e,!!t.multiple,r,!1):t.defaultValue!=null&&Ln(e,!!t.multiple,t.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gt)}Zs(a,t)&&(n.flags|=4)}n.ref!==null&&(n.flags|=128)}return null;case 6:if(e&&n.stateNode!=null)Vl(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(k(166));a=wn(ja.current),wn(Ke.current),Xt(n)?(t=n.stateNode,a=n.memoizedProps,t[$e]=n,t.nodeValue!==a&&(n.flags|=4)):(t=(a.nodeType===9?a:a.ownerDocument).createTextNode(t),t[$e]=n,n.stateNode=t)}return null;case 13:return j(J),t=n.memoizedState,(n.flags&64)!=0?(n.lanes=a,n):(t=t!==null,a=!1,e===null?n.memoizedProps.fallback!==void 0&&Xt(n):a=e.memoizedState!==null,t&&!a&&(n.mode&2)!=0&&(e===null&&n.memoizedProps.unstable_avoidThisFallback!==!0||(J.current&1)!=0?oe===0&&(oe=3):((oe===0||oe===3)&&(oe=4),ge===null||(ba&134217727)==0&&(oa&134217727)==0||sa(ge,de))),(t||a)&&(n.flags|=4),null);case 4:return ia(),$r(n),e===null&&Js(n.stateNode.containerInfo),null;case 10:return Nr(n),null;case 17:return fe(n.type)&&Lt(),null;case 19:if(j(J),t=n.memoizedState,t===null)return null;if(r=(n.flags&64)!=0,o=t.rendering,o===null)if(r)Xa(t,!1);else{if(oe!==0||e!==null&&(e.flags&64)!=0)for(e=n.child;e!==null;){if(o=qt(e),o!==null){for(n.flags|=64,Xa(t,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),t.lastEffect===null&&(n.firstEffect=null),n.lastEffect=t.lastEffect,t=a,a=n.child;a!==null;)r=a,e=t,r.flags&=2,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return _(J,J.current&1|2),n.child}e=e.sibling}t.tail!==null&&le()>eo&&(n.flags|=64,r=!0,Xa(t,!1),n.lanes=33554432)}else{if(!r)if(e=qt(o),e!==null){if(n.flags|=64,r=!0,a=e.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),Xa(t,!0),t.tail===null&&t.tailMode==="hidden"&&!o.alternate&&!Ue)return n=n.lastEffect=t.lastEffect,n!==null&&(n.nextEffect=null),null}else 2*le()-t.renderingStartTime>eo&&a!==1073741824&&(n.flags|=64,r=!0,Xa(t,!1),n.lanes=33554432);t.isBackwards?(o.sibling=n.child,n.child=o):(a=t.last,a!==null?a.sibling=o:n.child=o,t.last=o)}return t.tail!==null?(a=t.tail,t.rendering=a,t.tail=a.sibling,t.lastEffect=n.lastEffect,t.renderingStartTime=le(),a.sibling=null,n=J.current,_(J,r?n&1|2:n&1),a):null;case 23:case 24:return no(),e!==null&&e.memoizedState!==null!=(n.memoizedState!==null)&&t.mode!=="unstable-defer-without-hiding"&&(n.flags|=4),null}throw Error(k(156,n.tag))}function Mc(e){switch(e.tag){case 1:fe(e.type)&&Lt();var n=e.flags;return n&4096?(e.flags=n&-4097|64,e):null;case 3:if(ia(),j(pe),j(se),br(),n=e.flags,(n&64)!=0)throw Error(k(285));return e.flags=n&-4097|64,e;case 5:return Rr(e),null;case 13:return j(J),n=e.flags,n&4096?(e.flags=n&-4097|64,e):null;case 19:return j(J),null;case 4:return ia(),null;case 10:return Nr(e),null;case 23:case 24:return no(),null;default:return null}}function ao(e,n){try{var a="",t=n;do a+=id(t),t=t.return;while(t);var i=a}catch(r){i=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:i}}function to(e,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var Ec=typeof WeakMap=="function"?WeakMap:Map;function Zl(e,n,a){a=tn(-1,a),a.tag=3,a.payload={element:null};var t=n.value;return a.callback=function(){oi||(oi=!0,io=t),to(e,n)},a}function ql(e,n,a){a=tn(-1,a),a.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var i=n.value;a.payload=function(){return to(e,n),t(i)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(a.callback=function(){typeof t!="function"&&(Ge===null?Ge=new Set([this]):Ge.add(this),to(e,n));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),a}var Cc=typeof WeakSet=="function"?WeakSet:Set;function Xl(e){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){dn(e,a)}else n.current=null}function wc(e,n){switch(n.tag){case 0:case 11:case 15:case 22:return;case 1:if(n.flags&256&&e!==null){var a=e.memoizedProps,t=e.memoizedState;e=n.stateNode,n=e.getSnapshotBeforeUpdate(n.elementType===n.type?a:We(n.type,a),t),e.__reactInternalSnapshotBeforeUpdate=n}return;case 3:n.flags&256&&Ar(n.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(k(163))}function Pc(e,n,a){switch(a.tag){case 0:case 11:case 15:case 22:if(n=a.updateQueue,n=n!==null?n.lastEffect:null,n!==null){e=n=n.next;do{if((e.tag&3)==3){var t=e.create;e.destroy=t()}e=e.next}while(e!==n)}if(n=a.updateQueue,n=n!==null?n.lastEffect:null,n!==null){e=n=n.next;do{var i=e;t=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&($l(a,e),Wc(a,e)),e=t}while(e!==n)}return;case 1:e=a.stateNode,a.flags&4&&(n===null?e.componentDidMount():(t=a.elementType===a.type?n.memoizedProps:We(a.type,n.memoizedProps),e.componentDidUpdate(t,n.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),n=a.updateQueue,n!==null&&pl(a,n,e);return;case 3:if(n=a.updateQueue,n!==null){if(e=null,a.child!==null)switch(a.child.tag){case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}pl(a,n,e)}return;case 5:e=a.stateNode,n===null&&a.flags&4&&Zs(a.type,a.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:a.memoizedState===null&&(a=a.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&cs(a))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(k(163))}function eu(e,n){for(var a=e;;){if(a.tag===5){var t=a.stateNode;if(n)t=t.style,typeof t.setProperty=="function"?t.setProperty("display","none","important"):t.display="none";else{t=a.stateNode;var i=a.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,t.style.display=Jo("display",i)}}else if(a.tag===6)a.stateNode.nodeValue=n?"":a.memoizedProps;else if((a.tag!==23&&a.tag!==24||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return;a=a.return}a.sibling.return=a.return,a=a.sibling}}function au(e,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(Mr,n)}catch(r){}switch(n.tag){case 0:case 11:case 14:case 15:case 22:if(e=n.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var a=e=e.next;do{var t=a,i=t.destroy;if(t=t.tag,i!==void 0)if((t&4)!=0)$l(n,a);else{t=n;try{i()}catch(r){dn(t,r)}}a=a.next}while(a!==e)}break;case 1:if(Xl(n),e=n.stateNode,typeof e.componentWillUnmount=="function")try{e.props=n.memoizedProps,e.state=n.memoizedState,e.componentWillUnmount()}catch(r){dn(n,r)}break;case 5:Xl(n);break;case 4:nu(e,n)}}function tu(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function iu(e){return e.tag===5||e.tag===3||e.tag===4}function ru(e){e:{for(var n=e.return;n!==null;){if(iu(n))break e;n=n.return}throw Error(k(160))}var a=n;switch(n=a.stateNode,a.tag){case 5:var t=!1;break;case 3:n=n.containerInfo,t=!0;break;case 4:n=n.containerInfo,t=!0;break;default:throw Error(k(161))}a.flags&16&&(ya(n,""),a.flags&=-17);e:n:for(a=e;;){for(;a.sibling===null;){if(a.return===null||iu(a.return)){a=null;break e}a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue n;a.child.return=a,a=a.child}if(!(a.flags&2)){a=a.stateNode;break e}}t?ro(e,a,n):oo(e,a,n)}function ro(e,n,a){var t=e.tag,i=t===5||t===6;if(i)e=i?e.stateNode:e.stateNode.instance,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gt));else if(t!==4&&(e=e.child,e!==null))for(ro(e,n,a),e=e.sibling;e!==null;)ro(e,n,a),e=e.sibling}function oo(e,n,a){var t=e.tag,i=t===5||t===6;if(i)e=i?e.stateNode:e.stateNode.instance,n?a.insertBefore(e,n):a.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(oo(e,n,a),e=e.sibling;e!==null;)oo(e,n,a),e=e.sibling}function nu(e,n){for(var a=n,t=!1,i,r;;){if(!t){t=a.return;e:for(;;){if(t===null)throw Error(k(160));switch(i=t.stateNode,t.tag){case 5:r=!1;break e;case 3:i=i.containerInfo,r=!0;break e;case 4:i=i.containerInfo,r=!0;break e}t=t.return}t=!0}if(a.tag===5||a.tag===6){e:for(var o=e,s=a,l=s;;)if(au(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===s)break e;for(;l.sibling===null;){if(l.return===null||l.return===s)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}r?(o=i,s=a.stateNode,o.nodeType===8?o.parentNode.removeChild(s):o.removeChild(s)):i.removeChild(a.stateNode)}else if(a.tag===4){if(a.child!==null){i=a.stateNode.containerInfo,r=!0,a.child.return=a,a=a.child;continue}}else if(au(e,a),a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return,a.tag===4&&(t=!1)}a.sibling.return=a.return,a=a.sibling}}function lo(e,n){switch(n.tag){case 0:case 11:case 14:case 15:case 22:var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var t=a=a.next;do(t.tag&3)==3&&(e=t.destroy,t.destroy=void 0,e!==void 0&&e()),t=t.next;while(t!==a)}return;case 1:return;case 5:if(a=n.stateNode,a!=null){t=n.memoizedProps;var i=e!==null?e.memoizedProps:t;e=n.type;var r=n.updateQueue;if(n.updateQueue=null,r!==null){for(a[Rt]=t,e==="input"&&t.type==="radio"&&t.name!=null&&Fo(a,t),Yi(e,i),n=Yi(e,t),i=0;i<r.length;i+=2){var o=r[i],s=r[i+1];o==="style"?Vo(a,s):o==="dangerouslySetInnerHTML"?_o(a,s):o==="children"?ya(a,s):Ii(a,o,s,n)}switch(e){case"input":Di(a,t);break;case"textarea":Qo(a,t);break;case"select":e=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!t.multiple,r=t.value,r!=null?Ln(a,!!t.multiple,r,!1):e!==!!t.multiple&&(t.defaultValue!=null?Ln(a,!!t.multiple,t.defaultValue,!0):Ln(a,!!t.multiple,t.multiple?[]:"",!1))}}}return;case 6:if(n.stateNode===null)throw Error(k(162));n.stateNode.nodeValue=n.memoizedProps;return;case 3:a=n.stateNode,a.hydrate&&(a.hydrate=!1,cs(a.containerInfo));return;case 12:return;case 13:n.memoizedState!==null&&(so=le(),eu(n.child,!0)),ou(n);return;case 19:ou(n);return;case 17:return;case 23:case 24:eu(n,n.memoizedState!==null);return}throw Error(k(163))}function ou(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Cc),n.forEach(function(t){var i=Oc.bind(null,e,t);a.has(t)||(a.add(t),t.then(i,i))})}}function Nc(e,n){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(n=n.memoizedState,n!==null&&n.dehydrated===null):!1}var Kc=Math.ceil,si=yn.ReactCurrentDispatcher,uo=yn.ReactCurrentOwner,U=0,ge=null,ee=null,de=0,On=0,co=en(0),oe=0,li=null,la=0,ba=0,oa=0,go=0,ho=null,so=0,eo=Infinity;function ua(){eo=le()+500}var I=null,oi=!1,io=null,Ge=null,cn=!1,$a=null,et=90,po=[],fo=[],Ye=null,nt=0,mo=null,ui=-1,xe=0,di=0,at=null,ci=!1;function Te(){return(U&48)!=0?le():ui!==-1?ui:ui=le()}function on(e){if(e=e.mode,(e&2)==0)return 1;if((e&4)==0)return ea()===99?1:2;if(xe===0&&(xe=la),Sc.transition!==0){di!==0&&(di=ho!==null?ho.pendingLanes:0),e=xe;var n=4186112&~di;return n&=-n,n===0&&(e=4186112&~e,n=e&-e,n===0&&(n=8192)),n}return e=ea(),(U&4)!=0&&e===98?e=Mt(12,xe):(e=Td(e),e=Mt(e,xe)),e}function sn(e,n,a){if(50<nt)throw nt=0,mo=null,Error(k(185));if(e=gi(e,n),e===null)return null;Et(e,n,a),e===ge&&(oa|=n,oe===4&&sa(e,de));var t=ea();n===1?(U&8)!=0&&(U&48)==0?So(e):(Ee(e,a),U===0&&(ua(),Ne())):((U&4)==0||t!==98&&t!==99||(Ye===null?Ye=new Set([e]):Ye.add(e)),Ee(e,a)),ho=e}function gi(e,n){e.lanes|=n;var a=e.alternate;for(a!==null&&(a.lanes|=n),a=e,e=e.return;e!==null;)e.childLanes|=n,a=e.alternate,a!==null&&(a.childLanes|=n),a=e,e=e.return;return a.tag===3?a.stateNode:null}function Ee(e,n){for(var a=e.callbackNode,t=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-qe(o),l=1<<s,c=r[s];if(c===-1){if((l&t)==0||(l&i)!=0){c=n,xn(l);var y=Y;r[s]=10<=y?c+250:6<=y?c+5e3:-1}}else c<=n&&(e.expiredLanes|=l);o&=~l}if(t=Pa(e,e===ge?de:0),n=Y,t===0)a!==null&&(a!==Wr&&Cr(a),e.callbackNode=null,e.callbackPriority=0);else{if(a!==null){if(e.callbackPriority===n)return;a!==Wr&&Cr(a)}n===15?(a=So.bind(null,e),He===null?(He=[a],Ft=Er(bt,dl)):He.push(a),a=Wr):n===14?a=Ha(99,So.bind(null,e)):(a=Ad(n),a=Ha(a,su.bind(null,e))),e.callbackPriority=n,e.callbackNode=a}}function su(e){if(ui=-1,di=xe=0,(U&48)!=0)throw Error(k(327));var n=e.callbackNode;if(gn()&&e.callbackNode!==n)return null;var a=Pa(e,e===ge?de:0);if(a===0)return null;var t=a,i=U;U|=16;var r=uu();(ge!==e||de!==t)&&(ua(),da(e,t));do try{Uc();break}catch(s){lu(e,s)}while(1);if(Or(),si.current=r,U=i,ee!==null?t=0:(ge=null,de=0,t=oe),(la&oa)!=0)da(e,0);else if(t!==0){if(t===2&&(U|=64,e.hydrate&&(e.hydrate=!1,Ar(e.containerInfo)),a=ks(e),a!==0&&(t=tt(e,a))),t===1)throw n=li,da(e,0),sa(e,a),Ee(e,le()),n;switch(e.finishedWork=e.current.alternate,e.finishedLanes=a,t){case 0:case 1:throw Error(k(345));case 2:Nn(e);break;case 3:if(sa(e,a),(a&62914560)===a&&(t=so+500-le(),10<t)){if(Pa(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qs(Nn.bind(null,e),t);break}Nn(e);break;case 4:if(sa(e,a),(a&4186112)===a)break;for(t=e.eventTimes,i=-1;0<a;){var o=31-qe(a);r=1<<o,o=t[o],o>i&&(i=o),a&=~r}if(a=i,a=le()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Kc(a/1960))-a,10<a){e.timeoutHandle=qs(Nn.bind(null,e),a);break}Nn(e);break;case 5:Nn(e);break;default:throw Error(k(329))}}return Ee(e,le()),e.callbackNode===n?su.bind(null,e):null}function sa(e,n){for(n&=~go,n&=~oa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var a=31-qe(n),t=1<<a;e[a]=-1,n&=~t}}function So(e){if((U&48)!=0)throw Error(k(327));if(gn(),e===ge&&(e.expiredLanes&de)!=0){var n=de,a=tt(e,n);(la&oa)!=0&&(n=Pa(e,n),a=tt(e,n))}else n=Pa(e,0),a=tt(e,n);if(e.tag!==0&&a===2&&(U|=64,e.hydrate&&(e.hydrate=!1,Ar(e.containerInfo)),n=ks(e),n!==0&&(a=tt(e,n))),a===1)throw a=li,da(e,0),sa(e,n),Ee(e,le()),a;return e.finishedWork=e.current.alternate,e.finishedLanes=n,Nn(e),Ee(e,le()),null}function Bc(){if(Ye!==null){var e=Ye;Ye=null,e.forEach(function(n){n.expiredLanes|=24&n.pendingLanes,Ee(n,le())})}Ne()}function du(e,n){var a=U;U|=1;try{return e(n)}finally{U=a,U===0&&(ua(),Ne())}}function cu(e,n){var a=U;U&=-2,U|=8;try{return e(n)}finally{U=a,U===0&&(ua(),Ne())}}function ii(e,n){_(co,On),On|=n,la|=n}function no(){On=co.current,j(co)}function da(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,cc(a)),ee!==null)for(a=ee.return;a!==null;){var t=a;switch(t.tag){case 1:t=t.type.childContextTypes,t!=null&&Lt();break;case 3:ia(),j(pe),j(se),br();break;case 5:Rr(t);break;case 4:ia();break;case 13:j(J);break;case 19:j(J);break;case 10:Nr(t);break;case 23:case 24:no()}a=a.return}ge=e,ee=ln(e.current,null),de=On=la=n,oe=0,li=null,go=oa=ba=0}function lu(e,n){do{var a=ee;try{if(Or(),za.current=ei,$t){for(var t=Z.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}$t=!1}if(_a=0,re=ue=Z=null,Ja=!1,uo.current=null,a===null||a.return===null){oe=1,li=n,ee=null;break}e:{var r=e,o=a.return,s=a,l=n;if(n=de,s.flags|=2048,s.firstEffect=s.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l;if((s.mode&2)==0){var y=s.alternate;y?(s.updateQueue=y.updateQueue,s.memoizedState=y.memoizedState,s.lanes=y.lanes):(s.updateQueue=null,s.memoizedState=null)}var W=(J.current&1)!=0,m=o;do{var M;if(M=m.tag===13){var P=m.memoizedState;if(P!==null)M=P.dehydrated!==null;else{var E=m.memoizedProps;M=E.fallback===void 0?!1:E.unstable_avoidThisFallback!==!0?!0:!W}}if(M){var g=m.updateQueue;if(g===null){var u=new Set;u.add(c),m.updateQueue=u}else g.add(c);if((m.mode&2)==0){if(m.flags|=64,s.flags|=16384,s.flags&=-2981,s.tag===1)if(s.alternate===null)s.tag=17;else{var d=tn(-1,1);d.tag=2,rn(s,d)}s.lanes|=1;break e}l=void 0,s=n;var p=r.pingCache;if(p===null?(p=r.pingCache=new Ec,l=new Set,p.set(c,l)):(l=p.get(c),l===void 0&&(l=new Set,p.set(c,l))),!l.has(s)){l.add(s);var f=Gc.bind(null,r,c,s);c.then(f,f)}m.flags|=4096,m.lanes=n;break e}m=m.return}while(m!==null);l=Error((Rn(s.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}oe!==5&&(oe=2),l=ao(l,s),m=o;do{switch(m.tag){case 3:r=l,m.flags|=4096,n&=-n,m.lanes|=n;var O=Zl(m,r,n);hl(m,O);break e;case 1:r=l;var A=m.type,C=m.stateNode;if((m.flags&64)==0&&(typeof A.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Ge===null||!Ge.has(C)))){m.flags|=4096,n&=-n,m.lanes|=n;var K=ql(m,r,n);hl(m,K);break e}}m=m.return}while(m!==null)}gu(a)}catch(N){n=N,ee===a&&a!==null&&(ee=a=a.return);continue}break}while(1)}function uu(){var e=si.current;return si.current=ei,e===null?ei:e}function tt(e,n){var a=U;U|=16;var t=uu();ge===e&&de===n||da(e,n);do try{Dc();break}catch(i){lu(e,i)}while(1);if(Or(),U=a,si.current=t,ee!==null)throw Error(k(261));return ge=null,de=0,oe}function Dc(){for(;ee!==null;)hu(ee)}function Uc(){for(;ee!==null&&!pc();)hu(ee)}function hu(e){var n=pu(e.alternate,e,On);e.memoizedProps=e.pendingProps,n===null?gu(e):ee=n,uo.current=null}function gu(e){var n=e;do{var a=n.alternate;if(e=n.return,(n.flags&2048)==0){if(a=Ic(a,n,On),a!==null){ee=a;return}if(a=n,a.tag!==24&&a.tag!==23||a.memoizedState===null||(On&1073741824)!=0||(a.mode&4)==0){for(var t=0,i=a.child;i!==null;)t|=i.lanes|i.childLanes,i=i.sibling;a.childLanes=t}e!==null&&(e.flags&2048)==0&&(e.firstEffect===null&&(e.firstEffect=n.firstEffect),n.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=n.firstEffect),e.lastEffect=n.lastEffect),1<n.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=n:e.firstEffect=n,e.lastEffect=n))}else{if(a=Mc(n),a!==null){a.flags&=2047,ee=a;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);oe===0&&(oe=5)}function Nn(e){var n=ea();return Cn(99,Rc.bind(null,e,n)),null}function Rc(e,n){do gn();while($a!==null);if((U&48)!=0)throw Error(k(327));var a=e.finishedWork;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(k(177));e.callbackNode=null;var t=a.lanes|a.childLanes,i=t,r=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var o=e.eventTimes,s=e.expirationTimes;0<r;){var l=31-qe(r),c=1<<l;i[l]=0,o[l]=-1,s[l]=-1,r&=~c}if(Ye!==null&&(t&24)==0&&Ye.has(e)&&Ye.delete(e),e===ge&&(ee=ge=null,de=0),1<a.flags?a.lastEffect!==null?(a.lastEffect.nextEffect=a,t=a.firstEffect):t=a:t=a.firstEffect,t!==null){if(i=U,U|=32,uo.current=null,kr=Ct,o=Hs(),pr(o)){if("selectionStart"in o)s={start:o.selectionStart,end:o.selectionEnd};else e:if(s=(s=o.ownerDocument)&&s.defaultView||window,(c=s.getSelection&&s.getSelection())&&c.rangeCount!==0){s=c.anchorNode,r=c.anchorOffset,l=c.focusNode,c=c.focusOffset;try{s.nodeType,l.nodeType}catch(N){s=null;break e}var y=0,W=-1,m=-1,M=0,P=0,E=o,g=null;n:for(;;){for(var u;E!==s||r!==0&&E.nodeType!==3||(W=y+r),E!==l||c!==0&&E.nodeType!==3||(m=y+c),E.nodeType===3&&(y+=E.nodeValue.length),(u=E.firstChild)!==null;)g=E,E=u;for(;;){if(E===o)break n;if(g===s&&++M===r&&(W=y),g===l&&++P===c&&(m=y),(u=E.nextSibling)!==null)break;E=g,g=E.parentNode}E=u}s=W===-1||m===-1?null:{start:W,end:m}}else s=null;s=s||{start:0,end:0}}else s=null;yr={focusedElem:o,selectionRange:s},Ct=!1,at=null,ci=!1,I=t;do try{Lc()}catch(N){if(I===null)throw Error(k(330));dn(I,N),I=I.nextEffect}while(I!==null);at=null,I=t;do try{for(o=e;I!==null;){var d=I.flags;if(d&16&&ya(I.stateNode,""),d&128){var p=I.alternate;if(p!==null){var f=p.ref;f!==null&&(typeof f=="function"?f(null):f.current=null)}}switch(d&1038){case 2:ru(I),I.flags&=-3;break;case 6:ru(I),I.flags&=-3,lo(I.alternate,I);break;case 1024:I.flags&=-1025;break;case 1028:I.flags&=-1025,lo(I.alternate,I);break;case 4:lo(I.alternate,I);break;case 8:s=I,nu(o,s);var O=s.alternate;tu(s),O!==null&&tu(O)}I=I.nextEffect}}catch(N){if(I===null)throw Error(k(330));dn(I,N),I=I.nextEffect}while(I!==null);if(f=yr,p=Hs(),d=f.focusedElem,o=f.selectionRange,p!==d&&d&&d.ownerDocument&&Ls(d.ownerDocument.documentElement,d)){for(o!==null&&pr(d)&&(p=o.start,f=o.end,f===void 0&&(f=p),"selectionStart"in d?(d.selectionStart=p,d.selectionEnd=Math.min(f,d.value.length)):(f=(p=d.ownerDocument||document)&&p.defaultView||window,f.getSelection&&(f=f.getSelection(),s=d.textContent.length,O=Math.min(o.start,s),o=o.end===void 0?O:Math.min(o.end,s),!f.extend&&O>o&&(s=o,o=O,O=s),s=Rs(d,O),r=Rs(d,o),s&&r&&(f.rangeCount!==1||f.anchorNode!==s.node||f.anchorOffset!==s.offset||f.focusNode!==r.node||f.focusOffset!==r.offset)&&(p=p.createRange(),p.setStart(s.node,s.offset),f.removeAllRanges(),O>o?(f.addRange(p),f.extend(r.node,r.offset)):(p.setEnd(r.node,r.offset),f.addRange(p)))))),p=[],f=d;f=f.parentNode;)f.nodeType===1&&p.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<p.length;d++)f=p[d],f.element.scrollLeft=f.left,f.element.scrollTop=f.top}Ct=!!kr,yr=kr=null,e.current=a,I=t;do try{for(d=e;I!==null;){var A=I.flags;if(A&36&&Pc(d,I.alternate,I),A&128){p=void 0;var C=I.ref;if(C!==null){var K=I.stateNode;switch(I.tag){case 5:p=K;break;default:p=K}typeof C=="function"?C(p):C.current=p}}I=I.nextEffect}}catch(N){if(I===null)throw Error(k(330));dn(I,N),I=I.nextEffect}while(I!==null);I=null,mc(),U=i}else e.current=a;if(cn)cn=!1,$a=e,et=n;else for(I=t;I!==null;)n=I.nextEffect,I.nextEffect=null,I.flags&8&&(A=I,A.sibling=null,A.stateNode=null),I=n;if(t=e.pendingLanes,t===0&&(Ge=null),t===1?e===mo?nt++:(nt=0,mo=e):nt=0,a=a.stateNode,En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(Mr,a,void 0,(a.current.flags&64)==64)}catch(N){}if(Ee(e,le()),oi)throw oi=!1,e=io,io=null,e;return(U&8)!=0||Ne(),null}function Lc(){for(;I!==null;){var e=I.alternate;ci||at===null||((I.flags&8)!=0?is(I,at)&&(ci=!0):I.tag===13&&Nc(e,I)&&is(I,at)&&(ci=!0));var n=I.flags;(n&256)!=0&&wc(e,I),(n&512)==0||cn||(cn=!0,Ha(97,function(){return gn(),null})),I=I.nextEffect}}function gn(){if(et!==90){var e=97<et?97:et;return et=90,Cn(e,Hc)}return!1}function Wc(e,n){po.push(n,e),cn||(cn=!0,Ha(97,function(){return gn(),null}))}function $l(e,n){fo.push(n,e),cn||(cn=!0,Ha(97,function(){return gn(),null}))}function Hc(){if($a===null)return!1;var e=$a;if($a=null,(U&48)!=0)throw Error(k(331));var n=U;U|=32;var a=fo;fo=[];for(var t=0;t<a.length;t+=2){var i=a[t],r=a[t+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(l){if(r===null)throw Error(k(330));dn(r,l)}}for(a=po,po=[],t=0;t<a.length;t+=2){i=a[t],r=a[t+1];try{var s=i.create;i.destroy=s()}catch(l){if(r===null)throw Error(k(330));dn(r,l)}}for(s=e.current.firstEffect;s!==null;)e=s.nextEffect,s.nextEffect=null,s.flags&8&&(s.sibling=null,s.stateNode=null),s=e;return U=n,Ne(),!0}function fu(e,n,a){n=ao(a,n),n=Zl(e,n,1),rn(e,n),n=Te(),e=gi(e,1),e!==null&&(Et(e,1,n),Ee(e,n))}function dn(e,n){if(e.tag===3)fu(e,e,n);else for(var a=e.return;a!==null;){if(a.tag===3){fu(a,e,n);break}else if(a.tag===1){var t=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Ge===null||!Ge.has(t))){e=ao(n,e);var i=ql(a,e,1);if(rn(a,i),i=Te(),a=gi(a,1),a!==null)Et(a,1,i),Ee(a,i);else if(typeof t.componentDidCatch=="function"&&(Ge===null||!Ge.has(t)))try{t.componentDidCatch(n,e)}catch(r){}break}}a=a.return}}function Gc(e,n,a){var t=e.pingCache;t!==null&&t.delete(n),n=Te(),e.pingedLanes|=e.suspendedLanes&a,ge===e&&(de&a)===a&&(oe===4||oe===3&&(de&62914560)===de&&500>le()-so?da(e,0):go|=a),Ee(e,n)}function Oc(e,n){var a=e.stateNode;a!==null&&a.delete(n),n=0,n===0&&(n=e.mode,(n&2)==0?n=1:(n&4)==0?n=ea()===99?1:2:(xe===0&&(xe=la),n=Qn(62914560&~xe),n===0&&(n=4194304))),a=Te(),e=gi(e,n),e!==null&&(Et(e,n,a),Ee(e,a))}var pu;pu=function(e,n,a){var t=n.lanes;if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)Pe=!0;else if((a&t)!=0)Pe=(e.flags&16384)!=0;else{switch(Pe=!1,n.tag){case 3:bl(n),Hr();break;case 5:Al(n);break;case 1:fe(n.type)&&Ht(n);break;case 4:Dr(n,n.stateNode.containerInfo);break;case 10:t=n.memoizedProps.value;var i=n.type._context;_(Yt,i._currentValue),i._currentValue=t;break;case 13:if(n.memoizedState!==null)return(a&n.child.childLanes)!=0?Ql(e,n,a):(_(J,J.current&1),n=Fe(e,n,a),n!==null?n.sibling:null);_(J,J.current&1);break;case 19:if(t=(a&n.childLanes)!=0,(e.flags&64)!=0){if(t)return zl(e,n,a);n.flags|=64}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_(J,J.current),t)break;return null;case 23:case 24:return n.lanes=0,Vr(e,n,a)}return Fe(e,n,a)}else Pe=!1;switch(n.lanes=0,n.tag){case 2:if(t=n.type,e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),e=n.pendingProps,i=$n(n,se.current),aa(n,a),i=Yr(null,n,t,e,i,a),n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(t)){var r=!0;Ht(n)}else r=!1;n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kr(n);var o=t.getDerivedStateFromProps;typeof o=="function"&&jt(n,t,o,e),i.updater=zt,n.stateNode=i,i._reactInternals=n,Ur(n,t,e,a),n=Zr(null,n,t,!0,r,a)}else n.tag=0,Se(null,n,i,a),n=n.child;return n;case 16:i=n.elementType;e:{switch(e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),e=n.pendingProps,r=i._init,i=r(i._payload),n.type=i,r=n.tag=bc(i),e=We(i,e),r){case 0:n=Jr(null,n,i,e,a);break e;case 1:n=Hl(null,n,i,e,a);break e;case 11:n=Gl(null,n,i,e,a);break e;case 14:n=Rl(null,n,i,We(i.type,e),t,a);break e}throw Error(k(306,i,""))}return n;case 0:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:We(t,i),Jr(e,n,t,i,a);case 1:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:We(t,i),Hl(e,n,t,i,a);case 3:if(bl(n),t=n.updateQueue,e===null||t===null)throw Error(k(282));if(t=n.pendingProps,i=n.memoizedState,i=i!==null?i.element:null,gl(e,n),Fa(n,t,null,a),t=n.memoizedState.element,t===i)Hr(),n=Fe(e,n,a);else{if(i=n.stateNode,(r=i.hydrate)&&(un=qn(n.stateNode.containerInfo.firstChild),be=n,r=Ue=!0),r){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)r=e[i],r._workInProgressVersionPrimary=e[i+1],ra.push(r);for(a=Tl(n,null,t,a),n.child=a;a;)a.flags=a.flags&-3|1024,a=a.sibling}else Se(e,n,t,a),Hr();n=n.child}return n;case 5:return Al(n),e===null&&Lr(n),t=n.type,i=n.pendingProps,r=e!==null?e.memoizedProps:null,o=i.children,Tr(t,i)?o=null:r!==null&&Tr(t,r)&&(n.flags|=16),Ll(e,n),Se(e,n,o,a),n.child;case 6:return e===null&&Lr(n),null;case 13:return Ql(e,n,a);case 4:return Dr(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=Zt(n,null,t,a):Se(e,n,t,a),n.child;case 11:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:We(t,i),Gl(e,n,t,i,a);case 7:return Se(e,n,n.pendingProps,a),n.child;case 8:return Se(e,n,n.pendingProps.children,a),n.child;case 12:return Se(e,n,n.pendingProps.children,a),n.child;case 10:e:{t=n.type._context,i=n.pendingProps,o=n.memoizedProps,r=i.value;var s=n.type._context;if(_(Yt,s._currentValue),s._currentValue=r,o!==null)if(s=o.value,r=Ae(s,r)?0:(typeof t._calculateChangedBits=="function"?t._calculateChangedBits(s,r):1073741823)|0,r===0){if(o.children===i.children&&!pe.current){n=Fe(e,n,a);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===t&&(c.observedBits&r)!=0){s.tag===1&&(c=tn(-1,a&-a),c.tag=2,rn(s,c)),s.lanes|=a,c=s.alternate,c!==null&&(c.lanes|=a),cl(s.return,a),l.lanes|=a;break}c=c.next}}else o=s.tag===10&&s.type===n.type?null:s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===n){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Se(e,n,i.children,a),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps,t=r.children,aa(n,a),i=ve(i,r.unstable_observedBits),t=t(i),n.flags|=1,Se(e,n,t,a),n.child;case 14:return i=n.type,r=We(i,n.pendingProps),r=We(i.type,r),Rl(e,n,i,r,t,a);case 15:return Dl(e,n,n.type,n.pendingProps,t,a);case 17:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:We(t,i),e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),n.tag=1,fe(t)?(e=!0,Ht(n)):e=!1,aa(n,a),Sl(n,t,i),Ur(n,t,i,a),Zr(null,n,t,!0,e,a);case 19:return zl(e,n,a);case 23:return Vr(e,n,a);case 24:return Vr(e,n,a)}throw Error(k(156,n.tag))};function Fc(e,n,a,t){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,n,a,t){return new Fc(e,n,a,t)}function _r(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bc(e){if(typeof e=="function")return _r(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ct)return 11;if(e===ht)return 14}return 2}function ln(e,n){var a=e.alternate;return a===null?(a=Ie(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null),a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function Vt(e,n,a,t,i,r){var o=2;if(t=e,typeof e=="function")_r(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ze:return ta(a.children,i,r,n);case Do:o=8,i|=16;break;case Mi:o=8,i|=1;break;case fa:return e=Ie(12,a,n,i|8),e.elementType=fa,e.type=fa,e.lanes=r,e;case ma:return e=Ie(13,a,n,i),e.type=ma,e.elementType=ma,e.lanes=r,e;case gt:return e=Ie(19,a,n,i),e.elementType=gt,e.lanes=r,e;case Oi:return qr(a,i,r,n);case Ni:return e=Ie(24,a,n,i),e.elementType=Ni,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ei:o=10;break e;case Ci:o=9;break e;case ct:o=11;break e;case ht:o=14;break e;case wi:o=16,t=null;break e;case Wi:o=22;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Ie(o,a,n,i),n.elementType=e,n.type=t,n.lanes=r,n}function ta(e,n,a,t){return e=Ie(7,e,t,n),e.lanes=a,e}function qr(e,n,a,t){return e=Ie(23,e,t,n),e.elementType=Oi,e.lanes=a,e}function Br(e,n,a){return e=Ie(6,e,null,n),e.lanes=a,e}function Gr(e,n,a){return n=Ie(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Yc(e,n,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=a,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=ir(0),this.expirationTimes=ir(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ir(0),this.mutableSourceEagerHydrationData=null}function xc(e,n,a){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:t==null?null:""+t,children:e,containerInfo:n,implementation:a}}function hi(e,n,a,t){var i=n.current,r=Te(),o=on(i);e:if(a){a=a._reactInternals;n:{if(vn(a)!==a||a.tag!==1)throw Error(k(170));var s=a;do{switch(s.tag){case 3:s=s.stateNode.context;break n;case 1:if(fe(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break n}}s=s.return}while(s!==null);throw Error(k(171))}if(a.tag===1){var l=a.type;if(fe(l)){a=nl(a,l,s);break e}}a=s}else a=nn;return n.context===null?n.context=a:n.pendingContext=a,n=tn(r,o),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),rn(i,n),sn(i,o,r),o}function ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function yo(e,n){mu(e,n),(e=e.alternate)&&mu(e,n)}function Qc(){return null}function To(e,n,a){var t=a!=null&&a.hydrationOptions!=null&&a.hydrationOptions.mutableSources||null;if(a=new Yc(e,n,a!=null&&a.hydrate===!0),n=Ie(3,null,null,n===2?7:n===1?3:0),a.current=n,n.stateNode=a,Kr(n),e[Zn]=a.current,Js(e.nodeType===8?e.parentNode:e),t)for(e=0;e<t.length;e++){n=t[e];var i=n._getVersion;i=i(n._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[n,i]:a.mutableSourceEagerHydrationData.push(n,i)}this._internalRoot=a}To.prototype.render=function(e){hi(e,this._internalRoot,null,null)};To.prototype.unmount=function(){var e=this._internalRoot,n=e.containerInfo;hi(null,e,null,function(){n[Zn]=null})};function it(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jc(e,n){if(n||(n=e?e.nodeType===9?e.documentElement:e.firstChild:null,n=!(!n||n.nodeType!==1||!n.hasAttribute("data-reactroot"))),!n)for(var a;a=e.lastChild;)e.removeChild(a);return new To(e,0,n?{hydrate:!0}:void 0)}function pi(e,n,a,t,i){var r=a._reactRootContainer;if(r){var o=r._internalRoot;if(typeof i=="function"){var s=i;i=function(){var c=ko(o);s.call(c)}}hi(n,o,e,i)}else{if(r=a._reactRootContainer=jc(a,t),o=r._internalRoot,typeof i=="function"){var l=i;i=function(){var c=ko(o);l.call(c)}}cu(function(){hi(n,o,e,i)})}return ko(o)}rs=function(e){if(e.tag===13){var n=Te();sn(e,4,n),yo(e,4)}};qi=function(e){if(e.tag===13){var n=Te();sn(e,67108864,n),yo(e,67108864)}};os=function(e){if(e.tag===13){var n=Te(),a=on(e);sn(e,a,n),yo(e,a)}};ss=function(e,n){return n()};Qi=function(e,n,a){switch(n){case"input":if(Di(e,a),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var t=a[n];if(t!==e&&t.form===e.form){var i=kt(t);if(!i)throw Error(k(90));Ho(t),Di(t,i)}}}break;case"textarea":Qo(e,a);break;case"select":n=a.value,n!=null&&Ln(e,!!a.multiple,n,!1)}};ji=du;$o=function(e,n,a,t,i){var r=U;U|=4;try{return Cn(98,e.bind(null,n,a,t,i))}finally{U=r,U===0&&(ua(),Ne())}};zi=function(){(U&49)==0&&(Bc(),gn())};es=function(e,n){var a=U;U|=2;try{return e(n)}finally{U=a,U===0&&(ua(),Ne())}};function Su(e,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!it(n))throw Error(k(200));return xc(e,n,null,a)}var zc={Events:[Aa,_n,kt,qo,Xo,gn,{current:!1}]},rt={findFiberByHostInstance:In,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},_c={bundleType:rt.bundleType,version:rt.version,rendererPackageName:rt.rendererPackageName,rendererConfig:rt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ts(e),e===null?null:e.stateNode},findFiberByHostInstance:rt.findFiberByHostInstance||Qc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(ot=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ot.isDisabled&&ot.supportsFiber))try{Mr=ot.inject(_c),En=ot}catch(e){}var ot,Jc=zc,Vc=Su,Zc=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):Error(k(268,Object.keys(e)));return e=ts(n),e=e===null?null:e.stateNode,e},qc=function(e,n){var a=U;if((a&48)!=0)return e(n);U|=1;try{if(e)return Cn(99,e.bind(null,n))}finally{U=a,Ne()}},Xc=function(e,n,a){if(!it(n))throw Error(k(200));return pi(null,e,n,!0,a)},$c=function(e,n,a){if(!it(n))throw Error(k(200));return pi(null,e,n,!1,a)},eg=function(e){if(!it(e))throw Error(k(40));return e._reactRootContainer?(cu(function(){pi(null,null,e,!1,function(){e._reactRootContainer=null,e[Zn]=null})}),!0):!1},ng=du,ag=function(e,n){return Su(e,n,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},tg=function(e,n,a,t){if(!it(a))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return pi(e,n,a,!1,t)},ig="17.0.2",rg={__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Jc,createPortal:Vc,findDOMNode:Zc,flushSync:qc,hydrate:Xc,render:$c,unmountComponentAtNode:eg,unstable_batchedUpdates:ng,unstable_createPortal:ag,unstable_renderSubtreeIntoContainer:tg,version:ig},og=Qe(function(e){function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}n(),e.exports=rg}),Ao=og.render;var De={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};function ku(e){let{id:n}=e,[a,t]=we(!1),i=Sn(null);return je(()=>{sg(n).then(r=>{i.current=r,t(!0)})},[n]),F(Gn,null,F("div",{id:e.id}),a&&i.current?e.children(i.current):null)}function sg(e){return dt(this,null,function*(){let n=yield lg();return new Promise(a=>{let t=new n.Player(e,{height:450,width:800,videoId:null,playerVars:{controls:0,disablekb:1},events:{onReady(){a(t)}}})})})}function lg(){return yu?Promise.resolve(window.YT):new Promise(e=>{var n;if(document.querySelector("script[src='https://www.youtube.com/iframe_api']")===null){let a=document.createElement("script");a.src="https://www.youtube.com/iframe_api";let t=document.getElementsByTagName("script")[0];(n=t.parentNode)==null||n.insertBefore(a,t)}vo.push(e)})}var yu=!1,vo=[];window.onYouTubeIframeAPIReady=()=>{yu=!0,vo.forEach(e=>e(window.YT)),vo.length=0};function Tu(e,n){let a=Sn(),t=Sn();t.current=e,je(()=>(a.current=setInterval(()=>{var i;return(i=t.current)==null?void 0:i.call(t)},n),()=>clearInterval(a.current)),[n])}function Au(e){var n;return(n=/v=(.{11})/.exec(e))==null?void 0:n[1]}var ug=0;function vu(e){let n=Sn(),[,a]=we(0);if(n.current!=null)return n.current;let t=e(()=>a(++ug));return n.current=t,t}function Iu(e){switch(e.type){case"nothing":return"nothing";case"video":return`video:${e.videoId}:${e.currentTime}`;default:return e.type,""}}function Mu(e){let{broadcast:n,player:a}=e;je(t,[Iu(n)]),vu(i=>(a.addEventListener("onStateChange",i),!0));function t(){if(n.type==="nothing")return;let{videoId:i,currentTime:r}=n,o=a.getPlayerState(),s=Au(a.getVideoUrl());switch(o){case De.BUFFERING:return;case De.CUED:case De.UNSTARTED:case De.ENDED:case De.PLAYING:case De.PAUSED:}if(s!==i){console.debug("video ID changed",s,i,r),r<5?(console.debug("target time is near 0; starting from beginning"),a.cueVideoById(i,0)):a.cueVideoById(i,r);return}if(!(o===De.PLAYING||o===De.ENDED)&&s){console.debug("video stopped; playing it"),a.playVideo();return}let l=a.getCurrentTime();dg(l,r)>=5&&(console.debug("time is off; seeking",l,r),a.seekTo(r))}return a.getPlayerState()!==De.PLAYING?F("div",{className:"black-screen"},a.getPlayerState()):null}function dg(e,n){return Math.abs(e-n)}function st(e){try{e()}catch(n){return n}}var Io=Symbol(),Mo=Symbol(),Eo=Symbol(),fi=Symbol();function Kn(e,n){function a(...t){if(t.length>=e.length)return e(...t);{let i=(...r)=>a(...t,...r);return i[Io]=e,i[Mo]=a,i[Eo]=t,i[fi]=a[fi],i}}return a[Io]=e,a[Mo]=a,a[Eo]=[],a[fi]=n||Eu(e),a}function Co(e){return e[Io]}function cg(e){return e[Mo]}function mi(e){return e[Eo]||[]}function Eu(e){return e[fi]||e.name}function hg(){let e=[];return{test:n,getAllTests:a};function n(t,i){e.push(...Object.entries(i).map(([r,o])=>gg(t,r,o)))}function a(){return e}}function G(e,n,...a){let t=n(...a,e);if(typeof t=="function")throw new Error("The matcher function `"+wo(t)+"` returned a function instead of a boolean. You might need to pass another argument to it.");if(!t)throw new Si([e,n,...a])}function gg(e,n,a){return{subject:e,scenario:n,fn:a}}var Si=class extends Error{constructor(n){super("Expectation failed");this.expectArgs=n}};function pg(e){return e[e.length-1]}function Cu(e){return e[0]}var fg=Kn(function(e,n){return e(n)},"which"),V=Kn(function(e,n){var a,t;if(mg(e))return e(n);if(Array.isArray(e)&&Array.isArray(n))return e.length===n.length&&e.every((i,r)=>V(e[r],n[r]));if(e instanceof Function&&n instanceof Function)return Co(e)&&Co(e)===Co(n)?V(mi(e),mi(n)):e===n;if(e instanceof Date&&n instanceof Date)return e.toISOString()===n.toISOString();if(e instanceof Set&&n instanceof Set)return e.size===n.size&&[...e.values()].every(i=>n.has(i));if(e instanceof Error&&n instanceof Error)return e.message===n.message&&e.__proto__.constructor===n.__proto__.constructor;if(wu(e)&&wu(n)){let i=Object.keys(e),r=Object.keys(n);return i.length===r.length&&i.every(o=>V(e[o],n[o]))&&((a=e.__proto__)==null?void 0:a.constructor)===((t=n.__proto__)==null?void 0:t.constructor)}return e===n},"equals"),x=Kn(function(e,n){return e===n},"is"),Wo=Kn(function(e,n,...a){return!e(n,...a)},"not"),Wu=Kn(function(e){return/^\s*$/.test(e)},"isBlank");function wu(e){return!!e&&typeof e=="object"}function mg(e){return e instanceof Function&&cg(e)===fg&&mi(e).length===1}function wo(e){return Eu(e)||"<function>"}function Ou(e){let n=[];return a(e);function a(l){var c;if(l===null)return"null";if(typeof l=="function")return t(l,i);if(typeof l=="string")return Po(l);if(typeof l=="bigint")return`${l}n`;if(Array.isArray(l))return t(l,r);if(l instanceof Date)return`Date(${l.toISOString().replace("T"," ").replace("Z"," UTC")})`;if(l instanceof RegExp)return String(l);if(l instanceof Error)return`${Pu(l)}(${Po(l.message)})`;if(l instanceof Set)return t(l,s);if(typeof l=="object"){let y=(c=l==null?void 0:l.__proto__)==null?void 0:c.constructor;return y===Object||!y?t(l,o):`${Pu(l)} ${t(l,o)}`}return String(l)}function t(l,c){if(n.indexOf(l)>-1)return"<circular reference>";n.push(l);let y=c(l);return n.pop(),y}function i(l){let c=mi(l).map(a),y=wo(l);return c.length?lt(y+"(",c,",",")"):y}function r(l){return lt("[",l.map(a),",","]")}function o(l){let c=Object.entries(l).map(([y,W])=>`${Sg(y)}: ${a(W)}`);return lt("{",c,",","}")}function s(l){let c=[...l.values()].map(a);return lt("Set {",c,",","}")}}function Sg(e){return/^[a-zA-Z0-9_$]+$/.test(e)?e:Po(e)}function Pu(e){return wo(e.__proto__.constructor)}function Po(e){return'"'+String(e).replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/"/g,'\\"').replace(/[\x00-\x1f\x7f]/g,kg)+'"'}function kg(e){let n=e.charCodeAt(0).toString(16);return"\\x"+(n.length<2?"0"+n:n)}function ki(e,n){return n.split(`
`).map(a=>a&&Tg(yg(e," "))(a)).join(`
`)}function yg(e,n){return Array(e+1).join(n)}var Tg=e=>n=>e+n,Ag=Kn(function(n,a){return a.slice(0,n.length)===n?a.slice(n.length):a});function vg(e){return String(e).split(/\r?\n/)}function Ig(e){let n=vg(e);Wu(Cu(n))&&n.shift(),Wu(pg(n))&&n.pop();let a=/^[ \t]*/.exec(Cu(n))[0];return n.map(Ag(a)).join(`
`)}function lt(e,n,a,t){return n.length<2?e+n.join("")+t:e+`
`+ki(2,n.join(a+`
`))+`
`+t}function Ku(e){return dt(this,null,function*(){let n=[];for(let a of e){let t=yield Mg(a.fn),i=Nu.map(r=>({type:"debug",args:r}));Nu.length=0,n.push({test:a,error:t,instrumentLog:i})}return{results:n}})}function Mg(e){let n;try{let a=e();if(a instanceof Promise)return new Promise(t=>{a.then(()=>t()).catch(t)})}catch(a){n=a}return Promise.resolve(n)}var Nu=[],e1=Kn(function(n,a){return a instanceof Si&&V(n,a.expectArgs)}),yi=`

`;function Uu({results:e}){let n=!1,a=!1,t=[];for(let i of e){let r=!1;i.error&&(r=n=!0),i.instrumentLog.length&&(r=a=!0),r&&t.push(i)}return n?Eg(t):a?wg(e.length,t):Cg(e.length)}function Eg(e){return e.map(Bu).join(yi)+yi+"Tests failed."}function Cg(e){switch(e){case 0:return"No tests to run.";case 1:return"One test ran, and found no issues.";default:return`${e} tests ran, and found no issues.`}}function wg(e,n){return n.map(Bu).join(yi)+yi+Wg(e)+`, but debugging instrumentation is present.
Remove it before shipping.`}function Wg(e){switch(e){case 1:return"The test passed";case 2:return"Both tests passed";default:return`All ${e} tests passed`}}function Bu({test:e,error:n,instrumentLog:a}){let i=[e.subject+" "+e.scenario];return a.length&&i.push(ki(2,Og(a))),n&&i.push(ki(2,Pg(n))),i.join(`
`)}function Pg(e){return e instanceof Si?Ng(e):Kg(e)}function Og(e){return e.map(({args:n})=>Gu("debug",n)).join("")}function Ng(e){return Gu("expect",e.expectArgs)}function Kg(e){return Ou(e)+" thrown"+ki(2,Ug(e.stack))}function Gu(e,n){return lt(e+"(",n.map(Ou),",",")")}function Ug(e){if(!e)return"";let n=Ig(e).split(`
`);return`
`+n.slice(0,Bg(n)).map(a=>a.replace(/(file:\/\/|http:\/\/[^/]*)/,"").replace(/^([^@]*)@(.*)$/,"at $1 ($2)")).join(`
`)}function Bg(e){let n=e.findIndex(a=>a.includes("errorFrom"));return n===-1?e.length:n}var n1=Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]}),Gg=hg(),{getAllTests:Du}=Gg;function Re(...e){}function hn(e,n){if(e.length===0)throw new Error("can't pick element from an empty array");if(n>=1||n<0)throw new Error("fraction out of bounds: "+n);return e[Math.floor(n*e.length)]}Re("pick",{"throws if the array is empty"(){G(st(()=>hn([],0)),V,new Error("can't pick element from an empty array"))},"throws if the fraction is 1"(){G(st(()=>hn([""],1)),V,new Error("fraction out of bounds: 1"))},"throws if the fraction is > 1"(){G(st(()=>hn([""],1.25)),V,new Error("fraction out of bounds: 1.25"))},"throws if the fraction is > 0"(){G(st(()=>hn([""],-.25)),V,new Error("fraction out of bounds: -0.25"))},"picks the first element of the array given 0"(){G(hn([1,2],0),x,1)},"picks the last element of the array given 1 - epsilon"(){G(hn([1,2],.99),x,2)}});function ca(e,n){let a={};return t=>(t in a||(Object.keys(a).length===e&&(a={}),a[t]=n(t)),a[t])}Re("cache",{"caches a value"(){let e=0,n=ca(1,()=>(e++,123));n("foo"),n("foo"),G(e,x,1)},"computes and caches values by key"(){let e=ca(2,n=>n+"x");G(e("foo"),x,"foox"),G(e("bar"),x,"barx")},"caches multiple values"(){let e=0,n=ca(2,a=>(e++,a+"x"));n("foo"),n("foo"),n("bar"),n("bar"),G(e,x,2),G(n("foo"),x,"foox"),G(n("bar"),x,"barx")},"a max size of 0 means no limit"(){let e=0,n=ca(0,()=>(e++,123));n("a"),n("b"),n("c"),G(e,x,3)}});function Ru(e){let n=1779033703,a=3144134277,t=1013904242,i=2773480762;for(let r=0,o;r<e.length;r++)o=e.charCodeAt(r),n=a^Math.imul(n^o,597399067),a=t^Math.imul(a^o,2869860233),t=i^Math.imul(t^o,951274213),i=n^Math.imul(i^o,2716044179);return n=Math.imul(t^n>>>18,597399067),a=Math.imul(i^a>>>22,2869860233),t=Math.imul(n^t>>>17,951274213),i=Math.imul(a^i>>>19,2716044179),(n^a^t^i)>>>0}function Lu(e){return function(){var n=e+=1831565813;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Ti(e){let n=ca(1,t=>{let i=Lu(Ru(t)),r=0,o=[];for(;r<24*3600;){let s=hn(e,i());r+=s.videos.map(l=>l.durationSeconds).reduce(Dg,0),o.push(...s.videos)}return o});return{getBroadcast:a};function a(t){let i=Math.floor(t/1e3),r=(i-8*3600)%(24*3600),o=i-r,s=n(String(o)),l=0,c;for(c of s)if(l+=c.durationSeconds,l>=r)return{type:"video",videoId:c.videoId,currentTime:c.durationSeconds-(l-r)};return{type:"video",currentTime:0,videoId:""}}}function Dg(e,n){return e+n}function ke(e){return e.split(/\n+/).map(Lg).filter(Wo(Rg)).filter(Wo(Hg)).map(ut(/ +/,3)).flatMap(([n,a,t])=>a==="SHORTS"?[]:[{videoId:n,durationSeconds:Ce(a),title:t}])}Re("parseVideos",{"empty string"(){G(ke(""),V,[])},spaces(){G(ke("  "),V,[])},newlines(){G(ke(`


`),V,[])},"newlines and spaces"(){G(ke(` 
 
 
`),V,[])},comments(){G(ke(`#foo
# bar`),V,[])},"strips spaces before comments"(){G(ke(`  #foo
  # bar`),V,[])},"parses actual data"(){G(ke(`
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
      Ga8tNxnHjt4 3:01 Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971
    `),V,[{videoId:"leb645Xu6uo",durationSeconds:654,title:"Captain Murderer - Emlyn Williams"},{videoId:"Ga8tNxnHjt4",durationSeconds:181,title:"Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971"}])},"removes shorts"(){G(ke(`
      undefined SHORTS blah blah
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
    `),V,[{videoId:"leb645Xu6uo",durationSeconds:654,title:"Captain Murderer - Emlyn Williams"}])}});function Rg(e){return e.startsWith("#")}function Ce(e){let n=[1,60,3600,86400],a=e.split(":").map(t=>parseInt(t,10)).reverse();return bg(a,n).map(([t,i])=>t*i).reduce(Fg,0)}Re("parseDuration",{"0:00"(){G(Ce("0:00"),x,0)},"00:00"(){G(Ce("00:00"),x,0)},"1 second"(){G(Ce("0:01"),x,1)},"10 seconds"(){G(Ce("0:10"),x,10)},"1 minute"(){G(Ce("1:00"),x,60)},"1 minute 10 seconds"(){G(Ce("1:10"),x,70)},"10 minutes 10 seconds"(){G(Ce("10:10"),x,610)},"1 hour"(){G(Ce("1:00:00"),x,3600)},"1 hour 1 second"(){G(Ce("1:00:01"),x,3601)},"10 hours 1 second"(){G(Ce("10:00:01"),x,36001)},"1 day 1 second"(){G(Ce("1:0:00:01"),x,86401)}});function Lg(e){return e.trim()}function Hg(e){return e.length===0}var ut=(e,n=Infinity)=>a=>{if(typeof e=="string"&&e.length===0)throw"split(): empty delimiter not supported";let t=0,i=0,r=[],o=a;for(;r.length<n-1&&o.length>0;){let s=o.match(e);if(s==null)break;r.push(o.slice(0,s.index)),o=o.slice(s.index+s[0].length)}return r.push(o),r};Re("split",{"empty string"(){G(ut(" ")(""),V,[""])},"no limit"(){G(ut(" ")("a b c"),V,["a","b","c"])},limit(){G(ut(" ",2)("a b c"),V,["a","b c"])},regex(){G(ut(/ +/)("a b   c"),V,["a","b","c"])}});function bg(e,n){let a=[];for(let t=0;t<e.length&&t<n.length;t++)a.push([e[t],n[t]]);return a}function Fg(e,n){return e+n}var k1=ke(`
    vKXu0CzRcrI 0:16 Here's Tree
    ieWm9T_GgSA 0:08 I'm Lost
`),Hu=ke(`

# LOTR extras

xJNKs4InzUc 1:24:54 Lord of the Rings Fellowship of the Ring Extras (Part 4)
8sZMTUIegE0 1:37:27 Lord of the Rings Fellowship of the Ring Extras (Part 3)
V9HrGfkI2mw 1:42:26 Lord of the Rings Fellowship of the Ring Extras (Part 2)
ZobbJ-HH59c 52:22 Lord of the Rings Fellowship of the Ring Extras (Part 1)

# Wikitongues

5Gc--eO0ok8 6:22 The Manchu language, casually spoken | Shihuan, Ronglu, and Shiyu speaking Manchu | Wikitongues
OjT3DSOZGCg 6:54 The Korean language in Uzbekistan | Olga speaking Koryo-mar and Russian | Wikitongues
QAK3clpBLNg 11:15 Yiddish songs with Russian explanations | Olga speaking Russian and Yiddish | Wikitongues
faidns4sK3Q 26:51 Announcing the 2022 grant recipients
yJGfF8iDMzo 2:36 Yorkshire English, casually spoken | James speaking West Riding Yorkshire dialect | Wikitongues
HuhNYr_p9g8 3:14 The Louisiana Creole language, casually spoken | Taalib speaking Kouri-Vini | Wikitongues
rUE1bzIx3u8 3:16 The Manx language, casually spoken | Owen speaking Manx | Wikitongues
M82TbP5Gan4 1:51 The Mazanderani language, casually spoken | Negar speaking Mazanderani | Wikitongues
FqAnl_8tMmI 2:06 The Hakka language, casually spoken | Dungsan speaking Hakka Chinese | Wikitongues
NNep7NOeaVI 2:27 The Mahasuvi language's Rohruri dialect, casually spoken | Wikitongues
r8R0FbhpGuE 1:57 The Hokkien language, casually spoken | Selly speaking Median Hokkien | Wikitongues
9Fa1TOfPuJ0 1:41 The Kaitag language, casually spoken | Magomed speaking Kaitag | Wikitongues
4S5ZOg05dVY 1:07 The Turkic Karachay-Balkar language, casually spoken | Raya speaking Karachay-Balkar | Wikitongues
QnlFfV60Qeo 29:05 The Nahuat language, casually spoken | Nantzin speaking Nawat | Wikitongues
msL692DxAS4 1:53 Yiddish and Scottish English, casually spoken | Harold speaking Yiddish | Wikitongues
MiyopZEfuJI 2:34 The Surzhyk language, casually spoken | Andrij speaking Surzhyk | Wikitongues
fiOglXiVbjo 3:20 The East Pomeranian language, casually spoken | Lilia Jonat speaking Pomeranian | Wikitongues
_7ZdE-msDOQ 5:34 The Low Saxon language, casually spoken | Albert speaking Rouveen Low Saxon | Wikitongues
eHN_bCg-JuQ 4:40 The Shona language, casually spoken | Rue speaking Karanga Shona | Wikitongues
u3c9Ke5yDNk 2:19 The Kayan language, casually spoken | Wahyu speaking Kayan Mahakam | Wikitongues
J2aryUaVSBQ 5:28 Acadian French, casually spoken | Nicholas speaking Acadian French | Wikitongues
qpfxFvpLAJ8 28:53 The Portuguese language, casually spoken | Ygor speaking Brazilian Portuguese | Wikitongues
ArS9-GVw8nc 4:26 The Juhuri language, casually spoken | Vera speaking Judeo-Tat and Russian | Wikitongues
9EpGjIsie44 6:45 The Javanese language, casually spoken | Davi and Jonathan speaking Surabaya Javanese | Wikitongues
_oCwNGxY5Co 2:18 The Sirmauri language, casually spoken | Kirnesh speaking Giripari dialect | Wikitongues
ZgaPLvMBeFo 1:43 Kupang Malay, casually spoken | Engelbirth speaking Kupang and Bahasa Indonesia | Wikitongues
N4RMhrlk60E 4:35 The Basque language, casually spoken | Andrew speaking Biscayan | Wikitongues
pAUaSmVQ1Sg 3:28 The Twents language, casually spoken | Martin speaking Twents | Wikitongues
FvuH1eaV8Xw 1:33 Yoruba and Nigerian Pidgin, casually spoken by Ayooluwa | Wikitongues
M0KK_ogkLDw 1:02 The Turoyo language, casually spoken | Adam speaking Aramaic | Wikitongues
Jfqg5yEV2to 2:17 The Qʼeqchiʼ language, casually spoken | Amalaia speaking Kekchi Mayan | Wikitongues
e-rY2zkCNtU 2:07 The Teochew language, casually spoken | Widya speaking Pontianak Teochew | Wikitongues
lgVhTfdkWAw 2:29 Kenya's Yaaku language, casually spoken | Leteyion speaking Yaaku | Wikitongues
mN7592r79vM 0:57 The Georgian language, casually spoken | Mariam speaking Georgian | Wikitongues
zOb8s6GAj5E 2:16 The Wu Chinese language, casually spoken | Chengxi speaking Hangzhou Chinese | Wikitongues
YyYrWgfaRwk 0:41 The Yoruba language, casually spoken | Bisola speaking Yoruba | Wikitongues
5UQPNAEDa4Y 1:10 Zambia's Lungu language, casually spoken | Daniel speaking (and singing!) Mambwe-Lungu | Wikitongues
35f7h4GsURo 35:25 The Ladino language, casually spoken | Isaac speaking Ladino | Wikitongues
TCLzMvpaB8M 1:46 The Maltese language, casually spoken | Elena speaking Maltese | Wikitongues
kKg2gaNzBK4 27:20 Italy's Piedmontese language, casually spoken | Giorgio speaking Piedmontese | Wikitongues
ilGopSRCea0 1:14 The Tigrinya language, casually spoken | Michael and Sennite speaking Tigrinya | Wikitongues
E3qV-_Ba4PU 6:17 The Ladino language, casually spoken | Sara speaking Ladino | Wikitongues
ZvdvKBvPH9M 4:25 The Lisaan ud Da'wat language, casually spoken | Ali speaking Lisaan ud Da'wat | Wikitongues
wIlOPJLhks4 2:43 The Swedish language, casually spoken | Johanna speaking Swedish | Wikitongues
TlMUj5JDMWE 2:42 Listen to the Fante language of Ghana | Collins speaking Fanti | Wikitongues
4nJ1AjNeYys 5:02 The Bangla language spoken | Zarrin speaking Bengali | Wikitongues
jZgofxN6rmk 1:20 Listen to the Khmer language of Cambodia | Chantara speaking Khmer | Wikitongues
fbOOrqY7b_o 1:42 Pasquale speaking Materano and Italian | Romance languages in Italy | Wikitongues
WlqTafVa5pU 3:47 Sanhaja de Srair, a Berber language from Ketama, Morocco | Mohammed speaking Shelha | Wikitongues
8GsglYcXhyg 1:33 Listen to the Veps language of Karelia | Eniisi speaking Vepsian | Wikitongues
5F5m6W95U_M 0:50 The Judeo-Arabic language of Egyptian Jews | Ben speaking Judeo-Egyptian Arabic | Wikitongues
gTt6LkoZ1z4 2:44 Listen to Cabo Verde Creole | Patrick speaking Cape Verdean Creole | Wikitongues
pjtSNq2yXVE 1:55 Listen to the Luo language of Kenya and Tanzania | Dholuo language | Wikitongues
mORCaQbggIo 9:41 Listen to the Kurdish language in Iraq | Xatun speaking Sorani | Wikitongues
Zk376vSlUyA 2:53 Listen to the language of Cochin Jews | Thapan speaking Judeo-Malayalam | Wikitongues
nMEKd_KSf30 2:42 Listen to Sinhala, a language of Sri Lanka | Shehan speaking Sinhalese | Wikitongues
1xGw9kQjHWI 2:04 60,000 people speak this language from Sulawesi, Indonesia | Nita speaking Mamuju | Wikitongues
e9y_WshNAyE 5:06 Listen to Gallo, a Romance language of Brittany, France | Anton speaking Gallo | Wikitongues
rSTBr8QbCtg 4:17 Beautiful click consonants in Namibia's Khoekhoe language | Emeloelaj speaking Nama | Wikitongues
vfXBjv-uMZM 3:18 Speaking Irish Gaelic in New York City | Frances speaking the Irish language | Wikitongues
oY8ihozIYng 1:00 A prayer in the Aramaic language | Jeries speaking Syriac | Wikitongues
GohjqZQHDlM 2:44 The Sasak language of Indonesia | Raden speaking Sasak and Indonesian | Wikitongues
vFbZR5shzCk 1:23 The Turkana language of Kenya and Ethiopia | John speaking Turkana | Wikitongues
6UctiHFsUrE 1:05:21 Radio in Language Diversity | Conversations from Jamaica and Zambia | Wikitongues
-lVudWbCaik 2:18 Vietnamese language conversation | Loan and Lian speaking Hue Vietnamese | Wikitongues
I-xiEyYtAwo 5:19 Norman, a Romance language of Britain and France | Jean speaking Cauchois | Wikitongues
lRujenUdJng 10:34 The Arabic language in Kurdistan, Iraq | Rashad speaking Iraqi Arabic | Wikitongues
Ddydi1lcvGU 10:35 The Kurdish language in Iraq | Dara speaking Sorani | Wikitongues
Bzlwr2_8ljg 3:37 The Lombard language in Brescia, Italy | Marco speaking Bresciano | Wikitongues
yBSatcQrbVw 0:57 Sign language in Brazil | Abel speaking Brazilian Sign Language, also known as Libras | Wikitongues
iDPp2yORw94 1:09:11 Music in Language Diversity | Conversation and music with Call Me Córdoba | Wikitongues
JQR2KOO7-No 5:32 Poetry in Zambia’s Ila language | Mojack speaking Ila | Wikitongues
1nCw24V3nV8 1:26 Polyglot learner of Sakha, a Turkic language | Albert speaking Sakha (Yakut) | Wikitongues
HaYhISDoVyM 26:16 Wikitongues Updates, September 2020
5yx8o4JOQRA 2:26 The Huli language of Papua New Guinea | Anneth speaking Huli | Wikitongues
7q4G38S-Wm4 4:34 The West-Flemish language of Belgium | Bontje speaking West-Vlams | Wikitongues
B56nxfnSV4U 1:30 Guangxi Cantonese language conversation | Ying and Lian speaking Cantonese | Wikitongues
MMfozbb4w74 2:18 The Lombard language in Brescia, Italy | Nicole speaking Bresciano | Romance languages | Wikitongues
hs6qyMcOwjY 7:24 Bahasa Indonesia, an Austronesian language | Pualam Abadi speaking Indonesian | Wikitongues
mDycRy0tZXs 2:12 Reviving the Injinoo Ikya language | Aboriginal Australians & Torres Strait Islanders | Wikitongues
olM7YMyxd5I 3:05 Rusyn, a Slavic language | Ivan speaking Pannonian Rusyn | Wikitongues
QMNBUmWBZ-o 10:24 Kurux, an Indigenous language of India | Dr. Abhay Xaxa speaking Kurux | Wikitongues
qlJ7A9kbH40 2:18 Austronesian languages of Kalimantan, Indonesia | Victor speaking the Bahau language | Wikitongues
A9BO3Sv1MEE 1:52 Native Esperanto speaker | Stela speaking the Esperanto language | Wikitongues
8sP3R7aCAno 4:11 Zazaki, an Iranian language from Turkey | Cemre speaking Southern Zazaki | Wikitongues
etUt37dgA4o 2:07 John speaking Maasai | East African language | Wikitongues
2UmHjJvPGec 2:49:21 Wikitongues Virtual Birthday Party
8vZwNYjN1CE 3:29 Arimardan speaking Bhojpuri | Languages of India | Indo-Aryan languages | Wikitongues
yyFsmiNXqXg 3:01 Britta speaking Chichewa (Nyanja) | Bantu languages | Folk songs | Wikitongues
98uqtsvCWwU 6:44 Ramzy speaking Minangkabau | Minangkabau language | Wikitongues
V1hLSrjKNas 2:35 Annie speaking Bassa | West African language | Wikitongues
3ghwdhXaLoo 4:02 Ingrid speaking Nyungar | Aboriginal Australians and Torres Strait Islanders | Wikitongues
NI9lRDW_x2E 9:32 Adrian speaking Caribbean Spanish | Romance languages | Wikitongues
DoQdMWN5C8A 2:03 Zita speaking Twi and Dagaare | Ghanaian languages | Wikitongues
3428HkaqA94 2:50 Edward speaking Hong Kong Cantonese | Sino-Tibetan languages | Wikitongues
RObSwrdDnN8 3:08 Mahuton speaking Fon, Gun, and Eastern Xwla | Niger-Congo languages | Wikitongues
1fuNjOEhNvI 2:06 Éanna speaking Irish and English | Celtic languages | Wikitongues
4f2IQ219Xg4 2:09 Muadz speaking the Central Asmat language | Papuans | Wikitongues
pDDrFE3CaTc 2:05 Alfred speaking Gunggay | Aboriginal Australians and Torres Strait Islanders | Wikitongues
dgT6xExNcns 3:20 Blossom Speaking Igbo | Niger-Congo languages | Wikitongues
SMgN7tClSM8 1:45 Dhrubhagat speaking Hiligaynon | Austronesian languages | Wikitongues
zhQNFQCcMxI 1:29 Sheree speaking Kalkutungu and English | Aboriginal Australians and Torres Strait Islanders
tUWWNDUV2Tg 7:48 Ahmad speaking Aleppo Arabic and English | Semitic languages | Wikitongues
k19I3vyu0WU 1:22 Juan Carlos speaking Santiagueño Quichua and Spanish | Quechuan languages | Wikitongues
Mfd16z-ucWY 0:48 Census 2020 Language Project, in Egyptian Arabic | League of Women Voters
ld_92xGvyng 2:12 Mireille speaking French | Census 2020 Language Project | League of Women Voters
XhRzY5ApkBc 2:00 Tarya and Carys speaking Spanish | Census 2020 Language Project | League of Women Voters
1UutaDfzaqc 1:05:06 How do I save my language? Introducing the Language Sustainability Toolkit
x7cFUScyj4g 1:10 Census 2020 Language Project in Korean | League of Women Voters
dm1e9mJ2BJQ 1:36 What's the Census 2020 Language Project? | League of Women Voters
pEU_EC7OcdE 1:04:38 Tim Brooks from Endangered Alphabets | FIRST-EVER Wikitongues live-stream!
xAw_7w-hQwU 23:32 Hangi speaking Kihunde | Central African languages | Wikitongues
qiti3HaADlo 43:16 Speaking of Us, Ep. 1: Anna Luisa Daigneault | Languages Podcast by Wikitongues
g92Og21FC6Y 2:03 Thomas speaking Walloon and English | Romance languages | Wikitongues
m8IQRKl7UT0 3:16 Deola speaking Sijunjung Simaung | Minangkabau language | Wikitongues and Wikimedia Indonesia
csUZolJETdI 0:57 Nasser speaking Arabic and Siwi | Egyptian languages | Wikitongues
IM-g4Kh0G8w 3:31 Anne speaking Yumplatok | Aboriginal Australians and Torres Strait Islanders | Wikitongues
4NwcTJ8_ZWY 3:22 Azad speaking Rohingya | South Asian language | Wikitongues
klhzWSo4MTQ 7:03 Gianluca, Bruno, and Franca speaking Abruzzese | Romance languages | Wikitongues
eVUBHDW5ccY 2:58 Tricia speaking Lintau Minangkabau | Minangkabau language | Wikitongues
mygnGGT679A 3:16 Francesc speaking Valencian Catalan | Romance languages | Wikitongues
ym-Wmc3aJAo 5:15 Nama speaking Ewondo | Cameroon language | Wikitongues
xPixyaLG86Y 2:18 Alexander speaking Banat Swabian (Bavarian) | Germanic languages | Wikitongues
j7N_qP2mt3o 1:42 Bonaventure speaking Murrinhpatha | Aboriginal Australians and Torres Strait Islanders | Wikitongues
VyuK6ggrZCc 4:07 Meninet speaking Tigrinya | Semitic language | Wikitongues
2b_aZQDIr1k 4:13 Adrian speaking Galician | Romance languages | Wikitongues
OLf2L_0XvRM 1:40 Dominic speaking Mauritian Creole and French | French Creole language | Wikitongues
SfmhsM67L_U 1:43 Shaun speaking Yugambeh | Aboriginal Australians and Torres Strait Islanders | Wikitongues
pfi1mvVB0iU 4:22 Kamran speaking Wakhi | Central Asian languages | Wikitongues
0CoY1psR5bs 5:40 Menlu speaking Koto Marapak | Minangkabau language | Wikimedia Indonesia and Wikitongues
rsmIHIUXAa8 4:11 João Pedro speaking Rioplatense Spanish, Portuguese, and English | Romance Languages | Wikitongues
jlPhkYBIUZs 2:16 Karina speaking Yankunytjatjara | Aboriginal Australians and Torres Strait Islanders | Wikitongues
JeRb7Ud1kSU 2:06 Andrey speaking Russian | Slavic languages | русский язык | Wikitongues
Q5r3K3O_9no 2:14 Nzonou speaking Kabiyè | Niger-Congo languages of Africa | Wikitongues
GPjY_W_Lq0M 4:33 Kristen and Michel speaking Haitian Creole | Haitian Flag Day | Wikitongues Conversation
sJ06GMMcGVM 2:51 Supiak speaking Sijunjung-Simaung | Minangkabau language | Wikimedia Indonesia and Wikitongues
iFUPTM1rX28 4:45 Jamal speaking Tachelhit | Berber language (Berbers) | Wikitongues
uOYnyIX_8Gw 3:01 Ludovic speaking Tourangeau | Romance Languages | Wikitongues
GPaZb-MzzpQ 8:36 Gabrièu speaking Nissart Occitan | Romance languages | Wikitongues
S7nctC7ckbU 2:07 Srinivas speaking Bijapur Kannada | Dravidian languages | WIKITONGUES
Cy3FzYLmUQc 8:48 Leo speaking Pulaar and West African French | Fula language | Wikitongues
xNlyppTb0Xw 13:05 Steve's language learning story | Lingq | WIKITONGUES
d5gC7zVKnkY 3:17 Aydyn speaking Tuvan | Siberian language | WIKITONGUES
4PSRh2q4AYo 3:45 WIKITONGUES: Atul speaking Nepali
CNFK7h0G5a4 6:47 WIKITONGUES: Suzana speaking Croatian Sign Language (HZJ)
hgJeqdSw4aI 2:19 Pascual speaking Sakapulteko and Spanish | Mayan peoples | WIKITONGUES
F9OpKOhJs-c 1:32 WIKITONGUES: Vaine Kae speaking Cook Islands Māori
k7Earnq8sHw 4:54 WIKITONGUES: Tajaun speaking Jamaican Creole English | Jamaican "Patois"
NmmrJbZvWmc 0:40 WIKITONGUES: Nafiseh speaking Turkmen and Turkish
u0cJXVvo5I4 2:09 WIKITONGUES: Lior Markus speaking Occidental Campidanese Sardinian and Hebrew
Opv58piY_bs 2:43 WIKITONGUES: Gerard and Yakuma speaking Sekpele
yIO-F3l4b7w 4:26 WIKITONGUES: Eveliina speaking Finnish
C9M-Sep16Dg 1:13 Wikitongues: How are you feeling?
uRC9W6v4NuU 2:13 WIKITONGUES: Lalita Roshni speaking Kurux and English
Y76c6UqN0dc 4:25 WIKITONGUES: Adolphus speaking Liberian English
0MtwwhL5G0g 6:05 WIKITONGUES: Lilita and Ivars speaking Latvian Sign Language
361y-JDT_bs 1:11:55 WIKITONGUES: Abdul Mateen speaking Torwali
nFC974Eua-U 4:48 WIKITONGUES: Shahida speaking Rohingya
itdBLyLCiU0 4:49 WIKITONGUES: Jakob speaking Zipser German
EMITnQ-w-04 1:01 WIKITONGUES: Hirwa signing Rwandan Sign Language
hrxUsCrOQ-c 1:35 WIKITONGUES: Faraz speaking Majhi Punjabi
PWVzPFUgHEo 0:47 WIKITONGUES: Sanjana speaking Nepali
rEqO7tkF_04 4:20 WIKITONGUES: Rino speaking Balantak
VPnXITN30VU 6:41 WIKITONGUES: Ana speaking Croatian Sign Language
kDyUnJ0p8JE 1:04 WIKITONGUES: Riku speaking Assamese
RtvgMwWEjSo 0:59 WIKITONGUES: Safulo Kacaw speaking Amis
Gt0jbL8p8AM 2:20 WIKITONGUES: Mary speaking Soli
QMypNaOcn1E 3:47 WIKITONGUES: James speaking Zambian Sign Language
OWoKDqJQt1c 1:44 WIKITONGUES: Malek speaking Eastern Balochi
IA4PxlO9OOU 2:58 WIKITONGUES: Evan speaking Hñähñu
1LIEW4IaKWQ 0:33 WIKITONGUES: Gabriel speaking Hungarian
zNwcnycMMwY 6:39 WIKITONGUES: Claudio speaking Abruzzese
KW7axC1WJZI 1:15 WIKITONGUES: Lian speaking Tày
5Ae2e2mmMMU 4:52 WIKITONGUES: Paolo speaking Emilian
PeqeZ9MysUI 3:49 WIKITONGUES: Iñaki speaking Basque
hd5MB1W5Rg8 3:55 WIKITONGUES: Lene and Børre speaking Northern Sami
K7QRD82tlls 0:32 WIKITONGUES: Kenneth speaking Papiamento
NORD_cH_kMY 3:24 WIKITONGUES: Kitty speaking Car Nicobarese
aQNZL4zrDaY 12:13 WIKITONGUES: Edgar speaking Northern Sotho
bY_TcgYvcLk 1:26 WIKITONGUES: Monique speaking Dutch and Frisian
lebFgTHooNE 1:40 WIKITONGUES: Maly speaking Lao
YGaGz7t8Ov4 1:42 WIKITONGUES: Krishna speaking Hindi
dyg_z_ywVzA 0:40 WIKITONGUES: 王奕 speaking Wu
BOtJvy4ybc4 3:05 WIKITONGUES: Kini speaking English, Tok Pisin, and Kalo
jxNQZklmQCY 6:23 WIKITONGUES: Ross speaking Lacandon
cJ4yFQ_C3f0 5:47 WIKITONGUES: Paulu speaking Corsican
Ho2vOSl9v0E 2:49 WIKITONGUES: Zahida speaking Dinga Punjabi
_DSEp-UKmzA 3:51 WIKITONGUES: Samuel signing Rwandan Sign Langugae
icBfqfPlKjU 1:34 WIKITONGUES: Nicholas speaking Niuafo’ou
dtxuztEDsms 5:56 WIKITONGUES: Lingson and Grem speaking Nsenga
dsUH7my4fTs 3:15 WIKITONGUES: Peji speaking Sukuma
gBM-kh4k-PY 5:40 WIKITONGUES: Andrés speaking Yshyr
O7GpkfCPZ4k 1:37 WIKITONGUES: Vishwanatha speaking Tulu
o5m5OwJ65cM 2:35 WIKITONGUES: Luis speaking Tenek
76qruGReJeM 5:02 WIKITONGUES: Loran signing Maltese Sign Language
e_dh1q75LSo 7:44 WIKITONGUES: Vira speaking Ukrainian
KDoOg1XL-j4 0:46 WIKITONGUES: Célestin speaking Lega-Shabunda
hMQxZzrmKiI 1:28 WIKITONGUES: Azim speaking Kyrgyz
pfaUytO5zg8 2:06 WIKITONGUES: Neha speaking Garhwali
Ji5HuAPQquo 2:30 WIKITONGUES: Rizwan speaking Balti
wWns5Q6-ShY 6:59 WIKITONGUES: Varvara speaking Even
LUsMwdkXpYY 2:05 WIKITONGUES: Louis speaking Sapo
dZdCsqX_nEY 4:03 WIKITONGUES: Nela speaking Croatian
cQB3BFVAHF0 2:51 WIKITONGUES: Dorian speaking Krio
MChNEkV_wt8 1:24 WIKITONGUES: Sara speaking Portuguese
_z62HlBXJJ8 1:12 WIKITONGUES: Ibrahima speaking Pular
BCEO_U7713M 0:57 WIKITONGUES: Sukanya speaking Indian Sign Language
BTdYsYaoRn0 4:59 WIKITONGUES: Hyun speaking Jejueo
PGqlzdlO_rM 2:57 WIKITONGUES: Irina speaking Artsakh Armenian
tTBDXjKZB08 13:26 WIKITONGUES: Trey speaking Bermudian English
C380uSo4Ils 1:43 WIKITONGUES: Rose speaking Kikamba
z2GFNc-X6mA 0:46 WIKITONGUES: Kaisanan speaking Taokas
zeApE-aD3fI 0:56 WIKITONGUES: Yernur speaking Kazakh
NG-rV0oGZ9s 1:30 WIKITNOGUES: Ni Luh speaking Balinese
ak9Zqiddtt8 1:09 WIKITONGUES: PuingAke'Kuking speaking Bah-Biau Punan
nJU_XnQzzHk 5:03 WIKITONGUES: Nezahualcoyotl speaking Nuyoo Mixtec
ZjPiQYvtnLA 2:12 WIKITONGUES: Classen speaking Ju|’hoan
nnBQMqgEJB0 2:15 WIKITONGUES: Kavyanjali speaking Hindi
bzHIfJ6H9Vw 9:02 WIKITONGUES: Naren speaking Telugu
yLyMILKtFHo 1:30 WIKITONGUES: Esther speaking Grebo
LVCtvZ19tv8 3:28 WIKITONGUES: Kouta speaking Pampangan and Filipino
Gdr_yKrlf4I 6:46 WIKITONGUES: Yorick speaking Oiltjers Dutch
5cidz5Y3KFQ 1:17 WIKITONGUES: Cindy speaking Gan
CproO8ZhtF8 2:09 WIKITONGUES: Gereon speaking German
LTsoLZtf4Dw 19:25 WIKITONGUES: Kees, Albert, Anja, and Jan speaking West-Veluws
vkVHspUH9U4 13:10 WIKITONGUES: Donyashel speaking Khoibu
IX7cRsZD1Ks 2:59 WIKITONGUES: Jacopo speaking Lombard
quGhsKtq88A 1:16 WIKITONGUES: Muktesh speaking Kumaoni and Hindi
VTCLy0kejbg 2:08 WIKITONGUES: Marta speaking Polish
GyxYnfM_y5M 1:42 WIKITONGUES: Yenal speaking Circassian
wziUoXmcCVc 1:56 WIKITONGUES: Samuel speaking Gaa
Ty3IAWxANi4 4:17 WIKITONGUES: Mustafa, Gulnisa, and Elise speaking Uyghur
Ex0SVHRSEe4 3:02 WIKITONGUES: Tuulõ speaking Võro
ReWdgF-fdrE 8:39 WIKITONGUES: Toomas speaking Võro
ibq-hS-G1JQ 2:42 WIKITONGUES: Rachael speaking Esperanto
XFAXrpmuITQ 7:13 WIKITONGUES: Marika speaking Võro
zKbTMMFldZk 1:00 WIKITONGUES: Safal speaking Nepali
XVVrouF3bzE 29:57 WIKITONGUES: Jaan speaking Võro
0t189tY4hEM 2:09 WIKITONGUES: Annita speaking Italian and Piedmontese
yNLgivKN5z4 16:10 WIKITONGUES: Aare speaking Võro
XBhFAFqVT2w 1:54 WIKITONGUES: Tao speaking Thai
BT7Pgimrq4g 11:57 WIKITONGUES: Egle speaking Võro
7ZFaAtiiVIk 1:24 WIKITONGUES: Imouda speaking Shimwali
X7Yvsw2dnDE 18:50 WIKITONGUES: Sulev speaking Võro
4NTFvW2nUzw 2:33 WIKITONGUES: Jeremie speaking Nyindu
bT99iXQa7DM 1:55 WIKITONGUES: Mohamad speaking Kurmanji Kurdish
dgxGqecUCwU 10:46 WIKITONGUES: Naruko speaking Dunan and Japanese
dpfq9Ehf5JI 2:08 WIKITONGUES: Mereinur speaking Kazakh
mVo1WW5vfXM 1:24 WIKITONGUES: Kangkana speaking Assamese and English
kAUsuyOVd_Q 1:51 WIKITONGUES: Adela speaking Bicolano
r0FS2UF3qCo 10:57 WIKITONGUES: Håkan speaking Finland-Swedish Sign Language
x9NkreemeO0 2:38 WIKITONGUES: Matteo speaking Lombard
xfVWIUdCGgI 24:58 WIKITONGUES: Kasper and Janne speaking Danish Sign Language
AYwEA-FLS_s 4:53 WIKITONGUES: Rajen speaking Karbi and English
SuNKWIMUjQo 1:08 WIKITONGUES: Aditya speaking Marwari
cfO536EExPw 2:30 WIKITONGUES: June speaking Ilocano
3fOoyoDpBFw 1:51 WIKITONGUES: Afek speaking Tunisian Arabic
V3KNAMr3u4Q 1:26 WIKITONGUES: Mazhar speaking Sindhi
AqGXY9fohac 4:05 WIKITONGUES: Brian Mumba speaking Bemba
8iE0R8b3tq4 3:07 WIKITONGUES: Elfie speaking Bahasa Aru
w-PP0r8ohF8 2:53 WIKITONGUES: Rhyan speaking American Norwegian
oOr8uPY5PNQ 0:46 WIKITONGUES: Tarkhan speaking Jek
oRWL2htbGK0 1:45 WIKITONGUES: Rukku speaking Kundagannada
VCxeM27OAlQ 7:30 WIKITONGUES: Marcus speaking Tobian
AtBWbZmCceU 5:14 WIKITONGUES: Pamela speaking Herero
EC5Ae63LasY 4:25 WIKITONGUES: T.A., Iqbal, and Kalam speaking Acehnese
hfxJCEIChIk 3:05 WIKITONGUES: Roussow speaking Afrikaans
UlRd8RkVdfo 4:04 WIKITONGUES: Netha speaking Malayalam
IdYu9RBWv0o 1:36 WIKITONGUES: Hendrik speaking Benyadu
82RTpFpp3OA 4:12 WIKITONGUES: José Manuel speaking Chicahuaxtla Triqui
eA92yZCjXA8 7:04 WIKITONGUES: Armandina speaking Paipai
6NCIYV3Q4d4 6:47 WIKITONGUES: Iain William speaking Breton
tzUaooThBzI 0:54 WIKITONGUES: Sathi speaking Santhali
6htms5vFurs 0:48 WIKITONGUES: Victorinus speaking Beahe
PRVPB9OA0s4 1:52 WIKITONGUES: Mohammed speaking Dagbani
xhLQcnmX54g 1:50 WIKITONGUES: Yulius speaking Bekati
wpNIOUjOa8c 2:17 WIKITONGUES: Olaniyan speaking Yoruba
9S8lDVmQSCQ 5:14 WIKITONGUES: Theo speaking Gronings
0PKycEkSsF8 4:06 Happy 2019 from Wikitongues
-Mh9bFzUYzQ 0:59 WIKITONGUES: Zairul speaking Malay
A9l639zi6Ik 1:34 WIKITONGUES: Robertson speaking Dan
WKxxsUnObj8 23:37 WIKITONGUES: Nicolas speaking Sadri, Kharia, and Sambalpuri
gymwIdhFlWM 2:38 WIKITONGUES: Manuel speaking Yucatecan
pjWd-n1tVeQ 1:24 WIKITONGUES: Cristiano speaking Barwe and Portuguese
O5os_Cf8NzE 2:47 WIKITONGUES: Imtimeren speaking Mongsen and English
oVRij25QNlQ 3:04 WIKITONGUES: Anugrah speaking Li Niha
AEcRxyWrFBw 7:33 WIKITONGUES: Daniel speaking Extremaduran
g2L_YR5P5KE 4:14 WIKITONGUES: Chabota speaking Nyanja
K2iYeGTwcU8 0:34 WIKITONGUES: Casiano speaking Quechua
tkMujSf5Djo 1:58 WIKITONGUES: Aminah Abba speaking Wolof
808KeQLlP0I 3:29 WIKITONGUES: Jackson speaking Konobo
MODU1yhBb-8 0:15 WIKITONGUES: Alessandro speaking Ligurian
AYgWSuv00pc 2:34 WIKITONGUES: Twaha speaking Luganda
HWYnyZEOVeE 4:38 WIKITONGUES: Isso speaking Lemerig
4ZGmauJA23c 0:51 WIKITONGUES: Reda speaking Algerian Arabic
7vwcbBfETXA 1:29 WIKITONGUES: Sanda speaking Hakka
5as9jMrmjpU 2:04 WIKITONGUES: Ricardo speaking Sardinian
03KULxOT31E 1:54 WIKITONGUES: Naw speaking Burmese
IT7iuHWerbQ 2:08 WIKITONGUES: Carolin speaking Bavarian
ysQrLUOGhkE 3:53 WIKITONGUES: Jarvis signing Kenyan Sign Language
DHH91F52IYc 56:21 WIKITONGUES: Donna and Elisabeth speaking Tunica and English
SdfMpBDPVis 3:17 WIKITONGUES: Sunkist speaking S’gaw Karen
cAyhRppr5QM 2:16 WIKITONGUES: Zeferino speaking Totonac
qnlqAuPiigY 0:55 WIKITONGUES: Esther speaking Ibibo
_GDuaW95qUQ 1:38 WIKITONGUES: Alex speaking Afrikaaans
DJ0NRqv5r7g 3:49 WIKITONGUES: Haingo speaking Malagasy
b6eEK15bgAE 2:00 WIKITONGUES: Tarlan speaking Azeri
v1WsoWZFZZ4 3:12 WIKITONGUES: Piotr speaking Silesian and English
XSXBcko8wNQ 4:00 WIKITONGUES: Allan speaking Gwich'in
0KDTO6q3tdM 1:19 WIKITONGUES: Anna speaking Bildts
kQIy1RLuwNo 1:11 WIKITONGUES: Paison speaking Kiga and English
b_DtKXDXLFY 5:46 Luzmila speaking Otavalo Kichwa | Wikitongues
KSkO2sJlMxc 1:47 WIKITONGUES: Finny speaking Musi
JLKQVIvtfZ8 6:24 WIKITONGUES: Victor speaking Asturian
h8rq3IQI-z0 3:20 WIKITONGUES: Edgar speaking Lugwere
chsL-GSpTBc 1:54 WIKITONGUES: Anna speaking Tehali
TdrrTxT99PA 5:22 WIKITONGUES: Genesis speaking Mano
ou02UU2iLY4 0:20 WIKITONGUES: Risata speaking Batak Toba
8OBVOJxBU7E 4:57 WIKITONGUES: Joseph speaking Siyi Yue
wpqaGLWxZUY 1:05 WIKITONGUES: Albina and Donawati speaking Bedineh
lGPQI5bOfqU 0:39 WIKITONGUES: Phoebe speaking Gonja
8D0rOCam_hQ 4:36 WIKITONGUES: Michael speaking Fataleka
nbbdx1UmjXE 1:51 WIKITONGUES: Nimita speaking Bhojpuri
cxiGMkEZvKQ 1:44 WIKITONGUES: Nilo speaking Kukama and Spanish
Vp8g0znA-tU 2:07 WIKITONGUES: Aakriti speaking Kashmiri
CJkijDWHQeQ 1:25 WIKITONGUES: Ghiles speaking Kabyle
TF4fO7Yv8Z8 4:26 WIKITONGUES: Barbara speaking Navajo
QUSLdT-YkHY 0:40 WIKITONGUES: Michael speaking To’abaita
98mMMwkyPzU 1:21 WIKITONGUES: Daniel speaking Farsi
5_-yVH92IY0 6:49 WIKITONGUES: Bryan speaking French and English
AYLkkOp5gW8 2:04 WIKITONGUES: Kami speaking Lo-Toga
gs-Hs_ZarnE 3:47 WIKITONGUES: Klazina and Huib speaking Zeelandic
usLABtKtRho 1:24 WIKITONGUES: Pavlin speaking Albanian
vtbwPtyPmbQ 1:11 WIKITONGUES: Semere speaking Amharic
ivcyiIgDY_E 0:47 WIKITONGUES: Steffi speaking Bavarian
rF7X9yCZTl8 2:14 WIKITONGUES: Anass speaking Tarifit
B-UiHe5DIt4 1:14 WIKITONGUES: Siro speaking Nauruan
dhRoN1V1rQI 6:57 WIKITONGUES: Luz speaking Shipibo
hoyuxNukrbY 3:03 WIKITONGUES: Linekela Paul speaking Namibian Sign Language
4j9xBWlMUqA 5:04 WIKITONGUES: Xwatsá and Basilisa speaking Iraqw
1seeNWS-8Fc 3:56 WIKITONGUES: Chingis speaking Tatar
raX_B10ytWI 1:28 WIKITONGUES: Priscilla speaking Tok Pisin
1TEQACUZMp0 4:57 WIKITONGUES: Dimas speaking Osing
aZGyISJ3djo 1:36 WIKITONGUES: Sjoukje speaking West Frisian
BfHinOzTkK4 2:09 WIKITONGUES: Abderrahman speaking Tachelhit
vVys2adt-zA 0:42 WIKITONGUES: Dorothea speaking Swiss German
jzgaOtKpCd0 1:17 WIKITONGUES: Paulo speaking Tuvaluan
n43kwuSOj2E 4:32 WIKITONGUES: Anass speaking Moroccan Arabic
CSkxXFxg8z4 0:46 WIKITONGUES: Ankita speaking Bengali
ttp2NTXqkl8 5:55 WIKITONGUES: Steven speaking Sicilian
glqy1koOinI 1:07 WIKITONGUES: Hannah speaking Oshiwambo
QA_5uU6DE20 0:42 WIKITONGUES: José Benito speaking Leonese
bhp5qYy8uCo 1:13 WIKITONGUES: Alana speaking Ossetian
yMf1aVKqsSQ 5:19 WIKITONGUES: Dominique speaking Alsatian
elpkRzfMFCE 1:01 WIKITONGUES: Sofie speaking Dutch Sign Language
x5nIUaB98dQ 10:24 WIKITONGUES: Jerry speaking Kpelle
NMBVCEq8TLU 1:38 Michael speaking Kouri-Vini | Louisiana Creole language | Wikitongues
XdPkJUX5q6A 5:42 WIKITONGUES: Disa and Niken speaking Javanese
N7T85Q0ez1o 6:24 WIKITONGUES: Mandala speaking Bantenese
CIAqJsKZLBA 3:07 WIKITONGUES: Latonian and Yankee speaking Lenape and Nanticoke
QLLyXc24Vcc 1:23 WIKITONGUES: Achille speaking Mooré and Dioula
yOrLAkSNe5c 5:52 WIKITONGUES: Jacques and Yvette speaking Chiac
32tIfTcXopo 2:44 WIKITONGUES: Regianna speaking West Ambae
cHTNty8YeT0 2:15 WIKITONGUES: Román speaking Zapotec and Spanish
6OTT7m8MgAI 2:12 WIKITONGUES: Musu speaking Mandingo
-UCw1Q9ni2E 4:24 WIKITONGUES: Sonia speaking Booráá
CDeE2dZyb0M 0:43 WIKITONGUES: David speaking Syrian Arabic
xpDBaE9TSe8 0:33 WIKITONGUES: Chez speaking Tamang
vjK-2lc0KQU 2:26 WIKITONGUES: Khup speaking Zom
IyBNVrLQ2-A 2:53 WIKITONGUES: Yann speaking Breton
rzkKRTvwGG8 0:58 WIKITONGUES: Patricia speaking Natqnnga
uh9hePNiPfg 1:42 WIKITONGUES: Cristian speaking Aromanian
xF_CJUadatY 0:52 WIKITONGUES: Karen speaking Cantonese
mNyEuC2GxGk 1:44 WIKITONGUES: Owen speaking Manx
xe6ebodfmKU 0:36 WIKITONGUES: Jasmin speaking Newari
kAenLJSfNWM 5:56 WIKITONGUES: Maxime speaking Québecois French
8ieQ9HfbqwY 2:39 WIKITONGUES: Yusuf speaking Sundanese
Nop4WnhX-k4 3:30 WIKITONGUES: Xheladin speaking Gheg Albanian
pUfu40JELyM 0:31 WIKITONGUES: Alex speaking Karankawa and English
reNXOCf-9z0 1:59 WIKITONGUES: Serah speaking Mwotlap
uPa84Ro8SrU 1:29 WIKITONGUES: James speaking Nur
MnghW2JB9j4 4:58 WIKITONGUES: Zubah speaking Loma
4sgX-jvskfI 3:49 WIKITONGUES: Priya speaking Sri Lankan Tamil
tvNW5-lnx0g 4:35 WIKITONGUES: Stefano speaking Abruzzese
IVFfgzvSLXI 1:40 WIKITONGUES: Jan speaking Brabants
k-uKyuTveuA 1:04 WIKITONGUES: Carlos speaking K'iche'
WaTpyPIBGOc 0:23 WIKITONGUES: Paola speaking Italian and Sicilian
OJvsp6XNUzQ 2:05 WIKITONGUES: Senful speaking Malay
Kxdd3bUVnuI 0:48 WIKITONGUES: Betsy speaking Vurës
vUeMj9_XrJA 3:19 WIKITONGUES: Angel speaking Aromanian
J0Yx_sLr6Vo 0:39 WIKITONGUES: Margaret speaking Haitian Creole
c47B6Y5fbss 9:10 WIKITONGUES: Txeli speaking Basque
AYoVFf6ZRyA 1:07 WIKITONGUES: Jide speaking Yoruba
gs3rmilVQLM 7:00 WIKITONGUES: Ayu speaking Javanese
YdgWeFznE2M 8:21 WIKITONGUES: Alaric speaking Afrikaans
ZKcvZmtar9g 0:53 WIKITONGUES: Frances speaking Irish
WmoSv7Cl1-M 16:07 WIKITONGUES: Martha and Albert speaking Gottscheerish
JrcogiyJGCk 0:33 WIKITONGUES: Mónica speaking Spanish Sign Language
3FGc0zaIg2k 6:03 WIKITONGUES: Suzy speaking English
a7rbopMACEo 1:52 WIKITONGUES: António speaking Kimbundu
5imsaweRZWQ 2:46 WIKITONGUES: Daisy speaking North Ambae
wjn_ayKh1G0 2:49 WIKITONGUES: James speaking Namakura
TVMfOk6x8VI 3:29 WIKITONGUES: Garfeen speaking Mandingo
FiBkz0nnhtk 2:26 WIKITONGUES: Vitória speaking Portuguese
WUrJB96-BuE 2:24 WIKITONGUES: Ihsan and Septiadi speaking Palembangnese
fG0X7P1WFZk 2:09 WIKITONGUES: James speaking Filipino, English, and Spanish
LZoRgfFdXXQ 3:38 WIKITONGUES: Ying speaking Henan Chinese
ftqet7jH91g 1:55 WIKITONGUES: Golala speaking Sorani Kurdish
O2eX3XuzWBM 3:50 WIKITONGUES: Rama speaking Javanese
30d4TyH_9Ts 7:21 WIKITONGUES: Wayne speaking Breton
ok7DGXbk8Mk 0:51 WIKITONGIES: Fabiola speaking Trentino
8jAAPdvTld0 5:40 WIKITONGUES: Stéfane speaking Japanese, French, English, and Portuguese
-128MZD3rKU 2:02 WIKITONGUES: Revival speaking English, Khoekhoegowab, and Afrikaans
U9NivlodX8c 1:37 WIKITONGUES: Tay Za speaking Falam
A1QY9Ul5_iM 3:04 WIKITONGUES: Nawal speaking Moroccan Arabic
F4xgvj4kSnU 2:39 WIKITONGUES: Raj speaking Bagri
f7Msppvklb0 2:32 WIKITONGUES: Riike speaking Danish
CwGK0BmHbmY 3:44 WIKITONGUES: Dr. Karel Oliva speaking English, Czech, Bulgarian, Italian, German, and Russian
t6a5LmxqW6c 1:53 WIKITONGUES: Otmar speaking Po Naszymu
aXeID-fJdt8 1:27 WIKITONGUES: KK speaking Hong Kong Sign Language
w1Bugj3Ws7w 0:44 WIKITONGUES: Inna speaking Adyghe
CbiVj4rV3dY 4:48 WIKITONGUES: Changjiu and Chaofen speaking Guiyangese
yE9HBsnhEc8 1:44 WIKITONGUES: Dessire speaking Swiss German
enXPLO5kT3U 0:57 WIKITONGUES: Youssef speaking Egyptian Arabic
UZNsPtr9Ekg 0:45 WIKITONGUES: Aigul speaking Kyrgyz
3jpoUySC6sk 4:01 WIKITONGUES: Nicholas speaking Chipileño
Z2lYJyGr0vc 2:57 WIKITONGUES: Afou speaking Nyarafolo
S-It8jeuq-w 0:52 WIKITONGUES: Movsar speaking Chechen
nYLSU5faTIM 1:26 WIKITONGUES: Myrizinn speaking Breton
M34j7R6biR0 3:35 WIKITONGUES: Eetu signing Finnish Sign Language
NAhK_HlNNJM 2:53 WIKITONGUES: Theresa speaking Twi
kc8rKa11EzI 2:38 WIKITONGUES: Neceadin speaking Crimean Tatar
pS5Adkwaf-U 0:25 WIKITONGUES: Zarina speaking Kudarsky
9ZV7Rb2bAIc 3:17 WIKITONGUES: Prionsías speaking Irish
qW0GpWnioTQ 5:02 WIKITONGUES: Michael speaking Slovak
KncKzJEIUko 2:07 WIKITONGUES: John speaking Klao
vwWzzl2oZTk 2:19 WIKITONGUES: Fanny speaking Vlach
wuP_E0oFZkY 0:40 WIKITONGUES: Winnie speaking siLozi
EBLGBob9ZFA 1:09 WIKITONGUES: Kevin and Fuad speaking Kristang
YqFbV7vFIK8 3:44 WIKITONGUES: Carolien speaking Limburgish
ykypP-uOqq0 2:33 WIKITONGUES: Daria speaking Russian Sign Language
BT4Kbgs0llE 6:03 WIKITONGUES: Musuweu speaking English and Subiya
mfRie6DsS44 3:18 WIKITONGUES: Mária speaking Swabian and Hungarian
VihQkH66RoA 9:43 WIKITONGUES: Pau speaking French, Lithuanian, Italian, English, Spanish, and Catalan
pBksbW_fXKo 0:35 WIKITONGUES: Sister Cookson speaking Maori
stVATHE414E 2:03 WIKITONGUES: Zaeem speaking Hindko and Pashto
xHQKFgYEw3w 2:53 WIKITONGUES: Tylis speaking Crow
_N4HGvswrjE 0:36 WIKITONGUES: Elisa speaking Veronese
X1me0E0OGqU 2:46 WIKITONGUES: Liam speaking English
i_B6BJFumno 1:52 WIKITONGUES: Yabi speaking Amharic
hPozChGO_LA 3:23 WIKITONGUES: Slobodan speaking Serbian
6TiSKGRjYLs 1:34 Raluca speaking Romanian | Romance languages | Wikitongues
oGVRFnENVlI 1:12 WIKITONGUES: Nurkhalis speaking Banjar
tpltPC_ckqw 2:06 WIKITONGUES: Laura speaking Swiss-Italian Sign Language
JssdxmMLYHs 4:51 WIKITONGUES: Varney and Omoru speaking Vai
8xdzebPGPHI 0:38 WIKITONGUES: Sedang speaking Iban
uv_6J0heNVc 0:26 WIKITONGUES: Sister So'oalo speaking Samoan
GVkbhzm3VJE 0:34 WIKITONGUES: Foffo speaking Neapolitan
hHAm7Gpp8zI 4:53 WIKITONGUES: Camille speaking French
0cj-CL9sRR0 2:28 WIKITONGUES: Thomas speaking Transylvanian Saxon
ys7MtFK3ReI 2:18 WIKITONGUES: Hiroyuki speaking Miyako
whHnH3a-olo 10:17 WIKITONGUES: Aneli speaking English, Croatian, French, Spanish, and Portuguese
stQwzNjm-WI 2:39 WIKITONGUES: Omar speaking Mandinka
YEij6a6wt0Y 3:42 WIKITONGUES: Musamoni speaking Baleswari Odia
jeSxC2RNSkk 4:38 WIKITONGUES: Siobhán speaking Irish
VV0bmwKLHX0 4:48 WIKITONGUES: Richard speaking Waⁿdat
-8ZNc02x-U0 2:54 WIKITONGUES: Simon Piera speaking Lule Saami
UibNKykq4do 3:41 WIKITONGUES: Augusto speaking Portuguese
yjBhhSKuBd8 6:16 WIKITONGUES: Lgeik'i and Naakil.aan speaking Lingít
2bhYs6APqtU 4:33 WIKITONGUES: Diego speaking Portuguese, English, Spanish, French, Italian, and German
wAipXzYNztM 3:58 WIKITONGUES: Castelline speaking Haitian Creole
vHWpv_3NmBs 2:45 WIKITONGUES: Asimenia speaking Greek and Pontic
p45O8FiMED4 1:42 WIKITONGUES: speaking Dotyali
6u8gvwDevxE 3:41 WIKITONGUES: Mauro speaking Spanish
905hv_a4URY 6:02 WIKITONGUES: Alexander speaking Breton
lM7P_th3I6E 2:27 WIKITONGUES: Marapun speaking Tamil
QLFOGwmPei0 12:33 Isabel speaking Mirandese | Romance languages | Wikitongues
SVu7sUmEJgY 5:44 WIKITONGUES: Dora speaking English
89yLb3goapY 4:14 WIKITONGUES: Lena speaking Danish
jshv9n3xAO4 5:52 WIKITONGUES: Evelyn speaking Texas German
HXg_tCZfuWg 1:11 WIKITONGUES: Amu speaking Tsonga
a9XYhuJhJY8 1:45 WIKITONGUES: Evgenii speaking Chukchi
xj26oHydbyE 5:54 WIKITONGUES: Iasmin speaking Cantonese
kysjEWRwL98 5:10 WIKITONGUES: Giacomo speaking Romagnol
QKV3eHkFAZY 2:38 WIKITONGUES: Tom speaking Korean
xYUS0HFhkW0 1:32 WIKITONGUES: Sali speaking Pomak
cZItz2uKXUo 2:12 WIKITONGUES: Arlon speaking Triestine
bwx4tkODJm8 1:15 Oluchel speaking Palauan | Pacific Islander languages | Wikitongues
yorpVTOyeSE 0:54 WIKITONGUES: Namrata speaking Nepali and English
c05NPQFxnlc 4:01 WIKITONGUES: Krishna speaking Bhojpuri
xMmfbZIIclw 1:56 WIKITONGUES: Stéfane speaking Angolan Portuguese
5Uo-B9GaciQ 4:02 Aurora and Ademar speaking Mirandese | Romance languages | Wikitongues
sPeI8MR9fCU 3:10 WIKITONGUES: Isabel speaking Spanish
bY8HBFwRE-w 1:19 WIKITONGUES: Stere speaking Aromanian
_jJyzGnFfSE 2:46 WIKITONGUES: Roberta speaking Lombard
QUoTxiFdOmY 4:24 WIKITONGUES: Aboubacar speaking English and Zarma
NSczRqnBvFU 1:12 WIKITONGUES: Gjyste speaking Gheg Albanian
k3x-2IhJwjo 5:19 WIKITONGUES: Naoki speaking Okinawan, Kalmyk, Erzya, and Prussian
p1YqLLFxl4k 1:43 WIKITONGUES: speaking Khmu
I2sFAUpUhI0 1:13 WIKITONGUES: Tenzin speaking Tibetan
qxXq9iP-CGw 1:02 WIKITONGUES: Mounir speaking Tunisian Arabic
sNDAfGlc-4c 2:50 WIKITONGUES: Daniel speaking Nam Trik
ISFBfGJWiU8 0:48 WIKITONGUES: Dolma speaking Nepali
SMy4jzw2W08 3:30 WIKITONGUES: Tereza speaking Csángó Hungarian
Ui1fZPJ_Wr4 0:59 WIKITONGUES: Sister So'oalo and Sister Cookson speaking Tongan
MRjC-OyprJU 1:32 WIKITONGUES: Nir speaking Hebrew and Russian
Mwgy2kuoBBU 5:50 WIKITONGUES: Julia speaking Swiss German
xMaydZp_J30 7:02 WIKITONGUES: Jack speaking Ladino
z8eTwjQCCuA 2:04 WIKITONGUES: Hilario speaking Yucatecan
tFoIGW7FLUk 7:28 WIKITONGUES: Venecia speaking English and Jamaican Patois
1w_SXQUCfsw 6:25 WIKITONGUES: Suri speaking Yiddish
wGVjEJfE2e8 7:03 WIKITONGUES: Adrien speaking Chavacano and Spanish
-UlCJviJ8MQ 0:56 WIKITONGUES: Mario speaking English, Mandarin, Japanese, and Portuguese
pmwUGyC-Hh0 2:35 WIKITONGUES: Navas speaking Byari
Pr_BHjAdZNo 4:04 WIKITONGUES: Francesco speaking Sardinian
TPWT57Wuwac 0:50 WIKITONGUES: Isaaka speaking Tem
oMeQ8llXq6o 1:37 WIKITONGUES: Mohammad speaking Bakhtiari Farsi
Bozt5oUv74w 0:29 WIKITONGUES: Aaku speaking Newari
VkeAbRwP-lY 1:43 WIKITONGUES: Zerovsho speaking Tajik
j48ZhSpCczs 1:37 WIKITONGUES: Islem speaking Dari
5u4r0SUv10g 1:44 WIKITONGUES: Adam speaking Uzbek
dHCf9k3u2IQ 5:08 WIKITONGUES: Giuseppe speaking Sicilian and Griko
192WARvBmLg 0:44 WIKITONGUES: Sandra speaking English and Guyanese Creole
1_dH403pqRU 6:56 WIKITONGUES: Vernell speaking Texas German
rUfeztn-xz0 2:30 WIKITONGUES: Camila speaking English and Portuguese
qSTFLIgHQ5A 7:03 WIKITONGUES: Jessica speaking Spanish, Swedish, and English
MehharK-ZmA 3:54 Celena speaking Mirandese and Portuguese | Romance languages | Wikitongues
16uK2Gbyk2k 3:13 WIKITONGUES: Rose speaking Haitian Creole
M1YFrwaQL1I 1:12 WIKITONGUES: Matt speaking Hebrew
UOZOR4sBEEY 2:00 WIKITONGUES: Hussein speaking Dari
7l8wsBlSCpQ 0:57 WIKITONGUES: Khulan speaking Mongolian
iXUwLs4kNvc 2:46 WIKITONGUES: Valentine speaking Igbo
2IzpOFfd4Zs 1:08 WIKITONGUES: Anna speaking Kildin Saami
MQasAsvyqfE 2:19 WIKITONGUES: Thadoe speaking Burmese
YTgDOQuuvdc 0:53 WIKITONGUES: Labaram speaking Koussountou
o9_h--Obpvw 2:39 WIKITONGUES: Karl speaking Filipino
ofWA7ERRwzs 3:02 WIKITONGUES: Simon speaking Cumbrian
DcPu6zLpZoQ 1:01 WIKITONGUES: Victor speaking Mapudungun
Ms9kzKnXHA4 4:51 WIKITONGUES: Paul speaking Gallo
zUDEten_j9o 1:44 WIKITONGUES: Raphael speaking Twi
G1ZIzrAxWbA 2:41 WIKITONGUES: Maxim speaking Russian and Albanian
f5ah6REtNmg 1:58 WIKITONGUES: Azariah speaking Spanish
MEe25QALOn0 2:41 WIKITONGUES: Bety speaking Tojolabal
-kFzjAR-05M 2:12 WIKITONGUES: Tory speaking Martinique Creole
YKURmilQeTk 3:00 WIKITONGUES: Irena speaking Gheg Albanian
UyldsoCWcSE 5:33 WIKITONGUES: Marty speaking Cornish
hG5rMFqZ-XQ 0:44 WIKITONGUES: Matt speaking Yiddish
a0TKySIPH0E 1:17 WIKITONGUES: Nitesh speaking Haryanvi
vistydJ8zRM 3:03 WIKITONGUES: Mazhar speaking Bugis
9pBU2VGlvB8 3:52 WIKITONGUES: Joaquin speaking Spanish
oxs3msgKZ_I 7:08 WIKITONGUES: Jennifer speaking English
wFpaLd1Ddtk 1:16 WIKITONGUES: La speaking Lao
VnVR__nf0HI 2:51 WIKITONGUES: Hans speaking Sranan
T8cLcztsDXY 1:37 WIKITONGUES: Miarisoa speaking Malagasy
29euYj0k1Kk 5:26 WIKITONGUES: Jean Luc speaking Breton
TmWrYi9qZrs 2:58 WIKITONGUES: Charles speaking Linhainese
jOlXLLU2fgg 3:06 WIKITONGUES: Abdurrahim speaking English, Kazakh, German, Czech, and Russian
SZyN7kXmwLU 2:11 WIKITONGUES: Jaswant speaking Bazigar
RJVqf4vz-rQ 2:25 WIKITONGUES: Julia speaking Portuguese
wjwQkOzzSAg 5:47 WIKITONGUES: Irena speaking Northern Sami
Hh0nDkWeI5w 1:27 WIKITONGUES: Benjamin speaking Bosnian
WMXxcrFjY1o 2:25 WIKITONGUES: Andi speaking Batak Toba
ozo3HCJVJEA 2:36 WIKITONGUES: Lillotama speaking Seraiki
Iw-dUwsWyzs 2:04 WIKITONGUES: Edith speaking Spanish
z8bNnjovo88 1:12 WIKITONGUES: Fabia speaking Swiss German
38mq_FwgCNs 8:41 WIKITONGUES: Max speaking Finnish and Swedish
YbIyO-cMwhw 0:50 WIKITONGUES: Ram speaking Tamang
5bYNuCOdd_Q 2:02 WIKITONGUES: Sanjoy speaking Bengali
7EJud2CMRyo 4:25 WIKITONGUES: Ibrahim speaking Fulfulde, Zarma, French, Hassaniya Arabic, and Tamazight
22HBqPN8Oco 2:14 WIKITONGUES: John speaking English, Spanish, and Greek
oMDajMXC3fs 6:18 WIKITONGUES: Bart speaking Dutch
LmS0eUGBIrE 7:23 WIKITONGUES: John speaking English
rJYH4xad_fE 0:59 WIKITONGUES: Randeep speaking Powadhi Punjabi
m4l6NewVbes 3:21 WIKITONGUES: Stefano speaking Arbëresh
gaUt3gTwwzU 2:25 WIKITONGUES: Ivy speaking Shanghainese
4iB0W72Bv0Y 1:46 WIKITONGUES: Yannic speaking German
hCwfqiqDLWw 3:14 WIKITONGUES: Cal speaking Portuguese, English and French
6gyKLNQH44I 2:37 WIKITONGUES: Franco speaking Venetian
iLtnCoAi5R4 1:46 WIKITONGUES: Marília speaking Portuguese
SvlLbX3oyAk 3:35 WIKITONGUES: Ljóni speaking Icelandic
DIrFYr6WQi4 4:29 WIKITONGUES: Ciaran speaking English
tZOsIs1wIBg 1:04 WIKITONGUES: Khady speaking Wolof and French
zLaE0SmZdMo 6:36 WIKITONGUES: Bertha speaking Seminole Creole
9xl5oi4tEVw 13:00 WIKITONGUES: Dragan speaking Serbian
1_2f6rnIybA 1:52 WIKITONGUES: Leo speaking Spanish
3PZd-DmY_dE 4:09 WIKITONGUES: Wayan Pindi signing Kata Kolok
RDKfqr2jVeQ 4:47 WIKITONGUES: Vseslav speaking English, German, French, Polish and Ukrainian
eyPtlVS09RQ 1:38 WIKITONGUES: Souleymane speaking Senoufo, French, Arabic, and Mandingo
fZmLy_Acth8 4:06 WIKITONGUES: Sita speaking Manggarai
i9WbGqPeY8k 1:31 WIKITONGUES: Orsolya speaking Hungarian
8v2n3lBibWk 0:40 WIKITONGUES: Thressia speaking Dela
5TiS3AkpeI0 2:21 WIKITONGUES: Anne speaking Swabian
1P6ygw-VKKo 0:25 WIKITONGUES: Daisy speaking Kinyarwanda
oMbvC_siQyc 7:34 WIKITONGUES: Dale speaking Pennsylvania German and English
5ax900reMWM 6:24 WIKITONGUES: Yochai speaking Hebrew
w_FJ_D1BVkI 4:20 WIKITONGUES: Simon speaking Piedmontese
DGnbG3OhC5E 0:33 WIKITONGUES: Roanne speaking Crow
_WN-6t58HdM 2:54 WIKITONGUES: Pablo speaking Garifuna
pI1feWHeUq4 1:11 WIKITONGUES: Teruyo speaking Ainu
8n-c4DIqBuw 3:19 WIKITONGUES: Darma speaking Minangkabau
Er4liSo00nA 1:55 WIKITONGUES: Nila speaking Indonesian
N_WS0_9PZgw 5:20 WIKITONGUES: Giuseppina speaking Arbëresh Albanian
A2brIzxJvkM 3:00 WIKITONGUES: Francesco speaking Friulian
ux9UuNoCruo 1:08 WIKITONGUES: Sebastian speaking Bavarian
Y-WNHB4FEZA 1:34 WIKITONGUES: Soner speaking Laz
Sra5evn--8c 3:20 WIKITONGUES: Andrea speaking Solandro
t5mO8vWRPo8 1:31 WIKITONGUES: Valerian speaking Mingrelian
xJat2lF9Aio 3:57 WIKITONGUES: Sebastijan speaking Croatian
HHjmbeH7iM8 1:23 WIKITONGUES: Dragan speaking Macedonian
Ph5MuSHtgS0 1:15 WIKITONGUES: Rejzka speaking Upper Sorbian
MfS4oDLBpp0 1:02 WIKITONGUES: Pavel speaking Belarusian
LAnWWcSrTFU 3:33 WIKITONGUES: Daniel speaking Romansh
3Ptre1OzsJ4 2:39 WIKITONGUES: Enkelejd speaking Tosk Albanian
qH9Qp747MTA 2:34 WIKITONGUES: Titus speaking Latin
y3RQlAZSNfk 3:35 WIKITONGUES: Ibnu Sina Sam speaking Banjar
w8iwYaa41uo 1:06 WIKITONGUES: Saro speaking Kigiryama
uizL1thcRXg 6:37 WIKITONGUES: Véronique and Sandra signing Swiss-French SL and Swiss-German SL
SSOxL2VRIeE 6:25 WIKITONGUES: Julius speaking Batak Toba
RTr00PeXZ6I 1:42 WIKITONGUES: Keely speaking English, Spanish and Catalan
q_EJdzfnPSg 2:44 WIKITONGUES: Erika speaking Lithuanian
vydhTL5SoIs 1:22 WIKITONGUES: Martha speaking Aymara
nQmB8u7aBZs 3:24 WIKITONGUES: Matic speaking Slovene
eg0bYuuHzkI 1:21 WIKITONGUES: Nila speaking Javanese
-gnJtZFyzZA 8:12 Antônio, Domingos, and Porfirio speaking Mirandese | Romance languages | Wikitongues
lxQjwbUiM9w 7:15 WIKITONGUES: John speaking Lojban
qfKmOf3d0fc 1:42 WIKITONGUES: Sanjib speaking Tharu
H8t_snz8B5A 1:32 WIKITONGUES: Candy speaking Malagasy
P2PYuwhtwro 2:12 WIKITONGUES: Marco speaking Italian, Venetian, and Cimbrian
eLX1KG3FnBg 2:51 WIKITONGUES: María speaking Guarani
321JX9QiME0 6:50 Listen to the Tsakonian language of Greece | Manolis speaking Tsakonika | Wikitongues
JFp2hDgjIyM 1:57 WIKITONGUES: Isayev Mahammad speaking Avar
EqvGJERHbOY 0:43 WIKITONGUES: Nikoloz speaking Georgian
KBEQH7Ad7H8 1:02 WIKITONGUES: Nastya speaking German, French, Russian, Czech, and English
cYWddQLxdu4 1:01 WIKITONGUES: Mark speaking Chechen
b8WMfsLoUAo 1:35 WIKITONGUES: Danio speaking Romagnolo
mfprxIS-ANg 1:35 WIKITONGUES: Marvin speaking German
z_cAYz0Q5DI 1:00 WIKITONGUES: Đức speaking Vietnamese
Vbpr0ryoroA 1:31 WIKITONGUES: Liisi speaking Estonian
SrLPH5590RU 1:48 WIKITONGUES: Junior speaking Lakota
Q6ici_SMBvM 8:20 WIKITONGUES: Peter speaking Portuguese, Spanish, Italian, and English
8HAidhktzjU 1:30 WIKITONGUES: Recep speaking Turkish
1fBDgdfX4vk 2:34 WIKITONGUES: Gustavo speaking Portuguese
ZrfoXAsPHD4 0:44 WIKITONGUES: Mark speaking Greenlandic
9Nl_ttQDYkQ 1:49 WIKITONGUES: Rolf speaking Atlaans
mCghaYzVDxw 1:16 WIKITONGUES: Ali speaking Hausa and Kanuri
8i4EEb5QMgU 1:08 WIKITONGUES: Anna speaking English, French, Czech, Russian and Latvian
kb3Xs56iCg8 0:40 WIKITONGUES: Memmed speaking English, Czech and Azeri
vkheU0nXKKY 1:52 WIKITONGUES: Tony speaking Esperanto
fO0ZyO_Yk9I 1:19 WIKITONGUES: Gül speaking Zazaki
buuGVrfI2jo 9:05 WIKITONGUES: Thong speaking Isan
fQOCFYGadcQ 2:23 WIKITONGUES: Nigel speaking Welsh
buK4KwQ2QcE 2:30 WIKITONGUES: Alan speaking Scottish Gaelic
kho_Esw789Y 2:18 WIKITONGUES: Katalina speaking English
753D2NuKgKU 2:23 WIKITONGUES: Manjunath speaking Kannada
z3ou0vZj_80 1:02 WIKITONGUES: Lucy speaking Mekeo
yiVuJhiTyrE 3:20 Ratulevu speaking Kadavu Fijian | Pacific Islander languages | Wikitongues
rK43HXX2fS0 0:12 WIKITONGUES: Rama speaking Swahili
JUa_phPM77s 2:16 WIKITONGUES: Sandra speaking Welsh
_lTVSjRv10k 0:19 WIKITONGUES: Opoka speaking Acholi
qJVY25bli80 1:32 Artur Mas speaking Catalan | Romance languages | Wikitongues
M5alRFKK43Y 7:03 WIKITONGUES: Argo speaking Indonesian
Z5B7eKSJHBQ 3:03 WIKITONGUES: Ilir speaking Gheg Albanian
dxtFwV5Es7k 6:17 WIKITONGUES: Miriam speaking English, Dholuo, and Swahili
-TEtqv0RTew 6:39 WIKITONGUES: Johannes and Esben speaking English, Danish and Portuguese
PaZqV91ybbM 2:25 WIKITONGUES: Alexandra speaking Halländska Swedish
Oybanf47dwQ 3:59 WIKITONGUES: Miguel speaking Majorcan Catalan
IvwbztWHe0I 1:26 WIKITONGUES: Nila speaking Ambonese
dDQLdHkhPTE 0:24 WIKITONGUES: Florentina speaking Aromanian
j6voxaLLoDw 0:44 WIKITONGUES: Watas and Wari speaking Sa
8IvBOcstwCU 2:14 WIKITONGUES: Yan speaking Huasteca Nahuatl
-7Ch2p6xPAM 3:39 WIKITONGUES: Muhned speaking Zuwara Berber
lhufdY1uT3k 1:45 WIKITONGUES: Candela signing Argentinian Sign Language
6QWwVtNHmuM 1:09 WIKITONGUES: Hassan speaking Cherokee
Ribtybmtb3k 2:07 WIKITONGUES: Sedday speaking English, Swahili and Somali
fvtbdq3WiyU 5:46 WIKITONGUES: Hywel speaking Welsh
9UaAyI-uI30 3:48 WIKITONGUES: Elizabeth speaking Cornish
SGTGWJf4dWw 1:07 WIKITONGUES: Drita signing Kosovar Sign Language
rTLBhwuaq_M 4:33 WIKITONGUES: Daria speaking Russian, English, Spanish and Catalan
gH8m9Ubcbi0 1:41 WIKITONGUES: Mª Ángeles speaking Spanish
9pBaJojzNOI 2:10 WIKITONGUES: Janek speaking Polish
rPokZgAdXSo 1:04 WIKITONGUES: Rosemary speaking Scottish Gaelic
30CWWm0BcNs 4:09 WIKITONGUES: Enrique speaking Spanish
pCfEViYa110 2:02 WIKITONGUES: Simane speaking Drehu
0c5vl2Vx0wQ 2:03 WIKITONGUES: Ajriz speaking Gorani Našinski
p85oX1cewf4 1:19 WIKITONGUES: Artur speaking Galician
G5WqvFD-ELo 0:54 WIKITONGUES: Shuang speaking Mandarin
1JWnPIXkXeA 4:21 WIKITONGUES: Pietro speaking Lombard
9on81ZtUf5A 0:55 WIKITONGUES: Niḍāl speaking Syrian Arabic
T9JkzyrvbP4 4:17 WIKITONGUES: Julian speaking Albanian
o6FUP_2RmcI 1:14 WIKITONGUES: Anneli speaking Swedish
1uIg0COZE5A 1:52 WIKITONGUES: Alim speaking Fula
rEJb7j61-es 1:20 WIKITONGUES: Ela speaking Turkish
-NrSATT7Y7M 2:11 Toukala speaking Bislama | Pacific Islander languages | Wikitongues
cyhc6ddqdhc 2:22 WIKITONGUES: Ron speaking Limburgish
o4R1-TLkxBs 0:52 WIKITONGUES: Sho speaking Japanese
zLTgmdLaQJ4 2:06 WIKITONGUES: Daut speaking Romani
vPY5v6SBkxM 0:51 WIKITONGUES: Vseslav speaking Russian
2asptk633iA 1:12 WIKITONGUES: Mirjana speaking Serbian
Rm9fBd0k1LY 1:46 WIKITONGUES: Paul speaking Lau
fMRTimDnx4A 2:23 WIKITONGUES: Sai speaking Tamil
zyup0YLKCvw 2:32 WIKITONGUES: Leonhard speaking Swahili
osuIdwM0urk 2:42 WIKITONGUES: Naveed speaking English, Urdu and French
pFXjD9J-JE0 0:50 Mila speaking Fijian | Pacific Islander Languages | Wikitongues
GZcV67w2o1g 1:26 WIKITONGUES: Devika speaking English, Marwadi, Marathi and Hindi
9D2ZymNG4rE 1:46 WIKITONGUES: Afro Amado speaking Portuguese and Sena
yIlm9CoOhPc 3:10 WIKITONGUES: Teddy speaking Esperanto
sQXzn-H0kjY 1:53 WIKITONGUES: Mirela speaking Bosnian
CW8z9FeyOZ0 5:08 WIKITONGUES: Suna speaking Balkan Gagauz Turkish
EP5QqODoeHw 2:21 WIKITONGUES: Donald speaking Scottish Gaelic
le3cBRlWSE8 6:57 WIKITONGUES: David speaking Doric Scots and English
m0EwquC6wBU 9:14 WIKITONGUES: Christine speaking Shetlandic
8xVxOJCBPSw 2:56 WIKITONGUES: Iain speaking Scottish Gaelic
9p-xnXddSy8 2:19 WIKITONGUES: Hugo speaking Mapudungun and Quechua
hwQbxuwXGhc 8:34 WIKITONGUES: Àdhamh speaking Scottish Gaelic
57m0PfhE68c 1:35 WIKITONGUES: Milen speaking Bulgarian
674za6Yr3Po 1:21 WIKITONGUES: Sorcha speaking Irish
mrnxCBfLHFQ 1:40 WIKITONGUES: Tiger speaking Shangaan
0GsYpjHWDis 2:33 WIKITONGUES: Maxi speaking Spanish, English, Portuguese, Catalan and Italian
PpNr0MgTAbY 2:04 WIKITONGUES: Aldade speaking Portuguese and Chuwabo
Uq2x_P34bTQ 4:22 WIKITONGUES: Ayesha speaking Bengali
E-ohZtbkyxI 0:53 WIKITONGUES: Martin Speaking Swedish and Polish
72L2JsuGcH0 0:51 WIKITONGUES: Anis Speaking Lebanese Arabic
8RyDKy_HUj0 1:40 WIKITONGUES: Michael speaking Shangaan
IahmVXN7xEQ 3:23 WIKITONGUES: Ashwath speaking Konkani
Kz6bU7RqIjc 3:44 WIKITONGUES: Tural Speaking Azerbaijani, Turkish and Russian
gygesoisNhw 4:30 WIKITONGUES: Plator speaking Gheg Albanian
CG0OnKUqziA 3:40 WIKITONGUES: Jeremi speaking Afrikaans
E-hVDqrQq6M 2:10 WIKITONGUES: Manjusha speaking Telugu
DCNH-f-CC98 11:49 WIKITONGUES: John Speaking English
-oarxcgzsXY 2:21 WIKITONGUES: Lopez speaking Nafasana
pqPtJM4ZRQE 2:28 WIKITONGUES: Priscilla speaking Nakanamanga
RHJOlCbQbbU 2:05 Ladonna speaking Bislama and Neverver | Pacific Islander languages | Wikitongues
H3g87x0nL1M 9:49 WIKITONGUES: Marks speaking Latvian
mD24h-bbdMU 2:22 WIKITONGUES: Marta Speaking Polish
fMTSDqjcvEk 4:06 WIKITONGUES: Galib Speaking Azerbaijani
_nZiBMOqcUU 2:11 WIKITONGUES: Tio Bang speaking Daakaka
zXM5DJNZhFI 2:25 WIKITONGUES: Sidra Speaking Urdu and Norwegian
Flo8cPtcg6o 2:48 WIKITONGUES: Anthony speaking Swiss German
4dfcO_bsB90 1:58 WIKITONGUES: Hani speaking Swedish
P2vfi0HAaCU 0:26 WIKITONGUES: Fahed speaking Syrian Arabic
OFHx0-4wU38 11:37 WIKITONGUES: Ricky speaking English, Maori and Spanish
boFQzRB3OuQ 3:48 Sònia Speaking Aranese Occitan | Romance languages | Wikitongues
DmvDD9kJipE 3:56 WIKITONGUES: Omar Speaking English and Jamaican Patois
z_f7kpXW0tQ 1:39 WIKITONGUES: Suseong speaking Korean
nFLhxxsN7gQ 0:52 WIKITONGUES: Presi Speaking Bisayan
mcqxSaoqQ3A 2:34 Fugi Speaking Aranese Occitan | Romance languages | Wikitongues
KwAvCpU-z-w 4:33 WIKITONGUES: María José Speaking Spanish
UP3FhvITMX8 2:00 WIKITONGUES: Landon speaking English
eYwvcqHcKW8 3:04 WIKITONGUES: Conor speaking Spanish
ZMfuNUWBlYE 4:36 WIKITONGUES: Kevin speaking English
Oz0hBgB5ixs 5:53 WIKITONGUES: Timothy speaking Penang Hokkien
hVhqmUHKnqI 6:16 WIKITONGUES: Leslie speaking English
L2ST-UU6Ns8 2:31 WIKITONGUES: Dang speaking Thai
Ynx3JxV5U6I 2:12 WIKITONGUES: Joshi speaking Esperanto
tqftb3zad1o 2:42 WIKITONGUES: Adrian speaking English, Spanish, and Portuguese
wdiVss0X6V0 2:23 Joan-Lluís Lluís speaking Catalan | Romance languages | Wikitongues
_IXEev5Z7ao 0:57 Ares speaking Aranese Occitan | Romance languages | Wikitongues
suK34prc56o 6:47 Jon speaking Basque | Basque people | WIKITONGUES
N0GY23080G0 6:30 WIKITONGUES: Rachal speaking Cantonese
r6xt8HZy1-k 5:24 WIKITONGUES: Päivi speaking Finnish
2iu0f8GKFgQ 3:07 WIKITONGUES: Caitlin speaking English
jjiXgRO8qDw 1:51 WIKITONGUES: Sebastiano speaking Italian
ZtXr7bckLyc 6:16 WIKITONGUES: Tatenda speaking Shona
B-qxGhkRojc 4:36 WIKITONGUES: Wanyu speaking Mandarin
pru-95YczT4 1:58 WIKITONGUES: Seema speaking Urdu
PUYoRT2EA5Q 9:34 WIKITONGUES: Jerry speaking English and Cherokee
pdYpvY6Efos 2:24 Josèp speaking Aranese Occitan | Romance language | Wikitongues
Yxrq9zhgla8 1:47 WIKITONGUES: Majid speaking Farsi
gV7XWdt72Vo 2:42 Luis speaking Galician | Romance languages | Wikitongues
z1Jfor9KJdE 3:00 WIKITONGUES: Mark speaking Luxembourgish
1tgBuR2dWh4 3:07 WIKITONGUES: Lolly speaking Zulu
T_8snLihxWs 2:03 WIKITONGUES: Lindie speaking Afrikaans
BIV7gCJRY0k 3:20 WIKITONGUES: Jovana speaking Serbian
iCd5W4gwJsI 17:26 WIKITONGUES: Caroline speaking Gullah and English
AUtRgfFUCl8 1:44 WIKITONGUES: Ani speaking Armenian
R4VeecQEbA0 5:56 WIKITONGUES: Michael speaking English
At6KGp45FdM 1:42 WIKITONGUES: Stella speaking Russian, English & Armenian
L1jLUZXXYUc 2:53 WIKITONGUES: Michell speaking English
lXR8P4dOmAU 4:31 WIKITONGUES: Lee speaking English
1R5dPw4sYrE 5:53 Louis speaking Louisiana French (Cajun) and English | Romance languages | Wikitongues
NM0DpalXJ8s 5:49 WIKITONGUES: Alexis speaking English
G0n970JRNII 3:43 Sam speaking Louisiana French | Romance languages | Wikitongues
Vg4cGwY-q2c 7:52 Horace speaking Louisiana French | Romance languages | Wikitongues
SWn1t4o0QC0 2:25 WIKITONGUES: Stephen speaking Gikuyu
0iVQwo-1hHM 9:37 WIKITONGUES: Marion speaking English
3Ve8Gf5rAhA 2:54 WIKITONGUES: Jane speaking English
9OkYYixgCes 1:28 WIKITONGUES: Pascal speaking German
Ki4W4QVm2Hk 1:15 WIKITONGUES: Joyce speaking Cantonese
GaN884-JfB8 6:01 WIKITONGUES: Krzyś speaking Polish
nN4fDhAcGTM 2:49 Ona speaking Catalan | Romance languages | Wikitongues
M6ZdYNFo6gM 2:28 Anita speaking Catalan | Romance languages | Wikitongues
xSaGl8fiiYk 1:14 WIKITONGUES: Michael speaking Khmer
jBDZOm0HXO4 1:56 WIKITONGUES: Angelo speaking Portuguese
nqOtvem2dxs 1:12 WIKITONGUES: Lama speaking English and Palestinian Arabic
M2xmsclh3UA 3:26 WIKITONGUES: YiShan speaking Mandarin
fk3Cq0mR6_4 3:28 WIKITONGUES: Emily speaking Norwegian
WQ4W-UqaaMo 3:24 WIKITONGUES: Javier speaking Nahuatl & Spanish
w9MvPytHDvk 0:57 WIKITONGUES: Kimberly speaking Lakota
FxrCNf8utsE 3:12 WIKITONGUES: Jenni speaking Finnish
RCZF42aj2Po 3:38 WIKITONGUES: Natasha speaking English
DbArjSCZvOQ 1:27 WIKITONGUES: Will speaking Mandarin
iWRrLD7H98s 4:03 WIKITONGUES: Freddie speaking Portuguese
VgzHAbJjteQ 0:36 WIKITONGUES: Clara speaking French
vO87PpdQKV4 3:28 WIKITONGUES: Joel speaking English & Hebrew
cC50MO--CGQ 3:36 WIKITONGUES: Manuel speaking Totonac
CouHEysgsPo 2:05 WIKITONGUES: Octavia speaking Hessian
P2jdy8NC-JU 5:00 WIKITONGUES: Sofia speaking Russian & English
7zQSfU5HkUc 1:53 WIKITONGUES: Lorenzo speaking K'iche' Mayan
4SR39iWfZdk 1:53 WIKITONGUES: Regina speaking Spanish
v2jD_SU9KZo 2:59 WIKITONGUES: Mario speaking Aragonese

# We Plants Are Happy Plants

tDl7O05ljZE 1:17:34 Terence McKenna - Speaking Metaphorically (FULL TALK)
dGVXtLe3XRo 4:09 Terence McKenna - Nature Is Full Of Secrets
WUYP6S5IU-Q 3:24 We Plants Are Happy Plants - Change
IeEBq692Pz0 6:51:07 Terence McKenna Talks
AXVk-HLzPeY 4:17 Terence McKenna - History Has Failed
HE8eiwP0NQE 4:05:22 Terence McKenna Talks
sVeSNR8USE8 5:40:56 Terence McKenna Talks
2Azkg3-p7Rs 3:47 We Plants Are Happy Plants - Simple Satori
r_CZQxS2j2c 9:02 Creating AI Art of Terence McKenna While He Talks About Technology
Q6KhbXXbdh0 5:37:48 Terence McKenna - Understanding The Chaos At History's End
9ZubqvL4Hzc 15:44 Terence & Kat McKenna - How To Trip On Mushrooms
6QHTlZ60Jcg 3:55 We Plants Are Happy Plants - Ticking Time
VrlKrpwA368 9:54:47 Terence McKenna - Turning The Tide
CMOcmUXJdlw 6:13 Terence McKenna - The Ethical Life
ScfCI5gQ6r0 4:01 We Plants Are Happy Plants - Escape Into The Dream
j2V_NkhMPB4 4:13 We Plants Are Happy Plants - Elf Calling
dv43YbR-UNU 1:29:13 Terence McKenna - Existence Beyond The Grave
M0e4Wfc75Jc 8:31 Terence McKenna - The Guiding Image
6YAVu2c78WY 6:31 Terence McKenna - The Human Body Is An Instrument For Exploration
PQFRHlu141w 9:47 Terence McKenna - The End Of The Road
1gLDjn1FFDg 7:42 Terence McKenna - The Male Ego Led Us Astray
P-EhXbjRWTk 12:59 Terence McKenna Predicted The International Sanctions On Russia
d1k_8z0yl20 12:22 Terence McKenna On War
LZ8Q_gbx1LQ 34:05 Terence McKenna - The Emanation Of Wisdom
vU6j_qIyvsc 7:35 Terence McKenna on Modern Art
iYrhzAb5Sp4 7:03 Terence McKenna - Cleansing In Nature
ct7fVzG_VEk 7:04 Terence McKenna - Scenarios Of The Future
6DjhTfeI16E 6:05 Terence McKenna - The Unspoken Truth Of Creativity
JTjDbW7ecKk 7:54 Terence McKenna - The Mushroom Looks Engineered
LgtmJxrSko8 7:33 Terence McKenna - The Way Out
UrStQRq95NY 7:23 Terence McKenna - The Alchemical Child At The End Of Time
Ty2SIGIjRnE 2:57:38 Terence McKenna - Choosing Your Fate
zyU-susjUKc 7:06 Terence McKenna's Seven-Minute Flight Of Ideas
pOGXKRWIwWY 22:49 Terence McKenna On Transcendence
dyUopIVjvHg 12:13 Terence McKenna Metaverse Interview (Virtual Reality)
fClsFKfw1xg 10:16 Terence McKenna Tells Four Stories In Ten Minutes
DhE7E9_tenM 3:04 The Quiet Center (Trailer) John C. Lilly Documentary
hI2OkMfmH-0 11:13 Terence McKenna on Noam Chomsky And Marshall McLuhan
mdY5zFmq7BA 6:49 Terence McKenna - The End Of Culture
ixBPSX-gFP0 59:30 Terence McKenna - New Phase Of Human Existence
ZyQLlWzOvYw 1:29:52 Terence McKenna - Everything Teaches
9Ew3XLRkDIU 5:57 Terence McKenna - Language Can Do Anything
nLNtpAXOlHk 5:02 Terence McKenna - The Cure For Boredom
AmsiTPbbJhc 3:37 Terence McKenna - Calm Down
QHtt_QhsUUY 5:49 Terence McKenna - Existence Is An Illusion
sE8-5pQJPL4 12:31 Terence McKenna on Time Travel (Addendum)
P52emKeqHrE 16:39 Terence McKenna - Shaping Destiny
J4jIWnmx-Pg 16:02 Terence McKenna - Boundary Dissolution Parties
Txm5JlpiXKM 3:46 Terence McKenna On Sacrifice
ru-WouAYQzM 14:25 Terence McKenna - No Place For True Believers
iwGiSe6WFqY 19:07 Terence McKenna On Magick
KZQq0Oejfy8 6:01 Terence McKenna - A Cautionary Tale
fsXt7ys03WE 53:44 Terence McKenna - Closing Lecture (Palenque 1994)
-obcZEABgS8 7:13 Terence McKenna On History
rt_IKefTJn0 30:17 Terence McKenna On Quantum Physics
3FnaQmg6gnI 10:22 Terence McKenna On Aliens
bAZ0b6GHxiw 4:49 Terence McKenna On Determinism
v6lsQoGMzGc 8:43 Terence McKenna - Subtle Evolution
oKtR5o1X_NQ 53:37 Terence McKenna - Morning Lecture (Palenque 1994)
vprIgkBGql4 3:49 Terence McKenna - Seeking Enlightenment
0X8iBM3F5Uw 6:01 Terence McKenna - Walk The Golden Streets Of The Imagination
_8UCpLZ7Nqc 9:48 Terence McKenna On DMT Elves
OwkQRqOzg70 8:39 Terence McKenna - The Power Of Art
TVHYiQIq9b0 8:59 Terence McKenna - Repairing Syntax
SPF4m6r_Urk 6:21 Terence McKenna - We Are Living Out Fantasies
qWKCsrwA1PY 25:28 Terence McKenna On Fractals
EBYgq08akYs 4:21 Terence McKenna - Strange Datura Experience
voJ1LBHPk_4 4:21 Terence McKenna - Burning Our Bridges
RzTVv4vghCI 5:47 Terence McKenna - The Great Dilemma
0ZLaRCE2qY0 1:00:35 Terence McKenna Funny Bits (Compilation)
cqfJlaB7-Y8 6:17 Terence McKenna - Ripping The Membrane
QaB2aZ0Q5FY 10:59 Terence McKenna - Human Impact On Prehistoric Nature
_zXkWiGxSb0 17:12 Terence McKenna - The Ego Is Not Our Finest Achievement
mJ9koe-UxrE 40:02 Terence McKenna on Time Travel
pfgHHd2sIjs 2:32 Terence McKenna - Pattern Out Of Chaos
dVtnZ5r9Bt8 17:05 Terence McKenna - Childhood Stories (Compilation)
kch1qKPcKNE 6:33 Terence McKenna Encounters Hyper-Dimensional Pirates
3duAI-as5-g 5:28 Terence McKenna - We Don't Have The Faintest Idea
WekiRl16Oug 3:15 Robert Anton Wilson Talks About Crypto-Currency In 1997
XTrwm4tbqkg 7:33 Terence McKenna - Times Of Confusion
r4eSt4nH1NA 5:44 You Are Responsible For Yourself - Terence McKenna
01eM6bIch2w 6:17 Terence McKenna On Wealth Inequality
qn2w20Z0X6A 19:07 Terence McKenna - Don't Follow Leaders!
qhxyA-lJtAo 11:34 Terence McKenna - Complete Experience Of Existence
uQWadGDIedY 6:17 Terence McKenna - Digital Liberation
XPeHEWAa_rc 8:10 Terence McKenna - Alienated From History
AqP6IX4U8Wc 24:01 Terence McKenna "I Ching" Interview
K2daXV4AxYY 7:07 Terence McKenna - The Fractal Faith
ia9kVAxg-hc 6:25 Terence McKenna - The Still Small Voice
DhLTWbxOGWo 1:19:17 Terence McKenna - Casting Doubt On Assumptions
0o6yaBWWp-o 11:49 Terence McKenna - When Prophecy Fails
CmAXFemOSFM 10:52 Terence McKenna - Constant Scientific Revolution
WBZatEPUHIE 8:50 Terence McKenna - Alien Spores
uFyLPZoPhOk 4:17 Terence McKenna - The Reconstruction Of Eden
MwxkNpc9i-8 1:18:03 Terence McKenna - Brave New World
GowIF-nIEvM 7:33 Terence McKenna - The Departure
YkBcpsor1rk 5:20 Just McKenna Being McKenna For Five Minutes
6vhFoVFOx1A 4:52 Terence McKenna - This Too Shall Pass
kyf6GoPMQv0 4:30 Terence McKenna - Death Has No Sting
En9JhgZcvj8 7:19 Terence McKenna - We Are Ruled By Corporations
W5WsD0M2X3s 5:03 Terence McKenna Quoting Famous People For Five Minutes Straight
tLdp9yyxNns 6:18 Terence McKenna - The Nightmare Of Modernity
qNgXcp4i3gs 9:36 Terence McKenna Reads From Finnegans Wake
ryeogBb4q3w 3:09 We Plants Are Happy Plants - Butterflies
Pjl72SLA1qk 10:00 We Plants Are Happy Plants - Razz (Shift Of Consciousness Mix)
QB7fRkyoIuo 6:33 Terence McKenna - The Big Picture
CXEj666l-rs 11:28 The Future Is Virtual (Terence McKenna VR Documentary)
_4Y4_r_iK0A 7:35 Terence McKenna - Science Is A Branch Of Art
ivJp447eOu8 7:34 The Peculiar Humor Of Terence McKenna (Part 9)
kbL8r35jQxU 33:47 The History Of Reason And Intuition - Terence McKenna
uF_SSTmDZCc 2:43 McKenna Toons: Alienation (EP1)
NK5-W_bvzBU 8:47 Terence McKenna - When Media Becomes Reality
feLFulK4Vbw 13:07 Terence McKenna - When Culture Fails
0rkRJXBQ8ds 13:52 The Momentum Of Our Ideologies - Terence McKenna
KVNPUt56GOs 12:06 Terence McKenna - Technologies and Our Flaws
rTpxbsaAxhU 15:50 Bad Trips (In Depth) - Terence McKenna
-fZQPkkSk2o 9:32 Terence McKenna - Everyone Is Ordinary
vzZ08mXqpgs 5:09 Terence McKenna - Digital Existence
rRgJwR65Cms 22:58 Terence McKenna Around The World (90's Travel Vlog Compilation)
aLtJx7APLzk 7:31 Terence McKenna - The Sword Of Wisdom
oxN8QKGPJ7I 8:03 Terence McKenna - Lunar Time
MgQrCVVx5P8 15:35 Terence McKenna - Taoism (Compilation)
wN0ZyRu55O8 12:55 Terence McKenna - The Plant Connection
MsU6R0oMyZA 27:37 Terence McKenna - The Price Of Miracles
0xefRtWIZnE 7:18 Terence McKenna - This Is The Way
5Rq4tpWt5Bk 2:03 Terence McKenna Video Game (Teaser)
e_N7pKY5s7U 6:13 Terence McKenna - The Power To Transform
ax0RvqExzYk 4:58 Terence McKenna - The Game Of Understanding
647yqQOTa_Y 9:39 Terence McKenna - The Fabric Of Time And Language
s6B0d3MfB7s 2:21 Terence McKenna - We Are Awakening
Blw6TMMNb38 11:21 Terence McKenna - Anxious Biology
355TKLo4xsw 5:56 Terence McKenna Tribute (Narrated by Dennis McKenna)
O3MCodNInhY 8:47 Terence McKenna - We Are Frustrated Monkeys
ssRUz_tNdJw 6:37 Terence McKenna - Spiritual Objects
qWeawgG-QwE 5:44 Terence McKenna - Coincidences Rule Our Lives
-F_n-0kBE9c 13:45 Terence McKenna - Messiahs And Flying Saucers
E8ocbqwSzP4 8:49 Terence McKenna - How To Talk To Elves
HaOYys4SfhI 7:49 Terence McKenna - The Only Escape
TV5wIIQPTYc 11:17 Terence McKenna - The Mind Is A Hidden Organ
arUfiA3nm70 28:25 Terence McKenna - The History Of New Age
U3cfHrs7Un4 2:37:52 We Plants Are Happy Plants (Music Mix)
I94YZHrmzO4 7:27 The Peculiar Humor Of Terence McKenna (Part 8)
h8pwa68KWmo 5:35 How To Live Your Life (Terence McKenna)
8x05V_lPm70 19:31 Terence McKenna - We Are Divided From Each Other
4UC6A9rIJZU 5:43 Terence McKenna - Hacking Reality
IOppvLvCbcw 4:45 Terence McKenna - It's Going To Get Crazier
RFUPh6y7Bh0 5:29 Terence McKenna - We Have No Idea What Is Possible
6MRs3qNZ64o 5:10 Terence McKenna - Truth Can Be Known
-8VE04-by9Q 10:25 Terence McKenna - What's Going On?
ltG9_pE62eQ 5:33 Terence McKenna - Ocean Of Thought
5aRpsBX8ByA 5:33 Terence McKenna - Globalism vs Fragmentation
BO0pTiFjiIo 4:21 Terence McKenna - Language Makes Reality
Fln4HO5xrIU 12:05 Terence McKenna - Challenges Of The Future
0CorHrZHHHU 12:25 Terence McKenna - Consciousness Wars
4Wb2ZxG95R8 4:00 Terence McKenna - Resonance
fZk93k5T4iA 3:47 Terence McKenna - Chillum
0b3outdSSoM 3:40 We Plants Are Happy Plants - Spirits In The Room
g5TR5eezJXo 5:43 Terence McKenna - A Life Well Lived
gnDYIUnMcYk 13:26 Terence McKenna - Spirit And Impermanence
YhacmHCDsNs 6:47 Terence McKenna - Specialized Diets
juYcaOD6lN8 5:49 Terence McKenna - We Are Lost
QFm6xYglx4E 10:04 Terence McKenna - Social Unrest, Anarchy, Responsibility
vU90ybDgEzM 12:52 Terence McKenna - Language Of Emotion
Ix-JuTYKahc 4:49 Kathleen Harrison & Terence McKenna - Botanical Dimensions
K_hDX3GzROo 7:43 Terence McKenna - Build Your Own Myth
cn9cSBCQ5BA 1:02:09 Terence McKenna - The Weirdest Tales (Compilation)
HUDvVq56vDw 6:52 Terence McKenna - The Lost Connection
HWRjGPCxV_4 4:33 Terence McKenna - The Imagination is God (In The Dream)
S9Po0KU5_nU 12:53 Terence McKenna - Green Anarchy
2OiATjkR4uI 23:50:20 Terence McKenna - What Nature Teaches Us
p_HCCHptP5Y 4:00 We Plants Are Happy Plants - Satori
0Bhiy0797qo 4:51 Terence McKenna - Ride The Tao
wSb7-DT7oK4 10:25 Terence McKenna - You Have Two Choices
LUH-0iFJbYs 7:28 Terence McKenna - You Could Change Your Reality
WPDF7lQVGRI 8:08 Terence McKenna & Anne Armstrong - Disasters Bring People Together
MTJeljGJRgY 49:25 Terence McKenna: The Wordsmith
k-AhCEAVtvQ 3:34 Terence McKenna - Tested To The Limits
s6gaBZUZFHI 8:13 Terence McKenna - The Fire Of Consuming Hope
J8mK4dPna18 11:12 Terence McKenna - Work On What Has Been Spoiled
P7Ltbw9L1VU 9:45:36 Terence McKenna - Turning The Tide
ziqYvPfJcmE 7:21 Terence McKenna - Don't Panic
WjEK2CIK6nY 7:15 Terence McKenna - Viruses and Social Life
7_qxFjk4BIk 5:21 Terence McKenna - We're Inside A Larger Organism
yZQtrzUKj9Q 8:02 The Peculiar Humor Of Terence McKenna (Part 7)
Zs0_ySA__cI 5:21 Terence McKenna - Your Feelings Are Correct
bCYbSFbWoe8 10:17 Terence McKenna - Rearranging The Deckchairs On The Titanic
QJBOMwsGsYs 10:17 Terence McKenna - Searching For Patterns
C0o7JGkM9Fk 8:06 Terence McKenna - The Transmundane Plane
vrvSvxOf2dY 6:43 Terence McKenna - Speech Makes Mountains
_pihM8MjxoE 8:43 Terence McKenna - Everything is Double-Edged
XQrJyR0t67g 5:49 Alan Watts - Give Yourself To The Water
0U2Ag_Za7nc 4:51 Terence McKenna - The Best Stuff Is In Your Own Head
FK-N6ZdDXfc 3:14 We Plants Are Happy Plants - All Of Me
bb_A3kG0tmg 5:56 Terence McKenna - Action Assumes Understanding
YjzsP-8FXO8 3:34 Terence McKenna - Make The Alien Your Friend
Mb_boK7kuhA 8:25 Terence McKenna - Hard Enlightenment
3blPu5GalPY 5:09 Terence McKenna - DMT Chronicles
oyXnLjcncxM 7:45 The Peculiar Humor Of Terence McKenna (Part 6)
OT-bjR8Dxak 36:15 Terence McKenna - The Nature Of Nature
j56caHC--t8 4:21 Terence McKenna - We Need To Do Our Best
r4co3bQr39I 16:25 Terence McKenna - We Don't Know Anything (Belief Is For Kids)
DrsgNo6JuUU 4:58 Terence McKenna - What Life Is For
YiIvoY3ikLs 5:15 Terence McKenna - Strategies For Leaving Earth
mD66opUGI2o 5:19 Terence McKenna - This is an Art
0-pdh1dLPzc 5:01 Terence McKenna - Singing And Synesthesia
K3Xy0AfBszI 6:37 Terence McKenna - Creativity and Alienation
v0VvC4WYKrM 2:54:10 Terence McKenna Digital Revival (Full Series)
6pqBG3Zcy98 7:31 The Peculiar Humor Of Terence McKenna (Part 5)
nWCFrfuPFi8 3:53 Terence McKenna - The Ego Does Not Want You To Take Psychedelics
FXtWoFLG-p4 2:58 Terence McKenna on the Joe Rogan Experience
qSyq7m5-xeY 3:22 We Plants Are Happy Plants - Syzygy
qcFuTVGsX5I 0:11 Terence McKenna - There's No Business Like Show Business
KYsI-4_Ilvo 5:22 Terence McKenna - You Can't Take Materialism With You
r0pdF_FRv7M 2:03 Terence McKenna - Return To Authentic Being
Fsax_JFUQyg 7:12 The Peculiar Humor Of Terence McKenna (Part 4)
dJYoQd4o65k 5:07 Terence McKenna - The Spiritual Life
gNTV7XEpxNg 2:01 McKennAI (Introduction)
7XJHPL90t3o 4:32 Terence McKenna - Love Is The Realm Of True Being
YWEwIzNADv8 7:28 The Peculiar Humor Of Terence McKenna (Part 3)
1brilAv_gFQ 7:13 Terence McKenna - Know Your History
sNR7CmN3ZiM 10:18 Terence McKenna - Jesus Christ (Stories and Controversies)
QrXvIsqRPn4 7:25 The Peculiar Humor Of Terence McKenna (Part 2)
G2OPrIZzHFs 7:00 Terence McKenna - To Groove With What's Going On
DKemHGIsA4k 7:08 The Peculiar Humor Of Terence McKenna (Part 1)
Iaf_L9sO5w8 3:17 We Plants Are Happy Plants - The Way (Official Music Video)
8n0gaCif_x4 5:03 William S. Burroughs - Take Nirvana
PV4qr7xEDw0 4:34 Terence McKenna - You're A Performer
c09UgsmFxp0 2:19 McKenna Sipping Water For 2 Minutes
01EBcUq8_S0 5:50 Terence McKenna - Ideas Are For Play
E3FudiU1r8U 7:31:06 Terence McKenna - The History Of Shamanism
rGJTwqLEsXY 5:31 Terence McKenna - How I Got To Be Who I Am
k2VYcReT4ro 3:16 Terence McKenna - The Truth Cannot Be Repressed
rhrgf0a8c84 7:13 Terence McKenna - The Art Of Memory
Py9gLDk16fM 9:27 Terence McKenna - Just Take Hold Of Yourself
T4w-HS3pUic 0:48 Terence "One Of The Gang" McKenna
0HrK0u2f_dk 3:25 Paul Stamets on Terence McKenna
OnIM9gBEZiA 6:13 Terence McKenna - An Anthill Is A Mind
FJnyQwNDkW0 6:22 Terence McKenna - The Difference
rqcqzv4FcvY 0:22 It's "Terence"
-ZwAUDOhfJE 8:17 Terence McKenna - The Mushroom Said To Me (Compilation)
PeJfgBCs21U 4:13 Terence McKenna - A Message Of Feeling
Hye5MxihJVE 7:12 Terence McKenna - Extraterrestrial Mushrooms
fvRMjcH77iU 0:41 Best McKenna Snippet Ever
SB52qYDgGwQ 1:19 Terence McKenna Has His Cake and Eats It Too
yijwlGeOlOM 3:04 Jordan Peterson - The Pathway to Redemption
6YNl7Eaikf0 3:32 Terence McKenna - Reaping The Fruits Of Sowing The Fields Of Mind
Cbbl5xNa-pQ 8:07 Terence McKenna - Play The Game Of Life With A Full Deck
bZkES0bOw0U 2:14 Terence McKenna - Faith In Progress
edtpx9iqC-g 6:54 We Plants Are Happy Plants - The World Is A Labyrinth (featuring Terence McKenna)
6uUdecUFta4 4:32 Terence McKenna - Alien Mind With An Agenda
h4UKAvPTpr0 17:05 True Hallucinations Video Game Walkthrough (Part 3)
PVSXgEYt4NE 2:09 We Plants Are Happy Plants - Alchemical Morning
ijA5RHTJaV4 12:09:24 Terence McKenna - The Mystery Of Language
6CC_em2fn-I 6:13 Terence McKenna - Ritual Is A Substitute For Understanding
tF2q_V582i8 4:46 Terence McKenna - Live In The Light Of Paradox
6j1D6s8vjdw 4:00 We Plants Are Happy Plants - Rites Of Spring
5pjlpgkJpUg 39:44 Terence McKenna - Ecological Crisis (Video Compilation)
MYl7Pjm2bT4 2:01 Alan Watts - We Put Ourselves In Boxes (Rare Footage)
6sg5XwPnRS0 3:34 We Plants Are Happy Plants - Your Happiness (Featuring John Lennon)
ICifGzyR1gE 5:49 Terence McKenna's Vision For Humanity
khvJbfoAnqU 23:46 True Hallucinations Video Game Walkthrough (Part 2)
PytgplWvBWs 4:42 We Plants Are Happy Plants - History Ends In Green
vs7a_tkF0Iw 3:16 We Plants Are Happy Plants - Nature Is A Teacher
msvESq62PTo 2:11 The Plants Return
a92EZz6IQRA 19:04 Terence McKenna Digital Revival - The Buddha Blues (Episode 12)
OxgLgwIfPSM 26:52 Terence McKenna Interview 1992 - Digital Revival Series (Episode 11)
EPhuBLV0f1E 17:52 Terence McKenna Digital Revival - Shamanic Drumming (Episode 10)
XtUmaSKOZDE 20:25 Terence McKenna Digital Revival - Are We Changing The World? (Episode 9)
Myw2V4gInTY 16:11 Terence McKenna Digital Revival - LSD Studies (Episode 8)
ez1GUqlgq3w 5:01 Terence McKenna Witnesses A Miracle (420 Special)
XvsjzrBdT-A 12:02 A Day In Prague With Terence McKenna (Digital Revival Series - Episode 7)
cy7WTprLjlU 21:42 Terence McKenna Digital Revival - Intuition (Episode 6)
1YwyaSqcVIw 13:09 Terence McKenna Digital Revival - Poetry and Nature (Episode 5)
xg_dKzZMoTI 17:07 Terence McKenna Digital Revival - Alchemical Mysteries (Episode 4)
s2F_JFtAmvM 12:26 Terence McKenna Interviews Ralph Metzner (Digital Revival Series - Episode 3)
BrcfKO1azc8 20:25 Terence McKenna Digital Revival (Episode 2) - The Water Birth Method
YMJ8cQi5pfQ 13:53 Terence McKenna Digital Revival Series (Episode 1) - Alien Abduction Experiences
JajxYcZI2R8 2:48 Terence McKenna - Vortexes Of Connectedness
YGqZ6tjJOzQ 0:45 Terence McKenna Lives On In Cyberspace
7wBa488-JDY 2:30 Terence McKenna - We Are Being Manipulated
QNmGbiIARKA 4:00 Alan Watts - The Force Of Love
jVwfmarlwhM 6:01 Terence McKenna - Find The Others
x7L87cPWD8U 3:48 Terence McKenna - The Gaian Fury
_dfuZPiicAw 3:24 Terence McKenna - It's Not Too Late!
SiPe1Cx1X4c 2:53 Terence McKenna - The Big Questions
DR0PNLFJHn0 5:18 Terence McKenna - Discipline Yourself
23lbZz4fj4s 4:22 Terence McKenna - We Are Amnesic
E__bB38ct6w 5:29 Terence McKenna - Have Your Mantras Polished And Your Yantras Ready
CikveyZjum4 5:52 Terence McKenna - Hard Truths
f5_R1C0tqSU 4:21 Terence McKenna - The Impulse
equlEnNzGJ8 22:53 True Hallucinations - The Game (Walkthrough Part 1)
hl28tz5JDJI 4:53 Terence McKenna - Our Destiny
7O3GLn78CAA 7:45 Terence McKenna - The Final Illusion
By7T4SyGhPU 1:31 True Hallucinations - The Game (OUT NOW!)
Hn0GQMPkKU8 3:48 Terence McKenna - Something We Lost
IhozWjUMEwM 4:21 Terence McKenna - Two Funny Stories
FNUvHA_6Jf0 4:45 Terence McKenna - The Tale Of Sophia
iXbDfIEbVUE 6:48 We Plants Are Happy Plants - Scepter Of Power
11U8-mDleZM 3:42 Terence McKenna - The World Is Magic
G3xUd6e06T0 6:19 Terence McKenna - We Are Language
Tbx5vHePL-4 2:15 Terence McKenna - Why Are Boys In Charge Of Everything?
M3i4Zcld30g 3:01 Jordan Peterson - Just People Putting Their Lives Together
K2zn8Ouwcmw 3:20 Terence McKenna - Is Man Good?
UH3P5XzTNQE 2:29 Terence McKenna - The Hunt
s0xn03i9DRA 4:42 Terence McKenna - Virtual Reality
HfcqC88tQJk 1:44 Terence McKenna - Iosteck and Pinkastairs
GQ5_rlIdnbs 1:26 Terence McKenna - Plants Which Hold The Gods
CfUDLW8v8KE 3:34 Terence McKenna - Mama Matrix Most Mysterious
V-E8Aun0P3s 21:15 Terence McKenna Tells A Story From Greek Mythology
55RzIdrTwAQ 2:31 2001: A Shamanic Journey (Explained by Stanley Kubrick)
iPzRme85KIQ 8:16 Albania Roadtrip
zLcZLfF8eH8 5:16 The Mushroom Hunter - Paul Stamets
qRfH0LocDUU 5:13 Terence McKenna On Taoism
gk_nhjzvN8k 1:01 Terence McKenna - You Must Humble Yourself
LNJ8jfz9Nm4 2:21 Jordan Peterson - Conservatives And Liberals
ONvyz1AThLc 4:02 Terence McKenna - Electronic Tribalism
uJjR3aUhsOk 26:30 Terence McKenna - Self Transforming Elf Machines
sH43VpDkERc 1:01 Terence McKenna - Meeting With My Publisher
wJWGCF1NTiw 5:01 Terence McKenna - Paradise Lost
o2rpkM846Ic 5:28 Terence McKenna - Humanity Has A Purpose
W0kNgji6kzM 1:37 Terence McKenna - Culture Is A Flight From Reality
-kB-Vrrjjyo 18:33 How To Save The World - Terence McKenna
X7ghslwtrJc 9:32 Terence McKenna - Ideology Has Poisoned The Last Thousand Years
0BXZst265Es 6:02 Book Review
V3ADKHMwSoI 1:25 Jordan Peterson Explains Consciousness
EhR-Qm0mc-s 7:02 Terence McKenna Explains Everything
DGISua0YrEU 4:55 Terence McKenna - Private Miracles And Channeling
oN93Lbh_uPg 4:22 Terence McKenna - Communities Fragmented And Suspicious Of Each Other
YL3b47OMOoA 5:27 We Plants Are Happy Plants - Way Of The Wizard (Jewel In The Lotus Version)
52sot1dhEGo 7:52 What's On My Bookshelf?
jim0L_e2kc4 5:35 Terence McKenna - The Coming And Going Of Male Ego
HpP1izuTeus 4:35 Alan Watts - The Happening
17fw4nEUlO4 3:37 Nothing Lasts - Terence McKenna
8_MWyOastoY 3:18 Terence McKenna - Astrology
_r16TDBLI9Y 10:42 John C. Lilly - Looking Into Inner Space
1p5s3jHpeKk 4:22 Terence McKenna - All About Plants
aQKM8LUGLt8 3:43 Terence McKenna - Magical Connectedness
QkDdojfTgbg 2:03 Terence McKenna on John C. Lilly
lAFJEKnWwiU 14:02 Terence McKenna - Thoughts About Death
Lvv8HhTw0D8 3:01 Men Are The Creation Of Choices Made By Women - Terence McKenna
AJdqvnUEE-k 1:46 Anxiety Is Inappropriate - Terence McKenna
3CvkTDyMOx0 0:29 When The Moment Comes - Terence McKenna
Ecyo5NOCi54 6:32 Jordan Peterson Easter Message
ipqUz7EwjZs 3:22 Terence McKenna - Check Your Beliefs
0iOCeQBVyIA 9:36 Terence McKenna - All About Mushrooms
k7eJOKAPZxo 6:00 We Plants Are Happy Plants - Not Waiting For Anything (Variation On A Theme)
GilviNXq3LM 4:21 Terence McKenna - We're Burning Our Bridges
uHM-NN71F-U 3:37 Jim Carrey's Art and Paintings
ZQaJaLvdBZU 1:59 Terence McKenna - My Website
F4Zmvq67rgU 3:27 What Is God? - Terence McKenna
btJpNVMQwQQ 2:20 Marxism And Capitalism - Terence McKenna
LpPu663buHg 3:26 This Garden Party Is Over - Terence McKenna
8OGKc3MYlP0 22:29 Terence McKenna - Memories
HLZ75T6xX3c 15:09 Terence McKenna - Embedded In Biology But Transcendent To It
qXVytj4S_M0 1:11:15 We Plants Are Happy Plants
QFAZ-xRrkDg 0:56 Terence McKenna - Why Us?
kztxwCsn9pk 1:56 Terence McKenna - All Flows
S8id3RQK2ew 10:12 Terence McKenna - DMT: The Weirdest Thing
e0Pzc6eCu08 8:25 Terence McKenna - I'm An Alienated Intellectual
-NLfXHL-2MM 5:46 What Is This Channel All About?
b4S-eH-1PTw 9:48 All About Shamanism - Terence McKenna
kLLUHioKKdE 6:10 We Plants Are Happy Plants - Beyond The Beyond
DpqUn_szhhU 4:37 Terence McKenna - San Francisco State Strikes 1968
66LFkWyCmuU 2:31 John C. Lilly - Go With The Indeterminate Flow
iRNTd-dS0vo 1:37 John C. Lilly - Creativity Is Uncertain
tdu6iN0CM3s 4:36 Jordan Peterson - Don't Strive For Happiness
DenxHRuaZ50 10:00 The Best Terence McKenna Quotes Of All Time
tnGI8aADZro 3:38 Jordan Peterson - Food Of The Gods (The Mystical Experience)
wqfpSAf1Y6o 2:08 Terence McKenna - Who Knows The Answer?
EmzppDaX0_o 3:41 Take Nature As A Teacher - Terence McKenna
olvVeDDqv2w 3:51 How Weird People Shall Be Allowed To Be? - Terence McKenna
FJonUTXopBY 1:14 JBP Drinking Coke
w8M7t-gbwCk 14:22 We Plants Are Happy Plants Live At Toldi (2017)
NQS7ziJ02l8 3:13 Go Forward Into The Shamanic Domain Of The Spirit - Terence McKenna
kO93SAHrd1E 4:01 How Jordan Peterson And His Wife Make Their Marriage Work
ziy-Tuv_vmM 2:09 You Can Beat On The Truth With Ball-Peen Hammers And It Will Do Just Fine Thank You
9CuH0AVAy3s 1:25 Terence McKenna - Sci-Fi Plot Idea
treb7g9nNOE 1:26 Terence McKenna - My Political Stance
bniT_r5VgZw 1:21 The World Is Like A Novel - Terence McKenna
3FqmVITeiwQ 5:09 Terence McKenna - Lizard Land
f924acEAG3M 2:16 Terence McKenna Reads Sailing To Byzantium
ujBzJMbPMFg 16:52 Awakenings Of Jim Carrey
VQ4MpZ9Vbks 3:43 Synchronicity Story - Terence McKenna
I7D0KdKOSXM 4:45 The Perfect Relationship (Meditation) Wouldn't It Be Nice If...
A8mVUPySzLI 9:02 We Plants Are Happy Plants - 9
U6Iglfuyu5s 5:23 The Parable Of The Match Bearer
BhgZXzqOubc 1:24 Terence McKenna MasterClass Trailer
cTgGvPiVwic 4:47 We Plants Are Happy Plants - Downstream
0jQY5E4NUvc 2:12 Jordan Peterson - Jump Straight Up (Remix)
AWHj7Ilaz8E 1:01 A Good Examination Of Conscience - Terence McKenna
hjsl3CzYuY0 2:05 The Reality Of The Transcendent - Terence McKenna
k8Luyrezxfo 3:31 Apocalypse - Terence McKenna
MckOyxy5NIM 4:22 We Addict To Everything - Terence McKenna
EB0JMbr0BPQ 2:41 Terence McKenna - The Secret Adam
CBLSC55FgOU 3:59 We Plants Are Happy Plants - Sands Of Time
-usWe5iOmPM 1:04:37 Terence McKenna - Personal Stories
o7CEzTBQgeA 1:33 Terence McKenna - The Historical Octave
TRZVxFQre6U 1:35 True Hallucinations (New Jim Carrey Movie) Trailer
M42j9p9LKdE 1:56 Terence McKenna - Clear Thinking
dfDthR_yLh0 0:08 Terence McKenna Reaction Meme
zV84ou1NbSA 9:19 Terence McKenna - Jesus Christ (Brief History Of Early Christianity)
mjiWHhvRrgE 3:08 Terence McKenna - The Witch Doctor
3kI-wmdt3_o 1:28 Joe Rogan Falls For Jim Carrey Movie Rumor
IwgMEwIs_kI 2:42 Jim Carrey - There is Just What is Happening
puDtuBCMpxw 2:08 Eternal Life - Maria Szepes
EGeQcPEoizM 2:46 We Plants Are Happy Plants - Guide Me Home
aIsTzobBsNU 1:21 Terence McKenna - The Idea Of Unity
7a9weV8I9Mc 4:39 The Epiphany Of Understanding - Terence McKenna
yjUVFA-aIJw 5:24 We Plants Are Happy Plants - An Incredible Pearl
JNotQ_gKq0s 5:02 Terence McKenna - Ayahuasca Stories
psgccV9i6HU 4:02 Terence McKenna - Tripping With Other People
CyB5VwSCoCc 3:59 Terence McKenna - When I Was Schizophrenic
no5PTajeEa8 2:16 Terence McKenna - Mushroom Tea At A London Party
FdXNHgmS9H8 4:01 Seth Speaks - The Validity Of Your Being
T9fg20CcltE 1:56 Terence McKenna - Rome Falls Nine Times An Hour
KT981LRibP8 5:08 Terence McKenna - Strange Things At La Chorrera
3R8FDHu7AqY 4:41 Terence McKenna - A Weird Experience
dYMz_UArCAo 1:41 Rats Are So Afraid Of Cats - Jordan Peterson (Remix 2)
ysvWrqLpTM8 3:15 Terence McKenna - Let's Create A New World
W6gaFOtZI5w 3:19 IMAGINATRIX - Terence McKenna
APqkta_1OYY 1:45 Terence McKenna - Something Is Going On In This Species
i6DrTfegMtY 5:27 We Plants Are Happy Plants - An Incredible Pearl (Featuring Terence McKenna)
r3VF7fIyRtg 2:41 Jim Carrey Set To Play Psychonaut Terence McKenna In New Biopic?
-LD5tU9a3hk 1:52 Terence McKenna - To Make Language More Poetically Compelling
aUeickoampI 1:46 Terence McKenna - Making Sense
G1fxGm_l1J4 4:04 We Plants Are Happy Plants - Hermes Thrice Greatest
JB0mb26M9VY 2:29 Terence McKenna - If Anything Undoes Us, This Will Be It
2475UMbj19I 1:14 Terence McKenna - The Truth Will Be Persuasive For Those Who Doubt It
sdbJicB0go0 3:23 We Plants Are Happy Plants - Wind Of Intuition
ZELaYHgCDs8 1:28:36 Terence McKenna - The Future Of Art (Esalen 1998 August 7)
G2aA8n6suKY 3:51 Terence McKenna - Cyberspace Is A Land Of Opportunity
E0gyOk8wqeg 0:29 The Bohemian Impulse
B8aVtYTdkhQ 4:13 Terence McKenna In Thailand
hvRkr6fdRxc 3:37 Terence McKenna Reading List
ePO5jbLF2NY 4:58 Terence McKenna Debunks Crop Circles In Under 5 Minutes
3r7V3oRYLJI 6:37 Terence McKenna - Plain Talk
UYV7uPLVNXY 2:39 Terence McKenna - I Was Flaming And It Took Me Years And Years To Dial It Down (True Hallucinations)
WeL83yuTVao 0:51 Terence McKenna - We Look Like Everybody Else
CuiPzPV6nw0 1:08 Jordan Peterson as Jerry Seinfeld
BCMTi9AU_5Q 8:09 Terence McKenna - Growing Up
dOy7v44WE2o 2:14 Terence McKenna - Curiosity
i4sB3agikXI 3:50 Terence McKenna - Transformation Of Man Into A Galaxy-Roving Bodhisattva
54JA1AHqnI8 1:10 We Have To Awaken To Our Past - Terence McKenna
L3b-FB_2-nk 7:24 We Plants Are Happy Plants - Not Waiting For Anything
wieYC04FAcw 1:06 Terence McKenna - Show!
bg5mE5yp-5g 3:04 Jordan Peterson - Plan Your Future
EpZzkNBqOJQ 2:47 Terence McKenna - Anarchy And Social Responsibility
qDSeL8wSN20 6:10 Jordan Peterson - I Suffer Therefore I Am
uJBgj8U3lw0 4:34 Jordan Peterson - Psychedelics
WVGPoAofey8 1:01 Terence McKenna - You Can Give It A Theme
cQvd8a1Z6vo 5:15 Terence McKenna - Evolution Of Language
pUqBbOzBZ5Y 2:19 Jordan Peterson - Rats Are So Afraid Of Cats (Remix)
Q2IJ9ZTLfY0 6:46 Terence McKenna - Transition
9apmGBM-hiI 1:49 Jordan Peterson - Stories And Myths
_VlJCtPAmbg 3:58 Terence McKenna - Lisbon Interlude
MdsVC_qR4t0 5:34 Jordan Peterson - Nihilism, Totalitarianism, and The Divine Individual
Oiog0RHir8A 2:34 Trigger - Ralph Abraham, Terence McKenna
i3S2ftdAHdw 0:56 Was Terence McKenna CIA?
0FRrjqSm0vo 1:31 Religion - Terence McKenna
64IPmS_87UM 6:32 My Trip to Thailand and Cambodia
4DbWAMWPCKs 3:00 Bullshit - Terence McKenna
7pLiUd5N_Cg 3:14:17 Terence McKenna Meme Movie (FULL HD)
syhZ_0loMZk 3:27 We Plants Are Happy Plants - Full Of Sound (Variation On A Theme)
1aMZrc3uv5M 0:43 11 16
cgDOvJg3-dQ 9:37 We Can Make A Difference - Terence McKenna Environmental Speech
czGSwEvblRI 2:57 An Entirely New View Of What Time Is - Terence McKenna
RCnJVTT9vyk 2:40 Revolution - Terence McKenna
2aW9IUDPdNk 2:01 The Mind Is Poised On A Precipice Of Incomprehension - Terence McKenna
FpMlrRbOJHI 1:40 Absence Of An Emotional Vocabulary - Terence McKenna
ubQ5sWxvr4U 1:36 People Raving On Streetcorners About The Approaching Doom - Terence McKenna
75iR-P7QlSo 5:35 Two Kinds Of People, Artists And Marks - Terence McKenna
mJLXr9OXlDk 0:40 Steve Buscemi As Terence McKenna (2)
osDZ9j69EqU 1:25 A Standard Story Of Mine - Terence McKenna
2HKGxcDw27s 1:38 The Dialogue - Terence McKenna
TdthFYYrpGc 1:32 Noetic Archaeologist - Terence McKenna
R7lKPDNSa-g 2:51 Rational Discourse Conducted At High Volume - Terence McKenna
-MGX_VxLbOw 0:47 Terence McKenna On Meeting Carl Sagan (2)
Kt5btMF4LGQ 1:08 The Fate Of A Whole Planet - Terence McKenna
l1x3c7o_J40 0:55 To Be Able To Stand Up And Yell 'Bullshit!' - Terence McKenna
dJJKBtbyfeY 3:34 Science Is The Plumbing Level Of Reality - Terence McKenna
hWqdZIrG1q8 1:14 I Sorted Through Just As I Assume You Are Doing - Terence McKenna
An8X9myD7SQ 1:39 A Feeling Of Optimism And Wholeness - Terence McKenna
ZA1aOcF-Aag 2:08 Terence McKenna Describes European Thinking Of The Early 17th Century
fRUpjfN-Ihg 2:07 What Is My Reality? - Terence McKenna
RIsK65Hc3nM 4:10 Our Role Is Not To Understand But To Appreciate - Terence McKenna
U0eyaBmz3Mg 1:36 We Want More Consciousness - Terence McKenna
Hr3f6gIz0-k 4:17 The Forward Escape - Terence McKenna
pAZ7tLLJDXU 0:29 Funny Terence McKenna Soundbite
_zKpweQyNtI 2:24 The Tao Of The Ancestors - Terence McKenna
qRFfjmBJwFg 1:31 Democracy - Terence McKenna
NQwGZojmwDM 7:53 Terence McKenna Rave Session
kjG8AaLjR9k 3:22 Recordings Which People Find Extremely Alarming - Terence McKenna
pOvmnc2BTrQ 4:31 Moving The Boundaries Of What Can Be Said - Terence McKenna
_Lcmd-bMlAE 10:00 We Plants Are Happy Plants - Razz (Shift Of Consciousness Mix)
5XMfIgA7ZUU 3:23 One Of The Hardest Evenings I Ever Spent - Terence McKenna
A-cYANDZ_Mo 0:45 Steve Buscemi As Terence McKenna
J1MAd9LpCxE 2:31 Half In and Half Out - Terence McKenna
qN3NLeKMImk 3:08 The Famous 55 Gallon Drum - Terence McKenna
YtROWN9angY 1:15 The Tim Award - Terence McKenna
xwucF9MKJM8 0:45 Captain Ahab In Space - Terence McKenna
E7wITcn0StM 11:56 The Jackalope - Terence McKenna
WjONF4Uqt5c 1:27 You're As Good As The Dalai Lama - Terence McKenna
zZoQwKUwjXc 6:11 A Story Of True Hallucinations - Terence McKenna
fQSbvZ86Hi4 1:01 Alchemy - Terence McKenna
g4n43UUZ8Y8 0:54 Nature Is Alive
dxkfiKW6BiY 1:35 Terence McKenna Introduction
xuHEfAZpr7s 0:56 Terence McKenna - Language Evolution
lBDPM2JpoCM 3:23 Why Culture Is Not Your Friend - Terence McKenna
sqJYQ_TUC7c 44:48 Terence McKenna - Alchemical Youth On The Edge Of The World (Full Talk)
a9zqS1pMTRA 2:29 Terence McKenna - The Anticipation Of The Unspeakable
NUi_n7k1kyM 30:15 Visual Meditation with 432 Hz Music
zAkrTm3IlYE 6:22 The Real Meaning Of The Holy Grail
xtxuSCyIoq0 0:19 Robert Anton Wilson - The Sad Man Lives In...
Yb8BCUcB2oM 17:15 We Plants Are Happy Plants - Tao (Variation On A Theme)
SoRVFpAjCZ0 1:10 Terence McKenna On Meeting Carl Sagan
ruOH-6fnjKw 5:19 Brilliant Reading Of Moby-Dick by Terence McKenna
9Ejn4APak1w 2:32 Terence McKenna - Meme Theory
y8xAXuHaR9Y 1:29 Terence McKenna - We're Not Bullshitting You
xp0sktrYVAE 6:25 Terence McKenna - Consciousness Research
ktizo51HXBU 0:41 Terence McKenna - The Precondition For Democracy
MBufYdcVk0g 2:40 Terence McKenna Knocks Bill Clinton
6UiAqbqcMxM 2:25 We Have To Send Artists - Terence McKenna
JWPqI5OyiHs 2:51 If You Could Have Anything - Terence McKenna
OAag7w0iRg8 6:12 Terence McKenna - 5DGISD
CYUDWw_MauU 3:22 We Plants Are Happy Plants - Light At Eventide
OkkZZV73ZUM 45:25 We Plants Are Happy Plants - Any Day Now (Full Album)
bLggYY_Ibmk 4:33 Terence McKenna - Tension Over Values
dHFC1BB2gOU 4:06 Terence McKenna And The Howling Tao
7cexhOG4UZY 5:25 Terence McKenna Reads Hermetic Lore
YOG1L7ZMjs0 3:15 We Plants Are Happy Plants - Tipsiness And Rapture
cBKK7Nvk1ZA 1:45 Terence McKenna - Keep The Faith
vO95PjQk0pQ 1:04 Terence McKenna - Up And Out
7MztB_TQLaI 1:16:33 We Plants Are Happy Plants - Time Is A Landscape (Full Album)
e5L_-4yZ2vY 3:08 Terence McKenna - Alien Forms
wGdz1y0kqRM 1:12 Terence McKenna - Energy and Time
h3sndgdol5I 1:43 Terence McKenna - How It Began
mNcKZVVnG9o 0:49 My channel is back!
MXAD6SimTOc 3:42 We Plants Are Happy Plants - In Search Of The Holy Grail
ZWl13ZxYc2s 2:33 Robert Anton Wilson - High And Happy
hUFKa53936o 2:08 Terence McKenna Raves Into The Future
TsutY3dgGJ8 4:33 We Plants Are Happy Plants - Waves Of Eternity
aAcHPkj4aNE 3:09 Inner And Outer Space (Are Exactly The Same)
033b8jN55q0 3:00 We Plants Are Happy Plants - Butterflies
zywkOFcehbc 5:09 Terence McKenna - The Mushroom Speaks
8MG5gFtZ3U8 2:48:44 Terence McKenna's True Hallucinations (Full Movie) HD
tJmNduaK5Sw 4:41 We Plants Are Happy Plants - She Created The Door
WWoiWyHhvcg 0:55 Teaser: Terence McKenna's True Hallucinations (5)
fwK8NRKkSCA 1:22 Teaser: Terence McKenna's True Hallucinations (4)
Qeka6BcHRlc 0:37 We Plants Are Happy Plants - New Album Promo
fhy2l4XmAGg 2:05 Terence McKenna - Money and Donald Trump
1rhgZgL7KhI 6:10 We Plants Are Happy Plants - The First Man In Another Galaxy
6caUfg7XZ24 0:34 Teaser: Terence McKenna's True Hallucinations (2)
_H8oTI2fgns 1:41 Terence McKenna - Falling In Love
CcGgfUiTDaU 4:33 We Plants Are Happy Plants - I Am You
flvXnQdrqEs 4:13 We Plants Are Happy Plants - Vortex
flwyJEWwcbE 1:12 Jim Carrey at a Terence McKenna lecture
bbqc7OdbloA 5:05 Terence McKenna - High Water Weirdness Event
N4pLehjPBZU 5:40 We Plants Are Happy Plants - Life Is Living You
XlBzIecpxfE 16:58 Terence McKenna - The DMT Experience (The Transcendental Object At The End Of Time)
l6osSqvn1R4 1:29 Teaser: Terence McKenna's True Hallucinations
xQXP31A9Rl8 1:31 Terence McKenna - The Dizziness Of The Things Unsaid
4rL_gR-dCT4 6:03 We Plants Are Happy Plants - Euphrosyne
heGCdpuhLso 15:36 Terence McKenna - Last Thoughts (The Transcendental Object At The End Of Time Movie)
8YsLiSYTIJM 7:36 We Plants Are Happy Plants - Razz
PWHWK0pe8SY 4:15 Ralph Abraham - The Sandy Beach (Terence McKenna, Rupert Sheldrake)
H-O6sEaI7nw 4:51 Terence McKenna - The Archaic Revival
Z5rCDfJh9pE 4:37 We Plants Are Happy Plants - The Transcendental Object At The End Of Time
ZpTF8pFDVR4 6:21 We Plants Are Happy Plants - Tao
D2bkYB7kNpo 2:31 TRAILER 2: Terence McKenna's True Hallucinations
F4nGuEVs-JA 3:35 Alan Watts - The Potato Speaks
IMaygY8aagg 3:09 TRAILER: Terence McKenna's True Hallucinations
B__BY-d4nXA 22:18 We Plants Are Happy Plants @ Toldi Mozi (2015)
TX0GZI-lvTE 1:33 Robert Anton Wilson - Belief Systems (BS)
6uqcnfhH1T4 0:13 Terence McKenna - You Can't Go Forward and You Can't Stand Still
fJQ6rvFjmSg 3:31 We Plants Are Happy Plants - Alignment
ZvOGPQydTxw 5:32 Terence McKenna - From Monkeydom To Starshiphood
e0-RH5t47fA 6:04 We Plants Are Happy Plants - One Million Years
sopijO_cftE 1:40 Terence McKenna - The Shaman
oJgyMzfTT9w 3:17 We Plants Are Happy Plants - MK3
5tfMknBJbDk 4:36 We Plants Are Happy Plants - Cloud Hidden
bcRTUen6TcA 4:21 We Plants Are Happy Plants - My Love Song
rkANK7DbHQo 4:44 We Plants Are Happy Plants - Warren Commission
MoB5p-bAkIY 4:57 We Plants Are Happy Plants - The Secret
aAlaRdrcQcY 3:34:49 The Transcendental Object At The End Of Time (Terence McKenna Movie) FULL HD
0Bvf4PpW5m8 4:30 We Plants Are Happy Plants - Mantra Of The Universe
6nLsFix-6e0 1:33 Terence McKenna - You (The Transcendental Object At The End Of Time TEASER)
r42NFBzPk-4 2:37 TEASER: The Transcendental Object At The End Of Time (Terence McKenna Movie)
1r97VpcKgJ4 3:25 The Love Unlimited Orchestra - Bayou (We Plants Are Happy Plants Rework)
2Der6EhLocU 4:51 TRAILER: The Transcendental Object At The End Of Time (Terence McKenna Movie)
pWKZLW_vfTI 5:25 We Plants Are Happy Plants - Way Of The Wizard
N5ot2RmJmZ0 4:01 Terence McKenna - The Future Of The Human Race
97aZ8nC9Wj0 48:05 Daft Punk - Alive 2014 (presented by We Plants Are Happy Plants)
sTSvj37D-zE 4:31 We Plants Are Happy Plants - Tuned In (Official Music Video)
_S9q-phYxmI 5:17 We Plants Are Happy Plants - Apollo
XrcEn5peCik 4:33 We Plants Are Happy Plants - Purple And Blue
XAuEsy6_o2s 6:18 We Plants Are Happy Plants - We Plants Are Happy Plants (Original Mix)
2pPmt9xNj0I 5:29 We Plants Are Happy Plants - Full Of Sound
l9GLDrC3amA 4:12 We Plants Are Happy Plants - Twilight Of The Dawn
16dcYDscO5Q 4:24 We Plants Are Happy Plants - Planetary Exploration
NG-nXMabvO4 4:09 We Plants Are Happy Plants - Lullaby
_7VAScNbTa0 2:42 JJ Abrams - Star Wars (2015)
jaUAs2sPXbs 4:33 We Plants Are Happy Plants - Simply Be Aware
zVayyPuKSI0 0:37 Charlie Gonzo
HXTwB6ANiec 4:39 We Plants Are Happy Plants - Bluebird (2010)
Ty5eZ0ZqSW0 5:29 Cloud Atlas Theme Song (We Plants Are Happy Plants Remix)
SuiPc-F4i50 6:01 Zagar - Wings Of Love (We Plants Are Happy Plants Remix)
d97PjM7g6to 5:10 We Plants Are Happy Plants - Apollo 2012
YfsCnB2oisY 6:09 We Plants Are Happy Plants - Rise And Fall
RC1FPUk5p_4 7:24 We Plants Are Happy Plants - The End
zXL9LVf9VP4 5:02 We Plants Are Happy Plants - M42
wmoFjGqypMs 3:33 We Plants Are Happy Plants - Prelude
yMYM7xe4JNY 6:41 Hans Zimmer - Time (Inception) We Plants Are Happy Plants Remix
WSkzlLIY3ew 3:46 Dec 21, 2012 Terence McKenna - TimeWave Zero
YVHXap0k1rc 6:01 We Plants Are Happy Plants - Love Is Silent
Y-Q20YE9q7E 6:16 Om Namah Shivaya (We Plants Are Happy Plants Remix) 2012 HQ
uC_vFa3FZg8 4:33 We Plants Are Happy Plants - Perception Of Dimensions
byxSazKYnw8 6:16 Om Namah Shivaya (We Plants Are Happy Plants Remix)
_uMSap7ntuw 6:01 We Plants Are Happy Plants - Underneath The Form
1Q8d9MNM-lw 3:33 We Plants Are Happy Plants - Earth Mars Venus (Official Music Video)
fvSX8cA5H78 3:33 We Plants Are Happy Plants - Galactic Spiral Arms (Official Music Video) 432 Hz
sdIlzZMQxVY 3:38 Aaren Reale - Black Part 2 (We Plants Are Happy Plants Remix) feat. Jim Carrey
toq3WTB1fAA 8:55 We Plants Are Happy Plants - Sell Your Soul (Dream Version) and Apollo
RgBQdvKLpCc 4:48 Aaren Reale - Black Part II (We Plants Are Happy Plants Remix)
XhpKOM541gc 3:58 Radiohead - Codex (We Plants Are Happy Plants Remix)
4HMJuRJHa1Y 4:26 We Plants Are Happy Plants - Apollo (HD)
dyCyyPfWMl4 2:17 We Plants Are Happy Plants - My Love Song (New Earth EP Promo)
wiTP02UGsoE 1:12 We Plants Are Happy Plants Live @ A38 03.18.2011
RSghspRAqLc 4:04 We Plants Are Happy Plants - Razz (OFFICIAL MUSIC VIDEO)
wdoG41SYotg 6:14 We Plants Are Happy Plants - We Plants Are Happy Plants
-CNMXnIwEvQ 3:56 We Plants Are Happy Plants - Flatlanders
fDRnt3jktsk 7:23 We Plants Are Happy Plants Live @ U26 (Perfect Audio)
CmQbvv9VZSY 3:08 We Plants Are Happy Plants - Sailing In A Dreamboat (2010)
hh_nYnPGvKE 4:12 We Plants Are Happy Plants Live @ A38 2008
1tvcMbbtsyw 4:14 We Plants Are Happy Plants - Sell Your Soul (OFFICIAL MUSIC VIDEO)
r4IgyZ-NEvk 5:10 We Plants Are Happy Plants - We Wave Goodbye
U9GI3dhjCac 4:20 We Plants Are Happy Plants - Invisible Elephant
18vcPGnmijM 3:59 We Plants Are Happy Plants - Twilight Of The Dawn vs Wonderwall
dzjiCduRVw0 3:27 We Plants Are Happy Plants - Long Live Space Race
9brQTel8SUc 4:56 We Plants Are Happy Plants - Trance Steel

# Culadasa Audio Archive

# UG-0XGpesgs 39:10 Sit, Breath, Wake Up! Meditation #1 - Culadasa
# IeXWFRs5cGk 42:45 Sit, Breath, Wake Up! Meditation #2 - Culadasa
# SRqXq570Cf0 45:40 Sit, Breath, Wake Up! Meditation #3 - Culadasa
# aNFc4veG61E 20:10 Sit, Breath, Wake Up! Meditation #4 - Culadasa
# LBDV7jmZL8s 51:40 Sit, Breath, Wake Up! Joy, Meditation #7 - Culadasa
# gB4_JS4jsb0 34:20 Sit, Breath, Wake Up! Meditation #5 - Culadasa
# nbvx7K_Zh0U 45:25 Sit, Breath, Wake Up! Still Point, Meditation #8 - Culadasa
# SpTDGyhoFho 24:55 Sit, Breath, Wake Up! Metta, Meditation #9 - Culadasa
# 4XGLpEJBq5c 1:59:40 Sit, Breath, Wake Up! Part 1, Including Meditation - Culadasa
# xySz7-vJbjo 1:24:50 Sit, Breath, Wake Up! Part 2, Including Meditation - Culadasa
# Ok347OnJyYc 1:38:25 Sit, Breath, Wake Up! Part 4, Including Meditation - Culadasa
# -lYvn_JxiaM 1:14:50 Sit, Breath, Wake Up! Part 3, Including Meditation - Culadasa
# Mw0GWsCYSho 1:52:30 Sit, Breath, Wake Up! Part 7, Including Joy Meditation - Culadasa
# pyFa9lezeLE 49:45 Sit, Breath, Wake Up! Part 5, Including Meditation - Culadasa
# F-SO2jLEl94 59:00 Sit, Breath, Wake Up! Part 6 - Culadasa
# mtdUEXGAxIc 1:17:05 Sit, Breath, Wake Up! Part 8, Including Still Point Meditation - Culadasa
# DBrpnFgXZY4 1:05:15 Sit, Breath, Wake Up! Part 9, Including Metta Meditation - Culadasa
# F1qKILcv9eA 1:30:55 tcmc-weekend-03-22-2013a-trim-lc-amp-comp
# 8d0NJNnc90E 1:16:55 tcmc-weekend-03-23-2013c-trim-lc-amp-comp
# ZReyxVVZlHA 52:50 tcmc-weekend-03-23-2013b-trim-lc-amp-comp
# Jd-ymGtmsAs 1:23:10 tcmc-weekend-03-23-2013d-trim-lc-amp-comp
# 1fesc0JmB0s 1:17:10 tcmc-weekend-03-24-2013f-trim-lc-amp-comp
# oDAWRHX1ez8 1:17:00 tcmc-weekend-03-23-2013e-trim-lc-amp-comp
# 6UzBUJCMDLM 50:45 tcmc-weekend-03-24-2013g-trim-lc-amp-comp
# Os78CbIOCaU 1:13:15 tcmc-weekend-03-24-2013h-trim-lc-amp-comp
# -VgYwj3QLY8 1:28:35 tcmc-weekend-03-24-2013i-trim-lc-amp-comp
# xwIuNvfs3-A 1:14:40 The Path to Awakening in Daily Life, Part 1 - Culadasa
# akF9g-7p18g 1:11:10 The Path to Awakening in Daily Life, Part 3 - Culadasa
# EsyJiZJ7y4Q 1:04:40 The Path to Awakening in Daily Life, Part 2 - Culadasa
# Ay3t8b-I9xk 1:19:15 The Path to Awakening in Daily Life, Part 4 - Culadasa
# uFDhnyJzzLE 55:55 The Path to Awakening in Daily Life, Part 5 - Culadasa
# iqBvQ_b0zEE 1:09:30 The Path to Awakening in Daily Life, Part 7 - Culadasa
# 8Y9wpzzarAc 1:01:50 The Path to Awakening in Daily Life, Part 6 - Culadasa
# 2k-NO_vUAqk 40:50 The Path to Awakening in Daily Life, Part 8 - Culadasa
# 4E2e3AZZuVw 38:50 Discussion about the Anapanasati Sutta - Culadasa
# jVoK8u6LDMM 46:25 The Magic of Mindfulness, Part 1 - Culadasa
# Ds5Um2pZ2a8 1:23:15 The Magic of Mindfulness, Part 4 - Culadasa
# zF6rkzTtvI4 1:15:40 The Magic of Mindfulness, Part 3 - Culadasa
# N_HB_wpsmOc 35:55 The Magic of Mindfulness, Part 2 - Culadasa
# -7rQQq9FI4E 45:25 The Magic of Mindfulness, Part 5 - Culadasa
# 6wmmWA-oxVk 1:25:10 The Magic of Mindfulness, Part 8 - Culadasa
# 6jQ6pXPu8gM 37:00 The Magic of Mindfulness, Part 6, Guided Meditation - Culadasa
# oXOrlj_Us8Q 1:01:30 The Magic of Mindfulness, Part 7 - Culadasa
# -6D8fCaLGqw 1:28:10 The Magic of Mindfulness, Part 9 - Culadasa
# Ce_M5w83mMo 1:35:50 The Magic of Mindfulness, Part 10 - Culadasa
# Xiz1DkB1JeU 46:40 The Magic of Mindfulness, Part 9, Meditation Only - Culadasa
# KdQRPJsCpV0 43:25 The Magic of Mindfulness, Part 11 - Culadasa
# 5RxJHGQIo6c 34:35 The Magic of Mindfulness, Part 11 - Meditation Only
# WbqhyGbIkic 1:49:15 Meditation and Insight, Part 1 - Culadasa
# holYpHpF_v8 1:17:45 Meditation and Insight, Part 2 - Culadasa
# G_X9f5tPcv0 1:27:05 Meditation and Insight, Part 3 - Culadasa
# BdNzQ5mpMPM 1:16:15 Meditation and Insight, Part 4 - Culadasa
# dp1YUUw9_xQ 44:20 Meditation and Insight, Part 5 - Culadasa
# pUJGCaaECnY 22:40 Meditation and Insight, Part 3, Meditation Only - Culadasa
# X3I8gD_VuH0 1:17:30 Meditation and Insight, Part 6 - Culadasa
# litqY-oF1DY 1:09:15 Meditation and Insight, Part 8 - Culadasa
# irovcJniM34 45:30 Meditation and Insight, Part 7 - Culadasa
# xGDw947qcO4 47:55 Meditation and Insight, Part 9 - Culadasa
# om9lc05kShI 1:11:20 Meditation for Peace, Part 1 - Culadasa
# XWs7iJuRlNk 1:03:05 Meditation for Peace, Part 2 - Culadasa
# gc4OIzNCzJE 1:18:10 Meditation for Peace, Part 4 - Culadasa
# i2smsi-Po5s 1:00:25 Meditation for Peace, Part 3, Meditation Followed by Discussion - Culadasa
# _c0SvbC3n0E 1:04:45 Meditation for Peace, Part 5 - Culadasa
# _O0HwUi4L8M 19:45 Meditation for Peace, Part 6 - Culadasa
# X2I1Xkpu1ao 1:05:35 Meditation for Peace, Part 8 - Culadasa
# w5yfStrGXZs 46:25 Meditation for Peace, Part 7, Guided Metta - Culadasa
# PbKB7L3wXN4 1:37:35 Joy & Meditation, Part 1, Introduction - Culadasa
# 4h_jZo7D8nY 52:25 Joy & Meditation, Part 3 - Culadasa
# pnVa5LOFYMI 12:45 Joy & Meditation, Part 2, Meditation - Culadasa
# Xfj-XisH-f8 33:35 Joy & Meditation, Part 4, Guided-Meditation - Culadasa
# WuHTnUFJvTY 57:45 Joy & Meditation, Part 5 - Culadasa
# x8f4ywGuz7E 1:05:40 Joy & Meditation, Part 6 - Culadasa
# 5P-EcrWA3JE 56:05 Joy & Meditation, Part 8 - Culadasa
# QdWx1DyPoG4 34:55 Joy & Meditation, Part 7, Guided-Meditation - Culadasa
# VvWGrbkl7XU 27:10 Joy & Meditation, Part 9 - Culadasa
# GEJPm0EpZIY 1:20:00 Joy & Meditation, Part 11 - Culadasa
# -UjegcD2NOI 40:25 Joy & Meditation, Part 10, Guided-Meditation - Culadasa
# kLLUeGyKLFw 39:20 Joy & Meditation, Part 12 - Culadasa
# 7pXwbEuqlds 49:00 Joy & Meditation, Part 13, Closing Meditation - Culadasa
# sJ02xiHY1KI 1:14:25 What Is Enlightenment, Part 1 - Culadasa
# hM2qhko-5V0 53:10 What Is Enlightenment, Part 2 - Culadasa
# gTTbURalWwY 1:27:35 What Is Enlightenment, Part 4 - Culadasa
# 6udxIzA9B8I 50:05 What Is Enlightenment, Part 3 - Culadasa
# GoiFe39LKiE 1:19:25 What Is Enlightenment, Part 5 - Culadasa
# aOKWj4Kk2rg 1:14:05 What Is Enlightenment, Part 6 - Culadasa
# BwmcPn-7oMI 1:41:10 What Is Enlightenment, Part 7 - Culadasa
# JwpiFIrG4bk 1:27:35 When the Buddhadharma Came to the West, Part 1 - Culadasa
# ARdWVSNy7U8 1:23:45 When the Buddhadharma Came to the West, Part 3 - Culadasa
# gGKT2sxn2Vs 1:17:10 When the Buddhadharma Came to the West, Part 2 - Culadasa
# hoik390Dg9k 1:13:40 When the Buddhadharma Came to the West, Part 4 - Culadasa
# R3nftLD2eMA 52:55 When the Buddhadharma Came to the West, Part 5 - Culadasa
# 8sEeiWdGW-o 1:38:00 When the Buddhadharma Came to the West, Part 6 - Culadasa
# sMPeNHk6Srs 1:16:10 When the Buddhadharma Came to the West, Part 8 - Culadasa
# S9xqIz51SbM 29:10 When the Buddhadharma Came to the West, Part 7 - Culadasa
# TJcy0n9NnKI 1:29:25 The Jhanas, Part 5 - Culadasa
# qstlQPwmHq8 4:25 How Do We Project Reality - Culadasa
# oufkssKC5qA 4:15 How Do I Meditate - Culadasa
# WLx5Fvh91eE 30:45 The Jhanas, Part 6, Meditation - Culadasa
# YplfDrwaZNA 59:00 The Jhanas, Part 4 - Culadasa
# HeZuKlcaRTs 1:23:40 The Jhanas, Part 3, Meditation and Discussion - Culadasa
# 3z3Mt0Bw4GE 1:20:00 The Jhanas, Part 2 - Culadasa
# M8vpuW34HcI 1:36:35 The Jhanas, Part 1 - Culadasa
# YZSsmNBUWEw 1:14:15 Meditation for Peace, Part 1 - Culadasa
# xY7BdB32DEk 1:06:35 Meditation for Peace, Part 8 - Culadasa
# YiO0UpLWbcA 48:00 Meditation for Peace, Part 7 - Culadasa
# wc-EslQfkDU 1:05:50 Meditation for Peace, Part 5 - Culadasa
# DQG0WzQTZfI 1:21:15 Meditation for Peace, Part 4 - Culadasa
# AT9ZRu_4XMY 19:55 Meditation for Peace, Part 6 - Culadasa
# qsgmBFeb5Cw 1:01:35 Meditation for Peace, Part 3 - Culadasa
# rBerwigAmAQ 1:04:00 Meditation for Peace, Part 2 - Culadasa
# tbF2gwJLEWQ 1:06:35 Meditation for Peace, Part 8 - Culadasa
# WB76phVVvsA 1:21:15 Meditation for Peace, Part 4 - Culadasa
# ApfkpAp3aC0 1:14:15 Meditation for Peace, Part 1 - Culadasa
# An5pQGuPyRk 1:05:50 Meditation for Peace, Part 5 - Culadasa
# Hwd9DnGRjpg 1:01:35 Meditation for Peace, Part 3 - Culadasa
# 90JkxrK8QjM 1:04:00 Meditation for Peace, Part 2 - Culadasa
# hYYjVAJfOPM 48:00 Meditation for Peace, Part 7 - Culadasa
# ENWUs9QqTCU 19:55 Meditation for Peace, Part 6 - Culadasa
# 5mlUleMSiTQ 1:38:30 When the Buddhadharma Came to the West, Part 6 - Culadasa
# lsNaJVfKwZs 1:16:10 When the Buddhadharma Came to the West, Part 8 - Culadasa
# VAPcuZvr9JA 1:29:15 When the Buddhadharma Came to the West, Part 1 - Culadasa
# q1NkYOCYlA4 1:14:10 When the Buddhadharma Came to the West, Part 4 - Culadasa
# KvG4Rw0YuJY 1:24:25 When the Buddhadharma Came to the West, Part 3 - Culadasa
# ZpBlVT8okLQ 54:25 When the Buddhadharma Came to the West, Part 5 - Culadasa
# 3UVOXvaG6z8 1:18:20 When the Buddhadharma Came to the West, Part 2 - Culadasa
# unnYRQF04BE 29:15 When the Buddhadharma Came to the West, Part 7 - Culadasa
# wpj0hT4_dwk 22:35 What is the Space Between Thoughts? - Culadasa
# WUYh-0Tkvjk 17:10 The Five Aggregates and “No-Self” - Culadasa
# mStFqLFqXRA 31:30 Piti (Joy) - Culadasa
# zPv549Jmia4 18:35 What is Karma? - Culadasa
# ROwydcA-Mkc 17:40 Will Power and Achievement - Culadasa
# pgK3cLIO5DM 21:30 Motivation for Morality - Culadasa
# Wprau239F-E 11:55 Progressing on the Path - Culadasa
# oOCtnXOL6mk 10:50 Silence of the Mind - Culadasa
# krRHH83qbiU 20:30 How to Develop Introspective Awareness - Culadasa
# ud6Ndl6i2rE 2:25 Walking Meditation - Culadasa
# PSal7mqWPps 3:50 Subtle Distractions and Gross Dullness - Culadasa
# ourDJ0u2Xbo 7:30 Role for Psychedelics in the Path - Culadasa
# M7G5Xt5GRb8 4:45 Is the Hologram a Good Model for Ultimate Reality? - Culadasa
# MflPS9FAV5E 5:25 How Does the Mind Create the World? - Culadasa
# 2aQgp47Fknc 4:25 How Do We Project Reality? - Culadasa
# kCkR5wINMBA 4:15 How Do I Meditate? - Culadasa
# oTBUDL8SfwU 15:55 Can Suchness Be Reduced to Energy? - Culadasa
# IVUYdz_yzAw 9:20 Concentration vs Blissful States and Dullness - Culadasa
# Qvb1JL94ikU 5:30 Focus on Sensations vs Absorption at Stage 4 - Culadasa
# nFMPD65ccTI 9:10 A Model for Understanding Dullness - Culadasa
# u-FD7WijOxk 1:00:10 TCMC Thursday #20, Part 2 - Culadasa
# 5yrF0tBrnP4 1:00:15 TCMC Thursday #10 - Culadasa
# vBrDgkMNh3Q 1:50:05 Bisbee Zen Sangha Lecture - Culadasa
# pO2ChM2NFgY 1:53:45 Q&A - Culadasa, Stronghold Retreat #1, Part 5
# cVU1rikYX9Y 45:25 Guided Meditation, TCMC Weekend #1, Part 7 - Culadasa
# 5_KI-CwG37c 1:04:40 TCMC Thursday #28, Part 2 - Culadasa
# uw3S_pDNjkQ 1:18:05 UWest Meditation Camp #2, Part 1 - Culadasa
# 8smu6ilczdI 54:45 Uposatha Day #26 - Culadasa
# jCLVsQIdY8w 1:08:57 TCMC Thursday #27, Part 2 - Culadasa
# 0P3Yyat-BaY 46:00 Uposatha Day #27 - Culadasa
# 1R9xgzbRF5Q 6:20 Tips on Developing Full-minded Awareness with Concentration (Stage 5) - Culadasa
# W3xULt6Uatc 39:15 TCMC Thursday #28, Part 1 - Culadasa
# rm9zAOF0mr8 29:25 TCMC Thursday #27, Part 1 - Culadasa
# id7tS03tufI 57:20 TCMC Weekend #1, Part 9 - Culadasa
# e7W5JRI1c8g 1:18:50 Uposatha Day #23 - Culadasa
# -pqILBXTL0A 1:10:15 Uposatha Day #20 - Culadasa
# lQBtlKV-8A4 13:30 Can a Cessation Be an Object of Consciousness? - Culadasa
# vaVhcfOqIVE 1:13:15 UWest Meditation Camp #2, Part 8 - Culadasa
# GC-n9-dWYsg 1:00:30 Uposatha Day #25 - Culadasa
# M22w9lxOtAo 1:07:10 Uposatha Day #22 - Culadasa
# dL02xlODGbI 47:10 Uposatha Day #24 - Culadasa
# eG5VxQUctPQ 1:04:15 TCMC Weekend #1, Part 6 - Culadasa
# uHWxeRv9M5Y 1:39:15 Guided Metta - UWest Meditation Camp #2, Part 10 - Culadasa
# eqL6CsQ3lFg 1:00:15 UWest Meditation Camp #2, Part 6 - Culadasa
# Bv9_koMGnWc 33:30 Uposatha Day #21 - Culadasa
# pyoewXHdww0 1:03:55 UWest Meditation Camp #2, Part 5 - Culadasa
# a9NKE-7GrZQ 1:19:20 TCMC Weekend #1, Part 2 - Culadasa
# wILUJC_sqRY 51:35 TCMC Weekend #1, Part 8 - Culadasa
# R0f7KOhA7Qc 1:12:00 TCMC Weekend #1, Part 4 - Culadasa
# lfPThV3AARs 38:35 UWest Meditation Camp #2, Part 4 - Culadasa
# lTQj8xh-BfM 1:26:30 TCMC Weekend #1, Part 1 - Culadasa
# KdkOwnxE9rY 1:23:50 TCMC Thursday #21, Part 2 - Culadasa
# hqnyTNVcSik 1:04:35 TCMC Weekend #1, Part 3 - Culadasa
# iChmRArdaLo 23:25 UWest Meditation Camp #2, Part 7 - Culadasa
# 920eFHwVlJs 58:55 TCMC Weekend #1, Part 10 - Culadasa
# h3JLS4-ZWbE 1:09:30 Dharma Talk - Culadasa, Santa Fe Vipassana Sangha
# rEgW_al38u4 47:10 TCMC Thursday #26 - Culadasa
# UC6Xouvoi7k 13:15 UWest Meditation Camp #2, Part 3 - Culadasa
# RN8SwjbPlWE 1:02:30 TCMC Thursday #24, Part 2 - Culadasa
# D2yc0g73YBU 1:09:25 TCMC Thursday #23, Part 2 - Culadasa
# sp9KKBWN5Wk 9:10 The Awakening Process - Culadasa
# 6Fgux1RwmYQ 1:26:20 Q&A - Culadasa, Stronghold Retreat #1, Part 4
# wrw7vKh_9BU 19:00 TCMC Weekend #1, Part 5 - Culadasa
# q-W_rfqczBw 1:07:35 TCMC Thursday #22 - Culadasa
# b56ubFUSw6w 1:38:35 Dharma Talk - Culadasa, Stronghold Retreat #1, Part 2
# 1216dY3Pvdk 22:50 TCMC Thursday #25 - Culadasa
# nRLmVRSEcUM 55:25 Q&A & Dharma Talk - Culadasa, Stronghold Retreat #1, Part 3
# u6qjNcZ9GCA 42:50 TCMC Thursday #20, Part 1 - Culadasa
# -dh1sQUjMts 58:30 Dharma Talk - Culadasa, Stronghold Retreat #1, Part 1
# WP1tvBUKI_Q 28:35 TCMC Thursday #23, Part 1 - Culadasa
# n2uF0xD7x7E 21:25 TCMC Thursday #24, Part 1 - Culadasa
# DZg8pCJlzX8 26:40 TCMC Thursday #21, Part 1 - Culadasa
# pYowT4zFgwc 14:05 Levels After the First Nine Meditation Stages - Culadasa
# 0CcyCbcTovA 23:10 Guided Meditation, UWest Meditation Camp #2, Part 2 - Culadasa
# Mu0SkCBR0nM 20:30 How Does Insight Fit into the Meditation Systems - Culadasa
# rXJZhFgX2tk 11:25 Bypassing Steps to Awakening? - Culadasa
# T7DJRmgDweE 34:30 Q&A - Culadasa, Retreat in California #4, Part 2
# luJk8sbK2SI 1:38:01 UWest Meditation Camp #1, Part 4 - Culadasa
# uxb_0HNI48Q 1:37:15 University of the West Lecture - Culadasa
# oLY0mG2MdRk 1:08:15 Uposatha Day #18 - Culadasa
# z3lTL0k4UmA 49:00 Uposatha Day #19 - Culadasa
# ZDlU3G0eYiE 1:27:55 TCMC Weekend #1, Part 1 - Culadasa
# oDDk6RJTWxY 58:05 Uposatha Day #17 - Culadasa
# uWElZuDMpMM 52:50 Uposatha Day #16 - Culadasa
# oaGu4A4KfVs 15:55 What is Free Will - Culadasa
# 9y6eFyPZCSQ 1:18:40 TCMC Thursday #17, Part 2 - Culadasa
# e2KkHo8wGMo 43:20 Uposatha Day #14 - Culadasa
# NHfqniV75Aw 58:47 UWest Meditation Camp #1, Part 8 - Culadasa
# 8HnEWG5qDLI 1:15:50 TCMC Thursday #18, Part 2 - Culadasa
# y2gLtq8JRHM 1:47:15 Dharma Talk - Culadasa, Retreat in California #4, Part 9
# 7f_BEI7XJhU 16:40 When We’ve Done Wrong - Culadasa
# CNPdu6jjeNI 1:05:20 TCMC Thursday #19, Part 2 - Culadasa
# HvfqSSF_QFE 46:55 Uposatha Day #13 - Culadasa
# eFVkkRZ9WDM 1:20:35 TCMC Thursday #15, Part2 - Culadasa
# 4JFLsHNdE3s 1:11:55 TCMC Thursday #16, Part 2 - Culadasa
# oLiFFYFIFp4 1:42:20 Dharma Talk - Culadasa, Retreat in California #4, Part 7
# iOIQjYjy7n4 6:30 Uposatha Day #15 - Culadasa
# ENDA8TKB9jI 1:28:25 Dharma Talk - Culadasa, Retreat in California #4, Part 5
# _j_XSDukuPQ 35:10 TCMC Thursday #18, Part 1 - Culadasa
# 6iGOYQE-0ZQ 21:30 TCMC Thursday #19, Part 1 - Culadasa
# LLLKVOWuhRM 28:00 TCMC Thursday #17, Part 1 - Culadasa
# UMMCB-f3ALM 1:31:10 Dharma Talk - Culadasa, Retreat in California #4, Part 13
# uRYLMUOPMlM 1:40:50 Dharma Talk - Culadasa, Retreat in California #4, Part 14
# it4uodKgY5Q 34:10 TCMC Thursday #16, Part 1 - Culadasa
# dsOl0vFkkTU 24:15 Q&A - Culadasa, Retreat in California #4, Part 4
# bPHS6mdr0fA 30:05 TCMC Thursday #15, Part 1 - Culadasa
# c7fH8AR978U 1:22:40 Dharma Talk - Culadasa, Retreat in California #4, Part 3
# okEjvyYOx88 33:55 Q&A - Culadasa, Retreat in California #4, Part 6
# L1HXCZV8XL0 1:32:45 Dharma Talk - Culadasa, Retreat in California #4, Part 11
# tYZOM-C5hZ8 23:40 Q&A - Culadasa, Retreat in California #4, Part 8
# MD39KrPZQmE 28:50 Q&A - Culadasa, Retreat in California #4, Part 10
# vJgT3_2lZWQ 9:00 Sleepiness and Dullness - Culadasa
# qQsfqL9FxqA 1:09:10 Dharma Talk - Culadasa, Retreat in California #3, Part 19
# 6YcrRxk1PgE 33:00 Guided Beginner Meditation, UWest Meditation Camp #1, Part 10 - Culadasa
# 7wnt72CF_Gg 24:00 Mind Unification - Culadasa
# 8sBGx0VwCuo 1:07:10 Dharma Talk - Culadasa, Retreat in California #4, Part 1
# w3dwsnoJQZM 14:40 Q&A - Culadasa, Retreat in California #4, Part 12
# IEwgfA68m6c 15:00 Mindfulness Practice - Culadasa
# SRM4bNmg0-g 15:30 Behind the Veil - Culadasa
# jWLJhhrTokU 1:25 Lengthening Meditation Times - Culadasa
# PTUZxS9cjwQ 20:05 Changing Your Destiny - Culadasa
# UeJYk6Nm0r0 8:50 Benefits of Meditation - Culadasa
# 4IVxof5UQkg 4:35 Counting as Meditation Tool - Culadasa
# L5cLz8A9k3A 5:55 Brain vs Mind - Culadasa
# Xj06Lc7y21I 1:07:05 TCMC Thursday #11, Part 2 - Culadasa
# XazGRf3OnNc 1:27:25 UWest Meditation Camp #1, Part 6 - Culadasa
# LENVuV2yeR4 1:34:15 Uposatha Day #11 - Culadasa
# OPeTSpVFgzI 1:44:25 UWest Meditation Camp #1, Part 11 - Culadasa
# YpbZSm8nEcs 1:00:20 UWest Meditation Camp #1, Part 5 - Culadasa
# LVISBodOXac 55:55 Uposatha Day #10 - Culadasa
# lTCNyukce0k 1:00:45 UWest Meditation Camp #1, Part 7 - Culadasa
# wZaVkac9oK4 47:50 UWest Meditation Camp #1, Part 9 - Culadasa
# LqUfbmBn0XQ 1:15:00 UWest Meditation Camp #1, Part 1 - Culadasa
# maQ7WNnMMVI 1:12:53 UWest Meditation Camp #1, Part 14 - Culadasa
# w3SZAD7VZ8c 1:03:47 UWest Meditation Camp #1, Part 12 - Culadasa
# t-RLX9JA21M 16:05 Uposatha Day #8, Mindfulness in Daily Life - Culadasa
# gD9WB4zI4eo 56:25 UWest Meditation Camp #1, Part 3 - Culadasa
# P1gZHKsPF_Y 23:55 Uposatha Day #12 - Culadasa
# 9J70of2c8Xw 29:40 Uposatha Day #7 - Culadasa
# Vrn-GhJofeU 1:07:50 Q&A - Culadasa, Retreat in California #3, Part 8
# WZN9NuUeH6Q 1:08:35 TCMC Thursday #12 - Culadasa
# vd0s3TREqok 1:25:20 TCMC Thursday #13 - Culadasa
# HHVCSTDsF6s 1:08:10 Dharma Talk - Culadasa, Retreat in California #3, Part 9
# S3nX3gm9JBA 1:08:00 TCMC Thursday #14, Part 2 - Culadasa
# 3ENaibWuA0w 56:40 Q&A - Culadasa, Retreat in California #3, Part 2
# 6aWXvmIjDAE 1:08:50 Q&A - Culadasa, Retreat in California #3, Part 13
# MZQqa2NvoHg 1:08:10 Q&A - Culadasa, Retreat in California #3, Part 4
# DJBBZ9pKLcE 1:02:25 Q&A - Culadasa, Retreat in California #3, Part 15
# w9jAKb2Mqi8 35:10 TCMC Thursday #14, Part 1 - Culadasa
# Da44vOqxXLw 29:30 TCMC Thursday #11, Part 1 - Culadasa
# c-KuXPdIZe8 1:00:50 Q&A - Culadasa, Retreat in California #3, Part 17
# 9jH8MpuXlHc 1:03:00 Q&A - Culadasa, Retreat in California #3, Part 10
# 0G8q942gfzM 58:40 Q&A - Culadasa, Retreat in California #3, Part 6
# q-XQicy6HR0 1:05:50 Dharma Talk - Culadasa, Retreat in California #3, Part 14
# 8GE5M0wrjss 1:38:30 Dharma Talk - Culadasa, Retreat in California #3, Part 16
# ZYV2X_7YNQc 36:30 Guided Metta - Culadasa, Retreat in California #3, Part 18
# sacyPpJK7gg 44:00 Opening - Culadasa, Retreat in California #3, Part 1
# 0Uork0NCSis 1:22:10 DM Retreat #2 - Culadasa
# _FCO92IIMLE 1:11:30 Dharma Talk - Culadasa, Retreat in California #3, Part 3
# HiyQfOzsSms 59:35 Dharma Talk - Culadasa, Retreat in California #3, Part 11
# 3efUiakSwiI 56:05 Dharma Talk - Culadasa, Retreat in California #3, Part 5
# R0Crl1r_4Fk 1:09:10 Dharma Talk - Culadasa, Retreat in California #3, Part 7
# 6ghUvwHiq-Y 1:14:15 Beginner Guided Meditation, UWest Meditation Camp #1, Part 2 - Culadasa
# 8yz0HxXTVFY 28:25 Guided Metta - Culadasa, Retreat in California #3, Part 12
# 70qMmwmaccQ 1:13:15 DM Retreat - Culadasa
# xmmPRYagq3s 26:05 Guided Metta Meditation, UWest Meditation Camp #1, Part 13 - Culadasa
# wU0RjslXxlo 14:00 Analytical Meditations, What and How - Culadasa
# SdYgWK-mYrg 3:00 First Stage of Meditation Tips - Culadasa
# oQixjDgWq9g 1:28:13 Cochise Stronghold 10 Day Retreat #1, Part 1 - Culadasa
# Zl0zl_Yd1-I 1:25:15 Cochise Stronghold 10 Day Retreat #1, Part 3 - Culadasa
# TnasBvYIsHE 59:00 Closing Dharma Talk - Culadasa, Cochise Stronghold Weekend #1, Part 3
# EpupNjzIt-M 1:13:15 Cochise Stronghold 10 Day Retreat #1, Part 4 - Culadasa
# nLQ_1dSc8ZQ 51:00 Cochise Stronghold 10 Day Retreat #1, Part 2 - Culadasa
# QGlXc2UWBJY 1:10:15 Cochise Stronghold 10 Day Retreat #1, Part 6 - Culadasa
# yA-q5TQn0NM 7:15 Brightening the Mind to Combat Subtle Dullness - Culadasa
# dqxHOoBS8e8 1:04:45 Cochise Stronghold 10 Day Retreat #1, Part 7 - Culadasa
# FqYQWfh1GJw 46:30 Cochise Stronghold 10 Day Retreat #1, Part 5 - Culadasa
# iPZTuq11gqA 1:57:05 TCMC Thursday #5 - Culadasa
# yAqvatURbgs 1:26:10 Dharma Talk, Q&A - Culadasa, Cochise Stronghold Weekend #1, Part 2
# PSg_Pxe89bA 1:43:30 TCMC Thursday #7 - Culadasa
# WeQ-VzAFDzU 1:29:25 TCMC Thursday #6, Part 3 - Culadasa
# m13cmG7uhu8 43:20 Guided Metta Meditation, TCMC Thursday #6, Part 2 - Culadasa
# -8JH-QPG6lA 19:45 Combating Depression and Dissastifaction During Transition - Culadasa
# 8-dkvQ8T89o 15:05 Loving Kindness Practice - Culadasa
# Xx-QIXKainU 12:25 Craving, What’s it All About? - Culadasa
# Idkm7mG3ohI 3:40 Exchanging Self and Others - Culadasa
# w9i_1vp2OCg 6:20 How do I develop mindful awareness and good concentration - Culadasa
# GGOS42Ws7_I 1:14:45 TCMC Thursday #9, Part 2 - Culadasa
# 1kXIzUKS0TM 11:55 The Benefits and Practice of Letting Go - Culadasa
# -TmI4U9JYFc 4:40 Physical Suffering vs Mental Suffering - Culadasa
# wRZdcZUz1ks 21:45 TCMC Thursday #6, Part 1 - Culadasa
# mywGH24zu60 41:35 TCMC Thursday #8, Part 2 - Culadasa
# -2rXnz9RUuc 31:15 TCMC Thursday #8, Part 1 - Culadasa
# KRxHUtQ3Vjc 42:40 Uposatha Day #5 - Culadasa
# ZCiDLdvHDyI 25:55 TCMC Thursday #9, Part 1 - Culadasa
# HuKdJQUR2TY 15:00 Uposatha Day #3 - Culadasa
# endc5cDy8zM 10:50 Uposatha Day #4 - Culadasa
# 293vximFQW4 1:25 Working with Post Traumatic Stress Disorder - Culadasa
# V5v-nNBgYSM 45:20 Guided Meditation - Culadasa, California Retreat #2, Part 6
# 25GQobBP1C0 1:42:35 TCMC Thursday #4 - Culadasa
# F_MDEaOBWI0 1:57:45 TCMC Thursday #1 - Culadasa
# 8EetwP74CF0 1:25:40 TCMC Thursday #2 - Culadasa
# 5Rz0LSfeRyQ 1:34:05 TCMC Thursday #3 - Culadasa
# 1akIBebwVOQ 1:04:50 Introduction - Culadasa, Cochise Stronghold Weekend, Part 1
# GlaQy-CRY_Q 35:15 Uposatha Day #2 - Culadasa
# 8o-qawkwkeE 1:23:00 Dharma Talk - Culadasa, California Retreat #2, Part 4
# vxkieoMDKsk 1:01:20 Q&A – Culadasa, Retreat in California #2, Part 8
# m8rijuciZWg 1:25:05 Dharma Talk – Culadasa, Retreat in California #2, Part 11
# 12gfXprvTWo 59:20 Q&A – Culadasa, Retreat in California #2, Part 5
# y9h7KzDwMMU 1:27:10 Dharma Talk – Culadasa, Retreat in California #2, Part 9
# cSjkj8p1bzw 1:04:25 Q&A – Culadasa, Retreat in California #2, Part 10
# YbZyAR4bKRw 1:02:10 Dharma Talk – Culadasa, Retreat in California #2, Part 7
# U6nPD02iPf8 37:15 Closing – Culadasa, Retreat in California #2, Part 12
# -mbGcDSEEcI 2:13:40 Dharma Talk - Culadasa, California Retreat #1, Part 15
# FMDdB2RpckY 1:50:35 Dharma Talk - Culadasa, California Retreat #1, Part 17
# VVXIYCC5Tg8 1:59:40 Dharma Talk - Culadasa, California Retreat #1, Part 13
# CKSVmsDZjAg 1:53:35 Dharm Talk - Culadasa, California Retreat #1, Part 11
# qNVfPuGbJcc 1:25:10 Dharma Talk – Culadasa, Retreat in California #2, Part 2
# K6bhtKYvUc4 1:22:55 Q&A – Culadasa, Retreat in California #2, Part 1
# k8zFTjBnNl8 1:13:55 Retreat Closing - Culadasa, California Retreat #1, Part 18
# J_dFNqelBfI 1:04:10 Q&A – Culadasa, Retreat in California #2, Part 3
# W4rdBy2rS0E 1:12:10 Q&A - Culadasa, California Retreat #1, Part 16
# 9izV_lZ2gF4 1:01:20 Q&A - Culadasa, California Retreat #1, Part 12
# -eWefpzBzqQ 59:45 Q&A - Culadasa, California Retreat #1, Part 14
# -9bu9P6OjIo 2:01:45 Dharma Talk - Culadasa, California Retreat #1, Part 9
# wQkmlFKLONM 2:22:10 Evening Opening - Culadasa, California Retreat #1, Part 1
# ZIVpqZ12n5s 1:15:55 Dharma Talk - Culadasa, California Retreat #1, Part 7
# wE7ONOW73zE 1:01:00 Q&A - Culadasa, California Retreat #1, Part 10
# b8zAJ3JCc_k 1:14:35 Dharma Talk - Culadasa, California Retreat #1, Part 5
# eptT3fEFeWM 1:01:55 Q&A - Culadasa, California Retreat #1, Part 8
# CpVvyfvHs4I 1:01:55 Q&A - Culadasa, California Retreat #1, Part 6
# JexBXhxlXnU 1:04:25 Q&A - Culadasa, California Retreat #1, Part 4
# Ep2XB4eZVDQ 1:08:35 Dharma Talk - Culadasa, California Retreat #1, Part 3
# ev2a4H1ZO88 59:50 Q&A - Culadasa, California Retreat #1, Part 2
# iS_hjBoApQY 1:12:15 Uposatha Day #1 - Culadasa

# Culadasa

# edd2fS8BRdM 1:48:18 Culadasa May 2021 Patreon Q&A No1
# fmn_lz7tGFc 1:29:09 Culadasa April 2021 Patreon Q&A No2
# 8Uc_gewR1gY 1:27:55 Culadasa April 2021 Patreon Q&A No1
# -hKGfbBuemA 1:15:01 Culadasa March 2021 Patreon Q&A No2
# qppnBfQ_KEI 1:22:26 Culadasa February 2021 Patreon Q&A No2
# 1nPhm73Aaxw 1:34:44 Culadasa February 2021 Patreon Q&A No1
# qIuZg6jBNsM 1:25:03 Culadasa January 2021 Patreon Q&A No2
# ZbmFWHoT0YE 1:21:16 Culadasa January 2021 Patreon Q&A No1
# d4x3_ffTPC0 1:42:07 Culadasa December 2020 Patreon Q&A No1
# z2aOw9Uhc-w 2:01:19 Culadasa November 2020 Patreon Q&A No3
# 9KYmlShAz_g 1:26:29 Culadasa November 2020 Patreon Q&A N°2 Recording
# K0KKBU46hNM 1:33:03 Culadasa November 2020 Patreon Q&A N°1 - Sunday the 1st
# rXySJwIZMP8 1:32:17 Culadasa October 2020 Patreon Q&A N°2 Recording
# JK0q0tgsw2U 1:37:12 Culadasa October 2020 Patreon Q&A N°1 Recording
# GWThVC6FEzA 1:46:16 Culadasa September 2020 Patreon Q&A N°2 Recording
# 81mCT4D6w1I 1:39:36 Culadasa September 2020 Patreon Q&A N°1 Recording
# BJzM7GH9-nE 1:22:54 Culadasa August 2020 Patreon Q&A N°2 Recording
# kwyGPfavfFY 1:44:59 Culadasa August 2020 Patreon Q&A N°1 Recording
# YU_gUvXkkVY 1:43:06 Culadasa July 2020 Patreon Q&A N°2 Recording
# nlB-Dk8MkVE 1:41:08 Culadasa July 2020 Patreon Q&A N°1 Recording
# a8XJrNx7iN0 1:42:38 Culadasa June 2020 Patreon Q&A N°2 Recording
# 1-bzZgZd-sg 1:45:21 Culadasa June 2020 Patreon Q&A N°1 Recording
# BYtQAyNyA8E 1:57:23 Culadasa May 2020 Patreon Q&A Recording N°2
# eL36yVnWcb8 2:02:09 Culadasa May 2020 Patreon Q&A Recording N°1
# omNF2wQYVxs 1:53:06 Culadasa April 2020 Patreon Q&A Recording
# FnQVRtDu0kQ 1:46:48 Culadasa February 2020 Patreon Q&A Recording Nº 2 - Sunday
# IamWcgYWKcw 1:30:15 Culadasa February 2020 Patreon Q&A Nº 1 - Saturday
BAWrOls6I8U 0:54 New Channel 4 My Journey
AdiW7_HcjiE 1:13:05 My Journey: Episode 6 - The Ups and Downs of Practice (and Life!) - RE-UPLOAD WITH BETTER SOUND
BR7D92whYXA 1:09:49 My Journey: Episode 5 - Unifying life around the Dharma (re-upload)
TrK3NBylnVA 1:23:23 My Journey: Episode 4 - Stranger in a Strange Land
E48ByR0Xt6U 1:10:46 My Journey: Episode 3 - Experiences don't mean sh...
# Yg6l-DsFEz8 1:32:25 Culadasa March 2021 Patreon Q&A No1
OAfkxskGREo 1:07:21 My Journey: Episode 2 - A Series of Miracles
kn050yBN37U 59:17 My Journey: Episode 1 - The path of the lay practitioner, commitment, and the early years
Uf_su1wDk94 8:57 Introduction to "My Journey" discussion series
UjBXtI1Q2as 1:04:56 Culadasa discusses meditation and the "Dark Night": What it is, what it isn't, and how to avoid it
6nxZFnYCjbc 1:16:17 Nihilism vs Eternalism; Meaning in life; Is Awakening worth it? How long does it take?
# lVvii04Sa3I 1:14:39 Culadasa December 2020 Patreon Q&A No2
# aJ16ifG-udI 1:23:30 Culadasa January 2020 Patreon Q&A N° 2 (Monday)
# c7GSUFa_lF4 1:22:12 Culadasa January 2020 Patreon Q&A Nº 1 - Sunday
# eERQSG0eMFY 1:17:41 Culadasa December 2019 Patreon Q&A Video - Monday the 16th
# _c94GntI6qM 1:31:22 Culadasa December 2019 Patreon Q&A Video - Sunday the 15th
# Wmg-SOl9Sk4 1:28:38 Culadasa November 2019 Patreon Q&A Video - Friday the 29th
# -pqnkm1tQ0E 1:42:39 Culadasa November 2019 Patreon Q&A - Monday
# YfRp9cMPSNk 1:33:47 Culadasa November 2019 Patreon Q&A - Sunday
# X7brJ8qrLBo 1:35:54 Culadasa July 2019 Patreon Q&A
# MapEQWUQakY 1:34:42 Culadasa June 2019 Patreon Q&A
# kGgpbE_etV8 1:32:49 20190517 Culadasa Patreon Q&A
# mW3_WGR2Llo 1:13:02 Culadasa March 2019 Patreon Q&A Catchup
# Dp3l_XnTd20 1:25:44 Culadasa April 2019 Patreon Q&A
# 7UdHOJqB03o 1:54:58 March 2019 Culadasa Patreon Q&A
# eKMKZGZy6sc 1:29:33 February 2019 Culadasa Patreon Q&A
# zRa9I0ZkdKM 1:24:01 February 2019 Culadasa Patreon Q&A catch-up
# ewiA5sh-otw 1:28:44 Culadasa January 2019 Patreon Q&A
# By0s1KVLYBw 1:33:21 Culadasa December 2018 Patreon Q&A
# urCb5Ryp8SU 1:42:43 Culadasa November 2018 Patreon Q&A
# _m3ou_CA1Wk 1:16:31 November 23, 2018 Culadasa Q&A Catch Up
# DO4vExydTKA 1:30:28 October 29, 2018 Culadasa Patreon Q&A
# aM0o-BkrwkY 1:48:46 September 2018 Patreon Q&A
# EhtU5ei6YaM 1:30:00 20180816 Patreon Meetup Video
# mz0MlFOwaek 1:49:44 July 25, 2018 Culadasa Patreon Q&A
# rqpZrRRC1sU 1:24:06 Culadasa June 2018 Patreon Q&A
# pYZ7kiIbLWs 1:32:29 Culadasa May 2018 Patreon Q&A
# 0nC9ZUx-Xs4 1:48:10 Culadasa April 2018 Patreon Q&A
# 3ZM2Hq-wiwU 2:00:47 Culadasa April 2018 Patreon Q&A Catch-Up
# YD02MC1RaUs 1:42:10 Culadasa February 2018 Patreon Q&A
# e1kss-E0IKU 1:22:37 Culadasa October 2017 Patreon Q&A
# 9GCa0epZVs8 1:01:04 Culadasa March 2018 Patreon Q&A
# RarJIUBrysw 1:31:37 Culadasa January 2018 Patreon Q&A
# uuBr-5G0zoE 1:59:49 Culadasa December 2017 Patreon Q&A
Zk2XQFwESIk 1:11:22 Creating the optimal state of mind for Meditation - Culadasa at NYIMC
2LYa1YCdZH8 1:15:37 Culadasa -The 5 ultimate insights that lead to direct awakening.
vtWoFpEHTBs 27:27 How do you know whats true? - Culadasa at NY Insight
RKsqA6qFZBc 56:10 Engaged Compassion, Part 4; Gloucester MA, July 2, 2016
vLp738BdVCI 1:39:15 Engaged Compassion, Part 3; Gloucester MA, July 2, 2016
xWDs1ovmeqo 59:02 Engaged Compassion, Part 2; Gloucester MA, July 1, 2016
oge5XL_vdPw 1:36:53 Engaged Compassion, Part 1; Gloucester MA, July 1, 2016
Mzlk1iq_LRs 12:21 benefits of meditation, therapy and awakening
NndWvacogTk 2:51 Practice Advice for Everyday Life
aCwUGQk-0gQ 1:50 Welcome - Meditation instruction from Buddhist and Scientific perspective - Culadasa
xrUlWLRqQEM 1:23 Why Teach Meditation in Stages - Buddhist Wisdom meets Brain Science - Culadasa
XaRnabvBKOQ 3:07 Awakening & Insight - Buddhist Wisdom meets Brain Science - Culadasa
MAY3lh-4xIE 4:49 Attention, Awareness & Mindfulness - Buddhist Wisdom meets Brain Science - Culadasa
9_7sTiQ-jIM 1:20 Rattlesnake Round-up
u5He0q5u5yY 2:34 Here Comes the Sun: Achieving Awakening Without the Dark Night
33lZZhsKJw0 9:36 Training the Mind -- Buddhist Wisdom meets Brain Science - Culadasa
XFrOYVJxO80 9:41 Suffering and the End of Suffering -- Buddhist Wisdom meets Brain Science - Culadasa
GVoIxju59lc 9:02 Mind-Wandering in Meditation -- Buddhist Wisdom meets Brain Science - Culadasa
R9dqNii3Vmc 1:48 A Higher Level of Consciousness -- Buddhist Wisdom meets Brain Science - Culadasa
BT1HpYIg-oE 5:46 Developing Introspective Awareness -- Buddhist Wisdom meets Brain Science - Culadasa
r-n-Ca_RqUQ 4:27 Physics, Philosophy and Emptiness -- Culadasa - Buddhist Wisdom meets Brain Science
JraPD3iMJYE 9:58 Where do the Four Elements Cease? - Buddhist Wisdom meets Brain Science - Culadasa
G-JUhLJdJ3w 7:51 What is Rebirth? - Buddhist Wisdom meets Brain Science - Culadasa
HSv2dindx7o 9:56 What is Equanimity? - Buddhist Wisdom meets Brain Science - Culadasa
8IqXwOlYiWs 9:55 Reality is Mind-Created - Buddhist Wisdom meets Brain Science - Culadasa
BdJWwlWVkzk 9:50 The Nature of Suffering - Buddhist Wisdom meets Brain Science - Culadasa
fcWxNIsXd4M 10:00 The Nature of Ultimate Reality - Buddhist Wisdom meets Brain Science - Culadasa (Q&A 6 of 12)
0F8Oub7tYsk 9:58 Seeing What Really Is - Buddhist Wisdom meets Brain Science - Culadasa
B00XPYTvCRY 10:02 Introspective Awareness in Meditation - Buddhist Wisdom meets Brain Science - Culadasa
-x-ONEhLDlA 10:03 Positivity and Awareness in Meditation - Buddhist Wisdom meets Brain Science - Culadasa
7Rv4Dh0FWRI 7:47 Uninterrupted Continuity of Attention -- Buddhist Wisdom meets Brain Science - Culadasa

# Adam Savage's Tested

dXdkfaEbeLQ 10:18 Ask Adam Savage: When Did You Know Making Would Be A Sustainable Career?
PbnDO_IMMoY 7:39 Ask Adam Savage: What IS It About The Matrix?
kBoNZjWsrOY 15:21 Ask Adam Savage: All About Clamps
6HOWrW4p-Xg 11:29 Ask Adam Savage: Adam's Top 5 Movie Soundtracks
Wz-iPCiim9U 5:01 Ask Adam Savage: “Did You Have Work/Life Balance During MythBusters?”
UUNBBNLCqmU 7:39 Ask Adam Savage: Best Glue for Foam
eGRfEvMEoSM 6:16 Ask Adam Savage: "Do You Have Lucid Dreams?"
qQlF7upgTlA 10:03 Ask Adam Savage: "What Do You Think Will Be Your Legacy?"
7KllsOwtHK0 7:39 Ask Adam Savage: Ark of the Covenant Replicas and Duct Tape Bullwhips
5CRSXcoasQQ 12:00 Ask Adam Savage: Creating With ADHD
W7XvCLDzY10 7:51 Ask Adam Savage: How to Set Up a New Shop
KZWWL3Kdhhk 9:04 Ask Adam Savage: On Sharing Space With Mrs Donttrythis
vyCrHLYiGNo 10:09 Ask Adam Savage: Efficiency and First Order of Retrievability in Shops
6LqBJzLB5jg 5:57 Ask Adam Savage: Best Tools and Projects for First-Time Makers
L3D8BhJIfL0 11:12 Ask Adam Savage: Avoiding Accidents and "The Hands"
eS8aLmXEmQQ 11:20 Ask Adam Savage: When to Ask for Help on a Job
TpqUG6iFEBE 7:38 Ask Adam Savage: What's the One Thing Visitors Flock to in The Cave?
IVE3G_uCW1Y 9:05 Ask Adam Savage: Building vs. Modifying Tools
WBbxrHO8zq8 7:28 Ask Adam Savage: Favorite Miniature and Jumbo Versions of Tools
8Q_7nkvjl-g 8:58 Ask Adam Savage: The Origin of Adam and Jamie's "MythBusters Look"
usB6jqa4Yt4 7:56 Ask Adam Savage: When to Buy and How to Mark Your Tools
riyvh8zOG_A 5:58 Ask Adam Savage: On Reading Critical Viewer Comments
G9TJQEJJZKI 6:58 Ask Adam Savage: Current TV Series Adam Would Want to Address on MythBusters
fWZ8rUEdhUc 7:58 Ask Adam Savage: What's on Adam's Personal Bucket List?
WrGW5oGnILo 7:58 Ask Adam Savage: Setting Up a Shop in Your Garage
2tZ0EGJIgD8 15:16 Ask Adam Savage: Adjusting to Life Post-Mythbusters
jIAbRPW0jXg 5:41 Ask Adam Savage: On Making "In Universe" Prop Build Decisions
E1tuc-levnI 6:14 Ask Adam Savage: Do I Want to Go to Space?
a6E0FMtdJpM 10:51 Ask Adam Savage: Who Modified the Cars on MythBusters?
aRln8atkNaY 13:43 Ask Adam Savage: Behind the MythBusters Cement Truck Explosion
mqXtr7C5VCg 11:45 Ask Adam Savage: Job Interview Advice, Jamie's Flamethrower and More
lbnGzrLWlBw 5:25 Ask Adam Savage: The Origin of M5, M6 and M7 (Plus, Their Neighbors)
DNhbUQhiVf8 7:51 Ask Adam Savage: Will I Ever Retire, Plus Combatting Negative Feedback
Bh6VLA7uUvM 11:21 Ask Adam Savage: The Challenge of Using Explosives and Firearms in San Francisco
I1XVHq3sTdk 7:59 Ask Adam Savage: When to Keep/Store a Project, Plus Favorite Puppet in Film History
MztikUm9T1c 15:34 Ask Adam Savage: My Favorite Build of Jamie's
c6TopwNu7Ok 8:22 Ask Adam Savage: How Useful Is My Tattoo?
6HV37guAllc 6:23 Ask Adam Savage: Makers in the Film Industry
l1RemggFxwA 8:16 Ask Adam Savage: How to Weather Leather
jP4DGyMUbMA 6:50 Ask Adam Savage: My "Why Didn't I Think of That" Moments
Z10JnKiu4Tg 6:49 Ask Adam Savage: Post-Build Depression, Custom Lightsabers and Unfinished Blasters
AlcLyaOw-ls 8:22 Ask Adam Savage: The "One Day Build" Concept
8fgfi7Kc1hg 13:30 Ask Adam Savage: How I Jump Back Into a Set-Aside Project
DXyc91HL7Y8 7:47 Ask Adam Savage: Does Self-Filming Make Builds Longer?
LprSB3_rles 11:12 Ask Adam Savage: When to Make vs. Buy Something
8mXv0_N_NHg 8:17 Ask Adam Savage: The Myth Jamie Suggested That I LOVED (But We Didn't Do)
qkz19jFh7x0 8:06 Ask Adam Savage: Bailing on Boring Projects
FIDJ2XMTb_s 10:06 Ask Adam Savage: Land Cruiser Pros and Cons Plus Drywall Screws
stMPdtH3S9E 11:10 Ask Adam Savage: Metric Blocks, Biscuit Bazooka and Barrel of Bricks
L5De68zSf14 11:55 Ask Adam Savage: Should You Take Jobs at a Loss to "Get Your Name Out"?
_Xt-YHdRlQI 12:00 Ask Adam Savage: Stewart/Colbert Rally to Restore Sanity and/or Fear Invite
IuF1tWlV6nE 9:33 Ask Adam Savage: Blade Runner 2099, Workbench Tops and Custom Lightsabers
psgf9pqjkPs 8:37 Ask Adam Savage: Is Failure Still an Option?
qPlWUFxXFGs 10:24 Ask Adam Savage: Tips for Organizing Reference Materials (Both Digital and Physical)
5Oe2S_xvL5o 9:01 Ask Adam Savage: The MythBusters Pilot Episodes
WfyZuedOsF4 9:12 Ask Adam Savage: On Finding Organizational Inspiration and Discarding Things You Need Later
9mxGo7QglRU 12:36 Ask Adam Savage: Transitioning From Jamie's Employee to Equal
CVU3EZnjmUg 9:33 Ask Adam Savage: How to Store One-Off Items (Plus Home Organization Issues With Mrs. Donttrythis)
70TZua1j3Fc 11:27 Ask Adam Savage: When to Discard Scrap Materials
56NXn-6nqMA 8:58 Ask Adam Savage: Why the Hindenburg Episode Was Huge (and Fun!) for MythBusters
4m-lTiCmSro 6:45 Ask Adam Savage: Airbrushing Tips and DIY Tools
QmRXguvO0bs 13:45 Ask Adam Savage: Managing Tools and Materials When You Have Two Shops
F_YVzJfhC6o 10:47 Ask Adam Savage: Tips for Building Within Tight Budget Constraints
d4O2wtDW2LA 10:17 Ask Adam Savage: The Tool That Does Only One Thing, But Does It Well
H0X9y0iyBmY 12:13 Ask Adam Savage: Lathe Tips (Plus Adam's Watch!)
qeRcHlwp2AQ 9:43 Ask Adam Savage: The Tool That Makes Adam Giddy
q3sCIpFZzfU 8:04 Ask Adam Savage: The Tool That Didn't Live Up to My Hopes
Gj0OMUozEKw 8:25 Ask Adam Savage: Favorite Play/Musical Experience
7oieelDea5o 10:28 Ask Adam Savage: Do I Do Projects at Home?
8zIOfPy7sCg 10:48 Ask Adam Savage: Myths Adam Wishes Were Taken Further
V1XbZPafG7M 14:56 Ask Adam Savage: How to Deal With Creative Block
aNwZQdUmR7A 11:58 Ask Adam Savage: Weirdest Things Fans Ask to Be Signed
AoXNSquNsbY 14:00 Ask Adam Savage: The Myth That Pushed Adam to His Breaking Point
uKlQyWwdqXk 11:13 Ask Adam Savage: Is Mrs. Donttrythis a Maker?
QuzIlMxLnQM 12:42 Ask Adam Savage: Collaborating/Competing With Jamie on MythBusters
r1uxC8RUiKU 9:05 Ask Adam Savage: Feeling Overwhelmed by STUFF
D_yHttkfWCA 11:43 Ask Adam Savage: Origin of "Well, There's Your Problem" on MythBusters
Ie79jtBfr1M 11:59 Ask Adam Savage: Movie Scene That Had the Biggest Emotional Impact
REXSV1x18Y8 11:37 Ask Adam Savage: Most Egregious Errors in TV and Movies
fW8R-WbLQEs 11:14 Ask Adam Savage: Films Where the Props Were Better Than the Film Itself
EtdAto9ymA8 9:22 Ask Adam Savage: Coming Out of Prop-Making "Retirement"
BW2l9UE05No 8:47 Ask Adam Savage: Criteria for Removing Items From Shop
KvnWuo_vTFU 9:58 Ask Adam Savage: Origin Story of the Cave
8-1NoqJXX-c 6:32 Ask Adam Savage: If I Could Rebuild My Shop From Scratch
UBIoaI_zqxU 6:33 Ask Adam Savage: Pegboard and Other Storage Solutions
rpBxyXYzJnU 8:13 Ask Adam Savage: Inspiration from Cosplays Seen in Recent Conventions
25eZ17IoRK4 11:34 Ask Adam Savage: On Storage, Compressed Air and Expendables
04uc8uEE36k 10:13 Ask Adam Savage: Making a "Renter Friendly" Home Workshop
dNry9KLISYo 5:30 Ask Adam Savage: 3D Printer vs Vacuum Former for Cosplay
sHz3zZu3Z0o 8:54 Ask Adam Savage: Managing Distraction While Working
sN-wQYRDECw 12:15 Ask Adam Savage: How Mandalorian's Digital Effects Are Game-Changing
NRDWkJbrcrU 11:43 Ask Adam Savage: On Interacting With Fans
KoEw_A1MfC0 11:40 Ask Adam Savage: Is Hacking Making?
L-s3jFny6M8 12:19 Ask Adam Savage: Has Celebrity Changed Adam's Con Experience?
uK-0Yndxmss 11:27 Ask Adam Savage: Managing Anxiety When Delivering Creative Work
kDzhe6Ll1sA 14:50 Ask Adam Savage: On Turning a Hobby Into a (Still Enjoyable) Business
Gf-7RlvDeaw 12:14 Ask Adam Savage: How Scripted Was Shark Week?
tiByvxW3-SQ 9:12 Ask Adam Savage: On Being Clever vs. Good in the Workplace
-GzHr2MYS0w 16:47 Ask Adam Savage: On Being a Freelancer (and Setting Prices)
NSPHIP9BM8I 12:01 Ask Adam Savage: My Past in Theatre
1wR9i5BLjeU 10:49 Ask Adam Savage: My Worst and Most Tedious Jobs
YpEHNIADWiA 10:22 Ask Adam Savage: First Job Ever Plus That Charmin Commercial
uiS1iR9uWQU 10:24 Ask Adam Savage: How Much Is Cosplay Physical vs. Mental?
rnfbjySCtCU 5:43 Ask Adam Savage: Machining vs 3D Printing
x0N2A8lNUXo 9:47 Ask Adam Savage: Transforming Toys into Realistic-Looking Props
D4ZYMUc8vng 12:58 Ask Adam Savage: "How I Broke My Neck"
V4PrNE8HsuI 12:18 Ask Adam Savage: "Which Star Wars Scenes Bring You Joy?"
mzC97eXYrDI 4:35 Ask Adam Savage: MythBusters Celebrity Guests That (Sadly) Never Happened
5A6ZGOmV0CM 7:16 Ask Adam Savage: Favorite Object Built on MythBusters
ZuW7_-rbvJc 5:24 Ask Adam Savage: Which Previous Job Adam Would Do Again (and Again)?
Nr81hpP5wK4 6:55 Ask Adam Savage: The Day I Saw Unparalleled Joy on Jamie's Face
RTa_oneCUPg 11:51 Ask Adam Savage: When to Intervene and When to Let Mistakes Happen
uXL8zhR17ts 15:37 Ask Adam Savage: Thoughts About Galaxy's Edge
x6c32uqznyQ 15:18 Ask Adam Savage: When Good Lightsaber Battles Go Bad
HNzigDaI5u8 12:15 Ask Adam Savage: Why Waterslide Wipeout Was Less Fun Than It Looked
xjHGCalVf6U 8:16 Ask Adam Savage: Managing Failure as a Maker
ELauebvLb1M 15:17 Ask Adam Savage: Coping With (and Learning From) Failure
y-0bBTuLAR8 11:09 Ask Adam Savage: Favorite Life Experience as a Result of MythBusters
tgx0bPAi8Q8 6:56 Ask Adam Savage: Learning to Stunt Drive on MythBusters
thRFK-MSZAw 6:26 Ask Adam Savage: MythBusters' Contribution to Science
jHwM-nnG-vI 9:45 Ask Adam Savage: Collecting Failures
LihTFh63wpM 14:01 Ask Adam Savage: Managing Negative Emotions During a Build
jEfQAo-BuB0 7:19 Ask Adam Savage: "Why I Actually Hate Duct Tape"
2T7lh1HzZjw 9:14 Ask Adam Savage: How to Approach Building an Accurate Costume
8FBNmf9H-_4 10:01 Ask Adam Savage: Performing for an Audience vs. a Camera
T6BlB3l-F4U 7:14 Ask Adam Savage: Proportion vs. Measurement in Cosplay
9a1eQAge2sg 11:06 Ask Adam Savage: Choosing Which Version of a Character to Cosplay
T5fjMnfSSbQ 7:23 Ask Adam Savage: A Caution Against the "Comparing Mind"
hSAuQETf79M 6:35 Ask Adam Savage: Which Myth Didn't Get the Love It Deserved?
16ctTeUJvSU 13:03 Ask Adam Savage: How Adam Chooses His Cosplays (Plus a Nathan Fillion Story!)
HU--YQtD-xk 6:59 Ask Adam Savage: Training a New Shop Employee With "All the PPE"
v3TYRKECRNA 7:13 Ask Adam Savage: Predicting Results on MythBusters
_iu7u0SQCUk 13:37 Ask Adam Savage: How MythBusters' Crew Size Changed Over Time
8UXDae5czgs 7:08 Ask Adam Savage: On Sharing Your Workshop
sosCBJv2tV8 6:59 Ask Adam Savage: Shop Anchor Points
XorzjtqIDWM 6:53 Ask Adam Savage: Testing the Bulletproof Water Myth
QCcIdfIdfD0 6:58 Ask Adam Savage: Designing Mobility in a Small Shop
g7nz1yCPFk0 4:59 Ask Adam Savage: How to Keep Track of Rarely Used Items
ZMIetBwWKoI 5:36 Ask Adam Savage: How Dangerous Was Duct Tape Canyon?
Sn6_TE9i5r8 9:00 Ask Adam Savage: About M5's Wall of Labeled Storage Bins
dsN__voQd8o 10:32 Ask Adam Savage: Tips for Setting Up a Workshop
beVj_xinOHY 12:33 Ask Adam Savage: When Good Materials Go Bad
v6JPhkWg_ok 8:44 Ask Adam Savage: Testing Myths With "No Basis in Science"
xUjcHW7SHaI 11:05 Ask Adam Savage: Plane on a Conveyor Belt Controversy
oFrjTAa7N4M 7:22 Ask Adam Savage: The Importance of Practical Effects
am5MLfCk8dc 10:37 Ask Adam Savage: "Which film most impacted modern cinema: Blade Runner or Alien?"
Z4dG9DYGSdA 11:56 Ask Adam Savage: The Myth More Dangerous Than It Seemed
vpAb8YkKKWg 10:50 Ask Adam Savage: Favorite Actor from Alien
Z9UIbpuppkM 9:19 Ask Adam Savage: About MythBusters' Narrator
Lcf0IOb0VY0 7:31 Ask Adam Savage: Working on R2D2 at ILM
h70kbIzPgig 13:09 Ask Adam Savage: How Lead Balloon Changed MythBusters
mFwzgXnxG30 7:09 Ask Adam Savage: Why M7 Spun Off from M5
bUAa1TgSY1c 9:30 Ask Adam Savage: Testing Fiction-Based Myths on MythBusters
EAlX_NOFYDI 12:04 Ask Adam Savage: High Speed and MythBusters
ztE3xoVDtG0 6:30 Ask Adam Savage: Voight-Kampf Machines and Electric Sheep
2FyfZeAgv54 4:06 Ask Adam Savage: Myth Adam Would Like to Test Today
rdNPws3pyHw 10:14 Ask Adam Savage: Why I Still Like Blade Runner
uw4csWqepkA 10:41 Ask Adam Savage: How MythBusters' Stunt Training Later Saved Adam's Life
Uxx4Y1lOM00 12:43 Ask Adam Savage: Favorite Blade Runner Cut (Plus: Is Deckard a Replicant?)
zdkqBWtVNSA 14:04 Ask Adam Savage: Savage Builds' Complex Builds, Plus Those Rocket Gloves
DXWzAcWj6b0 13:40 Ask Adam Savage: Remembering the U2 and Blue Angels Flights from MythBusters
H6yVtuPG1lc 13:58 Ask Adam Savage: Working With Tory on Savage Builds
ei2jLKORXn4 14:19 Ask Adam Savage: Savage Builds Wheel of Death Re-Do and Unrealized Ideas
2WFFhicVeXI 12:00 Ask Adam Savage: Origin of "I Reject Your Reality ..."
zyNdK6iXcyM 8:57 Ask Adam Savage: Most Important Myth
4OnOyyTyvcc 11:29 Ask Adam Savage: "Is ADHD a Positive or Negative for Makers?"
XkRHl8v5vrU 4:35 Ask Adam Savage: "Would You Go Back to ILM?"
COh6jTqWZmU 15:46 Ask Adam Savage: "What's Your End-of-Life Plan for Your Shop?"
yqmPea6d8ec 8:30 Ask Adam Savage: From Messy to (More) Organized
mwdHPG_heV0 8:44 Ask Adam Savage: Public Education, Doctor Who and Scissors
ebDc1uWiJD4 11:04 Ask Adam Savage: The Importance of Portfolio
4CHlcNqB20Q 8:42 Ask Adam Savage: Props from Literature and Favorite Animation as a Youth
YBILSR7Hu5o 9:36 Ask Adam Savage: Best Age to Introduce the Creative Process
7vRG0QpAT24 7:57 Ask Adam Savage: When Grant Met NSYNC
8aOzfsbex8U 3:50 Ask Adam Savage: Favorite Recent ILM CG or Artwork
qvU5PZgSowk 9:06 Ask Adam Savage: "Was ILM Your Dream Job or a Stepping Stone?"
ZN-9DiI4jr0 10:11 Ask Adam Savage: Digital vs. Practical Effects, Boredom and Never-Seen Props
qvBAoxuf9zE 11:36 Ask Adam Savage: ILM Hiring Practices and Prop Policies
j26Xc4ngIaM 8:33 Ask Adam Savage: Most Valuable Skill Acquired at ILM
PhkZQeTQ6oM 5:31 Ask Adam Savage: How Ridiculous Was Filming the MythBusters Herding Cats Episode?
2GGkWdLm7PI 10:19 Ask Adam Savage: My First Day and Movies at ILM
IkawOT_Cg-s 8:41 Ask Adam Savage: Would You Have Changed Anything About MythBusters?
mxPQBIu_Hro 8:43 Ask Adam Savage: Were Any Myths Deemed Too Simple to Test on MythBusters?
AkBxe0DXzZs 7:07 Ask Adam Savage: Most Obscure Skill Acquired During MythBusters
4u7I-6AcA00 6:38 Ask Adam Savage: "Which MythBusters' Result Impacted Your Everyday Life?"
kaI-Ri7Ias4 7:23 Ask Adam Savage: What Projects Are Best to Attract New Makers?
HMzg0bVY2Ds 11:09 Ask Adam Savage: Key Quality in a MythBusters Reboot
8wG-gr_IRHQ 9:34 Ask Adam Savage: Most Surprising MythBusters Result
rDnGHwqnfyM 10:33 Ask Adam Savage: M5 vs. M7 Myths
GC4oa5YKN-M 6:35 Ask Adam Savage: "Are You a Ghostbusters II Fan?"
VEgqBVdsJZg 9:34 Ask Adam Savage: "Do You Own a Screen-Used Prop from Ghostbusters?"
DUsBoLT1Yv8 5:25 Ask Adam Savage: What Is a "Maker"?
-AvhYMPvPR4 5:45 Ask Adam Savage: Is Adam an Adrenaline Junkie?
gGzGX8YfSaw 6:53 Ask Adam Savage: Prototyping on MythBusters
N-XpBXr7YHQ 12:00 Ask Adam Savage: Ghostbusters' All-Female Reboot, Abandoned Props and FX
MOsOlF0-Gas 7:01 Ask Adam Savage: The Myth That "Got Away"
MhPrj-32Y88 9:05 Ask Adam Savage: "Do You Have a Bill Murray Story?"
StQcRsCkIjw 8:13 Ask Adam Savage: Those Scripted MythBusters Blueprint Segments
_9bfOcx4h-4 8:35 Ask Adam Savage: Favorite Wood for Building Storage
qSDzoOQxG-I 9:08 Ask Adam Savage: Exciting Maker Tour Discoveries
I5ol3lM2HDo 9:56 Ask Adam Savage: Pros and Cons of "Worldwide Fame"
iUNnmuMkGxs 7:44 Ask Adam Savage: "Is There Anything Too Dangerous to Repair Yourself?"
fsb8NxzNozo 4:31 Ask Adam Savage: LEGO MOCs
-8JUTYj7Q30 16:02 Ask Adam Savage: What MythBusters DIDN'T film, the Bomb Range and Simultaneous Myths
wSoCA0bO1_M 11:19 Ask Adam Savage: "Did MythBusters Influence Your Current Creative Problem-Solving?"
cgFmFqh90PU 13:02 Ask Adam Savage: MythBusters' Unsung Heroes
zyFAlep9CA4 8:48 Ask Adam Savage: Grossest MythBusters Myth
OSMLCySKMWo 8:23 Ask Adam Savage: First Thought When Jamie Asked Me on Board
U0QqMQ2Makg 12:12 Ask Adam Savage: "Was MythBusters Intended to Be Educational?"
mlBnrx5Z3Ww 9:55 Ask Adam Savage: "Do You Lament Being a Generalist?"
EDLU4k9R81c 9:00 Ask Adam Savage: "Why Do You Refuse to Acknowledge Some Indiana Jones Films?"
jp2wZ4q68FQ 5:45 Ask Adam Savage: Tips for Projects in a Limited Work Space
a6voK4rDiUM 13:43 Ask Adam Savage: Stolen Indiana Jones Whip Update
HypnuwjJUgY 5:37 Ask Adam Savage: Ideal Qualities in a Collaborator
h-5hIMkLxRs 12:23 Ask Adam Savage: Essential Pieces for Indiana Jones Cosplay
hjINCIPY4Wo 4:58 Ask Adam Savage: Organizing Tupperware
nTmpDF3VtwQ 11:33 Ask Adam Savage: Favorite Scene from Raiders of the Lost Ark
pZ2qSzZPyPw 11:40 Ask Adam Savage: Fondest Berkeley Repertory Memories
DQnS5SdZ9BE 3:39 Ask Adam Savage: Preferred Sketchbook
hjx2vezyhj4 3:43 Ask Adam Savage: Most Underappreciated TV Series
B9aa__BK8Zk 16:30 Ask Adam Savage: What Books Changed Your Way of Thinking?
wldwf-9B-Us 13:17 Ask Adam Savage: Researching and Recommending Tools
Af-jExEh4SU 3:39 Ask Adam Savage: Best Pen for Writing Labels
nIP3AI8DsG0 4:47 Ask Adam Savage: How to Find Garage Kits
AEHsxb_rSAk 4:56 Ask Adam Savage: Destigmatizing Hearing Loss
4BJAKHv-NLE 13:56 Ask Adam Savage: "Funny Stories about Grant Imahara"
XGFSn2Xm8ks 1:00:23 Ask Adam Savage: "Did you ever meet George Lucas?"
H4-jGNoMlWU 49:07 Ask Adam Savage: "Do you ever just chill out in your shop?"
7COvFaFTAy4 40:33 Ask Adam Savage: "Do you ever feel imposter syndrome?"
Ki0g7I3mASA 28:52 Ask Adam Savage: "Are You an Educator or Entertainer?"
Zt3649jao68 2:49 Ask Adam Savage: What Full-Size Working Prop Would You Want to Make?
nZZlEbttaO0 5:37 Ask Adam Savage: Career Paths for Makers and Polymaths
HMsKjzt7Gpk 3:01 Ask Adam Savage: What's the One Thing You'd Save in a Fire?
aWFHIfmzTYE 2:59 Ask Adam Savage: Preferred Shop Stools
XHHp3dW-TCw 3:46 Ask Adam Savage: Costume Storage
cHEq3HkZf-8 4:49 Ask Adam Savage: Working With Other Makers
1jx_O0no0pY 1:12 Ask Adam Savage: What is Savage Builds?
o_xUJfX-Hy0 4:17 Ask Adam Savage: A Movie You Wish You'd Worked On
tZ4Uyo3oIg4 4:48 Ask Adam Savage: Least-Used but Most Important Tool
5i1zcFjjYAE 3:49 Ask Adam Savage: The Role of Cardboard in Making
qD528UrBNLA 3:53 Ask Adam Savage: How to Interact With Famous People
IDcnw167dN0 2:06 Ask Adam Savage: Connecting to Crafting
qjJwbi8yADM 1:34 Ask Adam Savage: Most Difficult Myth
R9Qm5DQAuag 2:02 Ask Adam Savage: Failed Explosions on MythBusters
exCrXc8hAAA 2:32 Ask Adam Savage: How Does Adam Savage Decide Next Projects?
MwsLhlVlaZc 2:32 Ask Adam Savage: Adam's Favorite Cosplay
1XFhm8nry-Y 2:29 Ask Adam Savage: How to Deal With Success
yw8gFo2DJvM 3:37 Ask Adam Savage: The Role of Social Media
OO8xF-kgMJU 1:55 Ask Adam Savage: Nourishing Kids' Interest in Science and Art
8VDiTgL0qL4 2:15 Ask Adam Savage: Cosplaying as a Celebrity
GRSq75EdzmE 3:11 Ask Adam Savage: Ah-Ha Moments
e3YB3z0YIh8 1:18 Ask Adam Savage: Small, Extra Arms vs. Prehensile Tail
Nx73IDlgSF4 2:34 Ask Adam Savage: Favorite Guest on MythBusters
CaFR4vGKrvc 1:50 Ask Adam Savage: Which Tools Don't Work?
Xwpufxg__6A 1:28 Ask Adam Savage: Best Adaption of a Book
-BM_ghu0qq8 4:03 Ask Adam Savage: Worst Injury While Making?
kmHgfmkEwDE 3:25 Ask Adam Savage: Getting Over Maker's Block
8Cu9Zxr-fjg 3:43 Ask Adam Savage: Favorite Shop Tools!
jY3O8Kt2IVg 3:09 Ask Adam Savage: Favorite Things to Take Apart
X-UWkbx3ppU 2:24 Ask Adam Savage: State of Mind for Making
lgQ2N-dFgQc 2:01 Ask Adam Savage: Overcoming Large Learning Curves
LImkIx2wasw 2:12 Ask Adam Savage: Old vs New Technology
4t1B0iH4jb4 2:20 Ask Adam Savage: Tips for Kids to Become Makers
GVnoTrJNAtc 3:07 Ask Adam Savage: Who Cleans Up the Mess after Builds?
yzYS9yEcJAY 2:48 Ask Adam Savage: Giving Ourselves More Credit
9okIF3RZRcc 2:36 Ask Adam Savage: Recovering from a Mistake
J-9dGGKAQPE 2:15 Ask Adam Savage: Biggest Explosion?
0PQul0uH_oc 2:43 Ask Adam Savage: Most Satisfying Recent Project?
iCl8ek0gLPA 3:44 Ask Adam Savage: Being Dropped in Bubble Wrap?
40dx0L5t8-s 2:31 Ask Adam Savage: What Do You Do After Work?

NM9Hxpk_tPo 18:32 Adam Savage's One Day Builds: Annular Cutter Storage!
SGUtT2Lo944 1:16:13 Adam Savage's One Day Builds: AT-AT Walker Garage Kit!
RfNIlmKXOWg 32:40 Adam Savage's One Day Builds: Custom Poker Chip Carrier!
DPTu47FBkpg 46:04 Adam Savage's One Day Builds: Chinatown Stunt Knife (Corridor Crew FX Challenge!)
bJp3B3jZkhE 36:16 Adam Savage's One Day Builds: Aliens Motion Tracker Prop!
Arm0Mvx45Us 12:28 Adam Savage's One Day Builds: Adding Casters to Costume Cases!
A4v97zfHzcU 28:44 Adam Savage's One Day Builds: Aliens Welding Torch!
SSvcKIa1Uws 1:02:37 Adam Savage's One Day Builds: Moby Dick Diorama Maquette!
K0FcUntHyKw 58:02 Adam Savage's One Day Builds: Razor Crest Mods, Part 1!
GtLCJ2b6XEc 21:46 Adam Savage's One Day Builds: Mandalorian Vibroblade Kit!
5RL7EYSbc_g 55:52 Adam Savage's One Day Builds: The Matrix EMP Switch! Blitzway's 1/4 Scale Apollo 11 Astronaut!
wmjZL8nm3MM 46:58 Adam Savage's One Day Builds: Inglourious Basterds Knife Replica!
zR4X775Y-9E 34:51 Adam Savage Reacts To His First One Day Build!
S5o9NORnF1o 57:32 Adam Savage's One Day Builds: Papier-Mâché Mask!
FuMf6-9ZsJo 40:29 Adam Savage's One Day Builds: Vintage Bicycle Restoration!
rL7k8kjIdow 1:03:48 Adam Savage's One Day Builds: James Bond's Spectre Cane!
NMEkK9cdEqg 30:44 Adam Savage's One Day Builds: RoboCop 2's Cain Stop-Motion Puppet!
jOXidWIB-gY 20:13 Adam Savage's One Day Builds: Drill Press Modifications!
4GcuGnjv2Aw 29:01 Adam Savage's One Day Builds: Special Effects Syringe!
9LVFVTMleio 46:32 Adam Savage’s One Day Builds: Head-Mounted Dart Blaster!
YIbb-Bck8wc 46:43 Adam Savage's One Day Builds: Blade Runner 2049 Helmet Parts!
uzF351VecZA 40:38 Adam Savage's One Day Builds: Painting The HasLab Razor Crest!
xHS83PFsek4 24:20 Adam Savage's One Day Builds: Weathering the Blaster Vault!
NYkF5EwaDBU 19:29 Adam Savage's One Day Builds: RoboCop 2's Cain Robot!
hX5Qsrpj9Ao 31:26 Adam Savage's One Day Builds: Surface Plate Cover
V0kQDCVU_48 36:38 Adam Savage's One Day Builds: Mini Apple Box!
IeFIhKaJEFo 31:34 Adam Savage's One Day Builds: Dune Sand Compactor Replica!
uEcx6yb5yXQ 41:33 Adam Savage's One Day Builds: Magnetic Lathe Chuck!
ykr2IMSYDMc 30:43 Adam Savage's One Day Builds: Ping Pong Ball Launcher!
jQSTJSniXKM 32:25 Adam Savage's One Day Builds: Fixing the Mill's Motor Fan
3qOJakmE7Pk 33:52 Adam Savage's One Day Builds: Mythbusters Blueprint Display with Kyle Hill!
gaJgfS_2LZ4 32:36 Adam Savage's One Day Builds: Gauge Block Storage Rack!
_2kmXLP_uXg 33:13 Adam Savage's One Day Builds: Machining Mystery Prop!
m6VYpHdBG84 15:48 Adam Savage's One Day Builds: Weathering a Sword Blank!
yzy_8tT4TO0 24:35 Adam Savage's One Day Builds: Miniature Astronaut Display!
9TZ5yflpmq4 42:15 Adam Savage's One Day Builds: Ghostbusters Ecto Goggles!
9yzg3a91F5o 45:20 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 4)
2O92DT4x0tg 1:04:21 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 3)
HAirnq80dcQ 1:28:50 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 2)
OshKZcTFEZY 32:21 Adam Savage's One Day Builds: Ghostbusters: Afterlife Hand Prop!
0FKxM-zNZBk 1:10:32 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 1)
dloSR3a57IA 43:24 Adam Savage's One Day Builds: Ghostbusters Proton Pack!
NxL4SLzAkao 1:27:29 Adam Savage's One Day Builds: Aliens Colonial Marines Armor!
iEaf3t3KUyg 27:25 Adam Savage's One Day Builds: Hasbro Mandalorian Helmet Repaint!
zginChewoKU 31:35 Adam Savage's One Day Builds: 2001 Spacesuit Helmet Repair!
-imr0Cy7NQY 39:42 Adam Savage's One Day Build: Acrylic Display Box!
xePxGWc_mH0 34:00 Adam Savage's One Day Build: Fake Beard Wiring!
ijosoNfEBP4 37:21 Adam Savage's One Day Builds: Aliens Colonial Marines Shoulder Lamp!
iiZ5rh3Uo1o 1:14:52 Adam Savage's One Day Builds: Excalibur Henchmen Armor!
dlCiIAS6fsA 26:51 Adam Savage's One Day Builds: MacReady's Hat from The Thing!
NNNcGCZHvxE 53:53 Adam Savage's One Day Builds: Foamcore Architectural Model!
ajHmyFX9zvk 24:47 Adam Savage's One Day Builds: Workbench Vise Upgrade!
OUHShx43JVU 1:01:48 Adam Savage's One Day Builds: Miniature Piano!
WAxxrBF5V3M 1:16:33 Adam Savage's One Day Builds: Famous Gemstones Collection!
7D8sXR0ozeE 1:24:21 Adam Savage's One Day Builds: Animatronic Bear Head!
0znjWy-Tr4Q 55:55 Adam Savage's One Day Builds: OneWheel Electric Skateboard Mods!
TjvX8GiYA5w 44:30 Adam Savage's One Day Builds: Monster Puppet Kit!
QWBFHoJrosY 35:49 Adam Savage's One Day Builds: Star Wars Acrylic Paints Rack!
l4Uew4czJ1o 41:51 Adam Savage's One Day Builds: Queen Elizabeth's Buzzer Bell!
cLrqogSndWs 1:09:07 Adam Savage's One Day Builds: Epoxy Headcast Helmet Skullcap!
DcNPYycz4nU 57:13 Adam Savage's One Day Builds: Mandalorian Blaster Paint and Weathering!
Cj0uLKibPW4 1:37:37 Adam Savage's One Day Builds: Mandalorian Amban Blaster Replica!
4ufQUvxpuAo 36:53 Adam Savage's One Day Builds: Car Engine Model Kit!
r0aae4df3Aw 37:18 Adam Savage's One Day Builds: LEGO Blade Runner Spinner Model!
W1DrW_f_vNo 32:11 Adam Savage's One Day Builds: Hyperdodecahedron Model Kit!
drLGYpPbrZg 53:36 Adam Savage's One Day Builds: Painting Iron Man Armor, Part 2!
2tQf7cruUMA 37:37 Adam Savage's One Day Builds: Galloping Horse Animation Machine!
CtGMBOqs0us 1:06:18 Adam Savage's One Day Builds: Painting Iron Man Armor!
HqUlPoxrzjM 40:02 Adam Savage's One Day Builds: Hellboy Samaritan Replica Finale!
ND4Y0gx4aTI 1:05:27 Adam Savage's One Day Builds: Iron Man Armor Boots!
zWaQNVGhuyU 30:56 Adam Savage's One Day Builds: 3D Print UV Curing Oven!
eJUbdNhdhkk 1:46:32 Adam Savage's One Day Builds: Remaking The Crown!
I5dH96JunrQ 55:55 Adam Savage's One Day Builds: Resin 3D Printer Station!
jmYBQSqXnQ4 47:57 Adam Savage's One Day Builds: Shop Dust Collection System!
of9qY62tWKo 40:53 Adam Savage's One Day Builds: Tabletop Maker's Vise!
ATfL9JQ--JE 1:03:05 Adam Savage's One Day Builds: Hellboy Samaritan Prop Barrel Rifling!
5NH1-3NBcOk 1:28:31 Adam Savage's One Day Builds: Micrometer Gauge Box Set!
jfUL73pRYq4 1:02:53 Adam Savage's One Day Builds: Studio Ghibli Diorama!
lUwMEjh2-78 1:12:07 Adam Savage's One Day Builds: St. Edward's Crown
9MLQEC2Hv28 24:51 Adam Savage's One Day Builds: Wire Storage Solution!
r93bWMzGo60 1:14:57 Adam Savage's One Day Builds: Custom End Tables!
Ic2S9ySxO0I 11:26 Adam Savage's One Day Builds: Lathe Collet Storage!
apeZO6C0ZeA 51:52 Adam Savage's One Day Builds: God of War's Leviathan Axe!
sbqytCVtQb4 21:09 Adam Savage's One Day Builds: New Drill Press Table!
4iIBa0TLe9E 33:32 Adam Savage's One Day Builds: Mercury Spacesuit Wrist Rings, Part 2
fM9FtG01wMg 45:11 Adam Savage's One Day Builds: Spacesuit Glove Wrist Rings!
80YLonnG-Lo 28:24 Adam Savage's One Day Builds: Knight Lighter!
WQA-x2eYn5E 19:06 Adam Savage's One Day Builds: Custom Painting Shop Tools!
8Sqo8njgt_0 36:20 Adam Savage's One Day Builds: New Lathe Chuck!
2UeghPJrUxE 29:12 Adam Savage's One Day Builds: New Workbench Lights!
gCva75a8ATQ 18:30 Adam Savage's One Day Builds: Electronics Tool Cart!
uY7zpvjLx4Q 1:17:58 Adam Savage's One Day Builds: Iron Man Mark I Helmet!
beGXa1TO6vo 1:47:53 Adam Savage's One Day Builds: Wookiee Feet!
Vt0RxHzEhws 1:16:24 Adam Savage's One Day Builds: Iron Man Mark I Armor!
WBWUxWoNI5o 1:23:25 Adam Savage's One Day Builds: Hellboy Samaritan Storage Display!
eBAWHbi4THs 39:39 Adam Savage's One Day Builds: Hellboy Samaritan Full Teardown!
N_tKi14mFrk 23:16 Adam Savage's One Day Build: Sticky Storage!
JYWfikf-3DI 24:31 Adam Savage's One Day Builds: Chewbacca's Bowcaster!
iuNjDzT6PWo 55:53 Adam Savage's One Day Builds: Luke's Lightsaber!
Ww7Ts37eN2g 42:55 Adam Savage's One Day Builds: Hellboy Samaritan Bandolier!
SutetC6n9so 42:04 Adam Savage's One Day Builds: Hellboy Samaritan Carrying Case!
4GehjvyAsZs 48:48 Adam Savage's One Day Builds: Baby Yoda Mod and Repaint!
wnMH1s36WXo 41:14 Adam Savage's One Day Builds: How to Make an Apple Box!
4JQ4O1SPHSY 56:14 Adam Savage's One Day Builds: How to Build a $5 Sword!
aLI-6SmkJLU 1:02:15 Adam Savage's One Day Builds: Han Solo's Holster Belt!
ziIKLeacBDo 18:52 Adam Savage's One Day Builds: Hellboy's Samaritan Prop, Part 4!
WfJtqnSexss 29:01 Adam Savage's One Day Builds: Restoring a Fabric Chair!
AumnIehXwyI 35:57 Adam Savage's One Day Builds: Staple Sorter and Organizer!
csu4jQNFfzA 32:44 Adam Savage's One Day Builds: Drafting Tools Sorting Drawer!
1NWAxkDZ9xs 34:13 Adam Savage's One Day Builds: Hellboy's Samaritan Prop, Part 3!
gygyNt2AnKA 26:24 Adam Savage's One Day Builds: Giant Swiss Army Knife Repair!
inQ16HamIWk 52:25 Adam Savage's One Day Builds: Hellboy's Samaritan Prop, Part 2!
lsXLGT5N2uo 1:17:55 Adam Savage's One Day Builds: Ghostbusters Ecto Goggles + Vacuum Former Rebuild!
Pb1BpA7QN3U 47:41 Adam Savage's One Day Builds: Hellboy's Samaritan Prop!
HWnDC6KzLg8 28:19 Adam Savage's One Day Builds: LEGO Mandalorian Razor Crest!
chbZJAJ9y68 25:33 Adam Savage's One Day Builds: Miniature Shipping Container!
7aGfiNy9Oos 28:23 Adam Savage's One Day Builds: Table Saw Fence Upgrade!
BEVEYvAO3rI 21:32 Adam Savage's One Day Builds: Car Seat Dog Bed!
8PEc5blz_fY 21:20 Adam Savage's One Day Builds: Planer and Spindle Sander Station!
BbrQ4OX-1-E 32:29 Adam Savage's One Day Builds: New Cut and Sew Station!
XVEww6Ylw5c 41:23 Adam Savage's One Day Builds: Thread Tapping Guide Block!
EXaDxl60rTQ 54:24 Adam Savage's One Day Builds: Brass Watering Can!
OxkszitNWN8 17:46 Adam Savage's One Day Builds: Upgrading Captain America Shield!
lp85yyPSP10 43:29 Adam Savage's One Day Builds: Custom Workshop Apron!
ivaxOv25RaI 16:13 Adam Savage's One Day Builds: Letter Stamp Holder!
J170jeH0yXU 34:59 Adam Savage's One Day Builds: Foam Prop Safe!
BTGN5QNyA-8 42:41 Adam Savage's One Day Builds: Machinist Tool Drawers!
4MVxJNawefM 23:26 Adam Savage's One Day Builds: Tintype Photo Clamp for Gary Oldman!
m-ayU2GCQ_Q 34:50 Adam Savage's One Day Builds: Drill Press Modification!
_KfaSiD-7iY 38:35 Adam Savage's One Day Builds: Lathe Chuck Rolling Rack!
fru2G4bGL14 40:30 Adam Savage's One Day Builds: Lathe Tailstock Repair!
98MCz9gQaiE 32:41 Adam Savage's One Day Builds: Giant Nut and Bolt!
R-De84JfQBU 24:26 Adam Savage's One Day Builds: Spacesuit Display Stand!
eiQuBonhGiw 31:00 Adam Savage's One Day Builds: Workshop Filming Slate!
EWXcnVTY3pk 46:48 Adam Savage's One Day Builds: Air Tools Sorting Boxes!
ieDYlkJTNYI 20:38 Adam Savage's One Day Builds: Custom Pistol Whip Controller!
hIs3lioHoAo 21:44 Adam Savage's One Day Builds: Headphone Rack!
qE68mYkpZvQ 31:02 Adam Savage's One Day Builds: Portable Audio Recorder Rig!
oSHoo_thI2Y 37:24 Adam Savage's One Day Builds: Front Porch Table!
TsWG4nSi-Hs 42:45 Adam Savage's One Day Builds: Stitching Pony Clamp!
frwLir1A_qg 42:55 Adam Savage's One Day Builds: Making a Stable Workbench!
ritwf-_iOlg 1:08:55 Adam Savage's One Day Builds: Mini Chop Saw!
-xWGRVL-ExA 18:38 Adam Savage's One Day Builds: Mini Machine Vise!
65r_1TzJXaQ 50:07 Adam Savage's One Day Builds: Rhombic Dodecahedron with Matt Parker!
vOROGorDG6s 33:34 Adam Savage's One Day Builds: Fiber Optic Microscope Ring Light!
A3-9Vk_2be4 32:31 Adam Savage's One Day Builds: NASA Retro-Reflector Replica!
TT8PzFaZ0Zw 36:54 Adam Savage's One Day Builds: Lithium Ion Battery Charging Station!
I7U-QCTS9Os 39:29 Adam Savage's One Day Builds: Repairing Vintage Aviators!
nCrB0FnW__s 28:19 Adam Savage's One Day Builds: Movie Sword Rack!
0nLlCmZspVM 20:57 Adam Savage's One Day Builds: Tweaking the Table Saw!
yWRLz_r_d3A 33:32 Adam Savage's One Day Builds: Little Thwacker Hammer!
ZNwvjaIW-pU 1:00:10 Adam Savage's One Day Builds: Making a Die Filer Machine!
eVnWyEvT-KY 27:09 Adam Savage's One Day Builds: Lathe Infrastructure Upgrades!
PLHUcP8LfkM 1:28:25 Adam Savage's One Day Builds: LEGO International Space Station!
jPAGZpNZrwU 54:21 Adam Savage's One Day Builds: How To Build a Box!
z_Ti4GP0ntE 1:07:08 Adam Savage's One Day Builds: Refrigerated Cooling Suit!
ZjpPgv9XtJA 19:46 Adam Savage's One Day Builds: Thermal Detonator Kit!
SgCJeoDNmYU 41:21 Adam Savage's One Day Builds: Poker Table!
x8YTMPuvTGw 33:49 Adam Savage's One Day Builds: Dinosaur Skull Lamp!
Bw-ttd_EELA 13:54 Adam Savage's One Day Builds: Rickshaw Carriage!
TqWhLPsEJE8 23:21 Adam Savage's One Day Builds: A Fake Can of Beans!
8uGS11yuVyo 34:37 Adam Savage's One Day Builds: Portable Soldering Station!
JMv0PlMKkbs 20:54 Adam Savage's One Day Builds: Gaslamp Lantern Prop!
6ps4vbQ6Tk0 28:02 Adam Savage's One Day Builds: Workshop Hardware Storage!
3JRbGcyPUnk 26:11 Adam Savage's One Day Builds: Custom Beat Saber Hilts!
MP5pbJ6Ajjc 24:32 Adam Savage's One Day Builds: Space Camera Shroud!
kjxdWnUBmpU 37:16 Adam Savage's One Day Builds: No-Face Animatronic Mouth!
Dt6BQPNGGTw 41:52 Adam Savage's One Day Builds: Star-Lord Cosplay!
vqqEFEgx-ZI 35:00 Adam Savage's One Day Builds: Star-Lord's Walkman!
3jdF1yVBWdc 20:09 Adam Savage’s One Day Builds: Project Egress Apollo Hatch!
Srg47mr4X5A 14:01 Adam Savage's One Day Builds: LEGO Lunar Lander
Bh6C2O77EpI 14:39 Adam Savage's One Day Builds: Cave Museum Display!
YZV4A4Kl0yM 28:20 Adam Savage's One Day Builds: Hero Prop for TV Show!
2NYtPWhdhhQ 15:54 Adam Savage's One Day Builds: Iron Man Armor Stand!
7uS7A4x31PY 34:16 Adam Savage's One Day Builds: Scratch-Built Spaceship!
vCi5usulDIo 1:20:48 Adam Savage's One Day Builds: Swordmaking at Weta Workshop!
7oGslDjTnHI 29:33 Adam Savage's One Day Builds: Mortal Engines Hand Cannon!
6iIZ9rnS6HU 1:02:24 Adam Savage's One Day Builds: Eric Idle's Guitar Case!
ZfvtGrhYk0I 26:44 Adam Savage's One Day Builds: Kit-Bashing and Scratch-Building!
MxLOoriXkMc 46:22 Adam Savage's One Day Builds: Overengineered Bottle Opener!
GEhBPI2QVBI 0:34 Last Call for Adam's One Day Builds T-Shirt!
QCBcWm85gWo 15:33 Adam Savage's One Day Builds: Kit-Bashing a Robot!
BpaYqFd5S5c 0:48 Adam Savage's New "One Day Builds" T-Shirt!
WnJDYjbWCwI 1:10:53 Adam Savage's One Day Builds: The First Spacesuit!
AXzurpmc8SE 39:15 Adam Savage's One Day Builds: Everyday Carry Bag!
G7MDrUG4cws 36:59 Adam Savage's One Day Builds: 1000 Shot NERF Blaster!
9XB4Be6TjHU 55:21 Adam Savage's One Day Builds: Snub-Nosed Blade Runner Blasters!
JL3uZ88vA_0 19:54 Adam Savage's One Day Builds: Custom Workbench LED Lamp!
F48rk7h-GDo 35:33 Adam Savage's One Day Builds: Foam Ringwraith Gauntlet!
wl558EoTuEQ 30:19 Adam Savage's One Day Builds: Blade Runner 2049 Binoculars!
H9L3pX8zTPE 10:27 Adam Savage's One Day Builds: Cave Bathroom Upgrade
8qvlpRBeMNY 25:19 Adam Savage's One Day Builds: Foam Cosplay Sword!
BGlcF4Bpg78 37:01 Adam Savage's One Day Builds: Excalibur Sword!
dqmF2_h8icM 38:35 Adam Savage's One Day Builds: A Better Tape Dispenser!
9xpPXpnnCNI 39:25 Adam Savage's One Day Builds: Chewbacca and C-3PO!
1gJ4_Hc17cM 35:38 Adam Savage's One Day Builds: Chewbacca's Bandolier!
cwOXSXkW-uE 31:49 Adam Savage's One Day Builds: Custom NERF Rifle
-HfaLqmRO1k 21:52 Adam Savage's One Day Builds: Ping Pong Machine Gun!
M4M3I0nXEMI 23:41 Adam Savage's One Day Builds: Vsauce Glasses Hack!
G96YQQ7vW8w 20:26 Adam Savage's One Day Builds: Pedal-Powered Strandbeest!
7JrCejRYGAM 56:27 Adam Savage's One Day Builds: NASA Spacesuit Parts!
L9O3KWrvxKA 42:47 Adam Savage's One Day Builds: Totoro Costume!
0cQ91lO4pH0 30:03 Adam Savage's One Day Builds: Bear Costume!
qSr_qLkVqDw 19:08 Adam Savage's One Day Builds: Kylo Ren's Costume Gorget!
3KpdjGlHB30 12:44 Adam Savage's One Day Builds: Iron Giant Bolt!
ssxCQuv3KzE 13:45 Adam Savage's One Day Builds: Foamcore House!
U46Yo_6z_F4 21:30 Adam Savage's One Day Builds: LEGO Sisyphus Automata!
gcDCZ2TmTck 29:20 Adam Savage's One Day Builds: Hellboy Sword!
8UmBKWQ52oQ 27:53 Adam Savage's One Day Builds: Puppy Car Seat!
JYwNuP7cwJs 35:37 Adam Savage's One Day Builds: Making a Puppet!
jaVi06DaTk0 37:21 Adam Savage's One Day Builds: Star Trek Captain's Chair
LHITcrnGn1U 1:08:35 Adam Savage's One Day Builds: Cylon Models with Battlestar Galactica's Aaron Douglas!
CBHQ7lQGOf0 1:00:04 Adam Savage's One Day Builds: Cosmonaut Model Kit
QWiqr-lwYA0 1:07:23 Adam Savage's One Day Builds: Barbarella's Space Rifle
Et-JvYrQ84o 30:39 Adam Savage's One Day Builds: Custom Multi-Tool Belt Holster
O1--0DLJv-8 25:10 One Day Builds: Customizing Adam's Hero Sword
lPLvkrtqkJ8 33:00 Adam Savage's One Day Builds: Traveling Beaver Box
4sCReGjfZ_A 16:37 Adam Savage's One Day Builds: Han Solo's DL-44 Blaster
0JnTThZMJAg 13:12 Adam Savage's One Day Builds: Strandbeest Model Kit Fitbit Zip Wireless Activity Tracker
YXzxEqdvuIE 31:11 One Day Builds: Adam Savage Demonstrates Weathering Tricks Mophie Juice Pack Helium for iPhone 5
-tUHJnl8qPM 32:11 One Day Builds: Adam Savage Makes Something Wonderful from Scratch Sony NEX-5R Mirrorless Interchangeable Lens Camera

# Tasting History

hIKx0G4ghpA 18:44 The Noble Origins of Afternoon Tea
R-dPIBUvVC8 17:25 Byzantine Honey Fritters
SoFxrwuMuQs 20:42 Medieval Table Manners
iWlqxGQXZx8 20:24 A History of Ketchup
Kz-VpoNEWXM 17:38 A History of Tacos
zN1bzdxZdbg 17:59 The Absinthe Murder
OnTtA9z3ZeQ 16:52 The Day the Viking Age Began
FPi0RiAsegQ 13:13 What is Gruel?
KaTjWWJSei0 15:54 When Potatoes were Illegal
2ZcrScIlaQ4 20:26 The History of the Wine Glass
o9-rCHqPLj4 17:30 The Ninja Diet of Feudal Japan
CsjL0wBINnI 17:22 1950's Fish Pudding
S5bHN6UYiTA 13:32 Ancient Greek Breakfast - Teganites
0Uot4uVKrVk 16:56 Victorian Ice Cream & The Queen of Ices
MjjEjf3TI0U 16:24 A Tudor Salad for May Day
9NEyzsxjc2w 18:28 Anzac Biscuits from World War One
7hYBesohRK0 24:31 Dining First Class on the RMS Titanic
bbCD6zRHfbg 10:07 Punch Romaine from The RMS Titanic
qJ3gqoAaHG8 21:20 The Titanic's Crew Member Experience
GanHDpGstZI 20:18 Titanic's Second Class Experience
ob-TBojkaxw 10:12 The True Story of Titanic's Baker
JbmHZbTpoDY 19:24 Dining Third Class on the RMS Titanic
SGf_0_2Ji5I 21:08 Medieval Irish Food: Peasant to King
MNIrP_aqwQY 11:18 How to Make Coffee a Better Way
ux5VjS7o2gA 16:54 How the Doughnut got its Hole
KTVPV-15GL0 16:10 Hardtack & Hell Fire Stew
q3LdGNl2veo 17:55 Medieval Mardi Gras
2-4SOrYtTS4 15:10 Secret Foods of the Spanish Inquisition
AuzIBemYVaQ 9:29 Victorian Vinegar Valentines
x3ku4JFvPx8 16:33 Ancient Rome's Naked Fertility Festival
UolBvOIodEg 18:35 Icelandic Volcano Bread - Rúgbrauð
16Ityys4dx4 17:14 Feeding a Templar Knight
Pl55tJHadZc 20:19 Samosas of Mughal India
GSGNiDjILiU 13:19 Ancient Rome's Wonder Medicine: Cabbage
B0-TCPUNdbI 22:00 1600s Chicken & Cherries with Ken Albala
Mda8Jetfnx8 16:34 Hogmanay Shortbread from 1779
BjyRlYO6MDI 1:10:07 1 Million Subscribers Live Q&A
Oy17ef4cEL4 14:26 Quick Panettone: A controversial recipe
JJnOtxBQEgo 16:09 A Bakewell Tart from World War One
CRH5DODIgE0 15:12 Victorian Mincemeat With Actual Meat
9pNb7iQXhdU 10:34 Smoking Bishop from A Christmas Carol
xtOhZEkyY2I 14:33 Aztec Sacrifice & Pozole
40uw6VkWpaI 15:41 The Incredible Spiced Wine of Ancient Rome
h2tY_qqTk-E 18:08 What did Genghis Khan eat?
htARnZjxQGs 14:58 Ancient Babylonian Lamb Stew
sIFlPc-TW94 14:24 The History of Pecan Pie
-__hMt0lKPc 10:03 Tasting Forbidden Flavors
EajBNo-rBJY 13:55 Ancient Roman Steak Sauce
oQVCBWZSdnY 14:39 1915 Yorkshire Parkin for Bonfire Night
4QGq4XpavQ8 17:17 450 Year Old Pumpkin Cheesecake
-ghf587Nihw 9:27 Johnny Appleseed: American Weirdo
Y3R_ljOuptM 16:19 Why Vampires Hate Garlic - A Transylvanian Recipe from 1580
tCD_eMscy0g 16:21 Apple & Cheese Pie from 1553
4Glo4KM5Q_M 11:35 Weird Wedding Traditions & the Wedding Sip
WdWcPvZg6Wc 17:57 Making A Wedding Cake From 1769
mdOPg-4_R60 9:21 Gladiator Gatorade
H3KANWtAHDc 16:45 Feeding a Roman Gladiator
dR846JS3zbA 18:22 Viking Blood Bread
QiTLyQjHtSw 11:25 Captain Kidd's Punch from 1688
jlhkXj4miZI 17:14 Feeding A Medieval Knight
fH25yRShofE 14:25 The Lost Episode of Tasting History: Prince Biskets
_cFCvZL-JGA 11:04 The London Beer Flood of 1814
D_FabMorrMU 17:31 Ancient Egyptian Tiger Nut Cake
-tmAAlfTOGY 14:59 Fannie Farmer & the Modern Recipe
LcnZAAoq5mg 11:28 The Sweet History of Lemonade
de93oyukEyY 15:59 Escoffier's Kitchen Revolution
TQmA7RyFr_g 14:35 The Cookbook of Nostradamus: Prophecies in the Kitchen
BhrmGARFEVc 6:46 Drinking History: The Man in the Green Hat
IZLYPbJaefA 17:59 Egypt's 28 Ingredient Hummus
FNg71yR7b-E 15:24 Pirate Guacamole & Bumbo
PIxN-pr3g7c 19:11 History's Most Expensive Spice: Saffron
h9xX78pauXQ 19:21 Japan's Edo Era Noodles (1643)
4eFHcfnWc70 19:26 The Talking Cows of Ancient Rome
BR7fywQ-vUE 21:28 A History of Ice Cream | A Recipe from 1789
qqAk9-00Z6o 16:19 Coca de Sant Joan & the Fires of Saint John's Eve
JLbej0adpKs 14:51 Fried Chicken Face-Off: 1911 vs 2021
Mbaz5P7kHfg 17:51 Toad in the Hole & the Cows of Scotland
hZFfs3sJamI 19:43 Adobo: Filipino or Spanish?
uNwXMvp9sCE 16:46 Ancient Greek Olives - Gifts from A Goddess
h6XvMKdD2tY 19:05 500 Year-Old Pizza VS Today
37O-by0BthQ 14:38 Korean Flower Pancakes - 17th Century Eumsikdimibang
zk0FUS3Oq8s 17:45 An English Manor for a Bowl of Stew?
giPXpKy2lQ0 18:52 Baking An Ancient Roman Cheesecake
NvQkpdFjqJY 16:29 Ancient Roman Honeyed Pork
k6VBdGAEJyc 17:12 How To Feed A Roman Emperor: Vitellius & the Year of 4 Emperors
jHpkqBFKmvA 3:27 I Quit
qj5vg2fjOtk 18:52 Feeding a Roman Legion | Posca & Laridum
DvBNqLUuHLI 19:08 Dragon Heart for a Viking King
FVIng1x_6BU 17:51 Fabulous French Feasts of the 1700s
n7T5abyBiUg 15:48 Queen Victoria's Easter Cake
S8KpFs1CHgw 19:28 Irish Stew From 1900 & The Irish Potato Famine
MaYPEvDuo1I 17:21 Aztec Chocolate - Blood & Spice
biE0ifWNfU4 16:49 Making Ancient Egyptian Bread
X-L2fVjnHFE 16:21 The Legendary Medieval Cockentrice | 1st Anniversary Episode!
RJsjHSyWlPE 1:17:50 Tasting History 1st Anniversary Q&A
0Ljm5i5N6WQ 17:38 Semlor: The Dessert That Killed A King
An6myivFE8A 17:10 Ancient Nian Gao | Lunar New Year Cake
oPTdSMOQRnY 18:31 How to Eat Like a Pirate: Hardtack & Grog
r38ZpdaAX8c 16:52 The London Gin Craze and Beyond
PhbkD0CuVtc 17:33 Béchamel & the Death of Monsieur Vatel
qtmOdxEVytA 14:42 Ancient Roman Fast Food Restaurants
zz0y1d6IIpY 18:21 Skinny Monk vs Fat Monk: Medieval Rule Breakers
7IYYhoO-hiY 18:04 A 4000 Year Old Recipe for the Babylonian New Year
7bsHOxQtBW4 15:47 Eggnog: A Christmas History
hNIvtkADcCA 14:08 Making Medieval Gingerbread
mvURMFzcIqc 16:26 Celebrating Saturnalia with Cato's Globi
s2JyN7JF8bs 19:35 Unwrapping Aztec Tamales | The Tamale Wars
2qauMSeqWpU 18:57 Figgy Pudding | A Victorian Christmas Tradition
zKa5GRu4LwE 16:16 What Did Medieval Peasants Eat?
FF0HnhuzGak 16:03 Pumpion Pie from 1670
1MAB-VVqjOE 18:47 Making Medieval Mead like a Viking
D-QHd4_1geE 18:42 Silphium: The Lost Aphrodisiac of Ancient Rome
1hHYk2evUZQ 1:00:31 Election Cake with Q&A
tpWdzXJObZ0 12:24 Soul Cakes & Trick-or-Treating
M2bh80b40D4 18:47 The History of Sugar Part 2 | Victoria Punch
ehVesZ0JS8Q 17:32 The History of Sugar Part 1 | Medieval Arabian Pistachio and Rose Candy
o4YmvQt29ko 17:46 Scappi's Renaissance Herb Torte
oqQzWg9pXmg 15:57 Spartan BLACK BROTH | Melas Zomos
uA98IonYvb4 15:40 Precedella | 1500's Pretzels made with Wine
eXWYmTf93Ms 1:02:28 Making Baked Pumpkin "Doughnuts" & Live Q&A
2FpEEb44suM 16:55 Yuanxiao from the Ming Dynasty
NPxjQetKPoo 15:26 Quesadillas Cernidas & Aztec Maize
luz_AqzDkKI 11:10 FARTS OF PORTINGALE | A Shakespearean Treat
6LynenQ5h2Y 16:56 The Strange Flavor of Parthian Chicken from Ancient Rome
CilkAVJLBUY 16:47 Loseyns - Medieval English Lasagna!
spjaUo2J4Nc 44:01 Tasting Canned Haggis & Q&A
SD3WKbXhm6M 15:13 The Wonderful History of Pancakes
3xZ0QJQpn1g 13:20 Payasam | Medieval India & Dessert for the King
XtkAU4juIZU 13:56 KYKEON | The Drink of Greek Heroes
IB1C0BL0ZlA 13:28 Civil War Bread Pudding
9apP8NYt9LA 1:06:29 Tasting History Q&A #1
LYBccRqsv6M 17:31 Making Hippocras at Home | Medieval Spiced Wine
Sw2qrt6tOKw 12:18 The Bread of ANCIENT ROME | Pompeii's Panis Quadratus
beBQgxdu2eY 10:50 The Poisonous History of Tomatoes | Pomodori Farciti all’Erbette (1773)
DOMlXRxuwlM 13:59 A Dish for the First 4th of July... and why it should be on the 2nd.
upos2b7-O7s 15:31 A Tart to Topple a King - Lombardy Custard
paHt8qHMo7o 1:18 THANK YOU!
A--e0axoGxc 13:21 Oldest Cookbook in the West | APICIUS | Ancient Roman Mussels
5S7Bb0Qg-oE 16:02 I finally made GARUM | Ancient Rome's favorite condiment
2OFUZ_hd8_k 13:15 Cooking from THE FORME OF CURY: England's First Cookbook | Galyntyne Sauce
CQksGGtDB2w 13:12 History's Fluffiest Dessert! - Everlasting Syllabub
TdvRfPCrR3A 16:46 How to Bake Medieval Rastons | The Life of a Miller
w36CYveyCxU 14:42 The Softest Bread In England | How To Make 18th Century Sally Lunn Buns
NhSj_VMjmUA 12:13 Anglo-Saxon Oatcakes - How Not To Burn King Alfred's Cakes
J4sgFGcU9Bs 12:58 Making a Medieval TART DE BRY (Brie Tart) | Brie: The King of Cheese
yYo5QdWMXcE 0:36 Tasting History with Max Miller
_o7Oq-OjKu8 8:45 Making Medieval Fig Spread - Rapé | History of the Fig
bN4Ai2AqNCc 5:46 Cooking A CAPON Dish For A Medieval King - Sweet Measure
rQT-aY9sTCI 7:49 How to Make a MEDIEVAL TRENCHER - Torte Bread
ENJbVgjFwF0 10:12 What does a 1920s BIRTHDAY CAKE taste like?
eKH7pP102c8 9:00 Weird Cures for the Black Plague - Candied Horseradish
jtCKA_NeEQ0 7:37 Apple Muse for the Plague | The Four Humors
ugk4AW8V6_c 9:09 Cooking Medieval Dessert for Lent: Bruet of Almaynne in lente
ZlMhZvOX2ps 8:18 Making 400 Year Old Buttered Beere
GCCJ2Qpr1nM 11:29 Baking A Medieval Cheesecake - The History of the Sambocade
vlQZ3NPnoLk 6:49 How to Make Medieval Cheese

# Sally Pointer

sXYo0t_W-hs 4:34 Harvesting Lime Bast: part two
38F2rsfXtMM 22:44 Making a Tasselled Belt for a Bronze Age outfit
4VSocZCxl8M 4:06 Stinging Nettle Friendship Bracelet Challenge
7g4SLai6US0 5:19 Hedge-bothering walk filmed on a Blackview phone
x-oVz8OZCJ4 5:15 Harvesting Lime Bast for Cordage and Basketry
ZqDPJ3jB7vk 9:23 Make an Anglo-Saxon style Ring Pouch
TdaHQrQ2FPg 23:16 A Rummage Through My Fibre & Cordage Stash
4fKKLOUNOHU 8:42 How to 'Run a Heel'. Reinforcing knitting before it needs darning.
aztSSF78-ts 3:49 October Update 2021
idsZ-h1HArU 16:09 Making Simple Prehistoric-style Leather Shoes
8TKsjPX8wxs 9:15 Palaeolithic Crafts at Creswell Crags
Mkwu9j8epXE 14:50 Minimum Effort Stinging Nettle Fibre
OBJfAb-Z7Bk 24:06 Making a Palaeolithic Beaded Tunic
IIbU6poSaW0 22:28 Make a Lavender Stalk Basket
JInRLAfgVqI 14:45 Stinging Nettle Sprang Bag #3nettlechallenge 2021
vixSpsIb1bg 19:03 A 'grene dorge' Fingerloop Braid Hatband
jw-OT_aMsGE 7:05 Preserving Lime (Linden) Leaves to use in Dolmade Style Wraps
OBM9GqHTWEk 4:54 Three Nettle Challenge 2021
sMp3YFgON0I 9:02 Foraging for Wood Ears
MSbm1pSIWvs 22:48 Is the Nettle Fibre Ready to Harvest Yet? (May 31, 2021)
D7VKbLHIwnI 15:20 Turning knitted Stockings into Sleeves.
GYQ38RGWyYc 5:56 Making a hat display from a wig stand
XkKsnkfo228 4:34 Make a Cone Distaff for flax spinning. Recycled materials.
JrU7Lmx5lbo 13:15 Stinging nettle, wild garlic, poppyseed and acorn flour bread
nzxKRP3Wpr8 1:59 A quick update: April 11, 2021
1VS-vsuEjUY 30:39 Making a Twelve Strand Braid Belt
WmNLhkHhWYM 35:50 Palaeolithic Hair-net Experiment
z-gIGbhViD4 16:07 Vintage Inkle Loom: making it work & exploring the history of this style
UtGQgWaxiS4 4:21 Stocking Caps, how they are made & how to wash them
f6rNS_lgqWI 4:26 Spindle Tree (spindle berry)
OOal36EBBbM 20:28 Oak trees, Acorn flour & dye
nZ7uP0hMupI 12:34 Autumn Equinox walk 2020
MceuEIhJcDQ 13:56 Hedgerow Hot Toddy Syrup
TOOdGs7HJ1k 16:52 Horse Chestnut, natural 'soap' & natural dye
whVgvyo0uuI 11:42 Making Damson Hoisin Sauce
S04Ic3CLQ2k 26:54 One Nettle Sewing Thread Challenge
tTs6YfVQfJg 0:49 Nap Raising with a Fuller's Teasel
efHLsyyqbwE 18:07 Prehistoric Nettle Textiles: part two, update on progress
cygarW3B94E 8:47 Making a Bronze Age Egtved Outfit: part one
gHg-cQoVxfg 17:08 Setting up, improving, and using a toy Weaving Loom
Suwzcaf2WtU 7:16 Preparing Wild-crafted Plant Fibres for Storage
k_bVVwxdwxA 6:54 Make a Herb Vinegar Hair Rinse
5Eq7fyLMu9I 29:57 Prehistoric Nettle Textiles, scraping and splicing
v7AUf0PG1kg 17:22 Burdock & Bramble Coil Basket: part two
Z6c2wmIUpvM 19:28 Burdock & Bramble Coil Basket: part one
dxZC7rvOQJc 14:04 Preparing Burdock for use in Basketry
8inVU_BmvYM 5:28 Midsummer morning, searching for fairies!
wR6WZyFZb5I 21:02 Looped-around-a-core "Tybrind Vig" style nalbinding in lime bast cordage
XF6USicwYNs 2:13 Using a replica bronze Cupping Vessel
muoODo4sFq0 10:14 How to make Pickled Ash Keys
8jAew50DZ2w 28:00 Making a Warp Weighted Loom, Part Seven: Starting to weave.
q43ZxJLs1qE 21:11 Making a Warp Weighted Loom, Part Six: knitting the thread heddles
KAZ_4WcxYYk 20:21 Making a Warp Weighted Loom, Part Five: attaching loom weights and chaining the warp
SFbHecxFJfA 6:50 Foraging for Hop Shoots, what to pick and what to avoid!
9X3xtoK7cHA 30:30 Making a Warp Weighted Loom, part four: a tablet woven starting border and test warp
DqX1YbI-KsQ 14:21 How to draw an Interlace Pattern Dragon
gFN6fRd0qNs 16:14 Making Sourdough Saffron Buns for Easter
ggihfhUs27U 9:49 Tie-dyed & 'Tipsy' Walnut Dyed Yarn
xFP2KyuUjKc 4:01 Make a Rainbow Magic-fold Journal
qG2OjuJqEzg 13:05 Make a tasty Nettle Pudding
HD5T6kj8BZU 14:36 The "Crescent" Patent Darner. An Edwardian aid to efficiency?
fye1ccacE4U 2:56 Hedge-bothering for Hop Shoots & Nettles
Vk7OzyKhlCc 7:06 Making a Warp Weighted Loom: part three, pegging it together
cuUzPcuWATo 11:00 New Puffs for old Powder Compacts
BK-tprKgMaw 3:14 Making Froglets inspired by The Clangers!
qelKILeE9s8 6:09 Making a Warp Weighted Loom: part two, cutting to size
XzZBHSB0DFs 4:47 Making a Warp Weighted Loom: part one, choosing materials
QJ-Jjn7sBxI 6:44 Mending Knitwear: Laddered Stitches
tCQzaODgUo0 20:15 Vintage Sock Machine Intro (making silk stockings)
2i7ONQpSads 3:22 Little Knitted Pumpkins
HsV-qheD5-c 23:10 Make a Bronze Age or Iron Age Sprang Hair-net
MJ7OncBeVAg 13:45 How To Reshape a Tudor Knitted Cap
ESsnU-ECYnw 15:12 Iron Age Dyes: Woad, Weld & Madder
QANdOXLcjvo 11:08 Nalbinding at the Weald and Downland Museum
3FukAjL7aXE 6:42 Collecting Whitby Jet & Kimmeridge Shale for prehistoric jewellery
YiYmjV2dNb8 9:07 Making Oak Gall Ink with Alyia
YYpcfzd4ov0 11:49 How to make a Corn Dolly
HmXqSlxLN_Q 16:21 Simple Looping: the oldest form of Nalbinding?
ioruvT-qYK0 24:58 Early morning hedge-bothering, 24/7/19
fBdkXN0nq74 5:08 Making Nocino, green walnut liqueur
veuWj8JsLoM 8:53 Natural Plant Dyes: Weld
vPxJpugApEY 18:47 Making an Antler Needle Using Flint Tools
upN3lkBaYVA 2:29 Casting a Bronze Pendant
0grnnvmpn1A 13:56 Basic Nettle String
2qltFSRG3Vg 6:15 Roman Cosmetics
fBnBdnrICQg 20:51 Making a net bag for a Roman Legionary
3SJdWjSEN6g 8:12 Preparing bramble fibres for cordage.
3xrgvf6KrRY 7:46 Last Burdock forage of the season
Z34hxQsEMrM 6:59 Making String from Rhubarb!
vHaYLVoP7s4 5:56 Making Thorn Pins
ZTGLUDEEWko 11:27 Nettle Fibre Processing
62PvfIR0xDg 4:42 Simple Cordage Instructions
ebYZidfmn-0 7:55 Making Natural Cordage from Horseradish

# Pellwolok an Gernewegva

hST4dBO3u8s 31:05 An Mis 59 - mis Gortheren / July 2022
NbNKeTKQoh0 31:21 An Mis 58 - The Month - mis Metheven/June 2022
tX0PGd9OXvI 31:47 An Mis 57 - mis Me 2022 (May 2022)
kp-H_njhc98 14:50 'Bys Lowartha' (Gardening World) Episode 2 (Gwenton/Spring)
Lsowfu5IUPw 31:43 An Mis 56 - mis Ebrel 2022 (April)
sfaaIvV8hyA 3:11 'Gas vy a'm growedh' (Lay me down) - Skwardya
mQZHscVD_L4 32:58 An Mis 55 - mis Meurth 2022.
y7NwRVV0P3w 32:45 An Mis 54 - mis Hwevrer 2022
IK6cAOHSGKw 32:15 An Mis 53 - Mis Genver 2022 / January 2022
jAQVxCEtxiQ 30:31 An Mis 52 - mis Kevardhu / December 2021
ekEedaK7Yiw 2:22 Neyj vy bys dhe'n loor / Fly me to the moon (Cornish version)
jeLvFsFyIhA 8:24 'Like a Buried City' - promo 1
WvHNt_qOKkU 29:49 An Mis 51 - Mis Du - November 2021
VLwenMVn5MQ 12:42 Bys Lowartha - Kevres 1 - rann 01
lM5fme6fhi4 29:22 An Mis 50 / mis Hedra 2021
tJhGVZakyZs 21:22 An Tonji 4 - Cornish language music show
xSpFs0pvGhs 32:58 An Mis 49 - mis Gwynngala
qFx0hr2Ou38 30:44 An Mis - Derivas Arbennek: Pan dheuth an bys dhe Gernow
wqjy31E3qf0 23:11 Skwardya dhe Wooth Kernow 2021
bE_Q7gYLzD8 35:19 An Mis 48 - mis Est 2021
65u_bPtWa7k 1:10 bys lowarthoryon crowdfunder
MVt6X4OyiM4 30:02 An Mis 47 - mis Gortheren 2021
nRZQbc9hc10 0:21 GoothKeltek2021 - argemmyn
A7ni6KGBjug 36:59 An Mis 46 - mis Metheven 2021
Jk9S7vt4T1s 4:44 Tansys Golowan Sen Stedhyan
jtsesAy0BSk 0:38 Howard Curnow
QkIafpJCmHE 32:23 An Mis 45 - mis Me
PVE5sAUf5kU 19:39 An Tonji 3
LrRJOxlyRCQ 29:14 An Mis 44 - mis Ebrel 2021
3huASEi-wFE 32:48 An Mis 43 - mis Meurth 2021
ES9x_XR0h8s 34:00 An Mis 042 - mis Hwevrer
2MLxi4qn344 4:57 'Trelawny' - Skwardya
_xumHvG-iZk 22:55 An Tonji 2
PTkosdVrgqY 32:55 An Mis 041 - Mis Genver 2021
TvG5r_d1xeM 30:34 An Mis 040 - mis Kevardhu
bRUL7MmIcq4 33:31 An Mis 039 - Mis Du 2020
2tbWSy0SY1M 19:24 Joan Petchey - Elowen
BkCeQ3Wl3EM 23:10 An Tonji 001 (The Sound house)
3kJ2UYCSRp4 35:15 An Mis 038 - mis Hedra
HvMTJI40Bdk 0:19 Remembering Joan Petchey - pioneer of spoken Cornish revival
tJ3NkvF84jg 0:14 Joan Petchey 100th birthday - Julian German
rG8whm7dgbo 0:21 Joan Petchey 100th birthday - Grand Bard
6w4O5OCGIY0 30:50 An Mis 37 - Mis Gwynngala 2020
KAsk7fUBQdg 30:08 An Mis - Mis Est - AnMis036
hq_KKbV0kVo 35:22 An Mis 035 - mis Gortheren
Kz2FhpXZOUI 1:34 My a gar... esedha...
Tho_CwU6y3g 30:45 An Mis 34 - Mis Metheven
jSrN64FEYp0 0:10 My a gar an mor - Malcolm Bell
M2iZQn1JVp4 2:58 Kernewek y'n Chi - An Karrji
Dq6tFyGG0ho 29:35 An Mis 33 - Mis Me 2020
1nD6VHPriK8 30:06 An Mis 032 - Mis Ebrel
RXtjWJp3IqM 3:52 "Omwith" - Graham Sandercock
17D3tdvpjoo 8:25 Cornish in the House - 'dydh pobas' (baking day)
A7YwXxxSP_M 2:39 Cornish in the house - Goskeusel an lugarn - The lamp-shade
a7ThtBY4Ocw 2:39 Cornish in the House - 'Diank am gweli'
Pv0DJ3WjnfA 3:41 Cornish in the House: Mr Movyer
af0s5f6pyiU 2:50 Cornish in the house - Tidying records.
zGKonqZLW8A 3:25 'Gortos Tre' (Staying Home) - gans Matthi ab Dewi
1E_8o3wIVV0 4:19 Cornish in the house - Gardening - Lowartha
wKhYRwI39js 1:52 'Ponn' - Dust
-KQerOL4Lfo 4:39 Cornish in the house: Making tea
CY6ZUuk70ZQ 4:35 Cornish in the house - Washing hands
hvnIOVEJot4 35:13 An Mis 31 - Mis Meurth 2020
IxVOIyTlAtQ 32:07 An Mis 30 - mis Hwevrer
4gKEtfJIHKI 30:25 An Mis 29 - mis Genver
WYCQlnSewXc 10:19 Kan rag Kernow 2020
u8AwFZ58CGQ 30:05 An Mis 28 - mis Kevardhu
pMhx4zKXdO4 31:05 Jerry hag Erel 2
MgfqJeniYjU 32:31 An Mis 27 - Mis Du
Uz1a6DJeORg 26:05 Jerry hag Erel - 01
zIXaFxkUuxc 35:28 An Mis 26 - Mis Du
TPpy8Q3TNSk 43:37 AnMis025 - Mis Gwynngala
1rz85vods5M 32:56 AnMis024 - Mis Est
loNp_fyr6BE 33:10 An Mis 023 - Mis Gortheren
GMA-F6FKG14 43:40 An Mis 22 - Mis Metheven
hPTMBGMYAD8 2:22 speakcornish19
j4hDlYuxcVM 29:19 AnMis 021 - Mis Me / May
pEsG6tE7MRs 1:06 The Cornish Language Fellowship / Kowethas an Yeth Kernewek
_RpVpyonWzM 5:00 Cornish Language Plan 2019 is accepted.
UNwn9KfYmMo 32:09 An Mis 020 - Mis Ebrel
3Fqz1sEJenA 32:22 AnMis 019 - Mis Meurth
bH2kWCcBxc0 4:41 Bramm ha Bramm 2
FefgSevflVM 12:48 Viaj an Delow
TCy5l4Ok3KE 33:42 An Mis 018 - Mis Hwevrer
DJn_KZw7WfM 45:32 An Mis 017 - Mis Genver
xyh0rdu2cRk 0:48 Cornish Language Weekend 2019
zaEj2oD2rWY 27:27 Jaqi ha Jerry 2
cxZXIAGey6Y 0:33 Yn Kov Stephen Gainey
yWCAbXAYzbo 36:22 AnMis016
sKPoZxjmo6g 30:27 Esedhvos Morganow
pokwOfUWqz4 30:51 AnMis015 - Mis Du
p9rfNkL46JY 32:14 An Mis 014 - Mis Hedra
x_UgtFKQuWo 35:12 AnMis013 - Mis Gwynngala
mltwoDJLE5Y 31:12 An Mis 012 - Mis Est
VxJA5lAbg2k 30:08 AnMis011 - Mis Gortheren
3oikqiJNX2I 28:25 AnMis010 - Mis Metheven
-FckxK3Tc_g 0:11 George Eustice MP
Q-d-RZhLODE 31:05 An Mis 009 - Mis Me
wpxenPf6G2w 26:37 Anmis008 - mis Ebrel 2018
2t2VHovxkkc 23:05 Jaqi ha Jerry 1
FDA_kP66Af4 28:37 An Mis 7 - Mis Meurth 2018
F7GV8o-Wqbw 27:11 An Mis 6 - mis Hwevrer 2018
yfFCrkLGzxQ 34:20 An Mis 005 - mis Genver 2018
bsVoZaiIYBk 4:10 tresor rowan tree
wwWSrsuo9UQ 27:12 An Mis 4 - Mis Kevardhu 2017
m5sSQW1ujyU 23:10 An Mis 3 - mis Du 2017
oqfJVbG8K4Y 20:47 An Mis 2 - Mis Hedra 2017
HPmZYBTXUGk 2:39 Kresen Kernow
fvJYqvKzZQ8 6:27 An Mis 1 - mis Gwynngala 2017
aQRXRYnUf1Q 14:21 rosya03
7oipzomINU8 23:28 lorient2017 ENGLISH
DJG8RU6cHjM 23:54 An Oriant 2017
t_1EzCsq9Lw 0:44 Dhe'n Arvor / To the coast
KpjTGpMcnRE 1:40 Gool An ikyon
6vARZEZKk3Q 1:36 geekfest2
J1omcf8w470 0:23 Mernans Spock
DLa6UMrZRs4 8:38 Ni a vynn mos y'n tren
UKH5sLLwX84 10:18 G&S An Hwedhel
G5GkypWgxzg 1:21 George ha Samantha rag seythen #SpeakCornish
lesAwe_zL7M 11:03 solempnyans an gov
70fwGphbztg 0:18 speak cornish in 'Kowsva'
4kVjWipsd84 6:15 Dydh Musi 2017 / Mazey Day 2017
5XYHI-6RcHk 11:42 Rosya: rann 2
P-Qlv15TM7I 0:14 Business Cornwall speaks Cornish
akZnCjlQbbo 13:13 Rosya: An Fordh Goth
e_nS8UyqmLU 0:08 Equality for Speak Cornish Week 2017
4gDRQ5dW5Iw 0:08 Mind the seagulls - Speak Cornish Week 2017
AxHgq__Rd5Q 0:27 Speak Cornish with Gin
NtjwIhJv9lQ 0:30 Speak Cornish at the Chocolate Factory
NAdrlR8PzUA 0:49 Speak Cornish Week - on the beach / War an treth
ukr3-qd0fEs 8:20 dasserghi dew 01
-hHLi1Kk5ok 27:38 dasserghyans klappya
TQEyY_PFN_Q 9:04 Dalva an Yeth 2017
0arzUimI104 10:03 Dasserghi (fylm onan) heb istitlow
Z-M6k6316ro 10:03 Dasserghi (fylm onan) WITH ENGLISH SUBTITLES
F2diSuzdrrc 14:15 Pennseythen Gernewek 2017
8HBMZ1zA1xc 7:18 George ha Samantha - 'Nadelik'
_nTDhkRccs8 4:51 Keskusulyans Mebyon Kernow
ctuMN57gTaI 14:36 Kensa Keskan Lowender Peran 2016
wHvx3_GnoaY 3:23 Protest erbynn Kernans
9ynq2HiZfCk 3:06 Bretonyon yn Kernow
SDzET-dSnco 5:25 Dalva an Yeth
9SzVoghYC1o 5:28 Skians 2016 rann 2
NBnA9awnfVI 2:47 Skians 2016
3qMwFN1k_MM 33:10 PanCeltic 1984 Teach Siamsa session
qjJnCodDVm4 2:01 Keur Heb Hanow
tmHSUKyx37g 5:35 Cam Kernewek on RTE in 1982 at Killarney PanCeltic
m67g3_B4a_w 25:11 Kernowpalooza
xEz8SaQtUJg 58:11 krena
2m-Teyq7HbI 25:04 Cornish language weekend - rann 1
_-EK5GI3VTo 29:15 An Bennseythun Gernewek 1996
6q71U85p7Ow 22:42 An Bennseythun Gernewek 1991 Rann dhiw
4qzowCnMn5c 25:05 An Bennseythun Gernewek 1991 rann onan
zIPg_NnldAg 11:59 Skwardya Byw - rann 3
JFac8af6-R8 19:12 Skwardya Byw - rann 2
ZA7OdUcv-c4 19:18 Skwardya Byw - rann 1
O98zydPvQTs 4:26 Benjad a gan dhe Dewyn Bleustri
FCbto7wD-zU 0:45 Gol KesKeltek an Oriant 2015
DdKO4QlGDCM 20:33 Graham Sandercock plays at the Cornish Language Weekend
BAh3gkTcFaA 2:01 keur heb hanow
MhjICIv0atw 2:51 Hanterhir - "Whatever happened to Whitford"
txnsyXlyi3g 0:41 Argemmyn Gwydhyo RanG
s4Jr_sHpCpo 2:41 Peboryon
31Ks1xEWnNg 2:24 Cornish Language on Great British Railway Journeys

# Archif Teledu Cymru
leb645Xu6uo 9:54 Captain Murderer - Emlyn Williams
Ga8tNxnHjt4 3:39 Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971
F7G9Un6NXeY 2:45 Seatbelts To Become Compulsory - 1982
OfODO9_46EI 1:10 Restoration at the Screen and Sound Archive
YwE8HRn1Hlk 3:22 Beth sydd ar y Lleuad?
p4XGZpcGGPE 1:42 Old Tom, Barry, 23 November 2000.
P7U3uKQSXa8 5:29 CALAN GAEAF - RHAGWELD MARWOLAETH
jjdtl2T6s1k 6:07 COB PORTHMADOG
8Cst_9m-rT4 10:23 Trailblazers - 1989
EjjvbdbSHEw 3:52 The Strongman From Newport, 1968.
uHLH3lqWalY 1:32 Heatwave 1976
XUJSODg81MQ 4:48 What do people think of the EEC - 1984
lYLkbFmv9wA 4:57 Beth mae plant yn ei wylio ar y teledu? - 1962
rQmjGlHT7g4 1:48 Newport Ghost Story - NEW SERIES OF WALES ON TELEVISION - STARTING MAY 23d on ITV WALES
TGqt6aeHVYg 3:53 SPORTS TABLE FOOTBALL - New Series of Wales on Tv - starting May 23rd
CIkNOLrDYng 1:48 Guildford Crescent Baths - Cardiff - NEW SERIES OF 'WALES ON TV' - STARTING MAY 23d
SxUrHORkh3A 3:16 Gorilla in Caerphilly - WALES ON TELEVISION - NEW SERIES - MAY 23d
U10qGwR2Dkk 1:21 Bara Lawr
Poxi1veht6U 12:19 ECETERA ECETERA, 1969.
ksVqmC4u5x8 1:57 Roald Dahl Day
iBz9ugqnNE4 2:38 Ayrton Senna tests a McLaren at Pembrey Circuit - 21 September 1988
nitlc-XYa6I 3:15 Ryan Davies - 1965
5ui2rFSP6AM 2:30 Capel Celyn Revealed, Wales At Six, 1989.
q_P323GWpPc 1:25 Ian Rush arrives at Juventus - 1987
8Xd6ZrhY-cM 5:22 Roger Moore interview 1963
g2zHpWMN758 2:20 Penscynor - 1985
S2hPg-SkVcE 23:41 Gwrthwynebiad i gloddio Glo Brig ym Mrynaman - 1972
EUOolXqCdZk 1:29 Ford Escort XR3 - 24/11/1980
2EX6KGcy7jE 3:28 Potted history of St David's Day Festival
JlF5i2Aw__U 3:09 Tell Laura I Love Her, 'Here Today', 1960.
JwdFkadzovw 1:51 Do Women Enjoy Wearing Short Skirts?, 1960.
DFbzdtjIUu4 2:40 Uchelwydd - Caerfyrddin 1971
VLw2BA6eVjE 3:10 Do You Think Christmas is Too Commercialised? 1960.
c1hXcs8l5hs 5:47 Carwyn James
WBUVR361aoo 5:46 Noson Calan Gaeaf: Dic Harris, Preseli, 1984
cxdlYUCo9LU 6:04 Diwrnod Etifeddiaeth Glyweledol y Byd UNESCO / UNESCO’s World Day for Audio-Visual Heritage
kqUA9wF5uc0 6:42 Drovers
JKVhMjaKouo 3:29 El Bandito
XWKSnfoSYwo 4:26 Kyffin Williams, 1987
rmbKX2vaCQw 4:36 Y Coliseum - Porthmadog, 1984
cszpjfVOHIs 1:27 Heulfan, Rhyl, 1983
4GCJH4r_sz0 3:06 Tommy Cooper, 1981
XrfjzdMCsX0 3:32 Handball
vdfe1Vn_FpI 3:50 Quoits
vUB737fnFtc 13:09 500 years of the Royal Mail
ULJ7XEqddmI 2:53 Penmaenpool Boat Disaster - 22 July 1966
Nw1JHDQrib0 2:58 Gwynfor yn ennill Caerfyrddin - 14/7/1966
1GXYqaoYyGs 3:58 Sheep nuisance - Trefechan near Merthyr - 1966
dOLqXB8CeTQ 20:33 Severn Ferry - 1966
e4wsN_aJPds 2:38 Clint Eastwood - 1967
4RGmy0tU9CY 2:50 Miss World Controversy - 1974
YtwubKGEgGQ 2:49 The Hennessys at Swansea Festival, 1987 - The Steelworks Song
MaF0O-0jOTQ 4:01 Towyn neu Tywyn? 1968
1eMOe9bc20U 4:33 Myfyrwyr Aberystwyth - 1933
FBMiMuJex5Q 3:58 Doll Hospital - 1960
KaA5T0sekWw 4:56 Ymsgafnu - 10.6.1968
3xhh3QPHPYo 1:50 Busker Jones - Marchnad Llambed 1984
9mCS1p45e6Q 4:32 Barry Island prepares for Easter 1962
Vva4vNXGEP0 7:18 Nansi ac Edith
oHk3LZP_Zs0 2:17 K-nockers, 1971
YCmWPIAemPM 5:10 Top Rank nightclub - Cardiff 1964
pLGXZXNso9g 5:08 Datblygu - Ser - 1984
CCIFGoz2Nd8 4:51 Fred Abel's One Man Circus - 1960
eblZpwvd2d4 0:43 Pancake Making Machine
ohDINBtPJr0 0:54 Football Quiz
VTV13XoymHM 7:12 Ymweliad a Phort Talbot
j0B3pE5i5qE 3:41 Merched Llandybie
wKDd3T5lzeM 5:11 Y Byd Ar Bedwar - 1988 - sgwrs a Muammar Gaddafi
Nj0H3jKIjBc 2:45 Les Dawson in Caerphilly - 1976
k9Fq-uMtpQA 4:46 Jayne Mansfield - 1967
9M1LWsWsy0s 4:16 Celebration - 1973
V56HtgsXgB0 2:40 Be wyt ti ishio i Nadolig? - 1971
iInlRNviEJE 27:43 Yr Wythnos - Albert Jenkins
BTdh3DkZiYw 2:18 Dosbarth Etiquette Seren Wib 1977
IiazL375zNA 5:40 A Portrait of Pontypridd, 1963
vx0-v-fOOKE 5:21 skateboard craze 1977
AM3HCotmCjw 5:40 Casino - Port Talbot
jnilSGDxN5M 2:58 Noson Calan Gaeaf - 1977
jO2KcnDbHrg 3:54 3 Year Old Boy Climbs 100ft Chimney! (1966)
8UhME8dcOqc 1:40 The Prescott Punch - Rhyl, 2001
YbkdDWsCemA 3:19 Cows watching television
waM5L_nJoOg 10:13 Gwlad Y Gan - Land Of Song
ujsbeFJMxEs 4:53 Lady Godiva rides at Beddau Carnival
CBuyNbOWmE4 11:41 Ffalabalam - 1987
1ImpStYT9zo 0:38 Dog Fashion Show - Cardiff, 1970
-xZa3lnk2fM 1:54 Seremoni 'Rhent y Brenin' Llanbister 1958 / King's Rent Ceremony - Llanbister 1958
W9LOe-omp20 12:57 Protest yn erbyn y Tywysog Charles - 1969
qClwUbc6_3w 3:50 Dorothy Squires - 1966
TqmkcjCoBXg 4:06 Traffic Wardens in Cardiff - 1964
YdL7JfkC8vg 4:00 Cilla Black, 1964
NTWvbVQAK8A 3:56 Y Cyrff, 1985
1TBQ1qYzWes 4:18 Amphicar, Aberystwyth
Lk0dVFKtEM8 6:10 Welsh Baseball
ush4dN6F4VM 0:51 Amateur TV Station, Prestatyn.
yeMCXM16Mi8 26:18 Cwm Tawelwch - 1966
e_uci-VZDx8 4:46 Gambling in Merthyr - 1964
n4AfS9O-k8Y 3:50 Whiw! Mae Mistar Urdd yn fyw!
9Yh4tJXoQ18 6:48 Bob Monkhouse
8AYwlgV6pIw 2:19 Strip Club, New Tredegar, 1966
8-ZOMa5xjzI 1:30 Dim Teledu.1973
KIIWoqL0xqs 3:42 'Can i Janis' - Heather Jones
qZB6jL97RMY 6:14 Dillad Laura Ashley - 1979
rFGk44P2YYM 14:44 Shane speaks Welsh
GFrOx6QZ08w 2:50 Microwave Oven - 1968
l5NsU3RdZWE 3:26 Poltergeist, Rhondda St, Swansea - December 1965
5z6LhA27v9s 3:27 Sex shop - Cardiff
rGFTR-1LCMc 2:22 Status Quo, July 1976
TbmCIZJCccg 3:58 Olew pen i wared moelni - Jack Oliver Llambed
-rZ53Yq7JA4 1:53 Do You Believe in Flying Saucers?, 1967
tpt8NgODHQY 30:09 Ceinewydd 1959
tbCaRQNUQeY 7:23 Gwyliau blynyddol merlod pwll glo Graig Merthyr - 1965
eQMs0luCPw0 2:34 Croesoswallt - Oswestry
_OBetbOYnZE 4:44 Papur Newydd Y Deillion
aVftj5NDZLw 3:16 Mary Quant, 1966
hrO5u2qZY_M 5:27 The Lost Village Of Pwlldu
XsNbvon5M54 3:48 Elma Williams
vO-MilzhJ-k 5:20 Carrefour - Wales' first Hypermarket 1972
E81MZ_fbYB8 10:16 Hanes I. D. Hooson - Rhosllannerchrugog, 1960
kbZSuVHtk4Y 2:00 The man who stopped the motorway
Ynf2W6EcGgc 5:22 Enoch Powell
S8Vy5KbT4cs 2:31 Dathliadau Dewi Sant
GbyIw4dEfhI 4:20 This World Of Wales, 1963
8gPTKPApLL8 2:52 St David's Day, Carmarthen. 1957
dNUCEutjzB8 2:07 Bwyta Cennin ar Ddydd Gwyl Dewi, Yr Almaen, 1973
kOdv5X5La0I 3:03 Saltney Ferry
BxEiJekU2pg 7:48 Free Wales Army
TO_SLAICVyU 4:37 The Demoliton Of Old Cardiff Housing, 1962
0FqInlD1DAQ 4:31 'Warhol'
YaIWjByHrBE 3:50 Llanbedr Pont Steffan (Llambed)
73DDBc_VeK0 3:35 Y Blew - 1967
hIGigL9ccdQ 28:28 A Near Myth - 1980
B0t5rUHy2G8 7:26 Gareth Edwards - 1974
-d6udPavLBE 0:55 The Try
L2fIi0JTWN8 5:47 Lost Railways - Last train from Newport to Brecon 1962
FRwzYORTh3Q 2:42 Teenagers: Would You Use A Marriage Bureau? 1962
xAL9JZVNqOQ 5:44 Sunday Opening, 1961
_rWos5G-CQQ 23:17 Miri Mawr - 1975
uQo1w8GhMz0 1:04 Filming 'The Inn Of The Sixth Happiness', Nantmor, 1957
AHRWHKXb0oU 3:19 UFO HOLIDAY - MILFORD HAVEN 1978
DAYXDcolbpU 5:31 January Sales, 1969
63JwNSVafCA 3:27 Addunedau Blwyddyn Newydd - 1964
peYhPAbQYME 5:05 Pelham Puppets, December 1959
VUx1K9PVq5o 4:41 Spike Milligan
j3T_9wJixAI 3:16 Trwynau Coch - 1979
FN7xGSsW9uM 5:39 Nadolig Llawen a Blwyddyn Newydd Dda - Merry Christmas and a Happy New Year
wr4vZN5ufKs 3:20 Tegannau Ystlumddyn - Batman - Ffactri Mettoy 1976
je1OtICKtSQ 2:32 Turkey Run, Miners Strike Christmas 1984, Bedlinog.
52q9vrK_iio 2:29 Away In A Manger - 1959
iYc7ITz03B0 5:41 Christmas Toys 1979 - Louis Marx Toy Manufacturers, Swansea
-3UTr7FRCko 1:29 What Do You Want For Christmas?, 1959
wWND_j1zNok 3:24 Plufio Twrcwn - 1965
lk86qzgEdxI 3:09 Dyniadon Ynfyd Hirfelyn Tesog - Awst 1972
9tfu8bNdFUI 3:27 Butetown, 1960s
QJyuBioq33I 2:48 Mari Lwyd - Noswyl Nadolig - 1964
17fMiuiLb1A 7:45 10 Rillington Place
Bij9-969FBg 4:27 Gilbern - The Welsh Car
rOxmfRyzsRg 4:03 Pop Talent School, 1963
6FbpZp1Mp58 2:17 Lloches Niwcliar 1965
d656y-ikmMs 3:24 A Sailors Life For Me - Cwch Cathod
3Uad0Z_2Ido 3:05 Langland Bay Swimmers
0ZGjCkbWwmo 2:24 Ralio Mini - 1968
lGshDSgVF-4 3:28 Filming Carry On Up The Khyber, Snowdonia, 1968
hdJtA2bZADA 2:16 Should Welshmen Wear Kilts?
pZ1FjCn6b6M 4:32 Caffi Gaerwen - 1969
le2_Co8mUqA 4:46 Ray Reardon - snooker
MbxJ5W3A25E 4:25 Dwylo Dros Y Môr, 1985
PFz5aY8hWLE 3:41 Sport Aid in Cardiff
6KtSEOE4JpY 5:26 Cockle Gatherers At Penclawdd - 1961
8eGwjqh_eQQ 5:03 Disco - 1979
KAdPNx0ArRc 0:54 Man Attempts to Fly Home Made Contraption
0BlGnM3664Q 1:45 Wolf Whistle
LYJvx-_tx68 5:33 Gwenallt
OR8knvMvlHs 2:46 A yw merched Sir Forgannwg yn rhy dew?
Ob7f1W2jvrg 2:56 Acker Bilk at Barry Island Funfair, 1969
5SOjQIMz6-0 4:37 Noson Ysbrydoleg - Seance Cwm Tawe - 24.2.1967
3ADfpEKWyVQ 15:31 Welsh Food Show 1960 - with Philip Harben
nP729S6Bxzs 2:30 Ford Cortina Mark IV -1976
azZCi3cmJ5o 1:56 Classic Idents
A7e8J1kozqU 28:33 A Day in the Life of Cardiff - 1959
tL6UW7H8yko 4:45 Babs y car cyflymaf yn y byd
0nNS5j6a-UA 12:55 'Elinor': Kenneth Williams
q_N1__ZDttQ 4:23 Corgi Car Factory - Swansea 1960
K323iuDlbYI 4:58 Muhammad Ali
3dMGnSvCmTg 0:29 Car Shaped Hat
EcvYV_5shIY 3:19 Dyfais Newydd i Heddlu Swydd Stafford
LxErt4TRse8 2:25 Ym Mle Ganwyd Iesu Grist?
qW9q1YhvNMA 5:57 The Hypnotic Powers Of Mr Blythe - 1961
d9PfNtouslQ 3:26 Barry Welsh Is Coming
abt0PZ_lfFk 4:14 Helfa
NmfAz2eVoyY 3:35 Radio Myfanwy
CsC-KpeViWA 2:37 Sidan - 1973
nNBlU_h6XVw 3:16 Ghost Village 1962
B10yc-Y4lq0 3:46 Andrew Vicari - The Artist At Work
VFrOhV_lR_8 26:16 Return to Maerdy Colliery, 4/3/1985
0yPuL3XWV2I 3:06 Anarchy In Caerphilly - The Sex Pistols Perform
18jFrg8ewX8 4:09 It's In Wales - Friend or Foe (1988)
m-seM5LWow8 0:50 Last Service At St. Teilo's Church - Now Standing At St. Fagan's National History Museum
3D3WPsMu24w 3:14 computer
njuMXSu-BT4 4:31 Spiritual Healing
SpvcCvVqEE0 13:51 Eisteddfod 1976
J2DtOGXBen0 1:52 Dylan Thomas - Fern Hill
Ho4_Gp8ylGk 5:12 24 Hour Jiving Marathon 1960 - 77 Sunset Club, Barry
LjaZbjt4Wtc 7:24 Investiture of Prince Charles, Caernarfon Castle. 1969
QYtj4F8bG5k 4:00 Atgofion Cyn Lowr o Rhydaman - 1969
CWqbh0zdKqI 3:52 Butetown Carnival Week, Cardiff 1987: The Little Butes
M8kjfSd5Qco 0:41 Birds Nesting In Westcot House
2HRQFTrFWHY 4:21 Torri Mawn - Cwm Cynllwyd - 1967
FNixta5aJpI 4:48 Seren Wib
tIbBIK5ceCQ 2:25 Who Wants To Be A Spaceman? - 1961
hcfqEuFSqaA 4:38 Meet The Cheshires - 1961
LjfQ4Q55K48 0:54 Mechanical Shark In Midst Of Holiday Makers - 1961
s8fOzrOTVXs 1:14 Cardiff Cinema Montage 1961
M8IB7GB756w 3:44 Broc Mor - Aberaeron 1967
103JPrPH8Ms 0:36 Pet Lioness In Garage - Cardiff 27.2.69
57zTtr693ss 2:59 Tom The Tramp
NxCOX42M31s 2:39 Y Rhewgell
Lvcz5E1BhJY 0:45 Lampeter Pram Race 1967
ztl0SxXSOWo 6:02 Salem
FGI_ZaZY5e0 4:33 Sianel Deledu i Gymru - 'Y Dydd' 17/09/1980
jh6Q1N-iwzU 1:51 Greenham Common Peace Camp, 1982
2MWNLYa_bqM 3:16 Electricity Comes To Ystradfellte
CPLWbeUq8Z0 2:32 Harold Macmillan

# Simon Roper
C1xN-fjyCvU 15:31 Problems of Studying Emotion Cross-Culturally
s38tEcEXUAo 15:37 Some Words from Proto-Germanic to Old English
eKS7iJIs_ZM 14:03 Regn, wæter, spearwan, ūlan
7kV_bLrfUxs 17:17 Grammatical Gender - An Accidental Response to Luke Ranieri
iLEbaAkt-P0 1:18:52 Runes and Other Topics with Dr Jackson Crawford
EWlil3g8LwU 12:27 Do Languages Get Simpler Over Time?
bq4XbdA3dTk 33:27 The History of the 'R' Sound in English
Uf7kA8ZVPVU 16:09 Time Capsule Reflection
eJLj6rDJl7I 15:40 'Wiggle Room' in Reconstructed Old English Pronunciation
q77x0_znB3I 12:46 The FOOT-STRUT Split: Why Northerners Rhyme 'Foot' with 'Cut'
HNd29yYK8V8 12:01 The Elves and the Shoemaker
5OULnCCvdk8 1:01:02 'English After RP' with Dr Geoff Lindsey
SwVANDKzG60 21:13 Pirahã Phonology
KVPx9rp_HiI 30:22 Reconstruction of a Naturalistic Conversation from 1960s Southern England
9KhPVWXpNIc 1:54:27 A Chat with Luke Ranieri
2nVVX74sy8o 18:41 Dissection of the American English Video
AXaXnQv6knQ 7:49 A Northern US Accent from the 18th to the 21st Centuries
dESrl58Phso 25:17 Proto-Germanic Reconstruction: Some Examples
ChoZRnLs7K0 9:28 A Medieval Medicinal Recipe with Modern Applications
Ggq5BrRvwpU 13:21 A Sentence from Proto-Germanic to Modern English
JcitAgN7tE4 59:08 Trying to Learn some Polish using Google Translate
HINRA6vzx6U 13:23 Is There an 'Oldest' English Dialect?
W3zLKzRhAzg 18:51 Do You Remember 1960s Southeastern England?
HX2Hbv07yPw 17:57 Formants - Why are Voices and Vowel Qualities Different?
WUY2a-rvXYg 17:09 'Gutteral' Sounds (Back Fricatives) in English
V29OhkbzwuQ 25:23 19th-Century Cockney and RP
X82qgBoA-qA 4:26 Patreon
vZuO4IjXN2o 23:39 *contains vulgar language*
vL4p5U5vpuo 13:17 Livestock in Early Medieval England
njZw_SrMkjA 9:44 Hypotheticals - What if the Great Vowel Shift Happened Today?
ask7ClK9m7A 13:32 Intonation
AzUHWrWH8WU 3:33 Keàty Curbison Cat - A Little Cumbrian Poem
VJ-jdYA9ISM 12:03 A Little Neanderthal Work-in-Progress
6psfNuKWl00 11:04 The English Language 'Family Tree'
Jx4IObS4rV4 37:53 A Beginner's Guide to IPA, Phones & Phonemes - Part 1
78l_PcPuYSk 9:52 Some Thoughts about 'The Seafarer'
OQNj4G5itkg 14:26 The Great Vowel Shift in the North of England
2_wM_EOWHqY 2:10:40 Old Norse Colour Terms (and other topics) with Jackson Crawford
SdlkLAJpfpw 1:36:05 Universal Grammar & Neurology with Caroline Cypranowska, PhD
b8X4xKIppS8 11:47 Scouse Phonology and Where it Came From
7mw7gBOOPS4 29:03 How We View the Past
K-eWQZw29t4 10:48 What if English Still Had Grammatical Gender?
0O7H8FYZOkw 20:01 Reconstructing Some Sounds of Early Modern English
Diay7U-hRec 38:49 'Early Anglo-Saxon Cemeteries' with Professor Duncan Sayer - Part 2
RERyg5h1IMc 7:32 Ingressive Speech - A Short Overview
EgK0jvPJlbk 18:47 Thinking About Human Evolution
fNNrDdNQEgo 15:36 Old English Syntax - Building a Sentence
DKzJEIUSWtc 58:45 A Conversation in Old English and Old Norse
luibV6sh-pQ 12:26 AAVE, Implicit Bias & Prescriptivism with Blayzen BM
fzeneXX6MBU 13:55 Old Norse Influence on Northern English
GyRO93tOVHA 49:55 'Early Anglo-Saxon Cemeteries' with Professor Duncan Sayer
Ov0OEAF5Fv8 13:40 Cumbria & Yorkshire - An Older Dialect Comparison
Zf0L5lXpvuQ 24:11 Anglo-Saxon Coins and Sceattas (with Ben Normington)
-NuZ1FmCewg 6:00 Why 'Mice', not 'Mouses'? I-umlaut in English
S4_OCLhhicI 14:30 Geordie and Northeastern Phonology
5ZNdgBdUhIk 11:11 Yule *REUPLOAD*
3lXv3Tt4x20 18:10 A London Accent from the 14th to the 21st Centuries
-iPu8hMxfq0 3:46 A (Hopefully) Positive Message
McFEbFWioXQ 14:07 German and English Cognates - A Little Analysis
QKhYWdaxcvo 14:06 The Importance of Anthropology in Anglo-Saxon Studies
JQ6oT5c1jks 23:57 A Conversation about AAVE
fopQPzaXXXc 12:28 Proto-Indo-European - Frequently Asked Questions
_5edmlyJ67w 12:08 Hærfest - Autumn & Celebration in Anglo Saxon England
TGjZ75UzsKE 14:30 Older English - The West Country Connection
pPUqjK71llE 14:36 How did Language Start? - Part 3: Universal Grammar
eQPbSAvtVjY 12:51 New Orleans English - The Speech of Louis Armstrong & Dr. John
Yp7MHcyJkGM 19:09 A Little Q&A
y5cgb1nDCMg 13:25 Wild Animals in the Anglo Saxon Mind
fuh6f_y5ycc 4:37 Two Readings in Old English
mheR9cIFuQ8 11:21 T'northern English Definite Article
xLNJyV_4_FU 12:34 How did Language Start? - Part 2: Primate Communication
e34U4eltQyQ 15:43 Anglo-Saxon Regional Dialects
mSq4hu5w7io 21:39 Medical Pluralism with Hannah Chisholm
s-9TEC5OqVE 7:06 Pronouncing some Anglo-Saxon Words
Y5-gkQmFCiM 12:35 How Did Language Start? - Part 1
nqtg6pb3WuA 8:48 Vowel Length in English
OMEf9AqI-b0 16:07 Monarchs' Accents through the Ages
PvDuObTfklw 7:58 Stress & Pitch Accent in Germanic Languages
AYaqLFh4GkA 13:55 Witches in Anglo Saxon England
KjfiB_Kcwhk 8:16 Reconstructing 'Stone' in Proto-Germanic
ARgGguQlQ0w 18:26 How Much did English Speakers Swear in the Past?
WFxS0tXBS00 9:20 Case & Gender in Old English
12oPAK9G2J0 14:27 Revisiting Neanderthals
Ev6b9YAiFqo 2:24 Two Readings in Northern Middle English
4kmIV9yOTyg 13:45 Leftovers from Older English
lsYt4725-tE 6:29 Philosophy and Cultural Relativism
ngnh76-mxsU 14:37 Proto-Indo-European - Laryngeal Theory
zWv3zxqjP5c 9:24 Lencten - Spring in Anglo Saxon England
CODUPylO46M 12:19 Elision & Contraction in Old English
YN6veU0fI9A 9:32 Problems with Reconstruction
U0pipKUFNAk 17:38 Introduction to IPA and Regional Accents
tBwdRs-D8lU 8:46 The Difference Between 'Thou', 'Thee', 'You' and 'Ye'
ieWm9T_GgSA 0:08 I'm lost
o5kjQONRAyU 13:15 The Migration Period
eBLvnK57lqM 9:16 Interview with an Anglo-Saxon in Old English | 2 [PLEASE READ DESCRIPTION]
FtcAbzO19Kg 17:20 Development of Cumbrian | 2 of 2 | 1400-2020
63zAgbh5RFE 9:02 Mindfulness
48GSUUW5VH0 9:27 The Earliest Germanic People
B9aILOeTYas 14:14 Development of Cumbrian | 1 of 2 | 800-1400
Nrs6U5vYstw 10:11 Proto Indo-European: Some Unexpected Cognates
H61_y6jH330 17:55 How we Know what Old English Sounded Like
ABmxoMWWChc 8:34 Q&A Part 2 of 2
KnBc8RnmKSw 13:02 Q&A Part 1 of 2
qS-l3PqToJo 2:17 A Little Update
lm9MUUQN3VY 12:58 The Pronunciation of Later Cumbrian
69eEJMYz3OY 21:32 What They Say | Starring GAMEY HEMP
-IdKScLLjVE 1:15 The Development of Cumbrian in One Phrase
h3I20xqH4kc 13:36 Anglo Saxon Pre-Christian Religion
3hqQpziIETo 6:27 The Great Vowel Shift
J-WjIVxyR5c 6:06 Religion and Practicality
lAKWmKnmc_k 6:41 Changing Meanings
oFX1nbD3dV0 3:25 Interview with an Anglo-Saxon in Old English [PLEASE READ DESCRIPTION]
Pc45XKv_OEw 4:28 Casual Conversation in History
iHG5-wMFJ-4 12:36 The Feast of Stephen | Starring ZAMY ZEMP
QWI_dFxbzyg 6:23 Old English and Middle English; why are they so different?
oqvpg0md4xY 2:04 Misconceptions | American was the Original Accent
_CSAmA_VYuk 8:29 Corresponding Cognates
ZHmUYlyzQZg 4:26 Notes on Pronunciation - Part 1
JiwTuM8R0ak 1:45 I'm Back-ish
2Om-FGi4fTk 6:23 These Riddles Three
ohxIKbf6cbg 2:36 The Plight of the Goat
EsOefKbGh4k 9:56 Team Gent(le)sir Exposed | Episode 2 | Starring KEORGE GEMP
VMXlvr5Kf4s 10:28 Team Gent(le)sir Exposed | Episode 1 | Starring GEORGE KEMP
7y_Acv-0jo8 2:06 The Saxon House
RuFHXJ350k4 2:26 Burne, Roper & Sons Whisky Advertisement 2016
q69tb_H94ao 3:17 La Ferrassie 1 - A Painted Reconstruction

# Stadstuinieren

CMqMKLYGMuY 3:02 Stadstuinieren - Limonade met bramen - Zo maak je dat
3_7j8XGfOLc 3:31 Stadstuinieren - Zelf zaden zakjes vouwen - Zo doe je dat
kJe_EqzsMxQ 3:07 Stadstuinieren - Tomatillo kweken en oogsten
NzhKvcN3YdA 3:39 Stadstuinieren - Hoekjeskool of Rubras - een nieuw gewas
P4V3XwK1-js 3:08 Stadstuinieren - Herfst en Wintergewassen voorzaaien
W49dfzlUUDE 5:50 Stadstuinieren - Tuinen kijken - Moestuin klooster Oud Bijdorp
E2DYK7RG36I 4:16 Stadstuinieren - Wortels kweken en oogsten + Recept voor een lekkere risotto
0-xcXvqz8aY 3:02 Stadstuinieren - Recept Gevulde Courgette
KJXHqmlBuRM 5:24 Stadstuinieren - Van peulen naar vruchtbaar aardbeienbed
uonGXvtYVnE 3:13 Stadstuinieren - Recept met munt: Muntsoep
bnGuzmUkva8 1:03 Het leukste tijdschrift voor de moestuinier 🌱
reBnrC-zh6A 8:00 Stadstuinieren - Aardappels oogsten - Knollen, bessen en beestjes
IGLOSqR0YbA 3:40 Stadstuinieren - Rode bieten kweken en oogsten + Recept Rode bieten hummus
Ds5dYclBWz4 4:49 Stadstuinieren - Tuinen kijken - in de Loire Vallei in Frankrijk
7gwvtR60Zto 3:11 Stadstuinieren - Snijbiet kweken en Snijbietquiche maken
3HQ5kMugXTI 4:14 Stadstuinieren - Genoeg te doen in de moestuin
BMt4lmiD__s 3:53 Stadstuinieren - Te kleine tuin of balkon? - Kijk omhoog!
jBAkUJatRY8 3:35 Stadstuinieren - Aardbeien kweken
lnb6TkuI23c 3:25 Stadstuinieren - Vogels én een nest! - In de stadstuin
xkLc19m8DcQ 3:03 Stadstuinieren - Meiraap oogsten + Recept meiraapfrietjes
TYXf9Ri-0bc 8:56 Stadstuinieren - Tomaten en druiven dieven - Zo doe je dat
9KTVTyP9NHY 3:03 Stadstuinieren - Komkommerfamilie uitplanten
BGOyHKxqfVw 8:21 Stadstuinieren - Een rondje door de moestuinen - eind mei
2t4k7W1iASk 7:00 Stadstuinieren - Rabarber oogsten - Zo doe je dat
L4jVJxP2oAE 3:02 Stadstuinieren - Uitplanten in mei - Aubergines en prei
Gwt3Vbu6ghE 0:54 Het leukste tijdschrift voor de moestuinier 🌱
Hji6-JO61p0 3:52 Stadstuinieren - Sla zaaien en oogsten + Recept Slasoep
aDmnOspdOgg 4:39 Stadstuinieren - Broccoli kweken en uitplanten
Qjbc01PoPr8 3:03 Stadstuinieren - Gojibes planten en kweken
KkM5XMbuyX8 4:49 Stadstuinieren - Tomaten buiten planten, na de ijsheiligen
lLx1lAsvJuw 3:30 Stadstuinieren - Groene asperges oogsten - Zo doe je dat
JFA-3KwNLt8 10:26 Stadstuinieren - Basilicum kopen, zaaien en stekken
YOCocNOGtxg 3:13 Stadstuinieren - Paardenbloem oogsten
hQw-YE6Q60k 5:11 Stadstuinieren - Een rondje door de moestuin - half april
7EUnkkzgUhs 3:24 Stadstuinieren - Snijbiet zaaien
N9O_3MlpTrc 3:22 Stadstuinieren - Bloesem, vorst en bestuiving
u7q5aJJ39HA 3:21 Stadstuinieren - Eeuwig Moes - meerjarig koolgewas
VtfD9kN84nw 3:33 Stadstuinieren - Wasmiddel maken met Klimop
DuQxd9UgKug 3:08 Stadstuinieren - Recept Salade radijs en munt
OmuB1U0HxbI 4:46 Stadstuinieren - Vroege aardappels poten - Zo doe je dat
jej9Qe9rwWU 3:19 Stadstuinieren - Kruiden snoeien
fYj-frPfeF0 5:37 Stadstuinieren - Tomaten, Pepers en Aubergine voorzaaien - Wanneer doe je dat
6BVS7fR-XI0 3:03 Stadstuinieren - Paprika's verspenen
5z3gLZIoInA 7:05 Stadstuinieren - Aardappels voorkiemen - Zo doe je dat
d2tcq38UB1c 4:00 Stadstuinieren - Zaaien in maart in moestuin of pot
bEmCUcU-cvQ 4:45 Stadstuinieren - Zaaien en planten - begin maart
b8FiiO40C-8 3:14 Stadstuinieren - Winterspinazie oogsten + recept omelet
rYYCAKxfOnA 2:52 Stadstuinieren - Optimaal gebruik maken van zonlicht - Zo doe je dat
Hp6oHbeGCRo 3:38 Stadstuinieren - De moestuin in februari Aardpeer planten
3rF8f4r_EJk 3:08 Stadstuinieren - Zaden bewaren - Tips
abMdcAUTSpA 3:02 Stadstuinieren - Weefkunst met natuurlijke materialen
a5RE1H_5tJc 11:47 Stadstuinieren - Zaaien en voorzaaien in februari - het seizoen is begonnen!
aELlmAvkmoY 7:12 Stadstuinieren - Eenjarige, tweejarige of meerjarige gewassen? - Zo zit dat
QOs8wj13KtM 3:43 Stadstuinieren - Peterselie kweken
TEk4W8nGZxk 3:04 Stadstuinieren - Plantenvoeding maken van bananenschillen
ZNCLazWortw 5:43 Stadstuinieren - Moestuinplanning maken
Y9W4BvVkyIs 3:59 Stadstuinieren - Zonnebloemen zaaien
O-mp3lcvT2w 4:02 Stadstuinieren - Tips Sla kweken
7pA4pkBxK0k 5:15 Stadstuinieren - Tomaten zaaien
wKM6xq8mBNY 3:01 Stadstuinieren - Recept Andijviestamppot uit eigen tuin
i8GE9UKFchA 3:23 Stadstuinieren - Limonade van Tijmsiroop
AlcyADSIGoQ 3:10 Stadstuinieren - Zelf Tijmsiroop maken
jN0JQpKAfu4 4:54 Stadstuinieren -Tips zaaien pepers en paprika
YtDQlH7VdWU 3:02 Stadstuinieren - Spinazie Zaaien + Recept smoothie met spinazie
t_Bbi_3oWHI 4:35 Stadstuinieren - Prei en ui kweken
WHfIyMV2F6Q 3:35 Stadstuinieren - Kiemhoofdjes maken met de kids
MVQHmlNEMIU 3:17 Stadstuinieren - Rozemarijn Thee uit de tuin
X53i6_GJYl8 3:02 Stadstuinieren - Kweekpotjes maken van papier
lXbijluLCmg 3:09 Stadstuinieren - Radijsjes en Worteltjes kweken
GYsIM5LFtS4 3:48 Stadstuinieren - Recept Aardbeienjam
N_bnpLHvfAU 3:31 Stadstuinieren - Tomatenplanten snoeien
dYG9JvPn3lE 3:36 Stadstuinieren - Courgette kweken + Recept Courgette soep
8pXh8vDcbD4 3:31 Stadstuinieren - Tomaten dieven, zo doe je dat
O3QD8b4SAXs 5:20 Stadstuinieren - Recept Pavlova
u1898_IG_sQ 3:59 Stadstuinieren - Recept pesto met radijs
qmvy2o3CXVQ 4:16 Stadstuinieren - Tomatenplanten verpotten
SFd-7ZhvSG8 7:06 Stadstuinieren - Tomaten in de stadstuin - update juli
QPEz6lSjI58 4:47 Stadstuinieren - Tomaten uitplanten
yGkOEic-Gzc 5:22 Stadstuinieren - Sla zaaien
JA5GleBebjw 5:52 Stadstuinieren - Lage slaboontjes kweken en oogsten
SUhmC63jLh4 6:08 Stadstuinieren -Wilde bramen plukken
P2o1U9bkPuo 4:48 Stadstuinieren - Komkommers oogsten
VboSbAq482Q 3:09 Stadstuinieren - Zaden ordenen
4xb7-lQ7peY 4:22 Stadstuinieren - Dahlia's planten
y_eMkCNZU18 3:20 Stadstuinieren - Recept Chilisaus
E2qBOiWSsjw 3:20 Stadstuinieren - Aardappelen kweken
g0AFu5x4IUE 6:18 Stadstuinieren - Wortelonkruiden bestrijden - Zo doe je dat
MB3St12AoSs 3:08 Stadstuinieren - Bietjes kweken
XE1qiaT5-NQ 4:08 Stadstuinieren - Radijsjes oogsten + recept Tzatziki van radijsjes
fCJUYM2z--s 3:03 Stadstuinieren - Aardappelen oogsten
icNSctLWZFg 3:10 Stadstuinieren - Planten Afharden
NlBbRH1KkGU 4:25 Stadstuinieren - Cantaloupe meloen kweken
P_mM0ATJHSQ 3:14 Stadstuinieren - Avocadopit planten
xDiUFUCeczM 4:59 Stadstuinieren - Worteltjes kweken + Recept worteltaart
6PwM_f-kyVE 3:09 Stadstuinieren - Recept Pompoensoep
hJsSB-D6XbA 3:51 Stadstuinieren - Zo maak je Tandpastapoeder
ES9NtOExpEo 3:19 Stadstuinieren - Zaden oogsten van radijs
9pl0uelqV-Y 3:32 Stadstuinieren - Rode bieten oogsten + recept Rode bieten smoothie
Tv9dnLsmYvg 3:34 Stadstuinieren - Broccoli kiemen
Lf4YxNnUzow 3:41 Stadstuinieren - Recept Broccolitaartjes
5ydtkro30lA 3:56 Stadstuinieren - Peultjes kweken
3in7UL3g8gc 4:42 Stadstuinieren - De kip en het eierkoeken
PYA9HiNCQhs 3:33 Stadstuinieren - Recept chilivlokken
zHq66Av6ucM 3:24 Stadstuinieren - Vogelvoerhanger
RjDRlj_B1vU 3:55 Stadstuinieren - Groot Kaasjeskruid kweken en oogsten
VB0pKyGFsAI 3:46 Stadstuinieren -Tuingereedschap schoonmaken
d1V0KQKBdWk 4:44 Stadstuinieren - Composteren
N23wua8Fa8U 5:38 Stadstuinieren - Italiaans moestuinplan
OQOgSc8ZAtU 3:49 Stadstuinieren - Prei oogsten recept
sRTQL4N9nKI 3:12 Stadstuinieren - Olijfkomkommer kweken
OqW1M1qgRi0 3:15 Stadstuinieren - Muismeloen kweken
wZ116aJL-Ik 3:28 Stadstuinieren - Uien telen
QOB7nNP5wCk 4:01 Stadstuinieren - Tuinkers zaaien - kiemen kweken
CsUiyp9z74s 5:11 Stadstuinieren - Zo maak je een bijenhotel
fUvxDmhr-64 3:28 Stadstuinieren - Tomatenketchup maken
DC6wrGkFRmk 3:48 Stadstuinieren - Kruidenolie maken
auODFWiObCg 6:18 Stadstuinieren - Watermeloen kweken
jmwVp8e0q-I 6:36 Stadstuinieren - Kiwano kweken
yJIKC-7LHgo 4:27 Stadstuinieren - Bosui laten hergroeien
nxWdx40wP8A 3:53 Stadstuinieren - Kruiden uit de winkel. Hoe houd je ze goed?
HLqfG3GdAOg 3:37 Stadstuinieren -Kruiden uit de winkel. Hoe houd je ze goed? 2
TaL6eLq1CO8 3:43 Stadstuinieren - Kiemen uit Chiazaad kweken
01lxSFW3Uwk 3:36 Stadstuinieren - Maiskiemen
G61Dxxp_RQE 3:08 Stadstuinieren - Bietjes kweken
dYdL9cp_KfQ 5:44 Stadstuinieren - De planning van zaaien, planten en voorbereiden
2tZPw8P3hTA 6:45 Stadstuinieren - het einde van een jaar én het begin van een nieuw teeltjaar
-iIOepJdj3s 3:01 Stadstuinieren - een snoephaag kado - voor basisschool de Nettelhorst
6UDizNS84sM 2:38 Stadstuinieren - De tuin in december - een rondje door de moestuin
eJ47LdEdoX4 2:23 Stadstuinieren - Wekenlang kiwi's en kiwisap - uit de achtertuin
8HLTv_W_3oU 4:02 Stadstuinieren - Wie vreet er van de kool?
R1PmF_H38TY 3:52 Stadstuinieren - De tuin in oktober - een rondje door de moestuin
96tbAkKkveE 3:53 Stadstuinieren - Twee eetbare bloemen - lekker en gezond
zm9tinuS3LU 4:38 Stadstuinieren - Bedden vol bladgewas - voor de wintermaanden
RowrX48x9s0 2:41 Stadstuinieren - Rode spitskool - een groente met een verhaal
-vWrk6lX3og 3:29 Een fruittuin vol pispotjes - de eerste grote opruiming
63wUpkx6cP8 2:35 Stadstuinieren - Bonen oogsten en drogen - om te eten en als zaaigoed
mga7oQEUlX8 3:26 Stadstuinieren - tomaten - zaden oogsten, drogen en bewaren
yTNpLg7SV5c 6:00 Stadstuinieren - Zaaien in september en oktober
cR2G41P3Bqs 4:22 Stadstuinieren - Instortingsgevaar - het wordt langzaam herfst
jsTfFzafTP4 7:39 Stadstuinieren - Een moestuin in Zuid-Frankrijk - inspiratie van verderweg
9vHULMQCEDM 3:21 Stadstuinieren - De bladgewassen - Families in de moestuin
cNci8FE2lxY 3:23 Stadstuinieren - Tuinen kijken - Moestuin landgoed Staverden
4KcZwlF62oQ 3:42 Stadstuinieren - De vruchtgewassen - Families in de Moestuin
HF1hxleQSUo 2:45 Stadstuinieren - Phytophthora in tomaten - buiten telen blijft risicovol
9SOH3ESRtEM 3:27 Stadstuinieren - De schermbloemigen - families in de moestuin
SZRwsiTRCC8 6:26 Stadstuinieren - Zonder zorgen op vakantie - Zo doe je dat
nH8fmg6KxzU 4:48 Stadstuinieren - Planten stekken - Zo doe je dat
W5bTR3uvZTY 6:02 Stadstuinieren - Planten in potten - zo doe je dat op je balkon, terras of daktuin
Ix8RAZlTkt0 1:38 Stadstuinieren - Vlierbloesemchampagne. Zo maak je dat!
vteCudJLIOM 3:20 Stadstuinieren - Midzomer in de moestuin - het begin van het vruchtseizoen
7F6LTmjNXOU 3:11 Stadstuinieren - Aardbeien - verschillende rassen junidragers
HR9j-SYsGQs 2:22 Stadstuinieren - Afstand houden! - een schoffelbreedte tussen de rijen
X4yje4T66ak 2:16 Stadstuinieren - Tomaten aanbinden - Zo doe je dat
nWsKBAj0aZo 7:27 Stadstuinieren - Een rondje door de moestuin - half mei
Fj2OiTv-GRg 3:19 Stadstuinieren - Opvolgend en gevarieerd zaaien - voor een doorlopende en afwisselende oogst
jG_-FXk_m7Y 5:11 Stadstuinieren - Wieden, bemesten, zaaien en bewateren - De handigste volgorde
K80syvOV0bc 3:02 Stadstuinieren - Snelle blaadjes telen - Zo doe je dat
bCZPuWtcFi4 3:22 Stadstuinieren - Kolen planten - zo (diep) doe je dat
MF7StHWFQl4 2:09 Stadstuinieren - Zomerwortel en pastinaak zaaien
wHzcTN8FmQY 11:21 Stadstuinieren - zaaien - waar moet je op letten
yJ9_2ZvCxLw 2:23 Stadstuinieren - Tuinen kijken - Moestuin de Hof van Hackfort
CkNUdcDJzgw 2:57 Stadstuinieren - de eerste bloesem - pas op voor vorst én vogels
3-bJsJCrToA 6:23 Stadstuinieren - bladgewassen zaaien in een kasje - zo doe je dat
gMs6bPRTi_8 4:04 Stadstuinieren - houtige kruiden snoeien - zo doe je dat
RrnlUq_Yq4U 3:05 Stadstuinieren - puzzelen met tijd en ruimte - door een koud weekend
9sW9Wswc5qs 6:52 Stadstuinieren - Prei en uien telen uit zaad - begin op tijd
fXaUkHeSx5w 2:38 Stadstuinieren - aardappels vervroegen - door voorkiemen
o5uuy65xfoY 2:02 Stadstuinieren - Rabarber bleken - zo kan je de oogst vervroegen
VXYcJXxjS18 4:17 Stadstuinieren - tomaten, peper en aubergine - voorzaaien in de vensterbank
hufQVdhEfC8 2:25 Stadstuinieren - de allereerste zaaisels en onverwachte oogst
un2NH98Ue3s 2:21 Stadstuinieren - Erwten, peulen, kapucijners en tuinbonen voorzaaien
cmqHodIhSVg 4:00 Stadstuinieren - Een nieuw tuinseizoen - klaar voor de start!
jtXP7Ln7Ok0 1:59 Stadstuinieren - Erwtenscheuten telen - voor een heel vroege oogst
JIh2RHMvJC8 7:25 Stadstuinieren - Groenten in bakken - Zo doe je dat
RVuG9_1PDA4 4:16 Stadstuinieren - Palm- en boerenkool - winteroogst
JLulkEQd2Ss 4:17 Stadstuinieren - Winterpostelein en andere blaadjes
gaSOZBo82-U 6:35 Stadstuinieren - Bodem bedekking - de moestuin onder zeil
rc0pLAmuSPY 2:07 Stadstuinieren - Midwinter in de moestuin
GV10-OsD8hI 2:52 Stadstuinieren - Groene Asperges - ook iets voor in jouw tuin?
74IbDgcqp8k 1:50 Stadstuinieren - Eetbare Kerstkrans
Ca8JdQjV9A8 5:03 Stadstuinieren - Zaden bestellen - hoe te kiezen?
Cc7Hcff76DE 5:02 Stadstuinieren - De tuin in november - een rondje door de moestuin
NoLVJvnAeKA 3:13 Stadstuinieren - Kiwi kweken in de stadstuin - van bloei tot oogst
_BOcyYKlYmc 4:45 Stadstuinieren - Frambozen snoeien - voor een extra lange oogst
T_dEm1DQur0 6:43 Stadstuinieren - bodembedekking in de winter - hoe doe je dat
MXR_GDyn8q8 5:27 Stadstuinieren - De tuin winterklaar maken - of niet
Y9hrzYPT_8U 8:31 Stadstuinieren - Bessen snoeien - Zo doe je dat
QeFeY0H5wGQ 3:34 Stadstuinieren - Een pergola en een groen afdak - meer ruimte en meer schaduw
uP6m3NCaqwg 2:39 Stadstuinieren - Een moestuin beginnen - recht of rond
gYqfM-LOF9o 4:06 Stadstuinieren - Knoflook poten - doe je in oktober
mjAJE-cnY14 3:09 Stadstuinieren - Prei telen per stuk of in clusters
wX03GOuWVmI 3:28 Stadstuinieren - Bieten in alle kleuren
1NhjE16v_xo 2:57 Stadstuinieren - Zonnebloemen - door snoeien meer bloemen
bCXbobqzGf4 3:20 Stadstuinieren - Kwartels in de stadstuin
gOg7B3SSkVE 7:44 Stadstuinieren - De tuin eind september - een rondje door de moestuin
9GX3IzBLwN0 3:13 Stadstuinieren - Winterpeen zaaien en oogsten
egkjt5f-H4M 3:17 Stadstuinieren - Verticaal tuinieren
k9TG0qYGdR8 2:41 Stadstuinieren - Boerenkool, palmkool en spruiten
CaNgr23wkJI 3:20 Stadstuinieren - Appels drogen
kgWUBHvH9Dk 2:19 Stadstuinieren - Zaaien in september - Veldsla en Spinazie
FrNe_UdtT5s 2:05 Stadstuinieren - Suikermaïs, de bevruchting
he_1A9qwqdY 3:22 Stadstuinieren - Kiwano of Snoskommer
cLgN2QOrvrg 2:50 Stadstuinieren - Een kruidenspiraal maken
qgbYI5X3FEQ 3:33 Stadstuinieren - Blije bijen, hommels en vlinders door vaste planten
LyU52hgpO2g 3:17 Stadstuinieren - Kamperen bij de b(r)oer
42JZ6ENGjMU 2:50 Stadstuinieren - Metamorfose van een achtertuin - Moestuin aanleggen
as-sDoz_H4k 5:26 Stadstuinieren - Tuintour: Historische moestuin Park Scherpenzeel
SU2QqMQ0Nws 3:29 Stadstuinieren - Bloemen in de moestuin
ZnBn9T4Pgnc 6:00 Stadstuinieren - Help! Slakken in de moestuin.
Dkd5KTHsSRY 3:10 Stadstuinieren - Aardbeien stekken - half juli
IJio-x62tiU 4:50 Stadstuinieren - Een rondje door Taco's Tuinen - half juli
BZHNMNKbiTo 4:39 Stadstuinieren - Metamorfose van een voortuin - van grind naar groenten
Hth0bIOEl3I 2:51 Stadstuinieren - Bessen oogsten met een snoeischaar
bZEDmhkdVPY 5:58 Stadstuinieren - Voorbereidingen voor de tweede helft van het teeltseizoen - begin juli
xR0nzIuPd24 2:06 Stadstuinieren - Water bewaren - water besparen
EUX5Kn1Ih38 3:41 Stadstuinieren - Lei en klimfruit
ercJjKRKLys 4:48 Stadstuinieren - oud & nieuw in de moestuin - Midzomer
vTlylQiHg1w 5:51 Stadstuinieren - Aardbeien en aalbessen in rood, wit, roze en geel - half juni
lsBJ0fTHh2o 3:41 Stadstuinieren - Kapucijners & Grauwe erwt, oogsten met je ogen dicht - half juni
uQ-_WZp3vEQ 4:38 Stadstuinieren - Coloradokevers in de aardappels - half juni
T2ovNa7DGTI 7:50 Stadstuinieren - Knoflook en ui oogsten en knoflook vlechten - half juni
vFh-J9857MI 3:17 Stadstuinieren - Een bed vol bladgewassen: sla, spinazie, snijbiet en meer
IjxatQiO7Jc 4:46 Stadstuinieren - Peulgewassen: mooi, lekker en superchique
zI3YQt2VZcE 3:28 Stadstuinieren - Frambozen en bessen aanbinden
QQnz2XyquJQ 3:39 Stadstuinieren - Water geven (2)
TsAHDytOx2A 3:43 Stadstuinieren - kruidenthee uit eigen tuin - 2e helft mei
uznPI4qhlB8 7:07 Stadstuinieren - Courgette & Co (ook pompoenen en komkommers) uitplanten, met een stokje?
-It5vkwIea4 4:11 Stadstuinieren - aardbeien op stro - 'strawberries'
hJMBnQujKE0 3:16 Stadstuinieren - Piepers in potten - dat gaat prima
laTu_DqTcyU 9:15 Stadstuinieren - Stand van zaken in moestuin en kas - 1e helft van mei
08O4kvTUMp0 6:52 Stadstuinieren - Schoffelen - Hoe doe je dat goed?
Y0IaJt1BssA 6:52 Stadstuinieren - Bonenstokken stevig zetten
2ZDNFO1pJbo 8:34 Stadstuinieren - Water geven (1)
FWOxggid7p4 6:57 Stadstuinieren - Maak kennis met Taco's (moes)Tuinen
lwyEJumnSK4 5:05 Stadstuinieren - Courgette & Co - Warmteminnaars en Koukleumen - 2e helft van april voorzaaien
ZYNBci2s-6s 4:14 Stadstuinieren - Bonen voorzaaien in houtsnippers - 2e helft van april
GdoDRJfSYfo 5:13 Stadstuinieren - Waarom zou je groenten en kruiden voorzaaien? En waarin?
sYQiViie-78 3:36 Stadstuinieren - Tomaten en Pepers verspenen / oppotten - begin april
L3fkz90fND4 9:25 Stadstuinieren - De aardbeien en bieten gaan naar buiten - begin april
HVHceitbQsw 3:22 Stadstuinieren - Bloemen, kruiden en sla voorzaaien - begin april

# Alan Watts

53k--lN1QmE 2:03:35 It just is - nature of consciousness Alan Watts Black Screen, No Music

# Orchestra of the Age of Enlightenment

t_ERVpRupDQ 10:16 Introducing the Baroque Timpani | Evolution of Timpani Part 1
oOmDgEOiInI 5:38 Music for Superstar Castrato Senesino: GIOVANNI ANTONIO GIAJ - Fra l’orror d’atra foresta
viMru6SyyCY 10:26 Exploring Beethoven's Fortepiano
bLExM-KbeuY 2:25:00 LIVE AT THE HEX
G6SdhFI7h84 5:50 JS BACH: St John Passion - Evangelist recit (No. 6) and 'Von den Stricken' (No. 7)
N56wrMeGRts 13:23 BEETHOVEN: 6th Symphony 'Pastoral', 1st Movement - on Original Instruments
hTaw9TwFZ1s 1:14:03 LIVE: The Night Shift at The Old Queen's Head
LMyEXljumCI 32:04 LIVE: The Night Shift at The Old Queen's Head
Iq8WkkPZWjk 1:26:04 LIVE: The Night Shift at the George Tavern
riIpboxWv3U 8:13 Introducing the Chalumeau
7k_TGe-crFw 3:51 The Rediscovery of Schumann's Violin Concerto
G-8hUg-nRdM 8:54 Introducing the Cor Anglais
6gU_zn5uGsM 4:06 TELEMANN: Trio Sonata in A major TWV 42:a6, Allegro
0yDoqwjarNQ 3:24 JS BACH: Jesus bleibet meine Freude, BWV 147
ueTWLXIZwtc 3:41 JS BACH: Magnificat
KKTqN894UCc 3:49 MICHAEL PRAETORIUS: Es ist ein Ros’ entsprungen
_-XIpGwLR34 5:32 TELEMANN: Umschlinget uns, ihr sanften Friedensbande, Aria
ikzjRR-_-JI 4:12 GIOVANNI GABRIELI: Canzon Duodecimi Toni (Arranged For 8 Violins)
nws3KudckOo 3:26 TELEMANN: Trio Sonata in G minor
GnKDt1xp5zk 15:16 JS BACH: Cantata - Nun danket alle Gott BWV 192 from Bach, the Universe & Everything
aJuxUrz61kY 1:40 Look, No Bass!
anf22WLxMR0 3:26 How can you spell BACH in music?
MK79MKfNG5U 1:17 Kristian Bezuidenhout plays Schubert's Trout
UtGYDyfPlCg 4:58 What is Chamber music? | Illustrated Theory of Music #11
4GKO8MaXxr8 10:31 Introducing the Cornett
WDLIVYoSVJU 0:30 Announcing 'The Wilderness Pleases'
1zOMzjIniVs 12:56 An Inside Scoop On The History Of Gut Strings | Illustrated Theory Of Music #10
oFZyFkXMu5k 1:52 Sea Voyages and Salvation with Roderick Williams
0mXCQZOYMcU 10:08 MOZART: Piano Concerto No.23, K488, Last Movement (Steven Devine: Fortepiano)
66g6i5FVLfw 4:01 What Power Art Thou (Purcell) film inspired by Gotye | Dingle Yandell
XLUF0uo2wlo 0:53 Specialise in music from a particular era? Too restricting.
HBC92ISqLJs 46:56 OAE Meet the Band with Kinga Ujszaszi
Gccx824NVVo 8:23 Making sense of the suffering in Bach's St John Passion | Mark Padmore, Nakhane and Grant Gee
M5gPcBqtDt4 2:51 Why does the Oboe Da Caccia move us to tears in St John Passion?
hRMA9q5n9bc 3:17 What is the secret to St John Passion's enduring relevance?
oAJnQ3tdNYk 7:42 Continuo in St John Passion | A closer look at the Viola da Gamba
RxEbYxjVoNw 2:04 OAE Regeneration Appeal
tCj3D2iXq_A 1:36 Bach | St John Passion
VgOBxnmdTf8 6:32 Rameau's Les Indes Galantes | modern interpretation by Acland Burghley students
vA281KN8f_I 4:06 Mezzo-Soprano Helen Charlston reacts to her Coldplay inspired music video
ybig-0BBihA 11:26 Introducing the Lirone
19RJKnh9hbU 3:54 Dido's Lament (When I am Laid) film inspired by Coldplay | Helen Charlston - Remember me - Purcell
m13ajql-WXo 3:22 WAGNER Tristan und Isolde
U0t59VxBPfE 10:26 The Curious History of the Clef | Illustrated Theory of Music #9
98hJ1B8uhko 3:10 Introducing Mozart's Single Action Pedal Harp
jpQaGJTh2mU 11:43 Introducing the Sackbut
JEMn4veCPLE 2:09 Beethoven and Brahms on OAE Player
MqKmNjAc-xs 5:07 Introducing the Evolution of the Bow
8DSP6PQBL88 1:49 Handel's Messiah trailer
EB3EEJX5ejw 0:31 Mozart's Minor Miracles in the Age of Reason Trailer
KK0vyTsc2NE 6:33 Baritone James Newby reacts to the making of his music video
CF5bOdRpNh4 6:16 Handel ‘Cara pianta’ from Apollo e Dafne | inspired by Radiohead 'No Surprises' with James Newby
zmVjpiMEHYo 0:33 'Seeing Double' with Nicola Benedetti and the Orchestra of the Age of Enlightenment
Qzvp4_igvyw 12:34 The Harmonic Series | Illustrated Theory of Music #8
Gj7j0PXOLeo 0:53 Introducing OAE PLAYER
0rgM3PVukb0 59:16 'What is the Value of Digital Art?' Panel Q&A
PV9Jut4Iu6A 19:43 The Voice: Anatomy, Function and Covid | Dr Declan Costello
siHMpS8TStM 8:01 What is the Canon? | Illustrated Theory of Music #7
xOsZ10z-iMc 5:35 What is the Secret to the Chorale? Part 2 | Illustrated Theory of Music #6
4OLDcvOpXKw 7:41 What is the Secret to the Chorale? Part 1 | Illustrated Theory of Music #5
O7XG8aRRb3E 5:52 Something Special Happens: Camden New Voices 2020
QeDjTYH7MBQ 3:35 What is a Cantata? | Illustrated Theory of Music #4
AOPYv2rjVIo 2:05 Telemann Concerto in A minor, TWV 44:42 - Allegro | Bach, the Universe & Everything
sQgNgs5EzaQ 8:53 Introducing the Oboe d'amore
fgJDrNjQyfI 5:18 The Hemiola | Illustrated Theory of Music #3
SyBYRlB6VW4 3:11 Introducing the Hurdy Gurdy
o59bjj3WUUo 29:02 Musicians on Call Online 6: All About the Bass
hJVoN_JQPT4 12:22 Appoggiatura | Illustrated Theory of Music #2
NdlANO97RiU 33:59 Musicians on Call Online 5: A Folk Journey
nr95NjOL21o 48:06 Schrödinger’s Pandemic | Bach, the Universe & Everything
-7xlZARdd28 2:12 Introducing the Illustrated Theory of Music
s684W1WbXTY 8:02 What are Barlines? | Illustrated Theory of Music #1
shWTiybxBEE 34:06 Musicians on Call Online 4: Pastime with Good Company
VrFUHFL34as 32:11 OAE TOTS: interactive sing and play for 2 - 5 year olds
_KNPIJHcqtA 35:15 Music and Chat for a While - OAE Interview with Ian Bostridge
I4IEF6F5MW4 27:52 Musicians on Call Online 3: Learning New Skills
8E4-Db2-p7g 29:25 Musicians on Call Online 2: Instruments Galore
gL_lgsysAiw 30:02 Musicians on Call Online 1: Hello!
eumxlVBlG5k 3:57 Quarantine Sessions: Bach's Air on a G string
EptO4p-ynQk 34:07 Can Bacterium Compute? | Bach, the Universe & Everything
jQC4mglx5uE 2:20 Introducing the Baroque Spoons
XQoE3JyOjqs 12:37 A New Created World
fFo-VJ8jUkU 2:15 The Night Shift on hold
nb-AkHlKgKA 2:41 What Classical Musicians Give Up For Their Careers
FcM0Jt6Xf-Y 1:31:16 LIVE STREAM: Classical Music, Minus the Rules - The CLF Art Cafe, Peckham
U0KLAQ_iiEM 2:02 A Quick Guide to Thomas Mann's novel, Doctor Faustus
ptQJdIv2uUI 9:23 Introducing Beethoven's Flute
TBV6U-dUJwY 3:49 Why support us?
lv9W7qrYhbk 7:15 Bach vs AI: spot the difference
BO2JeKiwbvQ 10:38 Introducing the Viola da Gamba
rLYRfHjZIy8 6:47 Introducing the Baroque Contrabassoon
QAcp9useNxc 2:12 The fine line between Salvation and Damnation
FAnjAVtuck8 2:54 Quiz: Organ in the office
Y7k7pX6x8g4 2:10 What is Enlightenment?
G1rrUCTUOKU 12:41 Our Band | Orchestra of the Age of Enlightenment
HMgD6ezml7U 4:27 Introducing Goossens' Oboe
wPNWrcYQujE 1:27 Sibelius Symphony no.2 (rehearsal)
HNt6-q3suo8 6:29 Max explains... where we play
I7QAqZkuV5s 0:48 Toutes Suites NOT Toot Sweets
I5l7yNxX6ps 1:09 Gilbert and Sullivan - Once More Gondolieri
ocvATSndzFA 7:09 The Birth of the Symphony
cPvpyI-bmEM 5:16 Introducing the Oboe da Caccia
iRO4yreLSmw 3:46 Introducing the 19th Century Horn
ifBHEcsWMHg 1:45 Love and Duty, with Magdalena Kožená
eVabz8LneI4 9:59 Introducing the Baroque Theorbo
1z2xtmkqaAs 4:31 Lagrime Mie - Barbara Strozzi
D3NCGSvKHCQ 8:41 Introducing Mozart's Clarinet
v-J3YkRKn7c 6:45 Introducing Handel's Organ
9owI4Mnym0w 3:36 Fantasia on a Theme by Thomas Tallis | Vaughan Williams
pfLPYKw5h38 3:35 Life, Liberty and the Pursuit of Happiness: 2018-19 season trailer
sBD6OhkyW-Y 3:54 Why are we so obsessed with sending music into space? | Dallas Campbell
MgwE22lg9cA 4:01 Mozart Horn Concerto No.4, Rondo - on natural horn
h9g1c2bZSq8 4:23 What is Chamber Music?
hcfl3lYQy9M 3:23 Introducing the Clavichord
gMoOhCh_GUM 5:32 Introducing Beethoven's Contrabassoon
KfBoVGIoobY 10:29 Introducing the Baroque Double Bass
2ef95BZfYcw 4:52 Introducing Mozart's Fortepiano
fAGsmq2gZ5c 3:07 Why is it called the Surprise Symphony? The secret of Haydn's success
eFn992wz-ss 3:43 The Science of Attraction
zXAWa_rnyus 0:33 The Best of Dance 1692
YRBuoup80UY 2:27 VIERDANCK | THE NIGHT SHIFT
VhMzEiLqlrY 0:54 Dangerous Liaisons | The Greatest Hits of French Baroque
4LoqTzrFl7c 2:37 Our Rosenkavalier Film Orchestra
es4wecjHXCg 4:35 A lost art: music in silent film
6oAjCirkZjc 5:43 Introducing Haydn's Oboe
oVXL-OTgjuo 0:44 Der Rosenkavalier
7vuq9Ls2OVs 4:13 Mozart's Naughty Notes | Rondo from Horn Concerto No.1
PLHC8I8RwMg 4:24 Introducing Mozart's Horn
-Kl71jEniLA 4:18 Mark Padmore explains Bach's St Matthew Passion
MHmZYZPCb_4 0:34 The Night Shift trailer 2019
ZO88Ydj-S9k 5:49 Introducing the Baroque Cello
nhLcMFgPoBY 1:42 What is it like to be a mezzo-soprano?
wOkIZ9TjvYE 1:34 Nicola Benedetti: Beethoven on period instruments
PbCEybm0by4 1:02 Life, Liberty and the Pursuit of Happiness : 2018/19 season teaser
eLpAaIqJPck 2:51 What are period instruments?
X8XdmhIUzJs 16:39 Particle physicist Tara Shears on Antimatter | Bach, the Universe, and Everything
PMwszGtyfTk 1:28 The Big Give Christmas Challenge - Rising Stars
f4ZU4PlXqu4 3:31 What is a Cantata?
UDMCWta1dns 2:35 Trad Klezmer, Die goldene chasene
Z4o14vNIOIw 2:57 Double bass bow: French or German?
LQ2MuAvIz0A 3:32 Sir John Pendry: What is light?
lHvTU9q5K-0 1:56 OAE back at West London Synagogue
HfTZ_c22N4w 0:30 Bach, the Universe and Everything
cdRX9Ba1Nx8 2:09 Soprano Louise Alder on Handel's Semele | Orchestra of the Age of Enlightenment
rHxcrZwtPEY 4:50 G minor Chacony by Henry Purcell | The Night Shift
UEgOgkrncx8 3:23 Roman Krznaric: Is love what you think it is?
aKEBRD9skkY 6:00 Judas: Can the ultimate betrayal ever be forgiven?
l5R9tVMp9HM 1:10 What Is Right and What is Wrong? The Judas Passion and St Matthew Passion
ls-bij2qMT4 3:02 Introducing the Baroque Bassoon
QNxV92-6Gnc 1:26 From Baroque to Rock: Handel & Björk
_jGHJ3PprvI 2:29 From Baroque to Rock: Bowie & Beyoncé
Pl13kjCSCs8 1:50 From Baroque to Rock: Handel & Radiohead
DYpaoStM4js 5:45 Sam Hall, 18th Century folk song | The Night Shift
doRUl1jfJDY 2:57 Introducing the Baroque Viola
KLrVKBzfAZ8 0:36 The Musical Landscapes of King's Lynn
vVXveQ4DHpE 1:05 Introducing the Piccolo Violin
H_SS0WLaUsI 2:32 Introducing the Baroque Violin
YnwDlLIac_A 5:08 Introducing the Baroque Oboe
n6Ts2z9tXg8 4:56 Introducing the Baroque Flute
UT5OqjubfiI 5:07 Mozart's Horn Quintet, 1st Movement (on a hosepipe horn) at The Night Shift, Islington.
6XN_qgbM6Dc 6:51 Introducing the Baroque Trumpet
HEMeybr5Rdo 2:21 Introducing the Baroque Horn
BRNhNR8EbKU 0:33 Come and hear the musical landscapes of Lowestoft
yXxe5wMNE3I 2:50 Steven Isserlis and Haydn's Cello Concerto in C | Orchestra of the Age of Enlightenment
T0i3AOzLICg 0:35 Musical Landscapes - Durham | Orchestra of the Age of Enlightenment
7qagu9sTU5o 3:47 Sarah Connolly on Berlioz's Les nuits d'été | Orchestra of the Age of Enlightenment
bwnfAe3PAso 0:55 OAE in 60 seconds
lQNdEWutiZk 7:05 Vivaldi’s Four Seasons with Kati Debretzeni, pt4: In Depth
JyYBZmth6zk 4:52 Vivaldi’s Four Seasons with Kati Debretzeni, pt3: In Depth
OovG_RWEqVE 8:54 Vivaldi’s Four Seasons with Kati Debretzeni, pt2: In Depth
ozYcv8_CICk 3:32 Visions, Illusions and Delusions: 2017–18 season trailer
3t_M-fVRnz8 5:07 Vivaldi's Four Seasons with Kati Debretzeni, pt1: In Depth
7uFz-HkH_r0 3:06 Christmas in the 17th Century | The Geffrye Museum
soeq9TR5evw 2:19 Noel: A Christmas Celebration, Kings Place
Z7jWYiQz1cA 2:56 Introducing the Harpsichord
egL0z-lBMBQ 5:33 Passacaglia in D minor by Fischer | The Night Shift
03z6sTP2jRQ 0:30 Mad skillz from footballer turned harpsichordist Ottavio Dantone
gnz4CgYS_oM 2:33 BBC 'Embedded' composer Matthew Kaner chats about his new piece for The Night Shift
kqV1ye-AMWk 2:04 The Choir of the Age of Enlightenment 'Faire is the Heaven - Sacred Songs of Love'
Mtq2aB_F27I 4:58 Polacca By Punto | The Night Shift, The George Tavern
WSlvLS1t0XU 2:55 Vibrato with violinist Julia Kuhn | Orchestra of the Age of Enlightenment
XXVMQS8wScI 0:09 The Night Shift live from Old Queen's Head, 26th July
DLuM8cbc1dM 6:06 Explaining Pitch | Orchestra of the Age of Enlightenment
3g_PCnAGnfg 2:26 Introducing the Schnellar Timpani
nBC7zSACN6U 1:31 "Play as if from the depths of the forest"
bNyfOQgCjY0 0:38 New Night Shift venue: The Bussey Building, Peckham
lTHP_RKMO8k 2:36 Max Mandel on Mozart and Michael Gordon.
TSqBYccihhU 9:55 In Depth: Sarah Connolly on Mahler and more
4NWoXEgs0HU 2:30 Lisa Beznosiuk on the flute in Bruckner
bSMTB1lkXUk 2:38 Philip Dale on the trombone in Bruckner
bF18Hst1ILY 5:36 Watercycle 2015
Qn8oKHRmGhw 3:30 Roger on the the Horn in Mahler
d0JHZhhA7pc 2:51 Daniel Bates on the Oboe in Mahler 2
N5vy5lrbkqc 4:25 Vladimir Jurowski on Mahler
aEag95NcMfA 2:30 Madness and genius - an overstated connection?
9tkib1MezlY 1:48 Hen party - Haydn's 'Fowl' Symphony
1MqId5hqql0 4:14 Schumann’s Violin Concerto
oEQ01yS4J6U 1:20 OAE musicans reveal their New Years Eve plans
R0uEobFss5k 2:27 The Piano Tuner: Sjoerd Heijda
m9zEjAzUes0 0:49 DJ plays Bach at the Boiler Room!
MaKnfDddgLI 4:46 OAE Archive #1: Bach's Double Violin Concerto (1st movement)
HJyut2PIXN0 0:07 The Night Shift: 30 November 2015, St John's Smith Square.
eC-0V4kV5XI 3:06 OAE at West London Synagogue
DZy6qJykJsU 1:48 30 Years of Breaking the Rules
SpmrBUGSpk0 0:16 The Night Shift: What the audience thought
dPVXATS21Hk 2:11 Watercycle in Brighton: Part 2
ZJghuZ6kHuQ 1:54 Watercycle in Brighton: Part 1
dpG1b0VHHZ4 0:55 Behind the scenes at our Birthday Photoshoot
0sZHfw6Fn5g 21:17 Violinist Catherine Mackintosh on her career and her instrument
xh7GLNG8pRw 6:55 Violinist Alison Bury: Her Instrument
zIUH_XlP_bs 3:29 New Music for Old Instruments: Stevie Wishart on her new composition
6-h-j55SELE 0:06 The Night Shift: 12 May, Southbank Centre
6YjMZ3WIvw4 1:33 The Night Shift: ask the musicians #01
sVkE6TtRYHM 31:36 Post-concert discussion with Steven Isserlis, Isabelle Faust and Robert Levin.
DcVqcIpel_Y 1:08 Best of Both
u3yvfFz42d4 3:07 Adam Fischer talks about working with the OAE and Dvorak.
Gm9539tpXKg 1:52 The Night Shift NY - 1 March 2015
uhQjCsoTNw0 0:41 Rules? What rules? The Night Shift at the George Tavern
HZIW70PQ5cg 2:17 Vladimir Jurowski on Mussorgsky's Boris Godunov on period instruments
iPcqkfs0QvU 2:05 Flying the Flag: The Bohemians - Myslivecek
V50kq9aJapg 2:31 The Tempest at the Sam Wanamaker Playhouse
MGTacLQ_r1k 1:35 Vladimir Jurowski on Tchaikovsky
k0RydjhU908 3:16 Andrew Mellor on Handel's Messiah
3FFur8rHqds 2:41 What happened when the OAE took The Night Shift to Duckie?
4MDm_2rNrt4 0:28 H Factor teaser Kings Cross has got the H Factor. Have you?
mHuYJjdUyiw 2:41 "It should make you smile" - OAE musicians talk about our 'Lord of the Strings' concert
EwixYN2WZ1g 3:12 Richard Tognetti on the 'Lord of the strings' programme
rYolBRiNsGw 1:29 The Works: Your guided tour of the classics
OxafORb8LCE 1:13 What the audience thought - Le Malade Imaginaire at Sam Wanamaker Playhouse
vnIuFrxlB_s 2:34 Preview: Le Malade Imaginaire at the Sam Wanamaker Playhouse
RZO3rWanwoA 2:54 David Kempster talks about Donizetti's Les Martyrs
lrBDq-ra9Bw 0:39 They've been. Have you? Join our A-list audiences* and get 15% off tickets
nxEGDaELCVU 1:46 2014-2015 concerts trailer: True Sound, True Music
6LZCVQsQk38 4:12 Rameau's Zaïs
pdsfU510IZ0 0:41 Introducing...the 'other' Beethoven
Qt0W1Keaqtk 2:08 Two minutes on...the Ophicleide
84LH1alXfQc 3:20 In rehearsal: Sir Roger Norrington conducts Berlioz
YqiCl8KDg6o 1:03 OAE in rehearsal: Rameau's Anacréon
O_m0lKpzRdI 2:52 OAE Education: Watercycle
XUkTkfdc6vE 4:04 'Fairest Isle' by Purcell | The Night Shift
azcdjEia7xI 3:03 Sir Mark Elder and Joyce El-Khoury talk about Donizetti's Les Martyrs
bOaXH6oAZIU 1:08 Boyce's Solomon - in rehearsal
yAld19m8P6o 0:35 Mildly Rude
QyrPkxvFVuo 0:54 The Night Shift - Burning up the rule book
FrZvTWT5M_A 1:23 Sir Simon Rattle rehearses Haydn's Creation with the OAE
pcEuhEUuTJQ 5:52 Rameau's Zaïs
UkCNJtLMGVk 1:19 Gamechangers: Symphonic Greats - audience reaction
-qTxxQbwJN0 2:19 Spinal Chords by Sally Beamish | Orchestra of the Age of Enlightenment
xxkryCD6xuc 1:38 Introducing... The Night Shift
GLfXDIbUIjY 1:12 The OAE rehearses Schubert's Symphony No. 9, 'Great'
XD4kNY34AoE 3:15 Introducing the Violoncello da Spalla
S5Np9ncOId8 1:13 OAE: The Works (Trailer)
iiI76msHiiQ 1:28 'French Fancies' audience reactions...
SpP8uVR0JX4 6:18 How to make a hosepipe horn
3fcVU_i0QrI 3:54 An interview with the Labèque sisters
km__RL6HhC8 0:52 Offenbach's Fantasio: Trailer
j_cxE7dZhrA 4:00 Sarah Connolly and Sir Mark Elder on Offenbach's Fantasio
HDQLdXXKbEE 2:20 Fantasio by Offenbach: The Story
2-Z5BnAnEBs 1:18 The Night Shift: Beethoven at the movies
YKNVOM3cYwI 3:08 Performing Beethoven's Symphony No.8 from the first edition parts
bViZG58urQc 3:52 Vivaldi's Four Seasons - Winter, Allegro | Choreography by Henri Oguike
KliIwPMqU1A 3:28 Composer Clare Connors
fHfhs85kgm4 3:31 Kim B Ashton interview
8_zZLhix4wg 2:39 The Night Shift Pub Tour: The story so far
FRqJryj97rQ 2:52 William Christie on Rameau
CZjy10dK5TU 1:13 Add fireworks to your Monday. (and get 10% off)
UIKHiVEu63w 1:05 MONDAY
mKevUFEljS8 2:23 OAE New Season Trailer 2013-2014
h6onNwsjd68 4:01 Laurence Cummings chats about The Night Shift at Wilton's Music Hall, 31st July
8-R4qvKTHNk 5:50 3 June 'A Tribute to Lorraine Hunt Lieberson' Audience Reactions
AZ6R9nfYUdg 2:14 OAE Photoshoot Audience Interviews
k84Dv_DGSf8 1:12 OAE Season Brochure 2013-2014, hot off the press!
iZqvZINQtBM 2:18 The Night Shift: The Amersham Arms, New Cross, 23 April 2013, Audience Reaction
zcxWFoEUmWI 1:16 OAE: Music for Everyone
_HRWZcdpLeU 1:58 Bach Unwrapped Audience Reaction: April 2013
lKZh25_HBn0 2:44 John Butt on Bach
mR_tZ1FZFD4 1:52 The Night Shift: The Amersham Arms, New Cross, 23 April 2013
aHJpWirnEjI 1:00 Mozart - Making Ennui Epic
uKBFjR6mZlM 2:16 OAE: By Jupiter, January 2013: Audience reaction
8CuC4UMLdU8 4:40 V4: The Seasons - In Depth
-ful9sG6FZM 1:50 OAE: Creation, January 2013: Audience reaction
wMG4E6GZZs4 1:51 The Night Shift: 22 November, Queen Elizabeth Hall: Audience feedback
gwFOEhhs0Ec 1:10 V4: The Seasons: OAE & Vivaldi & Henri Oguike
Gb1-N1JTCX4 2:27 OAE Education: Shine a Light
h0S0uHMkvLg 1:50 The Night Shift: Audience feedback, 25 October 2012 Queen Elizabeth Hall
Xcl_dv4BfPM 2:09 Art, Music and Other Visible Things: OAE@Whitechapel Gallery
dBQ5U-PrTNw 1:53 OAE: Handel's Messiah 2012 - Audience reaction
cqBuOss-ysM 3:19 Messiah: the best bits
EKk8pDwgeKo 3:46 Rob Howarth and Handel's Messiah
TQSL7dg6zpA 2:46 The Night Shift: Old Queen's Head, 25 September 2012
V1WYwJphMyg 1:37 Queens, Heroines & Ladykillers: 30 September 2012, Royal Festival Hall
XWGKNdB48wo 1:55 Queens, Heroines & Ladykillers: 8 November 2012, Queen Elizabeth Hall - Audience feedback
dyWWOPoTNCU 1:54 The Works: Audience feedback from March 2012
v1f5fLoXTEs 0:57 OAE Big Give Christmas Challenge
po3K92bMwxI 3:08 Mozart's Horn Concerto No.4 on the Natural Horn
Mal53MsgQk8 1:40 'Dubussy' Remix Contest Judge Chapelier Fou gives advice on how to approach your remix
-Mj6RvyZw1Q 2:45 Beethoven Symphony No.9 CD and Sir Charles Mackerras
GFE4YB2qKhQ 2:19 OAE: 'Queens, Heroines & Ladykillers' Competition
AqlM961J3Fo 2:42 French Impressionists tour with Sir Simon Rattle. Part 2
55MYnHqGvY4 1:03 The Night Shift at the Little Top, Greenwich
a7wA4KZywQw 2:21 The Night Shift comes to Blackheath...in a tent
J1RnQjm5v3s 4:10 The making of the OAE 2012-2013 brochure - behind the scenes at the photoshoot
jU7C20gWs9Y 27:41 Steven Isserlis, Isabelle Faust and Robert Levin chat post-concert
zFHThUVYwLQ 9:19 The OAE on tour - with Sir Simon Rattle and the Labèque Sisters
Cng6wq1O5Gc 4:54 OAE: Pierre-Laurent Aimard talks about Ravel's piano concerto for the left hand
_mqhtwX4oNI 1:51 Look! No conductor! Audience Feedback
fsoDc9Tkn2M 1:59 Bostridge sings Bach: Audience feedback
7eTlLMBttZ4 0:50 OAE Season 2012-2013 brochure: Teaser
vJIBxM6IDvw 1:07 Introducing the OAE Green Travel Mug
feIJma92Dek 2:16 OAE: Audience Reaction voxpops - Berlioz Romeo & Juliet
O6fRUQyaQAo 3:33 OAE: Beethoven's Missa Solemnis Audience Reaction
KRqCAhxTJpE 26:29 A Royal Invitation
_DWb4UOQb4A 0:55 Anthem for a Child 2012
B-7pxFOuX5c 1:43 The Works is back with Bach
fMD_NnncFZU 1:57 The Night Shift in rehearsal, with Jon Jacob
A1FoKqEtFBs 2:46 A musical stalker...
RynJicZQacA 0:47 The Night Shift at the Roundhouse / Reverb 2012: Trailer
Zy38DobmhBw 3:06 The Night Shift Pub Tour: The George & The Amersham
gPy6y65nFc4 4:47 Ceri and Will talk about The Night Shift pub tour
qnW78hnbHl8 2:34 The Glory of Venice: Audience reaction
q2V18CnEX9M 1:38 The Night Shift Pub Tour Trailer
Z6XgSc5RQHU 0:33 The OAE and me
DEDAPTCyi5M 3:14 OAE: Laurence Cummings on Handel's Messiah
OYFIhlp4HZ0 3:25 Orchestra of the Age of Enlightenment: Beethoven's Missa Solemnis
RuJz3oCWEGA 5:30 Pianist Robert Levin on taking risks in performance.
vyIE-S8Ez1Q 1:02 OAE: The Works Trailer
W5hQDjRDmQ8 2:24 The Night Shift: Pub Tour Appeal
dK1oACCIsq8 1:09 OAE: Edinburgh in 60 seconds
_JdZm7_17NA 2:50 OAE at the Edinburgh International Festival
vy_j50dpKHE 2:39 OAE: The 'mini' Night Shift
1fq3SJlXoq8 2:10 OAE: Audience Reaction - Sir Simon Rattle & the Labèque Sisters
8_N1tyGsgzU 1:33 OAE: 'May the fours be with you' - 4 May Voxpops
-KSPHtbew_E 4:50 The Night Shift: Behind the Scenes at Village Underground
38xSPP53g5I 4:36 The Night Shift at Village Underground, Shoreditch
vlHgLS62lhQ 4:54 OAE: The story of Mr John
6yrAxCB9VFk 2:34 The Night Shift: 4 May Audience Vox Pops
4hsJHaEWWwo 0:53 The Night Shift: OAE on Handel
JGQL9hRuvvE 1:59 The Night Shift: Handel
gQwBAmbwXLI 3:26 OAE on Sir Simon Rattle
BSTXaQFfRmg 4:36 OAE: Megan's Alphabet Challenge (AKA the A-Z of touring)
wbQYGLTWRA4 2:05 Handel: What's the appeal?
0qhJO0DN5P4 1:05 OAE players on Handel
BBmCi3csiTg 2:46 The Night Shift: Conductor Roy Goodman on Schubert's Symphony No.4, 'Tragic'
tC6SPGuOOHQ 3:42 OAE: Baroque Contrasted Vox Pops
1tj4xLMNIGg 7:48 OAE tour diary: Sheffield
mOPLCChomj8 3:06 The Night Shift Vox Pops
vuCtJFWrXb0 5:44 OAE: Matthew Truscott (violin) on 'Baroque. Contrasted.' at Kings Place
T4otceedkh0 6:49 OAE staff on 'Baroque. Contrasted.' at Kings Place
7Y3EAbtruMU 8:06 On tour to Paris with the OAE: Will's video diary
fESVfVa_gMU 5:39 The other amazing Mr. Bach
IiVlCgCb3vQ 4:45 OAE: A Royal flute lesson
prMEDOFzXlU 2:15 OAE: Symphonic Enlightenment Vox-pops
X-afM0tMIlI 5:47 OAE Released: Artwork concept
4xosip6yBxs 4:03 OAE Released: Monteverdi's Vespers
x2Oan94pnCc 12:05 Vladimir Jurowski Interview
m6UcRGk0JRo 5:24 Sarah Connolly on Mahler's 'Lieder Eines Fahrenden Gesellen'
8Q0l_K1ZrnY 5:59 Cylindrical Vs Conical: Lisa Beznosiuk on Flutes, Mahler, Wagner and Liszt
rqbwGacYpew 5:48 Crooks Vs Valves. Martin Lawrence on Horns, Mahler, Wagner and LIszt.
jeEhatHlwvQ 1:45 The Night Shift: OAE players on death, vomit... and Mahler
WEYw8ca_Io0 1:52 OAE on Mahler
lXSvlG-_Eo8 1:59 Ceri Jones 'Seraglio' OAE Tour Diary
PRKb_SWBFg8 1:57 Audience reactions to Mozart's 'Abduction from the Seraglio' performed by the OAE
VgIqVSzeaLs 8:45 French Connections - Orchestra of the Age of Enlightenment
wAsehXN6l80 1:23 OAE staff comment on Cherubini's Overture Medée
Rj2-ZjbzElM 3:38 The Night Shift at Wilton's Music Hall, Aug 2010
nqwiuPRDzCs 3:23 Songs of Wars I Have Seen
VsGlckg8gq0 3:24 Orchestra of the Age of Enlightenment perform Haydn's Symphony No.64 at The Night Shift
UL7CVtQjIBc 4:46 The Night Shift: Backstage
YWfSmZectL8 3:20 The Night Shift - 28 April 2008
zYL_I2F93tU 1:40 The Night Shift

# Townsends

UUCuubcxkFc 13:08 Roofing in the Wilderness - Thatch - Townsends Wilderness Homestead
jbEGABYnuIU 58:41 The Well Digger - Live In The Nutmeg Tavern!
sbcByPNuA5c 10:22 How To Make Brown Bread Ice Cream - Recipe From 1806!
Sl7Ta7r-irQ 1:05:41 Chicken Contest! - Live In The Nutmeg Tavern!
RvNhHIgVSVw 8:52 Log Homes of the Early American Frontier - Investigating and Re-building
uPMG681IwN8 9:38 Keeping Livestock on the Frontier - Wattle Fence Build
J6gmU0S7t4o 58:36 Live In The Nutmeg Tavern!
LgpqLcR8a4w 12:25 Secrets to Building with Logs - Frontier Log Barn - Extended
FzOVLy2eH58 15:04 How To Make Homemade Raspberry Wine: Time-Tested Recipe!
IASqjWncv6I 1:01:35 Ice Cream in the 18th Century! - Live In The Nutmeg Tavern!
ps6NxaoR69M 17:24 Hand-Dug Well Using Primitive Tools? - Frontier Well - Townsends Wilderness Homestead
j5cpxSJStWE 2:04:59 Live Play-Through "Lewis and Clark: The Expedition!"
QAL-9V0635Y 11:22 Were They Afraid to Drink Coffee 250 Years Ago?
5CdgQkw41dU 41:25 Finale! Townsends Book Club Episode 17 - Autobiography of Benjamin Franklin
vsvYZtFyqM4 10:20 How To Eat Like Benjamin Franklin
H94KCQ75gmc 48:30 Townsends Book Club Episode 16 - Autobiography of Benjamin Franklin
8USEQGCyFqE 8:32 Wood-Fired Steak from 1788 - Frontier Food
IOaz6EQZgg0 11:12 Summer Sweetness! - Mulberry Pudding Delight - Historical Boiled Pudding
Cl2NUnEjM7A 37:10 Townsends Book Club Episode 15 - Autobiography of Benjamin Franklin
3ky02udlbpI 10:32 Barbecue Pork on the Frontier in 1824 - BBQ with Gravy?
yXDI3WJ4Cng 50:30 Townsends Book Club Episode 14 - Autobiography of Benjamin Franklin
aRoukj48bkc 11:38 Unusual and Delicious Pan Fried Puddings from 1773
iCrJBiO0GLg 9:51 Let's Get This Straight - Primitive Levels
6fs6DtYM400 44:35 Townsends Book Club Episode 13 - Autobiography of Benjamin Franklin
KzcoUtLufps 8:59 200 Years Before "Mayberry" - The Self Sufficient Small Town Of Early America
do--rwss7UA 42:21 Townsends Book Club Episode 12 - Autobiography of Benjamin Franklin
4JdW-B0bQ9I 10:12 Whole Almonds Crushed To Make Flour? - Almond Cheesecakes
8t5Asj6kK0M 54:06 Townsends Book Club Episode 11 - Autobiography of Benjamin Franklin
EcATbhRA8-4 8:23 Inside A Woodturners Woodshop - Old vs. New
fsJbnWaa4tA 11:55 Breakfast Waffles Over The Fire - 18th Century Cooking

# Island Voices Videos

e3y4kKTnk9I 6:03 English documentary: Craigard, with Donald MacKinnon
IfPxG5Rc1R8 6:03 Gaelic documentary: Craigard, with Donald MacKinnon
fOGTKqNe_90 24:38 Aodán Ó Cearbhaill: Taisce bheo na nGael (2)
5qL7jDY3sUI 31:32 Aodán Ó Cearbhaill: Taisce Bheo na nGael (1)
-QmoxtlXntc 36:01 Aire air Sunnd: Staing na Gàidhlig
cnNvrkkmmJU 5:07 Jane NicLeòid: Talking Points Extract
VSK03u0YeKg 11:24 Doctor Joseph Farquharson: Talking Points Extract
4xZmzCN2qRg 7:55 Professor Udaya Narayana Singh: Talking Points Extract
YRiQBOc37Pw 6:56 Audrey West: Talking Points Extract
mHuQEPKW5hw 5:58 Kalyan Das Gupta: Talking Points Extract
krLY9ATKT5w 12:46 Professor Conchúr Ó Giollagáin: Talking Points Extract
1D5dOwSOV0E 15:54 Aire Air Sunnd: Launching the Island Voices workshops
10BUSDrdr6Y 49:36 Dr Will Lamb: Progress Towards Accurate Automatic Speech Recognition for Scottish Gaelic
ObJ-c1MT0Xs 1:16:06 Language Contact - Bilingual Balance? Talking Points Discussion 3
nnZOZD-l-fM 1:18:20 Language Hierarchies - English Ascendancy? Talking Points Discussion 2
xHWdO6mPl68 1:11:58 Language Endangerment - Gaelic Trajectory? Talking Points Discussion 1
JnwtBGuvb0g 7:10 Norman Maclean Talking Points, Part 3. Language Contact - Bilingual Balance?
CvcjkU-1Ybs 7:41 Norman Maclean Talking Points, Part 2. Language Hierarchies - English Ascendancy?
vUvu8ueMecA 7:34 Norman Maclean Talking Points, Part 1. Language Endangerment - Gaelic Trajectory?
XFGInaf_DGQ 3:31 Norman Maclean's homecoming (subtitled)
NR7w2G7ihYY 2:21 Language Contact: Talking Points 3 (short)
SBqk3mSQPM4 2:20 Language Hierarchies: Talking Points 2 (short)
4lfvx4cF6-4 2:20 Language Endangerment: Talking Points 1 (short)
VNgYaDP8dbM 7:02 Di Nyuuzpiepa
m2IYhk7_xMQ 10:00 Gaelic Jorni
-nmZNvGw9vw 29:48 Caitlín Ní Bhroin (2): Taisce Bheo na nGael (Zoom)
-FgU-xdz-i0 34:37 Caitlín Ní Bhroin (1): Taisce Bheo na nGael (Zoom)
0G4pnGencqE 9:49 Seanchas: Deireadh Sliochd nan Leòdach
M9IdCRVYTKI 26:19 Anna Frater (4): Stòras Beò nan Gàidheal
NUZZi2JxqNQ 11:17 Seanchas: Coinneach Bàn, Fear-taca Lacasaigh
CFAdfqY0zDE 30:22 Anna Frater (3): Stòras Beò nan Gàidheal
FkV6H5Fw5oY 33:10 Anna Frater (2): Stòras Beò nan Gàidheal
5BCcGp3yrr0 26:35 Anna Frater (1): Stòras Beò nan Gàidheal
53S0BDgqgqA 7:21 Dijitaizieshan Senta ina di Hebrides
WR1XxF2hrmQ 5:29 ソールモールオスタイク : Sabhal Mòr Ostaig in Okinawan
AX9y0i-baK0 30:39 Alasdair MacDhòmhnaill (4): Stòras Beò nan Gàidheal
bsZR7RH2N6A 29:35 Alasdair MacDhòmhnaill (3): Stòras Beò nan Gàidheal
9ULYjB49MK0 33:39 Pàdruig Moireasdan (2): Stòras Beò nan Gàidheal
41HK5rfgqkQ 33:49 Pàdruig Moireasdan (1): Stòras Beò nan Gàidheal
605mlP1idmY 31:15 Curstaidh NicDhòmhnaill: Stòras Beò nan Gàidheal
HvFkuWeNIFI 36:15 Christine NicLeòid: Stòras Beò nan Gàidheal (Zoom)
co-6effRTxI 24:07 Clíona Ní Ghallachóir (2): Taisce Bheo na nGael (Zoom)
DHPdzMdKaM4 24:25 Clíona Ní Ghallachóir (1): Taisce Bheo na nGael (Zoom)
VlrLXiVl4FI 19:35 Anna NicAonghais (2): Stòras Beò nan Gàidheal (Zoom)
3bOakOFmte8 20:45 Anna NicAonghais (1): Stòras Beò nan Gàidheal (Zoom)
5S59NCL5n6o 25:40 Calum Alasdair Friseal: Stòras Beò nan Gàidheal (Zoom)
E5wF5Jyn488 2:20 Criomagan (English subtitles)
QSSfLqbMi-g 2:20 Criomagan
r_yHflfgbEU 36:22 Guth nan Siarach agus Staing na Gàidhlig
hZSCw-PtDy8 25:48 New Insights on the Vernacular Gaelic Communities in the Islands
eRGf-cO9lNI 33:05 Maggie Smith (3): Stòras Beò nan Gàidheal (Zoom)
aiYtcnUrWag 19:18 Maggie Smith (2): Stòras Beò nan Gàidheal (Zoom)
C9kvP85bR1k 25:19 Maggie Smith (1): Stòras Beò nan Gàidheal (Zoom)
JD8pBRRx748 6:54 Ceòlas nyári iskola
FiZ0GkauTqo 6:03 Tο Κέντρο ημέρας Craigard
RFScg-VAQB8 3:27 Mi piace questo binario! (Gaelico)
4jlJMNpP9Gc 8:39 Schnellboot nach St Kilda
vfH9jG4w9k0 6:54 Ceòlas yaz okulu: Turkish documentary
PiLzZG-p3f4 0:42 Khasi Recitation
OnTKpQokfx0 5:06 विंडसर्फिंग - Windsurfing (Hindi)
WqGxcr81ryQ 8:39 সমুদ্রপথে সেইন্ট কিলডা - Seatrek to St Kilda (Bangla)
Vdg9KbnG43A 3:30 আমার হাত বান্ধিবি - Traditional Baul Song
jkPemTDiKMU 30:27 Christine Primrose (2): Stòras Beò nan Gàidheal
SGB0wHMFBqo 22:35 Christine Primrose (1): Stòras Beò nan Gàidheal
cJRBSfQiPzg 33:34 Seònaid Mhoireach (2): Stòras Beò nan Gàidheal
jg9i8NjjMak 29:59 Seònaid Mhoireach (1): Stòras Beò nan Gàidheal
zdEm2Unuy40 22:18 Iain Greumach (2): Stòras Beò nan Gàidheal
zz8m6ci7h-k 21:24 Iain Greumach (1): Stòras Beò nan Gàidheal
SkpKC8OKHjU 29:29 Gina NicDhòmhnaill (2): Stòras Beò nan Gàidheal
KzFpoKS68wo 30:42 Gina NicDhòmhnaill (1): Stòras Beò nan Gàidheal
unbDf0APkxI 34:10 Aonghas MacPhàil (2): Stòras Beò nan Gàidheal
NXVLSUOZZZs 37:53 Aonghas MacPhàil (1): Stòras Beò nan Gàidheal
BrRnV6GgEDY 35:44 Dòmhnall MacDhòmhnaill (3): Stòras Beò nan Gàidheal
ZyNuFDHs8HI 35:57 Dòmhnall MacDhòmhnaill (2): Stòras Beò nan Gàidheal
b6oowtPH-_g 29:55 Dòmhnall MacDhòmhnaill (1): Stòras Beò nan Gàidheal
Hap5Jo1q1o4 23:37 Alasdair MacDhòmhnaill (2): Stòras Beò nan Gàidheal
IzNK8uQsI8Q 20:56 Alasdair MacDhòmhnaill (1): Stòras Beò nan Gàidheal
rKf21a8ma_8 34:38 Seonag Smith (3): Stòras Beò nan Gàidheal
oJ24vgH2z8I 31:33 Seonag Smith (2): Stòras Beò nan Gàidheal
jHO1uy8apEk 26:08 Seonag Smith (1): Stòras Beò nan Gàidheal
rvX7JEYOShs 26:48 Màiri Robasdan (2): Stòras Beò nan Gàidheal
n70qZv3d6V8 24:19 Màiri Robasdan (1): Stòras Beò nan Gàidheal
PIAlpFcwf9o 28:05 Ailig Mac a' Phì (2): Stòras Beò nan Gàidheal
ykesJEsmpq0 33:10 Ailig Mac a' Phì (1): Stòras Beò nan Gàidheal
GbbhUD-QzN4 30:13 Catrìona Nic an t-Saoir (2): Stòras Beò nan Gàidheal
9yYPB_s5SJ8 27:08 Catrìona Nic an t-Saoir (1): Stòras Beò nan Gàidheal
__QqgB0_-zo 32:09 Alasdair MacAsgaill: Stòras Beò nan Gàidheal
CSVFn79rb2w 22:22 Two Lands, Many Languages - दो देश, भाषाएं अनेक - Dà Dhùthaich, Iomadh Cànan
W-MXXM8N8V0 1:19 Juri Dutta poetry reading
mhm6BoZ-SME 7:02 அந்த செய்தித்தாள் - Am Pàipear (Tamil)
KwfyOcHZLtg 0:57 Rusa Bhowmik
ybWYSEmgerE 0:53 Dharani
jgENcQMS3Rc 21:50 Hughena NicDhòmhnaill (2): Stòras Beò nan Gàidheal
ZGq8t29yNAw 23:00 Hughena NicDhòmhnaill (1): Stòras Beò nan Gàidheal
RvazpLf5mok 29:55 Tòmas MacDhòmhnaill (1): Stòras Beò nan Gàidheal
mZUA0JQTlLs 32:11 Tòmas MacDhòmhnaill (2): Stòras Beò nan Gàidheal
Z-Q3M_eKjO8 26:36 Pàdruig Moireach - Stòras Beò nan Gàidheal
Vc6rGv2_XsY 26:39 Eairdsidh Caimbeul - Stòras Beò nan Gàidheal
wtTukz3jIcM 10:00 Un viaggio gaelico - A Gaelic journey (Italian version)
fspj74toS_o 8:02 Magaidh Smith
21CS8cXHHXY 5:33 Breton Documentary: Sabhal Mòr Ostaig
v93311R1hyc 9:49 Liam Alastair Crouse, 2018
R8cX7UmIYdQ 5:07 रीस्टोर प्रोजेक्ट - Restore Project: Hindi documentary
0sHXrjqW2fY 38:51 Cearcall a' Chuain
nNjB-mwrxkU 10:08 ゲール語圏内の旅 - A Gaelic Journey (Japanese Version): Benbecula to Ranafast
lhC267fHNZ0 7:21 Scots documentary: Kist o Riches
9WcGBnPSOiA 10:01 A Gaelic Journey (Welsh version): Benbecula to Ranafast
q__BlZuajkU 4:58 Danns' ri Puirt
q70Hf8EsINg 10:00 A Gaelic Journey (Manx version): Benbecula to Ranafast
vLsE5iy8TyA 3:40 Liam Alastair Crouse, 2017
WR8jgqj2iic 4:39 An Dr Dòmhnall Uilleam Stiùbhart
j89COOGz6vQ 5:29 Urdu Documentary: Surfing
gT_mDHN7GHA 5:09 Urdu Documentary: Restore Project
IP2xWdottZM 52:25 Dihaoine - Gàidhlig: Saoghal Thormoid
TlUzd4pKaIg 44:21 Diardaoin - Cruthachalachd: Saoghal Thormoid
NqUS1wwtCeA 53:48 Diciadain - Coimhearsnachdan: Saoghal Thormoid
eiIzDMYAI_A 35:13 Dimàirt - Foghlam: Saoghal Thormoid
nCR2mVnDcX0 38:33 Diluain - Sinnsireachd: Saoghal Thormoid
K_pFGFRTEEI 4:18 Dr Will Lamb
AxHYpaPA2xg 4:11 An Dr Uilleam Lamb
NCJXHbbAqqg 10:00 A Gaelic Journey (Basque version): Benbecula to Ranafast
rMvPI7WnHjU 5:21 Basque Documentary: Lazybeds
mW2xqxSN2mM 15:35 Birlinn Chlann Raghnaill: Alan and Bill at Kildonan
lZ34eqW-_M8 3:19 The Birlinn of Clanranald: Alan Riach at Loch Eynort
revUU6yuVR0 6:20 Professor Roibeard Ó Maolalaigh
bupT81GRgtg 5:58 Árd-Ollamh Roibeard Ó Maolalaigh
I3h-Uvhzg5M 6:13 Polish Documentary: Peatcutting
am6Cghfv7hk 4:02 Gordon Cameron: Soillse Fieldworker
urjHTiEDgds 11:56 A' Bhean-Uasal NicÌomhair à Cnoc an t-Soluis air a' Bhac
Dq9zUc0uUCY 2:57 Bodach nan Serviettes
jSYVP31__As 4:39 Dòmhnall Phàdraig agus Màiri Claire
pE7hwWrsJvo 5:12 Hàllain
9OEdOF5TmcQ 4:07 Cabhag
mj6LQcFESw4 4:30 Mìorbhailtean ann am Barraigh
OXRS4B1iN2k 3:44 Sgeulachdan Thormoid: Facal-toisich
AKQw8r_tuA0 14:00 Angus Nicholson: Marathon Man
96uNMiHKkds 5:56 Alasdair MacGillivray (Gaelic)
mVcUhG_Sx7o 4:45 Alasdair MacGillivray (English)
qULMnzVxmC0 2:21 Stuart Dunmore aig Soillse
tFjV1G5SCuY 3:23 Marsaili agus Nicola aig a' cho-labhairt
SyPoihGGi-g 1:20 Co-labhairt aig Soillse
ttnzmXJAiVA 5:22 Cothrom Nativity Play
soBxek1baRs 8:36 Ewen MacAskill
TCXxIcI7NuM 9:09 Donald MacCormick: Highland Soldiers
NNSSfeErLdI 8:29 Norman Johnson - Piper
WjA2vrpeqBw 3:07 Norman Maclean: Òran do sgoilearan Chàirinis
LAvXmN0kND0 6:50 Isa MacKillop: Companaich m' òige
e07YWWJ2dJY 6:27 Cathie Laing: Sgìths 's Cruadal
3lJf1q4gMz4 11:22 Alec Macaulay
tTB4sBGzSl8 18:27 Willie MacDonald
cquuGRtZf10 8:54 Reverend John Smith
SJeFpt-sbl4 6:06 Enterprise on the Edge
TCpQaZSm4b0 6:47 Introduction to Virtual St Kilda
B7OczE1nBog 2:56 A Very Busy Spider - in Balivanich!
try9ISkWaY0 3:55 The Story of the Dog
ThCrio5wX3A 6:36 Sgeul a' Choin
CXRO6dyYqig 4:09 Blàr Chàirinis
vanUJ2uQbdU 3:25 Sgeul an Eich
njS_lGrf9-I 4:13 The Story of the Horse
XL-_EiekT3I 2:58 Òran le Ruairidh Beag
Unx1xpaWyVU 10:00 A Gaelic Journey (English Version): Benbecula to Ranafast
Y43I66Bxi6c 4:12 Eairdsidh agus Nìall Caimbeul: Extended Conversation
7bizb_Y_mU8 10:00 A Gaelic Journey (Scottish Version): Benbecula to Ranafast
AP4V-QoxVtw 3:45 Aodh Mac Ruairí: Extended Interview
K5Rp4WyMTpY 1:45 Darragh Ó Dochartaigh: Full Recitation
sv3tdC8jbXo 5:29 Bridanna Ni Bhaoill: Extended Interview
RHZS4f1xagA 10:00 A Gaelic Journey (Irish version): Benbecula to Ranafast
rNuexnaek-Y 7:28 Àiridh na h-aon oidhche
Rj1pUb8GgQA 8:03 Iain Trumisgarry - A Conversation
ivU7CZLbm0s 8:48 Grogarry Lodge
KkI-MBBPj2Q 4:59 English Interview: Greenspace Manager Donald MacRitchie
Wjp_LOeTIpU 7:03 Gaelic Interview: Seallam! Director Chris Lawson - Services
Kr2Zn6S6d2E 5:55 Gaelic Documentary: Greenspace Research
puHYOzsj6fc 6:57 English Interview: Seallam! Director Chris Lawson - Services
BjcDY0XBKjU 7:21 Gaelic Documentary: Tobar an Dualchais
NhiShBJBQVo 7:21 English Documentary: Tobar an Dualchais
w_bD2WRw5dE 6:56 Gaelic Interview: Manager Shona MacDonald
oAg5xmlbTBo 6:32 English Interview: Manager Shona MacDonald
mMtM3eg3BsE 4:14 English Interview: Digitiser Catriona Scott
92ZDzl77Zvo 3:31 Gaelic Interview: Digitiser Catriona Scott
kfqkYEpaWOw 4:28 English Documentary: Seallam! Visitor Centre
utbihJPiANY 4:28 Gaelic Documentary: Seallam! Visitor Centre
9D625F1rr8g 5:35 English Interview: Seallam! Director Chris Lawson - Plans
5sIYPeYZEKQ 4:16 Gaelic Interview: Seallam! Director Chris Lawson - Plans
mdVwD2LtWRQ 4:38 English Interview: Local Artist Margarita Williams
SXxgPwXFAt8 4:03 Gaelic Interview: Local Artist Margarita Williams
aPRZdXED3RI 5:55 English Documentary: Greenspace Research
k1bg47R0Spc 4:47 Gaelic Interview: Greenspace Manager Donald MacRitchie
AklugRUiq6I 3:18 English Interview: Greenspace Consultant Donald MacDonald
HBux_tajzLE 4:08 Gaelic Interview: Greenspace Consultant Donald MacDonald
6noT8JNLcIo 5:00 Gaelic Interview: Greenspace Researcher Malcolm Murray
Y1XvPNsebjY 5:17 English Interview: Greenspace Researcher Malcolm Murray
CdH0UYqeNEU 4:15 English Documentary: Urras Oighreachd Ghabhsainn
nADAPb_ULDg 4:15 Gaelic Documentary: Urras Oighreachd Ghabhsainn
ggr21IALMzg 5:24 Gaelic Interview: Galson Chair Agnes Rennie - History and Work
QAjmp6VLnWw 5:06 English Interview: Galson Chair Agnes Rennie - History and Work
2Mk6yITs1Co 3:11 English Interview: Powerdown Officer Kirsty MacLennan
QiVmdURUTfM 3:26 Gaelic Interview: Powerdown Officer Kirsty MacLennan
PrnxTmbfH7E 3:15 Gaelic Interview: Galson Chair Agnes Rennie - Plans and Partnerships
_3Bwrv6EQbI 2:57 English Interview: Galson Chair Agnes Rennie - Plans and Partnerships
RRCWwcbyhJk 8:39 Gaelic Documentary: Seatrek to St Kilda
Dm69bBehc98 8:39 English Documentary: Seatrek to St Kilda
PJtltorLDWU 5:26 English Interview: Seatrek Manager Murray MacLeod
dj0UiV50cmA 4:26 Gaelic Interview: Seatrek Manager Murray MacLeod
D5ywSDeeJ_A 4:39 Gaelic Interview: Uig Resident Iain Buchanan
r5CoQnfLbl0 4:31 English Interview: Uig Resident Iain Buchanan
jN3gEaU-0bA 7:02 English Documentary: Am Pàipear
u30-ksN_ITQ 7:02 Gaelic Documentary: Am Pàipear
0Uz4rnp8VAs 4:59 Gaelic Interview: Am Pàipear Editor Archie Mackay
KWJMIJb7u10 4:41 English Interview: Am Pàipear Editor Archie Mackay
h-2d5Y6GTcU 5:59 Dhan Chamara: Gordon Wells
brEh4uC5H6o 5:05 To Camera: Gordon Wells
4MYB3_cJSV4 3:39 English Interview: Craigard Supervisor Marnie Keltie
SQ-SPY0mE0Q 2:05 Tormod MacGill-Eain: Dhan Chamara
9W9CahaP9cY 2:06 Norman Maclean: To Camera
Qq-qeP1sOkk 5:59 Gaelic Documentary: Craigard Day Centre
RWbgJx7b8i8 6:00 English Documentary: Craigard Day Centre
dSV7XmfaNXs 1:33 Gaelic Interview: Craigard Client Donald Mackinnon
kqsvPFGczy8 2:04 English Interview: Craigard Client Donald Mackinnon
2I1-odilPAQ 4:35 Gaelic Interview: Community Member Flora Macdonald
MdtddN5Eips 5:05 Gaelic Documentary: Furniture Restoration Project
F4HvA6hgLik 5:05 English Documentary: Furniture Restoration Project
SX754F42cXE 4:13 Gaelic Interview: Craftsman Seumas Macdonald
eyXENTCY52E 4:09 English Interview: Craftsman Seumas Macdonald
zdc3zSi4Txg 4:31 Gaelic Interview: Cothrom Director Neil Macdonald
5mRz6nwCsIk 3:30 English Interview: Cothrom Director Neil Macdonald
OwRUxJJ25IM 4:34 Gaelic Documentary: Hebridean Smokehouse
WE4bijFvuR8 4:34 English Documentary: Hebridean Smokehouse
B92ah2z5Gdc 6:08 Gaelic Interview: Environmental Health, Alasdair MacEachen
iIc70iBFYxE 5:32 English Interview: Environmental Health, Alasdair MacEachen
DoLxQCv_8Kg 7:03 English Documentary: Hebridean Cookery Demonstration
2Dji5JJQyZE 7:03 Gaelic Documentary: Hebridean Cookery Demonstration
tkJzq1TnfNU 2:26 English Interview: Hotelier Isabel Graham
MCaJmD5gcOY 2:05 Gaelic Interview: Hotelier Isabel Graham
4gaba9hEa7I 6:49 English Documentary: Ceolas Music Summer School
lBH7VQwJcPI 6:49 Gaelic Documentary: Ceolas Music Summer School
eqA82-ICMLw 3:58 English Interview: Ceolas Chair Mary Macinnes
KGk0yD5ysrc 4:10 Gaelic Interview: Ceolas Chair Mary Macinnes
6ph4AM-gG6s 2:26 English Interview: Ceolas Administrator Mary Ellen Stewart
IH6OY4AK5iM 2:16 Gaelic Interview: Ceolas Administrator Mary Ellen Stewart
vTH7hzGVh84 2:04 Gaelic Interview: Ceolas Student Ruairidh MacIlleathain
Op9huMFXk7Q 3:31 English Interview: Ceolas Student Dale Cummings
-O0BFGrUCro 7:22 Gaelic Documentary: Taigh Chearsabhagh Museum and Art Centre
lq3TAmvEats 7:22 English Documentary: Taigh Chearsabhagh Museum and Art Centre
XLq2zi5q0Gc 2:05 Gaelic Interview: Heritage Officer Catriona MacCuish
pdFnlRY71tQ 1:51 English Interview: Heritage Officer Catriona MacCuish
dMK4XTqQdKw 2:26 Gaelic Interview: Student Artist Donald Ferguson
ej-r01VbJhk 2:10 English Interview: Student Artist Donald Ferguson
RRmexyUMSeI 6:20 Gaelic Documentary: Bi Beo Songwriters
QBXmX5C0aWk 6:20 English Documentary: Bi Beo Songwriters
2gxdS9Yt4XY 4:22 English Interview: Lyricist James MacLetchie
nktgD8WXN00 7:35 Gaelic Interview: Lyricist James MacLetchie
3Bwp5Xz-Tlc 5:24 English Interview: Musician Kevin de Las Casas
5-ujWQLfWuM 5:05 Gaelic Song: Singer James MacLetchie
tKsWZCJ6hgg 6:51 Gaelic Interview: SMO Depute Principal John Norman Macleod
e3u-b8ZVN3I 5:07 Gaelic Documentary: Children's Parliament in Barra
M0CoVo10oJg 2:06 Gaelic Interview: MCP Sarah Macinnes
Z2FxyLkk1pE 5:07 English Documentary: Children's Parliament in Barra
OqvA-hqkZg4 1:59 English Interview: MCP Sarah Macinnes
0dCR5GZH0Cw 6:23 Gaelic Interview: Parent Isabell Macinnes
HdyIQIGZgbs 6:48 English Interview: Parent Isabell Macinnes
8V3Mn5w6QCA 7:10 Gaelic Documentary: Children's Parliament in Benbecula
1zE217N1OcQ 7:10 English Documentary: Children's Parliament in Benbecula
4Fe543X4v2s 5:56 Gaelic Interview: Health worker Isabel Steele
YJI2ABr_kQM 7:51 English Interview: Health worker Isabel Steele
GSd976uh4LY 8:09 Gaelic Interview: Teacher Catriona Black
OegXYbamM2Y 7:27 English Interview: Teacher Catriona Black
_y2QclvLeqg 7:38 Gaelic Documentary: Work Skills Courses
xzXQFHMwaiQ 7:38 English Documentary: Work Skills Courses
W5vxFXSg6Dc 5:08 Gaelic Interview: Crofter/demonstrator Neil MacPherson
QZncNeybaaY 3:43 English Interview: Crofter/Demonstrator Neil MacPherson
UB1TDIBqXJ0 2:54 Gaelic Interview: Boatbuilding pupils
_Ax25cBZ1YI 3:09 English Interview: Boatbuilding pupils
XOc-HqsKHKo 5:32 Gaelic Documentary: Scotland's Gaelic College
brvfX4QOJic 5:32 English Documentary: Scotland's Gaelic College
bv0x5WdxgrI 5:05 English Interview: SMO Depute Principal
5KUJBlCRAds 4:01 Gaelic Interview: SMO staff and students
QSrNsKXE6AA 4:42 English Interview: SMO staff and students
5O99V5-X-6g 5:50 Gaelic Documentary: Grimsay Boat Day
FTzb9yK1kx0 5:50 English Documentary: Grimsay Boat Day
USnH21qauj0 4:25 Gaelic Interview: Father, Lachie Morrison, on Grimsay and boats
-kRntPW3k9E 2:06 Gaelic Interview: Son, Padruig Morrison
YyF3wfyJMgY 4:14 English Interview: Father, Lachie Morrison, on Grimsay and boats
bQ1MJLz0usA 2:20 English Interview: Son, Padruig Morrison
1wjxcB9kSRk 7:50 Gaelic Interview: Lachie Morrison, Heisgeir reminiscence
V6bOwZ2qDRk 5:05 English Interview: Lachie Morrison, Heisgeir reminiscence
0aDmuKJEivQ 4:45 Gaelic Interview: Crofter Roddy Red Tie Macdonald
zNicypDAtMk 4:08 English Interview: Crofter Roddy Red Tie Macdonald
CLgG0vMsm3c 6:22 Gaelic Interview: Biodiversity Officer Anne Maclellan
yVLEmBGJXLs 6:09 English Interview: Biodiversity Officer Anne Maclellan
FfCv_pesimY 7:03 Gaelic Documentary: Crofting and harvesting
SI79UOktKCI 7:03 English Documentary: Crofting and harvesting
QhQx8V0i1To 3:40 English Interview: Peatcutter Archie Campbell on the peatcutting process
RN6WNGlvYcQ 6:11 Gaelic Interview: Peatcutter Archie Campbell on the peatcutting process
QTL_QuEVWbY 5:02 English Interview: Peatcutter Archie Campbell on Social Customs
tSzGGE_CTNs 5:07 Gaelic Interview: Peat cutter Archie Campbell on Social Customs
ZdNQB86k49E 3:31 English Interview: Lazy beds co-ordinator Tommy Macdonald
UosWZ6bxNTE 3:59 Gaelic Interview: Lazy beds co-ordinator Tommy Macdonald
3E015U6h1Ns 2:03 English Interview: Lazy beds demonstrator Angus Macdonald
CqE6Gku5yYM 2:24 Gaelic Interview: Lazy beds demonstrator Angus MacDonald
KMnJoV2WWmc 5:20 English Documentary: Lazy beds
L9E0ucZDZVs 5:20 Gaelic Documentary: Lazy beds
I22eWfust5U 3:42 English Interview: Razorfish Cook Mary Anne Mackay
hLm9ByfQl6g 4:24 Gaelic Interview: Razorfish cook Mary Anne Mackay
KvIcz5GfRzE 4:55 English Interview: Razorfish catcher Alec Beaton
7-JUfyHCSm4 4:18 Gaelic Interview: Razorfish demonstrator Alec Beaton
Gsqf75JZAwY 5:00 English Documentary: Catching razorfish
i_eaBU3EHl8 5:00 Gaelic Documentary: Catching razorfish
e1phTyxse-E 5:06 English Documentary: Windsurfing
rgs8o9LyX1A 6:29 English Interview: Surfer Will Lamb
ag-p7au9vBU 6:46 Gaelic Interview: Surfer Will Lamb
0nV9qsIK1sc 5:06 Gaelic Documentary: Windsurfing
t4BCnSdiS1k 3:29 English Interview: Windsurfer Angus Johnson
dmGk8x-i0Lg 4:15 Gaelic Interview: Windsurfer Angus Johnson
Xr_briCza9I 3:31 Tormod MacGill-Eain: Tighinn Dhachaidh
u8V6JgxS_BA 3:35 Norman Maclean: Creativity and Values
of5cWjD9CKg 6:08 English Documentary: Peatcutting
v0OQNvT-lAI 6:08 Gaelic Documentary: Peatcutting
UXM4jfriBhU 5:29 English Documentary: Surfing
u1IJN-TiEQY 5:29 Gaelic Documentary: Surfing

# Ben Eater

g_koa00MBLg 31:17 How do hardware timers work?
-wMU8vmfaYo 30:36 Why was Facebook down for five hours?
MCi7dCBhVpQ 33:00 SPI: The serial peripheral interface
2lPzTU-3ONI 37:20 How does n-key rollover work?
N0O5Uwc3C0o 36:15 How does USB device discovery work?
wdgULBpRoXk 34:15 How does a USB keyboard work?
dL0GO9SeBh0 20:04 Keyboard interface software
w1SB9Ry8_Jg 28:27 Keyboard interface hardware
7aXbh9VUB3U 33:07 So how does a PS/2 keyboard interface work?
PE-_rJqvDhQ 20:16 Breadboarding tips
BUTHtNrpwiI 44:25 World's worst video card gets better?
2iURr3NBprc 25:12 Installing the world’s worst video card
oOYA-jsWTmc 25:38 Interrupt handling
h0jloehRKas 36:46 What is error correction? Hamming codes in hardware
DlEa8kd7n3Q 27:36 Hardware interrupts
v3-a-zqKfgA 42:26 Binary to decimal can’t be that hard, right?
ZYJIakkcLYw 31:39 How assembly language loops work
fCbAafKLqC8 28:43 Why build an entire computer on breadboards?
omI0MrTWiMU 17:42 Subroutine calls, now with RAM — 6502 part 7
i_wrxBdXTgM 38:14 RAM and bus timing — 6502 part 6
xBjQVxVxOxc 24:25 What is a stack and how does it work? — 6502 part 5
FY3zTUaykVo 28:10 Connecting an LCD to our computer — 6502 part 4
oO8_2JJV0B4 15:35 Assembly language vs. machine code — 6502 part 3
yl8vPW5hydQ 49:42 How do CPUs read machine code? — 6502 part 2
LnzuMJLZRdU 27:25 “Hello, world” from scratch on a 6502 — Part 1
uqY3FMuMuRo 24:23 World's worst video card? The exciting conclusion
l7rce6IQDWs 32:47 The world's worst video card?
sNkERQlK8j8 53:13 Hardware build: CRC calculation
izG7qT0EpBw 47:30 How do CRCs work?
ppU41c15Xho 28:21 Checksums and Hamming distance
MgkhrBSjhag 21:42 Error detection: Parity checking
eq5YpKHXJDM 43:54 Reliable data transmission
Zg1NdPKoosU 43:10 Conditional jump instructions
ObnosznZvHY 29:27 CPU flags register
AqNDk_UJW4k 18:20 Making a computer Turing complete
hKD-lBrZ_Gg 46:59 The case against Net Neutrality?
Nws5-kp8Blk 6:23 Update and PODCAST ANNOUNCEMENT!
FCscQGBIL-Y 18:50 Adding more machine language instructions to the CPU
JUVt_KYAp-I 31:14 Reprogramming CPU microcode with an Arduino
HtFro0UKqkk 17:59 8-bit CPU reset circuit and power supply tips
dHWFpkGsxOs 43:52 8-bit CPU control logic: Part 3
X7rCxs1ppyY 18:22 8-bit CPU control logic: Part 2
dXdoim96v5A 27:52 8-bit CPU control logic: Part 1
AwUirxi9eBg 13:17 8-bit CPU control signal overview
-6JAgFWCL9w 19:11 8-bit computer build: Connecting the bus
dLh1n2dErzE 32:47 Build an 8-bit decimal display for our 8-bit computer
K88pgWhEb1M 57:30 Build an Arduino EEPROM programmer
BA12Z7gQ4P0 25:22 Using an EEPROM to replace combinational logic
7zffjsXqATg 15:33 Designing a 7-segment hex decoder
tNwU7pK_3tk 7:47 Program counter build
g_1HyxBzjl0 9:18 Program counter design
exGEmA67dNc 5:13 Binary counter
rXHSB5w7CyE 12:42 Master-slave JK flip-flop
st3mUEub99E 12:28 JK flip-flop racing
F1OC5e7Tn_o 10:03 JK flip-flop
Vw3uDOUJRGw 16:43 RAM module testing and troubleshooting
5rl1tEFXKt0 14:13 RAM module build - part 3
KNve2LCcSRc 21:02 RAM module build - part 2
uYXwCBo40iA 13:45 RAM module build - part 1
FnxPIZR1ybs 13:45 8-bit computer RAM intro
4nCMDvnR2Fg 5:42 Testing the computer's ALU
U7Q8-2YZTUU 15:10 Troubleshooting the ALU
S-3fXU3FZQc 16:17 Building the ALU
mOVOS9AjgFs 15:10 ALU Design
4qH4unVtJkE 13:49 Twos complement: Negative numbers in binary
9WE3Obdjtv0 10:53 Testing our computer's registers - 8-bit register - Part 5
CiMaWbz_6E8 9:40 Building an 8-bit register - 8-bit register - Part 4
-arYx_oVIj8 20:07 Designing and building a 1-bit register - 8 bit register - Part 3
faAjse109Q8 9:03 Tri-state logic: Connecting multiple outputs together - 8 bit register - Part 2
QzWW-CBugZo 9:36 Bus architecture and how register transfers work - 8 bit register - Part 1
SmQ5K7UQPMM 10:42 Clock logic - 8-bit computer clock - part 4
WCwJNnx36Rk 10:31 Bistable 555 - 8-bit computer clock - part 3
81BgFhm2vz8 12:50 Monostable 555 timer - 8-bit computer clock - part 2
kRlSFm519Bo 27:51 Astable 555 timer - 8-bit computer clock - part 1
HyznrdDSSGM 6:53 8-bit computer update
YW-_GkUguMM 16:01 D flip-flop
peCh_859q7Q 9:16 D latch
KM0DdEaY5sY 12:59 SR latch
sTu3LwpF6XI 13:02 Making logic gates from transistors
DXvAlwMAxiA 11:23 How a transistor works
33vbFFFn04k 15:51 How semiconductors work
wvJc9CZcvBc 13:39 Learn how computers add numbers and build a 4 bit adder circuit
Lv9Gc3Lghjk 9:11 Comparing the buffer and inverter circuits | Digital electronics (10 of 10)
hYN8C769k8A 9:21 Inverting the signal with a transistor | Digital electronics (9 of 10)
ks_VShSgPns 8:43 Using a transistor to solve our problem | Digital electronics (8 of 10)
WD14ow-1q6k 4:30 The transistor as a current controlled switch | Digital electronics (7 of 10)
BpJAh0KfgEI 5:43 Troubleshooting: Investigating why the LED is so dim (5 of 10)
uo2KgRN04XI 9:36 How a transistor amplifies current | Digital electronics (6 of 10)
KEOsmWRoT00 8:02 Connecting to a mystery signal | Digital electronics (4 of 10)
LakgUi2Ajkw 13:22 Powering our LED circuit | Digital electronics (3 of 10)
CdqvY_vY1XA 12:04 Limiting current through an LED | Digital electronics (2 of 10)
poWJTSV4Yio 10:14 Experimenting with LEDs | Digital electronics (1 of 10)
a73ZXDJtU48 7:26 Programming Fibonacci on a breadboard computer
yOyaJXpAYZQ 10:02 Comparing C to machine language
35zLnS3fXeA 11:17 Stepping through a program on the 8-bit breadboard computer
9PPrrSyubG0 15:23 Programming my 8-bit breadboard computer
aamG4-tH_m8 10:07 ARP: Mapping between IP and Ethernet | Networking tutorial (9 of 13)
F27PLin3TV0 9:31 TCP connection walkthrough | Networking tutorial (13 of 13)
MGAaTqFct_I 2:11 Lower layers of the OSI model | Networking tutorial (7 of 13)
8BhjXqw9MqI 11:47 Clock synchronization and Manchester coding | Networking tutorial (3 of 13)
xNbdeyEI-nE 8:50 Looking at ARP and ping packets | Networking tutorial (10 of 13)
VWJ8GmYnjTs 13:50 Hop-by-hop routing | Networking tutorial (11 of 13)
1XrRT0CmzYw 9:05 Frame formats | Networking tutorial (6 of 13)
i8CmibhvZ0c 9:16 Analyzing actual Ethernet encoding | Networking tutorial (4 of 13)
lUo45NqPyq8 4:27 Intro to fiber optics and RF encoding | Networking tutorial (2 of 13)
4IMc3CaMhyY 8:29 TCP: Transmission control protocol | Networking tutorial (12 of 13)
XaGXPObx2Gs 4:14 Sending digital information over a wire | Networking tutorial (1 of 13)
xrVN9jKjIKQ 8:50 The importance of framing | Networking tutorial (5 of 13)
rPoalUa4m8E 9:33 The Internet Protocol | Networking tutorial (8 of 13)
0gurk_vqGLI 3:38 KA 60 Minutes Sep 2013 rerun (10x speed)

# Sustasis

Rx8TGi2aXSc 58:07 The Nature of Matter in the Work of Christopher Alexander - Michael Mehaffy
QzVhCOJVLXE 1:00:46 Nikos Salingaros - Revolution in Architectural Thought
VumQdtXrNLM 4:35 Excerpt from The Alexander- Eisenman Debate of 1982
G7gI-nbUtMg 1:03 Future of Places - Key Messages Summary
wJCw7vSqFDY 42:29 Michael Mehaffy: The Empires New Clothes
oKO3vYjZbcs 1:22:28 Christopher Alexander - Life in Buildings (Full)
_RSc1IWFBzQ 23:00 (In)Forming Patterns: An Online Symposium
PqX6odZkumc 1:22:52 The Empire's New Clothes - Michael Mehaffy, May 12, 2021
Y4yeqD30vgQ 19:55 Unified Architectural Theory, Lecture 11: “Architecture Itself as a Biological System”.
inZ2AV2cwjQ 16:57 Unified Architectural Theory, Lecture 12: “Conclusion”.
cG22CDSFJo4 3:56 Why Pubic Space Matters - Michael Mehaffy
6NXrOzR1xDc 6:05 A tour of the Vineyard Farmers Market, Fresno
VsZIJpp6-no 17:11 Unified Architectural Theory, Lecture 10: “Ornament and human intelligence”.
8gDs89ZRIsc 19:21 Unified Architectural Theory, Lecture 8: “Fractals and ornament generate attachment”
Bx3XP1wtUZE 19:39 Unified Architectural Theory, Lecture 5: “Connecting to the World Using the Mirror-of-the-Self Test”
xQv_1qiDAXY 17:05 Unified Architectural Theory, Lect. 9: “Subliminal reality: Eye-tracking maps the field of centers”
aLX9bqred14 17:12 Unified Architectural Theory, Lecture 7: “Fifteen geometrical properties”
FT9F13QHj7I 18:16 Nikos Salingaros: The Existence of an “I” (Lecture)
tg_TmOQLb10 18:35 Unified Architectural Theory, Lecture 6: “Biophilic design influences human health”
dVGc0eduJac 1:05:06 Nikos Salingaros: “Codes That Generate Life” (Lecture)
EAzSIdckjUY 1:08:04 Nikos Salingaros: “Architectural Education Influenced by Social Engineering” (Lecture)
p4snkjKvLFQ 1:07:24 Nikos Salingaros: “Seashells, Hyperspace, and the Sacred” (Lecture)
ok4vgxQ8H9k 1:06:05 Nikos Salingaros: “A Fractal Distribution is Sustainable” (Lecture)
Ii3TIHZN6ag 1:10:06 Nikos Salingaros: “Folded or Perforated Fractals” (Lecture)
ekjzOvTE1NQ 52:19 Nikos Salingaros: “Complexity and the Fibonacci Sequence” (Lecture)
A7-bAg0SJHY 59:59 Nikos Salingaros: “Centers and Computational Reducibility” (Lecture)
qbpIqHaKzRA 16:19 Unified Architectural Theory, Lecture 4: Computing the regional adaptivity index of a form language
Syu8xwDs-AM 1:01:54 Nikos Salingaros: “Symmetries and Symmetry Breaking” (Lecture)
1KOdxv4oxAY 1:11:08 Nikos Salingaros: Step by step adaptive design (Lecture)
YWDZcaF_3ek 16:38 Unified Architectural Theory, Lecture 3: Complex versus simplistic form languages
gGTjJZhnl4A 1:07:44 Nikos Salingaros: "Christopher Alexander's Fifteen Fundamental Properties" (Lecture)
nIGnm-UiNYw 20:00 Unified Architectural Theory, Lecture 2: Form Languages and Pattern Languages
vcN5fi3zuxA 14:51 Unified Architectural Theory, Lecture 1: The Structure of Architectural Theories
82mH5gS_puc 51:50 Lessons After COVID-19: Addressing Social Isolation through the Built Environment
GEXRQdXXf9I 3:01 Michael Mehaffy Presentation for World Cities Day
3G5noYSiCu0 15:01 Gamla Stan Walking Tour with INTBAU Sweden
J8Dxm-OaE3E 40:01 Pattern Languages of Programming (PLoP) 2020 Presentation - Mehaffy
MB3eFZQtwGY 19:38 New Patterns for a Post-COVID Age
dm0MIeaZIzw 4:56 Tour of Poundbury, UK
bDbnNF20eKY 20:32 Christopher Alexander: Life in Buildings (Excerpt)
XswHZZqO0jk 7:46 Thought Leaders - Jane Jacobs (for FOP Summit - ROUGH EDIT)
o6q1dDAv6zY 4:55 Thought Leaders Christopher Alexander
D3v_F1hrBtE 5:01 Mehaffy - The Urban Dimensions of Climate Change
xaYQK8kTwHg 16:39 Overview of Metro (Oregon) 2009 "Centers and Corridors" Policy Report
nyAtltoaE0s 13:03 Mehaffy - Pattern Languages and Wikis for a New Urban Agenda - 13min Version
muuzfQQLFlc 5:01 Mehaffy - Tools and Strategies for Public Private Collaboration
VCqy00Ahib8 7:37 Mehaffy - Healthy Public Space Networks for a New Urban Agenda
sbXIk5DtVTg 7:01 Mehaffy - Pattern Languages and Wikis for a New Urban Agenda - EDITED VERSION
EzS60DaltAU 16:49 A Conversation with Ward Cunningham - Edited Version
lLy0N0tOVVI 46:24 Discussion with Ward Cunningham Feb 11 19
FkFh4IW1N_s 33:01 Sustasis Interview with Ward Cunningham Apr 5 18
qXBKZPaVHi8 4:31 Dr. Joan Clos at launch event for The Quito Papers, World Urban Forum 9
g9KivwhuCXo 4:20 Ax:son Johnson Address at Habitat III
Zv2l3_59D4M 4:04 Remarks of Michael Mehaffy at PrepCom 3
ArAIvl0hk3M 3:02 Sustasis Executive Director Mehaffy's Testimony to the City Council of Portland, Feb 4 2015
DHBzg0Rd7Yk 2:41 Sustasis Executive Director Mehaffy's Testimony to the City Council of Portland, April 20, 2016
vvKTPbjGm8A 1:13 ACINAT
u33YjyQeb_o 24:15 Nikos Salingaros Addresses ICUPD 2015
RiGlhj-wyYo 32:58 Nikos A. Salingaros on Pattern Language and Form Language
ZvN5kN5TCdY 8:59 The Selling of Sprawl
oEkiNgNnIgI 21:08 Nikos A. Salingaros on Urban Design Education
3UNfYRyGHIQ 18:37 5 Crucial Decades - Michael Mehaffy Presentation and Discussion
mRuEmDr0fuI 7:55 Joanna Alimanestianu speaking at the Future of Places Forum
06nYkNi33vA 7:42 Taller Buildings in Portland
SRwJQXTluLc 7:42 The Impacts of Taller Buildings in Portland
nGjXgHwFYqc 58:44 Vincent Scully Prize for Christopher Alexander - Mehaffy Presentation and Discussion
P5Bu9LjfcZE 2:10 Michael Mehaffy shares lessons at Orenco Station
ts_ArwNEHRk 6:00 Michael Mehaffy at Future of Places II
o2V_0BvFJuc 2:30 2014 Year-end Message from the Sustasis Executive Director
d6pX0S34CZk 10:08 Webinar, "Federated Wiki: Potential for a new generation of open-source scenario-modeling tools:

# PBS Space Time

WZfmG_h5Oyg 20:16 What Happens Inside a Proton?
184eP_KuXek 14:12 How Many States Of Matter Are There?
JnKzt6Xq-w4 18:53 What If We Live in a Superdeterministic Universe?
rQnNghhPw6o 19:28 Could We Decode Alien Physics?
wdP_UDSsuro 20:34 Is Interstellar Travel Impossible?
epSev7ovVew 14:22 Have We SOLVED The Black Hole Information Paradox with Wormholes?
v-aP1J-BdvE 18:51 What If Physics IS NOT Describing Reality?
e3jGWXeBtPo 20:30 The Evolution of the Modern Milky Way Galaxy
v4ogRCjhFDM 15:06 What If the Galactic Habitable Zone LIMITS Intelligent Life?
bUHZ2k9DYHY 17:32 Space DOES NOT Expand Everywhere
G0Q4UAiKacw 18:04 How the Higgs Mechanism Give Things Mass
I8p1yqnuk8Y 18:44 Does the Universe Create Itself?
jeRgFqbBM5E 13:01 Could The Universe Be Inside A Black Hole?
BOLHtIWLkHg 19:15 Where Is The Center of The Universe?
esayi49OAk4 15:44 What If Charge is NOT Fundamental?
LHhFFfv20-4 21:22 Is the Proxima System Our Best Hope For Another Earth?
Thw43hzXlDA 15:55 Are Cosmic Strings Cracks in the Universe?
FP6iyVJ70OU 20:16 Is The Wave Function The Building Block of Reality?
twvj9os9DLE 39:34 The Nature of Space and Time AMA
cDQZXvplXKA 18:14 How Does Gravity Escape A Black Hole?
D-wzdsSiemU 13:25 How To Build The Universe in a Computer
55c9wkNmfn0 20:53 How To Simulate The Universe With DFT
6mJXv5OBel8 14:42 How to Find ALIEN Dyson Spheres
AK44wAvv2E4 20:26 What Happens If A Black Hole Hits Earth?
X5r36VCrA_w 36:39 2021 End of Year AMA!
351JCOvKcYw 16:29 Are Black Holes Actually Fuzzballs?
0sTBZ2G4vow 18:28 What If Our Understanding of Gravity Is Wrong?
Q_CQDSlmboA 19:40 Is ACTION The Most Fundamental Property in Physics?
hYc97J2MZIo 16:19 Will Constructor Theory REWRITE Physics?
iDIcydiQOhc 17:31 New Results in Quantum Tunneling vs. The Speed of Light
dw1sekg6SUY 18:27 Why Magnetic Monopoles SHOULD Exist
EK_6OzZAh5k 19:29 How Electron Spin Makes Matter Possible
1Ou1MckZHTA 14:15 Neutron Stars: The Most Extreme Objects in the Universe
I9y62qoTsic 17:13 First Detection of Light from Behind a Black Hole
gc4pxTjii9c 13:15 How Vacuum Decay Would Destroy The Universe
IEDSAheh8Os 19:01 How to Communicate Across the Quantum Multiverse
QLSIZg0npuA 18:46 How An Extreme New Star Could Change All Cosmology
_H4xrVzd65Q 19:04 How Magnetism Shapes The Universe
z-syaCoqkZA 13:03 Where Are The Worlds In Many Worlds?
pWlk1gLkF2Y 18:10 Electrons DO NOT Spin
vgYQglmYU-8 19:36 How Quantum Entanglement Creates Entropy
snp-GvNgUt4 12:23 Can Space Be Infinitely Divided?
LkeTk-Fi_c8 16:52 Are We Running Out of Space Above Earth?
srVKjWn26AQ 16:08 What If (Tiny) Black Holes Are Everywhere?
uZDhCW-PTRM 11:02 Breaking The Heisenberg Uncertainty Principle
3sq658Okvao 19:20 How To Know If It's Aliens
Vk5bxHetL4s 18:54 The NEW Warp Drive Possibilities
qy8MdewY_TY 12:21 What If Dark Matter Is Just Black Holes?
O4Ko7NW2yQo 12:36 Why the Muon g-2 Results Are So Exciting!
SMPid7Sh0EE 17:11 Zeno's Paradox & The Quantum Zeno Effect
dsCjRjA4O7Y 18:09 The NEW Crisis in Cosmology
OHdV9aO6jaE 13:25 How Does Gravity Affect Light?
UKxQTvqcpSg 11:51 Does Time Cause Gravity?
L9L_gNogNes 18:26 Gravitational Wave Background Discovered?
GKD1vDAPkFQ 12:44 How Does Gravity Warp the Flow of Time?
fidzLZQyaJE 16:51 Is Dark Matter Made of Particles?
6MfJ59lkABY 16:43 Can We Break the Universe?
j5HyMNNSGqQ 12:58 What Happens During a Quantum Jump?
0A1ouV7iD8o 16:22 Navigating with Quantum Entanglement
3tCWWnXicC0 16:30 The Supernova At The End of Time
F0b8b_ykPQk 14:36 Why Do You Remember The Past But Not The Future?
QkWT-xMTm1M 14:21 The Arrow of Time and How to Reverse It
RY7hjt5Gi-E 13:57 Can Free Will be Saved in a Deterministic Universe?
qKVpknSKgE0 15:44 Electroweak Theory and the Origin of the Fundamental Forces
z4odQd8q3xY 16:59 How The Penrose Singularity Theorem Predicts The End of Space Time
1JCRDaa3ehk 16:31 Is The Future Predetermined By Quantum Mechanics?
EagNUvNfsUI 16:06 Do the Past and Future Exist?
nNdy-LJWNQs 15:58 Venus May Have Life!
4KCDGa98Ckc 17:43 Solving Quantum Cryptography
XNK5oahmw3I 16:17 Could Life Evolve Inside Stars?
xFKgIOX8IRE 16:55 The Truth About Beauty in Physics
hp2Ek1cA1LE 12:44 How Do We Know What Stars Are Made Of?
tJgWnbET1eE 17:49 Can Future Colliders Break the Standard Model?
Uf0q4Iq3AC8 15:18 How Stars Destroy Each Other
CJx3gLkebIA 1:23:28 Theory of Everything Controversies: Livestream
_izocEgArtQ 1:34:45 What is a Theory of Everything: Livestream
iozCwyjxhyY 2:30 Theory of Everything Livestreams with Amazing Guests
As7vWYmb5L8 15:01 The Boundary Between Black Holes & Neutron Stars
JOMrbkZqTcs 13:48 Does Antimatter Explain Why There's Something Rather Than Nothing?
1Z5fnwUmTSY 16:19 Dissolving an Event Horizon
lqGxj3Esdxc 13:27 Building Black Holes in a Lab
PC2JOQ7z5L0 18:30 What Happens After the Universe Ends?
o2ZcvPW5EcI 17:10 Can Viruses Travel Between Planets?
z91oGI5aP0A 16:42 Does Gravity Require Extra Dimensions?
4v9A9hQUcBQ 17:41 Mapping the Multiverse
M3GQM7tuq2w 18:04 How Luminiferous Aether Led to Relativity
Y6Vhh70Lw9w 17:49 How We Know The Universe is Ancient
9xIn1Ti7bz0 1:14:15 Space Time Livestream: Ask Matt Anything
ldVDM-v5uz0 17:18 Will Wormholes Allow Fast Interstellar Travel?
t8o5W425uhw 16:59 Was the Milky Way a Quasar?
vAgiHreswj0 17:25 How We Know The Earth Is Ancient
T4oYvSH6jJ8 15:15 What’s On The Other Side Of A Black Hole?
UjgGdGzDFiM 13:59 How Black Holes Spin Space Time
vSnq5Hs3_wI 19:27 How Do Quantum States Manifest In The Classical World?
QTZZUjnrbF8 17:20 Does Quantum Immortality Save Schrödinger's Cat?
GlOwJWJWPUs 15:25 How Decoherence Splits The Quantum Multiverse
CT7SiRiqK-Q 17:17 Does Consciousness Influence Quantum Mechanics?
e7yXqF32Yvw 17:01 Are Axions Dark Matter?
qT110-Q8PJI 16:56 Are there Infinite Versions of You?
GWFJteC7kIk 16:53 Hacking the Nature of Reality
et7XvBenEo8 16:17 Solving the Three Body Problem
T2pImihwFHg 14:57 How To Capture Black Holes
zw2TYNY3F8U 10:06 How To Detect a Neutrino
rFgpKlcpzNM 18:30 Do Black Holes Create New Universes?
dSvgw9ZOK3I 17:50 The Doomsday Argument
F2s7vyKucis 16:39 Is The Universe Finite?
q-6oU3jXAho 18:29 Can You Observe a Typical Universe?
YmOVoIpaPrc 17:24 Does Life Need a Multiverse to Exist?
8wa1l7M5gU8 15:59 Why We Might Be Alone in the Universe
pGnMiGrYmPE 13:01 Is Time Travel Impossible?
L2suMPiuog4 17:33 Loop Quantum Gravity Explained
fKgQYOlpxmo 14:19 Black Hole Harmonics
XglOw2_lozc 18:45 How Many Universes Are There?
CzJIWxplAbQ 18:17 Is Pluto a Planet?
FshtPsOTCP4 19:37 Could We Terraform Mars?
51usJ74pPP8 14:13 Is Earth's Magnetic Field Reversing?
n8cEZM1lN5g 12:59 How To Become an Astrophysicist + Challenge Question!
chsLw2siRW0 13:51 What Happened Before the Big Bang?
-5j98wi_M2w 5:31 Exploring Arecibo in VR 180
xJCX2NlhdTc 13:28 What Caused the Big Bang?
E8rel2-kLJA 10:12 Deciphering The Vast Scale of the Universe | STELLAR
K8gV05nS7mc 13:34 Did Time Start at the Big Bang?
_N-2Sx-FDQA 15:20 The Quantum Internet
ElulEJruhRQ 18:42 Thorium and the Future of Nuclear Energy
cqCPnXHKO5c 8:33 The Quasar from The Beginning of Time | STELLAR
FocZf26yTU0 14:33 How Black Holes Kill Galaxies
MmgMboWunkI 15:41 The Alchemy of Neutron Star Collisions
k6BL1GOXgp8 15:21 The Cosmic Dark Ages
pi7YwxxZQ5A 17:15 Why Quantum Computing Requires Quantum Cryptography
GOhOlLa4teg 12:07 The Real Science of the EHT Black Hole
5t0jaE--l0Y 14:38 No Dark Matter = Proof of Dark Matter?
klpDHn8viX8 18:24 The Holographic Universe Explained
tJevBNQsKtU 18:30 The Edge of an Infinite Universe
gEyXTQ9do-c 15:49 Could the Universe End by Tearing Apart Every Atom?
tAtVgHvt05M 18:22 Is Dark Energy Getting Stronger?
dWk9d_YCQOk 16:23 Will You Travel to Space?
rckrnYw5sOA 16:31 The Impossibility of Perpetual Motion Machines
C4CKtEQJGMY 17:11 Secrets of the Cosmic Microwave Background
PPpUxoeooZk 17:32 Sound Waves from the Beginning of Time
10AP7tio408 15:15 Perpetual Motion From Negative Mass?
72cM_E6bsOs 18:05 The Crisis in Cosmology
L2idut9tkeQ 18:27 Our Antimatter, Mirrored, Time-Reversed Universe
miGddxrvmDU 13:54 Are Dark Matter And Dark Energy The Same?
IhpGdumLRqs 18:39 Why String Theory is Wrong
UyTqgnKD3sw 17:11 Quantum Physics in a Mirror Universe
REl20rlZGTw 18:34 Did Life on Earth Come from Space?
wICOlaQOpM0 17:32 'Oumuamua Is Not Aliens
5ESFGYkkbEI 16:26 Supersymmetric Particle Found?
iTTa9YcTe1k 16:48 Why String Theory is Right
ztFovwCaOik 17:14 Are Virtual Particles A New Layer of Reality?
uhJ9lJPt09k 17:37 Will We Ever Find Alien Life?
k6TWO-ESC6A 16:38 What are the Strings in String Theory?
0GLgZvTCbaA 15:09 Computing a Universe Simulation
3HYw6vPR9qU 15:48 How to Detect Extra Dimensions
YNEBhwimJWs 16:41 Quantum Gravity and the Hardest Problem in Physics | Space Time
XxVlGAFX7vA 16:12 How Much Information is in the Universe?
Ab8JIzckx_M 12:25 The Black Hole Entropy Enigma
VmEY6T5Wc-Q 13:42 Is There Life on Mars?
Qg4vb-KH5F4 17:53 How Will the Universe End? | Space Time
7UwigY4SjKY 16:30 Quantum Theory's Most Incredible Prediction | Space Time
cOzaGEAGzzA 14:15 How Close To The Sun Can Humanity Get?
KR23aMjIHIY 14:01 Reversing Entropy with Maxwell's Demon
kfffy12uQ7g 12:20 The Misunderstood Nature of Entropy
V5kgruUjVBs 13:04 Quantum Invariance & The Origin of The Standard Model
0mXW1zPlxEE 13:49 Will A New Neutrino Change The Standard Model?
TF6GRPaeLbk 11:58 How Asteroid Mining Will Save Earth
9XkHBmE-N34 15:30 The Black Hole Information Paradox
GscfuQWZFAo 14:08 What Survives Inside A Black Hole?
HF-9Dy6iB_4 13:43 Why Quantum Information is Never Destroyed
04ERSb06dOg 13:02 Noether's Theorem and The Symmetries of Reality
Jdy09y0A4t0 10:45 How Gaia Changed Astronomy Forever
-iWGtQ03OZM 11:04 The Star at the End of Time
UVhtKAnp3G4 11:32 Black Hole Swarms | Space Time
xnwXyPU_ps0 12:47 Using Stars to See Gravitational Waves
GcfLZSL7YGw 13:41 The Physics of Life (ft. It's Okay to be Smart & PBS Eons!)
7cj6oiFDEXc 11:14 The Unruh Effect
_P1xKh_kZFU 12:02 The Andromeda-Milky Way Collision
-R9F2_D76TE 9:28 Scientists Have Detected the First Stars
qPKj0YnKANw 12:06 Hawking Radiation
wJ7d503fN-g 12:40 Should Space be Privatized? | Space Time
G7UOFZBEA_g 8:48 The Trebuchet Challenge | Space Time
iJY3y5_k0do 12:01 The Death of the Sun
PUn2izowBkw 14:19 What is Energy?
9-SxVSpSoek 9:47 Kronos: Devourer Of Worlds
wwGeCfWc100 14:15 The End of the Habitable Zone
bG-xu5H6plk 14:56 Horizon Radiation
TbWyuJYybMA 13:50 What Do Stars Sound Like?
TmD27cUuylw 1:36 Space Time VR
8HvwNOSnveE 13:09 Extinction by Gamma-Ray Burst
nYGs92-qnFY 11:36 The Origin of 'Oumuamua, Our First Interstellar Visitor | Space Time
izqaWyZsEtY 14:49 Understanding the Uncertainty Principle with Quantum Fourier Series | Space Time
tFB8MsizvBc 10:33 Citizen Science + Zero-Point Challenge Answer | Space Time
_x2nL6ukJDg 16:48 Suicide Space Robots
Rh898Yr5YZ8 10:09 Zero-Point Energy Demystified
n6jAOV7bZ3Y 11:36 The Vacuum Catastrophe
RchRrngfjQY 13:23 The Missing Mass Mystery
X5rAGfjPSWE 16:07 The Nature of Nothing | Space Time
OvgZqGxF3eo 10:41 Absolute Cold | Space Time
gtZ7OVoI2nc 13:39 When Quasars Collide STJC
YJzoelANL_Y 14:52 Are the Fundamental Constants Changing?
BIASPc89Sgk 13:40 The Future of Space Telescopes
kL81uuYW9BY 15:51 Neutron Stars Collide in New LIGO Signal?
S4aqGI1mSqo 13:27 White Holes | Space Time
OfOuBx6XW3Q 11:41 First Detection of Life
OjFKcGHfVag 14:09 Extraterrestrial Superstorms
9dqtW9MslFk 12:50 The One-Electron Universe | Space Time
xgdNBQCdhdA 12:29 Dark Flow
fG52mXN-uWI 14:25 The Secrets of Feynman Diagrams
Q8shnjlGwmg 18:06 The Real Star Wars
oQ1WZ-eJW8Y 15:21 Solving the Impossible in Quantum Field Theory
vSFRN-ymfgE 15:49 Feynman's Infinite Quantum Paths
ATcrrzJFtBY 15:22 The First Quantum Field Theory
hYkaahzFWfo 16:12 Anti-Matter and Quantum Relativity
lrS0rxX-UhA 14:00 Supervoids vs Colliding Universes!
4pSUtWBiuB4 13:28 The Fate of the First Stars
vLR_a1MAy9I 14:59 Martian Evolution
nsWhE22i4FM 11:58 The Great American Eclipse
hmVOV7xvl58 16:28 Are We Living in an Ancestor Simulation? ft. Neil deGrasse Tyson | Space Time
nhy4Z_32kQo 11:44 Are You a Boltzmann Brain?
osvOr5wbkUw 12:19 The Oh My God Particle
6ACW7GVKCxs 1:42 Here's Why I Love PBS
aHjiXTlFSSM 13:35 Telescopes on the Moon
KePNhUJ2reI 15:29 How Time Becomes Space Inside a Black Hole | Space Time
HUMGc8hEkpc 11:48 Superluminal Time Travel + Time Warp Challenge Answer
5l1KxgHH2Ek 12:43 Time Crystals!
_tmMKQ4kp_I 5:33 The Race to a Habitable Exoplanet - Time Warp Challenge | Space Time
h871oE5QkTU 12:03 The Treasures of Trappist-1 | Space Time
TQZyaMRp7_0 10:47 The Eye of Sauron Reveals a Forming Solar System!
CoQE5J346mU 13:01 Telescopes of Tomorrow
1YFrISfN7jo 16:07 The Geometry of Causality
3TZEp_n3eIc 11:54 Why Quasars are so Awesome | Space Time
-q7EvLhOK08 18:05 The Phantom Singularity | Space Time
hqoo_4wSkdg 14:43 The EM Drive: Fact or Fantasy?
q_oHv6HCMX4 11:18 How to See Black Holes + Kugelblitz Challenge Answer
Ttwl_zH_DZ8 17:57 Have They Seen Us? | Space Time | PBS Digital Studios
v3hd3AI2CAA 8:09 Escape The Kugelblitz Challenge
mht-1c4wc0Q 19:59 What Happens at the Event Horizon? | Space Time | PBS Digital Studios
RlXdsyctD50 16:32 Pilot Wave Theory and Quantum Realism | Space Time | PBS Digital Studios
u4RNGRyzt10 13:46 Strange Stars | Space Time | PBS Digital Studios
7UNLgPIiWAg 15:50 Did Dark Energy Just Disappear? | Space Time | PBS Digital Studios
ZY47bVu-0Bs 9:03 Quantum Vortices and Superconductivity + Drake Equation Challenge Answers
dzKWfw68M5U 12:53 The Many Worlds of the Quantum Multiverse
jowVq81AgGw 11:25 The First Humans on Mars
rcv_tYcRgw4 13:43 Black Holes from the Dawn of Time
BAoEnV3Zt_Q 6:22 Are We Alone? Galactic Civilization Challenge
pEJ-wXpeH6w 13:09 Life on Europa?
tafGL02EUOA 14:03 Quantum Entanglement and the Great Bohr-Einstein Debate | Space Time | PBS Digital Studios
4H55wybU3rI 12:54 Self-Replicating Robots and Galactic Domination
MuvwcsfXIIo 8:22 Is There a Fifth Fundamental Force? + Quantum Eraser Answer
jW55cViXu6s 14:31 Should We Build a Dyson Sphere? | Space Time | PBS Digital Studios
2Uzytrooz44 5:53 Quantum Eraser Lottery Challenge
8ORLN_KwAgs 14:40 How the Quantum Eraser Rewrites the Past | Space Time | PBS Digital Studios
UjmlwdUK4RE 13:27 Can We Survive the Destruction of the Earth? ft. Neal Stephenson
p-MNSLsjjdo 13:32 The Quantum Experiment that Broke Reality | Space Time | PBS Digital Studios
eJ2RNBAFLj0 8:20 The Future of Gravitational Waves
_NqbRcwWwPw 13:27 Juno to Reveal Jupiter's Violent Past
SqF_Iy0lz_M 4:21 Nuclear Physics Challenge | Space Time | PBS Digital Studios
tQSbms5MDvY 15:16 Planck's Constant and The Origin of Quantum Mechanics | Space Time | PBS Digital Studios
Dgv2WWpm7_s 13:32 The Strange Universe of Gravitational Lensing
KFOgIijPWGY 13:44 New Fundamental Particle Discovered?? + Challenge Winners!
-IfmgyXs7z8 11:07 Is Quantum Tunneling Faster than Light? | Space Time | PBS Digital Studios
ztninkgZ0ws 15:28 Is an Ice Age Coming? | Space Time | PBS Digital Studios
UwYSWAlAewc 14:48 Anti-gravity and the True Nature of Dark Energy | Space Time | PBS Digital Studios
nZQIM1C6xQw 7:02 The Cosmic Conspiracy of Dark Energy Challenge Question
fsARBnvUB2E 12:17 Will Starshot's Insterstellar Journey Succeed?
RUE_LUqcTvM 12:39 What Does Dark Energy Really Do?
-4PayaEgEZc 12:41 Why the Universe Needs Dark Energy
xZTb6sfHEX8 13:11 Will the Universe Expand Forever?
6yLGeviU8FM 13:38 We Are Star Stuff
nFYveYkSPuA 9:10 Pulsar Starquakes Make Fast Radio Bursts? + Challenge Winners! | Space Time | PBS Digital Studios
blSTTFS8Uco 13:41 How Cosmic Inflation Flattened the Universe
Aj6Kc1mvsdo 14:17 Why is the Earth Round and the Milky Way Flat? | Space Time | PBS Digital Studios
wcBjibuHxEk 5:01 Cosmic Microwave Background Challenge | Space Time | PBS Digital Studios
JDmKLXVFJzk 12:58 What’s Wrong With the Big Bang Theory? | Space Time | PBS Digital Studios
aPStj2ZuXug 12:35 Why the Big Bang Definitely Happened | Space Time | PBS Digital Studios
xGfv3Oay_pY 8:37 Planet X Discovered?? + Challenge Winners!
gw-i_VKd6Wo 9:32 LIGO's First Detection of Gravitational Waves!
o8TCUGDltqM 10:57 Will Mars or Venus Kill You First?
fHRqibyNMpw 12:32 The Origin of Matter and Time
kpuGjzdHqgI 2:17 The Photon Clock Challenge | Space Time | PBS Digital Studios
GguAN1_JouQ 9:31 When Time Breaks Down
gSKzgpt4HBU 10:48 The True Nature of Matter and Mass | Space Time | PBS Digital Studios
kixAljyfdqU 9:32 The Higgs Mechanism Explained | Space Time | PBS Digital Studios
xx4562gesw0 13:22 How to Build a Black Hole
T2m-ZXrclW0 8:05 100 Years of Relativity + Challenge Winners!
dEIjKjIgCA0 11:13 5 Ways to Stop a Killer Asteroid
NzvcVcPnSCY 3:02 Challenge: Can you save Earth from a Killer Asteroid? | Space Time | PBS Digital Studios
cJONS7sqi0o 12:11 Why Haven't We Found Alien Life?
94ed4v_T6YM 10:00 Is The Alcubierre Warp Drive Possible? | Space Time | PBS Digital Studios
1Tstyqz2g7o 11:27 Have Gravitational Waves Been Discovered?!?
EzZGPCyrpSU 13:03 5 REAL Possibilities for Interstellar Travel
msVuCEs8Ydo 12:46 The Speed of Light is NOT About Light
AwwIFcdUFrE 9:37 What Happens At The Edge Of The Universe? | Space Time | PBS Digital Studios
z3rgl-_a5C0 10:42 Does Dark Matter BREAK Physics?
VzUl3D41oIs 5:52 Watch THIS! (New Host + Challenge Winners) | Space Time | PBS Digital Studios
vNaEBbFbvcY 14:25 Do Events Inside Black Holes Happen?
MUThGpp6ze4 6:02 Challenge: Which Particle Wins This Race? | Space Time | PBS Digital Studios
pwChk4S99i4 15:21 What Physics Teachers Get Wrong About Tides! | Space Time | PBS Digital Studios
AwhKZ3fd9JA 8:53 General Relativity & Curved Spacetime Explained! | Space Time | PBS Digital Studios
U8Hx-AkFDCY 6:03 SPECIAL ANNOUNCEMENT + Flat Spacetime Geometry Comments | Space Time | PBS Digital Studios
P4rW_pPbD-U 9:19 Can You Trust Your Eyes in Spacetime?
RuPQsqZaq8A 2:21 The Leap Second Explained | Space Time | PBS Digital Studios
g1nbZ4PctOI 6:59 Curvature Demonstrated + Comments | Space Time | PBS Digital Studios
D3GVVkPb3OI 10:22 Can a Circle Be a Straight Line?
bT3hBK6kAJQ 7:37 The Calendar, Australia & White Christmas | Space Time | PBS Digital Studios
gWYEnvMM1dA 11:17 How to Signal Aliens
_UKyswjng60 1:46 What Happens to a Helium Balloon in Freefall?
NblR01hHK6U 12:33 Is Gravity An Illusion?
9Q_0vOdzw4Y 10:47 Habitable Exoplanets Debunked!
Xo232kyTsO0 10:24 The Real Meaning of E=mc²
w5TSfjvzMGs 9:38 9 NASA Technologies Shaping YOUR Future
gEagBK4Xb1w 10:39 Should the First Mars Mission Be All Women?
EHKQIC5p8MU 11:22 What's the Most Realistic Artificial Gravity in Sci-Fi?
YycAzdtUIko 8:55 Are Space and Time An Illusion?
uzgaZbbDsAA 6:22 Could NASA Start the Zombie Apocalypse?
3t0lRt329wM 1:26 How to Weigh a Fart | Space Time | PBS Digital Studios
iaN0xg2VQSo 8:09 Could You Fart Your Way to the Moon?
bcsBWPuLJsQ 9:41 Is the Moon in Majora’s Mask a Black Hole?
3tCMd1ytvWg 7:10 Cosmic Microwave Background Explained
EtExl3sm-1E 9:51 Can A Starfox Barrel Roll Work In Space?
W4UfmOHjiJg 8:08 What Will Destroy Planet Earth?
gJ5KV3rzuag 7:37 Should We Colonize Venus Instead of Mars?
QXfhGxZFcVE 6:37 How Do You Measure the Size of the Universe?
XAU9ofjcx-Y 7:52 Is It Irrational to Believe in Aliens?
McsgRggUjE4 6:13 What Planet Is Super Mario World?

# Lindsay Ellis

XP6uMQL9Od4 19:40 Nostalgic Woman - Lord of the Rings: The Fellowship of the Ring
SpsdoR1hmQc 18:06 Nostalgic Woman - Lord Of The Rings: The Two Towers
Zi_zw3xDTa8 17:03 Nostalgic Woman - Lord of the Rings: Return of the King (Part 1)
2MDNYhUdd2s 15:50 Nostalgic Woman - Lord of the Rings: Return Of The King (Part 2)
uTRUQ-RKfUs 36:49 The Hobbit: A Long-Expected Autopsy (Part 1/2)
ElPJr_tKkO4 34:43 The Hobbit: Battle of Five Studios (Part 2/2)
Qi7t_g5QObs 30:38 The Hobbit: The Desolation of Warners (Part 3/2)

`),bu=ke(`
# Slow TV

3rDjPLvOShM 9:56:06 [9:56 Hours] Train Journey to the Norwegian Arctic Circle, WINTER [1080HD] SlowTV
yCtt26c_AOg 9:56:06 [9:56 Hours] Train Journey to the Norwegian Arctic Circle, SUMMER [1080HD] SlowTV
AWRKa0hOe98 9:56:06 [9:56 Hours] Train Journey to the Norwegian Arctic Circle, FALL [1080HD] SlowTV
cNiN7gOcNI4 9:56:06 [9:56 Hours] Train Journey to the Norwegian Arctic Circle, SPRING [1080HD] SlowTV
Ux8xAuQBdkk 3:00:13 4K Realtime Fireplace - Relaxing Fire Burning Video - 3 Hours - No Loop - Ultra HD - 2160p
gB3XH5t9QCA 6:04:00 4K HDR Fireplace REALTIME - 6 Hours - Relaxing Fire Burning Video & Crackling Sounds - NO LOOP - UHD
`);var Oo=(...e)=>e.reduce(Yg),Fu=xg(Oo(ke,e=>({videos:e})))([`
    # In Gowan Ring - The Glinting Spade
    GCglHYJb2Yk 5:34 Two Wax Dolls
    W-gm4QANx0k 4:04 To Thrum a Glassy Stem
    O-gx9ILQogw 13:07 Cipher's String on the Tree in the Dream of the Queen
    scqjzDhXIxA 6:20 Bow Star
    GgIWODOVlOI 6:58 A Bee at the Dolmen's Dell
    ZXK1NYbjozk 8:04 Arrowsmith's Fire
    2LjJzCTfaPo 12:31 Milk Star
  `,`
    # In Gowan Ring - The Twin Trees
    UT_RFFLZQt0 7:43 In Gowan Ring – Rivertime Tome
    PKAq679Y4Dc 8:50 In Gowan Ring – One Silver Ring
    qAHUytdB9dg 6:29 In Gowan Ring – Stone Song III
    Fh3u050071M 6:38 In Gowan Ring – The Twin Trees
    wSHJj79wUhY 10:18 In Gowan Ring – Lady Beyond The River
    pxLzMC3LxI4 11:00 In Gowan Ring – By Moss Strand And Waterspathe
    MsnojV6lHPI 10:49 In Gowan Ring – Cupped Hands Spell
    -qfgGOMmwLo 6:25 In Gowan Ring – Our Rainbowed Paradox
    JBasAvPr08c 7:10 In Gowan Ring – Still Water Bonne
  `,`
    # In Gowan Ring - Love Charms
    ljm3wcEUeIc 4:23 In Gowan Ring – Listen To Colours
    9WnXQBigyWw 2:39 In Gowan Ring – Love Charms
    Fx7MoHH72lA 5:11 In Gowan Ring – Spindle Tree (With Dreambox)
    OqWS_5JFHn0 3:00 In Gowan Ring – A Swan Song
    FM-YvrTrPz8 4:41 In Gowan Ring – Stone Song II
    kMB5zA_klZE 2:07 In Gowan Ring – Dandelion Wine
    w_u8WsgzNnU 9:04 In Gowan Ring – Within Rings (With Dreambox)
    uAA4rUuZ-IA 6:37 In Gowan Ring – Of Water Wiverings
    LAzCskIPtuc 15:01 In Gowan Ring – Urn And Water
  `]);Re("pipe",{"given one function"(){G(Oo(n=>n+1)(1),x,2)},"given two functions"(){let e=n=>n+1;G(Oo(e,e)(1),x,3)}});function Yg(e,n){return(...a)=>n(e(...a))}function xg(e){return n=>n.map(e)}function xu(e){let[n,a]=we(Yu);return F(Gn,null,e.children(n),F("button",{onClick:()=>a(Yu)},"Channel 1"),F("button",{onClick:()=>a(Qg)},"Channel 2"),F("button",{onClick:()=>a(jg)},"Channel 3"))}var Yu=Ti(Hu.map(e=>({videos:[e]}))),Qg=Ti(bu.map(e=>({videos:[e]}))),jg=Ti(Fu);function Qu(){return F("div",{className:"App"},F("div",{className:"bezel"},F(xu,null,e=>F("div",{className:"screen"},F(zg,{channel:e},n=>F(ku,{id:"player-container"},a=>F(Mu,{broadcast:n,player:a})))))))}function zg(e){let{channel:n,children:a}=e,[t,i]=we(+new Date),[r,o]=we(!1);return Tu(()=>i(+new Date),1e3),F(Gn,null,!r&&F("button",{id:"start",onClick:()=>o(!0)},"Play"),a(r?n.getBroadcast(t):{type:"nothing"}))}function ju(){let[e,n]=we("");return je(()=>{Ku(Du()).then(Uu).then(n).catch(a=>n(a.message))},[]),/fail/i.test(e)?F("div",{className:"TestResults"},F("code",null,F("pre",null,e))):null}Ao(F(Qu,null),document.getElementById("app"));Ao(F(ju,null),document.getElementById("test-results"));
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=index.js.map
