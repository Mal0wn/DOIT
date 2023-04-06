import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {C_Purple_Underline, C_White} from '../lib/colors';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordStepHeader = ({step, location}) => {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <View style={styles.back}>
        <TouchableOpacity
          style={
            location === 'ForgotPasswordS4' ? styles.none : styles.backButton
          }
          onPress={() => {
            onGoBack();
          }}>
          <Text style={styles.backButtonFont}>Annuler</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.line} />
        <View style={[styles.circle, step >= 1 && styles.active]}>
          <Text style={[styles.number, step >= 1 && styles.active]}>1</Text>
        </View>
        <View style={[styles.circle, step >= 2 && styles.active]}>
          <Text style={[styles.number, step >= 2 && styles.active]}>2</Text>
        </View>
        <View style={[styles.circle, step >= 3 && styles.active]}>
          <Text style={[styles.number, step >= 3 && styles.active]}>3</Text>
        </View>
        <View style={[styles.circle, step >= 4 && styles.active]}>
          <Text style={[styles.number, step >= 4 && styles.active]}>4</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  none: {
    display: 'none',
  },
  backButtonFont: {
    color: C_White,
  },
  backButton: {
    backgroundColor: C_Purple_Underline,
    borderColor: C_Purple_Underline,
    borderRadius: 8,
    borderWidth: 1,
    width: 70,
    height: 30,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  back: {
    height: 130,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    position: 'relative',
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: C_Purple_Underline,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: C_White,
  },
  active: {
    backgroundColor: C_Purple_Underline,
    borderColor: C_Purple_Underline,
    color: C_White,
  },
  number: {
    fontSize: 18,
    color: C_Purple_Underline,
  },
  line: {
    borderRadius: 8,
    position: 'absolute',
    height: 2,
    backgroundColor: C_Purple_Underline,
    top: 18,
    width: '100%',
    zIndex: -1,
  },
});

ForgotPasswordStepHeader.prototype = {
  step: PropTypes.number,
  location: PropTypes.string,
};

export default ForgotPasswordStepHeader;
