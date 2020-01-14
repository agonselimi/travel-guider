import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import actions from '../../state/actions';
import RNRestart from 'react-native-restart';

function SidebarMenu (props){

    const dispatch = useDispatch();

    const [state, setState] = useState({filePath: {uri: 'https://icons-for-free.com/iconfiles/png/512/profile+user+icon-1320166082804563970.png'}});

    const chooseFile = () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      cropping: true,
      width: 150,
      height: 150,
      compressImageMaxWidth: 150,
      compressImageMaxHeight: 150,
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        // let source = response;
        // You can also display the image using data:
        let source = { uri: 'data:image/jpeg;base64,' + response.data };
        setState({
          filePath: source,
        });
      }
    });
  };

    //Setting up the Main Top Large Image of the Custom Sidebar
    const proileImage = 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg';
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    const items = [
      {
        navOptionThumb: 'image',
        navOptionName: 'Feed Screen',
        screenToNavigate: 'NavScreen3',
      },
      {
        navOptionThumb: 'sort-amount-asc',
        navOptionName: 'Sort by distance',
        screenToNavigate: 'NavScreen4',
      },
      {
        navOptionThumb: 'edit',
        navOptionName: 'Change password',
        screenToNavigate: 'NavScreen1',
      },
      {
        navOptionThumb: 'hand-o-right',
        navOptionName: 'Logout',
        screenToNavigate: 'NavScreen2',
      },
    ];
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <TouchableOpacity onPress={chooseFile.bind(this)} activeOpacity={0.7}>
        <Image
          source={{ uri: state.filePath.uri }}
          style={styles.sideMenuProfileIcon}
        />
        </TouchableOpacity>
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        <View style={styles.fullnameContainer}>
        <Text style={styles.fullnameText}>{props.fullname}</Text>
        </View>

        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
          }}
        />

        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  // color: global.currentScreenIndex === key ? 'red' : 'black',
                  fontWeight: global.currentScreenIndex === key ? '700' : 'normal'
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  props.navigation.navigate(item.screenToNavigate);
                  if(item.screenToNavigate === "NavScreen2"){
                    // dispatch(actions.onLogout());
                    RNRestart.Restart();
                  }
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 120,
    height: 120,
    marginTop: 20,
    borderRadius: 200,
  },
  fullnameText: {
    fontSize: 16,
    fontWeight: '700',

  },
  fullnameContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  }
});

function mapStateToProps(state) {
  return { fullname: state.login.fullname }
}

export default connect(mapStateToProps)(SidebarMenu);
