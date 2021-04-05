import React, { Component } from "react";

export class Socialmedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      facebook: "facebook.com",
      linkedin: "linkedin",
      google: "google.com",
    };
  }

  handleChange = (e, socialmedia) => {
    console.log(e);
    const { name, value } = e.target;
    if (socialmedia === "facebook") {
      this.setState({ facebook: value });
    } else if (socialmedia === "linkedin") {
      this.setState({ linkedin: value });
    } else {
      this.setState({ google: value });
    }
  };
  submit = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="box">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            {" "}
            <i class="fa fa-user-circle fa-2x"></i>Social Media
          </span>
          <span
            data-toggle="modal"
            data-target="#socialmedia"
            style={{ fontSize: "12px", cursor: "pointer" }}
          >
            Edit
          </span>
        </div>
        <div className="box-1">
          <p>
            <i className="fab fa-facebook-f"></i>
            {this.state.facebook}
          </p>
          <p>
            <i className="fab fa-linkedin-in"></i>
            {this.state.linkedin}
          </p>
          <p>
            <i className="fab fa-google"></i>
            {this.state.google}
          </p>
        </div>
        <div
          class="modal fade"
          id="socialmedia"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-backdrop="static"
          data-keyboard="false"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit Social Media
                </h5>
              </div>
              <div>
                <div>
                  <i className="fab fa-facebook-f"></i>
                  <input
                    type="text"
                    className="input-box"
                    name="facebook"
                    placeholder="Facebook/john"
                    value={this.state.facebook}
                    onChange={(e) => this.handleChange(e, "facebook")}
                  />
                </div>
                <div>
                  <i className="fab fa-linkedin-in"></i>
                  <input
                    name="linkedin"
                    type="text"
                    className="input-box"
                    placeholder="linkedin/john"
                    value={this.state.linkedin}
                    onChange={(e) => this.handleChange(e, "linkedin")}
                  />
                </div>
                <div>
                  <i className="fab fa-google"></i>
                  <input
                    name="google"
                    type="text"
                    className="input-box"
                    placeholder="Google/john"
                    value={this.state.google}
                    onChange={(e) => this.handleChange(e, "google")}
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  onClick={this.submit}
                  class="btn btn-primary"
                  data-dismiss="modal"
                >
                  Save
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Socialmedia;
