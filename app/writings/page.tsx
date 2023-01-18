import { getYearArray } from '../../src/api/writtingsAPI';
import YearGroup from '../../components/group/YearGroup';
import styles from './writings.module.scss';

export default function Writings() {
    const yearArray = getYearArray();

    return (
        <div>
            <div className={styles.writings}>
                {yearArray.map((year) => (
                    <YearGroup key={year} year={year}></YearGroup>
                ))}
            </div>
        </div>
    );
}
