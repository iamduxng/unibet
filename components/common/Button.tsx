import tw from 'twin.macro'

const styles: Record<string, any> =  {
  button: tw`rounded py-2 px-4 cursor-pointer`,
  primary: tw`text-white bg-green-500`,
  secondary: tw`text-white bg-gray-1000`,
  outlined: tw`border text-green-primary border-green-primary`
}

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outlined',
  children: string
}
const Button = (props: ButtonProps) => {
  return (
    <div css={[styles.button, styles[`${props.variant}`]]}>
      { props.children }
    </div>
  )
}

export default Button
