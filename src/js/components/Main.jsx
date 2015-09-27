import React from "react";
import Header from "./Header";
import QueryEditBox from "./QueryEditBox";
import ProgressBar from "./ProgressBar";
import ResultList from "./ResultList";
import mongoboxStore from "../stores/mongoboxStore";
import mongoboxActions from "../actions/mongoboxActions";

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resultCards: [],
      result: mongoboxStore.getResult(),
      submittedQuery: "",
      isRunning: false
    };
    this._onChange = this._onChange.bind(this);
    this.handleSubmitQuery = this.handleSubmitQuery.bind(this);
    this.getSubmittedQuery = this.getSubmittedQuery.bind(this);
  }

// add the store event listner by passing the store a callback method.
  componentDidMount() {
    mongoboxStore.addChangeListener(this._onChange);
  }

// remove the store event listner by passing the store a callback method.
  componentWillUnmount() {
    mongoboxStore.removeChangeListener(this._onChange);
  }

  handleSubmitQuery(query) {
    mongoboxActions.submitQuery(query);
    this.setState({
      isRunning: true,
      submittedQuery: query
    });
  }

  getSubmittedQuery() {
    return this.state.submittedQuery;
  }

  _onChange() {
    var results = this.state.resultCards;
    results.unshift({
      result: mongoboxStore.getResult(),
      submittedQuery: this.state.submittedQuery});
    this.setState({
      isRunning: false,
      result: mongoboxStore.getResult(),
      resultCards: results
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <QueryEditBox
          submit={this.handleSubmitQuery} 
          running={this.state.isRunning}/>
        {this.state.isRunning? <ProgressBar/>: <hr/>}
        <ResultList results={this.state.resultCards}/>
      </div>
    );
  }
}
