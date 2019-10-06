import React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity,ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons,AntDesign,Foundation } from '@expo/vector-icons';
import { Asset } from 'expo-asset';


  const ImageData = [
    { id: 1, imgSource: require('./../assets/1.jpg') },
    { id: 2, imgSource: require('./../assets/2.jpg') },
    { id: 3, imgSource: require('./../assets/3.jpg') },
    { id: 4, imgSource: require('./../assets/4.jpg') },
    { id: 5, imgSource: require('./../assets/5.jpg') },
    { id: 6, imgSource: require('./../assets/6.jpg') },
    { id: 7, imgSource: require('./../assets/7.jpg') },
    { id: 8, imgSource: require('./../assets/8.jpg') }
  ];
  const centerImgData = Math.floor(ImageData.length / 2);
  export default class Home extends React.Component {
    render (){
      return (
    <View style={styles.container}>
      {/* <View style={styles.heading}>
        <AntDesign style={{flex: 0.85,}}  name='arrowleft' size={35}/>
        <AntDesign style={{flex: 0.15 ,}} name='qrcode' size={35}/>
      </View> */}
      <View style={styles.info}>
        <View style={styles.avatarper}>
           <Image source={require('./../assets/avatar.png')}
                  style={styles.avatar}
           />
        </View>
        <View style={styles.profile}> 
            <Text style={{fontWeight:'bold',fontSize:30}}>Nguyen Van A</Text>
            <Text>Devoloper</Text>
            <View style={styles.viewbtn}>
                <TouchableOpacity >
                  <View style={[styles.btn,styles.follow]}>
                    <Text>Follow</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={[styles.btn,styles.send]}>
                    <Ionicons onPress={()=>this.props.navigation.navigate('Details')} name="md-send" size={28} color="white" />
                  </View>
                </TouchableOpacity>
            </View>
        </View>
      </View>
      <View style={styles.survay}>
        <View style={styles.viewsurvay}>
            <Text style={{fontSize:20,fontWeight:'bold',}}>210</Text>
            <Text>Photos</Text>
        </View>
        <View style={styles.viewsurvay}>
            <Text style={{fontSize:20,fontWeight:'bold',}}>15310</Text>
            <Text>Follower</Text>
        </View>
        <View style={styles.viewsurvay}>
            <Text style={{fontSize:20,fontWeight:'bold',}}>1321</Text>
            <Text>Following</Text>
        </View>
      </View>
      <View style={styles.content}>
      <ScrollView contentContainerStyle={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
      }}>
        <View style={styles.viewcontent}>
        {ImageData.slice(0,centerImgData).map(function(item){
          return(
            <Image key={item.id} source={item.imgSource}
            style={styles.image}/>
          )
        })} 
        </View>
        <View style={styles.viewcontent}>
        {ImageData.slice(centerImgData).map(function(item){
          return(
            <Image key={item.id} source={item.imgSource}
            style={styles.image}/>
          )
        })}
        </View>
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
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  heading:  {
    flex:0.05,
    paddingLeft:10,
    flexDirection:'row',
  },
  info:{
    flex:0.25,
    flexDirection:'row'
  },

  avatarper:{
    flex:0.4,
    alignItems:'center',
    justifyContent:'center'
  },
  avatar:{
    width:120,
    height:120,
    borderRadius:30,
  },
  profile:{
    flex:0.6,
    justifyContent:'center'
    
  },
  viewbtn:{
    flexDirection:'row',
    paddingTop:10,
  },
  btn:{
    height:30,
    justifyContent:'center',
    alignItems:'center',
  },
  follow:{
    borderRadius:15,
    width:100,
    backgroundColor:'#2E64FE',
  },
  send:{
    marginLeft:10,
    borderRadius:20,
    width:60,
    backgroundColor:'#2EFEF7',
  },
  survay:{
    flex:0.075,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  viewsurvay:{
    justifyContent:'center',
    alignItems:'center'
  },
  content:{
    flex:0.6,
  },
  viewcontent:{
    flexDirection: 'column',
    
  },
  image:{
    height:180,
    width:180,
    borderRadius:15,
    margin: 3 
    
  },
  footer:{
    flex:0.075,
    flexDirection:'row',
    backgroundColor:'#E0F8F7',
    justifyContent:'space-around',
    alignItems:'center',
    borderRadius:10

  }
});
