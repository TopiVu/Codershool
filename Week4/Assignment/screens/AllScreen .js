import React from 'react';
import { View, Text, StyleSheet,Alert, TouchableOpacity,TextInput,ScrollView } from 'react-native';
import {TODOS} from '../utils/data'

class TodoItem extends React.Component{
  onLongPress(todo){
    const prompt = `"${todo.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () =>this.props.onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };
  render(){
    const statusStyle = {
      backgroundColor: this.props.todo.status === 'Done' ? 'blue' : 'green'
    };
    return (
      <TouchableOpacity
        key={this.props.todo.body}
        style={[styles.todoItem, statusStyle]}
        onPress={() => this.props.onToggleTodo(this.props.todo.id)}
        onLongPress={() => this.onLongPress(this.props.todo)}
      >
        <Text style={styles.todoText}>
          {this.props.idx + 1}: {this.props.todo.body}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class AllScreen extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todoList:TODOS,
      todoBody:''
    }
  }
  onToggleTodo = id => {
    setTimeout(() => {
      this.props.navigation.navigate('SingleTodo', {
          updatedTodo: todo
      });
      }, 1000);
    const todo = this.state.todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = this.state.todoList.findIndex(todo => todo.id === id);
    this.state.todoList[foundIndex] = todo;
    const newTodoList = [...this.state.todoList];
    this.setState({
      todoList:newTodoList
    })
  };
  onDeleteTodo = id => {
    const newTodoList = this.state.todoList.filter(todo => todo.id !== id);
    this.setState({
      todoList:newTodoList
    })
  };
  onSubmitTodo = () => {
    const newTodo = {
      body: this.state.todoBody,
      status: 'Active',
      id: this.state.todoList.length + 1
    };
    const newTodoList = [...this.state.todoList, newTodo];
    this.setState({
      todoList:newTodoList,
      todoBody:'',
    })
    
  };
  render(){
    return (
          
          <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
            {this.state.todoList.map((todo, idx) => {
                  return (
                    <TodoItem
                      idx={idx}
                      todo={todo}
                      key={todo.body}
                      onToggleTodo={this.onToggleTodo}
                      onDeleteTodo={this.onDeleteTodo}
                    />
                  );
                })}
                <TextInput
                    value={this.state.todoBody}
                    style={styles.todoInput}
                    onChangeText={text => this.setState({todoBody:text})}
                  />
                  <TouchableOpacity style={styles.button} onPress={this.onSubmitTodo}>
                    <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
                  </ScrollView>
            </View>
    );
  }
}

AllScreen.navigationOptions = {
  title: 'All Todos'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  todoItem: {
    margin: 5,
    padding: 10,
    minHeight: 50,
    width: '95%',
    color: 'white',
    borderRadius: 5,
    flexWrap: 'wrap'
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  todoInput: {
    width: '95%',
    minHeight: 30,
    color: 'white',
    borderWidth: 1,
    marginTop: '20%',
    marginBottom: '5%',
    borderColor: 'grey'
  },
  inputContainer: {
    flex: 1,
    width: '90%',
    marginTop: 20,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  
});