import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Coche } from '../coche.model';
import { CochesService } from '../coches.service';
import { AlertController, LoadingController, NavController} from "@ionic/angular";
@Component({
  selector: 'app-coche-detalle',
  templateUrl: './coche-detalle.page.html',
  styleUrls: ['./coche-detalle.page.scss'],
})
export class CocheDetallePage implements OnInit {

  coche:Coche = {
    nombre : '',
    imageURL: ''
  };
  recibeId = null;
  constructor(private activatedRoute:ActivatedRoute,private cocheService:CochesService, private router:Router, private nav:NavController,private alertCtrl:AlertController, private loadingController:LoadingController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //Validar parametro
      this.recibeId = paramMap.get('cocheId')
      if (this.recibeId){
        this.cargarPantalla();
      } 
    })
  }
  cargarPantalla(){
    this.cocheService.getCoche(this.recibeId).subscribe(res => {
      this.coche = res;
    })
    console.log(this.recibeId)    
    console.log(this.coche)    
  }
  async deleteCoche(){
    const elementoAlerta = await this.alertCtrl.create({
      header: 'Confirme eliminación de datos',
      message: 'This is an alert message.',
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Borrar",
          handler: () => {
            this.cocheService.deleteCoche(this.recibeId);
            //this.nav.navigateForward('/');
            this.router.navigate(['/coches']);
          }
        }
      ]
    });
    await elementoAlerta.present();
  }
  guardarCoche(){
    this.cocheService.updateCoche(this.coche,this.recibeId);
    this.router.navigate(['/coches']);
  }
}
