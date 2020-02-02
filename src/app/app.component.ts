import { Component, OnInit } from '@angular/core';
import { DetectionService } from './ml/detection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images: string[] = [];

  constructor(private detectionService: DetectionService) {}

  ngOnInit() {
    for (let index = 1; index < 33; index++) {
      this.images.push(index + '.jpg');
    }

    this.detectionService.loadModel();

  }

}
