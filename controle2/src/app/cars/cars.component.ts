import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars = [
    {
      matricule: "0",
      marque : "dacia",
      siege: "fes",
      color: "red",
      image: "../../assets/Super_Angular.png",
    },    
    {
      matricule: "1",
      marque : "fiat",
      siege: "casablanca",
      color: "bleu",
      image: "../../assets/Super_Angular.png",
    },    
    {
      matricule: "2",
      marque : "fiat",
      siege: "marakesh",
      color: "green",
      image: "../../assets/Super_Angular.png",
    },    
    {
      matricule: "3",
      marque : "fiat",
      siege: "taza",
      color: "black",
      image: "../../assets/Super_Angular.png",
    },   
    {
      matricule: "4",
      marque : "mercides",
      siege: "rabat",
      color: "white",
      image: "../../assets/Super_Angular.png",
    },
  ];


  constructor(private router: Router) { }

  ngOnInit() {
  }

}
