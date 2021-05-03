'use strict';

var hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
/*function random(minCustomer, maxCustomer) {
  var randomvalue= Math.random();
  return Math.floor(randomvalue * (maxCustomer - minCustomer + 1) + minCustomer);
}*/

function Location(locationName, minCustomer, maxCustomer, avgCoockieSale,numOfCust, coockiesPurchaisedNum,totalPerHour) {
  this.locationName = locationName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCoockieSale = avgCoockieSale;
  this.totalPerHour=totalPerHour;
  this.numOfCust = numOfCust;
  this.coockiesPurchaisedNum = coockiesPurchaisedNum;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Location.prototype.calNumOfCust = function() {
  //this.numOfCust = random(32, 65) ;
  for (let i = 0; i < hours.length; i++) {
    //this.numOfCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
    this.numOfCust.push(random(this.minCustomer, this.maxCustomer));
    console.log(this);}

  

}
Location.prototype.calCoockiesPurchaisedNum = function() {
  //this.coockiesPurchaisedNum = random(3, 12) ;
  for (let i = 0; i < hours.length; i++) {
    this.coockiesPurchaisedNum.push(Math.ceil(this.numOfCust[i] * this.avgCoockieSale));
    this.totalPerHour += this.coockiesPurchaisedNum[i];
   console.log(this.coockiesPurchaisedNum);
   console.log(this);
  
}}
/*
//Seattle
let seattleCookies = {
  locationName: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCoockieSale: 6.3,
  numOfCust: [],
  coockiesPurchaisedNum: [],
  totalPerHour: 0,
  calNumOfCust: function () {
    for (let i = 0; i < hours.length; i++) {
      //this.numOfCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
      this.numOfCust.push(random(this.minCustomer, this.maxCustomer));

    }
    console.log(this);
  }


  calCoockiesPurchaisedNum: function () {
    for (var i = 0; i < hours.length; i++) {
      this.coockiesPurchaisedNum.push(Math.ceil(this.numOfCust[i] * this.avgCoockieSale));
      this.totalPerHour += this.coockiesPurchaisedNum[i];
      console.log(seattleCookies.coockiesPurchaisedNum);

    }
  } */
  let container = document.getElementById('SalmonCookiesContent');


  Location.prototype.render = function() {
    this.calNumOfCust();
    this.calCoockiesPurchaisedNum();

     let article = document.createElement('article');
    container.appendChild(article);

    // h2
    let h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = this.locationName;

    // p
    let p = document.createElement('p');
    article.appendChild(p);
    p.textContent = `${this.locationName} is one of location and is ${this.minCustomer} minimum number of customer in it and its is ${this.maxCustomer} maximum number of customer.`


    let ul = document.createElement('ul');
    // append
    article.appendChild(ul);
    for (let i = 0; i < this.numOfCust.length; i++) {
      // console.log(this.likes[i]);
      // create li
      let li = document.createElement('li');
      // append
      ul.appendChild(li);
      li.textContent = `Number of customer: ${this.numOfCust[i]}`;
  }
  for (let i = 0; i < this.coockiesPurchaisedNum.length; i++) {
     console.log(this.coockiesPurchaisedNum[i]);
    // create li
    let li = document.createElement('li');
    // append
   // ul.appendChild(li);
    //li.textContent = this.coockiesPurchaisedNum[i];
    


}
for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = `${hours[i]}:${this.coockiesPurchaisedNum[i]} cookies`
}
let totalLi = document.createElement('li');
ul.appendChild(totalLi);
totalLi.textContent = `Total: ${this.totalPerHour} cookies`



let img = document.createElement('img');
article.appendChild(img);

img.setAttribute('src', `img/salmon.png`);
  }

  
  



  Location.prototype.tableRender = function() {
   


    let table = document.createElement('table');
    container.appendChild(table);
    console.log(container);

    let headRow = document.createElement('tr');
    table.appendChild(headRow);
    // the header
    let th1 = document.createElement('th');
    headRow.appendChild(th1);
    th1.textContent = '';
for(let i =0; i<hours.length;i++){
    let th2 = document.createElement('th');
    headRow.appendChild(th2);
    th2.textContent = hours[i];}

    //let th3 = document.createElement('th');
    //headRow.appendChild(th3);
    //th3.textContent = 	'';

    // rows for the values
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    // td

    let td1 = document.createElement('td');
    dataRow.appendChild(td1);
    td1.textContent = this.locationName;
   

   // for(let i =0; i<hours.length;i++){
    //let td2 = document.createElement('td');
    //dataRow.appendChild(td2);
    //td2.textContent = '';

    //let td3 = document.createElement('td');
    //dataRow.appendChild(td3);
    //td3.textContent = this.hours;
}
let seatttle = new Location('seatttle', 23, 65, 6.3,  [], []);
console.log(seatttle);
 seatttle.render();
 seatttle.calNumOfCust();
 seatttle.calCoockiesPurchaisedNum();
 seatttle.tableRender();

 let tokyo = new Location('tokyo', 3, 24, 1.2, [], []);
console.log(tokyo);
 tokyo.render();
 tokyo.calNumOfCust();
 tokyo.calCoockiesPurchaisedNum();
 tokyo.tableRender();

 let dubai = new Location('dubai', 11, 38, 3.7, [], []);
console.log(dubai);
 dubai.render();
 dubai.calNumOfCust();
 dubai.calCoockiesPurchaisedNum();
 dubai.tableRender();

 let paris = new Location('paris', 23, 65, 6.3, [], []);
console.log(paris);
 paris.render();
 paris.calNumOfCust();
 paris.calCoockiesPurchaisedNum();
 paris.tableRender();

 let lima = new Location('lima', 23, 65, 6.3, [], []);
console.log(lima);
 lima.render();
 lima.calNumOfCust();
 lima.calCoockiesPurchaisedNum();
 lima.tableRender();






/*
  render: function () {
    let container = document.getElementById('SalmonCookiesContent');
    let h2Element = document.createElement('h2');
    container.appendChild(h2Element);
    h2Element.textContent = this.locationName;
    let ulElement = document.createElement('ul');
    container.appendChild(ulElement);
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${hours[i]}:${this.coockiesPurchaisedNum[i]} cookies`
    }
    let totalLi = document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent = `Total: ${this.totalPerHour} cookies`

  }

}*/
/*seattleCookies.calNumOfCust();
seattleCookies.calCoockiesPurchaisedNum();
seattleCookies.render();*?


/*
//Tokyo
let tokyoCookies = {
  locationName: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCoockieSale: 1.2,
  numOfCust: [],
  coockiesPurchaisedNum: [],
  totalPerHour: 0,
  calNumOfCust: function () {
    for (let i = 0; i < hours.length; i++) {
      //this.numOfCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
      this.numOfCust.push(random(this.minCustomer, this.maxCustomer));

    }
  },


   calCoockiesPurchaisedNum: function () {
    for (var i = 0; i < hours.length; i++) {
      this.coockiesPurchaisedNum.push(Math.ceil(this.numOfCust[i] * this.avgCoockieSale));
      this.totalPerHour += this.coockiesPurchaisedNum[i];
      console.log(tokyoCookies.coockiesPurchaisedNum);

    }
  },



  render: function () {
    let container = document.getElementById('SalmonCookiesContent');
    let h2Element = document.createElement('h2');
    container.appendChild(h2Element);
    h2Element.textContent = this.locationName;
    let ulElement = document.createElement('ul');
    container.appendChild(ulElement);
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${hours[i]}:${this.coockiesPurchaisedNum[i]} cookies`
    }
    let totalLi = document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent = `Total: ${this.totalPerHour} cookies`

  }

}
tokyoCookies.calNumOfCust();
tokyoCookies.calCoockiesPurchaisedNum();
tokyoCookies.render();



//Dubai
let dubaiCookies = {
  locationName: 'Dubai',
  minCustomer: 3,
  maxCustomer: 24,
  avgCoockieSale: 1.2,
  numOfCust: [],
  coockiesPurchaisedNum: [],
  totalPerHour: 0,
  calNumOfCust: function () {
    for (let i = 0; i < hours.length; i++) {
      //this.numOfCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
      this.numOfCust.push(random(this.minCustomer, this.maxCustomer));

    }
  },


   calCoockiesPurchaisedNum: function () {
    for (var i = 0; i < hours.length; i++) {
      this.coockiesPurchaisedNum.push(Math.ceil(this.numOfCust[i] * this.avgCoockieSale));
      this.totalPerHour += this.coockiesPurchaisedNum[i];
      console.log(dubaiCookies.coockiesPurchaisedNum);

    }
  },



  render: function () {
    let container = document.getElementById('SalmonCookiesContent');
    let h2Element = document.createElement('h2');
    container.appendChild(h2Element);
    h2Element.textContent = this.locationName;
    let ulElement = document.createElement('ul');
    container.appendChild(ulElement);
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${hours[i]}:${this.coockiesPurchaisedNum[i]} cookies`
    }
    let totalLi = document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent = `Total: ${this.totalPerHour} cookies`

  }

}
dubaiCookies.calNumOfCust();
dubaiCookies.calCoockiesPurchaisedNum();
dubaiCookies.render();




           //Paris

           let parisCookies = {
            locationName: 'Paris',
            minCustomer: 3,
            maxCustomer: 24,
            avgCoockieSale: 1.2,
            numOfCust: [],
            coockiesPurchaisedNum: [],
            totalPerHour: 0,
            calNumOfCust: function () {
              for (let i = 0; i < hours.length; i++) {
                //this.numOfCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
                this.numOfCust.push(random(this.minCustomer, this.maxCustomer));
          
              }
            },
          
          
             calCoockiesPurchaisedNum: function () {
              for (var i = 0; i < hours.length; i++) {
                this.coockiesPurchaisedNum.push(Math.ceil(this.numOfCust[i] * this.avgCoockieSale));
                this.totalPerHour += this.coockiesPurchaisedNum[i];
                console.log(parisCookies.coockiesPurchaisedNum);
          
              }
            },
          
          
          
            render: function () {
              let container = document.getElementById('SalmonCookiesContent');
              let h2Element = document.createElement('h2');
              container.appendChild(h2Element);
              h2Element.textContent = this.locationName;
              let ulElement = document.createElement('ul');
              container.appendChild(ulElement);
              for (let i = 0; i < hours.length; i++) {
                let liElement = document.createElement('li');
                ulElement.appendChild(liElement);
                liElement.textContent = `${hours[i]}:${this.coockiesPurchaisedNum[i]} cookies`
              }
              let totalLi = document.createElement('li');
              ulElement.appendChild(totalLi);
              totalLi.textContent = `Total: ${this.totalPerHour} cookies`
          
            }
          
          }
          parisCookies.calNumOfCust();
          parisCookies.calCoockiesPurchaisedNum();
          parisCookies.render();
          





             //Lima

             let limaCookies = {
              locationName: 'Lima',
              minCustomer: 3,
              maxCustomer: 24,
              avgCoockieSale: 1.2,
              numOfCust: [],
              coockiesPurchaisedNum: [],
              totalPerHour: 0,
              calNumOfCust: function () {
                for (let i = 0; i < hours.length; i++) {
                  //this.numOfCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
                  this.numOfCust.push(random(this.minCustomer, this.maxCustomer));
            
                }
              },
            
            
               calCoockiesPurchaisedNum: function () {
                for (var i = 0; i < hours.length; i++) {
                  this.coockiesPurchaisedNum.push(Math.ceil(this.numOfCust[i] * this.avgCoockieSale));
                  this.totalPerHour += this.coockiesPurchaisedNum[i];
                  console.log(limaCookies.coockiesPurchaisedNum);
            
                }
              },
            
            
            
              render: function () {
                let container = document.getElementById('SalmonCookiesContent');
                let h2Element = document.createElement('h2');
                container.appendChild(h2Element);
                h2Element.textContent = this.locationName;
                let ulElement = document.createElement('ul');
                container.appendChild(ulElement);
                for (let i = 0; i < hours.length; i++) {
                  let liElement = document.createElement('li');
                  ulElement.appendChild(liElement);
                  liElement.textContent = `${hours[i]}:${this.coockiesPurchaisedNum[i]} cookies`
                }
                let totalLi = document.createElement('li');
                ulElement.appendChild(totalLi);
                totalLi.textContent = `Total: ${this.totalPerHour} cookies`
            
              }
            
            }
            limaCookies.calNumOfCust();
            limaCookies.calCoockiesPurchaisedNum();
            limaCookies.render();
            


*/