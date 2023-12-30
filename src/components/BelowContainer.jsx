import { BelowArticle } from "./BelowArticle"
import image1 from "../assets/images/image-retro-pcs.jpg"
import image2 from "../assets/images/image-top-laptops.jpg"
import image3 from "../assets/images/image-gaming-growth.jpg"

export const BelowContainer = () => {
    return (
        <article className="belowContainer">
            <BelowArticle 
                image={image1}
                altImage="Retro PC"
                numberTitle="01"
                title="Reviving Retro PCs"
                paragraph="What happens when old PCs are given modern upgrades?"
            />
            <BelowArticle 
                image={image2}
                altImage="Laptop Keyboard"
                numberTitle="02"
                title="Top 10 Laptops of 2022"
                paragraph="Our best picks for various needs and budgets."
            />
            <BelowArticle 
                image={image3}
                altImage="Gaming Control"
                numberTitle="03"
                title="The Growth of Gaming"
                paragraph="How the pandemic has sparked fresh opportunities."
            />
        </article>
    )
}