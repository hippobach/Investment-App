import logo from '../../assets/investment-calculator-logo.png';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('header')}>
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    );
};

export default Header;
