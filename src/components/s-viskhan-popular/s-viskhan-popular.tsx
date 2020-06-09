import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-viskhan-popular',
  styleUrl: 's-viskhan-popular.css',
  shadow: false,
  scoped: true,
})
export class SViskhanPopular implements ComponentInterface {

  @Prop() forPopular: any;

  render() {

    const getPopular = this.forPopular.map(item => {
      return <s-viskhan-item-pop forPopular={item} />
    })

    return (
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-6">
            <div class="popular">Popular Resources</div>
            {getPopular}
          </div>
          <div class="col-md-4">
            <img
              src="https://via.placeholder.com/340x440?text=Visit"
              class="image-2"
            />
          </div>
        </div>
      </div>
    );
  }

}
