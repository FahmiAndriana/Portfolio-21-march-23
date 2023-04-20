<template>
  <section class="services section" id="services">
    <h2 class="section_title">Portfolio</h2>
  <span class="section_subtitle">My recent project</span>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :keyboard="{
      enabled: true,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper section services_container container grid"
  >
    <swiper-slide>
      <div class="services_content">
        <div class="">
        <img :src="img" alt="" class="">
        <h3 class="service_title">Portfolio</h3>
        <p>Portfolio personal using Vue and Firevase</p>
        </div>               
      </div>
      </swiper-slide>
      <swiper-slide>
      <div class="services_content">
        <div class="">
        <img :src="ImgCal" alt="" class="">
        <h3 class="service_title">Calculator</h3>
        <p>Calculator using HTML, CSS and JavaScript</p>
        <span>View : </span>
        <a href="https://github.com/FahmiAndriana/Calculator.fahmiandriana" class="">
        <i class="uil uil-github-alt"> github</i>                             
        </a>
        </div>               
      </div>
      </swiper-slide>
      <swiper-slide>
      <div class="services_content">
        <div class="">
        <img :src="ImgUser" alt="" class="">
        <h3 class="service_title">User E Commerce</h3>
        <p>Android App Prototype for Multi E-Commerce using Flutter,<br/> an application used by users to search for needed items, place orders, and make payments. <br/>It is still in the development stage.p</p>
        <span>View : </span>
        <a href="https://drive.google.com/file/d/1rUQ50ATKA_u4obLutX5BusVIIuH-ilvU/view" class="">
        <i class="uil uil-import">Download</i>                            
        </a>
        </div>               
      </div>
      </swiper-slide>
      <swiper-slide>
      <div class="services_content">
        <div class="">
        <img :src="ImgQuran" alt="" class="">
        <h3 class="service_title">Al Quran Android App</h3>
        <p>Al Quran Android Mobile Apps using Flutter 3, simple to use, lets read quran!</p>
        <span>View : </span>
        <a href="https://drive.google.com/file/d/1L8wifgyAoP2abD8yjyCBOs7_0oAIcLoD/view?usp=share_link" class="">
        <i class="uil uil-import">Download</i>                             
        </a>
        </div>               
      </div>
      </swiper-slide>
      <swiper-slide>
      <div class="services_content">
        <div class="">
        <img :src="ImgVue" alt="" class="">
        <h3 class="service_title">Vue Firebase Blog</h3>
        <p>Blog using vue 3 and firebase</p>
        <span>View : </span>
        <a href="https://github.com/FahmiAndriana/vue-firbase-blog" class="">
        <i class="uil uil-github-alt"> github</i>                             
        </a>
        </div>               
      </div>
      </swiper-slide>
      <swiper-slide>
      <div class="services_content">
        <div class="">
        <img :src="ImgSeller" alt="" class="">
        <h3 class="service_title">Seller E Commerce</h3>
        <p>Android App Prototype for Multi E-Commerce using flutter,<br/> an application used by resellers to sell products,<br/>  register items, update inventory, and view sales progress.<br/> It is still in the development stage. </p>
        <span>View : </span>
        <a href="https://drive.google.com/file/d/1cd18lwHpV7sic6QSdwHiuJdWaVVlbYte/view?usp=share_link" class="">
        <i class="uil uil-import">Download</i>                             
        </a>
        </div>               
      </div>
      </swiper-slide>
    
    
  </swiper>
  </section>
  
</template>
<script>
import Modal from '@/components/Modal.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
import img from '../assets/image/cover.jpeg';
import ImgLogin from '../assets/image/Login.jpeg';
import ImgCal from '../assets/image/calculator.jpeg';
import ImgVue from '../assets/image/vue-firebase.png';
import ImgPHP from '../assets/image/mysql-php.png';
import ImgMPHP from '../assets/image/mysql-php.png';
import ImgQuran from '../assets/image/alquran2.png';
import ImgSeller from '../assets/image/seller-ecommerce.png';
import ImgUser from '../assets/image/user-ecommerce.png';
export default {
  components: {
    Swiper,
    SwiperSlide,
    Modal
  },
  data: function(){
        return{
            img : img,
            visible: false,
            ImgLogin: ImgLogin,
            ImgCal: ImgCal,
            ImgVue: ImgVue,
            ImgPHP: ImgPHP,
            ImgMPHP: ImgMPHP,
            ImgQuran: ImgQuran,
            ImgSeller: ImgSeller,
            ImgUser:ImgUser,
        }
    },
  setup() {
    return {
      modules: [Keyboard, Pagination, Navigation],
    };
  },
  methods: {
    openModal() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;


  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
 
  align-items: center;
  width: 80%;
  height: 80%;
  
}

</style>
