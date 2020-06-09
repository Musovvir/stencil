import { Component, h } from "@stencil/core";
import {
  forSidebar,
  forNewBlog,
  forNewBlogPosts,
  forPopular,
  forEvents,
  forNews,
  forContinue,
  forArticles,
  forDrive,
  forErik,
  forHeader,
  forFooter
} from "../../utils/mock";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
  scoped: true,
})
export class MyComponent {
  render() {

    const clicker = item => {
      console.log(item)
    }

    return (
      <div>
        <s-viskhan-header forHeader={forHeader}
                          onClickHeaderImg={(item) => clicker(item)}
                          onClickHeaderWibbitz={(item) => clicker(item)}
                          onClickHeaderArticles={(item) => clicker(item)}
                          onClickHeaderEvents={(item) => clicker(item)}
                          onClickHeaderReports={(item) => clicker(item)}
                          onClickHeaderCustomerStories={(item) => clicker(item)}
                          onClickHeaderIcon={(item) => clicker(item)}
                          onClickHeaderInput={(item) => clicker(item)}
                          onClickHeaderButton={(item) => clicker(item)}/>
        <s-viskhan-news-post forSidebar={forSidebar} forNewBlog={forNewBlog} />
        <s-viskhan-new-blog-posts forNewBlogPosts={forNewBlogPosts} />
        <s-viskhan-popular forPopular={forPopular} />
        <s-viskhan-events forEvents={forEvents} />
        <s-viskhan-test-drive forDrive={forDrive} />
        <s-viskhan-second forContinue={forContinue} />
        <s-viskhan-erik forErik={forErik} />
        <s-viskhan-articles forArticles={forArticles} />
        <s-viskhan-froala forNews={forNews} />
        <s-viskhan-footer forFooter={forFooter}/>
      </div>
    );
  }
}
