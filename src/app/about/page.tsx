import Link from 'next/link';
import Header from '../../components/header/header';
import ExternalLinks from '../../components/external-links/external-links';
import { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
    title: 'About',
};

export default function AboutPage() {
    return (
        <div className='flex flex-col gap-y-16'>
            {/* Header */}
            <Header></Header>

            {/* Content container */}
            <div className='mt-16 flex flex-col gap-y-16 pb-16 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:pb-32 lg:gap-x-16'>
                {/* Content - left */}
                <div className='flex flex-col gap-y-16 sm:col-span-2 sm:col-start-1'>
                    {/* About */}
                    <div className='mt-1 flex flex-col gap-y-5'>
                        <p className='font-serif text-lg font-medium italic text-slate-950'>
                            Velvety is a personal archive.
                        </p>

                    </div>

                    {/* About Liam */}
                    <div className='flex flex-col gap-y-8 '>
                        <div className='text-2xl font-medium text-slate-950'>
                            About Liam
                        </div>
                        <div>
                            <p className='mb-0 mt-0 text-base font-normal text-slate-950'>
                                I am the Co-Founder and Chief
                                Product Officer at{' '}
                                <Link
                                    href='http://blockless.network'
                                    target='_blank'
                                    className='text-base font-normal text-slate-950 underline decoration-neutral-400 underline-offset-4 duration-200 hover:decoration-slate-950'
                                >
                                    Bless Network
                                </Link>
                                , a decentralized compute platform.
                            </p>
                            <p className='mb-0 mt-6 text-base font-normal text-slate-950'>
                                Before this, I spent time in financial research, investment banking, and venture/private equity investing. Check out my{' '}
                                <Link
                                    href='/about/resume'
                                    className='text-base font-normal text-slate-950 underline decoration-neutral-400 underline-offset-4 duration-200 hover:decoration-slate-950'
                                >
                                    resume
                                </Link>{' '}
                                to learn more.
                            </p>

                            <p className='mb-0 mt-6 text-base font-normal text-slate-950'>
                                In my spare time, I enjoy product design, building software, crafting furniture, and working on cars, among other things.
                            </p>
                        </div>
                    </div>


                </div>

                {/* External links */}
                <div className='row-start-1 sm:col-span-1 sm:col-start-3'>
                    <ExternalLinks></ExternalLinks>
                </div>
            </div>
        </div>
    );
}
