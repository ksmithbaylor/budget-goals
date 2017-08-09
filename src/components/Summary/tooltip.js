// @flow

import { injectGlobal } from 'styled-components';

window.tooltipText = '';
window.tooltip = null;

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  .goalTooltip {
    position: absolute;
    font-size: 16px;
    background-color: white;
    padding: 0.5em;
    box-shadow: 0px 0px 55px -12px rgba(0,0,0,1);
  }
`;

window.onSummaryMouseMove = function onSummaryMouseMove(event) {
  if (!window.tooltip) {
    window.tooltip = document.createElement('div');
    window.tooltip.classList.add('goalTooltip');
    document.body.appendChild(window.tooltip);
  }

  window.tooltip.style.top = event.pageY + 20 + 'px';
  window.tooltip.style.left = event.pageX + 20 + 'px';
  window.tooltip.textContent = window.tooltipText;

  if (window.tooltipText) {
    window.tooltip.style.visibility = 'initial';
  } else {
    window.tooltip.style.visibility = 'hidden';
  }
};
