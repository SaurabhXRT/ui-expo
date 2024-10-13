import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const reviews = [
  {
    id: "1",
    name: "John Mike",
    review:
      "ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    date: "06/05/2024",
    avatar: "https://s3-alpha-sig.figma.com/img/8a83/15fb/19ce4037e6d5f06e171aa2a87e2203f7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoMceNpInwh50QcRGI2QDR6S2F6CKLe-flKliMeQM8XNSg87Uuhzsd4kcKAzu4BdQ0piksW~OmdQLoVWzD0ij3~Ii2eV76wj12zX-B1pTQgrRlHY0w0yOvW~Ykqq9hM8LO~wLeWxh4gBUZiragsqh~0nTQW~KcYtSp-VoPOkgyF47QiIlidSiP7yPPOsEnFGkWbROchbG2xVk9bNtG40msTHu-i68b3lDTgXRT-Qr1rYO-hdm~GmHCysMPDL~kRYfOdjTSZzZUA0h7E~HX-BZZawS~bKc32dJjvUJcNPmuqyH1wOHqkPKjMUUsUz0QAdJGU-NqhCOhCyIo0pc~t3-w__",
  },
  {
    id: "2",
    name: "David Christ",
    review:
      "ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    date: "06/05/2024",
    avatar: "https://s3-alpha-sig.figma.com/img/8a83/15fb/19ce4037e6d5f06e171aa2a87e2203f7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoMceNpInwh50QcRGI2QDR6S2F6CKLe-flKliMeQM8XNSg87Uuhzsd4kcKAzu4BdQ0piksW~OmdQLoVWzD0ij3~Ii2eV76wj12zX-B1pTQgrRlHY0w0yOvW~Ykqq9hM8LO~wLeWxh4gBUZiragsqh~0nTQW~KcYtSp-VoPOkgyF47QiIlidSiP7yPPOsEnFGkWbROchbG2xVk9bNtG40msTHu-i68b3lDTgXRT-Qr1rYO-hdm~GmHCysMPDL~kRYfOdjTSZzZUA0h7E~HX-BZZawS~bKc32dJjvUJcNPmuqyH1wOHqkPKjMUUsUz0QAdJGU-NqhCOhCyIo0pc~t3-w__",
  },
  {
    id: "3",
    name: "David Christ",
    review:
      "ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    date: "06/05/2024",
    avatar: "https://s3-alpha-sig.figma.com/img/8a83/15fb/19ce4037e6d5f06e171aa2a87e2203f7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoMceNpInwh50QcRGI2QDR6S2F6CKLe-flKliMeQM8XNSg87Uuhzsd4kcKAzu4BdQ0piksW~OmdQLoVWzD0ij3~Ii2eV76wj12zX-B1pTQgrRlHY0w0yOvW~Ykqq9hM8LO~wLeWxh4gBUZiragsqh~0nTQW~KcYtSp-VoPOkgyF47QiIlidSiP7yPPOsEnFGkWbROchbG2xVk9bNtG40msTHu-i68b3lDTgXRT-Qr1rYO-hdm~GmHCysMPDL~kRYfOdjTSZzZUA0h7E~HX-BZZawS~bKc32dJjvUJcNPmuqyH1wOHqkPKjMUUsUz0QAdJGU-NqhCOhCyIo0pc~t3-w__",
  },
  {
    id: "4",
    name: "David Christ",
    review:
      "ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    date: "06/05/2024",
    avatar: "https://s3-alpha-sig.figma.com/img/8a83/15fb/19ce4037e6d5f06e171aa2a87e2203f7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoMceNpInwh50QcRGI2QDR6S2F6CKLe-flKliMeQM8XNSg87Uuhzsd4kcKAzu4BdQ0piksW~OmdQLoVWzD0ij3~Ii2eV76wj12zX-B1pTQgrRlHY0w0yOvW~Ykqq9hM8LO~wLeWxh4gBUZiragsqh~0nTQW~KcYtSp-VoPOkgyF47QiIlidSiP7yPPOsEnFGkWbROchbG2xVk9bNtG40msTHu-i68b3lDTgXRT-Qr1rYO-hdm~GmHCysMPDL~kRYfOdjTSZzZUA0h7E~HX-BZZawS~bKc32dJjvUJcNPmuqyH1wOHqkPKjMUUsUz0QAdJGU-NqhCOhCyIo0pc~t3-w__",
  },
  {
    id: "5",
    name: "David Christ",
    review:
      "ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    date: "06/05/2024",
    avatar: "https://s3-alpha-sig.figma.com/img/8a83/15fb/19ce4037e6d5f06e171aa2a87e2203f7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoMceNpInwh50QcRGI2QDR6S2F6CKLe-flKliMeQM8XNSg87Uuhzsd4kcKAzu4BdQ0piksW~OmdQLoVWzD0ij3~Ii2eV76wj12zX-B1pTQgrRlHY0w0yOvW~Ykqq9hM8LO~wLeWxh4gBUZiragsqh~0nTQW~KcYtSp-VoPOkgyF47QiIlidSiP7yPPOsEnFGkWbROchbG2xVk9bNtG40msTHu-i68b3lDTgXRT-Qr1rYO-hdm~GmHCysMPDL~kRYfOdjTSZzZUA0h7E~HX-BZZawS~bKc32dJjvUJcNPmuqyH1wOHqkPKjMUUsUz0QAdJGU-NqhCOhCyIo0pc~t3-w__",
  },
];

const RatingsAndReviews: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingSection}>
        <Text style={styles.sectionTitle}>Rate this Business</Text>
        <Text style={styles.subTitle}>Tell others what you think</Text>
        <View style={styles.starContainer}>
          {[...Array(5)].map((_, index) => (
            <Ionicons key={index} name="star-outline" size={24} color="black" />
          ))}
        </View>
        <TouchableOpacity style={styles.writeReviewButton}>
          <Ionicons name="create-outline" size={24} color={"black"} />
          <Text style={styles.writeReviewText}>Write a Review</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.reviewsSummary}>
        <Text style={styles.sectionTitle}>Ratings & Reviews</Text>
        <Text style={styles.subTitle}>Ratings & Reviews are verified.</Text>
        <View style={styles.ratingDetails}>
          <View style={styles.ratingsValue}>
            <Text style={styles.ratingNumber}>5.1</Text>
            <Text style={styles.totalRatings}>500 ratings</Text>
          </View>
          <View style={styles.ratingBars}>
            {[5, 4, 3, 2, 1].map((rating) => (
              <View key={rating} style={styles.ratingRow}>
                <Text style={styles.ratingText}>{rating}</Text>
                <View style={styles.ratingBarContainer}>
                  <View
                    style={[styles.ratingBar, { width: `${rating * 15}%` }]}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewItem}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.reviewContent}>
              <Text style={styles.reviewerName}>{item.name}</Text>
              <Text style={styles.reviewText}>{item.review}</Text>
              <Text style={styles.reviewDate}>{item.date}</Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={20} color="black" />
          </View>
        )}
        contentContainerStyle={styles.reviewList}
      />
    </View>
  );
};

export default RatingsAndReviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8E4EB",
    padding: 6,
  },
  ratingSection: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },
  starContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  writeReviewButton: {
    flexDirection: 'row',
    alignItems: "center",
  },
  writeReviewText: {
    fontSize: 14,
    color: "#000",
    textDecorationLine: "underline",
  },
  reviewsSummary: {
    backgroundColor: "#F8E4EB",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  ratingDetails: {
    flexDirection: "row",
    marginTop: 8,
  },
  ratingsValue: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: 16,
    paddingVertical: 2
  },
  ratingNumber: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  ratingBars: {
    flex: 1,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  ratingText: {
    width: 20,
    fontSize: 14,
  },
  ratingBarContainer: {
    flex: 1,
    height: 8,
    backgroundColor: "#eee",
    borderRadius: 4,
    marginLeft: 8,
  },
  ratingBar: {
    height: "100%",
    backgroundColor: "#C27BA0",
    borderRadius: 4,
  },
  totalRatings: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
  },
  reviewList: {
    paddingBottom: 16,
  },
  reviewItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8E4EB",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  reviewText: {
    fontSize: 14,
    color: "#555",
    marginVertical: 4,
  },
  reviewDate: {
    fontSize: 12,
    color: "#888",
  },
});
