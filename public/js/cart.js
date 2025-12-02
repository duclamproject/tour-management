// Lấy data và ỉn ra giỏ hàng
fetch("http://localhost:3000/cart/list-json", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: localStorage.getItem("cart"),
})
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    const htmlsArray = data.tours.map((tour, index) => {
      return `
        <tr>
          <td>${index + 1}</td>
          <td class="image-cell">
            <img src="${tour.image}" alt="Tour image" />
          </td>
          <td>
            <a href="/tours/detail/${tour.infor.slug}">
              ${tour.infor.title}
            </a>
          </td>
          <td>${tour.price_special.toLocaleString()}đ</td>
          <td> 
            <input
              type="number"
              name="quantity"
              value="${tour.quantity}"
              min="1"
              item-id="${tour.tourId}"
              class="quantity-input"
            />
          </td>
          <td>${tour.total.toLocaleString()}đ</td>
          <td>
            <button class="btn btn-sm btn-danger" btn-delete="${tour.tourId}">
              Xóa
            </button>
          </td>
        </tr>
      `;
    });

    const htmls = htmlsArray.join(" ");
    // console.log(htmls);
    const listTour = document.querySelector("[list-tour]");
    if (listTour) {
      listTour.innerHTML = htmls;
    }
    // Tính tổng tiền giỏ hàng
    const totalPrice = document.querySelector("[total-price]");
    if (totalPrice) {
      let sum = 0;
      data.tours.forEach((tour) => {
        sum += tour.total;
      });
      totalPrice.innerHTML = sum.toLocaleString();
    }
  });

// Hết Lấy data và ỉn ra giỏ hàng
