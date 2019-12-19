import React, { Component } from 'react';
import {FlatList, Text, View} from 'react-native';
import {Card, Button, Icon, ActivityIndicator} from 'react-native-elements';

class Item extends Component {
    getImageUri(el) {
        if(el.media && el.media.type === 'img')
            return el.media.url;
        if (el.media && el.media.meta && el.media.meta.ogp && el.media.meta.ogp.image[0]) {
            return el.media.meta.ogp.image[0];
        }
        return null
//        return 'https://user-content.gitlab-static.net/ac4ef5bfb019f1f729fbf8b3293031ff4d39fccf/687474703a2f2f6e657874636c6f75642e77733331322e6e65742f696e6465782e7068702f732f3561653453476b73696d46334e794c2f70726576696577' ;
    }
    render() {
        let img = this.getImageUri(this.props.element)
        return (
            <Card
                title={this.props.element.title}
                image={img ? {uri:img} : null}
            >
                <Text style={{marginBottom: 10}}>{this.props.element.message}</Text>
                <Button
                    icon={<Icon name='chevron-right' color='#ffffff' />}
                    onPress={() => this.props.navigation.navigate('DetailPost', {itemId:this.props.element._id})}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Plus de détails' />
            </Card>
        );
    }
}
export default class HomeScreen extends Component {

    /**
     * Etat initial du model de donné utilisé par le composant
     * @type {{search: string, nbResults: number, posts: Array}}
     */
    state = {
        posts : [],
        search : '',
        nbResults : 0,
        limit : 10,
        page:0
    }

    /**
     * Constructeur du composant
     * @param props
     */
    constructor(props) {
        /**
         * Nous transférrons les props au parent
         */
        super(props);
        /**
         * Si il y a un parametre "search" dans la route d'appel du composant
         * celui-ci est directement inclu en tant que filtre dans la recherche
         */
        if(props.navigation.params && props.navigation.params.search) {
            this.state.search == props.navigation.params.search;
        }
    }

    /**
     * methode lancée dès le chargement du composant
     * => nous chargeons les posts
     */
    componentDidMount() {
        this.loadPosts.bind(this)() ;
    }

    /**
     * Chargement des posts
     */
    loadPosts() {
        let me = this;
        fetch(`http://reddit.it.ws312.net:3000/posts?search=${this.state.search}&fromApp=1`).then(r => r.json()).then(r => {
            me.setState({nbResults:r.nbResults, posts:r.result})
        });
    }

    /**
     * Methode permettant de gérer l'infinite scrolling
     */
    onScroll() {

    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <FlatList
                    keyExtractor={item => item._id}
                    data={this.state.posts}
                    renderItem={({ item }) => <Item element={item} navigation={this.props.navigation} />} />
            </View>
        );
    }
}
