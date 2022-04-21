import React from "react";
import classes from "./GenericModal.module.css";

const GenericModal = ({ children, isFullScreen, closeModal }) => {
	return (
		<>
			<div className={classes.BackDrop} onClick={closeModal}>
				<div className={`${classes.ModalContainer} ${classes.FullscreenModalContainer}`}>{children}</div>
			</div>
		</>
	);
};

export default GenericModal;
