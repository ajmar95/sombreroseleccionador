import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { PreguntaPage } from '../pregunta/pregunta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  num : number=0;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    
  }
  incrementar(){
    this.num++;
  }
  preg(){
    this.navCtrl.push(PreguntaPage);
}
}

