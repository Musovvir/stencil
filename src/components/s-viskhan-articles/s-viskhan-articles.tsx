import {Component, ComponentInterface, h, Prop} from "@stencil/core";

@Component({
  tag: "s-viskhan-articles",
  styleUrl: "s-viskhan-articles.css",
  shadow: false,
  scoped: true,
})
export class SViskhanArticles implements ComponentInterface {
  @Prop() forArticles: any;

  render() {
    const getArticles = this.forArticles.map(item => {
      return <s-viskhan-item-articles forArticles={item} />
    })
    return (
      <div>
        <div class="container">
            {getArticles}
        </div>
      </div>
    );
  }
}
