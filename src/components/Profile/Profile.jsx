import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Basicdetails from "./Basicdetails";
import Experience from "./Experience";
import Socialmedia from "./Socialmedia";
import Header from "./Header/Header";
import { loadUserBasicDetails } from "../../actions/basicdetailAction";
import { loadUserExpDetails } from "../../actions/experienceActions";

export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokenValue: false,
    };
    }
  render() {
    if (!this.props.token) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        <Header />
        <Basicdetails />
        <Socialmedia />
        <Experience />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
});
export default connect(mapStateToProps, {
  loadUserBasicDetails,
  loadUserExpDetails,
})(Profile);
