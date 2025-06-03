import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Application from 'expo-application';
import * as device from 'expo-device';
import React from "react";

export const getDeviceId = async () => {
    return `[${device.osName ?? ''}${device.modelName ? ";" + device.modelName : ""}${device.osVersion ? ";" + device.osVersion : ""}${device.osBuildId ? ";" + device.osBuildId : ""}${device.deviceName ? ";" + device.deviceName : ""}][${Application.applicationId ? ":" + Application.applicationId : ''}]`;  // Generate a new UUID
};

export const useInitialAppData = () => {
  const [initialAppData, setInitialAppData] = React.useState(null as any)
  React.useEffect(() => {
    getInitialAppData().then((data) => {
      setInitialAppData(data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return initialAppData
}

const getInitialAppData = async () => {
  const store = await AsyncStorage.getItem("store")
  const storeJson = store ? JSON.parse(store) : undefined
  const data = {
    ...storeJson,
    config: {
      ...storeJson?.config,
      deviceId: (storeJson?.config?.deviceId) ?? await getDeviceId()
    },
  }
  return data
}
