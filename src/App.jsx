import "./App.css" // styles
import { Header } from "./components/Header.jsx" // header component
import { MainArticle } from "./components/MainArticle.jsx" // main article component
import { NewContainer } from "./components/NewContainer.jsx" // new container component
import { BelowContainer } from "./components/BelowContainer.jsx" // below container component

export function App() {
  return (
    <main className="main">
      <Header />

      <div className="main-bannerNewArticleContainer">
        <MainArticle />
        <NewContainer />
      </div>

      <BelowContainer />
    </main>
  )
}
