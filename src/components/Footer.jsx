import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="flex-col bg-white max-w-7xl  max-h-full mx-auto lg:pt-24 pt-16  lg:px-12 px-8">
        <div className="max-[960px]:flex-col flex w-full">
          <div className="lg:w-1/2 w-full flex-col">
            <p className="font-medium lg:text-xl text-sm lg:text-left text-center">
              Sekretariat BOMA UPI Cibiru
            </p>
            <p className="font-normal lg:text-lg text-xs lg:mt-4 mt-2 lg:text-left text-center">
              Jl. Pendidikan No.15, Cibiru Wetan, Kec. Cileunyi, Kabupaten
              Bandung, Jawa Barat 40625
            </p>
            <div>
              <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.0734823403341!2d107.7241094446815!3d-6.939759344169605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c3dcef2f5921%3A0x1c8b03d9762da90c!2sGedung%20Pusat%20Kegiatan%20Mahasiswa%20(PKM)%20UPI%20Kampus%20Cibiru!5e0!3m2!1sen!2sid!4v1688538684443!5m2!1sen!2sid"
                className="border-none md:w-3/4 lg:w-full w-full lg:h-60 mt-6 mx-auto"
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="lg:w-1/2  flex-col ">
            <div className="lg:mt-0  mt-10  lg:text-right text-center ">
              <p className="font-medium lg:text-xl text-sm t">Contact Person</p>
              <p className="text-lg mt-4">Email : bomaupicibiru@gmail.com</p>
              <p className="text-lg mt-2">Whatsapp : +62 85795701564</p>
              <p className="text-lg mt-2">Instagram : @bomaupicibiru</p>
            </div>
          </div>
        </div>
        <div className="w-full text-center lg:mt-12 mt-8 py-4">
          <p>©️ Copyright 2023 Departement Medinfo BOMA 2023</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
