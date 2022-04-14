import tw, { styled } from 'twin.macro'

interface HeadlineProps {
  variant: string,
}

const Headline = styled.div((props: HeadlineProps) => [
  tw`font-semibold`,
  props.variant === 'h1' && tw`text-2xl`,
  props.variant === 'h2' && tw`text-lg`
])

export default Headline
