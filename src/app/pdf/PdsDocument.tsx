import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./PdsStyles";

export const PdsDocument = ({ data, lan }: { data: any; lan: string }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* ================= HEADER ================= */}
      <View style={styles.header}>
        {/* LEFT SIDE */}
        <View style={{ flex: 5 }}>
          {/* Left takes twice as much space as right */}
          <Text style={styles.titleTop}>
            {lan === "en"
              ? "PRODUCT DISCLOSURE SHEET"
              : "HELAIAN PENDEDAHAN PRODUK"}
          </Text>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {lan === "en" ? "Dear Customer," : "Pelanggan yang dihormati,"}
            </Text>
            <Text style={styles.paragraph}>
              {lan === "en"
                ? "This Product Disclosure Sheet (PDS) provides you with key information on your family takaful."
                : "Helaian Pendedahan Produk ini memberikan anda maklumat penting tentang takaful keluarga anda."}
            </Text>
            <Text style={styles.paragraph}>
              {lan === "en"
                ? "Other customers have read this PDS and found it helpful;"
                : "Pelanggan lain telah membaca Helaian Pendedahan Produk ini dan mendapati ia membantu;"}{" "}
              <Text style={styles.bold}>
                {lan === "en"
                  ? "you should read it too."
                  : "anda harus membacanya juga."}
              </Text>
            </Text>
          </View>
        </View>

        {/* RIGHT SIDE */}
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Image src="/images/etiqa-logo.png" style={styles.logo} />
          <Text style={styles.issueDate}>
            {lan === "en" ? "Date: " : "Tarikh: "} {data.issueDate}
          </Text>
        </View>
      </View>

      {/* ================= SECTION 1 ================= */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberCircleText}>1</Text>
          </View>
          <Text style={styles.sectionTitle}>
            {lan === "en"
              ? "What is e-Takaful Hayat?"
              : "Apa itu e-Takaful Hayat?"}
          </Text>
        </View>
        x
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>e-Takaful Hayat</Text>{" "}
          {lan == "en"
            ? "offers takaful protection until age"
            : "menyediakan perlindungan takaful sehingga umur"}{" "}
          <Text style={styles.bold}>70</Text>{" "}
          {lan == "en"
            ? "years old. It is a regular contribution family takaful plan that covers death, due to natural and accidental cause and compassionate benefit."
            : "tahun. Ia adalah pelan takaful keluarga dengan sumbangan berkala yang melindungi kematian disebabkan oleh semula jadi dan kemalangan dan manfaat ihsan."}
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {lan == "en"
              ? "Applicable Shariah concepts"
              : "Konsep-konsep Syariah yang diguna pakai"}
          </Text>
        </View>
        <Text style={styles.paragraph}>
          {lan == "en"
            ? "Tabarru’, Wakalah, Ju’alah, Mudarabah and Hibah are the Shariah concept applicable to this plan. Please refer to the certificate for more details of the Shariah concept."
            : "Tabarru', Wakalah, Ju'alah, Mudarabah, dan Hibah adalah konsep-konsep Syariah yang diguna pakai untuk pelan ini. Sila rujuk sijil untuk maklumat lanjut mengenai konsep-konsep Syariah tersebut."}
        </Text>
      </View>

      {/* ================= SECTION 2 ================= */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberCircleText}>2</Text>
          </View>
          <Text style={styles.sectionTitle}>
            {lan == "en"
              ? "Know Your Coverages/Benefits"
              : "Ketahui Perlindungan/Manfaat Anda"}
          </Text>
        </View>

        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.rowHeader}>
              {lan === "en"
                ? "As an illustration, for RM"
                : "Sebagai ilustrasi, untuk RM"}{" "}
              {data.contribution.amount} {data.contribution.mode},{" "}
              <Text style={styles.bold}>
                {lan === "en"
                  ? "you will receive the following family takaful coverages/benefits."
                  : "anda akan menerima perlindungan/manfaat takaful keluarga berikut."}
              </Text>
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cellNumber}>1</Text>
            <Text style={styles.cellLeft}>
              {lan === "en" ? "Death Benefit" : "Manfaat Kematian"}
            </Text>
            <Text style={styles.cellRight}>
              <Text style={styles.bold}>RM{data.benefits.death}</Text>
              {lan === "en"
                ? ", and accumulated PRF surplus, if any, will be payable."
                : "; dan lebihan Dana Risiko Peserta (DRP) terkumpul, jika ada, akan dibayar."}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellNumber}>2</Text>
            <Text style={styles.cellLeft}>
              {lan === "en"
                ? "Accidental Death Benefit"
                : "Manfaat Kematian Akibat Kemalangan"}
            </Text>
            <Text style={styles.cellRight}>
              {lan === "en"
                ? "Additional 200% sum covered is payable, on top of the death benefit."
                : "Tambahan 200% jumlah yang dilindungi akan dibayar, selain daripada manfaat kematian."}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellNumber}>3</Text>
            <Text style={styles.cellLeft}>
              {lan === "en" ? "Compassionate Benefit" : "Manfaat Ihsan"}
            </Text>
            <Text style={styles.cellRight}>RM1,000</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellNumber}>4</Text>
            <Text style={styles.cellLeft}>
              {lan === "en" ? "Surrender Benefit" : "Manfaat Serahan"}
            </Text>
            <Text style={styles.cellRight}>
              {lan === "en"
                ? "Accumulated PRF surplus, if any, will be payable."
                : "Lebihan DRP terkumpul, jika ada, akan dibayar."}
            </Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            <Text style={styles.bold}>
              {lan === "en" ? "Reminder:" : "Peringatan:"}
            </Text>{" "}
            {lan === "en"
              ? "Please refer to the marketing illustration for details of this product. The benefit(s) payable under eligible product is(are) protected by PIDM up to limits. Please refer to PIDM’s TIPS Brochure or contact us or PIDM (visit"
              : "Sila rujuk kepada ilustrasi pemasaran untuk butiran-butiran produk ini. Manfaat-manfaat yang dibayar di bawah produk yang layak adalah dilindungi oleh PIDM sehingga had perlindungan. Sila rujuk Brosur Sistem Perlindungan Manfaat Takaful dan Insurans PIDM atau hubungi kami atau PIDM (layari"}
            {" www.pidm.gov.my)."}
          </Text>
        </View>

        <View style={styles.exclusionBox}>
          <Text style={styles.boxTitleTwo}>
            {lan === "en" ? "Your family takaful " : "Takaful keluarga anda "}
            <Text style={styles.bold}>
              {lan === "en" ? "excludes" : "mengecualikan"}
            </Text>
            :
          </Text>
          <Text style={styles.bulletPoint}>
            {lan === "en"
              ? "* Suicide - if death was due to suicide while sane within 1 year from the issue date"
              : "* Bunuh diri - jika kematian disebabkan bunuh diri dalam keadaan waras dalam 1 tahun dari tarikh pengeluaran."}
          </Text>
          <Text style={styles.bulletPoint}>
            {lan === "en"
              ? "* Accidental death that occurs directly or indirectly due to any of the following:"
              : "* Kematian akibat kemalangan yang berlaku secara langsung atau tidaklangsung disebabkan oleh mana-mana perkara  berikut:"}
          </Text>
          <Text style={styles.bulletPoint}>
            {" "}
            {"a)"}{" "}
            {lan === "en"
              ? "Intentional self-inflicted injury or death, suicide, or attempted suicide, while sane;"
              : "Kematian atau kecederaan diri yang disengajakan, bunuh diri atau cubaan membunuh diri, ketika waras;"}
          </Text>
          <Text style={styles.bulletPoint}>
            {" "}
            {"b)"}{" "}
            {lan === "en"
              ? "Participation in any criminal or illegal act, strike, riot, terrorism or civil commotion."
              : "Penyertaan dalam apa-apa perbuatan jenayah atau menyalahi undang-undang, mogok, rusuhan, keganasan, atau kekecohan awam."}
          </Text>
          <Text style={styles.noteText}>
            <Text style={styles.bold}>{lan === "en" ? "Note:" : "Nota:"}</Text>{" "}
            {lan === "en" ? "This list is " : "Senarai ini adalah"}{" "}
            <Text style={styles.bold}>
              {lan === "en" ? "non-exhaustive" : "tidak menyeluruh"}
            </Text>
            .{" "}
            {lan === "en"
              ? "You must refer to the certificate for the full list of exclusions"
              : "Anda perlu merujuk kepada sijil untuk senarai pengecualian yang lengkap."}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.contactTitle}>
            {lan === "en"
              ? "If you have any questions or require assistance on your family takaful, you can:"
              : "Jika anda mempunyai sebarang soalan atau memerlukan bantuan mengenai takaful keluarga anda, anda boleh:"}
          </Text>

          <View style={styles.contactGrid}>
            {/* Icon 1 - Phone */}
            <View style={[styles.contactItem, { borderRightWidth: 1 }]}>
              <View style={styles.iconPlaceholder}>
                <Image src="/images/phoneIcon.png" style={styles.logoIcon} />
              </View>
              <Text style={styles.contactTextIcon}>
                {lan === "en" ? "Contact us at" : "Hubungi kami di"}
                1-300-13-8888 (Etiqa Online)
              </Text>
            </View>

            {/* Icon 2 - Website */}
            <View style={[styles.contactItem, { borderRightWidth: 1 }]}>
              <View style={styles.iconPlaceholder}>
                <Image src="/images/web.png" style={styles.logoIcon} />
              </View>
              <Text style={styles.contactTextIcon}>
                {lan === "en"
                  ? "Visit us at this website¹"
                  : "Lawati kami di laman web ini¹"}
              </Text>
            </View>

            {/* Icon 3 - Email */}
            <View style={[styles.contactItem, { borderRightWidth: 1 }]}>
              <View style={styles.iconPlaceholder}>
                <Image src="/images/mail.png" style={styles.logoIcon} />
              </View>
              <Text style={styles.contactTextIcon}>
                {lan === "en" ? "Email us at " : "E-mel kami di "}
                info@etiqa.com.my
              </Text>
            </View>

            {/* Icon 4 - QR Code */}
            <View style={styles.contactItem}>
              {/* no right/bottom border (last column, last row) */}
              <View style={styles.iconPlaceholder}>
                <Image src="/images/qr.png" style={styles.logoIcon} />
              </View>
              <Text style={styles.contactTextIcon}>
                {lan === "en" ? "Scan the QR code" : "Imbas kod QR"}
              </Text>
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
          <Text style={styles.sectionTitle}>
            {lan === "en" ? "Know Your Obligations" : "Ketahui Kewajipan Anda"}
          </Text>
        </View>

        <View style={styles.obligationBoxThree}>
          <Text style={styles.boxTitleThree}>
            {lan === "en"
              ? "For your family takaful, you must pay a contribution of:"
              : "Untuk takaful keluarga anda, anda mesti membayar sumbangan sebanyak:"}
          </Text>
          <View style={styles.obligationRow}>
            <Text style={styles.obligationLabel}>
              {lan === "en" ? "Contribution" : "Sumbangan"}
            </Text>
            <Text style={styles.obligationValue}>
              <Text style={styles.bold}>RM{data.contribution.amount}</Text>{" "}
              {data.contribution.mode}
            </Text>
          </View>
          <Text style={styles.periodText}>
            {lan === "en"
              ? "Duration: Until the age of "
              : "Tempoh: Sehingga umur "}
            {data.contribution.lastPayingAge}{" "}
            {lan === "en" ? " years." : " tahun."}
          </Text>

          <Text style={styles.boxTitleThree}>
            {lan === "en"
              ? "You also have to pay the following fees and charges:"
              : "Anda juga perlu membayar fi dan caj berikut:"}
          </Text>

          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>
              {lan === "en" ? "Stamp Duty" : "Duti Setem"}
            </Text>
            <Text style={styles.feeValue}>
              <Text style={styles.bold}>RM10</Text>{" "}
              {lan === "en" ? "paid by us." : "akan dibayar oleh kami."}
            </Text>
          </View>

          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>
              {lan === "en" ? "Wakalah Fee" : "Jumlah Fi Wakalah"}
            </Text>
            <Text style={styles.feeValue}>
              25%
              {lan === "en"
                ? " of total contribution or "
                : " daripada jumlah sumbangan atau "}
              <Text style={styles.bold}>RM {data.fees.wakalah}</Text>
            </Text>
          </View>

          <View style={styles.feeRowLast}>
            <Text style={styles.feeLabel}>
              {lan === "en"
                ? "Other Applicable Charges"
                : "Caj-caj Lain Yang Dikenakan"}
            </Text>
            <Text style={styles.feeValue}>
              {lan === "en" ? "Not applicable" : "Tidak berkenaan"}
            </Text>
          </View>
        </View>
      </View>

      {/* ================= SECTION 4 ================= */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberCircleText}>4</Text>
          </View>
          <Text style={styles.sectionTitle}>
            {lan === "en" ? "Other Key Terms" : "Syarat Utama Lain"}
          </Text>
        </View>

        <View style={styles.termsBox}>
          <Text style={styles.bulletPoint}>
            {lan === "en"
              ? "* You must disclose all materials facts such as medical condition and state your age correctly to help us make the right decision in accepting the risk and determining the rates and terms of your certificate. Otherwise, you may risk having your certificate voided, your claim rejected or terms and conditions of the certificate being changed."
              : "* Anda mesti mendedahkan semua fakta penting seperti keadaan perubatan dan menyatakan umur anda dengan betul bagi membantu kami membuat keputusan yang betul untuk menerima risiko dan menentukan kadar dan terma sijil anda. Jika sebaliknya, anda mungkin berisiko mengakibatkan sijil anda dibatal, tuntutan anda ditolak, atau terma dan syarat sijil diubah."}
          </Text>
          <Text style={styles.bulletPoint}>
            {lan === "en"
              ? "* You should satisfy yourself that the plan serves your needs and that you can afford the contribution."
              : "* Anda harus berpuas hati bahawa pelan itu memenuhi keperluan anda dan anda mampu membayar sumbangan tersebut."}
          </Text>
          <Text style={styles.bulletPoint}>
            {lan === "en"
              ? "The contribution indicated is based on your attained age (age next birthday) at the commencement date. The contribution will increase on the 1st day of the next certificate year, in accordance to your attained age. Contribution rates are not guaranteed and we reserve the right to revise the contribution rates by giving 3-months prior notice."
              : "* Sumbangan yang ditunjukkan adalah berdasarkan umur yang telah dicapai anda (hari jadi berikutnya) pada tarikh permulaan, dan akan berubah berdasarkan umur yang telah dicapai pada tahun sijil semasa. Kadar sumbangan adalah tidak dijamin dan kami berhak untuk mengubah kadar sumbangan dengan memberikan notis 3 bulan lebih awal."}
          </Text>
          <Text style={styles.bulletPoint}>
            {lan === "en"
              ? "* Grace period – The additional period of time that is provided for you to pay the contribution due. The grace period under this certificate is 31 days from the date the contribution is due"
              : "* Tempoh tangguh -- Tempoh masa tambahan yang diberikan kepada anda untuk membayar sumbangan yang perlu dibayar. Tempoh tangguh di bawah sijil ini adalah 31 hari dari tarikh sumbangan yang perlu dibayar."}
          </Text>
          <Text style={styles.noteText}>
            <Text style={styles.bold}>
              {lan === "en" ? "Note: " : "Nota: "}
            </Text>
            {lan === "en" ? "This list is " : "Senarai ini adalah "}
            <Text style={styles.bold}>
              {lan === "en" ? "non-exhaustive" : "tidak menyeluruh"}
            </Text>
            .
            {lan === "en"
              ? "You should refer to the certificate for the full list of terms and conditions"
              : "Anda perlu merujuk kepada sijil untuk senarai terma dan syarat yang lengkap."}
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
            {lan === "en"
              ? "Can I cancel my certificate?"
              : "Bolehkan saya membatalkan sijil saya?"}
          </Text>
        </View>

        <Text style={styles.paragraph}>
          {lan === "en"
            ? "Yes, you may cancel your certificate by giving a written notice to us."
            : "Ya, anda boleh membatalkan sijil anda dengan memberikan arahan bertulis kepada kami."}
        </Text>

        <Text style={styles.bulletPoint}>
          •{" "}
          <Text style={styles.bold}>
            {lan === "en" ? "Free look period: " : "Tempoh percuma: "}
          </Text>
          {lan === "en"
            ? "You have the right to cancel the certificate by giving a written instruction to us within 15 days after the certificate has been received by you. The contributions that you have paid (less any medical examination fee incurred) will be refunded to you."
            : "Anda boleh membatalkan sijil dengan memberi arahan bertulis kepada kami dalam tempoh 15 hari selepas sijil diterima oleh anda. Sumbangan yang telah anda bayar (tolak sebarang fi pemeriksaan perubatan yang ditanggung) kepada anda."}
        </Text>

        <Text style={styles.bulletPoint}>
          •{" "}
          <Text style={styles.bold}>
            {lan === "en"
              ? "After free look period:"
              : "Selepas tempoh percuma:"}
          </Text>
          {lan === "en"
            ? "You may cancel your certificate by returning the certificate to us with a written surrender request. There will be no refund of contributions and no surrender value payable under the certificate, you may be entitled to accumulated PRF surplus, if any."
            : "Anda boleh membatalkan sijil anda dengan mengembalikan sijil kepada kami berserta permohonan serahan secara bertulis. Tiada pengembalian sumbangan dan tiada nilai serahan akan dibayar di bawah sijil ini, anda mungkin berhak ke atas lebihan DRP terkumpul, jika ada."}
        </Text>
      </View>
    </Page>
  </Document>
);
