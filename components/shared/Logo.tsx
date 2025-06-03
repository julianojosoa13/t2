import { Image } from "expo-image"

interface ILogo{
    size?:number
}
export function Logo({size=1.2}:ILogo){
    return(
        <Image
            source={require("../../assets/images/logo.png")}
            style={{
                height:12*size,
                width:50*size
            }}
        />
    )
}