import axios from "axios";

export default {
  data: () => {
    return {
        userMobileNo:"",
        userEmail:"",
        userFullName:"",
        userName:"",
        userPassword:"",

    }
  },
  methods: {
    async handleSignUp() {
        var userData = {}
        userData['user_id'] = this.userMobileNo
        userData['email'] = this.userEmail
        userData['fullname'] = this.userFullName
        userData['username'] = this.userName
        userData['password'] = this.userPassword
        axios.post("https://jhrins29hb.execute-api.ap-south-1.amazonaws.com/dev/chatsap/signUp", { body:userData});
    }
  }
}