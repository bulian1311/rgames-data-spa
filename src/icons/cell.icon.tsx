import * as React from 'react';
import { SVGProps } from 'react';

export const CellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1200"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M0 0v525h525V0H0zm675 0v525h525V0H675zM0 675v525h525V675H0zm675 0v525h525V675H675z" />
  </svg>
);
