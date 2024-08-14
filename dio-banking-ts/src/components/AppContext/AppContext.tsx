import { createContext, useEffect } from "react"
import { useState } from "react"
import { getAllLocalStorage } from "../../services/storage"
import { json } from "stream/consumers"
import { get } from "http"

interface IAppContext {
  user: string,
  isLogged: boolean
  name: string
  setIsLogged: (value: boolean) => void
}
export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  
  const storage = getAllLocalStorage()

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage)
      setIsLogged(login)
    }
  }, [])   

  const user = "tw7"
  const name = "Tiago Azevedo"

  return (
    <AppContext.Provider value={{ user, isLogged, setIsLogged, name }}>
      {children}
    </AppContext.Provider>
  )
}
