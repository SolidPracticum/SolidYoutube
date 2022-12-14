import css from './Reset_Passwordpage.module.scss'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Reset_Passwordpage() {
  const { t } = useTranslation()
  return (
    <form className={css.wrapper}>
      <div className={css.main}>
        <h2>{t('password_reset_title')}</h2>
        <label>
          {t('reset_email')}
          <input type='email' placeholder={t('email_placeholder')} required />
        </label>
        <button className={css.reset_password_btn}>{t('reset_password_btn')}</button>
        <hr />
        <span className={css.back_to_login}>
          {t('or')}
          <Link to='/login'> {t('back_to_login')}</Link>
        </span>
      </div>
    </form>
  )
}
