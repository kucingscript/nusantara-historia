function Contact() {
  return (
    <section name="kontak" className="h-screen w-full mt-20">
      <div className="container w-full h-full flex items-center flex-col">
        <h1
          className="text-center text-4xl text-primary font-bold tracking-wider my-16 md:text-5xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hubungi Kami
        </h1>

        <form
          method="POST"
          action={import.meta.env.VITE_ENDPOINT}
          className="flex flex-col space-y-4 w-full text-white px-3 md:w-1/2 md:px-0"
        >
          <input
            type="email"
            className="p-4 rounded-md outline-none bg-neutral"
            name="email"
            placeholder="Masukkan email anda"
            required
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <input
            type="text"
            className="p-4 rounded-md outline-none bg-neutral"
            name="name"
            placeholder="Masukkan nama anda"
            required
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <textarea
            rows="10"
            className="rounded-md outline-none p-4 bg-neutral"
            name="message"
            placeholder="Masukkan pesan anda"
            required
            data-aos="fade-up"
            data-aos-delay="400"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary w-1/2 mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
