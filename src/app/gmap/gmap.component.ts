import { Component, OnInit } from '@angular/core';
import {circle, latLng, marker, polygon, tileLayer} from 'leaflet';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {
  myDate: number = Date.now();
  options = {
    layers: [
      tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 18, attribution: '...' }),
      circle([43.615747, 7.071713 ], { radius: 5000 }),
      polygon([[ 43.61, 7.071713 ], [ 43.615747, 7.071713 ], [43.615747, 7.071713]]),
      marker([43.615747, 7.071713])
    ],
    zoom: 16,
    center: latLng(43.615747, 7.071713),
  };
  constructor() {
  }

  ngOnInit() {
  }

}
