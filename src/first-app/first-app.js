// import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html, LitElement } from '@polymer/lit-element'

import '@polymer/paper-checkbox'

import './dangy'

class FirstApp extends LitElement {


  constructor () {
    super ()
    this.prop1 = 'first-app'
  }

  static get properties() {
    return {
      prop1: String
    }
  }

  _render({prop1}) {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello ${ prop1 }!</h2>
      <input type="text" value="${prop1}" on-keydown="${() => {this.prop1 = e.target.value}}" />
      <paper-checkbox></paper-checkbox>
      <dang-app>222</dang-app>

      <button on-click="${this.dangg.bind(this)}"> </button>
    `;
  }

}

window.customElements.define('first-app', FirstApp);
