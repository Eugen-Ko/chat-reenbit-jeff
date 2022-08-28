import { Avatar } from 'components/avatar';
import { getFormatDate } from 'helpers/helpers';
import { ReceiverMessageBlock, Message, ChatDataTime } from 'styles/styles';

export const ReceiverMessage = ({ avatar, msg, date }) => {
  return (
    <ReceiverMessageBlock>
      <Avatar avatar={avatar} />
      <div style={{ marginLeft: '15px' }}>
        <Message stateMsg="in">
          <>{msg}</>
        </Message>
        <ChatDataTime sx={{ paddingLeft: '15px' }}>
          {getFormatDate('message', date)}
        </ChatDataTime>
      </div>
    </ReceiverMessageBlock>
  );
};
