import Link from 'next/link';
import Image from 'next/image';
import BackArrow from '../../../../public/back-arrow.svg';
import Header from '../../../components/header/header';
import ExternalLinks from '../../../components/external-links/external-links';
import { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
    title: 'Resume',
};

export default function ResumePage() {
    function renderEducationItem(school: String, year: String, degree: String) {
        return (
            <div>
                <div className='mb-2 flex flex-col gap-y-1  sm:flex-row sm:items-start sm:justify-between'>
                    <span className='inline-block text-base font-semibold text-slate-950'>
                        {school}
                    </span>
                    <span className='inline-block shrink-0 text-base font-normal text-slate-950 sm:ml-8 md:ml-16'>
                        {year}
                    </span>
                </div>
                <p className='font-serif text-base font-normal italic text-slate-950'>
                    {degree}
                </p>
            </div>
        );
    }

    function renderExperienceItem(
        role: String,
        firm: String,
        link: boolean,
        url: Object,
        year: String,
        description: String
    ) {
        return (
            <div>
                <div className='mb-2 flex flex-col gap-y-1 sm:flex-row sm:items-start sm:justify-between'>
                    <span className='inline-block text-base font-semibold text-slate-950'>
                        {role} /{' '}
                        {link ? (
                            <Link
                                href={url}
                                target='_blank'
                                className='text-base font-semibold text-slate-950 underline decoration-neutral-400 underline-offset-4 duration-200 hover:decoration-slate-950'
                            >
                                {firm}
                            </Link>
                        ) : (
                            firm
                        )}
                    </span>
                    <span className='inline-block shrink-0 text-base font-normal text-slate-950 sm:ml-8 md:ml-16'>
                        {year}
                    </span>
                </div>

                <div className='text-base font-normal text-slate-950'>
                    {description}
                </div>
            </div>
        );
    }

    return (
        <div className='flex flex-col gap-y-16'>
            {/* Header */}
            <Header></Header>

            {/* Content container */}
            <div className='mt-16 flex flex-col gap-y-16 pb-16 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:pb-32 lg:gap-x-16'>
                {/* Content - left */}
                <div className='flex flex-col gap-y-8 sm:col-span-2 sm:col-start-1'>
                    {/* Resume title */}
                    <div className='flex flex-row items-end justify-between'>
                        <div className='text-2xl font-medium text-slate-950'>
                            Resume
                        </div>
                        <Link
                            href='/about'
                            className='text-base font-normal text-slate-950'
                        >
                            <span className='inline-block'>
                                <Image src={BackArrow} alt='Back arrow'></Image>
                            </span>{' '}
                            Back to about
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className='h-[2px] bg-slate-950'></div>

                    {/* Education */}
                    <div className='flex flex-col gap-y-6'>
                        {/* Title */}
                        <div className='text-2xl font-medium text-slate-950'>
                            Education
                        </div>

                        {renderEducationItem(
                            'Carnegie Mellon University, College of Engineering',
                            '2023 - 2025',
                            'M.Eng. in Electricial and Computer Engineering'
                        )}

                        {renderEducationItem(
                            'New York University, Gallatin School of Individualized Study',
                            '2018 - 2022',
                            'B.A. in Finance, Computer Science, and Mathematics'
                        )}
                    </div>

                    {/* Divider */}
                    <div className='h-[2px] bg-slate-950'></div>

                    {/* Professional experience */}
                    <div className='flex flex-col gap-y-6'>
                        <div className='text-2xl font-medium text-slate-950'>
                            Professional Experience
                        </div>

                        {renderExperienceItem(
                            'Co-Founder and Chief Product Officer',
                            'Blockless',
                            true,
                            'https://blockless.network',
                            '2021 - Present',
                            'Directed the ideation, design, and implementation of Blockless, a decentralized compute platform.'
                        )}

                        {renderExperienceItem(
                            'Investor and Researcher',
                            'NGC Ventures',
                            true,
                            'https://ngc.fund',
                            '2020 - 2021',
                            'Conducted research and investment on decentralized finance and infrastructure projects.'
                        )}

                        {renderExperienceItem(
                            'Researcher',
                            'Guosheng Group Blockchain Institute',
                            false,
                            '',
                            '2020 - 2021',
                            'Conducted research on various Web3 protocols.'
                        )}

                        {renderExperienceItem(
                            'Researcher',
                            'New York University',
                            true,
                            'https://nyu.edu',
                            '2020 - 2021',
                            'Conducted research on topics including the dynamics of the DeFi protocols and the efficiency of the Chinese options market.'
                        )}

                        {renderExperienceItem(
                            'Investment Analyst',
                            'Befor Capital',
                            true,
                            'http://www.beforcapital.com/',
                            '2019',
                            'Researched target companies and managed the venture capital investment process.'
                        )}

                        {renderExperienceItem(
                            'Investment Analyst',
                            'Gaoyun Ventures',
                            false,
                            '',
                            '2018',
                            'Private equity investment.'
                        )}

                        {renderExperienceItem(
                            'Investment Banking Analyst',
                            'GF Securities',
                            true,
                            'https://en.gf.com.cn/',
                            '2017',
                            'Performed financial analysis and modeling for pre-IPO clients.'
                        )}
                    </div>

                    {/* Divider */}
                    <div className='h-[2px] bg-slate-950'></div>

                    {/* Publications */}
                    <div className='flex flex-col gap-y-6'>
                        <div className='text-2xl font-medium text-slate-950'>
                            Publications
                        </div>

                        <div className='flex flex-row gap-x-2 font-serif'>
                            <div className='inline-block items-start text-xs font-light text-slate-950'>
                                1
                            </div>
                            <div className='text-base font-normal text-slate-950'>
                                Chi, Y., Hao, W., & Zhang, Y. (2022). Volatility
                                model applications in China’s SSE50 options
                                market. <em>Journal of Futures Markets</em>, 42,
                                1704– 1720.{' '}
                                <Link
                                    href='https://doi.org/10.1002/fut.22294'
                                    target='_blank'
                                    className='italic'
                                >
                                    https://doi.org/10.1002/fut.22294
                                </Link>
                            </div>
                        </div>

                        <div className='flex flex-row gap-x-2 font-serif'>
                            <div className='inline-block items-start text-xs font-light text-slate-950'>
                                2
                            </div>
                            <div className='text-base font-normal text-slate-950'>
                                Zhang, Y., Junque de Fortuny, E. (2022). State
                                of the DeFi Landscape: Charting the Global DeFi
                                Ecosystem. <em>Service Science</em>, Under
                                Review
                            </div>
                        </div>
                    </div>
                </div>

                {/* External links */}
                <div className='hidden sm:col-span-1 sm:col-start-3 sm:row-start-1 sm:block'>
                    <ExternalLinks></ExternalLinks>
                </div>
            </div>
        </div>
    );
}
