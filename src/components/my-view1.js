/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element'
import { PageViewElement } from './page-view-element.js'

/**
 * @polymer
 * @extends HTMLElement
 */
class MyView1 extends PageViewElement {
  _render() {
    return html`
      <style>
        ag-grid {
          padding: 12px;
          border: solid gainsboro 1px;
          font-size: 16px;
          height: 540px;
          width: auto;
        }
      </style>
      <link rel="stylesheet" href="../../node_modules/ag-grid/dist/styles/ag-grid.css">
      <link rel="stylesheet" href="../../node_modules/ag-grid/dist/styles/ag-theme-balham.css">
      <ag-grid id="agGrid" class="ag-theme-balham"></ag-grid>
    `
  }
  _firstRendered() {
    let columnDefs = [{ headerName: 'Make', field: 'make' }, { headerName: 'Model', field: 'model' }, { headerName: 'Price', field: 'price' }]

    const rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ]

    const gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData,
      onGridReady: function () {
        gridOptions.api.sizeColumnsToFit()
      },
    }
    const agGrid = this.shadowRoot.getElementById('agGrid')
    agGrid.gridOptions = gridOptions
  }
}

window.customElements.define('my-view1', MyView1)
