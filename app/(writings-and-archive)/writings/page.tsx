import { getYearArray } from '../../../src/api/writtingsAPI';
import Header from '../../../components/header/Header';
import YearGroup from '../../../components/group/YearGroup';
import styles from './writings.module.scss';

export default function Writings() {
    const yearArray = getYearArray();

    return (
        <div>
            <Header></Header>
            <div className={styles.writings}>
                {yearArray.map((year) => (
                    <YearGroup key={year} year={year}></YearGroup>
                ))}
            </div>
        </div>
    );
}
