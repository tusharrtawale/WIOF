import { Component, OnInit } from "@angular/core";
import { EnvDay } from '../../models/env-cal-data';
import { EnvcalServiceService } from '../../services/envcal-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-env-calender",
  templateUrl: "./env-calender.component.html",
  styleUrls: ["./env-calender.component.scss"],
})
export class EnvCalenderComponent implements OnInit {

  todayDate=new Date();
  // selectDate=new Date();
  imageUrl:Observable<any>;


  displayMonth:string;
  displayDay:string;

  days:{class:string,day:string,occasion:any[]}[]=[];
  constructor(private envDayService:EnvcalServiceService) {}

  EnvDays:EnvDay[];
  ngOnInit() {
    //test data
    this.envDayService.getEnvCal(String(this.todayDate.getMonth())).subscribe(data=>{this.EnvDays=data;this.renderCalendar()});
    // this.imageUrl = ;
    }

  getOccasion(day,month){
    const occasion=new Array;
    this.EnvDays.forEach(x=> {if ((x.day==day) && (x.month==month)){occasion.push({name:x.occasion,image:this.envDayService.getImage(x.image)}); 
    }});
    return occasion; }

  renderCalendar(){
    this.todayDate.setDate(1);
    const lastDay=new Date(
      this.todayDate.getFullYear(),
      this.todayDate.getMonth()+1,
      0
    ).getDate();
    const prevLastDay=new Date(
      this.todayDate.getFullYear(),
      this.todayDate.getMonth(),
      0
    ).getDate(); 
    const firstDayIndex=this.todayDate.getDay();
    // const lastDayIndex=new Date(
    //   this.todayDate.getFullYear(),
    //   this.todayDate.getMonth()+1,
    //   0
    // ).getDay(); 
    // const nextDays=7-lastDayIndex-1;
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.displayMonth=months[this.todayDate.getMonth()];
    this.displayDay=new Date().toDateString();
    for (let x = firstDayIndex; x > 0; x--) {
      // this.days.push({class:"day prev-date",day:String((prevLastDay - x + 1)),occasion:[]})    // to display dates instead of empty spaces
      this.days.push({class:"day",day:"",occasion:[]})
    }
    
    for (let i = 1; i <= lastDay; i++) {
        if (
          i === new Date().getDate() &&
          this.todayDate.getMonth() === new Date().getMonth()
        ) {
          this.days.push({class:"day today",day:String(i),occasion:this.getOccasion(String(i),String(this.todayDate.getMonth()))});            
        } else {
          this.days.push({class:"day",day:String(i),occasion:this.getOccasion(String(i),String(this.todayDate.getMonth()))});
        }        
    }  
  };

  // prevMonth(){
  //   this.todayDate.setMonth(this.todayDate.getMonth() - 1);
  //   this.renderCalendar();
  // };

  
  // nextMonth(){
  //     this.todayDate.setMonth(this.todayDate.getMonth() + 1);
  //     this.renderCalendar();
  //   };



  }


//   const date = new Date();

// const renderCalendar = () => {
//   date.setDate(1);

//   const monthDays = document.querySelector(".days");

//   const lastDay = new Date(
//     date.getFullYear(),
//     date.getMonth() + 1,
//     0
//   ).getDate();

//   const prevLastDay = new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     0
//   ).getDate();

//   const firstDayIndex = date.getDay();

//   const lastDayIndex = new Date(
//     date.getFullYear(),
//     date.getMonth() + 1,
//     0
//   ).getDay();

//   const nextDays = 7 - lastDayIndex - 1;

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   document.querySelector(".date h1").innerHTML = months[date.getMonth()];

//   document.querySelector(".date p").innerHTML = new Date().toDateString();

//   let days = "";

//   for (let x = firstDayIndex; x > 0; x--) {
//     days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//   }

//   for (let i = 1; i <= lastDay; i++) {
//     if (
//       i === new Date().getDate() &&
//       date.getMonth() === new Date().getMonth()
//     ) {
//       days += `<div class="today">${i}</div>`;
//     } else {
//       days += `<div>${i}</div>`;
//     }
//   }

//   for (let j = 1; j <= nextDays; j++) {
//     days += `<div class="next-date">${j}</div>`;
//     monthDays.innerHTML = days;
//   }
// };

// document.querySelector(".prev").addEventListener("click", () => {
//   date.setMonth(date.getMonth() - 1);
//   renderCalendar();
// });

// document.querySelector(".next").addEventListener("click", () => {
//   date.setMonth(date.getMonth() + 1);
//   renderCalendar();
// });

// renderCalendar();




