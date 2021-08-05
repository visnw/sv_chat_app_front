import axios from "axios";
import apiService from "../../service/apiService";
export default {
  data: () => {
    return {
    currentChatName:"Surya",
    currentChatImg:"https://cdn.vuetifyjs.com/images/lists/1.jpg",
    items: [
        { header: 'Chats' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Vishnu Vardhan',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Suryaprakash',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Sanjay',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Kiran V Srini',
        },
      ],
      messages:[
        {
          id: 'msg001',
          message: 'hi surya',
          isReceived: true
        },
        {
          id: 'msg002',
          message: 'solra surya',
          isReceived: false
        }
      ],
    }
  },
  methods: {
     openChat(item) {
       this.currentChatName = item.title
       this.currentChatImg = item.avatar
       console.log(this.currentChatName,this.currentChatImg)
     },
     signUp() {
      axios.get('https://postman-echo.com/get?test=123',{
        headers: {
          "x-forwarded-proto": "https",
          "x-forwarded-port": "443",
          "host": "postman-echo.com",
          "x-amzn-trace-id": "Root=1-60f4383f-6bf2170e1c5d97f05ba08c70",
          "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
          "cache-control": "no-cache",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
          "postman-token": "c106b1a4-6730-748d-aa98-5dd967b98ecb",
          "accept": "*/*",
          "sec-fetch-site": "none",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,hi;q=0.8"
        }
      }
      )
      .then((r)=>{
        console.log(r)
      })
     }
  },
  mounted: () => {
    apiService.callService("getMessage", {"chat_id" : "8906732234"});
  }
}