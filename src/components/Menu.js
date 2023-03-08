import "./styles/Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faDownload} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

function Menu(props){
    let isLiked = localStorage.getItem(`isLiked${props.index}`);
    const likeAmount = localStorage.getItem(`likeAmount${props.index}`);
    const [like, setLike]=useState(JSON.parse(isLiked));
    const [likes, countLike]=useState(JSON.parse(likeAmount));

    useEffect(()=>{
        if (JSON.parse(isLiked)===null){
            localStorage.setItem(`isLiked${props.index}`, JSON.stringify(false));
        }
    });
    useEffect(()=>{
        localStorage.setItem(`isLiked${props.index}`, JSON.stringify(like));
        localStorage.setItem(`likeAmount${props.index}`, JSON.stringify(likes));
    }, [like, likes, props.index]);
    const handleLike = () => {
      setLike((current)=>!current);
      like ? countLike(likes-1) : countLike(likes + 1);
    };

    return (
        <div className="Menu">
            <span>
                {""}
                <FontAwesomeIcon
                    icon={faHeart}
                    className={like? "btn liked":"btn"}
                    onClick={handleLike}/>
                <span>{likes}</span>
            </span>
            <FontAwesomeIcon icon={faShare} className="btn"/>
            <FontAwesomeIcon icon={faDownload} className="btn"/>
        </div>
    );
}
export default Menu;