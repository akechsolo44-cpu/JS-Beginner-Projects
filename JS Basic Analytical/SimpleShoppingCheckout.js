const customerName = "Malcolm";
const productPrice = 150000;
const quantity = 3;
const discountPercent = 10;
const shippingCost = 20000;

function calculateTotal(price, quantity, discount) {
    const subtotal = price * quantity;
    const discountAmount = subtotal * (discount / 100);
    const total = subtotal - discountAmount;

    return total;
}

const calculateShipping = (total) => {
    return total >= 500000 ? 0 : shippingCost;
};

const totalBeforeShipping = calculateTotal(
    productPrice,
    quantity,
    discountPercent
);

const shipping = calculateShipping(totalBeforeShipping);

const totalPayment = totalBeforeShipping + shipping;

console.log(`
Customer: ${customerName}
Product Price: Rp${productPrice}
Quantity: ${quantity}
Subtotal: Rp${productPrice * quantity}
Discount: Rp${productPrice * quantity * (discountPercent / 100)}
After Discount: Rp${totalBeforeShipping}
Shipping: Rp${shipping}
Total Payment: Rp${totalPayment}
`);