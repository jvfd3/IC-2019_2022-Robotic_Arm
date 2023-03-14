//import { StatusBar } from 'expo-status-bar';
//import { render } from 'react-dom';
//import Slider from 'react-native-slider';

import React, { Component } from 'react';
import {
  //  TouchableWithoutFeedback,
  //  SafeAreaView,
  //  FlatList,
  StyleSheet,
  Text,
  Alert,
  View,
  Button,
  Image,
  TextInput,
  useState,
} from 'react-native';


const styles = StyleSheet.create({

  view1: {    //geralzão
    flex: 1,                      //se for zero, só aparece tela até onde tem componente.
    backgroundColor:  'pink',
    // alignItems:       'center',         //alinhar no topo na esquerda
    // justifyContent:   'center',
  },

  view2: {
    flex: 1,                      //se for zero, só aparece tela até onde tem componente.
    backgroundColor:  'black',
    // alignItems:       'center',         //alinhar no topo na esquerda
    // justifyContent:   'center',
    fontWeight:       'bold',
  },

  view3: {
    flex: 1,                      //se for zero, só aparece tela até onde tem componente.
    backgroundColor:  'steelblue',
    // alignItems:       'center',         //alinhar no topo na esquerda
    // justifyContent:   'center',
    fontWeight:       'bold',
  },

  text1: {
    color:        'red',
    fontWeight:   'bold',
    fontSize:     32,
  },

  text2: {
    color:      'white',
    fontWeight: 'bold',
    fontSize:   32,
  },

  textSlider: {
    color:      'white',
    fontWeight: 'bold',
    fontSize:   20,
  },

  mudacor: {
    // backgroundColor:    value,
    borderColor:  'cyan',
    borderWidth:  1,
  },

});

const Aobas = (a) => {/* Esse b é um "prop", é tipo uma variável sendo passada como parâmetro */
  // Esse b vai ser usado junto com o nome da variável(?) que é passada para gerar um resultado.
  return (
    <View style={{ alignItems: 'center' }}>
      {/* <Text style={styles.text2}>Aoba! {b.n}</Text> */}
      <Text style={a.s}>Aoba! {a.n}</Text>
    </View>

  )
}

const botao = () => {
  return (
    <Button
      onPress={apertaBotao1}
      // onPress={apertaBotao2}
      // onPress={() => alert('apertou 3')}
      // onPress={() => Alert.alert('apertou 4')}
      title="botao1"
      color="#333"
    />
    //  <Text style={styles.text2} >Aobas 2
    // </Text>
  )
}

const apertaBotao1 = () => {
  //function apertaBotao() {
  if (true) {
    alert('apertou 1')
  }
}

const apertaBotao2 = () => {
  //function apertaBotao() {
  Alert.alert('apertou 2')
}

const Botao = (b) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Button
        onPress={apertaBotao2}
        // onPress={apertaBotao2}
        // onPress={() => alert('apertou 3')}
        // onPress={() => Alert.alert('apertou 4')}
        title="Botão 2"
        color="#333"
      />
      {/* {botao}  */}
    </View>
  )
}

const Imagem = () => {

  let pic = {
    uri: 'https://static.tvtropes.org/pmwiki/pub/images/tumblr_inline_nmi862xtpz1qj7p6f_500_2.png'
  }
  // let pic = {'./assets/icon.png'}
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={pic}
        // source= {require({pic})}
        //  source={require('./assets/icon.png')}
        //  source={{uri:'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'}}
        //  source={require('./a.png')}
        //  source={require('./src/a.png')}
        //  source={require('./src/images/a.png')}
        //  source={require('./assets/a.png')}

        style={{ width: 100, height: 100 }}
      />
    </View>
  )
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

    setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000
    );
  }

  render() {
    return (
      <Text style={styles.text1}>
        Hora: {this.state.date.toLocaleTimeString()}
      </Text>
    );
  }
}

const Insere1 = () => {
  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          color: "#fff",
        }}
        defaultValue="texto"
      />
    </View>
  );
}

const MudaCor = (props) => {
  return (
    <TextInput
      multiline
      numberOfLines={4}
      // onChangeText={text => onChangeText(text)}
      // value={value}
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
      // placeholder='aoba'
    />
  );
}

class pizza extends Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
  render () {
    return (
      <View style={{ padding: 40 }}>
        <TextInput
          
          style={{ height: 50, fontSize: 30 }}
          placeholder="Digite aqui para traduzir!"
          onChangeText={(text) => this.setState({text})}
          
        />
          <Text style={{ padding: 10, fontSize: 50 }}>
            {this.state.text.split(' ').map((word) => (word) ? 'pizza':'')}
          </Text>
      </View>
    );
  }
}

const MudaTexto = (props) => {
  return (
    <TextInput
      multiline
      numberOfLines={4}
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={8}
    />
  );
}

App = () => {
  {
    const [value, onChangeText] = React.useState('');
  //  const [value, a] = React.useState('');
    const value1='1';
    const [value2,setValue2] = React.useState('2');
    return (
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Aobas s={styles.text1} n='1' />
          <Aobas s={styles.text2} n='2' /> 
          <Botao   />
          <Imagem  />
          <Clock   /> 
          <Insere1 /> 

          <View style={{   //MUDA COR
            backgroundColor: value,
            borderColor: 'gray',
            borderWidth: 1,}}>
          
            <MudaCor
              // clearTextOnFocus
              onChangeText={text => onChangeText(text)}
              valor={value}
              color='white'
              //onPress={()=>clearTextOnFocus}
            />
          </View>
        </View>
        {/* Bloco com sliders */}
        <View style={styles.view3} >
          {/* primeiro conjunto de Sliders */}
          <View flex={1} backgroundColor={'#191919'} flexDirection='column'>
            {/* mudança de texto */}
            <View flex={2} fontSize={16} alignItems={'center'} height={30} width={300} borderColor={'white'} borderWidth={1}>
              
              <Text style={styles.textSlider}>
                v0:{value} v1:{value1}  v2:{value2}
              </Text>
            </View>
            {/* Slider */}
            <View flex={8} alignItems={'center'} height={30} borderColor={'blue'} borderWidth={1}>
             
              {/* 
              <MudaTexto
                // clearTextOnFocus
                width={150}
                onChangeText={(text) => onChangeText(text)}
                value={value1}
                color='white'
                backgroundColor={'black'}
                //onPress={()=>clearTextOnFocus}
              /> */}

            <TextInput
              multiline
              numberOfLines={2}
              editable
              maxLength={16}
              width={300}
              setValue2={text => setValue2(text)}
              value={value2}
              color='white'
              backgroundColor={'black'}
            />
              
            </View>


          </View>
        </View>
      </View>
    );
  }
}

export default App;