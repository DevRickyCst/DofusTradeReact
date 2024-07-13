import axiosInstance from '../axiosConfig';  // Assurez-vous que le chemin est correct

export const getCharacterInfo = async (characterId) => {
    try {
        const response = await axiosInstance.post('/personnages/characterInfo', { id: characterId });
        const data = response.data;
        console.log(response.data)
        return(response.data)
    } catch (error) {
        console.error('Error fetching character info:', error);
    }
};

export const addCharacter = async () => {
    try {
      const response = await axiosInstance.post('/personnages/addCharacter');
      if (response.status === 201) {
        console.log('Created character ', response.data);
        return response.data;

      } else {
        console.error('Failed to add character:', response.data);
      }
    } catch (error) {
      console.error('Error adding character:', error);
    }
  };

  export const getUserCharacters = async () => {
    const response = await axiosInstance.get('personnages/test');
    return response.data.characters
  }