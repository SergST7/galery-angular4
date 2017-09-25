import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  visibleImage = [];

  constructor() { }

  getImages(){
    return this.visibleImage.slice(0)
  }

}

const IMAGES = [
  {"id":1, "category": "boats", "caption": "View from the boat", "url": "assets/img/boat1"},
  {"id":2, "category": "boats", "caption": "Boat for rent", "url": "assets/img/boat2"}
]