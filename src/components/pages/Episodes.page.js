import "./pages-style/EpisodesPage.css";

const pics = [
    "https://i.pinimg.com/736x/d2/0f/ab/d20fab81bece5f1c2eaf35392ad28114.jpg",
    "https://m.media-amazon.com/images/I/91bz4+adbbL._SL1500_.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Rick_and_Morty_season_3.png/250px-Rick_and_Morty_season_3.png",
    "https://upload.wikimedia.org/wikipedia/en/1/17/Rick_and_Morty_season_4.jpg",
    'https://resizing.flixster.com/RUJfAiDlQTatJprIYxWM3LUAZ9E=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjk2MjQ4OC53ZWJw',
    "https://i.pinimg.com/736x/55/cf/ba/55cfbafdc67266c862f99eb07f57217e.jpg",
   ];

function Episodes() {
    return (
        <div className="Episodes">
            {pics.map((el, i) => {
                return (
                    <div key={i}>
                        <img src={el} alt="Dog" />
                    </div>
                );
            })}
        </div>
    );
}
export default Episodes;