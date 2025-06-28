const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;
let autoSlideInterval = null;

// Function to show the current slide
function changeSlide() {
    for(let i =0;i<imgs.length;i++){
        imgs[i].computedStyleMap.display = 'none';
    }
    changeSlide();
prev_btn.addEventListener('click', (e)=>{
    if(n>0){
        n--;
    }
    else{
        n = imgs.length -1;
    }
    changeSlide();
})
next_btn.addEventListener('click', (e)=>{
    if(n<imgs.length - 1){
        n++;
    }
    else{
        n = 0;
    }
    changeSlide();
})
}
// // Move to next slide
// function nextSlide() {
//     n = (n + 1) % imgs.length;
//     changeSlide();
// }

// // Move to previous slide
// function prevSlide() {
//     n = (n - 1 + imgs.length) % imgs.length;
//     changeSlide();
// }

// // Auto slide every 2 seconds
// function startAutoSlide() {
//     autoSlideInterval = setInterval(nextSlide, 2000);
// }

// // Stop auto sliding (when user interacts)
// function stopAutoSlide() {
//     clearInterval(autoSlideInterval);
// }

// // Initialize
// changeSlide();
// startAutoSlide();

// // Event listeners for buttons
// next_btn.addEventListener('click', () => {
//     stopAutoSlide();
//     nextSlide();
//     startAutoSlide();
// });

// prev_btn.addEventListener('click', () => {
//     stopAutoSlide();
//     prevSlide();
//     startAutoSlide();
// });

// // Scroll interaction for products section
// const scrollContainer = document.querySelectorAll(".products");
// for(const item of scrollContainer){
//     item.addEventListener('wheel', (evt)=>{
//         evt.preventDefault();
//         item.scrollLeft += evt.deltaY;
//     });
// }

// // ======== New Features Below ========

// // Slide dots (indicators)
// const dotsContainer = document.querySelector('.dots');
// imgs.forEach((_, index) => {
//     const dot = document.createElement('span');
//     dot.classList.add('dot');
//     if (index === n) dot.classList.add('active');
//     dot.addEventListener('click', () => {
//         stopAutoSlide();
//         n = index;
//         changeSlide();
//         startAutoSlide();
//     });
//     dotsContainer.appendChild(dot);
// });

// function updateDots() {
//     const dots = document.querySelectorAll('.dot');
//     dots.forEach((dot, index) => {
//         dot.classList.toggle('active', index === n);
//     });
// }

// const horizontalScrollContainers = document.querySelectorAll('.products');

// horizontalScrollContainers.forEach(container => {
//     container.addEventListener('wheel', (e) => {
//         e.preventDefault();
//         container.scrollLeft += e.deltaY > 0 ? 100 : -100;
//     });
// });
// const scrollContainers = document.querySelectorAll('.products');

// scrollContainers.forEach(container => {
//   container.addEventListener('wheel', (e) => {
//     if (e.deltaY !== 0) {
//       e.preventDefault();
//       container.scrollLeft += e.deltaY;
//     }
//   });
// });


// // Lazy load product images
// const lazyImages = document.querySelectorAll('.lazy-product');

// const lazyLoad = () => {
//     lazyImages.forEach(img => {
//         const rect = img.getBoundingClientRect();
//         if (rect.top < window.innerHeight && img.dataset.src) {
//             img.src = img.dataset.src;
//             img.removeAttribute('data-src');
//             img.classList.remove('lazy-product');
//         }
//     });
// };