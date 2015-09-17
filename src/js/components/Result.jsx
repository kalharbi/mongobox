import React from "react";
import mui from "material-ui";

let ThemeManager = new mui.Styles.ThemeManager();

import {
  CardActions, CardHeader, CardText, FontIcon, Avatar, Card, Styles, RaisedButton
} from "material-ui";
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
        <CardHeader avatar={<Avatar backgroundColor={Colors.green500}></Avatar>}
          showExpandableButton={true}
          subtitle="10 documents were found"
          title="db.collection.find({a:10, b:'value'})">
        </CardHeader>
        <CardText expandable={true}>
          {JSON.stringify({
            obj: 20
          })}
        </CardText>
        <CardActions expandable={true}>
          <div style={Styles.container}>
            <RaisedButton disabled={true}>
              <FontIcon className="material-icons">content_copy</FontIcon>
            </RaisedButton>
          </div>
        </CardActions>
      </Card>
    );
  }
}
Result.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Result;
