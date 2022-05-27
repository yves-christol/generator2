import { Hand } from './Hand'
import type { Component } from 'solid-js'

type LinesProps = { numberOfLines: number, class: string, length: number, width: number, color: string }

const rotate = (index: number, length: number) => () => `rotate(${(360 * index) / length})`

export const Lines: Component<LinesProps> = ({ numberOfLines, color, ...rest}) => (
  Array.from({ length: numberOfLines }).map((_, index) =>
    <Hand rotate={rotate(index, numberOfLines)} color={color} {...rest} fixed />
  )
);