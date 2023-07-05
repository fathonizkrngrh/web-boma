import React from "react";

const Footer = () => {
  return (
    <div>
      <section className=" bg-white flex max-w-7xl mx-auto lg:py-24 py-16  lg:px-12 px-8">
        <div className="lg:w-1/2 w-full">
          <p className="font-medium lg:text-xl text-sm">
            Sekretariat BOMA UPI Cibiru
          </p>
          <p className="font-normal lg:text-lg text-xs lg:mt-8 mt-2">
            Jl. Pendidikan No.15, Cibiru Wetan, Kec. Cileunyi, Kabupaten
            Bandung, Jawa Barat 40625
          </p>
          <div>
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.0734823403341!2d107.7241094446815!3d-6.939759344169605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c3dcef2f5921%3A0x1c8b03d9762da90c!2sGedung%20Pusat%20Kegiatan%20Mahasiswa%20(PKM)%20UPI%20Kampus%20Cibiru!5e0!3m2!1sen!2sid!4v1688538684443!5m2!1sen!2sid"
              className="border-none w-full lg:h-60 mt-8"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
