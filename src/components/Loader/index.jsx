import React from "react";
import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = (props) => {
	return (
		<div className={styles[props.loaderTypes]}>
			<div className={styles.clip}>
				<ClipLoader color="#05B6EB" size={80} />
				<p>loading...</p>
			</div>
		</div>
	);
};

export default Loader;
