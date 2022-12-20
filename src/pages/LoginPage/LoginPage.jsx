import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import scss from './LoginPage.module.scss'
import ReCAPTCHA from 'react-google-recaptcha'

export default function LoginPage() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captcha, setCaptcha] = useState(false)
  const [error, setError] = useState('')
  return (
    <div className={scss.wrapper}>
      <form className={scss.main}>
        <h2>{t('login')}</h2>
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
            placeholder={t('placeholder_password')}
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <div className={scss.captcha}>
          <ReCAPTCHA
            sitekey='6LfQQkohAAAAAH5coI75ZApxmylS0mQ9hvxwg9wQ'
            onChange={() => setCaptcha(!captcha)}
            onErrored={() => setError('Check your internet connection')}
          />
        </div>
        {error && (
          <div className={scss.error}>
            <p> {error} </p>
          </div>
        )}
        <button className={scss.login}>{t('login_btn')}</button>
        <button className={scss.googleBtn}>
          <img src='./images/login-page/google_icon.png' alt='google icon' />
          <span>{t('google_btn')}</span>
        </button>
        <div className={scss.forgot_password}>
          <Link to='/reset-password'>{t('forgot_password')}</Link>
        </div>
        <hr />
        <div className={scss.register}>
          <span>{t('account')}</span>
          <Link to='/register'>{t('register')}</Link>
        </div>
      </form>
    </div>
  )
}
