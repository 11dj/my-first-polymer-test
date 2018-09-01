import {html, LitElement} from '@polymer/lit-element'

export class dang extends LitElement {
  _render ( ){
    return html`
    <div>
      Dang Sudlor
    </div>
    `
  }
}

window.customElements.define('dang-app', dang)