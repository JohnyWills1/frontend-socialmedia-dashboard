import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function Home() {
	const [theme, setTheme] = useState(false);

	const changeTheme = () => {
		setTheme(!theme);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Social Media Dashboard</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={theme ? styles.mainD : styles.mainL}>
				<div className={theme ? styles.topBarD : styles.topBarL}>
					<div className={styles.titleButtonBar}>
						<div className={styles.titleDesc}>
							<div className={styles.title}>Social Media Dashboard</div>
							<div className={styles.description}>Total Followers: 23,004</div>
						</div>
						<div>
							<ThemeSwitcher setTheme={changeTheme} theme={theme} />
						</div>
					</div>
					<div className={styles.tiles}>
						<div className={theme ? styles.tileD : styles.tileL}>
							<div className={styles.fbColorBar} />
							Facebook
						</div>
						<div className={theme ? styles.tileD : styles.tileL}>
							<div className={styles.twitColorBar} />
							Twitter
						</div>
						<div className={theme ? styles.tileD : styles.tileL}>
							<div className={styles.instaColorBar} />
							Instagram
						</div>
						<div className={theme ? styles.ytTileD : styles.ytTileL}>
							<div className={styles.ytColorBar} />
							YouTube
						</div>
					</div>
				</div>
				{/* @nathanf 1987 Followers 12 Today @nathanf 1044 Followers 99 Today
				@realnathanf 11k Followers 1099 Today Nathan F. 8239 Subscribers 144 Today
				Overview - Today Page Views 87 3% Likes 52 2% Likes 5462 2257% Profile Views
				52k 1375% Retweets 117 303% Likes 507 553% Likes 107 19% Total Views 1407
				12% */}
			</main>
		</div>
	);
}
