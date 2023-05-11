import React from "react"

export default function SectionContent({ title, description }) {
  return (
    <React.Fragment>
      <h3 className="text-lg font-raleway text-center font-bold my-5">
        {title}
      </h3>
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
