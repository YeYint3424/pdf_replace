import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./PdsStyles";

export const PdsDocument = ({ data }: { data: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* ================= HEADER ================= */}
      <View style={styles.header}>
        <Text style={styles.title}>Pelanggan yang dihormati,</Text>

        <View style={styles.rightHeader}>
          <Image src="/images/etiqa-logo.png" style={styles.logo} />
          <Text style={styles.issueDate}>Tarikh: {data.issueDate}</Text>
        </View>
      </View>

      {/* ================= INTRO ================= */}
      <View style={styles.section}>
        <Text style={styles.paragraph}>Pelanggan yang dihormati,</Text>
        <Text style={styles.paragraph}>
          Helaian Pendedahan Produk ini memberikan anda maklumat penting tentang
          takaful keluarga anda.
        </Text>
        <Text style={styles.paragraph}>
          Pelanggan lain telah membaca Helaian Pendedahan Produk ini dan
          mendapati ia membantu;{" "}
          <Text style={styles.bold}>anda harus membacanya juga</Text>.
        </Text>
      </View>

      {/* ================= SECTION 1 ================= */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberCircleText}>1</Text>
          </View>
          <Text style={styles.sectionTitle}>Apa itu e-Takaful Hayat?</Text>
        </View>
        x
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>e-Takaful Hayat</Text> menyediakan
          perlindungan takaful sehingga umur <Text style={styles.bold}>70</Text>{" "}
          tahun. Ia adalah pelan takaful keluarga dengan sumbangan berkala yang
          melindungi kematian disebabkan oleh semula jadi dan kemalangan dan
          manfaat ihsan.
        </Text>
        <Text style={styles.paragraph}>
          Tabarru', Wakalah, Ju'alah, Mudarabah, dan Hibah adalah konsep-konsep
          Syariah yang diguna pakai untuk pelan ini. Sila rujuk sijil untuk
          maklumat lanjut mengenai konsep-konsep Syariah tersebut.
        </Text>
      </View>

      {/* ================= SECTION 2 ================= */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberCircleText}>2</Text>
          </View>
          <Text style={styles.sectionTitle}>
            Ketahui Perlindungan/Manfaat Anda
          </Text>
        </View>

        <Text style={styles.paragraph}>
          Sebagai ilustrasi, untuk RM {data.contribution.amount}{" "}
          {data.contribution.mode}, anda{" "}
          <Text style={styles.bold}>
            akan menerima perlindungan/manfaat takaful keluarga berikut.
          </Text>
        </Text>

        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cellNumber}>1</Text>
            <Text style={styles.cellLeft}>Manfaat Kematian</Text>
            <Text style={styles.cellRight}>
              <Text style={styles.bold}>RM{data.benefits.death}</Text>; dan
              lebihan Dana Risiko Peserta (DRP) terkumpul, jika ada, akan
              dibayar.
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellNumber}>2</Text>
            <Text style={styles.cellLeft}>
              Manfaat Kematian Akibat Kemalangan
            </Text>
            <Text style={styles.cellRight}>
              Tambahan 200% jumlah yang dilindungi akan dibayar, selain daripada
              manfaat kematian.
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellNumber}>3</Text>
            <Text style={styles.cellLeft}>Manfaat Ihsan</Text>
            <Text style={styles.cellRight}>RM1,000</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellNumber}>4</Text>
            <Text style={styles.cellLeft}>Manfaat Serahan</Text>
            <Text style={styles.cellRight}>
              Lebihan DRP terkumpul, jika ada, akan dibayar.
            </Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            <Text style={styles.bold}>Peringatan:</Text> Sila rujuk kepada
            ilustrasi pemasaran untuk butiran-butiran produk ini.
            Manfaat-manfaat yang dibayar di bawah produk yang layak adalah
            dilindungi oleh PIDM sehingga had perlindungan. Sila rujuk Brosur
            Sistem Perlindungan Manfaat Takaful dan Insurans PIDM atau hubungi
            kami atau PIDM (layari www.pidm.gov.my).
          </Text>
        </View>

        <View style={styles.exclusionBox}>
          <Text style={styles.boxTitle}>
            Takaful keluarga anda <Text style={styles.bold}>mengecualikan</Text>
            :
          </Text>
          <Text style={styles.bulletPoint}>
            • Bunuh diri - jika kematian disebabkan bunuh diri dalam keadaan
            waras dalam 1 tahun dari tarikh pengeluaran.
          </Text>
          <Text style={styles.bulletPoint}>
            • Kematian akibat kemalangan yang berlaku secara langsung atau tidak
            langsung disebabkan oleh mana-mana perkara berikut:
          </Text>
          <Text style={styles.bulletPoint}>
            {" "}
            a) Kematian atau kecederaan diri yang disengajakan, bunuh diri atau
            cubaan membunuh diri, ketika waras;
          </Text>
          <Text style={styles.bulletPoint}>
            {" "}
            b) Penyertaan dalam apa-apa perbuatan jenayah atau menyalahi
            undang-undang, mogok, rusuhan, keganasan, atau kekecohan awam.
          </Text>
          <Text style={styles.noteText}>
            <Text style={styles.bold}>Nota:</Text> Senarai ini adalah{" "}
            <Text style={styles.bold}>tidak menyeluruh</Text>. Anda perlu
            merujuk kepada sijil untuk senarai pengecualian yang lengkap.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Jika anda mempunyai sebarang soalan atau memerlukan bantuan mengenai
            takaful keluarga anda, anda boleh:
          </Text>

          <View style={styles.contactGrid}>
            {/* Icon 1 - Phone */}
            <View style={styles.contactItem}>
              <View style={styles.iconPlaceholder}>
                <Image src="/images/phoneIcon.png" style={styles.logoIcon} />
              </View>
              <Text style={styles.contactTextIcon}>
                Hubungi kami di 1-300-13-8888 (Etiqa Online)
              </Text>
            </View>

            {/* Icon 2 - Website */}
            <View style={styles.contactItem}>
              <View style={styles.iconPlaceholder}>
                <Image src="/images/web.png" style={styles.logoIcon} />
              </View>
              <Text style={styles.contactTextIcon}>
                Lawati kami di laman web ini¹
              </Text>
            </View>

            {/* Icon 3 - Email */}
            <View style={styles.contactItem}>
              <View style={styles.iconPlaceholder}>
                <Image src="/images/mail.png" style={styles.logoIcon} />
              </View>

              <Text style={styles.contactTextIcon}>
                E-mel kami di info@etiqa.com.my
              </Text>
            </View>

            {/* Icon 4 - QR Code */}
            <View style={styles.contactItem}>
              <View style={styles.iconPlaceholder}>
                <Image src="/images/qr.png" style={styles.logoIcon} />
              </View>
              <Text style={styles.contactTextIcon}>Imbas kod QR</Text>
            </View>
          </View>

          <Text style={styles.footnote}>
            ¹ https://www.etiqa.com.my/hayat-dan-keluarga/e-takaful-hayat
          </Text>
        </View>
      </View>

      {/* ================= SECTION 3 ================= */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberCircleText}>3</Text>
          </View>
          <Text style={styles.sectionTitle}>Ketahui Kewajipan Anda</Text>
        </View>

        <View style={styles.obligationBox}>
          <Text style={styles.boxTitle}>
            Untuk takaful keluarga anda, anda mesti membayar sumbangan sebanyak:
          </Text>
          <View style={styles.obligationRow}>
            <Text style={styles.obligationLabel}>Sumbangan</Text>
            <Text style={styles.obligationValue}>
              <Text style={styles.bold}>RM{data.contribution.amount}</Text>{" "}
              {data.contribution.mode}
            </Text>
          </View>
          <Text style={styles.periodText}>
            Tempoh: Sehingga umur {data.contribution.lastPayingAge} tahun.
          </Text>
        </View>

        <View style={styles.feesBox}>
          <Text style={styles.boxTitle}>
            Anda juga perlu membayar fi dan caj berikut:
          </Text>

          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>Duti Setem</Text>
            <Text style={styles.feeValue}>
              <Text style={styles.bold}>RM10</Text> akan dibayar oleh kami
            </Text>
          </View>

          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>Jumlah Fi Wakalah</Text>
            <Text style={styles.feeValue}>
              25% daripada jumlah sumbangan atau{" "}
              <Text style={styles.bold}>RM {data.fees.wakalah}</Text>
            </Text>
          </View>

          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>Caj-caj Lain Yang Dikenakan</Text>
            <Text style={styles.feeValue}>Tidak berkenaan</Text>
          </View>
        </View>
      </View>

      {/* ================= SECTION 4 ================= */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberCircleText}>4</Text>
          </View>
          <Text style={styles.sectionTitle}>Syarat Utama Lain</Text>
        </View>

        <View style={styles.termsBox}>
          <Text style={styles.bulletPoint}>
            • Anda mesti mendedahkan semua fakta penting seperti keadaan
            perubatan dan menyatakan umur anda dengan betul bagi membantu kami
            membuat keputusan yang betul untuk menerima risiko dan menentukan
            kadar dan terma sijil anda. Jika sebaliknya, anda mungkin berisiko
            mengakibatkan sijil anda dibatal, tuntutan anda ditolak, atau terma
            dan syarat sijil diubah.
          </Text>
          <Text style={styles.bulletPoint}>
            • Anda harus berpuas hati bahawa pelan itu memenuhi keperluan anda
            dan anda mampu membayar sumbangan tersebut.
          </Text>
          <Text style={styles.bulletPoint}>
            • Sumbangan yang ditunjukkan adalah berdasarkan umur yang telah
            dicapai anda (hari jadi berikutnya) pada tarikh permulaan, dan akan
            berubah berdasarkan umur yang telah dicapai pada tahun sijil semasa.
            Kadar sumbangan adalah tidak dijamin dan kami berhak untuk mengubah
            kadar sumbangan dengan memberikan notis 3 bulan lebih awal.
          </Text>
          <Text style={styles.bulletPoint}>
            • Tempoh tangguh -- Tempoh masa tambahan yang diberikan kepada anda
            untuk membayar sumbangan yang perlu dibayar. Tempoh tangguh di bawah
            sijil ini adalah 31 hari dari tarikh sumbangan yang perlu dibayar.
          </Text>
          <Text style={styles.noteText}>
            <Text style={styles.bold}>Nota:</Text> Senarai ini adalah{" "}
            <Text style={styles.bold}>tidak menyeluruh</Text>. Anda perlu
            merujuk kepada sijil untuk senarai terma dan syarat yang lengkap.
          </Text>
        </View>
      </View>

      {/* ================= CANCELLATION SECTION ================= */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.inlineIcon}>
            <Text style={styles.numberCircleText}>?</Text>
          </View>
          <Text style={styles.sectionTitle}>
            Bolehkan saya membatalkan sijil saya?
          </Text>
        </View>

        <Text style={styles.paragraph}>
          Ya, anda boleh membatalkan sijil anda dengan memberikan arahan
          bertulis kepada kami
        </Text>

        <Text style={styles.bulletPoint}>
          • <Text style={styles.bold}>Tempoh percuma:</Text> Anda boleh
          membatalkan sijil dengan memberi arahan bertulis kepada kami dalam
          tempoh 15 hari selepas sijil diterima oleh anda. Sumbangan yang telah
          anda bayar (tolak sebarang fi pemeriksaan perubatan yang ditanggung)
          kepada anda.
        </Text>

        <Text style={styles.bulletPoint}>
          • <Text style={styles.bold}>Selepas tempoh percuma:</Text> Anda boleh
          membatalkan sijil anda dengan mengembalikan sijil kepada kami berserta
          permohonan serahan secara bertulis. Tiada pengembalian sumbangan dan
          tiada nilai serahan akan dibayar di bawah sijil ini, anda mungkin
          berhak ke atas lebihan DRP terkumpul, jika ada.
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
