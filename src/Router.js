import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Introduction, Jobs, SavedJobs } from './pages';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Intro" component={Introduction} />
                <Stack.Screen name="Jobs" component={Jobs} />
                <Stack.Screen name="SavedJobsPage" component={SavedJobs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
