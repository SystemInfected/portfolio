import React from 'react'
import { SocialIcon } from 'react-social-icons'

import styles from '@/styles/Footer/Footer.module.scss'

import { color } from '../../styles/variables'

const SocialLinks = () => {
  const socialIconColor = color.mainColorLight
  return (
    <div className={styles.socialLinksContainer}>
      <SocialIcon
        url='http://www.linkedin.com/in/sebastianwidin'
        bgColor={socialIconColor}
        fgColor='transparent'
        target='_blank'
      />
      <SocialIcon
        url='https://github.com/SystemInfected'
        bgColor={socialIconColor}
        fgColor='transparent'
        target='_blank'
      />
      <SocialIcon
        url='http://www.dribbble.com/SystemInfected'
        bgColor={socialIconColor}
        fgColor='transparent'
        target='_blank'
      />
      <SocialIcon
        url='http://www.facebook.com/sebastianwidin/'
        bgColor={socialIconColor}
        fgColor='transparent'
        target='_blank'
      />
      <SocialIcon
        url='http://www.instagram.com/systeminfected'
        bgColor={socialIconColor}
        fgColor='transparent'
        target='_blank'
      />
      <SocialIcon
        url='http://www.twitter.com/System_Infected'
        bgColor={socialIconColor}
        fgColor='transparent'
        target='_blank'
        network='x'
      />
    </div>
  )
}

export default SocialLinks
