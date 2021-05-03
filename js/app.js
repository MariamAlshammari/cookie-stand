'use strict';

var hours=["6am " ,'7am ','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];
 
//Seattle
let seattleCookies={
   
    minCustomer:23,
    maxCustomer:65,
    avgCoockieSale:6.3,
    numOfCust:[],
    coockiesPurchaisedNum:[],
    getRandomNum:function(){
        for (let i=0; i<hours.length; i++ ){
        this.numOfCust = randomCustNum(23, 65) ;
        console.log(this.numOfCust+'   '+hours[i]);
    }}
    
    }
    function randomCustNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    seattleCookies.getRandomNum();
    console.log(seattleCookies);

    let coockiesAmounts =function(){
        this.randomCustNum();
        for(var i = 0; i < hours.length; i++){
          this.coockiesPurchaisedNum.push(Math.ceil(this.numOfCust[i] * this.avgCoockieSale));
          console.log(seattleCookies.coockiesPurchaisedNum);

        } 

      }
      let totalNum=function(){
        var total = 0;
        for(var i = 0; i < hours.length; i++){
          total += this.coockiesPurchaisedNum[i];
        }
        return total;}
        //console.log(coockiesPurchaisedNum);
        //console.log(coockiesPurchaisedNum);
      console.log(seattleCookies.coockiesPurchaisedNum);
         //


    //Tokyo

    let tokyoCookies={
   
        
        minCustomer: 3,
        maxCustomer: 24,
        avgCookieSale: 1.2,
        numOfCust:[],
        coockiesPurchaisedNum:[],
        getRandomNum:function(){
            for (let i=0; i<hours.length; i++ ){
                this.numOfCust = randomCustNum(3, 24) ;
                console.log(this.numOfCust+'   '+hours[i]);
            }}
            
            }
            function randomCustNum(min, max) {
              return Math.floor(Math.random() * (max - min) + min);
            }
            tokyoCookies.getRandomNum();
            console.log(tokyoCookies);
        
            coockiesAmounts =function(){
                this.randomCustNum();
                for(var i = 0; i < hours.length; i++){
                  this.coockiesPurchaisedNum.push(Math.ceil(this.numOfCust[i] * this.avgCoockieSale));
                  console.log(tokyoCookies.coockiesPurchaisedNum);
        
                } 
              }
              totalNum=function(){
                var total = 0;
                for(var i = 0; i < hours.length; i++){
                  total += this.coockiesPurchaisedNum[i];
                }
                return total;}
                //console.log(coockiesPurchaisedNum);
              console.log(tokyoCookies.coockiesPurchaisedNum);



        //Dubai
        let dubaiCookies={
   
            minCustomer: 11,
            maxCustomer: 38,
            avgCookieSale: 3.7,
            numOfCust:[],
            coockiesPurchaisedNum:[],
            getRandomNum:function(){
                 for (let i=0; i<hours.length; i++ ){
                this.numOfCust = randomCustNum(11, 38) ;
                console.log(this.numOfCust+'   '+hours[i]);
            }}
            
            }
            function randomCustNum(min, max) {
              return Math.floor(Math.random() * (max - min) + min);
            }
            dubaiCookies.getRandomNum();
            console.log(dubaiCookies);
        
            coockiesAmounts =function(){
                this.randomCustNum();
                for(var i = 0; i < hours.length; i++){
                  this.coockiesPurchaisedNum.push(Math.ceil(this.numOfCust[i] * this.avgCoockieSale));
                  console.log(dubaiCookies.coockiesPurchaisedNum);
        
                } 
              }
              totalNum=function(){
                var total = 0;
                for(var i = 0; i < hours.length; i++){
                  total += this.coockiesPurchaisedNum[i];
                }
                return total;}
              console.log(dubaiCookies.coockiesPurchaisedNum);



            //Paris

            let parisCookies={
   
                minCustomer: 20,
                maxCustomer: 38,
                avgCookieSale: 2.3,
                numOfCust:[],
                coockiesPurchaisedNum:[],
                getRandomNum:function(){
                     for (let i=0; i<hours.length; i++ ){
                    this.numOfCust = randomCustNum(20, 38) ;
                    console.log(this.numOfCust+'   '+hours[i]);
                }}
                
                }
                function randomCustNum(min, max) {
                  return Math.floor(Math.random() * (max - min) + min);
                }
                parisCookies.getRandomNum();
                console.log(parisCookies);
            
                coockiesAmounts =function(){
                    this.randomCustNum();
                    for(var i = 0; i < hours.length; i++){
                      this.coockiesPurchaisedNum.push(Math.ceil(this.numOfCust[i] * this.avgCoockieSale));
                      console.log(parisCookies.coockiesPurchaisedNum);
            
                    } 
                  }
                  totalNum=function(){
                    var total = 0;
                    for(var i = 0; i < hours.length; i++){
                      total += this.coockiesPurchaisedNum[i];
                    }
                    return total;}
                  console.log(parisCookies.coockiesPurchaisedNum);



                
                
             //Lima

                   let limaCookies={
   
                    minCustomer: 2,
                    maxCustomer: 16,
                    avgCookieSale: 4.6,
                    numOfCust:[],
                    coockiesPurchaisedNum:[],
                    getRandomNum:function(){
                         for (let i=0; i<hours.length; i++ ){
                        this.numOfCust = randomCustNum(2, 16) ;
                        console.log(this.numOfCust+'   '+hours[i]);
                    }}
                    
                    }
                    function randomCustNum(min, max) {
                      return Math.floor(Math.random() * (max - min) + min);
                    }
                    limaCookies.getRandomNum();
                    console.log(limaCookies);
                
                    coockiesAmounts =function(){
                        this.randomCustNum();
                        for(var i = 0; i < hours.length; i++){
                          this.coockiesPurchaisedNum.push(Math.ceil(this.numOfCust[i] * this.avgCoockieSale));
                          console.log(limaCookies.coockiesPurchaisedNum);
                
                        } 
                      }
                      totalNum=function(){
                        var total = 0;
                        for(var i = 0; i < hours.length; i++){
                          total += this.coockiesPurchaisedNum[i];
                        }
                        return total;}
                      console.log(limaCookies.coockiesPurchaisedNum);
    


    