import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../Button/index.jsx";
import styles from "./Header.module.css";

const Header = () => {
	const navigate = useNavigate();
	let location = useLocation();
	const navigateToAdvert = () => {
		navigate("/new_advert");
	};

	const navigateBack = () => {
		navigate(-1);
	};
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.auto}>
				Auto<span className={styles.motor}>mobile</span>
			</h1>
			{location.pathname === "/" && (
				<Button btnTypes="SellBtn" type="button" onClick={navigateToAdvert}>
					Sell
				</Button>
			)}

			{location.pathname === "/new_advert" && (
				<Button btnTypes="SellBtn" type="button" onClick={navigateBack}>
					Back
				</Button>
			)}

			{location.pathname === "/view_advert" && (
				<Button btnTypes="SellBtn" type="button" onClick={navigateBack}>
					Back
				</Button>
			)}
		</div>
	);
};

export default Header;
