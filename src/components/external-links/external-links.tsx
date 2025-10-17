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
                        'https://x.com/velvety_cc',
                        'X'
                    )}
                </li>
                <li className='mt-1'>
                    <Link
                        href='mailto: liam@velvety.cc'
                        className='text-base font-normal text-slate-950'
                    >
                        {'>'} Email
                    </Link>
                </li>
            </ul>
        </div>
    );
}
