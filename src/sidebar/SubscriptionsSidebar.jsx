import React from 'react'
import css from './SubscriptionsSB.module.css'

function SubscriptionsSidebar({ isOpen }) {
  return (
    <div style={{ display: isOpen ? 'block' : 'none' }} className={css.wrapp}>
      <div className={css.content}>
        <div>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png'
            alt=''
          />
        </div>
        <div>Title</div>
      </div>
      <div className={css.content}>
        <div>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png'
            alt=''
          />
        </div>
        <div>Title</div>
      </div>
      <div className={css.content}>
        <div>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png'
            alt=''
          />
        </div>
        <div>Title</div>
      </div>
      <div className={css.content}>
        <div>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png'
            alt=''
          />
        </div>
        <div>Title</div>
      </div>
    </div>
  )
}

export default SubscriptionsSidebar
