var link = document.querySelector(".button_search");
var form = document.querySelector(".search_form");
var checkin = form.querySelector("[name=name_date_arr]");
var checkout = form.querySelector("[name=name_date_dep]");

link.addEventListener ("click", function(event) {
event.preventDefault();
form.classList.toggle("search_form_show");
checkin.focus();
form.classList.remove("search_form_error");
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
if (form.classList.contains("search_form_show")) {
form.classList.remove("search_form_show");
form.classList.remove("search_form_error");
}
}
});

form.addEventListener("submit", function(event) {
if (!checkin.value || !checkout.value) {
event.preventDefault();
form.classList.add("search_form_error");
}
});
