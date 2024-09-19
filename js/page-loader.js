// Simulate loading process and hide the loader
//  window.addEventListener("load", function () {
//     var loader = document.getElementById("loader");
//     var content = document.getElementById("content");

//     // Hide loader after 3 seconds and show content
//     setTimeout(function () {
//         loader.style.display = "none";
//         content.style.display = "block";
//     }, 3000); // Adjust time if necessary
// });


let loaders = document.querySelector("#loader");

window.addEventListener("load", function () {
    loaders.style.display = "none";
})