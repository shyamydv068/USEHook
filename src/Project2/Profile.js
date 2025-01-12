import React,{useState} from 'react';

function Profile() {
    const [name ,setName] = useState('');
    const [age,setAge] = useState('');
    const AgeasNumber = Number(age);
 

  return (
    <div>
      <form>
        <label >Name:
            <input
             type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
        </label>
        <br />
        <label >age:
            <input
             type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              />
        </label>
        
      </form>
    </div>
  )
}

export default Profile;
