import React from 'react'
import { default as Progress } from 'react-loader-spinner'

import './loader.scss'

export const Loader = () => (
  <div className="page-loader">
    <Progress type="ThreeDots" color="#00BFFF" height={100} width={100} timeout={3000} />
  </div>
)
