document.addEventListener("DOMContentLoaded", function () {
    fetch("/header.html") 
        .then(response => response.text()) 
        .then(data => {
            document.getElementById("header-container").innerHTML = data; // 挿入
        })
        .catch(error => console.error("ヘッダーの読み込みに失敗しました:", error));
});
