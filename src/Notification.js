import React from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';

import cancelIcon from './cancel.png';

import notificationIcon from './notification.png';

class Notification extends React.Component {
  animatedShow = new Animated.Value(100);
  iconAppear = new Animated.Value(0.1);
  contentAnimation = new Animated.Value(0);
  contentPadding = new Animated.Value(0);

  contentHeight = 0;
  contentVisible = false;

  constructor() {
    super();
    this.toggleContent = this.toggleContent.bind(this);
    this.close = this.close.bind(this)
  }

  close() {
    Animated.timing(this.animatedShow, {
      duration: 200,
      toValue: 100,
      easing: Easing.elastic(1),
    }).start(() => {
      this.props.close();
    });
  }
  componentDidMount() {
    Animated.timing(this.animatedShow, {
      duration: 300,
      toValue: 0,
      easing: Easing.elastic(1),
    }).start(() => {});

    Animated.timing(this.iconAppear, {
      duration: 500,
      toValue: 1,
      easing: Easing.elastic(3),
      delay: 200,
    }).start();
  }

  toggleContent() {
    let heightTo = this.contentVisible ? 0 : this.contentHeight + 60;
    let paddingTo = this.contentVisible ? 0 : 20;
    let delayPadding = this.contentVisible ? 100 : 0;
    let easing = this.contentVisible ? null : Easing.elastic(1);
    let duration = this.contentVisible ? 100 : 400;
    this.contentVisible = !this.contentVisible;

    Animated.timing(this.contentAnimation, {
      duration: duration,
      toValue: heightTo,
      easing: easing,
    }).start();
    Animated.timing(this.contentPadding, {
      duration: 50,
      toValue: paddingTo,
      delay: delayPadding,
    }).start();
  }
  render() {
    const containerStyle = {
      position: 'absolute',
      bottom: 0,
      backgroundColor: '#333333dd',
      left: 0,
      right: 0,
      margin: 12,
      borderRadius: 15,
      flexDirection: 'column',
      elevation: 4,
      transform: [
        {
          translateY: this.animatedShow,
        },
      ],
    };
    const headerStyle = {
      borderRadius: 15,
      backgroundColor: '#333333dd',
      flexDirection: 'row',
      padding: 12,
    };
    const textStyle = {
      color: '#fff',
    };
    const iconHolder = {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    };

    const {notification} = this.props;
    return (
      <Animated.View style={containerStyle}>
        <View style={headerStyle}>
          <View style={iconHolder}>
            <Animated.Image
              style={{
                width: 30,
                height: 30,
                transform: [
                  {
                    scale: this.iconAppear,
                  },
                ],
              }}
              source={notificationIcon}
            />
          </View>

          <TouchableWithoutFeedback onPress={this.toggleContent}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'stretch',
                flex: 1,
                paddingLeft: 20,
                marginHorizontal: 10,
                borderLeftWidth: 1,
                borderColor: '#ddd',
              }}>
              <Text
                style={{
                  ...textStyle,
                  fontSize: 16,
                }}>
                {notification.title}
              </Text>
              <Text
                style={{
                  ...textStyle,
                  fontSize: 12,
                  color: '#BEBEBE',
                }}>
                {notification.description}
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={iconHolder}>
            <TouchableWithoutFeedback onPress={this.close}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                }}
                source={cancelIcon}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>

        <Animated.ScrollView
          style={{
            padding: this.contentPadding,
            height: this.contentAnimation,
          }}>
          <View
            onLayout={event => {
              let {x, y, width, height} = event.nativeEvent.layout;
              this.contentHeight = height;
            }}>
            <Text
              style={{
                color: '#eee',
                lineHeight: 20,
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse mauris sapien, ullamcorper a mattis ac, porta nec mi.
              Quisque accumsan ligula vel rutrum ullamcorper. Donec rhoncus
              faucibus enim ac consequat. Maecenas bibendum semper arcu. Aenean
              rhoncus libero arcu.
            </Text>

            <View
              style={{
                marginHorizontal: 100,
                height: 1,
                backgroundColor: '#ccc',
                marginVertical: 20,
              }}></View>

            <TouchableWithoutFeedback
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  padding: 10,
                  paddingHorizontal: 20,
                  borderRadius: 10,
                  backgroundColor: '#ccc',
                }}>
                <Text style={{textAlign: 'center'}}>Call to action</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Animated.ScrollView>
      </Animated.View>
    );
  }
}

export default Notification;
