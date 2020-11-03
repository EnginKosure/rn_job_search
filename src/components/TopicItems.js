import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { topicItem } from '../styles';

// {
//     id: 0,
//     name: 'Java',
//     color: 'fb5607',
// },
const TopicItems = ({ item, onSelect }) => {
    return (
        <TouchableOpacity
            style={[topicItem.container, { backgroundColor: `#${item.color}` }]}
            onPress={onSelect}>
            <Text style={topicItem.text}>{item.name}</Text>
        </TouchableOpacity>
    );
};

export { TopicItems };

const styles = StyleSheet.create({});
