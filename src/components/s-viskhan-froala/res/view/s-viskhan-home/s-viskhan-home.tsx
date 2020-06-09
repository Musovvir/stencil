import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "s-viskhan-home",
  styleUrl: "s-viskhan-home.css",
  shadow: false,
  scoped: true,
})
export class SViskhanHome implements ComponentInterface {
  render() {
    return (
      <div class="home">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="text">
                <div class="text-1 text-left">
                  <span class="hm">Home</span> / Editor
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="text-2 text-right">
                <div class="all">All</div>
                <div class="all">Editor</div>
                <div class="all">Design</div>
                <div class="all">Social</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
