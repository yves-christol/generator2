import type { Accessor, Component } from 'solid-js';

type HandProps = { rotate: Accessor<string>, class: string, length: number, width: number, color: string, fixed?: boolean };

export const Hand: Component<HandProps> = ({ rotate, length, width, fixed, color, ...rest }) => (
  <line
    {...fixed && { y1: length - 95 }}
    y2={-(fixed ? 95 : length)}
    stroke={color}
    stroke-width={width}
    stroke-linecap="round"
    transform={rotate()}
    {...rest}
  />
);
