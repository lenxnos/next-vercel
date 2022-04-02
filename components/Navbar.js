import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'


const menuItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  { 
    href: "/pricing",
    label: "Pricing",
  },
]

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {
        menuItems.map(({ href, label }) => (
          <ActiveLink key={href} text={label} href={href} />
        ))
      }
    </nav>
  )
}
