import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Shoes';

export default function Footer() {
 return (
   <View>
       <Text styel={styles.title}>
            THE LATEST AND GREATEST
       </Text>
        <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    <Shoes img={require('../../assets/1.png')} cost='190,90'>
                        Nike Epic React
                    </Shoes>
                </View>
                <View>
                    <Shoes img={require('../../assets/2.png')} cost='290,90'>
                        Nike Marathon
                    </Shoes>
                </View>
                <View>
                    <Shoes img={require('../../assets/3.png')} cost='390,90'>
                        Nike Air Shock
                    </Shoes>
                </View>
            </ScrollView>

        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical:'2%',
        paddingHorizontal:'2%',
    }

})