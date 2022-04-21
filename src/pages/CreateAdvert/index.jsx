import React, { useState } from "react";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./CreateAdvert.module.css";

const schema = yup
	.object({
		image: yup.string().required("Upload a picture"),
		brand: yup.string().required("Please provide the brand of the vehicle"),
		description: yup.string().required("Give a brief information about the car"),
		model: yup.string().required("Please provide the model of the vehicle"),
		price: yup
			.number()
			.positive()
			.typeError("Enter a valid amount")
			.integer("Must be more than 0")
			.required("Please provide the price of the vehicle"),
		seller: yup.string().required("Provide your name"),
		phoneNumber: yup
			.number()
			.positive()
			.typeError("Provide your phone number")
			.integer("Provide your phone number")
			.required("Provide your phone number"),
	})
	.required();

const CreateAdvert = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const [userInfo, setUserInfo] = useState();
	const onSubmit = (data) => {
		setUserInfo(data);
	};

	const [selectedImage, setSelectedImage] = useState("");

	return (
		<div className={styles.bodyWrapper}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.inputFieldContent}>
						<div>
							<img src="/mustang_two.jpeg" alt="img" className={styles.pic} />
						</div>
						<input type="file" id="actual-btn" hidden onChange={setSelectedImage}></input>
						<label for="actual-btn" className={styles.uploadBtn}>
							Choose File
						</label>
						{/* <span className={styles.errorMessage}>{errors.image?.message}</span> */}
					</div>

					<div className={styles.inputFieldContent}>
						<label>
							<h3 className={styles.uploadBtnHidden}>Brand</h3>
						</label>
						<input type="text" placeholder="Brand" className={styles.InputField} {...register("brand")} />
						<span className={styles.errorMessage}>{errors.brand?.message}</span>
					</div>

					<div className={styles.inputFieldContent}>
						{" "}
						<label>
							<h3>Description</h3>
						</label>
						<textarea
							placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique ullamcorper eget vestibulum, at.  At integer arcu morbi at pulvinar ."
							className={styles.TextArea}
							{...register("description")}
						></textarea>
						<span className={styles.errorMessage}>{errors.description?.message}</span>
					</div>

					<div className={styles.inputFieldContent}>
						<label>
							<h3>Model</h3>
						</label>
						<input type="text" placeholder="Model" className={styles.InputField} {...register("model")} />
						<span className={styles.errorMessage}>{errors.model?.message}</span>
					</div>

					<div className={styles.inputFieldContent}>
						<label>
							<h3>Price</h3>
						</label>
						<input type="text" placeholder="Price" className={styles.InputField} {...register("price")} />
						<span className={styles.errorMessage}>{errors.price?.message}</span>
					</div>

					<div className={styles.inputFieldContent}>
						<label>
							<h3>Seller</h3>
						</label>
						<input
							type="text"
							placeholder="Your name"
							className={styles.InputField}
							{...register("seller", { required: true })}
						/>
						<span className={styles.errorMessage}>{errors.seller?.message}</span>
					</div>

					<div className={styles.inputFieldContent}>
						{" "}
						<label>
							<h3>Phone number</h3>
						</label>
						<input
							type="text"
							placeholder="Lagos, Nigeria"
							className={styles.InputField}
							{...register("phoneNumber")}
						/>
						<span className={styles.errorMessage}>{errors.phoneNumber?.message}</span>
					</div>

					<div className={styles.BtnField}>
						<Button btnTypes={"SubmitBtn"} sizes={""} type="submit">
							Update
						</Button>
					</div>

					<pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
				</form>
			</div>
		</div>
	);
};

export default CreateAdvert;
