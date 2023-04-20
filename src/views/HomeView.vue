<template>
<head>
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.0/css/line.css">
</head>
  <div class="home">
    <HeroImg :users="users"/>
    <About :users="users"/>
    <Skills/>
    <Swiper/>
    <Qualification :users="users"/>
    <ContactMe/>
  </div>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue';
import About from '@/components/About.vue'
import Qualification from '@/components/Qualification.vue'
import HeroImg from '@/components/Heroimg.vue'
import ContactMe from '@/components/Contactme.vue'
import Skills from '@/components/Skills.vue'
import Swiper from '@/components/Swiper.vue'
import getUsers from '@/composable/getUsers.js'
import Modal from '@/components/Modal.vue'







export default {
  name: 'HomeView',
 
  components: {
    About,
    Qualification,
    HeroImg,
    ContactMe,
    Skills,
    Portfolio,
    Swiper,
    Modal
   
  },
  setup() {
    const { users, error, load } = getUsers()
    

    load()

    return { users, error }
  },
  data() {
    return {
      visible: false,
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
}
</script>
