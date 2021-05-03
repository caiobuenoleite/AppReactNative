import React, { useState, Component } from 'react'
import { SafeAreaView, Text, StyleSheet, ScrollView, Image, TouchableOpacity, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Estilo from '../styles/estilo'
import Highlighter from 'react-native-highlight-words';

// import Rating from './Rating'

export default () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
    const [toggleCheckBox4, setToggleCheckBox4] = useState(false)

    let [nome, setNome] = useState('')
    let valor = 0
    if (toggleCheckBox === false) {
        valor = valor
    } else {
        valor = valor + 1
    }
    if (toggleCheckBox1 === false) {
        valor = valor
    } else {
        valor = valor + 1
    }
    if (toggleCheckBox2 === false) {
        valor = valor
    } else {
        valor = valor + 1
    }
    if (toggleCheckBox3 === false) {
        valor = valor
    } else {
        valor = valor + 1
    }
    if (toggleCheckBox4 === false) {
        valor = valor
    } else {
        valor = valor + 1
    }

    let resultado = ''
    if (valor < 2) {
        resultado = 'Baixo Risco (Morte < 3%).'
    } else if (valor < 3) {
        resultado = 'Moderado risco (Morte ~ 9%).'
    } else {
        resultado = 'Alto risco (Morte 15 - 40%).'
    }

    // To set the default Star Selected
    const [defaultRating, setDefaultRating] = useState(2);
    // To set the max number of Stars
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    // Filled Star. You can also give the path from local
    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    // Empty Star. You can also give the path from local
    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {maxRating.map((item, key) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRating(item)}>
                            <Image
                                style={styles.starImageStyle}
                                source={
                                    item <= defaultRating
                                        ? { uri: starImageFilled }
                                        : { uri: starImageCorner }
                                }
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };


    return (
        <>
            <Text style={Estilo.Titulo}>Escore CURB-65 (Pneumonia)</Text>
            <CustomRatingBar />

            <ScrollView>

                <Text style={Estilo.TituloSecundario}>Marque os que se aplicarem:</Text>
                <SafeAreaView style={Estilo.CheckBoxContainner}>
                    <Text style={Estilo.CheckBoxText}>Confusão</Text>
                    <SafeAreaView style={Estilo.CheckBox}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            tintColors={{ true: '#3182bd' }}
                        />
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={Estilo.CheckBoxContainner}>
                    <Text style={Estilo.CheckBoxText}>Ureia &gt; 50 mg/dL </Text>
                    <SafeAreaView style={Estilo.CheckBox}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox2}
                            onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                            tintColors={{ true: '#00a5a1' }}
                        />
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={Estilo.CheckBoxContainner}>
                    <Text style={Estilo.CheckBoxText}>Respiração &ge; 30</Text>
                    <SafeAreaView style={Estilo.CheckBox}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox1}
                            onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                            tintColors={{ true: '#00e9e3' }}
                        />
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={Estilo.CheckBoxContainner}>
                    <Text style={Estilo.CheckBoxText}>Baixa pressão arterial (PAS &lt; 90 mmHg {"\n"}ou PAD &le; 60 mmHg) </Text>
                    <SafeAreaView style={Estilo.CheckBox}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox3}
                            onValueChange={(newValue) => setToggleCheckBox3(newValue)}
                            tintColors={{ true: '#ad2e24' }}
                        />
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={Estilo.CheckBoxContainner}>
                    <Text style={Estilo.CheckBoxText}>Idade &ge; 65 anos</Text>
                    <SafeAreaView style={Estilo.CheckBox}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox4}
                            onValueChange={(newValue) => setToggleCheckBox4(newValue)}
                            tintColors={{ true: '#666666' }}
                        />
                    </SafeAreaView>
                </SafeAreaView>
                <Text style={Estilo.TituloSecundario}>Resultado</Text>
                <SafeAreaView>
                    <Text style={[Estilo.CheckBoxText, { padding: 5 }]}>
                        <Text style={{ fontWeight: "bold" }}>Valor: </Text>
                        <Text>{`${valor}`} pontos</Text>
                    </Text>
                    <Text style={[Estilo.CheckBoxText, { padding: 5 }]}>
                        <Text style={{ fontWeight: "bold" }}>Significado: </Text>
                        <Text>{resultado}</Text>
                    </Text>
                </SafeAreaView>
                <Text style={Estilo.TituloSecundario}>Descrição</Text>
                <SafeAreaView>
                    <Text style={[Estilo.CheckBoxText, { padding: 10 }]}>
                        <Text style={[{ fontWeight: "bold" }]}>O que é? </Text>
                        <Text>{'\n'}Estima a gravidade de uma pneumonia adquirida em comunidade, no intuito de auxiliar a decisão de se tratar o paciente ambulatorialmente ou internado.</Text>
                    </Text>
                    <Text style={[Estilo.CheckBoxText, { padding: 10 }]}>
                        <Text style={[{ fontWeight: "bold" }]}>Indicações de uso: </Text>
                        <Text>{'\n'}Paciente com pneumonia adquirida em comunidade em ambiente de emergência.</Text>
                    </Text>
                    <Text style={[Estilo.CheckBoxText, { padding: 10 }]}>
                        <Text style={[{ fontWeight: "bold" }]}>Como interpretar:</Text>
                        <Text>{'\n'}Valores de 0 e 1 apresentam baixa letalidade e pode-se considerar o tratamento ambulatorial;</Text>
                        <Text>{'\n'}Valores de 2 ou mais indicam maior gravidade do quadro e o paciente provavelmente se beneficia de internação hospitalar. Em pacientes jovens e com boa condição de saúde com valores de 2 pontos, pode-se considerar o tratamento ambulatorial com revisão muito precoce;</Text>
                        <Text>{'\n'}A necessidade de terapia intensiva deve ser julgada caso a caso. Como apresenta parâmetros em comum com o qSOFA (apesar de valores discretamente diferentes), pacientes com altos valores de CURB-65 provavelmente se encontram sépticos e necessitam de uma abordagem mais agressiva, visando melhorar o prognóstico;</Text>
                    </Text>
                    <Text style={[Estilo.CheckBoxText, { padding: 10 }]}>
                        <Text style={[{ fontWeight: "bold" }]}>Limitações:</Text>
                        <Text>{'\n'}Não inclui diversos parâmetros relevantes na avaliação da necessidade de internação (questões sociais, incapacidade de autocuidado, incapacidade de alimentação, entre outros);
Inclui parâmetros que podem estar alterados em idosos por diversas outras condições (confusão mental, ureia);</Text>
                        <Text>{'\n'}Não inclui comorbidades em sua avaliação;</Text>
                        <Text>{'\n'}Não é tão fidedigno na avaliação da necessidade de internação em unidade de terapia intensiva.</Text>
                        <Text>{'\n'}Não se deve utilizar o CURB-65 como parâmetro absoluto. Diversas outras condições não incluídas no escore devem ser levadas em consideração para se decidir sobre a necessidade de internação hospitalar, como questões sociais, incapacidade de autocuidado, incapacidade de alimentação por via oral, entre outros.</Text>

                    </Text>
                    <Text style={Estilo.TituloSecundario}>Referências Bibliográficas</Text>
                    <SafeAreaView>
                        <Text style={[Estilo.CheckBoxText, { padding: 10 }]}>Lim W, van der Eerden MM, Laing R, et al. Defining community acquired pneumonia severity on presentation to hospital: an international derivation and validation study. Thorax. 2003;58:377-382;</Text>
                        <Text style={[Estilo.CheckBoxText, { padding: 10 }]}>Corrêa RA, Costa NA, Lundgren F, et all. Recomendações para o manejo a pneumonia adquirida na comunidade 2018. J Bras Pneumol, 2018;44(5):405-424.{'\n\n'}</Text>
                    </SafeAreaView>
                </SafeAreaView>
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        textAlign: 'center',
    },
    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        color: '#000',
        marginTop: 15,
    },
    textStyleSmall: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
        marginTop: 15,
    },
    buttonStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#8ad24e',
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    starImageStyle: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
    },
});