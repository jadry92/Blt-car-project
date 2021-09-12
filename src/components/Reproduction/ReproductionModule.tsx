/**
 * @format
 */

import React, {Component} from 'react';
import {Pressable, View, Image, StyleSheet} from 'react-native';
import colors from 'src/res/colors';

interface handelPress {
  (): any;
}

interface IProps {
  onPressPlay?: handelPress;
  onPressPause?: handelPress;
}

interface IState {}

class ReproductionModule extends Component<IProps, IState> {
  render() {
    return (
      <View style={style.containerActions}>
        <Pressable style={style.btnContainer}>
          <Image
            style={style.btnImage}
            source={require('src/assets/img/outline_skip_previous_white_48dp.png')}
          />
        </Pressable>
        <View style={style.btnContainerPlay}>
          <Pressable onPress={this.props.onPressPlay}>
            <Image
              style={style.btnImagePlay}
              source={require('src/assets/img/outline_play_arrow_white_48dp.png')}
            />
          </Pressable>
          <Pressable onPress={this.props.onPressPause}>
            <Image
              style={style.btnImage}
              source={require('src/assets/img/outline_pause_white_48dp.png')}
            />
          </Pressable>
        </View>
        <Pressable style={style.btnContainer}>
          <Image
            style={style.btnImage}
            source={require('src/assets/img/outline_skip_next_white_48dp.png')}
          />
        </Pressable>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  titleText: {
    color: colors.black,
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  containerTitle: {},
  containerBox: {
    flex: 2,
    borderWidth: 1,
  },
  containerActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.black,
  },
  btnContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  btnContainerPlay: {
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  btnImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'center',
  },
  btnImagePlay: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
});

export default ReproductionModule;
