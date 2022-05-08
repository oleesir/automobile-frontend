import React, { useRef, useState } from "react";
import Button from "../../components/Button";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./CreateAdvert.module.css";

const schema = yup
	.object({
		photo: yup.string().required("Image is required"),
		brand: yup.string().required("Please provide the brand of the vehicle"),
		description: yup.string().required("Give a brief information about the car"),
		model: yup.string().required("Please provide the model of the vehicle"),
		price: yup
			.number()
			.positive()
			.typeError("Enter a valid amount")
			.integer("Must be more than 0")
			.required("Please provide the price of the vehicle"),
		sellerName: yup.string().required("Provide your name"),
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
		setValue,

		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });
	const baseURL = process.env.REACT_APP_API_URL;
	const imgWrapperRef = useRef(null);
	const navigate = useNavigate();

	const api = axios.create({ baseURL: baseURL });
	const [loadingButton, setLoadingButton] = useState(false);

	const onSubmit = async ({ photo, brand, description, price, sellerName, phoneNumber, model }) => {
		try {
			console.log(" PREPOST", brand, description, price, sellerName, phoneNumber);
			setLoadingButton(true);
			const uploadedImage = await uploadImage(photo);

			const res = await api.post(`/adverts`, {
				photo: uploadedImage,
				brand,
				description,
				price,
				sellerName,
				phoneNumber,
				model,
			});
			console.log("POST", res.data.data);
			setLoadingButton(false);
			navigateToLandingPage();
			return res.data.data;
		} catch (error) {
			console.log(error);
		}
	};

	const navigateToLandingPage = () => {
		navigate("/");
	};

	const handleImageChange = async (file) => {
		console.log("HELLO", file);
		const input = file.target;
		const reader = new FileReader();
		console.log("READER", reader);
		reader.onload = function () {
			const dataURL = reader.result;
			const imageElement = document.createElement("img");
			imageElement.setAttribute("height", "200");
			imageElement.setAttribute("width", "200");
			imageElement.setAttribute("alt", "image");
			imageElement.setAttribute("className", styles.pic);
			imgWrapperRef.current.appendChild(imageElement);
			console.log("IMAGE ELEMENT", imgWrapperRef);
			console.log("REF", imgWrapperRef);
			imageElement.src = dataURL;
			setValue("photo", dataURL);
		};
		reader.readAsDataURL(input.files[0]);
	};

	const uploadImage = async (file) => {
		const data = new FormData();
		data.append("file", file);
		data.append("upload_preset", "upload_preset");
		const res = await axios.post("https://api.cloudinary.com/v1_1/dhixv0jh9/image/upload", data);
		return res.data.secure_url;
	};

	return (
		<div className={styles.bodyWrapper}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.inputFieldContent}>
						<div ref={imgWrapperRef}></div>
						<input
							type="file"
							id="actual-btn"
							accept="image/png, image/jpeg"
							hidden
							{...register("photo")}
							onChange={handleImageChange}
						></input>
						<label for="actual-btn" className={styles.uploadBtn}>
							Choose File
						</label>
						<span className={styles.errorMessage}>{errors.photo?.message}</span>
					</div>

					<div className={styles.inputFieldContent}>
						<label>
							<h3 className={styles.uploadBtnHidden}>Brand</h3>
						</label>
						<input
							width="200"
							height="200"
							type="text"
							placeholder="Brand"
							className={styles.InputField}
							{...register("brand")}
						/>
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
							{...register("sellerName", { required: true })}
						/>
						<span className={styles.errorMessage}>{errors.seller?.message}</span>
					</div>

					<div className={styles.inputFieldContent}>
						{" "}
						<label>
							<h3>Phone number</h3>
						</label>
						<input type="text" placeholder="Phone number" className={styles.InputField} {...register("phoneNumber")} />
						<span className={styles.errorMessage}>{errors.phoneNumber?.message}</span>
					</div>

					<div className={styles.BtnField}>
						<Button btnTypes={"SubmitBtn"} sizes={""} disabled={loadingButton} type="submit">
							{loadingButton && <ClipLoader color="white" size={15} />}
							{!loadingButton && "Submit"}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateAdvert;
