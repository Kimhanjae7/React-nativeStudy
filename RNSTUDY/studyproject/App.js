import React from 'react'
import {
    View
} from 'react-native'

const App = () => {
    return (
        <View style={{flex:1}}>
            <View style = {{flex:6,flexDirection:'row'}}>   
                <View style={{flex:2}}>
                    <View style={{flex:3,flexDirection:'row'}}>
                        <View style={{flex:1.5}}>
                            <View style ={{flex:2,backgroundColor:'white'}}></View>
                            <View style ={{flex:1,backgroundColor:'blue'}}></View>
                        </View>
                        <View style={{flex:1,backgroundColor:"black"}}></View>
                    </View>
                    <View style={{flex:2,backgroundColor:"white"}}></View>
                </View>
                <View style={{flex:1}}>
                    <View style={{flex:1,backgroundColor:"yellow"}}></View>
                    <View style={{flex:2,backgroundColor:"blue"}}></View>
                </View>
            </View>
            <View style={{flex:1,backgroundColor:"red"}}></View>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1,backgroundColor:"yellow"}}></View>
                <View style={{flex:2,backgroundColor:"black"}}></View>
            </View>
        </View>
    )
}

export default App