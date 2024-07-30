function Buttons({ links }) {
  return (
    <div className="buttons">
      {links.map((link, index) => (
        <button
          key={index}
          onClick={() => window.open(link.url)}
          aria-label={`Link to ${link.label}`}
        >
          {link.label}
        </button>
      ))}
    </div>
  )
}

export default Buttons
