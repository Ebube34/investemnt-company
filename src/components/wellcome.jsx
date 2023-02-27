import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";

// import Spinner from "./spinner";


function Wellcome() {
    
    
    const [confirmed, setConfirmed] = useState(false);
    // const [buttonisMousedOver, setButtonMouseOver] = useState(false);
//   const [process, setProcess] = useState(false);


//   function handleButtonMouseOver(){
//     setButtonMouseOver(true);
// }

// function handleButtonMouseOut(){
//     setButtonMouseOver(false);
// }

  const { confirmationCode } = useParams();

    useEffect(() => {
        const url = `https://fx-backend-sever.onrender.com/confirm/${confirmationCode}`;
        axios.get(url)
         .then((result) => {
             setConfirmed(true)
         })
         .catch((error) => {
            error = new Error();
         });
    }, [confirmationCode])
    return (
        <>
            <div>
           
      {confirmed ? (
          <p className="text-success">Congratulations Your account has been verified you can now login</p>
        ) : (
          <p className="text-danger">You Are Not verified please wait!</p>
        )}
                <Link to={"/login"}>Login</Link>
            </div>
        </>
    );
};

export default Wellcome;