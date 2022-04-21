import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

const Cards = ({ adverts, openModal }) => {
	return (
		<>
			{adverts.length === 0 && (
				<div className={styles.wrapper}>
					<h1>CLICK ON THE BUTTON TO START SELLING</h1>
				</div>
			)}
			{adverts.length > 0 && (
				<>
					{adverts.map((advert) => (
						<Card
							cardId={advert?._id}
							photo={advert?.photo}
							brand={advert?.brand}
							description={advert?.description}
							price={advert?.price}
							openModal={() => {
								openModal(advert);
							}}
							key={advert?._id}
						/>
					))}
				</>
			)}
		</>
	);
};

export default Cards;
