import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const Picture = ({
  navigation: {
    state: {
      params: {image},
    },
  },
}) => {
  console.log(image);
  return (
    <View style={styles.base}>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  base: {flex: 1, justifyContent: 'center'},
  image: {width: '100%', height: '100%', resizeMode: 'contain'},
});

export default Picture;
