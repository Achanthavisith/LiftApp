import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

import { Colors, Sizes, Fonts } from "../styles/theme"

const VideoCard = ( {data} ) => {

    const video = data.snippet;

    return (
        <TouchableOpacity>
            <View style={styles.videoCard}>
                <Image 
                    style={{
                        overflow: 'hidden',
                        borderTopLeftRadius: Sizes.medium,
                        borderTopRightRadius: Sizes.medium,
                    }}
                    source={{
                        uri: data.snippet.thumbnails.high.url, height:200, flex:1 }} 
                />
                <Text style={styles.videoCardText}>
                    {video.title}
                </Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    videoCard: {
        marginBottom: Sizes.small,
        backgroundColor: Colors.almond,
        margin: Sizes.small,
        borderRadius: Sizes.medium,
        shadowColor: '#000000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        
    }, 

    videoCardText : {
        padding: Sizes.medium,
        color: Colors.blue,
        fontSize: Fonts.small,
    }
})

export default VideoCard