import './Admin.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface User {
  id: number;
  lastname: string;
  firstname: string;
  age: number;
  gender: string;
  weight: number;
  height: number;
  ratio: number;
  email: string;
  password: string;
}

const Admin = () => {
  const [mesUsers, setMesUsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
        },
      })
      .then((res) => {
        console.log('mes users', res.data);
        setMesUsers(res.data);
        console.log('mes users dans le state', mesUsers);
      })
      .catch((error) => {
        console.log('something went wrong', error);
      });
  }, []);

  return (
    <div>
      <h1 className='ecriture'>
        Salut Admin ! <br />
        Voici la liste des utilisateurs
      </h1>
      {mesUsers.map((user: User, index) => (
        <li key={index} className='ecritureAdmin' style={{ color: 'black' }}>
          {user.lastname} {user.firstname} {user.email}
        </li>
      ))}
    </div>
  );
};
export default Admin;
