import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';
import '@bbva-web-components/bbva-button-default';
import '../../components/noticias.js'

class HomePage extends CellsPage {
  static get is() {
    return 'home-page';
  }

  constructor() {
    super();
    this.headerTitle = 'NOTICIAS';
  }

  static get properties() {
    return {
      headerTitle: { type: String }
    };
  }

  static get styles() {
    return css`

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
    `;
  }


  _handleClick() {
    this.publish('from-channel', { from: 'home' });
    this.navigate('another', { title: 'This is the result page' });
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
        <noticias-component></noticias-component>
        <div class="center">
          <bbva-button-default @click="${this._handleClick}">&rarr;</bbva-button-default>
        </div>
        </div>
     </cells-template-paper-drawer-panel>`;
  }

}

window.customElements.define(HomePage.is, HomePage);