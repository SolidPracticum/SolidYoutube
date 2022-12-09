import React from 'react'
import { CommentsHeader } from './CommentsHeader/CommentsHeader'
import { Comment } from './Comment/Comment'
import { AddComment } from './AddComment/AddComment'

function Comments() {
  const comments = this.props.comments.map(comment => {
    return <Comment comment={comment} key={comment.id} />
  })

  return (
    <div>
      <CommentsHeader amountComments={this.props.amountComments} />
      <AddComment key='add-comment' />
      {comments}
    </div>
  )
}

export default Comments
