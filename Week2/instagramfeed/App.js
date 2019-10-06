import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView,TouchableOpacity} from 'react-native';
import { Feather,AntDesign,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';

const feedData = [
  {
    id: 1,
    name: 'CoderSchool',
    image: require('./assets/1.jpg'),
    likeCount: 128,
    avatar: require('./assets/avatar.png')
  },
  {
    id: 2,
    name: 'Whoami',
    image: require('./assets/2.jpg'),
    likeCount: 20,
    avatar: require('./assets/avatar.png')
  },
  {
    id: 3,
    name: 'Topi',
    image: require('./assets/3.jpg'),
    likeCount: 540,
    avatar: require('./assets/avatar.png')
  },
  {
    id: 4,
    name: 'Cenzy',
    image: require('./assets/4.jpg'),
    likeCount: 54,
    avatar: require('./assets/avatar.png')
  },
  {
    id: 5,
    name: 'Master',
    image: require('./assets/5.jpg'),
    likeCount: 750,
    avatar: require('./assets/avatar.png')
  },
  {
    id: 6,
    name: 'Nodejs',
    image: require('./assets/6.jpg'),
    likeCount: 220,
    avatar: require('./assets/avatar.png')
  },
  {
    id: 7,
    name: 'Reactjs',
    image: require('./assets/7.jpg'),
    likeCount: 999,
    avatar: require('./assets/avatar.png')
  },
  
];
export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Image
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
              }}
              style={styles.image}
              resizeMode="contain"
            />
            <Feather style={styles.btn_inbox} name='inbox' size={30}/>
        </View>
        <View style={styles.content}>
            <ScrollView>
              {
                feedData.map(function(item){
                  return(
                    <View key={item.id}>
                      <View style={{height:50,flexDirection:'row'}}>
                          {/* View post and avatar */}
                          <View style={{justifyContent:'center',alignContent:'center'}}>
                              <Image style={{height:50, width:50,borderRadius: 20,}} 
                                    source={item.avatar} />
                          </View>
                          <View style={{justifyContent:'center'}}>
                              <Text  style={{fontSize:25, paddingLeft:20}}>{item.name}</Text>
                          </View>
    
                      </View>
                      <View style={{height:300}}>
                          {/* View img post */}
                          <Image style={{height:300,width:null}}
                                    source={item.image} />
                      </View>
                      <View style={{height:100}}>
                          {/* footer content */}
                          <View style={{height:50,alignItems:'center',flexDirection:'row',borderBottomWidth: 0.5,borderBottomColor: '#D8D8D8',}}>
                              <AntDesign style={{paddingRight: 30,paddingLeft:10}} name ='hearto'  onPress={() => alert("Liked")} size={30}/>
                              <MaterialCommunityIcons style={{paddingRight: 30}}  name='comment-outline' size={30} />
                              <Feather style={{paddingRight: 30}}  name='share' onPress={() => alert("Share")} size={30} />
                          </View>
                          <View style={{height:50, flexDirection:'row',alignItems:'center',borderBottomWidth: 0.5,borderBottomColor: '#D8D8D8',}}>
                              <AntDesign style={{paddingRight: 20,paddingLeft:10}} name ='heart' size={30}/>
                              <Text>{item.likeCount} likes</Text>
                          </View>
                      </View>
                    </View>
                  )
                })
              }
            </ScrollView>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity>
              <MaterialCommunityIcons name='home' size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='md-add-circle-outline' size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name='account' size={35} color="black" />
            </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:25,
  },
  content:{
    flex:0.875,
  },
  footer:{
    flex:0.075,
    flexDirection:'row',
    backgroundColor:'#E0F8F7',
    justifyContent:'space-around',
    alignItems:'center',
    borderRadius:10
  },
  header:{
    flex:0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#FAFAFA'
  },
  image:{
    flex: 1,
    width: null,
    height: 44,
    marginLeft:30,
  },
  btn_inbox:{
    marginRight:10,
  },

});
