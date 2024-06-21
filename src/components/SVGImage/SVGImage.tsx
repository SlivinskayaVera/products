type SVGPropsType = { url: string; className: string };

export function SVG({ url, className }: SVGPropsType) {
  return (
    <svg className={className}>
      <use xlinkHref={`icon/sprite.svg#icon-${url}`}></use>
    </svg>
  );
}
