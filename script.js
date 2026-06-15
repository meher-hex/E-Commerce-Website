window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function likedFunc(heart){
    if (heart.classList.contains('fa-regular fa-heart fa-2x')) {
        heart.classList.remove('fa-regular fa-heart fa-2x')
      } else {
        heart.classList.add('fas fa-heart fa-2x')
      }
}

var review = document.getElementById('rev');
function posted(x){
    if (review && review.value){
        window.alert("Review posted! Thank you.");
        review.value = "";
    } else {
        window.alert("Please write something.");
    }
}

function eraseReview(y){
    review.value = "";
}

function added(product) {
    window.alert("Product has been added to your cart!");
}