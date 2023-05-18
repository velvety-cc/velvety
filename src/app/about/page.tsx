import Link from 'next/link';
import Header from '../../components/shared/header/header';
import ExternalLinks from '../../components/shared/external-links/external-links';
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
            <div className='flex flex-col gap-y-16 pb-16 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:pb-32 lg:gap-x-16'>
                {/* Content - left */}
                <div className='flex flex-col gap-y-16 sm:col-span-2 sm:col-start-1'>
                    {/* About */}
                    <div className='mt-1 flex flex-col gap-y-5'>
                        <p className='font-serif text-lg font-medium italic text-slate-950'>
                            Velvety is a personal archive, designed and built by
                            Liam Zhang.
                        </p>
                        <p className='font-serif text-lg font-medium italic text-slate-950'>
                            It’s an ongoing experiment of different ideas. A
                            wardrobe of designs, writings, and projects. A
                            living collection of memories, thoughts, and
                            conscience.
                        </p>
                    </div>

                    {/* About Liam */}
                    <div className='flex flex-col gap-y-8 '>
                        <div className='text-2xl font-medium text-slate-950'>
                            About Liam
                        </div>
                        <div>
                            <p className='mb-0 mt-0 text-base font-normal text-slate-950'>
                                On a daily basis, I am the Co-Founder and Chief
                                Product Officer at{' '}
                                <Link
                                    href='http://blockless.network'
                                    target='_blank'
                                    className='text-base font-normal text-slate-950 underline decoration-neutral-400 underline-offset-4 duration-200 hover:decoration-slate-950'
                                >
                                    Blockless
                                </Link>
                                , a decentralized compute platform helping users
                                to build and ship the next generation of
                                applications.
                            </p>
                            <p className='mb-0 mt-6 text-base font-normal text-slate-950'>
                                Previously, my work spanned financial research,
                                investment banking, and primary market
                                investing. Take a look at my{' '}
                                <Link
                                    href='/about/resume'
                                    className='text-base font-normal text-slate-950 underline decoration-neutral-400 underline-offset-4 duration-200 hover:decoration-slate-950'
                                >
                                    resume
                                </Link>{' '}
                                if you are interested.
                            </p>
                            <p className='mb-0 mt-6 text-base font-normal text-slate-950'>
                                Heavily concentrated in finance early in my
                                career, I like to consider myself now as someone
                                who creates.
                            </p>
                            <p className='mb-0 mt-6 text-base font-normal text-slate-950'>
                                In my spare time, I enjoy product design,
                                software engineering, automobile engineering
                                (slowly getting started), longevity
                                (experimenting), interior/furniture design
                                (Pierre Jeanneret in particular), and many more.
                            </p>
                        </div>
                    </div>

                    {/* About this website */}
                    <div className='flex flex-col gap-y-8 '>
                        <div className='text-2xl font-medium text-slate-950'>
                            About This Website
                        </div>
                        <p className='mb-0 mt-0 text-base font-normal text-slate-950'>
                            This website is designed using Figma and Framer,
                            built with Next.js and Tailwind CSS, and is hosted
                            on Vercel.
                        </p>
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
