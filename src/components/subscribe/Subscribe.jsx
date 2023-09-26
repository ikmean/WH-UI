import React from "react";
import Button from "../button/Button";
import SubscribeBox from "./SubscribeBox";

export default function Subscribe() {
	return (
		<div>
			<h1>Subscribe to our newsletter</h1>
			<SubscribeBox text="Enter your email address" />
			<Button text="Subscribe" color="red" />
		</div>
	);
}
