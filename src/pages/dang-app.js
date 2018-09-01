import {html, LitElement} from '@polymer/lit-element'

class DangApp extends LitElement {
  
  _render() {
    return html`
    <div>Dang app</div>`
  }
}

window.customElements.define('dang-app2', DangApp)