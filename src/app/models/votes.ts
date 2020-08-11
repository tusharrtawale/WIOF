export class votesCount{
    optACount:number;
    optBCount:number;
    optCCount:number;
    optDCount:number;
    total:number;

    constructor(optACount,optBCount,optCCount,optDCount){
        this.optACount=optACount;
        this.optBCount=optBCount;
        this.optCCount=optCCount;
        this.optDCount=optDCount;
        this.total=((this.optACount)+(this.optBCount)+(this.optCCount)+(this.optDCount))
    }

    static getVotesPercentages(votes:number,total:number){
        return ((votes/total)*100);
    }
  }