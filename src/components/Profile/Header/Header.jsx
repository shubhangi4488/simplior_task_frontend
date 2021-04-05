import React, { Component } from "react";
import { connect } from "react-redux";
export class Header extends Component {
  handleLogout=(e)=>{
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("CompanyId");
    localStorage.removeItem("userInfoId");
    localStorage.removeItem("experienceInfoId");
    window.location.reload();
  }
  render() {
    return (
      <div className="header">
        <h3>
          <span>P</span>ROJECT
        </h3>
        <div className="icons">
          <i className="fa fa-search"></i>
          <i className="fa fa-comment-dots"></i>
          <i className="fa fa-bell"></i>
          <button className="log" onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
});
export default Header;
