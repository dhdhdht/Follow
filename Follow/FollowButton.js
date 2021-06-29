import React, {useState} from 'react';
import { Button } from 'antd';

const FollowButton = () => {
    const [follow, setFollow] = useState("");

    const toggleFollow = (isFollow) => {
        return isFollow ? false : true
    }
    return (
        <Button type="primary" onClick={() => setFollow(toggleFollow(follow))}>
            {follow ? 'unfollow' : 'follow'}
        </Button>
    )
}

export default FollowButton;