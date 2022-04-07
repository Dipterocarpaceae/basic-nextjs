import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import Image from 'next/image';

// const Home: NextPage = () => {
//   return (
//     <h1>Welcome Diptero</h1>
//   )
// }

// Link => client side navigation

export default function Home() {
  return (
      <Layout pageTitle='Home Page'>
        <Image src="/profile.jpg" width={200} height={200} alt="profile" />
        <h1 className={styles['title-homepage']}>Welcome Diptero</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <Image src="/post1.png" width={200} height={200} alt="post image 1" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam!</p>
        <Image src="/post2.jpg" width={200} height={200} alt="post image 2" />
      </Layout>
  );
}
