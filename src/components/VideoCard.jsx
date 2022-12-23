/* eslint-disable react/prop-types */
import React from 'react'
import { Avatar } from '@material-ui/core'
import scss from './VideoCard.module.scss'

function VideoCard(props) {
  console.log(props)
  return (
    <div className={scss.videoCard}>
      <img className={scss.videoCard_thumbnail} src={props.image} alt='' />
      <div className={scss.videoCard_info}>
        <Avatar className={scss.videoCard_avatar} alt={props.channel} src={props.channelImage} />
        <div className={scss.videoCard_text}>
          <h4>{props.title}</h4>
          <p>{props.channel}</p>
          <p>
            {props.views}•{props.timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
