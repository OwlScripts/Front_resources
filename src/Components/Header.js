export const Header = `
<!-- Nav -->
<nav class="mainNav z-50 p-5 bg-opacity-70 sticky top-0 duration-500 lg:py-2">
     <div class="nav flex justify-between items-center sm:mx-auto md:w-5/6">
         <a href="." class="text-2xl font-semibold">Owl Scripts</a>
         <!-- desktop size's option menu -->
         <div id="desktop_ul" class="hidden lg:block">
             <ul class="menu text-base lg:menu-horizontal flex-row bg-transparent rounded-box gap-6">
                 <li>
                     <details>
                       <summary>Parent item</summary>
                       <ul>
                         <li><a>level 2 item 1</a></li>
                         <li><a>level 2 item 2</a></li>
                         <li>
                           <details>
                             <summary>Parent</summary>
                             <ul>
                               <li><a>item 1</a></li>
                               <li><a>item 2</a></li>
                             </ul>
                           </details>
                         </li>
                       </ul>
                     </details>
                 </li>
                 <li>
                     <details>
                       <summary>Parent item</summary>
                       <ul>
                         <li><a>level 2 item 1</a></li>
                         <li><a>level 2 item 2</a></li>
                         <li>
                           <details>
                             <summary>Parent</summary>
                             <ul>
                               <li><a>item 1</a></li>
                               <li><a>item 2</a></li>
                             </ul>
                           </details>
                         </li>
                       </ul>
                     </details>
                 </li>
                 <li>
                     <details>
                       <summary>Parent item</summary>
                       <ul>
                         <li><a>level 2 item 1</a></li>
                         <li><a>level 2 item 2</a></li>
                         <li>
                           <details>
                             <summary>Parent</summary>
                             <ul>
                               <li><a>item 1</a></li>
                               <li><a>item 2</a></li>
                             </ul>
                           </details>
                         </li>
                       </ul>
                     </details>
                 </li>
                 <li>
                     <details>
                       <summary>Parent item</summary>
                       <ul>
                         <li><a>level 2 item 1</a></li>
                         <li><a>level 2 item 2</a></li>
                         <li>
                           <details>
                             <summary>Parent</summary>
                             <ul>
                               <li><a>item 1</a></li>
                               <li><a>item 2</a></li>
                             </ul>
                           </details>
                         </li>
                       </ul>
                     </details>
                 </li>
             </ul>
         </div>
         <!-- mode switch and ham menu -->
         <div class="flex items-center flex-row-reverse gap-3 lg:gap-0">
             <div class="relative" x-data="{open : false}">
                 <div @click="open = !open" class="flex flex-col w-7 gap-1 cursor-pointer lg:hidden">
                     <span :class="open ? 'rotate-45 translate-y-[6px]' : ''" class="w-full h-[3px] bg-gray-900 rounded-full transition-all"></span>
                     <span :class="open ? 'opacity-0' : ''" class="w-full h-[3px] bg-gray-900 rounded-full transition-all"></span>
                     <span :class="open ? '-rotate-45 -translate-y-[6px]' : ''" class="w-full h-[3px] bg-gray-900 rounded-full transition-all"></span>
                 </div>
                 <aside x-show="open" class="absolute right-0 top-12 lg:hidden">
                     <ul id="header_aside_ul" class="menu bg-base-200 w-56 rounded-box">
                         <li><a>Item 1</a></li>
                         <li>
                           <details open>
                             <summary>Parent</summary>
                             <ul>
                               <li><a>level 2 item 1</a></li>
                               <li><a>level 2 item 2</a></li>
                               <li>
                                 <details open>
                                   <summary>Parent</summary>
                                   <ul>
                                     <li><a>level 3 item 1</a></li>
                                     <li><a>level 3 item 2</a></li>
                                   </ul>
                                 </details>
                               </li>
                             </ul>
                           </details>
                         </li>
                         <li><a>Item 3</a></li>
                       </ul>
                 </aside>
             </div>
             <div class="flex items-center gap-[5px] mr-2">
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 30 30">
                   <polygon fill="#ff5" points="28,9 22,8 21,2 15,5 9,2 8,8 2,9 5,14.5 2,20 8,22 9,28 15,25 21,28 22,22 28,20 25,14.5"></polygon><polygon fill="#ffd72b" points="10,14 5,14.5 6.585,18.462 8,22"></polygon><polygon fill="#ffea3e" points="10,14 8,8 6.575,11.088 5,14.5"></polygon><polygon fill="#ffca1e" points="25,14.5 23.582,11.427 22,8 20,16"></polygon><polygon fill="#ffca1e" points="15,25 10,14 8,22 11.5,23.5"></polygon><polygon fill="#ffea3e" points="20,16 15,5 10,14"></polygon><polygon fill="#ffd72b" points="22,8 18.5,6.5 15,5 20,16"></polygon><polygon fill="#ffc170" points="15,5 11.5,6.5 9,2"></polygon><polygon fill="#ff8930" points="18.846,23.352 22,22 21,28"></polygon><polygon fill="#fa791b" points="21,28 15,25 18.846,23.352"></polygon><polygon fill="#ff8930" points="23.415,18.462 22,22 28,20"></polygon><polygon fill="#ff993d" points="28,20 25,14.5 23.415,18.462"></polygon><polygon fill="#ff993d" points="23.582,11.427 25,14.5 28,9"></polygon><polygon fill="#ffac4f" points="28,9 22,8 23.582,11.427"></polygon><polygon fill="#ffac4f" points="18.5,6.5 22,8 21,2"></polygon><polygon fill="#ffc170" points="21,2 15,5 18.5,6.5"></polygon><polygon fill="#ffac4f" points="2,9 5,14.5 6.575,11.088"></polygon><polygon fill="#ffc170" points="6.575,11.088 8,8 2,9"></polygon><polygon fill="#ff993d" points="6.585,18.462 5,14.5 2,20"></polygon><polygon fill="#ff8930" points="2,20 8,22 6.585,18.462"></polygon><polygon fill="#ff993d" points="11.5,23.5 8,22 9,28"></polygon><polygon fill="#ff8930" points="9,28 15,25 11.5,23.5"></polygon><polygon fill="#ffac4f" points="11.5,6.5 9,2 8,8"></polygon><polygon fill="#ff5" points="15,5 11.5,6.5 8,8 10,14"></polygon><polygon fill="#ffb519" points="25,14.5 20,16 22,22 23.415,18.462"></polygon><polygon fill="#ffd72b" points="15,25 20,16 10,14"></polygon><polygon fill="#ffca1e" points="15,25 18.846,23.352 22,22 20,16"></polygon>
                 </svg>
                 <input type="checkbox" class="toggle h-7 w-[48px] bg-blue-400 border-gray-900 border-1" checked>
                 <i class="fa-regular fa-moon fa-xl"></i>
             </div>
         </div>
     </div>
</nav>
<!-- background -->
<div class="bg-gradient-to-b from-blue-200 absolute w-full min-h-full top-0 -z-10 flex justify-end">
     <img src="./assets/images/headBack.svg" alt="background">
     <img class="left-0 absolute" src="./assets/images/hero-shape.svg" alt="background">
</div>
<!-- header -->
<header class="text-gray-900 relative">
  <!-- header context -->
  <section class="mt-28 px-5">
       <h1 class="text-2xl text-center md:w-[700px] sm:mx-auto sm:text-4xl md:text-5xl">
           <strong>Tailwind CSS Template for Crypto, ICO and Web3</strong>
       </h1>
       <p class="text-md font-medium mt-6 text-gray-500 md:w-[700px] sm:mx-auto text-justify">
           Crypto Currency, Blockchain, ICO, Web3 related website template crafted with Tailwind CSS. Comes with all essential UI components and pages to launch complete website or landing page for anything that related to Crypto, Blockchain and Web3.
       </p>
       <!-- icons -->
       <div class="mt-20">
           <div class="swiper w-full md:w-2/3">
               <div class="swiper-wrapper">
                 <!-- Slides -->
                 <div class="swiper-slide">
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" class="w-20 h-20 md:w-28 md:h-28">
                       <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                   </svg>
                 </div>
                 <div class="swiper-slide">
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" class="w-20 h-20 md:w-28 md:h-28">
                       <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                   </svg>
                 </div>
                 <div class="swiper-slide">
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" class="w-20 h-20 md:w-28 md:h-28">
                       <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                   </svg>
                 </div>
                 <div class="swiper-slide">
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" class="w-20 h-20 md:w-28 md:h-28">
                       <linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00c1e0"></stop><stop offset="1" stop-color="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
                   </svg>
                 </div>
                 <div class="swiper-slide">
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40" class="w-20 h-20 md:w-28 md:h-28">
                       <path fill="#4e7ab5" d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"></path><path fill="#4e7ab5" d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"></path><path fill="#4e7ab5" d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"></path><path fill="#8bb7f0" d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"></path><path fill="#4e7ab5" d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"></path><path fill="#8bb7f0" d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"></path><path fill="#8bb7f0" d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"></path><g><path fill="#8bb7f0" d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"></path></g>
                   </svg>
                 </div>
                 <div class="swiper-slide">
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" class="w-20 h-20 md:w-28 md:h-28">
                       <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"></polygon><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"></polygon>
                   </svg>
                 </div>
                 <div class="swiper-slide">
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" class="w-20 h-20 md:w-28 md:h-28">
                       <path fill="#fff" d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"></path><path fill="#455a64" d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"></path><path fill="#455a64" d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"></path><path fill="#455a64" d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"></path><path fill="#00bcd4" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"></path>
                   </svg>
                 </div>
               </div>
           </div>
       </div>
  </section>
</header>
`;

export const headerFunctions = () => {
    const header_nav = document.querySelector(".mainNav");
    window.addEventListener("scroll", () => {
      const fromTop = document.documentElement.scrollTop;
      if (fromTop >= 100 && !header_nav.classList.contains("bg-slate-50")) {
        header_nav.classList.add("bg-slate-50", "backdrop-blur-sm");
      } else if (fromTop < 100 && header_nav.classList.contains("bg-slate-50")) {
        header_nav.classList.remove("bg-slate-50", "backdrop-blur-sm");
      }
    });
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed: 2000,
      slidesPerView: 3,
      freeMode: true,
      autoplay: {
          delay: 0,
          disableOnInteraction: false,
      },
      breakpoints: {
          250: {
              slidesPerView: 2,
          },
          350: {
              slidesPerView: 3,
          },
          500: {
              slidesPerView: 3,
          },
          768: {
              slidesPerView:4,
              spaceBetween:40
          },
          1024: {
              slidesPerView:6,
          }
      }
    });
};
