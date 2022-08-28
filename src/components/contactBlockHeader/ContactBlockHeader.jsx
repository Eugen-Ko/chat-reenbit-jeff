import { ContactHeaderContainer } from 'styles/styles';
import { Avatar } from 'components/avatar';
import { SearchContacts } from 'components/searchContacts';

export const ContactBlockHeader = () => {
  return (
    <ContactHeaderContainer>
      <Avatar />
      <SearchContacts />
    </ContactHeaderContainer>
  );
};
