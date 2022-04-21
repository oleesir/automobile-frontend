import React from "react";
import classes from "./Button.module.css";

const Button = ({ type, btnTypes, children, onClick, disabled }) => {
	return (
		<button
			type={type}
			className={classes[btnTypes]}
			disabled={disabled}
			{...(type !== "submit" && { onClick: onClick })}
		>
			{children}
		</button>
	);
};

export default Button;
