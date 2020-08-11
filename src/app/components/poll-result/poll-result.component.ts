import { Component, OnInit, Input } from '@angular/core';
import { PollsService } from '../../services/polls.service';
import { votesCount } from '../../models/votes';

@Component({
  selector: 'app-poll-result',
  templateUrl: './poll-result.component.html',
  styleUrls: ['./poll-result.component.scss'],
})
export class PollResultComponent implements OnInit {
  @Input() pollId:string;
  optApercent='60%';
  optBpercent='60%';
  optCpercent='60%';
  optDpercent='60%';

  votesCount=new votesCount(0,0,0,0);
  
  constructor(private pollsService:PollsService) { }

  ngOnInit() {
    this.countVotes();

  }

  ngOnChange() {
    this.countVotes();
  }

  countVotes(){
    //read all votes
    this.pollsService.getPolls(this.pollId).subscribe(data=>console.log(data));
    //reduce for each opt
    //assign to votesCount Obj
    //calculate using votesCount.optX and votesCount.total
  }


}
