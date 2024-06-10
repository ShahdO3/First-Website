if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    var removeBtns = document.getElementsByClassName('btnDanger')

    // console.log(removeBtns)
    for ( var i=0; i < removeBtns.length; i++){
        var btn = removeBtns[i]
        btn.addEventListener('click', removeItem)
    }

    var quantityInp = document.getElementsByClassName('cartQu')

    for ( var i=0; i < quantityInp.length; i++){
        var inp = quantityInp[i]
        inp.addEventListener('click', quChanged)
    }

    var shopItmBtn = document.getElementsByClassName('shopItemBtn')

    for ( var i=0; i < shopItmBtn.length; i++){
        var shopBtn = shopItmBtn[i]
        shopBtn.addEventListener('click', addedItem)
    }
}

function removeItem(event){
    var btnClicked = event.target
    btnClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <=0){
        input.value = 1
    }
    console.log(input.value)
    updateCartTotal()
}

function addedItem(event){
    var btn = event.target
}

function updateCartTotal(){
    var cartItemsContainer = document.getElementsByClassName('cartIts')[0]
    var cartRows = cartItemsContainer.getElementsByClassName('cart-row')
    var total = 0
    
    for ( var i=0; i < cartRows.length; i++){
        var row = cartRows[i]
        var priceEl = row.getElementsByClassName('cartPr')[0]
        var quantityEL = row.getElementsByClassName('cartInput')[0]

        var price = parseFloat(priceEl.innerText.replace('$', ''))
        var quantity = quantityEL.value

        total += price*quantity
    }
    if(isNaN(total)){
        total = 0
    }
    total = Math.round(total *100) / 100
    document.getElementsByClassName('cartToPrice')[0].innerText = '$' + total
}