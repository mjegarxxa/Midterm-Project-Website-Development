const product = [
    {
        id: 0,
        image: 'img/394471001_1284603765556569_5406285725725285116_n.jpg',
        title: 'Whole Fried Chicken',
        price: 279.00,
    },
    {
        id: 1,
        image: 'img/431035413_432788492544258_841941062140042813_n.jpg',
        title: 'Chicken Lumpia',
        price: 105.00,
    },
    {
        id: 2,
        image: 'img/mtchospitality_ukmarinadedroastchicken_1560854343IMG_20190411_095955.jpg',
        title: 'Half Fried Chicken',
        price: 150.00,
    },
    {
        id: 3,
        image: 'img/air-fried-chicken-drumsticks.jpg',
        title: 'Chicken Drumsticks',
        price: 129.00,
    },
    {
        id: 4,
        image: 'img/fried-chicken-necks-white-background_51524-17595.jpg',
        title: 'Chicken Neck Platter',
        price: 89.00,
    },
    {
        id: 5,
        image: 'img/360013755_295872859466945_247336825748546183_n.jpg',
        title: 'Chicken Skin Platter',
        price: 89.00,
    },
    {
        id: 6,
        image: 'img/air-fryer-chicken-quarters-l.jpg',
        title: 'Quarter Chicken',
        price: 135.00,
    },
    {
        id: 7,
        image: 'img/Fried-Siomai.jpg',
        title: 'Fried Siomai',
        price: 69.00,
    },
]
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
              <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>P ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty!";
        document.getElementById("total").innerHTML = "P "+0+".00";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "P "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                   <img class='rowimg' src=${image}>
                </div>
                <p style='font-size: 12px;'>${title}</p>
                <h2 style='font-size: 15px;'>P ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                );
        }).join('');
    }
}
