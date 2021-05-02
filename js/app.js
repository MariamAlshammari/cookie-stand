'use strict';

var hours=["6am " ,'7am ','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];
 
//Seattle
let seattleCookies={
   
    min:23,
    max:65,
    avgCoockieSale:6.3,
    randomNum:[],
    coockiesPurchaisedNum:[],
    getRandomNum:function(){
        for (let i=0; i<hours.length; i++ ){
            this.randomNum.push(randomCustNum(this.min, this.max));
        }}
    }
    function randomCustNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    seattleCookies.getRandomNum();
    console.log(seattleCookies.getRandomNum());


    //Tokyo

    let tokyoCookies={
   
        location: 'Tokyo',
        min: 3,
        max: 24,
        avgCookieSale: 1.2,
        randomNum:[],
        coockiesPurchaisedNum:[],
        getRandomNum:function(){
            for (let i=0; i<hours.length; i++ ){
                this.randomNum.push(randomCustNum(this.min, this.max));
            }}
        }
        function randomCustNum(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
        }
        tokyoCookies.getRandomNum();
        console.log(tokyoCookies.getRandomNum());



        //Dubai
        let dubaiCookies={
   
            min: 11,
            max: 38,
            avgCookieSale: 3.7,
            randomNum:[],
            coockiesPurchaisedNum:[],
            getRandomNum:function(){
                for (let i=0; i<hours.length; i++ ){
                    this.randomNum.push(randomCustNum(this.min, this.max));
                }}
            }
            function randomCustNum(min, max) {
              return Math.floor(Math.random() * (max - min) + min);
            }
            dubaiCookies.getRandomNum();
            console.log(dubaiCookies.getRandomNum());




            //Paris

            let parisCookies={
   
                min: 20,
                max: 38,
                avgCookieSale: 3.7,
                randomNum:[],
                coockiesPurchaisedNum:[],
                getRandomNum:function(){
                    for (let i=0; i<hours.length; i++ ){
                        this.randomNum.push(randomCustNum(this.min, this.max));
                    }}
                }
                function randomCustNum(min, max) {
                  return Math.floor(Math.random() * (max - min) + min);
                }
                parisCookies.getRandomNum();
                console.log(parisCookies.getRandomNum());



                
                
             //Lima

                   let limaCookies={
   
                    min: 20,
                    max: 38,
                    avgCookieSale: 3.7,
                    randomNum:[],
                    coockiesPurchaisedNum:[],
                    getRandomNum:function(){
                        for (let i=0; i<hours.length; i++ ){
                            this.randomNum.push(randomCustNum(this.min, this.max));
                        }}
                    }
                    function randomCustNum(min, max) {
                      return Math.floor(Math.random() * (max - min) + min);
                    }
                    limaCookies.getRandomNum();
                    console.log(limaCookies.getRandomNum());
    


    
        