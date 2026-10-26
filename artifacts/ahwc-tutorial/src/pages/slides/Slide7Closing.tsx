export default function Slide7Closing() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#1a472a" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg, #0f2d1a 0%, #1a472a 45%, #2d6a4f 100%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(201,162,39,0.1) 0%, transparent 55%)" }} />
      <div className="absolute top-0 left-0 w-full" style={{ height: "0.7vh", background: "linear-gradient(90deg, #c9a227, #f0d060, #c9a227)" }} />

      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "0 6vw" }}>
        <p className="font-body font-semibold mb-[1.5vh]" style={{ color: "#c9a227", fontSize: "1.5vw", letterSpacing: "0.15em" }}>
          सामान्य प्रश्न (FAQ)
        </p>
        <h2 className="font-display font-bold tracking-tight mb-[3vh]" style={{ color: "#ffffff", fontSize: "3.5vw", lineHeight: "1.2" }}>
          अक्सर पूछे जाने वाले प्रश्न
        </h2>

        <div className="grid gap-[1.8vw]" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="rounded-xl" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", padding: "2vh 1.8vw" }}>
            <p className="font-body font-bold mb-[1vh]" style={{ color: "#c9a227", fontSize: "1.5vw" }}>
              प्रश्न: गणना गलत हो तो?
            </p>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.45vw", lineHeight: 1.55 }}>
              लक्ष्य और प्राप्ति के आंकड़े दोबारा जांचें। सही संख्या डालते ही % और राशि स्वतः सुधर जाएगी।
            </p>
          </div>

          <div className="rounded-xl" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", padding: "2vh 1.8vw" }}>
            <p className="font-body font-bold mb-[1vh]" style={{ color: "#c9a227", fontSize: "1.5vw" }}>
              प्रश्न: PDF नहीं बनी?
            </p>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.45vw", lineHeight: 1.55 }}>
              ब्राउज़र का पॉप-अप ब्लॉकर बंद करें। Chrome या Edge ब्राउज़र उपयोग करें।
            </p>
          </div>

          <div className="rounded-xl" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", padding: "2vh 1.8vw" }}>
            <p className="font-body font-bold mb-[1vh]" style={{ color: "#c9a227", fontSize: "1.5vw" }}>
              प्रश्न: क्या डेटा सेव होता है?
            </p>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.45vw", lineHeight: 1.55 }}>
              नहीं — ऐप बंद करने पर डेटा हट जाएगा। PDF डाउनलोड करना न भूलें।
            </p>
          </div>

          <div className="rounded-xl" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", padding: "2vh 1.8vw" }}>
            <p className="font-body font-bold mb-[1vh]" style={{ color: "#c9a227", fontSize: "1.5vw" }}>
              प्रश्न: मोबाइल पर काम करेगा?
            </p>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.45vw", lineHeight: 1.55 }}>
              हां — मोबाइल, टैबलेट और कंप्यूटर तीनों पर चलेगा। PDF के लिए कंप्यूटर बेहतर है।
            </p>
          </div>
        </div>

        <div className="mt-[3vh] flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "2.5vh" }}>
          <div>
            <p className="font-display font-bold" style={{ color: "#c9a227", fontSize: "2.2vw" }}>
              अब आप तैयार हैं!
            </p>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.5vw" }}>
              डेटा भरें → PDF डाउनलोड करें → जमा करें
            </p>
          </div>
          <div className="flex gap-[3vw]">
            <div className="text-center">
              <p className="font-display font-bold" style={{ color: "#c9a227", fontSize: "2.8vw" }}>4</p>
              <p className="font-body" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.35vw" }}>आसान चरण</p>
            </div>
            <div style={{ width: "1px", background: "rgba(255,255,255,0.2)" }} />
            <div className="text-center">
              <p className="font-display font-bold" style={{ color: "#c9a227", fontSize: "2.8vw" }}>₹5000</p>
              <p className="font-body" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.35vw" }}>अधिकतम भुगतान</p>
            </div>
            <div style={{ width: "1px", background: "rgba(255,255,255,0.2)" }} />
            <div className="text-center">
              <p className="font-display font-bold" style={{ color: "#c9a227", fontSize: "2.8vw" }}>1</p>
              <p className="font-body" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.35vw" }}>A4 PDF</p>
            </div>
          </div>
        </div>

        <div className="mt-[2vh] rounded-lg text-center" style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.3)", padding: "1.2vh 0" }}>
          <p className="font-body" style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.4vw" }}>
            निर्मित: Peeyush Singh, Assistant Accounts Officer II
          </p>
        </div>
      </div>
    </div>
  );
}
