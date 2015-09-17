import React from "react";
import mui from "material-ui";

let ThemeManager = new mui.Styles.ThemeManager();
let LinearProgress = mui.LinearProgress;

class ProgressBar extends React.Component {

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
      <LinearProgress mode="indeterminate" size={2}/>
    );
  }
}

ProgressBar.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default ProgressBar;
