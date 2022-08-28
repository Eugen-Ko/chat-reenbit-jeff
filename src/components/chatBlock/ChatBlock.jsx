import { ChatHeader } from 'components/chatHeader';
import { ChatHistory } from 'components/chatHistory';
import { ChatInput } from 'components/chatInput';

export const ChatBlock = ({ goBack }) => {
  return (
    <div>
      <ChatHeader goBack={goBack} />
      <ChatHistory />
      <ChatInput />
    </div>
  );
};
