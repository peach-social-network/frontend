import { FC, ReactElement } from "react";
import { StyledSvg } from '@/components/common/ui/CommonIcon/index.style';

interface IProps {
    name: string
    fillColor?: string
    width: number
    height: number
    className?: string
    reverse?: boolean
}

const CommonIcon: FC<IProps> = (
  { className = '',
    name = '',
    fillColor='#000',
    width=32,
    height=32,
    reverse= false
  }
): ReactElement => {
  const isReverse = reverse ? 'reverse' : '';

  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      className={`app-icon ${name}--icon ${className} ${isReverse}`}
      fill={fillColor}
      width={width}
      height={height}
      aria-hidden="true"
    >
      <use xlinkHref={`#${name}`} href={`#${name}`} />
    </StyledSvg>
  );
};

export default CommonIcon;