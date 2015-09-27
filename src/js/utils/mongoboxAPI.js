import * as axios from "axios";
import { appConstants } from "./constants";

const rootUrl = "http://" + appConstants.SERVER_HOST + ":" + appConstants.SERVER_PORT +
  "/" + appConstants.SERVER_END_POINT;

export function find(queryText) {
  var params = {
    q: queryText
  };
  return axios.get(rootUrl, {
      params
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return "Request failed.";
    });
}
