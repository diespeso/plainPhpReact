
// TODO: change from fetch to getting this from parent maybe?

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import NewComment from "../components/NewComment";

import './CommentsContainer.scss';


const CommentsContainer = (props) => {
    const { comments } = props;

    console.log(comments, 'test');
    return (
        <div className="container test-class">
            {comments.map((comment, i) => (
                <div className="card comment-container" key={i}>
                    {comment.content}
                    {comment.replies.map((reply) => (
                        <div className="container">
                            <div className="card">
                                <p>{reply.content}</p>
                                <span>author: {reply.user_id}</span>
                                </div>
                        </div>
                    ))}
                    <span>author: {comment.user_id}</span>
                </div>
            ))}
            <NewComment />
        </div>
    )
}

export default CommentsContainer;