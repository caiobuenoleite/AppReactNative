import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    Titulo: {
        fontSize: 26,
        textAlign: 'center',
        // backgroundColor: '#00e9e3',
        fontWeight: 'bold',
        color: '#666666',
        marginTop: 10
    },
    TituloSecundario: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#9ecae1',
        fontWeight: 'bold',
        color: '#666666',
        padding: 5,
        marginTop: 10,
    },
    TituloTerciario: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        padding: 5,
        marginTop: 10,
    },
    CheckBoxContainner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    CheckBoxText: {
        fontSize: 18,
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
})