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
  let storage = ""
  if (localStorage.getItem("urlApi")) {
    storage = localStorage.getItem("urlApi")
  } else {
    localStorage.setItem("urlApi", "")
  }

  const [url, setUrl] = useState(storage)

  const setApiUrl = (url) => {
    setUrl(url)
    localStorage.setItem("urlApi", url)
  }

  return {
    url,
    setApiUrl,
  }
}