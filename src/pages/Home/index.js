import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import { useNavigation} from '@react-navigation/native'

import Shoes from "../../component/Shoes";

export default function Home() {

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/banner.png')}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Shop Time Tennis</Text>
                    <Text style={styles.textprop}>.</Text>
                    <Text style={styles.textprop}>MALE</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <MaterialIcons
                            name='filter-list'
                            size={24}
                            color='#000'
                        />

                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}>
            </View>    
            <ScrollView>
                <Text style={styles.text}>NEW FOR FALL</Text>
                
                <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                   <Shoes img={require('../../assets/1.png')} cost='U$149,90' onClick={()=> navigation.navigate('Detail')}> 
                    Nike Air Max Day
                   </Shoes>
                   <Shoes img={require('../../assets/2.png')} cost='U$169,90' onClick={()=> navigation.navigate('DetailJordan')}> 
                    Nike Air Jordan
                   </Shoes>
                </View>

                <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                   <Shoes img={require('../../assets/3.png')} cost='U$249,90' onClick={()=> alert('Clik on me')}> 
                    Nike Air Run
                   </Shoes>
                   <Shoes img={require('../../assets/4.png')} cost='U$269,90' onClick={()=> alert('Clik on me')}> 
                    Nike Air Fitness
                   </Shoes>
                </View>

                <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                   <Shoes img={require('../../assets/5.png')} cost='U$349,90' onClick={()=> alert('Clik on me')}> 
                    Nike Air CrossFit
                   </Shoes>
                   <Shoes img={require('../../assets/6.png')} cost='U$369,90' onClick={()=> alert('Clik on me')}> 
                    Nike Air Marathon
                   </Shoes>
                </View>
                

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 8,
    },
    image: {
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%',
        color: "#000"
    },
    textprop: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%',
        color: '#CECECF'
    },
    line:{
        borderBottomColor: '#CECECF',
        borderBottomWidth:2,
    }


})

