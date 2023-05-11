import HowFyloWorks from "./HowFyloWorks"

export default function MainContent({ content }) {
  return (
    <main>
      <HowFyloWorks content={content.howFyloWorks} />
    </main>
  )
}
