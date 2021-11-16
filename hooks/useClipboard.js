import { useState, useEffect } from 'react'

function useClipboard(text) {
  // creo estado para el estatus
  const [copyStatus, setCopyStatus] = useState(false)

  // función que devuelvo para usar
  const copy = () => {
    navigator.clipboard.writeText(text).then(
      () => setCopyStatus(true),
      (error) => (
        setCopyStatus(false),
        console.error('No se pudo copiar :(', error)
      )
    )}

  // genero cambio en el status si la información se copia
  useEffect(() => {
    if (copyStatus === false) {
      return
    }
    const timeoutId = setTimeout(
      () => setCopyStatus(false), 1500
    )
    return () => clearTimeout(timeoutId)
  }, [copyStatus])

  
  return [copyStatus, copy]
}

export default useClipboard