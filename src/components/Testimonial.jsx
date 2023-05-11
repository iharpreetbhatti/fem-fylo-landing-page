import quotesIcon from "../assets/icon-quotes.svg"

function Testimonial({ content }) {
  return (
    <div className="max-w-sm bg-white mt-12 p-7 rounded-md shadow-md">
      <img
        className="mb-2"
        src={quotesIcon}
        alt="Block Quote Icon"
      />
      <p className="mb-4 text-xs leading-5">{content.text}</p>
      <div className="flex items-center gap-3">
        <img
          className=" rounded-full w-8"
          src="./images/avatar-testimonial.jpg"
          alt=""
        />
        <div className="leading-3">
          <h4 className="text-xs font-bold">{content.userName}</h4>
          <span className="text-xs">{content.userDesignation}</span>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
