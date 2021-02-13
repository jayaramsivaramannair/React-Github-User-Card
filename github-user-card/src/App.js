import React from 'react';
import Profile from './Profile.js';
import TrackedProfile from './TrackedProfile.js';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser : "kwnie",
      currentUserData : {},
      followingData : []
    }
  }

  componentDidMount () {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then((res) => {
      console.log(res.data);
      this.setState({...this.state, currentUserData : res.data});
    })
    .catch((err) => console.log(err))

    axios.get(`https://api.github.com/users/${this.state.currentUser}/following`)
    .then((res) => {
      console.log(res.data);
      this.setState({...this.state, followingData : res.data});
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App flex flex-col m-4 ">
          <h1 className="text-center text-pink-700 font-extrabold tracking-widest text-4xl">Coderbook</h1>
          <blockquote className="text-right italic font-light">It's not who I am underneath, but what I do that defines me. <p>- Bruce Wayne</p></blockquote>
          {this.state.currentUserData && <Profile userData = {this.state.currentUserData}/>}
          <h2 className="text-center text-pink-700 font-extrabold tracking-wider font-light">Profiles Tracked by {this.state.currentUserData.name}</h2>
          <div className="followingProfiles flex flex-row flex-wrap items-center justify-evenly m-4 p-3">
            {this.state.followingData && 
              this.state.followingData.map((profile) => {
                return <TrackedProfile key={profile.id} profile={profile}/>
              })
            }
          </div>
      </div>
    )
  }
}

export default App;
