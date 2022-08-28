import { AvatarStyled, StatusIsOnline, AvatarImg } from 'styles/styles';
import { ReactComponent as IsOnlineSVG } from 'assets/images/isOnline.svg';

export const Avatar = ({ isOnline = 'false', avatar = 'noname' }) => {
  return (
    <AvatarStyled>
      <AvatarImg src={`./images/${avatar}.jpg`} alt={`${avatar}`} />
      {isOnline === 'true' && (
        <StatusIsOnline>
          <IsOnlineSVG style={{ width: 20, height: 20 }} />
        </StatusIsOnline>
      )}
    </AvatarStyled>
  );
};
