import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.4,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    width: "70%",
  },

  rightHeader: {
    alignItems: "flex-end",
  },

  logo: {
    width: 80,
    marginBottom: 4,
  },

  issueDate: {
    fontSize: 9,
  },

  /* SECTIONS */
  section: {
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
  },

  paragraph: {
    marginBottom: 4,
  },

  /* TABLE */
  table: {
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 4,
  },

  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
  },

  cellLeft: {
    width: "35%",
    padding: 4,
    borderRightWidth: 1,
    borderColor: "#000",
  },

  cellRight: {
    width: "65%",
    padding: 4,
  },

  /* FOOTER */
  footer: {
    marginTop: 14,
    borderTopWidth: 1,
    paddingTop: 6,
  },
});
