export default function Slide3BasicInfo() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f0e8" }}>
      <div className="absolute top-0 left-0 w-full" style={{ height: "0.7vh", background: "linear-gradient(90deg, #1a472a, #c9a227, #1a472a)" }} />
      <div className="absolute top-0 left-0 h-full flex flex-col justify-center items-center" style={{ width: "10vw", background: "#1a472a" }}>
        <div style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}>
          <p className="font-body font-bold tracking-widest uppercase" style={{ color: "#c9a227", fontSize: "1.4vw" }}>चरण 01</p>
        </div>
        <div className="mt-[2vh]" style={{ width: "0.3vw", height: "12vh", background: "rgba(201,162,39,0.4)" }} />
        <p className="font-display font-bold" style={{ color: "rgba(255,255,255,0.12)", fontSize: "9vw", writingMode: "vertical-rl" }}>1</p>
      </div>

      <div className="absolute left-[12vw] top-[7vh] right-[4vw]">
        <p className="font-body font-semibold mb-[0.5vh]" style={{ color: "#c9a227", fontSize: "1.5vw", letterSpacing: "0.1em" }}>
          सबसे पहले
        </p>
        <h2 className="font-display font-bold tracking-tight" style={{ color: "#1a472a", fontSize: "3.8vw", lineHeight: "1.15" }}>
          मूल जानकारी भरें
        </h2>
        <p className="font-body mt-[0.8vh]" style={{ color: "#6b6b6b", fontSize: "1.6vw" }}>
          फॉर्म खुलते ही सबसे ऊपर ये 4 खाने दिखेंगे — पहले इन्हें भरें
        </p>

        <div className="mt-[2.5vh] grid gap-[1.8vh]" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="rounded-xl" style={{ background: "#1a472a", padding: "2vh 1.8vw" }}>
            <div className="flex items-center gap-[0.8vw] mb-[1vh]">
              <div className="rounded-md flex items-center justify-center flex-shrink-0" style={{ width: "2.8vw", height: "2.8vw", background: "#c9a227" }}>
                <span className="font-display font-bold" style={{ color: "#1a472a", fontSize: "1.4vw" }}>A</span>
              </div>
              <p className="font-body font-bold" style={{ color: "#c9a227", fontSize: "1.6vw" }}>AHWC का नाम</p>
            </div>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.5vw", lineHeight: 1.5 }}>
              अपने स्वास्थ्य केंद्र का पूरा नाम हिंदी में लिखें
            </p>
            <div className="mt-[1.2vh] rounded-md" style={{ background: "rgba(0,0,0,0.25)", padding: "0.8vh 1vw" }}>
              <p className="font-body italic" style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.4vw" }}>
                जैसे: AHWC खजूरी बाजार
              </p>
            </div>
          </div>

          <div className="rounded-xl" style={{ background: "#1a472a", padding: "2vh 1.8vw" }}>
            <div className="flex items-center gap-[0.8vw] mb-[1vh]">
              <div className="rounded-md flex items-center justify-center flex-shrink-0" style={{ width: "2.8vw", height: "2.8vw", background: "#c9a227" }}>
                <span className="font-display font-bold" style={{ color: "#1a472a", fontSize: "1.4vw" }}>B</span>
              </div>
              <p className="font-body font-bold" style={{ color: "#c9a227", fontSize: "1.6vw" }}>जिला</p>
            </div>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.5vw", lineHeight: 1.5 }}>
              अपने जिले का नाम हिंदी में टाइप करें
            </p>
            <div className="mt-[1.2vh] rounded-md" style={{ background: "rgba(0,0,0,0.25)", padding: "0.8vh 1vw" }}>
              <p className="font-body italic" style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.4vw" }}>
                जैसे: रायपुर
              </p>
            </div>
          </div>

          <div className="rounded-xl" style={{ background: "rgba(26,71,42,0.1)", border: "2px solid #1a472a", padding: "2vh 1.8vw" }}>
            <div className="flex items-center gap-[0.8vw] mb-[1vh]">
              <div className="rounded-md flex items-center justify-center flex-shrink-0" style={{ width: "2.8vw", height: "2.8vw", background: "#2d6a4f" }}>
                <span className="font-display font-bold" style={{ color: "#ffffff", fontSize: "1.4vw" }}>C</span>
              </div>
              <p className="font-body font-bold" style={{ color: "#1a472a", fontSize: "1.6vw" }}>माह</p>
            </div>
            <p className="font-body" style={{ color: "#4a4a4a", fontSize: "1.5vw", lineHeight: 1.5 }}>
              ड्रॉपडाउन से उस माह को चुनें जिसकी रिपोर्ट बनानी है
            </p>
            <p className="font-body mt-[0.8vh] font-semibold" style={{ color: "#c9a227", fontSize: "1.4vw" }}>
              जनवरी — दिसंबर में से चुनें
            </p>
          </div>

          <div className="rounded-xl" style={{ background: "rgba(26,71,42,0.1)", border: "2px solid #1a472a", padding: "2vh 1.8vw" }}>
            <div className="flex items-center gap-[0.8vw] mb-[1vh]">
              <div className="rounded-md flex items-center justify-center flex-shrink-0" style={{ width: "2.8vw", height: "2.8vw", background: "#2d6a4f" }}>
                <span className="font-display font-bold" style={{ color: "#ffffff", fontSize: "1.4vw" }}>D</span>
              </div>
              <p className="font-body font-bold" style={{ color: "#1a472a", fontSize: "1.6vw" }}>वर्ष</p>
            </div>
            <p className="font-body" style={{ color: "#4a4a4a", fontSize: "1.5vw", lineHeight: 1.5 }}>
              ड्रॉपडाउन से सही वर्ष चुनें
            </p>
            <p className="font-body mt-[0.8vh] font-semibold" style={{ color: "#c9a227", fontSize: "1.4vw" }}>
              2024 — 2029 में से चुनें
            </p>
          </div>
        </div>

        <div className="mt-[2vh] rounded-lg flex items-center gap-[1.5vw]" style={{ background: "#c9a227", padding: "1.4vh 2vw" }}>
          <div style={{ width: "0.4vw", height: "3.5vh", background: "#1a472a", borderRadius: "2px", flexShrink: 0 }} />
          <p className="font-body font-semibold" style={{ color: "#1a472a", fontSize: "1.5vw" }}>
            सुझाव: AHWC नाम और जिला हिंदी में भरें — PDF में वही छपेगा जो आप यहां लिखेंगे
          </p>
        </div>
      </div>

      <div className="absolute bottom-[3vh] right-[4vw]">
        <p className="font-body" style={{ color: "#1a472a", fontSize: "1.4vw", opacity: 0.4 }}>उपयोग गाइड — स्लाइड 3/7</p>
      </div>
    </div>
  );
}
