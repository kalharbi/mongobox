import React from "react";
import mui from "material-ui";

let ThemeManager = new mui.Styles.ThemeManager();
let TextField = mui.TextField;
let RaisedButton = mui.RaisedButton;

class QueryEditBox extends React.Component {

  constructor(props) {
    super(props);
    var initialExample = {n:"com.google.android.gm"};
    this.state = {
      hasQuery: false,
      q: JSON.stringify(initialExample)
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRunClick = this.handleRunClick.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  handleInputChange(e){
    this.setState({q: e.target.value});
  }

  render() {
    return (
      <div>
        <TextField
          hintText="query"
          floatingLabelText="db.collection.find"
          multiLine={true}
          fullWidth={true}
          value={this.state.q}
          onChange={this.handleInputChange}/>
        <RaisedButton
          label="Run" 
          disabled={this.props.running}
          secondary={true} onClick={this.handleRunClick} />
      </div>
    );
  }

  handleRunClick(){
    this.props.submit(this.state.q);
  }
}

QueryEditBox.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default QueryEditBox;
