(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(t,e,a){"use strict";a.r(e);var r=a(18),i=a(0);a(21),a(19),a(22);class n extends i.a{static get properties(){return{loading:{type:Boolean},articles:{type:Array},filter:{type:String}}}static get styles(){return i.b`
         .tittle{
             text-align: center;
             color:  black;
             font-family: arial;
         }

         li{
            font-family: arial;  
           list-style: none;
            }

        .wrapper-buttons{
           text-align: center;
           margin-bottom: 30px;
        } 
        
        .float-right{
            float: right;
            margin-top: -127px;
        }
        `}connectedCallback(){super.connectedCallback(),this.articles||this.fetchArticles()}async fetchArticles(){this.loading=!0;const t=await fetch("https://newsapi.org/v2/everything?q=web%20development&apiKey=3155b6a1e89b4d34ade82c9dacc6f56a"),e=await t.json();this.articles=e.articles,this.loading=!1}render(){if(this.loading)return i.c`
          <bbva-spinner></bbva-spinner>
        `;const t=this.articles.filter(t=>t.read).length,e=this.articles.length-t,a=this.articles.filter(t=>!this.filter||("read"===this.filter?t.read:!t.read));return i.c`
        
        <h2 class="tittle">Articulos</h2>

        <div class="wrapper-buttons">
        <p>${t} read  ${e} unread</p>
        <bbva-button-default @click=${this._filterNone}>Filter none</bbva-button-default>
        <bbva-button-default @click=${this._filterRead}>Filter read</bbva-button-default>
        <bbva-button-default @click=${this._filterUnread}>Filter unread</bbva-button-default> 
        </div>

        <ul>
          ${a.map(t=>i.c`
              <li>
                ${function(t,e){return i.c`
      <h3>${t.title} (${t.read?"Readed":"Unreaded"})</h3>
      <p>${t.description}</p>
      <bbva-button-default @click=${e}>
        Mark as ${t.read?"unread":"read"}
      </bbva-button-default>
    `}(t,()=>this.toggleReadStatus(t))}
              </li>
            `)}
        </ul>
      `}toggleReadStatus(t){this.articles=this.articles.map(e=>e===t?{...e,read:!e.read}:e)}_filterNone(){this.filter=null}_filterRead(){this.filter="read"}_filterUnread(){this.filter="unread"}}customElements.define("noticias-result",n);a(20);class s extends i.a{static get properties(){return{title:{type:String},description:{type:String},read:{type:Boolean}}}render(){return i.c`
        <h3>${this.title} (${this.read?"read":"unread"})</h3>
        <p>${this.description}</p>
        <button @click=${this._toggleReadStatus}>
          Mark as ${this.read?"unread":"read"}
        </button>
      `}_toggleReadStatus(){this.dispatchEvent(new CustomEvent("toggle-read-status"))}}customElements.define("articulos-component",s);class l extends r.a{constructor(){super(),this.headerTitle="FILTRAR LOS ARTÍCULOS"}static get is(){return"another-page"}static get properties(){return{headerTitle:{type:String},fromPage:{type:String},params:{type:String}}}firstUpdated(){super.firstUpdated(),this._handleConnections()}_computeHeaderTitle(t){const e=t.title||"";return decodeURI(e).replace(/-/g," ")}_handleConnections(){this.subscribe("from-channel",t=>{const{from:e}=t;this.fromPage=e})}_handleClick(){this.navigate("home")}static get styles(){return i.b`
      bbva-header-main {
        --bbva-header-main-bg-color: #002171;
        font-family: arial;
      }

      // cells-template-paper-drawer-panel {
      //   background-color: #ff5c8d;
      // }

      .container {
        padding-bottom: 20px;
        margin: 20px 20px 40px;
        // background-color:#d81b60 ;
        position: relative;
      }

      .container h2 {
        padding-top: 20%;
        color: white;
        text-align: center;
        font-family: sans-serif;
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
        color: #a00037;
        transform: translateY(-50%);
      }

      .previous { left: 10px; }
      .next { right: 10px; }
      .center {
        text-align:center;
        margin-top: 20px;
      }
    `}render(){return i.c`
      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
          <bbva-header-main
            text=${this.headerTitle}>
          </bbva-header-main>
        </div>

        <div slot="app__main" class="container">
          <div class="set-padding blue">
          <noticias-result></noticias-result>
          </div>
          <div class="center">
          <bbva-button-default class="center"  @click="${this._handleClick}">&larr;</bbva-button-default>
          </div>
        </div>
      </cells-template-paper-drawer-panel>`}}window.customElements.define(l.is,l)}}]);