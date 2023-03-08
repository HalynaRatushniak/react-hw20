import { posts } from "../CharactersList";
import { useEffect } from "react";
import Post from "../Post";
import "./pages-style/CharacterPage.css";

function Character() {
    useEffect(() => {
        const likeFromStorage = localStorage.getItem("likeAmount10");
        if (JSON.parse(likeFromStorage) === null) {
            posts.map((value, index) => {
                let randomLikes = Math.round(Math.random() * 100);
                localStorage.setItem(
                    `likeAmount${index + 10}`,
                    JSON.stringify(randomLikes)
                );
            });
        }
    }, []);
    return (
        <div className="Character-wrapper">
            <div className="Character">
                {posts.map((element, id) => {
                    return <Post data={element} key={id} index={id} />;
                })}{" "}
            </div>
        </div>
    );
}
export default Character;