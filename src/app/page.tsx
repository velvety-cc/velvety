import Link from 'next/link';
import Header from '../components/shared/header/header';
import ExternalLinks from '../components/shared/external-links/external-links';

export default function Page() {
    return (
        <div className='flex flex-col gap-y-16'>
            {/* Header */}
            <Header></Header>

            {/* Content container */}
            <div className='flex flex-col gap-y-16 pb-16 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:pb-32 lg:gap-x-16'>
                {/* Biography */}
                <div className='flex flex-col gap-y-8 sm:col-span-2 sm:col-start-1'>
                    <div className='text-2xl font-medium text-slate-950'>
                        Biography
                    </div>
                    <div>
                        <p className='mb-0 mt-0 text-base font-normal text-slate-950'>
                            Liam Zhang is the Co-Founder and Chief Product
                            Officer of{' '}
                            <Link
                                href='http://blockless.network'
                                target='_blank'
                                className='text-base font-normal text-slate-950 underline decoration-neutral-400 underline-offset-4 duration-200 hover:decoration-slate-950'
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
                                className='text-base font-normal text-slate-950 underline decoration-neutral-400 underline-offset-4 duration-200 hover:decoration-slate-950'
                            >
                                NGC Ventures
                            </Link>
                            , a crypto venture capital firm, where he focused on
                            DeFi and infrastructure investing.
                        </p>
                        <p className='mb-0 mt-6 text-base font-normal text-slate-950'>
                            Liam operates in multiple disciplines, including
                            product design, engineering, finance, and business
                            management.
                        </p>
                    </div>
                </div>

                {/* External links */}
                <div className='sm:col-span-1 sm:col-start-3'>
                    <ExternalLinks></ExternalLinks>
                </div>
            </div>
        </div>
    );
}
