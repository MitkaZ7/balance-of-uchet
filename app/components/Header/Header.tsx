// components/Header/Header.tsx
import styles from './Header.module.scss';
import Link from 'next/link'

export const Header = () => (
  <header className={styles.header}>
    <h2 className={styles.header__company}>ИП Гринькова В.Н</h2>
    <nav className={styles.header__nav}>
        <ul className={`${styles['header_nav-list']}`}>
            <li className={styles['header__nav-phone']}>
                <Link href="tel:+7918-18-18-664">+7(918)181-186-64</Link>
            </li>
            <li className={styles['header__nav-email']}>
                <Link href="mailto:finansy@buxnalog.ru">finansy@buxnalog.ru</Link>
            </li>
        </ul>
    </nav>
  </header>
);
