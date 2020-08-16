import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-energy-widget',
  templateUrl: './energy-widget.component.html',
  styleUrls: ['./energy-widget.component.scss'],
})
export class EnergyWidgetComponent implements OnInit {
  EnergyConsumption:number;
  KgsofCO2:number ;
  Selectedunit = "";
  litresofPetrol:number;
  litresofDiesel:number;
  KmsbySUV;
  kmsbycar;
  buttonClicked=false;
  
  constructor() { }

  ngOnInit() {}

 CalculateCO2(){
  this.buttonClicked=true;
if (this.Selectedunit=="1")
{
  
  this.KgsofCO2=this.EnergyConsumption*612;
  console.log(this.Selectedunit);
  console.log(typeof(this.Selectedunit));
 // console.log( this.KgsofCO2=this.EnergyConsumption*0);

 this.litresofPetrol=this.KgsofCO2/2.296;
  this.litresofDiesel=this.KgsofCO2/2.653;
  this.kmsbycar=this.litresofPetrol*15;
  this.KmsbySUV=this.litresofDiesel*12;
}

else{
this.KgsofCO2= this.EnergyConsumption *0.85
console.log(this.KgsofCO2);  

  this.litresofPetrol=this.KgsofCO2/2.296;
  this.litresofDiesel=this.KgsofCO2/2.653;
  this.kmsbycar=this.litresofPetrol*15;
  this.KmsbySUV=this.litresofDiesel*12;
}
 }

}