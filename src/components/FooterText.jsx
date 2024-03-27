import {Link} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import textFooterStyle from '../styles/textFooterStyle';

const FooterText = ({endText, linkText, toScreen}) => {
  return (
    <View style={textFooterStyle.footerContainer}>
      <Text style={[textFooterStyle.textColor, textFooterStyle.textSize]}>
        {endText}{' '}
        <Link to={toScreen}>
          <Text style={[textFooterStyle.linkColor, textFooterStyle.textSize]}>
            {linkText}
          </Text>
        </Link>
      </Text>
    </View>
  );
};

export default FooterText;
