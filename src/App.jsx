import { useState } from "react"
import "./app.css"
import SearchBar from "./components/SearchBar"
import ProfileCard from "./components/ProfileCard"
import RepoCard from "./components/RepoCard"


function App( ) {
  //username - current value, setUsername - update value, useState("") - initial value
  const [username, setUsername] = useState("")

  //this state will store the github date after we fetch it from the API
  const [userData, setUserData] = useState(null)

  //this state will be used to show loading message while we are fetching data from github API
  const [loading, setLoading] = useState(false)

  //this state will be used to show error message if we get an error while fetching data from github API
  const [error, setError] = useState(null)

  //this state will be used to store the repositories of the user we are searching for
  const [repos, setRepos] = useState([])

  //this state will be used to store the search history of the user
  const [history, setHistory] = useState(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    return storedHistory ? JSON.parse(storedHistory) : [];
  });


  //this function will be called when user clicks on search button, it will fetch the data from github API and update the userData state
  const fetchUser = async () => {

    if (!username.trim()) {
      setError("Please enter a username")
      return
    }

    setLoading(true)
    setError("")
    setUserData(null)
    setRepos([])  //prevents old repos from staying on screen when a new user is searched

    try {
    //make a request to github API to get user data
    const response = await fetch( `https://api.github.com/users/${username}`)
    //after we get the response, we need to convert it to json format
    const data = await response.json() 

    //if the response contains a message "Not Found", it means the user was not found, so we set the error state to "User not found". 
    // Otherwise, we set the userData state to the data we got from the API and make another request to get the user's repositories
    if (data.message === "Not Found") {
      setError("User not found")
    } else {
      setUserData(data)
      const updatedHistory = [data.login, ...history.filter((item) => item !== data.login
      ) ].slice(0, 5); // Keep only the last 5 unique searches

      // Update the history state and save it to localStorage
      setHistory(updatedHistory)

      // Save the updated history to localStorage
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));

      const repoResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      )

      const repoData = await repoResponse.json()

      // Sort the repositories by stargazers_count in descending order
      const sortedRepos = repoData.sort(
        (a, b) => 
          b.stargazers_count - 
          a.stargazers_count
        )
      setRepos(sortedRepos)
    }
    
  } 
  
    catch {
      setError("Something went wrong")
  }
    finally {
      setLoading(false)
    }
    
  }

  return (
    <>
    <div className="container">

      <h1>Github User Finder</h1>
      {/* from onchange event, whenever user types, save it into state */}
      <SearchBar 
        username={username}
        setUsername={setUsername}
        fetchUser={fetchUser}
        history={history}
      />

    {/* if loading is true, show the spinner, otherwise show nothing */}
    {loading && ( <div className="spinner"> </div> )}

    {error && <p>{error}</p>}

    {/* if we have userData, display the login name of the user, otherwise show nothing */}
    {userData && (
     <ProfileCard userData={userData} />
    )}

    {repos.length > 0 && (
    <div className="repos-section">

    <h2>Repositories</h2>

      {repos.slice(0, 5).map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}

    </div>
    )}
    
  </div>
  

  </>
  )}



export default App