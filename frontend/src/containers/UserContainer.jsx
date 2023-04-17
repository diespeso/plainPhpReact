import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchUserById } from "../store/userThunks";

import UserPostsContainer from "./UserPostsContainer";

const UserContainer = () => {

    /*const user = {
        id: 1,
        name: 'innerTestname',
        email: 'innerTestEmail',
        password: 'innerTestPassword',
    }*/
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUserById(1));
    }, []);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <span>Name: </span>
                    <span>{user.name}</span>
                </div>
                <div className="col-sm-2">
                    <span>Email: </span>
                    <span>{user.email}</span>
                </div>
            </div>
            <br/>
            <div className="card">
                <UserPostsContainer />
            </div>

        </div>
    )
}

export default UserContainer;