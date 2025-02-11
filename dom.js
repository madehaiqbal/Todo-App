//h1 tag//

//var headingone = document.createElement("h1");

// put inner taext in h1 tag
//headingone.innerText= "Hello";

//put text in doucment help of append method

//document.body.append(headingone)


//console.log(headingone)





//h2 tag

//var para =document.createElement("p");

//innertext sirif text likhe ga tags ko bhi text mai likhe ga 

//para.innerText="this is<b> para </b>"



// innnerhtml sa ya hoga ka wo text to likhe ga hi magar tags ko samjhe ga
//para.innerHTML="This is <b> para </b>";


//document.body.append(para)

//console.log(para)



//create img tag 
//<img src="image.jpg" alt="image" width="100" height="100">

//var userimage = document.createElement("img");

//userimage.src="https://cdn-icons-png.flaticon.com/512/219/219970.png";
//userimage.alt="user image";
//userimage.width="100";
//userimage.height="100";

//console.log(userimage)
//append method help of append method image tag ko body mai add karega

//document.body.append(userimage)



//create input field

//var input=document.createElement("input");

//input.type="text";
//input.placeholder="Enter your name";
//input.classList= "form-control";
//input.id="name"
//append method help of append method input field ko body mai add karega


//document.body.append(input)



//create button tag

//var greetbtn =document.createElement("button");

//greetbtn.innerText="Click me";
//greetbtn.type ="button"
//greetbtn.classList = "btn btn-dark "

//append method help of append method button tag ko body mai add karega

//document.body.append(greetbtn)


//greetbtn.addEventListener('click', greet)


//function greet(){
//alert("Hello, World!" + name)

//var name = document.getElementById("name").value;


//}


//create card 


/* <div class="row">
<div class="col-mnd-4">
    <img src="" alt="">
    <h3></h3>
    <p></p>
    <button></button>
</div>
</div> */

/* step 01
6 . create div tag with class row
 div row tag
 div col tag
img tag
h3 tag
p tag
button tag

step 02
 phir 4 main tag ko col wali div mai append kary ge

step 03 
 col waly div ko row waly div mai append kary ge
 */



// div row tag banae ge

var Product_card_parent_Division = document.createElement("div");
Product_card_parent_Division.classList = "row";


//img tag banae ge


var Product_img = document.createElement("img");
Product_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0N4BiRjLTrpCuasLz5tKCArWs_iO-VeLEg&s";
classlist = "card-img-top"


//h3 tag banae ge

var product_name = document.createElement("h3");
product_name.innerText = "Makeup";


//p tag banae ge

var product_description = document.createElement("p");
product_description.innerText = "Makeup is a cosmetic product used to enhance or alter the appearance "


//button tag banae ge

var button = document.createElement("button");
button.innerText = "Buy Now";
button.classList = "btn btn-primary btn-sm"


//col division

var Product_child_division = document.createElement("div");
Product_child_division.classList = " card col-md-4";



//append karae ge img h3 para or button ko col div mai

Product_child_division.append(Product_img)
Product_child_division.append(product_name)
Product_child_division.append(product_description)
Product_child_division.append(button)


console.log(Product_card_parent_Division)



Product_card_parent_Division.append(Product_child_division)

document.body.append(Product_card_parent_Division)



var fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

fruits.forEach(
    (element, index) => {


        //console.log(`${index} - ${element}`)
    }

)

var user = [
    {username:"mahan ",userid:1},
]

user.forEach(
    (element, index) => {


        console.log(element.username)
    }
)