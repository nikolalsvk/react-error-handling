import {errorBoundary} from './ImprovedErrorBoundary'

const CrashableComponent = (props) => {
  return (
    <span>
      {props.iDontExist.prop}
    </span>
  )
}

export default errorBoundary(CrashableComponent, {
  FallbackComponent: () => <span>Oh no :(</span>,
})
