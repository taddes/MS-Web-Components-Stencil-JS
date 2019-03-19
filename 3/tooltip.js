class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = 'Default Tooltip text'

  }

  connectedCallback() {
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text')
    } 
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = '(?)'
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this))
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this))
    this.style.position = 'relative'
    this.appendChild(tooltipIcon);
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = this._tooltipText;
    this._tooltipContainer.style.color = 'white';
    this._tooltipContainer.style.backgroundColor = 'black'
    this._tooltipContainer.style.position = 'absolute';
    this._tooltipContainer.style.zIndex = '10';
    this.appendChild(this._tooltipContainer);

  }

  _hideTooltip() {
    this.removeChild(this._tooltipContainer)
  }
}

customElements.define('tad-tooltip', Tooltip);