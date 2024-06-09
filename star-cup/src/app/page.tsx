"use client";
import SpriteAnimation from "@/app/sprite";
import React, { useState, useEffect } from "react";
import {
	differenceInSeconds,
	formatDuration,
	intervalToDuration,
} from "date-fns";
import { de } from "date-fns/locale";
import Link from "next/link";

const targetDate = new Date("2024-07-13T15:00:00");

export default function Home() {
	const [timeLeft, setTimeLeft] = useState("");

	useEffect(() => {
		const updateCountdown = () => {
			const now = new Date();
			const secondsLeft = differenceInSeconds(targetDate, now);
			const duration = intervalToDuration({
				start: now,
				end: targetDate,
			});
			setTimeLeft(formatDuration(duration, { locale: de }));
		};

		const intervalId = setInterval(updateCountdown, 1000);
		updateCountdown(); // Initialize the countdown immediately

		return () => clearInterval(intervalId); // Cleanup on component unmount
	}, []);

	return (
		<>
			<div className="App flex justify-center flex-col items-center">
				<h1>NUR NOCH:</h1>
				<div style={{ fontSize: "24px", fontWeight: "bold" }}>
					{timeLeft}
				</div>
				<SpriteAnimation />
				<Link href="/login" className="loginButton">
					Mach doch mit!
				</Link>
			</div>
		</>
	);
}
