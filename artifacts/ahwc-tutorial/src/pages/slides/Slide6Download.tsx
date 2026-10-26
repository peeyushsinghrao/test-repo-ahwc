export default function Slide6Download() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f0e8" }}>
      <div className="absolute top-0 left-0 w-full" style={{ height: "0.7vh", background: "linear-gradient(90deg, #1a472a, #c9a227, #1a472a)" }} />
      <div className="absolute top-0 left-0 h-full flex flex-col justify-center items-center" style={{ width: "10vw", background: "#1a472a" }}>
        <div style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}>
          <p className="font-body font-bold tracking-widest uppercase" style={{ color: "#c9a227", fontSize: "1.4vw" }}>चरण 04</p>
        </div>
        <div className="mt-[2vh]" style={{ width: "0.3vw", height: "12vh", background: "rgba(201,162,39,0.4)" }} />
        <p className="font-display font-bold" style={{ color: "rgba(255,255,255,0.12)", fontSize: "9vw", writingMode: "vertical-rl" }}>4</p>
      </div>

      <div className="absolute left-[12vw] top-[6vh] right-[4vw]">
        <p className="font-body font-semibold mb-[0.5vh]" style={{ color: "#c9a227", fontSize: "1.5vw", letterSpacing: "0.1em" }}>
          अंतिम चरण
        </p>
        <h2 className="font-display font-bold tracking-tight" style={{ color: "#1a472a", fontSize: "3.8vw", lineHeight: "1.15" }}>
          PDF डाउनलोड करें
        </h2>
        <p className="font-body mt-[0.5vh]" style={{ color: "#6b6b6b", fontSize: "1.55vw" }}>
          सारा डेटा भरने के बाद — एक क्लिक में A4 रिपोर्ट तैयार
        </p>

        <div className="mt-[2.5vh] flex gap-[2.5vw]">
          <div className="flex-1 flex flex-col gap-[1.5vh]">
            {[
              { n: "1", title: "सभी डेटा जांचें", sub: "तालिका 1 और तालिका 2 का डेटा सही हो", gold: false },
              { n: "2", title: '"Generate PDF" बटन दबाएं', sub: 'फ़ॉर्म के नीचे लाल रंग का बटन है', gold: false },
              { n: "3", title: "PDF स्वतः डाउनलोड होगी", sub: "फ़ाइल: AHWC_Report_[माह]_[वर्ष].pdf", gold: false },
              { n: "4", title: "प्रिंट करें और जमा करें", sub: "A4 आकार में प्रिंट-रेडी — सीधे कार्यालय में दें", gold: true },
            ].map(({ n, title, sub, gold }) => (
              <div
                key={n}
                className="rounded-xl flex items-center gap-[1.5vw]"
                style={{ background: gold ? "#c9a227" : "#1a472a", padding: "1.7vh 1.8vw" }}
              >
                <div
                  className="rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ width: "3.6vw", height: "3.6vw", background: gold ? "#1a472a" : "#c9a227" }}
                >
                  <span className="font-display font-bold" style={{ color: gold ? "#c9a227" : "#1a472a", fontSize: "1.6vw" }}>{n}</span>
                </div>
                <div>
                  <p className="font-body font-bold" style={{ color: gold ? "#1a472a" : "#ffffff", fontSize: "1.5vw" }}>{title}</p>
                  <p className="font-body" style={{ color: gold ? "rgba(26,71,42,0.75)" : "rgba(255,255,255,0.6)", fontSize: "1.35vw" }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ width: "33vw" }}>
            <div className="rounded-xl h-full" style={{ background: "rgba(26,71,42,0.08)", border: "2px solid #1a472a", padding: "2.5vh 2vw" }}>
              <p className="font-body font-bold mb-[1.8vh]" style={{ color: "#1a472a", fontSize: "1.6vw" }}>
                PDF में क्या-क्या होगा
              </p>
              <div className="flex flex-col gap-[1.3vh]">
                {[
                  "रिपोर्ट का शीर्षक",
                  "AHWC नाम, जिला, माह, वर्ष",
                  "तालिका 1 — सभी 10 संकेतक",
                  "प्रदर्शन प्रतिशत एवं राशि",
                  "तालिका 2 — कर्मचारी भुगतान",
                  "प्रमाणीकरण एवं हस्ताक्षर खाना",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-[1vw]">
                    <div style={{ width: "0.55vw", height: "0.55vw", background: "#c9a227", borderRadius: "50%", flexShrink: 0 }} />
                    <p className="font-body" style={{ color: "#1a472a", fontSize: "1.45vw" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-[2vh] rounded-lg text-center" style={{ background: "#1a472a", padding: "1.3vh 0" }}>
                <p className="font-body font-bold" style={{ color: "#c9a227", fontSize: "1.55vw" }}>
                  एक A4 पृष्ठ — सीधे प्रिंट करें
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[3vh] right-[4vw]">
        <p className="font-body" style={{ color: "#1a472a", fontSize: "1.4vw", opacity: 0.4 }}>उपयोग गाइड — स्लाइड 6/7</p>
      </div>
    </div>
  );
}
