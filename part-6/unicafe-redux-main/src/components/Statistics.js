import React from 'react'

const Statistics = ({ stats }) => {
  let mean = 0
  let positive = 0
  const total = stats.bad + stats.good + stats.ok
  if (total) {
    mean = (stats.good - stats.bad) / total
    positive = stats.good / total
  }

  return (
    <>
      <div>Mean {mean}</div>
      <div>Total {total}</div>
      <div>Positive {positive}</div>
    </>
  )
}
export default Statistics
