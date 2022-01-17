export const HOMEPAGE_QUERY = `query Homepage {
  homePage {
    id
    bannerImage {
      alt
      url(imgixParams: {fit: fill})
      responsiveImage(imgixParams: {fit: fill}) {
        height
        src
        srcSet
        width
      }
    }
    strapline
    heading {
      value
    }
    introHeading
    introHeadingTwo
    introParagraph
  }
}`
