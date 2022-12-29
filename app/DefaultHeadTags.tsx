function DefaultHeadTags() {
    return (
        <>
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />

            <meta name='description' content='A personal archive.' />
            <link href='/lightning.ico' rel='shortcut icon' />

            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://www.velvety.xyz/' />
            <meta property='og:title' content='Velvety' />
            <meta property='og:description' content='A personal archive.' />
            <meta
                property='og:image'
                content='https://velvety.xyz/meta_img.svg'
            />

            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content='https://www.velvety.xyz/' />
            <meta property='twitter:title' content='Velvety' />
            <meta
                property='twitter:description'
                content='A personal archive.'
            />
            <meta
                property='twitter:image'
                content='https://velvety.xyz/meta_img.svg'
            />
        </>
    );
}

export default DefaultHeadTags;
