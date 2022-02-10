import * as Styled from "./styles";

type SkeletonProps = {
  variant?: boolean;
};

export const Skeleton = ({ variant }: SkeletonProps) => {
  if (variant) {
    return (
      <>
        <Styled.SkeletonRow height={17} width={74} />
        <Styled.SkeletonRow height={22} width={98} margin={4} />
        <Styled.SkeletonRow height={17} width={45} />
      </>
    );
  }

  return (
    <Styled.SkeletonSplit>
      <Styled.Left>
        <Styled.SkeletonPhoto />
      </Styled.Left>

      <Styled.Right>
        <Styled.SkeletonRow height={17} width={132} />
        <Styled.SkeletonRow height={28} width={218} margin={4} />
        <Styled.SkeletonRow height={17} width={241} />

        <Styled.SkeletonRow height={17} width={74} top={39} />
        <Styled.SkeletonRow height={22} width={98} margin={4} />
        <Styled.SkeletonRow height={17} width={45} />
      </Styled.Right>
    </Styled.SkeletonSplit>
  );
};
