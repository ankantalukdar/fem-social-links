import avatarImage from "./assets/images/avatar-jessica.jpeg"
import Avatar from "./components/Avatar"
import Info from "./components/Info"
import Buttons from "./components/Buttons"

function ProfileCard() {
  const user = {
    avatar: avatarImage,
    name: "Jessica Randall",
    location: "London, United Kingdom",
    bio: "Front-end developer and avid reader.",
    links: [
      { label: "GitHub", url: "https://github.com" },
      { label: "Frontend Mentor", url: "https://frontendmentor.io" },
      { label: "LinkedIn", url: "https://linkedin.com" },
      { label: "Twitter", url: "https://twitter.com" },
      { label: "Instagram", url: "https://instagram.com" },
    ],
  }

  return (
    <div className="card">
      <Avatar src={user.avatar} alt={`Avatar of ${user.name}`} />
      <Info name={user.name} location={user.location} bio={user.bio} />
      <Buttons links={user.links} />
    </div>
  )
}

export default ProfileCard
