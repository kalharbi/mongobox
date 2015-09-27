import {Dispatcher} from "flux";

class MongoboxDispatcher extends Dispatcher {
  handleAction(action) {
    this.dispatch({
      source: "VIEW_ACTION",
      action: action
    });
  }
}

let _MongoboxDispatcher = new MongoboxDispatcher();
export default _MongoboxDispatcher;
