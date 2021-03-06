import Head from 'next/head'

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

export default ({ titlePre = '' }) => {
  return (
    <Head>
      <title>{titlePre ? `${titlePre} |` : ''} Agumy Blog</title>
      <meta
        name="description"
        content="An example Next.js site using Notion for the blog"
      />
      <meta name="og:title" content="Agumy Blog" />
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:site" content="@yunika_jp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  )
}
