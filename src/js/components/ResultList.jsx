import React from "react";
import Result from "./Result";

export default class ResultList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var list = this.props.results.map((result, index) => {
      return <Result submittedQuery={result.submittedQuery}
        key={index}
        order={index}
        result={result.result}/>;
    });
    return (
      <ul>
        {list}
      </ul>
    );
  }
}
