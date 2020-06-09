import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-viskhan-item-events",
  styleUrl: "s-viskhan-item-events.css",
  shadow: false,
  scoped: true,
})
export class SViskhanItemEvents implements ComponentInterface {
  @Prop() forEvents: any;

  render() {
    return (
      <div class="col-md-12">
        <div class="cont-5">
          <img src={this.forEvents.image} class="image" />
          <div class="text-1">
            <b>{this.forEvents.titl}</b>
          </div>
          <div class="text-2">
            <b>{this.forEvents.text}</b>
          </div>
          <div class="text-3">
            <b>{this.forEvents.read}</b>
          </div>
        </div>
      </div>
    );
  }
}
