document.addEventListener("DOMContentLoaded", function(event) { 
    
    var items = document.querySelectorAll('.item');
    
    var totalElement = document.querySelector('#total-value');
    var totalValue = 0;

    var totalWithoutDiscountElement = document.querySelector('#total-without-discount-value');
    var totalWithoutDiscountValue = 0;

    var totalDiscountElement = document.querySelector('#total-discount-value');
    var totalDiscountValue = 0;

    

    [].forEach.call(items, function(item) {

        var amountElement = item.querySelector('.amount-value');
        var amountValue = amountElement.textContent;
        
        var itemPriceElement = item.querySelector('.actual-price').querySelector('.price-value');
        var itemPriceValue = parseInt(itemPriceElement.innerText);

        var itemOldPriceElement = item.querySelector('.old-price').querySelector('.price-value');
        var itemOldPriceValue = parseInt(itemOldPriceElement.innerText);
        var itemDiscountValue = itemOldPriceValue - itemPriceValue;
        
        var itemPriceCalculated = amountValue * itemPriceValue;
        var itemOldPriceCalculated = amountValue * itemOldPriceValue;
        var itemDiscountCalculated = itemOldPriceCalculated - itemPriceCalculated;


        totalValue += itemPriceCalculated;
        totalElement.innerHTML = totalValue;

        totalWithoutDiscountValue += itemOldPriceCalculated;
        totalWithoutDiscountElement.innerHTML = totalWithoutDiscountValue;

        totalDiscountValue += itemDiscountCalculated;
        totalDiscountElement.innerHTML = totalDiscountValue;

        console.log(itemPriceValue + ' x ' + amountValue);

        var amountIncrementButton = item.querySelector('.amount-increace');
        var amountDecrementButton = item.querySelector('.amount-decreace');

        amountIncrementButton.onclick = function(e) {
            amountValue++;

            itemPriceCalculated = amountValue * itemPriceValue;
            itemOldPriceCalculated = amountValue * itemOldPriceValue;
            itemDiscountCalculated = itemOldPriceCalculated - itemPriceCalculated;

            totalValue = totalValue + itemPriceValue;
            totalElement.innerHTML = totalValue;

            totalWithoutDiscountValue += itemOldPriceValue;
            totalWithoutDiscountElement.innerHTML = totalWithoutDiscountValue;

            totalDiscountValue += itemDiscountValue;
            totalDiscountElement.innerHTML = totalDiscountValue;

            amountElement.innerHTML = amountValue;
            itemPriceElement.innerHTML = itemPriceCalculated;
            itemOldPriceElement.innerHTML = itemOldPriceCalculated;
            if (amountValue > 1) {
                amountDecrementButton.removeAttribute('disabled');
            }
        }

        amountDecrementButton.onclick = function(e) {
            amountValue--;

            itemPriceCalculated = amountValue * itemPriceValue;
            itemOldPriceCalculated = amountValue * itemOldPriceValue;
            itemDiscountCalculated = itemOldPriceCalculated - itemPriceCalculated;

            totalValue -= itemPriceValue;
            totalElement.innerHTML = totalValue;

            totalWithoutDiscountValue -= itemOldPriceValue;
            totalWithoutDiscountElement.innerHTML = totalWithoutDiscountValue;

            totalDiscountValue -= itemDiscountValue;
            totalDiscountElement.innerHTML = totalDiscountValue;


            amountElement.innerHTML = amountValue;
            itemPriceElement.innerHTML = itemPriceCalculated;
            itemOldPriceElement.innerHTML = itemOldPriceCalculated;
            if (amountValue == 1) {
                amountDecrementButton.setAttribute('disabled', 'true');
            }
        }
        
        var buttonRemove = item.querySelector('.item-remove');
        buttonRemove.onclick = function(e) {

            totalValue -= itemPriceCalculated;
            totalElement.innerHTML = totalValue;

            totalWithoutDiscountValue -= itemOldPriceCalculated;
            totalWithoutDiscountElement.innerHTML = totalWithoutDiscountValue;

            totalDiscountValue -= itemDiscountCalculated;
            totalDiscountElement.innerHTML = totalDiscountValue;

            item.remove();

            if (totalValue == 0) {
                document.querySelector('#count-items').innerHTML = 'нет товаров';
                document.querySelector('#cart-summary').remove();
                document.querySelector('.item-list').innerHTML = '<h1>Ваша корзина пуста!</h1>';
            } else {
                document.querySelector('#count-items').innerHTML = '1 товар';
            }
        }

    });
});
