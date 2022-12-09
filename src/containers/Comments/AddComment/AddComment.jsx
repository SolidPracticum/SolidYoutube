import React from 'react'
import scss from './AddComment.module.scss'
import { Form, Image, TextArea } from 'semantic-ui-react'

function AddComment() {
  return (
    <div className={scss.AddComment}>
      <Image className='user-image' src='https://via.placeholder.com/48x48' circular />
      <Form>
        <Form.TextArea control={TextArea} autoHeight placeholder='Add a public comment' />
      </Form>
    </div>
  )
}
export default AddComment
