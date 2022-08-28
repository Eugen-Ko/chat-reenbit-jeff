import { useDispatch, useSelector } from 'react-redux';
import {
  ContactItemContainer,
  ContactItemNickName,
  LastMessage,
  DataTime,
} from 'styles/styles';
import { Avatar } from 'components/avatar';
import { dbOperations, dbSelectors } from 'redux/db';
import { getFormatDate } from 'helpers/helpers';

export const ContactItem = ({ contact }) => {
  const { name, isOnline, avatar, history } = contact;
  const { message, date } = history.length
    ? history[history.length - 1]
    : { message: '', date: new Date() };

  const dispatch = useDispatch();
  const allContacts = useSelector(dbSelectors.getContacts);

  const onClick = () => {
    if (!allContacts.filter(el => el.id === contact.id).length) {
      dispatch(dbOperations.createContact(contact));
      dispatch(dbOperations.setQuery(''));
    }
    dispatch(dbOperations.setCurrentContact(contact));
  };

  return (
    <ContactItemContainer onClick={() => onClick()}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar isOnline={isOnline} avatar={avatar} />
        <div style={{ marginLeft: '15px', width: '150px' }}>
          <ContactItemNickName>{name}</ContactItemNickName>
          <LastMessage>{message}</LastMessage>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DataTime>{getFormatDate('contacts', date)}</DataTime>
      </div>
    </ContactItemContainer>
  );
};
