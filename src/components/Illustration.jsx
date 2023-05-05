function Illustration({ url, altText }) {
  return (
    <img
      className="mx-auto mb-10"
      src={url}
      alt={altText}
    />
  )
}

export default Illustration
