import * as axios from "axios";
import { appConstants } from "./constants";

const rootUrl = appConstants.SERVER_HOST + "/" + appConstants.SERVER_END_POINT;

export function find(queryText) {
  var params = {
    q: queryText
  };
  return axios.get(rootUrl, {
      params, timeout: 60000
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.error(err);
      return "Request failed.";
    });
}
