export default function Head({ color }) {
  return (
    <>
      <title>TODO App</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content={color} />
      <meta name="description" content="TODO APP built with next js 13, frontend mentor page challenge" />
      <meta property="og:title" content="TODO APP Frontend Mentor" />
      <meta property="og:description" content="TODO APP built with next js 13, frontend mentor page challenge" />
    </>
  )
}
