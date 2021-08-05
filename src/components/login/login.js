import router from "../../router/chatRouter"
import apiService from "../../service/apiService"

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
    async handle_login() {
      var login_data = {
        user_id: this.user_mobile_no,
        password: this.user_password
      }
      console.log(login_data)
      apiService.callService("login", login_data).then(response => {
        if(response.isAuthenticated){
          // jwt {vis sdtasg345}
          // 
        }

      })
      // let { resp } = await axios.get(app_end_points.login, login_data)
      router.push('/chats')
    },
    open_signup(){
      router.push('/signup')
    }
  }
}