import Image from "../assets/illustration-1.svg"

function Hero(props) {
  const handleCTA = e => e.preventDefault()
  return (
    <div className="hero flex flex-col lg:flex-row-reverse lg:items-center lg:gap-24 py-10 lg:py-20">
      <div className="hero-image mt-10">
        <img
          className="mx-auto mb-10"
          src={Image}
          alt="Fylo Illustration"
        />
      </div>
      <div className="hero-content text-center lg:text-left mb-20 lg:mb-0">
        <h1 className="hero-title font-raleway font-bold text-2xl lg:text-4xl mb-5">
          {props.data && props.data.blockText[0].title}
        </h1>
        <p className="hero-description lg:text-lg mb-5">
          {props.data && props.data.blockText[0].description}
        </p>
        <form className="cta font-raleway">
          <input
            className="block lg:inline-block w-full lg:w-3/5 text-sm border-2 border-slate-950 rounded py-3 indent-5 mb-5 lg:mb-0 lg:mr-5"
            type="email"
            name="ctaEmailInput"
            id="ctaEmailInput"
            placeholder="Enter your email..."
          />
          <button
            className="block lg:inline-block w-full lg:w-4/12 p-3 bg-blue-600 text-white font-bold cursor-pointer shadow-md rounded"
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
