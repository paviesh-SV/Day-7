//Task 1:
//create a XHR object
var xhr = new XMLHttpRequest();

//open method is used to get data from the URL 
xhr.open("GET", "https://restcountries.com/v3.1/all", true);

//establishing a connection with the URL data
xhr.send();

//once the data succesfuly received from server, we use onload event 
xhr.onload = function() {
    //parsing the JSON data into response
    var response = JSON.parse(xhr.responseText);

    //filter method used to filter data to output countries that are in asia
    const asia = response.filter((data) => {
        if(data.region === "Asia"){
            return data;
        }
    })
    console.log("Task 1: Name of countries located in Asia");
    
    //filter method is used to filter and output the name of the country
    asia.filter(x => console.log(x.name.common));
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//Task 2:
//create a XHR object
var xhr1 = new XMLHttpRequest();

//open method is used to get data from the URL 
xhr1.open("GET", "https://restcountries.com/v3.1/all", true);

//establishing a connection with the URL data
xhr1.send();

//once the data succesfuly received from server, we use onload event 
xhr1.onload = function() {
    //parsing the JSON data into result
    var result = JSON.parse(xhr1.responseText);

    //filter method used to filter data to output countries that have population less than 200000
    const population = result.filter(item => {
        if(item.population < 200000) {
            return item;
        }
    }) 
    console.log("Task 2: Name of countries with population less than 200000");

    ////filter method is used to filter and output the name of the country
    population.filter(y => console.log(y.name.common));
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//Task 3:
//create a XHR object
var xhr2 = new XMLHttpRequest();

//open method is used to get data from the URL 
xhr2.open("GET", "https://restcountries.com/v3.1/all", true);

//establishing a connection with the URL data
xhr2.send();

//once the data succesfuly received from server, we use onload event 
xhr2.onload = function() {
    //parsing the JSON data into response1
    var response1 = JSON.parse(xhr2.responseText);

    //forEach loop is used to output details of each country, their capital city and flag
    console.log("Task 3: Details of each country")
    response1.forEach(element => {
        console.log("Country: ",element.name.common);
        console.log("Capital City: ",element.capital);
        console.log("Flag: ",element.flag);
    })
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//Task 4:
//create a XHR object 
var xhr3 = new XMLHttpRequest();

//open method is used to get data from the URL 
xhr3.open("GET", "https://restcountries.com/v3.1/all", true);

//establishing a connection with the URL data
xhr3.send();

//once the data succesfuly received from server, we use onload event 
xhr3.onload = function() {
    //parsing the JSON data into res
    var res = JSON.parse(xhr3.responseText);

    //reduce method us used to total the population of all the countries
    var total = res.reduce((acc,curr) => {
        return acc+curr.population;
    },0);
    console.log("Task 4: Total population of all the countries is =",total);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//Task 5:
//create a XHR object
var xhr4 = new XMLHttpRequest();

//open method is used to get data from the URL 
xhr4.open("GET", "https://restcountries.com/v3.1/all", true);

//establishing a connection with the URL data
xhr4.send();

//once the data succesfuly received from server, we use onload event 
xhr4.onload = function() {
    //parsing the JSON data into res1
    var res1 = JSON.parse(xhr4.responseText);

    //filter method used to filter data to output countries that use USD as their currency
    let usd = res1.filter((money) => {
        //for loop is used to get keys named "United States dollar to get countries that use USD"
        for(let key in money.currencies) {
            if(money.currencies[key].name === "United States dollar") {
                return money;
            }
        }
    })
    console.log("Task 5: Countries that use USD as their currencies");

    //filter method is used to filter and output the name of the country
    usd.filter(z => console.log(z.name.common));
}