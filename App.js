import {View, SafeAreaView, Image} from 'react-native';
import React, {useState, useRef} from 'react';
import {Avatar, Text} from '@rneui/themed';
import tw from 'twrnc';
import Carousel from 'react-native-snap-carousel';

// components
import BtnGroup from './componenets/BtnGroup';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([
    {
      title: 'First Item',
      text: 'Lorem ipsum dolor sit amet',
      image:
        'https://images.pexels.com/photos/5426969/pexels-photo-5426969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'Second Item',
      text: 'Lorem ipsum dolor sit amet',
      image:
        'https://i.picsum.photos/id/1032/2880/1800.jpg?hmac=5SLBdyPZBMyr5IBkIRfffZV10bP87Y7RrxVZX1vCefA',
    },
  ]);

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
        layout={'default'}
        layoutCardOffset={8}
        ref={carouselRef}
        data={data}
        sliderWidth={400}
        itemWidth={350}
        renderItem={({item, index}) => {
          return (
            <View
              style={tw`flex w-96 flex-col w-full justify-center items-center`}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={tw`w-full h-32 rounded-3xl`}
              />
            </View>
          );
        }}
        // enable dots
        onSnapToItem={index => setActiveIndex(index)}
      />
    </SafeAreaView>
  );
};

export default App;
