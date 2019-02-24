import React from 'react'
import FilterLink from './FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div className="buttons-row">
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All tasks</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active tasks</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Done tasks</FilterLink>
  </div>
)

export default Footer