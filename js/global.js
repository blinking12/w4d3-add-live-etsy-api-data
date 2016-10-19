var searchItem = 'board games'
fetchRequest()
function fetchRequest(items) {


fetch('https://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchItem) + '&includes=Images,Shop'))

    .then(response => response.json())
    // .then(response => createResultCard(response.results))
    .then(function(items) {
        document.getElementById('searchResults').innerHTML = ''
        items.results.forEach(function(item) {
            var col = document.createElement('div')
            col.className = 'col-sm-3'

            var card = document.createElement('div')
            card.className = 'card'
            col.appendChild(card)

            var img = document.createElement('img')
            img.setAttribute('src', item.Images[0].url_fullxfull)
            img.className = 'prevImage'
            card.appendChild(img)

            var span = document.createElement('span')
            span.innerHTML = item.title
            card.appendChild(span)

            var row = document.createElement('div')
            row.className = 'row'
            card.appendChild(row)

            var colLeft = document.createElement('div')
            colLeft.className = 'col-xs-6 text-muted sellerFont'
            colLeft.innerHTML = item.Shop.shop_name
            row.appendChild(colLeft)

            var colRight = document.createElement('div')
            colRight.className = 'col-xs-6 text-right text-success'
            colRight.innerHTML = item.price
            row.appendChild(colRight)

            document.querySelector('#searchResults').appendChild(col)
        })
    })
}

// Collin's sample code from 10-19
function createResultCard(item) {
    var col = document.createElement('div')
    col.className = 'col-sm-3'

    var card = document.createElement('div')
    card.className = 'card'
    col.appendChild(card)

    var img = document.createElement('img')
    img.setAttribute('src', item.image)
    card.appendChild(img)

    var span = document.createElement('span')
    span.innerHTML = item.title
    card.appendChild(span)

    var row = document.createElement('div')
    row.className = 'row'
    card.appendChild(row)

    var colLeft = document.createElement('div')
    colLeft.className = 'col-xs-6 text-muted'
    colLeft.innerHTML = item.seller
    row.appendChild(colLeft)

    var colRight = document.createElement('div')
    colRight.className = 'col-xs-6 text-right text-success'
    colRight.innerHTML = item.price
    row.appendChild(colRight)

    document.querySelector('#searchResults').appendChild(col)
}

function makeRandomAmount() {
    return '$' + Math.round(Math.random() * 100) + '.00'
}

document.querySelector('#searchButton').addEventListener('click', search)
document.querySelector('#termSearch').addEventListener('keypress', searchEnter)

function searchEnter(event) {
    if (event.key === 'Enter') {
        search()
    }
}
function search() {
    searchItem = document.getElementById('termSearch').value
fetchRequest()
}

// document.getElementById("id_of_textbox")
//     .addEventListener("keypress", function(event) {
//     event.preventDefault();
//     if (event.keyCode == 13) {
//         document.getElementById("id_of_button").click();
//     }
// });

// var items = [
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
//     {
//         title: 'A title of a product',
//         image: 'http://unsplash.it/200?image=',
//         seller: 'sellername',
//         price: makeRandomAmount()
//     },
// ]
//
// //console.log(items)
//
// function makeCards(cardItems) {
//     document.querySelector('#searchResults').innerHTML = ''
//
//     cardItems.forEach(function(item, i) {
//         item.title += i
//         item.image += i
//         item.seller += i
//         createResultCard(item)
//     })
// }

// end of Collin's sample code from 10-19


//example from 10-18
/*
    <div class="col-sm-3">
        <img src="http://unsplash.it/200?random">
        <span>Title Goes Here</span>
        <div class="row">
            <div class="col-sm-6 text-muted">
                ElGranero
            </div>
            <div class="col-sm-6 text-right text-success">
                $177.64
            </div>
        </div>
    </div>
*/

//end example from 10-18

// my code from 10-18
// function createResultCard(item) {
//   var card = document.createElement('div')
//   card.classList.add('col-sm-3')
//
//   var image = document.createElement('img')
//   image.setAttribute('src', item.image)
//   card.appendChild(image)
//
//   var span = document.createElement('span')
//   span.innerHTML = item.title
//   card.appendChild(span)
//
//   var div1 = document.createElement('div1')
//   div1.innerHTML = item.seller
//   card.appendChild(div1)
//
//   var div2 = document.createElement('div2')
//   div2.innerHTML = item.price
//   card.appendChild(div2)
//
//   document.querySelector('#searchResults.row').appendChild(card)
// }
// my code from 10-18 end

//  My code from 10-18
// createResultCard({
//   image: 'http://unsplash.it/200?random',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })
//
// createResultCard({
//   image: 'http://unsplash.it/200?random',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })
//
// createResultCard({
//   image: 'http://unsplash.it/200?random',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })
//
// createResultCard({
//   image: 'http://unsplash.it/200?random',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })
//
// createResultCard({
//   image: 'http://unsplash.it/200?random',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })
//
// createResultCard({
//   image: 'http://unsplash.it/200?random',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })
//
// createResultCard({
//   image: 'http://unsplash.it/200?random',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })
//
// createResultCard({
//   image: 'http://unsplash.it/200?random',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })
//
// createResultCard({
//   image: 'http://unsplash.it/200?random',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })
//
// createResultCard({
//   image: 'http://unsplash.it/200?random',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })
//
// createResultCard({
//   image: 'http://unsplash.it/200?random',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })
//
// createResultCard({
//   image: 'http://unsplash.it/200?random',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })
//end of my code from 10-18

//class lecture code 10/19

// var items = [
//     {
//         image: 'http://unsplash.it/200?random',
//         title: 'Vintage Board Game Art Wall Home Decor',
//         seller: 'franz66',
//         price: 15.00
//     },
// ]
//not required if you put in data
// items.forEach(function(item, i) {
//     // item.title += i
//     // item.image += i
//     // item.seller += i
//     createResultCard(item)
// })
