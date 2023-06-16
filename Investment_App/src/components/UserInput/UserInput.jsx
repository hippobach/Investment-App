import classNames from 'classnames/bind';
import styles from './UserInput.module.scss';

const cx = classNames.bind(styles);

const UserInput = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        console.log('Submit');
    };

    const resetHandler = () => {
        console.log('Reset');
    };

    const inputChangeHandler = (input, value) => {
        console.log(input, value);
    };

    return (
        <form onSubmit={submitHandler} className={cx('form')}>
            <div className={cx('input-group')}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        onChange={(e) => inputChangeHandler('', e.target.value)}
                        type="number"
                        id="current-savings"
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        onChange={(e) => inputChangeHandler('', e.target.value)}
                        type="number"
                        id="yearly-contribution"
                    />
                </p>
            </div>
            <div className={cx('input-group')}>
                <p>
                    <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                    <input
                        onChange={(e) => inputChangeHandler('', e.target.value)}
                        type="number"
                        id="expected-return"
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(e) => inputChangeHandler('', e.target.value)} type="number" id="duration" />
                </p>
            </div>
            <p className={cx('actions')}>
                <button onClick={resetHandler} type="reset" className={cx('buttonAlt')}>
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
