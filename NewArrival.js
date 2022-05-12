import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Header } from '../components'
import Product from '../components/molecules/Product'

const Home = ({navigation}) => {
    
  return (
    <View>
      <Header title="NEW ARRIVALS" onBack={() => (navigation.goBack())} />
       <View style={styles.products}>
       <ScrollView showsVerticalScrollIndicator={false} >
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')} activeOpacity={0.5}>
            <Product harga={490000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={570000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={180000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={250000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={380000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={160000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={240000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={500000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={310000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={220000} />
            </TouchableOpacity>
        </ScrollView>
        </View> 
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    navBtn: {
        borderRadius: 30,
        width: 100,
    },
    products: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
