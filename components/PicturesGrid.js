import React from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {fetchPictures} from '../actions/picturesActions';
import {connect} from 'react-redux';
import PhotoCard from './PhotoCard';

class PicturesGrid extends React.Component {
  componentDidMount(): void {
    this.props.fetchPictures(
      'https://api.unsplash.com/photos?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
    );
  }
  static navigationOptions = {
    title: 'Pictures List',
  };

  render() {
    const {pictures, error, isLoading, navigation} = this.props;

    return isLoading ? (
      <View style={styles.base}>
        <ActivityIndicator size="large" />
      </View>
    ) : error.isError ? (
      <View>
        <Text>Something went wrong</Text>
      </View>
    ) : pictures.length === 0 ? (
      <View />
    ) : (
      <SafeAreaView style={styles.base}>
        <FlatList
          keyExtractor={item => item.id}
          data={pictures}
          numColumns={2}
          renderItem={({item}) => (
            <PhotoCard
              picture={item}
              onPressCard={picture => {
                console.log('picture', picture);
                navigation.navigate('Picture', picture);
              }}
            />
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  base: {flex: 1, justifyContent: 'center'},
});

const mapStateToProps = state => ({
  pictures: state.pictures,
  isLoading: state.loading,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  fetchPictures: url => dispatch(fetchPictures(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PicturesGrid);
