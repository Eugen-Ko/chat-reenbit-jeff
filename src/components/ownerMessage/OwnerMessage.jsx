import { getFormatDate } from 'helpers/helpers';
import { OwnerMessageBlock, Message, ChatDataTime } from 'styles/styles';

export const OwnerMessage = ({ msg, date }) => {
  return (
    <OwnerMessageBlock>
      <Message stateMsg="out">
        <>{msg}</>
      </Message>
      <ChatDataTime style={{ justifySelf: 'right', paddingRight: '15px' }}>
        {getFormatDate('message', date)}
      </ChatDataTime>
    </OwnerMessageBlock>
  );
};
