import { black } from '@jest/types/node_modules/chalk';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>  
      <StatusBar style="auto" />
      <Game/>
    </View>
  );
}

function Game() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);

    return (
      
      <View  style={styles.container}>
      <View style = {{flexDirection: 'row'}}> 
        
      <Pressable style= {{backgroundColor:'grey', padding: 20, borderColor: 'black'}} onPress={ () => setFirst(!first)}>
       
       <Text >1  </Text>
  
      </Pressable>

      <Pressable style= {{backgroundColor:'grey', padding: 20,borderColor: 'black'}}>
       
       <Text >1  </Text>
  
      </Pressable>

      <Pressable style= {{backgroundColor:'grey', padding: 20,borderColor: 'black'}}>
       
       <Text >1  </Text>
  
      </Pressable>

      </View>

      <View style = {{flexDirection: 'row'}}>
        
      <Pressable style= {{backgroundColor:'grey', padding: 20, borderColor: 'black'}}>
       
       <Text >1  </Text>
  
      </Pressable>

      <Pressable style= {{backgroundColor:'grey', padding: 20, borderColor: 'black' }}>
       
       <Text >1  </Text>
  
      </Pressable>

      <Pressable style= {{backgroundColor:'grey', padding: 20, borderColor: 'black'}}>
       
       <Text >1  </Text>
  
      </Pressable>

      </View>

      <View style = {{flexDirection: 'row'}}>
        
      <Pressable style= {{backgroundColor:'grey', padding: 20, borderColor: 'black'}}>
       
       <Text >1  </Text>
  
      </Pressable>

      <Pressable style= {{backgroundColor:'grey', padding: 20, borderColor: 'black'}}>
       
       <Text >1  </Text>
  
      </Pressable>

      <Pressable style= {{backgroundColor:'grey', padding: 20, borderColor: 'black'}}>
       
       <Text >1  </Text>
  
      </Pressable>

      </View>

      
      </View>
    
    
    
       
    );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
