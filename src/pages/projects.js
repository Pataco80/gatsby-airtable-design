import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Projects, Algolia } from '../components'

export const query = graphql`
  {
    projectsList: allAirtable(
      filter: { table: { eq: "Projects" } }
      sort: { fields: data___date, order: DESC }
    ) {
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
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                )
              }
              name
            }
          }
        }
      }
    }
  }
`

const ProjectsPage = ({ data }) => {
  const {
    projectsList: { nodes: projects },
  } = data
  return (
    <Wrapper>
      <Layout>
        <Projects title='All Projects' projects={projects} page />
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`

export default ProjectsPage
