import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  arrayDates = [
    {
      id:1,
      nombre:"Mascarilla Grande Azul",
      img:"https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1631296738/mask%20sell/maskLargeBlue_teom5y.jpg",
      precio1:"Precio por unidad 0,25",
      precio2:"precio por paquete  25 Unidades 0,20 total 5$"
    },
    {
      id:2,
      nombre:"Mascarilla Mediana Azul",
      img:"https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1631296738/mask%20sell/maskBlueMedium_z2wetq.jpg",
      precio1:"Precio por unidad 0,20",
      precio2:"precio por paquete  25 Unidades 0,17 total 4,25$"
    },
    {
      id:3,
      nombre:"Mascarilla Pequeña Azul",
      img:"https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1631296738/mask%20sell/maskBlueSmall_s10i2d.jpg",
      precio1:"Precio por unidad 0,17",
      precio2:"precio por paquete  25 Unidades 0,15 total 3,75$"
    },
    {
      id:3,
      nombre:"Mascarilla Grande Negra",
      img:"https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1631296738/mask%20sell/maskBlackLarge_kfo17c.jpg",
      precio1:"Precio por unidad 0,40",
      precio2:"precio por paquete  25 Unidades 0,35 total 8,75$"
    },
    {
      id:3,
      nombre:"Mascarilla Mediana Negra",
      img:"https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1631296739/mask%20sell/maskMediumBlack_mh4ux0.jpg",
      precio1:"Precio por unidad 0,33",
      precio2:"precio por paquete  25 Unidades 0,30 total 7,50$"
    },
    {
      id:3,
      nombre:"Mascarilla Pequeña Negra",
      img:"https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1631296738/mask%20sell/maskSmallBlack_vef20u.jpg",
      precio1:"Precio por unidad 0,25",
      precio2:"precio por paquete  25 Unidades 0,20 total 5$"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
