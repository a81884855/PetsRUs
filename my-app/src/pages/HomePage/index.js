import React from 'react';
// import Signup from '../SignUp'
// import Auth from '../Utils/auth';
import PetList from '../../components/PetList';
import UserInfo from '../../components/UserInfo';
import './index.css';


function Homepage() {
  //conditionally render signup page

  function showSignup() {

    // if (Auth.loggedIn()) {
    //   return (
    //     <div>
    //       <div className="AddPetSection">
    //         <UserInfo />
    //         <PetList />
    //       </div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <Signup />
    //     </div>
    //   );
    // }
  }

  return (
    <div>
      {
        // Auth.loggedIn()
        <div className="AddPetSection">
          <UserInfo />
          <PetList />
        </div>
        // : <div>
        //   <Signup />
        // </div>
      }
    </div>
  );
}

export default Homepage;
