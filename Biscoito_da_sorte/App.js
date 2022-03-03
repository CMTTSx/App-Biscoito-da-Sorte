import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
  } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.', 
      'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.', 
      'O riso é a menor distância entre duas pessoas.', 
      'No meio da dificuldade encontra-se a oportunidade.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
      'Imagine uma nova história para sua vida e acredite nela.',
      'O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.',
      'Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo.',
      'Você precisa fazer aquilo que pensa que não é capaz de fazer.',
      'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.',
      'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.',
      'Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.'

    ];

  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png')
    });
  
  }


  render(){
    return(
      <View style={styles.container} > 
      
      <Image
        source={this.state.img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>  

      </View>    
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25 
  },
  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;