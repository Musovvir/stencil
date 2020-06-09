import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-viskhan-news-post",
  styleUrl: "s-viskhan-news-post.css",
  shadow: false,
  scoped: true,
})
export class SViskhanNewsPost implements ComponentInterface {
  @Prop() forSidebar: any;
  @Prop() forNewBlog: any;

  render() {
    const getSidebar = this.forSidebar.map((item) => {
      return <s-viskhan-news-sidebar sidebar={item} />;
    });
    const getNewBlog = this.forNewBlog.map((product) => {
      return <s-viskhan-new-blog blog={product} />;
    });

    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              {getNewBlog}
            </div>
            <div class="col-md-5">
              {/*<div class="cont-2">*/}
              {/*  <div class="link">*/}
              {/*    <li class="list-unstyled">*/}
              {/*      <a routerLink="/second" routerLinkActive="active">Следующая страница</a>*/}
              {/*    </li>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {getSidebar}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
