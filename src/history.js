import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'

export const basename = '/outvio-admin-material-ui'

const history = useRouterHistory(createHistory)({
  basename: basename
})

export default history