import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { removeSummaryDuplicates } from '@angular/compiler';

/**
 * Generated class for the PreguntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-pregunta',
  templateUrl: 'pregunta.html',
 
})
export class PreguntaPage {
  c : number=0;
  g: number=0;
  s : number=0;
  r : number=0;
  h : number=0;
 ca: string="v";
 x: number=0;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntaPage');
  }
    ra(){
    this.c++;
      this.r++;
  }
  ha(){
    this.c++;
    this.h++;
  }
  sl(){
    this.c++;
    this.s++;
  }
  gr(){ this.c++;
  this.g++;}
 rs(){
  this.c++;
  this.s++;
  this.r++;

 }
 re(){
   this.c++;
     if(this.g>5){
      this.ca="Gryffindor"
      this.x=1;
     }
     else if(this.s>5){
      this.ca="Slytherin"
      this.x=3;
     }
     else if(this.h>5){
      this.ca="Hufflepuff"
      this.x=4;
     }
     else if(this.r>5){
      this.ca="Ravenclaw"
      this.x=2;
     }
     else if(this.h>this.s && this.h>this.g && this.h>this.r){
      this.ca="Hufflepuff"
      this.x=4;
     }
     else if(this.r>this.s && this.r>this.g && this.r>this.h){
      this.ca="Ravenclaw"
      this.x=2;
     }
     else if(this.s>this.r && this.s>this.g && this.s>this.h){
      this.ca="Slytherin"
      this.x=3;
     }
     else if(this.g>this.r && this.g>this.s && this.g>this.h){
      this.ca="Gryffindor"
      this.x=1;
     }
     else if(this.g==this.r || this.g==this.s || this.g==this.h || this.s==this.h || this.r==this.h || this.r==this.s ){
       this.ca=="empate"
       this.x=5;
     }
 }
 eg(){
  this.ca="Gryffindor"
  this.x=1;
 }
 er(){
  this.ca="Ravenclaw"
  this.x=2;
}
es(){
  this.ca="Slytherin"
  this.x=3;
}
eh(){
  this.ca="Hufflepuff"
  this.x=4;
}
  }
