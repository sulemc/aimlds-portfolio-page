
const url1 = ' https://cors-anywhere.herokuapp.com/http://www.rayheberer.ai/json/presentation_data.json';

const url2 = 'https://cors-anywhere.herokuapp.com/https://goofy-poitras-4bf646.netlify.com/presentation_data.json';

const url3 = 'https://cors-anywhere.herokuapp.com/https://stoic-mccarthy-ac09cf.netlify.com/presentation_data.json';



let num = 0;
function getData(url) {
    axios.get(url)
    .then(function (response) {
        let you = response.data;
        num = num+1;
        itterateObject(you);
    })
    .catch(function (error) {
        document.innerHTML = "(An error has occurred.)";

    }); 
}
let title = '';
function itterateObject (data) {
    for (var property in data){ 
        if (typeof data[property] === 'object'){
            let blog = data[property];
            for (var property2 in blog){
                if (property2 === 'title'){
                    title = blog[property2];
                }
                if (property2 === 'url'){
                    console.log(blog[property2])
                    addBlogLinkElement(blog[property2], title);
                }
                else {
               //addBlogElement (blog[property2]);
                }
            }
        }
        else{
        if (property === 'name'){
        addNameElement(data[property]);}
        if (property === 'netlify_subdomain'){
            addLinkElement(data[property]);
        }
        }
    }

}

function addNameElement (info) { 
    var newDiv = document.createElement(`div-name`); 
    var newContent = document.createTextNode(info); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }

  function addLinkElement (info) { 

    var newDiv = document.createElement("a"); 
    newDiv.href = info;
    var newContent = document.createTextNode(info) 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }

  function addBlogElement (info) { 
    var newDiv = document.createElement(`ul`); 
    var newContent = document.createTextNode(info); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }

  function addBLogLinkElement (info, articleTitle) { 
    console.log('hello')
    var newDiv = document.createElement("a"); 
    newDiv.href = info;
    var newContent = document.createTextNode(articleTitle) 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }


//getData(url1); 
getData(url2);
//getData(url3);
