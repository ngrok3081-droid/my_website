
// نحصل على جميع خانات العدّاد (count)
const countInputs = document.querySelectorAll(".counts");

countInputs.forEach(input => {
    input.addEventListener("input", function() {

        // الوصول إلى الصف كاملًا
        const row = this.closest("tr");

        // استخراج السعر من خانة price (إزالة علامة $)
        const priceText = row.querySelector(".price").innerText.replace("$", "");
        const price = Number(priceText);

        // أخذ العدد من input
        const count = Number(this.value);

        // حساب المجموع
        const total = price * count;

        // وضع النتيجة في خانة total
        row.querySelector(".total").innerText = "$" + total;
    });
});
const addBtn = document.getElementById("addproduct");
const tbody = document.querySelector("table tbody");

// تحميل البيانات المحفوظة عند فتح الصفحة
let products = JSON.parse(localStorage.getItem("products")) || [];

// عرض المنتجات المحفوظة
products.forEach(p => addRow(p.name, p.price));


// دالة لإضافة صف إلى الجدول
function addRow(name, price) {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${name}</td>
        <td><span class="price">$${price}</span></td>
        <td class="count"><input type="number" class="counts"></td>
        <td class="total"></td>
    `;

    tbody.appendChild(tr);
}


// عند الضغط على زر إضافة منتج
addBtn.addEventListener("click", function () {
    const name = document.getElementById("newName").value;
    const price = document.getElementById("newPrice").value;

    if (name === "" || price === "") {
        alert("Please fill the product name and price!");
        return;
    }

    // إضافة للجدول
    addRow(name, price);

    // حفظ في localStorage
    products.push({ name, price });
    localStorage.setItem("products", JSON.stringify(products));

    // تنظيف الحقول
    document.getElementById("newName").value = "";
    document.getElementById("newPrice").value = "";
});

    // إعادة تعيين الحقول
    document.getElementById("newName").value = "";
    document.getElementById("newPrice").value = "";

    // إضافة مستمع الحدث لخانة العدّاد الجديدة
    const newCountInput = newRow.querySelector(".counts");
    newCountInput.addEventListener("input", function() {

        const row = this.closest("tr");
        const priceText = row.querySelector(".price").innerText.replace("$", "");
        const price = Number(priceText);
        const count = Number(this.value);
        const total = price * count;
        row.querySelector(".total").innerText = "$" + total;
    });




    