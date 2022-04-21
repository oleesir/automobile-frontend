import React from "react";
import Button from "../../Button";
import styles from "./DeleteCardModal.module.css";

const DeleteCardModal = ({ deleteAdvert, closeModal }) => {
	return (
		<div className={styles.deleteContainer}>
			<div className={styles.deleteContent}>
				<p>Are you sure you want to delete card</p>
				<div className={styles.decision}>
					<Button btnTypes="NoBtn" type="button" onClick={closeModal}>
						No
					</Button>
					<Button btnTypes="YesBtn" type="button" onClick={deleteAdvert}>
						Yes,Delete
					</Button>
				</div>
			</div>
		</div>
	);
};

export default DeleteCardModal;
