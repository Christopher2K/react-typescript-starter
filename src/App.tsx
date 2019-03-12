import * as React from 'react'
import { Global } from '@emotion/core'

import { global } from 'styles/global'

export type Props = {}

export type State = {}

export class App extends React.Component<Props, State> {
  public state: State = {}

  public render (): React.ReactNode {
    return (
      <div>
        <Global styles={global} />
        <h1>Hello world</h1>
      </div>
    )
  }
}
