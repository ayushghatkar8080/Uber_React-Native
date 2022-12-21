import {FlatList, Text, Touchable, TouchableOpacity, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import React from 'react'
import { Icon } from '@rneui/themed';
const data = [
    {
        id:"123",
        title: "Get a ride",
        Image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id:"456",
        title: "Order food",
        Image: "https://links.papareact.com/28w",
        screen: "EatScreen",
    },
]

const NavOptions = () => {
  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            >
                <View>
                    <Image
                        style={{ width:120, height:120, resizeMode: "contain"}}
                        source={{ uri: item.Image }}
                    />
                    <Text
                        style={tw`mt-2 text-lg font-semibold`}
                    >{ item.title }</Text>
                    <Icon
                    style={tw`mt-2 bg-black `}
                    name='arrowright' color="white" type='antdesign' />
                </View>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions