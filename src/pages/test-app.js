import {html, LitElement} from '@polymer/lit-element'

class TestApp extends LitElement {
  
  _render() {
    return html`
    <div>Test app</div>`
  }
}

window.customElements.define('test-app', TestApp)