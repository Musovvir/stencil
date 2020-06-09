import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 's-viskhan-announce',
  styleUrl: 's-viskhan-announce.css',
  shadow: true,
})
export class SViskhanAnnounce implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
