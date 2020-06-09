import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-viskhan-news-sidebar",
  styleUrl: "s-viskhan-news-sidebar.css",
  shadow: false,
  scoped: true,
})
export class SViskhanNewsSidebar implements ComponentInterface {
  @Prop() sidebar: any;

  render() {
    return (
      <div>
        <div class="cont-2 d-flex">
          <div class="cont-2-1">
            <img src={this.sidebar.image} class="image" alt="" />
          </div>
          <div class="cont-2-2">
            <div class="text-1">{this.sidebar.titl}</div>
            <div class="text-2">
              <b>{this.sidebar.text}</b>
            </div>
            <div class="text-3">
              <b>{this.sidebar.read}</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
