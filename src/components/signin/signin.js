import axios from "axios";
import { app_end_points } from "../../configs/endpoints"
import router from "../../router/index"

export default {
  data: () => {
    return {
      login: true,
      signup: false,
      user_mobile_no:"",
      user_email:"",
      user_fullname:"",
      username:"",
      user_password:"",
    }
  },
  methods: {
    async handle_signup() {
      var user_data = {}
      user_data['user_id'] = this.user_mobile_no
      user_data['email'] = this.user_email
      user_data['fullname'] = this.user_fullname
      user_data['username'] = this.username
      user_data['password'] = this.user_password
      axios.post(app_end_points.signup, user_data)
      .then((r)=>{
        console.log(r)
      })
    },
    async handle_login() {
      var login_data = {
        user_id: this.user_mobile_no,
        password: this.user_password
      }
      console.log(login_data)
      // let { resp } = await axios.get(app_end_points.login, login_data)
      router.push('/chat_app')
    },
    open_signup(){
      this.login = false
      this.$store.state.signup = true;
    }
  }
}