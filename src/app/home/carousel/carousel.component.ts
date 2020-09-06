import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { Orientation } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public slidesList = ["assets/images/carousel-1.png","assets/images/img3.png","assets/images/img2.jpg"];
  public showContent = false;

  public parentHeight = '600px';
  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 3000;o
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public maintainAspectRatio = false;
  public proportion = 25;
  public slideHeight = '600px';
  public slides = this.slidesList.length;
  public overlayColor = '#01200040';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
