import React from "react";
import styles from "./SingleAdvert.module.css";

const SingleAdvert = () => {
	return (
		<div className={styles.bodyWrapper}>
			<div className={styles.content}>
				<img src="/mustang_two.jpeg" alt="img" className={styles.pic} />

				<div className={styles.headerContent}>
					<h1 className={styles.brand}>Mustang Diablo</h1>
					<h2>N50,000,000</h2>
				</div>

				<div className={styles.bodyContent}>
					<h3 className={styles.model}>Model:2014</h3>
					<h3 className={styles.name}>Seller:Okechukwu Ajibola Dantata</h3>
					<h3 className={styles.phoneNumber}>Phone number: 09084765743</h3>

					<p className={styles.description}>
						It is a long established fact that a reader will be distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
						It is a long established fact that a reader will be distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleAdvert;
