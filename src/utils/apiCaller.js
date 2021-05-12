import axios from "axios";
import * as Config from "./../constants/ActionType";

export default function callApi(endpoint, method = "GET", body) {
  axios({
    mothod: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
  }).catch((error) => {
    console.log(error);
  });
}
