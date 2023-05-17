import WritingsTableOfContents from '../../components/pages/writings-table-of-contents/writings-table-of-coontents';
import { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
    title: 'Writings',
};

export default function WritingsTableOfContentsPage() {
    return <WritingsTableOfContents></WritingsTableOfContents>;
}
