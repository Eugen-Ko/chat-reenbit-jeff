import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {} from 'styles/styles';
import { dbOperations, dbSelectors } from 'redux/db';
import { MainContainer, ContactChatContainer } from 'styles/styles';
import { ContactBlock } from 'components/contactBlock';
import { ChatBlock } from 'components/chatBlock';
import { FooterBlock } from 'components/footerBlock';
import { dataBase } from 'assets/dataBase';
import { mobile } from 'assets/settings';

export const Layout = () => {
  const dispatch = useDispatch();
  const currentContact = useSelector(dbSelectors.getCurrentContact);
  const [resize, setResize] = useState(window.innerWidth);

  useEffect(() => {
    if (!localStorage.getItem('db')) {
      localStorage.setItem('db', JSON.stringify(dataBase));
    }
    dispatch(
      dbOperations.initialContacts(JSON.parse(localStorage.getItem('db')))
    );

    const resizeFn = e => setResize(window.innerWidth);
    window.addEventListener('resize', resizeFn, false);

    return () => {
      window.removeEventListener('resize', resizeFn, false);
    };
  }, [dispatch, resize]);

  return (
    <>
      <MainContainer>
        <ContactChatContainer>
          {resize >= 640 && (
            <>
              <ContactBlock />
              <ChatBlock />
            </>
          )}
          {resize < 640 && !currentContact && <ContactBlock />}
          {resize < 640 && currentContact && <ChatBlock goBack />}
        </ContactChatContainer>
        <FooterBlock style={{ alignItem: 'end' }} />
      </MainContainer>
    </>
  );
};
