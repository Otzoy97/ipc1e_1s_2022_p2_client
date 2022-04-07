import axios from "axios"
import { createContext, useContext, useState } from "react"

const urlContext = createContext();

export const ProvideUrl = ({ children }) => {
  const url = useProvideUrl();
  return <urlContext.Provider value={url}>{children}</urlContext.Provider>
}

export const useUrl = () => {
  return useContext(urlContext)
}

export const useProvideUrl = () => {
  const [urlApi, setUrlApi] = useState("")

  return {
    urlApi,
    setUrlApi
  }
}