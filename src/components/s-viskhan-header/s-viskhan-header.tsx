import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {SViskhanHeaderItem} from "./interface/common.interface";

@Component({
  tag: "s-viskhan-header",
  styleUrl: "s-viskhan-header.css",
  shadow: false,
  scoped: true,
})
export class SViskhanHeader implements ComponentInterface {
  /**
   * Интерфейс для Header
   */
  @Prop() header: SViskhanHeaderItem[] = [];

  /**
   * Массив для Header
   */
  @Prop() forHeader: any;

  /**
   * Клик по картинке
   */
  @Event() clickHeaderImg: EventEmitter;

  /**
   * Клик по wibbitz
   */
  @Event() clickHeaderWibbitz: EventEmitter;

  /**
   * Клик по Articles
   */
  @Event() clickHeaderArticles: EventEmitter;

  /**
   * Клик по Articles
   */
  @Event() clickHeaderEvents: EventEmitter;

  /**
   * Клик по Reports
   */
  @Event() clickHeaderReports: EventEmitter;

  /**
   * Клик по Customer Stories
   */
  @Event() clickHeaderCustomerStories: EventEmitter;

  /**
   * Клик по Icon
   */
  @Event() clickHeaderIcon: EventEmitter;

  /**
   * Клик по Input
   */
  @Event() clickHeaderInput: EventEmitter;

  /**
   * Клик по Button
   */
  @Event() clickHeaderButton: EventEmitter;

  render() {
    const getHeader = this.forHeader.map((item) => {
      return (
        <div>
          <div class="container">
            <div class="row">
              <div class="col-auto">
                <div class="head-1">
                  <span class="wibbitz">
                    <img
                      src={item.image}
                      alt=""
                      onClick={() => this.clickHeaderImg.emit("HeaderImg")}
                    />
                  </span>
                  <b onClick={() => this.clickHeaderWibbitz.emit("wibbitz")}>
                    {item.titl}
                  </b>
                </div>
              </div>
              <div class="col-6">
                <div class="head-2">
                  <ul class="nav justify-content-end">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        onClick={() =>
                          this.clickHeaderArticles.emit("Articles")
                        }
                      >
                        {item.item1}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        onClick={() => this.clickHeaderEvents.emit("Events")}
                      >
                        {item.item2}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        onClick={() => this.clickHeaderReports.emit("Reports")}
                      >
                        {item.item3}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        onClick={() =>
                          this.clickHeaderCustomerStories.emit(
                            "Customer Stories"
                          )
                        }
                      >
                        {item.item4}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-auto justify-content-end text-right d-flex">
                <div class="head-3 d-flex text-left">
                  <span
                    class="material-icons"
                    onClick={() => this.clickHeaderIcon.emit("Icon")}
                  >
                    {item.icon}
                  </span>
                </div>
                <div class="head-4 text-right">
                  <span
                    class="enter"
                    onClick={() => this.clickHeaderInput.emit("Input")}
                  >
                    {item.input}
                  </span>
                  <button
                    type="button"
                    class="btn head-btn"
                    onClick={() => this.clickHeaderButton.emit("Button")}
                  >
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div class="header">{getHeader}</div>;
  }
}
