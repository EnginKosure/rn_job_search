import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

const Jobs = (props) => {
    const { selectedLanguage } = props.route.params;
    const [data, setData] = useState([]);

    const fetcData = async () => {
        const response = await Axios.get(
            `https://jobs.github.com/positions.json?search=${selectedLanguage.toLowercase()}`,
        );
        setData(response.data);
        // console.log(response);
    };
    useEffect(() => {
        fetcData();
    }, []);
    return (
        <SafeAreaView>
            <View>
                <Text>Jobs</Text>
                <Text>{selectedLanguage}</Text>
            </View>
        </SafeAreaView>
    );
};

export { Jobs };
