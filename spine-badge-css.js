import {html} from '@polymer/lit-element/lit-element.js';
export const style = html`<style>:host {
  display: inline-block;
  --spine-badge-size: 21px;
  min-width: var(--spine-badge-size);
  height: var(--spine-badge-size);
  border-radius: calc(var(--spine-badge-size) / 2);
  padding: 0 6px;
  box-sizing: border-box;
  line-height: var(--spine-badge-size);
  white-space: nowrap;
  font-weight: 400;
  font-size: 11px;
  background: var(--primary-background-color, #ffffff);
  color: var(--primary-color, rgba(0, 0, 0, 0.87));
  text-align: center;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }
</style>`;
