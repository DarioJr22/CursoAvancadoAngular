import { Component, ElementRef, Input, ViewChild } from "@angular/core"
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: "mv-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: [
    "../../../../node_modules/keen-slider/keen-slider.min.css",
    "./carousel.component.scss",
  ],
})
export class CarouselComponent {
  @Input()cards:any[]=[]
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  slider!: KeenSliderInstance

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 4,
        spacing: 15,
      },
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
