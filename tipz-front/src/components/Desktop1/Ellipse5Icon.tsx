import { memo, SVGProps } from 'react';

const Ellipse5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={6.5} cy={6.5} r={6.5} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse5Icon);
export { Memo as Ellipse5Icon };
