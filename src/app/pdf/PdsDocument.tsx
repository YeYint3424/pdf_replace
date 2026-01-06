import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./PdsStyles";

export const PdsDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* ================= HEADER ================= */}
      <View style={styles.header}>
        <Text style={styles.title}>HELAIAN PENDEDAHAN PRODUK</Text>

        <View style={styles.rightHeader}>
          <Image src="/images/etiqa-logo.png" style={styles.logo} />
          <Text style={styles.issueDate}>Tarikh: {data.issueDate}</Text>
        </View>
      </View>

      {/* ================= INTRO ================= */}
      <View style={styles.section}>
        <Text style={styles.paragraph}>
          Pelanggan yang dihormati, dokumen ini menerangkan maklumat penting
          tentang pelan takaful keluarga anda. Anda dinasihatkan untuk membaca
          dokumen ini dengan teliti.
        </Text>
      </View>

      {/* ================= SECTION 1 ================= */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Apa itu e-Takaful Hayat?</Text>
        <Text>
          e-Takaful Hayat menyediakan perlindungan takaful sehingga umur 70
          tahun dan merupakan pelan takaful keluarga dengan sumbangan berkala.
        </Text>
      </View>

      {/* ================= SECTION 2 ================= */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          2. Ketahui Perlindungan / Manfaat Anda
        </Text>

        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cellLeft}>Manfaat Kematian</Text>
            <Text style={styles.cellRight}>RM {data.benefits.death}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLeft}>Kematian Akibat Kemalangan</Text>
            <Text style={styles.cellRight}>
              {data.benefits.accidentalDeath}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLeft}>Manfaat Ihsan</Text>
            <Text style={styles.cellRight}>RM {data.benefits.illness}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLeft}>Manfaat Serahan</Text>
            <Text style={styles.cellRight}>{data.benefits.surrender}</Text>
          </View>
        </View>
      </View>

      {/* ================= SECTION 3 ================= */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Ketahui Kewajipan Anda</Text>
        <Text>
          Sumbangan: RM {data.contribution.amount} ({data.contribution.mode})
        </Text>
        <Text>
          Tempoh bayaran sehingga umur {data.contribution.lastPayingAge} tahun.
        </Text>
      </View>

      {/* ================= FOOTER ================= */}
      <View style={styles.footer}>
        <Text>Hubungi kami: {data.contact.phone}</Text>
        <Text>Emel: {data.contact.email}</Text>
        <Text>Laman web: {data.contact.website}</Text>
      </View>
    </Page>
  </Document>
);
