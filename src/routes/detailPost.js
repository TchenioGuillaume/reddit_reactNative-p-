import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Card, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class DetailPost extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        post : {}
    }
    componentDidMount() {
        let me = this ;
        fetch(`http://reddit.it.ws312.net:3000/posts/${this.props.navigation.getParam('itemId')}?fromApp=1`).then(r => r.json()).then(r => {
            me.setState({post:r.result})
        });
    }
    getImageUri(el) {
        if(el.media && el.media.url)
            return el.media.url;
        if (el.media && el.media.meta && el.media.meta.ogp && el.media.meta.ogp.image[0])
            return el.meta.ogp.image[0];
        return 'https://user-content.gitlab-static.net/ac4ef5bfb019f1f729fbf8b3293031ff4d39fccf/687474703a2f2f6e657874636c6f75642e77733331322e6e65742f696e6465782e7068702f732f3561653453476b73696d46334e794c2f70726576696577' ;
    }

    render() {
        return (
            <>
                <Header containerStyle={{flex: 0, height:60, paddingTop:0}}
                        backgroundColor='#FF4300'
                        leftComponent={<Icon onPress={() => this.props.navigation.goBack(null)} name='arrow-left' size={25} color='black' style={{marginLeft: 10}}/>}
                        centerComponent={<Text style={{fontSize:25, fontWeight:'bold'}}>{this.state.post.title}</Text>}
                />
                <View style={{flex: 1, backgroundColor:'#FF430020'}}>
                    <Card
                        title={this.state.post.title}
                        image={{uri:this.getImageUri(this.state.post)}}
                    >
                        <Text style={{marginBottom: 10}}>{this.state.post.message}</Text>
                    </Card>
                </View>
            </>
        );
    }
}
