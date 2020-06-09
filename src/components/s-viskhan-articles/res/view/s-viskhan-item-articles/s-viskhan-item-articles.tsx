import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-viskhan-item-articles',
  styleUrl: 's-viskhan-item-articles.css',
  shadow: false,
  scoped: true,
})
export class SViskhanItemArticles implements ComponentInterface {
  @Prop() forArticles: any;

  render() {
    return (
      <div class="cont-12">
        <div class="row justify-content-between">
          <div class="col-md-6">
            <div class="cont-12">
              <div class="cont-12-1">{this.forArticles.titl}</div>
              <div class="cont-12-2">{this.forArticles.text}</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="cont">
              <div class="cont-12-0">
                <div class="cont-12-0-1">
                  <span class="enter">{this.forArticles.subtext}</span>
                  <button type="button" class="cont-btn">
                    {this.forArticles.button}
                  </button>
                </div>
              </div>
              <div class="cont-12-0-2">
                <span>
                  <i class="fa fa-bolt" aria-hidden="true" />
                  <b>6145 people</b>
                  <span class="are">
                    are reading this newsletter every week
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
