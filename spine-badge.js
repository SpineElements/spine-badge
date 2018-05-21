/*
  ~ Copyright (c) 2000-2017 TeamDev Ltd. All rights reserved.
  ~ TeamDev PROPRIETARY and CONFIDENTIAL.
  ~ Use is subject to license terms.
  */
import '@polymer/polymer/polymer-legacy.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@polymer/paper-styles/shadow.js';

/**
`spine-badge` represents a small badge-like piece of UI with a customizable content and style.
It is displayed as an inline block alongside its adjacent content.

Example:
```
<spine-badge>5</spine-badge>
<spine-badge>A longer text</spine-badge>
```

### Styling

You can use the regular CSS attributes like color, background, margin, font, border, and
others to customize its appearance.

Besides, it can be customized with the following custom properties:

Custom property              | Description                                  | Default
-----------------------------|----------------------------------------------|----------
`--spine-badge-size`         | The height and a minimum width for the badge | `21px`
`--primary-background-color` | The default background for the badge         | `#ffffff`
`--primary-color`            | The default text color for the badge         | `rgba(0, 0, 0, 0.87)`


### Differences From the `<paper-badge>` Element

`<spine-badge>` has a purpose similar to the `<paper-badge>` element, but provides
some of the capabilities not supported by `<paper-badge>`:
- Specifying arbitrary content with child nodes.
- Automatic horizontal resizing according to its content. As such, it has only the
  `--spine-badge-size` custom property for customizing its height (with minimum width)
  instead of `--paper-badge-height` and `--paper-badge-width`, and is not displayed as an ellipse
  when its width is greater than its height.

Besides, if you're migrating from `<paper-badge>`, be aware of the following issues
with the `<spine-badge>` element:
- It doesn't support a <paper-badge>'s capability of being displayed on the top-right
  corner of another element.
- It doesn't have a `label` and `icon` properties, but the same effect can be achieved by placing
  an appropriate content as its child nodes.
- It uses the regular CSS `background`, `opacity`, `color` CSS properties instead of
  `--paper-badge-background`, `--paper-badge-opacity`, and `--paper-badge-text-color` custom
  properties for styling the respective aspects of its appearance.
- It has a different appearance by default, but it can be tuned with CSS to match
  the `<paper-badge>` element (see the "Styling" section above).

@demo demo/index.html

TODO:2017-04-20:dmitry.pikhulya: we might need to make this element compatible with paper-badge
                                 (and work as its extended version)
*/
class SpineBadge extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
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
        @apply --shadow-elevation-2dp;
      }
    </style>

    <slot></slot>
`;
  }

  static get is() { return 'spine-badge'; }
}

window.customElements.define(SpineBadge.is, SpineBadge);