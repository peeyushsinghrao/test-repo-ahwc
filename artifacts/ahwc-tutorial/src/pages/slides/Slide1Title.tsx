export default function Slide1Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#1a472a" }}>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0f2d1a 0%, #1a472a 40%, #2d6a4f 100%)" }}
      />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 75% 40%, rgba(201,162,39,0.1) 0%, transparent 60%)" }} />

      <div className="absolute top-0 left-0 w-full" style={{ height: "0.7vh", background: "linear-gradient(90deg, #c9a227, #f0d060, #c9a227)" }} />
      <div className="absolute bottom-0 left-0 w-full" style={{ height: "0.5vh", background: "rgba(201,162,39,0.3)" }} />

      <div className="absolute left-0 top-0 h-full" style={{ width: "1vw", background: "linear-gradient(180deg, #c9a227, rgba(201,162,39,0.2))" }} />

      <div className="absolute left-[5vw] top-[8vh]">
        <div className="flex items-center gap-[1.5vw]">
          <div style={{ width: "0.5vw", height: "6vh", background: "#c9a227", borderRadius: "2px" }} />
          <div>
            <p className="font-body font-semibold" style={{ color: "#c9a227", fontSize: "1.5vw", letterSpacing: "0.12em" }}>
              भारत सरकार — स्वास्थ्य एवं परिवार कल्याण मंत्रालय
            </p>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.3vw" }}>
              आयुष्मान आरोग्य मंदिर (AHWC) — प्रदर्शन आधारित प्रोत्साहन
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-[5vw] top-0 h-full flex flex-col justify-center" style={{ maxWidth: "58vw" }}>
        <div
          className="inline-flex items-center gap-[0.8vw] mb-[3vh]"
          style={{ background: "rgba(201,162,39,0.15)", border: "1px solid rgba(201,162,39,0.4)", padding: "0.8vh 1.5vw", borderRadius: "4px", width: "fit-content" }}
        >
          <div style={{ width: "0.5vw", height: "0.5vw", background: "#c9a227", borderRadius: "50%" }} />
          <p className="font-body font-semibold" style={{ color: "#c9a227", fontSize: "1.4vw" }}>संपूर्ण उपयोगकर्ता गाइड</p>
        </div>
        <h1 className="font-display font-bold tracking-tight" style={{ color: "#ffffff", fontSize: "5.5vw", lineHeight: "1.15" }}>
          PLP रिपोर्ट ऐप
        </h1>
        <h1 className="font-display font-bold tracking-tight" style={{ color: "#c9a227", fontSize: "5.5vw", lineHeight: "1.15" }}>
          कैसे उपयोग करें?
        </h1>
        <p className="font-body mt-[2.5vh]" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.7vw", lineHeight: 1.6 }}>
          मासिक प्रदर्शन डेटा भरें — स्वतः गणना पाएं
        </p>
        <p className="font-body" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.7vw" }}>
          एक क्लिक में A4 PDF रिपोर्ट तैयार करें
        </p>

        <div className="flex gap-[3vw] mt-[4vh]" style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "2.5vh" }}>
          <div className="text-center">
            <p className="font-display font-bold" style={{ color: "#c9a227", fontSize: "2.8vw" }}>4</p>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.4vw" }}>आसान चरण</p>
          </div>
          <div style={{ width: "1px", background: "rgba(255,255,255,0.2)" }} />
          <div className="text-center">
            <p className="font-display font-bold" style={{ color: "#c9a227", fontSize: "2.8vw" }}>10</p>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.4vw" }}>कार्य संकेतक</p>
          </div>
          <div style={{ width: "1px", background: "rgba(255,255,255,0.2)" }} />
          <div className="text-center">
            <p className="font-display font-bold" style={{ color: "#c9a227", fontSize: "2.8vw" }}>0</p>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.4vw" }}>मैनुअल गणना</p>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full flex flex-col justify-center items-center" style={{ width: "30vw", background: "rgba(0,0,0,0.2)" }}>
        <div
          className="rounded-full flex items-center justify-center"
          style={{ width: "13vw", height: "13vw", background: "rgba(201,162,39,0.12)", border: "2px solid rgba(201,162,39,0.5)" }}
        >
          <div
            className="rounded-full flex items-center justify-center"
            style={{ width: "9vw", height: "9vw", background: "rgba(201,162,39,0.2)", border: "1.5px solid #c9a227" }}
          >
            <span className="font-display font-bold" style={{ color: "#c9a227", fontSize: "2.2vw" }}>AHWC</span>
          </div>
        </div>
        <p className="font-body font-semibold mt-[2.5vh] text-center px-[3vw]" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.4vw" }}>
          आयुष्मान आरोग्य मंदिर
        </p>
        <p className="font-body text-center px-[3vw] mt-[0.5vh]" style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.3vw" }}>
          मासिक प्रदर्शन आधारित प्रोत्साहन रिपोर्ट
        </p>
      </div>
    </div>
  );
}
