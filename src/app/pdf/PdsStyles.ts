import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 16,
    paddingTop: 16,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.2,
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 1, // Reduced from 2
    gap: 1,
  },

  titleTop: {
    fontSize: 11,
    fontWeight: "bold",
  },

  logo: {
    width: 62,
    marginBottom: 2, // Reduced from 4
  },

  logoIcon: {
    width: 30,
    marginBottom: 2, // Reduced from 4
  },

  issueDate: {
    fontSize: 8,
  },

  /* SECTION HEADER WITH CIRCLE */
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2, // Reduced from 4
  },

  numberCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#2f74b5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
    padding: 0,
  },

  numberCircleText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
  },

  contactTitle: {
    fontSize: 8,
    fontWeight: "bold",
  },

  /* SECTIONS */
  section: {
    marginTop: 1, // Reduced from 2
  },

  paragraph: {
    fontSize: 8,
    marginBottom: 1,
    lineHeight: 1.1,
  },

  rowHeader: {
    marginBottom: 1,
    padding: 2,
    fontSize: 8,
    fontWeight: "bold",
    lineHeight: 1.1,
  },

  bold: {
    fontWeight: "bold",
  },

  /* TABLE */
  table: {
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 2, // Reduced from 4
    borderBottomWidth: 0,
  },

  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
  },

  cellNumber: {
    width: "5%",
    padding: 2,
    borderRightWidth: 1,
    fontSize: 8,
    borderColor: "#000",
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 1.1,
  },

  cellLeft: {
    width: "25%",
    fontSize: 8,
    padding: 2,
    borderRightWidth: 1,
    borderColor: "#000",
    lineHeight: 1.1,
  },

  cellRight: {
    width: "70%",
    fontSize: 8,
    padding: 2,
    lineHeight: 1.1,
  },

  /* BOXES */
  infoBox: {
    padding: 2,
    marginBottom: 4, // Reduced from 8
  },

  infoText: {
    fontSize: 8,
    lineHeight: 1.1,
  },

  exclusionBox: {
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 4, // Reduced from 8
    marginBottom: 4, // Reduced from 8
    padding: 2,
    fontSize: 8,
  },

  termsBox: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 2,
    paddingBottom: 0,
    marginTop: 2, // Reduced from 4
    marginBottom: 4, // Reduced from 8
    fontSize: 8,
  },

  obligationBoxThree: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 0,
    marginTop: 2, // Reduced from 4
    marginBottom: 4, // Reduced from 8
  },

  boxTitleTwo: {
    width: "100%",
  },

  boxTitleThree: {
    width: "100%",
    fontSize: 8,
    borderBottomWidth: 1,
    borderColor: "#000",
    fontWeight: "bold",
    marginBottom: 0,
    padding: 2,
    lineHeight: 1.1,
  },

  contactGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4, // Reduced from 8
    marginBottom: 2, // Reduced from 4
  },

  contactItem: {
    flex: 1,
    height: 80,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    borderColor: "#000",
  },

  contactTextIcon: {
    fontSize: 8,
    width: 100,
    textAlign: "center",
    lineHeight: 1.1,
  },

  iconPlaceholder: {
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  footnote: {
    fontSize: 8,
    fontStyle: "italic",
  },

  /* OBLIGATION & FEES */
  obligationRow: {
    flexDirection: "row",
    marginBottom: 2, // Reduced from 4
  },

  obligationLabel: {
    width: "40%",
    fontSize: 8,
    borderRightWidth: 1,
    borderColor: "#000",
    borderBottomWidth: 1,
    padding: 2,
    lineHeight: 1.1,
  },

  obligationValue: {
    fontSize: 8,
    width: "60%",
    borderColor: "#000",
    borderBottomWidth: 1,
    padding: 2,
    lineHeight: 1.1,
  },

  periodText: {
    fontSize: 8,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 2,
    lineHeight: 1.1,
  },

  feeRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  feeRowLast: {
    flexDirection: "row",
  },

  feeLabel: {
    width: "40%",
    borderRightWidth: 1,
    borderColor: "#000",
    fontSize: 8,
    padding: 2,
    lineHeight: 1.1,
  },

  feeValue: {
    fontSize: 8,
    padding: 2,
    width: "60%",
    lineHeight: 1.1,
  },

  /* TEXT STYLES */
  bulletPoint: {
    marginLeft: 2,
    marginBottom: 1, // Reduced from 2
    fontSize: 8,
    lineHeight: 1.1,
  },

  noteText: {
    marginTop: 4, // Reduced from 8
    fontStyle: "italic",
    lineHeight: 1.1,
  },

  /* INLINE ICON */
  inlineIcon: {
    width: 16,
    height: 16,
    borderRadius: 12,
    backgroundColor: "#ff0000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  /* FOOTER */
  footer: {
    marginTop: 8, // Reduced from 14
    borderTopWidth: 1,
    paddingTop: 4, // Reduced from 6
    fontSize: 9,
  },
});
