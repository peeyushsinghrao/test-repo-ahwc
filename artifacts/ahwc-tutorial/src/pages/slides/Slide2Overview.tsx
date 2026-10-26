export default function Slide2Overview() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f0e8" }}>
      <div className="absolute top-0 left-0 w-full" style={{ height: "0.7vh", background: "linear-gradient(90deg, #1a472a, #c9a227, #1a472a)" }} />
      <div className="absolute left-0 top-0 h-full" style={{ width: "1vw", background: "#1a472a" }} />

      <div className="absolute left-[4vw] top-[7vh] right-[4vw]">
        <p className="font-body font-semibold mb-[0.6vh]" style={{ color: "#c9a227", fontSize: "1.5vw", letterSpacing: "0.1em" }}>
          ऐप का परिचय
        </p>
        <h2 className="font-display font-bold tracking-tight" style={{ color: "#1a472a", fontSize: "3.8vw", lineHeight: "1.15" }}>
          यह ऐप क्या करता है?
        </h2>
        <p className="font-body mt-[0.8vh] mb-[3vh]" style={{ color: "#6b6b6b", fontSize: "1.6vw" }}>
          पूरी रिपोर्ट बनाने की प्रक्रिया — एक नज़र में
        </p>

        <div className="flex items-stretch gap-0" style={{ height: "44vh" }}>
          <div className="flex-1 rounded-xl flex flex-col" style={{ background: "#1a472a", padding: "2.5vh 1.8vw" }}>
            <div className="flex items-center gap-[1vw] mb-[1.5vh]">
              <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: "4vw", height: "4vw", background: "#c9a227" }}>
                <span className="font-display font-bold" style={{ color: "#1a472a", fontSize: "1.8vw" }}>1</span>
              </div>
              <p className="font-body font-bold" style={{ color: "#ffffff", fontSize: "1.7vw" }}>मूल जानकारी</p>
            </div>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.45vw", lineHeight: 1.55 }}>
              AHWC का नाम, जिला, माह और वर्ष भरें
            </p>
            <div className="mt-auto pt-[1.5vh]" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="font-body" style={{ color: "#c9a227", fontSize: "1.35vw" }}>→ 4 खाने भरें</p>
            </div>
          </div>

          <div className="flex items-center justify-center" style={{ width: "3vw" }}>
            <div style={{ width: "2vw", height: "0.3vh", background: "#c9a227" }} />
            <div style={{ width: 0, height: 0, borderTop: "0.7vh solid transparent", borderBottom: "0.7vh solid transparent", borderLeft: "1vw solid #c9a227", marginLeft: "-0.1vw" }} />
          </div>

          <div className="flex-1 rounded-xl flex flex-col" style={{ background: "#1a472a", padding: "2.5vh 1.8vw" }}>
            <div className="flex items-center gap-[1vw] mb-[1.5vh]">
              <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: "4vw", height: "4vw", background: "#c9a227" }}>
                <span className="font-display font-bold" style={{ color: "#1a472a", fontSize: "1.8vw" }}>2</span>
              </div>
              <p className="font-body font-bold" style={{ color: "#ffffff", fontSize: "1.7vw" }}>तालिका 1 भरें</p>
            </div>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.45vw", lineHeight: 1.55 }}>
              10 कार्य संकेतकों में लक्ष्य और प्राप्ति डालें
            </p>
            <div className="mt-auto pt-[1.5vh]" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="font-body" style={{ color: "#c9a227", fontSize: "1.35vw" }}>→ % और राशि स्वतः बनेगी</p>
            </div>
          </div>

          <div className="flex items-center justify-center" style={{ width: "3vw" }}>
            <div style={{ width: "2vw", height: "0.3vh", background: "#c9a227" }} />
            <div style={{ width: 0, height: 0, borderTop: "0.7vh solid transparent", borderBottom: "0.7vh solid transparent", borderLeft: "1vw solid #c9a227", marginLeft: "-0.1vw" }} />
          </div>

          <div className="flex-1 rounded-xl flex flex-col" style={{ background: "#1a472a", padding: "2.5vh 1.8vw" }}>
            <div className="flex items-center gap-[1vw] mb-[1.5vh]">
              <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: "4vw", height: "4vw", background: "#c9a227" }}>
                <span className="font-display font-bold" style={{ color: "#1a472a", fontSize: "1.8vw" }}>3</span>
              </div>
              <p className="font-body font-bold" style={{ color: "#ffffff", fontSize: "1.7vw" }}>तालिका 2 भरें</p>
            </div>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.45vw", lineHeight: 1.55 }}>
              कर्मचारी का नाम, पद और बैंक विवरण दर्ज करें
            </p>
            <div className="mt-auto pt-[1.5vh]" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="font-body" style={{ color: "#c9a227", fontSize: "1.35vw" }}>→ भुगतान राशि स्वतः बनेगी</p>
            </div>
          </div>

          <div className="flex items-center justify-center" style={{ width: "3vw" }}>
            <div style={{ width: "2vw", height: "0.3vh", background: "#c9a227" }} />
            <div style={{ width: 0, height: 0, borderTop: "0.7vh solid transparent", borderBottom: "0.7vh solid transparent", borderLeft: "1vw solid #c9a227", marginLeft: "-0.1vw" }} />
          </div>

          <div className="flex-1 rounded-xl flex flex-col" style={{ background: "#c9a227", padding: "2.5vh 1.8vw" }}>
            <div className="flex items-center gap-[1vw] mb-[1.5vh]">
              <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: "4vw", height: "4vw", background: "#1a472a" }}>
                <span className="font-display font-bold" style={{ color: "#c9a227", fontSize: "1.8vw" }}>4</span>
              </div>
              <p className="font-body font-bold" style={{ color: "#1a472a", fontSize: "1.7vw" }}>PDF डाउनलोड</p>
            </div>
            <p className="font-body" style={{ color: "rgba(26,71,42,0.8)", fontSize: "1.45vw", lineHeight: 1.55 }}>
              एक क्लिक में A4 PDF रिपोर्ट तैयार
            </p>
            <div className="mt-auto pt-[1.5vh]" style={{ borderTop: "1px solid rgba(26,71,42,0.25)" }}>
              <p className="font-body font-bold" style={{ color: "#1a472a", fontSize: "1.35vw" }}>→ प्रिंट या जमा करें</p>
            </div>
          </div>
        </div>

        <div className="mt-[2.5vh] rounded-xl flex items-center gap-[1.5vw]" style={{ background: "rgba(26,71,42,0.08)", border: "1.5px solid #1a472a", padding: "1.5vh 2vw" }}>
          <div style={{ width: "0.4vw", height: "4vh", background: "#c9a227", borderRadius: "2px", flexShrink: 0 }} />
          <p className="font-body font-semibold" style={{ color: "#1a472a", fontSize: "1.55vw" }}>
            महत्वपूर्ण: सभी गणनाएं स्वतः होती हैं — आपको केवल लक्ष्य और प्राप्ति का आंकड़ा भरना है
          </p>
        </div>
      </div>

      <div className="absolute bottom-[3vh] right-[4vw]">
        <p className="font-body" style={{ color: "#1a472a", fontSize: "1.4vw", opacity: 0.4 }}>
          उपयोग गाइड — स्लाइड 2/7
        </p>
      </div>
    </div>
  );
}
