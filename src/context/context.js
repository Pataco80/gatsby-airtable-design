import React, { useState, createContext } from 'react'
import sublinks from '../constants/links'

const GatsbyContext = createContext()

// Provider, Consumer

const GatsbyProvider = ({ children }) => {
  return (
    <GatsbyContext.Provider value='Hello world'>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
