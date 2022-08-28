import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import { dbOperations } from 'redux/db';
import { SendButton, SendForm, Input } from 'styles/styles';
import { ReactComponent as SearchSVG } from 'assets/images/search.svg';
import { ReactComponent as CancelSVG } from 'assets/images/cancel.svg';

export const SearchContacts = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(null);
  const ref = useRef();

  const debouncedSearch = useRef(
    debounce(async e => {
      dispatch(dbOperations.setQuery(e));
    }, 300)
  ).current;

  const onChange = e => {
    debouncedSearch(e.target.value);
    setState(e.target.value);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const onSubmit = e => {
    e.preventDefault();
    e.target['query'].value = null;
    setState(null);
    dispatch(dbOperations.setQuery(''));
  };

  return (
    <SendForm onSubmit={onSubmit}>
      <SendButton type="submit">
        {!state ? (
          <SearchSVG style={{ width: 20, height: 20 }} />
        ) : (
          <CancelSVG style={{ width: 20, height: 20 }} />
        )}
      </SendButton>
      <Input
        ref={ref}
        type="text"
        autoComplete="off"
        placeholder="Search contact"
        name="query"
        onChange={onChange}
      />
    </SendForm>
  );
};
