import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-viskhan-new-blog",
  styleUrl: "s-viskhan-new-blog.css",
  shadow: false,
  scoped: true,
})
export class SViskhanNewBlog implements ComponentInterface {
  @Prop() blog: any;

  render() {
    return (
      <div>
        <div class="cont-1">
          <img src={this.blog.image} class="phone" alt="" />
          <span class="text-1">
            <b>{this.blog.subtitle}</b>
          </span>
          <div class="text-2">
            <b>{this.blog.titl}</b>
          </div>
          <div class="text-3">{this.blog.text}</div>
          <button class="cont-btn">{this.blog.button}</button>
        </div>
      </div>
    );
  }
}
