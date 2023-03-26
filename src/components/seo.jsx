import { Head } from "$fresh/runtime.ts";

function SEO({ description, lang = "en", meta = [], title }) {
  // TODO - get from gatsyby-config.js
  const site = {
    siteMetadata: {
      title: `David Sharp Codes`,
      description: `Your source for David Sharp-related facts and news`,
      author: `David Sharp`,
    },
  };

  const metaDescription = description || site.siteMetadata.description;

  const _meta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      {_meta.map(
        ({ name, content }) => <meta name={name} content={content}></meta>,
      )}
    </Head>
  );
}

export default SEO;
