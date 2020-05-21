(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[function(e,t,i){"use strict";var a=i(8),r=i(3);function s(e,t){const{element:{content:i},parts:a}=e,r=document.createTreeWalker(i,133,null,!1);let s=o(a),n=a[s],l=-1,d=0;const c=[];let h=null;for(;r.nextNode();){l++;const e=r.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&d++;void 0!==n&&n.index===l;)n.index=null!==h?-1:n.index-d,s=o(a,s),n=a[s]}c.forEach(e=>e.parentNode.removeChild(e))}const n=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},o=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(Object(r.d)(t))return i}return-1};var l=i(11),d=i(10),c=i(16),h=i(7);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=(e,t)=>`${e}--${t}`;let p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),p=!1);const m=e=>t=>{const i=u(t.type,e);let a=d.a.get(i);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},d.a.set(i,a));let s=a.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(r.f);if(s=a.keyString.get(n),void 0===s){const i=t.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(i,e),s=new r.a(t,i),a.keyString.set(n,s)}return a.stringsArray.set(t.strings,s),s},b=["html","svg"],f=new Set,y=(e,t,i)=>{f.add(e);const a=i?i.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:l}=r;if(0===l)return void window.ShadyCSS.prepareTemplateStyles(a,e);const c=document.createElement("style");for(let e=0;e<l;e++){const t=r[e];t.parentNode.removeChild(t),c.textContent+=t.textContent}(e=>{b.forEach(t=>{const i=d.a.get(u(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),s(e,i)})})})(e);const h=a.content;i?function(e,t,i=null){const{element:{content:a},parts:r}=e;if(null==i)return void a.appendChild(t);const s=document.createTreeWalker(a,133,null,!1);let l=o(r),d=0,c=-1;for(;s.nextNode();){for(c++,s.currentNode===i&&(d=n(t),i.parentNode.insertBefore(t,i));-1!==l&&r[l].index===c;){if(d>0){for(;-1!==l;)r[l].index+=d,l=o(r,l);return}l=o(r,l)}}}(i,c,h.firstChild):h.insertBefore(c,h.firstChild),window.ShadyCSS.prepareTemplateStyles(a,e);const p=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==p)t.insertBefore(p.cloneNode(!0),t.firstChild);else if(i){h.insertBefore(c,h.firstChild);const e=new Set;e.add(c),s(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const g={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},v=(e,t)=>t!==e&&(t==t||e==e),_={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:v};class w extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const a=this._attributeNameForProperty(i,t);void 0!==a&&(this._attributeToPropertyMap.set(a,i),e.push(a))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=_){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,a=this.getPropertyDescriptor(e,i,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const a=this[e];this[t]=i,this._requestUpdate(e,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||_}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=v){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,a=t.converter||g,r="function"==typeof a?a:a.fromAttribute;return r?r(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,a=t.converter;return(a&&a.toAttribute||g.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=_){const a=this.constructor,r=a._attributeNameForProperty(e,i);if(void 0!==r){const e=a._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,a=i._attributeToPropertyMap.get(e);if(void 0!==a){const e=i.getPropertyOptions(a);this._updateState=16|this._updateState,this[a]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const a=this.constructor,r=a.getPropertyOptions(e);a._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}w.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const S="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,C=Symbol();class T{constructor(e,t){if(t!==C)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(S?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const k=e=>new T(String(e),C),O=(e,...t)=>{const i=t.reduce((t,i,a)=>t+(e=>{if(e instanceof T)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[a+1],e[0]);return new T(i,C)};i.d(t,"a",(function(){return E})),i.d(t,"c",(function(){return h.d})),i.d(t,"d",(function(){return k})),i.d(t,"b",(function(){return O})),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const x={};class E extends w{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),a=[];i.forEach(e=>a.unshift(e)),this._styles=a}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?S?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==x&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return x}}E.finalized=!0,E.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,s=l.a.has(t),n=p&&11===t.nodeType&&!!t.host,o=n&&!f.has(r),d=o?document.createDocumentFragment():t;if(Object(l.b)(e,d,Object.assign({templateFactory:m(r)},i)),o){const e=l.a.get(d);l.a.delete(d);const i=e.value instanceof c.a?e.value.template:void 0;y(r,d,i),Object(a.b)(t,t.firstChild),t.appendChild(d),l.a.set(t,e)}!s&&n&&window.ShadyCSS.styleElement(t.host)}},function(e,t,i){"use strict";const a={primaryCore:"#004481",primaryCoreDarkened:"#072146",primaryCoreLightened:"#ffffff",primaryCoreDark:"#043263",primaryCoreLight:"#1464A5",primaryMedium:"#1973B8",primaryMediumLight:"#49A5E6",primarySubdued:"#5BBEFF",primarySubduedLight:"#D4EDFC",primaryVariant:"#2DCCCD",primaryVariantDark:"#028484",primaryVariantMedium:"#02A5A5",primaryVariantLight:"#5AC4C4",primaryVariantLightened:"#EAF9FA",secondary600:"#121212",secondary500:"#666666",secondary400:"#BDBDBD",secondary300:"#D3D3D3",secondary200:"#E9E9E9",secondary100:"#F4F4F4",tertiaryType1:"#DA3851",tertiaryType1Dark:"#B92A45",tertiaryType1Medium:"#C0475E",tertiaryType1Light:"#E77D8E",tertiaryType1Lightened:"#F4C3CA",tertiaryType2:"#F7893B",tertiaryType2Dark:"#C65302",tertiaryType2Medium:"#D8732C",tertiaryType2Light:"#FAB27F",tertiaryType2Lightened:"#FDE7D8",tertiaryType3:"#F8CD51",tertiaryType3Dark:"#9C6C01",tertiaryType3Medium:"#C49735",tertiaryType3Light:"#FADE8E",tertiaryType3Lightened:"#FEF5DC",tertiaryType4:"#D8BE75",tertiaryType4Dark:"#8E7022",tertiaryType4Medium:"#B79E5E",tertiaryType4Light:"#E6D5A5",tertiaryType4Lightened:"#F3EBD5",tertiaryType5:"#F35E61",tertiaryType5Dark:"#CB353A",tertiaryType5Medium:"#D44B50",tertiaryType5Light:"#F59799",tertiaryType5Lightened:"#FCDFDF",tertiaryType6:"#48AE64",tertiaryType6Dark:"#277A3E",tertiaryType6Medium:"#388D4F",tertiaryType6Light:"#88CA9A",tertiaryType6Lightened:"#D9EFE0",tertiaryType7:"#F78BE8",tertiaryType7Dark:"#AD53A1",tertiaryType7Medium:"#C569B9",tertiaryType7Light:"#FAB3F0",tertiaryType7Lightened:"#FDDCF8",tertiaryType8:"#8F7AE5",tertiaryType8Dark:"#6754B8",tertiaryType8Medium:"#7C6AC7",tertiaryType8Light:"#B6A8EE",tertiaryType8Lightened:"#DDD7F7"},r={light:`${a.primaryCoreLightened}`,light100:`${a.secondary100}`,dark:`${a.primaryCore}`,dark100:`${a.primaryMedium}`,dark200:`${a.primaryCore}`,dark300:`${a.primaryCoreDark}`,dark400:`${a.primaryCoreDarkened}`},s={type3XLarge:"1.5rem",type2XLarge:"1.375rem",typeXLarge:"1.25rem",typeLarge:"1.125rem",typeMedium:"1rem",typeSmall:"0.9375rem",typeXSmall:"0.875rem",type2XSmall:"0.8125rem",type3XSmall:"0.75rem",type4XSmall:"0.625rem",typeQuote:"1.125rem",typeLink:"0.9375rem"},n={type3XLarge:"2rem",type2XLarge:"2rem",typeXLarge:"1.5rem",typeLarge:"1.5rem",typeMedium:"1.5rem",typeSmall:"1.5rem",typeXSmall:"1.5rem",type2XSmall:"1.5rem",type3XSmall:"1rem",type4XSmall:"1rem",typeQuote:"1.5rem",typeLink:"1rem"},o={spacer:"8"},l={small:"1px",medium:"2px",large:"4px"},d={fontFamily:'"Benton Sans"',light:{fontWeight:300,fontStyle:"normal"},book:{fontWeight:400,fontStyle:"normal"},bookItalic:{fontWeight:400,fontStyle:"italic"},medium:{fontWeight:500,fontStyle:"normal"},mediumItalic:{fontWeight:500,fontStyle:"italic"},regular:{fontWeight:600,fontStyle:"normal"},bold:{fontWeight:700,fontStyle:"normal"}},c={fontFamily:'"Tiempos"',regular:{fontWeight:"normal",fontStyle:"normal"},regularItalic:{fontWeight:"normal",fontStyle:"italic"}},h={type1:"0 1px 3px 0 rgba(18, 18, 18, .2)",type2:"0 1px 3px 0 rgba(18, 18, 18, .3)"};i(0);const u={success:a.tertiaryType6Dark,successDark:a.tertiaryType6,warning:a.tertiaryType2Dark,warningDark:a.tertiaryType2,error:a.tertiaryType1Dark,errorDark:a.tertiaryType1,pending:a.primaryCore,off:a.secondary500,finance:a.primaryVariantDark};i.d(t,"d",(function(){return a})),i.d(t,"a",(function(){return r})),i.d(t,"j",(function(){return s})),i.d(t,"h",(function(){return n})),i.d(t,"g",(function(){return o})),i.d(t,"b",(function(){return l})),i.d(t,"e",(function(){return d})),i.d(t,"f",(function(){return c})),i.d(t,"c",(function(){return h})),i.d(t,"i",(function(){return u}))},function(e,t,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const a=/(^\/)|(^#)|(^[\w-\d]*:)/;let r,s;function n(e,t){let i=t;if(e&&a.test(e))return e;if(void 0===r){r=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",r="http://a/c%20d"===e.href}catch(e){}}return i||(i=document.baseURI||window.location.href),r?new URL(e,i).href:(s||(s=document.implementation.createHTMLDocument("temp"),s.base=s.createElement("base"),s.head.appendChild(s.base),s.anchor=s.createElement("a"),s.body.appendChild(s.anchor)),s.base.href=i,s.anchor.href=e,s.anchor.href||e)}function o(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyDOM,Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;o(document.baseURI||window.location.href);window.Polymer&&window.Polymer.sanitizeDOMValue;let l=!1;const d={},c={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function h(e,t){d[e]=t,c[e.toLowerCase()]=t}function u(e){return d[e]||c[e.toLowerCase()]}class p extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){const i=u(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=this.ownerDocument,t=n(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=o(t)}return this.__assetpath}register(e){const t=e||this.id;if(t){if(l&&void 0!==u(t))throw h(t,null),new Error(`strictTemplatePolicy: bbva-core-dom-module ${t} re-registered`);this.id=t,h(t,this)}}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let m;p.prototype.modules=d,customElements.get("bbva-core-dom-module")||customElements.define("bbva-core-dom-module",p),window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface?m=window.ShadyCSS.CustomStyleInterface:(m={},console.warn("CustomStyleInterface not detected. Be sure to add ShadyCSS CustomStyleInterface to your app!"));class b extends HTMLElement{constructor(){super(),this._style=null,m.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");return e?(this._style=e,this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style):null}}customElements.get("bbva-core-custom-style")||customElements.define("bbva-core-custom-style",b),window.ShadyCSS&&window.ShadyCSS.ScopingShim||console.warn("ScopingShim not detected. Be sure to add ShadyCSS ScopingShim to your app!");const f=e=>{const t=document.createElement("template");t.setAttribute("style","display: none;"),t.innerHTML=`\n  <bbva-core-custom-style>\n    <style>\n      ${e.cssText}\n    </style>\n  </bbva-core-custom-style>\n  `,document.head.appendChild(t.content)};var y=i(0);const g=e=>{const t=p.import(e);return t&&t[e]||y.b``};i.d(t,"b",(function(){return f})),i.d(t,"a",(function(){return g}))},function(e,t,i){"use strict";i.d(t,"f",(function(){return a})),i.d(t,"g",(function(){return r})),i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return o})),i.d(t,"d",(function(){return d})),i.d(t,"c",(function(){return c})),i.d(t,"e",(function(){return h}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${a}--\x3e`,s=new RegExp(`${a}|${r}`),n="$lit$";class o{constructor(e,t){this.parts=[],this.element=t;const i=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let d=0,u=-1,p=0;const{strings:m,values:{length:b}}=e;for(;p<b;){const e=o.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let a=0;for(let e=0;e<i;e++)l(t[e].name,n)&&a++;for(;a-- >0;){const t=m[p],i=h.exec(t)[2],a=i.toLowerCase()+n,r=e.getAttribute(a);e.removeAttribute(a);const o=r.split(s);this.parts.push({type:"attribute",index:u,name:i,strings:o}),p+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(a)>=0){const a=e.parentNode,r=t.split(s),o=r.length-1;for(let t=0;t<o;t++){let i,s=r[t];if(""===s)i=c();else{const e=h.exec(s);null!==e&&l(e[2],n)&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-n.length)+e[3]),i=document.createTextNode(s)}a.insertBefore(i,e),this.parts.push({type:"node",index:++u})}""===r[o]?(a.insertBefore(c(),e),i.push(e)):e.data=r[o],p+=o}}else if(8===e.nodeType)if(e.data===a){const t=e.parentNode;null!==e.previousSibling&&u!==d||(u++,t.insertBefore(c(),e)),d=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(i.push(e),u--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(a,t+1));)this.parts.push({type:"node",index:-1}),p++}}else o.currentNode=r.pop()}for(const e of i)e.parentNode.removeChild(e)}}const l=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},d=e=>-1!==e.index,c=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var a=i(7);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const r=new WeakMap,s=Object(a.c)(e=>t=>{const i=r.get(t);if(void 0===e&&t instanceof a.a){if(void 0!==i||!r.has(t)){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else e!==i&&t.setValue(e);r.set(t,e)})},function(e,t,i){"use strict";i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return u})),i.d(t,"e",(function(){return p})),i.d(t,"c",(function(){return m})),i.d(t,"f",(function(){return b})),i.d(t,"g",(function(){return f})),i.d(t,"d",(function(){return g}));var a=i(12),r=i(8),s=i(6),n=i(16),o=i(15),l=i(3);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const d=e=>null===e||!("object"==typeof e||"function"==typeof e),c=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class h{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new u(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let a=0;a<t;a++){i+=e[a];const t=this.parts[a];if(void 0!==t){const e=t.value;if(d(e)||!c(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class u{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===s.a||d(e)&&e===this.value||(this.value=e,Object(a.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(a.b)(this.value);){const e=this.value;this.value=s.a,e(this)}this.value!==s.a&&this.committer.commit()}}class p{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(l.c)()),this.endNode=e.appendChild(Object(l.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Object(l.c)()),e.__insert(this.endNode=Object(l.c)())}insertAfterPart(e){e.__insert(this.startNode=Object(l.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;Object(a.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=s.a,e(this)}const e=this.__pendingValue;e!==s.a&&(d(e)?e!==this.value&&this.__commitText(e):e instanceof o.b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):c(e)?this.__commitIterable(e):e===s.b?(this.value=s.b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof n.a&&this.value.template===t)this.value.update(e.values);else{const i=new n.a(t,e.processor,this.options),a=i._clone();i.update(e.values),this.__commitNode(a),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,a=0;for(const r of e)i=t[a],void 0===i&&(i=new p(this.options),t.push(i),0===a?i.appendIntoPart(this):i.insertAfterPart(t[a-1])),i.setValue(r),i.commit(),a++;a<t.length&&(t.length=a,this.clear(i&&i.endNode))}clear(e=this.startNode){Object(r.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class m{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;Object(a.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=s.a,e(this)}if(this.__pendingValue===s.a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=s.a}}class b extends h{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new f(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class f extends u{}let y=!1;(()=>{try{const e={get capture(){return y=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class g{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;Object(a.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=s.a,e(this)}if(this.__pendingValue===s.a)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=v(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=s.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const v=e=>e&&(y?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return r}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a={},r={}},function(e,t,i){"use strict";var a=i(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const r=new class{handleAttributeExpressions(e,t,i,r){const s=t[0];if("."===s){return new a.f(e,t.slice(1),i).parts}return"@"===s?[new a.d(e,t.slice(1),r.eventContext)]:"?"===s?[new a.c(e,t.slice(1),i)]:new a.a(e,t,i).parts}handleTextExpression(e){return new a.e(e)}};var s=i(15),n=i(12);i(8),i(6),i(11),i(10),i(16),i(3);i.d(t,"d",(function(){return o})),i.d(t,"c",(function(){return n.a})),i.d(t,"a",(function(){return a.b})),i.d(t,"b",(function(){return a.g})),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const o=(e,...t)=>new s.b(e,t,"html",r)},function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"b",(function(){return s}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,t,i=null,a=null)=>{for(;t!==i;){const i=t.nextSibling;e.insertBefore(t,a),t=i}},s=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}}},function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i(14);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let a=0;function r(){}r.prototype.__mixinApplications,r.prototype.__mixinSet;const s=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=a++;return function(a){let r=a.__mixinSet;if(r&&r[i])return a;let s=t,n=s.get(a);n||(n=e(a),s.set(a,n));let o=Object.create(n.__mixinSet||r||null);return o[i]=!0,n.__mixinSet=o,n}}},function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return s}));var a=i(3);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function r(e){let t=s.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},s.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(a.f);return i=t.keyString.get(r),void 0===i&&(i=new a.a(e,e.getTemplateElement()),t.keyString.set(r,i)),t.stringsArray.set(e.strings,i),i}const s=new Map},function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return o}));var a=i(8),r=i(5),s=i(10);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,o=(e,t,i)=>{let o=n.get(t);void 0===o&&(Object(a.b)(t,t.firstChild),n.set(t,o=new r.e(Object.assign({templateFactory:s.b},i))),o.appendInto(t)),o.setValue(e),o.commit()}},function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=new WeakMap,r=e=>(...t)=>{const i=e(...t);return a.set(i,!0),i},s=e=>"function"==typeof e&&a.has(e)},function(e,t,i){"use strict";i(14);var a=i(17);i(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,this._callback()})}cancel(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof r?e.cancel():e=new r,e.setConfig(t,i),e}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.ShadyDOM,Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;(s=document.baseURI||window.location.href).substring(0,s.lastIndexOf("/")+1);var s;window.Polymer&&window.Polymer.sanitizeDOMValue;let n=!1;let o=!0;i.d(t,"b",(function(){return P})),i.d(t,"c",(function(){return M})),i.d(t,"a",(function(){return z}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let l="string"==typeof document.head.style.touchAction,d="__polymerGesturesHandled",c="__polymerGesturesTouchAction",h=["mousedown","mousemove","mouseup","click"],u=[0,1,4,2],p=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function m(e){return h.indexOf(e)>-1}let b=!1;function f(e){if(!m(e)&&"touchend"!==e)return l&&b&&n?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){b=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let y=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const g=[],v={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},_={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function w(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let a=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<a.length;e++)t.push(a[e])}}return t}let S=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[d]={skip:!0},"click"===e.type)){let t=!1,a=e.composedPath&&e.composedPath();if(a)for(let e=0;e<a.length;e++){if(a[e].nodeType===Node.ELEMENT_NODE)if("label"===a[e].localName)g.push(a[e]);else if(i=a[e],v[i.localName]){let i=w(a[e]);for(let e=0;e<i.length;e++)t=t||g.indexOf(i[e])>-1}if(a[e]===k.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function C(e){let t=y?["click"]:h;for(let i,a=0;a<t.length;a++)i=t[a],e?(g.length=0,document.addEventListener(i,S,!0)):document.removeEventListener(i,S,!0)}function T(e){let t=e.type;if(!m(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!p&&(t=u[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let k={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function O(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function x(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}o&&document.addEventListener("touchend",(function(e){if(!o)return;k.mouse.mouseIgnoreJob||C(!0),k.mouse.target=e.composedPath()[0],k.mouse.mouseIgnoreJob=r.debounce(k.mouse.mouseIgnoreJob,a.b.after(2500),(function(){C(),k.mouse.target=null,k.mouse.mouseIgnoreJob=null}))}),!!b&&{passive:!0});const E={},$=[];function L(e){if(e.composedPath){const t=e.composedPath();return t.length>0?t[0]:e.target}return e.target}function j(e){let t,i=e.type,a=e.currentTarget.__polymerGestures;if(!a)return;let r=a[i];if(r){if(!e[d]&&(e[d]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(k.touch.id=t.identifier),k.touch.id!==t.identifier)return;l||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)k.touch.x=t.clientX,k.touch.y=t.clientY,k.touch.scrollDecided=!1;else if("touchmove"===i){if(k.touch.scrollDecided)return;k.touch.scrollDecided=!0;let i=function(e){let t="auto",i=e.composedPath&&e.composedPath();if(i)for(let e,a=0;a<i.length;a++)if(e=i[a],e[c]){t=e[c];break}return t}(e),a=!1,r=Math.abs(k.touch.x-t.clientX),s=Math.abs(k.touch.y-t.clientY);e.cancelable&&("none"===i?a=!0:"pan-x"===i?a=s>r:"pan-y"===i&&(a=r>s)),a?e.preventDefault():N("track")}}(e)}if(t=e[d],!t.skip){for(let i,a=0;a<$.length;a++)i=$[a],r[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let a,s=0;s<$.length;s++)a=$[s],r[a.name]&&!t[a.name]&&(t[a.name]=!0,a[i](e))}}}function P(e,t,i){return!!E[t]&&(function(e,t,i){let a=E[t],r=a.deps,s=a.name,n=e.__polymerGestures;n||(e.__polymerGestures=n={});for(let t,i,a=0;a<r.length;a++)t=r[a],y&&m(t)&&"click"!==t||(i=n[t],i||(n[t]=i={_count:0}),0===i._count&&e.addEventListener(t,j,f(t)),i[s]=(i[s]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),a.touchAction&&M(e,a.touchAction)}(e,t,i),!0)}function A(e){$.push(e);for(let t=0;t<e.emits.length;t++)E[e.emits[t]]=e}function M(e,t){l&&e instanceof HTMLElement&&a.a.run(()=>{e.style.touchAction=t}),e[c]=t}function B(e,t,i){let a=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(a.detail=i,e.dispatchEvent(a),a.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function N(e){let t=function(e){for(let t,i=0;i<$.length;i++){t=$[i];for(let i,a=0;a<t.emits.length;a++)if(i=t.emits[a],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function F(e,t,i,a){t&&B(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:a,prevent:function(e){return N(e)}})}function D(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let a=Math.abs(e.x-t),r=Math.abs(e.y-i);return a>=5||r>=5}function I(e,t,i){if(!t)return;let a,r=e.moves[e.moves.length-2],s=e.moves[e.moves.length-1],n=s.x-e.x,o=s.y-e.y,l=0;r&&(a=s.x-r.x,l=s.y-r.y),B(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:n,dy:o,ddx:a,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),a=i;for(;a&&a.shadowRoot&&!window.ShadyDOM;){let r=a;if(a=a.shadowRoot.elementFromPoint(e,t),r===a)break;a&&(i=a)}return i}(i.clientX,i.clientY)}})}function R(e,t,i){let a=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),s=L(i||t);!s||_[s.localName]&&s.hasAttribute("disabled")||(isNaN(a)||isNaN(r)||a<=25&&r<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=L(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),a=e.pageX,r=e.pageY;return!(a>=i.left&&a<=i.right&&r>=i.top&&r<=i.bottom)}return!1}(t))&&(e.prevent||B(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}A({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){x(this.info)},mousedown:function(e){if(!T(e))return;let t=L(e),i=this;O(this.info,(function(e){T(e)||(F("up",t,e),x(i.info))}),(function(e){T(e)&&F("up",t,e),x(i.info)})),F("down",t,e)},touchstart:function(e){F("down",L(e),e.changedTouches[0],e)},touchend:function(e){F("up",L(e),e.changedTouches[0],e)}}),A({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,x(this.info)},mousedown:function(e){if(!T(e))return;let t=L(e),i=this,a=function(e){let a=e.clientX,r=e.clientY;D(i.info,a,r)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&N("tap"),i.info.addMove({x:a,y:r}),T(e)||(i.info.state="end",x(i.info)),t&&I(i.info,t,e),i.info.started=!0)};O(this.info,a,(function(e){i.info.started&&a(e),x(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=L(e),i=e.changedTouches[0],a=i.clientX,r=i.clientY;D(this.info,a,r)&&("start"===this.info.state&&N("tap"),this.info.addMove({x:a,y:r}),I(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=L(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),I(this.info,t,i))}}),A({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){T(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){T(e)&&R(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){R(this.info,e.changedTouches[0],e)}});const z=P},function(e,t,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e}},function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return o}));var a=i(8),r=i(3);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=` ${r.f} `;class n{constructor(e,t,i,a){this.strings=e,this.values=t,this.type=i,this.processor=a}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let a=0;a<e;a++){const e=this.strings[a],n=e.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===e.indexOf("--\x3e",n+1);const o=r.e.exec(e);t+=null===o?e+(i?s:r.g):e.substr(0,o.index)+o[1]+o[2]+r.b+o[3]+r.f}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class o extends n{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,i=t.firstChild;return t.removeChild(i),Object(a.c)(t,i.firstChild),e}}},function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var a=i(8),r=i(3);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class s{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=a.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let n,o=0,l=0,d=s.nextNode();for(;o<i.length;)if(n=i[o],Object(r.d)(n)){for(;l<n.index;)l++,"TEMPLATE"===d.nodeName&&(t.push(d),s.currentNode=d.content),null===(d=s.nextNode())&&(s.currentNode=t.pop(),d=s.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(d.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return a.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,i){"use strict";i.d(t,"b",(function(){return l})),i.d(t,"a",(function(){return d}));i(14);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let a=0,r=0,s=[],n=0,o=document.createTextNode("");new window.MutationObserver((function(){const e=s.length;for(let t=0;t<e;t++){let e=s[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}s.splice(0,e),r+=e})).observe(o,{characterData:!0});const l={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},d={run:e=>(o.textContent=n++,s.push(e),a++),cancel(e){const t=e-r;if(t>=0){if(!s[t])throw new Error("invalid async handle: "+e);s[t]=null}}}},function(e,t,i){"use strict";var a=i(0);class r extends a.a{static get DEBUG(){return!1}static _log(e){return r.DEBUG&&console.log(e)}static callCellsBridge(e){const[t,...i]=e;if(window.cells){if(!window.cells[t])throw new Error(`WARNING: Invalid cells bridge command execution: ${t}.`);const e=window.cells[t](...i);return this._log(`Executing bridge command: ${t}.`),e}window.cellsBridgeQueue=window.cellsBridgeQueue||[],window.cellsBridgeQueue.push({command:t,parameters:i}),this._log(`Pushing bridge command execution to queue: ${t}.`)}static get is(){return"cells-element"}constructor(){super()}subscribe(e,t){this.__callCellsBridge("registerInConnection",e,this,t)}unsubscribe(e){this.__callCellsBridge("unsubscribe",e,this)}publish(e,t,i={}){this.__callCellsBridge("publish",e,t,i)}publishOn(e,t,i){this.__callCellsBridge("registerOutConnection",e,t,i)}navigate(e,t){this.__callCellsBridge("navigate",e,t)}trackEvent(e){this.__callCellsBridge("trackEvent",e)}navigateToNative(e,t){this.__callCellsBridge("navigateToNative",e,t)}backStep(){this.__callCellsBridge("backStep")}log(e){this.__callCellsBridge("log",e)}ingest(e){this.__callCellsBridge("ingest",e)}createSpan(e){return this.__callCellsBridge("createSpan",e)}createUUID(){return this.__callCellsBridge("createUUID")}__callCellsBridge(...e){return r.callCellsBridge(e)}}customElements.define(r.is,r),i.d(t,"a",(function(){return s}));class s extends r{static get BRIDGE_PAGE_PRIVATE_CHANNEL_PREFIX(){return"__bridge_page_"}static getPagePrivateChannel(e){return`${s.BRIDGE_PAGE_PRIVATE_CHANNEL_PREFIX}${e.toLowerCase().replace("-page","")}`}static get is(){return"cells-page"}static get properties(){return{params:{type:Object}}}constructor(){super(),this.params={}}connectedCallback(){super.connectedCallback(),this.__handleConnections()}__handleConnections(){this.__hasPageHandlers()&&this.__handlePagePrivateChannel()}__hasPageHandlers(){return!!this.onPageEnter||!!this.onPageLeave}__handlePagePrivateChannel(){const e=s.getPagePrivateChannel(this.tagName),t=this.__wrapPrivateChannelCallback();this.subscribe(e,t)}__wrapPrivateChannelCallback(){return({value:e})=>{const t=()=>e?this.onPageEnter&&this.onPageEnter():this.onPageLeave&&this.onPageLeave();t&&t()}}}customElements.define(s.is,s)},function(e,t,i){"use strict";var a=i(0),r=i(2),s=i(4),n=i(9);
/**
@license
Copyright © 2016-2018 Component Kitchen, Inc. and contributors to the Elix project

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
let o=!1;const l=Symbol("focusVisibleChangedListener");const d=Object(n.a)(e=>class extends e{constructor(){super(),this.addEventListener("focusout",()=>{Promise.resolve().then(()=>{this.focusVisible=!1,document.removeEventListener("focus-visible-changed",this[l]),this[l]=null})}),this.addEventListener("focusin",()=>{Promise.resolve().then(()=>{this.focusVisible!==o&&(this.focusVisible=o),this[l]||(this[l]=()=>{this.focusVisible=o},document.addEventListener("focus-visible-changed",this[l]))})})}get focusVisible(){return this._focusVisible}set focusVisible(e){this._focusVisible=e,e?this.setAttribute("focus-visible",""):this.removeAttribute("focus-visible")}});function c(e){if(o!==e){o=e;const t=new CustomEvent("focus-visible-changed",{detail:{focusVisible:o}});document.dispatchEvent(t)}}window.addEventListener("keydown",()=>{c(!0)},{capture:!0}),window.addEventListener("mousedown",()=>{c(!1)},{capture:!0});var h=i(13),u=a.b`:host {
  font: inherit;
  cursor: pointer;
  text-align: center;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--cells-button-color, rgba(0, 0, 0, 0.847));
  border-width: 1px;
  border-style: solid;
  border-color: var(--cells-button-border-color, #d8d8d8);
  border-radius: 4px;
  padding: 0.25em .5em;
  box-sizing: border-box; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit; }

:host([disabled]) {
  cursor: default;
  pointer-events: none;
  color: var(--cells-button-disabled-color, rgba(0, 0, 0, 0.247)); }
`;class p extends(d(a.a)){static get is(){return"cells-button"}static get properties(){return{type:{type:String},disabled:{type:Boolean,reflect:!0},value:{type:String,reflect:!0},name:{type:String,reflect:!0},form:{type:String},formAction:{type:String,reflect:!0},formEnctype:{type:String,reflect:!0},formMethod:{type:String,reflect:!0},formNoValidate:{type:Boolean,reflect:!0},formTarget:{type:String,reflect:!0},_formElementId:{type:String}}}constructor(){super(),this.type="submit",this._active=!1,this._formElementId=this.uniqueID()}uniqueID(e=10){return`_${Math.random().toString(36).substr(2,e)}`}connectedCallback(){super.connectedCallback(),this._setInitialAttribute("role","button"),this.disabled?this._disableButton():(this._setInitialAttribute("tabindex","0"),this.setAttribute("aria-disabled","false")),this.onClick=this.onClick.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.addEventListener("click",this.onClick),this.addEventListener("keyup",this.onKeyUp),this.addEventListener("keydown",this.onKeyDown),Object(h.a)(this,"down",()=>!this.disabled&&(this.active=!0)),Object(h.a)(this,"up",()=>this.active=!1),this.addEventListener("blur",()=>this.active=!1),this.hasAttribute("autofocus")&&this.focus()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onClick),this.removeEventListener("keydown",this.onKeyDown),this.active&&(this.active=!1)}firstUpdated(e){super.firstUpdated(e),this._formElement=this.shadowRoot.querySelector(`#${this._formElementId}`),this._formElement&&this.appendChild(this._formElement)}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this._disableButton():this._enableButton())}get active(){return this._active}set active(e){e!==this._active&&(this._active=e,e?this.setAttribute("active",""):this.removeAttribute("active"))}static get styles(){return[u,Object(r.a)("cells-button-shared-styles")]}render(){return a.c`
      <slot></slot>
      ${this._button}
    `}get _button(){return a.c`
      <button
        style="display: none;"
        id="${this._formElementId}"
        aria-hidden="true"
        tabindex="-1"
        type="${this.type}"
        ?disabled="${this.disabled}"
        name="${Object(s.a)(this.name)}"
        value="${Object(s.a)(this.value)}"
        form="${Object(s.a)(this.form)}"
        formaction="${Object(s.a)(this.formAction)}"
        formenctype="${Object(s.a)(this.formEnctype)}"
        formmethod="${Object(s.a)(this.formMethod)}"
        ?formNoValidate="${Object(s.a)(this.formNoValidate)}"
        formtarget="${Object(s.a)(this.formTarget)}">
      </button>
    `}_setInitialAttribute(e,t){this.hasAttribute(e)||this.setAttribute(e,t)}_disableButton(){this.setAttribute("aria-disabled","true"),this.setAttribute("tabindex","-1")}_enableButton(){this.setAttribute("aria-disabled","false"),this.setAttribute("tabindex","0")}onClick(e){if(this.disabled)return e.preventDefault(),e.stopPropagation(),void e.stopImmediatePropagation();!e.defaultPrevented&&this._formElement&&e.target!==this._formElement&&this._formElement.dispatchEvent(new MouseEvent("click",{relatedTarget:this,composed:!0}))}onKeyUp(e){13!==e.keyCode&&32!==e.keyCode||!this.active||(this.active=!1,this.dispatchEvent(new MouseEvent("click",{bubbles:!0,composed:!0,cancelable:!0})),e.preventDefault(),e.stopPropagation())}onKeyDown(e){13!==e.keyCode&&32!==e.keyCode||(this.active=!0,e.preventDefault(),e.stopPropagation())}}customElements.define(p.is,p);var m=i(1),b=a.b`:host {
  position: relative;
  width: auto;
  max-width: 100%;
  min-width: var(--bbva-button-default-min-width, 8.75rem);
  min-height: 3rem;
  padding: 0 calc(((4 * var(--gridSpacerVariant, var(--gridSpacer, ${Object(a.d)(m.g.spacer)}))) / 15) * 1em);
  font-size: var(--bbva-button-default-font-size, var(--typographyTypeSmall, ${Object(a.d)(m.j.typeSmall)}));
  line-height: var(--bbva-button-default-line-height, var(--lineHeightTypeSmall, ${Object(a.d)(m.h.typeSmall)}));
  font-weight: var(--bbva-button-default-font-weight, var(--fontFacePrimaryMediumFontWeight, ${Object(a.d)(m.e.medium.fontWeight)}));
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid var(--_border-color);
  border-radius: var(--bbva-button-default-border-radius, var(--borderRadiusSmall, ${Object(a.d)(m.b.small)}));
  background-color: var(--_bg-color);
  color: var(--_color);
  opacity: var(--_opacity);
  transition: background-color var(--fast-transition, 0.2s), color var(--fast-transition, 0.2s); }

:host([hidden]),
[hidden] {
  display: none !important; }

*,
*:before,
*:after {
  box-sizing: inherit; }

:host(:focus) {
  outline: none; }

:host(.full-width) {
  flex-grow: 1;
  width: 100%;
  min-width: 0; }

:host([disabled]) {
  color: var(--_color); }

:host,
:host(.primary),
:host([variant='primary']) {
  --_color: var(--bbva-button-default-color,var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)}));
  --_bg-color: var(--bbva-button-default-bg-color,var(--colorsPrimaryMedium, ${Object(a.d)(m.d.primaryMedium)}));
  --_border-color: var(--bbva-button-default-border-color, transparent);
  --_opacity: var(--bbva-button-default-opacity, 1); }

:host([active]),
:host(.primary[active]),
:host([variant='primary'][active]) {
  --_color: var(--bbva-button-default-color-active,var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)}));
  --_bg-color: var(--bbva-button-default-bg-color-active,var(--colorsPrimaryCoreLight, ${Object(a.d)(m.d.primaryCoreLight)}));
  --_border-color: var(--bbva-button-default-border-color-active, transparent);
  --_opacity: var(--bbva-button-default-opacity-active, 1); }

:host([disabled]),
:host(.primary[disabled]),
:host([variant='primary'][disabled]) {
  --_color: var(--bbva-button-default-color-disabled,var(--colorsSecondary400, ${Object(a.d)(m.d.secondary400)}));
  --_bg-color: var(--bbva-button-default-bg-color-disabled,var(--colorsSecondary200, ${Object(a.d)(m.d.secondary200)}));
  --_border-color: var(--bbva-button-default-border-color-disabled, transparent);
  --_opacity: var(--bbva-button-default-opacity-disabled, 1); }

:host(.secondary),
:host([variant='secondary']) {
  --_color: var(--bbva-button-default-secondary-color,var(--colorsPrimaryMedium, ${Object(a.d)(m.d.primaryMedium)}));
  --_bg-color: var(--bbva-button-default-secondary-bg-color, transparent);
  --_border-color: var(--bbva-button-default-secondary-border-color,var(--colorsSecondary300, ${Object(a.d)(m.d.secondary300)}));
  --_opacity: var(--bbva-button-default-secondary-opacity, 1); }

:host(.secondary[active]),
:host([variant='secondary'][active]) {
  --_color: var(--bbva-button-default-secondary-color-active,var(--colorsPrimaryMedium, ${Object(a.d)(m.d.primaryMedium)}));
  --_bg-color: var(--bbva-button-default-secondary-bg-color-active,var(--colorsSecondary100, ${Object(a.d)(m.d.secondary100)}));
  --_border-color: var(--bbva-button-default-secondary-border-color-active, transparent);
  --_opacity: var(--bbva-button-default-secondary-opacity-active, 1); }

:host(.secondary[disabled]),
:host([variant='secondary'][disabled]) {
  --_color: var(--bbva-button-default-secondary-color-disabled,var(--colorsSecondary400, ${Object(a.d)(m.d.secondary400)}));
  --_bg-color: var(--bbva-button-default-secondary-bg-color-disabled,var(--colorsSecondary200, ${Object(a.d)(m.d.secondary200)}));
  --_border-color: var(--bbva-button-default-secondary-border-color-disabled, transparent);
  --_opacity: var(--bbva-button-default-secondary-opacity-disabled, 0.4); }

:host(.positive),
:host([variant='positive']) {
  --_color: var(--bbva-button-default-positive-color,var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)}));
  --_bg-color: var(--bbva-button-default-positive-bg-color,var(--colorsPrimaryVariantDark, ${Object(a.d)(m.d.primaryVariantDark)}));
  --_border-color: var(--bbva-button-default-positive-border-color, transparent);
  --_opacity: var(--bbva-button-default-positive-opacity, 1); }

:host(.positive[active]),
:host([variant='positive'][active]) {
  --_color: var(--bbva-button-default-positive-color-active,var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)}));
  --_bg-color: var(--bbva-button-default-positive-bg-color-active,var(--colorsPrimaryVariant, ${Object(a.d)(m.d.primaryVariant)}));
  --_border-color: var(--bbva-button-default-positive-border-color-active, transparent);
  --_opacity: var(--bbva-button-default-positive-opacity-active, 1); }

:host(.positive[disabled]),
:host([variant='positive'][disabled]) {
  --_color: var(--bbva-button-default-positive-color-disabled,var(--colorsSecondary400, ${Object(a.d)(m.d.secondary400)}));
  --_bg-color: var(--bbva-button-default-positive-bg-color-disabled,var(--colorsSecondary200, ${Object(a.d)(m.d.secondary200)}));
  --_border-color: var(--bbva-button-default-positive-border-color-disabled, transparent);
  --_opacity: var(--bbva-button-default-positive-opacity-disabled, 0.4); }
`;a.b`[ambient^='light'] {
  --bbva-button-default-color: var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)});
  --bbva-button-default-bg-color: var(--colorsPrimaryMedium, ${Object(a.d)(m.d.primaryMedium)});
  --bbva-button-default-border-color: transparent;
  --bbva-button-default-opacity: 1;
  --bbva-button-default-color-active: var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)});
  --bbva-button-default-bg-color-active: var(--colorsPrimaryCoreLight, ${Object(a.d)(m.d.primaryCoreLight)});
  --bbva-button-default-border-color-active: transparent;
  --bbva-button-default-opacity-active: 1;
  --bbva-button-default-color-disabled: var(--colorsSecondary400, ${Object(a.d)(m.d.secondary400)});
  --bbva-button-default-bg-color-disabled: var(--colorsSecondary200, ${Object(a.d)(m.d.secondary200)});
  --bbva-button-default-border-color-disabled: transparent;
  --bbva-button-default-opacity-disabled: 1;
  --bbva-button-default-secondary-color: var(--colorsPrimaryMedium, ${Object(a.d)(m.d.primaryMedium)});
  --bbva-button-default-secondary-bg-color: transparent;
  --bbva-button-default-secondary-border-color: var(--colorsSecondary300, ${Object(a.d)(m.d.secondary300)});
  --bbva-button-default-secondary-opacity: 1;
  --bbva-button-default-secondary-color-active: var(--colorsPrimaryMedium, ${Object(a.d)(m.d.primaryMedium)});
  --bbva-button-default-secondary-bg-color-active: var(--colorsSecondary100, ${Object(a.d)(m.d.secondary100)});
  --bbva-button-default-secondary-border-color-active: transparent;
  --bbva-button-default-secondary-opacity-active: 1;
  --bbva-button-default-secondary-color-disabled: var(--colorsSecondary400, ${Object(a.d)(m.d.secondary400)});
  --bbva-button-default-secondary-bg-color-disabled: var(--colorsSecondary200, ${Object(a.d)(m.d.secondary200)});
  --bbva-button-default-secondary-border-color-disabled: transparent;
  --bbva-button-default-secondary-opacity-disabled: 0.4;
  --bbva-button-default-positive-color: var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)});
  --bbva-button-default-positive-bg-color: var(--colorsPrimaryVariantDark, ${Object(a.d)(m.d.primaryVariantDark)});
  --bbva-button-default-positive-border-color: transparent;
  --bbva-button-default-positive-opacity: 1;
  --bbva-button-default-positive-color-active: var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)});
  --bbva-button-default-positive-bg-color-active: var(--colorsPrimaryVariant, ${Object(a.d)(m.d.primaryVariant)});
  --bbva-button-default-positive-border-color-active: transparent;
  --bbva-button-default-positive-opacity-active: 1;
  --bbva-button-default-positive-color-disabled: var(--colorsSecondary400, ${Object(a.d)(m.d.secondary400)});
  --bbva-button-default-positive-bg-color-disabled: var(--colorsSecondary200, ${Object(a.d)(m.d.secondary200)});
  --bbva-button-default-positive-border-color-disabled: transparent;
  --bbva-button-default-positive-opacity-disabled: 0.4; }
`,a.b`[ambient^='dark'] {
  --bbva-button-default-color: var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)});
  --bbva-button-default-bg-color: var(--colorsPrimaryMedium, ${Object(a.d)(m.d.primaryMedium)});
  --bbva-button-default-border-color: transparent;
  --bbva-button-default-opacity: 1;
  --bbva-button-default-color: var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)});
  --bbva-button-default-bg-color-active: var(--colorsPrimaryCoreLight, ${Object(a.d)(m.d.primaryCoreLight)});
  --bbva-button-default-border-color-active: transparent;
  --bbva-button-default-opacity-active: 1;
  --bbva-button-default-color-disabled: var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)});
  --bbva-button-default-bg-color-disabled: var(--colorsPrimaryMedium, ${Object(a.d)(m.d.primaryMedium)});
  --bbva-button-default-border-color-disabled: transparent;
  --bbva-button-default-opacity-disabled: 0.4;
  --bbva-button-default-secondary-color: var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)});
  --bbva-button-default-secondary-bg-color: transparent;
  --bbva-button-default-secondary-border-color: var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)});
  --bbva-button-default-secondary-opacity: 1;
  --bbva-button-default-secondary-color-active: var(--colorsPrimaryMedium, ${Object(a.d)(m.d.primaryMedium)});
  --bbva-button-default-secondary-bg-color-active: var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)});
  --bbva-button-default-secondary-border-color-active: transparent;
  --bbva-button-default-secondary-opacity-active: 1;
  --bbva-button-default-secondary-color-disabled: var(--colorsSecondary400, ${Object(a.d)(m.d.secondary400)});
  --bbva-button-default-secondary-bg-color-disabled: var(--colorsSecondary300, ${Object(a.d)(m.d.secondary300)});
  --bbva-button-default-secondary-border-color-disabled: transparent;
  --bbva-button-default-secondary-opacity-disabled: 0.4;
  --bbva-button-default-positive-color: var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)});
  --bbva-button-default-positive-bg-color: var(--colorsPrimaryVariantDark, ${Object(a.d)(m.d.primaryVariantDark)});
  --bbva-button-default-positive-border-color: transparent;
  --bbva-button-default-positive-opacity: 1;
  --bbva-button-default-positive-color-active: var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)});
  --bbva-button-default-positive-bg-color-active: var(--colorsPrimaryVariant, ${Object(a.d)(m.d.primaryVariant)});
  --bbva-button-default-positive-border-color-active: transparent;
  --bbva-button-default-positive-opacity-active: 1;
  --bbva-button-default-positive-color-disabled: var(--colorsSecondary400, ${Object(a.d)(m.d.secondary400)});
  --bbva-button-default-positive-bg-color-disabled: var(--colorsSecondary200, ${Object(a.d)(m.d.secondary200)});
  --bbva-button-default-positive-border-color-disabled: transparent;
  --bbva-button-default-positive-opacity-disabled: 0.4; }

[ambient='dark100'] {
  --bbva-button-default-bg-color: var(--colorsPrimaryCore, ${Object(a.d)(m.d.primaryCore)});
  --bbva-button-default-bg-color-active: var(--colorsPrimaryCoreDark, ${Object(a.d)(m.d.primaryCoreDark)});
  --bbva-button-default-bg-color-disabled: var(--colorsPrimaryCore, ${Object(a.d)(m.d.primaryCore)});
  --bbva-button-default-secondary-color-active: var(--colorsPrimaryMedium, ${Object(a.d)(m.d.primaryMedium)});
  --bbva-button-default-secondary-bg-color-active: var(--colorsPrimaryCoreLightened, ${Object(a.d)(m.d.primaryCoreLightened)});
  --bbva-button-default-secondary-opacity-active: 1; }
`;class f extends p{static get is(){return"bbva-button-default"}static get properties(){return{text:{type:String}}}constructor(){super(),this.type="button"}static get styles(){return[super.styles,b,Object(r.a)("bbva-button-default-shared-styles")]}render(){return a.c`
      ${this.text?a.c`
            <span>${this.text}</span>
          `:a.c`
            <slot></slot>
          `}
      ${this._button}
    `}}customElements.define(f.is,f)},,function(e,t,i){"use strict";var a=i(0),r=i(2),s=i(9);const n=a.b`:host {
  will-change: transform; }

:host([state="cached"]),
:host(:not(.state-is-visible)) {
  display: none; }

:host([state="inactive"]) {
  z-index: 2; }

:host([state="active"].state-is-visible) {
  z-index: 3; }

:host(.template-animation-moveFromRight),
:host(.template-animation-moveToLeft),
:host(.template-animation-moveFromLeft),
:host(.template-animation-moveToRight),
:host(.template-animation-moveFromBottom),
:host(.template-animation-moveToTop),
:host(.template-animation-moveFromTop),
:host(.template-animation-moveToBottom),
:host(.template-animation-fade-in),
:host(.template-animation-fade-out),
:host(.template-animation-static) {
  animation-duration: var(--cells-template-animation-duration, 195ms);
  animation-timing-function: var(--cells-template-animation-timing-function, cubic-bezier(0.4, 0, 0.2, 1));
  animation-fill-mode: both; }

/* horizontal */
:host(.template-animation-moveFromRight) {
  animation-name: moveFromRight; }

:host(.template-animation-moveToLeft) {
  animation-name: moveToLeft; }

:host(.template-animation-moveFromLeft) {
  animation-name: moveFromLeft; }

:host(.template-animation-moveToRight) {
  animation-name: moveToRight; }

/*vertical*/
:host(.template-animation-moveFromBottom) {
  animation-name: moveFromBottom; }

:host(.template-animation-moveToTop) {
  animation-name: moveToTop; }

:host(.template-animation-moveFromTop) {
  animation-name: moveFromTop; }

:host(.template-animation-moveToBottom) {
  animation-name: moveToBottom; }

/* fade */
:host(.template-animation-fade-in) {
  animation-name: fade-in; }

:host(.template-animation-fade-out) {
  animation-name: fade-out; }

/* static */
:host(.template-animation-static) {
  z-index: 0 !important;
  animation-name: static; }

/* horizontal key*/
@keyframes moveFromRight {
  from {
    transform: translateX(100%); } }

@keyframes moveToLeft {
  to {
    transform: translateX(-32%); } }

@keyframes moveFromLeft {
  from {
    transform: translateX(-100%); } }

@keyframes moveToRight {
  to {
    transform: translateX(32%); } }

/*vertical key*/
@keyframes moveFromBottom {
  from {
    transform: translateY(100%); }
  to { } }

@keyframes moveToTop {
  to {
    transform: translateY(-100%); } }

@keyframes moveFromTop {
  from {
    transform: translateY(-100%); } }

@keyframes moveToBottom {
  from { }
  to {
    transform: translateY(100%);
    opacity: 0.96; } }

/* fade key*/
@keyframes fade-in {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }

@keyframes fade-out {
  from {
    opacity: 1; }
  to {
    opacity: 0; } }

/* static key*/
@keyframes static {
  from {
    transform: translateZ(0); }
  to {
    transform: translateZ(0); } }
`,o=Object(s.a)(e=>class extends e{static get properties(){return{name:{type:String},state:{type:String,reflect:!0},animationCompleteEvent:{type:String,attribute:"animation-complete-event"},animationType:{type:String,attribute:"animation-type"},horizontal:{type:Object},horizontalEverForwards:{type:Object,attribute:"horizontal-ever-forwards"},horizontalEverBackwards:{type:Object,attribute:"horizontal-ever-backwards"},verticalDownForwards:{type:Object,attribute:"vertical-down-forwards"},verticalDownBackwards:{type:Object,attribute:"vertical-down-backwards"},verticalUp:{type:Object,attribute:"vertical-up"},verticalUpForwards:{type:Object,attribute:"vertical-up-forwards"},static:{type:Object},fade:{type:Object}}}constructor(){super(),this.animationCompleteEvent="template-active",this.animationType="horizontal",this.horizontal={forwardsIn:"template-animation-moveFromRight",forwardsOut:"template-animation-moveToLeft",backwardsIn:"template-animation-moveFromLeft",backwardsOut:"template-animation-moveToRight"},this.horizontalEverForwards={forwardsIn:"template-animation-moveFromRight",forwardsOut:"template-animation-moveToLeft",backwardsIn:"template-animation-moveFromRight",backwardsOut:"template-animation-moveToLeft"},this.horizontalEverBackwards={forwardsIn:"template-animation-moveFromLeft",forwardsOut:"template-animation-moveToRight",backwardsIn:"template-animation-moveFromLeft",backwardsOut:"template-animation-moveToRight"},this.verticalDownForwards={forwardsIn:"template-animation-static",forwardsOut:"template-animation-moveToBottom",backwardsIn:"template-animation-moveFromLeft",backwardsOut:"template-animation-moveToRight"},this.verticalDownBackwards={forwardsIn:"template-animation-moveFromRight",forwardsOut:"template-animation-moveToLeft",backwardsIn:"template-animation-static",backwardsOut:"template-animation-moveToBottom"},this.verticalUpForwards={forwardsIn:"template-animation-moveFromBottom",forwardsOut:"template-animation-static",backwardsIn:"template-animation-moveFromLeft",backwardsOut:"template-animation-moveToRight"},this.verticalUp={forwardsIn:"template-animation-moveFromBottom",forwardsOut:"template-animation-static",backwardsIn:"template-animation-static",backwardsOut:"template-animation-moveToBottom"},this.static={forwardsIn:"template-animation-static",forwardsOut:"template-animation-static",backwardsIn:"template-animation-static",backwardsOut:"template-animation-static"},this.fade={forwardsIn:"template-animation-fade-in",forwardsOut:"template-animation-fade-out",backwardsIn:"template-animation-fade-in",backwardsOut:"template-animation-fade-out"},this._resetTemplate=this._resetTemplate.bind(this)}connectedCallback(){super.connectedCallback(),this.hasAttribute("aria-hidden")||this.setAttribute("aria-hidden","true")}updated(e){super.updated(e),e.has("state")&&this._stateChanged(this.state),e.has("animationType")&&this.dispatchEvent(new CustomEvent("animation-type-changed",{detail:{value:this.animationType}}))}_stateChanged(e){if("native"!==e){if("active"===e){let e=this._findTemplateByState("inactive");e?this._animateWith(e):(this.classList.add("state-is-visible"),this.setAttribute("aria-hidden","false"),this.dispatchEvent(new CustomEvent(this.animationCompleteEvent,{bubbles:!0,composed:!0})))}}else this._removeStateVisibleTemplateOut(this)}_findTemplateByState(e){const t=!!this.parentNode.host?this.parentNode.host:this,i=t.parentElement.childNodes;let a;return Array.from(i).filter(e=>e!==t&&this._isValidTarget(e)).some(t=>{const i=this._isPage(t)?this._getCellsTemplateFromShadowRootChildNodes(t):t,r=i.getAttribute("state")===e;return r&&(a=i),r}),a}_isValidTarget(e){return e&&e.tagName&&["template","page"].some(t=>-1!==e.tagName.toLowerCase().indexOf(t))}_isPage(e){return e&&e.tagName.toLowerCase().endsWith("-page")}_getCellsTemplateFromShadowRootChildNodes(e){return Array.from(e.shadowRoot.childNodes).find(e=>e&&e.tagName&&-1!==e.tagName.toLowerCase().indexOf("cells-template"))}_directAnimationForwards(e,t,i){e.classList.add(i.forwardsIn),t.classList.add(i.forwardsOut),t.dispatchEvent(new CustomEvent("animation-forward",{bubbles:!0,composed:!0}))}_directAnimationBackwards(e,t,i){e.classList.add(i.backwardsIn),t.classList.add(i.backwardsOut),t.dispatchEvent(new CustomEvent("animation-backward",{bubbles:!0,composed:!0}))}_configureAnimationTypeActive(e){let t=this.animationType,i=e.animationType,a={verticalDownBackwards:"verticalDownBackwards",verticalDownForwards:"verticalDownForwards",verticalUp:"verticalUp",verticalUpForwards:"verticalUpForwards",staticEver:"static",horizontalEver:"horizontal",fade:"fade"};return i===t&&[i,t].forEach(e=>e in a?this[a[e]]:""),"horizontalEver"===t&&"static"===i?this.horizontalEverForwards:"horizontalEver"===i&&"static"===t?this.horizontalEverBackwards:a[i]?this[a[i]]:a[t]?this[a[t]]:this.horizontal}_cleanTemplateNextNavigation(e){if(e){let t=e._nextNavigation;e._nextNavigation=void 0,this._cleanTemplateNextNavigation(t)}}_animateWith(e){let t,i=!1,a="AnimationEvent"in window?"animationend":"webkitAnimationEnd";this._nextNavigation?(this._cleanTemplateNextNavigation(this),i=!0):e._nextNavigation=this,this.addEventListener(a,this._resetTemplate),e.addEventListener(a,this._resetTemplate),this.classList.add("template-animation-is-animating"),e.classList.add("template-animation-is-animating"),t=this._configureAnimationTypeActive(e),window.requestAnimationFrame(()=>{i?this._directAnimationBackwards(this,e,t):this._directAnimationForwards(this,e,t),this.setAttribute("aria-hidden","false"),this.classList.add("state-is-visible")})}_resetTemplate(e){let t=Event.AT_TARGET||Event.prototype.AT_TARGET;if(e.eventPhase!==t)return;let i=e.target;i.className=(i.className||"").replace(/\btemplate-animation\S+/g,""),i.removeEventListener(e.type,this._resetTemplate),i!==this&&this._removeStateVisibleTemplateOut(i)}_removeStateVisibleTemplateOut(e){!e.disabledScrollerReset&&e._scrollerNode&&(e._scrollerNode.scrollTop=0),window.requestAnimationFrame(()=>{e.setAttribute("aria-hidden","true"),e.classList.remove("state-is-visible"),this.dispatchEvent(new CustomEvent(this.animationCompleteEvent,{bubbles:!0,composed:!0}))})}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class l extends a.a{static get is(){return"cells-media-query"}static get properties(){return{query:{type:String},full:{type:Boolean}}}constructor(){super(),this.queryMatches=!1,this.full=!1,this._boundMQHandler=this.queryHandler.bind(this),this._mq=null}updated(e){e.has("query")&&this.queryChanged()}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.style.display="none",this.queryChanged()}disconnectedCallback(){this._remove()}_add(){this._mq&&this._mq.addListener(this._boundMQHandler)}_remove(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null}queryChanged(){this._remove();let e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))}queryHandler(e){const t=this.queryMatches;this.queryMatches=e.matches,t!==this.queryMatches&&this.dispatchEvent(new CustomEvent("query-matches-changed",{detail:{value:this.queryMatches}}))}}customElements.define(l.is,l);i(14);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function d(e,t,i){return{index:e,removed:t,addedCount:i}}function c(e,t,i,a,r,s){let n,o=0,l=0,c=Math.min(i-t,s-r);if(0==t&&0==r&&(o=function(e,t,i){for(let a=0;a<i;a++)if(!h(e[a],t[a]))return a;return i}(e,a,c)),i==e.length&&s==a.length&&(l=function(e,t,i){let a=e.length,r=t.length,s=0;for(;s<i&&h(e[--a],t[--r]);)s++;return s}(e,a,c-o)),r+=o,s-=l,(i-=l)-(t+=o)==0&&s-r==0)return[];if(t==i){for(n=d(t,[],0);r<s;)n.removed.push(a[r++]);return[n]}if(r==s)return[d(t,[],i-t)];let u=function(e){let t=e.length-1,i=e[0].length-1,a=e[t][i],r=[];for(;t>0||i>0;){if(0==t){r.push(2),i--;continue}if(0==i){r.push(3),t--;continue}let s,n=e[t-1][i-1],o=e[t-1][i],l=e[t][i-1];s=o<l?o<n?o:n:l<n?l:n,s==n?(n==a?r.push(0):(r.push(1),a=n),t--,i--):s==o?(r.push(3),t--,a=o):(r.push(2),i--,a=l)}return r.reverse(),r}(function(e,t,i,a,r,s){let n=s-r+1,o=i-t+1,l=new Array(n);for(let e=0;e<n;e++)l[e]=new Array(o),l[e][0]=e;for(let e=0;e<o;e++)l[0][e]=e;for(let i=1;i<n;i++)for(let s=1;s<o;s++)if(h(e[t+s-1],a[r+i-1]))l[i][s]=l[i-1][s-1];else{let e=l[i-1][s]+1,t=l[i][s-1]+1;l[i][s]=e<t?e:t}return l}(e,t,i,a,r,s));n=void 0;let p=[],m=t,b=r;for(let e=0;e<u.length;e++)switch(u[e]){case 0:n&&(p.push(n),n=void 0),m++,b++;break;case 1:n||(n=d(m,[],0)),n.addedCount++,m++,n.removed.push(a[b]),b++;break;case 2:n||(n=d(m,[],0)),n.addedCount++,m++;break;case 3:n||(n=d(m,[],0)),n.removed.push(a[b]),b++}return n&&p.push(n),p}function h(e,t){return e===t}var u=i(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function p(e){return"slot"===e.localName}class m{static getFlattenedNodes(e){return p(e)?(e=e).assignedNodes({flatten:!0}):Array.from(e.childNodes).map(e=>p(e)?(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){p(this._target)?this._listenSlots([this._target]):this._target.children&&(this._listenSlots(this._target.children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){p(this._target)?this._unlistenSlots([this._target]):this._target.children&&(this._unlistenSlots(this._target.children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,u.a.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=(a=t,r=this._effectiveNodes,c(a,0,a.length,r,0,r.length));var a,r;for(let t,a=0;a<i.length&&(t=i[a]);a++)for(let i,a=0;a<t.removed.length&&(i=t.removed[a]);a++)e.removedNodes.push(i);for(let a,r=0;r<i.length&&(a=i[r]);r++)for(let i=a.index;i<a.index+a.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let s=!1;return(e.addedNodes.length||e.removedNodes.length)&&(s=!0,this.callback.call(this._target,e)),s}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];p(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];p(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class b{constructor(e){this.selection=[],this.selectCallback=e}get(){return this.multi?this.selection.slice():this.selection[0]}clear(e){this.selection.slice().forEach((function(t){(!e||e.indexOf(t)<0)&&this.setItemSelected(t,!1)}),this)}isSelected(e){return this.selection.indexOf(e)>=0}setItemSelected(e,t){if(null!=e&&t!==this.isSelected(e)){if(t)this.selection.push(e);else{var i=this.selection.indexOf(e);i>=0&&this.selection.splice(i,1)}this.selectCallback&&this.selectCallback(e,t)}}select(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))}toggle(e){this.setItemSelected(e,!this.isSelected(e))}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const f=Object(s.a)(e=>class extends e{static get properties(){return{attrForSelected:{type:String,attribute:"attr-for-selected"},selected:{type:String},activateEvent:{type:String,attribute:"activate-event"},selectable:{type:String},selectedClass:{type:String,attribute:"selected-class"},selectedAttribute:{type:String,attribute:"selected-attribute"},fallbackSelection:{type:String,attribute:"fallback-selection"},_excludedLocalNames:{type:Object}}}constructor(){super(),this.attrForSelected=null,this.activateEvent="click",this.selectedClass="cells-selected",this.selectedAttribute=null,this.fallbackSelection=null,this.items=[],this._excludedLocalNames={template:1},this._bindFilterItem=this._filterItem.bind(this),this._selection=new b(this._applySelection.bind(this))}updated(e){super.updated(e),e.has("selected")&&(this._updateSelected(),this.dispatchEvent(new CustomEvent("selected-changed",{detail:{value:this.selected}}))),e.has("activateEvent")&&this._activateEventChanged(this.activateEvent,e.get("activateEvent")),e.has("attrForSelected")&&this._updateAttrForSelected(),e.has("fallbackSelection")&&this._checkFallback()}connectedCallback(){super.connectedCallback(),this._observer=this._observeItems(this),this._addListener(this.activateEvent)}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect(),this._removeListener(this.activateEvent)}indexOf(e){return this.items?this.items.indexOf(e):-1}select(e){this.selected=e}selectPrevious(){var e=this.items.length,t=e-1;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))-1+e)%e),this.selected=this._indexToValue(t)}selectNext(){var e=0;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(e)}selectIndex(e){this.select(this._indexToValue(e))}forceSynchronousItemUpdate(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()}_checkFallback(){this._updateSelected()}_addListener(e){this.addEventListener(e,this._activateHandler)}_removeListener(e){this.removeEventListener(e,this._activateHandler)}_activateEventChanged(e,t){this._removeListener(t),this._addListener(e)}_updateItems(){const e=Element.prototype,t=e.matches||e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector,i=this.selectable||"*";var a=m.getFlattenedNodes(this).filter(e=>e.nodeType===Node.ELEMENT_NODE&&t.call(e,i));a=Array.prototype.filter.call(a,this._bindFilterItem),this.items=a,this.dispatchEvent(new CustomEvent("items-changed",{detail:{value:this.items}}))}_updateAttrForSelected(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))}_updateSelected(){this._selectSelected(this.selected)}_selectSelected(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}}_filterItem(e){return!this._excludedLocalNames[e.localName]}_valueToItem(e){return null==e?null:this.items[this._valueToIndex(e)]}_valueToIndex(e){if(!this.attrForSelected)return Number(e);for(var t,i=0;t=this.items[i];i++)if(this._valueForItem(t)==e)return i}_indexToValue(e){if(!this.attrForSelected)return e;var t=this.items[e];return t?this._valueForItem(t):void 0}_valueForItem(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return-1===t?null:t}var i=e[this.attrForSelected.indexOf("-")<0?this.attrForSelected:this.attrForSelected.replace(/-[a-z]/g,e=>e[1].toUpperCase())];return null!=i?i:e.getAttribute(this.attrForSelected)}_applySelection(e,t){this.selectedClass&&e.classList.toggle(this.selectedClass,t),this.selectedAttribute&&e.toggleAttribute(this.selectedAttribute,t),this._selectionChange();const i="cells-"+(t?"select":"deselect");this.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0,detail:{item:e}}))}_selectionChange(){this.selectedItem=this._selection.get(),this.dispatchEvent(new CustomEvent("selected-item-changed",{detail:{value:this.selectedItem}}))}_observeItems(e){return new m(e,(function(e){this._updateItems(),this._updateSelected(),this.dispatchEvent(new CustomEvent("cells-items-changed",{cancelable:!1,detail:e}))}))}_activateHandler(e){for(var t=e.target,i=this.items;t&&t!=this;){var a=i.indexOf(t);if(a>=0){var r=this._indexToValue(a);return void this._itemActivate(r,t,e)}t=t.parentNode}}_itemActivate(e,t,i){this.dispatchEvent(new CustomEvent("cells-activate",{cancelable:!0,bubbles:!0,composed:!0,detail:{selected:e,item:t}})),this.select(e)}}),y=Object(s.a)(e=>class extends(f(e)){constructor(){super(),this.multi=!1,this.selectedValues=[],this.selectedItems=[]}static get properties(){return{multi:{type:Boolean},selectedValues:{type:Array,attribute:"selected-values"}}}updated(e){super.updated(e),e.has("multi")&&this.multiChanged(this.multi),e.has("selectedValues")&&(this._updateSelected(),this.dispatchEvent(new CustomEvent("selected-values-changed"),{detail:{value:this.selectedValues}}))}select(e){this.multi?this._toggleSelected(e):this.selected=e}multiChanged(e){this._selection.multi=e,this._updateSelected()}get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length}_updateAttrForSelected(){this.multi?this.selectedItems&&this.selectedItems.length>0&&(this.selectedValues=this.selectedItems.map((function(e){return this._indexToValue(this.indexOf(e))}),this).filter((function(e){return null!=e}),this)):super._updateAttrForSelected()}_updateSelected(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)}_selectMulti(e){e=e||[];var t=(this._valuesToItems(e)||[]).filter((function(e){return null!=e}));this._selection.clear(t);for(var i=0;i<t.length;i++)this._selection.setItemSelected(t[i],!0);this.fallbackSelection&&this._selection.get()&&!this._selection.get().length&&(this._valueToItem(this.fallbackSelection)&&this.select(this.fallbackSelection))}_selectionChange(){var e=this._selection.get();this.multi?(this.selectedItems=e,this.selectedItem=e.length?e[0]:null):null!=e?(this.selectedItems=[e],this.selectedItem=e):(this.selectedItems=[],this.selectedItem=null),this.dispatchEvent(new CustomEvent("selected-items-changed",{detail:{value:this.selectedItems}})),this.dispatchEvent(new CustomEvent("selected-item-changed",{detail:{value:this.selectedItem}}))}_toggleSelected(e){var t=this.selectedValues.indexOf(e);t<0?this.selectedValues.push(e):this.selectedValues.splice(t,1),this._updateSelected()}_valuesToItems(e){return null==e?null:e.map((function(e){return this._valueToItem(e)}),this)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class g extends(y(a.a)){static get is(){return"cells-selector"}createRenderRoot(){return this}}customElements.define(g.is,g);var v=i(7);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const w=new WeakMap,S=Object(v.c)(e=>t=>{if(!(t instanceof v.a)||t instanceof v.b||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=t,{element:a}=i;let r=w.get(t);void 0===r&&(a.setAttribute("class",i.strings.join(" ")),w.set(t,r=new Set));const s=a.classList||new _(a);r.forEach(t=>{t in e||(s.remove(t),r.delete(t))});for(const t in e){const i=e[t];i!=r.has(t)&&(i?(s.add(t),r.add(t)):(s.remove(t),r.delete(t)))}"function"==typeof s.commit&&s.commit()});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
window.ORPHANS=window.ORPHANS||new Set;const C=Object(s.a)(e=>class extends e{static get properties(){return{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}}}constructor(){super(),this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantCellsResize=this._onDescendantCellsResize.bind(this),this.addEventListener("cells-request-resize-notifications",this._onCellsRequestResizeNotifications)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this._requestResizeNotifications()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(window.ORPHANS.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null}notifyResize(){this.isAttached&&(this._interestedResizables.forEach(e=>{this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this),this._fireResize())}assignParentResizable(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeCellsResize(this))}stopResizeNotificationsFor(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeCellsResize(e))}_subscribeCellsResize(e){e.addEventListener("cells-resize",this._boundOnDescendantCellsResize)}_unsubscribeCellsResize(e){e.removeEventListener("cells-resize",this._boundOnDescendantCellsResize)}resizerShouldNotify(e){return!0}_onDescendantCellsResize(e){if(this._notifyingDescendant)return void e.stopPropagation();!window.ShadyDOM||this._fireResize()}_fireResize(){this.dispatchEvent(new CustomEvent("cells-resize",{bubbles:!1,composed:!0,node:this}))}_onCellsRequestResizeNotifications(e){var t=e.composedPath()[0];t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())}_parentResizableChanged(e){e&&window.removeEventListener("resize",this._boundNotifyResize)}_notifyDescendant(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)}_requestResizeNotifications(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(window.ORPHANS.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())}_findParent(){this.assignParentResizable(null),this.dispatchEvent(new CustomEvent("cells-request-resize-notifications",{bubbles:!0,composed:!0,cancelable:!0,node:this})),this._parentResizable?window.ORPHANS.delete(this):window.ORPHANS.add(this)}});var T=i(13),k=a.b`:host {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; }

cells-selector #drawer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: white;
  will-change: transform;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 2; }

cells-selector #main {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1; }

cells-selector:not(.narrow-layout) ::slotted([paper-drawer-toggle]) {
  display: none; }

.transition #drawer {
  transition: -webkit-transform ease-in-out 224ms;
  transition: transform ease-in-out 224ms, -webkit-transform ease-in-out 224ms; }

:host([scale-content]) #drawer {
  -webkit-transform: none !important;
  transform: none !important;
  z-index: 1; }

:host([scale-content]) #main {
  z-index: 2; }

:host([scale-content]) .transition #drawer {
  transition: none;
  z-index: 1; }

:host([scale-content]) .transition #main {
  z-index: 2;
  will-change: transform;
  transition: -webkit-transform 224ms cubic-bezier(0.4, 0, 0.6, 1);
  transition: transform 224ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 224ms cubic-bezier(0.4, 0, 0.6, 1); }

.left-drawer.narrow-layout #drawer:not(.cells-selected) {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%); }

.right-drawer #drawer {
  left: auto;
  right: 0; }

.right-drawer #main {
  left: 0; }

.right-drawer.narrow-layout #main {
  left: 0;
  right: 0; }

.right-drawer.narrow-layout #drawer:not(.cells-selected) {
  left: auto;
  -webkit-transform: translateX(100%);
  transform: translateX(100%); }

#main ::slotted([slot="main"]) {
  height: 100%; }

#drawer ::slotted([slot="drawer"]) {
  height: 100%; }

#scrim {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  pointer-events: none; }

.narrow-layout #drawer {
  will-change: transform; }

.narrow-layout #main > * {
  margin: 0;
  min-height: 100%;
  left: 0;
  right: 0;
  -moz-box-sizing: border-box;
  box-sizing: border-box; }

:host([scale-content][selected="drawer"]) .left-drawer #main {
  -webkit-transform: scale(0.66) translateX(95vw);
  transform: scale(0.66) translateX(95vw); }

:host([scale-content][selected="drawer"]) .right-drawer #main {
  -webkit-transform: scale(0.66) translateX(-95vw);
  transform: scale(0.66) translateX(-95vw); }

.narrow-layout > #main:not(.cells-selected) > #scrim,
.dragging > #main > #scrim {
  pointer-events: auto; }
`;let O=null;class x extends(C(a.a)){static get is(){return"cells-app-drawer"}static get properties(){return{defaultSelected:{type:String,attribute:"default-selected"},disableEdgeSwipe:{type:Boolean,attribute:"disable-edge-swipe"},disableSwipe:{type:Boolean,attribute:"disable-swipe"},drawerWidth:{type:String,attribute:"drawer-width"},edgeSwipeSensitivity:{type:Number,attribute:"edge-swipe-sensitivity"},forceNarrow:{type:Boolean,attribute:"force-narrow"},hasTransform:{type:Boolean,attribute:"has-transform"},hasWillChange:{type:Boolean,attribute:"has-will-change"},peek:{type:Boolean,reflect:!0},responsiveWidth:{type:String,attribute:"responsive-width"},rightDrawer:{type:Boolean,attribute:"right-drawer"},selected:{type:String,reflect:!0},scaleContent:{type:Boolean,attribute:"scale-content",reflect:!0},drawerToggleAttribute:{type:String,attribute:"drawer-toggle-attribute"},drawerFocusSelector:{type:String,attribute:"drawer-focus-selector"},_mediaQueryMatch:{type:Boolean}}}constructor(){super(),this.defaultSelected="main",this.disableEdgeSwipe=!1,this.disableSwipe=!1,this.dragging=!1,this.drawerWidth="100%",this.edgeSwipeSensitivity=40,this.forceNarrow=!1,this.hasTransform="transform"in this.style,this.hasWillChange="willChange"in this.style,this.peek=!1,this.peeking=!1,this.responsiveWidth="768px",this.rightDrawer=!1,this.selected=null,this.scaleContent=!1,this.drawerToggleAttribute="paper-drawer-toggle",this.drawerFocusSelector='a[href]:not([tabindex="-1"]),area[href]:not([tabindex="-1"]),input:not([disabled]):not([tabindex="-1"]),select:not([disabled]):not([tabindex="-1"]),textarea:not([disabled]):not([tabindex="-1"]),button:not([disabled]):not([tabindex="-1"]),iframe:not([tabindex="-1"]),[tabindex]:not([tabindex="-1"]),[contentEditable=true]:not([tabindex="-1"])',this._transition=!1}firstUpdated(){super.firstUpdated(),this._drawer=this.shadowRoot.querySelector("#drawer"),this._main=this.shadowRoot.querySelector("#main"),this._drawerContent=this.shadowRoot.querySelector("#drawerContent")}updated(e){e.has("selected")&&(this._toggleFocusListener(this.selected),this.dispatchEvent(new CustomEvent("selected-changed",{detail:{value:this.selected}}))),(e.has("forceNarrow")||e.has("defaultSelected"))&&this._forceNarrowChanged()}connectedCallback(){super.connectedCallback(),T.b(this,"tap",e=>this._onTap(e)),T.b(this,"down",e=>this._downHandler(e)),T.b(this,"up",e=>this._upHandler(e)),T.b(this,"track",e=>this._onTrack(e)),this._transition=!0}get _mediaQuery(){return"(max-width: "+this.responsiveWidth+")"}get narrow(){return this.forceNarrow||this._mediaQueryMatch}get _drawerStyle(){return"width:"+this.drawerWidth+";"}get _mainStyle(){let e="";return e+="left:"+(this.narrow||this.rightDrawer?"0":this.drawerWidth)+";",this.rightDrawer&&(e+="right:"+(this.narrow?"":this.drawerWidth)+";"),e}get _cellsSelectorClass(){return{dragging:this.dragging,"narrow-layout":this.narrow,"right-drawer":this.rightDrawer,"left-drawer":!this.rightDrawer,transition:this._transition,peeking:this.peeking}}get _swipeAllowed(){return this.narrow&&!this.disableSwipe}get _isMainSelected(){return"main"===this.selected}static get styles(){return[k,Object(r.a)("cells-app-drawer-shared-styles")]}render(){return a.c`
      <cells-media-query
        id="mq"
        @query-matches-changed="${this._onQueryMatchesChanged}"
        query="${this._mediaQuery}">
      </cells-media-query>

      <cells-selector
        attr-for-selected="id"
        class="${S(this._cellsSelectorClass)}"
        activate-event=""
        selected="${this.selected}">

        <div id="main" style="${this._mainStyle}">
          <slot name="main"></slot>
          <slot name="footer"></slot>
          <div id="scrim" @click="closeDrawer"></div>
        </div>

        <div id="drawer" style="${this._drawerStyle}">
          <slot id="drawerContent" name="drawer"></slot>
        </div>

      </cells-selector>
    `}_responsiveChange(){this._setNarrow(),this.selected=this.narrow?this.defaultSelected:null,T.c(this,this._swipeAllowed?"pan-y":"auto"),this.dispatchEvent(new CustomEvent("cells-app-responsive-change",{detail:{narrow:this.narrow},bubbles:!0,composed:!0})),this.requestUpdate()}_setNarrow(){this.narrow?this.setAttribute("narrow",""):this.removeAttribute("narrow"),this.dispatchEvent(new CustomEvent("narrow-changed",{detail:{value:this.narrow}}))}_setPeeking(e){this.peeking=e,this.dispatchEvent(new CustomEvent("peeking-changed",{detail:{value:this.peeking}}))}_setDragging(e){this.dragging=e,this.dispatchEvent(new CustomEvent("dragging-changed",{detail:{value:this.dragging}})),this.requestUpdate()}_onQueryMatchesChanged(e){this._mediaQueryMatch=e.detail.value,this._responsiveChange()}_forceNarrowChanged(){this._responsiveChange()}togglePanel(){this._isMainSelected?this.openDrawer():this.closeDrawer()}openDrawer(){requestAnimationFrame(()=>{this._drawer.classList.toggle("transition-drawer",!0),this.selected="drawer"})}closeDrawer(){requestAnimationFrame(()=>{this._drawer.classList.toggle("transition-drawer",!0),this.selected="main"})}_onTrack(e){if(e&&e.detail&&e.detail.state&&(!O||this===O))switch(e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackX(e);break;case"end":this._trackEnd(e)}}_trackStart(e){this._swipeAllowed&&(O=this,this._setDragging(!0),this._isMainSelected&&this._setDragging(this.peeking||this._isEdgeTouch(e)),this.dragging&&(this.width=this._drawer.offsetWidth,this._transition=!1))}_isEdgeTouch(e){var t=e.detail.x;return!this.disableEdgeSwipe&&this._swipeAllowed&&(this.rightDrawer?t>=this.offsetWidth-this.edgeSwipeSensitivity:t<=this.edgeSwipeSensitivity)}_trackX(e){if(this.dragging){var t=e.detail.dx;if(this.peeking){if(Math.abs(t)<=this.edgeSwipeSensitivity)return;this._setPeeking(!1)}this._moveDrawer(this._translateXForDeltaX(t))}}_trackEnd(e){if(this.dragging){var t=e.detail.dx>0;this._setDragging(!1),this._transition=!0,this.resetSharedPanel(),this._moveDrawer(null),this.rightDrawer?this[t?"closeDrawer":"openDrawer"]():this[t?"openDrawer":"closeDrawer"]()}}_moveDrawer(e){const t=this.scaleContent?this._main:this._drawer,i=this._transformForTranslateX(e);t.style.transform=i}_transformForTranslateX(e){if(null===e)return"";if(this.scaleContent){const t=this.rightDrawer?Math.min(0,e*(95/this.width)-95):Math.max(0,e*(95/this.width)+95),i=this.rightDrawer?Math.min(1,e*((1-.66)/this.width)+.66):Math.min(1,e*((1-.66)/-this.width)+.66);return this.hasWillChange?"scale("+i+") translateX("+t+"vw)":"scale("+i+") translate3d("+t+"vw, 0, 0)"}return this.hasWillChange?"translateX("+e+"px)":"translate3d("+e+"px, 0, 0)"}_startEdgePeek(){this.width=this._drawer.offsetWidth,this._moveDrawer(this._translateXForDeltaX(this.rightDrawer?-this.edgeSwipeSensitivity:this.edgeSwipeSensitivity)),this._setPeeking(!0)}_stopEdgePeek(){this.peeking&&(this._setPeeking(!1),this._moveDrawer(null))}_downHandler(e){!this.dragging&&this._isMainSelected&&this._isEdgeTouch(e)&&!O&&this.peek&&(this._startEdgePeek(),e.preventDefault(),O=this)}_upHandler(){this._stopEdgePeek(),this.resetSharedPanel()}resetSharedPanel(){O=null}_onTap(e){var t=e.target;t&&this.drawerToggleAttribute&&t.hasAttribute(this.drawerToggleAttribute)&&this.togglePanel()}_translateXForDeltaX(e){var t=this._isMainSelected;return this.rightDrawer?Math.max(0,t?this.width+e:e):Math.min(0,t?e-this.width:e)}_getDrawerContent(){return this._drawerContent.assignedNodes({flatten:!0}).filter(e=>e.nodeType===Node.ELEMENT_NODE)[0]}_getAutoFocusedNode(){var e=this._getDrawerContent();return this.drawerFocusSelector?e.querySelector(this.drawerFocusSelector)||e:null}_toggleFocusListener(e){"drawer"===e?this.addEventListener("focus",this._didFocus,!0):this.removeEventListener("focus",this._didFocus,!0)}_didFocus(e){var t=this._getAutoFocusedNode();if(t){var i=e.composedPath(),a=(i[0],this._getDrawerContent());-1!==i.indexOf(a)||(e.stopPropagation(),t.focus())}}}window.customElements.define(x.is,x);var E=a.b`:host {
  display: block;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  --cells-paper-scroll-header-panel__config-margin-top: 0;
   }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit; }

#mainContainer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  -webkit-overflow-scrolling: var(--cells-paper-scroll-header-panel-main-container-overflow-scrolling, touch);
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: var(--cells-paper-scroll-header-panel__config-margin-top);
  transition: margin-top 0.2s ease-in-out;
   }

#mainContainer.configurationVisible {
  margin-top: 0; }

#headerContainer {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--cells-paper-scroll-header-panel-header-container-z-index, 1);
   }

.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
   }

#headerBg {
   }

#condensedHeaderBg {
   }

#headerBg,
#condensedHeaderBg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
   }

#condensedHeaderBg {
  opacity: 0; }
`;class $ extends(C(a.a)){static get is(){return"cells-paper-scroll-header-panel"}static get properties(){return{condenses:{type:Boolean},noDissolve:{type:Boolean,attribute:"no-dissolve"},noReveal:{type:Boolean,attribute:"no-reveal"},fixed:{type:Boolean},keepCondensedHeader:{type:Boolean,attribute:"keep-condensed-header"},headerHeight:{type:Number,attribute:"header-height"},condensedHeaderHeight:{type:Number,attribute:"condensed-header-height"},scrollAwayTopbar:{type:Boolean,attribute:"scroll-away-topbar"},configurationsNumber:{type:Number,attribute:"configurations-number"},transitionStart:{type:Boolean,attribute:"transition-start"}}}constructor(){super(),this.condenses=!1,this.noDissolve=!1,this.noReveal=!1,this.fixed=!1,this.keepCondensedHeader=!1,this.condensedHeaderHeight=0,this.scrollAwayTopbar=!1,this.headerState=0,this._defaultCondsensedHeaderHeight=0,this.configurationsNumber=0,this.transitionStart=!1,this._y=0,this._prevScrollTop=0}updated(e){(e.has("headerHeight")||e.has("condensedHeaderHeight")||e.has("fixed"))&&this._setup(),e.has("condensedHeaderHeight")&&this._condensedHeaderHeightChanged(this.condensedHeaderHeight),(e.has("headerHeight")||e.has("condensedHeaderHeight"))&&this._headerHeightChanged(this.headerHeight),e.has("condenses")&&this._condensesChanged(),e.has("configurationsNumber")&&this._checkConfigurationZone(this.configurationsNumber)}connectedCallback(){super.connectedCallback(),this.addEventListener("cells-resize",this.measureHeaderHeight),this.addEventListener("track",this._swipeMain),setTimeout(()=>this.measureHeaderHeight(),100)}static get styles(){return[E,Object(r.a)("cells-paper-scroll-header-panel-shared-styles")]}render(){return a.c`
      <div id="headerContainer">
        <div class="bg-container">
          <div id="condensedHeaderBg"></div>
          <div id="headerBg"></div>
        </div>
        <slot id="headerContent" name="header-content"></slot>
      </div>
      <slot id="extraContent" name="extra-content"></slot>
      <div id="mainContainer" @scroll="${this._scroll}">
        <slot id="mainContent" name="main-content"></slot>
      </div>
    `}get header(){return this.shadowRoot.querySelector("#headerContent").assignedNodes()[0]}get content(){return this.shadowRoot.querySelector("#mainContent").assignedNodes()[0]}get scroller(){return this.shadowRoot.querySelector("#mainContainer")}get headerMaxDelta(){return this.keepCondensedHeader?this.headerMargin:this.headerHeight}get headerMargin(){return this.headerHeight-this.condensedHeaderHeight}get HEADER_STATE_EXPANDED(){return 0}get HEADER_STATE_HIDDEN(){return 1}get HEADER_STATE_CONDENSED(){return 2}get HEADER_STATE_INTERPOLATED(){return 3}_checkConfigurationZone(e){if(e&&e>0){let t=120;e>3&&e<=6?t*=2:e>6&&e<=9&&(t*=3),this.style.setProperty("--cells-paper-scroll-header-panel__config-margin-top",`-${t}px`)}}measureHeaderHeight(){let e=this.header;e&&e.offsetHeight&&0!==this.headerHeight&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.headerHeight=e.offsetHeight})})}scroll(e,t){if(t){const t=function(e,t,i,a){return-i*(e/=a)*(e-2)+t},i=Math.random(),a=200,r=Date.now(),s=this.scroller.scrollTop,n=e-s;this._currentAnimationId=i,function o(){const l=Date.now()-r;l>a?(this.scroller.scrollTop=e,this._updateScrollState(e)):this._currentAnimationId===i&&(this.scroller.scrollTop=t(l,s,n,a),requestAnimationFrame(o.bind(this)))}.call(this)}else this.scroller.scrollTop=e,this._updateScrollState(e)}condense(e){if(this.condenses&&!this.fixed&&!this.noReveal)switch(this.headerState){case 1:this.scroll(this.scroller.scrollTop-(this.headerMaxDelta-this.headerMargin),e);break;case 0:case 3:this.scroll(this.headerMargin,e)}}scrollToTop(e){this.scroll(0,e)}_headerHeightChanged(e){null!==this._defaultCondsensedHeaderHeight&&(this._defaultCondsensedHeaderHeight=Math.round(1*e/3),this.condensedHeaderHeight=this._defaultCondsensedHeaderHeight)}_condensedHeaderHeightChanged(e){e&&this._defaultCondsensedHeaderHeight!==e&&(this._defaultCondsensedHeaderHeight=null)}_condensesChanged(){this._updateScrollState(this.scroller.scrollTop),this._condenseHeader(null)}_setup(){let e=this.scroller.style;if(e.paddingTop=this.fixed?"":this.headerHeight+"px",e.top=this.fixed?this.headerHeight+"px":"",this.fixed)this._setHeaderState(0),this._transformHeader(null);else switch(this.headerState){case 1:this._transformHeader(this.headerMaxDelta);break;case 2:this._transformHeader(this.headerMargin)}}_transformHeader(e){this._translateY(this.shadowRoot.querySelector("#headerContainer"),-e),this.condenses&&this._condenseHeader(e),this.dispatchEvent(new CustomEvent("paper-header-transform",{bubbles:!0,composed:!0,detail:{y:e,height:this.headerHeight,condensedHeight:this.condensedHeaderHeight}}))}_condenseHeader(e){const t=null===e;!this.scrollAwayTopbar&&this.header&&this.header.$&&this.header.shadowRoot.querySelector("#topBar")&&this._translateY(this.header.shadowRoot.querySelector("#topBar"),t?null:Math.min(e,this.headerMargin)),this.noDissolve||(this.shadowRoot.querySelector("#headerBg").style.opacity=t?"":(this.headerMargin-e)/this.headerMargin),this._translateY(this.shadowRoot.querySelector("#headerBg"),t?null:e/2),this.noDissolve||(this.shadowRoot.querySelector("#condensedHeaderBg").style.opacity=t?"":e/this.headerMargin,this._translateY(this.shadowRoot.querySelector("#condensedHeaderBg"),t?null:e/2))}_translateY(e,t){e.style.transform=null===t?"":`translate3d(0, ${t}px, 0)`}showConfigurations(e){const t=this.shadowRoot.querySelector("#mainContainer"),i=0===this.scroller.scrollTop&&e;this.transitionStart=t.classList.contains("configurationVisible")&&!1===i,!0===this.transitionStart?document.body.addEventListener("touchmove",this._stopIt):document.body.removeEventListener("touchmove",this._stopIt),t.classList.toggle("configurationVisible",i)}_swipeMain(e){if("start"===e.detail.state)if(this.configurationsNumber>0){var t=e.detail.dy>=0;this.showConfigurations(t)}else document.body.removeEventListener("touchmove",this._stopIt)}_stopIt(e){e.preventDefault(),e.stopPropagation()}_scroll(){this._main=this._main||this.shadowRoot.querySelector("#mainContainer"),this._isConfigurationVisible=this._isConfigurationVisible||this._main.classList.contains("configurationVisible"),this.header&&!this._isConfigurationVisible&&!1===this.transitionStart&&this._doScroll()}_doScroll(){let e=this.scroller.scrollTop;this._updateScrollState(e);const t={target:this._scroller=this._scroller||this.scroller,scrollPosition:e};this.dispatchEvent(new CustomEvent("content-scroll",{bubbles:!0,cancelable:!1,composed:!0,detail:t}))}_updateScrollState(e){const t=e-this._prevScrollTop;let i=Math.max(0,this.noReveal?e:this._y+t);i>this.headerMaxDelta?(i=this.headerMaxDelta,this.keepCondensedHeader?this._setHeaderState(2):this._setHeaderState(1)):this.condenses&&e>=this.headerMargin?(i=Math.max(i,this.headerMargin),this._setHeaderState(2)):0===i?this._setHeaderState(0):this._setHeaderState(3),this.fixed||i===this._y||this._transformHeader(i),this._prevScrollTop=Math.max(e,0),this._y=i}_setHeaderState(e){this.headerState=e,this.dispatchEvent(new CustomEvent("header-state-changed",{detail:{value:this.headerState}}))}}window.customElements.define($.is,$);var L=a.b`:host {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
   }

:host([state="active"]) {
  z-index: 1;
   }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit; }

:host([has-footer]) {
   }

:host([footer-fixed]) {
  --cells-paper-scroll-header-container: {
    padding-bottom: var(--cells-template-paper-drawer-panel-footer-height, 60px);

  }
; }

:host([footer-fixed]) .app__footer,
:host([has-footer]) .app__footer {
  position: absolute;
  bottom: 0;
  background-color: var(--cells-template-paper-drawer-panel-footer-bg-color, #fff);
  height: var(--cells-template-paper-drawer-panel-footer-height, 60px);
  width: 100%;
   }

.app-container,
.app__section {
  height: 100%;
   }

.app__section {
  overflow: hidden;
  position: relative;
  z-index: var(--cells-template-paper-drawer-panel-section-zindex, 0);
  background-color: var(--cells-template-paper-drawer-panel-section-bg, #fff);
   }

.app__header {
  z-index: var(--cells-template-paper-drawer-panel-header-zindex, 0);
   }

:host[relative-main] .app__main {
  position: relative;
   }

.app__main {
  padding-top: var(--cells-template-paper-drawer-panel-main-padding-top, 0);
  padding-bottom: var(--cells-template-paper-drawer-panel-main-padding-bottom, 0);
  width: 100%;
  height: 100%;
   }

/* contain the top-margins of child elements */
.app__main:before {
  content: "";
  display: table; }

:host(.overflow-initial) {
  --cells-paper-scroll-header-panel-main-container-overflow-scrolling: auto;
   }

.app__complementary {
  height: 100%;
  width: var(--cells-template-paper-drawer-panel-complementary-width, 100%);
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: var(--cells-template-paper-drawer-panel-complementary-zindex, 0);
   }

.app__overlay {
  z-index: var(--cells-template-paper-drawer-panel-overlay-zindex, 0);
   }

.app__transactional {
  z-index: var(--cells-template-paper-drawer-panel-transactional-zindex, 0);
  position: absolute;
  bottom: 0;
   }
`;class j extends(o(a.a)){static get is(){return"cells-template-paper-drawer-panel"}static get properties(){return{rightDrawer:{type:Boolean,attribute:"right-drawer"},headerHidden:{type:Boolean,attribute:"header-hidden"},disableEdgeSwipe:{type:Boolean,attribute:"disable-edge-swipe"},disableSwipe:{type:Boolean,attribute:"disable-swipe"},edgeSwipeSensitivity:{type:Number,attribute:"edge-swipe-sensitivity"},scaleContent:{type:Boolean,attribute:"scale-content"},relativeMain:{type:Boolean,attribute:"relative-main",reflect:!0},drawerWidth:{type:String,attribute:"drawer-width"},headerFixed:{type:Boolean,attribute:"header-fixed"},disableScrollLock:{type:Boolean,attribute:"disable-scroll-lock"},disabledScrollerReset:{type:Boolean,attribute:"disabled-scroller-reset"},scrollerNode:{type:String,attribute:"scroller-node"},_scrollerNode:{type:Object},configurationsNumber:{type:Number,attribute:"configurations-number"},footerHeight:{type:Number,attribute:"footer-height"},hasFooter:{type:Boolean,attribute:"has-footer",reflect:!0},footerFixed:{type:Boolean,attribute:"footer-fixed",reflect:!0}}}constructor(){super(),this.rightDrawer=!1,this.headerHidden=!1,this.disableEdgeSwipe=!1,this.disableSwipe=!1,this.edgeSwipeSensitivity=20,this.scaleContent=!1,this.relativeMain=!1,this.drawerWidth="100%",this.headerFixed=!1,this.selected=null,this.menuOpened=!1,this.disableScrollLock=!1,this.disabledScrollerReset=!1,this.scrollerNode="app__section",this.configurationsNumber=0,this.hasFooter=!1,this.footerFixed=!1}updated(e){super.updated(e),e.has("scrollerNode")&&this._scrollerNodeChanged(this.scrollerNode),e.has("configurationsNumber")&&this.dispatchEvent(new CustomEvent("configurations-number-changed",{detail:{value:this.configurationsNumber}})),e.has("hasFooter")&&this._setupFooter(this.hasFooter)}connectedCallback(){super.connectedCallback(),this.addEventListener("overlay-opening",this._removeOverflow.bind(this)),this.addEventListener("overlay-closed",this._addOverflow.bind(this)),this.addEventListener("toggle-menu",this.toggleMenu.bind(this)),this.addEventListener("change-template-animation",this._onChangeAnimation.bind(this)),this.setAttribute("data-template","")}static get styles(){return[L,Object(r.a)("cells-template-paper-drawer-panel-shared-styles"),n]}render(){return a.c`
      <cells-app-drawer
        id="app-container"
        class="app-container"
        force-narrow
        ?right-drawer="${this.rightDrawer}"
        drawer-width="${this.drawerWidth}"
        ?disable-swipe="${this.disableSwipe}"
        ?disable-edge-swipe="${this.disableEdgeSwipe}"
        edge-swipe-sensitivity="${this.edgeSwipeSensitivity}"
        @content-scroll="${this._onContentScroll}"
        @selected-changed="${this._onSelectedChanged}"
        ?scale-content=${this.scaleContent}>
        <cells-paper-scroll-header-panel
          ?fixed="${this.headerFixed}"
          class="app__section"
          id="app__section"
          main
          slot="main"
          header-height="${this.headerHeight}"
          configurations-number="${this.configurationsNumber}">
          <header class="app__header paper-header" id="app__header" ?hidden="${this.headerHidden}" slot="header-content">
            <slot name="app__header"></slot>
          </header>
          <div class="app__main app__scroller-list" id="app__main" slot="main-content">
            <slot name="app__main"></slot>
          </div>
        </cells-paper-scroll-header-panel>

        <footer class="app__footer" id="app__footer" slot="footer">
          <slot name="app__footer"></slot>
        </footer>

        <aside drawer id="app__complementary" class="app__complementary" slot="drawer">
          <slot name="app__complementary"></slot>
        </aside>
      </cells-app-drawer>

      <div class="app__overlay" id="app__overlay">
        <slot name="app__overlay"></slot>
      </div>

      <div class="app__transactional" id="app__transactional">
        <slot select="app__transactional"></slot>
      </div>
    `}toggleMenu(){this.shadowRoot.querySelector("#app-container").togglePanel()}_setSelected(e){this.selected=e,this.dispatchEvent(new CustomEvent("selected-changed",{detail:{value:this.selected}}))}_setMenuOpened(e){this.menuOpened=e,this.menuOpened?this.setAttribute("menu-opened",""):this.removeAttribute("menu-opened"),this.dispatchEvent(new CustomEvent("menu-opened-changed",{detail:{value:this.menuOpened}}))}_onSelectedChanged(e){this._setSelected(e.detail.value),"drawer"===e.detail.value?(this._setMenuOpened(!0),this.disableScrollLock||this._removeOverflow()):(this._setMenuOpened(!1),this.disableScrollLock||this._addOverflow())}_addOverflow(){this.classList.remove("overflow-initial")}_removeOverflow(){this.classList.add("overflow-initial")}_scrollerNodeChanged(e){const t=this.shadowRoot.querySelector(`#${e}`);let i=t?t.scroller:"";this._scrollerNode=i,this.dispatchEvent(new CustomEvent("scroller-control",{bubbles:!0,composed:!0,detail:i}))}_onChangeAnimation(e){e.stopPropagation(),this.animationType=e.detail.animationType}_onContentScroll(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("template-content-scroll",{bubbles:!0,composed:!0,detail:e.detail}))}_setupFooter(e){const t=this.shadowRoot.querySelector("#app__section");e?t.addEventListener("paper-header-transform",this._onHeaderTransform.bind(this)):t.removeEventListener("paper-header-transform",this._onHeaderTransform.bind(this))}_onHeaderTransform(e){let t=e.detail.y||"";this._footer=this._footer||this.shadowRoot.querySelector("#app__footer"),this._footer.style="transform: translateY("+Math.abs(t)+"px);"}}window.customElements.define(j.is,j)},function(e,t,i){"use strict";var a=i(0),r=i(4),s=i(2);class n{constructor(e){this.type=e&&e.type||"default",this.key=e&&e.key,n.classFieldTypes(),e&&"value"in e&&(this.value=e.value)}static classFieldTypes(){this.types||(this.types={})}get value(){const{type:e}=this,t=this._key||this.key;if(this._key=void 0,e&&t)return n.types[e]&&n.types[e][t]}set value(e){let{type:t}=this;const{key:i}=this;t&&i&&(n.types[t]=n.types[t]||{},t=n.types[t],null===e?delete t[i]:t[i]=e)}get list(){const{type:e}=this;if(e){const t=n.types[e];return t?Object.keys(t).map(e=>t[e],this):[]}}byKey(e){return this._key=e,this.value}}class o extends n{}var l=a.b`:host {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  vertical-align: middle;
  fill: var(--cells-icon-fill-color, currentcolor);
  stroke: var(--cells-icon-stroke-color, none);
  width: var(--cells-icon-width, var(--cells-icon-size, var(--cells-icon-svg-width, 1.5rem)));
  height: var(--cells-icon-height, var(--cells-icon-size, var(--cells-icon-svg-height, 1.5rem)));
  @apply --cells-icon; }

:host([hidden]), [hidden] {
  display: none !important; }
`;class d extends a.a{static get is(){return"cells-icon"}static get shadyStyles(){return`\n      ${l.cssText}\n      ${Object(s.a)("cells-icon-shared-styles").cssText}\n    `}render(){return a.c`
      <style>${this.constructor.shadyStyles}</style>
      <slot></slot>
    `}static get properties(){return{icon:{type:String},theme:{type:String},src:{type:String},size:{type:Number},width:{type:Number},height:{type:Number},_isAttached:{type:Boolean}}}constructor(){super(),this._iconsetListenerCallback=this._updateIcon.bind(this),this._meta=new o({type:"iconset"})}connectedCallback(){super.connectedCallback(),this._isAttached=!0}disconnectedCallback(){super.disconnectedCallback(),this._isAttached=!1}get _DEFAULT_ICONSET(){return"icons"}updated(e){(e.has("_meta")||e.has("theme")||e.has("_isAttached"))&&this._updateIcon(),(e.has("src")||e.has("_isAttached"))&&this._srcChanged(this.src),(e.has("icon")||e.has("_isAttached"))&&this._iconChanged(this.icon),e.has("size")&&this.style.setProperty("--cells-icon-size",this.size/16+"rem"),e.has("width")&&this.style.setProperty("--cells-icon-svg-width",this.width/16+"rem"),e.has("height")&&this.style.setProperty("--cells-icon-svg-height",this.height/16+"rem")}_iconChanged(e){if(void 0!==e&&"undefined"!==e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()}}_srcChanged(){this._updateIcon()}_usesIconset(){return this.icon||!this.src}_updateIcon(){this._usesIconset()?(this._img&&this._img.parentNode&&this.removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),window.removeEventListener("iron-iconset-added",this._iconsetListenerCallback)):window.addEventListener("iron-iconset-added",this._iconsetListenerCallback))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,this.appendChild(this._img))}}customElements.define(d.is,d);var c=i(9);i(24);class h{get langPath(){return this.langFolderMapping?this.langFolderMapping[this.lang]:this.lang}get lang(){return this._lang}get url(){return this._url}set url(e){e&&"/"!==e.substr(-1)&&(e+="/"),e!==this._url&&(this._url=e,this.fetchLanguage())}get files(){return this._files}set files(e){e!==this._files&&(this._files=e,this.fetchLanguage())}constructor(e){this.locales={},this._files=e.files,this.disabled=e.disabled,this._url=e.url||"locales/",this._lang=e.lang||document.documentElement.lang,this.langFolderMapping=e.langFolderMapping,this._translationsRequestsPromises=[],this.noCache=e.noCache,this.unFlattened=e.unFlattened}_onLoadLanguage(e,t,i){this.locales[t]=this.locales[t]||{},this.locales[t][i]=e,this._refreshNodes()}_fetch(e,t="GET"){const i=new XMLHttpRequest;return new Promise((a,r)=>{i.onreadystatechange=()=>{4===i.readyState&&(i.status>=200&&i.status<300?a(i):r({status:i.status,statusText:i.statusText}))},i.open(t,e,!0),i.send()}).catch(()=>{})}fetchLanguage(){if(this.disabled||!this.lang||!this.url)return;let e;const t=this.noCache?`?v=${Date.now()}`:"";if(this.files)e=this.files.map(e=>`${this.url}${this.langPath}/${e}.json${t}`);else{e=[`${this.url}${this.langPath}.json${t}`]}const i=this.lang,a=Promise.all(e.map(e=>this._fetch(e).then(e=>JSON.parse(e.responseText)).then(t=>this._onLoadLanguage(t,i,e)))).then(()=>{const e=new CustomEvent("i18n-language-ready",{detail:{language:i},bubbles:!0,composed:!0});document.dispatchEvent(e)}).catch(()=>{});return this._translationsRequestsPromises.push(a),a}get translationsRequests(){return Promise.all(this._translationsRequestsPromises)}get currentLocale(){return!!this.locales&&this.locales[this.lang]}set lang(e){if(e!==this._lang){document.documentElement.lang=e,this._lang=e,this.fetchLanguage();const t=new CustomEvent("i18n-lang-changed",{detail:{language:e},bubbles:!0,composed:!0});document.dispatchEvent(t)}}getTranslation(e){return this.currentLocale&&e?this._getMessage(this.currentLocale,e):null}_getMessage(e,t){for(const i in e)if(e[i]&&this._get(e[i],t))return this._get(e[i],t);return null}_get(e,t){return this.unFlattened?this._getUnflattenedKey(e,t):e[t]}_getUnflattenedKey(e,t){try{return t.split(".").reduce((e,t)=>e[t],e)}catch(e){return}}_refreshNodes(){Shadow.querySelectorAll("[has-i18n]").forEach(e=>{e.updateTranslation()})}}const u=Object(c.a)(e=>class extends e{constructor(){super(),this.hasI18n=!0}static get properties(){return{hasI18n:{type:Boolean,reflect:!0,attribute:"has-i18n"}}}doTranslation(e,t,i){return this._doTranslation(e,t,i)}t(...e){return this._doTranslation(...e)}updateTranslation(){this.requestUpdate()}_doTranslation(e,t,i){const a=I18nMsg.getTranslation(e)||t;return a?this._transform(a,i||{}):e}getMsg(e,t){return this.getAsyncTranslation(e,t)}getAsyncTranslation(e,t){return I18nMsg.translationsRequests.then(()=>this.getTranslation(e,t))}getTranslation(e,t){const i=I18nMsg.getTranslation(e);return i?this._transform(i,t):null}_transform(e,t){let i=e;Array.isArray(e)?i=e.join(""):e.message&&(i=e.message);const a=this._parseInterpolation(t);return a?this._interpolateMsg(i,a):i}_parseInterpolation(e){if(""!==e){try{"string"==typeof e&&(e=JSON.parse(decodeURI(e)))}catch(t){e=""}return e}}_interpolateMsg(e,t){if(!(e=this._pluralize(e,t))||"object"==typeof e)return"";const i=e.indexOf("${")>-1?/\${(.*?)}/g:/\{\{(.*?)}}/g;return e.replace(i,(e,i)=>i in t?t[i]:this[i])}_pluralize(e,t){let i=e;return void 0!==t.count&&e.one&&e.other&&(i=1===t.count?e.one:e.other),i}});!function(e){e.I18nMsg=e.I18nMsg||{},e.I18nMsg instanceof h||(e.I18nMsg=new h(e.I18nMsg),e.I18nMsg.fetchLanguage())}(window);var p=a.b`:host {
  display: block;
  box-sizing: border-box;
  @apply --bbva-header-main; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit; }

.header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-top: var(--bbva-header-main-padding-top, 0);
  min-height: var(--bbva-header-main-min-height, calc(var(--bbva-global-spacer, 0.5rem) * 6));
  background-color: var(--bbva-header-main-bg-color, var(--bbva-navy, #072146));
  font-family: inherit;
  color: var(--bbva-header-main-color, var(--bbva-white, #FFF));
  @apply --bbva-header-main-header; }
  .header-main .text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    position: absolute;
    bottom: 0;
    top: var(--bbva-header-main-text-top, var(--bbva-header-main-padding-top, 0));
    left: 0;
    width: 100%;
    height: var(--bbva-header-main-min-height, calc(var(--bbva-global-spacer, 0.5rem) * 6));
    margin: 0;
    padding: 0 var(--bbva-header-main-text-padding-horizontal, calc(var(--bbva-global-spacer, 0.5rem) * 6));
    text-align: center;
    font-size: var(--bbva-header-main-text-font-size, 16px);
    line-height: var(--bbva-header-main-text-line-height, calc(var(--bbva-global-spacer, 0.5rem) * 6));
    font-weight: 400; }
    .header-main .text.full-padding {
      --bbva-header-main-text-padding-horizontal: calc(var(--bbva-global-spacer, 0.5rem) * 12); }
    .header-main .text.image {
      display: flex;
      justify-content: center; }
  .header-main .header-icons {
    display: flex; }
  .header-main .icon {
    display: block;
    position: relative;
    border: none;
    background: none;
    width: var(--bbva-header-main-min-height, calc(var(--bbva-global-spacer, 0.5rem) * 6));
    min-height: var(--bbva-header-main-min-height, calc(var(--bbva-global-spacer, 0.5rem) * 6));
    color: inherit;
    @apply --bbva-header-main-icon; }
    .header-main .icon:active, .header-main .icon:focus {
      @apply --cells-global-focus; }

/** @hostclass .modal blue background */
:host(.modal) {
  --bbva-header-main-bg-color: var(--bbva-core-blue, #004481); }

/** @hostclass .modal-three-level white background */
:host(.modal-three-level) {
  --bbva-header-main-bg-color: var(--bbva-white, #FFF);
  --bbva-header-main-color: var(--bbva-600, #121212); }

/** @hostclass .process green background */
:host(.process) {
  --bbva-header-main-bg-color: var(--bbva-dark-green, #277A3E); }

/** @hostclass .process gold background */
:host(.sign) {
  --bbva-header-main-bg-color: var(--bbva-dark-gold, #8E7022); }

/** @hostclass .transparent transparent background */
:host(.transparent) {
  --bbva-header-main-bg-color: transparent; }
`;class m extends(u(a.a)){static get is(){return"bbva-header-main"}static get properties(){return{accessibilityTextIconLeft1:{type:String,attribute:"accessibility-text-icon-left1"},accessibilityTextIconLeft2:{type:String,attribute:"accessibility-text-icon-left2"},accessibilityTextIconRight1:{type:String,attribute:"accessibility-text-icon-right1"},accessibilityTextIconRight2:{type:String,attribute:"accessibility-text-icon-right2"},iconLeft1:{type:String,attribute:"icon-left1"},iconLeft2:{type:String,attribute:"icon-left2"},iconRight1:{type:String,attribute:"icon-right1"},iconRight2:{type:String,attribute:"icon-right2"},iconSize:{type:Number,attribute:"icon-size"},image:{type:String},text:{type:String}}}get _fullPadding(){return this.iconLeft2||this.iconRight2?"full-padding":""}get _hasImage(){return this.image?"image":""}constructor(){super(),this.iconSize=20}static get shadyStyles(){return`\n      ${p.cssText}\n      ${Object(s.a)("bbva-header-main-shared-styles")}\n    `}render(){const{_fullPadding:e,_hasImage:t,text:i,image:s,accessibilityTextIconLeft1:n,accessibilityTextIconLeft2:o,accessibilityTextIconRight1:l,accessibilityTextIconRight2:d,iconLeft1:c,iconLeft2:h,iconRight1:u,iconRight2:p,iconSize:m}=this;return a.c`
      <style>
        ${this.constructor.shadyStyles}
      </style>
      <header class="header-main">
        <h1 class="text ${e} ${t}" id="headding">
          <span id="text">${this.t(i)}</span>
          <img src="${Object(r.a)(s)}" alt="" ?hidden="${!s}" id="image" />
        </h1>

        <div class="header-icons">
          <button
            class="icon"
            aria-label="${Object(r.a)(n)}"
            ?hidden="${!c}"
            @click="${()=>this._headerIconClick("left1")}"
            id="btn-left1"
          >
            <cells-icon icon="${Object(r.a)(c)}" size="${m}"></cells-icon>
          </button>
          <button
            class="icon"
            aria-label="${Object(r.a)(o)}"
            ?hidden="${!h}"
            @click="${()=>this._headerIconClick("left2")}"
            id="btn-left2"
          >
            <cells-icon icon="${Object(r.a)(h)}" size="${m}"></cells-icon>
          </button>
        </div>

        <div class="header-icons">
          <button
            class="icon"
            aria-label="${Object(r.a)(d)}"
            ?hidden="${!p}"
            @click="${()=>this._headerIconClick("right2")}"
            id="btn-right2"
          >
            <cells-icon icon="${Object(r.a)(p)}" size="${m}"></cells-icon>
          </button>

          <button
            class="icon"
            aria-label="${Object(r.a)(l)}"
            ?hidden="${!u}"
            @click="${()=>this._headerIconClick("right1")}"
            id="btn-right1"
          >
            <cells-icon icon="${Object(r.a)(u)}" size="${m}"></cells-icon>
          </button>
        </div>
      </header>
    `}_headerIconClick(e){this.dispatchEvent(new CustomEvent(`header-icon-${e}-click`,{bubbles:!0,composed:!0}))}}customElements.define(m.is,m)},,function(e,t){{window.Shadow=window.Shadow||{},Element.prototype.matches||(Element.prototype.matches=Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector);const e=document.body&&(document.body.createShadowRoot||document.body.attachShadow);function i(e){return e.filter((function(e){return e&&e.trim().length>0}))}function a(e){var t=[];if(e)for(var i=0;i<e.length;i++)t.push(e.item(i));return t}function r(e,t){var i=e.slice(0);return t.forEach((function(e){i.indexOf(e)<0&&i.push(e)})),i}function s(e){return[].concat(function(e){return e.shadowRoot?a(e.shadowRoot.children):[]}(e)).concat(function(e){return a(e.children)}(e))}function n(e,t){for(var i=s(e),a=null,r=0;r<i.length&&!(a=i[r].matches(t)?i[r]:n(i[r],t));r++);return a}function o(e,t){var i=s(e),a=[];return i.forEach((function(e){e.matches(t)&&a.push(e),a=a.concat(o(e,t))})),a}window.Shadow.querySelector=function(t,a){return function(e,t){for(var i=t||document.documentElement,a=0;a<e.length&&(i=n(i,e[a]));a++);return i}(i(e?t.split(" "):[t]),a)},window.Shadow.querySelectorAll=function(t,a){return function(e,t){for(var i=[t||document.documentElement],a=0;a<e.length;a++){for(var s=[],n=0;n<i.length;n++)s=r(s,o(i[n],e[a]));i=s}return i}(i(e?t.split(" "):[t]),a)}}},function(e,t,i){"use strict";var a=i(2),r=i(0);Object(a.b)(r.b`
  /* Light */
  @font-face {
    font-family: 'Benton Sans';
    src: url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-Light.woff2)
        format('woff2'),
      url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-Light.woff)
        format('woff');
    font-style: normal;
    font-weight: 300;
    font-display: auto;
  }

  /* Book */
  @font-face {
    font-family: 'Benton Sans';
    src: url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-Book.woff2)
        format('woff2'),
      url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-Book.woff)
        format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: auto;
  }

  /* Book Italic */
  @font-face {
    font-family: 'Benton Sans';
    src: url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-BookItalic.woff2)
        format('woff2'),
      url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-BookItalic.woff)
        format('woff');
    font-style: italic;
    font-weight: 400;
    font-display: auto;
  }

  /* Medium */
  @font-face {
    font-family: 'Benton Sans';
    src: url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-Medium.woff2)
        format('woff2'),
      url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-Medium.woff)
        format('woff');
    font-style: normal;
    font-weight: 500;
    font-display: auto;
  }

  /* Medium Italic */
  @font-face {
    font-family: 'Benton Sans';
    src: url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-MediumItalic.woff2)
        format('woff2'),
      url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-MediumItalic.woff)
        format('woff');
    font-style: italic;
    font-weight: 500;
    font-display: auto;
  }

  /* Regular */
  @font-face {
    font-family: 'Benton Sans';
    src: url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-Regular.woff2)
        format('woff2'),
      url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-Regular.woff)
        format('woff');
    font-style: normal;
    font-weight: 600;
    font-display: auto;
  }

  /* Bold */
  @font-face {
    font-family: 'Benton Sans';
    src: url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-Bold.woff2)
        format('woff2'),
      url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/benton/BentonSansBBVA-Bold.woff)
        format('woff');
    font-style: normal;
    font-weight: 700;
    font-display: auto;
  }

  /* Tiempos */
  @font-face {
    font-family: 'Tiempos';
    src: url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/tiempos/TiemposText-Regular.woff2)
      format('woff2');
    font-style: normal;
    font-weight: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Tiempos';
    src: url(https://bbva-files.s3.amazonaws.com/cells/assets/coronita/fonts/tiempos/TiemposText-RegularItalic.woff2)
      format('woff2');
    font-style: italic;
    font-weight: normal;
    font-display: auto;
  }
`);var s=i(1);Object(a.b)(r.b`
  html {
    /* Core (BBVA Core Blue)
    /* ---------------------------------------------- */
    --colorsPrimaryCore: ${Object(r.d)(s.d.primaryCore)};
    --colorsPrimaryCoreDarkened: ${Object(r.d)(s.d.primaryCoreDarkened)};
    --colorsPrimaryCoreLightened: ${Object(r.d)(s.d.primaryCoreLightened)};
    --colorsPrimaryCoreDark: ${Object(r.d)(s.d.primaryCoreDark)};
    --colorsPrimaryCoreLight: ${Object(r.d)(s.d.primaryCoreLight)};

    /* Medium (BBVA Medium Blue)
    /* ---------------------------------------------- */
    --colorsPrimaryMedium: ${Object(r.d)(s.d.primaryMedium)};
    --colorsPrimaryMediumLight: ${Object(r.d)(s.d.primaryMediumLight)};

    /* Subdued (BBVA Sky Blue)
    /* ---------------------------------------------- */
    --colorsPrimarySubdued: ${Object(r.d)(s.d.primarySubdued)};
    --colorsPrimarySubduedLight: ${Object(r.d)(s.d.primarySubduedLight)};

    /* Variant (BBVA Aqua Blue)
    /* ---------------------------------------------- */
    --colorsPrimaryVariant: ${Object(r.d)(s.d.primaryVariant)};
    --colorsPrimaryVariantDark: ${Object(r.d)(s.d.primaryVariantDark)};
    --colorsPrimaryVariantMedium: ${Object(r.d)(s.d.primaryVariantMedium)};
    --colorsPrimaryVariantLight: ${Object(r.d)(s.d.primaryVariantLight)};
    --colorsPrimaryVariantLightened: ${Object(r.d)(s.d.primaryVariantLightened)};

    /* Secondary (BBVA Secondary)
    /* ---------------------------------------------- */
    --colorsSecondary600: ${Object(r.d)(s.d.secondary600)};
    --colorsSecondary500: ${Object(r.d)(s.d.secondary500)};
    --colorsSecondary400: ${Object(r.d)(s.d.secondary400)};
    --colorsSecondary300: ${Object(r.d)(s.d.secondary300)};
    --colorsSecondary200: ${Object(r.d)(s.d.secondary200)};
    --colorsSecondary100: ${Object(r.d)(s.d.secondary100)};

    /* Tertiary (BBVA Tertiary)
    /* ---------------------------------------------- */
    /* Type 1 (BBVA Red)
    /* ---------------------------------------------- */
    --colorsTertiaryType1: ${Object(r.d)(s.d.tertiaryType1)};
    --colorsTertiaryType1Dark: ${Object(r.d)(s.d.tertiaryType1Dark)};
    --colorsTertiaryType1Medium: ${Object(r.d)(s.d.tertiaryType1Medium)};
    --colorsTertiaryType1Light: ${Object(r.d)(s.d.tertiaryType1Light)};
    --colorsTertiaryType1Lightened: ${Object(r.d)(s.d.tertiaryType1Lightened)};

    /* Type 2 (BBVA Orange)
    /* ---------------------------------------------- */
    --colorsTertiaryType2: ${Object(r.d)(s.d.tertiaryType2)};
    --colorsTertiaryType2Dark: ${Object(r.d)(s.d.tertiaryType2Dark)};
    --colorsTertiaryType2Medium: ${Object(r.d)(s.d.tertiaryType2Medium)};
    --colorsTertiaryType2Light: ${Object(r.d)(s.d.tertiaryType2Light)};
    --colorsTertiaryType2Lightened: ${Object(r.d)(s.d.tertiaryType2Lightened)};

    /* Type 3 (BBVA Yellow)
    /* ---------------------------------------------- */
    --colorsTertiaryType3: ${Object(r.d)(s.d.tertiaryType3)};
    --colorsTertiaryType3Dark: ${Object(r.d)(s.d.tertiaryType3Dark)};
    --colorsTertiaryType3Medium: ${Object(r.d)(s.d.tertiaryType3Medium)};
    --colorsTertiaryType3Light: ${Object(r.d)(s.d.tertiaryType3Light)};
    --colorsTertiaryType3Lightened: ${Object(r.d)(s.d.tertiaryType3Lightened)};

    /* Type 4 (BBVA Sand)
    /* ---------------------------------------------- */
    --colorsTertiaryType4: ${Object(r.d)(s.d.tertiaryType4)};
    --colorsTertiaryType4Dark: ${Object(r.d)(s.d.tertiaryType4Dark)};
    --colorsTertiaryType4Medium: ${Object(r.d)(s.d.tertiaryType4Medium)};
    --colorsTertiaryType4Light: ${Object(r.d)(s.d.tertiaryType4Light)};
    --colorsTertiaryType4Lightened: ${Object(r.d)(s.d.tertiaryType4Lightened)};

    /* Type 5 (BBVA Coral)
    /* ---------------------------------------------- */
    --colorsTertiaryType5: ${Object(r.d)(s.d.tertiaryType5)};
    --colorsTertiaryType5Dark: ${Object(r.d)(s.d.tertiaryType5Dark)};
    --colorsTertiaryType5Medium: ${Object(r.d)(s.d.tertiaryType5Medium)};
    --colorsTertiaryType5Light: ${Object(r.d)(s.d.tertiaryType5Light)};
    --colorsTertiaryType5Lightened: ${Object(r.d)(s.d.tertiaryType5Lightened)};

    /* Type 6 (BBVA Green)
    /* ---------------------------------------------- */
    --colorsTertiaryType6: ${Object(r.d)(s.d.tertiaryType6)};
    --colorsTertiaryType6Dark: ${Object(r.d)(s.d.tertiaryType6Dark)};
    --colorsTertiaryType6Medium: ${Object(r.d)(s.d.tertiaryType6Medium)};
    --colorsTertiaryType6Light: ${Object(r.d)(s.d.tertiaryType6Light)};
    --colorsTertiaryType6Lightened: ${Object(r.d)(s.d.tertiaryType6Lightened)};

    /* Type 7 (BBVA Pink)
    /* ---------------------------------------------- */
    --colorsTertiaryType7: ${Object(r.d)(s.d.tertiaryType7)};
    --colorsTertiaryType7Dark: ${Object(r.d)(s.d.tertiaryType7Dark)};
    --colorsTertiaryType7Medium: ${Object(r.d)(s.d.tertiaryType7Medium)};
    --colorsTertiaryType7Light: ${Object(r.d)(s.d.tertiaryType7Light)};
    --colorsTertiaryType7Lightened: ${Object(r.d)(s.d.tertiaryType7Lightened)};

    /* Type 8 (BBVA Purple)
    /* ---------------------------------------------- */
    --colorsTertiaryType8: ${Object(r.d)(s.d.tertiaryType8)};
    --colorsTertiaryType8Dark: ${Object(r.d)(s.d.tertiaryType8Dark)};
    --colorsTertiaryType8Medium: ${Object(r.d)(s.d.tertiaryType8Medium)};
    --colorsTertiaryType8Light: ${Object(r.d)(s.d.tertiaryType8Light)};
    --colorsTertiaryType8Lightened: ${Object(r.d)(s.d.tertiaryType8Lightened)};
  }
`),Object(a.b)(r.b`
  html {
    --backgroundColorsLight: ${Object(r.d)(s.a.light)};
    --backgroundColorsLight100: ${Object(r.d)(s.a.light100)};
    --backgroundColorsDark: ${Object(r.d)(s.a.dark)};
    --backgroundColorsDark100: ${Object(r.d)(s.a.dark100)};
    --backgroundColorsDark200: ${Object(r.d)(s.a.dark200)};
    --backgroundColorsDark300: ${Object(r.d)(s.a.dark300)};
    --backgroundColorsDark400: ${Object(r.d)(s.a.dark400)};
  }
`),Object(a.b)(r.b`
  html {
    --typographyType3XLarge: ${Object(r.d)(s.j.type3XLarge)};
    --typographyType2XLarge: ${Object(r.d)(s.j.type2XLarge)};
    --typographyTypeXLarge: ${Object(r.d)(s.j.typeXLarge)};
    --typographyTypeLarge: ${Object(r.d)(s.j.typeLarge)};
    --typographyTypeMedium: ${Object(r.d)(s.j.typeMedium)};
    --typographyTypeSmall: ${Object(r.d)(s.j.typeSmall)};
    --typographyTypeXSmall: ${Object(r.d)(s.j.typeXSmall)};
    --typographyType2XSmall: ${Object(r.d)(s.j.type2XSmall)};
    --typographyType3XSmall: ${Object(r.d)(s.j.type3XSmall)};
    --typographyType4XSmall: ${Object(r.d)(s.j.type4XSmall)};
    --typographyTypeQuote: ${Object(r.d)(s.j.typeQuote)};
    --typographyTypeLink: ${Object(r.d)(s.j.typeLink)};
  }
`),Object(a.b)(r.b`
  html {
    --lineHeightType3XLarge: ${Object(r.d)(s.h.type3XLarge)};
    --lineHeightType2XLarge: ${Object(r.d)(s.h.type2XLarge)};
    --lineHeightTypeXLarge: ${Object(r.d)(s.h.typeXLarge)};
    --lineHeightTypeLarge: ${Object(r.d)(s.h.typeLarge)};
    --lineHeightTypeMedium: ${Object(r.d)(s.h.typeMedium)};
    --lineHeightTypeSmall: ${Object(r.d)(s.h.typeSmall)};
    --lineHeightTypeXSmall: ${Object(r.d)(s.h.typeXSmall)};
    --lineHeightType2XSmall: ${Object(r.d)(s.h.type2XSmall)};
    --lineHeightType3XSmall: ${Object(r.d)(s.h.type3XSmall)};
    --lineHeightType4XSmall: ${Object(r.d)(s.h.type4XSmall)};
    --lineHeightTypeQuote: ${Object(r.d)(s.h.typeQuote)};
    --lineHeightTypeLink: ${Object(r.d)(s.h.typeLink)};
  }
`),Object(a.b)(r.b`
  html {
    --gridSpacer: ${Object(r.d)(s.g.spacer)};
  }
`),Object(a.b)(r.b`
  html {
    --borderRadiusSmall: ${Object(r.d)(s.b.small)};
    --borderRadiusMedium: ${Object(r.d)(s.b.medium)};
    --borderRadiusLarge: ${Object(r.d)(s.b.large)};
  }
`),Object(a.b)(r.b`
  html {
    --fontFacePrimaryFontFamily: ${Object(r.d)(s.e.fontFamily)};

    --fontFacePrimaryLightFontWeight: ${Object(r.d)(s.e.light.fontWeight)};
    --fontFacePrimaryLightFontStyle: ${Object(r.d)(s.e.light.fontStyle)};

    --fontFacePrimaryBookFontWeight: ${Object(r.d)(s.e.book.fontWeight)};
    --fontFacePrimaryBookFontStyle: ${Object(r.d)(s.e.book.fontStyle)};

    --fontFacePrimaryBookItalicFontWeight: ${Object(r.d)(s.e.bookItalic.fontWeight)};
    --fontFacePrimaryBookItalicFontStyle: ${Object(r.d)(s.e.bookItalic.fontStyle)};

    --fontFacePrimaryMediumFontWeight: ${Object(r.d)(s.e.medium.fontWeight)};
    --fontFacePrimaryMediumFontStyle: ${Object(r.d)(s.e.medium.fontStyle)};

    --fontFacePrimaryMediumItalicFontWeight: ${Object(r.d)(s.e.mediumItalic.fontWeight)};
    --fontFacePrimaryMediumItalicFontStyle: ${Object(r.d)(s.e.mediumItalic.fontStyle)};

    --fontFacePrimaryRegularFontWeight: ${Object(r.d)(s.e.regular.fontWeight)};
    --fontFacePrimaryRegularFontStyle: ${Object(r.d)(s.e.regular.fontStyle)};

    --fontFacePrimaryBoldFontWeight: ${Object(r.d)(s.e.bold.fontWeight)};
    --fontFacePrimaryBoldFontStyle: ${Object(r.d)(s.e.bold.fontStyle)};
  }
`),Object(a.b)(r.b`
  html {
    --fontFaceSecondaryFontFamily: ${Object(r.d)(s.f.fontFamily)};

    --fontFaceSecondaryRegularFontWeight: ${Object(r.d)(s.f.regular.fontWeight)};
    --fontFaceSecondaryRegularFontStyle: ${Object(r.d)(s.f.regular.fontStyle)};

    --fontFaceSecondaryRegularItalicFontWeight: ${Object(r.d)(s.f.regularItalic.fontWeight)};
    --fontFaceSecondaryRegularItalicFontStyle: ${Object(r.d)(s.f.regularItalic.fontStyle)};
  }
`),Object(a.b)(r.b`
  html {
    --boxShadowType1: ${Object(r.d)(s.c.type1)};
    --boxShadowType2: ${Object(r.d)(s.c.type2)};
  }
`),Object(a.b)(r.b`
  html {
    --statusColorsSuccess: ${Object(r.d)(s.i.success)};
    --statusColorsSuccessDark: ${Object(r.d)(s.i.successDark)};
    --statusColorsWarning: ${Object(r.d)(s.i.warning)};
    --statusColorsWarningDark: ${Object(r.d)(s.i.warningDark)};
    --statusColorsError: ${Object(r.d)(s.i.error)};
    --statusColorsErrorDark: ${Object(r.d)(s.i.errorDark)};
    --statusColorsPending: ${Object(r.d)(s.i.pending)};
    --statusColorsOff: ${Object(r.d)(s.i.off)};
    --statusColorsFinance: ${Object(r.d)(s.i.finance)};
  }
`),Object(a.b)(r.b`
  html {
    font-family: 'Benton Sans', sans-serif;
  }
`)},function(e,t,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let a,r=null,s=window.HTMLImports&&window.HTMLImports.whenReady||null;function n(e){requestAnimationFrame((function(){s?s(e):(r||(r=new Promise(e=>{a=e}),"complete"===document.readyState?a():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&a()})),r.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const o="__shadyCSSCachedStyle";let l=null,d=null;class c{constructor(){this.customStyles=[],this.enqueued=!1,n(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&d&&(this.enqueued=!0,n(d))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[o])return e[o];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[o])continue;const a=this.getStyleForCustomStyle(i);if(a){const e=a.__appliedElement||a;l&&l(e),i[o]=e}}return e}}c.prototype.addCustomStyle=c.prototype.addCustomStyle,c.prototype.getStyleForCustomStyle=c.prototype.getStyleForCustomStyle,c.prototype.processStyles=c.prototype.processStyles,Object.defineProperties(c.prototype,{transformCallback:{get:()=>l,set(e){l=e}},validateCallback:{get:()=>d,set(e){let t=!1;d||(t=!0),d=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function h(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const u=!(window.ShadyDOM&&window.ShadyDOM.inUse);let p,m;function b(e){p=(!e||!e.shimcssproperties)&&(u||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(m=window.ShadyCSS.cssBuild);const f=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?p=window.ShadyCSS.nativeCss:window.ShadyCSS?(b(window.ShadyCSS),window.ShadyCSS=void 0):b(window.WebComponents&&window.WebComponents.flags);const y=p,g=new c;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){g.processStyles(),h(e,t)},styleElement(e){g.processStyles()},styleDocument(e){g.processStyles(),h(document.body,e)},getComputedStyleValue:(e,t)=>function(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}(e,t),flushCustomStyles(){},nativeCss:y,nativeShadow:u,cssBuild:m,disableRuntime:f}),window.ShadyCSS.CustomStyleInterface=g},,function(e,t,i){"use strict";var a=i(0),r=i(2),s=a.b`:host {
  --bbva-spinner-primary-gradient: var(--bbva-spinner-primary-gradient-color, #2dcccd);
  --bbva-spinner-secondary-gradient: var(--bbva-spinner-secondary-gradient-color, #004481);
  --bbva-spinner-background: var(--bbva-spinner-background-color,var(--bbva-spinner-secondary-gradient));
  box-sizing: border-box;
  pointer-events: none;
  display: flex; }

:host([hidden]),
[hidden] {
  display: none !important; }

*,
*::before,
*::after {
  box-sizing: inherit; }

:host([paused]) .Filter-2,
:host([paused]) .cls-6,
:host([paused]) .Gradient,
:host([paused]) .All_Grouped {
  animation-play-state: paused; }

figure {
  margin: var(--bbva-spinner-center, auto);
  width: var(--bbva-spinner-size, 3rem);
  position: relative; }

svg {
  display: block; }

.Filter-2,
.cls-6,
.Gradient,
.All_Grouped {
  animation-duration: 1.6s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: both; }

.Filter-2 {
  animation-name: a1_d; }

.cls-6 {
  animation-name: Gradient_t, Gradient_fo, Gradient_f; }

.Gradient {
  animation-name: a0_t; }

.All_Grouped {
  animation-name: All_Grouped_t; }

.Gradient-0 stop:nth-child(1) {
  stop-color: var(--bbva-spinner-primary-gradient); }

.Gradient-0 stop:nth-child(2) {
  stop-color: var(--bbva-spinner-secondary-gradient); }

.Gradient-1 stop:nth-child(1) {
  stop-color: var(--bbva-spinner-primary-gradient); }

.Gradient-1 stop:nth-child(2) {
  stop-color: var(--bbva-spinner-secondary-gradient); }

.Gradient-2 stop:nth-child(1) {
  stop-color: var(--bbva-spinner-primary-gradient); }

.Gradient-2 stop:nth-child(2) {
  stop-color: var(--bbva-spinner-secondary-gradient); }

.Gradient-3 stop:nth-child(1) {
  stop-color: var(--bbva-spinner-primary-gradient); }

.Gradient-3 stop:nth-child(2) {
  stop-color: var(--bbva-spinner-primary-gradient); }

.cls-2 {
  fill: var(--bbva-spinner-background); }

@keyframes All_Grouped_t {
  0% {
    transform: translate(200px, 200px) rotate(0deg) translate(-200px, -200px);
    animation-timing-function: cubic-bezier(0.75124, 0.00386, 0.25186, 1.00696); }
  100% {
    transform: translate(200px, 200px) rotate(359.99457deg) translate(-200px, -200px); } }

@keyframes a0_t {
  0% {
    transform: scale(1, 0.7);
    animation-timing-function: cubic-bezier(0.68442, 0, 0.58, 1); }
  50% {
    transform: scale(1.4, 0.8);
    animation-timing-function: cubic-bezier(0.42, 0, 0.30322, 1); }
  100% {
    transform: scale(1, 0.7);
    animation-timing-function: cubic-bezier(0.68442, 0, 0.58, 1); } }

@keyframes Gradient_t {
  0% {
    transform: translate(0px, 0px);
    animation-timing-function: cubic-bezier(0.42, 0, 0.25, 1); }
  50% {
    transform: translate(-60px, 0px);
    animation-timing-function: cubic-bezier(0.74752, 0, 0.58, 1); }
  100% {
    transform: translate(0px, 0px); } }

@keyframes Gradient_fo {
  0% {
    fill-opacity: 0.6;
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); }
  50% {
    fill-opacity: 0.8;
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); }
  100% {
    fill-opacity: 0.6; } }

@keyframes Gradient_f {
  0% {
    fill: var(--gradient-0);
    animation-timing-function: steps(1); }
  50% {
    fill: var(--gradient-1);
    animation-timing-function: steps(1); }
  100% {
    fill: var(--gradient-2);
    animation-timing-function: steps(1); } }

@keyframes a1_d {
  0% {
    d: path("M-0.66667,0C-0.66667,0,50.5,85,167,85C281.5,85,334,0,334,0C334,0,281.5,93,167,93C50.5,93,-0.66667,0,-0.66667,0Z");
    animation-timing-function: cubic-bezier(0.87624, 0, 0.62376, 1); }
  50% {
    d: path("M-0.66667,0C-0.66667,0,41,68,167,68C290.5,68,334,0,334,0C334,0,281.425,113,166.925,113C50.4255,113,-0.66667,0,-0.66667,0Z");
    animation-timing-function: cubic-bezier(0.37376, 0, 0.12499, 1); }
  100% {
    d: path("M-0.66667,0C-0.66667,0,50.5,85,167,85C281.5,85,334,0,334,0C334,0,281.5,93,167,93C50.5,93,-0.66667,0,-0.66667,0Z");
    animation-timing-function: cubic-bezier(0.62005, 0, 0.38614, 1); } }
`;class n extends a.a{static get is(){return"bbva-spinner"}static get properties(){return{size:{type:Number},paused:{type:Boolean,reflect:!0},withMask:{type:Boolean,attribute:"with-mask",reflect:!0}}}constructor(){super(),this.paused=!1,this.withMask=!1,this._uniqueId=`${String(Math.floor(Math.random()*Date.now()))}`}firstUpdated(){this.style.setProperty("--gradient-0",`url(#Gradient-0_${this._uniqueId})`),this.style.setProperty("--gradient-1",`url(#Gradient-1_${this._uniqueId})`),this.style.setProperty("--gradient-2",`url(#Gradient-2_${this._uniqueId})`)}get _computeClipPath(){return this.withMask?`url(#ClipPath-1_${this._uniqueId})`:""}get _computeSize(){return"number"==typeof this.size?`width: ${this.size}px;`:""}static get styles(){return[s,Object(r.a)("bbva-spinner-shared-styles")]}render(){return a.c`
      <figure style="${this._computeSize}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" id="${this._uniqueId}">
          <defs>
            <filter id="Filter-0_${this._uniqueId}" color-interpolation-filters="sRGB">
              <feComponentTransfer>
                <feFuncR type="linear" slope="1.2" />
                <feFuncG type="linear" slope="1.2" />
                <feFuncB type="linear" slope="1.2" />
              </feComponentTransfer>
            </filter>
            <filter id="Filter-1_${this._uniqueId}" color-interpolation-filters="sRGB">
              <feComponentTransfer>
                <feFuncR type="linear" slope="2" />
                <feFuncG type="linear" slope="2" />
                <feFuncB type="linear" slope="2" />
              </feComponentTransfer>
            </filter>
            <filter id="Filter-2_${this._uniqueId}" color-interpolation-filters="sRGB">
              <feGaussianBlur stdDeviation="20" />
              <feComponentTransfer>
                <feFuncR type="linear" slope="2" />
                <feFuncG type="linear" slope="2" />
                <feFuncB type="linear" slope="2" />
              </feComponentTransfer>
            </filter>
            <radialGradient
              id="Gradient-0_${this._uniqueId}"
              class="Gradient-0"
              cx="199"
              cy="92"
              r="271.854"
              fx="197.801"
              fy="-27.9043"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.143991" stop-color="#2dcccd" />
              <stop offset="1" stop-color="#004481" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="Gradient-1_${this._uniqueId}"
              class="Gradient-1"
              cx="199"
              cy="92"
              r="271.854"
              fx="197.801"
              fy="-27.9043"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.133991" stop-color="#2dcccd" />
              <stop offset="1" stop-color="#004481" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="Gradient-2_${this._uniqueId}"
              class="Gradient-2"
              cx="199"
              cy="92"
              r="271.854"
              fx="197.801"
              fy="-27.9043"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.153991" stop-color="#2dcccd" />
              <stop offset="1" stop-color="#004481" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="Gradient-3_${this._uniqueId}"
              class="Gradient-3"
              cx="196.5"
              cy="0"
              r="100"
              fx="196.5"
              fy="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#2dcccd" />
              <stop offset="1" stop-color="#2dcccd" stop-opacity="0" />
            </radialGradient>
            <clipPath id="clip-path_${this._uniqueId}">
              <ellipse
                class="cls-1"
                rx="197.5"
                ry="197.5"
                fill="none"
                transform="translate(0,0) translate(200,200)"
              />
            </clipPath>
            <mask id="Mask-1_${this._uniqueId}" style="mask-type: luminance;">
              <path
                d="M-0.66667,0C-0.66667,0,50.5,85,167,85C281.5,85,334,0,334,0C334,0,281.5,93,167,93C50.5,93,-0.66667,0,-0.66667,0Z"
                fill="#4afcfd"
                stroke-linecap="square"
                stroke="none"
                filter="url(#Filter-2_${this._uniqueId})"
                class="Filter-2"
                transform="translate(-166.5,104.5)"
                style="mix-blend-mode: normal;"
              />
            </mask>
            <clipPath id="ClipPath-1_${this._uniqueId}">
              <path
                class="st0"
                d="M400,0L0,0L0,400L400,400ZM45.9596,200C45.9596,115.061,115.061,45.9596,200,45.9596C284.939,45.9596,354.04,115.061,354.04,200C354.04,284.939,284.939,354.04,200,354.04C115.061,354.04,45.9596,284.939,45.9596,200Z"
                fill="#00ff16"
                fill-rule="evenodd"
              />
            </clipPath>
          </defs>
          <g
            class="All_Grouped"
            clip-path="${this._computeClipPath}"
            transform="translate(200,200) translate(-200,-200)"
          >
            <ellipse
              class="cls-2"
              rx="197.5"
              ry="197.5"
              fill="#004481"
              transform="translate(0,0) translate(200,200)"
            />
            <path
              class="cls-1"
              d="M196.5,0C87.9723,0,0,87.9723,0,196.5C0,305.028,87.9723,393,196.5,393C305.028,393,393,305.028,393,196.5C393,87.9723,305.028,0,196.5,0Z"
              fill="none"
              opacity="0.16"
              stroke="#f2f2f2"
              stroke-width="2"
              transform="translate(3.5,3.5)"
            />
            <g class="cls-5" clip-path="url(#clip-path_${this._uniqueId})">
              <g class="Gradient">
                <path
                  class="cls-6"
                  d="M400,0L400,400L0,400L0,0Z"
                  fill="url(#Gradient-0_${this._uniqueId})"
                  opacity="1"
                  filter="url(#Filter-0_${this._uniqueId})"
                  fill-opacity="0.6"
                  fill-rule="nonzero"
                  stroke-opacity="1"
                  transform="translate(0,0) scale(1,0.7)"
                />
              </g>
            </g>
            <ellipse
              rx="197.5"
              ry="197.5"
              fill="#4efeff"
              stroke="none"
              fill-rule="evenodd"
              filter="url(#Filter-1_${this._uniqueId})"
              mask="url(#Mask-1_${this._uniqueId})"
              transform="translate(199.5,199.5) rotate(180)
            translate(-0.5,-0.5)"
              style="mix-blend-mode: normal;"
            />
            <path
              class="cls-1"
              d="M196.5,0C87.9723,0,0,87.9723,0,196.5C0,305.028,87.9723,393,196.5,393C305.028,393,393,305.028,393,196.5C393,87.9723,305.028,0,196.5,0Z"
              fill="none"
              opacity="0.8"
              stroke="url(#Gradient-3_${this._uniqueId})"
              stroke-width="2"
              transform="translate(3.5,3.5)"
            />
          </g>
        </svg>
      </figure>
    `}}customElements.define(n.is,n)}]]);