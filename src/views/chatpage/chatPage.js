import apiService from "../../service/apiService";
export default {
  data: () => {
    return {
    currentChatName:"Surya",
    messageText: "",
    currentChatImg:"https://cdn.vuetifyjs.com/images/lists/1.jpg",
    isChating: false,
    chatheader: 'Chats',
    items: [],
    messages:[],
    }
  },
  methods: {
    openChat(item) {
      this.isChating = true;
      this.currentChatName = item.name;
      this.currentChatImg = item.profileUrl;
      this.chatId = item.chat_id;
      console.log(item);

      apiService.callService("getMessage", {'chat_id' : this.chatId}).then(response => {
        console.log(response.data);
        this.messages = response.data;
        this.reloadChat();
      });
    },
    sendMessage() {
      if(this.messageText == ""){
        return;
      }
      let messageData = {
        owner: this.userId,
        message: this.messageText
      }
      let payload = {
        messageData,
        chat_id : this.chatId
      }
      this.messages.push(messageData);
      this.messageText = "";
      apiService.callService("sendMessage", payload).then(response => {
        console.log(response.data);
      });
    },
    reloadChat() {
      apiService.callService("getMessage", {'chat_id' : this.chatId}).then(response => {
        console.log(response.data);
        this.messages = response.data;
        setTimeout(this.reloadChat, 10000);
      });
    },
    handleSend(event) {
      if(event.keyCode == 13){
        this.sendMessage();
      }
    }
     
  },
  mounted: function() {
    apiService.callService("chats", {}).then(response => {
      console.log(response.data);
      this.userId = response.data.userId;
      this.items = response.data.chatList;
    });
  }
}