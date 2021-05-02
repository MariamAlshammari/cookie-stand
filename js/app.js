'use strict';

let Seattle={
    custNum:[],
    cockiesPurchaised:[],
    minCust:23,
    maxCust:65,
    avgCockieSold:6.3,
    getCustNum:function(){
        for (let i=0; i<time.length; i++ ){
            this.custNum.push(randomCostumerNum(this.minCust, this.maxCust));
        }
    
    
    
    
    

    }}
    
    function randomCostumerNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    Seattle.getCustNum();