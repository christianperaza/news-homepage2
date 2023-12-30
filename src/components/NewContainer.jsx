import { NewArticle } from "./NewArticle"

export const NewContainer = () => {
    return (
        <aside className="newAside">
            <h1 className="newAside-header">New</h1>

            <NewArticle title="Hydrogen VS Electric Cars" paragraph="Will hydrogen-fueled cars ever catch up to EVs?" />
            <NewArticle title="The Downsides of AI Artistry" paragraph="What are the possible adverse effects of on-demand AI image generation?" />
            <NewArticle title="Is VC Funding Drying Up?" paragraph="Private funding by VC firms is down 50% YOY. We take a look at what that means." />
        </aside>
    )
}