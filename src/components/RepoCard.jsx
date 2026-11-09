
function RepoCard({ repo }) {

  return (
    <div className="repo-card">
      <h3>{repo.name}</h3>
      <p> {repo.description || "No description available"} </p>
      <p className="repo-stars">
        <svg className="star-svg" viewBox="0 0 24 24" fill="currentColor" >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        {repo.stargazers_count}
      </p>
      <p> Language: {repo.language || "N/A"} </p>
      <a href={repo.html_url} 
        target="_blank" 
        rel="noreferrer" >  
        View Repository 
      </a>
    </div>
  )
}

export default RepoCard