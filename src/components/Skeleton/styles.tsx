import styled, { keyframes } from "styled-components/macro";

interface SkeletonRowProps {
  width: string | number;
  height: string | number;
  margin?: string | number;
  top?: string | number;
}

const loading = keyframes`
to {
  background-position: 100vw 0
}
`;

export const SkeletonSplit = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 390px);
  column-gap: 30px;
  margin: 0 0 10px;

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const Left = styled.div`
  height: 208px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 17px;
`;

export const SkeletonRow = styled.div<SkeletonRowProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin: ${(props) => props.margin}px 0;
  margin-top: ${(props) => props.top}px;
  background-color: #f7f7f7;
  animation: ${loading} 1.7s infinite;
  background: linear-gradient(90deg, #f7f7f7, #d3d3d3, #f7f7f7) 0 0/ 100vh 100% fixed;
`;

export const SkeletonPhoto = styled.div`
  width: 390px;
  height: 208px;
  border-radius: 2px;
  background-color: #f7f7f7;
  animation: ${loading} 1.7s infinite;
  background: linear-gradient(90deg, #f7f7f7, #d3d3d3, #f7f7f7) 0 0/ 100vh 100% fixed;
`;

export default SkeletonRow;
