import{r as c,y as k,a as u}from"./index.f3594bdd.js";import{C as N}from"./index.78f44568.js";import"./types.accbb20e.js";import"./services.d6947b77.js";import"./InputAdornment.f695e408.js";import"./Button.f51d265d.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var m=function(){return m=Object.assign||function(i){for(var e,o=1,s=arguments.length;o<s;o++){e=arguments[o];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n])}return i},m.apply(this,arguments)};const E="_overlay_1p2iy_1",A="_modal_1p2iy_14",h={overlay:E,modal:A},M="_enter_1t51r_1",b="_enterActive_1t51r_4",O="_exit_1t51r_9",P="_exitActive_1t51r_12",S={enter:M,enterActive:b,exit:O,exitActive:P};var j=function(t){var i=t.show,e=t.onClose,o=t.escapeClose,s=o===void 0?!0:o,n=t.clickClose,v=n===void 0?!0:n,f=t.transitionTimeoutMS,x=f===void 0?300:f,p=t.className,y=t.overlayClassName,a=t.transitionsClassName,w=t.children,C=c.exports.useRef(null),d=c.exports.useCallback(function(r){r.key==="Escape"&&(r.preventDefault(),e&&e())},[e]),g=c.exports.useCallback(function(r){r.stopPropagation(),e&&v&&e()},[v,e]);c.exports.useEffect(function(){return s&&window.addEventListener("keydown",d),function(){s&&window.removeEventListener("keydown",d)}},[s,d]);var _=document.getElementById("root");if(!_)throw new Error("Your App should contain a html with root id to use Modal component correctly");var l=void 0;return a?typeof a=="string"?l=a:l=m({},a):l=m({},S),k.exports.createPortal(u(N,{in:i,nodeRef:C,timeout:x,classNames:l,unmountOnExit:!0,children:u("div",{ref:C,className:y||h.overlay,onClick:g,children:u("div",{className:p||h.modal,onClick:function(r){return r.stopPropagation()},children:w})})}),_)};const I=j;export{I as Modal};