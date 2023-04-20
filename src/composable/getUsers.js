import { projectFirestore } from "@/firebase/config"
import { doc } from "firebase/firestore"
import { ref } from "vue"


const getUsers = () => {
    const users = ref([])
      const error = ref(null)

      const load = async () => {
        try{
          const res = await projectFirestore.collection('users').get()
          users.value = res.docs.map(doc =>{
            return {
              ...doc.data(),
              id: doc.id
            }
          })
          console.log(data)

        } catch(err) {
          error.value = err.message
        }
        
      }


      return { users, error, load}
}




export default getUsers
