import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import  "./featured.scss"

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "TV Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://d.newsweek.com/en/full/1835121/movie-poster-matrix.jpg?w=1600&h=900&q=88&f=304d514f6e7c2503755d1821760c95df" 
            alt="" />
            <div className="info">
                <img src="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRKrgH8goki6B50_fsipiwG8-efCu0w57iY4KsMiMOkV_xpwmCR1bwdO-qexN7jGsMEEVHu_udqNGVab2eGM-RxjYidvNBjuWkAE.png?r=df1" 
                alt="" />  
                <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus aspernatur porro eius iusto odio velit maxime tempora vel soluta omnis quidem commodi aut perspiciatis veniam, minus atque magni eum officia!</span>     
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
