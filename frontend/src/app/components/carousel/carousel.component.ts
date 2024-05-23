import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css','./bootstrap.css','./style.css','./responsive.css']
})
export class CarouselComponent implements OnInit {

  linkedin = faLinkedin;
  github=faGithub;
  instagram=faInstagram

  constructor() { }

  ngOnInit(): void {
  }

}
