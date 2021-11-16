function normalizeDate(APIdate, options = {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit'
}) {
  const date = new Date(APIdate)
  const normalizedDate = date.toLocaleString('es-AR', options).replaceAll('/', '-')
  return normalizedDate
}

function normalizeNumber(APInumber, options = {
  minimumFractionDigits: 2
}) {
  return APInumber.toLocaleString('de-DE', options).replaceAll('.','')
}

export { normalizeDate, normalizeNumber }