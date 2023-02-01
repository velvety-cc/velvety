import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { sync } from 'glob';

const writtingsFolderPath = path.join(process.cwd(), 'writings');

interface post {
    frontMatter: postFrontMatter;
    content: string;
}

interface postFrontMatter {
    title: string;
    slug: string;
    tags: string[];
    date: string;
    description: string;
}

export function getSlugsFromFolder(): string[] {
    const postPaths = sync(`${writtingsFolderPath}/*.mdx`);

    return postPaths.map((path) => {
        const pathSegments = path.split('/');
        const fileName = pathSegments[pathSegments.length - 1];
        const [slug, _extension] = fileName.split('.');
        return slug;
    });
}

export function getPostData(slug) {
    const postPath = path.join(writtingsFolderPath, `${slug}.mdx`);
    const source = fs.readFileSync(postPath);
    const { content, data } = matter(source);

    return {
        frontMatter: {
            title: data.title ?? slug,
            slug,
            tags: (data.tags ?? []).sort(),
            date: (data.date ?? new Date()).toString(),
            description: data.description ?? '',
        },
        content,
    };
}

export function getAllPosts() {
    const slugs = getSlugsFromFolder().map((slug) => getPostData(slug));

    return slugs;
}

export function sortPostByDate(postArray) {
    // decending order, newest post at the top
    return postArray.sort((a, b) => {
        if (new Date(a.frontMatter.date) > new Date(b.frontMatter.date))
            return -1;
        if (new Date(a.frontMatter.date) < new Date(b.frontMatter.date))
            return 1;
        return 0;
    });
}

export function getPostByYear(year) {
    const posts = getAllPosts();
    const postsSorted = sortPostByDate(posts);

    const yearPost = postsSorted.filter((post) => {
        const postYear = new Date(post.frontMatter.date).getFullYear();
        return postYear === year;
    });

    return yearPost;
}

export function getYearArray() {
    // get post front matter
    const posts = getAllPosts();
    const postFrontMatter = posts.map((post) => post.frontMatter);

    // extract year
    const yearArrayWithDeplicates = postFrontMatter.map((post) =>
        new Date(post.date).getFullYear()
    );

    // delete duplicates
    const yearArraySet = new Set(yearArrayWithDeplicates);
    const uniqueYearArray = Array.from(yearArraySet);

    return uniqueYearArray;
}
