import {
    getAllPosts,
    getPostData,
    formatDate,
} from '../../../api/writtingsAPI';
import { CustomMDX } from '../../../components/content/mdx-remote';
import Link from 'next/link';
import Image from 'next/image';
import BackArrow from '../../../../public/back-arrow.svg';

// Metadata
export async function generateMetadata({ params }) {
    const { slug } = params;
    const { frontMatter } = getPostData(slug);

    return {
        title: frontMatter.title,
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts;
}

export default function WritingEntry({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const { frontMatter, content } = getPostData(slug);

    return (
        <div className='mx-auto max-w-[630px] pb-32'>
            <div className='flex flex-col gap-y-16'>
                <div className='mb-20 font-serif text-base font-normal italic  text-slate-950'>
                    <Link
                        href='/writings'
                        className='text-base font-normal text-slate-950'
                    >
                        <span className='inline-block'>
                            <Image src={BackArrow} alt='Back arrow'></Image>
                        </span>{' '}
                        Writings
                    </Link>
                </div>

                <div className='flex flex-col gap-y-2'>
                    <div className='font-serif text-3xl font-normal text-slate-950'>
                        {frontMatter.title}
                    </div>
                    <div className='text-base font-normal text-neutral-400'>
                        {formatDate(frontMatter.date)}
                    </div>
                </div>

                {/* Article */}
                <div
                    className='
                    prose
                    prose-headings:font-serif
                    prose-headings:font-normal prose-p:text-slate-950 prose-a:font-normal prose-a:text-slate-950 prose-a:underline prose-a:decoration-neutral-400 prose-a:underline-offset-4 prose-a:duration-200 hover:prose-a:decoration-slate-950 
                    prose-code:font-normal prose-code:text-slate-950
                    prose-pre:bg-neutral-200 prose-pre:shadow-sm
                    prose-ol:text-slate-950 marker:prose-ol:text-neutral-600 prose-ul:text-slate-950 
                    marker:prose-ul:text-neutral-600 
                    prose-img:rounded-md prose-img:border-solid prose-img:border-slate-950 prose-img:p-1
                    prose-img:shadow-sm'
                >
                    <CustomMDX source={content} />
                </div>
            </div>
        </div>
    );
}
