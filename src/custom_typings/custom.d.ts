declare module '*.mp3'
declare module '*.mp4'
declare module '*.webm'
declare module '*.mov'

declare module '*.svg'

// eslint-disable-next-line no-useless-escape
declare module '*.svg' {
  import React = require('react')
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}

declare module '*.png' {
  export default '' as string
}
