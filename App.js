import React from 'react';
import { View, WebView } from 'react-native';
import Header from './components/header/';
import AlbumList from './components/AlbumList/';
// import Swipeable from 'react-native-gesture-handler/Swipeable';

class App extends React.Component {
    // https://kmagiera.github.io/react-native-gesture-handler/docs/component-swipeable.html
    render() {
        return (
            <View>
                <Header title="Albums" />
                <AlbumList />
            </View>
        );

        // return (
        //     <Swipeable
        //         style={{ flex: 1 }}
        //         renderRightActions={(progress, dragX) => {
        //             return <Text>"I am here!"</Text>;
        //         }}
        //     >
        //         <Text>
        //             <View style={{ flex: 1 }}>
        //                 <View
        //                     style={{ flex: 1, backgroundColor: 'powderblue' }}
        //                 />
        //                 <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        //                 <View
        //                     style={{ flex: 3, backgroundColor: 'steelblue' }}
        //                 />
        //             </View>
        //         </Text>
        //     </Swipeable>
        // );

        //return <WebView source={{ uri: 'http://192.168.178.23:3000/' }} />;
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     hello: {
//         flex: 1,
//     },
// });

export default App;
