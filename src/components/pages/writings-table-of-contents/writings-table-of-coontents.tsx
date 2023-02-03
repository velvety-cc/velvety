import HeaderOnly from '../../shared/layout/header-only/header-only';
import { getYearArray } from '../../../api/writtingsAPI';
import YearGroup from '../../shared/group/year-group';
import styles from './writings-table-of-contents.module.scss';

export default function WritingsTableOfContents() {
    const yearArray = getYearArray();

    return (
        <HeaderOnly>
            <div className={styles.writings}>
                {yearArray.map((year) => (
                    <YearGroup key={year} year={year}></YearGroup>
                ))}
            </div>
        </HeaderOnly>
    );
}
