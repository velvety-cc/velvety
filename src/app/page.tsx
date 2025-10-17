import Header from '../components/header/header';
import ExternalLinks from '../components/external-links/external-links';
import HomeBiography from '../components/home/home-biography';

export default function Page() {
    return (
        <div className='flex flex-col gap-y-16'>
            {/* Header */}
            <Header></Header>

            {/* Content container */}
            <div className='mt-16 flex flex-col gap-y-16 pb-16 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:pb-32 lg:gap-x-16'>
                {/* Biography */}
                <HomeBiography></HomeBiography>

                {/* External links */}
                <div className='sm:col-span-1 sm:col-start-3'>
                    <ExternalLinks></ExternalLinks>
                </div>
            </div>
        </div>
    );
}
