import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Image,
} from 'react-native';

interface LikeItem {
  id: string;
  name: string;
  username: string;
  avatar: string;
  following: boolean;
}

const likesData: LikeItem[] = [
  {
    id: '1',
    name: 'Alias Grace',
    username: '@alias_grace01',
    avatar: 'https://s3-alpha-sig.figma.com/img/de15/019e/2f678183c1a42f1ec3f6dd70e820e8eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNMFh5pt0V8E9jxm7DwnlAh14flRpRyYjIbOE1lubVCafY9Y0LG2PUHz4iBas-6dHJk6Svz4ieGs-9F0RA-ZyspWeCyeExKXC1hFw7OLIlTDCF1p3ZJsMboYttkP2Lr97G48LPcXn9U8lGRZLJPy5uoRvWx01nYi58vbdx14cUeLuQKGI9pQHUgD4aQAAdx8O8dnGhMKvRz~eer7MtYTUNZQYtXUQ28JmyJTIj8cLXGLo9AemaDslDg9lbJlt~j6HhmZ9cfmEO8amNOQHDyyfwWf5izyQIwzyB7xmpn4RYRtVa4vDjkodFpPbkApJICp4lwmg1usAmDLD5DisrXrpQ__',
    following: true,
  },
  {
    id: '2',
    name: 'Alias Grace',
    username: '@alias_grace01',
    avatar: 'https://s3-alpha-sig.figma.com/img/de15/019e/2f678183c1a42f1ec3f6dd70e820e8eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNMFh5pt0V8E9jxm7DwnlAh14flRpRyYjIbOE1lubVCafY9Y0LG2PUHz4iBas-6dHJk6Svz4ieGs-9F0RA-ZyspWeCyeExKXC1hFw7OLIlTDCF1p3ZJsMboYttkP2Lr97G48LPcXn9U8lGRZLJPy5uoRvWx01nYi58vbdx14cUeLuQKGI9pQHUgD4aQAAdx8O8dnGhMKvRz~eer7MtYTUNZQYtXUQ28JmyJTIj8cLXGLo9AemaDslDg9lbJlt~j6HhmZ9cfmEO8amNOQHDyyfwWf5izyQIwzyB7xmpn4RYRtVa4vDjkodFpPbkApJICp4lwmg1usAmDLD5DisrXrpQ__',
    following: true,
  },
  {
    id: '3',
    name: 'Alias Grace',
    username: '@alias_grace01',
    avatar: 'https://s3-alpha-sig.figma.com/img/de15/019e/2f678183c1a42f1ec3f6dd70e820e8eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNMFh5pt0V8E9jxm7DwnlAh14flRpRyYjIbOE1lubVCafY9Y0LG2PUHz4iBas-6dHJk6Svz4ieGs-9F0RA-ZyspWeCyeExKXC1hFw7OLIlTDCF1p3ZJsMboYttkP2Lr97G48LPcXn9U8lGRZLJPy5uoRvWx01nYi58vbdx14cUeLuQKGI9pQHUgD4aQAAdx8O8dnGhMKvRz~eer7MtYTUNZQYtXUQ28JmyJTIj8cLXGLo9AemaDslDg9lbJlt~j6HhmZ9cfmEO8amNOQHDyyfwWf5izyQIwzyB7xmpn4RYRtVa4vDjkodFpPbkApJICp4lwmg1usAmDLD5DisrXrpQ__',
    following: true,
  },
  {
    id: '4',
    name: 'Alias Grace',
    username: '@alias_grace01',
    avatar: 'https://s3-alpha-sig.figma.com/img/de15/019e/2f678183c1a42f1ec3f6dd70e820e8eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNMFh5pt0V8E9jxm7DwnlAh14flRpRyYjIbOE1lubVCafY9Y0LG2PUHz4iBas-6dHJk6Svz4ieGs-9F0RA-ZyspWeCyeExKXC1hFw7OLIlTDCF1p3ZJsMboYttkP2Lr97G48LPcXn9U8lGRZLJPy5uoRvWx01nYi58vbdx14cUeLuQKGI9pQHUgD4aQAAdx8O8dnGhMKvRz~eer7MtYTUNZQYtXUQ28JmyJTIj8cLXGLo9AemaDslDg9lbJlt~j6HhmZ9cfmEO8amNOQHDyyfwWf5izyQIwzyB7xmpn4RYRtVa4vDjkodFpPbkApJICp4lwmg1usAmDLD5DisrXrpQ__',
    following: true,
  },
  {
    id: '5',
    name: 'Alias Grace',
    username: '@alias_grace01',
    avatar: 'https://s3-alpha-sig.figma.com/img/de15/019e/2f678183c1a42f1ec3f6dd70e820e8eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNMFh5pt0V8E9jxm7DwnlAh14flRpRyYjIbOE1lubVCafY9Y0LG2PUHz4iBas-6dHJk6Svz4ieGs-9F0RA-ZyspWeCyeExKXC1hFw7OLIlTDCF1p3ZJsMboYttkP2Lr97G48LPcXn9U8lGRZLJPy5uoRvWx01nYi58vbdx14cUeLuQKGI9pQHUgD4aQAAdx8O8dnGhMKvRz~eer7MtYTUNZQYtXUQ28JmyJTIj8cLXGLo9AemaDslDg9lbJlt~j6HhmZ9cfmEO8amNOQHDyyfwWf5izyQIwzyB7xmpn4RYRtVa4vDjkodFpPbkApJICp4lwmg1usAmDLD5DisrXrpQ__',
    following: false,
  },
  {
    id: '6',
    name: 'Alias Grace',
    username: '@alias_grace01',
    avatar: 'https://s3-alpha-sig.figma.com/img/de15/019e/2f678183c1a42f1ec3f6dd70e820e8eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNMFh5pt0V8E9jxm7DwnlAh14flRpRyYjIbOE1lubVCafY9Y0LG2PUHz4iBas-6dHJk6Svz4ieGs-9F0RA-ZyspWeCyeExKXC1hFw7OLIlTDCF1p3ZJsMboYttkP2Lr97G48LPcXn9U8lGRZLJPy5uoRvWx01nYi58vbdx14cUeLuQKGI9pQHUgD4aQAAdx8O8dnGhMKvRz~eer7MtYTUNZQYtXUQ28JmyJTIj8cLXGLo9AemaDslDg9lbJlt~j6HhmZ9cfmEO8amNOQHDyyfwWf5izyQIwzyB7xmpn4RYRtVa4vDjkodFpPbkApJICp4lwmg1usAmDLD5DisrXrpQ__',
    following: false,
  },
  {
    id: '7',
    name: 'Alias Grace',
    username: '@alias_grace01',
    avatar: 'https://s3-alpha-sig.figma.com/img/de15/019e/2f678183c1a42f1ec3f6dd70e820e8eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNMFh5pt0V8E9jxm7DwnlAh14flRpRyYjIbOE1lubVCafY9Y0LG2PUHz4iBas-6dHJk6Svz4ieGs-9F0RA-ZyspWeCyeExKXC1hFw7OLIlTDCF1p3ZJsMboYttkP2Lr97G48LPcXn9U8lGRZLJPy5uoRvWx01nYi58vbdx14cUeLuQKGI9pQHUgD4aQAAdx8O8dnGhMKvRz~eer7MtYTUNZQYtXUQ28JmyJTIj8cLXGLo9AemaDslDg9lbJlt~j6HhmZ9cfmEO8amNOQHDyyfwWf5izyQIwzyB7xmpn4RYRtVa4vDjkodFpPbkApJICp4lwmg1usAmDLD5DisrXrpQ__',
    following: false,
  },
  {
    id: '8',
    name: 'Alias Grace',
    username: '@alias_grace01',
    avatar: 'https://s3-alpha-sig.figma.com/img/de15/019e/2f678183c1a42f1ec3f6dd70e820e8eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNMFh5pt0V8E9jxm7DwnlAh14flRpRyYjIbOE1lubVCafY9Y0LG2PUHz4iBas-6dHJk6Svz4ieGs-9F0RA-ZyspWeCyeExKXC1hFw7OLIlTDCF1p3ZJsMboYttkP2Lr97G48LPcXn9U8lGRZLJPy5uoRvWx01nYi58vbdx14cUeLuQKGI9pQHUgD4aQAAdx8O8dnGhMKvRz~eer7MtYTUNZQYtXUQ28JmyJTIj8cLXGLo9AemaDslDg9lbJlt~j6HhmZ9cfmEO8amNOQHDyyfwWf5izyQIwzyB7xmpn4RYRtVa4vDjkodFpPbkApJICp4lwmg1usAmDLD5DisrXrpQ__',
    following: false,
  },
  {
    id: '9',
    name: 'Alias Grace',
    username: '@alias_grace01',
    avatar: 'https://s3-alpha-sig.figma.com/img/de15/019e/2f678183c1a42f1ec3f6dd70e820e8eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNMFh5pt0V8E9jxm7DwnlAh14flRpRyYjIbOE1lubVCafY9Y0LG2PUHz4iBas-6dHJk6Svz4ieGs-9F0RA-ZyspWeCyeExKXC1hFw7OLIlTDCF1p3ZJsMboYttkP2Lr97G48LPcXn9U8lGRZLJPy5uoRvWx01nYi58vbdx14cUeLuQKGI9pQHUgD4aQAAdx8O8dnGhMKvRz~eer7MtYTUNZQYtXUQ28JmyJTIj8cLXGLo9AemaDslDg9lbJlt~j6HhmZ9cfmEO8amNOQHDyyfwWf5izyQIwzyB7xmpn4RYRtVa4vDjkodFpPbkApJICp4lwmg1usAmDLD5DisrXrpQ__',
    following: false,
  },
  {
    id: '10',
    name: 'Alias Grace',
    username: '@alias_grace01',
    avatar: 'https://s3-alpha-sig.figma.com/img/de15/019e/2f678183c1a42f1ec3f6dd70e820e8eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNMFh5pt0V8E9jxm7DwnlAh14flRpRyYjIbOE1lubVCafY9Y0LG2PUHz4iBas-6dHJk6Svz4ieGs-9F0RA-ZyspWeCyeExKXC1hFw7OLIlTDCF1p3ZJsMboYttkP2Lr97G48LPcXn9U8lGRZLJPy5uoRvWx01nYi58vbdx14cUeLuQKGI9pQHUgD4aQAAdx8O8dnGhMKvRz~eer7MtYTUNZQYtXUQ28JmyJTIj8cLXGLo9AemaDslDg9lbJlt~j6HhmZ9cfmEO8amNOQHDyyfwWf5izyQIwzyB7xmpn4RYRtVa4vDjkodFpPbkApJICp4lwmg1usAmDLD5DisrXrpQ__',
    following: false,
  },
];

const LikesModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderLikeItem = ({ item }: { item: LikeItem }) => (
    <View style={styles.likeItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[
            styles.followButton,
            item.following ? styles.following : styles.notFollowing,
          ]}
        >
          <Text style={styles.followButtonText}>
            {item.following ? 'Following' : 'Follow'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text>📞</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text>💬</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeButton} onPress={toggleModal}>
        <Text style={styles.likeButtonText}>click here to view like model</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Likes</Text>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.closeButton}>✖</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={likesData}
              keyExtractor={(item) => item.id}
              renderItem={renderLikeItem}
              contentContainerStyle={styles.listContainer}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LikesModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  likeButton: {
    backgroundColor: '#C27BA0',
    padding: 10,
    borderRadius: 5,
  },
  likeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 18,
    color: '#555',
  },
  listContainer: {
    paddingVertical: 10,
  },
  likeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    color: '#888',
  },
  actionButtons: {
    flexDirection: 'row',
  },
  followButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  following: {
    //backgroundColor: '#ddd',
    borderWidth: 0.5,
    borderRadius: 1
  },
  notFollowing: {
    backgroundColor: '#F2C4D5',
  },
  followButtonText: {
    color: '#000',
  },
  iconButton: {
    marginLeft: 5,
    padding: 5,
    borderWidth: 0.5,
    borderRadius: 1
  },
});
