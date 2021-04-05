import React, { Component } from "react";
import { connect } from "react-redux";
import { addExperience } from "../../actions/experienceActions";
import {Link} from "react-router-dom"
export class AddExperiecne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exp: [],
    };
  }
  handleAdd=()=>{
    this.setState((prevState) => ({
      exp: [
        ...prevState.exp,
        {
          UserInfoId: localStorage.getItem("userInfoId"),
          Title: "",
          EmploymentType: "",
          CompanyName: "",
          Location: "",
          StartDate: "",
          EndDate: "",
          Headline: "",
          Description: "",
        },
      ],
    }));
  }
  handleInputChange = (e, index) => {
    const { name, value } = e.target;
    let users = [...this.state.exp];
    users[index][name] = value;
    this.setState({ users });
  };
    submit = (e) => {
    this.props.addExperience(this.state.exp);
    console.log(this.state.exp);
    const item = this.state.exp;

    this.setState({
      exp: [
       
        {
          UserInfoId: localStorage.getItem("userInfoId"),
          Title: "",
          EmploymentType: "",
          CompanyName: "",
          Location: "",
          StartDate: "",
          EndDate: "",
          Headline: "",
          Description: "",
        },
      ],
    });
  };
  handleRemoveClick = (index) => {
    let users = [...this.state.exp];
    users.splice(index, 1);
    this.setState({ users });
  };
  handleAddClick = () => {
    this.setState((prevState) => ({
      exp: [
        ...prevState.exp,
        {
          UserInfoId: localStorage.getItem("userInfoId"),
          Title: "",
          EmploymentType: "",
          CompanyName: "",
          Location: "",
          StartDate: "",
          EndDate: "",
          Headline: "",
          Description: "",
        },
      ],
    }));
  };
  render() {
    console.log(this.state.exp);
    return (
      <>
                      <Link
                  data-toggle="modal"
                  className="modal-links"
                  data-target="#experienceAdd"
                  style={{ fontSize: "12px", cursor: "pointer" }}
                  onClick={this.handleAdd}
                >
                  Add
                </Link>
                <div
        class="modal fade"
        id="experienceAdd"
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
                Add Experience
              </h5>
            </div>

            {this.state.exp.map((experience, idx) => (
              <div className="experience">
                <div style={{ padding: "5%" }}>
                  <div>
                    <label className="label">Title</label>
                    <div className="w-100 d-flex">
                      <input
                        className="input w-100 "
                        value={experience.Title}
                        type="text"
                        onChange={(e) => this.handleInputChange(e, idx)}
                        name="Title"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label">HeadLine</label>
                    <div className="w-100 d-flex">
                      <input
                        className="input w-100 "
                        value={experience.Headline}
                        type="text"
                        onChange={(e) => this.handleInputChange(e, idx)}
                        name="Headline"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label">Description</label>
                    <div className="w-100 d-flex">
                      <textarea
                        className="input w-100 "
                        value={experience.Description}
                        type="text"
                        onChange={(e) => this.handleInputChange(e, idx)}
                        name="Description"
                      />
                    </div>
                  </div>
                  <div className="d-flex">
                    <label className="label">Employment Type</label>
                    <input
                      className="input w-50"
                      value={experience.EmploymentType}
                      type="text"
                      onChange={(e) => this.handleInputChange(e, idx)}
                      name="EmploymentType"
                    />
                  </div>
                  <div className="d-flex">
                    <label className="label">Company Name</label>
                    <input
                      className="input w-50"
                      value={experience.CompanyName}
                      type="text"
                      onChange={(e) => this.handleInputChange(e, idx)}
                      name="CompanyName"
                    />
                  </div>
                  <label className="label">Location</label>
                  <input
                    className="input w-100"
                    value={experience.Location}
                    type="text"
                    placeholder="Location"
                    onChange={(e) => this.handleInputChange(e, idx)}
                    name="Location"
                  />
                  <label className="label">Start Date</label>
                  <input
                    className="input w-100"
                    value={experience.StartDate}
                    type="date"
                    // placeholder="Location"
                    onChange={(e) => this.handleInputChange(e, idx)}
                    name="StartDate"
                  />{" "}
                  <label className="label">EndDate</label>
                  <input
                    className="input w-100"
                    value={experience.EndDate}
                    type="date"
                    onChange={(e) => this.handleInputChange(e, idx)}
                    name="EndDate"
                  />
                </div>
                <br />
              </div>
            ))}
            <div className="btn-box">
                  <button onClick={this.handleAddClick}>Add</button>
                </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={this.submit}
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
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  experience: state.experinceDetail.experienceDetail,
  userInfoId: state.auth.userInfoId,
});
export default connect(mapStateToProps, { addExperience })(AddExperiecne);
