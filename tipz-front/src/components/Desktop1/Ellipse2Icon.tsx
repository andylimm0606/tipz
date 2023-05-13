import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={10.5} cy={10.5} r={10.5} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
