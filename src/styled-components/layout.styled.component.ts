import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
  padding-right: 20px;
  border-radius: 4px;
  max-width: 1440px;
  padding: 4rem;
`;

export const MainContainer = styled.div`
  background-color: black;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 20px 20px;
  border-radius: 4px;
  min-width: 794px;
  height: 100%;
`;

export const AppContainer = styled.div`
  justify-content: center;
  background-color: black;
  display: flex;
`;
