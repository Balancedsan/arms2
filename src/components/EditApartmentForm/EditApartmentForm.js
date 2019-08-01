import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";

const EditApartmentForm = ({ apartment, closeModal, onSubmit }) => {
  const [name, setName] = useState(apartment.name);
  const [address, setAddress] = useState(apartment.address);
  const [bedrooms, setBedrooms] = useState(apartment.bedrooms);
  const [capacity, setCapacity] = useState(apartment.capacity);
  const [country, setCountry] = useState(apartment.country);
  const [landlordName, setLandlordName] = useState(apartment.landlord.name);
  const [remarks, setRemarks] = useState(apartment.remarks);
  const [accountNumber, setAccountNumber] = useState(
    apartment.landlord.accountNumber
  );

  return (
    <form
      className="editApartmentFormContainer"
      data-testid="editApartmentForm"
      onSubmit={(event) => onSubmit(event, {name})}
    >
      <h1 className="editApartmentForm__heading">Edit Apartment</h1>
      <div className="editApartmentForm">
        <Input
          id="name"
          label="Apartment Name"
          name="name"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <Input
          id="address"
          label="Address"
          name="address"
          type="text"
          value={address}
          onChange={event => {
            setAddress(event.target.value);
          }}
        />
        <Input
          id="bedrooms"
          label="Bedrooms"
          name="bedrooms"
          type="number"
          min="0"
          value={bedrooms}
          onChange={event => {
            setBedrooms(event.target.value);
          }}
        />
        <Input
          id="capacity"
          label="Capacity"
          name="capacity"
          type="number"
          min="0"
          value={capacity}
          onChange={event => {
            setCapacity(event.target.value);
          }}
        />
        <Input
          id="country"
          label="Country"
          name="country"
          type="text"
          value={country}
          onChange={event => {
            setCountry(event.target.value);
          }}
        />
        <Input
          id="landlordName"
          label="Landlord Name"
          name="landlordName"
          type="text"
          value={landlordName}
          onChange={event => {
            setLandlordName(event.target.value);
          }}
        />
        <Input
          id="landlordAccountNumber"
          label="Landlord A/C Number"
          name="landlordAccountNumber"
          type="text"
          value={accountNumber}
          onChange={event => {
            setAccountNumber(event.target.value);
          }}
        />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          id="remarks"
          name="remarks"
          rows="3"
          cols="30"
          value={remarks}
          onChange={event => {
            setRemarks(event.target.value);
          }}
        />
      </div>
      <input type="button" value="Cancel" onClick={closeModal} />
      <input
        className="editApartmentForm__updateButton"
        value="Update"
        type="submit"
      />
    </form>
  );
};

EditApartmentForm.propTypes = {
  apartment: PropTypes.object.isRequired
};

EditApartmentForm.defaultProps = {
  apartment: { name: "", landlord: {} }
};

export default EditApartmentForm;