import './App.css'

import Auth from './Auth'
import Profile from './Profile'

import { AppContextProvider, useAppContext } from "./context/appContext";



function App() {

  const { session } = useAppContext();
  
  return (
    <AppContextProvider>
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        {!session ? <Auth /> : <Profile key={session.user.id} session={session} />}
      </div>
    </AppContextProvider>
  )
}

export default App