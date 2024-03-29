import React from 'react';
import {View, Text, Component} from 'react-native';
import Notification from './Notification';

class NotificationManager extends React.Component {
  state = {
    notifications: [],
  };
  notify(title, description) {
    this.setState({
      notifications: [
        {
          title,
          description,
        },
      ],
    });
  }
  componentDidMount() {}
  render() {
    return (
      <View>
        <Notification />
      </View>
    );
  }
}
/*
const withNotifications = ({theme = 'dark'}) => Comp =>
  class extends React.Component {
    state = {
      notification: null,
    };

    notify(title, description) {
      this.setState({
        notification: {
          title,
          description,
        },
      });
    }

    closeNotification() {
      this.setState({
        notification: null,
      });
    }
    render() {
      return (
        <>
          <Comp
            {...this.props}
            notificationManager={{
              notify: (title, description) => this.notify(title, description),
            }}></Comp>

          {this.state.notification ? (
            <Notification
              notification={this.state.notification}
              close={() => this.closeNotification()}
            />
          ) : null}
        </>
      );
    }
  };*/

const withNotifications = ({themeColor = 'dark', theme = 'boxed', callToActionTitle = "Call to action"}) => Comp =>
  class extends React.Component {
    state = {
      notification: null,
    };

    notify(title, description, s) {
      let settings = {
        theme,
        themeColor,
        callToActionTitle,
        onClose: () => {},
        callToAction: () => {},
        ...s,
      };

      this.setState({
        notification: {
          title,
          description,
          settings,
        },
      });
    }

    closeNotification() {
      this.setState({
        notification: null,
      });
    }
    render() {
      return (
        <>
          <Comp
            {...this.props}
            notificationManager={{
              notify: (title, description, settings) =>
                this.notify(title, description, settings),
            }}></Comp>

          {this.state.notification ? (
            <Notification
              notification={this.state.notification}
              close={() => this.closeNotification()}
            />
          ) : null}
        </>
      );
    }
  };

export {withNotifications, NotificationManager};
