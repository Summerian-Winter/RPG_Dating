/* eslint-disable quotes */
import React from 'react';
import {Text, View} from 'react-native';

// Create Component
const Header = props => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// Create styles component
const styles = {
  viewStyle: {
    backgroundColor: '#050',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
    elevation: 15,
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
  },
};

// Make the component available to the other parts of the app
export {Header};
