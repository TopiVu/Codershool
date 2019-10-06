import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ScrollView,ImageBackground } from 'react-native';
import { Ionicons, MaterialCommunityIcons,AntDesign,Feather } from '@expo/vector-icons';

export default class Home extends React.Component {
    render (){
        return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/1.jpg')} style={styles.heading}>
            {/* <AntDesign style={{flex: 0.85,paddingTop: 30,}}  name='arrowleft' size={35}/>
            <AntDesign style={{flex: 0.15 ,paddingTop: 30,}} name='qrcode' size={35}/> */}
        </ImageBackground>
      <View style={styles.viewinfo}>
          <View style={styles.info}>
              {/* intro */} 
              <View style={{flex:0.9}}>
                <Text style={{fontSize:30,fontWeight:'bold'}}>Osaka Castle</Text>
                <Text><Feather name='map-pin' size={20}/> Tokio, Japan</Text>
              </View>
              <View style={{backgroundColor:'blue',width:60,alignItems: 'center',borderTopLeftRadius:0,borderRadius:20}}>
                <TouchableOpacity><AntDesign name='clouddownloado' size={50} color='white' /></TouchableOpacity>
              </View>
          </View>
          <View style={styles.content}>
              {/* content */}
              <ScrollView>
                <Text style={{paddingBottom:30}}>The castle is one of Japan's most famous landmarks and it played a major role 
                  in the unification of Japan during the sixteenth century of the Azuchi-Momoyama period.</Text>
                <View style={{flexDirection:'row'}}>
                  <View style={styles.txt_tag}><Text>#japanese</Text></View>
                  <View style={styles.txt_tag}><Text>#travel</Text></View>
                </View>
              </ScrollView>
          </View>
          <View style={styles.f_info}>
              {/* footer info  */}
              <View style={{alignItems:'center',flexDirection:'row',borderBottomWidth: 0.5,borderBottomColor: '#D8D8D8',}}>
                  <AntDesign style={{paddingRight: 30,paddingLeft:10}} name ='hearto'  onPress={() => alert("Liked")} size={30}/>
                  <MaterialCommunityIcons style={{paddingRight: '60%'}}  name='comment-outline' size={30} />
                  <MaterialCommunityIcons name='bookmark-outline'  size={30} />
              </View>
          </View>
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
        )}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

  heading:  {
    flex:0.5,
    borderRadius:15,
    width: '100%', 
    height: '100%',
    flexDirection:'row',
  },
  viewinfo:{
    flex:0.425,
    paddingLeft:20,
  },
  info:{
    flex:0.35,
    flexDirection:'row',
    alignItems: 'center',
  },
  content:{
    flex:0.55,
  },
  f_info:{
    flex:0.2,
  },
  txt_tag:{
    backgroundColor:'#BDBDBD',
    marginRight:10,
    borderRadius:5
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
