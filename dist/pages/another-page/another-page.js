import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-button-default';
import '@bbva-web-components/bbva-header-main';
import '../../components/noticias-result.js'
import '../../components/noticias.js'
import '../../components/articulos.js'

class AnotherPage extends CellsPage {
  constructor() {
    super();
    this.headerTitle = 'FILTRAR LOS ARTÍCULOS'
  }

  static get is() {
    return 'another-page';
  }

  static get properties() {
    return {
      headerTitle: { type: String },
      fromPage: { type: String },
      params: { type: String }
    };
  }


  firstUpdated() {
    super.firstUpdated();
    this._handleConnections();
  }

  _computeHeaderTitle(params) {
    const pageTitle = params.title || '';

    return decodeURI(pageTitle).replace(/-/g, ' ');
  }

  _handleConnections() {
    this.subscribe('from-channel', data => {
      const { from } = data;
      this.fromPage = from;
    });
  }

  _handleClick() {
    this.navigate('home');
  }

  static get styles() {
    return css`
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
    `;
  }

  render() {
    return html`
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
      </cells-template-paper-drawer-panel>`;
  }
}

window.customElements.define(AnotherPage.is, AnotherPage);
