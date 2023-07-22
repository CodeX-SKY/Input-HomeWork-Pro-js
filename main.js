let click_btn = document.querySelector(".box-button");
let nw = document.querySelector(".nw-js1");
let nw2 = document.querySelector(".nw-js2");
let nw_sc = document.querySelector(".nw");
let top_text_remove = document.querySelector(".top-text");
let top_text2_add = document.querySelector(".top-text2");
let top_text3_add = document.querySelector(".top-text3");
let select_remove = document.querySelector(".click-rm1");
let select_remove2 = document.querySelector(".click-rm2");
let select_remove3 = document.querySelector(".click-rm3");
let payment = document.querySelector(".payment");
let payment2 = document.querySelector(".payment2");
let click_btn2 = document.querySelector(".box-button2");
let click_btn3 = document.querySelector(".box-button3");

click_btn.addEventListener("click" , function() {
    nw_sc.classList.remove("nw2");
    nw.classList.add("nw2");
    top_text_remove.classList.add("top-text-remove");
    top_text2_add.classList.add("top-text2-add");
    select_remove.classList.add("mini-box-remove");
    select_remove2.classList.add("mini-box-remove");
    select_remove3.classList.add("mini-box-remove");
    payment.classList.add("payment-add");
    click_btn2.classList.add("box-button2-add");
    click_btn.classList.add("box-button-remove");
})
click_btn2.addEventListener("click" , function() {
    nw.classList.remove("nw2");
    nw2.classList.add("nw2");
    click_btn2.classList.remove("box-button2-add");
    click_btn3.classList.add("box-button3-add");
    payment.classList.remove("payment-add");
    payment2.classList.add("payment2-add");
    top_text2_add.classList.remove("top-text2-add");
    top_text3_add.classList.add("top-text3-add");
})