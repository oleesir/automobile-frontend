import React from "react";
import Button from "../Button/index.jsx";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.auto}>
				Auto<span className={styles.motor}>mobile</span>
			</h1>
			<Button btnTypes="SellBtn" type="button">
				Sell
			</Button>
		</div>
	);
};

export default Header;
