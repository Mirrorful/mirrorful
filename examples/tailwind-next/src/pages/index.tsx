import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mirrorful + Tailwind + Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-2xl font-bold text-acme-inc-purple-400">
          Hello world from a Nextjs app with Mirrorful and Tailwind. This uses
          the Acme Inc. Purple Color!
        </h1>
      </main>
    </>
  )
}
