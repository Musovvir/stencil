import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-viskhan-item-drive",
  styleUrl: "s-viskhan-item-drive.css",
  shadow: false,
  scoped: true,
})
export class SViskhanItemDrive implements ComponentInterface {
  @Prop() forDrive: any;

  render() {
    return (
      <div class="row justify-content-between">
        <div class="col-md-6">
          <div class="cont-6">
            <div class="cont-6-1">{this.forDrive.titl}</div>
            <div class="cont-6-2">
              {this.forDrive.text}
              <span class="see">{this.forDrive.minitext}</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cont">
            <div class="cont-6-0">
              <span class="enter">{this.forDrive.subtext}</span>
              <button type="button" class="cont-btn">
                {this.forDrive.button}
              </button>
            </div>
            <div class="cont-6-0-1 text-center">
              <span class="material-icons icon-1">spa</span>
              <span class="material-icons icon-1">waves</span>
              <span class="material-icons icon-1">class</span>
              <span class="material-icons icon-1">dns</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
