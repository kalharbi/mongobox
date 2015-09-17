import React from "react";
import mui from "material-ui";

let ThemeManager = new mui.Styles.ThemeManager();
let TextField = mui.TextField;
let RaisedButton = mui.RaisedButton;

class QueryEditBox extends React.Component {

  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div>
        <TextField
          hintText="query"
          floatingLabelText="db.collection.find"
          multiLine={true}
          fullWidth={true} />
        <RaisedButton label="Run" secondary={true} />
      </div>
    );
  }
}

QueryEditBox.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default QueryEditBox;
