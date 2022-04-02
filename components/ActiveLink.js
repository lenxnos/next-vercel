import Link from "next/link"
import { useRouter } from "next/router"

const style = {
  color: "#0070f3",
  textDecoration: 'underline'
}

export const ActiveLink = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={href === asPath ? style : null}>{text}</a>
    </Link>
  )
}
