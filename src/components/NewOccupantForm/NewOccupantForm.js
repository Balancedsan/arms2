import React, { Component } from "react";
import "./NewOccupantForm.css";
import Input from "../Input/Input";
import ConfirmationMessage from "../ConfirmationMessage/ConfirmationMessage";
import { createNewOccupant } from "../../api/api";

class NewOccupantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      employeeId: "",
      remarks: "",
      success: false,
      message: "",
      submitted: false
    };
  }

  onFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onFormSubmit = async event => {
    try {
      event.preventDefault();
      const { name, employeeId, remarks } = this.state;
      const response = await createNewOccupant(name, employeeId, remarks);
      this.setState({
        name: "",
        employeeId: "",
        remarks: "",
        success: true,
        message: response,
        submitted: true
      });
      this.props.triggerRender();
    } catch (err) {
      this.setState({
        success: false,
        message: "Unable to create new occupant :(",
        submitted: true
      });
    }
  };

  render() {
    return (
      <form className="occupantFormContainer" onSubmit={this.onFormSubmit}>
        <h1 className="occupantForm__heading">Create New Occupant</h1>
        <div className="occupantForm">
          <Input
            id="name"
            label="Name"
            name="name"
            onChange={this.onFormChange}
            value={this.state.name}
            type="text"
            required
          />
          <Input
            id="employee-id"
            label="Employee ID"
            name="employeeId"
            onChange={this.onFormChange}
            value={this.state.employeeId}
            type="text"
            required
          />
          <Input
            id="remarks"
            label="Remarks"
            name="remarks"
            onChange={this.onFormChange}
            value={this.state.remarks}
            type="text"
            required
          />
        </div>
        <input
          className="occupantForm__createButton"
          value="Create"
          type="submit"
        />
        {this.state.submitted ? (
          <ConfirmationMessage
            success={this.state.success}
            message={this.state.message}
          />
        ) : (
          ""
        )}
      </form>
    );
  }
}

export default NewOccupantForm;
