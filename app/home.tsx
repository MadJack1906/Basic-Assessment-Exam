import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import useLogin from "@/hooks/useLogin";
import {useRouter} from "expo-router";
import {useState} from "react";
import axios from "axios";

export default function Home() {
  const [ipAddress, onChangeTextIpAddress] = useState("");
  const [errors, setErrors] = useState({});

  const fetchIpAddress = async () => {
    if (validateForm()) {
      await axios.get('https://ipinfo.io/120.29.110.126/geo',)
        .then((res) => {
          console.log(res.data)
        })
        .catch(errors => {
          console.log(errors)
        })
    }
  }

  const validateForm = () => {
    let errors = {}
    setErrors({})

    if (! ipAddress) {
      errors.ipAddress = "Ip Address is required"
      setErrors(errors);
    };

    return Object.keys(errors).length === 0;
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>
          Ip Address:
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeTextIpAddress}
          value={ipAddress}
          placeholder='Enter the IP Address here'/>

        {
          errors.ipAddress &&
          <Text style={styles.error}>
            { errors.ipAddress }
          </Text>
        }

        <Button title={'Fetch IP'}
          onPress={fetchIpAddress}/>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  inputContainer: {
    gap: 10,
  },

  inputWrapper: {
    gap: 5,
  },

  inputLabel: {
    fontWeight: "500",
    fontSize: 14,
  },

  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 7,
  },

  error: {
    fontSize: 12,
    color: '#ff0505',
  },
})
