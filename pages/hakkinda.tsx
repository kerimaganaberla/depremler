import BackButton from "@/components/back-button";
import EarthSocial from "@/components/earth-social";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

export default function Hakkinda() {
  return (
    <div>
      {" "}
      <BackButton />
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        HAKKINDA
      </h2>
      <hr />
      <Carousel>
        <div>
          <Image width={1000} height={100} src="/maps/tr.png" alt={"tr"} />
          <p className="legend"></p>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
            className="max-w-100 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"
          >
            Türkiye
          </span>
        </div>
        <div>
          <Image
            width={1000}
            height={100}
            src="/maps/marmara.png"
            alt={"marmara"}
          />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
            className="max-w-100 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"
          >
            Marmara Bölgesi
          </span>
          <p className="legend"></p>
        </div>
        <div>
          <Image width={1000} height={100} src="/maps/ege.png" alt={"ege"} />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
            className="max-w-100 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"
          >
            Ege Bölgesi
          </span>
          <p className="legend"></p>
        </div>
        <div>
          <Image
            width={1000}
            height={100}
            src="/maps/akdeniz.png"
            alt={"akdeniz"}
          />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
            className="max-w-100 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"
          >
            Akdeniz Bölgesi
          </span>
          <p className="legend"></p>
        </div>
        <div>
          <Image
            width={1000}
            height={100}
            src="/maps/icanadolu.png"
            alt={"icanadolu"}
          />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
            className="max-w-100 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"
          >
            İç Anadolu Bölgesi
          </span>
          <p className="legend"></p>
        </div>
        <div>
          <Image
            width={1000}
            height={100}
            src="/maps/gdanadolu.png"
            alt={"gdanadolu"}
          />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
            className="max-w-100 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"
          >
            Güneydoğu Bölgesi
          </span>
          <p className="legend"></p>
        </div>
        <div>
          <Image
            width={1000}
            height={100}
            src="/maps/doanadolu.png"
            alt={"doanadolu"}
          />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
            className="max-w-100 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"
          >
            Doğu Anadolu Bölgesi
          </span>
          <p className="legend"></p>
        </div>
        <div>
          <Image
            width={1000}
            height={100}
            src="/maps/karadeniz.png"
            alt={"karadeniz"}
          />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
            className="max-w-100 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"
          >
            Karadeniz Bölgesi
          </span>
          <p className="legend"></p>
        </div>
      </Carousel>
      <div style={{ marginTop: "20px" }}>
        {" "}
        Yukarıda bulunan ekran görüntüleri Google Earth sitesinden alınmış ve{" "}
        minimum ve maksimum enlem ve boylam değerlerini belirlemek için
        kullanılmıştır. Yapılan bölgesel filtrelemeler, bu kordinatlara göre,{" "}
        <a
          href="https://deprem.afad.gov.tr/event-service"
          rel="noopener"
          style={{ color: "red" }}
        >
          AFAD tarafından sunulan servisler
        </a>{" "}
        aracılığı ile depremleri filtrelemektedir. <br />
        <br /> Projenin iskeleti Next.js ile{" "}
        <a
          href="https://github.com/kerimmkirac"
          rel="noopener"
          style={{ color: "red" }}
        >
          kerimmkirac tarafından yazılmıştır
        </a>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <EarthSocial
          github="https://github.com/kerimmkirac"
          instagram="https://instagram.com/kerimmkirac"
        />
      </div>
    </div>
  );
}
