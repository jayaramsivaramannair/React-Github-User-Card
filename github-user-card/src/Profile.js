import React from 'react';

class Profile extends React.Component {

    render() {
        return(
            <div className="container mx-auto flex flex-row flex-wrap mt-4 text-base">
                <div>
                    <img className="w-32 h-32 rounded-full mx-auto"src={this.props.userData.avatar_url} alt="profile pic"/>
                </div>
                <div className="bio ml-2 p-2 font-extralight italic">
                    <h2>Name: {this.props.userData.name}</h2>
                    <h3>Bio : {this.props.userData.bio}</h3>
                    <p>Location: {this.props.userData.location}</p>
                    <p>Profiles Tracked: {this.props.userData.following}</p>
                    <p>Followed By: {this.props.userData.followers}</p>
                </div>
            </div>
        )
    }
}

export default Profile;