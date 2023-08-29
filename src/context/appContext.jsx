import { createContext, useContext } from "react"
import PropTypes from "prop-types"
import { createClient } from '@supabase/supabase-js'

import useAuth from '../hooks/useAuth'

const AppContext = createContext({});

function AppContextProvider({ children }) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  const { session } = useAuth({ auth: supabase.auth })

  return (
    <AppContext.Provider
      value={{ session, supabase, auth: supabase.auth }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { AppContext as default, AppContextProvider, useAppContext };

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}