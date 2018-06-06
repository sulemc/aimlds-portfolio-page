
const url1 = ' https://cors-anywhere.herokuapp.com/http://www.rayheberer.ai/json/presentation_data.json';

const url2 = 'https://cors-anywhere.herokuapp.com/https://goofy-poitras-4bf646.netlify.com/presentation_data.json';

const url3 = 'https://cors-anywhere.herokuapp.com/https://stoic-mccarthy-ac09cf.netlify.com/presentation_data.json';
function getData(url) {
    axios.get(url)
    .then(function (response) {
        let you = response.data;
        itterateObject(you);
    })
    .catch(function (error) {
        person.innerHTML = "(An error has occurred.)";

    }); 
}

function itterateObject (data) {
    for (var property in data){ 
        if (typeof data[property] === 'object'){
            let blog = data[property];
            for (var property2 in blog){
               addElement (blog[property2]);
            }
        }
        else{
        addElement(data[property]);
        }
    }
        return string1;
}

function addElement (info) { 
    var newDiv = document.createElement("ul"); 
    var newContent = document.createTextNode(info); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
  
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }

getData(url1); 
getData(url2);
getData(url3);
