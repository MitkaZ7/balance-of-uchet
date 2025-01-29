import styles from './Footer.module.scss'
import Image from 'next/image'
import tgIcon from '../../../public/icons/tg.svg';
import waIcon from '../../../public/icons/whatsapp-icon.svg';
import emailIcon from '../../../public/icons/email-icon.svg';
import Link from 'next/link'




export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <ul className={styles['footer__details']}>
        <li className={styles['footer__company-name']}>ИП Гринькова В.Н.</li>
        <li className={styles['footer__company-inn']}>ИНН 235205152449</li>
        <li className={styles['footer__company-email']}>
        <Link href="mailto:finansy@buxnalog.ru" scroll={false}>
          finansy@buxnalog.ru
        </Link>
        </li>
        <li className={styles['footer__company-phone']}>
          <Link href="tel:+791818118664" scroll={false}>
            +7-918-181-186-64
          </Link>
        </li>
        <li>
          <Link href="/policy" scroll={false} target='_blank' className={styles['footer__policy-rules']}>
           политика конфиденциальности →
          </Link>
         

        </li>
      </ul>
      <div className={styles['footer__social-links']}>
        <ul>
          <li className={styles['footer__link-tg']}>
          <Link href="https://t.me/Viktoriya_pronalogi_buhgalter" scroll={false}>
              <Image src={tgIcon} alt='наш телеграм' width={30}/>
          </Link>
          </li>
          <li className={styles['footer__company-name']}>
          <Link href="https://wa.me/79181818664" scroll={false}>
              <Image src={waIcon} alt='наш whatsapp' width={30}/>
              </Link>
          </li>
          <li className={styles['footer__link-email']}>
            <Link href="mailto:finansy@buxnalog.ru" scroll={false}>
              <Image src={emailIcon} alt='напишите нам на почту' width={30}/>
            </Link>
          </li>
        </ul>

      </div>
      <p className={styles.footer__authority}>{new Date().getFullYear()}, сайт сделал mitka.dev</p>

    </footer>
  )
}
