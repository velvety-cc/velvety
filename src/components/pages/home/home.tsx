import styles from './home.module.scss';
import Link from 'next/link';
import Header from '../../shared/header/header';
import ExternalLinks from '../../shared/external-links/external-links';
import GridWithExternalLinks from '../../shared/layout/grid-with-external-links/grid-with-external-links';

export default function Home() {
    return (
        <div className='flex flex-col gap-y-16'>
            <Header></Header>

            <div className='flex flex-col gap-y-16 pb-16 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:pb-32 lg:gap-x-16'>
                <div className='flex flex-col gap-y-8 sm:col-span-2 sm:col-start-1'>
                    <div className='text-2xl font-medium text-slate-950'>
                        Biography
                    </div>
                    <div>
                        <p className='mb-0 mt-0 text-base font-normal text-slate-950'>
                            Liam Zhang is the Chief Product Officer of{' '}
                            <Link
                                href='http://blockless.network'
                                target='_blank'
                                className='text-base font-normal text-slate-950 underline decoration-neutral-400 underline-offset-4 hover:decoration-slate-950'
                            >
                                Blockless
                            </Link>
                            , a decentralized compute platform helping users to
                            build and ship the next generation of applications.
                        </p>
                        <p className='mb-0 mt-6 text-base font-normal text-slate-950'>
                            Previously, Liam worked at{' '}
                            <Link
                                href='https://ngc.fund/home'
                                target='_blank'
                                className='text-base font-normal text-slate-950 underline decoration-neutral-400 underline-offset-4 hover:decoration-slate-950'
                            >
                                NGC Ventures
                            </Link>
                            , a crypto venture capital firm, where he focused on
                            DeFi and Infrastructure investing.
                        </p>
                        <p className='mb-0 mt-6 text-base font-normal text-slate-950'>
                            Liam operates in multiple disciplines, including
                            design, engineering, finance, and product
                            management.
                        </p>
                    </div>
                </div>
                <div className='sm:col-span-1 sm:col-start-3'>
                    <ExternalLinks></ExternalLinks>
                </div>
            </div>
        </div>
    );
}
