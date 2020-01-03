import React from 'react'
import { View, Text, Button } from 'react-native'

class Home extends React.Component<{ navigation: any }> {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
}

export default Home;
