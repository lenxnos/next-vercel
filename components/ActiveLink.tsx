import { CSSProperties, FC } from 'react';
import Link from "next/link"
import { useRouter } from "next/router"

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: 'underline',
}

interface ActiveLinkProps {
  text: string;
  href: string;
};

export const ActiveLink: FC<ActiveLinkProps> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={href === asPath ? style : undefined}>{text}</a>
    </Link>
  )
}
