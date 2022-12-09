import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import scss from './CommentsHeader.module.scss'

function CommentsHeader() {
  return (
    <div className={scss.CommentsHeader}>
      <h4> Comments</h4>
      <Button basic compact icon labelPosition='left'>
        <Icon name='align left' />
        Sort by
      </Button>
    </div>
  )
}
export default CommentsHeader
