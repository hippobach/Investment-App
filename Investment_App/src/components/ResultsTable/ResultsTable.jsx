import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ResultsTable.module.scss';

const cx = classNames.bind(styles);

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const ResultsTable = (props) => {
    return (
        <table className={cx('result')}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((yearData) => (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                        <td>{formatter.format(yearData.yearlyInterest)}</td>
                        <td>
                            {formatter.format(
                                yearData.savingsEndOfYear -
                                    props.initialInvestment -
                                    yearData.yearlyContribution * yearData.year,
                            )}
                        </td>
                        <td>
                            {formatter.format(props.initialInvestment + yearData.yearlyContribution * yearData.year)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

ResultsTable.propTypes = {
    data: PropTypes.array.isRequired,
    initialInvestment: PropTypes.number.isRequired,
};

export default ResultsTable;
