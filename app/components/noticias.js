import { LitElement, html, css } from 'lit-element';
import '@bbva-web-components/bbva-spinner';


function articleTemplate(article, toggleReadStatus) {
    return html`
      <h3>${article.title}</h3>
      <p>${article.description}</p>
    `;
}

export class Noticias extends LitElement {
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
             color:  #002171;
             font-family: arial;
         }

        
         li{
         font-family: arial;  
        list-style: none;
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

        const articles = this.articles.filter(article => {
            if (!this.filter) {
                return true;
            }
            return this.filter === 'read' ? article.read : !article.read;
        });

        return html`
        
        <h2 class="tittle">Articulos</h2>
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
}

customElements.define('noticias-component', Noticias);
