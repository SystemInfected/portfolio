'use client'

import React, { useEffect, useState } from 'react'

import clientsData from '@/data/clientsData.json'
import styles from '@/styles/Home/Featured.module.scss'

const ClientsList = () => {
  const [resized, setResized] = useState({ scroll: 0, width: 0 })
  const diff = 20
  const handleResize = () => {
    const clientContainer = document.getElementById('clientContainer')
    setResized({
      scroll: clientContainer?.scrollWidth || 0,
      width: clientContainer?.clientWidth || 0,
    })
  }

  useEffect(() => {
    const clientContainer = document.getElementById('clientContainer')
    if (clientContainer) {
      const clients = clientContainer.querySelectorAll('#client')
      if (clientContainer.scrollWidth - diff > clientContainer.clientWidth) {
        clients.forEach((client) => {
          client.classList.add(styles.scroll)
        })
      } else {
        clients.forEach((client) => {
          client.classList.remove(styles.scroll)
        })
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  useEffect(() => {
    handleResize()
  }, [])

  const clientsItemsContent = Object.values(clientsData).map((client) => {
    const distance = resized.scroll - resized.width
    const speed = (resized.scroll / resized.width) * 5 || 5
    return (
      <div
        className={styles.client}
        key={client.url}
        id='client'
        style={
          { '--distance': distance, '--speed': speed } as React.CSSProperties
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${client.url}`} alt={client.name} title={client.name} />
      </div>
    )
  })

  return (
    <div className={styles.clientContainer} id='clientContainer'>
      {clientsItemsContent}
    </div>
  )
}

export default ClientsList
