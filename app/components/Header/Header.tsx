// components/Header/Header.tsx
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <h2>ИП Гринькова В.Н</h2>
    <nav className={styles.header_nav}>
        <ul className={`${styles['header_nav-list']}`}>
            <li className={styles['header_nav-list nav-item']}>
                <a href="#">
                    +7918-18-18-664
                </a>
            </li>
            <li className={styles['header_nav-list nav-item']}>
                <a href="#">
                    finansy@buxnalog.ru
                </a>
            </li>
        </ul>
    </nav>
  </header>
);
