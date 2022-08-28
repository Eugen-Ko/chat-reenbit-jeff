import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { dbSelectors } from 'redux/db';
import { nanoid } from 'nanoid';
import { ChatHistoryContainer, SelectContactMessage } from 'styles/styles';
import { OwnerMessage } from 'components/ownerMessage';
import { ReceiverMessage } from 'components/receiverMessage';

export const ChatHistory = () => {
  const currentContact = useSelector(dbSelectors.getCurrentContact);
  const { avatar } = currentContact || 'noname';
  const refChatHistoryContainer = useRef();

  useEffect(() => {
    refChatHistoryContainer.current.scrollTop =
      refChatHistoryContainer.current.scrollHeight;
  }, [currentContact]);

  return (
    <ChatHistoryContainer ref={refChatHistoryContainer}>
      {!currentContact && (
        <SelectContactMessage>
          <>Select a contact to start messaging</>
        </SelectContactMessage>
      )}
      {currentContact &&
        currentContact.history.map(msg => {
          return msg.statMsg === 'in' ? (
            <OwnerMessage
              key={nanoid()}
              msg={msg.message}
              date={msg.date.slice(4, 21)}
            />
          ) : (
            <ReceiverMessage
              key={nanoid()}
              avatar={avatar}
              msg={msg.message}
              date={msg.date.slice(4, 21)}
            />
          );
        })}
    </ChatHistoryContainer>
  );
};
