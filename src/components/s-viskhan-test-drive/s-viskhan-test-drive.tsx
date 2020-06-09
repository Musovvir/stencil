import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-viskhan-test-drive",
  styleUrl: "s-viskhan-test-drive.css",
  shadow: false,
  scoped: true,
})
export class SViskhanTestDrive implements ComponentInterface {
  @Prop() forDrive: any;

  render() {
    const getDrive = this.forDrive.map((item) => {
      return <s-viskhan-item-drive forDrive={item} />;
    });
    return (
      <div>
        <div class="container">
          <div class="row">
            {getDrive}
          </div>
        </div>
      </div>
    );
  }
}
