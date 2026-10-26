export default function Slide5Table2() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#1a472a" }}>
      <div className="absolute top-0 left-0 w-full" style={{ height: "0.7vh", background: "linear-gradient(90deg, #c9a227, #f0d060, #c9a227)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 15% 60%, rgba(45,106,79,0.5) 0%, transparent 55%)" }} />

      <div className="absolute left-[5vw] top-[5vh] right-[5vw]">
        <p className="font-body font-semibold mb-[0.4vh]" style={{ color: "#c9a227", fontSize: "1.5vw", letterSpacing: "0.1em" }}>
          चरण 03 — तालिका 2
        </p>
        <h2 className="font-display font-bold tracking-tight" style={{ color: "#ffffff", fontSize: "3.5vw", lineHeight: "1.2" }}>
          कर्मचारी भुगतान विवरण भरें
        </h2>
        <p className="font-body mt-[0.4vh]" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.55vw" }}>
          प्रत्येक कर्मचारी की एक पंक्ति — नाम, पद और बैंक विवरण भरें
        </p>

        <div className="mt-[2vh] flex gap-[2vw]">
          <div className="flex-1 flex flex-col gap-[1.2vh]">
            <div className="rounded-xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", padding: "1.5vh 1.8vw" }}>
              <p className="font-body font-bold mb-[1vh]" style={{ color: "#c9a227", fontSize: "1.5vw" }}>
                प्रत्येक कर्मचारी के लिए क्या भरें
              </p>
              <div className="flex flex-col gap-[0.8vh]">
                {[
                  { n: "1", label: "कर्मचारी का नाम", sub: "हिंदी में पूरा नाम लिखें" },
                  { n: "2", label: "पद चुनें", sub: "ड्रॉपडाउन से: AMO / ANM / नर्स / ASHA" },
                  { n: "3", label: "बैंक खाता संख्या", sub: "कर्मचारी का बैंक खाता नंबर" },
                  { n: "4", label: "बैंक का नाम", sub: "जैसे: State Bank of India" },
                  { n: "5", label: "IFSC कोड", sub: "बैंक शाखा का IFSC कोड" },
                  { n: "6", label: "मोबाइल नंबर", sub: "10 अंकों का मोबाइल नंबर" },
                ].map(({ n, label, sub }) => (
                  <div key={n} className="flex items-center gap-[1vw]">
                    <div className="rounded-md flex items-center justify-center flex-shrink-0" style={{ width: "2.2vw", height: "2.2vw", background: "#c9a227" }}>
                      <span className="font-body font-bold" style={{ color: "#1a472a", fontSize: "1.1vw" }}>{n}</span>
                    </div>
                    <div>
                      <p className="font-body font-semibold" style={{ color: "#ffffff", fontSize: "1.4vw" }}>{label}</p>
                      <p className="font-body" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.25vw" }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl" style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.4)", padding: "1.3vh 1.8vw" }}>
              <p className="font-body font-bold mb-[0.5vh]" style={{ color: "#c9a227", fontSize: "1.45vw" }}>भुगतान राशि — स्वतः बनेगी</p>
              <p className="font-body" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.45vw", lineHeight: 1.5 }}>
                भुगतान = (प्रदर्शन % ÷ 100) × आधार राशि
              </p>
              <p className="font-body mt-[0.5vh]" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.3vw" }}>
                यह गणना तालिका 1 के आधार पर स्वतः होती है
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[1.2vh]" style={{ width: "44vw" }}>
            <div className="grid gap-[1.2vw]" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {[
                { role: "AMO", full: "आयुष चिकित्सा अधिकारी", amt: "₹ 5,000", highlight: true },
                { role: "ANM", full: "सहायक नर्स मिडवाइफ", amt: "₹ 2,000", highlight: false },
                { role: "नर्स / कम्पाउंडर", full: "नर्स / कम्पाउंडर", amt: "₹ 2,000", highlight: false },
                { role: "ASHA", full: "ASHA कार्यकर्ता", amt: "₹ 1,000", highlight: false },
              ].map(({ role, full, amt, highlight }) => (
                <div key={role} className="rounded-xl" style={{ background: "rgba(255,255,255,0.08)", border: `1.5px solid ${highlight ? "#c9a227" : "rgba(255,255,255,0.15)"}`, padding: "1.8vh 1.5vw" }}>
                  <div className="rounded-lg mb-[1vh] flex items-center justify-center" style={{ background: highlight ? "#c9a227" : "rgba(255,255,255,0.15)", padding: "0.6vh 0" }}>
                    <p className="font-display font-bold" style={{ color: highlight ? "#1a472a" : "#ffffff", fontSize: "1.5vw" }}>{role}</p>
                  </div>
                  <p className="font-body font-semibold text-center" style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.3vw" }}>{full}</p>
                  <div className="mt-[1vh] rounded-lg text-center" style={{ background: "rgba(0,0,0,0.3)", padding: "0.7vh 0" }}>
                    <p className="font-body font-bold" style={{ color: "#c9a227", fontSize: "1.8vw" }}>{amt}</p>
                    <p className="font-body" style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.2vw" }}>आधार राशि</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", padding: "1.3vh 1.5vw" }}>
              <p className="font-body" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.35vw", lineHeight: 1.55 }}>
                <span style={{ color: "#c9a227", fontWeight: 700 }}>+ कर्मचारी जोड़ें</span> बटन से नई पंक्ति जोड़ें &nbsp;|&nbsp;
                <span style={{ color: "#c9a227", fontWeight: 700 }}>✕</span> बटन से पंक्ति हटाएं
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[3vh] right-[5vw]">
        <p className="font-body" style={{ color: "rgba(255,255,255,0.3)", fontSize: "1.4vw" }}>उपयोग गाइड — स्लाइड 5/7</p>
      </div>
    </div>
  );
}
