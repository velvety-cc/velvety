import styles from './year-group.module.scss';
import { getPostByYear } from '../../../api/writtingsAPI';
import WritingEntryButton from '../entry-button/writting-entry-button';

export default function YearGroup(props) {
    const posts = getPostByYear(props.year);

    return (
        <div className='flex flex-col'>
            {/* Divider */}
            <div className='mb-6 h-[2px] bg-slate-950'></div>

            {/* Year */}
            <div className='mb-10 text-2xl font-medium text-slate-950'>
                {props.year}
            </div>

            {/* Posts */}
            <div className='flex flex-col gap-y-10 sm:grid sm:grid-cols-2 sm:gap-x-16 md:grid-cols-3'>
                {posts.map((post) => (
                    <div key={post.frontMatter.slug} className='cursor-pointer'>
                        <WritingEntryButton
                            key={post.frontMatter.slug}
                            link={`/writings/${post.frontMatter.slug}`}
                            title={post.frontMatter.title}
                            date={post.frontMatter.date}
                            description={post.frontMatter.description}
                        ></WritingEntryButton>
                    </div>
                ))}
            </div>
        </div>
    );
}
