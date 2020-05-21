import { LitElement, html } from 'lit-element';

export class Articulos extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            description: { type: String },
            read: { type: Boolean },
        };
    }

    render() {
        return html`
        <h3>${this.title} (${this.read ? 'read' : 'unread'})</h3>
        <p>${this.description}</p>
        <button @click=${this._toggleReadStatus}>
          Mark as ${this.read ? 'unread' : 'read'}
        </button>
      `;
    }

    _toggleReadStatus() {
        this.dispatchEvent(new CustomEvent('toggle-read-status'));
    }
}

customElements.define('articulos-component', Articulos);
