import Swal from "sweetalert2";
import BomBaliImg from "../../../assets/peristiwa/bomBali.webp";

function BomBali() {
  Swal.fire("Bom Bali", "Cara Polisi Mengungkap Pelaku Peledakan", "info");

  return (
    <section className="w-full h-screen">
      <div className="container p-6">
        <h1 className="text-3xl md:text-5xl text-primary font-bold tracking-wider pb-4">
          Cara Polisi Mengungkap Pelaku Peledakan
        </h1>
        <p className="text-white text-justify text-[14px] md:text-[16px]">
          Pada tahun 2002, masyarakat Indonesia khususnya Bali dikejutkan oleh
          sekelompok teroris yang meledakkan bom di kawasan jalan Legian, Kuta,
          Bali dan di dekat kantor konsulat Amerika serikatn yang menewaskan 200
          orang lebih. Peristiwa tersebut menambah panjang deretan sejarah kelam
          di Indonesia.
          <br />
          <br />
          Sebelum meledakkan bom, kelompok teroris tersebut telah merencanakan
          aksinya dengan matang. Namun, bagaimana cara polisi mengungkap para
          pelaku bom Bali? <br />
          <br />
          Semuanya bermula ketika polisi menemukan sebuah mobil minibus yang tak
          terbentuk lagi dan menimbulkan kecurigaan polisi karena mobil tersebut
          berada tepat di titik ledakan. <br />
          <br />
          Mobil tersebut berjenis minibus Mitsubishi L-300. Ketika diperiksa
          oleh polisi, identitas seperti nomor mesin dan nomor rangka sudah tak
          berbentuk lagi karena terkena ledakan. <br />
          <br />
          Bersama dengan polisi forensik Australia, polisi Indonesia
          mengais-ngais sisa sisa ledakan di lokasi. Setelah dua minggu bekerja
          mengumpulkan sisa ledakan, pecahan-pecahan mobil tersebut bisa
          dipertautkan dengan menyusunnya seperti puzzle. Setelah di susun
          ulang, nomor mesin mobil tersebut telah hilangkan oleh pelaku dengan
          cara menghapusnya menggunakan gerinda.
          <br />
          <br />
          Akhirnya, polisi menempuh metode re-etching yaitu teknik memunculkan
          ukiran pada lempeng logam menggunakan bahan kimia khusus. <br />
          <br />
          Setelah di oleskan ke nomor mesin mobil tersebut, akhirnya bayangan
          nomor mesin timbul dalam bentuk citra, nomor mesin tersebut ialah B
          001230. <br />
          <br />
          Setelah menemukan nomor mesin yang asli, polisi mengetahui bahwa mobil
          tersebut berkapasitas 1.400 CC, hasil rakitan tahun 1983 dan nomor
          polisi mobil tersebut telah diketahui sekaligus nama pemiliknya.{" "}
          <br />
          <br />
          Tugas menelisik mobil telah selesai, tapi polisi masih belum menemukan
          orang yang diduga terkait dengan peledakan. <br />
          <br />
          Untuk mengungkap wajah pelaku, polisi mendatangkan ahli sketsa raut
          wajah bernama Wiryoni. Dengan pengetahuan akan dasar raut wajah
          ditambah dengan bakat melukis yang ia miliki, Wiryono dengan mudah
          menggambar dari ingatan saksi. <br />
          <br />
          Untuk mempercepat pekerjaan, polisi mendatangkan 3 saksi kunci. Agar
          mudah mengingat-ingat kembali kejadiannya, Wiryoni berusaha membuat
          mereka santai. Beberapa kali dalam sehari, Wiryono mengajak saksi
          merokok dan makan. <br />
          <br />
          Berhari-hari penyelidikan, akhirnya lahir empat gambar sketsa wajah,
          seluruhnya pria. Salah satu wajah di sketsa itu adalah orang yang
          membeli sepeda motor, bebek Yamaha dengan nomor polisi DK 5228 PE,
          yang diduga digunakan pelaku bom di jalan Legian.
          <br />
          <br />
          Tugas Wiryoni hanya sampai di situ. <br />
          <br />
          Tak lama kemudian kasus bom Bali terungkap. Empat pelaku utama
          berhasil diketahui seperti Imam samudera, Ali gufron, Amrozi, dan Ali
          imron. Tiga di antaranya dihukum mati, satu dihukum seumur hidup.{" "}
          <br />
          <br />
          Rumit, tapi polisi Indonesia bisa mengungkapkannya, dengan cara cara
          yang tak terbayangkan para penulis skenario cerita detektif.
        </p>

        <a href={BomBaliImg}>
          <img src={BomBaliImg} alt="Terbunuhnya D.N. Aidit" className="pt-6" />
        </a>
      </div>
    </section>
  );
}

export default BomBali;
