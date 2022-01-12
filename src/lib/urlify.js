const urlify = (text) => {
  if (text === undefined) return
  const urlRegex = /(https?:\/\/[^\s]+)/g
  return text.replace(urlRegex, (url) => {
    return `<a style="color : #3aff77; text-decoration : underline;" href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
  })
}
export default urlify
