import React from "react";
import mui from "material-ui";

let ThemeManager = new mui.Styles.ThemeManager();

import { CardHeader, CardText, Avatar, Card } from "material-ui";
let Colors = mui.Styles.Colors;

class Result extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <Card className="ResultCard" initiallyExpanded={true}>
        <CardHeader avatar={<Avatar
            backgroundColor={this.props.result.length > 0? Colors.green500 : Colors.red500}>
        </Avatar>}
          showExpandableButton={true}
          subtitle= {this.props.result.length + " documents found"}
          title={"db.collection.find(" + this.props.submittedQuery + ")"}>
        </CardHeader>
        <CardText expandable={true}>
          <pre id={"json-block-" + this.props.order} className="json-block">
            {JSON.stringify(this.props.result, null, 2)}
          </pre>
        </CardText>
      </Card>
    );
  }
}

Result.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Result;
