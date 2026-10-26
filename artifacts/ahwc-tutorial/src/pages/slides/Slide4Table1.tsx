export default function Slide4Table1() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f0e8" }}>
      <div className="absolute top-0 left-0 w-full" style={{ height: "0.7vh", background: "linear-gradient(90deg, #1a472a, #c9a227, #1a472a)" }} />
      <div className="absolute top-0 left-0 h-full flex flex-col justify-center items-center" style={{ width: "10vw", background: "#1a472a" }}>
        <div style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}>
          <p className="font-body font-bold tracking-widest uppercase" style={{ color: "#c9a227", fontSize: "1.4vw" }}>चरण 02</p>
        </div>
        <div className="mt-[2vh]" style={{ width: "0.3vw", height: "12vh", background: "rgba(201,162,39,0.4)" }} />
        <p className="font-display font-bold" style={{ color: "rgba(255,255,255,0.12)", fontSize: "9vw", writingMode: "vertical-rl" }}>2</p>
      </div>

      <div className="absolute left-[12vw] top-[6vh] right-[4vw]">
        <p className="font-body font-semibold mb-[0.5vh]" style={{ color: "#c9a227", fontSize: "1.5vw", letterSpacing: "0.1em" }}>
          तालिका 1 — लक्ष्य एवं प्राप्ति
        </p>
        <h2 className="font-display font-bold tracking-tight" style={{ color: "#1a472a", fontSize: "3.5vw", lineHeight: "1.15" }}>
          10 कार्य संकेतकों में डेटा भरें
        </h2>
        <p className="font-body mt-[0.5vh]" style={{ color: "#6b6b6b", fontSize: "1.55vw" }}>
          प्रत्येक पंक्ति में केवल दो काम: लक्ष्य और प्राप्ति टाइप करें
        </p>

        <div className="mt-[2vh] flex gap-[2vw]">
          <div className="flex-1">
            <div className="rounded-xl overflow-hidden" style={{ border: "1.5px solid #1a472a" }}>
              <div style={{ background: "#1a472a", padding: "1.2vh 1.5vw" }}>
                <p className="font-body font-bold" style={{ color: "#c9a227", fontSize: "1.5vw" }}>
                  तालिका में क्या भरें — क्या स्वतः बनेगा
                </p>
              </div>
              <div style={{ background: "#fffdf7" }}>
                <div className="flex items-center gap-[1vw]" style={{ padding: "1.3vh 1.5vw", borderBottom: "1px solid rgba(26,71,42,0.12)" }}>
                  <div className="rounded flex items-center justify-center flex-shrink-0" style={{ width: "2.2vw", height: "2.2vw", background: "#2d6a4f" }}>
                    <span className="font-body font-bold" style={{ color: "#fff", fontSize: "1.2vw" }}>भरें</span>
                  </div>
                  <div>
                    <p className="font-body font-semibold" style={{ color: "#1a472a", fontSize: "1.5vw" }}>लक्ष्य (Target)</p>
                    <p className="font-body" style={{ color: "#6b6b6b", fontSize: "1.3vw" }}>उस माह का निर्धारित लक्ष्य संख्या</p>
                  </div>
                </div>
                <div className="flex items-center gap-[1vw]" style={{ padding: "1.3vh 1.5vw", borderBottom: "1px solid rgba(26,71,42,0.12)" }}>
                  <div className="rounded flex items-center justify-center flex-shrink-0" style={{ width: "2.2vw", height: "2.2vw", background: "#2d6a4f" }}>
                    <span className="font-body font-bold" style={{ color: "#fff", fontSize: "1.2vw" }}>भरें</span>
                  </div>
                  <div>
                    <p className="font-body font-semibold" style={{ color: "#1a472a", fontSize: "1.5vw" }}>प्राप्ति (Achievement)</p>
                    <p className="font-body" style={{ color: "#6b6b6b", fontSize: "1.3vw" }}>वास्तविक उपलब्धि का आंकड़ा</p>
                  </div>
                </div>
                <div className="flex items-center gap-[1vw]" style={{ padding: "1.3vh 1.5vw", borderBottom: "1px solid rgba(26,71,42,0.12)" }}>
                  <div className="rounded flex items-center justify-center flex-shrink-0" style={{ width: "2.2vw", height: "2.2vw", background: "#c9a227" }}>
                    <span className="font-body font-bold" style={{ color: "#1a472a", fontSize: "1.1vw" }}>auto</span>
                  </div>
                  <div>
                    <p className="font-body font-semibold" style={{ color: "#1a472a", fontSize: "1.5vw" }}>प्रतिशत — स्वतः</p>
                    <p className="font-body" style={{ color: "#6b6b6b", fontSize: "1.3vw" }}>(प्राप्ति ÷ लक्ष्य) × 100</p>
                  </div>
                </div>
                <div className="flex items-center gap-[1vw]" style={{ padding: "1.3vh 1.5vw" }}>
                  <div className="rounded flex items-center justify-center flex-shrink-0" style={{ width: "2.2vw", height: "2.2vw", background: "#c9a227" }}>
                    <span className="font-body font-bold" style={{ color: "#1a472a", fontSize: "1.1vw" }}>auto</span>
                  </div>
                  <div>
                    <p className="font-body font-semibold" style={{ color: "#1a472a", fontSize: "1.5vw" }}>राशि (₹) — स्वतः</p>
                    <p className="font-body" style={{ color: "#6b6b6b", fontSize: "1.3vw" }}>नीचे दिए नियम के अनुसार</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: "34vw" }}>
            <div className="rounded-xl" style={{ background: "#1a472a", padding: "2vh 1.8vw" }}>
              <p className="font-body font-bold mb-[1.5vh]" style={{ color: "#c9a227", fontSize: "1.55vw" }}>
                राशि (₹) स्वतः कैसे बनती है?
              </p>
              <div className="flex flex-col gap-[1vh]">
                <div className="rounded-lg flex items-center justify-between" style={{ background: "rgba(255,80,80,0.15)", border: "1px solid rgba(255,80,80,0.3)", padding: "1vh 1.2vw" }}>
                  <p className="font-body font-semibold" style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.5vw" }}>31% से कम</p>
                  <p className="font-body font-bold" style={{ color: "#ff8a80", fontSize: "1.6vw" }}>₹ 0</p>
                </div>
                <div className="rounded-lg flex items-center justify-between" style={{ background: "rgba(0,0,0,0.2)", padding: "1vh 1.2vw" }}>
                  <p className="font-body font-semibold" style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.5vw" }}>31% – 50%</p>
                  <p className="font-body font-bold" style={{ color: "#c9a227", fontSize: "1.6vw" }}>% × 500</p>
                </div>
                <div className="rounded-lg flex items-center justify-between" style={{ background: "rgba(0,0,0,0.2)", padding: "1vh 1.2vw" }}>
                  <p className="font-body font-semibold" style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.5vw" }}>51% – 70%</p>
                  <p className="font-body font-bold" style={{ color: "#81d4fa", fontSize: "1.6vw" }}>₹ 375</p>
                </div>
                <div className="rounded-lg flex items-center justify-between" style={{ background: "rgba(105,240,174,0.12)", border: "1px solid rgba(105,240,174,0.3)", padding: "1vh 1.2vw" }}>
                  <p className="font-body font-semibold" style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.5vw" }}>71% – 100%</p>
                  <p className="font-body font-bold" style={{ color: "#69f0ae", fontSize: "1.6vw" }}>₹ 500</p>
                </div>
              </div>
              <div className="mt-[1.5vh]" style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "1.2vh" }}>
                <p className="font-body" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.35vw" }}>
                  अधिकतम कुल राशि: ₹5,000 (10 पंक्तियां × ₹500)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[2vh] rounded-lg flex items-center gap-[1.5vw]" style={{ background: "#c9a227", padding: "1.3vh 2vw" }}>
          <div style={{ width: "0.4vw", height: "3.5vh", background: "#1a472a", borderRadius: "2px", flexShrink: 0 }} />
          <p className="font-body font-semibold" style={{ color: "#1a472a", fontSize: "1.5vw" }}>
            याद रखें: कार्य के नाम पहले से लिखे हैं — आपको केवल दो स्तंभ भरने हैं: लक्ष्य और प्राप्ति
          </p>
        </div>
      </div>

      <div className="absolute bottom-[3vh] right-[4vw]">
        <p className="font-body" style={{ color: "#1a472a", fontSize: "1.4vw", opacity: 0.4 }}>उपयोग गाइड — स्लाइड 4/7</p>
      </div>
    </div>
  );
}
