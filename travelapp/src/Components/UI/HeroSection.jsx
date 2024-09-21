import { FaAngleDoubleRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="container grid grid-2-cols">
    <div className="hero-content">
      <h1>Lets Explore Nepal , One Memory At a Time</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in consectetur non eligendi autem dicta saepe fuga. Optio architecto dicta distinctio iste dolorem doloribus praesentium quisquam laboriosam pariatur tempore? Qui, cupiditate doloremque.</p>
      <button>Start Exploring <FaAngleDoubleRight /></button>
    </div>
    <div className="hero-image">
      <img src="/images/hero-image.jpg" alt="main-image" />
    </div>
  </div>
  )
}

export default HeroSection