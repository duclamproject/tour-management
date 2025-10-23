// Swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
// End Swiper

// Cart
const alertAddCartSusscess = () => {
  const alertAddCartSuccess = document.querySelector(
    "[alert-add-cart-susscess]"
  );

  alertAddCartSuccess.classList.remove("alert-hidden");

  const closeAlert = alertAddCartSuccess.querySelector("[close-alert]");
  closeAlert.addEventListener("click", () => {
    alertAddCartSuccess.classList.add("alert-hidden");
  });
  setTimeout(() => {
    alertAddCartSuccess.classList.add("alert-hidden");
  }, 3000);
};

const cart = localStorage.getItem("cart");
// Check cart tồn tại chưa, nếu chưa thì tạo mới
if (!cart) {
  localStorage.setItem("cart", JSON.stringify([]));
}

// Hiển thị số lượng tour trong giỏ hàng
const showMiniCart = () => {
  const miniCart = document.querySelector("[mini-cart]");
  if (miniCart) {
    const cart = JSON.parse(localStorage.getItem("cart"));

    let totalQuantity = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });

    // console.log(totalQuantity);
    // console.log(miniCart);

    miniCart.innerHTML = totalQuantity;
  }
};
showMiniCart();

// Thêm tour vảo cart
const formAddToCart = document.querySelector("[form-add-to-cart]");
if (formAddToCart) {
  formAddToCart.addEventListener("submit", (event) => {
    event.preventDefault();
    const tourId = parseInt(formAddToCart.getAttribute("tour-id"));
    const quantity = parseInt(
      formAddToCart.querySelector("input[name='quantity']").value
    );
    // console.log(typeof quantity);

    if (quantity > 0 && tourId) {
      const cart = JSON.parse(localStorage.getItem("cart"));

      const indexCartExist = cart.findIndex((item) => item.tourId === tourId);

      if (indexCartExist == -1) {
        const objectAddToCart = {
          tourId: tourId,
          quantity: quantity,
        };
        cart.push(objectAddToCart);
      } else {
        cart[indexCartExist].quantity += quantity;
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      showMiniCart();
      alertAddCartSusscess();
    }
  });
}
// End Cart
