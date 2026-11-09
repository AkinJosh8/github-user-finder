import { FaSearch } from "react-icons/fa"

function SearchBar({ username, setUsername, fetchUser, history }) {
  return (
    <div className="search-box">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Enter Github username" value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchUser()
          }
        }}
      />
      <button onClick={fetchUser}> Search </button>
        {/* Display search history if there are any */}
      {history.length > 0 && (
        <div className="history-box">
          <h3>Recent Searches</h3>
        {/* Map through the history array and create a button for each item */}
        {history.map((item,index) => (
            <button
                key={index} className="history-btn" onClick={()=>{ setUsername(item)
                setTimeout(()=>{
                fetchUser()
            },0)
        }} > {item} </button>
        ))}
      </div>
      )}
    </div>
  )
}

export default SearchBar