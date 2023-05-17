import styles from './external-links.module.scss';
import Link from 'next/link';

function renderLinkItem(href, name) {
    return (
        <Link
            href={href}
            target='_blank'
            className='text-base font-normal text-slate-950'
        >
            {'>'} {name}
        </Link>
    );
}

export default function ExternalLinks() {
    return (
        <div className='flex flex-col gap-y-8 sm:col-span-2 sm:col-start-1'>
            <div className='text-2xl font-medium text-slate-950'>
                External Links
            </div>
            <ul className='list-none'>
                <li>
                    {renderLinkItem(
                        'https://twitter.com/imliamzhang',
                        'Twitter'
                    )}
                </li>
                <li className='mt-1'>
                    {renderLinkItem('https://github.com/imliamzhang', 'GitHub')}
                </li>
                <li className='mt-1'>
                    {renderLinkItem(
                        'https://www.instagram.com/imliamzhang/',
                        'Instagram'
                    )}
                </li>
                <li className='mt-1'>
                    {renderLinkItem(
                        'https://www.linkedin.com/in/imliamzhang/',
                        'LinkedIn'
                    )}
                </li>
                <li className='mt-1'>
                    <Link
                        href='mailto: imliamzhang@gmail.com'
                        className='text-base font-normal text-slate-950'
                    >
                        {'>'} Email
                    </Link>
                </li>
            </ul>
        </div>
    );
}
