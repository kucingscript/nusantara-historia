import Swal from "sweetalert2";
import MunirImg from "../../../assets/peristiwa/munirMeme.webp";

function Munir() {
  Swal.fire("Munir", "Aktivis HAM yang Diracuni", "info");

  return (
    <section className="w-full h-screen">
      <div className="container p-6">
        <h1 className="text-3xl md:text-5xl text-primary font-bold tracking-wider pb-4">
          Pembunuhan Munir
        </h1>
        <p className="text-white text-justify text-[14px] md:text-[17px]">
          Pada waktu itu beliau membela para aktivis menjadi korban penculikan
          Tim mawar dari Kopassus. <br />
          <br />
          Munir mewujudkan keseriusannya di bidang hukum dengan cara melakukan
          pembelaan terhadap sejumlah kasus, terutama bagi kaum yang tertindas.
          Bahkan Munir juga membantu pemerintah dalam tim investigasi dan tim
          penyusun rancangan Undang-Undang ( RUU ). <br />
          <br />
          Beberapa kasus yang pernah beliau tangani yaitu dari kasus Arujo yang
          dituduh melakukan sebagai pemberontak melawan pemerintah indonesia
          untuk memerdekakan Timor-Timur dari indonesia pada tahun 1992, kasus
          marsinah seorang aktivis yang dibunuh militer pada tahun 1994, menjadi
          penasihat hukum Nipah dalam kasus pembunuhan petani-petani oleh
          militer, dan juga menjadi penasihat hukum dalam tragedi pembantaian
          tanjung priok bagi korban dan keluarga korban tahun 1984 hingga 1998.
          <br />
          <br />
          Pada tahun 2004, beliau tergabung dalam tim advokasi SMPM 56 yang
          digusur oleh pemda. Selain itu, ia seorang yang aktif menulis media
          cetak dan elektronik yang berhubungan dengan tema-tema HAM, reformasi
          militer dan kepolisian, serta politik. <br />
          <br />
          Munir adalah sosok orang yang pemberani dan tangguh dalam meneriakkan
          kebenaran. Beliau adalah pengabdi yang tangguh, jujur, dan konsisten.
          Berkat pengabdiannya tersebut beliau mendapat penghargaan dari dalam
          negeri dan luar negeri. <br />
          <br />
          Dalam negeri beliau dinobatkan Man Of The Year pada tahun 1998. Dari
          luar negeri ia dinobatkan sebagai Leader for the Millennium dari Asia
          Week pada tahun 2000, dan An Honourable Mention of the 2000 UNESCO
          Madanjeet Singh Prize atas usaha- usahanya dalam mempromosikan
          toleransi dan anti Kekerasan. <br />
          <br />
          Kronologi pembunuhan Munir berawal 3 jam setelah pesawat berkode
          penerbangan GA-974 take off dari Singapura. Awak kabin melaporkan
          kepada pilot pantun matondang bahwa seorang yang bernama munir
          menderita sakit di kursi 40G, Munir terus bolak-balik ke kamar mandi.
          Pilot pun langsung meminta supaya memonitori kondisi Munir, Munir pun
          akhirnya dipindahkan dan duduk disebelah orang yang kebetulan
          berprofesi dokter.
          <br />
          <br />
          Perjalanan menuju amsterdam menempuh 12 jam. Namun 2 jam sebelum
          mendarat dibandara schipol amsterdam, saat diperiksa Munir telah
          meninggal dunia.
          <br /> <br />
          Pada tanggal 12 november 2004, dikeluarkan kabar bahwa polisi belanda
          menemukan sejenis senyawa arsenikum setelah otopsi. Hal ini juga telah
          dikonfirmasi polisi Indonesia, belum diketahui siapa yang meracuni
          dibalik semua ini.
          <br />
          <br />
          Pada tanggal 20 Desember 2005, Pollycarpus Budihari Priyanto dijatuhi
          hukuman 14 tahun penjara atas pembunuhan Munir. Hakim mengatakan bahwa
          pollycarpus seorang pilot Garuda yang sedang cuti adalah orang yang
          menaruh arsenik di makanan Munir karena dengan tujuan untuk mendiamkan
          pengkritik pemerintah tersebut. Hakim cicut situarso menyatakan bahwa
          sebelum pembunuhan, Pollycarpus menerima panggilan telepon yang
          terdaftar intelijen senior, tetapi tidak menjelaskan lebih lanjut.
          <br />
          <br />
          Sejak tahun 2005 pada tanggal kematian Munir, 7 September. Dicanangkan
          sebagai hari Pembela HAM Indonesia.
        </p>
        <a href={MunirImg}>
          <img src={MunirImg} alt="Pembunuhan Munir" className="pt-6" />
        </a>
      </div>
    </section>
  );
}

export default Munir;
