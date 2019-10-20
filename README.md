# react-native-notifications

Create in app notfications

![image](./assets/example.gif)

## How to use
Use **withNotifications** on your main component

    const globalSettings = {
        theme : 'boxed', // default boxed, values boxed or full
        themeColor : 'dark' // default dark, values dark or white
    }
    export default withNotifications(globalSettings)(MyComponent);

Use then the **notificationManager** prop to create notifications from within your component.

     // standard
     this.props.notificationManager.notify('Title test', 'This is your content');

     // with settings
     this.props.notificationManager.notify('Title test', 'This is your content',{
         theme : 'white'
     });


**w.i.p on readme and component**


## Settings
| name | type | default | available value |   |
|---|---|---|---|---|
|theme|string   |boxed   |boxed,full   |   |
|themeColor|string|dark|dark,white   |   |
|callToAction   |function   | null   |   |   |
|callToActionTitle   |string   | Call to action   | 



 ## Conclusion
 Feel free to clone the repo and make pull request or open new issues.
 
 If you like to contribute you can patron me:
 https://www.patreon.com/user?u=25858214
 
 
 made with ❤️ by Fabio Pocci