import tw from 'twin.macro'

const Navbar = () => {
  return (
    <div css={tw`bg-gray-1000 text-white`}>
      <div className="container">
        <ul>
          <li><a href="instructions/index.html">Test instructions</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
