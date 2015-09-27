import MongoboxDispatcher from "../dispatcher/mongoboxDispatcher";
import {appConstants} from "../utils/constants";

class MongoboxActions {
  submitQuery(query) {
    MongoboxDispatcher.handleAction({
      actionType: appConstants.SUBMIT_QUERY,
      data: query
    });
  }
}

const instance = new MongoboxActions();
export default instance;
