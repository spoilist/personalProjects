import styled from "styled-components";

export const BasicCard = styled.div `
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 280px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  border: 2px solid grey;
  justify-content: space-between;
  background-color: white;
`;

export const BasicImage = styled.div.attrs(({ src }) => ({
  src: (src ? src : "https://britz.mcmaster.ca/images/nouserimage.gif/image"),
})) `
  background-image: url(${props => props.src});
  height: 280px;
  background-size: cover;
  border-bottom: 2px solid grey;
`;

export const BasicCardBody = styled.div `
  flex: 1 1 auto;
  margin: 0 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BasicCardTitle = styled.p `
  font-size: 20px;
  margin-bottom: 0;
`;

export const BasicCardSubtitle = styled.p `
  font-size: 14px;
  color: grey;
  margin-top: 6px;
  margin-bottom: 0;
`;

export const BasicCardFooter = styled.div `
  position: relative;
  margin-bottom: 10px;
`;