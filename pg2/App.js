import './App.css';
import React, { useState } from 'react';
import bjpLogo from './congress.png';       // Assuming you've added the images in the src folder
import jdsLogo from './congress.png';
import congressLogo from './congress.png';

function App() {

  const [votes, setVotes] = useState({ option1: 0, option2: 0, option3: 0 });
  const handleVote = (option) => {
    setVotes(prevVotes => ({ ...prevVotes, [option]: prevVotes[option] + 1 }));
  }

  return (
    <div className="App">
      <header className="App-header">
        Voting Application
        <br />
        <div className="option">
          <table>
            <thead>
              <tr>
                <th>Option</th>
                <th>Vote</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src={bjpLogo} alt="BJP" /> BJP</td>
                <td>{votes.option1}</td>
                <td>
                  <button className="bjp" onClick={() => handleVote('option1')}>
                    <img src={bjpLogo} alt="BJP Logo" /> Vote
                  </button>
                </td>
              </tr>
              <tr>
                <td><img src={jdsLogo} alt="JDS" /> JDS</td>
                <td>{votes.option2}</td>
                <td>
                  <button className="jds" onClick={() => handleVote('option2')}>
                    <img src={jdsLogo} alt="JDS Logo" /> Vote
                  </button>
                </td>
              </tr>
              <tr>
                <td><img src={congressLogo} alt="Congress" /> Congress</td>
                <td>{votes.option3}</td>
                <td>
                  <button className="congress" onClick={() => handleVote('option3')}>
                    <img src={congressLogo} alt="Congress Logo" /> Vote
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
