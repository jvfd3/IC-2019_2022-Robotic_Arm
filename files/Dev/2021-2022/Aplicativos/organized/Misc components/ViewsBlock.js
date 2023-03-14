
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

App = () => {
    const styles = StyleSheet.create({
        whiteText: {
          color: '#fff',
        },
        container: {
          backgroundColor:  '#777',
          flexDirection:    'row',
          borderColor:      'blue',
          borderWidth:   1,
          margin:       10,
          height:       50,
          flex:          0,
        },
        views: {
          alignContent:     'space-between',
          backgroundColor:  '#555',
          alignItems:       'center', 
          borderColor:      'blue',
          borderRadius:  5,
          borderWidth:   1,
          margin:       10,
          height:       30,
          width:        40,
          flex:          1,
        },
    
    })

    const ViewBlock = (props) => {
      return (
          <View     style={[styles.views,props.viewStyle]} >
            <Text   style={props.textColor}> View {props.text} </Text>
          </View>
      )
    }
    
    return (
        <View style={styles.container}>
          <ViewBlock text='1' viewStyle={{backgroundColor: '#999'}}/>
          <ViewBlock text='2' viewStyle={{backgroundColor: '#777'}}/>
          <ViewBlock text='3' viewStyle={{backgroundColor: '#555'}}/>
          <ViewBlock text='4' viewStyle={{backgroundColor: '#333'}} textColor={styles.whiteText}/>
          <ViewBlock text='5' viewStyle={{backgroundColor: '#111'}} textColor={styles.whiteText}/>
        </View>
    )
}

export default App;