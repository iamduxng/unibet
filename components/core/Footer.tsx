import tw from 'twin.macro'

const styles = {
  footer: tw`pb-16`
}

const Footer = () => {
  return (
    <footer css={styles.footer}>
      <div className="container">
        <p>&copy; 1997-2015, Unibet. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
