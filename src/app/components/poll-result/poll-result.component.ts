import { Component, OnInit, Input } from '@angular/core';
import { PollsService } from '../../services/polls.service';
import { votesCount } from '../../models/votes';
import { Polls } from "../../models/Polls";
import { Poll } from 'src/app/models/Poll';

@Component({
  selector: 'app-poll-result',
  templateUrl: './poll-result.component.html',
  styleUrls: ['./poll-result.component.scss'],
})
export class PollResultComponent implements OnInit {
  @Input() pollId:string;
  optApercent='0%';
  optBpercent='0%';
  optCpercent='0%';
  optDpercent='0%';
  pollsArray:Polls[];
  pollObject:Poll={
    pollId:"",
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    status:""
  };

  optArray:number[]=[0,0,0,0];
  optPercentageArray:number[]=[];
  // opt1Count:number=0;
  // opt2Count:number=0;
  // opt3Count:number=0;
  // opt4Count:number=0;
  total:number=0;
  
  constructor(private pollsService:PollsService) { }

  ngOnInit() {
    console.log(this.pollId)
    this.countVotes();
    // this.votesCount(votesCount,)

  }

  ngOnChange() {
    this.countVotes();
  }

  countVotes(){
    console.log("countVotesCalled");
    //read all votes
    this.pollsService.getPolls(this.pollId).subscribe(data=>{
      this.pollsArray=data;
      console.log(data);
      this.pollObject=this.pollsArray[0].poll;
      this.checkVote();
      this.optArray.forEach(x=>this.total+=x);
      this.optArray.forEach(x=>console.log(x));
      this.optArray.forEach(x=>{
        const percent=(x/this.total)*100;
        this.optPercentageArray.push(percent);
      })
      console.log(this.total);
      console.log(this.optPercentageArray);
      this.optApercent=this.optPercentageArray[0].toString()+'%';
      this.optBpercent=this.optPercentageArray[1].toString()+'%';
      this.optCpercent=this.optPercentageArray[2].toString()+'%';
      this.optDpercent=this.optPercentageArray[3].toString()+'%';
    });
    //reduce for each opt

    //assign to votesCount Obj
    //calculate using votesCount.optX and votesCount.total
  }

  checkVote(){
    console.log("checkVotesCalled");
    this.pollsArray.forEach(x=>{
      console.log(x.option)
      if (x.option=='option 1'){
        this.optArray[0]+=1
        console.log("add in opt a")
      }
      else if (x.option=='option 2'){
        this.optArray[1]+=1
        console.log("add in opt b")

      }
      else if (x.option=='option 3'){
        this.optArray[2]+=1
        console.log("add in opt c")

      }
      else if (x.option=='option 4'){
        this.optArray[3]+=1
        console.log("add in opt d")

      }
      else{
        console.log("Invalid options found in polls")
      }

    })
    
    // ((this.votesCount, x)=>{

    // } ,
    // {0,0,0,0}
    // )
    

  }

}
