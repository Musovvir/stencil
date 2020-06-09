import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-viskhan-froala',
  styleUrl: 's-viskhan-froala.css',
  shadow: false,
  scoped: true,
})
export class SViskhanFroala implements ComponentInterface {
  @Prop() forNews: any;

  render() {

    const getNews = this.forNews.map(item => {
      return <s-viskhan-news forNews={item} />
    })

    return (
      <div>
        <div class="container">
          <s-viskhan-home />
        </div>
        <div class="container">
          {getNews}
        </div>
      </div>
    );
  }

}
