import Header from '../../components/header/header';
import { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
    title: 'Archive',
};

export default function Archive() {
    return (
        <div className='flex flex-col gap-y-16'>
            {/* Header */}
            <Header></Header>

            {/* Content container */}
            <div className='mt-16 flex flex-col gap-y-16 pb-16 sm:mt-0 sm:pb-32'>
                <div className='font-serif text-base font-normal text-slate-950'>
                    There is currently no archive.
                </div>
            </div>
        </div>
    );
}
