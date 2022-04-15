import Link from 'next/link'

interface LinkProps {
  href: string,
  target: string,
  children: React.ReactNode
}

const ALink = ({ href, children, target }: LinkProps) => {
  const regEx = /^http/;
  return regEx.test(href) ? <a href={href} target={target}>{children}</a> : <Link href={href}>{children}</Link>;
}

export default ALink
