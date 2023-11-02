const Blogs = `
      <section id="Blogs" class="my-12">
        <div class="blogs-header-desc flex flex-col  justify-center items-center ">

            <p class="flex justify-center drop-shadow-xl hover:origin-top-left  bg-gradient-to-b from-slate-500/20 to-white  transition-all  items-center gap-4 hero-subtitle-gradient px-4 py-2 rounded-full">
                <svg  class="fill-purple-500 z-10"  width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.72801 5.05899C5.85579 4.71367 6.34421 4.71367 6.47199 5.05899L7.7508 8.51488C7.79096 8.62344 7.87656 8.70904 7.98512 8.7492L11.441 10.028C11.7863 10.1558 11.7863 10.6442 11.441 10.772L7.98512 12.0508C7.87656 12.091 7.79096 12.1766 7.7508 12.2851L6.47199 15.741C6.34421 16.0863 5.85579 16.0863 5.72801 15.741L4.44921 12.2851C4.40904 12.1766 4.32344 12.091 4.21487 12.0508L0.75899 10.772C0.41367 10.6442 0.41367 10.1558 0.75899 10.028L4.21487 8.7492C4.32344 8.70904 4.40904 8.62344 4.44921 8.51488L5.72801 5.05899Z"
                        fill="url(#paint0_linear_484_5398)" />
                    <path
                        d="M5.72801 5.05899C5.85579 4.71367 6.34421 4.71367 6.47199 5.05899L7.7508 8.51488C7.79096 8.62344 7.87656 8.70904 7.98512 8.7492L11.441 10.028C11.7863 10.1558 11.7863 10.6442 11.441 10.772L7.98512 12.0508C7.87656 12.091 7.79096 12.1766 7.7508 12.2851L6.47199 15.741C6.34421 16.0863 5.85579 16.0863 5.72801 15.741L4.44921 12.2851C4.40904 12.1766 4.32344 12.091 4.21487 12.0508L0.75899 10.772C0.41367 10.6442 0.41367 10.1558 0.75899 10.028L4.21487 8.7492C4.32344 8.70904 4.40904 8.62344 4.44921 8.51488L5.72801 5.05899Z"
                        fill="white" fill-opacity="0.4" />
                    <path
                        d="M9.73216 0.256128C9.85848 -0.085376 10.3415 -0.085376 10.4678 0.256128L10.885 1.38329C10.9247 1.49066 11.0094 1.5753 11.1167 1.61504L12.2438 2.03212C12.5854 2.15849 12.5854 2.64151 12.2438 2.76788L11.1167 3.18496C11.0094 3.2247 10.9247 3.30934 10.885 3.41671L10.4678 4.54387C10.3415 4.88538 9.85848 4.88538 9.73216 4.54387L9.31504 3.41671C9.27528 3.30934 9.19064 3.2247 9.08328 3.18496L7.95616 2.76788C7.61464 2.64151 7.61464 2.15849 7.95616 2.03212L9.08328 1.61504C9.19064 1.5753 9.27528 1.49066 9.31504 1.38329L9.73216 0.256128Z"
                        fill="url(#paint1_linear_484_5398)" />
                    <path
                        d="M9.73216 0.256128C9.85848 -0.085376 10.3415 -0.085376 10.4678 0.256128L10.885 1.38329C10.9247 1.49066 11.0094 1.5753 11.1167 1.61504L12.2438 2.03212C12.5854 2.15849 12.5854 2.64151 12.2438 2.76788L11.1167 3.18496C11.0094 3.2247 10.9247 3.30934 10.885 3.41671L10.4678 4.54387C10.3415 4.88538 9.85848 4.88538 9.73216 4.54387L9.31504 3.41671C9.27528 3.30934 9.19064 3.2247 9.08328 3.18496L7.95616 2.76788C7.61464 2.64151 7.61464 2.15849 7.95616 2.03212L9.08328 1.61504C9.19064 1.5753 9.27528 1.49066 9.31504 1.38329L9.73216 0.256128Z"
                        fill="white" fill-opacity="0.4" />
                    <path
                        d="M14.6547 5.77075C14.739 5.54308 15.061 5.54308 15.1453 5.77075L15.4233 6.52216C15.4498 6.59376 15.5062 6.65024 15.5778 6.67672L16.3293 6.95472C16.5569 7.03896 16.5569 7.36104 16.3293 7.44528L15.5778 7.72328C15.5062 7.74976 15.4498 7.80624 15.4233 7.87784L15.1453 8.62928C15.061 8.85688 14.739 8.85688 14.6547 8.62928L14.3767 7.87784C14.3502 7.80624 14.2938 7.74976 14.2222 7.72328L13.4707 7.44528C13.2431 7.36104 13.2431 7.03896 13.4707 6.95472L14.2222 6.67672C14.2938 6.65024 14.3502 6.59376 14.3767 6.52216L14.6547 5.77075Z"
                        fill="url(#paint2_linear_484_5398)" />
                    <path
                        d="M14.6547 5.77075C14.739 5.54308 15.061 5.54308 15.1453 5.77075L15.4233 6.52216C15.4498 6.59376 15.5062 6.65024 15.5778 6.67672L16.3293 6.95472C16.5569 7.03896 16.5569 7.36104 16.3293 7.44528L15.5778 7.72328C15.5062 7.74976 15.4498 7.80624 15.4233 7.87784L15.1453 8.62928C15.061 8.85688 14.739 8.85688 14.6547 8.62928L14.3767 7.87784C14.3502 7.80624 14.2938 7.74976 14.2222 7.72328L13.4707 7.44528C13.2431 7.36104 13.2431 7.03896 13.4707 6.95472L14.2222 6.67672C14.2938 6.65024 14.3502 6.59376 14.3767 6.52216L14.6547 5.77075Z"
                        fill="white" fill-opacity="0.4" />
                    <defs>
                        <linearGradient id="paint0_linear_484_5398" x1="0.5" y1="0" x2="16.5002" y2="0.000206102"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0.0001" stop-color="#E59CFF" />
                            <stop offset="0.5001" stop-color="#BA9CFF" />
                            <stop offset="1" stop-color="#9CB2FF" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_484_5398" x1="0.5" y1="0" x2="16.5002" y2="0.000206102"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0.0001" stop-color="#E59CFF" />
                            <stop offset="0.5001" stop-color="#BA9CFF" />
                            <stop offset="1" stop-color="#9CB2FF" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_484_5398" x1="0.5" y1="0" x2="16.5002" y2="0.000206102"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0.0001" stop-color="#E59CFF" />
                            <stop offset="0.5001" stop-color="#BA9CFF" />
                            <stop offset="1" stop-color="#9CB2FF" />
                        </linearGradient>
                    </defs>
                </svg>

                <span class="blog-hero-sub inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500  to-indigo-900 "> Read Our Latest Blogs </span>
            </p>
            <h5 class="my-6 text-3xl  xl:text-5xl font-bold">Latest Blogs & News</h5>
            <p class="w-[90%]  xl:w-[50%] text-center text-gray-600">Our AI writing tool is designed to empower you with
                exceptional writing capabilities, making the writing
                process more
                efficient, accurate, and enjoyable.</p>
        </div>

        <div class="blog-posts-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 xl:px-44 mt-12 gap-8">

            <!-- item 1 -->
            <a href="#" class="item group mt-6 xl:mt-0   flex flex-col justify-start items-start overflow-hidden">
                <div class="img-wrapper overflow-hidden rounded-lg">

                    <img class="group-hover:scale-110 opacity-95 group-hover:opacity-100 rounded-lg duration-500 delay-75 w-[93rem] h-[15rem] ease-in-out"
                        src="./assets/images/Blogs/blog-01.png" alt="blog">
                </div>
                <div class="blogs-cat flex gap-3 my-4 ">
                    <p
                        class="text-indigo-700 border border-indigo-700  px-3  rounded-xl hover:bg-purple-500 hover:border-purple-100  hover:text-white transition-colors duration-200 ">
                        Design</p>
                    <p
                        class="text-indigo-700 border border-indigo-700  px-3  rounded-xl hover:bg-purple-500 hover:border-purple-100  hover:text-white transition-colors duration-200 ">
                        Engineering</p>
                </div>
                <h6 class="blog-tittle text-xl font-semibold ">Revolution in Content Creation and Communication</h6>
                <p class="blog-desc text-justify my-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisc
                    elit sed do eiusmod
                    tempor incididunt ut labore et dolore magna oliumosd
                    aliqua...</p>
                <div class="blog-author flex gap-6 ">
                    <div class="blog-author flex gap-2 text-gray-500">
                        <svg class="fill-current text-purple-600" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 8.75C7.65625 8.75 5.78125 6.90625 5.78125 4.65625C5.78125 2.40625 7.65625 0.5625 10 0.5625C12.3438 0.5625 14.2188 2.40625 14.2188 4.65625C14.2188 6.90625 12.3438 8.75 10 8.75ZM10 1.96875C8.4375 1.96875 7.1875 3.1875 7.1875 4.65625C7.1875 6.125 8.4375 7.34375 10 7.34375C11.5625 7.34375 12.8125 6.125 12.8125 4.65625C12.8125 3.1875 11.5625 1.96875 10 1.96875Z"
                                fill=""></path>
                            <path
                                d="M16.5938 19.4688C16.2188 19.4688 15.875 19.1562 15.875 18.75V17.8438C15.875 14.5938 13.25 11.9688 10 11.9688C6.75 11.9688 4.125 14.5938 4.125 17.8438V18.75C4.125 19.125 3.8125 19.4688 3.40625 19.4688C3 19.4688 2.6875 19.1562 2.6875 18.75V17.8438C2.6875 13.8125 5.96875 10.5625 9.96875 10.5625C13.9688 10.5625 17.25 13.8437 17.25 17.8438V18.75C17.2813 19.125 16.9688 19.4688 16.5938 19.4688Z"
                                fill=""></path>
                        </svg>
                        <p>Alex Dami </p>
                    </div>
                    <div class="blog-date flex gap-2 text-gray-500">
                        <svg class="fill-current text-purple-600" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5 3.3125H15.875V2.625C15.875 2.25 15.5625 1.90625 15.1562 1.90625C14.75 1.90625 14.4375 2.21875 14.4375 2.625V3.3125H5.53125V2.625C5.53125 2.25 5.21875 1.90625 4.8125 1.90625C4.40625 1.90625 4.09375 2.21875 4.09375 2.625V3.3125H2.5C1.4375 3.3125 0.53125 4.1875 0.53125 5.28125V16.1563C0.53125 17.2188 1.40625 18.125 2.5 18.125H17.5C18.5625 18.125 19.4687 17.25 19.4687 16.1563V5.25C19.4687 4.1875 18.5625 3.3125 17.5 3.3125ZM1.96875 9.125H4.625V12.2188H1.96875V9.125ZM6.03125 9.125H9.3125V12.2188H6.03125V9.125ZM9.3125 13.625V16.6875H6.03125V13.625H9.3125ZM10.7187 13.625H14V16.6875H10.7187V13.625ZM10.7187 12.2188V9.125H14V12.2188H10.7187ZM15.375 9.125H18.0312V12.2188H15.375V9.125ZM2.5 4.71875H4.125V5.375C4.125 5.75 4.4375 6.09375 4.84375 6.09375C5.25 6.09375 5.5625 5.78125 5.5625 5.375V4.71875H14.5V5.375C14.5 5.75 14.8125 6.09375 15.2187 6.09375C15.625 6.09375 15.9375 5.78125 15.9375 5.375V4.71875H17.5C17.8125 4.71875 18.0625 4.96875 18.0625 5.28125V7.71875H1.96875V5.28125C1.96875 4.96875 2.1875 4.71875 2.5 4.71875ZM1.96875 16.125V13.5938H4.625V16.6563H2.5C2.1875 16.6875 1.96875 16.4375 1.96875 16.125ZM17.5 16.6875H15.375V13.625H18.0312V16.1563C18.0625 16.4375 17.8125 16.6875 17.5 16.6875Z"
                                fill=""></path>
                        </svg>
                        <p>25 Mar, 2025</p>
                    </div>

                </div>

            </a>

            <!-- item 2 -->
            <a href="#" class="item group mt-6 xl:mt-0   flex flex-col justify-start items-start overflow-hidden">
                <div class="img-wrapper overflow-hidden rounded-lg">

                    <img class="group-hover:scale-110 opacity-95 group-hover:opacity-100 rounded-lg duration-500 delay-75 w-[93rem] h-[15rem] ease-in-out"
                        src="./assets/images/Blogs/blog-01.png" alt="blog">
                </div>
                <div class="blogs-cat flex gap-3 my-4 ">
                    <p
                        class="text-indigo-700 border border-indigo-700  px-3  rounded-xl hover:bg-purple-500 hover:border-purple-100  hover:text-white transition-colors duration-200 ">
                        Design</p>
                    <p
                        class="text-indigo-700 border border-indigo-700  px-3  rounded-xl hover:bg-purple-500 hover:border-purple-100  hover:text-white transition-colors duration-200 ">
                        Engineering</p>
                </div>
                <h6 class="blog-tittle text-xl font-semibold ">Revolution in Content Creation and Communication</h6>
                <p class="blog-desc text-justify my-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisc
                    elit sed do eiusmod
                    tempor incididunt ut labore et dolore magna oliumosd
                    aliqua...</p>
                <div class="blog-author flex gap-6 ">
                    <div class="blog-author flex gap-2 text-gray-500">
                        <svg class="fill-current text-purple-600" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 8.75C7.65625 8.75 5.78125 6.90625 5.78125 4.65625C5.78125 2.40625 7.65625 0.5625 10 0.5625C12.3438 0.5625 14.2188 2.40625 14.2188 4.65625C14.2188 6.90625 12.3438 8.75 10 8.75ZM10 1.96875C8.4375 1.96875 7.1875 3.1875 7.1875 4.65625C7.1875 6.125 8.4375 7.34375 10 7.34375C11.5625 7.34375 12.8125 6.125 12.8125 4.65625C12.8125 3.1875 11.5625 1.96875 10 1.96875Z"
                                fill=""></path>
                            <path
                                d="M16.5938 19.4688C16.2188 19.4688 15.875 19.1562 15.875 18.75V17.8438C15.875 14.5938 13.25 11.9688 10 11.9688C6.75 11.9688 4.125 14.5938 4.125 17.8438V18.75C4.125 19.125 3.8125 19.4688 3.40625 19.4688C3 19.4688 2.6875 19.1562 2.6875 18.75V17.8438C2.6875 13.8125 5.96875 10.5625 9.96875 10.5625C13.9688 10.5625 17.25 13.8437 17.25 17.8438V18.75C17.2813 19.125 16.9688 19.4688 16.5938 19.4688Z"
                                fill=""></path>
                        </svg>
                        <p>Alex Dami </p>
                    </div>
                    <div class="blog-date flex gap-2 text-gray-500">
                        <svg class="fill-current text-purple-600" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5 3.3125H15.875V2.625C15.875 2.25 15.5625 1.90625 15.1562 1.90625C14.75 1.90625 14.4375 2.21875 14.4375 2.625V3.3125H5.53125V2.625C5.53125 2.25 5.21875 1.90625 4.8125 1.90625C4.40625 1.90625 4.09375 2.21875 4.09375 2.625V3.3125H2.5C1.4375 3.3125 0.53125 4.1875 0.53125 5.28125V16.1563C0.53125 17.2188 1.40625 18.125 2.5 18.125H17.5C18.5625 18.125 19.4687 17.25 19.4687 16.1563V5.25C19.4687 4.1875 18.5625 3.3125 17.5 3.3125ZM1.96875 9.125H4.625V12.2188H1.96875V9.125ZM6.03125 9.125H9.3125V12.2188H6.03125V9.125ZM9.3125 13.625V16.6875H6.03125V13.625H9.3125ZM10.7187 13.625H14V16.6875H10.7187V13.625ZM10.7187 12.2188V9.125H14V12.2188H10.7187ZM15.375 9.125H18.0312V12.2188H15.375V9.125ZM2.5 4.71875H4.125V5.375C4.125 5.75 4.4375 6.09375 4.84375 6.09375C5.25 6.09375 5.5625 5.78125 5.5625 5.375V4.71875H14.5V5.375C14.5 5.75 14.8125 6.09375 15.2187 6.09375C15.625 6.09375 15.9375 5.78125 15.9375 5.375V4.71875H17.5C17.8125 4.71875 18.0625 4.96875 18.0625 5.28125V7.71875H1.96875V5.28125C1.96875 4.96875 2.1875 4.71875 2.5 4.71875ZM1.96875 16.125V13.5938H4.625V16.6563H2.5C2.1875 16.6875 1.96875 16.4375 1.96875 16.125ZM17.5 16.6875H15.375V13.625H18.0312V16.1563C18.0625 16.4375 17.8125 16.6875 17.5 16.6875Z"
                                fill=""></path>
                        </svg>
                        <p>25 Mar, 2025</p>
                    </div>

                </div>

            </a>

            <!-- item 3 -->
            <a href="#" class="item group mt-6 xl:mt-0   flex flex-col justify-start items-start overflow-hidden  md:hidden lg:flex">
                <div class="img-wrapper overflow-hidden rounded-lg">

                    <img class="group-hover:scale-110 opacity-95 group-hover:opacity-100 rounded-lg duration-500 delay-75 w-[93rem] h-[15rem] ease-in-out"
                        src="./assets/images/Blogs/blog-01.png" alt="blog">
                </div>
                <div class="blogs-cat flex gap-3 my-4 ">
                    <p
                        class="text-indigo-700 border border-indigo-700  px-3  rounded-xl hover:bg-purple-500 hover:border-purple-100  hover:text-white transition-colors duration-200 ">
                        Design</p>
                    <p
                        class="text-indigo-700 border border-indigo-700  px-3  rounded-xl hover:bg-purple-500 hover:border-purple-100  hover:text-white transition-colors duration-200 ">
                        Engineering</p>
                </div>
                <h6 class="blog-tittle text-xl font-semibold ">Revolution in Content Creation and Communication</h6>
                <p class="blog-desc text-justify my-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisc
                    elit sed do eiusmod
                    tempor incididunt ut labore et dolore magna oliumosd
                    aliqua...</p>
                <div class="blog-author flex gap-6 ">
                    <div class="blog-author flex gap-2 text-gray-500">
                        <svg class="fill-current text-purple-600" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 8.75C7.65625 8.75 5.78125 6.90625 5.78125 4.65625C5.78125 2.40625 7.65625 0.5625 10 0.5625C12.3438 0.5625 14.2188 2.40625 14.2188 4.65625C14.2188 6.90625 12.3438 8.75 10 8.75ZM10 1.96875C8.4375 1.96875 7.1875 3.1875 7.1875 4.65625C7.1875 6.125 8.4375 7.34375 10 7.34375C11.5625 7.34375 12.8125 6.125 12.8125 4.65625C12.8125 3.1875 11.5625 1.96875 10 1.96875Z"
                                fill=""></path>
                            <path
                                d="M16.5938 19.4688C16.2188 19.4688 15.875 19.1562 15.875 18.75V17.8438C15.875 14.5938 13.25 11.9688 10 11.9688C6.75 11.9688 4.125 14.5938 4.125 17.8438V18.75C4.125 19.125 3.8125 19.4688 3.40625 19.4688C3 19.4688 2.6875 19.1562 2.6875 18.75V17.8438C2.6875 13.8125 5.96875 10.5625 9.96875 10.5625C13.9688 10.5625 17.25 13.8437 17.25 17.8438V18.75C17.2813 19.125 16.9688 19.4688 16.5938 19.4688Z"
                                fill=""></path>
                        </svg>
                        <p>Alex Dami </p>
                    </div>
                    <div class="blog-date flex gap-2 text-gray-500">
                        <svg class="fill-current text-purple-600" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5 3.3125H15.875V2.625C15.875 2.25 15.5625 1.90625 15.1562 1.90625C14.75 1.90625 14.4375 2.21875 14.4375 2.625V3.3125H5.53125V2.625C5.53125 2.25 5.21875 1.90625 4.8125 1.90625C4.40625 1.90625 4.09375 2.21875 4.09375 2.625V3.3125H2.5C1.4375 3.3125 0.53125 4.1875 0.53125 5.28125V16.1563C0.53125 17.2188 1.40625 18.125 2.5 18.125H17.5C18.5625 18.125 19.4687 17.25 19.4687 16.1563V5.25C19.4687 4.1875 18.5625 3.3125 17.5 3.3125ZM1.96875 9.125H4.625V12.2188H1.96875V9.125ZM6.03125 9.125H9.3125V12.2188H6.03125V9.125ZM9.3125 13.625V16.6875H6.03125V13.625H9.3125ZM10.7187 13.625H14V16.6875H10.7187V13.625ZM10.7187 12.2188V9.125H14V12.2188H10.7187ZM15.375 9.125H18.0312V12.2188H15.375V9.125ZM2.5 4.71875H4.125V5.375C4.125 5.75 4.4375 6.09375 4.84375 6.09375C5.25 6.09375 5.5625 5.78125 5.5625 5.375V4.71875H14.5V5.375C14.5 5.75 14.8125 6.09375 15.2187 6.09375C15.625 6.09375 15.9375 5.78125 15.9375 5.375V4.71875H17.5C17.8125 4.71875 18.0625 4.96875 18.0625 5.28125V7.71875H1.96875V5.28125C1.96875 4.96875 2.1875 4.71875 2.5 4.71875ZM1.96875 16.125V13.5938H4.625V16.6563H2.5C2.1875 16.6875 1.96875 16.4375 1.96875 16.125ZM17.5 16.6875H15.375V13.625H18.0312V16.1563C18.0625 16.4375 17.8125 16.6875 17.5 16.6875Z"
                                fill=""></path>
                        </svg>
                        <p>25 Mar, 2025</p>
                    </div>

                </div>

            </a>
        </div>
    </section>
`;

export default Blogs;
