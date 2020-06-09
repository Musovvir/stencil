import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-viskhan-item-blog",
  styleUrl: "s-viskhan-item-blog.css",
  shadow: false,
  scoped: true,
})
export class SViskhanItemBlog implements ComponentInterface {
  @Prop() forNewBlogPosts: any;

  render() {
    return (
      <div class="col-md-12">
        <div class="cont-3">
          <img src={this.forNewBlogPosts.image} class="image" alt="" />
          <span class="text-1">
            <b>{this.forNewBlogPosts.titl}</b>
          </span>
          <div class="text-2">
            <b>{this.forNewBlogPosts.text}</b>
          </div>
          <div class="text-3">
            <b>{this.forNewBlogPosts.read}</b>
          </div>
        </div>
      </div>
    );
  }
}
