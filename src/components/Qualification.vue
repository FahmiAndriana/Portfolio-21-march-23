<template>
    <div>
        <section class="qualification section" v-for="users in users" :key="users">
                <h2 class="section_title">Qualification</h2>
                <span class="section_subtitle">My personal journey</span>

                <div class="qualification_container container">
                    <div class="qualification_tabs">
                        <div class="qualification_button button--flex qualification_active" data-target="#education" @click="open()">
                            <i class="uil uil-graduation-cap qualification_icon" ></i>
                            Education
                        </div>
                        <div class="qualification_button button--flex" data-target="#work" @click="open()">
                            <i class="uil uil-briefcase-alt qualification_icon" ></i>
                            Working
                        </div>
                    </div>
                    <div class="qualification_sections">
                        <!--==================== QUALIFICATION CONTENT 1 ====================-->
                        <div class="qualification_content qualification_active" data-content id="education">
                            <!--==================== QUALIFICATION 1====================-->
                            <div class="qualification_data">
                                <div>
                                    <h3 class="qualification_title">Pendidikan Agama Islam</h3>
                                    <span class="qualification_subtitle">STAI Persis Garut</span>
                                    <div class="qualification_calender">
                                        <i class="uil uil-calendar-alt"></i>
                                        2012-2016
                                    </div>
                                </div>

                                <div>
                                    <span class="qualification_rounder"></span>
                                    <span class="qualification_line"></span>
                                </div>
                            </div>

                            <!--==================== QUALIFICATION 2====================-->
                            <div class="qualification_data">
                                <div></div>
                                <div>
                                    <span class="qualification_rounder"></span>
                                    <!--<span class="qualification_line"></span>-->
                                </div>
                                <div>
                                    <h3 class="qualification_title">MA/SMA</h3>
                                    <span class="qualification_subtitle">MA Persis Tarogong Garut</span>
                                    <div class="qualification_calender">
                                        <i class="uil uil-calendar-alt"></i>
                                        2012-2016
                                    </div>
                                </div>

                                
                            </div>


                        </div>
                        
                        <!--==================== QUALIFICATION CONTENT 2 ====================-->
                        <div class="qualification_content" data-content id="work">
                            <!--==================== QUALIFICATION 1====================-->
                            <div class="qualification_data">
                                <div>
                                    <h3 class="qualification_title">Admin Tower(AOE)</h3>
                                    <span class="qualification_subtitle">Mitra Bukalapak</span>
                                    <h4 class="qualification_desc">{{ users.desc_bl }}</h4>
                                    <div class="qualification_calender">
                                        <i class="uil uil-calendar-alt"></i>
                                        2021-2022
                                    </div>
                                </div>

                                <div>
                                    <span class="qualification_rounder"></span>
                                    <span class="qualification_line"></span>
                                </div>
                            </div>

                            <!--==================== QUALIFICATION 2====================-->
                            <div class="qualification_data">
                                <div></div>
                                <div>
                                    <span class="qualification_rounder"></span>
                                    <span class="qualification_line"></span>
                                </div>
                                <div>
                                    <h3 class="qualification_title">Credit Marketing Officer</h3>
                                    <span class="qualification_subtitle">Sinarmas Multifinance Syariah Garut</span>
                                    <h4 class="qualification_desc">{{ users.desc_cmo }}</h4>
                                    <div class="qualification_calender">
                                        <i class="uil uil-calendar-alt"></i>
                                        2019-2021
                                    </div>
                                </div>

                                
                            </div>

                            <!--==================== QUALIFICATION 3====================-->
                            <div class="qualification_data">
                                <div>
                                    <h3 class="qualification_title">Staff Administrasi</h3>
                                    <span class="qualification_subtitle">CV Animha Bangun Sentosa</span>
                                    <h4 class="qualification_desc">{{ users.desc_sa_btn }}</h4>
                                    <div class="qualification_calender">
                                        <i class="uil uil-calendar-alt"></i>
                                        2018-2019
                                    </div>
                                </div>

                                <div>
                                    <span class="qualification_rounder"></span>
                                    <span class="qualification_line"></span>
                                </div>
                            </div>

                            <!--==================== QUALIFICATION 4====================-->
                            <div class="qualification_data">
                                <div></div>
                                <div>
                                    <span class="qualification_rounder"></span>
                                    <span class="qualification_line"></span>
                                </div>
                                <div>
                                    <h3 class="qualification_title">Staff Administrasi</h3>
                                    <span class="qualification_subtitle">MA Persis Tarogong</span>
                                    <h4 class="qualification_desc">{{  users.desc_sa_pst }}</h4>
                                    <div class="qualification_calender">
                                        <i class="uil uil-calendar-alt"></i>
                                        2017-2018
                                    </div>
                                </div>


                                
                            </div>
                            <!--==================== QUALIFICATION 5====================-->
                            <div class="qualification_data">
                                <div>
                                    <h3 class="qualification_title">Guru Kelas</h3>
                                    <span class="qualification_subtitle">MI Al Mukhlis</span>
                                    <h4 class="qualification_desc">{{  users.desc_gk }}</h4>
                                    <div class="qualification_calender">
                                        <i class="uil uil-calendar-alt"></i>
                                        2015-2017
                                    </div>
                                </div>

                                <div>
                                    <span class="qualification_rounder"></span>
                                    <!--<span class="qualification_line"></span>-->
                                </div>
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

export default {
    data(){
        return{

        }
    },
    props: ['users'],
    methods: {
        open(){
            
            const tabs = document.querySelectorAll('[data-target]'),
                  tabContents = document.querySelectorAll('[data-content]')

                  tabs.forEach(tab =>{
                  tab.addEventListener('click',() =>{
            const target = document.querySelector(tab.dataset.target)

                tabContents.forEach(tabContent =>{
                tabContent.classList.remove('qualification_active')
                })
                target.classList.add('qualification_active')

                tabs.forEach(tab =>{
                tab.classList.remove('qualification_active')
                })
                tab.classList.add('qualification_active')
                    })
                })
        }
    }
}
</script>