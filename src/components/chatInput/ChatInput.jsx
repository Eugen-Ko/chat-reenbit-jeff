import { useSelector, useDispatch } from 'react-redux';
import { dbOperations, dbSelectors } from 'redux/db';
import { ChatInputContainer, SendForm, Input, SendButton } from 'styles/styles';
import { ReactComponent as SendMessageSVG } from 'assets/images/send.svg';

export const ChatInput = () => {
  const currentContact = useSelector(dbSelectors.getCurrentContact);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    if (e.target['message'].value !== '') {
      const date = new Date();
      dispatch(
        dbOperations.sendMessage(
          currentContact.id,
          e.target['message'].value,
          String(date)
        )
      );
      dispatch(
        dbOperations.sendMessageReceive(
          currentContact.id,
          e.target['message'].value
        )
      );
      e.target['message'].value = null;
    }
  };

  return (
    <ChatInputContainer>
      {currentContact && (
        <SendForm
          style={{ width: '100%', height: '60px' }}
          onSubmit={e => onSubmit(e)}
        >
          <Input
            type="text"
            autoComplete="off"
            placeholder="Type your message"
            name="message"
          />
          <SendButton type="submit">
            <SendMessageSVG style={{ width: 28, height: 28 }} />
          </SendButton>
        </SendForm>
      )}
    </ChatInputContainer>
  );
};
