import {html, LitElement} from '@polymer/lit-element'
import { installRouter } from 'pwa-helpers'
import './pages/dang-app'
import './pages/test-app'
// import '/pages/*'

class MainApp extends LitElement {

  constructor () {
    super() 
    this.page = 'No page'
  }

  static get properties () {
    return {
      page: String
    }
  }

  _render({ page }) {
    return html`
    <style>
      .page > * {
        display: none;
      }

      [view=dang-app2] dang-app2,
      [view=test-app] test-app {
        display:block;
      }
      @media (min-width:801px) { 
        .Hello {
          font-size: 60px;
        }
      }
      @media (max-width:800px) { 
        .Hello {
          font-size: 15px;
        }
      }
    </style>
    <div>
      <div class='Hello'>
        Main app : ${ page }

      </div>
      <a href="/test-app">test app</a>
      <a href="/dang-app2">dang app</a>

      <div view$="${page}" class="page">
        <dang-app2></dang-app2>
        <test-app></test-app>
      </div>
    </div>`
  }


  ready () {
    super.ready()
    installRouter((location) => {
      this.page = location.pathname.split('/')[1]
    })
  }
}



window.customElements.define('main-app', MainApp)