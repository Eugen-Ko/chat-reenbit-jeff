import { ContactBlockContainer } from 'styles/styles';
import { ContactBlockHeader } from 'components/contactBlockHeader';
import { ContactList } from 'components/contactList';

export const ContactBlock = () => {
  return (
    <ContactBlockContainer>
      <ContactBlockHeader />
      <ContactList />
    </ContactBlockContainer>
  );
};
