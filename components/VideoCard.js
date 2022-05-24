import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'

import { Colors, Sizes, Fonts } from "../styles/theme"

const VideoCard = ( {data} ) => {

    const video = data.snippet;

    return (
        <View>
            <View style={styles.videoCard}>
                <YoutubePlayer 
                    height={225}
                    play={false}
                    videoId={data.id.videoId}
                    
                />
                <Text style={styles.videoCardText}>
                    {video.title}
                </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    videoCard: {
        marginBottom: Sizes.extraLarge,
        backgroundColor: Colors.almond,
        margin: Sizes.small,
        shadowColor: '#000000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }, 

    videoCardText : {
        padding: Sizes.extraLarge,
        color: Colors.blue,
        fontSize: 16,
    }
})

export default VideoCard