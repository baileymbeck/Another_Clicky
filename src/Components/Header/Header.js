import React from 'react';

function Header() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="jumbotron">
              {/* the ({pullVariable}) needed to be commented out to prevent error */}
            {/* <h1>Hi! My name is ({name})</h1>
            <h2>My name has ({name.length}) letters</h2>
            <h2>My name without any vowels is: ({stripVowels(name)})</h2>
            <h2>I think React ({thoughts})</h2> */}
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;