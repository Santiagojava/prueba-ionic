import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coche } from './coche.model';
import { CochesService } from './coches.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.page.html',
  styleUrls: ['./coches.page.scss'],
})
export class CochesPage implements OnInit {

  coches:Coche[];
  constructor(private cocheService:CochesService, private router:Router) { }

  ngOnInit() {
    this.cocheService.getCoches().subscribe(res => {
      this.coches = res;  
    })
  }
  ionViewWillEnter(){
    this.cocheService.getCoches().subscribe(res => {
      this.coches = res;  
    })
  }
  addNewCoche(){
    this.router.navigate(['/coche-add']);
  }
}
