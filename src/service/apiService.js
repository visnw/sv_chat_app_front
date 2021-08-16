import axios from "axios";
import { app_end_points } from "../configs/endpoints"
import router from "../router/chatRouter"

export const axoisclient = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export default {


  
    callService(method, paramMap){

      return new Promise((resolve) => {

        let url = app_end_points[method];
        console.log("Calling url : " + url);
        axoisclient.post(url, paramMap).then(response => {
          if(response.data.data == 'need_to_login'){
            alert("need to login");
            router.push('/login');
          } else {
            resolve(response.data);
          }
        });
      });


        
    }

}