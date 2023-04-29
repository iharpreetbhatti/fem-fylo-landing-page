import SectionContent from "./SectionContent"
import ImageURL from "../assets/illustration-2.svg"

function HowFyloWorks({ content }) {
  return (
    <section className="how-fylo-works">
      <img
        src={ImageURL}
        alt="Illstration 2"
      />
      <SectionContent
        title={content.title}
        description={content.description}
      />
      <a href={content.linkURL}>{content.linkText}</a>
    </section>
  )
}

export default HowFyloWorks
