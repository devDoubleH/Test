import {View, SafeAreaView} from 'react-native';
import React, {useState, useRef} from 'react';
import {Avatar, Text} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
import Carousel from 'react-native-snap-carousel';

// components
import BtnGroup from './componenets/BtnGroup';

const App = () => {
  const [index, setIndex] = useState();

  const FirstElement = () => (
    <View style={tw`bg-black w-40 h-40`}>
      <Text>uywsadjk</Text>
    </View>
  );
  const SecondElement = () => <View style={tw`bg-blue-500 h-40`} />;

  const [data, setData] = useState([FirstElement, SecondElement]);

  const carouselRef = useRef();

  return (
    <SafeAreaView style={tw`flex-1 bg-white justify-start items-center`}>
      {/* header */}
      <View style={tw`flex flex-row justify-between w-11/12 h-auto`}>
        <View style={tw`flex flex-row`}>
          <Avatar
            size={40}
            activeOpacity={1}
            backgroundColor={'#ccc'}
            rounded
            title="A"
          />
          <View style={tw`flex justify-center flex-col ml-2`}>
            <Text style={tw`text-xs`}>Welcome to</Text>
            <Text style={tw`text-sm`}>Sample restaurant</Text>
          </View>
        </View>
        <BtnGroup />
      </View>
      {/* carousel */}
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={({Item, index}) => (
          <View style={tw`w-11/12 h-40`}>
            <Item />
          </View>
        )}
        sliderWidth={400}
        itemWidth={400}
      />
      <FirstElement />
    </SafeAreaView>
  );
};

export default App;
