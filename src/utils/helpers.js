export const capitalizeFirstLetter = str => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const formatDate = date => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'}
  return new Date(date).toLocaleDateString(undefined, options)
}

export const truncateString = (str, length) => {
  if (!str || str.length <= length) return str
  return str.substring(0, length) + '...'
}

export const debounce = (func, delay) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => func(...args), delay)
  }
}

export const calculatePercentage = (partialValue, totalValue) => {
  if (totalValue === 0) return 0
  return ((partialValue / totalValue) * 100).toFixed(2)
}

export const isValidEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const generateUniqueId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export const formatCurrency = (amount, locale = 'en-US', currency = 'USD') => {
  return new Intl.NumberFormat(locale, {style: 'currency', currency}).format(
    amount,
  )
}
