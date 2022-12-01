import React from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text, Image } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomSearchBox from '../../components/CustomSearchBox';
import constants from '../../constants';

const DashboardScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader
                headerTxt={constants.string.dashboard}
                messageCount={'99'} />

            <CustomSearchBox />
            
            <FlatList
                showsVerticalScrollIndicator={false}
                data={userData}
                numColumns={2}
                ListEmptyComponent={() => {
                    return (
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={constants.images.noDataImg} />
                        </View>
                    );
                }}
                renderItem={({ item }) => (
                    <View style={styles.itemView}>
                        <Image style={styles.locationImg}
                            source={item.locationImg} />
                        <Text style={styles.locationName}>{item.locationName}</Text>
                        <Text style={{
                            ...styles.locationName, fontSize: 16,
                            color: constants.colors.colorPrimary
                        }}>
                            {item.locationActiveUser}</Text>
                    </View>
                )} />

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: constants.colors.white,
        flex: 1
    },
    locationImg: {
        width: constants.vw(177.5),
        height: constants.vh(160),
        borderRadius: constants.vw(5),
        resizeMode: 'contain'
    },
    itemView: {
        padding: constants.vw(5),
        alignSelf: 'center',
        justifyContent: 'center'
    },
    locationName: {
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: '400',
        color: constants.colors.navy
    }
});

const userData = [
    {
        locationImg: constants.images.restaurantImg_1,
        locationName: 'House of Common',
        locationActiveUser: '25 Users Live',
        locationId: 'L@1',
    },
    {
        locationImg: constants.images.restaurantImg_2,
        locationName: 'Social Hangout',
        locationActiveUser: '20 Users Live',
        locationId: 'L@2',
    },
    {
        locationImg: constants.images.restaurantImg_3,
        locationName: 'Brew Works',
        locationActiveUser: '50 Users Live',
        locationId: 'L@3',
    },
    {
        locationImg: constants.images.restaurantImg_4,
        locationName: 'Social Hangout',
        locationActiveUser: '57 Users Live',
        locationId: 'L@4',
    },
    {
        locationImg: constants.images.restaurantImg_3,
        locationName: 'Sherlock Brew',
        locationActiveUser: '30 Users Live',
        locationId: 'L@5',
    },
    {
        locationImg: constants.images.restaurantImg_2,
        locationName: 'Sandal Suit',
        locationActiveUser: '12 Users Live',
        locationId: 'L@6',
    },
    {
        locationImg: constants.images.restaurantImg_1,
        locationName: 'Lemon Tree',
        locationActiveUser: '15 Users Live',
        locationId: 'L@7',
    },
    {
        locationImg: constants.images.restaurantImg_4,
        locationName: 'House of Common',
        locationActiveUser: '55 Users Live',
        locationId: 'L@8',
    },
    {
        locationImg: constants.images.restaurantImg_2,
        locationName: 'House of Food',
        locationActiveUser: '70 Users Live',
        locationId: 'L@9',
    },
    {
        locationImg: constants.images.restaurantImg_1,
        locationName: 'House of Common',
        locationActiveUser: '05 Users Live',
        locationId: 'L@10',
    }
]

export default DashboardScreen;