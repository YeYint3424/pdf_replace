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
  logoIcon: {
    width: 30,
    marginBottom: 4,
  },

  issueDate: {
    fontSize: 9,
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
    borderRadius: 12,
    backgroundColor: "#2f74b5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  numberCircleText: {
    textAlign: "center",
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
    fontSize: 11,
    fontWeight: "bold",
  },

  /* SECTIONS */
  section: {
    marginTop: 10,
  },

  paragraph: {
    marginBottom: 4,
  },

  bold: {
    fontWeight: "bold",
  },

  /* TABLE */
  table: {
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 4,
    marginBottom: 8,
  },

  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
  },

  cellNumber: {
    width: "5%",
    padding: 4,
    borderRightWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },

  cellLeft: {
    width: "30%",
    padding: 4,
    borderRightWidth: 1,
    borderColor: "#000",
  },

  cellRight: {
    width: "65%",
    padding: 4,
  },

  /* BOXES */
  infoBox: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 4,
  },

  infoText: {
    fontSize: 9,
    lineHeight: 1.3,
  },

  exclusionBox: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
  },

  termsBox: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    marginTop: 4,
    marginBottom: 8,
  },

  obligationBox: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    marginTop: 4,
    marginBottom: 8,
  },

  feesBox: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
  },

  boxTitle: {
    fontWeight: "bold",
    marginBottom: 6,
  },

  contactGrid: {
    width: "100%",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },

  contactItem: {
    borderWidth: 1,
    flex: 1,
    width: 100,
    height: 100,
    borderColor: "#000",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  contactTextIcon: {
    width: 100,
    textAlign: "center",
    marginTop: 4,
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
    fontSize: 9,
    fontStyle: "italic",
    marginTop: 4,
  },

  /* OBLIGATION & FEES */
  obligationRow: {
    flexDirection: "row",
    marginBottom: 4,
  },

  obligationLabel: {
    width: "30%",
  },

  obligationValue: {
    width: "70%",
  },

  periodText: {
    marginTop: 4,
    fontStyle: "italic",
  },

  feeRow: {
    flexDirection: "row",
    marginBottom: 4,
  },

  feeLabel: {
    width: "40%",
  },

  feeValue: {
    width: "60%",
  },

  /* TEXT STYLES */
  bulletPoint: {
    marginLeft: 10,
    marginBottom: 4,
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
