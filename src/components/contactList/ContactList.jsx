import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { ChatTitle, ContactListContainer } from 'styles/styles';
import { ContactItem } from 'components/contactItem';
import { dbSelectors } from 'redux/db';

export const ContactList = () => {
  const allContacts = useSelector(dbSelectors.getContacts);
  const query = useSelector(dbSelectors.getQuery);
  const [sortContactList, setSortContactList] = useState(null);

  useEffect(() => {
    const sort = [...allContacts];

    if (sort.length) {
      setSortContactList(
        sort
          .sort(
            (a, b) =>
              Date.parse(b.history[b.history.length - 1].date) -
              Date.parse(a.history[a.history.length - 1].date)
          )
          .filter(contact => contact.name.includes(query))
      );
    }
  }, [allContacts, query]);

  return (
    <>
      <ChatTitle>
        <>Chat</>
      </ChatTitle>
      <ContactListContainer>
        {sortContactList &&
          sortContactList.map(contact => {
            return <ContactItem key={nanoid()} contact={contact} />;
          })}
      </ContactListContainer>
    </>
  );
};
