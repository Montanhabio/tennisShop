import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Dots from '../../component/Dots';
import ShopButton from '../../component/ShopButton';
import Footer from '../../component/Footer';
import SizeButton from '../../component/SizeButton';



export default function DetailJordan({ navigation }) {

    navigation.setOptions({
        headerTitle: 'Nike Air Jordan'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/detailJordan.png')}
                style={styles.image}
                resizeMode='cover'
            />
            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 24 }]}>U$ 389,90</Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize: 30 }]}>Nike Air Jordan</Text>
                </View>
                <View style={styles.dotContainer}>
                    <Dots color='#2379f4' />
                    <Dots color='#fb6e53' />
                    <Dots color='#ddd' />
                    <Dots color='#000' />
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeButton bgColor='#17181a' color='#FFF'>39</SizeButton>
                        <SizeButton>40</SizeButton>
                        <SizeButton>41</SizeButton>
                        <SizeButton>42</SizeButton>
                    </ScrollView>
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        Nike Air Day
                    </Text>
                    <Text style={styles.textContent}>
                        Nike Air Day shoes bring comfort and cushioning to your daily life
                    </Text>
                    <Text style={styles.textList}>
                        - Category: Damping
                    </Text>
                    <Text style={styles.textList}>
                        - Material: Mesh
                    </Text>
                </View>

                <ShopButton style={{alignItems:'center'}}/>

                <View style={styles.line} />
                <Footer />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    image: {
        width: '100%'
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '5%'
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle: {
        fontSize: 22,
        lineHeight: 25,
        marginVertical: '2%'
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
    },
    line:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%'
    }
})
