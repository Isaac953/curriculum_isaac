'use client';
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Font,
  StyleSheet,
  Image,
  pdfjs
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  maincontact: {
    height: "200vh",
    width: "25vw",
    backgroundColor: "#0F2167",
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignContent: 'center',
    photocard: {
      width: '100%',
      backgroundColor: 'green',
      img: {
        width: '100px',
        margin: '15px 0px',
      }
    }
  },
  mainexperience: {},
});

let logo = '../img/photo_cv.jpg';

export const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.maincontact}>
          <View style={styles.maincontact.photocard}>
          <Image src={logo} style={styles.maincontact.photocard.img}/>
          </View>
        </View>
        {/* <View className="main-experience">
        <Text>Dos</Text>
      </View> */}
      </Page>
    </Document>
  );
};
