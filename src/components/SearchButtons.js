import React, { useState } from 'react'
import styled from 'styled-components'

const SearchButtons = (props) => {
  const { projects, setProjects, setBackToAll } = props
  const [index, setIndex] = useState(0)

  const categories = [
    'All',
    ...new Set(
      projects.map((project) => {
        return project.data.category
      })
    ),
  ]

  const showProjects = (category, categoryIndex) => {
    setIndex(categoryIndex)
    if (category === 'All') {
      setBackToAll()
    } else {
      const tempProjects = projects.filter(
        (project) => project.data.category === category
      )
      setProjects(tempProjects)
    }
  }

  return (
    <Wrapper>
      {categories.map((category, categoryIndex) => {
        return (
          <button
            key={categoryIndex}
            className={index === categoryIndex ? 'active' : undefined}
            onClick={() => showProjects(category, categoryIndex)}
          >
            {category}
          </button>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    font-size: 1rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--clr-grey-6);
  }
`
export default SearchButtons
