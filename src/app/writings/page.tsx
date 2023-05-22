import Header from '../../components/header/header';
import { getYearArray } from '../../api/writtingsAPI';
import YearGroup from '../../components/group/year-group';
import { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
    title: 'Writings',
};

export default function WritingsTableOfContentsPage() {
    const yearArray = getYearArray();

    return (
        <div className='flex flex-col gap-y-16'>
            {/* Header */}
            <Header></Header>

            {/* Content container */}
            <div className='mt-16 flex flex-col gap-y-16 pb-16 sm:mt-0 sm:pb-32'>
                {yearArray.map((year) => (
                    <YearGroup key={year} year={year}></YearGroup>
                ))}
            </div>
        </div>
    );
}
