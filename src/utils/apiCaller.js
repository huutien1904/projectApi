import axios from "axios";
import * as Config from "./../constants/ActionType";

export default function callApi(endpoint, method = "GET", body) {
  return axios({
    mothod: method,
    url: `${Config.CALL_API}/${endpoint}`,
    data: body,
  }).catch((error) => {
    console.log(error);
  });
}
