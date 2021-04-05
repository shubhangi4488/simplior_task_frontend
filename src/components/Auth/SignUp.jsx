import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import img from "../../assets/about.jpg";
import { connect } from "react-redux";
import { signUp, signIn } from "../../actions/authActions";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CompanyName: "",
      CompanyEmail: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submit = (e) => {
    e.preventDefault();
    const { CompanyEmail, CompanyName, password, confirmPassword } = this.state;
    if (
      CompanyEmail.length > 0 &&
      CompanyName.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      if (password === confirmPassword) {
        const data = {
          CompanyEmail,
          CompanyName,
          password,
        };
        this.props.signUp(data);
        this.setState({
          CompanyName: "",
          CompanyEmail: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert("password and confirm password not matched");
      }
    } else {
      alert("please fill all fields");
    }
  };
  render() {
    if (this.props.token) {
      return <Redirect to="/" />;
    }
    return (
      <div className="registation_page">
        <div className="parent">
          <div className="component1 component_1">
            <div className="img">
              <img src={img} />
            </div>
          </div>
          <div className="component2 component_2">
            <div className="sign_up">
              <div className="hading project">
                <p style={{ fontWeight: "600", fontSize: "30px" }}>
                  <span style={{ color: "#4186E1" }}>P</span>ROJECT
                </p>
              </div>
              <div className="hading-title">Sign In Now</div>
              <div className="form">
                <form>
                  <div className="detail">
                    <label className="name-label">
                      Company Name<c style={{ color: "#FF0000" }}>*</c>{" "}
                    </label>{" "}
                    <br />
                    <input
                      className="input"
                      type="text"
                      value={this.state.CompanyName}
                      name="CompanyName"
                      onChange={this.handleChange}
                    />{" "}
                    <br />
                  </div>

                  <div className="detail">
                    <label className="name-label">
                      Company Email<c style={{ color: "#FF0000" }}>*</c>{" "}
                    </label>{" "}
                    <br />
                    <input
                      className="input"
                      type="email"
                      value={this.state.CompanyEmail}
                      name="CompanyEmail"
                      onChange={this.handleChange}
                    />{" "}
                    <br />
                  </div>
                  <div className="detail">
                    <label className="name-label">
                      Password<c style={{ color: "#FF0000" }}>*</c>{" "}
                    </label>{" "}
                    <br />
                    <input
                      className="input"
                      type="password"
                      value={this.state.password}
                      name="password"
                      onChange={this.handleChange}
                    />{" "}
                    <br />
                  </div>
                  <div className="detail">
                    <label className="name-label">
                      Repeat Password<c style={{ color: "#FF0000" }}>*</c>{" "}
                    </label>{" "}
                    <br />
                    <input
                      className="input"
                      type="password"
                      value={this.state.confirmPassword}
                      name="confirmPassword"
                      onChange={this.handleChange}
                    />{" "}
                    <br />
                  </div>

                  <div className="detail button">
                    <button onClick={this.submit}>Submit</button>
                  </div>
                  <div className="check">
                    <Link to="/login">Already Have an account ?</Link>
                  </div>
                </form>
              </div>
              <div className="footer_sign_up">
                <p>Sign In With</p>
              </div>
              <div className="icon">
                <i className="fab fa-google" aria-hidden="true"></i>
                <i className="fab fa-windows" aria-hidden="true"></i>
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  token:state.auth.token
});
export default connect(mapStateToProps, { signIn, signUp })(SignUp);
