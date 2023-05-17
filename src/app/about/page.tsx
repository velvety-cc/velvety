import About from '../../components/pages/about/about';
import { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
    title: 'About',
};

export default function AboutPage() {
    return <About></About>;
}
