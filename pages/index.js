import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Social Media Dashboard</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<div className={styles.topBar}>
					<div className={styles.titleButtonBar}>
						<div className={styles.titleDesc}>
							<div className={styles.title}>Social Media Dashboard</div>
							<div className={styles.description}>Total Followers: 23,004</div>
						</div>
						<div className={styles.themeSwitch}>Dark Mode</div>
					</div>
					{/* <div className={styles.tiles}>
						<div className={styles.fbTile}>Facebook</div>
						<div className={styles.twitTile}>Twitter</div>
						<div className={styles.instaTile}>Instagram</div>
						<div className={styles.ytTile}>YouTube</div>
					</div> */}
				</div>
				@nathanf 1987 Followers 12 Today @nathanf 1044 Followers 99 Today
				@realnathanf 11k Followers 1099 Today Nathan F. 8239 Subscribers 144 Today
				Overview - Today Page Views 87 3% Likes 52 2% Likes 5462 2257% Profile Views
				52k 1375% Retweets 117 303% Likes 507 553% Likes 107 19% Total Views 1407
				12%
			</main>
		</div>
	);
}
