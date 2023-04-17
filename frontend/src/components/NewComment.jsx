
import { useDispatch, useSelector } from "react-redux";
import { postNewComment } from "../store/newCommentThunks";
import { setNewComment } from "../store/newComment";
import { useEffect } from "react";


const NewComment = () => {

    const dispatch = useDispatch();
    const newComment = useSelector((state) => state.newComment);

    const onSendComment = () => {
        dispatch(postNewComment(newComment.content));
    };

    const onChange = (event) => {
        dispatch(setNewComment(event.target.value));
    };

    console.log(newComment);

    return (
        <div className="newComment card">
            <div className="row">
                <div className="col-sm-11">
                    <input type="text" className="form-control" onChange={onChange}></input>
                </div>
                <div className="col-sm-1">
                    <button className="btn btn-primary" onClick={onSendComment}>Post</button>
                </div>
            </div>
        </div>
    )
};

export default NewComment;