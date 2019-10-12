import React,{ useState, useEffect }  from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity  } from 'react-native';
const ConversionTypeButton = props => {
  const backgroundColor =
    props.fromCurrency === props.from && props.toCurrency === props.to
      ? 'lightblue'
      : null;
  const buttonStyle = { backgroundColor: backgroundColor };
  
  const fromFlag = props.from === 'usd' ? '🇺🇲' : '🇻🇳';
  const toFlag = props.to === 'usd' ? '🇺🇲' : '🇻🇳';

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={() => props.setConversionCurrencies(props.from, props.to)}
    >
      <Text style={styles.buttonText}>
        {fromFlag} to {toFlag}
      </Text>
    </TouchableOpacity>
  );
};
const FormattedCurrency = props => {
  const format = props.type === 'usd' ? 'us' : 'vn';
  const currency = props.type === 'usd' ? 'USD' : 'VND';
  const flag = props.type === 'usd' ? '🇺🇸' : '🇻🇳';

  const formatter = new Intl.NumberFormat(format, {
    currency,
    style: 'currency'
  });

  return (
    <Text style={styles.currencyText}>
      {formatter.format(props.value)} {flag}
    </Text>
  );
};
export default function App() {
  const [currentCurrencyValue, setFromCurrencyValue] = useState(0);
  const [convertedCurrencyValue, setConvertedValue] = useState(0);
  const [toCurrency, setToCurrency] = useState('usd');
  const [fromCurrency, setFromCurrency] = useState('vnd');
  const [placeholderTxt,setpTxt] = useState('100,000,000 VND')
  
  const convertCurrency = () => {
    let value;
    if (fromCurrency === 'vnd') {
      value = currentCurrencyValue / 23000;
    } else {
      value = 23000 * currentCurrencyValue;
    }
    setConvertedValue(value);
  };
  useEffect(convertCurrency);
  const setConversionCurrencies = (from, to) => {
    if (to ==='vnd')
        setpTxt('100,000,000 VND')
    else setpTxt ('1000,000 USD')
    setToCurrency(from);
    setFromCurrency(to);
  };
  return (
    <View style={styles.container}>
      <Text>Please enter the value of the currency you want to convert</Text>
      <TextInput
        autoFocus
        selectionColor="red"
        keyboardType='number-pad'
        placeholder={placeholderTxt}
        textAlign="center"
        onChangeText={setFromCurrencyValue}
        style={{
          height: 60,
          padding: 5,
          width: 300,
          fontSize: 35,
          borderWidth: 1,
          borderColor: 'lightblue'
        }}
      />
      <ConversionTypeButton
        to={toCurrency}
        from={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
      />
      <View>
      <Text>Current currency:</Text>
      <Text style={styles.currencyText}>
        <FormattedCurrency
            type={fromCurrency}
            value={currentCurrencyValue}/>
      </Text>
      <Text>Conversion currenecy:</Text>
      <Text style={styles.currencyText}>
        <FormattedCurrency
          type={toCurrency}
          value={convertedCurrencyValue}/>
      </Text>
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  button: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center'
  },
  currencyText: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold'
  },
});
