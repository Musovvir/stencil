import {Component, ComponentInterface, h, Prop} from "@stencil/core";

@Component({
  tag: "s-viskhan-events",
  styleUrl: "s-viskhan-events.css",
  shadow: false,
  scoped: true,
})
export class SViskhanEvents implements ComponentInterface {

  @Prop() forEvents: any;

  render() {

    const getEvents = this.forEvents.map(item => {
      return <s-viskhan-item-events forEvents={item} />
    })

    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="upcoming">Upcoming Events</div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 d-flex">
            {getEvents}
          </div>
        </div>
      </div>
    );
  }
}
