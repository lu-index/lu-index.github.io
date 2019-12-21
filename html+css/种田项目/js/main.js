var dongs = document.querySelectorAll(".dong")
// document.body.onscroll = function () {  
//     if (window.pageYOffset > dongs[0].offsetTop - window.innerHeight + dongs[0].offsetHeight) {
//         dongs[0].classList.add("active")
//         dongs[1].classList.add("active")
//         dongs[2].classList.add("active")
//         dongs[3].classList.add("active")
//         dongs[4].classList.add("active")
//         dongs[5].classList.add("active")
//         dongs[6].classList.add("active")
//         dongs[7].classList.add("active")
//     }else{
//         // dongs.classList.remove("active")
//     }

   
// }

// document.body.onpageshow = function () {
//     dongs[0].classList.add("active")
//     dongs[1].classList.add("active")
//     dongs[2].classList.add("active")
//     dongs[3].classList.add("active")
//     dongs[4].classList.add("active")
    
// }

document.body.onscroll = function() {
    for (var i = 0; i < dongs.length; i++) {   
        if (window.pageYOffset > dongs[i].offsetTop - window.innerHeight) {
            dongs[i].classList.add("active");
        } else {
            // dongs[i].classList.remove("active");
        }
    }
};
window.scrollTo(0,1)
