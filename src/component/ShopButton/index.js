import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



export default function ShopButton() {
 return (
   <View>
       <TouchableOpacity style={styles.btnContainer}>
           <Text style = {styles.title}>SHOP</Text>
       </TouchableOpacity>
   </View>
  );
}


const styles = StyleSheet.create({
container:{
    alignItems: 'center',
    justifyContent: 'center'
},
btnContainer:{
    width:'60%',
    height: 50,
    backgroundColor: '#17181a',
    borderRadius: 5,
    marginVertical: '5%',
    justifyContent:'center',
    alignItems: 'center',
    marginLeft:'25%'
},
title:{
    fontSize: 17,
    color: '#fff'
}

})