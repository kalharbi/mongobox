import MongoboxDispatcher from "../dispatcher/mongoboxDispatcher.js";
import {EventEmitter} from "events";
import {appConstants} from "../utils/constants";
import * as api from "../utils/mongoboxAPI";
var CHANGE_EVENT = "change";

class MongoboxStore extends EventEmitter {
  constructor() {
    super();
    this._store = {
      result: []
    };
  }
  getResult() {
    return this._store.result;
  }
  submitQuery(query) {
    return api.find(query)
      .then(response => {
        this._store.result = response;
        return "done";
      });
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }
  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
}

let mongoboxStore = new MongoboxStore();
export default mongoboxStore;

MongoboxDispatcher.register((payload) => {
  let action = payload.action;
  switch (action.actionType) {
    case appConstants.SUBMIT_QUERY:
      mongoboxStore.submitQuery(action.data)
        .then(response => {
          mongoboxStore.emit(CHANGE_EVENT);
        });
      break;
    default:
      break;
  }
});
