import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import {Link } from 'react-router-dom'
import EditForm from '../components/EditSingleUserForm';
import { useSingleUserContext } from '../context/singleUserContext';
function Single() {
  const { user,  isUserLogin } = useSingleUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [editUser, setEditUser] = useState(false);

  const handleEdit = async (id) => {
    try {
      setEditUser(!editUser);
    } catch {}
  };

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isUserLogin) {
    const { id, name, email, phone, isAdmin } = user;
    return (
      <main className='center'>
        <h1>{`Welcome `} </h1>

        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#ID</th>
              <th scope='col'>NAME</th>
              <th scope='col'>EMAIL</th>
              <th scope='col'>PHONE</th>
              <th scope='col'>IS ADMIN?</th>
              <th scope='col'>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>

                <td>{email}</td>
                <td>{phone}</td>
                <td>{isAdmin ? 'YES' : 'NO'}</td>
                <td>
                  <FaEdit onClick={() => handleEdit(id)} />
                </td>
              </tr>
            }
          </tbody>
        </table>
        {editUser ? (
          <EditForm oldName={name} id={id} oldEmail={email} oldPhone={phone} />
        ) : null}
        
      </main>
    );
  }
  return (
    <>
      <h1>Please Login</h1>
      <h2><Link to='/'>login</Link></h2>
    </>
  );
}

export default Single;