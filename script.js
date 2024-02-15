let quantity = 1;
let selectedColor = '';
let selectedSize = '';

function updateMainImage(selectedImage) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = selectedImage.src;
    mainImage.style.width = '75%';
    mainImage.style.height = '75%';
}

function decrementQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').innerText = quantity;
    }
}

function incrementQuantity() {
    quantity++;
    document.getElementById('quantity').innerText = quantity;
}

function addToCart() {
    if (selectedColor && selectedSize) {
        const cart = document.getElementById('cart');
        const item = document.createElement('p');
        item.innerText = `Embrace sideboard with Color ${selectedColor},and  Size ${selectedSize} added to cart`;
        item.style.backgroundColor = '#E7F8B7';
        item.style.fontWeight = "600"
        item.style.color = '#000000';
        item.style.padding = '5px 10px'; // Add padding
        item.style.borderRadius = '8px'; // Add rounded corners
        cart.appendChild(item);
    } else {
        alert('Please select color and size');
    }
}

document.querySelectorAll('input[type="radio"][name="color"]').forEach(input => {
    input.addEventListener('change', function () {
        selectedColor = this.value;
    });
});

document.querySelectorAll('input[type="radio"][name="size"]').forEach(input => {
    input.addEventListener('change', function () {
        selectedSize = this.value;
    });
});


let selectedColorBox = null;

function selectColor(color, box) {
    if (selectedColorBox) {
        selectedColorBox.classList.remove('selected');
    }
    selectedColor = color;
    selectedColorBox = box;
    selectedColorBox.classList.add('selected');
}





