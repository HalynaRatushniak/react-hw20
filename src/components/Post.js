import Menu from "./Menu";
import "./styles/Post.css";

function Post(response){
    return (
        <div className="post-wrapper">
            <div className="post-header">
                {""}
                <img src={response.data.icon} className="post-icon" alt={response.data.name}/>
                {""}
                <div className="post-info">
                    <p className="name">{response.data.name}</p>
                    <p className="user">{response.data.nickname}</p>
                </div>
            </div>
            <div className="img-wrapper">
                <img src={response.data.image}  alt="Post"/>
            </div>
            <p className="description">{response.data.content}</p>
            <Menu index={response.index +10}/>
        </div>
    )
}
export default Post;