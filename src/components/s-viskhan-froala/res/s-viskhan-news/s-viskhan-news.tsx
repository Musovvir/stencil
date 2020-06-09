import {Component, ComponentInterface, h, Prop} from "@stencil/core";

@Component({
  tag: "s-viskhan-news",
  styleUrl: "s-viskhan-news.css",
  shadow: false,
  scoped: true,
})
export class SViskhanNews implements ComponentInterface {
  @Prop() forNews: any;

  render() {
    return (
      <div class="news">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-md-4">
              <div>
                <img src={this.forNews.image} class="image" alt="" />
              </div>
            </div>
            <div class="col-md-8">
              <div class="info">
                <span class="title">{this.forNews.titl}</span>
                <div class="item-info">
                  <div class="item">
                    <span class="name">{name}</span>
                    <span class="date">{this.forNews.date}</span>
                    <button class="bt">Editor</button>
                  </div>
                  <div class="text">{this.forNews.text}</div>
                  <span class="keep">
                    Keep Reading
                    <i class="fa fa-chevron-circle-right" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
