import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/index.jsx";
import styles from "./Card.module.css";

const Card = ({ photo, brand, description, price, openModal, cardId }) => {
	const navigate = useNavigate();

	const navigateToAdvert = () => {
		navigate(`/view_advert/${cardId}`, { state: cardId });
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperContent}>
				<div>
					<img src={photo} alt="img" className={styles.pic} />
				</div>
				<div className={styles.body}>
					<div className={styles.priceContent}>
						<p className={styles.price}>{price}</p>
					</div>
					<div className={styles.nameContent}>
						<h4 className={styles.name}>{brand}</h4>
					</div>
					<div className={styles.descriptionContent}>
						<p className={styles.description}>
							{description.length > 69 ? description.slice(0, 69) : description}
							{description.length >= 39 && "..."}
						</p>
					</div>

					<div className={styles.footer}>
						<Button btnTypes="ViewBtn" type="button" onClick={navigateToAdvert}>
							View
						</Button>
						<Button btnTypes="DeleteBtn" type="button" onClick={openModal}>
							Delete
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
