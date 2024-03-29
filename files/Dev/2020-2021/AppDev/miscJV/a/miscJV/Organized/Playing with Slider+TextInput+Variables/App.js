import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';

import Slider           from '@react-native-community/slider';


const ViewsBlock = () => {
  return (
    <View             style={styles.view2}    flexDirection={'row'}           /* Views */  > 
      <View           style={styles.views}    backgroundColor={'#999'}        /* View 1 */ >
        <Text>
          View1
        </Text>
      </View>
      <View           style={styles.views}    backgroundColor={'#777'}        /* View 1 */ >
        <Text>
          View2
        </Text>
      </View>
      <View           style={styles.views}    backgroundColor={'#555'}        /* View 1 */ >
        <Text>
          View3
        </Text>
      </View>
      <View           style={styles.views}    backgroundColor={'#333'}        /* View 1 */ >
        <Text style={styles.WhiteText}>
          View4
        </Text>
      </View>
      <View           style={styles.views}    backgroundColor={'#111'}        /* View 1 */ >
        <Text       style={styles.WhiteText}>
          View5
        </Text>
      </View>
    </View>
  )
}

TextInput_test = () => {                                                           /* Main App Function */
  {
    {                       /* Variables */
      var [value3,        setValue3]            = React.useState(90);
      var [valueSlider,   setValueSlider]       = React.useState(90);
    }
    
    return (                                                                      /* Main App Screen */
      <View               style={styles.view1}                                    /* Everything */   >                                 
        <View             style={[styles.view2, {flex:0, flexDirection:'column'}]}              >        
          <View           style={[styles.view3, {flex:0, alignContent:'center'}]}                     >
            <Slider
              onValueChange={(valueSlider)=>SetSlider(valueSlider)}
              value={ valueSlider }

              step={1}
              margin={10}
              minimumValue={0}
              maximumValue={180}
              thumbTintColor        ={'black'}
              maximumTrackTintColor ={'black'}
              minimumTrackTintColor ={'black'}
            />
          </View>
         <View           style={[styles.view3, {flex:0, flexDirection:'row'}]}  >
            <View       style={[styles.view4,{flex:0, height:70, width:90}]}>
              <Text     style={styles.WhiteText}>
                v3:        {'\t\t'}{value3}            {'\n'}
                Vslider:  {'\t'}{valueSlider}  {'\n'}
              </Text>
            </View>
            <View     style={[styles.view4,{flex:1, height:70}]}     /* Send */ >
              <TouchableHighlight  style={styles.buttons}
                onPress={()=>setValueSlider(value3)}
              >
              <View>
                <Text     style={styles.WhiteText}>
                  Set Slide
                </Text>
              </View>
              </TouchableHighlight>
            </View>
            <View           style={[styles.view4,{flex:0, height:70, width:60}]}     /* Input */ >
              <TextInput    style={styles.inbox}
                editable
                maxLength={3}
                placeholder={'180'}
                placeholderTextColor={'white'}
                value={toString.value3}
                onChangeText={(text) => {setValue3(parseInt(text))}}
              />
            </View>
          </View>
        </View>
        <ViewsBlock/>
      </View>
    );
  }
}


const styles = StyleSheet.create({                                                /* Styles */

  view1: {                                                      /* All the Screen */
    backgroundColor:  '#999',
    borderColor: 'blue',
    borderWidth: 1,
    paddingTop: 10,
    margin: 5,
    flex: 1,
  },

  view2: {
    backgroundColor:  '#777',
    borderColor: 'blue',
    borderWidth: 1,
    margin: 10,
  },

  view3: {
    backgroundColor:  '#555',
    borderColor: 'blue',
    borderWidth: 1,
    margin: 10,
    flex: 1,
    // alignContent: 'center',
  },

  view4: {
    backgroundColor:  '#333',
    borderColor: 'blue',
    borderWidth: 1,
    margin: 10,
    flex: 1,
    // alignContent: 'center',
  },

  view5: {
    backgroundColor:  '#111',
    borderColor: 'blue',
    borderWidth: 1,
    margin: 10,
    flex: 1,
    // alignContent: 'center',
  },

  views: {
    alignContent: 'space-between',
    backgroundColor:  '#555',
    alignItems: 'center', 
    borderColor: 'blue',
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    height: 30,
    width: 40,
    flex: 1,
  },

  WhiteText: {
    color: '#fff',
  },

  changebox: {
    backgroundColor:  '#191919',
    borderColor: 'blue',
    borderRadius: 20,
    borderWidth: 1,
    margin: 10,
    height:60,
    width:60,
  },

  buttons: {
    backgroundColor:  '#121212',
    borderColor: 'blue',
    borderWidth: 1,
    margin: 5,
    alignContent: 'stretch',
    alignItems: 'center',

  },

  inbox: {
    backgroundColor: 'black',
    textAlign:'center',
    color:     'white',
    borderRadius: 10,
    margin: 10,
    height:40,
  },
});

export default TextInput_test;