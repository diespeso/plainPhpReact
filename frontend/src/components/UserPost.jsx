
import CommentsContainer from "../containers/CommentsContainer";

const UserPost = (props) => {

    const { title, content, user_id: userId, user_name: userName, comments } = props.data;

    return (
        <div className="card">
            <div className="container">
                <div><h2>{title}</h2></div>
                <div>{content}</div>
                <div>author: {userName}</div>
            </div>
            <h5>Comments: </h5>
            <div className="card">
                <CommentsContainer comments={comments}/>
            </div>
        </div>
    )
}

export default UserPost;