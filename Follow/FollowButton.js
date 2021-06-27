import React from 'react';

class Aside extends React.Component{
    constructor(){
        this.state = {
            users: [],
        }
    }
}

followUser = (id) => {
    const newFollowingList = this.state.users.map((user) => {
        if (user.userId === id) {
            user.isFollowing = !user.isFollowing
        }
        return user
    })
    this.setState({isers: newFollowingList})
}