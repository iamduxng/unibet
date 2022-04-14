interface IconProps {
  name: string,
}

const Icon = (props: IconProps) => {
  return (
    <img src={`/icons/${props.name}.png`} />
  )
}

export default Icon
