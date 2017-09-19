import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../services/photos.service';

import { MaterialModule } from '@angular/material';




@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../app.component.css'],
  providers: [PhotosService]
})
export class UserComponent implements OnInit {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  title: string;
  name: string;
  email: string;
  address: AddressWrap;
  hobbies: string[];
  showHobbies: boolean;
  photos: Photos[];

  constructor(private PhotosService: PhotosService) {
      this.title = 'Angular 2';
      this.name =  '';
      this.email = '';
      this.address = {
        street: '',
        city: '',
        state: ''
      };
      this.hobbies = ['playing', 'Movies', 'Sports'];
      this.showHobbies = false;

      this.PhotosService.getPhotos().subscribe( photos => {
        /* console.log(photos); */
          this.photos = photos;
      });
  }

  toggleHobbies() {
    console.log('show');
    if (this.showHobbies === true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

  ngOnInit() {
  }
}

 interface AddressWrap {
    street: string;
    city: string;
    state: string;
  }

  interface Photos {
    id: number;
    title: string;
    url: string;
  }
