import { Component, OnInit } from '@angular/core';
import { IImage } from '../../app/iimage';

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.scss']
})
export class SliderComponentComponent implements OnInit {

  imageUrls: (string | IImage)[] = [
    { url: '../../assets/images/sliderimage1.jpg', href: '#config' },
    { url: '../../assets/images/sliderimage2.jpg' },
    { url: '../../assets/images/sliderimage3.jpg' },
    { url: '../../assets/images/ielts_logo.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];
  height: string = '500px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;
  constructor() { }

  ngOnInit() {
   
  }

}
