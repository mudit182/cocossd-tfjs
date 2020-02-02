import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DetectedObject } from '@tensorflow-models/coco-ssd';

import { DetectionService } from '../ml/detection.service';



@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() image: string;
  @ViewChild('imageSelector', {static: false}) imageEl: ElementRef;

  detections: DetectedObject[] = [];
  bboxesForCss: {
    top: string,
    left: string,
    width: string,
    height: string
  }[] = [];


  constructor(private detectionService: DetectionService) { }

  ngOnInit() {
  }

  getImagePath() {
    return 'assets/test_images/' + this.image;
  }

  async predict() {
    if (this.detections.length === 0) {
      this.detections = await this.detectionService.predict(this.imageEl.nativeElement);
      this.detections.forEach(detection => {
        const bboxCss = {
          left: detection.bbox[0].toString() + 'px',
          top: detection.bbox[1].toString() + 'px',
          width: detection.bbox[2].toString() + 'px',
          height: detection.bbox[3].toString() + 'px'
        };
        this.bboxesForCss.push(bboxCss);
      });
    }
  }


}
