import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

const components = {
    h1: (props) => (
        <h1 {...props} className='large-text'>
            {props.children}
        </h1>
    ),
    YouTube: ({ id }) => (
        <div>
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                allow='autoplay; encrypted-media'
                title='Embedded YouTube video'
            />
        </div>
    ),
    Image: (props) => <Image {...props}>{props.children}</Image>,
};

export function CustomMDX(props) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    );
}
