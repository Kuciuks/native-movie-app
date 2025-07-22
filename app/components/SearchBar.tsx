import { icons } from '@/constants/icons'
import getMovies from '@/services/api'
import React from 'react'
import { Image, TextInput, View } from 'react-native'

interface Props {
  placeholder: string,
  onPress?: () => void
}




const SearchBar = ({placeholder, onPress} : Props) => {
  const [value, setValue] = React.useState('')

  const getDetails = () => {
    getMovies(value)
  }

  return (
      <View className='flex-row items-center rounded-full px-5 py-4'>
          <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#ab8bff'/>
          <TextInput 
            onSubmitEditing={getDetails}
            onPress={onPress}
            placeholder={placeholder}
            value={value} // current value typed by the user
            onChangeText={setValue} //updating the state of movie name
            placeholderTextColor={'#a8b5db'}
            className='flex-1 ml-2 text-white'
          />
      </View>
  )
}

export default SearchBar