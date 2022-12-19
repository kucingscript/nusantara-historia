import Swal from "sweetalert2";
import AiditImg from "../../../assets/peristiwa/aiditMeme.webp";

function Aidit() {
  Swal.fire("Tebunuhnya D.N. Aidit", "Misteri Dibalik Eksekusi Aidit", "info");

  return (
    <section className="w-full h-screen">
      <div className="container p-6">
        <h1 className="text-3xl md:text-5xl text-primary font-bold tracking-wider pb-4">
          Terbunuhnya D.N. Aidit
        </h1>
        <p className="text-white text-justify text-[14px] md:text-[16px]">
          D.N Aidit merupakan salah seorang menteri dalam kabinet dwikora dan
          sekaligus ketua central comitte partai komunis indonesia atau dikenal
          PKI. <br />
          <br />
          Aidit dan PKI dianggap bertanggung jawab atas Gerakan 30 September
          atau gestapu, lalu bagaimana Aidit di eksekusi? Saya admin Yamashiro
          akan menjelaskan secara singkat saja bagaimana Aidit di eksekusi pada
          tanggal 22 november 1965 pukul 23.00 wib.
          <br />
          <br />
          Aidit diciduk di tempat persembunyian nya dikediaman Kasim alias
          Harjomartono di kampung sambeng, Solo, Jawa tengah. Sebelum dirumah
          kasim, Aidit sempat bersembunyi ditempat lain sebelum saat dia diciduk
          para tentara. Dirumah kasim, Aidit dijemput paksa oleh para tentara
          bersenjata lengkap.
          <br />
          <br />
          Saat posisi berada di rumah Kasim sebenarnya Aidit mendapat peluang
          untuk melarikan diri, dikarenakan pada waktu itu penggrebekan pertama
          ia tidak menemukan tempat persembunyian Aidit bahkan setelah rumah
          diobrak abrik dan hasilnya nihil. Tentara sempat berpikir bahwa Aidit
          telah melarikan diri, akan tetapi para intelijen bersi keras dia masih
          berada dan bersembunyi di dalam rumah Kasim, akhirnya Kasim diangkut
          lalu diinterogasi. Diduga tidak tahan dengan siksaan dan takut dengan
          ancaman para tentara akhirnya kasim membuka mulut dan menunjukan
          lokasi dimana Aidit bersembunyi.
          <br />
          <br /> Dari markas, tentara kembali membawa kasim di kediamannya, dan
          tentara langsung melakukan pengepungan. Dihadapan moncong senjata,
          Kasim pun menunjukan persembunyian Aidit yaitu di sebuah lemari, lalu
          Kasim menggeser lemari di salah satu ruangan rumah kediamannya.
          <br />
          <br />
          Dari balik lemari itu terdapat pintu rahasia. Didalam Aidit berada dan
          bersembunyi dari tentara, pemimpin penangkapan pada saat itu, letnan
          ming priyatno pun bersiap-siap mengacungkan senjata ke arah pintu
          rahasia tersebut. Keluarlah !!! atau saya bakar rumah ini katanya
          dengan nada menggertak. Merasa Aidit sudah terdesak dan sudah dikepung
          bersuaralah Aidit di balik tempat bersembunyiannya lalu ia keluar dari
          balik lemari. Aidit yang sudah keluar langsung balik menggertak letnan
          ming priyatno. <br />
          <br />
          Saya menteri koordinator (Menko) utusan paduka yang mulia presiden
          soekarno saudara mau apa? balasnya menggertak balik. Mendapat gertakan
          balik dari Aidit letnan ming priyatno sempat kecut dan menjawab pelan,
          saya hanya menjalankan tugas untuk menangkap. <br />
          <br />
          Aidit akhirnya dibawa di lojo gandrung, Solo, Jawa tengah. Sempat
          seorang mayor mengoper alih penangkapan Aidit, namun permintaan
          tersebut sempat ditolak oleh komandan brigade mayor Jenderal (Mayjen)
          Yasir Hadibroto. <br />
          <br />
          Sesuai permintaan Soeharto, mayjen Yasir Hadibroto memerintahkan anak
          buahnya untuk mencari sebuah sumur tua yang kering. Setelah sumur yang
          dicari telah di temukan, Aidit dibawah regu tembak ke tempat itu.
          <br />
          <br />
          Sumur tua tersebut terletak ditengah kebun pisang yang sangat lebat
          jauh dari pemukiman penduduk. Aidit sudah mengetahui bahwa dirinya
          akan ditembak mati, namun ia masih berusaha untuk menggertak. Tahu
          kamu artinya apa seorang menko? Seorang wakil ketua MPR? Apa ini
          sumur? Untuk apa? Katanya kepada mayjen Yasir Hadibroto. Namun
          gertakan Aidit kali ini tidak berpengaruh.
          <br />
          <br /> Dengan santai mayjen Yasir Hadibroto menjawab dan mengatakan
          bahwa hari itu Aidit akan dihukum mati.
          <br />
          <br /> Merasa ajal nya sudah dekat, Aidit minta waktu untuk berpidato.
          Setelah 10 menit berpidato dan diakhiri dengan teriakan hidup PKI,
          Aidit pun ditembak.
          <br />
          <br /> Demikian akhir perjalanan salah seorang komunis di Indonesia.
          Setelah tumbang berlumuran darah, jasad Aidit pun dimasukkan ke sumur
          tua di tengah kebun pisang lalu para tentara menindih nya dengan
          sejumlah daun pisang dan kayu kering serta tanah.
        </p>

        <a href={AiditImg}>
          <img src={AiditImg} alt="Terbunuhnya D.N. Aidit" className="pt-6" />
        </a>
      </div>
    </section>
  );
}

export default Aidit;
