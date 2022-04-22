/**
 * Recupera la url almacenada en localStorage
 */
export function getURL() {
  return localStorage.getItem('given_url');
}

/**
 * Determina si existe una url almacenada en el localstorage
 * @returns 
 */
export function isURL() {
  let info = localStorage.getItem('given_url');
  if (info) {
    return true;
  } else {
    return false;
  }
}

/**
 * Establece una url en el localStorage
 * @param url 
 */
export function setURL(url:string) {
  localStorage.setItem("given_url", url);
}