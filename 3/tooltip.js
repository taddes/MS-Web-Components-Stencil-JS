class Tooltip extends HTMLElement {
  constructor() {
    super()
    console.log('Success!')
  }
}

customElements.define('tad-tooltip', Tooltip);