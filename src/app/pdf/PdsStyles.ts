import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 16,
    paddingTop: 16,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 2,
    gap: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    // width: "70%",
  },
  titleTop: {
    fontSize: 11,
    fontWeight: "bold",
    // width: "70%",
  },

  rightHeader: {
    alignItems: "flex-end",
  },

  logo: {
    width: 62,
    marginBottom: 4,
  },

  logoNum: {
    height: 16,
    marginBottom: 4,
  },

  logoIcon: {
    width: 30,
    marginBottom: 4,
  },

  issueDate: {
    fontSize: 8,
  },

  /* SECTION HEADER WITH CIRCLE */
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
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

  numberCircleRed: {
    width: 16,
    height: 16,
    borderRadius: 12,
    backgroundColor: "#ff0000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
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
    marginTop: 2,
  },

  paragraph: {
    fontSize: 8,
    marginBottom: 1,
  },

  rowHeader: {
    marginBottom: 1,
    padding: 2,
    fontSize: 8,
    fontWeight: "bold",
  },

  bold: {
    fontWeight: "bold",
  },

  /* TABLE */
  table: {
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 4,
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
  },

  cellLeft: {
    width: "25%",
    fontSize: 8,
    padding: 2,
    borderRightWidth: 1,
    borderColor: "#000",
  },

  cellRight: {
    width: "70%",
    fontSize: 8,
    padding: 2,
  },

  /* BOXES */
  infoBox: {
    padding: 2,
    marginBottom: 8,
  },

  infoText: {
    fontSize: 8,
    lineHeight: 1.3,
  },

  exclusionBox: {
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 8,
    marginBottom: 8,
    padding: 2,
    fontSize: 8,
  },

  termsBox: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 2,
    marginTop: 4,
    marginBottom: 8,
    fontSize: 8,
  },

  obligationBox: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 2,
    marginTop: 4,
    marginBottom: 8,
  },
  obligationBoxThree: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 0,
    marginTop: 4,
    marginBottom: 8,
  },

  feesBox: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 2,
    marginTop: 8,
    marginBottom: 8,
  },

  boxTitle: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 2,
    fontWeight: "bold",
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
  },

  contactGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 4,
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
  },

  iconPlaceholder: {
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  contactText: {
    flex: 1,
  },

  footnote: {
    fontSize: 8,
    fontStyle: "italic",
  },

  /* OBLIGATION & FEES */
  obligationRow: {
    flexDirection: "row",
    marginBottom: 4,
  },

  obligationLabel: {
    width: "40%",
    fontSize: 8,
    borderRightWidth: 1,
    borderColor: "#000",
    borderBottomWidth: 1,
    padding: 2,
  },

  obligationValue: {
    fontSize: 8,
    width: "60%",
    borderColor: "#000",
    borderBottomWidth: 1,
    padding: 2,
  },

  periodText: {
    fontSize: 8,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 2,
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
  },

  feeValue: {
    fontSize: 8,
    padding: 2,
    width: "60%",
  },

  /* TEXT STYLES */
  bulletPoint: {
    marginLeft: 2,
    marginBottom: 2,
    fontSize: 8,
  },

  noteText: {
    marginTop: 8,
    fontStyle: "italic",
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
    marginTop: 14,
    borderTopWidth: 1,
    paddingTop: 6,
    fontSize: 9,
  },
});
