import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import TodayText from '../TodayText/TodayText';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../../../config.json';
const Icon = createIconSetFromFontello(fontelloConfig, 'bullets');

export default class ListItem extends React.Component {

    handleUpdateStatus = () => {
        this.props.onHandleUpdateStatus()
    };

    render() {
        let teaIcon = this.props.tea ? this.props.tea + '-' +  this.props.status : null;
        return(
            <View style={styles.listItem}>
                <TouchableOpacity onPress={this.handleUpdateStatus}>
                    <Icon name={teaIcon} style={(this.props.status === 'completed' || this.props.status === 'cancelled' || this.props.status === 'migrated') ? [styles.doneItemIcon, styles.itemIcon] : styles.itemIcon}/>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.rightMargin}>
                    <Icon name={this.props.category} style={(this.props.status === 'completed' || this.props.status === 'cancelled' || this.props.status === 'migrated') ? [styles.doneItemIcon, styles.itemIcon] : styles.itemIcon}/>
                </TouchableOpacity>
                <View>
                    <TodayText style={(this.props.status === 'completed' || this.props.status === 'cancelled' || this.props.status === 'migrated') ? [styles.doneItemTitle, styles.itemTitle] : styles.itemTitle}>{this.props.title}</TodayText>
                </View>
            </View>
        )
    }
}


const fontSize = 26;
const doneColor = '#aaa';

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 3,
        marginTop:1
    },
    itemIcon: {
        fontSize:fontSize,
        width: 36,
        marginRight: 5,
    },
    doneItemIcon: {
        color: doneColor
    },
    itemTitle: {
        fontSize:fontSize,
        flexWrap: 'wrap',
        width: 278,
        paddingRight:6,
        lineHeight: 30
    },
    doneItemTitle: {
        color: doneColor,
        textDecorationLine: 'line-through'
    }
});