import { Injectable } from '@angular/core';

import * as cocoSsd from '@tensorflow-models/coco-ssd';


@Injectable({
  providedIn: 'root'
})
export class DetectionService {
  model: cocoSsd.ObjectDetection;

  constructor() { }


  async loadModel() {
    console.log('Fetching coco-ssd model...');
    const modelLoadStartTime = new Date().getTime();
    this.model = await cocoSsd.load();
    const modelLoadDuration = Math.round((new Date().getTime() - modelLoadStartTime) / 1000);
    console.log('Model loaded. Time taken: ', modelLoadDuration, 'sec.');
    return true;
  }

  async predict(imageEl: HTMLImageElement) {
    // predict
    if (this.model) {
      return await this.model.detect(imageEl);
    } else {
      return [];
    }
  }


}
