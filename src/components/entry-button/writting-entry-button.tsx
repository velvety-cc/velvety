import Link from 'next/link';

export default function WritingEntryButton(props) {
    return (
        <div className='group flex cursor-pointer flex-col gap-y-1'>
            <Link
                href={props.link}
                className='w-fit -translate-x-[6px] px-[6px] py-1 text-base font-semibold text-slate-950 transition duration-200 group-hover:rounded-md group-hover:bg-neutral-100'
            >
                {props.title}
            </Link>
            <div className='text-base font-normal text-slate-950'>
                {truncateDescription(props.description)}
                <span className='text-neutral-400'>
                    {truncateDate(props.date)}
                </span>
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
