import { createContext } from "react"
import { useState } from "react"

interface IAppContext {
  user: string,
  isLogged: boolean
  name: string
  setIsLogged: (value: boolean) => void
}
export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  
  const user = "tw7"
  const name = "Tiago Azevedo"

  return (
    <AppContext.Provider value={{ user, isLogged, setIsLogged, name }}>
      {children}
    </AppContext.Provider>
  )
}
