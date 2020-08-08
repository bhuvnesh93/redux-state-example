import React, { Component } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../component/ListItem';
import { addPlace } from '../state/action/place';
import AddPlaceStyles from './AddPlaceStyles';

class AppPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
      places: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { data: prevMessage } = prevProps;
    const { data: newMessage } = this.props;
    const { places } = this.state;

    if (prevMessage !== newMessage) {
      const { placeName } = newMessage;
      places.push({ value: placeName });
      this.test(places);
    }
  }

  test = (places) => {
    this.setState({ places });
  };

  placeSubmitHandler = () => {
    const { placeName } = this.state;
    const { add } = this.props;
    if (placeName.trim() === '') {
      return;
    }
    add(placeName);
    this.setState({ placeName: '' });
  };

  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value,
    });
  };

  renderPlaceItem = ({ item }) => {
    return <ListItem placeName={item.value} />;
  };

  placesOutput = () => {
    const { places } = this.state;
    const { listStyle } = AddPlaceStyles;
    return (
      <FlatList
        style={listStyle}
        data={places}
        keyExtractor={(item, index) => index}
        renderItem={this.renderPlaceItem}
      />
    );
  };

  render() {
    const { container, inputContainer, placeInput, placeButton } = AddPlaceStyles;
    const { placeName } = this.state;
    return (
      <View style={container}>
        <View style={inputContainer}>
          <TextInput
            placeholder="Seach Places"
            style={placeInput}
            value={placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button title="Add" style={placeButton} onPress={this.placeSubmitHandler} />
        </View>
        {this.placesOutput()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.placeReducer.placeName,
});

const mapDispatchToProps = (dispatch) => ({
  add: (name) => {
    dispatch(addPlace(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppPlace);
