import React from "react";


function Header (props){
    
return(

    <>
    <h2>Shopster</h2>
        <button onClick={props.click}>
          { props.mode ? "Dark" : "Light"} Mode
        </button>
        </>
)

}

export default Header;