import imageMobile from "../assets/images/image-web-3-mobile.jpg"
import imageDesktop from "../assets/images/image-web-3-desktop.jpg"

export const MainArticle = () => {
    return (
        <section className="banner">
            <picture>
                <source media="(max-width: 640px)" srcSet={imageMobile} />
                <source media="(min-width: 641px)" srcSet={imageDesktop} />
                <img className="banner-image" src={imageMobile} alt="Main Article Image" />
            </picture>

            <div className="banner-textsDiv">
                <div className="banner-textsDiv-headerDiv">
                    <h2 className="banner-textsDiv-header">The Bright Future of Web 3.0?</h2>
                </div>

                <div className="banner-textsDiv-pButtonDiv">
                    <p className="banner-textsDiv-p">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
But is it really fulfilling its promise?</p>

                    <button className="banner-textsDiv-button">READ MORE</button>
                </div>
            </div>
        </section>
    )
}





