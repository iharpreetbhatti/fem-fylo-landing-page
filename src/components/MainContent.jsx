import React from "react"
import SectionContent from "./SectionContent"
import ImageURL from "../assets/illustration-2.svg"

export default function MainContent({ data }) {
  const content = data ? data.blockText[1] : undefined
  return (
    <section className="main-content">
      <img
        src={ImageURL}
        alt="Illstration 2"
      />
      {data && (
        <SectionContent
          title={content.title}
          description={content.description}
        />
      )}
    </section>
  )
}
