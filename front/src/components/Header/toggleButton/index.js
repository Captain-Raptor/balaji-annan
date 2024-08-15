// components/ToggleButton.js
import React from "react";
import { connect } from "react-redux";
import { toggleTheme } from "../../../actions/themeActions";
import "./style.css"; // Import CSS for styling

const ToggleButton = ({  toggleTheme }) => {
  const toggle = () => {
     const theme = toggleTheme()
     console.log(theme,"theme")
  }
  return (
    <label >
    
   
      <div class="form-check form-switch">
            <input type="checkbox" class="form-check-input" id="darkSwitch"   onChange={toggle}/>
            <label class="custom-control-label" for="darkSwitch"></label>
          </div>
    </label>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.theme.theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTheme: () => dispatch(toggleTheme())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);
