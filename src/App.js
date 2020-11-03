import React from 'react';
import './App.css';
import {UserList} from "./UserList";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div style={{backgroundColor:"teal" ,color:'white'}}>
      <div className='App' >
      <h1>User_List</h1>
      </div>
     <UserList/>
    </div>
  );
}

export default App;
