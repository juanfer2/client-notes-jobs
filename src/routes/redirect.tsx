import React from 'react'
import { Router, Navigate } from 'react-router-dom'

export const redirectTo = (path: string) => {
  return <Navigate replace to={path} />
}
