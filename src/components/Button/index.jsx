import React from "react";
import classes from "./Button.module.css";

const Button = ({ type, btnTypes, children, onClick }) => {
	return (
		<button type={type} className={classes[btnTypes]} {...(type !== "submit" && { onClick: onClick })}>
			{children}
		</button>
	);
};

export default Button;
