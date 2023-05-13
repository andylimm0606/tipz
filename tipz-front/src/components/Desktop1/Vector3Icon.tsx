import { memo, SVGProps } from 'react';

const Vector3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1236 404' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1178.54 39.3524C1096.05 -17.956 136.513 -8.04548 58.9605 39.3524C-18.5924 86.7504 -20.7075 309.522 58.9605 362.952C138.628 416.382 1108.04 418.968 1178.54 362.952C1249.04 306.936 1261.03 96.6609 1178.54 39.3524Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Vector3Icon);
export { Memo as Vector3Icon };
