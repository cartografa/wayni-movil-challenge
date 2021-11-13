import useSWR from 'swr'

const url = `https://run.mocky.io/v3/d3586928-f1a4-48d2-9a0e-1140bab1e562`

// creo el fetcher para swr
const fetcher = (...args) => fetch(...args).then((res) => res.json())

function useUser() {
  // obtengo la data y el status
  const { data, error } = useSWR(url, fetcher)
  
  // retorno objeto con data y status
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useUser