import React from "react"

export default function SectionContent({ title, description }) {
  return (
    <React.Fragment>
      <h3 className="text-lg font-bold">{title}</h3>
      {description.map(para => (
        <p
          key={para.id}
          className="my-2"
        >
          {para.text}
        </p>
      ))}
    </React.Fragment>
  )
}
