class Tooltip extends HTMLElement {
  constructor() {
    super();
    const tooltipIcon = doucument.createElement('span');
    tooltipIcon.textContent = '(?)'
    this.appendChild(tooltipIcon);
  }
}

customElements.define('tad-tooltip', Tooltip);