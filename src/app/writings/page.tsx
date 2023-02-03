import { getYearArray } from '../../api/writtingsAPI';
import Header from '../../components/shared/header/header';
import YearGroup from '../../components/shared/group/year-group';
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
