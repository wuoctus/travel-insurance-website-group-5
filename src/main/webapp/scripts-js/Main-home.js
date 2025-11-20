document.addEventListener("DOMContentLoaded", function () {
    // 1. Gắn sự kiện cho nút "Mua ngay" trên Header cố định
    const headerBuyButton = document.querySelector(".header-buy");

    // 2. Gắn sự kiện cho TẤT CẢ các nút "Mua ngay" trong các gói bảo hiểm
    const packageBuyButtons = document.querySelectorAll(".btn-buy");

    // Hàm chung để điều hướng
    function redirectToBuyPage(e) {
        e.preventDefault();
        // Điều hướng người dùng sang trang buy-page.html
        window.location.href = "Buy-page.html";
    }

    // Gán sự kiện cho nút Header
    if (headerBuyButton) {
        headerBuyButton.addEventListener("click", redirectToBuyPage);
    }

    // Gán sự kiện cho các nút trong gói bảo hiểm
    packageBuyButtons.forEach(button => {
        button.addEventListener("click", redirectToBuyPage);
    });

});