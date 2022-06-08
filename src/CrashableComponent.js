const CrashableComponent = (props) => {
  return (
    <span>
      {props.iDontExist.prop}
    </span>
  )
}

export default CrashableComponent
