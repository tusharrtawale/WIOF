import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-energy-widget",
  templateUrl: "./energy-widget.component.html",
  styleUrls: ["./energy-widget.component.scss"],
})
export class EnergyWidgetComponent implements OnInit {
  EnergyConsumption: number;
  KgsofCO2: number;
  Selectedunit = "";
  litresofPetrol: number;
  litresofDiesel: number;
  KmsbySUV;
  kmsbycar;
  buttonClicked = false;
  Consumptionnull = false;
  unitnull = false;

  constructor() {}

  ngOnInit() {}

  CalculateCO2() {
    // if(this.EnergyConsumption==0 || this.Selectedunit==null)

    if (this.Selectedunit == "1" && this.EnergyConsumption > 0) {
      this.buttonClicked = true;
      this.unitnull = false;
      this.Consumptionnull = false;
      this.KgsofCO2 = this.EnergyConsumption * 612;
      console.log(this.Selectedunit);
      console.log(typeof this.Selectedunit);
      // console.log( this.KgsofCO2=this.EnergyConsumption*0);

      this.litresofPetrol = this.KgsofCO2 / 2.296;
      this.litresofDiesel = this.KgsofCO2 / 2.653;

      this.kmsbycar = this.litresofPetrol * 15;
      this.KmsbySUV = this.litresofDiesel * 12;
    } else if (this.Selectedunit == "2" && this.EnergyConsumption > 0) {
      this.buttonClicked = true;
      this.unitnull = false;
      this.Consumptionnull = false;
      this.KgsofCO2 = this.EnergyConsumption * 0.85;
      console.log(this.KgsofCO2);

      this.litresofPetrol = this.KgsofCO2 / 2.296;
      this.litresofDiesel = this.KgsofCO2 / 2.653;
      this.kmsbycar = this.litresofPetrol * 15;
      this.KmsbySUV = this.litresofDiesel * 12;
    }

    // else if( this.EnergyConsumption<0 || this.Selectedunit==null   )
    // {
    //   this.Consumptionnull=true;
    //   this.unitnull=true;
    // }
    else if (
      this.EnergyConsumption < 0 &&
      (this.Selectedunit == "2" || this.Selectedunit == "1")
    ) {
      this.unitnull = false;
      this.Consumptionnull = true;
    } else if (this.EnergyConsumption > 0 && this.Selectedunit == "") {
      this.unitnull = true;
      this.Consumptionnull = false;
    } else if (this.EnergyConsumption == undefined && this.Selectedunit == "") {
      this.unitnull = true;
      this.Consumptionnull = true;
    }

    // else {
    // this.Consumptionnull=true;
    // this.unitnull=true;
    // else
    // {
    //   return this.Consumptionnull;
    //   return this.unitnull;
    // }
  }

  //old

  //  CalculateCO2(){
  //   this.buttonClicked=true;
  // if (this.Selectedunit=="1")
  // {

  //   this.KgsofCO2=this.EnergyConsumption*612;
  //   console.log(this.Selectedunit);
  //   console.log(typeof(this.Selectedunit));
  //  // console.log( this.KgsofCO2=this.EnergyConsumption*0);

  //  this.litresofPetrol=this.KgsofCO2/2.296;
  //   this.litresofDiesel=this.KgsofCO2/2.653;
  //   this.kmsbycar=this.litresofPetrol*15;
  //   this.KmsbySUV=this.litresofDiesel*12;
  // }

  // else{
  // this.KgsofCO2= this.EnergyConsumption *0.85
  // console.log(this.KgsofCO2);

  //   this.litresofPetrol=this.KgsofCO2/2.296;
  //   this.litresofDiesel=this.KgsofCO2/2.653;
  //   this.kmsbycar=this.litresofPetrol*15;
  //   this.KmsbySUV=this.litresofDiesel*12;
  // }
  //  }
}
