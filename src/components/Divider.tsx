import styled from "styled-components";
import { divider } from "@/styles/tokens/component-specific";

export type DividerStyle = "default" | "strong" | "navigation";

interface Props {
  width?: number;
  style: DividerStyle;
}

interface StyledProps {
  $width: number;
  $height: number;
  $surfaceColor: string;
}

function Divider({ width = 328, style = "default" }: Props) {
  const setStyle = () => {
    let height: number = 1;
    let surfaceColor: string = divider[2];

    if (style === "strong") {
      height = 12;
      surfaceColor = divider[2];
    }

    if (style === "navigation") {
      height = 1;
      surfaceColor = divider[1];
    }

    return { height, surfaceColor };
  };

  return (
    <Container
      $width={width}
      $height={setStyle().height}
      $surfaceColor={setStyle().surfaceColor}
    />
  );
}

export default Divider;

const Container = styled.div<StyledProps>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  background-color: ${({ $surfaceColor }) => $surfaceColor};
`;
