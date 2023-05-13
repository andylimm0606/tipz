import { memo, SVGProps } from 'react';

const Ellipse7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={16.5} cy={16.5} r={16.5} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse7Icon);
export { Memo as Ellipse7Icon };
