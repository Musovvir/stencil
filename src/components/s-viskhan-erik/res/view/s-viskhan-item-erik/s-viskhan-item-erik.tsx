import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-viskhan-item-erik",
  styleUrl: "s-viskhan-item-erik.css",
  shadow: false,
  scoped: true,
})
export class SViskhanItemErik implements ComponentInterface {
  @Prop() forErik: any;

  render() {
    return (
      <div>
        <div class="cont-0">
          <div class="cont-11">
            <div>
              <img src={this.forErik.image} class="image" alt="" />
            </div>
            <div class="text">
              <div class="text-1">{this.forErik.name}</div>
              <div class="text-2">{this.forErik.profession}</div>
            </div>
          </div>
          <div class="cont-11-1">
            <div class="me">{this.forErik.subtext}</div>
            <div class="icon">
              <div class="icon-1">
                <i class="fa fa-facebook-square" aria-hidden="true" />
              </div>
              <div class="icon-1">
                <i class="fa fa-twitter-square" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
