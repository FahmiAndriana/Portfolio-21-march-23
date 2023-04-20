<template>
    <div>
      <section class="about section" id="about"  v-for="users in users" :key="users">
          
                <h2 class="section_title">About Me</h2>
                <span class="section_subtitle">My Introduction</span>

                <div class="about_container container grid">
                    <img :src="img" alt="" class="about_img">
                    
                    <div class="about_data">
                        <p class="about_description" >{{ users.desc }}</p>

                        <div class="about_info">
                            <div>
                                
                                <span class="about_info-name"><b class="info_desc">City:</b> <br>Garut</span>
                                <span class="about_info-name"><b class="info_desc">Degree:</b> <br>S1</span>
                                <span class="about_info-name"><b class="info_desc">Age:</b> <br>27</span>
                            </div>
                            <div>
                                <span class="about_info-name"><b class="info_desc">Email:  </b> <br>Fahmiandriana22@gmail.com</span>
                                <span class="about_info-name"><b class="info_desc">Birthday:  </b> <br>05 June 1994</span>
                                <span class="about_info-name"><b class="info_desc">Phone:  </b> <br>0821-2358-0764</span>
                            </div>
                            <div>
                                <span class="about_info-title"></span>
                                <span class="about_info-name"><br></span>

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
import img from '../assets/image/Pas-Foto.png';

export default {
    data: function(){
        return{
            img : img,
            

        }
    },
    props: ['users'],
    
}
</script>