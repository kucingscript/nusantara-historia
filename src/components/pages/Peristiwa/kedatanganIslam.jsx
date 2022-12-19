import Swal from "sweetalert2";

function kedatanganIslam() {
  Swal.fire("Masuknya Islam", "Masuknya Islam di Indonesia", "info");

  return (
    <section className="w-full h-screen">
      <div className="container p-6">
        <h1 className="text-3xl md:text-5xl text-primary font-bold tracking-wider pb-4">
          Masuknya Islam di Indonesia
        </h1>
        <p className="text-white text-justify text-[14px] md:text-[16px]">
          Meskipun Nusantara merupakan kerajaan Hindu-Buddha, Islam berpengaruh
          bagi kalangan elit penguasa Majapahit. Kemungkinan Islam sudah ada di
          Asia Tenggara maritim dari awal era Islam ketika pedagang Muslim
          datang ke Nusantara, membuat permukiman di daerah pesisir, menikah
          dengan perempuan setempat dan dihormati karena kekayaan mereka yang
          diperoleh melalui perdagangan.
          <br /> <br />
          Beberapa penguasa lokal kemungkinan tertarik dengan agama baru ini dan
          dianggapnya menguntungkan untuk menganut sebuah keyakinan yang sama
          seperti sebagian besar pedagang.
          <br />
          <br />
          Pendirian kerajaan Islam merupakan langkah logis berikutnya. Diduga
          rakyat dari raja-raja lokal ini mengikutinya dengan masuk Islam.
          <br />
          <br />
          Prasasti pada batu nisan menunjukkan bahwa pada awal abad ke-13
          terdapat sebuah kerajaan Islam di bagian utara Sumatera yang disebut
          Samudera Pasai. Kerajaan ini dianggap sebagai kerajaan Islam pertama
          di Nusantara. <br />
          <br />
          Dari Sumatra Utara, pengaruh Islam kemudian menyebar ke arah timur
          melalui perdagangan. Di pesisir pantai utara Jawa berbagai kota Islam
          muncul selama abad ke-14. <br />
          <br />
          Meskipun demikian, tidaklah mungkin kalau beberapa bangsawan Jawa dari
          Majapahit di Jawa Timur memeluk agama Islam karena perdagangan. Mereka
          mungkin merasa statusnya jauh lebih tinggi dibanding dengan kelas
          sosial pedagang. <br />
          <br />
          Kemungkinan besar bangsawan Jawa ini dipengaruhi oleh para ulama Sufi
          dan orang-orang suci atau wali yang mengaku memiliki kekuatan
          supranatural (karomah).
        </p>
      </div>
    </section>
  );
}

export default kedatanganIslam;
