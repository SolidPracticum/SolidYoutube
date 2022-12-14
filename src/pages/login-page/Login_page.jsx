import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import css from './Login_page.module.scss'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Login_page() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error] = useState('')
  const [captcha, setCaptcha] = useState(false)
  return (
    <div className={css.wrapper}>
      <form className={css.main}>
        <h2>{t('login')}</h2>
        {error ? (
          <div className={css.error}>
            <p>{error}</p>
          </div>
        ) : (
          ''
        )}
        <label>
          {t('email')}
          <input
            type='email'
            placeholder={t('placeholder_email')}
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          {t('password')}
          <input
            type='password'
            placeholder={t('palceholder_password')}
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <div className={css.captcha}>
          <ReCAPTCHA
            sitekey='6LfQQkohAAAAAH5coI75ZApxmylS0mQ9hvxwg9wQ'
            onErrored={() => alert('Check your internet connection')}
            onChange={() => setCaptcha(!captcha)}
          />
        </div>
        <button className={css.login}>{t('login_btn')}</button>
        <button className={css.googleBtn}>
          <img src='./images/login-page/google_icon.png' alt='' />
          <span>{t('google_btn')}</span>
        </button>
        <div className={css.forgot_password}>
          <Link to='/password'>{t('forgot_password')}</Link>
        </div>
        <hr />
        <div className={css.register}>
          <span>{t('account')}</span>
          <Link to='/register'>{t('register')}</Link>
        </div>
      </form>
    </div>
  )
}
