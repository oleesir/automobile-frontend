import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import axios from "axios";
import styles from "./SingleAdvert.module.css";

const SingleAdvert = () => {
	const baseURL = process.env.REACT_APP_API_URL;
	const api = axios.create({ baseURL: baseURL });
	const [advert, setAdvert] = useState(null);
	const [loading, setLoading] = useState(true);
	const { state } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const getData = async () => {
			await getAdvert(state);
			setLoading(false);
		};
		if (state) {
			getData();
		}
	}, [state]);

	const getAdvert = async (id) => {
		try {
			setLoading(true);
			const res = await api.get(`/adverts/${id}`);
			setAdvert(res.data.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const navigateBack = () => {
		navigate(-1);
	};

	return (
		<>
			{" "}
			{loading && <Loader loaderTypes="WhiteBackground" />}
			{!loading && (
				<div className={styles.bodyWrapper}>
					<div className={styles.content}>
						<img src={advert?.photo} alt="img" className={styles.pic} />

						<div className={styles.headerContent}>
							<h1 className={styles.brand}>{advert?.brand}</h1>
							<h3>
								Price:{" "}
								{new Intl.NumberFormat("en-NG", {
									style: "currency",
									currency: "NGN",
								}).format(advert?.price)}
							</h3>
						</div>

						<div className={styles.bodyContent}>
							<h3 className={styles.model}>Model: {advert?.model}</h3>
							<h3 className={styles.name}>Seller: {advert?.sellerName}</h3>
							<h3 className={styles.phoneNumber}>Phone number: {advert?.phoneNumber}</h3>
							<p className={styles.description}>{advert?.description}</p>
						</div>

						<div className={styles.footer}>
							{" "}
							<Button btnTypes="SellBtn" type="button" onClick={navigateBack}>
								Back
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SingleAdvert;
