function Info({ name, location, bio }) {
  return (
    <div className="info">
      <h1 className="name">{name}</h1>
      <span className="location">{location}</span>
      <p className="bio">{bio}</p>
    </div>
  )
}

export default Info
