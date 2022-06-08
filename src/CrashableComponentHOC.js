import { withErrorBoundary } from 'react-error-boundary'

const CrashableComponent = (props) => {
  return (
    <span>
      {props.iDontExist.prop}
    </span>
  )
}

export default withErrorBoundary(CrashableComponent, {
  FallbackComponent: () => <span>Error handled by react-error-boundary HOC</span>,
})
