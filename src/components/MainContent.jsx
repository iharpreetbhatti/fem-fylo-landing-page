import HowFyloWorks from "./HowFyloWorks"

export default function MainContent({ content }) {
  return (
    <main>
      <div className="container mx-auto px-6">
        <HowFyloWorks content={content.howFyloWorks} />
      </div>
    </main>
  )
}
