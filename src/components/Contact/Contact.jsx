import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const isValidEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  };

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  return (
    <section name="kontak" className="h-screen w-full mt-20">
      <div className="container w-full h-full flex items-center flex-col">
        <h1 className="text-center text-4xl text-primary font-bold tracking-wider my-16 md:text-5xl">
          Hubungi Kami
        </h1>

        <form
          method="POST"
          action={import.meta.env.VITE_ENDPOINT}
          className="flex flex-col space-y-4 w-full text-white px-3 md:w-2/3 md:px-0"
        >
          <input
            type="email"
            className="p-4 rounded-md outline-none bg-neutral"
            name="email"
            placeholder="Masukkan email anda"
            required
            value={message}
            onChange={handleChange}
          />

          {error && (
            <p className="text-primary text-sm px-4 md:text-md">{error}</p>
          )}

          <input
            type="text"
            className="p-4 rounded-md outline-none bg-neutral"
            name="name"
            placeholder="Masukkan nama anda"
            minLength={3}
            required
          />
          <textarea
            rows="10"
            className="rounded-md outline-none p-4 bg-neutral"
            name="message"
            placeholder="Masukkan pesan anda"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary w-1/2 mx-auto">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
