import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Portfolio2';
status: boolean=false;
toggleclass(){
  this.status = !this.status
}

scrollaboutme(el: HTMLElement) {
  // el.scrollIntoView({behavior: "smooth"});
  el.scrollIntoView();
  this.status = false;
}

scrollSkills(el: HTMLElement) {
  // el.scrollIntoView({behavior: "smooth"});
  el.scrollIntoView();
  this.status = false;
}

scrollProjects(el: HTMLElement) {
  // el.scrollIntoView({behavior: "smooth"});
  el.scrollIntoView();
  this.status = false;
}

scrollContact(el: HTMLElement) {
  // el.scrollIntoView({behavior: "smooth"});
  el.scrollIntoView();
  this.status = false;
}

}