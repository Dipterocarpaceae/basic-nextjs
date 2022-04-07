import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';


// const Home: NextPage = () => {
//   return (
//     <h1>Welcome Diptero</h1>
//   )
// }

// Link => client side navigation

export default function Home() {
  return (
    <>
    <Layout>
      <h1 className={styles['title-homepage']}>Welcome Diptero</h1>
    </Layout>
    </>
  );
}
