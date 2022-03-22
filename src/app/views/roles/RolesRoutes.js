import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const RolesPage = Loadable(lazy(() => import('./RolesPage')))

const rolesRoutes = [
    {
        path: '/roles',
        element: <RolesPage />,
        auth: authRoles.admin,
    },
]

export default rolesRoutes
