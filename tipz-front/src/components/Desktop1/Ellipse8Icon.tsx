import { memo, SVGProps } from 'react';

const Ellipse8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 49 49' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={24.5} cy={24.5} r={24.5} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse8Icon);
export { Memo as Ellipse8Icon };
