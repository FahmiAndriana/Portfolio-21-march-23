<template>
    <div>
        <section class="services section" id="services">
                <h2 class="section_title">Portfolio</h2>
                <span class="section_subtitle">My recent project</span>

                <div class="services_container container grid">
                    <!--==================== PORFOLIO 1 ====================-->
                    <div class="services_content">
                        <div class="">
                            <img :src="img" alt="" class="portfolio_img">
                            <h3 class="service_title">Portfolio <br> Fahmi Andriana</h3>
                        </div>

                        <span class="button button-flex button-small button-link services_button"  @click="$emit('close')">
                            View More
                            <i class="uil uil-arrow-right button_icon"></i>
                        </span>

                        <div class="services_modal">
                            <div class="services_modal-content active-modal portfolio_modal">
                                <img :src="img" alt="" class="services_img">
                                <h4 class="services_modal-title">Portfolio | Fahmi Andriana</h4>
                                <i class="uil uil-times services_modal-close"  @click="open()"></i>

                                <ul class="services_modal-services grid">
                                    <li class="services_modal-service">
                                        <i class="uil uil-check-circle services_modal-icon"></i>
                                        <p>Personal Portfolio landing page</p>
                                    </li>
                                    <li class="services_modal-service">
                                        <i class="uil uil-check-circle services_modal-icon"></i>
                                        <p>Website adaptable to all devices</p>
                                    </li>
                                    <li class="services_modal-service">
                                        <i class="uil uil-check-circle services_modal-icon"></i>
                                        <p>Animated interactions</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!--==================== PORFOLIO 2 ====================-->
                    <div class="services_content">
                        <div class="">
                            <i class="uil uil-multiply services_icon"></i>
                            <h3 class="service_title">Portfolio <br> Fahmi Andriana</h3>
                        </div>

                        <span class="button button-flex button-small button-link services_button"  @click="open()">
                            View More
                            <i class="uil uil-arrow-right button_icon"></i>
                        </span>

                        <div class="services_modal">
                            <div class="services_modal-content portfolio_modal">
                                <h4 class="services_modal-title">Fullstack Developer</h4>
                                <i class="uil uil-times services_modal-close"  @click="open()"></i>
                                <div class="services_desc">
                                    <span class="section_subtitle"> Contact me now and get your new project</span>
                                </div>
                                <a href="#contact" class="button button-flex">
                                    Contact Me<i class="uil uil-message button_icon"></i>
                                </a>
                                
                                                             
                            </div>
                        </div>
                    </div>

                    <!--==================== PORFOLIO 3 ====================-->
                    <div class="services_content">
                        <div class="">
                            <i class="uil uil-multiply services_icon"></i>
                            <h3 class="service_title">Portfolio <br> Fahmi Andriana</h3>
                        </div>

                        <span class="button button-flex button-small button-link services_button"  @click="open()">
                            View More
                            <i class="uil uil-arrow-right button_icon"></i>
                        </span>

                        <div class="services_modal">
                            <div class="services_modal-content portfolio_modal">
                                <h4 class="services_modal-title">Fullstack Developer</h4>
                                <i class="uil uil-times services_modal-close" @click="open()"></i>
                                <div class="services_desc">
                                    <span class="section_subtitle"> Contact me now and get your new project</span>
                                </div>
                                <a href="#contact" class="button button-flex" >
                                    Contact Me<i class="uil uil-message button_icon"></i>
                                </a>
                                
                                                             
                            </div>
                        </div>
                    </div>


                </div>
                

            </section>
    </div>
</template>

<style>

</style>

<script>

import img from '../assets/image/cover.jpeg';
export default {
    data: function(){
        return{
            img : img

        }
    }
    
    
}


</script>