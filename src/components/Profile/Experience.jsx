import React, { Component } from "react";
import { connect } from "react-redux";
import AddExperiecne from "./AddExperiecne";
import {
  editExperience,
  loadUserExpDetails,
} from "../../actions/experienceActions";
import { Link } from "react-router-dom";

export class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleClick = (item) => {
    this.setState(item);
  };
  submit = (e) => {
    e.preventDefault();
    const {
      Title,
      EmploymentType,
      Location,
      Headline,
      StartDate,
      EndDate,
      Description,
      CompanyName,
    } = this.state;
    const data = {
      ExperienceInfoId: this.state._id,
      UserInfoId: localStorage.getItem("userInfoId"),
      Title,
      EmploymentType,
      Location,
      Headline,
      StartDate,
      EndDate,
      Description,
      CompanyName,
    };
    this.props.editExperience(data);
  };
  componentWillMount() {
    this.props.loadUserExpDetails();
  }
  handleAdd=()=>{

  }
  render() {
    if (localStorage.getItem("token") === null) {
      window.location.reload();
    }
    return (
      <div className="box">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            {" "}
            <i class="fa fa-user-circle fa-2x"></i>Experience
          </span>{" "}
          <div>
            {" "}
            <span
              data-toggle="modal"
              data-target="#experience"
              style={{ fontSize: "12px", cursor: "pointer" }}
            >
              <div>
                {" "}
                <AddExperiecne />
              </div>
            </span>
          </div>
        </div>
        <div className="box-2">
          {this.props.experienceArray?.map((item) => (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p className="post">{item.Title}</p>
                <p className="company">
                  {item.CompanyName} | {item.EmploymentType}
                </p>
                <p className="date">
                  {item.StartDate}{" "}
                  {item.CurrentlyWorking ? "Present" : item.EndDate}
                </p>
                <p className="description">{item.Description}</p>
              </div>
              <div>
                {" "}
                <Link
                  data-toggle="modal"
                  data-target="#experienceEdit"
                  className="modal-links"
                  onClick={() => this.handleClick(item)}
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div
          class="modal fade"
          id="experienceEdit"
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
                  Edit Experience
                </h5>
              </div>
              <div style={{ padding: "5%" }}>
                <div>
                  <label className="label">Title</label>
                  <div className="w-100 d-flex">
                    <input
                      className="input w-100 "
                      value={this.state.Title}
                      type="text"
                      onChange={this.handleChange}
                      name="Title"
                    />
                  </div>
                </div>
                <div>
                  <label className="label">HeadLine</label>
                  <div className="w-100 d-flex">
                    <input
                      className="input w-100 "
                      value={this.state.Headline}
                      type="text"
                      onChange={this.handleChange}
                      name="Headline"
                    />
                  </div>
                </div>
                <div>
                  <label className="label">Description</label>
                  <div className="w-100 d-flex">
                    <textarea
                      className="input w-100 "
                      value={this.state.Description}
                      type="text"
                      onChange={this.handleChange}
                      name="Description"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <label className="label">Employment Type</label>
                  <input
                    className="input w-50"
                    value={this.state.EmploymentType}
                    type="text"
                    onChange={this.handleChange}
                    name="EmploymentType"
                  />
                </div>
                <div className="d-flex">
                  <label className="label">Company Name</label>
                  <input
                    className="input w-50"
                    value={this.state.CompanyName}
                    type="text"
                    onChange={this.handleChange}
                    name="CompanyName"
                  />
                </div>
                <label className="label">Location</label>
                <input
                  className="input w-100"
                  value={this.state.Location}
                  type="text"
                  placeholder="Location"
                  onChange={this.handleChange}
                  name="Location"
                />
                <label className="label">Start Date</label>
                <input
                  className="input w-100"
                  value={this.state.StartDate}
                  type="date"
                  onChange={this.handleChange}
                  name="StartDate"
                />{" "}
                <label className="label">EndDate</label>
                <input
                  className="input w-100"
                  value={this.state.EndDate}
                  type="date"
                  onChange={this.handleChange}
                  name="EndDate"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  data-dismiss="modal"
                  onClick={this.submit}
                >
                  Save
                </button>
                <button type="button" data-dismiss="modal">
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
const mapStateToProps = (state) => ({
  experienceArray: state.experinceDetail.experienceDetail,
  userInfoId: state.auth.UserInfoId,
  token: state.auth.token,
});
export default connect(mapStateToProps, { editExperience, loadUserExpDetails })(
  Experience
);
