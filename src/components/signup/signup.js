import router from "../../router/chatRouter"
import serviceCall from "../../service/ServiceCall"

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

      serviceCall.callService('signup', user_data).then((r)=>{
        router.push('/chats');
        console.log(r)
      });
    },
  }
}