/**
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from 'src/res/colors';
import ReproductionModule from 'src/components/Reproduction/ReproductionModule';

interface IProps {}

interface IState {
  paused?: boolean;
}

class ReproductionView extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      paused: true,
    };
  }

  togglePause = (): void => {
    this.setState({paused: !this.state.paused});
    console.log('state' + this.state.paused);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.titleText}>Reproducer</Text>
        </View>
        <View style={styles.containerBox}>
          <Text>Reproducer</Text>
        </View>
        <ReproductionModule
          onPressPlay={this.togglePause}
          onPressPause={this.togglePause}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
  backgroundVideo: {
    flex: 1,
  },
});

export default ReproductionView;
