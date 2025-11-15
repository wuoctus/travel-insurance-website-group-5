// Xử lí sự kiện cho các button trong step
document.addEventListener("DOMContentLoaded", function () {
    const step1 = document.getElementById("step1-information-travel");
    const step2 = document.getElementById("step2-insurance-package");
    const step3 = document.getElementById("step3-passenger-information");
    const step4 = document.getElementById("step4-confirm-information");
    const step5 = document.getElementById("step5-payment");

    const step1Nav = document.getElementById("step1");
    const step2Nav = document.getElementById("step2");
    const step3Nav = document.getElementById("step3");
    const step4Nav = document.getElementById("step4");
    const step5Nav = document.getElementById("step5");

    // Step 1- next button
    document.getElementById("step1-next-button").addEventListener("click", function (e) {
        e.preventDefault();
        if (checkStep1()) {
            createPassengerRows();
            step1.classList.add("hidden");
            step2.classList.remove("hidden");
            step1Nav.classList.remove("active");
            step2Nav.classList.add("active");
            window.scrollTo(0, 0);
        }
    });

    // Step 2 back button
    document.getElementById("step2-back-button").addEventListener("click", function () {
        step2.classList.add("hidden");
        step1.classList.remove("hidden");
        step2Nav.classList.remove("active");
        step1Nav.classList.add("active");
        window.scrollTo(0, 0);
    });

    // Step 2 next button
    document.getElementById("step2-next-button").addEventListener("click", function () {
        if (checkStep2()) {
            step2.classList.add("hidden");
            step3.classList.remove("hidden");
            step2Nav.classList.remove("active");
            step3Nav.classList.add("active");
            window.scrollTo(0, 0);
        }
    });

    // Step 3 back button
    document.getElementById("step3-back-button").addEventListener("click", function () {
        step3.classList.add("hidden");
        step2.classList.remove("hidden");
        step3Nav.classList.remove("active");
        step2Nav.classList.add("active");
        window.scrollTo(0, 0);
    })

    // Step 3 next button
    document.getElementById("step3-next-button").addEventListener("click", function () {
        if (checkStep3()) {
            step3.classList.add("hidden");
            step4.classList.remove("hidden");
            step3Nav.classList.remove("active");
            step4Nav.classList.add("active");
            updateStep4Info();
            window.scrollTo(0, 0);
        }
    })

    // Step 4 back button
    document.getElementById("step4-back-button").addEventListener("click", function () {
        step4.classList.add("hidden");
        step3.classList.remove("hidden");
        step4Nav.classList.remove("active");
        step3Nav.classList.add("active");
        window.scrollTo(0, 0);
    })

    // Step 4 next button
    document.getElementById("step4-next-button").addEventListener("click", function () {
        step4.classList.add("hidden");
        step5.classList.remove("hidden");
        step4Nav.classList.remove("active");
        step5Nav.classList.add("active");
        window.scrollTo(0, 0);
    })

    // Step 5 back button
    document.getElementById("step5-back-button").addEventListener("click", function () {
        step5.classList.add("hidden");
        step4.classList.remove("hidden");
        step5Nav.classList.remove("active");
        step4Nav.classList.add("active");
    })

});

// Kiểm tra step 1
function checkStep1(){
    const startDate = document.getElementById("start-date");
    const endDate = document.getElementById("end-date");
    const startDateError = document.getElementById("start-date-error");
    const endDateError = document.getElementById("end-date-error");

    startDateError.textContent = "";
    endDateError.textContent = "";

    let isValid = true;

    if (!startDate.value) {
        startDateError.textContent = "Vui lòng chọn ngày đi";
        isValid = false;
    }
    if (!endDate.value) {
        endDateError.textContent = "Vui lòng chọn ngày về";
        isValid = false;
    }
    if (startDate.value >= endDate.value) {
        endDateError.textContent = "Ngày về phải sau ngày đi";
        isValid = false;
    }

    return isValid;
}

// Kiểm tra step 2
function checkStep2(){
    const selectedPackage = document.querySelector('.package-card.selected');
    const errorMsg = document.getElementById('choose-package-error');

    if (!selectedPackage) {
        errorMsg.textContent = "Vui lòng chọn gói bảo hiểm";
        window.scrollTo(0, 0);
        return false;
    } else {
        errorMsg.textContent = "";
        return true;
    }
}

// Kiểm tra step 3
function checkStep3(){
    let isValid = true;

    // Lấy các input của chủ hợp đồng
    const hoTen = document.getElementById("ho-ten-chu-hd");
    const sdt = document.getElementById("sdt-chu-hd");
    const email = document.getElementById("dia-chi-email");
    const confirmEmail = document.getElementById("xac-nhan-email");
    const namSinh = document.getElementById("nam-sinh-chu-hd");
    const gioiTinh = document.getElementById("gioi-tinh-chu-hd");
    const quocTich = document.getElementById("quoc-tich-chu-hd");
    const cmt = document.getElementById("cmt-hc-chu-hd");
    const diaChi = document.getElementById("dia-chi-chu-hd");

    // Lấy các thẻ hiển thị lỗi
    const nameError = document.getElementById("name-ownner-error");
    const phoneError = document.getElementById("phone-ownner-error");
    const emailError = document.getElementById("email-ownner-error");
    const confirmEmailError = document.getElementById("confirm-email-ownner-error");
    const birthError = document.getElementById("birth-ownner-error");
    const sexError = document.getElementById("sex-ownner-error");
    const nationalError = document.getElementById("national-ownner-error");
    const cmtError = document.getElementById("cmt-ownner-error");
    const addressError = document.getElementById("address-ownner-error");
    const peopleError = document.getElementById("info-people-error");

    // Reset lỗi
    nameError.textContent = phoneError.textContent = emailError.textContent =
        confirmEmailError.textContent = birthError.textContent = sexError.textContent =
            nationalError.textContent = cmtError.textContent = addressError.textContent =
                peopleError.textContent = "";

    // Kiểm tra từng trường
    if (!hoTen.value.trim()) {
        nameError.textContent = "Vui lòng nhập họ và tên";
        isValid = false;
    }
    if (!sdt.value.trim()) {
        phoneError.textContent = "Vui lòng nhập số điện thoại";
        isValid = false;
    } else if (!/^\d{9,12}$/.test(sdt.value.trim())) {
        phoneError.textContent = "Số điện thoại không hợp lệ";
        isValid = false;
    }
    if (!email.value.trim()) {
        emailError.textContent = "Vui lòng nhập email";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
        emailError.textContent = "Email không hợp lệ";
        isValid = false;
    }
    if (!confirmEmail.value.trim()) {
        confirmEmailError.textContent = "Vui lòng xác nhận email";
        isValid = false;
    } else if (email.value.trim() !== confirmEmail.value.trim()) {
        confirmEmailError.textContent = "Email xác nhận không trùng khớp";
        isValid = false;
    }
    if (!namSinh.value) {
        birthError.textContent = "Vui lòng nhập ngày tháng năm sinh";
        isValid = false;
    }
    if (!gioiTinh.value) {
        sexError.textContent = "Vui lòng chọn giới tính";
        isValid = false;
    }
    if (!quocTich.value) {
        nationalError.textContent = "Vui lòng chọn quốc tịch";
        isValid = false;
    }
    if (!cmt.value.trim()) {
        cmtError.textContent = "Vui lòng nhập số CMT/Hộ chiếu";
        isValid = false;
    }
    if (!diaChi.value.trim()) {
        addressError.textContent = "Vui lòng nhập địa chỉ";
        isValid = false;
    }

    // Kiểm tra thông tin người được bảo hiểm
    const tbody = document.getElementById("beneficiary-tbody");
    const rows = Array.from(tbody.children);
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].children;
        if (!cells[1].textContent.trim() || !cells[2].textContent.trim() || !cells[4].textContent.trim()) {
            peopleError.textContent = "Vui lòng điền đầy đủ thông tin người được bảo hiểm";
            isValid = false;
            break;
        }
    }
    return isValid;
}

// Tạo bảng dựa trên số người đi
function createPassengerRows() {
    const adultsCount = Number(document.getElementById("adults-count").value);
    const dependentCount = Number(document.getElementById("dependent-count").value);
    const totalPeople = adultsCount + dependentCount;

    const tbody = document.getElementById("beneficiary-tbody");
    tbody.innerHTML = ""; // Xóa hàng cũ

    for (let i = 1; i <= totalPeople; i++) {
        const tr = document.createElement("tr");
        tr.classList.add("edit-row");
        tr.innerHTML = `
                <td>${i}</td>
                <td class="cell-ho-ten cell-edit"></td>
                <td class="cell-ngay-sinh cell-edit"></td>
                <td class="cell-tuoi cell-edit"></td>
                <td class="cell-cmt cell-edit"></td>
                <td class="cell-gioi-tinh cell-edit"></td>
                <td class="cell-quoc-tich cell-edit"></td>
                <td class="cell-quan-he cell-edit"></td>
                <td class="cell-icon"><i class="edit-icon cell-edit">✎</i></td>
            `;
        tbody.appendChild(tr);
    }
}

// Cập nhật thông tin từ step 1,2,3 -> gán vào step 4
function updateStep4Info() {
    // Step 1: Thông tin chuyến đi
    const diemDen = document.querySelector('input[name="diemden"]:checked').parentNode.textContent.trim();
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const loaiHinhDon = document.querySelector('input[name="don"]:checked').value;
    const adultsCount = Number(document.getElementById("adults-count").value);
    const dependentCount = Number(document.getElementById("dependent-count").value);
    const totalPeople = adultsCount + dependentCount;

    document.getElementById("diem-den-value").textContent = diemDen;
    document.getElementById("ngay-bat-dau-value").textContent = startDate;
    document.getElementById("ngay-ket-thuc-value").textContent = endDate;
    document.getElementById("so-ngay-value").textContent = Math.floor((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)) + 1;
    document.getElementById("loai-hinh-don-value").textContent = loaiHinhDon;
    document.getElementById("so-nguoi-di-value").textContent = totalPeople;

    // Step 2: Gói bảo hiểm
    const selectedPackage = document.querySelector('.package-card.selected');
    if (selectedPackage) {
        const packageName = selectedPackage.querySelector('.package-header h3').textContent;
        const packagePrice = selectedPackage.querySelector('.price').textContent;
        document.getElementById("ten-goi-value").textContent = packageName;
        document.getElementById("gia-goi-value").textContent = packagePrice.replace(" VNĐ", "");
    }

    // Step 3: Chủ hợp đồng
    document.getElementById("ho-ten-chu-hd-value").textContent = document.getElementById("ho-ten-chu-hd").value;
    document.getElementById("nam-sinh-chu-hd-value").textContent = document.getElementById("nam-sinh-chu-hd").value;
    document.getElementById("gioi-tinh-chu-hd-value").textContent = document.getElementById("gioi-tinh-chu-hd").value;
    document.getElementById("quoc-tich-chu-hd-value").textContent = document.getElementById("quoc-tich-chu-hd").value;
    document.getElementById("cmt-hc-chu-hd-value").textContent = document.getElementById("cmt-hc-chu-hd").value;
    document.getElementById("sdt-chu-hd-value").textContent = document.getElementById("sdt-chu-hd").value;
    document.getElementById("dia-chi-chu-hd-value").textContent = document.getElementById("dia-chi-chu-hd").value;
    document.getElementById("dia-chi-email-value").textContent = document.getElementById("dia-chi-email").value;

    // Danh sách người được bảo hiểm
    const tbodyStep3 = document.getElementById("beneficiary-tbody");
    const tbodyStep4 = document.getElementById("step4-beneficiary-tbody");
    tbodyStep4.innerHTML = "";
    Array.from(tbodyStep3.children).forEach(row => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${row.children[0].textContent}</td>
            <td>${row.children[1].textContent}</td>
            <td>${row.children[2].textContent}</td>
            <td>${row.children[3].textContent}</td>
            <td>${row.children[4].textContent}</td>
            <td>${row.children[5].textContent}</td>
            <td>${row.children[6].textContent}</td>
            <td>${row.children[7].textContent}</td>
        `;
        tbodyStep4.appendChild(newRow);
    });
}

// Hiện popup để chỉnh sửa thông tin khách hàng và lưu vào bảng
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const tbody = document.getElementById("beneficiary-tbody");
    const popupCloseBtn = document.getElementById("popup-close-btn");
    const popupSaveBtn = document.getElementById("popup-save-button");

    let currentEditRow = null;

    // Khi nhấn vào ô có class "cell-edit" thì hiện popup
    tbody.addEventListener("click", function (e) {
        const target = e.target.closest(".cell-edit");
        if (!target) return;

        currentEditRow = target.closest("tr");

        // Lấy dữ liệu hiện tại từ bảng
        const cells = currentEditRow.children;
        document.getElementById("popup-ho-ten").value = cells[1].textContent;
        document.getElementById("popup-ngay-sinh").value = cells[2].textContent;
        document.getElementById("popup-gioi-tinh").value = cells[5].textContent;
        document.getElementById("popup-quoc-tich").value = cells[6].textContent;
        document.getElementById("popup-cmt").value = cells[4].textContent;
        document.getElementById("popup-quan-he").value = cells[7].textContent;

        // Hiện popup
        popup.classList.remove("hidden");
    });

    // Khi nhấn nút Lưu
    popupSaveBtn.addEventListener("click", function () {
        if (!currentEditRow) return;

        const hoTen = document.getElementById("popup-ho-ten").value;
        const ngaySinh = document.getElementById("popup-ngay-sinh").value;
        const cmt = document.getElementById("popup-cmt").value;
        const gioiTinh = document.getElementById("popup-gioi-tinh").value;
        const quocTich = document.getElementById("popup-quoc-tich").value;
        const quanHe = document.getElementById("popup-quan-he").value;

        const birthDate = new Date(ngaySinh);
        const today = new Date();
        let tuoi = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            tuoi--;
        }

        const cells = currentEditRow.children;
        cells[1].textContent = hoTen;
        cells[2].textContent = ngaySinh;
        cells[3].textContent = tuoi;
        cells[4].textContent = cmt;
        cells[5].textContent = gioiTinh;
        cells[6].textContent = quocTich;
        cells[7].textContent = quanHe;

        popup.classList.add("hidden");
    });

    // Khi nhấn nút đóng (X)
    popupCloseBtn.addEventListener("click", function () {
        popup.classList.add("hidden");
    });

});

// Cá nhân -> ẩn số người đi, Gia đình/Nhóm -> hiện số người đi để chọn
document.addEventListener('DOMContentLoaded', () => {
    // Lấy tất cả radio "Loại hình đơn"
    const donRadios = document.querySelectorAll('input[name="don"]');
    const peopleGroup = document.getElementById('people-group');

    // Bắt sự kiện khi thay đổi lựa chọn
    donRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === "Gia đình" || radio.value === "Nhóm") {
                peopleGroup.style.display = 'block';
            } else {
                peopleGroup.style.display = 'none';
            }
        });
    });
})

// Chọn gói -> hiển thị màu làm nổi bật, thay đổi button từ chọn -> đã chọn
document.addEventListener('DOMContentLoaded', () => {
    const packageCards = document.querySelectorAll('.package-card');

    packageCards.forEach(card => {
        const btn = card.querySelector('.btn-choose');
        const header = card.querySelector('.package-header');

        // Click vào nút chọn
        btn.addEventListener('click', () => selectPackage(card, btn));

        // Click vào header
        header.addEventListener('click', () => selectPackage(card, btn));
    });

    function selectPackage(selectedCard, selectedBtn) {
        // Reset tất cả gói
        packageCards.forEach(card => card.classList.remove('selected'));
        packageCards.forEach(card => {
            const btn = card.querySelector('.btn-choose');
            btn.classList.remove('chosen');
            btn.textContent = "Chọn";
        });

        // Chọn gói hiện tại
        selectedCard.classList.add('selected');
        selectedBtn.classList.add('chosen');
        selectedBtn.textContent = "Đã chọn";
    }
})

// Thay đổi giá gói bảo hiểm dựa vào số người lớn tham gia
document.addEventListener("DOMContentLoaded", () => {
    const typeRadios = document.querySelectorAll('input[name="don"]');
    const adultInput = document.querySelector('#people-group input[type="number"]'); // input người lớn
    const packageCards = document.querySelectorAll('.package-card');

    // Lưu giá gốc từng gói (cá nhân)
    const originalPrices = Array.from(packageCards).map(card => {
        const priceText = card.querySelector('.price').textContent;
        return parseInt(priceText.replace(/\D/g, ''), 10); // Lấy số VNĐ
    });

    // Hàm cập nhật giá
    function updatePrices() {
        const selectedType = document.querySelector('input[name="don"]:checked').value;
        const adults = parseInt(adultInput.value) || 1;

        packageCards.forEach((card, index) => {
            let price = originalPrices[index];
            if (selectedType === "Gia đình" || selectedType === "Nhóm") {
                price = price * adults;
            }
            card.querySelector('.price').textContent = price.toLocaleString() + " VNĐ";
        });
    }

    // Thay đổi loại hình đơn
    typeRadios.forEach(radio => {
        radio.addEventListener('change', updatePrices);
    });

    // Thay đổi số người lớn
    adultInput.addEventListener('input', () => {
        const selectedType = document.querySelector('input[name="don"]:checked').value;
        if (selectedType === "Gia đình" || selectedType === "Nhóm") {
            updatePrices();
        }
    });

    // Khởi tạo giá lần đầu
    updatePrices();
});

// Chọn gói rồi xử lí button
document.addEventListener('DOMContentLoaded', () => {
    const packageCards = document.querySelectorAll('.package-card');
    const step2NextBtn = document.getElementById('step2-next-button');

    packageCards.forEach(card => {
        const btn = card.querySelector('.btn-choose');
        const header = card.querySelector('.package-header');

        // Click vào nút chọn
        btn.addEventListener('click', () => selectPackage(card, btn));

        // Click vào header
        header.addEventListener('click', () => selectPackage(card, btn));
    });

    // Hàm chọn gói
    function selectPackage(selectedCard, selectedBtn) {
        // Reset tất cả gói
        packageCards.forEach(card => card.classList.remove('selected'));
        packageCards.forEach(card => {
            const btn = card.querySelector('.btn-choose');
            btn.classList.remove('chosen');
            btn.textContent = "Chọn";
        });

        // Chọn gói hiện tại
        selectedCard.classList.add('selected');
        selectedBtn.classList.add('chosen');
        selectedBtn.textContent = "Đã chọn";

        // Xóa thông báo lỗi khi đã chọn gói
        const errorMsg = document.getElementById('choose-package-error');
        errorMsg.textContent = "";
    }
});

// Xử lý nút Sửa ở Step 4
document.addEventListener("DOMContentLoaded", () => {
    const steps = {
        1: document.getElementById("step1-information-travel"),
        2: document.getElementById("step2-insurance-package"),
        3: document.getElementById("step3-passenger-information"),
        4: document.getElementById("step4-confirm-information")
    };

    const navs = {
        1: document.getElementById("step1"),
        2: document.getElementById("step2"),
        3: document.getElementById("step3"),
        4: document.getElementById("step4")
    };

    const editButtons = document.querySelectorAll("#step4-confirm-information .edit-button");

    editButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetStep = btn.getAttribute("data-step"); // Lấy step muốn quay lại

            // Ẩn step 4
            steps[4].classList.add("hidden");

            // Hiện step target
            steps[targetStep].classList.remove("hidden");

            // Cập nhật nav active
            Object.keys(navs).forEach(k => navs[k].classList.remove("active"));
            navs[targetStep].classList.add("active");

            window.scrollTo(0, 0);
        });
    });
});

// Kiểm tra checkbox agree
document.addEventListener("DOMContentLoaded", function () {
    const agreeCheckbox = document.querySelector('input[name="agree"]');
    const paymentButton = document.getElementById("step5-next-button");

    // Hàm cập nhật trạng thái nút
    function updatePaymentButton() {
        if (agreeCheckbox.checked) {
            paymentButton.disabled = false;
            paymentButton.classList.remove("btn-disabled");
        } else {
            paymentButton.disabled = true;
            paymentButton.classList.add("btn-disabled");
        }
    }

    // Cập nhật khi tải trang
    updatePaymentButton();

    // Lắng nghe sự kiện thay đổi checkbox
    agreeCheckbox.addEventListener("change", updatePaymentButton);
});





