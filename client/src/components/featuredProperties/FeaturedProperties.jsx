import './FeaturedProperties.css'

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className='fpImg'/>
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Comfort Suites Airport</span>
                <span className="fpCity">Austin</span>
                <span className="fpPrice">Starting from $140</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Comfort Suites Airport</span>
                <span className="fpCity">Austin</span>
                <span className="fpPrice">Starting from $140</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Comfort Suites Airport</span>
                <span className="fpCity">Austin</span>
                <span className="fpPrice">Starting from $140</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties