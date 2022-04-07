import  {useRouter} from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css";

interface UsersProps {
    dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
    const {dataUsers} = props;
    const router = useRouter();

    console.log(dataUsers);
    return (
        <Layout pageTitle="Users Page">
            {dataUsers.map(user => {
                return(
                    <>
                    <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
                        <p>Name: {user.name}</p>
                        <p>Email:{user.email}</p>
                    </div>
                    </>
                )
            })}
        </Layout>
    )
}

//getStaticProps cocok untuk data yang tidak terlalu sering/dinamis berubah
//seluruh halaman sudah disiapkan sebelum dipanggil oleh user pada browser
export async function getStaticProps() {
    //halaman ini sudah dibundle terlebih dahulu sebelum page-nya muncul
    const res  = await fetch('http://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return {
        props: {
            // Anything returned here can be accessed by the client
            dataUsers: dataUsers,
        }
    }
}