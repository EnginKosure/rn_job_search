import { StyleSheet, Dimensions } from 'react-native';

export const topicItem = StyleSheet.create({
    container: {
        padding: 12,
        margin: 7,
        borderRadius: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white',
    },
});

export const introduction = StyleSheet.create({
    banner: {
        height: Dimensions.get('window').height / 3,
    },
    bannerText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
});
