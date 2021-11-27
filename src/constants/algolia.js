const AirtableQuery = `
{
  allAirtable(
    filter: {table: {eq: "Projects"}}
  ) {
    nodes {
      id
      data {
        name
        date
        category
        image {
          localFiles {
            childImageSharp {
              gatsbyImageData
            }
            name
          }
        }
      }
    }
  }
}
`

function pageToAlgoliaRecord({ id, data: { name, date, category, image } }) {
  return {
    objectID: id,
    name,
    date,
    category,
    image: { ...image.localFiles[0].childImageSharp.gatsbyImageData },
  }
}

const queries = [
  {
    query: AirtableQuery,
    transformer: ({ data }) => data.allAirtable.nodes.map(pageToAlgoliaRecord),
  },
]

module.exports = queries
