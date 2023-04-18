import React from "react"
import SectionContent from "./SectionContent"

export default function MainContent({ data }) {
  const content = data ? data.blockText[1] : undefined
  return (
    <section className="main-content">
      {data && (
        <SectionContent
          title={content.title}
          description={content.description}
        />
      )}
    </section>
  )
}
