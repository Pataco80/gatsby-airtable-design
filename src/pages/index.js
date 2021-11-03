import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from '../components'

export const query = graphql`
  {
    projectsList: allAirtable(
      filter: { table: { eq: "Projects" } }
      sort: { fields: data___date, order: DESC }
      limit: 3
    ) {
      totalCount
      nodes {
        id
        data {
          name
          category
          date(locale: "fr", formatString: "DD MMM YYYY")
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
    customersList: allAirtable(filter: { table: { eq: "Customers" } }) {
      totalCount
      nodes {
        table
        id
        data {
          name
          title
          quote
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  placeholder: BLURRED
                  formats: WEBP
                  width: 150
                  height: 150
                )
              }
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const {
    projectsList: { nodes: projects },
    customersList: { nodes: customers },
  } = data

  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={projects} title='Latest Projects' />
      <Survey />
      <Slider customers={customers} />
    </Layout>
  )
}

export default HomePage
