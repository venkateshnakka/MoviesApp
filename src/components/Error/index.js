import {useRouteError} from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  return (
    <div>
      <h1>This is error page 404</h1>
    </div>
  )
}
export default Error
