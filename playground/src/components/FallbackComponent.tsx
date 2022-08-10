import type { ReactNode } from 'react'
import React from 'react'
import type { FallbackProps } from 'react-error-boundary'

export const FallbackComponent: React.FC<FallbackProps> = (props) => {
  if (props.error) {
    return (
      <div className="flex justify-center ">
        <div className="max-w-5xl p-2 ">
          <h1 className="text-5xl font-extrabold text-red ">
            Please check your resume
          </h1>
          <p className="mt-10 text-2xl text-dark-300">{props.error.stack}</p>
        </div>
      </div>
    )
  }
  return <>{(props as unknown as { children: ReactNode }).children}</>
}
