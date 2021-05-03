'use strict';

var hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
function random(minCustomer, maxCustomer) {
  var randomvalue= Math.random();
  return Math.floor(randomvalue * (maxCustomer - minCustomer + 1) + minCustomer);
}
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
  },


  calCoockiesPurchaisedNum: function () {
    for (var i = 0; i < hours.length; i++) {
      this.coockiesPurchaisedNum.push(Math.ceil(this.numOfCust[i] * this.avgCoockieSale));
      this.totalPerHour += this.coockiesPurchaisedNum[i];
      console.log(seattleCookies.coockiesPurchaisedNum);

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
seattleCookies.calNumOfCust();
seattleCookies.calCoockiesPurchaisedNum();
seattleCookies.render();



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
            


