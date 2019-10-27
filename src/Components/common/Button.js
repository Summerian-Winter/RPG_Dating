import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => (
  <TouchableOpacity onPress={onPress} style={styles.ButtonContainer}>
    <Text style={styles.TextStyle}>{children}</Text>
  </TouchableOpacity>
);

const styles = {
  TextStyle: {
    color: '#000',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  ButtonContainer: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#007aff',
    marginRight: 5,
    marginLeft: 5,
  },
};

export {Button};
