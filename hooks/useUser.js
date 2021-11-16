import useSWR from 'swr'

const url = `https://run.mocky.io/v3/d3586928-f1a4-48d2-9a0e-1140bab1e562`
const fetcher = (...args) => fetch(...args).then((res) => res.json())

function useUser(...args) {
  const { data, error } = useSWR(url, fetcher, ...args)
  
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useUser