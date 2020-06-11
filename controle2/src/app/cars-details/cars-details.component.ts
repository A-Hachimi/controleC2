import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent implements OnInit {

  car = {
    matricule: "",
    marque : "",
    siege: "",
    color: "",
    image: "",
  };
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.car = JSON.parse(this.activatedRoute.snapshot.params.car);
  }

}
