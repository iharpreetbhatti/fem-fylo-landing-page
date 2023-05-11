import SectionContent from "./SectionContent"
import Testimonial from "./Testimonial"
import Illustration from "./Illustration"
import ImageURL from "../assets/illustration-2.svg"
import arrowSvg from "../assets/icon-arrow.svg"

function HowFyloWorks({ content }) {
  return (
    <section className="how-fylo-works bg-light-grayish-blue py-5">
      <div className="container mx-auto px-6">
        <Illustration
          url={ImageURL}
          altText="Illstration 2"
        />
        <SectionContent
          title={content.title}
          description={content.description}
        />
        <div className="text-center mb-5">
          <a
            href={content.linkURL}
            className="border border-transparent border-b-moderate-cyan text-moderate-cyan pb-1"
          >
            <span>{content.linkText}</span>{" "}
            <img
              className="inline"
              src={arrowSvg}
            />
          </a>
        </div>
        <Testimonial content={content.testimonial} />
      </div>
    </section>
  )
}

export default HowFyloWorks
