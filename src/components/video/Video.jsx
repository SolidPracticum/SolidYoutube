/* eslint-disable react/prop-types */
import React from 'react'
import scss from './Video.module.scss'

const BASE_EMBED_URL = 'https://www.youtube.com/embed/'

function Video(props) {
  // eslint-disable-next-line react/prop-types
  // if (!props.id) {
  //   return null
  // }
  //const embedUrl = `${BASE_EMBED_URL}${props.id}?autoplay=1`;
  const embedUrl = `${BASE_EMBED_URL}${props.id}`
  return (
    <div className='video-container'>
      <div className={scss.Video}>
        <iframe
          className='video-player'
          src={embedUrl}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </div>
    </div>
  )
}
export default Video
// import React from 'react'
// import scss from './Video.module.scss'
// import { useSelector } from 'react-redux'

// function Video() {
//   const { data } = useSelector(state => state.video)
//   console.log(data)
//   return (
//     <div className={scss.Video}>
//       <video>{data}</video>
//       <img
//         src={
//           'https://trello.com/1/cards/637447b822113f004a65031d/attachments/637447bdaa07e602dfa8cadc/previews/637447beaa07e602dfa8cafb/download/image.png'
//         }
//         alt=' '
//       />
//       <div className='video_info'>
//         <div className='video-text'></div>
//       </div>
//     </div>
//   )
// }

// export default Video
