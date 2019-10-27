import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, ActivityIndicator,FlatList  } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements';
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      loading: true,
      articles: [],
      pageNumber: 1,
    }
  }
  componentDidMount= async () =>{
    await this.getNews()
  }
  filterForUniqueArticles = arr => {
    const cleaned = [];
    arr.forEach(itm => {
      let unique = true;
      cleaned.forEach(itm2 => {
        const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
        if (isEqual) unique = false;
      });
      if (unique) cleaned.push(itm);
    });
    return cleaned;
  };
  getNews = async () => {
    const response =await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=061606be10784a8b9e408e0fdb37180c'
    )
    const JsonData = await response.json()
    // const newArticleList = filterForUniqueArticles(
    //   articles.concat(jsonData.articles)
    // );
    // setArticles(newArticleList);
    await this.setState({
      articles: JsonData.articles,
      pageNumber: this.state.pageNumber + 1,
      loading: false,
    })
  }
  render(){
    const {articles} = this.state
    return (
      this.state.loading?
        <View style={styles.container}>
          <ActivityIndicator 
              size="large" 
              loading={this.state.loading}
          />
        </View>: 
        <View style={styles.container}>
            <View style={styles.row}>
              <Text style={styles.label}>Articles Count:</Text>
              <Text style={styles.info}>{this.state.articles.length}</Text>
            </View>
          <FlatList
            data={articles}
            renderItem={({item})=>{
              return (
              <Card title={item.title}  
            image={{uri: item.urlToImage}}>
            <View style={styles.row}>
              <Text style={styles.label}>Source</Text>
              <Text style={styles.info}>{item.source.name}</Text>
            </View>
            <Text style={{marginBottom: 10}}>{item.content}</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Published</Text>
              <Text style={styles.info}>
                {moment(item.publishedAt).format('LLL')}
              </Text>
            </View>
            <Button icon={<Icon />} title="Read more" backgroundColor="#03A9F4" />
            </Card>)
            }}
            onEndReached={this.getNews} 
            onEndReachedThreshold={1}
            keyExtractor={item => item.title}
          />
        </View>
      
    );
  
}}

const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink'
  },
  row: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'grey'
  }
});
