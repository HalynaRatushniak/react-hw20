import "./pages-style/MainPage.css";

import Menu from "../Menu";
import { useEffect } from "react";

const profilePics = [
    "https://www.rollingstone.com/wp-content/uploads/2019/10/RickandMorty.jpg?w=910&h=511&crop=1",
    "https://variety.com/wp-content/uploads/2020/11/RAM_S2_Ep205.jpg?w=681&h=383&crop=1",
    "https://variety.com/wp-content/uploads/2017/10/rickandmorty.jpg?w=681&h=383&crop=1",
    "https://decider.com/wp-content/uploads/2019/12/rick-and-morty-season-4-ep-5-7.jpg?quality=80&strip=all",
    "https://cdn.pastemagazine.com/www/articles/2021/03/30/rick_morty_season_5_trailer.JPG",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F06%2F19%2Frick-morty-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDkmJdvTv6J30mSOeNoQVjDh8kpGdms0Gqg&usqp=CAU",
];
const picsDescription = [
    "It's breakfast time",
    "Let's make party!Wooo",
    "Don't be afraid, Morty",
    "Merry Christmas",
    "Watching TV",
    "It also happens",
    "Business meeting",
];
function Main() {
    useEffect(() => {
        const likeFromStorage = localStorage.getItem("likeAmount0");
        if (JSON.parse(likeFromStorage) === null) {
            profilePics.map((value, index) => {
                let randomLikes = Math.round(Math.random() * 100);
                localStorage.setItem(`likeAmount${index}`, JSON.stringify(randomLikes));
            });
        }
    }, []);

    return (
        <div className="Main">
            {profilePics.map((el, index) => {
                return (
                    <div className="picture-box" key={index}>
                        <img src={el} alt="rick&morty" />
                        <Menu index={index} />
                        <p>{picsDescription[index]}</p>
                    </div>
                );
            })}
        </div>
    );
}
export default Main;