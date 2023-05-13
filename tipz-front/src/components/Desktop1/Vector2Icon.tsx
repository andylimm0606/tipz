import { memo, SVGProps } from 'react';

const Vector2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1313 429' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1251.96 41.7876C1164.33 -19.0672 145.018 -8.54334 62.6336 41.7876C-19.7506 92.1186 -21.9975 328.675 62.6336 385.412C147.265 442.149 1177.07 444.894 1251.96 385.412C1326.86 325.93 1339.59 102.642 1251.96 41.7876Z'
      fill='#E5C2C2'
    />
  </svg>
);

const Memo = memo(Vector2Icon);
export { Memo as Vector2Icon };
