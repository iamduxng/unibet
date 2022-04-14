import Link from 'next/link'

interface LinkProps {
  href: string,
  children: React.ReactNode
}

const ALink = ({ href, children }: LinkProps) => {
  const regEx = /^http/;
  return regEx.test(href) ? <a href={href} target="_blank">{children}</a> : <Link href={href}>{children}</Link>;
}

export default ALink
