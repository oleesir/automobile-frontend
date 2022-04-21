import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

const Cards = ({ cars, openModal }) => {
	return (
		<>
			{cars.length === 0 && (
				<div className={styles.wrapper}>
					<h1>CLICK ON THE BUTTON TO START SELLING</h1>
				</div>
			)}
			{cars.length > 0 && (
				<>
					{cars.map((car) => (
						<Card
							photo={car?.photo}
							brand={car?.brand}
							description={car?.description}
							price={car?.price}
							openModal={() => {
								openModal(car);
							}}
							key={car?._id}
						/>
					))}
				</>
			)}
		</>
	);
};

export default Cards;
