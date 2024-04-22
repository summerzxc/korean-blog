import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Modal,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Card({ title, description, image, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleComment = () => {
    console.log("Comment submitted:", comment);
    setComment("");
    setModalVisible(false);
  };

  const [liked, setLiked] = useState(false);
  const heartIconColor = liked ? "red" : "#ccc";

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleImageClick = () => {
    setFullscreenImage(image);
  };

  const handleCloseFullscreenImage = () => {
    setFullscreenImage(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("SingleCard")}>
        <TouchableOpacity onPress={handleImageClick}>
          <Image
            source={{ uri: image }}
            style={{ width: 280, height: 150, borderRadius: 10 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity onPress={handleLike}>
          <Icon name="heart" size={30} color={heartIconColor} />
        </TouchableOpacity>
        <Button title="Comment" onPress={() => setModalVisible(true)} />
        <Button
          title="View Post"
          onPress={() => navigation.navigate("SingleCard")}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add Comment</Text>
              <TextInput
                style={styles.commentInput}
                placeholder="Type your comment here..."
                onChangeText={(text) => setComment(text)}
                value={comment}
                multiline
              />
              <Button title="Submit" onPress={handleComment} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={!!fullscreenImage}
          onRequestClose={handleCloseFullscreenImage}
        >
          <TouchableOpacity
            style={styles.fullscreenImageContainer}
            onPress={handleCloseFullscreenImage}
          >
            <Image
              source={{ uri: fullscreenImage }}
              style={{ width: windowWidth, height: windowHeight }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Modal>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 20,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    width: 300,
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  commentInput: {
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  fullscreenImageContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
});
