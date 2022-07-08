// Add the coffee to local storage with key "coffee"
var count=0;
var total=0;
async function menu(){
    console.log('menu:')

    var url=`https://masai-mock-api.herokuapp.com/coffee/menu`
    var data= await  fetch(url);
    var res= await data.json()
    // console.log('res:', res.menu.data);
   mapThis( res.menu.data);
}
menu();
function mapThis(data){
    document.getElementById("menu").innerHTML=null;
    data.forEach(el => {
        // console.log('el:', el)
        let row =document.createElement("div");
        row.setAttribute("class","row")
        // type of coffee, image, price and 
        // add to bucket button
        let img=document.createElement("img");
        img.src=el.image;
        // let p1=document.createElement("p");
        // p1.innerText=el.description;
        let p2=document.createElement("p");
        p2.innerText=el.title;
        let p3=document.createElement("p");
        p3.innerText=el.price;
        let btn=document.createElement("button");
        btn.addEventListener("click",function(){
            addToCart(el)
        })
        btn.innerText="Add to Bucket";
        row.append(img,p2,p3,btn);
        document.getElementById("menu").append(row);
    });
}
var array=JSON.parse(localStorage.getItem("coffee")) ||[];
function addToCart(elem){
    // console.log('elem:', elem)
    count++;
    total+=elem.price;
    array.push(elem);
    document.getElementById("coffee_count").innerHTML=array.length;

localStorage.setItem("coffee",JSON.stringify(array));
localStorage.setItem("total",JSON.stringify(total));
// ocalStorage.setItem("coffee_count",JSON.stringify(array.length));

// console.log('array:', array);
}
