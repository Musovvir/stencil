import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-viskhan-item-pop",
  styleUrl: "s-viskhan-item-pop.css",
  shadow: false,
  scoped: true,
})
export class SViskhanItemPop implements ComponentInterface {
  @Prop() forPopular: any;

  render() {
    return (
      <div class="cont-8 d-flex">
        <div class="cont-8-1">
          <img src={this.forPopular.image} class="image" />
        </div>
        <div class="cont-8-2">
          <div class="text-1">
            <b>{this.forPopular.titl}</b>
          </div>
          <div class="text-2">
            <b>{this.forPopular.text}</b>
          </div>
          <div class="text-3">
            <b>{this.forPopular.read}</b>
          </div>
        </div>
      </div>
    );
  }
}
