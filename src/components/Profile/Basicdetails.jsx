import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addBasicDetail,
  loadUserBasicDetails,
} from "../../actions/basicdetailAction";

export class Basicdetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: this.props.basicDetail?.FirstName,
      LastName: this.props.basicDetail?.LastName,
      Gender: this.props.basicDetail?.Gender,
      DOB: this.props.basicDetail?.DOB,
      ContactNumber: this.props.basicDetail?.ContactNumber,
      Address: this.props.basicDetail?.Address,
      City: this.props.basicDetail?.City,
      State: this.props.basicDetail?.State,
      Country: this.props.basicDetail?.Country,
      Zip: this.props.basicDetail?.Zip,
      img:
        "https://freesvg.org/img/abstract-user-flat-4.png",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  submit = (e) => {
    const { CompanyId, userInfoId } = this.props;
    const {
      FirstName,
      LastName,
      Gender,
      DOB,
      ContactNumber,
      Address,
      City,
      State,
      Country,
      Zip,
    } = this.state;
    e.preventDefault();
    let data;
    if (localStorage.getItem("userInfoId")) {
      data = {
        UserId: localStorage.getItem("userInfoId"),
        CompanyId,
        FirstName: FirstName || this.props.basicDetail.FirstName,
        LastName: LastName || this.props.basicDetail.LastName,
        Gender: Gender || this.props.basicDetail.Gender,
        DOB: DOB || this.props.basicDetail.DOB,
        ContactNumber: ContactNumber || this.props.basicDetail.ContactNumber,
        City: City || this.props.basicDetail.City,
        Address: Address || this.props.basicDetail.City,
        State: State || this.props.basicDetail.State,
        Country: Country || this.props.basicDetail.Country,
        Zip: Zip || this.props.basicDetail.Zip,
      };
    } else {
      data = {
        CompanyId,
        FirstName: FirstName || this.props.basicDetail.FirstName,
        LastName: LastName || this.props.basicDetail.LastName,
        Gender: Gender || this.props.basicDetail.Gender,
        DOB: DOB || this.props.basicDetail.DOB,
        ContactNumber: ContactNumber || this.props.basicDetail.ContactNumber,
        City: City || this.props.basicDetail.City,
        Address: Address || this.props.basicDetail.City,
        State: State || this.props.basicDetail.State,
        Country: Country || this.props.basicDetail.Country,
        Zip: Zip || this.props.basicDetail.Zip,
      };
    }
    console.log(data);
    this.props.addBasicDetail(data);
  };
  componentWillMount() {
    this.props.loadUserBasicDetails();
  }

  render() {
    if (localStorage.getItem("token") === null) {
      window.location.reload();
    }
    return (
      <div className="box">
        <span>
          <i class="fa fa-user-circle fa-2x"></i>Basic info
        </span>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              margin: "2%",
              justifyContent: "space-around",
            }}
          >
            <div>
              {" "}
              <img className="image" src={this.state.img} />
              <i class="fas fa-pencil-alt pencil"></i>
            </div>
            <div>
              <p className="name">
                {this.state.FirstName || this.props.basicDetail?.FirstName}{" "}
                {this.state.LastName || this.props.basicDetail?.LastName}
              </p>

              <p className="address">
                {this.state.City || this.props.basicDetail?.City}{" "}
                {this.state.State || this.props.basicDetail?.State}{" "}
                {this.state.Country || this.props.basicDetail?.Country}
              </p>
              <p className="contact-head">
                <i className="fa fa-phone"></i> Phone No.{" "}
                <p className="contact">
                  {this.state.ContactNumber ||
                    this.props.basicDetail?.ContactNumber}
                </p>
              </p>
              <p className="contact-head">
                <i class="fas fa-map-marker-alt"></i> Address.{" "}
                <p className="contact">
                  {this.state.City || this.props.basicDetail?.City}
                  {this.state.State || this.props.basicDetail?.State}{" "}
                  {this.state.Zip || this.props.basicDetail?.Zip}
                </p>
              </p>
              <p className="contact-head">
                <i class="fas fa-birthday-cake"></i> Birthday{" "}
                <p className="contact">
                  {this.state.DOB || this.props.basicDetail?.DOB}{" "}
                </p>
              </p>
            </div>
          </div>
          <div>
            <span
              data-toggle="modal"
              data-target="#basicDetail"
              className="modal-links"
              style={{ fontSize: "12px", cursor: "pointer" }}
            >
              Edit
            </span>
          </div>
        </div>
        <div
          class="modal fade"
          id="basicDetail"
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
                  Edit Basic Details
                </h5>
              </div>
              <div style={{ padding: "5%" }}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <label className="label">Legal Name</label>
                  <div className="w-50 d-flex">
                    <input
                      className="input w-50 "
                      value={
                        this.state.FirstName ||
                        this.props.basicDetail?.FirstName
                      }
                      type="text"
                      onChange={this.handleChange}
                      name="FirstName"
                    />
                    <input
                      className="input w-50"
                      value={
                        this.state.LastName || this.props.basicDetail?.LastName
                      }
                      type="text"
                      onChange={this.handleChange}
                      name="LastName"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <label className="label">Date of birth</label>
                  <input
                    className="input w-50"
                    value={this.state.DOB || this.props.basicDetail?.DOB}
                    type="date"
                    onChange={this.handleChange}
                    name="DOB"
                  />
                </div>
                <div className="d-flex" >
                  <label className="label">Gender</label><br />
                  <input
                    type="radio"
                    value="male"
                    id="male"
                    onChange={this.handleChange}
                    name="Gender"
                  />
                  <label for="male">Male</label><br />

                  <input
                    type="radio"
                    value="female"
                    id="female"
                    onChange={this.handleChange}
                    name="Gender"
                  />
                  <label for="female">Female</label>
                </div>
                <div className="d-flex">
                  <label className="label">Phone Number</label>
                  <input
                    className="input w-50"
                    value={
                      this.state.ContactNumber ||
                      this.props.basicDetail?.ContactNumber
                    }
                    type="text"
                    onChange={this.handleChange}
                    name="ContactNumber"
                  />
                </div>

                <label className="label">Address</label>
                <input
                  className="input w-100"
                  value={this.state.Address || this.props.basicDetail?.Address}
                  type="text"
                  placeholder="Address"
                  onChange={this.handleChange}
                  name="Address"
                />
                <div className="d-flex">
                  <div
                    className="w-100"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <input
                      className="input w-100"
                      value={this.state.City || this.props.basicDetail?.City}
                      type="text"
                      placeholder="City"
                      onChange={this.handleChange}
                      name="City"
                    />
                    <input
                      className="input w-100"
                      value={this.state.State || this.props.basicDetail?.State}
                      type="text"
                      placeholder="State"
                      onChange={this.handleChange}
                      name="State"
                    />
                    <input
                      className="input w-100"
                      value={
                        this.state.Country || this.props.basicDetail?.Country
                      }
                      type="text"
                      placeholder="Country"
                      onChange={this.handleChange}
                      name="Country"
                    />
                    <input
                      className="input w-100"
                      value={this.state.Zip || this.props.basicDetail?.Zip}
                      type="text"
                      placeholder="Zip"
                      onChange={this.handleChange}
                      name="Zip"
                    />
                  </div>
                </div>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  CompanyId: state.auth.CompanyId,
  userInfoId: state.auth.userInfoId,
  basicDetail: state.basicDetail.basicDetail,
  token: state.auth.token,
});

export default connect(mapStateToProps, {
  addBasicDetail,
  loadUserBasicDetails,
})(Basicdetails);
