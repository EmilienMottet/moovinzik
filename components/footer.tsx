import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <hr />
            <ul className={styles.navItems}>
                <li className={styles.navItem}>
                    <em>🎵 + 🏃 =&gt; Moovinzik 💙 </em>
                </li>
            </ul>
        </footer>
    )
}
