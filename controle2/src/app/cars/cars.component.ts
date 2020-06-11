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
      image: "../../assets/image.png",
    },    
    {
      matricule: "1",
      marque : "fiat",
      siege: "casablanca",
      color: "bleu",
      image: "../../assets/image.png",
    },    
    {
      matricule: "2",
      marque : "fiat",
      siege: "marakesh",
      color: "green",
      image: "../../assets/image.png",
    },    
    {
      matricule: "3",
      marque : "fiat",
      siege: "taza",
      color: "black",
      image: "../../assets/image.png",
    },   
    {
      matricule: "4",
      marque : "mercides",
      siege: "rabat",
      color: "white",
      image: "../../assets/image.png",
    },
  ];


  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetails(car){
    this.router.navigate(["carsdetails", JSON.stringify(car)]);
  }
}
