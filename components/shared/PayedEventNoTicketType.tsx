import AddIcon from "@/assets/icons/AddIcon";
import TicketIcon from "@/assets/icons/TicketIcon";
import { Text, View } from "react-native";
import Ripple from "react-native-material-ripple";

const PayedEventNoTicketType = ({
  addTicketAction,
}: {
  addTicketAction: () => void;
}) => {
  return (
    <View className="items-center gap-4 flex-grow justify-center mb-32">
      <TicketIcon />
      <Text className="font-cabin-bold text-lg text-primary">
        Ajoutez les tickets à votre évenement
      </Text>
      <Text className="font-nunito">
        Vous n&apos;avez ajouter aucun ticket pour le moment.
      </Text>

      <Ripple
        className="flex-row gap-2 border p-2 rounded-full border-primary overflow-hidden my-4"
        onPress={addTicketAction}
      >
        <Text className="text-primary">Ajouter</Text>
        <AddIcon color="#2ECC71" />
      </Ripple>
    </View>
  );
};

export default PayedEventNoTicketType;
