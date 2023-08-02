import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Directive({
  selector: '[mvSwipper]',
  standalone:true
})
export class SwipperDirective  implements AfterViewInit{
  private readonly swiperElement!:HTMLElement;
  @Input('config') config?:SwiperOptions
    
  
 
  constructor(private el:ElementRef<HTMLElement>) { 
      this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit(): void {
    Object.assign(this.el.nativeElement,this.config)
    //@ts-ignore
    this.el.nativeElement.initialize()
  }

}
