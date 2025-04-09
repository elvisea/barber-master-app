import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveLocalStorage(key: string, item: string) {
  try {
    await AsyncStorage.setItem(key, item);
  } catch (error) {
    console.error("Erro ao salvar no armazenamento local.", error);
  }
}

export async function getLocalStorage(key: string) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error("Erro ao buscar no armazenamento local.", error);
    return null;
  }
}

export async function removeLocalStorage(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Erro ao remover do armazenamento local.", error);
  }
}
