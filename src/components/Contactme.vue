<template>
    <div>
        <section class="contact section" id="contact">
                <h2 class="section_title">Contact Me</h2>
                <span class="section_subtitle"></span>
                <div class="contact_container container grid">
                    <div>
                        <div class="contact_information">
                            <i class="uil uil-phone contact_icon"></i>
                            <div>
                                <h3 class="contact_title">Call Me</h3>
                                <span class="contact_subtitle">0821-2358-0764</span>
                            </div>
                        </div>
                        <div class="contact_information">
                            <i class="uil uil-envelope contact_icon"></i>
                            <div>
                                <h3 class="contact_title">Email</h3>
                                <span class="contact_subtitle">fahmiandriana22@gmail.com</span>
                            </div>
                        </div>
                        <div class="contact_information">
                            <i class="uil uil-map-marker contact_icon"></i>
                            <div>
                                <h3 class="contact_title">Location</h3>
                                <span class="contact_subtitle">Jl. Citiis, Tarogong Kaler-Garut</span>
                            </div>
                        </div>
                    </div>

                    <form action="" class="contact_form grid" >
                        <div class="contact_inputs grid">
                            <div class="contact_content">
                                <label for="" class="contact_label">Name</label>
                                <input type="text" class="contact_input" v-model="name" required>
                            </div>
                            <div class="contact_content">
                                <label for="" class="contact_label">Email</label>
                                <input type="email" class="contact_input" v-model="email" required>
                            </div>
                        </div>
                        <div class="contact_content">
                            <label for="" class="contact_label">Message</label>
                            <textarea name="" id="" cols="0" rows="7" class="contact_input" v-model="message" required></textarea>
                        </div>
                        <div>
                            
                            <button type="submit" class="button " @submit.prevent="handleSubmit"  >
                                Send Message
                                <i class="uil uil-message button_icon"></i>
                            </button>
                
                        </div>
                    </form>
                    
                </div>
               
            </section>
    </div>
</template>

<style>

</style>

<script>

import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { projectFirestore } from '@/firebase/config'

export default {
    
    setup(){
        const router = useRouter()
        const name = ref('')
        const email = ref('')
        const message = ref('')


        const handleSubmit = async () => {
            const user = {
                name: name.value,
                email: email.value,
                message: message.value
            }


            const res = await projectFirestore.collection('posts')
                .add(user)
            

            router.push({
               name: 'home'
            })

        }

        return { name, email, message, handleSubmit}
    }
   
}
</script>
