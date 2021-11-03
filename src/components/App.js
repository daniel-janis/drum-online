import './Styles.css';
import React from 'react';
import Homepage from './Homepage';

class App extends React.Component{
  render() {
        return (
            <div className="Homepage">
                {/*App.js displays only homepage. Homepage then navigates to other components with their own pages???*/}
                <Homepage />
            </div>
        )
    }
};

export default App;
