import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './UserInput.module.scss';

const cx = classNames.bind(styles);

const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,
};

const UserInput = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const submitHandler = (event) => {
        event.preventDefault();

        props.onCalculate(userInput);
    };

    const resetHandler = () => {
        setUserInput(initialUserInput);
    };

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: value,
            };
        });
    };

    return (
        <form onSubmit={submitHandler} className={cx('form')}>
            <div className={cx('input-group')}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        onChange={(e) => inputChangeHandler('current-savings', e.target.value)}
                        type="number"
                        id="current-savings"
                        value={userInput['current-savings']}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        onChange={(e) => inputChangeHandler('yearly-contribution', e.target.value)}
                        type="number"
                        id="yearly-contribution"
                        value={userInput['yearly-contribution']}
                    />
                </p>
            </div>
            <div className={cx('input-group')}>
                <p>
                    <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                    <input
                        onChange={(e) => inputChangeHandler('expected-return', e.target.value)}
                        type="number"
                        id="expected-return"
                        value={userInput['expected-return']}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        onChange={(e) => inputChangeHandler('duration', e.target.value)}
                        type="number"
                        id="duration"
                        value={userInput['duration']}
                    />
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

// Define propTypes must be in the end of functional component
UserInput.propTypes = {
    onCalculate: PropTypes.func.isRequired,
};

export default UserInput;
