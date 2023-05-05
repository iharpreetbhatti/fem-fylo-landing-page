import SectionContent from "./SectionContent"
import Testimonial from "./Testimonial"
import Illustration from "./Illustration"
import ImageURL from "../assets/illustration-2.svg"

function HowFyloWorks({ content }) {
  return (
    <section className="how-fylo-works">
      <Illustration
        url={ImageURL}
        altText="Illstration 2"
      />
      <SectionContent
        title={content.title}
        description={content.description}
      />
      <a href={content.linkURL}>{content.linkText}</a>
      <Testimonial content={content.testimonial} />
    </section>
  )
}

export default HowFyloWorks
