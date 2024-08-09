import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://reqres.in/api/users/${id}`)
      .then(response => {
        setUser(response.data.data);
      })

  }, []);  

console.log(user)

  return (
     
<div>
   { user &&
   <div className="Avatar">
 <img src={user.avatar} alt="" />
 <h2>{user.last_name}</h2>
 <h2>{user.first_name}</h2>
 <h1>{user.email}</h1>
   </div>
   
    




    } 
 
  </div>


      
    
  );
};

export default About;
