import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navContainer}>
				<div className={styles.navItems}>
					<Link className={"loginButton"} href="/login">
						Login / Signup
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
