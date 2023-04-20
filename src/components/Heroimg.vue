<template>
    <div>
        <section class="home " id="home">
            <!--==================== HERO IMAGE ====================-->
                    <div class="hero-image" v-for="user in users" :key="user">
                        <div class="hero-text">
                            <div class="">
                                <h1 class="hero_title" >{{ user.name }}</h1>
                                <h3 class="hero_subtitle">{{ user.title }}</h3>
                            </div>
                        </div>
                    </div>            
        </section>
    </div>
</template>

<style>
.hero-image{
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/image/hero-img.jpeg');
}
</style>

<script>
import img from "../assets/image/hero-img.jpeg"
export default {
    data: function(){
        return{
            img: img

        }
    },
    props: ['users'],
}
</script>