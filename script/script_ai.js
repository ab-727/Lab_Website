// ハンバーガーメニューの要素を取得
const hamburgerMenu = document.querySelector(".hamburger-menu");
// メニューの要素を取得
const menu = document.querySelector(".menu");

//ボディを取得
const body = document.querySelector(".body");

// メニューの要素が存在するか確認
if (menu) {
    // ハンバーガーメニューをクリックしたときの関数
    function toggleMenu() {
        // メニューにmenu-openクラスを付け外しする
        menu.classList.toggle("menu-open");
        body.classList.toggle("no-scroll");
    }
}

// ハンバーガーメニューをクリックしたときの関数
function toggleMenu() {
    // メニューにmenu-openクラスを付け外しする
    menu.classList.toggle("menu-open");
    body.classList.toggle("no-scroll");
}

// メニューのリンクをクリックしたときの関数
function closeMenu() {
    // メニューにmenu-openクラスを外す
    menu.classList.remove("menu-open");

}

// メニューのリンクにイベントリスナーを追加
const menuLinks = document.querySelectorAll(".menu a");
for (let link of menuLinks) {
    link.addEventListener("click", closeMenu);
}
//