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

const withNotifications = settings => Comp =>
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
  };

export {withNotifications, NotificationManager};
