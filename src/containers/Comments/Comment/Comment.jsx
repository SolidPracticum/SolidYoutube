import React from 'react'
import scss from './Comment.module.scss'
import { Button, Image } from 'semantic-ui-react'

function Comment() {
  //   if (!props.comment) {
  //     return <div />
  //   }
  //   const topLevelComment = props.comment.snippet.topLevelComment
  //   const { authorProfileImageUrl, authorDisplayName, textOriginal } = topLevelComment.snippet
  //   const likeCount = topLevelComment.snippet.likeCount

  return (
    <div className={scss.Comment}>
      <Image className='user-image' src=' ' circular />
      <div>
        <div className='user-name'></div>
        <span> </span>
        <div className='comment-actions'>
          {/* <Rating likeCount={likeCount} />{' '} */}
          <Button size='mini' compact>
            Repo M
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Comment
