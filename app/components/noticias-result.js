import { LitElement, html, css } from 'lit-element';
import '@bbva-web-components/bbva-button-default';


function articleTemplate(article, toggleReadStatus) {
    return html`
      <h3>${article.title} (${article.read ? 'Readed' : 'Unreaded'})</h3>
      <p>${article.description}</p>
      <bbva-button-default @click=${toggleReadStatus}>
        Mark ${article.read ? 'unread' : 'read'}
      </bbva-button-default>
    `;
}

export class NoticiasResult extends LitElement {
    static get properties() {
        return {
            loading: { type: Boolean },
            articles: { type: Array },
            filter: { type: String },
        };
    }
    static get styles() {
        return css`
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
        `;
    }


    connectedCallback() {
        super.connectedCallback();

        if (!this.articles) {
            this.fetchArticles();
        }
    }

    async fetchArticles() {
        this.loading = true;
        const response = await fetch(
            'https://newsapi.org/v2/everything?q=web%20development&apiKey=3155b6a1e89b4d34ade82c9dacc6f56a',
        );
        const jsonResponse = await response.json();
        this.articles = jsonResponse.articles;
        this.loading = false;
    }

    render() {
        if (this.loading) {
            return html`
          <bbva-spinner></bbva-spinner>
        `;
        }

        const totalRead = this.articles.filter(a => a.read).length;
        const totalUnread = this.articles.length - totalRead;
        const articles = this.articles.filter(article => {
            if (!this.filter) {
                return true;
            }
            return this.filter === 'read' ? article.read : !article.read;
        });

        return html`
        
        <h2 class="tittle">Articulos</h2>

        <div class="wrapper-buttons">
        <p>${totalRead} read  ${totalUnread} unread</p>
        <bbva-button-default @click=${this._filterNone}>Filter none</bbva-button-default>
        <bbva-button-default @click=${this._filterRead}>Filter read</bbva-button-default>
        <bbva-button-default @click=${this._filterUnread}>Filter unread</bbva-button-default> 
        </div>

        <ul>
          ${articles.map(
            article => html`
              <li>
                ${articleTemplate(article, () => this.toggleReadStatus(article))}
              </li>
            `,
        )}
        </ul>
      `;
    }

    toggleReadStatus(articleToUpdate) {
        this.articles = this.articles.map(article => {
            return article === articleToUpdate ? { ...article, read: !article.read } : article;
        });
    }

    _filterNone() {
        this.filter = null;
    }

    _filterRead() {
        this.filter = 'read';
    }

    _filterUnread() {
        this.filter = 'unread';
    }
}

customElements.define('noticias-result', NoticiasResult);
