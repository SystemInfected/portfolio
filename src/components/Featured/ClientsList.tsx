'use client'

import React, { useEffect, useState } from 'react'

import clientsData from '@/app/data/clientsData.json'
import styles from '@/styles/Home/Featured.module.scss'
import Image from 'next/image'

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
        <div className={styles.image}>
          <Image
            src={`/${client.url}`}
            alt={client.name}
            title={client.name}
            sizes='(min-width: 60em) 24vw, (min-width: 28em) 45vw, 100vw'
            quality={70}
            fill
            style={{ objectFit: 'contain' }}
            loading='lazy'
          />
        </div>
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
