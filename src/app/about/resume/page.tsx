import Resume from '../../../components/pages/resume/resume';

import { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
    title: 'Resume',
};

export default function ResumePage() {
    return <Resume></Resume>;
}
