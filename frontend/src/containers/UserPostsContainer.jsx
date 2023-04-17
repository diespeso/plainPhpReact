import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchPostsByUserId } from "../store/userPostsThunks";

import UserPost from '../components/UserPost';
const UserPostsContainer = () => {
    const dispatch = useDispatch();
    const userPosts = useSelector((state) => state.userPosts);

    useEffect(() => {
        dispatch(fetchPostsByUserId(1));
    }, []);

    return (
        <div className="container">
            {userPosts.map((userPost, i) => (
                <UserPost data={userPost} key={i}/>)
            )
            }
        </div>
    )
};

export default UserPostsContainer;