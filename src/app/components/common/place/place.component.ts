import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  places = [
    {
      "img": "../../../../assets/img/place/air-jeu.jpeg",
      "name": "16 Espaces Verts"
    },
    {
      "img": "../../../../assets/img/place/centre-commercial.jpg",
      "name": "2 centres commerciaux"
    },
    {
      "img": "../../../../assets/img/place/centre-formation.jpg",
      "name": "Centre de formation"
    },
    {
      "img": "../../../../assets/img/place/cimetiere.jpg",
      "name": "Cimetière Mixte"
    },
    {
      "img": "../../../../assets/img/place/ecole-primaire.jpg",
      "name": "3 Ecoles Primaires"
    },
    {
      "img": "../../../../assets/img/place/espace-femme.jpeg",
      "name": "Espace Femmes"
    },
    {
      "img": "../../../../assets/img/place/espace-jeune.jpg",
      "name": "Espace Jeunes"
    },
    {
      "img": "../../../../assets/img/place/etat-civil.jpg",
      "name": "Centre d’Etat Civil"
    },
    {
      "img": "../../../../assets/img/place/franco-arabe.webp",
      "name": "2 Franco-Arabe"
    },
    {
      "img": "../../../../assets/img/place/gendarmerie.jpg",
      "name": "Gendarmerie"
    },
    {
      "img": "../../../../assets/img/place/hopital.jpg",
      "name": "Hôpital et Poste de Santé"
    },
    {
      "img": "../../../../assets/img/place/jardin-enfant.jpg",
      "name": "Jardin d'enfants"
    },
    {
      "img": "../../../../assets/img/place/lieux-cultes.jpeg",
      "name": "6 Lieux de cultes"
    },
    {
      "img": "../../../../assets/img/place/lycee.jpg",
      "name": "2 Lycées"
    },
    {
      "img": "../../../../assets/img/place/parking.jpg",
      "name": "Parking"
    },
    {
      "img": "../../../../assets/img/place/place-publique.jpg",
      "name": "Place publique"
    },
    {
      "img": "../../../../assets/img/place/stations.jpg",
      "name": "2 Stations services"
    },
    {
      "img": "../../../../assets/img/place/terrain-foot.jpg",
      "name": "Terrain Basket et foot"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
