import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-viskhan-erik",
  styleUrl: "s-viskhan-erik.css",
  shadow: false,
  scoped: true,
})
export class SViskhanErik implements ComponentInterface {
  @Prop() forErik: any;

  render() {
    const getErik = this.forErik.map((item) => {
      return <s-viskhan-item-erik forErik={item} />;
    });
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <hr />
            {getErik}
          </div>
        </div>
      </div>
    );
  }
}
