import React from 'react';
import {Text, View} from 'react-native';

const Card = props => (
  <View style={styles.containerStyle}>{props.children}</View>
);

export {Card};

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15,
    padding: 4,
  },
};
