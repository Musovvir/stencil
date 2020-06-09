import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-viskhan-second",
  styleUrl: "s-viskhan-second.css",
  shadow: false,
  scoped: true,
})
export class SViskhanSecond implements ComponentInterface {
  @Prop() forContinue: any;

  render() {
    const getContinue = this.forContinue.map((item) => {
      return <s-viskhan-continue forContinue={item} />;
    });

    return (
      <div>
        <div class="container">
          <div class="cont-1">{getContinue}</div>
        </div>
      </div>
    );
  }
}
