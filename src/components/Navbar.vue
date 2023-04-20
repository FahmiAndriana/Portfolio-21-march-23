<template>
    <div>
        <header class="header" id="header">
            <nav class="nav container">
                <a href="#" class="nav_logo">Fahmi Andriana</a>
                <div class="nav_menu" id="nav-menu">
                    <ul class="nav_list grid">
                        <li class="nav_item">
                            <a href="#home" class="nav_link ">
                                <i class="uil uil-home nav_icon"></i> Home
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#about" class="nav_link">
                                <i class="uil uil-user nav_icon"></i> About
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#skill" class="nav_link">
                                <i class="uil uil-file-alt nav_icon"></i> Skills
                            </a>
                        </li>
                        
                        <li class="nav_item">
                            <a href="#services" class="nav_link">
                                <i class="uil uil-scenery nav_icon"></i> Portfolio
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#contact" class="nav_link">
                                <i class="uil uil-message nav_icon"></i> Contact Me
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav_close" id="nav-close"></i>
                </div>
                <div class="nav_btns">

                    <!-- theme change button-->
                    <i class="uil uil-moon change-theme" id="theme-button" @click="change()"></i>

                    <div class="nav_toggle" id="nav-toggle" @click="open()">
                        <i class="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<style>

</style>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        open() {
            console.log('masuk sini');
            const navMenu = document.getElementById('nav-menu'),
              navToggle = document.getElementById('nav-toggle'),
              navClose = document.getElementById('nav-close')
                        
          
          if(navToggle){
              navToggle.addEventListener('click', () =>{
                  navMenu.classList.add('show-menu')
              })
          }
          if(navClose){
              navClose.addEventListener('click', () =>{
                  navMenu.classList.remove('show-menu')
              })
          }
        },
        change(){
            console.log('change')
            const themeButton = document.getElementById('theme-button')
            const darkTheme = 'dark-theme'
            const iconTheme = 'uil-sun'

            // Previously selected topic (if user selected)
            const selectedTheme = localStorage.getItem('selected-theme')
            const selectedIcon = localStorage.getItem('selected-icon')

            // We obtain the current theme that the interface has by validating the dark-theme class
            const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
            const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

            // We validate if the user previously chose a topic
            if (selectedTheme) {
            // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
            themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
            }

            // Activate / deactivate the theme manually with the button
            themeButton.addEventListener('click', () => {
            // Add or remove the dark / icon theme
            document.body.classList.toggle(darkTheme)
            themeButton.classList.toggle(iconTheme)
            // We save the theme and the current icon that the user chose
            localStorage.setItem('selected-theme', getCurrentTheme())
            localStorage.setItem('selected-icon', getCurrentIcon())
            })
        }      
    }
}


</script>