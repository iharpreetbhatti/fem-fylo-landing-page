import React from "react"
import SectionContent from "./SectionContent"
import ImageURL from "../assets/illustration-2.svg"

export default function MainContent() {
  return (
    <main>
      <div className="container mx-auto px-6">
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
      </div>
    </main>
  )
}
