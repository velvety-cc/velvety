import Link from 'next/link';
import styles from './writting-entry-button.module.scss';

export default function WritingEntryButton(props) {
    return (
        <div className={styles.writingEntryButton}>
            <Link href={props.link} className={styles.title}>
                {props.title}
            </Link>
            <div className={styles.description}>
                {truncateDescription(props.description)}
                <span className={styles.date}>{truncateDate(props.date)}</span>
            </div>
        </div>
    );
}

export function truncateDescription(description) {
    if (description.length > 80) {
        return description.substring(0, 90) + '...';
    } else {
        return description;
    }
}

export function truncateDate(date) {
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const dateType = new Date(date);
    const month = monthNames[dateType.getMonth()];
    const day = (dateType.getDate() + 1).toString();
    const dateString = ' ' + month + ' ' + day;
    return dateString;
}
