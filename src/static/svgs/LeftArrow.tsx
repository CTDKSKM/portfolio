import { SVGProps } from 'react';

const LeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="36px"
    height="36px"
    viewBox="-5 0 25 25"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
    style={{ pointerEvents: 'none' }}
  >
    <title>{'left'}</title>
    <desc>{'Created with Sketch.'}</desc>
    <g id="icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g
        id="ui-gambling-website-lined-icnos-casinoshunter"
        transform="translate(-1913.000000, -158.000000)"
        fill="#1C1C1F"
        fillRule="nonzero"
      >
        <g id={'1'} transform="translate(1350.000000, 120.000000)">
          <path
            d="M566.453517,38.569249 L577.302459,48.9938158 L577.39261,49.0748802 C577.75534,49.423454 577.968159,49.8870461 578,50.4382227 L577.998135,50.6228229 C577.968159,51.1129539 577.75534,51.576546 577.333675,51.9774469 L577.339095,51.9689832 L566.453517,62.430751 C565.663694,63.1897497 564.399001,63.1897497 563.609178,62.430751 C562.796941,61.650213 562.796941,60.3675924 563.609432,59.5868106 L573.012324,50.5572471 L563.609178,41.4129456 C562.796941,40.6324076 562.796941,39.349787 563.609178,38.569249 C564.399001,37.8102503 565.663694,37.8102503 566.453517,38.569249 Z"
            id="left"
            transform="translate(570.500000, 50.500000) scale(-1, 1) translate(-570.500000, -50.500000) "
          />
        </g>
      </g>
    </g>
  </svg>
);
export default LeftArrow;
