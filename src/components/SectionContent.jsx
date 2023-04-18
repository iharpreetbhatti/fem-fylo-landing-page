import React from "react"

export default function SectionContent({ title, description }) {
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <p>{description}</p>
    </React.Fragment>
  )
}
