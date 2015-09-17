import React from "react";
import mui from "material-ui";

let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;

class Header extends React.Component {

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
      <AppBar showMenuIconButton={false}
        title="MongoBox"/>
    );
  }
}

Header.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Header;
