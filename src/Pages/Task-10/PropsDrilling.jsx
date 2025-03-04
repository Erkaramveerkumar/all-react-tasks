import React from 'react'
import ComOne from './ComOne'

const PropsDrilling = () => {
    const data ={
        firstName:"Karamveer",
        lastName: "Kishan",
        number : 8127734847,
        course : "B.tech",
        branch : "CSE",
        city : "Lucknow"

    }
  return (
    <>
    <ComOne data = {data} />
    </>
  )
}

export default PropsDrilling