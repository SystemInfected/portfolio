import React from 'react'

import historyData from '@/app/data/historyData.json'
import styles from '@/styles/Home/About.module.scss'

const HistoryListItems = () => {
  return (
    <>
      {Object.values(historyData).map((yearContent) => {
        const yearEvents = yearContent.yearEvents.map((event, index) => {
          const data = `<i id="event-dot"></i>${event.data}`
          return (
            <li
              key={`${yearContent.year}_${index}`}
              className={styles[event.type]}
              id={event.type}
              dangerouslySetInnerHTML={{ __html: data }}
            />
          )
        })
        return (
          <li key={yearContent.year} id='year'>
            <h3>{yearContent.year}</h3>
            <ul>{yearEvents}</ul>
          </li>
        )
      })}
    </>
  )
}

export default HistoryListItems
