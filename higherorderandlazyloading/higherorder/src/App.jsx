import Auth from "./components/Auth"
import Profile from "./components/Profile";

const ProfilewithAuth = Auth(Profile)

function App() {
  return (
    <>
     <h1>Appfile</h1>
    <ProfilewithAuth/>
    </>
  )
}

export default App
