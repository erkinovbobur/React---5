import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios ('https://reqres.in/api/users?page=2')
      .then(response => {
        setUsers(response.data.data);
        console.log(response.data.data);
      })
     }, []);

  return (
    <div>
<h1>Users List</h1>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
             <Link to={`about/${user.id}`}><td>{user.first_name}</td></Link> 
              <td>{user.last_name}</td>
              <td><img src={user.avatar} alt="Avatar" width="50" height="50" /></td>
            </tr>
          ))}
        </tbody>
     
    </div>
  );
};

export default Home;
