import React from 'react';

const TrackedProfile = (props) => {
    return(
        <div className="flex flex-col m-1">
            <div>
                <img className="w-32 h-32 rounded-full mx-auto"src={props.profile.avatar_url} alt="profile pic"/>
            </div>
            <h2>User Name: {props.profile.login}</h2>
            <a href=" "> Learn More....</a>
        </div>
    )
}

export default TrackedProfile;