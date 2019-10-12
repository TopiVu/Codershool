import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';

const CHOICES = [
  {
    name: 'rock',
    uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
  },
  {
    name: 'paper',
    uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
  },
  {
    name: 'scissors',
    uri:
      'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
  }
];
class Button extends React.Component{
  render(){
    return(
      <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.props.onPress(this.props.name)}
        >
          <Text style={styles.buttonText}>
            {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
          </Text>
        </TouchableOpacity>
    )
  }
}
const ChoiceCard = ({ player, choice: { uri, name } }) => {
  const title = name && name.charAt(0).toUpperCase() + name.slice(1);
  
  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.choiceDescription}>{player}</Text>
      <Image source={{uri}} resizeMode="contain" style={styles.choiceImage} />
      <Text style={styles.choiceCardTitle}>{title}</Text>
    </View>
  );
};

export default class App extends React.Component{
    constructor(props){
      super();
      this.state = {
        gamePrompt :'Choose your weapon',
        userChoice : '',
        computerChoice: '',
        total : 0,
        Win :0,
        Lose:0,
        Tied:0 ,
        PWin:0,
        PLose:0,
        PTied:0,
      }
    }
    onPress = async playerChoice => {
      const [result, compChoice] =await this.getRoundOutcome(playerChoice);
      const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
      const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);
      this.setState({
        total:this.state.total+1,
        gamePrompt:result,
        userChoice:newUserChoice,
        computerChoice:newComputerChoice,
      })
      
    };
    getRoundOutcome(userChoice){
      const computerChoice = this.randomComputerChoice().name;
      let result;
     
      if (userChoice === 'rock') {
        result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
      }
      if (userChoice === 'paper') {
        result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
      }
      if (userChoice === 'scissors') {
        result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
      }
      if (userChoice === computerChoice){
        this.setState({
          Tied:this.state.Tied+1,
          PTied: Math.floor(((this.state.Tied+1)/(this.state.total+1))*100),
          PWin: Math.floor(((this.state.Win)/(this.state.total+1))*100),
          PLose: Math.floor(((this.state.Lose)/(this.state.total+1))*100),
        })
        result = 'Tie game!';
      }
      if (result==='Victory!')
      {
        this.setState({
          Win:this.state.Win+1,
          PTied: Math.floor(((this.state.Tied)/(this.state.total+1))*100),
          PWin: Math.floor(((this.state.Win+1)/(this.state.total+1))*100),
          PLose: Math.floor(((this.state.Lose)/(this.state.total+1))*100),
        })
      }
     
      if (result==='Defeat!') 
      {
        this.setState({
            Lose:this.state.Lose+1,
            PTied: Math.floor(((this.state.Tied)/(this.state.total+1))*100),
            PWin: Math.floor(((this.state.Win)/(this.state.total+1))*100),
            PLose: Math.floor(((this.state.Lose+1)/(this.state.total+1))*100),
        })
      }
      return [result, computerChoice];
    };
    randomComputerChoice = () =>CHOICES[Math.floor(Math.random() * CHOICES.length)];
    getResultColor = () => {
      if (this.state.gamePrompt === 'Victory!') return 'green';
      if (this.state.gamePrompt === 'Defeat!') return 'red';
      return null;
    };
    render(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize:35,color:this.getResultColor()}}>{this.state.gamePrompt}</Text>
        <View style={styles.choicesContainer}>
         <ChoiceCard
            player="Player"
            choice={this.state.userChoice}
          />
          <Text>vs</Text>
          <ChoiceCard
            player="Computer"
            choice={this.state.computerChoice} 
          />
          </View>
          <View style={styles.viewtotal}>
              <Text style={styles.txt_total}>Played Total: {this.state.total}</Text>
              <Text style={styles.txt_total}>Win-Lose-Tied: {this.state.Win}-{this.state.Lose}-{this.state.Tied}</Text>
              <Text style={styles.txt_total}>Percentages Win -Lose -Tied : {this.state.PWin}%-{this.state.PLose}%-{this.state.PTied}%</Text>
          </View>
        {
          CHOICES.map(choice => {
            return <Button key={choice.name} name={choice.name}  onPress={this.onPress} />;
          })
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#640D14',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 50,
    shadowRadius: 5,
    paddingBottom: 50,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },
  choiceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  choiceDescription: {
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  choiceCardTitle: {
    fontSize: 30,
    color: '#250902'
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  },
  viewtotal:{
    flex:0.4,
    width:'100%',
    fontSize:40
  },
  txt_total:{
    fontSize:19,
    fontWeight: 'bold',
    paddingLeft:5,
  }
});