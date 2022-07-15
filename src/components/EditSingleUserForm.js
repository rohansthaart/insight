import axios from 'axios';
import React, { useState } from 'react';
import { useSingleUserContext } from '../context/singleUserContext';
function EditForm({ id, oldName, oldEmail, oldPhone }) {
  const { setUser } = useSingleUserContext();
  console.log(id);
  const [name, setName] = useState(oldName);
  const [email, setEmail] = useState(oldEmail);
  const [phone, setPhone] = useState(oldPhone);

  const submitEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`api/v1/user/${id}`, { name, email, phone });
      setUser({ id, name, email, phone });
    } catch (error) {}
  };
  return (
    <div>
      <h3>{`Edit user with id: ${id}`}</h3>
      <form>
        <label>Name: </label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email: </label>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Phone: </label>
        <input
          type='text'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <button type='submit' onClick={submitEdit}>
          Edit User
        </button>
      </form>
    </div>
  );
}

export default EditForm;