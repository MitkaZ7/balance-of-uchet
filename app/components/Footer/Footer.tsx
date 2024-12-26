import styles from './Footer.module.scss'
import Image from 'next/image'
import tgIcon from '../../../public/icons/telegram.svg';
import waIcon from '../../../public/icons/whatsapp-icon.svg';
import emailIcon from '../../../public/icons/email-icon.svg';





export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <ul className={styles['footer__details']}>
        <li className={styles['footer__company-name']}>ИП Гринькова В.Н.</li>
        <li className={styles['footer__company-inn']}>ИНН 235205152449</li>
        <li className={styles['footer__company-email']}>finansy@buxnalog.ru</li>
        <li className={styles['footer__company-phone']}>+7918-18-18-664</li>
      </ul>
      <div className={styles['footer__social-links']}>
        <ul>
          <li className={styles['footer__link-tg']}>
            <a href="">
              <Image src={tgIcon} alt='наш телеграм' width={30}/>
            </a>
          </li>
          <li className={styles['footer__company-name']}>
            <a href="">
              <Image src={waIcon} alt='наш whatsapp' width={30}/>
            </a>
          </li>
          <li className={styles['footer__link-email']}>
            <a href="">
              <Image src={emailIcon} alt='напишите нам на почту' width={30}/>
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.footer__authority}>{new Date().getFullYear()}, mitka.dev</p>
    </footer>
  )
}
