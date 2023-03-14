// testes slider
import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  useState,
} from 'react-native';

import Slider           from '@react-native-community/slider';

class pizza extends Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
  render () {
    return (
      <View>
        <TextInput
          onChangeText={(text) => this.setState({text})}
        />
        <Text>
          {this.state.text.split(' ').map((word) => (word) ? 'pizza':'')}
        </Text>
      </View>
    );
  }
}

TextInput_test = () => {                                                           /* Main App Function */
  {
    { var [value0, setValue0]     = React.useState('black');                       /* Variables */
      var [value1, setValue1]     = React.useState('1');
      var [value2, setValue2]     = React.useState('2');
      var [value3, setValue3]     = React.useState(90);
      var [empty , setEmpty]      = React.useState('Empty');
      var [blut  , setBlut]       = React.useState('blut');
      var [valueSlider  , setValueSlider]       = React.useState(90);
    }


    {                                                                               /* Functions*/
      state = {
        value:90
      }

      handleSliderChange = (value) => {
        this.setState({value: parseInt(value)})
      }

      Reset = () => {                                                               /* Reset Function */
        setValue0 ('black');
        setValue1 ('1');
        setValue2 ('2');
        setValue3 ('3');
        setEmpty  ('Empty');
        setBlut   ('blut');
        setValueSlider (90);
      }
  
      Send = () => {                                                                /* Send Function */
        setValue0('Sent');
        setValue1('Sent');
        setValue2('Sent');
        setValue3('Sent');
        setEmpty ('Sent');
        setBlut  ('Sent');
        setValueSlider  (180);
      }
  
      SetSlider = (slide) => {                                                                /* SetSlider Function */
        setValueSlider(parseInt(slide));
      }
      
      Clear = () => {                                                               /* Clear Function */
        setValue0('');
        setValue1('');
        setValue2('');
        setValue3('');
        setEmpty ('');
        setBlut  ('');
        setValueSlider (0);
      }
    }

    return (                                                                      /* Main App Screen */
      <View               style={styles.view1}                                    /* Everything */   >                                 
        <View             style={styles.view2}    flexDirection={'row'}           /* Change Color */ >        
          <View           style={styles.changebox}  backgroundColor= {value0}     /* Box MUDACOR */ />
          <View           style={styles.view3}      flex={1}                      /* Text MUDACOR */>
            <TextInput    style={styles.inbox}
              editable
              maxLength={40}
              placeholder={'💠'}
              placeholderTextColor="#fff"
              onChangeText={(text) => setValue0(text)}
            />
          </View>
        </View>
        <View             style={styles.view2}    flex={0}  height={250}                      /* Middle */ >
          <View           style={styles.view3}    flex={0} flexDirection={'row'}  /* Botões e Input */ >
            <View                                 flex={1}                        /* Reset */ >
              <TouchableHighlight  style={styles.buttons}  onPress={Reset} >
                <View  >
                  <Text     style={styles.textoBranco} >
                    Reset
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View                                 flex={1}                        /* Clear */ >
              <TouchableHighlight  style={styles.buttons}  onPress={Clear} >
                <View  >
                  <Text     style={styles.textoBranco} >
                    Clear
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View                                 flex={1}                        /* Send */ >
              <TouchableHighlight  style={styles.buttons}  onPress={Send} >
                <View  >
                  <Text     style={styles.textoBranco} >
                    Send
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View                                 flex={2}                        /* Input */ >
              <TextInput   style={styles.inbox}
                editable
                maxLength={40}
                placeholder={'💠'}
                placeholderTextColor={'white'}
                onChangeText={text => setValue1(text)}  
              />
            </View>
          </View>
          <View           style={styles.view3}    flex={1} flexDirection={'row'}  /* Variables */ >
            <View         style={styles.view4}>
              <Text         style={styles.textoBranco} >
                v0:         {"\n"}
                v1:         {"\n"}
                v2:         {"\n"}
                v3:         {"\n"}
                empty:      {"\n"}
                blut:       {"\n"}
                {/* valueSlider: */}
              </Text>
            </View>
            <View         style={styles.view4}>
              <Text       style={styles.textoBranco} >
                {value0}    {"\n"}
                {value1}    {"\n"}
                {value2}    {"\n"}
                {value3}    {"\n"}
                {empty}     {"\n"}
                {blut}      {"\n"}
                {/* {valueSlider}  */}
              </Text>
            </View>
          </View>
        </View>
        <View             style={styles.view2}  flex={1}   flexDirection={'column'}           /*  */ >        
          <View           style={styles.view3}      flex={0} height={40}                     /*  */>
            <Slider
              // onValueChange={(value3)=>setValueSlider(value3)}
              step={1}
              thumbTintColor={'black'}
              maximumTrackTintColor={'black'}
              maximumValue={180}
              // value={value3}
              minimumValue={0}
              minimumTrackTintColor={'black'}
            />
          </View>
          <View           style={styles.view3}      flex={1} flexDirection={'row'} >
            <View           style={styles.view4}      flex={1}  width={10}>
              <Text         style={styles.textoBranco}>
                v3: {value3} {'\n'}
                Vslider: {valueSlider}
              </Text>
            </View>
            <View              style={styles.view4}                   flex={1}                        /* Send */ >
              <TouchableHighlight  style={styles.buttons} /* onPress={Send} */ onPress={(value3)=>SetSlider(value3)}  >
                <View /* style={styles.view5} */ >
                  <Text     style={styles.textoBranco} >
                    Set
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View     style={styles.view4} flex={0}  width={60}                                                /* Input */ >
              <TextInput   style={styles.inbox}
                editable
                maxLength={3}
                // placeholder={value3}
                placeholderTextColor={'white'}
                // onChangeText={text => setValue3(text)}  
              />
            </View>
          </View>
        </View>
        
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
            <Text style={{color: 'white'}}>
              View4
            </Text>
          </View>
          <View           style={styles.views}    backgroundColor={'#111'}        /* View 1 */ >
            <Text       style={styles.textoBranco}>
              View5
            </Text>
          </View>
        </View>
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

  textoBranco: {
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