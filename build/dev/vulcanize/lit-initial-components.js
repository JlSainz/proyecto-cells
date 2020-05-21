!function(e){function t(t){for(var n,o,l=t[0],c=t[1],s=t[2],u=0,d=[];u<l.length;u++)o=l[u],i[o]&&d.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(p&&p(t);d.length;)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var c=r[l];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={1:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=i[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=function(e){return o.p+""+({0:"lit-components"}[e]||e)+".js"}(e),a=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,r[1](o)}i[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./",o.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=c;a.push([27,2]),r()}({20:function(e,t,r){"use strict";var n=r(0);r(28);class i extends n.a{static get properties(){return{loading:{type:Boolean},articles:{type:Array},filter:{type:String}}}static get styles(){return n.b`
         .tittle{
             text-align: center;
             color:  #002171;
             font-family: arial;
         }

        
         li{
         font-family: arial;  
        list-style: none;
         }
        `}connectedCallback(){super.connectedCallback(),this.articles||this.fetchArticles()}async fetchArticles(){this.loading=!0;const e=await fetch("https://newsapi.org/v2/everything?q=web%20development&apiKey=3155b6a1e89b4d34ade82c9dacc6f56a"),t=await e.json();this.articles=t.articles,this.loading=!1}render(){if(this.loading)return n.c`
          <bbva-spinner></bbva-spinner>
        `;const e=this.articles.filter(e=>!this.filter||("read"===this.filter?e.read:!e.read));return n.c`
        
        <h2 class="tittle">Articulos</h2>
        <ul>
          ${e.map(e=>n.c`
              <li>
                ${function(e,t){return n.c`
      <h3>${e.title}</h3>
      <p>${e.description}</p>
    `}(e)}
              </li>
            `)}
        </ul>
      `}}customElements.define("noticias-component",i)},23:function(e,t){e.exports={}},27:function(e,t,r){"use strict";r.r(t);r(23),r(26),r(25);var n=r(18),i=r(0);r(21),r(22),r(19),r(20);class a extends n.a{static get is(){return"home-page"}constructor(){super(),this.headerTitle="NOTICIAS"}static get properties(){return{headerTitle:{type:String}}}static get styles(){return i.b`

      bbva-header-main {
        --bbva-header-main-bg-color: #002171;
        font-family: arial;
      }

      // cells-template-paper-drawer-panel {
      //   background-color: #5472d3;
      // }

      .container {
        padding-bottom: 20px;
        margin: 20px 20px 40px;
        // background-color:#0d47a1 ;
        position: relative;
      }

      .container h2 {
        padding-top: 20%;
        color: white;
        text-align: center;
        font-family: arial;
      }

      .container:after {
        content: '';
        display: block;
        clear: both;
      }

      .prev-next-button {
        position: absolute;
        top: 50%;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: white;
        border: none;
        font-size: 30px;
        color: #0d47a1;
        transform: translateY(-50%);
      }

      .previous { left: 10px; }
      .next { right: 10px; }
      .center {
        text-align:center;
        margin-top: 20px;
      }
    `}_handleClick(){this.publish("from-channel",{from:"home"}),this.navigate("another",{title:"This is the result page"})}render(){return i.c`
      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
          <bbva-header-main
            text=${this.headerTitle}>
          </bbva-header-main>
        </div>

        <div slot="app__main" class="container">
        <noticias-component></noticias-component>
        <div class="center">
          <bbva-button-default @click="${this._handleClick}">&rarr;</bbva-button-default>
        </div>
        </div>
     </cells-template-paper-drawer-panel>`}}window.customElements.define(a.is,a),r.e(0).then(r.bind(null,29))}});