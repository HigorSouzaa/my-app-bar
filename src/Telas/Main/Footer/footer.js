import { StyleSheet,View, Image, Text, TouchableOpacity, Linking} from 'react-native';

export default function Footer() {
    const abrirInstagram = () => {
        const urlInstagram = 'https://www.instagram.com/ohigao019/';
        Linking.openURL(urlInstagram); 
    };

    const abrirLinkdin = () => {
        const urlLinkdin = 'https://www.linkedin.com/in/higor-souza-555967201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';
        Linking.openURL(urlLinkdin); 
    };

    const abrirGitHub = () => {
        const urlGitHub = 'https://github.com/HigorSouzaa';
        Linking.openURL(urlGitHub); 
    };

  return (
    <View style={styles.container_footer}>
        <Text style={{fontSize: 18, color: 'white', marginBottom: 40, marginTop: 20}}>by Higor Souza</Text>
        <View style={styles.conteiner_links}>
            <TouchableOpacity onPress={abrirInstagram}>
                <Image
                    source={require('../../../../assets/instagram1.png')}
                ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={abrirLinkdin}>
                <Image
                    source={require('../../../../assets/linkedin1.png')}
                ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={abrirGitHub}>
                <Image
                    source={require('../../../../assets/github1.png')}
                ></Image>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_footer: {
    display: 'flex',
    backgroundColor: '#BA690B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  conteiner_links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'black',
    width: 300,
    bottom: 25

  }
});
