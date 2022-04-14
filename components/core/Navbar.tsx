import tw from 'twin.macro'

const styles = {
  navbar: tw`bg-gray-1000 text-white`
}

const Navbar = () => {
  return (
    <div css={styles.navbar}>
      <div className="container">
        <ul>
          <li><a href="instructions/index.html">Test instructions</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
