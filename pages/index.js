import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Avec plus de 10 ans d'expérience dans l’industrie de la télévision numérique, j’ai perfectionné mes compétences en développement web, en intégration de systèmes et en conception de tests techniques avancés</p>
<p>J’ai également travaillé dans des environnements organisés en méthodologie agile, notamment chez Cisco.</p>
<p>Portée par une forte sensibilité UX, j’ai enrichi mon expertise avec une certification en UX/UI design. Cette étape m’a permis de rejoindre un département communication où je conçois aujourd’hui des expériences numériques accessibles, performantes et centrées sur l’utilisateur.</p>
       
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
