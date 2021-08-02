import axios from "axios";
import { app_end_points } from "../configs/endpoints"

export const axoisclient = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export default {

    callService(method, paramMap){
        let url = app_end_points[method];
        console.log("Calling url : " + url);
        return axoisclient.post(url, paramMap);
    }

}