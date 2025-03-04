import React from 'react'

const ComTen = ({data}) => {
  return (
    <>
    <h4>First Name : {data.firstName}</h4>
    <h4>Last Name : {data.lastName}</h4>
    <h4>Phone Number : {data.number}</h4>
    <h4>Course : {data.course}</h4>
    <h4>Branch : {data.branch}</h4>
    <h4>City : {data.city}</h4>
    </>
  )
}

export default ComTen