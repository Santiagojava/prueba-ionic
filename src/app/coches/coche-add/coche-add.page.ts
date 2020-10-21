import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coche } from '../coche.model';
import { CochesService } from '../coches.service';

@Component({
  selector: 'app-coche-add',
  templateUrl: './coche-add.page.html',
  styleUrls: ['./coche-add.page.scss'],
})
export class CocheAddPage implements OnInit {
  coche : Coche = {
    nombre:'',
    imageURL: ''
  }
  constructor(private cocheService:CochesService,private router:Router) { }

  ngOnInit() {
  }

  NewCoche(nombre, imageURL){
    console.log(nombre.value);
    this.coche.nombre = nombre.value;
    this.coche.imageURL = imageURL.value;
    this.cocheService.addCoche(this.coche);
    this.router.navigate(['/coches']);
  }
}
