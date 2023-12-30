import './css/Foxes.css'
import foxInWoodsImage from './images/card-1.jpg'
import foxInSnowImage from './images/card-2.jpg'

function Foxes() {
    return (
        <div className="foxes">
            <div class="card__right">
                <img class="card__pic__right" src={foxInWoodsImage} alt="Fox in the woods" />
                <h2 class="card__title">Fox in the woods</h2>
                <div class="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum libero in erat ullamcorper, non semper nisi condimentum.</div>
            </div>
            <div class="card__left">
                <img class="card__pic__left" src={foxInSnowImage} alt="Fox in the snow" />
                <div class="card__area">
                    <h2 class="card__title">Fox in the snow</h2>
                    <div class="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum libero in erat ullamcorper, non semper nisi condimentum.</div>
                </div>
            </div>
        </div>
    );
}

export default Foxes;