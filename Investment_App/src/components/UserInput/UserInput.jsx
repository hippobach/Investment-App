import classNames from 'classnames/bind';
import styles from './UserInput.module.scss';

const cx = classNames.bind(styles);

const UserInput = () => {
    return (
        <form className={cx('form')}>
            <div className={cx('input-group')}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className={cx('input-group')}>
                <p>
                    <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                    <input type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" />
                </p>
            </div>
            <p className={cx('actions')}>
                <button type="reset" className={cx('buttonAlt')}>
                    Reset
                </button>
                <button type="submit" className={cx('button')}>
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default UserInput;
