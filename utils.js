export function convertToSlug(str) {
  str = str.replace(/^\s+|\s+$/g, "")

  // Make the string lowercase
  const lowerCase = str.toLowerCase()

  // Remove invalid chars
  const result = lowerCase
    .replace(/[^a-z0-9 -]/g, "")
    // Collapse whitespace and replace by -
    .replace(/\s+/g, "-")
    // Collapse dashes
    .replace(/-+/g, "-")

  return result
}

export function convertFromSlug(slug) {
  slug = slug.replaceAll("-", " ")

  return slug
}
