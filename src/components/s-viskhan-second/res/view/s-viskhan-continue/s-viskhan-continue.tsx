import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-viskhan-continue",
  styleUrl: "s-viskhan-continue.css",
  shadow: false,
  scoped: true,
})
export class SViskhanContinue implements ComponentInterface {
  @Prop() forContinue: any;

  render() {
    return (
        <div class="row">
          <div class="col-md-7">
            <div class="cont-3">
              <div class="image">
                <img src={this.forContinue.image} class="image" />
              </div>
              <div class="text-1">
                <b>{this.forContinue.titl}</b>
              </div>
              <div class="text-2">{this.forContinue.text}</div>
              <div class="cont-btn">
                <button class="bt">{this.forContinue.button}</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
