import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-viskhan-new-blog-posts",
  styleUrl: "s-viskhan-new-blog-posts.css",
  shadow: false,
  scoped: true,
})
export class SViskhanNewBlogPosts implements ComponentInterface {
  @Prop() forNewBlogPosts: any;

  render() {
    const getNewBlogPosts = this.forNewBlogPosts.map((item) => {
      return <s-viskhan-item-blog forNewBlogPosts={item} />;
    });

    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="new">New Blog Posts</div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 d-flex">
            {getNewBlogPosts}
          </div>
        </div>
      </div>
    );
  }
}
