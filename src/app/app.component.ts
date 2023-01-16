import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import {
  trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('hamburguerX', [
      /*
        state hamburguer => is the regular 3 lines style.
        states topX, hide, and bottomX => used to style the X element
      */
      state('hamburguer', style({})),
      // style top bar to create the X
      state(
        'topX',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      // hides element when create the X (used in the middle bar)
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      // style bottom bar to create the X
      state(
        'bottomX',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      transition('* => *', [
        animate('0.4s'), // controls animation speed
      ]),
    ]),
  ],
})
export class AppComponent {

  images = ['battleships.jpg','connect4.jpg', 'teacher.jpg', 'secretsanta.jpg'].map((n) => `../assets/projects/${n}`);

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 30000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = true;
	}

  title = 'Portfolio2';
status: boolean=false;
toggleclass(){
  this.status = !this.status;
  this.isHamburguer = true;
}

scrollaboutme(el: HTMLElement) {
  // el.scrollIntoView({behavior: "smooth"});
  el.scrollIntoView();
  this.status = false;
  this.isHamburguer = true;
}

scrollSkills(el: HTMLElement) {
  // el.scrollIntoView({behavior: "smooth"});
  el.scrollIntoView();
  this.status = false;
  this.isHamburguer = true;
}

scrollProjects(el: HTMLElement) {
  // el.scrollIntoView({behavior: "smooth"});
  el.scrollIntoView();
  this.status = false;
  this.isHamburguer = true;
}

scrollContact(el: HTMLElement) {
  // el.scrollIntoView({behavior: "smooth"});
  el.scrollIntoView();
  this.status = false;
  this.isHamburguer = true;
}
// hamburger menu

isHamburguer = true;
onClick() {
  this.isHamburguer = !this.isHamburguer;
}

}