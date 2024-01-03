import Head from "next/head";

interface PropTypes {
    title: string,
    keywords: string,
    description: string
}

const Meta = ({ title, keywords, description } : PropTypes) => {
    return(
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="utf-8" />
            <meta name="author" content="andre kybora" />
            <meta name="robots" content="index, follow" />
            <meta name="revisit-after" content="3 days" />
            <meta name="language" content="english" />
            <meta name="rating" content="general" />
            <meta name="destribution" content="global" />
            <meta name="expires" content="never" />
        </Head>
    );
}

Meta.defaultProps = {
    title: "title",
    description: "description",
    keywords: "keywords"
};

export default Meta;
