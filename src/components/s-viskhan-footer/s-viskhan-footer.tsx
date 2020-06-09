import {Component, ComponentInterface, h, Prop} from "@stencil/core";

@Component({
  tag: "s-viskhan-footer",
  styleUrl: "s-viskhan-footer.css",
  shadow: false,
  scoped: true
})
export class SViskhanFooter implements ComponentInterface {
  @Prop() forFooter: any;
  render() {
    const getFooter = this.forFooter.map(item => {
      return (
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="text-1">
                <b>{item.text}</b>
                <div class="foot-1">
                  <div class="icon-1">
                    <i class="fa fa-facebook-square" aria-hidden="true" />
                  </div>
                  <div class="icon-1">
                    <i class="fa fa-twitter-square" aria-hidden="true" />
                  </div>
                  <div class="icon-1">
                    <i class="fa fa-instagram" aria-hidden="true" />
                  </div>
                  <div class="icon-1">
                    <i class="fa fa-youtube-play" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="text-2">
                <div class="title">
                  <b>{item.titl_1}</b>
                </div>
                <div>{item.item_1}</div>
                <div>{item.item_2}</div>
                <div>{item.item_3}</div>
              </div>
            </div>
            <div class="col-2">
              <div class="text-3">
                <div class="title">
                  <b>{item.titl_2}</b>
                </div>
                <div>{item.item_4}</div>
                <div>{item.item_5}</div>
                <div>{item.item_6}</div>
                <div>{item.item_7}</div>
                <div>{item.item_8}</div>
                <div>{item.item_9}</div>
                <div>{item.item_10}</div>
              </div>
            </div>
            <div class="col-2">
              <div class="text-4">
                <div class="title">
                  <b>{item.titl_3}</b>
                </div>
                <div>{item.item_11}</div>
                <div>{item.item_12}</div>
                <div>{item.item_13}</div>
                <div>{item.item_14}</div>
              </div>
            </div>
            <div class="col-2">
              <div class="text-5">
                <div class="title">
                  <b>{item.titl_4}</b>
                </div>
                <div class="title">
                  <b>{item.titl_5}</b>
                </div>
                <div>{item.item_15}v</div>
                <div>{item.item_16}</div>
                <div>{item.item_17}</div>
                <div class="title-1">
                  <b>{item.titl_6}</b>
                </div>
                <div>{item.item_18}</div>
                <div>{item.item_19}</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="foot-2">
                <div class="text-6">
                  <i class="fa fa-globe" aria-hidden="true" />
                  <b>{item.subtext_1}</b>
                </div>
                <div class="text-7">
                  {item.subtext_2}
                  <span class="french">{item.subtext_3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div class="footer">
        {getFooter}
      </div>
    );
  }
}
