import React from 'react';
import {Text, View, Image} from 'react-native';

const CardFront = () => {
    return (
        <View style={{alignItems: "center"}}>
            <Image source={require ('./computer.png')} style={{width: 200, height: 200}}/>
            <Text style={[{fontSize: 35}, {color: 'yellow'}, {fontWeight: 'bold'}]}>Sage Green</Text>
            <Text style={[{fontSize: 25}, {color: 'fuchsia'}, {fontWeight: 'medium'}, {textAlign: 'center'}, {padding: 11},]}>I will make Skynet look pretty with CSS animations!</Text>
            <Text style={[{fontSize: 25}, {color: 'lime'}, {fontWeight: 'medium'}, {textAlign: 'center'}, {padding: 11}]}>Phone: 402-867-5309</Text>
            <Text style={[{fontSize: 25}, {color: 'cyan'}, {fontWeight: 'medium'}, {textAlign: 'center'}, {padding: 11}]}>Email: Sfgreen@mail.mccneb.edu</Text>
            <Image source={require ('./blob.png')} style={{width: 92, height: 100, padding: 11}}/>
        </View>
    );
};

export default CardFront;