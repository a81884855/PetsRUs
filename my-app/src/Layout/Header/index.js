import React, { useEffect, useState } from 'react';
import './index.css';
// import { QUERY_ME } from "../../utils/queries"
// import { useQuery } from "@apollo/react-hooks"
// import { useStoreContext } from "../../utils/GlobalState"
import { Link } from 'react-router-dom';


function Header() {
  const [data, setData] = useState([])
  //  const { loading, error, data } = useQuery(QUERY_ME)
  // const { globalStore, dispatch } = useStoreContext()

  useEffect(() => {
    if (data !== undefined) {
      // dispatch({
      //   type: "LOGIN",
      //   payload: data.me
      // })
    }
  }, [data]);

  console.log(data);

  return (
    <div className="HeaderContainer">
      {/* {loading ? <p></p> : <p></p>} */}
      <Link to="/" className="HeaderLogo" />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/donate">Donate</Link>
      <Link to="/saved-pets">Saved Pets</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default Header;
