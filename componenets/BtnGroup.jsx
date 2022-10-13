import {View, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

const BtnGroup = () => {
  return (
    <View
      style={tw`flex flex-row items-center justify-between w-18 h-8 bg-gray-200 rounded-full px-2`}>
      <TouchableOpacity>
        <Icon name="dots-three-horizontal" size={15} color="#000" />
      </TouchableOpacity>
      <View style={tw`h-3 w-px bg-black`} />
      <TouchableOpacity>
        <IonIcon name="close-circle-outline" size={22} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default BtnGroup;
