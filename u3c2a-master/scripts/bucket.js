// On clicking remove button the item should be removed from DOM as well as localstorage.
var data= JSON.parse (localStorage.getItem("coffee"))||[];
var totalAmout=JSON.parse (localStorage.getItem("total"));
document.getElementById("total_amount").innerHTML=totalAmout;
// console.log('totalAmout:', totalAmout)
// console.log('data:', data);
function mapping(data){
    console.log('data:', data)
    data.forEach((el,ind) => {
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
        btn.setAttribute("id","remove_coffee")
        btn.addEventListener("click",function(){
            remove(ind,el)
        })
        btn.innerText="remove";
        row.append(img,p2,p3,btn);
        document.getElementById("bucket").append(row);
    });


}
mapping(data);
function remove(ind,elem){
    console.log('ind:', ind)
    data.splice(ind,1);
    localStorage.setItem("coffee",JSON.stringify(data));
    totalAmout=totalAmout-elem.price;
    localStorage.setItem("total",totalAmout);
    console.log('totalAmout:', totalAmout)
    // console.log('total:', total)
    window.location.reload();
}