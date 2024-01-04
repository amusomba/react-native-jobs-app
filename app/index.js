import { useState } from "react";
import { View,ScrollView,SafeAreaView } from "react-native";
import { Stack,useRouter } from "expo-router";
import { COLORS,icons,images,SIZES } from "../constants";
import Nearbyjobs from "../components/home/nearby/Nearbyjobs";
import Welcome from "../components/home/welcome/Welcome";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Popularjobs from '../components/home/popular/Popularjobs';

const Home =()=>{

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    return (<SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen options={{headerStyle:{backgroundColor:COLORS.lightWhite},headerShadowVisible:false,
        headerLeft: ()=>(<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>),
        headerRight: ()=>(<ScreenHeaderBtn iconUrl={icons.heartOutline} dimension="60%"/>),headerTitle:"Jobs App"
        
        }}>HomeNEW</Stack.Screen>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1,padding:SIZES.medium}}>
            <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
                <Popularjobs/>
                <Nearbyjobs/>
            </View>
        </ScrollView>
    </SafeAreaView>)
}

export default Home;