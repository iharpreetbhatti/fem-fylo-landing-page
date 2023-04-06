import Image from "../assets/illustration-1.svg"

function Hero(props) {
  const handleCTA = e => e.preventDefault()
  return (
    <div className="hero columns-1 py-10">
      <div className="hero-image mt-10">
        <img
          className="mx-auto mb-10"
          src={Image}
          alt="Fylo Illustration"
        />
      </div>
      <div className="hero-content text-center mb-20">
        <h1 className="hero-title font-raleway font-bold text-2xl mb-5">
          {props.data && props.data.blockText[0].title}
        </h1>
        <p className="hero-description mb-5">
          {props.data && props.data.blockText[0].description}
        </p>
        <form className="cta font-raleway">
          <input
            className="block text-sm w-full border rounded py-3 indent-5 mb-5"
            type="email"
            name="ctaEmailInput"
            id="ctaEmailInput"
            placeholder="Enter your email..."
          />
          <button
            className="block w-full p-3 bg-blue-600 text-white font-bold cursor-pointer shadow-md rounded"
            onClick={handleCTA}
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  )
}

export default Hero
