import { useDispatch, useSelector } from 'react-redux';
import { dbOperations, dbSelectors } from 'redux/db';
import { Avatar } from 'components/avatar';
import { ChatHeaderContainer, NickName } from 'styles/styles';
import { ReactComponent as GoBack } from 'assets/images/goBack.svg';
import { colors } from 'assets/themes';

export const ChatHeader = ({ goBack = false }) => {
  const currentContact = useSelector(dbSelectors.getCurrentContact);
  const dispatch = useDispatch();
  return (
    <ChatHeaderContainer>
      {currentContact && (
        <>
          {goBack && (
            <GoBack
              style={{ marginRight: '15px', fill: `${colors.background5}` }}
              onClick={() => dispatch(dbOperations.clearCurrentContact())}
            />
          )}
          <Avatar
            isOnline={currentContact.isOnline}
            avatar={currentContact.avatar}
          />
          <NickName>{currentContact.name}</NickName>
        </>
      )}
    </ChatHeaderContainer>
  );
};
