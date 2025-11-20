document.addEventListener("DOMContentLoaded", function () {
    const buyMoreButton = document.querySelector(".btn-buy-more");

    if (buyMoreButton) {
        buyMoreButton.addEventListener("click", function (e) {
            e.preventDefault();
            // Điều hướng về Buy-page.html và thêm tham số reset=true
            window.location.href = "Buy-page.html?reset=true";
        });
    }
});