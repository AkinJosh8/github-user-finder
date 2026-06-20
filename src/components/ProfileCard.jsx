

function ProfileCard({ userData }) {
  const copyProfileLink = () => {
    navigator.clipboard.writeText(userData.html_url)
    alert("Profile link copied to clipboard!")
  }

  return (
    <div className="profile-card">

      <img src={userData.avatar_url} alt={userData.login} />

      <h2>{userData.login}</h2>

      <p>{userData.name}</p>

      <p>{userData.bio}</p>

      <p>
        Public Repos: {userData.public_repos}
      </p>

      <p>{userData.location}</p>
      <p>👥 Followers: {userData.followers}</p>

        <p>Following: {userData.following} </p>

        <p> Company: {" "} {userData.company || "Not specified"} </p>

        <p> Blog: {" "} {userData.blog ? (
            <a href={userData.blog} target="_blank" rel="noreferrer" > Visit Website </a> ) : (  "None"
        )}
        </p>

      <a href={userData.html_url} target="_blank" rel="noreferrer"  > View Github Profile </a>
      {/* Button to copy profile link to clipboard */}
      <button className="copy-btn" onClick={copyProfileLink} > Copy Profile Link </button>

    </div>
  )
}

export default ProfileCard