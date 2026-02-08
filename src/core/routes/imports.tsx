import { lazy } from "react";

export const UserContainer = lazy(
    () => import("../../modules/users/containers/UserContainer")
)
