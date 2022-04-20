import React from "react";
import Card from "../../components/Cards/Card";
import Header from "../../components/Header";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<Header />
			</div>
			<div className={styles.bodyWrapper}>
				<Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
			</div>
		</div>
	);
};
export default LandingPage;
