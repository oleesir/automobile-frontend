import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../Button/index.jsx";
import styles from "./Card.module.css";

const Card = () => {
	const navigate = useNavigate();

	const navigateToAdvert = () => {
		navigate("/view_advert");
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperContent}>
				<div>
					<img src="/mustang_two.jpeg" alt="img" className={styles.pic} />
				</div>
				<div className={styles.body}>
					<div className={styles.priceContent}>
						<p className={styles.price}>N25,000,000</p>
					</div>
					<div className={styles.nameContent}>
						<h4 className={styles.name}>Mustang</h4> <span className={styles.status}>New</span>
					</div>
					<div className={styles.descriptionContent}>
						<p className={styles.description}>
							It is a long established fact that a reader will be distracted by the readable content of a page when
							looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
						</p>
					</div>

					<div className={styles.footer}>
						<Button btnTypes="ViewBtn" type="button" onClick={navigateToAdvert}>
							View
						</Button>
						<Button btnTypes="DeleteBtn" type="button">
							Delete
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
