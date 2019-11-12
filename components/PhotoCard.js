import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import React from 'react';

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

const PhotoCard = ({
  picture: {
    small,
    full,
    alt_description,
    user: {first_name, last_name},
  },
  onPressCard,
}) => (
  <TouchableWithoutFeedback
    onPress={() => {
      console.log('callBack', onPressCard);
      onPressCard({image: full});
    }}>
    <View style={styles.card}>
      <Text style={styles.title}>
        {alt_description ? capitalize(alt_description) : 'No title'}
      </Text>
      <Image style={styles.image} source={{uri: small}} />
      <Text style={styles.author}>{first_name + ' ' + last_name}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation: 5,
    borderRadius: 10,
  },
  image: {
    width: '98%',
    height: 250,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  title: {
    height: 50,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  author: {marginTop: 5, marginBottom: 5},
});

export default PhotoCard;
