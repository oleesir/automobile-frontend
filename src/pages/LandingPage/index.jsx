import React, { useState, useEffect } from "react";
import axios from "axios";
import GenericModal from "../../components/Modal/GenericModal";
import DeleteCardModal from "../../components/Modal/DeleteModal";
import Loader from "../../components/Loader";
import Cards from "../../components/Cards";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
	const [adverts, setAdverts] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(true);
	const [selectedCard, setSelectedCard] = useState(null);

	const baseURL = "http://localhost:3001/api/v1";

	const api = axios.create({ baseURL: baseURL });

	useEffect(() => {
		const getData = async () => {
			await getAllAdvert();
			setLoading(false);
		};

		getData();
	}, []);

	const getAllAdvert = async () => {
		try {
			const res = await api.get(`/adverts`);
			setAdverts(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteAdvert = async () => {
		if (selectedCard) {
			try {
				setLoading(true);
				await api.delete(`/adverts/${selectedCard?._id}`);
				await getAllAdvert();
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		}
	};

	const openModal = (car) => {
		if (car) {
			setSelectedCard(car);
			setShowModal(true);
		}
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<>
			{loading && <Loader loaderTypes="WhiteBackground" />}
			{!loading && (
				<div className={styles.bodyWrapper}>
					<Cards adverts={adverts} openModal={openModal} />
				</div>
			)}

			{showModal && (
				<GenericModal closeModal={closeModal}>
					<DeleteCardModal closeModal={closeModal} deleteAdvert={deleteAdvert} />
				</GenericModal>
			)}
		</>
	);
};
export default LandingPage;
