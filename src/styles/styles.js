import styled from 'styled-components';
import { colors } from 'assets/themes';

export const AvatarStyled = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid ${colors.border2};
  position: relative;
`;

export const AvatarImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 25px;
`;

export const StatusIsOnline = styled.div`
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  fill: ${colors.onlineCheck};
`;

export const ChatHeaderContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  margin-left: 1px;
  padding-left: 15px;
  background-color: ${colors.background3};
  border-bottom: 1px solid ${colors.border2};
`;

export const NickName = styled.div`
  margin-left: 15px;
  font-size: 2em;
`;

export const ChatHistoryContainer = styled.div`
  height: calc(100vh - 82px - 100px - 32px);
  background-color: ${colors.background2};
  margin-left: 1px;
  border-bottom: 1px solid ${colors.border2};
  overflow-x: hidden;
  overflow-y: auto;
`;

export const SelectContactMessage = styled.div`
  width: fit-content;
  height: 40px;
  display: flex;
  margin: 50px auto;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  color: ${colors.text1};
  font-size: 18px;
  background-color: ${colors.background5};
  border-radius: 25px;
`;

export const ChatInputContainer = styled.div`
  height: 100px;
  margin-left: 1px;
  padding: 0 15px;
  background-color: ${colors.background3};
  display: flex;
  align-items: center;
`;

export const SendForm = styled.form`
  display: flex;
  align-items: center;
  background-color: ${colors.background2};
  border: 1px solid ${colors.border2};
  border-radius: 25px;
  overflow: hidden;
`;

export const SendButton = styled.button`
  display: inline-block;
  width: 46px;
  height: 46px;
  border: none;
  background-color: ${colors.background2};
  fill: ${colors.text3};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  &:hover {
    fill: ${colors.textChatTitle};
    cursor: pointer;
  }
`;

export const Input = styled.input`
  display: inline-block;
  background-color: ${colors.background2};
  color: ${colors.text4};
  width: 100%;
  height: 40px;
  font-size: ${props => (props.name === 'message' ? '20px' : '15px')};
  border: none;
  outline: none;
  padding: 0 5px 0 15px;
  &::placeholder {
    font: inherit;
    font-size: ${props => (props.name === 'message' ? '20px' : '15px')};
  }
`;

export const ContactBlockContainer = styled.div`
  border-right: 1px solid ${colors.border2};
  min-width: 320px;
`;

export const ContactHeaderContainer = styled.div`
  border-bottom: 1px solid ${colors.border2};
  min-height: 160px;
  display: grid;
  grid-template-rows: 80px 80px;
  align-items: center;
  padding: 0 15px;
  background-color: ${colors.background3};
`;

export const ContactItemContainer = styled.div`
  max-width: 100%;
  height: 80px;
  border-bottom: 1px solid ${colors.border2};
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover {
    cursor: pointer;
    background-color: ${colors.background2};
  }
`;

export const LastMessage = styled.div`
  color: ${colors.text3};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const DataTime = styled.div`
  padding-left: 10px;
  font-size: 10px;
  color: ${colors.text4};
`;

export const ContactItemNickName = styled.div`
  color: ${colors.text4};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ContactListContainer = styled.div`
  height: calc(100vh - 162px - 32px - 80px);
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ChatTitle = styled.div`
  max-width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  color: ${colors.textChatTitle};
  font-size: 1.75em;
`;

export const Footer = styled.div`
  background-color: ${colors.background3};
  border-top: 1px solid ${colors.border1};
`;

export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: calc(100% - 2px);
  border: 1px solid ${colors.border1};
  display: grid;
  grid-template-rows: auto 30px;
`;

export const ContactChatContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  @media screen and (min-width: 640px) {
    grid-template-columns: 320px auto;
  } ;
`;

export const OwnerMessageBlock = styled.div`
  padding: 15px 0;
  margin: 0 15px 0 auto;
  max-width: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  word-wrap: break-word;
  word-break: break-all;
`;

export const Message = styled.div`
  border: 1px solid ${colors.border2};
  padding: 5px 15px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  background-color: ${props =>
    props.stateMsg === 'out' ? colors.background4 : colors.background5};
  color: ${props => (props.stateMsg === 'out' ? colors.text4 : colors.text1)};
  width: fit-content;
  min-height: 40px;
`;

export const ChatDataTime = styled.p`
  padding-left: 15px;
  width: fit-content;
  color: ${colors.text3};
  font-size: 12px;
`;

export const ReceiverMessageBlock = styled.div`
  padding: 15px 0;
  margin: 0 auto 0 15px;
  max-width: calc(100% - 70px);
  display: grid;
  grid-template-columns: 50px auto;
  align-items: flex-start;
  word-wrap: break-word;
  word-break: break-all;
`;
